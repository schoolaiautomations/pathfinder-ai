import React from "react";
import {
  Route,
  X,
  Clock,
  Calendar,
  Sparkles,
} from "lucide-react";

export interface RoadmapStep {
  title: string;
  duration?: string;
  description: string;
  type: "start" | "education" | "exam" | "degree" | "career" | "growth";
  icon?: string;
}

export interface CareerRoadmap {
  careerId: string;
  careerName: string;
  totalDuration: string;
  startingSalary?: string;
  steps: RoadmapStep[];
}

interface CareerRoadmapModalProps {
  roadmap: CareerRoadmap | null;
  onClose: () => void;
  onOpenBooking: () => void;
}

// ── Vibrant color palette matching the infographic reference ──
const MILESTONE_THEMES = [
  { primary: "#FF5B5A", light: "#FFF1F2" }, // 01 Coral Red
  { primary: "#00B6D6", light: "#F0F9FF" }, // 02 Cyan Sky
  { primary: "#496D89", light: "#F8FAFC" }, // 03 Slate Indigo
  { primary: "#223956", light: "#F1F5F9" }, // 04 Deep Navy
  { primary: "#7F7899", light: "#FAF5FF" }, // 05 Mauve Purple
  { primary: "#059669", light: "#ECFDF5" }, // 06 Emerald Green
  { primary: "#D97706", light: "#FFFBEB" }, // 07 Amber Gold
  { primary: "#E11D48", light: "#FFF1F2" }, // 08 Crimson
  { primary: "#4338CA", light: "#EEF2FF" }, // 09 Royal Indigo
];

// Checkered finish line flag
const FinishLineFlag = () => (
  <div className="absolute -top-6 -right-1 flex flex-col items-center animate-bounce z-20 pointer-events-none">
    <div className="relative flex items-start">
      {/* Checkered flag banner */}
      <div className="w-6 h-4 rounded-xs overflow-hidden border border-stone-800 shadow-sm bg-stone-900 flex flex-wrap">
        <div className="w-1.5 h-2 bg-white" />
        <div className="w-1.5 h-2 bg-black" />
        <div className="w-1.5 h-2 bg-white" />
        <div className="w-1.5 h-2 bg-black" />
        <div className="w-1.5 h-2 bg-black" />
        <div className="w-1.5 h-2 bg-white" />
        <div className="w-1.5 h-2 bg-black" />
        <div className="w-1.5 h-2 bg-white" />
      </div>
      {/* Flag pole */}
      <div className="w-0.5 h-6 bg-stone-700 -ml-6 mt-0.5 rounded-full" />
    </div>
    <span className="text-[7px] font-black uppercase tracking-wider text-emerald-800 bg-emerald-100 px-1 py-0.2 rounded border border-emerald-300 shadow-2xs mt-0.5">
      FINISH
    </span>
  </div>
);

// Clean, perfectly smooth S-curve connector without crumpling or distortion
const SerpentineConnector: React.FC<{
  fromRight: boolean; // true = from Right (88%) to Left (12%), false = from Left to Right
  color: string;
}> = ({ fromRight, color }) => {
  // Pure, mathematically smooth S-curve with zero kinks or overlaps
  const smoothPath = fromRight
    ? "M 88 0 C 88 22, 12 22, 12 44"
    : "M 12 0 C 12 22, 88 22, 88 44";

  return (
    <div className="w-full h-11 sm:h-13 -my-0.5 relative pointer-events-none select-none">
      <svg
        viewBox="0 0 100 44"
        preserveAspectRatio="none"
        className="w-full h-full overflow-visible"
      >
        {/* Soft base track */}
        <path
          d={smoothPath}
          fill="none"
          stroke="#F1F5F9"
          strokeWidth="8"
          strokeLinecap="round"
        />

        {/* Subtle colored glow */}
        <path
          d={smoothPath}
          fill="none"
          stroke={color}
          strokeWidth="6"
          strokeOpacity="0.18"
          strokeLinecap="round"
        />

        {/* Main vibrant smooth ribbon */}
        <path
          d={smoothPath}
          fill="none"
          stroke={color}
          strokeWidth="4"
          strokeLinecap="round"
        />

        {/* Center dashed racing line */}
        <path
          d={smoothPath}
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="1.2"
          strokeDasharray="4 4"
          strokeOpacity="0.9"
        />
      </svg>
    </div>
  );
};

