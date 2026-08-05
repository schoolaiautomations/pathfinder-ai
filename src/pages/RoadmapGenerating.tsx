import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Target, Map, BookOpen, Route, Check, Loader2, AlertCircle, RefreshCw } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { generateLearningRoadmap } from "@/lib/roadmap-ai";
import { ROADMAP_FORM_KEY, ROADMAP_RESULT_KEY } from "@/lib/roadmap-data";
import type { RoadmapFormData, LearningRoadmap } from "@/lib/roadmap-data";

const steps = [
  { icon: Target, label: "Understanding your career goal" },
  { icon: Map, label: "Mapping the learning path" },
  { icon: BookOpen, label: "Finding the best resources" },
  { icon: Route, label: "Building your roadmap" },
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
    const t = setTimeout(() => setActive((a) => a + 1), 1200);
    return () => clearTimeout(t);
  }, [active, apiError]);

  // Navigate when both animation and API are done
  useEffect(() => {
    if (active >= steps.length && apiDone) {
      const t = setTimeout(() => navigate("/roadmap/result"), 600);
      return () => clearTimeout(t);
    }
  }, [active, apiDone, navigate]);

  return (
    <main className="min-h-screen bg-background flex items-center justify-center px-4 py-12">
      <div className="max-w-lg w-full bg-white border border-zinc-200 rounded-3xl shadow-card p-8 sm:p-10 text-center animate-scale-in">
        <div className="w-16 h-16 mx-auto rounded-2xl bg-black flex items-center justify-center text-white shadow-md mb-6">
          {apiError ? (
            <AlertCircle className="w-8 h-8 text-white" />
          ) : (
            <Loader2 className="w-8 h-8 text-white animate-spin" />
          )}
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-zinc-950">
          {apiError ? "Something went wrong" : "Building your roadmap"}
        </h1>
        <p className="text-zinc-500 text-sm mt-3 leading-relaxed">
          {apiError
            ? apiError
            : active >= steps.length && !apiDone
              ? "Almost there… putting the finishing touches…"
              : "Creating a personalised learning path just for you…"}
        </p>

        {apiError && (
          <div className="mt-6 flex flex-col gap-3 items-center">
            <Button size="lg" className="bg-black text-white hover:bg-zinc-800 rounded-xl px-6" onClick={callApi}>
              <RefreshCw className="w-4 h-4" /> Try Again
            </Button>
            <Button variant="outline" size="lg" className="rounded-xl border-zinc-300" onClick={() => navigate("/roadmap")}>
              Go Back to Form
            </Button>
          </div>
        )}

        {!apiError && (
          <div className="mt-8 space-y-3 text-left">
            {steps.map((s, i) => {
              const done = i < active;
              const current = i === active;
              const Icon = s.icon;
              return (
                <div key={s.label} className={cn(
                  "flex items-center gap-3 p-3.5 rounded-2xl border transition-all",
                  done && "bg-zinc-100/80 border-zinc-300",
                  current && "bg-white border-black shadow-sm ring-1 ring-black/10",
                  !done && !current && "border-zinc-200 bg-zinc-50/50 opacity-40"
                )}>
                  <div className={cn(
                    "w-9 h-9 rounded-xl flex items-center justify-center shrink-0 font-bold",
                    done && "bg-zinc-900 text-white",
                    current && "bg-black text-white shadow-sm",
                    !done && !current && "bg-zinc-200 text-zinc-500"
                  )}>
                    {done ? <Check className="w-4 h-4" /> : current ? <Loader2 className="w-4 h-4 animate-spin" /> : <Icon className="w-4 h-4" />}
                  </div>
                  <span className={cn("text-sm font-semibold", current ? "text-black" : done ? "text-zinc-800" : "text-zinc-500")}>{s.label}</span>
                </div>
              );
            })}
          </div>
        )}

        {!apiError && active >= steps.length && !apiDone && (
          <div className="mt-6 flex items-center justify-center gap-2 text-sm text-zinc-500 font-medium">
            <Loader2 className="w-4 h-4 animate-spin text-zinc-800" />
            <span>Finalizing your learning roadmap…</span>
          </div>
        )}
      </div>
    </main>
  );
};

export default RoadmapGenerating;
