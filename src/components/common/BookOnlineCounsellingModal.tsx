import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  CheckCircle2,
  AlertCircle,
  Send,
  Sparkles,
  Phone,
  User,
  GraduationCap,
  MapPin,
  HelpCircle,
  Briefcase,
} from "lucide-react";
import { saveBookCouncellingToSupabase } from "@/lib/supabase";
import { useToast } from "@/hooks/use-toast";
import { DEFAULT_CAREER_OPTIONS } from "@/lib/roadmap-data";

interface BookOnlineCounsellingModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultCareer?: string;
}

export const BookOnlineCounsellingModal: React.FC<BookOnlineCounsellingModalProps> = ({
  isOpen,
  onClose,
  defaultCareer,
}) => {
  const { toast } = useToast();
  const [form, setForm] = useState({
    name: "",
    phone: "",
    currentClass: "",
    school: "",
    location: "",
    careerOpted: defaultCareer || "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  // Sync default career when changed or modal opened
  useEffect(() => {
    if (defaultCareer) {
      setForm((prev) => ({ ...prev, careerOpted: defaultCareer }));
    }
  }, [defaultCareer, isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    const cleanName = form.name.trim();
    const cleanPhone = form.phone.trim();
    const cleanClass = form.currentClass.trim();
    const cleanLocation = form.location.trim();

    if (!cleanName || !cleanPhone || !cleanClass || !cleanLocation) {
      setSubmitError("Please fill in all mandatory fields (Name, Phone, Class, and City).");
      return;
    }

    setIsSubmitting(true);

    try {
      const result = await saveBookCouncellingToSupabase({
        student_name: cleanName,
        student_phone: cleanPhone,
        student_class: cleanClass,
        student_school: form.school.trim() || null,
        student_location: cleanLocation,
        query_description: form.message.trim() || null,
        career_opted: form.careerOpted.trim() || defaultCareer || "General Career Guidance",
      });

      if (result.isDuplicate) {
        setSubmitError(
          result.error ||
            "You have already submitted a counselling request with this phone number."
        );
        return;
      }

      if (!result.success) {
        setSubmitError(result.error || "Failed to submit request. Please try again.");
        return;
      }

      setSubmitted(true);
      toast({
        title: "Session Booked Successfully!",
        description: `Our counsellor will contact you at ${cleanPhone} shortly.`,
      });
    } catch (err: any) {
      setSubmitError(err?.message || "An unexpected error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setSubmitted(false);
    setSubmitError(null);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && handleClose()}>
      <DialogContent className="max-w-md bg-white border border-stone-200 text-stone-900 rounded-3xl p-6 sm:p-7 shadow-2xl">
        <DialogHeader className="space-y-1.5 text-left">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F5F1EC] border border-[#E0D6CA] text-[#7C5C3E] text-xs font-bold uppercase tracking-wider w-fit">
            <Sparkles className="w-3.5 h-3.5 text-[#C9A97A]" />
            1-on-1 Guidance Session
          </div>
          <DialogTitle className="text-xl sm:text-2xl font-extrabold text-stone-900 tracking-tight">
            Book Online Counselling
          </DialogTitle>
          <DialogDescription className="text-xs sm:text-sm text-stone-500 font-medium">
            Speak directly with our expert career counsellor. We will call you to schedule your personalized session.
          </DialogDescription>
        </DialogHeader>

        {submitted ? (
          <div className="py-6 text-center space-y-4 animate-in fade-in zoom-in-95">
            <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-sm">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <div className="space-y-1">
              <h3 className="font-extrabold text-lg text-stone-900">Request Confirmed!</h3>
              <p className="text-xs sm:text-sm text-stone-600 max-w-xs mx-auto leading-relaxed">
                Thank you, <strong>{form.name}</strong>. Our senior counsellor will call you at{" "}
                <strong className="text-stone-900">{form.phone}</strong> soon
                {form.careerOpted ? <> regarding <strong>{form.careerOpted}</strong>.</> : "."}
              </p>
            </div>
            <Button
              type="button"
              onClick={handleClose}
              className="bg-stone-900 text-white hover:bg-stone-800 rounded-xl px-6 h-10 text-xs font-bold cursor-pointer transition-all"
            >
              Done
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3 pt-2">
            <div className="space-y-1">
              <label className="text-xs font-bold text-stone-700 flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-[#7C5C3E]" />
                Student Name *
              </label>
              <Input
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Enter full name"
                className="h-10 rounded-xl text-xs bg-stone-50 border-stone-200 focus:bg-white"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-stone-700 flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-[#7C5C3E]" />
                Mobile / WhatsApp Number *
              </label>
              <Input
                required
                type="tel"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                placeholder="10-digit phone number"
                className="h-10 rounded-xl text-xs bg-stone-50 border-stone-200 focus:bg-white"
              />
            </div>

            {/* Interested Career Option (maps to career_opted) */}
            <div className="space-y-1">
              <label className="text-xs font-bold text-stone-700 flex items-center gap-1.5">
                <Briefcase className="w-3.5 h-3.5 text-[#7C5C3E]" />
                Interested Career Option
              </label>
              <Input
                value={form.careerOpted}
                onChange={(e) => setForm({ ...form, careerOpted: e.target.value })}
                placeholder="Interested career option"
                list="career-options-list"
                className="h-10 rounded-xl text-xs bg-stone-50 border-stone-200 focus:bg-white"
              />
              <datalist id="career-options-list">
                {DEFAULT_CAREER_OPTIONS.map((c) => (
                  <option key={c.id} value={c.label} />
                ))}
                <option value="General Guidance / Undecided" />
                <option value="Other" />
              </datalist>
            </div>

            <div className="grid grid-cols-2 gap-2.5">
              <div className="space-y-1">
                <label className="text-xs font-bold text-stone-700 flex items-center gap-1.5">
                  <GraduationCap className="w-3.5 h-3.5 text-[#7C5C3E]" />
                  Class / Year *
                </label>
                <Input
                  required
                  value={form.currentClass}
                  onChange={(e) => setForm({ ...form, currentClass: e.target.value })}
                  placeholder="e.g. 10th / Inter"
                  className="h-10 rounded-xl text-xs bg-stone-50 border-stone-200 focus:bg-white"
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold text-stone-700 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#7C5C3E]" />
                  City / Town *
                </label>
                <Input
                  required
                  value={form.location}
                  onChange={(e) => setForm({ ...form, location: e.target.value })}
                  placeholder="e.g. Kakinada"
                  className="h-10 rounded-xl text-xs bg-stone-50 border-stone-200 focus:bg-white"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-stone-700 flex items-center gap-1.5">
                <HelpCircle className="w-3.5 h-3.5 text-[#7C5C3E]" />
                Any specific question or doubt?
              </label>
              <Input
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="e.g. Confused between MPC or BiPC / College options"
                className="h-10 rounded-xl text-xs bg-stone-50 border-stone-200 focus:bg-white"
              />
            </div>

            {submitError && (
              <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs font-semibold flex items-start gap-2 animate-in fade-in">
                <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                <span>{submitError}</span>
              </div>
            )}

            <div className="pt-2 flex items-center justify-end gap-2">
              <Button
                type="button"
                variant="outline"
                onClick={handleClose}
                className="rounded-xl h-10 px-4 text-xs font-bold cursor-pointer"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-stone-900 text-white hover:bg-stone-800 rounded-xl h-10 px-5 text-xs font-bold shadow-sm cursor-pointer disabled:opacity-50"
              >
                <Send className="w-3.5 h-3.5 mr-1.5" />
                {isSubmitting ? "Submitting..." : "Confirm Booking"}
              </Button>
            </div>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
};
