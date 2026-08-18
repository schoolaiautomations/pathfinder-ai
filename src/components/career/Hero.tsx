import { useNavigate, Link } from "react-router-dom";
import { Sparkles, ShieldCheck, Users, Map, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import wabiLogo from "@/lib/wabi_resolutions_logo.jpeg";

export const Hero = () => {
  const navigate = useNavigate();
  const startAnalysis = () => {
    navigate("/form");
  };
  return (
    <section className="relative overflow-hidden bg-background">
      <header className="max-w-6xl mx-auto px-3 sm:px-4 pt-4 sm:pt-8 flex items-center justify-between">
        <div className="flex items-center gap-2.5 sm:gap-3">
          <img 
            src={wabiLogo} 
            alt="Wabi Resolutions Logo" 
            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover border border-zinc-200 shadow-sm" 
          />
          <span className="font-extrabold text-base sm:text-xl text-zinc-950 tracking-tight">Wabi Career Guidance</span>
        </div>
        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            to="/roadmap"
            className="hidden md:inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-zinc-600 hover:text-black px-3 py-1.5 rounded-lg hover:bg-zinc-100 transition-colors"
          >
            <Map className="w-3.5 h-3.5" /> Roadmap
          </Link>
          <Link
            to="/blogs"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-zinc-900 bg-zinc-100 hover:bg-zinc-200 border border-zinc-200 px-3 py-1.5 rounded-full transition-colors"
          >
            <BookOpen className="w-3.5 h-3.5 text-black" /> Research & Blogs
          </Link>
          <div className="hidden lg:flex items-center gap-1.5 text-xs sm:text-sm font-medium text-zinc-500 bg-zinc-100/80 border border-zinc-200 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full">
            <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-zinc-800" /> Built by Neeli Sivasai
          </div>
        </div>
      </header>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-6 sm:pt-12 pb-10 sm:pb-16 animate-fade-in">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Left Column: Content */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-5 text-left">
            <div>
              <span className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-zinc-100 border border-zinc-200 shadow-sm text-[11px] sm:text-xs font-bold text-zinc-800 uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-black animate-pulse" />
                AI-Powered Career Guidance
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-extrabold leading-[1.12] tracking-tight text-zinc-950">
              Discover the right{" "}
              <span className="text-black underline underline-offset-4 sm:underline-offset-8 decoration-zinc-300">
                career path
              </span>{" "}
              with AI
            </h1>

            <p className="text-sm sm:text-base text-zinc-500 max-w-xl leading-relaxed font-medium">
              Tell us about yourself, your interests, and your goals. Our AI will suggest suitable career options, study paths, and future opportunities.
            </p>

            <div className="pt-1 flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-center">
              <button
                onClick={startAnalysis}
                className="bg-black text-white hover:bg-zinc-800 rounded-full px-7 h-12 sm:h-13 font-bold shadow-md transition-all text-sm sm:text-base flex items-center justify-center cursor-pointer"
              >
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 mr-1.5" /> Start Career Analysis
              </button>
              <button
                onClick={() => navigate("/roadmap")}
                className="bg-zinc-100 text-zinc-950 border border-zinc-300 hover:bg-zinc-200 hover:text-zinc-950 rounded-full px-7 h-12 sm:h-13 font-bold shadow-sm transition-all text-sm sm:text-base flex items-center justify-center cursor-pointer"
              >
                <Map className="w-4 h-4 sm:w-5 sm:h-5 mr-1.5" /> Build Learning Roadmap
              </button>
            </div>

            <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-zinc-500 pt-1">
              <Users className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-zinc-800" /> For students from school to college level
            </div>
          </div>

          {/* Right Column: Balanced image card that matches the left column height */}
          <div className="lg:col-span-5 flex">
            <div className="w-full rounded-3xl border border-zinc-200 bg-white p-4 sm:p-5 shadow-card flex flex-col justify-between">
              <div className="rounded-2xl border border-zinc-200 overflow-hidden bg-zinc-50 flex-1 flex items-center justify-center p-2">
                <img
                  src="/career_guidance_hero.jpg"
                  alt="AI Career Guidance Navigation"
                  className="w-full h-auto max-h-64 object-contain"
                />
              </div>

              <div className="mt-4 pt-3 border-t border-zinc-100 flex items-center justify-between text-xs font-semibold text-zinc-600">
                <span className="flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-black" /> Guidance
                </span>
                <span className="flex items-center gap-1.5">
                  <Map className="w-3.5 h-3.5 text-black" /> Step-by-Step Path
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


