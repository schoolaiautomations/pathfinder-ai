import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Clock,
  BookOpen,
  Zap,
  Flag,
  Trophy,
  Sparkles,
  ChevronRight,
  GraduationCap,
  FileText,
  Target,
  Heart,
  Users,
  TrendingUp,
  TrendingDown,
  Minus,
  AlertTriangle,
  Building2,
  IndianRupee,
  Shield,
  Bot,
  Lightbulb,
  ArrowRight,
  Download,
  Printer,
  Award,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { ROADMAP_FORM_KEY, ROADMAP_RESULT_KEY, findCareerFormatFile } from "@/lib/roadmap-data";
import type { LearningRoadmap, RoadmapFormData } from "@/lib/roadmap-data";
import { Navbar } from "@/components/common/Navbar";
import { FourCirclesReportView } from "@/components/career/FourCirclesReportView";
import { LockedCareerInsights } from "@/components/career/LockedCareerInsights";

const demandIcon = (trend: string) => {
  if (trend === "High Growth") return <TrendingUp className="w-4 h-4 text-green-600" />;
  if (trend === "Declining") return <TrendingDown className="w-4 h-4 text-red-500" />;
  return <Minus className="w-4 h-4 text-amber-500" />;
};

const demandColor = (trend: string) => {
  if (trend === "High Growth") return "bg-green-50 border-green-200 text-green-800";
  if (trend === "Declining") return "bg-red-50 border-red-200 text-red-700";
  return "bg-amber-50 border-amber-200 text-amber-800";
};

