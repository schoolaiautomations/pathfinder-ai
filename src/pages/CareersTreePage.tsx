import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Map, Network } from "lucide-react";
import wabiLogo from "@/lib/wabi_resolutions_logo.jpeg";
import { CareersTreeView } from "@/components/counsellor/CareersTreeView";
import { LeadAccessModal } from "@/components/common/LeadAccessModal";

export const CareersTreePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen font-sans text-stone-900 flex flex-col bg-[#FAF8F5]">
      {/* ─── NAVBAR ─────────────────────────────────────────────────────────── */}
      <header
        className="sticky top-0 z-40 border-b border-stone-200/80"
        style={{ background: "rgba(250,248,245,0.95)", backdropFilter: "blur(16px)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 h-16 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3 min-w-0">
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-stone-200 bg-white hover:bg-stone-50 text-xs font-bold text-stone-700 transition-colors shadow-2xs shrink-0 cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span className="hidden xs:inline">Home</span>
            </Link>

            <Link to="/" className="flex items-center gap-2.5 group min-w-0">
              <img
                src={wabiLogo}
                alt="Wabi"
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full object-cover shadow-sm shrink-0"
              />
              <div className="min-w-0">
                <span className="font-extrabold text-xs sm:text-base text-stone-900 tracking-tight block leading-none truncate">
                  Wabi Career Guidance
                </span>
                <span className="text-[9px] sm:text-[10px] font-semibold text-stone-400 tracking-widest uppercase block mt-0.5 truncate">
                  Universal Careers Tree
                </span>
              </div>
            </Link>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <Link
              to="/roadmap"
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl font-bold text-xs bg-white border border-stone-200 text-stone-800 hover:bg-stone-50 transition-colors shadow-2xs"
            >
              <Map className="w-3.5 h-3.5 text-[#C9A97A]" />
              <span>Explore Roadmaps</span>
            </Link>

          </div>
        </div>
      </header>

      {/* ─── TREE COMPONENT ─────────────────────────────────────────────────── */}
      <div className="flex-1 flex flex-col">
        <CareersTreeView />
      </div>

      {/* ─── LEAD ACCESS POPUP MODAL ─── */}
      <LeadAccessModal sourcePage="Careers Tree" />
    </main>
  );
};

export default CareersTreePage;
