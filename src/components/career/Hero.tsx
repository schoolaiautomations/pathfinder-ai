import { useNavigate } from "react-router-dom";
import { Sparkles, ShieldCheck, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import wabiLogo from "@/lib/wabi_resolutions_logo.jpeg";

export const Hero = () => {
  const navigate = useNavigate();
  const startAnalysis = () => {
    navigate("/form");
  };
  return (
    <section className="relative overflow-hidden bg-background">
      <header className="max-w-6xl mx-auto px-4 pt-8 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img 
            src={wabiLogo} 
            alt="Wabi Resolutions Logo" 
            className="w-10 h-10 rounded-full object-cover border border-zinc-200 shadow-sm" 
          />
          <span className="font-extrabold text-xl text-zinc-950 tracking-tight">Wabi Career Guidance</span>
        </div>
        <div className="hidden sm:flex items-center gap-1.5 text-sm font-medium text-zinc-500 bg-zinc-100/80 border border-zinc-200 px-3 py-1.5 rounded-full">
          <ShieldCheck className="w-4 h-4 text-zinc-800" /> Built by Neeli Sivasai
        </div>
      </header>
      <div className="max-w-4xl mx-auto px-4 pt-12 sm:pt-20 pb-16 sm:pb-24 text-center animate-fade-in">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-100 border border-zinc-200 shadow-sm text-xs font-bold text-zinc-800 uppercase tracking-wider">
          <span className="w-2 h-2 rounded-full bg-black animate-pulse" />
          AI-Powered Career Guidance
        </span>
        <h1 className="text-4xl sm:text-6xl font-extrabold mt-6 leading-tight tracking-tight text-zinc-950">
          Discover the right{" "}
          <span className="text-black underline underline-offset-8 decoration-zinc-300">career path</span>
          <br className="hidden sm:block" /> with AI
        </h1>
        <p className="text-lg text-zinc-500 mt-6 max-w-2xl mx-auto leading-relaxed font-medium">
          Tell us about yourself, your interests, and your goals. Our AI will suggest suitable career options, study paths, and future opportunities.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="xl" onClick={startAnalysis} className="bg-black text-white hover:bg-zinc-800 rounded-full px-8 font-bold shadow-md transition-all">
            <Sparkles className="w-5 h-5" /> Start Career Analysis
          </Button>
          <div className="flex items-center gap-2 text-sm font-medium text-zinc-500">
            <Users className="w-4 h-4 text-zinc-800" /> For students from school to college level
          </div>
        </div>
        <div className="mt-14 grid grid-cols-2 gap-6 max-w-md mx-auto pt-6 border-t border-zinc-200/80">
          {[["95%", "Accuracy"], ["6 steps", "To your report"]].map(([n, l]) => (
            <div key={l} className="text-center">
              <div className="text-2xl sm:text-3xl font-extrabold text-black">{n}</div>
              <div className="text-xs text-zinc-500 font-semibold mt-1">{l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


