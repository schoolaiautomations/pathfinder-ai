import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Clock,
  BookOpen,
  Zap,
  Flag,
  Trophy,
  Sparkles,
  ChevronRight,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { ROADMAP_FORM_KEY, ROADMAP_RESULT_KEY } from "@/lib/roadmap-data";
import type { LearningRoadmap, RoadmapFormData } from "@/lib/roadmap-data";

import { Navbar } from "@/components/common/Navbar";

const RoadmapResult = () => {
  const [roadmap, setRoadmap] = useState<LearningRoadmap | null>(null);
  const [formData, setFormData] = useState<RoadmapFormData | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const savedResult = localStorage.getItem(ROADMAP_RESULT_KEY);
    if (!savedResult) {
      navigate("/");
      return;
    }
    try {
      setRoadmap(JSON.parse(savedResult) as LearningRoadmap);
    } catch {
      navigate("/");
      return;
    }

    const savedForm = localStorage.getItem(ROADMAP_FORM_KEY);
    if (savedForm) {
      try {
        setFormData(JSON.parse(savedForm) as RoadmapFormData);
      } catch {}
    }
  }, [navigate]);

  if (!roadmap) return null;

  return (
    <main className="min-h-screen bg-background pb-16 safe-bottom">
      <Navbar backTo="/roadmap" backLabel="New Roadmap" />

      <div className="max-w-4xl mx-auto px-3 sm:px-4 pt-6 sm:pt-8">

        {/* Hero Card */}
        <Card className="bg-white border border-zinc-200 rounded-2xl sm:rounded-3xl p-5 sm:p-10 shadow-card animate-fade-in">
          <div className="flex items-center gap-2 mb-2 sm:mb-3">
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-black" />
            <span className="text-[11px] sm:text-xs font-bold tracking-wider text-zinc-700 uppercase">
              Your Learning Roadmap
            </span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-zinc-950 leading-tight">
            How to become a{" "}
            <span className="underline underline-offset-4 sm:underline-offset-8 decoration-zinc-300">
              {roadmap.careerGoal}
            </span>
          </h1>
          <p className="text-zinc-500 mt-2 sm:mt-3 max-w-2xl text-xs sm:text-base leading-relaxed">
            {roadmap.summary}
          </p>
          {formData && (
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200 text-xs font-semibold text-zinc-700">
                📍 {formData.location}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200 text-xs font-semibold text-zinc-700">
                🎓 {formData.currentClass}
              </span>
            </div>
          )}
        </Card>

        {/* Phase Timeline */}
        <h2 className="text-lg sm:text-xl font-bold text-zinc-950 mt-8 sm:mt-10 mb-1 sm:mb-2">
          Your Learning Path
        </h2>
        <p className="text-sm text-zinc-500 font-medium mb-6 sm:mb-8">
          Click on any skill to start learning it step by step.
        </p>

        <div className="relative ml-3 sm:ml-5 border-l-2 border-zinc-300 space-y-6 sm:space-y-8 pb-4">
          {roadmap.phases.map((phase, idx) => (
            <div key={idx} className="relative pl-7 sm:pl-10 animate-fade-in" style={{ animationDelay: `${idx * 100}ms` }}>
              {/* Timeline Node */}
              <div className="absolute -left-[15px] sm:-left-[17px] top-5 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-black text-white flex items-center justify-center text-xs sm:text-sm font-bold shadow-md">
                {idx + 1}
              </div>

              <Card className="p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-zinc-200 bg-white shadow-sm hover:shadow-md transition-all">
                {/* Phase Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <h3 className="text-base sm:text-lg font-bold text-zinc-950">
                    {phase.title}
                  </h3>
                  <div className="flex items-center gap-1.5 text-[11px] sm:text-xs font-semibold text-zinc-700 bg-zinc-100 border border-zinc-200 px-2.5 py-1 rounded-full shrink-0">
                    <Clock className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                    {phase.duration}
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed mb-4">
                  {phase.description}
                </p>

                {/* Skills — Clickable Chips */}
                {phase.skills && phase.skills.length > 0 && (
                  <div className="mb-4">
                    <div className="text-[11px] sm:text-xs font-bold text-zinc-500 uppercase tracking-wider mb-2">
                      Skills to Learn
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {phase.skills.map((skill) => (
                        <button
                          key={skill}
                          onClick={() =>
                            navigate(
                              `/roadmap/learn?skill=${encodeURIComponent(skill)}`
                            )
                          }
                          className="inline-flex items-center gap-1.5 bg-zinc-900 text-white hover:bg-zinc-700 cursor-pointer rounded-full px-3 py-1.5 text-[11px] sm:text-xs font-semibold transition-all hover:scale-105 hover:shadow-md active:scale-95"
                        >
                          <Sparkles className="w-3 h-3" />
                          {skill}
                          <ChevronRight className="w-3 h-3 opacity-60" />
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Resources */}
                {phase.resources && phase.resources.length > 0 && (
                  <div className="mb-4">
                    <div className="text-[11px] sm:text-xs font-bold text-zinc-500 uppercase tracking-wider mb-2">
                      Resources
                    </div>
                    <ul className="space-y-1.5">
                      {phase.resources.map((res, ri) => (
                        <li
                          key={ri}
                          className="flex items-start gap-2 text-xs sm:text-sm text-zinc-700"
                        >
                          <BookOpen className="w-3.5 h-3.5 mt-0.5 shrink-0 text-zinc-500" />
                          <span>{res}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Action Items */}
                {phase.actions && phase.actions.length > 0 && (
                  <div className="mb-4">
                    <div className="text-[11px] sm:text-xs font-bold text-zinc-500 uppercase tracking-wider mb-2">
                      Start Right Now
                    </div>
                    <ul className="space-y-1.5">
                      {phase.actions.map((action, ai) => (
                        <li
                          key={ai}
                          className="flex items-start gap-2 text-xs sm:text-sm text-zinc-700"
                        >
                          <Zap className="w-3.5 h-3.5 mt-0.5 shrink-0 text-amber-600" />
                          <span className="font-medium">{action}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Milestone */}
                {phase.milestone && (
                  <div className="mt-3 pt-3 border-t border-zinc-100">
                    <div className="inline-flex items-center gap-2 bg-zinc-50 border border-zinc-200 rounded-xl px-3 py-2 text-xs sm:text-sm text-zinc-800 font-semibold">
                      <Flag className="w-3.5 h-3.5 text-black shrink-0" />
                      <span>
                        <span className="text-zinc-500 font-medium">Milestone: </span>
                        {phase.milestone}
                      </span>
                    </div>
                  </div>
                )}
              </Card>
            </div>
          ))}

          {/* Final Destination */}
          <div className="relative pl-7 sm:pl-10 pt-2">
            <div className="absolute -left-[19px] sm:-left-[21px] top-3 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black flex items-center justify-center text-white shadow-lg">
              <Trophy className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div className="pt-1">
              <h3 className="text-lg sm:text-xl font-extrabold text-zinc-950">
                {roadmap.careerGoal}
              </h3>
              <p className="text-xs sm:text-sm text-zinc-500 font-semibold mt-0.5">
                🎉 Goal Achieved — You made it!
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default RoadmapResult;
