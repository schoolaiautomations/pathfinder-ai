import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Sparkles, TrendingUp, BookOpen, MapPin, Award, Briefcase, Heart, Download, ArrowLeft, ChevronDown, ChevronUp, Clock, GraduationCap } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { STORAGE_KEY, REPORT_STORAGE_KEY } from "@/lib/career-data";
import { downloadReportAsPDF } from "@/lib/pdf-report";
import type { CareerReport, FormData } from "@/lib/career-data";

const Report = () => {
  const [report, setReport] = useState<CareerReport | null>(null);
  const [studentName, setStudentName] = useState("");
  const [formData, setFormData] = useState<FormData | null>(null);
  const [expandedMatches, setExpandedMatches] = useState<Set<number>>(new Set());
  const navigate = useNavigate();

  const toggleMatch = (index: number) => {
    setExpandedMatches(prev => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  };

  useEffect(() => {
    // Load AI report
    const savedReport = localStorage.getItem(REPORT_STORAGE_KEY);
    if (!savedReport) {
      navigate("/");
      return;
    }
    try {
      setReport(JSON.parse(savedReport) as CareerReport);
    } catch {
      navigate("/");
      return;
    }

    // Load student form data
    const savedForm = localStorage.getItem(STORAGE_KEY);
    if (savedForm) {
      try {
        const fd: FormData = JSON.parse(savedForm);
        setStudentName(fd.name || "");
        setFormData(fd);
      } catch {}
    }
  }, [navigate]);

  const handleDownloadPDF = () => {
    if (report && formData) {
      downloadReportAsPDF(report, formData);
    }
  };

  if (!report) return null;

  const insightCards = [
    { icon: BookOpen, title: "Study roadmap", body: report.insights.studyRoadmap },
    { icon: MapPin, title: "Where to study", body: report.insights.whereToStudy },
    { icon: Award, title: "Skills to build", body: report.insights.skillsToBuild },
    { icon: Briefcase, title: "Salary & demand", body: report.insights.salaryAndDemand },
    { icon: TrendingUp, title: "What to study next", body: report.insights.whatToStudyNext },
    { icon: Heart, title: "Parent guidance", body: report.insights.parentGuidance },
  ];

  return (
    <main className="min-h-screen bg-background pb-16 safe-bottom">
      <div className="max-w-5xl mx-auto px-2.5 sm:px-4 pt-6 sm:pt-10">
        <Link to="/" className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-600 hover:text-black mb-4 sm:mb-6">
          <ArrowLeft className="w-4 h-4" /> Back to home
        </Link>
        <Card className="bg-white border border-zinc-200 rounded-2xl sm:rounded-3xl p-5 sm:p-10 shadow-card animate-fade-in">
          <div className="flex items-center gap-2 mb-2 sm:mb-3">
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-black" />
            <span className="text-[11px] sm:text-xs font-bold tracking-wider text-zinc-700 uppercase">Your AI Career Report</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-zinc-950 leading-tight">
            {studentName
              ? `${studentName}, here's your personalised career path`
              : "Your personalised career path"}
          </h1>
          <p className="text-zinc-500 mt-2 sm:mt-3 max-w-2xl text-xs sm:text-base leading-relaxed">Based on your interests, education, and goals — here are the careers our AI thinks suit you best.</p>
          <div className="mt-5 sm:mt-6 flex flex-col sm:flex-row gap-3">
            <Button size="lg" onClick={handleDownloadPDF} className="w-full sm:w-auto bg-black text-white hover:bg-zinc-800 rounded-xl px-6 h-11 sm:h-12 text-sm sm:text-base font-semibold"><Download className="w-4 h-4 mr-1" /> Download PDF</Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto rounded-xl border-zinc-300 h-11 sm:h-12 text-sm sm:text-base font-semibold">Share with parents</Button>
          </div>
        </Card>

        <h2 className="text-lg sm:text-xl font-bold text-zinc-950 mt-8 sm:mt-10 mb-3 sm:mb-4">Top career matches</h2>
        <div className="grid gap-3 sm:gap-4">
          {report.matches.map((m, i) => (
            <Card key={m.name} className="p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-zinc-200 bg-white shadow-sm hover:shadow-md transition-all">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
                <div className="flex items-start sm:items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-black text-white flex items-center justify-center font-bold text-base sm:text-lg shadow-sm shrink-0">{i + 1}</div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-zinc-950">{m.name}</h3>
                    <p className="text-xs sm:text-sm text-zinc-500 mt-0.5 leading-normal">{m.why}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between sm:block text-right shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-zinc-100">
                  <span className="sm:hidden text-xs font-semibold text-zinc-500">Match score:</span>
                  <div>
                    <div className="text-2xl sm:text-3xl font-extrabold text-black">{m.score}%</div>
                    <div className="hidden sm:block text-xs text-zinc-500 font-medium">Match score</div>
                  </div>
                </div>
              </div>
              <div className="mt-3 sm:mt-4 h-2 bg-zinc-100 rounded-full overflow-hidden border border-zinc-200/50 mb-3 sm:mb-4">
                <div className="h-full bg-black rounded-full transition-all duration-1000 ease-out" style={{ width: `${m.score}%` }} />
              </div>

              {m.roadmap && m.roadmap.length > 0 && (
                <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-zinc-100">
                  <button 
                    onClick={() => toggleMatch(i)}
                    className="flex items-center gap-2 text-xs sm:text-sm font-bold text-zinc-950 hover:text-zinc-600 transition-colors w-full touch-manipulation"
                  >
                    {expandedMatches.has(i) ? <ChevronUp className="w-4 h-4 shrink-0" /> : <ChevronDown className="w-4 h-4 shrink-0" />}
                    <span>Explore Pathway to {m.name}</span>
                  </button>

                  {expandedMatches.has(i) && (
                    <div className="mt-4 sm:mt-6 ml-1 sm:ml-6 relative border-l-2 border-zinc-300 space-y-6 sm:space-y-8 pb-2 sm:pb-4 animate-fade-in">
                      {m.roadmap.map((step, stepIdx) => (
                        <div key={stepIdx} className="relative pl-5 sm:pl-8">
                          {/* Timeline node */}
                          <div className="absolute -left-[9px] sm:-left-[11px] top-1 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-white border-3 sm:border-4 border-black shadow-sm"></div>
                          
                          <div className="bg-zinc-50/80 p-3.5 sm:p-4 rounded-xl sm:rounded-2xl border border-zinc-200/80 shadow-none">
                            <h4 className="font-bold text-sm sm:text-lg text-zinc-950">{step.stage}</h4>
                            <p className="text-xs sm:text-sm text-zinc-600 mt-1 leading-relaxed">{step.description}</p>
                            
                            <div className="flex flex-wrap items-center gap-2 sm:gap-3 mt-2.5 sm:mt-3">
                              <div className="flex items-center gap-1.5 text-[11px] sm:text-xs font-semibold text-zinc-800 bg-zinc-200/70 border border-zinc-300 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md">
                                <Clock className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                                {step.duration}
                              </div>
                              {step.institutes && step.institutes.length > 0 && (
                                <div className="flex items-start gap-1.5 text-[11px] sm:text-xs text-zinc-900 bg-zinc-100 border border-zinc-200 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md">
                                  <GraduationCap className="w-3 h-3 sm:w-3.5 sm:h-3.5 mt-0.5 shrink-0" />
                                  <span className="font-semibold">Institutes: {step.institutes.join(", ")}</span>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                      
                      {/* Final Destination Node */}
                      <div className="relative pl-5 sm:pl-8 pt-1 sm:pt-2">
                        <div className="absolute -left-[13px] sm:-left-[15px] top-1.5 sm:top-2 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-black flex items-center justify-center text-white shadow-sm">
                          <Briefcase className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                        </div>
                        <h4 className="font-bold text-base sm:text-lg text-zinc-950">{m.name}</h4>
                        <p className="text-[11px] sm:text-xs text-zinc-500 font-medium mt-0.5">Destination Reached</p>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </Card>
          ))}
        </div>

        <h2 className="text-lg sm:text-xl font-bold text-zinc-950 mt-8 sm:mt-10 mb-3 sm:mb-4">Personalised insights</h2>
        <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
          {insightCards.map(({ icon: Icon, title, body }) => (
            <Card key={title} className="p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-zinc-200 bg-white shadow-sm">
              <div className="flex items-center gap-2.5 sm:gap-3 mb-2.5 sm:mb-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-zinc-100 border border-zinc-200 flex items-center justify-center text-zinc-900 shrink-0">
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <h3 className="font-bold text-sm sm:text-base text-zinc-950">{title}</h3>
              </div>
              <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">{body}</p>
            </Card>
          ))}
        </div>

        {/* Bottom download section */}
        <div className="mt-8 sm:mt-12 text-center">
          <Card className="inline-flex flex-col items-center gap-3 sm:gap-4 p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-zinc-200 bg-white shadow-card w-full sm:w-auto">
            <Download className="w-7 h-7 sm:w-8 sm:h-8 text-black" />
            <div>
              <h3 className="text-base sm:text-lg font-bold text-zinc-950">Save your report</h3>
              <p className="text-xs sm:text-sm text-zinc-500 mt-1">Download a PDF copy to share with parents or counsellors.</p>
            </div>
            <Button size="lg" onClick={handleDownloadPDF} className="w-full sm:w-auto bg-black text-white hover:bg-zinc-800 rounded-xl px-8 h-11 sm:h-12 text-sm sm:text-base font-semibold">
              <Download className="w-4 h-4 mr-1" /> Download PDF
            </Button>
          </Card>
        </div>
      </div>
    </main>
  );
};

export default Report;
