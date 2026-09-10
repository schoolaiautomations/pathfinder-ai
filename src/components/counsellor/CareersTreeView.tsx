import React, { useState, useRef, useEffect, useMemo, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ZoomIn,
  ZoomOut,
  RotateCcw,
  Search,
  Filter,
  Sparkles,

  CheckCircle2,
  ChevronRight,
  ChevronDown,
  X,
  Printer,
  Info,
  Award,
  Briefcase,
  GraduationCap,
  ArrowRight,
  Crosshair,
  Compass,
} from "lucide-react";
import {
  TreeDiagramNode,
  MASTER_CAREER_TREE,
  findPathToNode,
  getAllCareerLeaves,
  findNodeById,
  MULTI_STREAM_CAREER_ROUTES,
} from "@/lib/tree-diagram-data";

interface LayoutNode {
  node: TreeDiagramNode;
  x: number;
  y: number;
  width: number;
  height: number;
  level: number;
  subtreeWidth: number;
  parentId?: string;
  children: LayoutNode[];
}

interface CareersTreeViewProps {
  onBack?: () => void;
  showBackToDashboard?: boolean;
}

const NODE_WIDTH = 230;
const NODE_HEIGHT = 88;
const HORIZONTAL_GAP = 36;
const VERTICAL_GAP = 72;

