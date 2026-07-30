import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Brain, Compass, Map, FileText, Check, Loader2, AlertCircle, RefreshCw } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { generateCareerReport } from "@/lib/gemini";
import { STORAGE_KEY, REPORT_STORAGE_KEY } from "@/lib/career-data";
import type { FormData, CareerReport } from "@/lib/career-data";

const steps = [
  { icon: Brain, label: "Understanding your profile" },
  { icon: Compass, label: "Matching career paths" },
  { icon: Map, label: "Building your study roadmap" },
  { icon: FileText, label: "Preparing your AI career report" },
];

const Analyzing = () => {
  const [active, setActive] = useState(0);
  const [apiDone, setApiDone] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);
  const reportRef = useRef<CareerReport | null>(null);
  const apiCalledRef = useRef(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  // Call Gemini API on mount
  const callApi = async () => {
    setApiError(null);
    setApiDone(false);
    setActive(0);
    apiCalledRef.current = true;

    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (!saved) {
        throw new Error("No form data found. Please fill out the form first.");
      }
      const formData: FormData = JSON.parse(saved);
      const report = await generateCareerReport(formData);
      reportRef.current = report;
      localStorage.setItem(REPORT_STORAGE_KEY, JSON.stringify(report));

      // Save data to SheetDB
      try {
        const locationStr = [formData.city, formData.state, formData.country].filter(Boolean).join(", ");
        await fetch("https://sheetdb.io/api/v1/v872qrt39irws", {
          method: "POST",
          headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            data: [
              {
                name: formData.name || "Not provided",
                phone_number: formData.phone_number || "Not provided",
                class: formData.educationLevel || "Not provided",
                location: locationStr || "Not provided",
                performance: formData.performance || "Not provided",
                intrests: formData.interests?.length ? formData.interests.join(", ") : "None",
                skills: formData.skills?.length ? formData.skills.join(", ") : "None",
              },
            ],
          }),
        });
      } catch (err) {
        console.error("Failed to save to SheetDB:", err);
      }

      setApiDone(true);
    } catch (err: any) {
      console.error("Gemini API error:", err);
      setApiError(err.message || "Something went wrong. Please try again.");
      toast({
        title: "AI Report Generation Failed",
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
    if (apiError) return; // Stop animation on error
    if (active >= steps.length) return;
    const t = setTimeout(() => setActive((a) => a + 1), 1200);
    return () => clearTimeout(t);
  }, [active, apiError]);

  // Navigate to report when BOTH animation completes AND API is done
  useEffect(() => {
    if (active >= steps.length && apiDone) {
      const t = setTimeout(() => navigate("/report"), 600);
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
          {apiError ? "Something went wrong" : "Analyzing your profile"}
        </h1>
        <p className="text-zinc-500 text-sm mt-3 leading-relaxed">
          {apiError
            ? apiError
            : active >= steps.length && !apiDone
              ? "Almost there… finishing up your personalised report…"
              : "Analyzing your interests, education level, and future opportunities…"}
        </p>

        {apiError && (
          <div className="mt-6 flex flex-col gap-3 items-center">
            <Button size="lg" className="bg-black text-white hover:bg-zinc-800 rounded-xl px-6" onClick={callApi}>
              <RefreshCw className="w-4 h-4" /> Try Again
            </Button>
            <Button variant="outline" size="lg" className="rounded-xl border-zinc-300" onClick={() => navigate("/")}>
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

        {/* Show waiting indicator when animation is done but API is still running */}
        {!apiError && active >= steps.length && !apiDone && (
          <div className="mt-6 flex items-center justify-center gap-2 text-sm text-zinc-500 font-medium">
            <Loader2 className="w-4 h-4 animate-spin text-zinc-800" />
            <span>Finalizing your AI career report…</span>
          </div>
        )}
      </div>
    </main>
  );
};

export default Analyzing;