const RoadmapResult = () => {
  const [roadmap, setRoadmap] = useState<LearningRoadmap | null>(null);
  const [formData, setFormData] = useState<RoadmapFormData | null>(null);
  const [curatedFile, setCuratedFile] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleDownloadPdf = () => {
    const originalTitle = document.title;
    if (roadmap?.careerGoal) {
      document.title = `${roadmap.careerGoal} - Career Roadmap - Wabi Career Guidance`;
    }
    window.print();
    setTimeout(() => {
      document.title = originalTitle;
    }, 1000);
  };

  useEffect(() => {
    const savedForm = localStorage.getItem(ROADMAP_FORM_KEY);
    let parsedForm: RoadmapFormData | null = null;
    if (savedForm) {
      try {
        parsedForm = JSON.parse(savedForm) as RoadmapFormData;
        setFormData(parsedForm);
      } catch {}
    }

    if (parsedForm?.careerGoal) {
      const match = findCareerFormatFile(parsedForm.careerGoal);
      if (match) {
        setCuratedFile(match);
        return;
      }
    }

    const savedResult = localStorage.getItem(ROADMAP_RESULT_KEY);
    if (!savedResult && !parsedForm) {
      navigate("/roadmap");
      return;
    }
    if (savedResult) {
      try {
        setRoadmap(JSON.parse(savedResult) as LearningRoadmap);
      } catch {
        navigate("/roadmap");
        return;
      }
    }
  }, [navigate]);

  // If this career has a curated Four Circles document, render it!
  if (formData && curatedFile) {
    return <FourCirclesReportView formData={formData} fileName={curatedFile} />;
  }

  if (!roadmap) return null;

  const { academicPathway, futureOutlook, hobbies, similarProfessions, scholarships } = roadmap;

  return (
    <main className="min-h-screen bg-background pb-20 safe-bottom">
      <div className="no-print">
        <Navbar backTo="/roadmap" backLabel="New Roadmap" />
      </div>

      <div className="max-w-4xl mx-auto px-3 sm:px-4 pt-6 sm:pt-8 space-y-8">

        {/* ── Hero Card ─────────────────────────────────────────────────── */}
        <Card className="bg-white border border-zinc-200 rounded-2xl sm:rounded-3xl p-5 sm:p-10 shadow-card animate-fade-in">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-2 sm:mb-3">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-black" />
              <span className="text-[11px] sm:text-xs font-bold tracking-wider text-zinc-700 uppercase">
                Your Learning Roadmap
              </span>
            </div>

            <button
              onClick={handleDownloadPdf}
              className="no-print inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-black text-white hover:bg-zinc-800 text-xs font-bold transition-all shadow-sm cursor-pointer hover:scale-105 active:scale-95"
            >
              <Download className="w-3.5 h-3.5" />
              Download PDF
            </button>
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

        {/* ── SECTION 1: Academic Pathway (Linear Chronological Flow) ── */}
        {academicPathway && (
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <GraduationCap className="w-5 h-5 text-black" />
                <h2 className="text-lg sm:text-xl font-extrabold text-zinc-950">
                  Academic Pathway (Step-by-Step)
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-zinc-500 font-medium">
                Follow this sequential academic roadmap from school through entrance exams to college graduation.
              </p>
            </div>

            {/* Step 1: Intermediate Streams */}
            {academicPathway.intermediateOptions?.length > 0 && (
              <div className="p-4 sm:p-5 rounded-2xl border border-zinc-200 bg-white space-y-3">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-black text-white text-xs font-bold flex items-center justify-center">
                    1
                  </span>
                  <div className="text-xs sm:text-sm font-extrabold text-zinc-950 uppercase tracking-wider">
                    Step 1: Class 11–12 Stream Selection (Intermediate / +2)
                  </div>
                </div>
                <p className="text-xs text-zinc-500 font-medium">
                  Choose the right subject combination in 11th & 12th standard to build foundational subject knowledge:
                </p>

                <div className="grid sm:grid-cols-2 gap-3 pt-1">
                  {academicPathway.intermediateOptions.map((c, i) => (
                    <div key={i} className="p-3.5 rounded-xl border border-zinc-150 bg-zinc-50/70">
                      <div className="flex items-start justify-between gap-2 mb-1.5">
                        <div className="font-bold text-sm text-zinc-950">{c.name}</div>
                        <span className="px-2 py-0.5 rounded-full bg-white border border-zinc-200 text-[10px] font-bold text-zinc-700 shrink-0">
                          {c.duration}
                        </span>
                      </div>
                      <p className="text-xs text-zinc-600 leading-relaxed mb-2">{c.description}</p>
                      <div className="flex flex-wrap gap-1.5">
                        {c.subjects.map((s, si) => (
                          <span key={si} className="px-2 py-0.5 rounded-full bg-white border border-zinc-200 text-[10px] font-semibold text-zinc-700">
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Step 2: Key Entrance Exams (Written after 10th / during 12th) */}
            {academicPathway.keyExams?.length > 0 && (
              <div className="p-4 sm:p-5 rounded-2xl border border-zinc-200 bg-white space-y-3">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-black text-white text-xs font-bold flex items-center justify-center">
                    2
                  </span>
                  <div className="text-xs sm:text-sm font-extrabold text-zinc-950 uppercase tracking-wider">
                    Step 2: Entrance & Competitive Exams to Write
                  </div>
                </div>
                <p className="text-xs text-zinc-500 font-medium">
                  Exams you need to prepare for and write (during/after 12th) to earn admission into top colleges:
                </p>

                <div className="space-y-3 pt-1">
                  {academicPathway.keyExams.map((exam, i) => (
                    <div key={i} className="flex items-start gap-3 p-3.5 rounded-xl bg-zinc-50/70 border border-zinc-200">
                      <div className="w-8 h-8 rounded-xl bg-black text-white flex items-center justify-center shrink-0 mt-0.5">
                        <FileText className="w-4 h-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <div className="font-bold text-sm text-zinc-950">{exam.name}</div>
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-zinc-900 text-white text-[11px] font-bold">
                            📅 {exam.when}
                          </span>
                        </div>
                        <div className="text-xs text-zinc-600 mt-1 leading-relaxed">{exam.description}</div>
                        {exam.forCourses?.length > 0 && (
                          <div className="mt-2 pt-2 border-t border-zinc-200">
                            <div className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider mb-1.5">
                              Unlocks Admission To:
                            </div>
                            <div className="flex flex-wrap gap-1.5">
                              {exam.forCourses.map((course, ci) => (
                                <span
                                  key={ci}
                                  className="px-2 py-0.5 rounded-full bg-white border border-zinc-300 text-zinc-900 text-[10px] font-bold"
                                >
                                  🎓 {course}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Step 3: Degree & College Programs */}
            {academicPathway.degreeOptions?.length > 0 && (
              <div className="p-4 sm:p-5 rounded-2xl border border-zinc-200 bg-white space-y-3">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-black text-white text-xs font-bold flex items-center justify-center">
                    3
                  </span>
                  <div className="text-xs sm:text-sm font-extrabold text-zinc-950 uppercase tracking-wider">
                    Step 3: Degree / Graduation Courses to Pursue
                  </div>
                </div>
                <p className="text-xs text-zinc-500 font-medium">
                  Undergraduate degree or diploma courses you will enroll in based on the entrance exams above:
                </p>

                <div className="grid sm:grid-cols-2 gap-3 pt-1">
                  {academicPathway.degreeOptions.map((c, i) => (
                    <div key={i} className="p-3.5 rounded-xl border border-zinc-150 bg-zinc-50/70">
                      <div className="flex items-start justify-between gap-2 mb-1.5">
                        <div className="font-bold text-sm text-zinc-950">{c.name}</div>
                        <div className="flex gap-1.5 shrink-0">
                          <span className="px-2 py-0.5 rounded-full bg-zinc-900 text-white text-[10px] font-bold">
                            {c.type}
                          </span>
                          <span className="px-2 py-0.5 rounded-full bg-white border border-zinc-200 text-[10px] font-bold text-zinc-700">
                            {c.duration}
                          </span>
                        </div>
                      </div>
                      <p className="text-xs text-zinc-600 leading-relaxed mb-2">{c.description}</p>
                      <div className="flex flex-wrap gap-1.5">
                        {c.subjects.map((s, si) => (
                          <span key={si} className="px-2 py-0.5 rounded-full bg-white border border-zinc-200 text-[10px] font-semibold text-zinc-700">
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* ── SECTION 2: Learning Phase Timeline ────────────────────────── */}
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Target className="w-5 h-5 text-black" />
            <h2 className="text-lg sm:text-xl font-extrabold text-zinc-950">
              Your Learning Path
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-zinc-500 font-medium mb-6">
            Click on any skill to start learning it step by step.
          </p>

          <div className="relative ml-3 sm:ml-5 border-l-2 border-zinc-300 space-y-6 sm:space-y-8 pb-4">
            {roadmap.phases.map((phase, idx) => (
              <div key={idx} className="relative pl-7 sm:pl-10 animate-fade-in" style={{ animationDelay: `${idx * 80}ms` }}>
                {/* Timeline Node */}
                <div className="absolute -left-[15px] sm:-left-[17px] top-5 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-black text-white flex items-center justify-center text-xs sm:text-sm font-bold shadow-md">
                  {idx + 1}
                </div>

                <Card className="p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-zinc-200 bg-white shadow-sm hover:shadow-md transition-all">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <h3 className="text-base sm:text-lg font-bold text-zinc-950">{phase.title}</h3>
                    <div className="flex items-center gap-1.5 text-[11px] sm:text-xs font-semibold text-zinc-700 bg-zinc-100 border border-zinc-200 px-2.5 py-1 rounded-full shrink-0">
                      <Clock className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                      {phase.duration}
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed mb-4">
                    {phase.description}
                  </p>

                  {/* Skills */}
                  {phase.skills?.length > 0 && (
                    <div className="mb-4">
                      <div className="text-[11px] sm:text-xs font-bold text-zinc-500 uppercase tracking-wider mb-2">
                        Skills to Learn
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {phase.skills.map((skill) => (
                          <button
                            key={skill}
                            onClick={() => navigate(`/roadmap/learn?skill=${encodeURIComponent(skill)}`)}
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
                  {phase.resources?.length > 0 && (
                    <div className="mb-4">
                      <div className="text-[11px] sm:text-xs font-bold text-zinc-500 uppercase tracking-wider mb-2">
                        Resources
                      </div>
                      <ul className="space-y-1.5">
                        {phase.resources.map((res, ri) => (
                          <li key={ri} className="flex items-start gap-2 text-xs sm:text-sm text-zinc-700">
                            <BookOpen className="w-3.5 h-3.5 mt-0.5 shrink-0 text-zinc-500" />
                            <span>{res}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Actions */}
                  {phase.actions?.length > 0 && (
                    <div className="mb-4">
                      <div className="text-[11px] sm:text-xs font-bold text-zinc-500 uppercase tracking-wider mb-2">
                        Start Right Now
                      </div>
                      <ul className="space-y-1.5">
                        {phase.actions.map((action, ai) => (
                          <li key={ai} className="flex items-start gap-2 text-xs sm:text-sm text-zinc-700">
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
                <h3 className="text-lg sm:text-xl font-extrabold text-zinc-950">{roadmap.careerGoal}</h3>
                <p className="text-xs sm:text-sm text-zinc-500 font-semibold mt-0.5">
                  🎉 Goal Achieved — You made it!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ── SECTION 3: Hobbies to Develop ────────────────────────────── */}
        {hobbies?.length > 0 && (
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Heart className="w-5 h-5 text-black" />
              <h2 className="text-lg sm:text-xl font-extrabold text-zinc-950">
                Hobbies to Develop Now
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-zinc-500 font-medium mb-5">
              These activities will strengthen your career readiness outside the classroom.
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              {hobbies.map((h, i) => (
                <div key={i} className="flex items-start gap-3 p-4 rounded-2xl bg-white border border-zinc-200">
                  <div className="w-8 h-8 rounded-xl bg-zinc-100 border border-zinc-200 flex items-center justify-center shrink-0 text-base">
                    {["🎨", "🔬", "💻", "📚", "🎵", "🏃", "✍️", "🎭"][i % 8]}
                  </div>
                  <div>
                    <div className="font-bold text-sm text-zinc-950">{h.hobby}</div>
                    <div className="text-xs text-zinc-500 mt-0.5 leading-relaxed">{h.reason}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── SECTION: Scholarships & Financial Aid Exams ──────────────── */}
        {scholarships?.length > 0 && (
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Award className="w-5 h-5 text-black" />
              <h2 className="text-lg sm:text-xl font-extrabold text-zinc-950">
                Scholarships & Financial Aid Exams
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-zinc-500 font-medium mb-5">
              Government and merit scholarship programs and entrance tests available for this pathway.
            </p>

            <div className="grid sm:grid-cols-2 gap-3.5">
              {scholarships.map((s, i) => (
                <Card key={i} className="p-4 sm:p-5 rounded-2xl border border-zinc-200 bg-white hover:shadow-md transition-all flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <div className="font-bold text-sm sm:text-base text-zinc-950 leading-snug">
                        {s.name}
                      </div>
                      <span className="px-2 py-0.5 rounded-full bg-zinc-100 border border-zinc-200 text-[10px] font-bold text-zinc-700 shrink-0">
                        {s.provider}
                      </span>
                    </div>

                    <div className="bg-zinc-50 border border-zinc-200 rounded-xl p-2.5 my-2">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-zinc-500">
                        Benefit / Financial Grant
                      </div>
                      <div className="text-xs font-bold text-zinc-900 mt-0.5">
                        💰 {s.benefits}
                      </div>
                    </div>

                    <div className="space-y-1 text-xs text-zinc-600 mt-2">
                      <div>
                        <span className="font-bold text-zinc-800">Eligibility: </span>
                        {s.eligibility}
                      </div>
                      <div>
                        <span className="font-bold text-zinc-800">Exam / Selection: </span>
                        {s.examOrSelection}
                      </div>
                    </div>
                  </div>

                  <div className="mt-3 pt-2.5 border-t border-zinc-100 flex items-center justify-between text-[11px] font-semibold text-zinc-600">
                    <span>📅 When to Apply:</span>
                    <span className="font-bold text-zinc-900">{s.whenToApply}</span>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* ── SECTION 4: Future Outlook ─────────────────────────────────── */}
        {futureOutlook && (
          <div>
            <div className="flex items-center gap-2 mb-1">
              <TrendingUp className="w-5 h-5 text-black" />
              <h2 className="text-lg sm:text-xl font-extrabold text-zinc-950">
                Opportunities & Future of This Profession
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-zinc-500 font-medium mb-5">
              Honest, realistic outlook for the next 5–15 years including AI impact.
            </p>

            <div className="space-y-4">
              {/* Demand Trend + Job Security + Salary */}
              <div className="grid sm:grid-cols-3 gap-3">
                <Card className={`p-4 rounded-2xl border flex items-start gap-3 ${demandColor(futureOutlook.demandTrend)}`}>
                  <div>{demandIcon(futureOutlook.demandTrend)}</div>
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-wider opacity-70">Demand Trend</div>
                    <div className="font-extrabold text-sm mt-0.5">{futureOutlook.demandTrend}</div>
                  </div>
                </Card>

                <Card className="p-4 rounded-2xl border border-zinc-200 bg-white flex items-start gap-3">
                  <IndianRupee className="w-4 h-4 text-zinc-700 mt-0.5 shrink-0" />
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-wider text-zinc-500">Salary Range</div>
                    <div className="font-bold text-sm text-zinc-950 mt-0.5">{futureOutlook.salaryRange}</div>
                  </div>
                </Card>

                <Card className="p-4 rounded-2xl border border-zinc-200 bg-white flex items-start gap-3">
                  <Shield className="w-4 h-4 text-zinc-700 mt-0.5 shrink-0" />
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-wider text-zinc-500">Job Security</div>
                    <div className="text-xs text-zinc-700 mt-0.5 leading-relaxed">{futureOutlook.jobSecurity}</div>
                  </div>
                </Card>
              </div>

              {/* AI Impact */}
              <Card className="p-4 sm:p-5 rounded-2xl border border-zinc-200 bg-white">
                <div className="flex items-center gap-2 mb-2">
                  <Bot className="w-4 h-4 text-zinc-800" />
                  <div className="text-xs font-bold text-zinc-900 uppercase tracking-wider">AI Impact on This Role</div>
                </div>
                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">{futureOutlook.aiImpact}</p>
              </Card>

              {/* Emerging Opportunities */}
              {futureOutlook.emergingOpportunities?.length > 0 && (
                <Card className="p-4 sm:p-5 rounded-2xl border border-zinc-200 bg-white">
                  <div className="flex items-center gap-2 mb-3">
                    <Lightbulb className="w-4 h-4 text-amber-600" />
                    <div className="text-xs font-bold text-zinc-900 uppercase tracking-wider">Emerging Opportunities</div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {futureOutlook.emergingOpportunities.map((opp, i) => (
                      <span key={i} className="px-3 py-1.5 rounded-full bg-zinc-50 border border-zinc-200 text-xs font-semibold text-zinc-700">
                        ✦ {opp}
                      </span>
                    ))}
                  </div>
                </Card>
              )}

              {/* Top Recruiters */}
              {futureOutlook.topRecruiters?.length > 0 && (
                <Card className="p-4 sm:p-5 rounded-2xl border border-zinc-200 bg-white">
                  <div className="flex items-center gap-2 mb-3">
                    <Building2 className="w-4 h-4 text-zinc-700" />
                    <div className="text-xs font-bold text-zinc-900 uppercase tracking-wider">Top Recruiters in India</div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {futureOutlook.topRecruiters.map((org, i) => (
                      <span key={i} className="px-3 py-1.5 rounded-full bg-zinc-900 text-white text-xs font-bold">
                        {org}
                      </span>
                    ))}
                  </div>
                </Card>
              )}
            </div>
          </div>
        )}

        {/* ── SECTION 5: Similar Professions ───────────────────────────── */}
        {similarProfessions?.length > 0 && (
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Users className="w-5 h-5 text-black" />
              <h2 className="text-lg sm:text-xl font-extrabold text-zinc-950">
                3 Similar Professions You Might Love
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-zinc-500 font-medium mb-5">
              These roles share significant overlap with your goal — great backup or pivot options.
            </p>
            <div className="space-y-3">
              {similarProfessions.map((prof, i) => (
                <Card key={i} className="p-4 sm:p-5 rounded-2xl border border-zinc-200 bg-white hover:shadow-md transition-all">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="font-extrabold text-sm sm:text-base text-zinc-950 mb-1">{prof.title}</div>
                      <div className="text-xs text-zinc-600 leading-relaxed mb-2">{prof.reason}</div>
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-zinc-100 border border-zinc-200 text-[10px] font-bold text-zinc-700">
                        🔗 Shared: {prof.overlap}
                      </div>
                    </div>
                    <button
                      onClick={() => {
                        const form = JSON.parse(localStorage.getItem(ROADMAP_FORM_KEY) || "{}");
                        localStorage.setItem(ROADMAP_FORM_KEY, JSON.stringify({ ...form, careerGoal: prof.title }));
                        navigate("/roadmap/generating");
                      }}
                      className="no-print shrink-0 inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-zinc-900 text-white hover:bg-zinc-700 text-xs font-bold cursor-pointer transition-colors"
                    >
                      Explore <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* ── LOCKED ADVANCED CAREER PACK & 1-ON-1 GUIDANCE ── */}
        <LockedCareerInsights formData={formData} careerGoal={roadmap.careerGoal} />

        {/* ── AI & Policy Disclaimer ─────────────────────────────────────── */}
        <Card className="p-4 sm:p-6 rounded-2xl border border-amber-200 bg-amber-50">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <div className="font-bold text-sm text-amber-900 mb-1">Advisory &amp; Policy Disclaimer</div>
              <p className="text-xs sm:text-sm text-amber-800 leading-relaxed">
                Some educational requirements, exam patterns, fee structures, college cut-offs, and career opportunities may change over time due to rapid technological, economic, and policy developments in our nation and the world. <strong>It is always recommended to reach out to a certified career counselor</strong> and verify latest notifications on official examination portals before taking major educational decisions.
              </p>
            </div>
          </div>
        </Card>

        {/* ── CTA ───────────────────────────────────────────────────────── */}
        <Card className="no-print rounded-3xl border border-zinc-200 bg-zinc-950 text-white p-6 sm:p-10 text-center shadow-glow">
          <Sparkles className="w-7 h-7 mx-auto mb-3 text-zinc-200" />
          <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight">
            Not sure which career fits you best?
          </h3>
          <p className="text-xs sm:text-sm text-zinc-400 mt-2 max-w-lg mx-auto leading-relaxed">
            Take our AI Career Analysis to discover the best-fit roles based on your interests, acumen, and strengths.
          </p>
          <div className="mt-5 flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={() => navigate("/form")}
              className="bg-white text-black hover:bg-zinc-200 hover:text-black rounded-full px-6 font-bold text-xs sm:text-sm h-11 transition-colors cursor-pointer flex items-center justify-center"
            >
              Start Career Analysis
            </button>
            <button
              onClick={() => navigate("/roadmap")}
              className="bg-zinc-800 text-white border border-zinc-700 hover:bg-zinc-700 rounded-full px-6 font-bold text-xs sm:text-sm h-11 transition-colors cursor-pointer flex items-center justify-center"
            >
              Try Another Goal
            </button>
          </div>
        </Card>

      </div>
    </main>
  );
};

export default RoadmapResult;