export const CareerRoadmapModal: React.FC<CareerRoadmapModalProps> = ({
  roadmap,
  onClose,
  onOpenBooking,
}) => {
  if (!roadmap) return null;

  const steps = roadmap.steps;
  const totalSteps = steps.length;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-2.5 sm:p-5"
      onClick={onClose}
    >
      {/* Dark backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      {/* Modal Dialog */}
      <div
        className="relative w-full max-w-xl sm:max-w-2xl max-h-[92vh] bg-[#FAF8F5] rounded-3xl border border-[#E0D6CA] shadow-2xl flex flex-col overflow-hidden animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* ── Modal Header (NO salary tag, responsive wrap) ── */}
        <div className="px-4 sm:px-6 pt-4 pb-3.5 border-b border-[#E5DDD2] shrink-0 bg-white/85 backdrop-blur-md">
          <div className="flex items-start justify-between gap-2.5">
            <div className="flex items-start gap-2.5 min-w-0">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-gradient-to-br from-emerald-100 to-teal-100 border border-emerald-300 flex items-center justify-center shadow-2xs shrink-0 mt-0.5">
                <Route className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-700" />
              </div>
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-1.5">
                  <h2 className="text-xs sm:text-base font-black text-stone-900 leading-tight">
                    {roadmap.careerName}
                  </h2>
                  <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[9px] sm:text-[10px] font-black uppercase tracking-wider bg-amber-100 text-amber-900 border border-amber-300 shadow-2xs shrink-0">
                    (GENERAL ROADMAP)
                  </span>
                </div>
                <p className="text-[10px] text-stone-500 font-bold uppercase tracking-wider mt-0.5">
                  Standard Pathway &bull; Alternative routes exist
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="p-1.5 sm:p-2 rounded-xl text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition-colors cursor-pointer shrink-0"
              aria-label="Close Roadmap"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>

          {/* Duration Badge & Milestone Counter */}
          <div className="flex items-center justify-between gap-2 mt-2.5">
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-lg text-[9px] sm:text-[10px] font-black bg-blue-50 text-blue-800 border border-blue-200 shadow-2xs">
              <Clock className="w-3 h-3 text-blue-600 shrink-0" />
              <span>{roadmap.totalDuration}</span>
            </span>

            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-lg text-[9px] sm:text-[10px] font-black bg-emerald-50 text-emerald-800 border border-emerald-200 shadow-2xs">
              <Sparkles className="w-3 h-3 text-emerald-600 shrink-0" />
              <span>{totalSteps} Milestones Mapped</span>
            </span>
          </div>

          {/* Accent Pathway Header Line */}
          <div className="w-full h-1 bg-gradient-to-r from-[#FF5B5A] via-[#00B6D6] via-[#496D89] to-[#059669] rounded-full mt-2" />
        </div>

        {/* ── Scrollable Mobile-First Responsive Infographic Canvas ── */}
        <div className="flex-1 overflow-y-auto px-3 sm:px-6 py-4 space-y-0">
          <div className="w-full max-w-lg mx-auto">
            {steps.map((step, idx) => {
              const isLast = idx === totalSteps - 1;
              const isRightSide = idx % 2 === 0; // Alternating serpentine flow: Even on Right, Odd on Left
              const theme = MILESTONE_THEMES[idx % MILESTONE_THEMES.length];
              const stepNumberFormatted = String(idx + 1).padStart(2, "0");

              return (
                <div key={idx} className="w-full">
                  {/* Milestone Row (Mobile friendly: Text on one side, Circle on other) */}
                  <div
                    className={`w-full flex items-center justify-between gap-2 sm:gap-4 py-1.5 transition-all ${
                      isRightSide ? "flex-row" : "flex-row-reverse"
                    }`}
                  >
                    {/* 1. Floating Text Content (No box borders, clean typography) */}
                    <div
                      className={`flex-1 min-w-0 ${
                        isRightSide ? "pr-2 text-left" : "pl-2 text-left"
                      }`}
                    >
                      {/* Category Pill + Duration */}
                      <div className="flex flex-wrap items-center gap-1.5 mb-0.5">
                        <span
                          className="text-[9px] sm:text-[10px] font-black uppercase tracking-wider px-1.5 py-0.2 rounded"
                          style={{
                            color: theme.primary,
                            backgroundColor: `${theme.primary}15`,
                          }}
                        >
                          {step.type.toUpperCase()}
                        </span>
                        {step.duration && (
                          <span className="text-[8px] sm:text-[9px] font-extrabold uppercase tracking-wider text-stone-600 bg-stone-100 px-1 py-0.2 rounded border border-stone-200">
                            {step.duration}
                          </span>
                        )}
                      </div>

                      {/* Milestone Title */}
                      <h3 className="text-xs sm:text-sm font-black text-stone-900 leading-snug">
                        {step.title}
                      </h3>

                      {/* Description */}
                      <p className="text-[10px] sm:text-xs text-stone-600 font-medium leading-relaxed mt-0.5">
                        {step.description}
                      </p>
                    </div>

                    {/* 2. Infographic Milestone Circular Node */}
                    <div className="flex flex-col items-center justify-center shrink-0 w-14 sm:w-16 relative select-none">
                      {/* Checkered Finish Flag for the last milestone */}
                      {isLast && <FinishLineFlag />}

                      {/* Outer Colored Ring with Floating Shadow */}
                      <div
                        className="w-11 h-11 sm:w-13 sm:h-13 rounded-full flex items-center justify-center p-1 transition-all shadow-md"
                        style={{
                          backgroundColor: theme.primary,
                          boxShadow: `0 6px 14px ${theme.primary}35`,
                        }}
                      >
                        {/* Inner Crisp White Disc with Icon */}
                        <div className="w-full h-full rounded-full bg-white flex items-center justify-center shadow-inner border border-stone-100">
                          <span className="text-sm sm:text-base">
                            {step.icon || "📍"}
                          </span>
                        </div>
                      </div>

                      {/* "01 STEP" Label Underneath */}
                      <div className="text-center mt-1 leading-none">
                        <div
                          className="text-[11px] sm:text-xs font-black tracking-tight"
                          style={{ color: theme.primary }}
                        >
                          {stepNumberFormatted}
                        </div>
                        <div
                          className="text-[7px] sm:text-[8px] font-black uppercase tracking-wider mt-0.5"
                          style={{ color: theme.primary }}
                        >
                          STEP
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 3. Responsive Serpentine Curved S-Connector */}
                  {!isLast && (
                    <SerpentineConnector
                      fromRight={isRightSide}
                      color={theme.primary}
                    />
                  )}
                </div>
              );
            })}
          </div>

          {/* ── Victory Finish Banner at Bottom ── */}
          <div className="mt-5 p-4 rounded-2xl bg-gradient-to-r from-emerald-500/15 via-teal-500/10 to-amber-500/15 border-2 border-emerald-400 text-center space-y-2 shadow-sm animate-in fade-in duration-300">
            <div className="w-10 h-10 rounded-2xl bg-white border border-emerald-300 mx-auto flex items-center justify-center text-xl shadow-xs">
              🏁
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-black text-stone-900">
                Career Destination Reached!
              </h4>
              <p className="text-[11px] text-stone-600 font-medium mt-0.5 max-w-sm mx-auto">
                Full milestone pathway for <strong>{roadmap.careerName}</strong>. Ready to personalize this roadmap?
              </p>
            </div>
            <div className="pt-1">
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onOpenBooking();
                }}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-[11px] font-black bg-stone-900 text-white hover:bg-stone-800 transition-all cursor-pointer shadow-xs active:scale-98"
              >
                <Calendar className="w-3.5 h-3.5 text-[#C9A97A]" />
                <span>Book 1-on-1 Career Counselling</span>
              </button>
            </div>
          </div>
        </div>

        {/* ── Modal Footer (Mobile optimized) ── */}
        <div className="px-4 sm:px-6 py-2.5 border-t border-[#E5DDD2] shrink-0 bg-white/85 backdrop-blur-md flex items-center justify-between gap-2">
          <p className="text-[9px] sm:text-[10px] font-bold text-stone-400 truncate">
            Powered by Wabi &bull; General Pathway
          </p>
          <button
            type="button"
            onClick={() => {
              onClose();
              onOpenBooking();
            }}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-[11px] font-black bg-stone-900 text-[#FAF8F5] hover:bg-stone-800 transition-all cursor-pointer shadow-xs shrink-0"
          >
            <Calendar className="w-3 h-3 text-[#C9A97A]" />
            <span>Book Counselling</span>
          </button>
        </div>
      </div>
    </div>
  );
};
