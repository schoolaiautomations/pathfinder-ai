import { useState } from "react";
import {
  Lock,
  Calendar,
  Sparkles,
  Phone,
  Coins,
  Zap,
  Building2,
  Clock,
  CheckCircle2,
  Send,
  MessageSquare,
  ShieldCheck,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import type { RoadmapFormData } from "@/lib/roadmap-data";
import { saveBookCouncellingToSupabase } from "@/lib/supabase";

type LockedCareerInsightsProps = {
  formData?: RoadmapFormData | null;
  careerGoal: string;
};

export const LockedCareerInsights = ({ formData, careerGoal }: LockedCareerInsightsProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [bookingForm, setBookingForm] = useState({
    name: formData?.name || "",
    phone: formData?.phone || "",
    currentClass: formData?.currentClass || "",
    school: formData?.school || "",
    location: formData?.location || "",
    preferredMode: "Online Counseling (Google Meet / Call)",
    message: "",
  });

  const { toast } = useToast();

  const handleOpenModal = () => {
    if (formData) {
      setBookingForm((prev) => ({
        ...prev,
        name: formData.name || prev.name,
        phone: formData.phone || prev.phone,
        currentClass: formData.currentClass || prev.currentClass,
        school: formData.school || prev.school,
        location: formData.location || prev.location,
      }));
    }
    setSubmitted(false);
    setIsOpen(true);
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!bookingForm.name.trim() || !bookingForm.phone.trim()) {
      toast({
        title: "Required fields missing",
        description: "Please enter your name and phone number.",
        variant: "destructive",
      });
      return;
    }

    // Save directly to Supabase table `book_councelling`
    saveBookCouncellingToSupabase({
      councellor_name: formData?.councellorName || null,
      student_name: bookingForm.name.trim(),
      student_phone: bookingForm.phone.trim(),
      student_class: bookingForm.currentClass.trim() || null,
      student_school: bookingForm.school.trim() || null,
      student_location: bookingForm.location.trim() || null,
      query_description: bookingForm.message.trim() || null,
      career_opted: careerGoal || formData?.careerGoal || null,
    });

    setSubmitted(true);
    toast({
      title: "Session Request Received!",
      description: `Our expert career counselor will contact you at ${bookingForm.phone} shortly.`,
    });
  };

  return (
    <>
      <div className="bg-gradient-to-b from-[#14243A] via-[#0E1A2B] to-[#0A131F] text-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 border border-[#2D3E53] shadow-2xl relative overflow-hidden my-8 no-print">
        {/* Ambient subtle glow */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-[#B9A063]/10 rounded-full blur-3xl pointer-events-none" />

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-5 border-b border-white/10 pb-6 mb-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#B9A063]/20 border border-[#B9A063]/40 text-[#D4BE84] text-[11px] font-mono font-bold uppercase tracking-wider mb-2.5">
              <Lock className="w-3.5 h-3.5" />
              Advanced Career Pack · Locked
            </div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight text-white">
              Want deeper insights on {careerGoal}?
            </h3>
            <p className="text-zinc-300 text-xs sm:text-sm mt-1.5 max-w-xl leading-relaxed">
              To know more details like financial aid &amp; scholarships, tips to crack entrance exams, good colleges or institutes, and the daily life of a {careerGoal}, please book a career guidance session with us.
            </p>
          </div>

          <button
            onClick={handleOpenModal}
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl sm:rounded-2xl bg-[#B9A063] hover:bg-[#A38A4E] text-[#14243A] text-xs sm:text-sm font-extrabold transition-all shadow-lg hover:scale-105 active:scale-95 cursor-pointer shrink-0"
          >
            <Calendar className="w-4 h-4" />
            Book a Career Guidance Session
          </button>
        </div>

        {/* 4 Locked Feature Cards */}
        <div className="grid sm:grid-cols-2 gap-3.5 sm:gap-4 relative">
          
          {/* Card 1: Scholarships & Financial Aid */}
          <div className="bg-white/5 border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-5 relative group hover:border-[#B9A063]/40 transition-all backdrop-blur-sm flex flex-col justify-between">
            <div>
              <div className="flex items-start justify-between gap-2 mb-2">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-amber-500/20 text-amber-300 flex items-center justify-center shrink-0">
                    <Coins className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-sm text-white">Financial Aid &amp; Scholarships</div>
                    <div className="text-[10.5px] text-zinc-400">Govt schemes, private trusts &amp; waivers</div>
                  </div>
                </div>
                <Lock className="w-4 h-4 text-zinc-400 shrink-0 mt-1" />
              </div>
              <p className="text-xs text-zinc-300 leading-relaxed blur-[3px] select-none mt-2">
                Specific National Scholarship Portal schemes, state fee reimbursements, AICTE Pragati/Saksham grants, corporate sponsorships with deadline calendars and application templates.
              </p>
            </div>
            <div className="mt-3 pt-2 border-t border-white/5 text-[11px] font-semibold text-[#D4BE84] flex items-center gap-1.5">
              <span>🔒</span> Unlocked in 1-on-1 Guidance Session
            </div>
          </div>

          {/* Card 2: Tips to Crack Entrance Exams */}
          <div className="bg-white/5 border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-5 relative group hover:border-[#B9A063]/40 transition-all backdrop-blur-sm flex flex-col justify-between">
            <div>
              <div className="flex items-start justify-between gap-2 mb-2">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-blue-500/20 text-blue-300 flex items-center justify-center shrink-0">
                    <Zap className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-sm text-white">Tips to Crack Entrance Exams</div>
                    <div className="text-[10.5px] text-zinc-400">High-yield topics &amp; rank strategy</div>
                  </div>
                </div>
                <Lock className="w-4 h-4 text-zinc-400 shrink-0 mt-1" />
              </div>
              <p className="text-xs text-zinc-300 leading-relaxed blur-[3px] select-none mt-2">
                Chapter weightage analysis, speed-building mock tests, negative marking elimination tactics, timetable planning, and recommended standard reference books.
              </p>
            </div>
            <div className="mt-3 pt-2 border-t border-white/5 text-[11px] font-semibold text-[#D4BE84] flex items-center gap-1.5">
              <span>🔒</span> Unlocked in 1-on-1 Guidance Session
            </div>
          </div>

          {/* Card 3: Top Colleges & Institutes */}
          <div className="bg-white/5 border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-5 relative group hover:border-[#B9A063]/40 transition-all backdrop-blur-sm flex flex-col justify-between">
            <div>
              <div className="flex items-start justify-between gap-2 mb-2">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-emerald-500/20 text-emerald-300 flex items-center justify-center shrink-0">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-sm text-white">Top Colleges &amp; Institutes</div>
                    <div className="text-[10.5px] text-zinc-400">Cut-offs, rankings, ROI &amp; placements</div>
                  </div>
                </div>
                <Lock className="w-4 h-4 text-zinc-400 shrink-0 mt-1" />
              </div>
              <p className="text-xs text-zinc-300 leading-relaxed blur-[3px] select-none mt-2">
                Top government and accredited private institutes across Andhra Pradesh and India, realistic category cutoffs, hostel facilities, actual ROI and campus hiring records.
              </p>
            </div>
            <div className="mt-3 pt-2 border-t border-white/5 text-[11px] font-semibold text-[#D4BE84] flex items-center gap-1.5">
              <span>🔒</span> Unlocked in 1-on-1 Guidance Session
            </div>
          </div>

          {/* Card 4: Daily Life of That Professional */}
          <div className="bg-white/5 border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-5 relative group hover:border-[#B9A063]/40 transition-all backdrop-blur-sm flex flex-col justify-between">
            <div>
              <div className="flex items-start justify-between gap-2 mb-2">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-purple-500/20 text-purple-300 flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-sm text-white">Daily Life of a {careerGoal}</div>
                    <div className="text-[10.5px] text-zinc-400">Real routine, hours &amp; work culture</div>
                  </div>
                </div>
                <Lock className="w-4 h-4 text-zinc-400 shrink-0 mt-1" />
              </div>
              <p className="text-xs text-zinc-300 leading-relaxed blur-[3px] select-none mt-2">
                Realistic hour-by-hour day in the life, field vs office duties, pressure points, career growth ladder, work-life balance realities and practitioner interview insights.
              </p>
            </div>
            <div className="mt-3 pt-2 border-t border-white/5 text-[11px] font-semibold text-[#D4BE84] flex items-center gap-1.5">
              <span>🔒</span> Unlocked in 1-on-1 Guidance Session
            </div>
          </div>
        </div>

        {/* Bottom Booking Prompt */}
        <div className="mt-6 pt-5 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3.5">
          <div className="text-xs text-zinc-300 leading-relaxed flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#B9A063] shrink-0" />
            <span>Connect with certified counselors for stream selection, college shortlisting, and entrance roadmap planning.</span>
          </div>
          <button
            onClick={handleOpenModal}
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-white text-[#14243A] hover:bg-zinc-100 text-xs font-bold transition-all shadow cursor-pointer shrink-0"
          >
            <Phone className="w-3.5 h-3.5 text-[#14243A]" />
            Book Session Now
          </button>
        </div>
      </div>

      {/* Booking Dialog Modal */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
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
              Get personalized 1-on-1 guidance for <strong className="text-zinc-900">{careerGoal}</strong>.
            </DialogDescription>
          </DialogHeader>

          {submitted ? (
            <div className="py-6 text-center space-y-2.5">
              <div className="w-10 h-10 rounded-full bg-green-100 text-green-700 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h4 className="text-base font-extrabold text-zinc-950">Thank You, {bookingForm.name}!</h4>
              <p className="text-xs text-zinc-600 max-w-xs mx-auto leading-relaxed">
                We have received your request for <strong>{careerGoal}</strong>. Our counselor will contact you at <strong>{bookingForm.phone}</strong> shortly.
              </p>
              <div className="pt-2">
                <Button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="bg-black text-white rounded-xl px-5 h-9 text-xs font-bold cursor-pointer"
                >
                  Done
                </Button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleBookingSubmit} className="space-y-2.5 pt-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <div className="space-y-0.5">
                  <label className="text-[11px] font-bold text-zinc-800">Student Name *</label>
                  <Input
                    required
                    value={bookingForm.name}
                    onChange={(e) => setBookingForm({ ...bookingForm, name: e.target.value })}
                    placeholder="Student name"
                    className="h-9 rounded-xl text-xs"
                  />
                </div>
                <div className="space-y-0.5">
                  <label className="text-[11px] font-bold text-zinc-800">Phone Number *</label>
                  <Input
                    required
                    type="tel"
                    value={bookingForm.phone}
                    onChange={(e) => setBookingForm({ ...bookingForm, phone: e.target.value })}
                    placeholder="Mobile number"
                    className="h-9 rounded-xl text-xs"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <div className="space-y-0.5">
                  <label className="text-[11px] font-bold text-zinc-800">Current Class</label>
                  <Input
                    value={bookingForm.currentClass}
                    onChange={(e) => setBookingForm({ ...bookingForm, currentClass: e.target.value })}
                    placeholder="e.g. Class 10"
                    className="h-9 rounded-xl text-xs"
                  />
                </div>
                <div className="space-y-0.5">
                  <label className="text-[11px] font-bold text-zinc-800">Location / City</label>
                  <Input
                    value={bookingForm.location}
                    onChange={(e) => setBookingForm({ ...bookingForm, location: e.target.value })}
                    placeholder="e.g. Kakinada"
                    className="h-9 rounded-xl text-xs"
                  />
                </div>
              </div>

              <div className="space-y-0.5">
                <label className="text-[11px] font-bold text-zinc-800">School / College Name</label>
                <Input
                  value={bookingForm.school}
                  onChange={(e) => setBookingForm({ ...bookingForm, school: e.target.value })}
                  placeholder="School or college"
                  className="h-9 rounded-xl text-xs"
                />
              </div>

              <div className="space-y-0.5">
                <label className="text-[11px] font-bold text-zinc-800">Any specific question or doubt?</label>
                <Input
                  value={bookingForm.message}
                  onChange={(e) => setBookingForm({ ...bookingForm, message: e.target.value })}
                  placeholder="e.g. Which intermediate group to take? Fee structure details?"
                  className="h-9 rounded-xl text-xs"
                />
              </div>

              <div className="pt-1.5 flex items-center justify-end gap-2">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setIsOpen(false)}
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
    </>
  );
};
