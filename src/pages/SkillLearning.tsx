import { useEffect, useState, useCallback } from "react";
import { Link, useSearchParams } from "react-router-dom";
import {
  ArrowLeft,
  Loader2,
  Lightbulb,
  BookOpen,
  PenLine,
  ExternalLink,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  RefreshCw,
  AlertCircle,
  GraduationCap,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ROADMAP_FORM_KEY } from "@/lib/roadmap-data";
import type { RoadmapFormData, SkillLesson } from "@/lib/roadmap-data";
import { generateSkillLesson } from "@/lib/roadmap-ai";
import { Navbar } from "@/components/common/Navbar";

const SkillLearning = () => {
  const [searchParams] = useSearchParams();
  const skillName = searchParams.get("skill") || "";

  const [lesson, setLesson] = useState<SkillLesson | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [expandedTopics, setExpandedTopics] = useState<Set<number>>(new Set([0]));

  const toggleTopic = (idx: number) => {
    setExpandedTopics((prev) => {
      const next = new Set(prev);
      if (next.has(idx)) {
        next.delete(idx);
      } else {
        next.add(idx);
      }
      return next;
    });
  };

  const fetchLesson = useCallback(async () => {
    setLoading(true);
    setError(null);
    setLesson(null);

    try {
      const savedForm = localStorage.getItem(ROADMAP_FORM_KEY);
      let careerGoal = "their career";
      let currentClass = "student";
      if (savedForm) {
        const fd: RoadmapFormData = JSON.parse(savedForm);
        careerGoal = fd.careerGoal || careerGoal;
        currentClass = fd.currentClass || currentClass;
      }

      const result = await generateSkillLesson(skillName, careerGoal, currentClass);
      setLesson(result);
      setExpandedTopics(new Set([0]));
    } catch (err: any) {
      console.error("Skill lesson error:", err);
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }, [skillName]);

  useEffect(() => {
    if (skillName) {
      fetchLesson();
    }
  }, [skillName, fetchLesson]);

  // Loading state
  if (loading) {
    return (
      <main className="min-h-screen bg-background flex flex-col">
        <Navbar backTo="/roadmap/result" backLabel="Back to Roadmap" />
        <div className="flex-1 flex items-center justify-center px-4 py-12">
          <div className="max-w-lg w-full bg-white border border-zinc-200 rounded-3xl shadow-card p-8 sm:p-10 text-center animate-scale-in">
            <div className="w-16 h-16 mx-auto rounded-2xl bg-black flex items-center justify-center text-white shadow-md mb-6">
              <Loader2 className="w-8 h-8 text-white animate-spin" />
            </div>
            <h1 className="text-xl sm:text-2xl font-extrabold text-zinc-950">
              Preparing your lesson
            </h1>
            <p className="text-zinc-500 text-sm mt-3 leading-relaxed">
              Creating a personalised lesson for{" "}
              <span className="font-bold text-zinc-800">"{skillName}"</span>…
            </p>
            <div className="mt-6 flex items-center justify-center gap-2 text-sm text-zinc-500 font-medium">
              <GraduationCap className="w-4 h-4 text-zinc-800" />
              <span>Tailored to your level</span>
            </div>
          </div>
        </div>
      </main>
    );
  }

  // Error state
  if (error) {
    return (
      <main className="min-h-screen bg-background flex flex-col">
        <Navbar backTo="/roadmap/result" backLabel="Back to Roadmap" />
        <div className="flex-1 flex items-center justify-center px-4 py-12">
          <div className="max-w-lg w-full bg-white border border-zinc-200 rounded-3xl shadow-card p-8 sm:p-10 text-center animate-scale-in">
            <div className="w-16 h-16 mx-auto rounded-2xl bg-black flex items-center justify-center text-white shadow-md mb-6">
              <AlertCircle className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-xl sm:text-2xl font-extrabold text-zinc-950">
              Something went wrong
            </h1>
            <p className="text-zinc-500 text-sm mt-3 leading-relaxed">
              {error}
            </p>
            <button
              onClick={fetchLesson}
              className="mt-6 bg-black text-white hover:bg-zinc-800 rounded-xl px-5 py-2.5 font-bold text-sm inline-flex items-center gap-2 cursor-pointer"
            >
              <RefreshCw className="w-4 h-4" /> Try Again
            </button>
          </div>
        </div>
      </main>
    );
  }

  if (!lesson) return null;

  return (
    <main className="min-h-screen bg-background pb-16 safe-bottom">
      <Navbar backTo="/roadmap/result" backLabel="Back to Roadmap" />
      <div className="max-w-4xl mx-auto px-3 sm:px-4 pt-6 sm:pt-8">
        {/* Header */}
        <Card className="bg-white border border-zinc-200 rounded-2xl sm:rounded-3xl p-5 sm:p-10 shadow-card animate-fade-in mb-6 sm:mb-8">
          <div className="flex items-center gap-2 mb-2 sm:mb-3">
            <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5 text-black" />
            <span className="text-[11px] sm:text-xs font-bold tracking-wider text-zinc-700 uppercase">
              Skill Lesson
            </span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-zinc-950 leading-tight">
            {lesson.skillName}
          </h1>
        </Card>

        {/* Overview */}
        <Card className="p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-zinc-200 bg-white shadow-sm mb-6 sm:mb-8 animate-fade-in">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center shrink-0">
              <Lightbulb className="w-5 h-5 text-amber-600" />
            </div>
            <div>
              <h2 className="font-bold text-sm sm:text-base text-zinc-950 mb-1">
                Overview
              </h2>
              <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                {lesson.overview}
              </p>
            </div>
          </div>
        </Card>

        {/* Topics */}
        <h2 className="text-lg sm:text-xl font-bold text-zinc-950 mb-3 sm:mb-4">
          What You'll Learn
        </h2>
        <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
          {lesson.topics.map((topic, idx) => {
            const isOpen = expandedTopics.has(idx);
            return (
              <Card
                key={idx}
                className="rounded-xl sm:rounded-2xl border border-zinc-200 bg-white shadow-sm overflow-hidden animate-fade-in"
                style={{ animationDelay: `${idx * 80}ms` }}
              >
                <button
                  onClick={() => toggleTopic(idx)}
                  className="flex items-center justify-between w-full p-4 sm:p-5 text-left touch-manipulation"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-zinc-100 border border-zinc-200 flex items-center justify-center text-sm font-bold text-zinc-800 shrink-0">
                      {idx + 1}
                    </div>
                    <h3 className="font-bold text-sm sm:text-base text-zinc-950">
                      {topic.title}
                    </h3>
                  </div>
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4 text-zinc-500 shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-zinc-500 shrink-0" />
                  )}
                </button>

                {isOpen && (
                  <div className="px-4 sm:px-5 pb-4 sm:pb-5 animate-fade-in">
                    <div className="ml-11 sm:ml-12">
                      <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed mb-3">
                        {topic.explanation}
                      </p>
                      <div className="bg-zinc-50 border border-zinc-200 rounded-xl p-3 sm:p-4">
                        <div className="text-[10px] sm:text-[11px] font-bold text-zinc-500 uppercase tracking-wider mb-2">
                          Example
                        </div>
                        <pre className="text-xs sm:text-sm text-zinc-800 whitespace-pre-wrap font-mono leading-relaxed">
                          {topic.example}
                        </pre>
                      </div>
                    </div>
                  </div>
                )}
              </Card>
            );
          })}
        </div>

        {/* Practice Exercises */}
        <h2 className="text-lg sm:text-xl font-bold text-zinc-950 mb-3 sm:mb-4">
          Practice Exercises
        </h2>
        <div className="space-y-3 mb-6 sm:mb-8">
          {lesson.practiceExercises.map((exercise, idx) => (
            <Card
              key={idx}
              className="p-3.5 sm:p-4 rounded-xl border border-zinc-200 bg-white shadow-sm animate-fade-in"
              style={{ animationDelay: `${idx * 80}ms` }}
            >
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center shrink-0">
                  <PenLine className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <span className="text-[10px] sm:text-[11px] font-bold text-zinc-400 uppercase tracking-wider">
                    Exercise {idx + 1}
                  </span>
                  <p className="text-xs sm:text-sm text-zinc-700 font-medium mt-0.5 leading-relaxed">
                    {exercise}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Resources */}
        <h2 className="text-lg sm:text-xl font-bold text-zinc-950 mb-3 sm:mb-4">
          Learning Resources
        </h2>
        <div className="grid sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
          {lesson.resources.map((resource, idx) => (
            <Card
              key={idx}
              className={cn(
                "p-3.5 sm:p-4 rounded-xl border border-zinc-200 bg-white shadow-sm animate-fade-in",
                resource.url && "hover:shadow-md transition-all"
              )}
              style={{ animationDelay: `${idx * 80}ms` }}
            >
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-green-50 border border-green-200 flex items-center justify-center shrink-0">
                    <BookOpen className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-zinc-950">{resource.name}</h4>
                    <span className="inline-block mt-1 px-2 py-0.5 rounded-md bg-zinc-100 border border-zinc-200 text-[10px] sm:text-[11px] font-semibold text-zinc-600 uppercase tracking-wider">
                      {resource.type}
                    </span>
                  </div>
                </div>
                {resource.url && (
                  <a
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-500 hover:text-black transition-colors shrink-0 mt-1"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </Card>
          ))}
        </div>

        {/* Next Steps */}
        <h2 className="text-lg sm:text-xl font-bold text-zinc-950 mb-3 sm:mb-4">
          What to Learn Next
        </h2>
        <div className="space-y-2 mb-8">
          {lesson.nextSteps.map((step, idx) => (
            <div
              key={idx}
              className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-700 font-medium animate-fade-in"
              style={{ animationDelay: `${idx * 80}ms` }}
            >
              <ArrowRight className="w-4 h-4 mt-0.5 shrink-0 text-zinc-500" />
              <span>{step}</span>
            </div>
          ))}
        </div>

        {/* Back to Roadmap */}
        <div className="text-center pt-4 pb-8">
          <Link to="/roadmap/result">
            <Button
              variant="outline"
              size="lg"
              className="rounded-xl border-zinc-300 font-semibold"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Roadmap
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default SkillLearning;
