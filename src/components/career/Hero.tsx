import { Sparkles, ShieldCheck, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  const scrollToForm = () => {
    document.getElementById("form")?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <section className="relative overflow-hidden bg-gradient-hero">
      <div className="absolute inset-0 -z-10 opacity-50">
        <div className="absolute top-20 -left-20 w-72 h-72 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-accent/20 blur-3xl" />
      </div>
      <header className="max-w-6xl mx-auto px-4 pt-8 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-xl bg-gradient-primary flex items-center justify-center shadow-glow">
            <Sparkles className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="font-bold text-lg">CareerPath AI</span>
        </div>
        <div className="hidden sm:flex items-center gap-1 text-sm text-muted-foreground">
          <ShieldCheck className="w-4 h-4 text-accent" /> Trusted by students & parents
        </div>
      </header>
      <div className="max-w-4xl mx-auto px-4 pt-12 sm:pt-20 pb-16 sm:pb-24 text-center animate-fade-in">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-card border border-border shadow-soft text-xs font-semibold">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          AI-Powered Career Guidance
        </span>
        <h1 className="text-4xl sm:text-6xl font-bold mt-6 leading-tight">
          Discover the right{" "}
          <span className="text-gradient-primary">career path</span>
          <br className="hidden sm:block" /> with AI
        </h1>
        <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
          Tell us about yourself, your interests, and your goals. Our AI will suggest suitable career options, study paths, and future opportunities.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="hero" size="xl" onClick={scrollToForm}>
            <Sparkles /> Start Career Analysis
          </Button>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Users className="w-4 h-4" /> For students from school to college level
          </div>
        </div>
        <div className="mt-14 grid grid-cols-3 gap-4 max-w-xl mx-auto">
          {[["50K+", "Students guided"], ["95%", "Accuracy"], ["6 steps", "To your report"]].map(([n, l]) => (
            <div key={l} className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-gradient-primary">{n}</div>
              <div className="text-xs text-muted-foreground mt-1">{l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
