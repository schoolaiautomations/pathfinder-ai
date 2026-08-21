import { useEffect, useState, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Target, Map, BookOpen, Route, Check, Loader2, AlertCircle, RefreshCw, Sparkles, Compass } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { generateLearningRoadmap } from "@/lib/roadmap-ai";
import { ROADMAP_FORM_KEY, ROADMAP_RESULT_KEY, findCareerFormatFile } from "@/lib/roadmap-data";
import type { RoadmapFormData, LearningRoadmap } from "@/lib/roadmap-data";
import wabiLogo from "@/lib/wabi_resolutions_logo.jpeg";

const steps = [
  { icon: Target, label: "Analyzing stream choices & subjects" },
  { icon: Map, label: "Mapping entrance exams & college pathways" },
  { icon: Compass, label: "Evaluating competition & Four-Circle fit" },
  { icon: Route, label: "Finalizing your personalized blueprint" },
];

const RoadmapGenerating = () => {
  const [active, setActive] = useState(0);
  const [apiDone, setApiDone] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);
  const resultRef = useRef<LearningRoadmap | null>(null);
  const apiCalledRef = useRef(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const callApi = async () => {
    setApiError(null);
    setApiDone(false);
    setActive(0);
    apiCalledRef.current = true;

    try {
      const saved = localStorage.getItem(ROADMAP_FORM_KEY);
      if (!saved) {
        throw new Error("No form data found. Please fill out the form first.");
      }
      const formData: RoadmapFormData = JSON.parse(saved);
      
      // If it's one of the curated career documents, ready instantly
      const curatedFile = findCareerFormatFile(formData.careerGoal);
      if (curatedFile) {
        setApiDone(true);
        return;
      }

      const roadmap = await generateLearningRoadmap(formData);
      resultRef.current = roadmap;
      localStorage.setItem(ROADMAP_RESULT_KEY, JSON.stringify(roadmap));
      setApiDone(true);
    } catch (err: any) {
      console.error("Roadmap API error:", err);
      setApiError(err.message || "Something went wrong. Please try again.");
      toast({
        title: "Roadmap Generation Failed",
        description: err.message || "Something went wrong. Please try again.",
        variant: "destructive",
      });
    }
  };

  useEffect(() => {
    if (!apiCalledRef.current) {
      callApi();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Animate steps
  useEffect(() => {
    if (apiError) return;
    if (active >= steps.length) return;
    const t = setTimeout(() => setActive((a) => a + 1), 1100);
    return () => clearTimeout(t);
  }, [active, apiError]);

  // Navigate when both animation and API are done
  useEffect(() => {
    if (active >= steps.length && apiDone) {
      const t = setTimeout(() => navigate("/roadmap/result"), 500);
      return () => clearTimeout(t);
    }
  }, [active, apiDone, navigate]);

  const progressPercent = Math.min(100, Math.round(((active + 1) / (steps.length + 1)) * 100));

  return (
    <main className="min-h-screen font-sans text-stone-900 flex flex-col justify-between" style={{ background: "#FAF8F5" }}>
      
      {/* ─── NAVBAR ─────────────────────────────────────────────────────────── */}
      <header className="sticky top-0 z-50 border-b border-stone-200/70" style={{ background: "rgba(250,248,245,0.92)", backdropFilter: "blur(16px)" }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src={wabiLogo}
              alt="Wabi"
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full object-cover shadow-sm"
            />
            <div>
              <span className="font-extrabold text-sm sm:text-base text-stone-900 tracking-tight block leading-none">
                Wabi Career Guidance
              </span>
              <span className="text-[10px] font-semibold text-stone-400 tracking-widest uppercase block mt-0.5">
                Career Counselling
              </span>
            </div>
          </Link>
        </div>
      </header>

      {/* ─── ANIMATED GENERATING CONTENT ────────────────────────────────────── */}
      <div className="relative overflow-hidden py-12 px-4 sm:px-6 flex-1 flex items-center justify-center">
        {/* Warm ambient background glow */}
        <div
          className="absolute inset-0 -z-10 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 70% 50% at 50% 30%, #E8DFD0 0%, transparent 70%)",
          }}
        />

        <div className="max-w-lg w-full">
          
          {/* Main Card */}
          <div
            className="rounded-3xl p-7 sm:p-10 shadow-sm text-center relative overflow-hidden transition-all"
            style={{ background: "#F5F1EC", border: "1.5px solid #E0D6CA" }}
          >
            {/* Top Glowing Ambient Pulse Icon */}
            <div className="relative w-20 h-20 mx-auto mb-6 flex items-center justify-center">
              {/* Outer pulsing ring */}
              <div
                className="absolute inset-0 rounded-full animate-ping opacity-25"
                style={{ background: "#C9A97A" }}
              />
              {/* Secondary glowing ring */}
              <div
                className="absolute inset-1 rounded-full animate-pulse opacity-40"
                style={{ background: "#B5956A" }}
              />
              {/* Center Icon badge */}
              <div
                className="relative w-16 h-16 rounded-2xl flex items-center justify-center text-white shadow-md z-10"
                style={{ background: "#1C1917" }}
              >
                {apiError ? (
                  <AlertCircle className="w-7 h-7 text-amber-300" />
                ) : (
                  <Compass className="w-7 h-7 animate-spin-slow" style={{ color: "#C9A97A" }} />
                )}
              </div>
            </div>

            {/* Title */}
            <h1
              className="font-extrabold leading-tight tracking-tight text-2xl sm:text-3xl"
              style={{ color: "#1C1917" }}
            >
              {apiError ? (
                "Generation Paused"
              ) : (
                <>
                  Building Your{" "}
                  <span
                    style={{
                      background: "linear-gradient(135deg, #B5956A 0%, #7C5C3E 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    Career Blueprint
                  </span>
                </>
              )}
            </h1>

            {/* Subtext */}
            <p className="text-xs sm:text-sm mt-2 max-w-sm mx-auto leading-relaxed font-medium" style={{ color: "#6B5E53" }}>
              {apiError
                ? apiError
                : active >= steps.length && !apiDone
                  ? "Finalizing roadmap details and academic pathways…"
                  : "Synthesizing stream requirements, entrance dates & four-circle evaluation…"}
            </p>

            {/* Progress Bar */}
            {!apiError && (
              <div className="mt-6 mb-7">
                <div className="h-1.5 w-full bg-[#E0D6CA] rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-700 ease-out"
                    style={{
                      width: `${progressPercent}%`,
                      background: "linear-gradient(90deg, #C9A97A 0%, #7C5C3E 100%)",
                    }}
                  />
                </div>
              </div>
            )}

            {/* Error Actions */}
            {apiError && (
              <div className="mt-6 flex flex-col gap-3 items-center">
                <Button
                  size="lg"
                  className="rounded-xl px-6 font-bold cursor-pointer"
                  style={{ background: "#1C1917", color: "#FAF8F5" }}
                  onClick={callApi}
                >
                  <RefreshCw className="w-4 h-4 mr-2" /> Try Again
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-xl border-[#D5C9BE] text-stone-700 cursor-pointer"
                  onClick={() => navigate("/roadmap")}
                >
                  Go Back to Form
                </Button>
              </div>
            )}

            {/* Animated Step Timeline */}
            {!apiError && (
              <div className="space-y-2.5 text-left">
                {steps.map((s, i) => {
                  const done = i < active;
                  const current = i === active;
                  const Icon = s.icon;
                  return (
                    <div
                      key={s.label}
                      className={cn(
                        "flex items-center gap-3 p-3 rounded-2xl border transition-all duration-300",
                        done && "border-[#DDD3C5]",
                        current && "border-stone-900 shadow-sm scale-[1.01]",
                        !done && !current && "border-stone-200/60 opacity-40"
                      )}
                      style={{
                        background: current ? "#FAF8F5" : done ? "#F0EBE1" : "transparent",
                      }}
                    >
                      <div
                        className={cn(
                          "w-8 h-8 rounded-xl flex items-center justify-center shrink-0 text-xs font-bold transition-all",
                          done && "text-[#FAF8F5]",
                          current && "text-[#FAF8F5] shadow-sm",
                          !done && !current && "bg-[#E5DDD2] text-stone-400"
                        )}
                        style={{
                          background: done ? "#7C5C3E" : current ? "#1C1917" : undefined,
                        }}
                      >
                        {done ? (
                          <Check className="w-4 h-4" style={{ color: "#C9A97A" }} />
                        ) : current ? (
                          <Loader2 className="w-4 h-4 animate-spin" style={{ color: "#C9A97A" }} />
                        ) : (
                          <Icon className="w-3.5 h-3.5" />
                        )}
                      </div>

                      <span
                        className={cn(
                          "text-xs sm:text-sm font-semibold transition-colors flex-1",
                          current ? "text-stone-950 font-bold" : done ? "text-stone-800" : "text-stone-400"
                        )}
                      >
                        {s.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            )}

            {/* Bottom pulsing badge */}
            {!apiError && (
              <div className="mt-6 flex items-center justify-center gap-2 text-xs font-semibold" style={{ color: "#7C5C3E" }}>
                <Sparkles className="w-3.5 h-3.5 animate-pulse" style={{ color: "#B5956A" }} />
                <span>Personalizing for your chosen goal</span>
              </div>
            )}

          </div>

        </div>
      </div>

      {/* ─── FOOTER ─────────────────────────────────────────────────────── */}
      <footer style={{ borderTop: "1px solid #E0D6CA", background: "#F0EBE1" }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-5 text-center text-xs font-semibold text-stone-500">
          <span>© {new Date().getFullYear()} Wabi Resolutions &amp; Career Guidance</span>
        </div>
      </footer>

    </main>
  );
};

export default RoadmapGenerating;