export const CareersTreeView: React.FC<CareersTreeViewProps> = ({
  onBack,
  showBackToDashboard = false,
}) => {
  const navigate = useNavigate();

  // Canvas Zoom State (scroll handles panning now)
  const [scale, setScale] = useState<number>(0.75);

  // Active highlighted pathway state
  const [selectedNodeId, setSelectedNodeId] = useState<string>("career-ias-officer");
  const [selectedRouteIndex, setSelectedRouteIndex] = useState<number>(0);
  const [activeStreamFilter, setActiveStreamFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const searchContainerRef = useRef<HTMLDivElement>(null);

  // Close search suggestions on click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(e.target as Node)) {
        setIsSearchOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Modal inspection state
  const [inspectNode, setInspectNode] = useState<TreeDiagramNode | null>(null);
  const [isRoadmapPopupOpen, setIsRoadmapPopupOpen] = useState<boolean>(false);

  // View mode: 'tree' (UML/hierarchy diagram matching user reference) vs 'list' (quick list)
  const [viewMode, setViewMode] = useState<"tree" | "list">("tree");

  const viewportRef = useRef<HTMLDivElement>(null);

  // Active multi-stream config for selected career
  const activeMultiStreamConfig = useMemo(() => {
    return MULTI_STREAM_CAREER_ROUTES[selectedNodeId] || null;
  }, [selectedNodeId]);

  const currentAlternateRoute = useMemo(() => {
    if (!activeMultiStreamConfig) return null;
    return activeMultiStreamConfig.routes[selectedRouteIndex] || activeMultiStreamConfig.routes[0];
  }, [activeMultiStreamConfig, selectedRouteIndex]);

  // Filter root tree according to stream filter
  const currentTree = useMemo<TreeDiagramNode>(() => {
    if (activeStreamFilter === "all") {
      return MASTER_CAREER_TREE;
    }
    const matchingStream = MASTER_CAREER_TREE.children?.find(
      (c) => c.category === activeStreamFilter
    );
    if (!matchingStream) return MASTER_CAREER_TREE;

    return {
      ...MASTER_CAREER_TREE,
      children: [matchingStream],
    };
  }, [activeStreamFilter]);

  // Compute Layout Tree (Tidy tree layout algorithm)
  const layoutData = useMemo(() => {
    // 1. First pass: compute subtree widths bottom-up
    function computeSubtreeWidth(node: TreeDiagramNode, level: number): LayoutNode {
      const childrenLayout = (node.children || []).map((c) =>
        computeSubtreeWidth(c, level + 1)
      );

      let subtreeWidth = NODE_WIDTH + HORIZONTAL_GAP;
      if (childrenLayout.length > 0) {
        const childrenTotalWidth = childrenLayout.reduce(
          (sum, c) => sum + c.subtreeWidth,
          0
        );
        subtreeWidth = Math.max(subtreeWidth, childrenTotalWidth);
      }

      return {
        node,
        x: 0,
        y: level * (NODE_HEIGHT + VERTICAL_GAP) + 60,
        width: NODE_WIDTH,
        height: NODE_HEIGHT,
        level,
        subtreeWidth,
        children: childrenLayout,
      };
    }

    // 2. Second pass: position nodes top-down
    function positionNodes(
      layoutNode: LayoutNode,
      startX: number,
      parentId?: string
    ) {
      layoutNode.parentId = parentId;

      if (layoutNode.children.length === 0) {
        layoutNode.x = startX + layoutNode.subtreeWidth / 2;
      } else {
        let currentX = startX;
        layoutNode.children.forEach((child) => {
          positionNodes(child, currentX, layoutNode.node.id);
          currentX += child.subtreeWidth;
        });

        // Center parent between first and last child
        const firstChild = layoutNode.children[0];
        const lastChild = layoutNode.children[layoutNode.children.length - 1];
        layoutNode.x = (firstChild.x + lastChild.x) / 2;
      }
    }

    const rootLayout = computeSubtreeWidth(currentTree, 0);
    positionNodes(rootLayout, 60);

    // 3. Flatten nodes and lines for fast rendering
    const allNodes: LayoutNode[] = [];
    const allLines: {
      id: string;
      parentId: string;
      childId: string;
      path: string;
      parent: LayoutNode;
      child: LayoutNode;
    }[] = [];

    let minX = Infinity;
    let maxX = -Infinity;
    let maxY = -Infinity;

    function traverse(lNode: LayoutNode) {
      allNodes.push(lNode);
      minX = Math.min(minX, lNode.x - NODE_WIDTH / 2);
      maxX = Math.max(maxX, lNode.x + NODE_WIDTH / 2);
      maxY = Math.max(maxY, lNode.y + NODE_HEIGHT);

      if (lNode.children.length > 0) {
        const parentBottomX = lNode.x;
        const parentBottomY = lNode.y + NODE_HEIGHT;
        const splitY = parentBottomY + VERTICAL_GAP / 2;

        lNode.children.forEach((child) => {
          const childTopX = child.x;
          const childTopY = child.y;

          // Orthogonal connector line: parent -> splitY -> childTopX -> childTopY
          const path = `M ${parentBottomX} ${parentBottomY} V ${splitY} H ${childTopX} V ${childTopY}`;

          allLines.push({
            id: `${lNode.node.id}->${child.node.id}`,
            parentId: lNode.node.id,
            childId: child.node.id,
            path,
            parent: lNode,
            child,
          });

          traverse(child);
        });
      }
    }

    traverse(rootLayout);

    return {
      rootLayout,
      allNodes,
      allLines,
      width: Math.max(maxX + 120, 1400),
      height: Math.max(maxY + 140, 800),
    };
  }, [currentTree]);

  // Compute active highlighted path IDs (supports multi-stream alternate routes)
  const activePathSet = useMemo(() => {
    if (!selectedNodeId) return new Set<string>();
    if (currentAlternateRoute) {
      return new Set(currentAlternateRoute.pathNodeIds);
    }
    const path = findPathToNode(MASTER_CAREER_TREE, selectedNodeId);
    return new Set(path || []);
  }, [selectedNodeId, currentAlternateRoute]);

  // Active path node sequence for breadcrumbs
  const activeBreadcrumbNodes = useMemo(() => {
    if (!selectedNodeId) return [];
    if (currentAlternateRoute) {
      return currentAlternateRoute.pathNodeIds
        .map((id) => findNodeById(MASTER_CAREER_TREE, id))
        .filter(Boolean) as TreeDiagramNode[];
    }
    const pathIds = findPathToNode(MASTER_CAREER_TREE, selectedNodeId);
    if (!pathIds) return [];
    return pathIds
      .map((id) => findNodeById(MASTER_CAREER_TREE, id))
      .filter(Boolean) as TreeDiagramNode[];
  }, [selectedNodeId, currentAlternateRoute]);

  // All career leaves for quick selection
  const allCareerLeaves = useMemo(() => {
    return getAllCareerLeaves(MASTER_CAREER_TREE);
  }, []);

  // Filtered leaves for search or selector
  const featuredCareerPills = useMemo(() => {
    const priorityIds = [
      "career-doctor-surgeon",
      "career-software-architect",
      "career-ias-officer",
      "career-ips-officer",
      "career-dsp-police",
      "career-police-sub-inspector",
      "career-police-constable",
      "career-high-school-teacher",
      "career-primary-teacher",
      "career-college-professor",
      "career-pet-sports-coach",
      "career-chartered-accountant",
      "career-company-secretary",
      "career-bank-manager",
      "career-investment-banker",
      "career-management-consultant",
      "career-corporate-hr-lead",
      "career-civil-engineer",
      "career-mechanical-engineer",
      "career-electrical-engineer",
      "career-chemical-engineer",
      "career-aerospace-engineer",
      "career-chip-designer",
      "career-cyber-security",
      "career-space-scientist",
      "career-merchant-navy-captain",
      "career-civil-judge",
      "career-corporate-lawyer",
      "career-commercial-pilot",
      "career-income-tax-inspector",
      "career-paramilitary-officer",
      "career-hotel-general-manager",
      "career-railway-loco-pilot",
      "career-govt-contractor",
      "career-govt-doctor",
      "career-dentist-orthodontist",
      "career-veterinary-doctor",
      "career-nursing-officer",
      "career-drug-inspector",
      "career-physiotherapist",
      "career-agri-officer",
    ];
    return priorityIds
      .map((id) => allCareerLeaves.find((c) => c.id === id))
      .filter(Boolean) as TreeDiagramNode[];
  }, [allCareerLeaves]);

  // Search match count
  const matchingLeaves = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const q = searchQuery.toLowerCase().trim();
    return allCareerLeaves.filter(
      (c) =>
        c.title.toLowerCase().includes(q) ||
        (c.subtitle && c.subtitle.toLowerCase().includes(q)) ||
        (c.description && c.description.toLowerCase().includes(q)) ||
        (c.exams && c.exams.some((e) => e.toLowerCase().includes(q)))
    );
  }, [allCareerLeaves, searchQuery]);

  // Keep a ref to the latest scale for synchronous calculation in event listeners
  const scaleRef = useRef<number>(scale);
  useEffect(() => {
    scaleRef.current = scale;
  }, [scale]);

  // Scroll to center on a specific node
  const centerOnNode = useCallback(
    (targetId: string) => {
      setSelectedNodeId(targetId);
      const targetLayout = layoutData.allNodes.find((n) => n.node.id === targetId);
      if (targetLayout && viewportRef.current) {
        const vp = viewportRef.current;
        const currentScale = scaleRef.current;
        const vpWidth = vp.clientWidth;
        const vpHeight = vp.clientHeight;

        const scrollLeft = targetLayout.x * currentScale - vpWidth / 2;
        const scrollTop = targetLayout.y * currentScale - vpHeight / 2;

        vp.scrollTo({
          left: Math.max(scrollLeft, 0),
          top: Math.max(scrollTop, 0),
          behavior: "smooth",
        });
      }
    },
    [layoutData]
  );

  // Auto-center on mount or on stream change
  useEffect(() => {
    if (selectedNodeId) {
      const timer = setTimeout(() => {
        centerOnNode(selectedNodeId);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [activeStreamFilter]);

  // Anchor-preserving zoom: keeps the focal point (cursor or viewport center) pinned in place
  const zoomAtPoint = useCallback((newScaleRaw: number, focalPoint?: { x: number; y: number }) => {
    const vp = viewportRef.current;
    if (!vp) {
      setScale(newScaleRaw);
      return;
    }

    const currentScale = scaleRef.current;
    const clampedNewScale = Math.min(Math.max(newScaleRaw, 0.25), 1.6);
    if (Math.abs(clampedNewScale - currentScale) < 0.0005) return;

    // Viewport dimensions
    const vpWidth = vp.clientWidth;
    const vpHeight = vp.clientHeight;

    // Focal point coordinates relative to viewport top-left
    const fx = focalPoint ? focalPoint.x : vpWidth / 2;
    const fy = focalPoint ? focalPoint.y : vpHeight / 2;

    // Coordinates on unscaled content space
    const contentX = (vp.scrollLeft + fx) / currentScale;
    const contentY = (vp.scrollTop + fy) / currentScale;

    // Target scroll position after applying new scale
    const targetScrollLeft = contentX * clampedNewScale - fx;
    const targetScrollTop = contentY * clampedNewScale - fy;

    scaleRef.current = clampedNewScale;
    setScale(clampedNewScale);

    // Apply scroll immediately and ensure alignment on next frame
    vp.scrollLeft = Math.max(0, targetScrollLeft);
    vp.scrollTop = Math.max(0, targetScrollTop);

    requestAnimationFrame(() => {
      if (vp) {
        vp.scrollLeft = Math.max(0, targetScrollLeft);
        vp.scrollTop = Math.max(0, targetScrollTop);
      }
    });
  }, []);

  // Mousepad / Trackpad pinch-to-zoom support (Ctrl + wheel or trackpad pinch gesture)
  useEffect(() => {
    const vp = viewportRef.current;
    if (!vp) return;

    const handleWheelZoom = (e: WheelEvent) => {
      // Trackpad pinch in browsers sends ctrlKey: true
      if (e.ctrlKey || e.metaKey) {
        e.preventDefault();
        const rect = vp.getBoundingClientRect();
        const focalX = e.clientX - rect.left;
        const focalY = e.clientY - rect.top;

        // Smooth exponential scale delta based on wheel movement
        const zoomFactor = Math.exp(-e.deltaY * 0.006);
        zoomAtPoint(scaleRef.current * zoomFactor, { x: focalX, y: focalY });
      }
    };

    vp.addEventListener("wheel", handleWheelZoom, { passive: false });
    return () => {
      vp.removeEventListener("wheel", handleWheelZoom);
    };
  }, [zoomAtPoint]);

  // Touch handlers for mobile / tablet pinch-to-zoom
  const touchDistanceRef = useRef<number | null>(null);
  const touchCenterRef = useRef<{ x: number; y: number } | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 2) {
      const dist = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
      touchDistanceRef.current = dist;
      if (viewportRef.current) {
        const rect = viewportRef.current.getBoundingClientRect();
        touchCenterRef.current = {
          x: (e.touches[0].clientX + e.touches[1].clientX) / 2 - rect.left,
          y: (e.touches[0].clientY + e.touches[1].clientY) / 2 - rect.top,
        };
      }
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length === 2 && touchDistanceRef.current !== null && touchCenterRef.current) {
      const dist = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
      const ratio = dist / touchDistanceRef.current;
      zoomAtPoint(scaleRef.current * ratio, touchCenterRef.current);
      touchDistanceRef.current = dist;
    }
  };

  const handleTouchEnd = () => {
    touchDistanceRef.current = null;
    touchCenterRef.current = null;
  };

  // Zoom helpers
  const zoomIn = () => zoomAtPoint(scaleRef.current * 1.25);
  const zoomOut = () => zoomAtPoint(scaleRef.current / 1.25);
  const resetZoom = () => {
    zoomAtPoint(0.75);
    if (selectedNodeId) {
      centerOnNode(selectedNodeId);
    }
  };
  const fitWidth = () => {
    if (viewportRef.current) {
      const vpWidth = viewportRef.current.clientWidth;
      const fitScale = Math.min(Math.max(vpWidth / layoutData.width, 0.25), 1.0);
      zoomAtPoint(fitScale);
    }
  };

  return (
    <div className="w-full flex flex-col font-sans text-stone-900 select-none bg-[#FAF8F5]">
      {/* ─── HEADER & CONTROLS TOOLBAR ────────────────────────────────────────── */}
      <div className="sticky top-0 z-30 bg-[#FAF8F5]/98 backdrop-blur-md border-b border-stone-200/80 px-4 sm:px-6 py-3 space-y-2.5">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3">
          {/* Title & Back Button */}
          <div className="flex items-center gap-3">
            {showBackToDashboard && (
              <button
                onClick={onBack}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-stone-200 bg-white hover:bg-stone-100 text-xs font-bold text-stone-800 transition-colors shadow-2xs cursor-pointer"
              >
                ← Back
              </button>
            )}
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-2xl bg-stone-900 text-[#FAF8F5] flex items-center justify-center shadow-xs">
                <Compass className="w-5 h-5 text-[#C9A97A]" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="text-base sm:text-lg font-black tracking-tight text-stone-900">
                    Master Career Guidance Tree
                  </h1>
                  <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full bg-blue-100 text-blue-900 border border-blue-200">
                    Interactive Tree Flowchart
                  </span>
                </div>
                <p className="text-[11px] text-stone-500 font-medium">
                  Click any career at the bottom (e.g. Doctor, Software Architect) to highlight its entire step-by-step pathway from school.
                </p>
              </div>
            </div>
          </div>

          {/* Search, Mode Toggle & Actions */}
          <div className="flex flex-wrap items-center gap-2">
            {/* Search Input with floating suggestions dropdown */}
            <div ref={searchContainerRef} className="relative min-w-[200px] sm:min-w-[260px]">
              <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
              <input
                type="text"
                placeholder="Search career, exam, course (e.g. Doctor, Pilot, NEET)..."
                value={searchQuery}
                onFocus={() => setIsSearchOpen(true)}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setIsSearchOpen(true);
                }}
                className="w-full pl-8 pr-7 py-1.5 text-xs font-medium rounded-xl border border-stone-200 bg-white focus:outline-none focus:ring-2 focus:ring-stone-900 text-stone-900 shadow-2xs"
              />
              {searchQuery && (
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setIsSearchOpen(false);
                  }}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-700 cursor-pointer"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}

              {/* Floating suggestions dropdown */}
              {isSearchOpen && searchQuery.trim().length > 0 && (
                <div className="absolute top-full left-0 mt-1.5 w-full sm:w-[320px] max-h-72 overflow-y-auto bg-white rounded-2xl shadow-xl border border-stone-200 z-50 p-1.5 space-y-1 animate-in fade-in duration-150">
                  <div className="px-2.5 py-1 text-[10px] font-black uppercase tracking-wider text-stone-400 flex items-center justify-between border-b border-stone-100">
                    <span>Suggestions ({matchingLeaves.length})</span>
                    <span className="text-[9px] text-stone-400 font-normal">Click to select</span>
                  </div>

                  {matchingLeaves.length === 0 ? (
                    <div className="p-3 text-center text-xs text-stone-500 font-medium">
                      No careers matching "{searchQuery}"
                    </div>
                  ) : (
                    matchingLeaves.map((career) => (
                      <button
                        key={career.id}
                        type="button"
                        onClick={() => {
                          centerOnNode(career.id);
                          setSelectedNodeId(career.id);
                          setSelectedRouteIndex(0);
                          setIsSearchOpen(false);
                          setSearchQuery("");
                        }}
                        className="w-full text-left p-2 rounded-xl hover:bg-amber-50 text-stone-900 hover:text-amber-950 transition-colors cursor-pointer flex items-center justify-between gap-2 group border border-transparent hover:border-amber-200"
                      >
                        <div className="min-w-0">
                          <div className="text-xs font-bold truncate group-hover:text-amber-900">
                            {career.title}
                          </div>
                          {career.subtitle && (
                            <div className="text-[10px] text-stone-500 truncate">
                              {career.subtitle}
                            </div>
                          )}
                        </div>
                        <span className="text-[9px] font-extrabold uppercase px-1.5 py-0.5 rounded bg-stone-100 text-stone-700 shrink-0 group-hover:bg-amber-200 group-hover:text-amber-900">
                          Select →
                        </span>
                      </button>
                    ))
                  )}
                </div>
              )}
            </div>

            {/* Clear highlight button */}
            {selectedNodeId && (
              <button
                onClick={() => setSelectedNodeId("")}
                className="px-2.5 py-1.5 rounded-xl border border-stone-200 bg-white hover:bg-stone-100 text-stone-600 hover:text-stone-900 text-xs font-bold transition-all flex items-center gap-1 cursor-pointer shadow-2xs"
                title="Show full tree without highlight"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Reset Flow</span>
              </button>
            )}

            {/* Print Button */}
            <button
              onClick={() => window.print()}
              className="hidden sm:inline-flex items-center gap-1 px-3 py-1.5 rounded-xl border border-stone-200 bg-white hover:bg-stone-50 text-xs font-bold text-stone-700 shadow-2xs cursor-pointer transition-colors"
              title="Print chart"
            >
              <Printer className="w-3.5 h-3.5 text-stone-500" />
              <span>Print</span>
            </button>
          </div>
        </div>

        {/* ─── COMPACT TOOLBAR CONTROLS: STREAM & CAREER TARGET DROPDOWNS ────── */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-stone-200/60">
          <div className="flex flex-wrap items-center gap-3">
            {/* 1. Stream View Dropdown */}
            <div className="flex items-center gap-1.5 bg-white px-2.5 py-1 rounded-xl border border-stone-200 shadow-2xs">
              <span className="text-[10px] font-black uppercase tracking-wider text-stone-500 flex items-center gap-1 shrink-0">
                <Filter className="w-3.5 h-3.5 text-stone-600" />
                Stream:
              </span>
              <select
                value={activeStreamFilter}
                onChange={(e) => setActiveStreamFilter(e.target.value)}
                className="font-extrabold text-xs text-stone-900 bg-transparent focus:outline-none cursor-pointer pr-1"
              >
                <option value="all">🌐 All Streams (Master Tree)</option>
                <option value="pcm">💻 MPC (Maths, Physics, Chemistry)</option>
                <option value="pcb">🩺 BiPC (Biology, Physics, Chemistry)</option>
                <option value="commerce">📈 CEC (Civics, Economics, Commerce)</option>
                <option value="arts">⚖️ HEC (History, Economics, Civics)</option>
                <option value="ssc">🛠️ After 10th (Polytechnic & ITI)</option>
              </select>
            </div>

            {/* 2. Target Career Goal Dropdown */}
            <div className="flex items-center gap-1.5 bg-amber-50/60 px-2.5 py-1 rounded-xl border border-amber-200/80 shadow-2xs">
              <span className="text-[10px] font-black uppercase tracking-wider text-amber-900 flex items-center gap-1 shrink-0">
                <Crosshair className="w-3.5 h-3.5 text-amber-600" />
                Target Career:
              </span>
              <select
                value={selectedNodeId}
                onChange={(e) => {
                  const targetId = e.target.value;
                  if (targetId) {
                    setSelectedRouteIndex(0);
                    centerOnNode(targetId);
                  }
                }}
                className="font-extrabold text-xs text-amber-950 bg-transparent focus:outline-none cursor-pointer max-w-[240px] sm:max-w-[320px] truncate pr-1"
              >
                <option value="">🎯 Choose Career Destination...</option>
                {allCareerLeaves.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.title}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* 3. Open Roadmap Flow Popup Button */}
          <div className="flex items-center gap-2">
            {selectedNodeId && activeBreadcrumbNodes.length > 0 && (
              <button
                onClick={() => setIsRoadmapPopupOpen(true)}
                className="px-3.5 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 text-xs font-black shadow-xs transition-all flex items-center gap-1.5 cursor-pointer hover:scale-102"
                title="View step-by-step pathway in popup"
              >
                <Sparkles className="w-3.5 h-3.5 text-stone-950" />
                <span>Roadmap Steps ({activeBreadcrumbNodes.length})</span>
                {activeMultiStreamConfig && (
                  <span className="text-[9px] px-1.5 py-0.2 rounded-full bg-stone-950 text-amber-400 font-extrabold">
                    {activeMultiStreamConfig.routes.length} Streams
                  </span>
                )}
              </button>
            )}
          </div>
        </div>
      </div>

      {/* ─── SCROLLABLE CANVAS ──────────────────────────────────────────────── */}
      <div
        ref={viewportRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        className="relative w-full h-[calc(100vh-185px)] min-h-[600px] overflow-auto bg-[#F8F6F0] border-b border-stone-200"
        style={{
          backgroundImage:
            "radial-gradient(circle, #E3DCD0 1.2px, transparent 1.2px)",
          backgroundSize: "28px 28px",
        }}
      >
        {/* Floating Zoom Controls */}
        <div className="sticky top-4 right-4 z-20 flex justify-end px-4 pointer-events-none">
          <div className="flex items-center gap-1 bg-white/95 backdrop-blur-md p-1 rounded-2xl border border-stone-300/80 shadow-md pointer-events-auto">
            <button
              onClick={zoomIn}
              className="w-8 h-8 rounded-xl flex items-center justify-center hover:bg-stone-100 text-stone-700 transition-colors cursor-pointer"
              title="Zoom In"
            >
              <ZoomIn className="w-4 h-4" />
            </button>
            <div className="px-2 text-xs font-mono font-bold text-stone-800 min-w-[48px] text-center">
              {Math.round(scale * 100)}%
            </div>
            <button
              onClick={zoomOut}
              className="w-8 h-8 rounded-xl flex items-center justify-center hover:bg-stone-100 text-stone-700 transition-colors cursor-pointer"
              title="Zoom Out"
            >
              <ZoomOut className="w-4 h-4" />
            </button>
            <div className="h-4 w-px bg-stone-200 mx-0.5" />
            <button
              onClick={resetZoom}
              className="px-2.5 h-8 rounded-xl text-[11px] font-bold hover:bg-stone-100 text-stone-700 transition-colors cursor-pointer"
              title="Reset to 75%"
            >
              Reset
            </button>
            <button
              onClick={fitWidth}
              className="px-2.5 h-8 rounded-xl text-[11px] font-bold hover:bg-stone-100 text-stone-700 transition-colors cursor-pointer"
              title="Fit to Screen Width"
            >
              Fit
            </button>
          </div>
        </div>

        {/* Scaled Canvas Container */}
        <div
          style={{
            transform: `scale(${scale})`,
            transformOrigin: "0 0",
            width: `${layoutData.width}px`,
            height: `${layoutData.height}px`,
          }}
          className="relative"
        >
          {/* ─── SVG CONNECTOR LINES LAYER ─────────────────────────────────── */}
          <svg
            className="absolute inset-0 pointer-events-none"
            width={layoutData.width}
            height={layoutData.height}
            style={{ overflow: "visible" }}
          >
            <defs>
              {/* Glowing shadow filter for highlighted line */}
              <filter id="glow-highlight" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="0" stdDeviation="3" floodColor="#F59E0B" floodOpacity="0.8" />
              </filter>
            </defs>

            {layoutData.allLines.map((line) => {
              const isOnPath =
                activePathSet.has(line.parentId) && activePathSet.has(line.childId);
              const hasSelection = activePathSet.size > 0;

              return (
                <path
                  key={line.id}
                  d={line.path}
                  fill="none"
                  stroke={
                    isOnPath
                      ? "#D97706" // Vibrant amber for active line
                      : hasSelection
                      ? "#CBD5E1" // Dimmed when path selected
                      : "#64748B" // Crisp slate default
                  }
                  strokeWidth={isOnPath ? 4.5 : hasSelection ? 1.5 : 2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  opacity={isOnPath ? 1 : hasSelection ? 0.25 : 0.8}
                  filter={isOnPath ? "url(#glow-highlight)" : undefined}
                  style={{
                    transition: "stroke 0.2s, stroke-width 0.2s, opacity 0.2s",
                  }}
                />
              );
            })}
          </svg>

          {/* ─── HTML BOXES LAYER ─────────────────────────────────────────── */}
          {layoutData.allNodes.map((lNode) => {
            const { node, x, y, width, height, level } = lNode;
            const isOnPath = activePathSet.has(node.id);
            const isTargetLeaf = selectedNodeId === node.id;
            const hasSelection = activePathSet.size > 0;
            const isCareer = node.isCareerLeaf;

            // Step number along the path
            const pathIndex = activeBreadcrumbNodes.findIndex(
              (n) => n.id === node.id
            );

            // Styling based on level and category
            let boxBg = "#FFFFFF";
            let borderColor = "#CBD5E1";
            let textColor = "#0F172A";

            if (node.category === "root") {
              boxBg = "#1E293B";
              borderColor = "#0F172A";
              textColor = "#FFFFFF";
            } else if (level === 1) {
              // Stream level
              boxBg = node.color || "#0369A1";
              borderColor = node.color || "#0369A1";
              textColor = "#FFFFFF";
            } else if (isCareer) {
              // Ultimate Career Leaf
              boxBg = isTargetLeaf
                ? "#FEF3C7" // Warm gold target
                : "#FFFFFF";
              borderColor = isTargetLeaf
                ? "#D97706"
                : node.color || "#059669";
            }

            return (
              <div
                key={node.id}
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedNodeId(node.id);
                }}
                onDoubleClick={() => setInspectNode(node)}
                style={{
                  left: `${x - width / 2}px`,
                  top: `${y}px`,
                  width: `${width}px`,
                  height: `${height}px`,
                  backgroundColor:
                    level === 0 || level === 1 ? boxBg : isOnPath ? "#FFFBEB" : boxBg,
                  borderColor: isOnPath ? "#D97706" : borderColor,
                  opacity: isOnPath ? 1 : hasSelection ? 0.35 : 1,
                  transform: isOnPath ? "scale(1.04)" : "scale(1)",
                  zIndex: isTargetLeaf ? 25 : isOnPath ? 20 : 10,
                  boxShadow: isOnPath
                    ? "0 10px 25px -5px rgba(217, 119, 6, 0.4), 0 0 0 3px rgba(245, 158, 11, 0.6)"
                    : "0 2px 6px -1px rgba(0, 0, 0, 0.08)",
                }}
                className={`absolute rounded-2xl border-2 p-3 transition-all duration-200 cursor-pointer flex flex-col justify-between group overflow-hidden ${
                  isCareer ? "border-b-4" : ""
                }`}
              >
                {/* Milestone Badge on Active Path */}
                {isOnPath && pathIndex !== -1 && (
                  <div className="absolute -top-1 -right-1 bg-amber-500 text-stone-950 font-black text-[9px] px-2 py-0.5 rounded-bl-xl shadow-xs flex items-center gap-1">
                    {isTargetLeaf ? (
                      <span>🎯 GOAL</span>
                    ) : (
                      <span>STEP {pathIndex + 1}</span>
                    )}
                  </div>
                )}

                {/* Level / Category Tag */}
                <div className="flex items-center justify-between gap-1">
                  <div className="flex items-center gap-1">
                    {isCareer ? (
                      <>
                        <span className="text-[9px] font-black uppercase px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-900 border border-emerald-300">
                          ⭐ Career Destination
                        </span>
                        {MULTI_STREAM_CAREER_ROUTES[node.id] && (
                          <span className="text-[8px] font-bold uppercase px-1.5 py-0.5 rounded-md bg-violet-100 text-violet-800 border border-violet-300">
                            ✨ Multi-Stream
                          </span>
                        )}
                      </>
                    ) : level === 0 ? (
                      <span className="text-[9px] font-bold uppercase tracking-wider text-amber-300">
                        Foundation
                      </span>
                    ) : level === 1 ? (
                      <span className="text-[9px] font-bold uppercase tracking-wider text-white/90">
                        Intermediate Stream
                      </span>
                    ) : (
                      <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-stone-100 text-stone-700">
                        {node.duration || "Milestone"}
                      </span>
                    )}
                  </div>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setInspectNode(node);
                    }}
                    className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] transition-colors ${
                      level === 0 || level === 1
                        ? "text-white/70 hover:text-white hover:bg-white/20"
                        : "text-stone-400 hover:text-stone-700 hover:bg-stone-100"
                    }`}
                    title="View Information"
                  >
                    <Info className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Title */}
                <div>
                  <h4
                    className={`text-xs sm:text-[13px] font-extrabold leading-snug tracking-tight line-clamp-2 ${
                      level === 0 || level === 1
                        ? "text-white"
                        : isOnPath
                        ? "text-amber-950 font-black"
                        : "text-stone-900 group-hover:text-amber-700"
                    }`}
                  >
                    {node.title}
                  </h4>

                  {node.subtitle && (
                    <p
                      className={`text-[10px] mt-0.5 truncate leading-tight font-medium ${
                        level === 0 || level === 1
                          ? "text-white/80"
                          : "text-stone-500"
                      }`}
                    >
                      {node.subtitle}
                    </p>
                  )}
                </div>

                {/* Footer preview: exams or pathway action */}
                <div className="flex items-center justify-between text-[9px] font-bold pt-1 border-t border-stone-100/30">
                  {node.exams && node.exams.length > 0 ? (
                    <span className={level === 0 || level === 1 ? "text-amber-300" : "text-amber-800 font-semibold"}>
                      Exam: {node.exams[0]}
                    </span>
                  ) : (
                    <span
                      className={
                        level === 0 || level === 1
                          ? "text-white/60"
                          : "text-stone-400"
                      }
                    >
                      {isCareer ? "Click to view flow →" : "Click to explore →"}
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ─── NODE DETAIL INSPECTOR MODAL ─────────────────────────────────────── */}
      {inspectNode && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-stone-200 overflow-hidden flex flex-col max-h-[90vh]">
            {/* Header */}
            <div
              className="p-6 text-white relative overflow-hidden"
              style={{
                backgroundColor: inspectNode.color || "#1E293B",
              }}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/20 text-white">
                    <span>
                      {inspectNode.isCareerLeaf
                        ? "Career Destination"
                        : inspectNode.duration || "Pathway Stage"}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black leading-snug">
                    {inspectNode.title}
                  </h3>
                  {inspectNode.subtitle && (
                    <p className="text-xs font-medium text-white/85">
                      {inspectNode.subtitle}
                    </p>
                  )}
                </div>

                <button
                  onClick={() => setInspectNode(null)}
                  className="w-8 h-8 rounded-full bg-black/20 hover:bg-black/40 text-white flex items-center justify-center transition-colors cursor-pointer shrink-0"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 overflow-y-auto space-y-4 text-stone-900">
              {inspectNode.description && (
                <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-100 text-xs font-medium text-stone-700 leading-relaxed">
                  {inspectNode.description}
                </div>
              )}

              {inspectNode.exams && inspectNode.exams.length > 0 && (
                <div className="space-y-2">
                  <div className="flex items-center gap-1.5 text-xs font-black uppercase text-amber-800">
                    <Award className="w-4 h-4 text-amber-600" />
                    Key Entrance Exams &amp; Admissions
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {inspectNode.exams.map((exam, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-xl text-xs font-bold bg-amber-50 text-amber-900 border border-amber-200"
                      >
                        {exam}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Children next steps */}
              {inspectNode.children && inspectNode.children.length > 0 && (
                <div className="space-y-2 pt-2 border-t border-stone-100">
                  <div className="flex items-center gap-1.5 text-xs font-black uppercase text-stone-800">
                    <GraduationCap className="w-4 h-4 text-stone-600" />
                    Next Stage Pathways ({inspectNode.children.length})
                  </div>
                  <div className="space-y-1.5">
                    {inspectNode.children.map((child) => (
                      <div
                        key={child.id}
                        onClick={() => {
                          setInspectNode(child);
                          setSelectedNodeId(child.id);
                        }}
                        className="p-2.5 rounded-xl border border-stone-200 hover:border-amber-400 hover:bg-amber-50/50 cursor-pointer flex items-center justify-between group transition-colors"
                      >
                        <div>
                          <div className="text-xs font-bold text-stone-900 group-hover:text-amber-900">
                            {child.title}
                          </div>
                          {child.subtitle && (
                            <div className="text-[10px] text-stone-500">
                              {child.subtitle}
                            </div>
                          )}
                        </div>
                        <ChevronRight className="w-4 h-4 text-stone-400 group-hover:translate-x-1 transition-transform" />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Actions Footer */}
            <div className="p-4 bg-stone-50 border-t border-stone-200 flex items-center justify-between gap-3">
              <button
                onClick={() => {
                  setSelectedNodeId(inspectNode.id);
                  centerOnNode(inspectNode.id);
                  setInspectNode(null);
                }}
                className="px-4 py-2 rounded-xl text-xs font-bold bg-amber-500 text-stone-950 hover:bg-amber-400 transition-all shadow-xs cursor-pointer flex items-center gap-1.5"
              >
                <Crosshair className="w-3.5 h-3.5" />
                <span>Highlight This Flow</span>
              </button>

              <button
                onClick={() => {
                  setInspectNode(null);
                  navigate("/roadmap");
                }}
                className="px-4 py-2 rounded-xl text-xs font-bold bg-stone-900 text-white hover:bg-stone-800 transition-all shadow-xs cursor-pointer flex items-center gap-1.5"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#C9A97A]" />
                <span>Generate AI Roadmap</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ─── ACTIVE ROADMAP POPUP MODAL ───────────────────────────────────────── */}
      {isRoadmapPopupOpen && selectedNodeId && activeBreadcrumbNodes.length > 0 && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/70 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-stone-200 overflow-hidden flex flex-col max-h-[90vh]">
            {/* Modal Header */}
            <div className="p-6 bg-gradient-to-r from-stone-900 via-stone-800 to-stone-900 text-white relative">
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-1.5">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-amber-500 text-stone-950">
                    <Sparkles className="w-3 h-3" />
                    <span>Career Roadmap Flow</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black leading-snug">
                    {activeBreadcrumbNodes[activeBreadcrumbNodes.length - 1]?.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-white/80">
                    {activeBreadcrumbNodes[activeBreadcrumbNodes.length - 1]?.subtitle && (
                      <span>{activeBreadcrumbNodes[activeBreadcrumbNodes.length - 1].subtitle}</span>
                    )}
                  </div>
                </div>

                <button
                  onClick={() => setIsRoadmapPopupOpen(false)}
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer shrink-0"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Multi-Stream Route Switcher in Popup */}
              {activeMultiStreamConfig && (
                <div className="mt-4 pt-3 border-t border-white/15 space-y-2">
                  <div className="flex items-center justify-between text-[11px] font-bold text-amber-300">
                    <span>✨ Reachable via {activeMultiStreamConfig.routes.length} Alternate Streams:</span>
                    <span className="text-stone-300 text-[10px]">Click a route to switch path</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {activeMultiStreamConfig.routes.map((route, rIdx) => {
                      const isRouteActive = selectedRouteIndex === rIdx;
                      return (
                        <button
                          key={route.routeId || rIdx}
                          onClick={() => setSelectedRouteIndex(rIdx)}
                          className={`px-3 py-1 rounded-xl text-xs font-bold transition-all cursor-pointer border flex items-center gap-1.5 ${
                            isRouteActive
                              ? "bg-amber-500 text-stone-950 border-amber-400 shadow-sm ring-1 ring-amber-300 font-black scale-102"
                              : "bg-white/10 text-white/90 border-white/20 hover:bg-white/20"
                          }`}
                        >
                          <span>{route.streamName || `Route ${rIdx + 1}`}</span>
                          {route.streamBadge && (
                            <span className="text-[9px] px-1.5 py-0.2 rounded bg-black/20 text-white font-normal">
                              {route.streamBadge}
                            </span>
                          )}
                        </button>
                      );
                    })}
                  </div>
                  {currentAlternateRoute?.description && (
                    <p className="text-[11px] text-amber-200/90 italic bg-white/5 p-2 rounded-xl border border-white/10">
                      💡 {currentAlternateRoute.description}
                    </p>
                  )}
                </div>
              )}
            </div>

            {/* Step-by-Step Flow List */}
            <div className="p-6 overflow-y-auto space-y-3 bg-[#FAF8F5]">
              <div className="text-[11px] font-black uppercase tracking-wider text-stone-500 mb-2">
                Sequential Education & Career Milestones ({activeBreadcrumbNodes.length} Steps)
              </div>

              <div className="relative pl-6 space-y-4 before:absolute before:left-3 before:top-3 before:bottom-3 before:w-0.5 before:bg-amber-300">
                {activeBreadcrumbNodes.map((stepNode, idx) => {
                  const isLast = idx === activeBreadcrumbNodes.length - 1;
                  const isFirst = idx === 0;
                  return (
                    <div
                      key={stepNode.id}
                      className={`relative p-3.5 rounded-2xl border transition-all ${
                        isLast
                          ? "bg-amber-100/70 border-amber-300 shadow-sm"
                          : "bg-white border-stone-200 hover:border-stone-300"
                      }`}
                    >
                      {/* Step Dot */}
                      <div
                        className={`absolute -left-[27px] top-4 w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-black shadow-xs ${
                          isLast
                            ? "bg-amber-500 text-stone-950 ring-2 ring-amber-300"
                            : isFirst
                            ? "bg-stone-900 text-white"
                            : "bg-stone-700 text-white"
                        }`}
                      >
                        {isLast ? "🎯" : idx + 1}
                      </div>

                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-[9px] font-black uppercase px-2 py-0.5 rounded bg-stone-100 text-stone-700">
                              {isFirst
                                ? "School Foundation"
                                : isLast
                                ? "Ultimate Career Destination"
                                : stepNode.duration || "Milestone Stage"}
                            </span>
                            {stepNode.category && (
                              <span className="text-[9px] font-bold uppercase text-stone-400">
                                {stepNode.category.toUpperCase()}
                              </span>
                            )}
                          </div>

                          <h4 className="text-sm font-extrabold text-stone-900 mt-1">
                            {stepNode.title}
                          </h4>

                          {stepNode.subtitle && (
                            <p className="text-xs text-stone-500 mt-0.5 font-medium">
                              {stepNode.subtitle}
                            </p>
                          )}

                          {stepNode.exams && stepNode.exams.length > 0 && (
                            <div className="flex items-center gap-1.5 mt-2 flex-wrap">
                              <span className="text-[10px] font-bold text-amber-800">Exams:</span>
                              {stepNode.exams.map((ex, exIdx) => (
                                <span
                                  key={exIdx}
                                  className="text-[10px] font-bold px-1.5 py-0.2 rounded bg-amber-50 text-amber-900 border border-amber-200"
                                >
                                  {ex}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>

                        <button
                          onClick={() => {
                            centerOnNode(stepNode.id);
                            setIsRoadmapPopupOpen(false);
                          }}
                          className="self-start sm:self-center px-3 py-1.5 rounded-xl border border-stone-200 bg-white hover:bg-stone-100 text-xs font-bold text-stone-700 hover:text-stone-950 transition-colors cursor-pointer shrink-0 flex items-center gap-1"
                          title="Scroll to this node in chart"
                        >
                          <span>Locate in Tree</span>
                          <ArrowRight className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-white border-t border-stone-200 flex items-center justify-between gap-3">
              <button
                onClick={() => setIsRoadmapPopupOpen(false)}
                className="px-4 py-2 rounded-xl text-xs font-bold border border-stone-200 hover:bg-stone-100 text-stone-700 transition-colors cursor-pointer"
              >
                Close Popup
              </button>

              <button
                onClick={() => {
                  setIsRoadmapPopupOpen(false);
                  navigate("/roadmap");
                }}
                className="px-4 py-2 rounded-xl text-xs font-bold bg-stone-900 text-white hover:bg-stone-800 transition-all shadow-xs cursor-pointer flex items-center gap-1.5"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#C9A97A]" />
                <span>Generate AI Personalized Roadmap</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CareersTreeView;
