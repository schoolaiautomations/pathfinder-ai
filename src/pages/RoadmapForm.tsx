import { useState, useEffect } from "react";
import { useNavigate, Link, useParams, useSearchParams } from "react-router-dom";
import { Map, Sparkles, User, GraduationCap, School, MapPin, Phone, Briefcase, Check, ArrowLeft, Calendar, Send, CheckCircle2, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
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
import { saveRoadmapBasicToSupabase, saveBookCouncellingToSupabase } from "@/lib/supabase";
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

  // Booking Modal State for custom careers / guidance
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingSubmitted, setBookingSubmitted] = useState(false);
  const [bookingData, setBookingData] = useState({
    name: "",
    phone: "",
    currentClass: "",
    school: "",
    location: "",
    query: "",
  });

  useEffect(() => {
    if (rawCounsellor) {
      setForm((prev) => ({ ...prev, councellorName: rawCounsellor }));
    }
  }, [rawCounsellor]);

  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);

  const isCustomCareer = form.careerGoal.trim().length > 0 && !DEFAULT_CAREER_OPTIONS.some(
    (opt) => opt.label.toLowerCase() === form.careerGoal.trim().toLowerCase()
  );

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

  const handleOpenBookingModal = () => {
    setBookingData({
      name: form.name,
      phone: form.phone,
      currentClass: form.currentClass,
      school: form.school,
      location: form.location,
      query: form.careerGoal ? `Interested in guidance for custom career: ${form.careerGoal}` : "",
    });
    setBookingSubmitted(false);
    setIsBookingOpen(true);
  };

  const handleConfirmBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!bookingData.name.trim() || !bookingData.phone.trim()) {
      toast({
        title: "Required fields missing",
        description: "Please enter your name and phone number.",
        variant: "destructive",
      });
      return;
    }

    saveBookCouncellingToSupabase({
      councellor_name: rawCounsellor || form.councellorName || null,
      student_name: bookingData.name.trim(),
      student_phone: bookingData.phone.trim(),
      student_class: bookingData.currentClass.trim() || null,
      student_school: bookingData.school.trim() || null,
      student_location: bookingData.location.trim() || null,
      query_description: bookingData.query.trim() || (form.careerGoal ? `Custom career: ${form.careerGoal}` : null),
      career_opted: null, // explicit null from form page per requirement
    });

    setBookingSubmitted(true);
    toast({
      title: "Session Request Received!",
      description: `Our expert counselor will contact you at ${bookingData.phone} shortly.`,
    });
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

    if (rawCounsellor) {
      navigate(`/roadmap/${rawCounsellor}/generating`);
    } else {
      navigate("/roadmap/generating");
    }
  };

  return (
    <main className="min-h-screen font-sans text-stone-900 flex flex-col justify-between" style={{ background: "#FAF8F5" }}>
      
      {/* ─── NAVBAR ─────────────────────────────────────────────────────────── */}
      <header className="sticky top-0 z-50 border-b border-stone-200/70" style={{ background: "rgba(250,248,245,0.92)", backdropFilter: "blur(16px)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-8 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2.5 sm:gap-3 group min-w-0">
            <img
              src={wabiLogo}
              alt="Wabi"
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover shadow-sm shrink-0"
            />
            <div className="min-w-0">
              <span className="font-extrabold text-xs sm:text-base text-stone-900 tracking-tight block leading-none truncate">
                Wabi Career Guidance
              </span>
              <span className="text-[9px] sm:text-[10px] font-semibold text-stone-400 tracking-widest uppercase block mt-0.5 truncate">
                Career Counselling
              </span>
            </div>
          </Link>

          <Link
            to="/"
            className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-stone-600 hover:text-stone-900 px-3 py-1.5 rounded-xl border border-stone-200 bg-white hover:bg-stone-50 transition-all shadow-2xs shrink-0"
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
              <div className="lg:col-span-7 space-y-3">
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
                    const isNotDecided = opt.id === "not-decided";
                    return (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => handleSelectDefault(opt)}
                        className={`flex items-center gap-2 p-2 sm:p-2.5 min-h-[40px] rounded-xl border text-left transition-all cursor-pointer select-none relative ${
                          isSelected
                            ? "shadow-sm scale-[1.01]"
                            : isNotDecided
                            ? "hover:scale-[1.01] shadow-2xs"
                            : "hover:scale-[1.01]"
                        }`}
                        style={{
                          background: isSelected ? "#1C1917" : isNotDecided ? "#FDF8F0" : "#FAF8F5",
                          color: isSelected ? "#FAF8F5" : isNotDecided ? "#7C5C3E" : "#2E2520",
                          borderColor: isSelected ? "#1C1917" : isNotDecided ? "#C9A97A" : "#E0D6CA",
                        }}
                      >
                        <span className="text-sm sm:text-base shrink-0">{opt.icon}</span>
                        <div className="flex-1 min-w-0 flex items-center justify-between gap-1">
                          <span className="text-[11px] sm:text-[11.5px] font-bold leading-tight">
                            {opt.label}
                          </span>
                          {isNotDecided && !isSelected && (
                            <span className="text-[8.5px] font-black uppercase tracking-wider px-1.5 py-0.5 rounded-full bg-amber-100 text-amber-900 shrink-0 border border-amber-300/70">
                              Guide
                            </span>
                          )}
                        </div>
                        {isSelected && <Check className="w-3 h-3 shrink-0" style={{ color: "#C9A97A" }} />}
                      </button>
                    );
                  })}
                </div>

                {/* Custom Goal Input */}
                <div className="pt-1 space-y-1.5">
                  <div className="text-[11px] font-semibold" style={{ color: "#7C6C62" }}>
                    Or enter another custom career direction:
                  </div>
                  <Input
                    type="text"
                    placeholder="e.g. Data Scientist, Civil Judge, Commercial Diver, Animator..."
                    value={form.careerGoal}
                    onChange={(e) => handleCustomGoalChange(e.target.value)}
                    className="h-10 rounded-xl border-[#D5C9BE] text-xs sm:text-sm bg-white font-medium focus:border-stone-900 focus:ring-stone-900"
                  />

                  {/* Dynamic Book Session Banner if Custom Career entered */}
                  {isCustomCareer && (
                    <div
                      className="p-3 rounded-2xl border transition-all animate-fade-in flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5 shadow-2xs"
                      style={{ background: "#F0EBE1", borderColor: "#C9A97A" }}
                    >
                      <div className="space-y-0.5">
                        <div className="text-xs font-bold text-stone-900 flex items-center gap-1.5">
                          <Sparkles className="w-3.5 h-3.5 text-amber-700" />
                          Exploring "{form.careerGoal}"?
                        </div>
                        <p className="text-[11px] text-stone-600 leading-tight">
                          Book a 1-on-1 session with our certified counsellors to get deeper personalized insights on this pathway.
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={handleOpenBookingModal}
                        className="shrink-0 px-3.5 py-2 rounded-xl font-bold text-xs cursor-pointer shadow-sm hover:shadow transition-all flex items-center gap-1.5 active:scale-95"
                        style={{ background: "#1C1917", color: "#FAF8F5" }}
                      >
                        <Calendar className="w-3.5 h-3.5 text-[#C9A97A]" />
                        Book Guidance Session
                      </button>
                    </div>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isCustomCareer}
                  className={`w-full rounded-2xl h-11 sm:h-12 font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 mt-2 ${
                    isCustomCareer
                      ? "opacity-40 cursor-not-allowed"
                      : "cursor-pointer shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
                  }`}
                  style={{ background: "#1C1917", color: "#FAF8F5" }}
                >
                  <Sparkles className="w-4 h-4" style={{ color: "#C9A97A" }} />
                  {isCustomCareer ? "Book a Guidance Session for this career ↑" : "Generate Learning Roadmap & Fit Report"}
                </button>
              </div>

            </form>
          </div>

        </div>
      </div>

      {/* ─── BOOK COUNSELLING SESSION MODAL (MOBILE-OPTIMIZED) ─────────────── */}
      <Dialog open={isBookingOpen} onOpenChange={setIsBookingOpen}>
        <DialogContent className="max-w-md w-[92vw] sm:w-full max-h-[88vh] overflow-y-auto bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-zinc-200 shadow-2xl">
          <DialogHeader className="text-left space-y-0.5 pb-1">
            <div className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[#7E6A2E] uppercase tracking-wider">
              <Sparkles className="w-3 h-3 text-black" />
              Wabi Career Mentorship
            </div>
            <DialogTitle className="text-lg sm:text-xl font-extrabold text-zinc-950">
              Book a Career Guidance Session
            </DialogTitle>
            <DialogDescription className="text-xs text-zinc-500">
              Get personalized 1-on-1 guidance for <strong className="text-zinc-900">{form.careerGoal || "your career direction"}</strong>.
            </DialogDescription>
          </DialogHeader>

          {bookingSubmitted ? (
            <div className="py-6 text-center space-y-2.5">
              <div className="w-10 h-10 rounded-full bg-green-100 text-green-700 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h4 className="text-base font-extrabold text-zinc-950">Thank You, {bookingData.name || "Student"}!</h4>
              <p className="text-xs text-zinc-600 max-w-xs mx-auto leading-relaxed">
                We have received your guidance request for <strong>{form.careerGoal}</strong>. Our counselor will contact you at <strong>{bookingData.phone}</strong> shortly.
              </p>
              <div className="pt-2">
                <Button
                  type="button"
                  onClick={() => setIsBookingOpen(false)}
                  className="bg-black text-white rounded-xl px-5 h-9 text-xs font-bold cursor-pointer"
                >
                  Done
                </Button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleConfirmBooking} className="space-y-2.5 pt-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <div className="space-y-0.5">
                  <label className="text-[11px] font-bold text-zinc-800">Student Name *</label>
                  <Input
                    required
                    value={bookingData.name}
                    onChange={(e) => setBookingData({ ...bookingData, name: e.target.value })}
                    placeholder="Student name"
                    className="h-9 rounded-xl text-xs"
                  />
                </div>
                <div className="space-y-0.5">
                  <label className="text-[11px] font-bold text-zinc-800">Phone Number *</label>
                  <Input
                    required
                    type="tel"
                    value={bookingData.phone}
                    onChange={(e) => setBookingData({ ...bookingData, phone: e.target.value })}
                    placeholder="Mobile number"
                    className="h-9 rounded-xl text-xs"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <div className="space-y-0.5">
                  <label className="text-[11px] font-bold text-zinc-800">Current Class</label>
                  <Input
                    value={bookingData.currentClass}
                    onChange={(e) => setBookingData({ ...bookingData, currentClass: e.target.value })}
                    placeholder="e.g. Class 10"
                    className="h-9 rounded-xl text-xs"
                  />
                </div>
                <div className="space-y-0.5">
                  <label className="text-[11px] font-bold text-zinc-800">Location / City</label>
                  <Input
                    value={bookingData.location}
                    onChange={(e) => setBookingData({ ...bookingData, location: e.target.value })}
                    placeholder="e.g. Kakinada"
                    className="h-9 rounded-xl text-xs"
                  />
                </div>
              </div>

              <div className="space-y-0.5">
                <label className="text-[11px] font-bold text-zinc-800">School / College Name</label>
                <Input
                  value={bookingData.school}
                  onChange={(e) => setBookingData({ ...bookingData, school: e.target.value })}
                  placeholder="School or college"
                  className="h-9 rounded-xl text-xs"
                />
              </div>

              <div className="space-y-0.5">
                <label className="text-[11px] font-bold text-zinc-800">Any specific question or doubt?</label>
                <Input
                  value={bookingData.query}
                  onChange={(e) => setBookingData({ ...bookingData, query: e.target.value })}
                  placeholder="e.g. Which intermediate group to take? Fee structure details?"
                  className="h-9 rounded-xl text-xs"
                />
              </div>

              <div className="pt-1.5 flex items-center justify-end gap-2">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setIsBookingOpen(false)}
                  className="rounded-xl h-9 px-4 text-xs font-semibold"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  className="bg-black text-white hover:bg-zinc-800 rounded-xl h-9 px-4 text-xs font-bold shadow cursor-pointer"
                >
                  <Send className="w-3 h-3 mr-1.5" />
                  Confirm Booking Request
                </Button>
              </div>
            </form>
          )}
        </DialogContent>
      </Dialog>

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
