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
    <main className="min-h-screen bg-background pb-16">
      <div className="max-w-5xl mx-auto px-4 pt-10">
        <Link to="/" className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-600 hover:text-black mb-6">
          <ArrowLeft className="w-4 h-4" /> Back to home
        </Link>
        <Card className="bg-white border border-zinc-200 rounded-3xl p-8 sm:p-10 shadow-card animate-fade-in">
          <div className="flex items-center gap-2 mb-3">
            <Sparkles className="w-5 h-5 text-black" />
            <span className="text-xs font-bold tracking-wider text-zinc-700 uppercase">Your AI Career Report</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-zinc-950">
            {studentName
              ? `${studentName}, here's your personalised career path`
              : "Your personalised career path"}
          </h1>
          <p className="text-zinc-500 mt-3 max-w-2xl text-base">Based on your interests, education, and goals — here are the careers our AI thinks suit you best.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button size="lg" onClick={handleDownloadPDF} className="bg-black text-white hover:bg-zinc-800 rounded-xl px-6 font-semibold"><Download /> Download PDF</Button>
            <Button variant="outline" size="lg" className="rounded-xl border-zinc-300 font-semibold">Share with parents</Button>
          </div>
        </Card>

        <h2 className="text-xl font-bold text-zinc-950 mt-10 mb-4">Top career matches</h2>
        <div className="grid gap-4">
          {report.matches.map((m, i) => (
            <Card key={m.name} className="p-6 rounded-2xl border border-zinc-200 bg-white shadow-sm hover:shadow-md transition-all">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-black text-white flex items-center justify-center font-bold text-lg shadow-sm">{i + 1}</div>
                  <div>
                    <h3 className="text-lg font-bold text-zinc-950">{m.name}</h3>
                    <p className="text-sm text-zinc-500 mt-0.5">{m.why}</p>
                  </div>
                </div>
                <div className="text-right shrink-0">
                  <div className="text-3xl font-extrabold text-black">{m.score}%</div>
                  <div className="text-xs text-zinc-500 font-medium">Match score</div>
                </div>
              </div>
              <div className="mt-4 h-2 bg-zinc-100 rounded-full overflow-hidden border border-zinc-200/50 mb-4">
                <div className="h-full bg-black rounded-full transition-all duration-1000 ease-out" style={{ width: `${m.score}%` }} />
              </div>

              {m.roadmap && m.roadmap.length > 0 && (
                <div className="mt-4 pt-4 border-t border-zinc-100">
                  <button 
                    onClick={() => toggleMatch(i)}
                    className="flex items-center gap-2 text-sm font-bold text-zinc-950 hover:text-zinc-600 transition-colors w-full"
                  >
                    {expandedMatches.has(i) ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    Explore Pathway to {m.name}
                  </button>

                  {expandedMatches.has(i) && (
                    <div className="mt-6 ml-2 sm:ml-6 relative border-l-2 border-zinc-300 space-y-8 pb-4 animate-fade-in">
                      {m.roadmap.map((step, stepIdx) => (
                        <div key={stepIdx} className="relative pl-6 sm:pl-8">
                          {/* Timeline node */}
                          <div className="absolute -left-[11px] top-1 w-5 h-5 rounded-full bg-white border-4 border-black shadow-sm"></div>
                          
                          <div className="bg-zinc-50/80 p-4 rounded-2xl border border-zinc-200/80 shadow-none">
                            <h4 className="font-bold text-base sm:text-lg text-zinc-950">{step.stage}</h4>
                            <p className="text-sm text-zinc-600 mt-1 leading-relaxed">{step.description}</p>
                            
                            <div className="flex flex-wrap items-center gap-3 mt-3">
                              <div className="flex items-center gap-1.5 text-xs font-semibold text-zinc-800 bg-zinc-200/70 border border-zinc-300 px-2.5 py-1 rounded-md">
                                <Clock className="w-3.5 h-3.5" />
                                {step.duration}
                              </div>
                              {step.institutes && step.institutes.length > 0 && (
                                <div className="flex items-start gap-1.5 text-xs text-zinc-900 bg-zinc-100 border border-zinc-200 px-2.5 py-1 rounded-md">
                                  <GraduationCap className="w-3.5 h-3.5 mt-0.5 shrink-0" />
                                  <span className="font-semibold">Institutes: {step.institutes.join(", ")}</span>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                      
                      {/* Final Destination Node */}
                      <div className="relative pl-6 sm:pl-8 pt-2">
                        <div className="absolute -left-[15px] top-2 w-7 h-7 rounded-full bg-black flex items-center justify-center text-white shadow-sm">
                          <Briefcase className="w-3.5 h-3.5" />
                        </div>
                        <h4 className="font-bold text-lg text-zinc-950">{m.name}</h4>
                        <p className="text-xs text-zinc-500 font-medium mt-0.5">Destination Reached</p>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </Card>
          ))}
        </div>

        <h2 className="text-xl font-bold text-zinc-950 mt-10 mb-4">Personalised insights</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {insightCards.map(({ icon: Icon, title, body }) => (
            <Card key={title} className="p-6 rounded-2xl border border-zinc-200 bg-white shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-zinc-100 border border-zinc-200 flex items-center justify-center text-zinc-900">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-zinc-950">{title}</h3>
              </div>
              <p className="text-sm text-zinc-600 leading-relaxed">{body}</p>
            </Card>
          ))}
        </div>

        {/* Bottom download section */}
        <div className="mt-12 text-center">
          <Card className="inline-flex flex-col items-center gap-4 p-8 rounded-3xl border border-zinc-200 bg-white shadow-card">
            <Download className="w-8 h-8 text-black" />
            <div>
              <h3 className="text-lg font-bold text-zinc-950">Save your report</h3>
              <p className="text-sm text-zinc-500 mt-1">Download a PDF copy to share with parents or counsellors.</p>
            </div>
            <Button size="lg" onClick={handleDownloadPDF} className="bg-black text-white hover:bg-zinc-800 rounded-xl px-8 font-semibold">
              <Download /> Download PDF
            </Button>
          </Card>
        </div>
      </div>
    </main>
  );
};

export default Report;
