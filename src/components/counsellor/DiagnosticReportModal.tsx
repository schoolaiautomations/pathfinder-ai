import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Sparkles,
  Loader2,
  X,
  Printer,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  MapPin,
  GraduationCap,
  Briefcase,
  TrendingUp,
  BookOpen,
  Award,
  Users,
  CheckCircle2,
  RotateCcw,
  UserCheck,
  Cpu,
  ShieldCheck,
  AlertTriangle,
  Target,
  Coins,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { DEFAULT_CAREER_OPTIONS } from "@/lib/roadmap-data";
import {
  generateDiagnosticCareerReport,
  convertProfileToFormData,
} from "@/lib/gemini";
import {
  STORAGE_KEY,
  REPORT_STORAGE_KEY,
  type CareerReport,
} from "@/lib/career-data";
import { saveGeneratedReportToSupabase } from "@/lib/supabase";
import { downloadReportAsPDF } from "@/lib/pdf-report";

interface DiagnosticReportModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: any | null;
  savedProfiles?: any[];
  onSelectProfile?: (profile: any) => void;
  onReportSaved?: (updatedProfile: any) => void;
}

export const DiagnosticReportModal = ({
  isOpen,
  onClose,
  profile: initialProfile,
  savedProfiles = [],
  onReportSaved,
}: DiagnosticReportModalProps) => {
  const navigate = useNavigate();
  const [selectedProfile, setSelectedProfile] = useState<any | null>(initialProfile);
  const [selectedCareer, setSelectedCareer] = useState<string>("auto");
  const [customCareer, setCustomCareer] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [loadingStep, setLoadingStep] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const [report, setReport] = useState<CareerReport | null>(null);
  const [expandedMatches, setExpandedMatches] = useState<Set<number>>(new Set([0]));

  useEffect(() => {
    setSelectedProfile(initialProfile);
    if (initialProfile?.generatedReport) {
      setReport(initialProfile.generatedReport);
    } else {
      setReport(null);
    }
    setError(null);
    setSelectedCareer("auto");
    setCustomCareer("");
  }, [initialProfile, isOpen]);

  useEffect(() => {
    if (!loading) return;
    const interval = setInterval(() => {
      setLoadingStep((s) => (s + 1) % 3);
    }, 2400);
    return () => clearInterval(interval);
  }, [loading]);

  if (!isOpen) return null;

  const toggleMatch = (index: number) => {
    setExpandedMatches((prev) => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  };

  const handleGenerate = async () => {
    if (!selectedProfile) {
      setError("Please select a student profile first.");
      return;
    }

    setLoading(true);
    setError(null);
    setLoadingStep(0);

    const focusCareer =
      selectedCareer === "auto"
        ? undefined
        : selectedCareer === "custom"
        ? customCareer.trim() || undefined
        : selectedCareer.startsWith("focus_")
        ? selectedCareer.replace("focus_", "")
        : selectedCareer;

    try {
      const generatedReport = await generateDiagnosticCareerReport(selectedProfile, focusCareer);
      setReport(generatedReport);

      // Save directly to Supabase table student_profiles (Persistent DB, no localStorage)
      if (selectedProfile?.id) {
        const timestamp = new Date().toISOString();
        const saveRes = await saveGeneratedReportToSupabase(selectedProfile.id, generatedReport);
        const updated = {
          ...selectedProfile,
          generatedReport,
          generatedReportAt: timestamp,
        };
        setSelectedProfile(updated);
        onReportSaved?.(updated);
        if (!saveRes.success) {
          console.warn("Could not save report to Supabase:", saveRes.error);
        }
      }
    } catch (err: any) {
      console.error("Error generating diagnostic report:", err);
      setError(err?.message || "Failed to generate career report. Please check network connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  const handlePrintPDF = () => {
    if (!report || !selectedProfile) return;
    const formData = convertProfileToFormData(selectedProfile);
    downloadReportAsPDF(report, formData);
  };

  const handleOpenFullPage = () => {
    if (!report || !selectedProfile) return;
    const formData = convertProfileToFormData(selectedProfile);
    localStorage.setItem(REPORT_STORAGE_KEY, JSON.stringify(report));
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
    onClose();
    navigate("/report");
  };

  const loadingMessages = [
    "Analyzing 44 diagnostic parameters (subjects, family context, health, aspirations)...",
    "Cross-referencing Indian higher education streams, colleges, and entrance exams...",
    "Synthesizing personalized 4-Circles career matches and actionable roadmaps...",
  ];

  return (
    <div className="fixed inset-0 z-50 bg-stone-900/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 overflow-y-auto print:p-0 print:bg-white">
      <div className="bg-white rounded-3xl shadow-2xl border border-stone-200 w-full max-w-4xl max-h-[92vh] flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-stone-200 flex items-center justify-between gap-4 bg-stone-50/70 shrink-0">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-10 h-10 rounded-2xl bg-stone-900 text-[#FAF8F5] flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5 text-[#C9A97A]" />
            </div>
            <div className="min-w-0">
              <h2 className="text-base sm:text-lg font-extrabold text-stone-900 truncate">
                AI Career Guidance Report
              </h2>
              <p className="text-xs text-stone-500 font-medium truncate">
                Powered by Pathfinder AI multi-dimensional psychometric analysis
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-stone-400 hover:text-stone-700 hover:bg-stone-200/60 transition-colors cursor-pointer shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-8 overflow-y-auto space-y-6 flex-1">
          {/* Profile & Career Selection Controls */}
          {!report && (
            <div className="p-5 sm:p-6 rounded-2xl bg-[#FAF8F5] border border-[#E5DDD2] space-y-5">
              {/* Profile Selector if multiple or none selected */}
              {savedProfiles.length > 0 && (
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-stone-900 block">
                    1. Select Student Profile:
                  </label>
                  <select
                    value={selectedProfile?.id || ""}
                    onChange={(e) => {
                      const found = savedProfiles.find((p) => p.id === e.target.value);
                      setSelectedProfile(found || null);
                      if (found?.generatedReport) {
                        setReport(found.generatedReport);
                      } else {
                        setReport(null);
                      }
                      setSelectedCareer("auto");
                      setCustomCareer("");
                    }}
                    className="w-full h-11 px-3.5 text-xs rounded-xl bg-white border border-stone-300 font-bold text-stone-900 focus:ring-2 focus:ring-stone-900 outline-none"
                  >
                    <option value="">-- Choose a Saved Student Profile --</option>
                    {savedProfiles.map((p) => (
                      <option key={p.id} value={p.id}>
                        {p.studentName || "Unnamed Student"} ({p.studentClass || "Class —"}, {p.school || "School —"}){p.generatedReport ? " — [✓ Report Ready]" : ""}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              {/* Selected Profile Summary Card */}
              {selectedProfile && (() => {
                const hasValidDream =
                  selectedProfile.careerOnMind &&
                  !["no idea", "not sure", "none", "nil", "na", "don't know", "dont know", "undecided"].includes(
                    selectedProfile.careerOnMind.trim().toLowerCase()
                  );

                return (
                  <div className="p-4 rounded-xl bg-white border border-stone-200/80 space-y-2">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="text-xs font-extrabold text-stone-900">
                        {selectedProfile.studentName}
                      </span>
                      <span className="text-[11px] font-semibold text-stone-500">
                        {selectedProfile.studentClass ? `Class: ${selectedProfile.studentClass}` : ""}
                        {selectedProfile.section ? ` (${selectedProfile.section})` : ""} · {selectedProfile.school || "School"}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2 text-[11px] text-stone-600 font-medium">
                      {selectedProfile.likedSubjects?.length > 0 && (
                        <span className="px-2 py-0.5 rounded-md bg-stone-100 border border-stone-200">
                          Likes: {selectedProfile.likedSubjects.join(", ")}
                        </span>
                      )}
                      {selectedProfile.difficultSubjects?.length > 0 && (
                        <span className="px-2 py-0.5 rounded-md bg-stone-50 border border-stone-200 text-stone-500">
                          Difficult: {selectedProfile.difficultSubjects.join(", ")}
                        </span>
                      )}
                      {hasValidDream ? (
                        <span className="px-2 py-0.5 rounded-md bg-amber-50 border border-amber-200 text-amber-900 font-bold">
                          Dream: {selectedProfile.careerOnMind}
                        </span>
                      ) : (
                        <span className="px-2 py-0.5 rounded-md bg-emerald-50 border border-emerald-200 text-emerald-800 font-semibold">
                          Career Goal: Undecided (Full AI Exploration)
                        </span>
                      )}
                    </div>
                  </div>
                );
              })()}

              {/* Career Focus Selection */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-stone-900 flex items-center justify-between">
                  <span>2. Career Exploration Mode:</span>
                  <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">Unrestricted AI Freedom</span>
                </label>
                <select
                  value={selectedCareer}
                  onChange={(e) => setSelectedCareer(e.target.value)}
                  className="w-full h-11 px-3.5 text-xs rounded-xl bg-white border border-stone-300 font-bold text-stone-900 focus:ring-2 focus:ring-stone-900 outline-none"
                >
                  <option value="auto">
                    ✨ Open Analysis (AI analyzes all 44 questions with complete freedom to suggest ANY viable career)
                  </option>
                  {selectedProfile?.careerOnMind &&
                    !["no idea", "not sure", "none", "nil", "na", "don't know", "dont know", "undecided"].includes(
                      selectedProfile.careerOnMind.trim().toLowerCase()
                    ) && (
                      <option value={`focus_${selectedProfile.careerOnMind}`}>
                        🎯 Focus on Student's Dream Career: {selectedProfile.careerOnMind}
                      </option>
                    )}
                  <option value="custom">✏️ Custom Specific Career Focus (Optional)...</option>
                  <optgroup label="Or select from common reference careers:">
                    {DEFAULT_CAREER_OPTIONS.map((opt) => (
                      <option key={opt.id} value={opt.label}>
                        {opt.label}
                      </option>
                    ))}
                  </optgroup>
                </select>

                {selectedCareer === "custom" && (
                  <div className="pt-1.5">
                    <input
                      type="text"
                      placeholder="Type any career (e.g. Wildlife Photographer, Ethical Hacker, Sound Engineer, etc.)"
                      value={customCareer}
                      onChange={(e) => setCustomCareer(e.target.value)}
                      className="w-full h-10 px-3.5 text-xs rounded-xl bg-white border border-stone-300 font-semibold focus:ring-2 focus:ring-stone-900 outline-none"
                    />
                  </div>
                )}

                <p className="text-[11px] text-stone-500 font-medium leading-relaxed">
                  {selectedCareer === "auto"
                    ? "✨ The AI will read all 44 saved questions and recommend the 3 best-fitting careers from ANY field in India or the modern global economy."
                    : selectedCareer === "custom"
                    ? `AI will evaluate suitability for "${customCareer || "custom career"}" alongside complementary backup pathways.`
                    : `AI will evaluate suitability for "${selectedCareer.replace("focus_", "")}" alongside complementary backup pathways.`}
                </p>
              </div>

              {/* Error Box */}
              {error && (
                <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-xs font-bold text-red-700">
                  {error}
                </div>
              )}

              {/* Launch Button */}
              <Button
                disabled={loading || !selectedProfile}
                onClick={handleGenerate}
                className="w-full h-12 rounded-xl font-bold text-xs sm:text-sm bg-stone-900 text-[#FAF8F5] hover:bg-stone-800 shadow-md cursor-pointer flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin text-[#C9A97A]" />
                    <span>Generating AI Career Report...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4 text-[#C9A97A]" />
                    <span>Generate Detailed Career Report</span>
                  </>
                )}
              </Button>

              {/* Loading progress note */}
              {loading && (
                <div className="p-4 rounded-xl bg-stone-100 text-center space-y-2 animate-pulse">
                  <p className="text-xs font-bold text-stone-800">{loadingMessages[loadingStep]}</p>
                  <div className="w-full bg-stone-200 rounded-full h-1.5 overflow-hidden">
                    <div className="bg-stone-900 h-1.5 rounded-full transition-all duration-500 w-2/3 animate-indeterminate" />
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Generated Report View */}
          {report && (
            <div className="space-y-6">
              {/* Report Header Bar */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 rounded-2xl bg-stone-900 text-[#FAF8F5] shadow-sm">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-stone-800 text-[#C9A97A] mb-1">
                    <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                    {selectedProfile?.generatedReportAt ? "Saved in Supabase · Report Ready" : "Diagnostic Analysis Complete"}
                  </div>
                  <h3 className="text-base sm:text-lg font-extrabold">
                    Career Blueprint for {selectedProfile?.studentName}
                  </h3>
                  <p className="text-xs text-stone-300 font-medium">
                    {selectedProfile?.studentClass ? `Class: ${selectedProfile.studentClass}` : ""} · {selectedProfile?.school || "School"}
                    {selectedProfile?.generatedReportAt && (
                      <span className="ml-2 text-stone-400">
                        (Saved: {new Date(selectedProfile.generatedReportAt).toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit" })})
                      </span>
                    )}
                  </p>
                </div>

                <div className="flex items-center gap-2 shrink-0 flex-wrap">
                  <Button
                    onClick={handlePrintPDF}
                    variant="outline"
                    className="h-9 px-3.5 rounded-xl text-xs font-bold bg-white text-stone-900 hover:bg-stone-100 border-none cursor-pointer"
                  >
                    <Printer className="w-3.5 h-3.5 mr-1.5" />
                    Print / PDF
                  </Button>
                  <Button
                    onClick={handleOpenFullPage}
                    variant="outline"
                    className="h-9 px-3.5 rounded-xl text-xs font-bold bg-[#C9A97A] text-stone-950 hover:bg-[#B89869] border-none cursor-pointer"
                  >
                    <ExternalLink className="w-3.5 h-3.5 mr-1.5" />
                    Full Screen Report
                  </Button>
                  <Button
                    onClick={() => setReport(null)}
                    variant="outline"
                    className="h-9 px-3.5 rounded-xl text-xs font-bold bg-stone-800 text-stone-200 hover:text-white border-stone-700 cursor-pointer flex items-center gap-1.5"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Re-generate Report</span>
                  </Button>
                </div>
              </div>

              {/* Section 1: Top 3 Matching Careers */}
              <div className="space-y-4">
                <h4 className="text-sm font-extrabold uppercase tracking-wider text-stone-900 flex items-center gap-2">
                  <Briefcase className="w-4 h-4 text-[#7C5C3E]" />
                  Top Recommended Career Matches
                </h4>

                <div className="space-y-3">
                  {report.matches.map((match, idx) => {
                    const isExpanded = expandedMatches.has(idx);
                    return (
                      <div
                        key={idx}
                        className="rounded-2xl border border-stone-200 bg-white overflow-hidden shadow-2xs transition-all hover:border-stone-400"
                      >
                        <div
                          onClick={() => toggleMatch(idx)}
                          className="p-4 sm:p-5 flex items-center justify-between gap-4 cursor-pointer hover:bg-stone-50/70 select-none"
                        >
                          <div className="flex items-center gap-3.5 min-w-0">
                            <span className="w-7 h-7 rounded-xl bg-stone-900 text-white font-black text-xs flex items-center justify-center shrink-0">
                              #{idx + 1}
                            </span>
                            <div className="min-w-0">
                              <h5 className="text-sm sm:text-base font-extrabold text-stone-900 truncate">
                                {match.name}
                              </h5>
                              <p className="text-xs text-stone-500 font-medium line-clamp-1">
                                {match.why}
                              </p>
                            </div>
                          </div>

                          <div className="flex items-center gap-3 shrink-0">
                            <span className="px-2.5 py-1 rounded-full text-xs font-black bg-emerald-50 text-emerald-700 border border-emerald-200">
                              {match.score}% Fit
                            </span>
                            {isExpanded ? (
                              <ChevronUp className="w-4 h-4 text-stone-400" />
                            ) : (
                              <ChevronDown className="w-4 h-4 text-stone-400" />
                            )}
                          </div>
                        </div>

                        {isExpanded && (
                          <div className="p-4 sm:p-5 border-t border-stone-100 bg-stone-50/50 space-y-4">
                            {/* 1. 360° Fit Analysis */}
                            <div className="p-3.5 rounded-xl bg-white border border-stone-200 text-xs space-y-1.5 shadow-2xs">
                              <div className="flex items-center gap-1.5 font-extrabold text-stone-900 text-xs">
                                <UserCheck className="w-4 h-4 text-blue-600" />
                                <span>360° Student Fit &amp; Diagnostic Rationale:</span>
                              </div>
                              <p className="text-stone-700 leading-relaxed font-medium whitespace-pre-line">
                                {match.why}
                              </p>
                            </div>

                            {/* 2. AI Impact & Future Transformation */}
                            {match.aiImpact && (
                              <div className="p-3.5 rounded-xl bg-gradient-to-br from-purple-50/80 to-indigo-50/60 border border-purple-200/80 text-xs space-y-1.5 shadow-2xs">
                                <div className="flex items-center gap-1.5 font-extrabold text-purple-950 text-xs">
                                  <Cpu className="w-4 h-4 text-purple-600" />
                                  <span>AI Disruption &amp; Future Outlook (Next 5–10 Years):</span>
                                </div>
                                <p className="text-purple-900 leading-relaxed font-medium">
                                  {match.aiImpact}
                                </p>
                              </div>
                            )}

                            {/* 3. Plan B / Safety Net Career Alternative */}
                            {match.backupPlan && (
                              <div className="p-3.5 rounded-xl bg-gradient-to-br from-emerald-50/80 to-teal-50/60 border border-emerald-200/80 text-xs space-y-1.5 shadow-2xs">
                                <div className="flex items-center gap-1.5 font-extrabold text-emerald-950 text-xs">
                                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                                  <span>Plan B / Safety Net Career Alternative:</span>
                                </div>
                                <p className="text-emerald-900 leading-relaxed font-medium">
                                  {match.backupPlan}
                                </p>
                              </div>
                            )}

                            {/* 4. Risk Factors & Feasibility Check */}
                            {match.riskFactors && (
                              <div className="p-3.5 rounded-xl bg-amber-50/80 border border-amber-200/80 text-xs space-y-1.5 shadow-2xs">
                                <div className="flex items-center gap-1.5 font-extrabold text-amber-950 text-xs">
                                  <AlertTriangle className="w-4 h-4 text-amber-600" />
                                  <span>Feasibility, Cutoffs &amp; Risk Factors:</span>
                                </div>
                                <p className="text-amber-900 leading-relaxed font-medium">
                                  {match.riskFactors}
                                </p>
                              </div>
                            )}

                            {/* Roadmap Stages */}
                            {match.roadmap && match.roadmap.length > 0 && (
                              <div className="space-y-2 pt-1">
                                <h6 className="text-[11px] font-bold uppercase tracking-wider text-stone-500">
                                  Step-by-Step Educational Pathway
                                </h6>
                                <div className="space-y-2">
                                  {match.roadmap.map((step, sIdx) => (
                                    <div
                                      key={sIdx}
                                      className="p-3 rounded-xl bg-white border border-stone-200 text-xs space-y-1"
                                    >
                                      <div className="flex items-center justify-between gap-2">
                                        <span className="font-extrabold text-stone-900">
                                          {step.stage}
                                        </span>
                                        {step.duration && (
                                          <span className="text-[10px] font-bold text-stone-400 uppercase">
                                            {step.duration}
                                          </span>
                                        )}
                                      </div>
                                      <p className="text-stone-600 font-medium">{step.description}</p>
                                      {step.institutes && step.institutes.length > 0 && (
                                        <div className="pt-1 flex flex-wrap gap-1.5">
                                          {step.institutes.map((inst, iIdx) => (
                                            <span
                                              key={iIdx}
                                              className="px-2 py-0.5 rounded-md text-[10px] font-semibold bg-stone-100 text-stone-700"
                                            >
                                              {inst}
                                            </span>
                                          ))}
                                        </div>
                                      )}
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Section 2: 360° Diagnostic Insight Pillars */}
              <div className="space-y-4 pt-2">
                <h4 className="text-sm font-extrabold uppercase tracking-wider text-stone-900 flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-[#7C5C3E]" />
                  Strategic Guidance &amp; 360° Action Plan
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                  {/* Strength Analysis (Full Width Highlight) */}
                  {report.insights.strengthAnalysis && (
                    <div className="p-4 rounded-2xl bg-gradient-to-br from-emerald-50/70 to-teal-50/50 border border-emerald-200 space-y-1.5 shadow-2xs md:col-span-2">
                      <div className="flex items-center gap-2 text-xs font-extrabold text-emerald-950">
                        <Target className="w-4 h-4 text-emerald-700" />
                        Core Strengths &amp; Diagnostic Aptitude Mapping
                      </div>
                      <p className="text-xs text-emerald-950 font-medium leading-relaxed">
                        {report.insights.strengthAnalysis}
                      </p>
                    </div>
                  )}

                  {/* Economic Reality Check (Full Width Highlight) */}
                  {report.insights.economicReality && (
                    <div className="p-4 rounded-2xl bg-gradient-to-br from-amber-50/80 to-yellow-50/50 border border-amber-200 space-y-1.5 shadow-2xs md:col-span-2">
                      <div className="flex items-center gap-2 text-xs font-extrabold text-amber-950">
                        <Coins className="w-4 h-4 text-amber-700" />
                        Family Economic Reality &amp; Financial Feasibility Check
                      </div>
                      <p className="text-xs text-amber-950 font-medium leading-relaxed">
                        {report.insights.economicReality}
                      </p>
                    </div>
                  )}

                  <div className="p-4 rounded-2xl bg-white border border-stone-200 space-y-1.5 shadow-2xs">
                    <div className="flex items-center gap-2 text-xs font-extrabold text-stone-900">
                      <BookOpen className="w-4 h-4 text-blue-600" />
                      Study Roadmap &amp; Subject Focus
                    </div>
                    <p className="text-xs text-stone-600 font-medium leading-relaxed">
                      {report.insights.studyRoadmap}
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-white border border-stone-200 space-y-1.5 shadow-2xs">
                    <div className="flex items-center gap-2 text-xs font-extrabold text-stone-900">
                      <MapPin className="w-4 h-4 text-emerald-600" />
                      Where to Study (Institutions in India)
                    </div>
                    <p className="text-xs text-stone-600 font-medium leading-relaxed">
                      {report.insights.whereToStudy}
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-white border border-stone-200 space-y-1.5 shadow-2xs">
                    <div className="flex items-center gap-2 text-xs font-extrabold text-stone-900">
                      <Award className="w-4 h-4 text-amber-600" />
                      Skills to Start Building Today
                    </div>
                    <p className="text-xs text-stone-600 font-medium leading-relaxed">
                      {report.insights.skillsToBuild}
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-white border border-stone-200 space-y-1.5 shadow-2xs">
                    <div className="flex items-center gap-2 text-xs font-extrabold text-stone-900">
                      <TrendingUp className="w-4 h-4 text-purple-600" />
                      Salary Outlook &amp; Market Demand
                    </div>
                    <p className="text-xs text-stone-600 font-medium leading-relaxed">
                      {report.insights.salaryAndDemand}
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-white border border-stone-200 space-y-1.5 shadow-2xs">
                    <div className="flex items-center gap-2 text-xs font-extrabold text-stone-900">
                      <GraduationCap className="w-4 h-4 text-indigo-600" />
                      Immediate Next Academic Step
                    </div>
                    <p className="text-xs text-stone-600 font-medium leading-relaxed">
                      {report.insights.whatToStudyNext}
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-white border border-stone-200 space-y-1.5 shadow-2xs">
                    <div className="flex items-center gap-2 text-xs font-extrabold text-stone-900">
                      <Users className="w-4 h-4 text-rose-600" />
                      Parent &amp; Family Guidance
                    </div>
                    <p className="text-xs text-stone-600 font-medium leading-relaxed">
                      {report.insights.parentGuidance}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
