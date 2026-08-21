import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Download, Sparkles, User, School, MapPin, Phone, GraduationCap, ArrowLeft, RefreshCw } from "lucide-react";
import type { RoadmapFormData } from "@/lib/roadmap-data";
import { Navbar } from "@/components/common/Navbar";
import { LockedCareerInsights } from "@/components/career/LockedCareerInsights";

type FourCirclesReportViewProps = {
  formData: RoadmapFormData;
  fileName: string;
};

export const FourCirclesReportView = ({ formData, fileName }: FourCirclesReportViewProps) => {
  const [styleContent, setStyleContent] = useState<string>("");
  const [bodyContent, setBodyContent] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const handleDownloadPdf = () => {
    const originalTitle = document.title;
    document.title = `${formData.careerGoal} — Career Fit Report — ${formData.name || "Student"}`;
    window.print();
    setTimeout(() => {
      document.title = originalTitle;
    }, 1000);
  };

  useEffect(() => {
    let isMounted = true;
    setLoading(true);

    fetch(`/career-format/${fileName}`)
      .then((res) => {
        if (!res.ok) throw new Error("Could not load career document");
        return res.text();
      })
      .then((rawHtml) => {
        if (!isMounted) return;
        const parser = new DOMParser();
        const doc = parser.parseFromString(rawHtml, "text/html");

        // Extract styles
        const styles = Array.from(doc.querySelectorAll("style"))
          .map((s) => s.textContent || "")
          .join("\n");

        // Extract the wrap container or body content
        const wrap = doc.querySelector(".wrap");
        const html = wrap ? wrap.outerHTML : doc.body.innerHTML;

        setStyleContent(styles);
        setBodyContent(html);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load format file:", err);
        if (isMounted) setLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, [fileName]);

  // Attach interactive quiz handlers once HTML is rendered
  useEffect(() => {
    if (!containerRef.current || !bodyContent) return;

    const root = containerRef.current;
    const questions = root.querySelectorAll(".q");
    const verdict = root.querySelector("#verdict");
    const pip1 = root.querySelector("#pip1") || root.querySelector(".pip:first-child");
    const answers: Record<number, string> = {};

    const updateVerdict = () => {
      if (!verdict) return;
      const total = questions.length;
      const answeredCount = Object.keys(answers).length;
      const yesCount = Object.values(answers).filter((v) => v === "y").length;

      if (answeredCount < total) {
        verdict.className = "verdict";
        verdict.innerHTML = `<strong>Answer all ${total}</strong> (${answeredCount}/${total} answered) — Tap Yes or No on each question above to see your honest fit verdict.`;
        if (pip1) {
          pip1.classList.remove("done", "warn", "stop");
        }
      } else {
        if (yesCount >= 5) {
          verdict.className = "verdict good";
          verdict.innerHTML = `<strong>Strong Interest Fit (${yesCount}/${total} Yes)</strong> You have the genuine daily tolerance and drive required for this role. Proceed with confidence to Circle 2!`;
          if (pip1) {
            pip1.classList.remove("warn", "stop");
            pip1.classList.add("done");
          }
        } else if (yesCount >= 3) {
          verdict.className = "verdict mixed";
          verdict.innerHTML = `<strong>Mixed Interest Fit (${yesCount}/${total} Yes)</strong> You like the idea of this career, but some daily realities may be challenging. Talk to someone already working in this field before committing years.`;
          if (pip1) {
            pip1.classList.remove("done", "stop");
            pip1.classList.add("warn");
          }
        } else {
          verdict.className = "verdict bad";
          verdict.innerHTML = `<strong>Think Twice (${yesCount}/${total} Yes)</strong> You scored low on the daily working realities of this role. Consider exploring related Plan B options that match your strengths better.`;
          if (pip1) {
            pip1.classList.remove("done", "warn");
            pip1.classList.add("stop");
          }
        }
      }
    };

    questions.forEach((q, idx) => {
      const buttons = q.querySelectorAll(".toggle button");
      buttons.forEach((btn) => {
        btn.addEventListener("click", () => {
          const val = btn.getAttribute("data-v");
          if (!val) return;

          buttons.forEach((b) => {
            b.setAttribute("aria-pressed", "false");
            b.removeAttribute("data-picked");
          });

          btn.setAttribute("aria-pressed", "true");
          btn.setAttribute("data-picked", "1");
          answers[idx] = val;
          updateVerdict();
        });
      });
    });

    // Populate printhead fields with student information (used when printing)
    const printhead = root.querySelector(".printhead");
    if (printhead) {
      printhead.innerHTML = `Four Circles Career Fit Report &nbsp;·&nbsp; ${formData.careerGoal} &nbsp;·&nbsp; <strong>Student:</strong> ${formData.name || "—"} &nbsp;·&nbsp; <strong>Class:</strong> ${formData.currentClass || "—"} &nbsp;·&nbsp; <strong>School:</strong> ${formData.school || "—"} &nbsp;·&nbsp; <strong>Location:</strong> ${formData.location || "—"} &nbsp;·&nbsp; <strong>Date:</strong> ${new Date().toLocaleDateString("en-IN")}`;
    }
  }, [bodyContent, formData]);

  const formattedDate = new Date().toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <div className="min-h-screen bg-[#E9EBE6] text-[#14243A] pb-24 font-sans safe-bottom">
      {/* Injected style from the document with responsive and width overrides */}
      {styleContent && <style dangerouslySetInnerHTML={{ __html: styleContent }} />}
      
      {/* Responsive & Wide Overrides for Mobile and Desktop */}
      <style>{`
        .wrap {
          max-width: 920px !important;
          margin: 0 auto !important;
          padding: 0 16px 64px !important;
        }
        
        /* Hide printhead on screen display */
        .printhead {
          display: none !important;
        }

        /* Mobile optimizations for 4 Circles */
        @media screen and (max-width: 640px) {
          .wrap {
            padding: 0 12px 48px !important;
          }
          .strip {
            display: grid !important;
            grid-template-columns: repeat(2, 1fr) !important;
            border-radius: 12px !important;
            margin-bottom: 20px !important;
          }
          .pip {
            border-right: 1px solid var(--rule) !important;
            border-bottom: 1px solid var(--rule) !important;
            padding: 10px 6px !important;
          }
          .pip:nth-child(2) {
            border-right: 0 !important;
          }
          .pip:nth-child(3), .pip:nth-child(4) {
            border-bottom: 0 !important;
          }
          .pip b {
            font-size: 14px !important;
          }
          .pip em {
            display: block !important;
            font-size: 9px !important;
          }
          .q {
            flex-direction: column !important;
            align-items: stretch !important;
            gap: 10px !important;
            padding: 12px 0 !important;
          }
          .toggle {
            width: 100% !important;
            display: flex !important;
          }
          .toggle button {
            flex: 1 !important;
            padding: 12px 14px !important;
            font-size: 14px !important;
            min-height: 44px !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
          }
          .card {
            padding: 14px !important;
            border-radius: 12px !important;
          }
          .row {
            flex-direction: column !important;
            gap: 4px !important;
          }
          .row .k {
            flex: none !important;
            font-size: 16px !important;
          }
        }

        @media print {
          .printhead {
            display: block !important;
          }
        }
      `}</style>

      {/* Top Navbar */}
      <div className="no-print">
        <Navbar backTo="/roadmap" backLabel="New Career Selection" />
      </div>

      {/* Top Action Bar */}
      <div className="max-w-[920px] mx-auto px-3 sm:px-4 pt-4 sm:pt-6 no-print space-y-3">
        <div className="bg-white border border-[#D3D7D2] rounded-2xl p-3.5 sm:p-4 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs font-bold text-[#7E6A2E] uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-[#14243A]" />
            Four Circles Career Fit Report
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleDownloadPdf}
              className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#14243A] text-white hover:bg-black text-xs font-bold transition-all shadow-sm cursor-pointer hover:scale-105 active:scale-95 flex-1 sm:flex-none"
            >
              <Download className="w-3.5 h-3.5" />
              Download PDF / Print
            </button>
            <button
              onClick={() => navigate("/roadmap")}
              className="inline-flex items-center justify-center gap-1 px-3.5 py-2.5 rounded-xl bg-zinc-100 hover:bg-zinc-200 text-zinc-800 text-xs font-bold transition-all cursor-pointer flex-1 sm:flex-none"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              Try Another
            </button>
          </div>
        </div>
      </div>

      {/* Rendered HTML Document Content */}
      <div className="max-w-[920px] mx-auto px-3 sm:px-4 mt-2">
        {loading ? (
          <div className="py-20 text-center text-zinc-500 text-sm font-medium">
            Loading career report document…
          </div>
        ) : (
          <>
            <div
              ref={containerRef}
              dangerouslySetInnerHTML={{ __html: bodyContent }}
              className="four-circles-container"
            />

            {/* ── LOCKED ADVANCED CAREER PACK & 1-ON-1 GUIDANCE ── */}
            <LockedCareerInsights formData={formData} careerGoal={formData.careerGoal} />

            {/* ── ADVISORY & POLICY DISCLAIMER ── */}
            <div className="bg-[#FAF7F0] border border-[#E5DEC9] rounded-2xl p-5 sm:p-6 my-6 shadow-sm">
              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0 mt-0.5 font-bold">
                  ⚠️
                </div>
                <div>
                  <div className="font-extrabold text-sm text-[#5C4D26] uppercase tracking-wide mb-1">
                    Advisory &amp; Policy Disclaimer
                  </div>
                  <p className="text-xs sm:text-sm text-[#6E5D31] leading-relaxed">
                    Some career details, exam patterns, eligibility rules, fee structures, college cut-offs, and industry job demands might change over time due to rapid technological, economic, and educational policy changes across the nation and the world. <strong>It is always recommended to reach out to a certified career counselor</strong> and confirm the latest notifications on official government or institutional portals before making final decisions.
                  </p>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
