import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Brain, Compass, Map, FileText, Check, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

const steps = [
  { icon: Brain, label: "Understanding your profile" },
  { icon: Compass, label: "Matching career paths" },
  { icon: Map, label: "Building your study roadmap" },
  { icon: FileText, label: "Preparing your AI career report" },
];

const Analyzing = () => {
  const [active, setActive] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    if (active >= steps.length) {
      const t = setTimeout(() => navigate("/report"), 600);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => setActive((a) => a + 1), 1200);
    return () => clearTimeout(t);
  }, [active, navigate]);

  return (
    <main className="min-h-screen bg-gradient-hero flex items-center justify-center px-4">
      <div className="max-w-lg w-full bg-card rounded-3xl shadow-card p-8 sm:p-10 text-center animate-scale-in">
        <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-primary flex items-center justify-center shadow-glow mb-6">
          <Loader2 className="w-8 h-8 text-primary-foreground animate-spin" />
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold">Analyzing your profile</h1>
        <p className="text-muted-foreground mt-3">Analyzing your interests, education level, and future opportunities…</p>

        <div className="mt-8 space-y-3 text-left">
          {steps.map((s, i) => {
            const done = i < active;
            const current = i === active;
            const Icon = s.icon;
            return (
              <div key={s.label} className={cn(
                "flex items-center gap-3 p-3 rounded-xl border transition-smooth",
                done && "bg-accent-soft border-accent/30",
                current && "bg-secondary border-primary/40 shadow-soft",
                !done && !current && "border-border opacity-50"
              )}>
                <div className={cn(
                  "w-9 h-9 rounded-lg flex items-center justify-center shrink-0",
                  done && "bg-gradient-accent text-white",
                  current && "bg-gradient-primary text-white",
                  !done && !current && "bg-muted text-muted-foreground"
                )}>
                  {done ? <Check className="w-4 h-4" /> : current ? <Loader2 className="w-4 h-4 animate-spin" /> : <Icon className="w-4 h-4" />}
                </div>
                <span className={cn("text-sm font-medium", current && "text-primary")}>{s.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default Analyzing;
