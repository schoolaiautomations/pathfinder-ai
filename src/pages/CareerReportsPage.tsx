import { useState, useEffect, useRef } from "react";
import { Link, useSearchParams } from "react-router-dom";
import {
  Sparkles,
  Search,
  ExternalLink,
  Printer,
  Compass,
  ArrowLeft,
  BookOpen,
  Filter,
  CheckCircle2,
  Share2,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { DEFAULT_CAREER_OPTIONS } from "@/lib/roadmap-data";
import wabiLogo from "@/lib/wabi_resolutions_logo.jpeg";

interface CareerItem {
  id: string;
  label: string;
  icon: string;
  file: string;
  category: string;
  streamBadge: string;
  description: string;
}

const CATEGORY_MAP: Record<string, { category: string; streamBadge: string; description: string }> = {
  swe: {
    category: "Science (MPC / Engineering)",
    streamBadge: "MPC / B.Tech",
    description: "Full roadmap for software development, coding languages, IIT/NIT entrance exams, tech stack specializations & salaries.",
  },
  engineer: {
    category: "Science (MPC / Engineering)",
    streamBadge: "MPC / Engineering",
    description: "Core engineering disciplines (Mechanical, Civil, Electrical), entrance gateways, lab skills, and public/private opportunities.",
  },
  architect: {
    category: "Science (MPC / Engineering)",
    streamBadge: "MPC / B.Arch",
    description: "Structural design, NATA & JEE Paper 2 requirements, portfolio preparation, and architecture firm progression.",
  },
  scientist: {
    category: "Science (MPC / Engineering)",
    streamBadge: "MPC / BiPC / Research",
    description: "Pure sciences, IISc/IISER/NISER pathways, CSIR/UGC-NET, laboratory fellowships, and global R&D institutions.",
  },
  doctor: {
    category: "Medical & Healthcare (BiPC)",
    streamBadge: "BiPC / MBBS",
    description: "NEET UG preparation, 5.5-year MBBS curriculum, residency, clinical PG specializations, and healthcare leadership.",
  },
  nurse: {
    category: "Medical & Healthcare (BiPC)",
    streamBadge: "BiPC / B.Sc Nursing",
    description: "Patient care diagnostics, hospital departments, government AIIMS exams, and international healthcare demand.",
  },
  pharmacist: {
    category: "Medical & Healthcare (BiPC)",
    streamBadge: "BiPC / MPC / B.Pharm",
    description: "Drug formulation, clinical pharmacology, pharmaceutical industry, quality control, and regulatory affairs.",
  },
  physiotherapy: {
    category: "Medical & Healthcare (BiPC)",
    streamBadge: "BiPC / BPT",
    description: "Musculoskeletal rehabilitation, sports team therapy, hospital clinics, and private physiotherapy practice.",
  },
  agri: {
    category: "Medical & Healthcare (BiPC)",
    streamBadge: "BiPC / B.Sc Agriculture",
    description: "Agronomy, farm tech, government agricultural officer exams, seed research, and rural banking specializations.",
  },
  ca: {
    category: "Commerce & Finance",
    streamBadge: "CEC / MEC / CA",
    description: "ICAI Foundation, Intermediate, Articleship, Auditing, Corporate Taxation, Financial Controller positions.",
  },
  bank: {
    category: "Commerce & Finance",
    streamBadge: "Any Degree / IBPS",
    description: "SBI & IBPS PO examination pattern, retail banking operations, credit management, and promotion ladders.",
  },
  mba: {
    category: "Commerce & Finance",
    streamBadge: "Any Degree / CAT",
    description: "CAT/XAT/GMAT, top IIMs, management consulting, product management, and corporate leadership roles.",
  },
  entrepreneur: {
    category: "Commerce & Finance",
    streamBadge: "Any Degree / Business",
    description: "Venture incubation, business model validation, seed funding, team scaling, and sustainable business management.",
  },
  ias: {
    category: "Civil Services & Defence",
    streamBadge: "Any Degree / UPSC CSE",
    description: "UPSC Civil Services examination, district administration, policy governance, and IAS officer career trajectory.",
  },
  ips: {
    category: "Civil Services & Defence",
    streamBadge: "Any Degree / UPSC CSE",
    description: "Law and order enforcement, police leadership, intelligence agencies (IB/RAW), and state/central police forces.",
  },
  police: {
    category: "Civil Services & Defence",
    streamBadge: "Intermediate / Degree / SI",
    description: "State Police SI & Constable recruitments, physical efficiency benchmarks, investigation methods, and department duty.",
  },
  army: {
    category: "Civil Services & Defence",
    streamBadge: "NDA / CDS / Army",
    description: "National Defence Academy, Combined Defence Services, officer commissioning, soldier recruitment rallies, and gallantry paths.",
  },
  "navy-airforce": {
    category: "Civil Services & Defence",
    streamBadge: "MPC / NDA / AFCAT",
    description: "Naval academy, Indian Air Force flying branch, AFCAT/INET selection, fighter pilot training, and technical logistics.",
  },
  lawyer: {
    category: "Civil Services & Defence",
    streamBadge: "CLAT / Any Degree / LLB",
    description: "CLAT examination, NLUs, corporate law firms, litigation practice in High Courts & Supreme Court, judiciary services.",
  },
  "govt-jobs": {
    category: "Civil Services & Defence",
    streamBadge: "Any Degree / SSC / RRB",
    description: "SSC CGL, Railway RRB, state PSC Group 1 & 2 examinations, job security, and public sector administrative positions.",
  },
  designer: {
    category: "Arts, Design & Media",
    streamBadge: "Any Stream / NID / UCEED",
    description: "Visual identity, UI/UX design, design thinking, NID/NIFT entrance, digital product agency careers.",
  },
  "interior-designer": {
    category: "Arts, Design & Media",
    streamBadge: "Any Stream / Interior Design",
    description: "Spatial aesthetics, architectural drafting, residential & commercial fitouts, material sourcing, and 3D rendering.",
  },
  fashion: {
    category: "Arts, Design & Media",
    streamBadge: "Any Stream / NIFT",
    description: "NIFT entrance, garment construction, fashion merchandising, export houses, and bespoke designer labels.",
  },
  journalist: {
    category: "Arts, Design & Media",
    streamBadge: "Any Stream / Mass Comm",
    description: "Investigative reporting, multimedia broadcasting, digital newsrooms, media ethics, and news editing.",
  },
  teacher: {
    category: "Arts, Design & Media",
    streamBadge: "B.Ed / TET / UGC-NET",
    description: "School teaching, D.Ed/B.Ed certification, State DSC/TET, university professorship, and coaching leadership.",
  },
  pilot: {
    category: "Aviation & Hospitality",
    streamBadge: "MPC / CPL Aviation",
    description: "Commercial Pilot License (CPL), DGCA theory exams, flying hours training, airline cadet programs, and captaincy.",
  },
  "air-hostess": {
    category: "Aviation & Hospitality",
    streamBadge: "Intermediate / Aviation",
    description: "Cabin safety protocols, in-flight passenger hospitality, domestic & international airline recruitment interviews.",
  },
  "hotel-management": {
    category: "Aviation & Hospitality",
    streamBadge: "NCHMCT JEE / Any Stream",
    description: "5-star luxury hotel operations, culinary arts, front office management, and global cruise hospitality.",
  },
  sports: {
    category: "Aviation & Hospitality",
    streamBadge: "Physical Education / Sports",
    description: "National tournaments, SAI coaching centers, sports quota public jobs, fitness training, and athletic management.",
  },
  "not-decided": {
    category: "Self-Discovery & Exploration",
    streamBadge: "All Streams",
    description: "Comprehensive guide for undecided students: how to map natural strengths, evaluate career fit, and pick the right stream.",
  },
  other: {
    category: "Self-Discovery & Exploration",
    streamBadge: "All Streams",
    description: "Holistic self-evaluation guide for alternative, emerging, and cross-disciplinary careers.",
  },
};

const STREAM_CATEGORIES = [
  "All",
  "Science (MPC / Engineering)",
  "Medical & Healthcare (BiPC)",
  "Commerce & Finance",
  "Civil Services & Defence",
  "Arts, Design & Media",
  "Aviation & Hospitality",
] as const;

export default function CareerReportsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [copiedLink, setCopiedLink] = useState(false);
  const readerRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // Build full career items list
  const allCareers: CareerItem[] = DEFAULT_CAREER_OPTIONS.map((opt) => {
    const meta = CATEGORY_MAP[opt.id] || {
      category: "General Exploration",
      streamBadge: "All Streams",
      description: "Comprehensive Four-Circles career blueprint report covering career path, education, salary and backup plans.",
    };
    return {
      id: opt.id,
      label: opt.label,
      icon: opt.icon,
      file: opt.file,
      category: meta.category,
      streamBadge: meta.streamBadge,
      description: meta.description,
    };
  });

  // Active selected career (default to Doctor or from URL param)
  const [selectedCareerId, setSelectedCareerId] = useState<string>(() => {
    const param = searchParams.get("career");
    if (param) {
      const match = allCareers.find(
        (c) =>
          c.id.toLowerCase() === param.toLowerCase() ||
          c.label.toLowerCase().replace(/[^a-z0-9]/g, "-") === param.toLowerCase()
      );
      if (match) return match.id;
    }
    return "doctor";
  });

  // Sync with URL param
  useEffect(() => {
    const param = searchParams.get("career");
    if (param) {
      const match = allCareers.find(
        (c) =>
          c.id.toLowerCase() === param.toLowerCase() ||
          c.label.toLowerCase().replace(/[^a-z0-9]/g, "-") === param.toLowerCase()
      );
      if (match && match.id !== selectedCareerId) {
        setSelectedCareerId(match.id);
      }
    }
  }, [searchParams]);

  const activeCareer = allCareers.find((c) => c.id === selectedCareerId) || allCareers[0];
  const activeIndex = allCareers.findIndex((c) => c.id === selectedCareerId);

  const handleSelectCareer = (id: string) => {
    setSelectedCareerId(id);
    setSearchParams({ career: id });
  };

  const handlePrev = () => {
    const nextIdx = (activeIndex - 1 + allCareers.length) % allCareers.length;
    handleSelectCareer(allCareers[nextIdx].id);
  };

  const handleNext = () => {
    const nextIdx = (activeIndex + 1) % allCareers.length;
    handleSelectCareer(allCareers[nextIdx].id);
  };

  const handlePrint = () => {
    if (iframeRef.current && iframeRef.current.contentWindow) {
      iframeRef.current.contentWindow.focus();
      iframeRef.current.contentWindow.print();
    }
  };

  const handleShare = () => {
    const url = window.location.origin + `/careers?career=${activeCareer.id}`;
    navigator.clipboard.writeText(url).then(() => {
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    });
  };

  const scrollToReader = () => {
    if (readerRef.current) {
      readerRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Filter careers for the gallery below
  const filteredCareers = allCareers.filter((item) => {
    const matchesSearch =
      item.label.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.streamBadge.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" || item.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <main className="min-h-screen font-sans text-stone-900 flex flex-col" style={{ background: "#FAF8F5" }}>
      {/* ─── NAVBAR ─────────────────────────────────────────────────────────── */}
      <header
        className="sticky top-0 z-50 border-b border-stone-200/70"
        style={{ background: "rgba(250,248,245,0.95)", backdropFilter: "blur(16px)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2.5 sm:gap-3 group min-w-0">
            <img
              src={wabiLogo}
              alt="Wabi"
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover shadow-sm shrink-0"
            />
            <div className="min-w-0">
              <span className="font-extrabold text-xs sm:text-base text-stone-900 tracking-tight block leading-none truncate">
                Wabi Career Guidance
              </span>
              <span className="text-[9px] sm:text-[10px] font-semibold text-stone-400 tracking-widest uppercase block mt-0.5 truncate">
                Career Options &amp; Blueprints
              </span>
            </div>
          </Link>

          <nav className="flex items-center gap-1.5 sm:gap-2">
            <Link
              to="/careers-tree"
              className="hidden sm:inline-flex items-center gap-1 text-xs sm:text-sm font-semibold text-stone-600 hover:text-stone-900 px-3 py-2 rounded-xl hover:bg-stone-100 transition-all"
            >
              Careers Tree
            </Link>
            <Link
              to="/faq"
              className="hidden sm:inline-flex items-center gap-1 text-xs sm:text-sm font-semibold text-stone-600 hover:text-stone-900 px-3 py-2 rounded-xl hover:bg-stone-100 transition-all"
            >
              FAQ
            </Link>
            <Link
              to="/roadmap"
              className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-2 rounded-xl font-bold text-xs sm:text-sm transition-all shadow-sm hover:shadow-md cursor-pointer text-white bg-stone-900 hover:bg-stone-800"
            >
              <Compass className="w-3.5 h-3.5 text-[#C9A97A]" />
              <span>Career Roadmap</span>
            </Link>
          </nav>
        </div>
      </header>

      {/* ─── STICKY INTERACTIVE CAREER SELECTOR BAR ─────────────────────────── */}
      <section className="sticky top-16 z-40 bg-[#F5F1EC] border-b border-[#DDD3C5] shadow-xs px-4 sm:px-8 py-3">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-3">
          {/* Dropdown Selector */}
          <div className="flex items-center gap-2.5 flex-1 max-w-xl">
            <div className="w-10 h-10 rounded-xl bg-stone-900 text-[#C9A97A] flex items-center justify-center text-lg shrink-0 shadow-2xs">
              {activeCareer.icon}
            </div>

            <div className="flex-1 min-w-0">
              <label htmlFor="career-select" className="text-[10px] font-black uppercase tracking-wider text-stone-500 block leading-tight">
                Select Career Option to Read ({allCareers.length} Options)
              </label>
              <div className="relative mt-0.5">
                <select
                  id="career-select"
                  value={selectedCareerId}
                  onChange={(e) => {
                    handleSelectCareer(e.target.value);
                    scrollToReader();
                  }}
                  className="w-full bg-white border border-[#DDD3C5] rounded-xl px-3 py-2 text-xs sm:text-sm font-extrabold text-stone-900 shadow-2xs focus:outline-none focus:ring-2 focus:ring-stone-900 cursor-pointer appearance-none pr-8 truncate"
                >
                  {allCareers.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.icon} {c.label} ({c.streamBadge})
                    </option>
                  ))}
                </select>
                <ChevronDown className="w-4 h-4 text-stone-600 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Quick Actions & Navigation Controls */}
          <div className="flex items-center gap-2 shrink-0 self-end md:self-center">
            {/* Prev / Next buttons */}
            <div className="inline-flex items-center bg-white border border-[#DDD3C5] rounded-xl p-0.5 shadow-2xs">
              <button
                type="button"
                onClick={() => { handlePrev(); scrollToReader(); }}
                className="p-1.5 rounded-lg text-stone-700 hover:text-stone-950 hover:bg-stone-100 transition-colors cursor-pointer"
                title="Previous Career"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span className="text-[11px] font-bold text-stone-500 px-2 select-none">
                {activeIndex + 1} / {allCareers.length}
              </span>
              <button
                type="button"
                onClick={() => { handleNext(); scrollToReader(); }}
                className="p-1.5 rounded-lg text-stone-700 hover:text-stone-950 hover:bg-stone-100 transition-colors cursor-pointer"
                title="Next Career"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Share Link button */}
            <button
              type="button"
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold border border-[#DDD3C5] bg-white hover:bg-stone-50 text-stone-800 transition-colors shadow-2xs cursor-pointer"
              title="Copy direct shareable link for this career"
            >
              <Share2 className="w-3.5 h-3.5 text-[#7C5C3E]" />
              <span className="hidden sm:inline">{copiedLink ? "Copied!" : "Share Link"}</span>
            </button>

            {/* Print / Save PDF */}
            <button
              type="button"
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold bg-stone-900 text-white hover:bg-stone-800 transition-colors shadow-2xs cursor-pointer"
              title="Print or Save Report as PDF"
            >
              <Printer className="w-3.5 h-3.5 text-[#C9A97A]" />
              <span className="hidden sm:inline">Print / PDF</span>
            </button>

            {/* Open Fullscreen in New Tab */}
            <a
              href={`/career-format/${activeCareer.file}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl border border-[#DDD3C5] bg-white hover:bg-stone-50 text-stone-700 transition-colors shadow-2xs"
              title="Open Fullscreen in New Tab"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ─── FULL IN-PAGE REPORT READER ─────────────────────────────────────── */}
      <section ref={readerRef} className="max-w-7xl w-full mx-auto p-4 sm:p-8 space-y-4">
        {/* Reader Meta Banner */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-4 rounded-2xl bg-white border border-[#E0D6CA] shadow-2xs">
          <div className="flex items-center gap-3">
            <span className="text-3xl">{activeCareer.icon}</span>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-base sm:text-xl font-extrabold text-stone-900">
                  {activeCareer.label} — Four-Circles Blueprint Report
                </h2>
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-[#1C1917] text-[#FAF8F5]">
                  {activeCareer.streamBadge}
                </span>
              </div>
              <p className="text-xs text-stone-500 font-medium mt-0.5">
                Category: <strong className="text-stone-700">{activeCareer.category}</strong> &bull; Free In-Depth Diagnostic Blueprint
              </p>
            </div>
          </div>

          <div className="text-right self-end sm:self-auto">
            <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
              ✓ Complete Report Loaded
            </span>
          </div>
        </div>

        {/* Embedded Interactive Report Viewport */}
        <div
          className="w-full h-[85vh] rounded-3xl overflow-hidden border shadow-xl bg-white relative"
          style={{ borderColor: "#DDD3C5" }}
        >
          <iframe
            ref={iframeRef}
            key={activeCareer.file}
            src={`/career-format/${activeCareer.file}`}
            title={`${activeCareer.label} Career Blueprint`}
            className="w-full h-full border-0"
          />
        </div>
      </section>

      {/* ─── ALL CAREER OPTIONS GALLERY ─────────────────────────────────────── */}
      <section className="border-t border-[#DDD3C5] bg-[#F5F1EC] py-10 px-4 sm:px-8 mt-6">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-stone-900 text-[#FAF8F5]">
              <BookOpen className="w-3.5 h-3.5 text-[#C9A97A]" />
              Browse All Career Options
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-stone-900">
              Select Any Career Card Below to Read
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 font-medium">
              Clicking any career card will instantly switch the reader above to that career report.
            </p>
          </div>

          {/* Search & Stream Filter */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-white p-3.5 rounded-2xl border border-[#DDD3C5] shadow-2xs">
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search career by name, stream, or exam..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm rounded-xl border border-stone-200 bg-stone-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-stone-900 font-medium"
              />
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <Filter className="w-4 h-4 text-[#7C5C3E]" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="bg-stone-50 border border-stone-200 rounded-xl px-3 py-2 text-xs sm:text-sm font-bold text-stone-900 focus:outline-none focus:ring-2 focus:ring-stone-900 cursor-pointer"
              >
                {STREAM_CATEGORIES.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat === "All" ? "All Streams & Domains" : cat}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Grid of All Career Options */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5">
            {filteredCareers.map((c) => {
              const isSelected = c.id === selectedCareerId;
              return (
                <div
                  key={c.id}
                  onClick={() => {
                    handleSelectCareer(c.id);
                    scrollToReader();
                  }}
                  className={`group p-4 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? "bg-stone-900 text-white border-stone-900 shadow-md ring-2 ring-[#C9A97A]"
                      : "bg-white text-stone-900 border-[#E0D6CA] hover:border-stone-400 hover:shadow-sm"
                  }`}
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-2xl p-1.5 rounded-xl bg-stone-100 border border-stone-200/60 shrink-0">
                        {c.icon}
                      </span>
                      <span
                        className={`text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-lg border ${
                          isSelected
                            ? "bg-stone-800 text-[#C9A97A] border-stone-700"
                            : "bg-stone-100 text-stone-700 border-stone-200"
                        }`}
                      >
                        {c.streamBadge}
                      </span>
                    </div>

                    <div>
                      <h3 className={`text-sm font-extrabold truncate ${isSelected ? "text-white" : "text-stone-900 group-hover:text-[#7C5C3E]"}`}>
                        {c.label}
                      </h3>
                      <p className={`text-[11px] font-medium truncate ${isSelected ? "text-stone-300" : "text-stone-500"}`}>
                        {c.category}
                      </p>
                    </div>
                  </div>

                  <div className="pt-3 mt-3 border-t border-stone-200/50 flex items-center justify-between text-xs font-bold">
                    <span className={isSelected ? "text-[#C9A97A]" : "text-stone-700 group-hover:text-stone-950"}>
                      {isSelected ? "Currently Reading" : "Read Report →"}
                    </span>
                    {isSelected && <CheckCircle2 className="w-4 h-4 text-[#C9A97A]" />}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─────────────────────────────────────────────────────────── */}
      <footer className="border-t border-stone-200 py-6 px-4 text-center text-xs text-stone-500 bg-white mt-auto">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} Wabi Career Guidance Portal. Free public career blueprints library.</p>
          <div className="flex items-center gap-4 font-bold text-stone-700">
            <Link to="/" className="hover:underline">Home</Link>
            <Link to="/careers-tree" className="hover:underline">Careers Tree</Link>
            <Link to="/faq" className="hover:underline">FAQ</Link>
            <Link to="/counsellor" className="hover:underline">Counsellor Login</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
