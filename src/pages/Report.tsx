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
    <main className="min-h-screen bg-gradient-hero pb-16">
      <div className="max-w-5xl mx-auto px-4 pt-10">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-6">
          <ArrowLeft className="w-4 h-4" /> Back to home
        </Link>
        <Card className="bg-gradient-card rounded-3xl p-8 sm:p-10 shadow-card animate-fade-in">
          <div className="flex items-center gap-2 mb-3">
            <Sparkles className="w-5 h-5 text-primary" />
            <span className="text-sm font-semibold text-primary">Your AI Career Report</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold">
            {studentName
              ? `${studentName}, here's your personalised career path`
              : "Your personalised career path"}
          </h1>
          <p className="text-muted-foreground mt-3 max-w-2xl">Based on your interests, education, and goals — here are the careers our AI thinks suit you best.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button variant="hero" size="lg" onClick={handleDownloadPDF}><Download /> Download PDF</Button>
            <Button variant="outline" size="lg" className="rounded-xl">Share with parents</Button>
          </div>
        </Card>

        <h2 className="text-xl font-bold mt-10 mb-4">Top career matches</h2>
        <div className="grid gap-4">
          {report.matches.map((m, i) => (
            <Card key={m.name} className="p-6 rounded-2xl shadow-soft hover:shadow-card transition-smooth">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center text-white font-bold shadow-glow">{i + 1}</div>
                  <div>
                    <h3 className="text-lg font-bold">{m.name}</h3>
                    <p className="text-sm text-muted-foreground mt-0.5">{m.why}</p>
                  </div>
                </div>
                <div className="text-right shrink-0">
                  <div className="text-3xl font-bold text-gradient-primary">{m.score}%</div>
                  <div className="text-xs text-muted-foreground">Match score</div>
                </div>
              </div>
              <div className="mt-4 h-2 bg-muted rounded-full overflow-hidden mb-4">
                <div className="h-full bg-gradient-primary rounded-full transition-all duration-1000 ease-out" style={{ width: `${m.score}%` }} />
              </div>

              {m.roadmap && m.roadmap.length > 0 && (
                <div className="mt-4 pt-4 border-t border-border/50">
                  <button 
                    onClick={() => toggleMatch(i)}
                    className="flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors w-full"
                  >
                    {expandedMatches.has(i) ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    Explore Pathway to {m.name}
                  </button>

                  {expandedMatches.has(i) && (
                    <div className="mt-6 ml-2 sm:ml-6 relative border-l-2 border-primary/20 space-y-8 pb-4 animate-fade-in">
                      {m.roadmap.map((step, stepIdx) => (
                        <div key={stepIdx} className="relative pl-6 sm:pl-8">
                          {/* Timeline node */}
                          <div className="absolute -left-[11px] top-1 w-5 h-5 rounded-full bg-background border-4 border-primary shadow-glow"></div>
                          
                          <div className="bg-gradient-soft p-4 rounded-xl shadow-sm border border-border/50">
                            <h4 className="font-bold text-base sm:text-lg text-foreground">{step.stage}</h4>
                            <p className="text-sm text-muted-foreground mt-1">{step.description}</p>
                            
                            <div className="flex flex-wrap items-center gap-4 mt-3">
                              <div className="flex items-center gap-1.5 text-xs font-medium text-amber-600 bg-amber-50 px-2 py-1 rounded-md">
                                <Clock className="w-3.5 h-3.5" />
                                {step.duration}
                              </div>
                              {step.institutes && step.institutes.length > 0 && (
                                <div className="flex items-start gap-1.5 text-xs text-primary bg-primary/5 px-2 py-1 rounded-md">
                                  <GraduationCap className="w-3.5 h-3.5 mt-0.5 shrink-0" />
                                  <span className="font-medium">Institutes: {step.institutes.join(", ")}</span>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                      
                      {/* Final Destination Node */}
                      <div className="relative pl-6 sm:pl-8 pt-2">
                        <div className="absolute -left-[15px] top-2 w-7 h-7 rounded-full bg-primary flex items-center justify-center text-white shadow-glow">
                          <Briefcase className="w-3.5 h-3.5" />
                        </div>
                        <h4 className="font-bold text-lg text-primary">{m.name}</h4>
                        <p className="text-xs text-muted-foreground mt-0.5">Destination Reached</p>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </Card>
          ))}
        </div>

        <h2 className="text-xl font-bold mt-10 mb-4">Personalised insights</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {insightCards.map(({ icon: Icon, title, body }) => (
            <Card key={title} className="p-6 rounded-2xl shadow-soft">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-gradient-soft flex items-center justify-center">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold">{title}</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{body}</p>
            </Card>
          ))}
        </div>

        {/* Bottom download section */}
        <div className="mt-12 text-center">
          <Card className="inline-flex flex-col items-center gap-4 p-8 rounded-3xl shadow-soft bg-gradient-card">
            <Download className="w-8 h-8 text-primary" />
            <div>
              <h3 className="text-lg font-bold">Save your report</h3>
              <p className="text-sm text-muted-foreground mt-1">Download a PDF copy to share with parents or counsellors.</p>
            </div>
            <Button variant="hero" size="lg" onClick={handleDownloadPDF}>
              <Download /> Download PDF
            </Button>
          </Card>
        </div>
      </div>
    </main>
  );
};

export default Report;
