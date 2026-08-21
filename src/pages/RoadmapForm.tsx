import { useState, useEffect } from "react";
import { useNavigate, Link, useParams, useSearchParams } from "react-router-dom";
import { Map, Sparkles, User, GraduationCap, School, MapPin, Phone, Briefcase, Check, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import {
  ROADMAP_FORM_KEY,
  roadmapEducationLevels,
  DEFAULT_CAREER_OPTIONS,
  findCareerFormatFile,
} from "@/lib/roadmap-data";
import type { RoadmapFormData } from "@/lib/roadmap-data";
import { saveRoadmapBasicToSupabase } from "@/lib/supabase";
import wabiLogo from "@/lib/wabi_resolutions_logo.jpeg";

const RoadmapForm = () => {
  const navigate = useNavigate();
  const { counsellorName } = useParams<{ counsellorName?: string }>();
  const [searchParams] = useSearchParams();
  const rawCounsellor = counsellorName || searchParams.get("counsellor") || searchParams.get("councellor") || null;

  const { toast } = useToast();
  const [form, setForm] = useState<RoadmapFormData>({
    name: "",
    currentClass: "",
    school: "",
    location: "",
    phone: "",
    careerGoal: "",
    councellorName: rawCounsellor || undefined,
  });

  useEffect(() => {
    if (rawCounsellor) {
      setForm((prev) => ({ ...prev, councellorName: rawCounsellor }));
    }
  }, [rawCounsellor]);

  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);

  const handleSelectDefault = (opt: (typeof DEFAULT_CAREER_OPTIONS)[number]) => {
    setSelectedOptionId(opt.id);
    setForm((prev) => ({ ...prev, careerGoal: opt.label }));
  };

  const handleCustomGoalChange = (val: string) => {
    setForm((prev) => ({ ...prev, careerGoal: val }));
    const match = DEFAULT_CAREER_OPTIONS.find(
      (opt) => opt.label.toLowerCase() === val.trim().toLowerCase()
    );
    setSelectedOptionId(match ? match.id : null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name.trim()) {
      toast({ title: "Name is required", description: "Please enter student full name.", variant: "destructive" });
      return;
    }
    if (!form.currentClass) {
      toast({ title: "Class is required", description: "Please select current class or stage.", variant: "destructive" });
      return;
    }
    if (!form.school.trim()) {
      toast({ title: "School / College name is required", description: "Please enter school or college name.", variant: "destructive" });
      return;
    }
    if (!form.location.trim()) {
      toast({ title: "Location is required", description: "Please enter location or city.", variant: "destructive" });
      return;
    }
    if (!form.phone.trim()) {
      toast({ title: "Phone number is required", description: "Please enter mobile number.", variant: "destructive" });
      return;
    }
    if (!form.careerGoal.trim()) {
      toast({ title: "Career goal is required", description: "Please select or enter your career goal.", variant: "destructive" });
      return;
    }

    const finalForm: RoadmapFormData = {
      ...form,
      councellorName: rawCounsellor || form.councellorName || undefined,
    };

    // 1. Save locally for roadmap generation
    localStorage.setItem(ROADMAP_FORM_KEY, JSON.stringify(finalForm));

    // 2. Save directly to Supabase table `roadmap_basic`
    saveRoadmapBasicToSupabase({
      councellor_name: rawCounsellor || form.councellorName || null,
      student_name: form.name.trim(),
      student_class: form.currentClass,
      student_school: form.school.trim(),
      student_location: form.location.trim(),
      student_phone: form.phone.trim(),
      career_opted: form.careerGoal.trim(),
    });

    navigate("/roadmap/generating");
  };

  return (
    <main className="min-h-screen font-sans text-stone-900 flex flex-col justify-between" style={{ background: "#FAF8F5" }}>
      
      {/* ─── NAVBAR ─────────────────────────────────────────────────────────── */}
      <header className="sticky top-0 z-50 border-b border-stone-200/70" style={{ background: "rgba(250,248,245,0.92)", backdropFilter: "blur(16px)" }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src={wabiLogo}
              alt="Wabi"
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full object-cover shadow-sm"
            />
            <div>
              <span className="font-extrabold text-sm sm:text-base text-stone-900 tracking-tight block leading-none">
                Wabi Career Guidance
              </span>
              <span className="text-[10px] font-semibold text-stone-400 tracking-widest uppercase block mt-0.5">
                Career Counselling
              </span>
            </div>
          </Link>

          <Link
            to="/"
            className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-stone-600 hover:text-stone-900 px-3.5 py-1.5 rounded-xl border border-stone-200 bg-white hover:bg-stone-50 transition-all shadow-2xs"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
        </div>
      </header>

      {/* ─── FORM CONTENT ──────────────────────────────────────────────────── */}
      <div className="relative overflow-hidden py-6 sm:py-10 px-4 sm:px-6 flex-1">
        {/* Warm ambient background glow */}
        <div
          className="absolute inset-0 -z-10 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 70% 50% at 50% 0%, #E8DFD0 0%, transparent 70%)",
          }}
        />

        <div className="max-w-5xl mx-auto">
          
          {/* Header (Compact) */}
          <div className="text-center mb-6 space-y-2">
            {rawCounsellor ? (
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-[11.5px] font-bold tracking-wider" style={{ background: "#F0EBE1", color: "#4A3B32", border: "1px solid #C9A97A" }}>
                <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "#7C5C3E" }} />
                <span>Counsellor:</span>
                <span className="font-mono text-[#7C5C3E] font-extrabold">{rawCounsellor}</span>
              </div>
            ) : (
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-semibold tracking-wider uppercase" style={{ background: "#F0EBE1", color: "#78645A", border: "1px solid #DDD3C5" }}>
                <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "#B5956A" }} />
                Structured Pathway &amp; 4-Circle Evaluation
              </div>
            )}
            
            <h1
              className="font-extrabold leading-tight tracking-tight"
              style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.3rem)", color: "#1C1917" }}
            >
              Career Roadmap &amp;{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #B5956A 0%, #7C5C3E 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Fit Check
              </span>
            </h1>
            
            <p className="text-xs sm:text-sm max-w-lg mx-auto leading-relaxed font-medium" style={{ color: "#6B5E53" }}>
              Enter student details and choose your career goal to view step-by-step stream choices, entrance exam timelines, and honest fit evaluations.
            </p>
          </div>

          {/* Form Card (Wide 2-Column Layout) */}
          <div
            className="rounded-3xl p-5 sm:p-7 shadow-sm transition-all"
            style={{ background: "#F5F1EC", border: "1.5px solid #E0D6CA" }}
          >
            <form onSubmit={handleSubmit} className="grid lg:grid-cols-12 gap-6 items-start">
              
              {/* Left Column: Student Details Box */}
              <div
                className="lg:col-span-5 rounded-2xl p-4 sm:p-5 space-y-3.5"
                style={{ background: "#F0EBE1", border: "1px solid #DDD3C5" }}
              >
                <div className="text-xs font-bold uppercase tracking-wider flex items-center justify-between" style={{ color: "#7C5C3E" }}>
                  <span className="flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5" style={{ color: "#B5956A" }} />
                    Student Profile
                  </span>
                  <span className="text-[10px] text-stone-400 font-normal">All fields required</span>
                </div>

                <div className="space-y-3">
                  {/* Full Name */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-stone-900">
                      Student Name <span className="text-amber-800">*</span>
                    </label>
                    <Input
                      type="text"
                      placeholder="e.g. Rahul Sharma"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="h-10 rounded-xl border-[#D5C9BE] text-xs sm:text-sm bg-white font-medium focus:border-stone-900 focus:ring-stone-900"
                    />
                  </div>

                  {/* Class / Education Level */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-stone-900">
                      Current Class / Stage <span className="text-amber-800">*</span>
                    </label>
                    <Select
                      value={form.currentClass}
                      onValueChange={(v) => setForm({ ...form, currentClass: v })}
                    >
                      <SelectTrigger className="h-10 rounded-xl border-[#D5C9BE] text-xs sm:text-sm bg-white font-medium focus:border-stone-900 focus:ring-stone-900">
                        <SelectValue placeholder="Select current class" />
                      </SelectTrigger>
                      <SelectContent>
                        {roadmapEducationLevels.map((level) => (
                          <SelectItem key={level} value={level}>
                            {level}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* School / College Name */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-stone-900">
                      School / College Name <span className="text-amber-800">*</span>
                    </label>
                    <Input
                      type="text"
                      placeholder="e.g. ZP High School, Kakinada"
                      value={form.school}
                      onChange={(e) => setForm({ ...form, school: e.target.value })}
                      className="h-10 rounded-xl border-[#D5C9BE] text-xs sm:text-sm bg-white font-medium focus:border-stone-900 focus:ring-stone-900"
                    />
                  </div>

                  {/* Location */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-stone-900">
                      Location / City <span className="text-amber-800">*</span>
                    </label>
                    <Input
                      type="text"
                      placeholder="e.g. Kakinada, Andhra Pradesh"
                      value={form.location}
                      onChange={(e) => setForm({ ...form, location: e.target.value })}
                      className="h-10 rounded-xl border-[#D5C9BE] text-xs sm:text-sm bg-white font-medium focus:border-stone-900 focus:ring-stone-900"
                    />
                  </div>

                  {/* Phone Number */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-stone-900">
                      Phone Number <span className="text-amber-800">*</span>
                    </label>
                    <Input
                      type="tel"
                      placeholder="e.g. 9876543210"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="h-10 rounded-xl border-[#D5C9BE] text-xs sm:text-sm bg-white font-medium focus:border-stone-900 focus:ring-stone-900"
                    />
                  </div>
                </div>
              </div>

              {/* Right Column: Career Goal Selection & Submit */}
              <div className="lg:col-span-7 space-y-3.5">
                <div className="flex items-center justify-between">
                  <label className="text-xs sm:text-sm font-bold text-stone-900 flex items-center gap-1.5">
                    <Briefcase className="w-3.5 h-3.5" style={{ color: "#B5956A" }} />
                    Select Your Career Goal <span className="text-amber-800">*</span>
                  </label>
                  <span className="text-[10.5px] font-semibold text-stone-500 uppercase tracking-wider">
                    {DEFAULT_CAREER_OPTIONS.length} Curated Blueprints
                  </span>
                </div>

                {/* Default Options Grid (Strictly 3 per row) */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {DEFAULT_CAREER_OPTIONS.map((opt) => {
                    const isSelected = selectedOptionId === opt.id || form.careerGoal.trim().toLowerCase() === opt.label.toLowerCase();
                    return (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => handleSelectDefault(opt)}
                        className={`flex items-center gap-2 p-2 sm:p-2.5 min-h-[40px] rounded-xl border text-left transition-all cursor-pointer select-none ${
                          isSelected
                            ? "shadow-sm scale-[1.01]"
                            : "hover:scale-[1.01]"
                        }`}
                        style={{
                          background: isSelected ? "#1C1917" : "#FAF8F5",
                          color: isSelected ? "#FAF8F5" : "#2E2520",
                          borderColor: isSelected ? "#1C1917" : "#E0D6CA",
                        }}
                      >
                        <span className="text-sm sm:text-base shrink-0">{opt.icon}</span>
                        <span className="text-[11px] sm:text-[11.5px] font-bold leading-tight flex-1">
                          {opt.label}
                        </span>
                        {isSelected && <Check className="w-3 h-3 shrink-0" style={{ color: "#C9A97A" }} />}
                      </button>
                    );
                  })}
                </div>

                {/* Custom Goal Input */}
                <div className="pt-1">
                  <div className="text-[11px] font-semibold mb-1" style={{ color: "#7C6C62" }}>
                    Or enter another custom career direction:
                  </div>
                  <Input
                    type="text"
                    placeholder="e.g. Data Scientist, Fashion Designer, Pilot, Civil Judge..."
                    value={form.careerGoal}
                    onChange={(e) => handleCustomGoalChange(e.target.value)}
                    className="h-10 rounded-xl border-[#D5C9BE] text-xs sm:text-sm bg-white font-medium focus:border-stone-900 focus:ring-stone-900"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full rounded-2xl h-11 sm:h-12 font-bold text-xs sm:text-sm cursor-pointer transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 mt-2"
                  style={{ background: "#1C1917", color: "#FAF8F5" }}
                >
                  <Sparkles className="w-4 h-4" style={{ color: "#C9A97A" }} />
                  Generate Learning Roadmap &amp; Fit Report
                </button>
              </div>

            </form>
          </div>

        </div>
      </div>

      {/* ─── FOOTER ─────────────────────────────────────────────────────── */}
      <footer style={{ borderTop: "1px solid #E0D6CA", background: "#F0EBE1" }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-semibold text-stone-500">
          <span>© {new Date().getFullYear()} Wabi Resolutions &amp; Career Guidance</span>
          <div className="flex items-center gap-4">
            <Link to="/" className="hover:text-stone-900 transition-colors">Home</Link>
            <Link to="/form" className="hover:text-stone-900 transition-colors">AI Career Test</Link>
          </div>
        </div>
      </footer>

    </main>
  );
};

export default RoadmapForm;
