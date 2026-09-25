import React, { useEffect } from "react";
import {
  X,
  BookOpen,
  ShieldCheck,
  Compass,
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  Sparkles,
} from "lucide-react";

interface CaseStudyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ isOpen, onClose }) => {
  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-stone-950/60 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] bg-[#FAF8F5] text-stone-900 rounded-3xl shadow-2xl border border-stone-200/80 flex flex-col overflow-hidden animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Sticky Header */}
        <header className="sticky top-0 z-10 px-5 sm:px-8 py-4 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-stone-200 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-stone-900 text-[#FAF8F5] flex items-center justify-center shadow-xs">
              <BookOpen className="w-4 h-4 text-[#C9A97A]" />
            </div>
            <div>
              <span className="text-[10px] font-black uppercase tracking-widest text-[#8B6F47]">
                Real Case Study
              </span>
              <h3 className="text-sm sm:text-base font-black text-stone-900 leading-none mt-0.5">
                Two Students &amp; A Dream
              </h3>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-xl text-stone-500 hover:text-stone-900 hover:bg-stone-200/70 transition-colors cursor-pointer"
            aria-label="Close case study"
          >
            <X className="w-5 h-5" />
          </button>
        </header>

        {/* Modal Scrollable Content */}
        <div className="overflow-y-auto px-5 sm:px-8 py-6 space-y-7 text-stone-800 leading-relaxed text-sm sm:text-base">
          
          {/* Story Intro */}
          <div className="space-y-3 bg-white border border-stone-200/80 rounded-2xl p-5 sm:p-6 shadow-xs">
            <p className="text-base sm:text-lg font-bold text-stone-900">
              Let me tell you a story about two students.
            </p>
            <p className="text-stone-600">
              Both were equally talented. Both came from similar financial backgrounds. And both had exactly the same dream:
            </p>
            <div className="p-3.5 bg-stone-100/80 border-l-4 border-stone-900 rounded-r-xl font-extrabold text-stone-900 text-base sm:text-lg italic">
              “I want to become a Police Officer.”
            </div>
            <p className="text-stone-500 text-xs sm:text-sm">
              Let us call them <strong className="text-stone-900">Student A</strong> and <strong className="text-stone-900">Student B</strong>.
            </p>
          </div>

          {/* Student A vs Student B Grid */}
          <div className="grid md:grid-cols-2 gap-5">
            {/* Student A */}
            <div className="bg-white border-2 border-emerald-200/90 rounded-2xl p-5 sm:p-6 shadow-xs flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-emerald-100 text-emerald-800 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Student A
                  </span>
                  <span className="text-[11px] font-bold text-emerald-700">Chose Plan B</span>
                </div>

                <p className="text-stone-700 text-sm">
                  Student A loved his dream. But somewhere along the way, he learned something very important:
                </p>

                <div className="bg-emerald-50/70 border border-emerald-100 rounded-xl p-3 text-xs text-stone-700 space-y-1.5 font-medium">
                  <p>
                    Government recruitment does not always happen according to our timeline. Notifications may come late, vacancies change, or exams get postponed.
                  </p>
                  <p className="font-bold text-emerald-950 italic">
                    “What will I do if my dream takes longer than I expect?”
                  </p>
                </div>

                <p className="text-stone-700 text-sm">
                  He did not give up on becoming a police officer. Instead, <strong>he created a Plan B</strong>.
                </p>
                <p className="text-stone-700 text-sm">
                  After Class 12, he chose engineering. Alongside his studies, he continued preparing for police recruitment. Years later when his family needed financial support, his engineering degree opened doors to a stable job.
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-emerald-100 bg-emerald-50/50 -mx-5 -mb-5 p-4 rounded-b-2xl">
                <p className="text-xs text-emerald-900 font-bold leading-snug">
                  ✨ Today, he is financially independent. His police dream is still alive — and he chases it with zero fear.
                </p>
              </div>
            </div>

            {/* Student B */}
            <div className="bg-white border-2 border-amber-200/90 rounded-2xl p-5 sm:p-6 shadow-xs flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-amber-100 text-amber-900 flex items-center gap-1.5">
                    <AlertTriangle className="w-3.5 h-3.5" />
                    Student B
                  </span>
                  <span className="text-[11px] font-bold text-amber-800">Lacked Information</span>
                </div>

                <p className="text-stone-700 text-sm">
                  Student B was just as talented. He had the same passion and the same dream. But there was one difference:
                </p>

                <div className="bg-amber-50/70 border border-amber-100 rounded-xl p-3 text-xs text-stone-700 space-y-1.5 font-medium">
                  <p className="font-bold text-amber-950">
                    He did not have the right information.
                  </p>
                  <p>
                    Nobody explained that recruitment can take years. Nobody told him: <em>“Keep chasing your dream — but build another skill alongside it.”</em>
                  </p>
                </div>

                <p className="text-stone-700 text-sm">
                  After Class 12, he chose a general degree solely to focus 100% on police prep. He waited... and waited.
                </p>
                <p className="text-stone-700 text-sm">
                  When the exam finally came, he could not clear it. Years had passed, family needed income, and without employable skills, he had to take up work at a local shop.
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-amber-100 bg-amber-50/50 -mx-5 -mb-5 p-4 rounded-b-2xl">
                <p className="text-xs text-amber-900 font-medium leading-snug">
                  💡 <strong>Student B is NOT a failure.</strong> He can still build new skills, prepare again, and change his direction. His story teaches us the price of missing guidance.
                </p>
              </div>
            </div>
          </div>

          {/* Key Insight Callout */}
          <div className="bg-stone-900 text-[#FAF8F5] rounded-2xl p-6 shadow-md space-y-4">
            <div className="flex items-center gap-2 text-[#C9A97A] text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              The Core Difference
            </div>
            <p className="text-sm sm:text-base leading-relaxed text-stone-200">
              Both students had talent. Both worked hard. Both had the same dream. The difference was not their intelligence or ambition — <strong className="text-white">it was information and planning.</strong>
            </p>

            <div className="p-4 bg-stone-800/80 rounded-xl border border-stone-700/60 text-center">
              <p className="text-base sm:text-xl font-extrabold text-[#FAF8F5] leading-snug">
                “Plan B is not the enemy of Plan A. <br className="hidden sm:inline" />
                Sometimes, Plan B is what keeps Plan A alive.”
              </p>
            </div>
          </div>

          {/* Two Questions to Ask */}
          <div className="space-y-3 bg-white border border-stone-200/80 rounded-2xl p-5 sm:p-6 shadow-xs">
            <h4 className="font-extrabold text-stone-900 text-base flex items-center gap-2">
              <Compass className="w-4 h-4 text-[#8B6F47]" />
              Whenever you choose a career, ask yourself two questions:
            </h4>
            <div className="grid sm:grid-cols-2 gap-3 pt-1">
              <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200">
                <span className="text-[10px] font-bold text-stone-400 uppercase tracking-wider block">Question 1</span>
                <p className="font-bold text-stone-900 text-sm mt-0.5">“What is my dream?”</p>
              </div>
              <div className="p-3.5 rounded-xl bg-[#F4EFE6] border border-[#E3D9CA]">
                <span className="text-[10px] font-bold text-[#8B6F47] uppercase tracking-wider block">Question 2</span>
                <p className="font-bold text-stone-900 text-sm mt-0.5">“What is my Plan B if my dream takes 5 years instead of 2?”</p>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-stone-600 pt-1">
              Having a backup plan does not mean you don&apos;t believe in your dream — <strong>it means you are protecting your dream</strong> so you can chase it without financial pressure.
            </p>
          </div> 

          {/* Closing Message */}
          <div className="text-center space-y-3 py-2">
            <div className="flex flex-wrap items-center justify-center gap-2 text-xs font-extrabold text-stone-900 uppercase tracking-widest pt-1">
              <span className="px-3 py-1 bg-stone-200/80 rounded-full">Dream Big</span>
              <span>&bull;</span>
              <span className="px-3 py-1 bg-stone-200/80 rounded-full">Work Hard</span>
              <span>&bull;</span>
              <span className="px-3 py-1 bg-stone-200/80 rounded-full">Stay Prepared</span>
            </div>
            <p className="text-xs text-stone-500 max-w-md mx-auto pt-1">
              Always give yourself more than one path to a successful and secure future.
            </p>
          </div>
        </div>

        {/* Modal Sticky Footer */}
        <footer className="sticky bottom-0 z-10 px-5 sm:px-8 py-3.5 bg-[#FAF8F5]/95 backdrop-blur-md border-t border-stone-200 flex items-center justify-between">
          <span className="text-xs text-stone-500 font-medium hidden sm:inline">
            Four Circles Career Guidance Methodology
          </span>
          <button
            type="button"
            onClick={onClose}
            className="w-full sm:w-auto px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm bg-stone-900 hover:bg-stone-800 text-white shadow-xs transition-all cursor-pointer"
          >
            Got it, Close Case Study
          </button>
        </footer>
      </div>
    </div>
  );
};
