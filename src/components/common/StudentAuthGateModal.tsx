import React, { useState, useEffect } from "react";
import type { User } from "@supabase/supabase-js";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Lock,
  Phone,
  User as UserIcon,
  GraduationCap,
  MapPin,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  ArrowLeft,
  ShieldCheck,
} from "lucide-react";
import { signInWithGoogle, saveStudentExplorerProfile, StudentExplorerProfile } from "@/lib/supabase";
import { useToast } from "@/hooks/use-toast";

interface StudentAuthGateModalProps {
  isOpen: boolean;
  user: User | null;
  onProfileSaved: (profile: StudentExplorerProfile) => void;
}

export const StudentAuthGateModal: React.FC<StudentAuthGateModalProps> = ({
  isOpen,
  user,
  onProfileSaved,
}) => {
  const { toast } = useToast();
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Mandatory fields
  const [studentName, setStudentName] = useState("");
  const [studentClass, setStudentClass] = useState("");
  const [studentLocation, setStudentLocation] = useState("");
  const [studentPhone, setStudentPhone] = useState("");

  // Pre-fill student name from Google profile when available
  useEffect(() => {
    if (user) {
      const googleName =
        user.user_metadata?.full_name ||
        user.user_metadata?.name ||
        user.email?.split("@")[0] ||
        "";
      if (googleName && !studentName) {
        setStudentName(googleName);
      }
    }
  }, [user]);

  const handleGoogleSignIn = async () => {
    setIsGoogleLoading(true);
    setErrorMessage(null);
    try {
      await signInWithGoogle();
    } catch (err: any) {
      console.error("Google sign in failed:", err);
      setErrorMessage(
        err?.message ||
          "Could not initialize Google Sign-In. Please check your Supabase Google Auth configuration."
      );
      setIsGoogleLoading(false);
    }
  };

  const handleProfileSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    const cleanName = studentName.trim();
    const cleanClass = studentClass.trim();
    const cleanLocation = studentLocation.trim();
    const cleanPhone = studentPhone.trim().replace(/[^0-9+]/g, "");

    // Validate mandatory fields
    if (!cleanName || !cleanClass || !cleanLocation || !cleanPhone) {
      setErrorMessage("All fields are mandatory. Please fill in your name, class, location, and phone number.");
      return;
    }

    if (cleanPhone.replace(/\D/g, "").length < 10) {
      setErrorMessage("Please enter a valid 10-digit mobile number.");
      return;
    }

    setIsSubmitting(true);

    try {
      const googleAvatar = user?.user_metadata?.avatar_url || user?.user_metadata?.picture || null;
      const res = await saveStudentExplorerProfile({
        student_name: cleanName,
        student_class: cleanClass,
        student_location: cleanLocation,
        student_phone: cleanPhone,
        email: user?.email || null,
        auth_user_id: user?.id || null,
        google_avatar_url: googleAvatar,
      });

      toast({
        title: "Profile Completed!",
        description: `Welcome, ${cleanName}! You now have full access to Explore Careers.`,
      });

      if (res.data) {
        onProfileSaved(res.data);
      } else {
        onProfileSaved({
          student_name: cleanName,
          student_class: cleanClass,
          student_location: cleanLocation,
          student_phone: cleanPhone,
          email: user?.email || null,
          auth_user_id: user?.id || null,
          google_avatar_url: googleAvatar,
        });
      }
    } catch (err: any) {
      setErrorMessage(err?.message || "Failed to save profile. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen}>
      <DialogContent
        className="max-w-md bg-white border border-stone-200 text-stone-900 rounded-3xl p-6 sm:p-7 shadow-2xl [&>button]:hidden"
        onPointerDownOutside={(e) => e.preventDefault()}
        onEscapeKeyDown={(e) => e.preventDefault()}
      >
        {!user ? (
          /* ── STEP 1: Google Sign-In Required ── */
          <div className="space-y-5 text-left">
            <DialogHeader className="space-y-2 text-left">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F5F1EC] border border-[#E0D6CA] text-[#7C5C3E] text-xs font-bold uppercase tracking-wider w-fit">
                <Lock className="w-3.5 h-3.5 text-[#C9A97A]" />
                Explore Careers Access
              </div>
              <DialogTitle className="text-xl sm:text-2xl font-extrabold text-stone-900 tracking-tight leading-snug">
                Sign in to Explore Careers
              </DialogTitle>
              <DialogDescription className="text-xs sm:text-sm text-stone-500 font-medium leading-relaxed">
                Sign in with your Google account to unlock free, unlimited access to 31+ in-depth career blueprints, salary guides, and educational roadmaps.
              </DialogDescription>
            </DialogHeader>

            {/* Feature highlights */}
            <div className="space-y-2 py-1">
              {[
                "Complete 4-Circles career evaluation & roadmaps",
                "Intermediate stream choices (MPC, BiPC, CEC, etc.)",
                "Audio explanations & salary growth insights",
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs font-semibold text-stone-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {errorMessage && (
              <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-medium flex items-start gap-2">
                <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                <span>{errorMessage}</span>
              </div>
            )}

            {/* Google Sign-In Button */}
            <div className="pt-2">
              <Button
                type="button"
                onClick={handleGoogleSignIn}
                disabled={isGoogleLoading}
                className="w-full h-12 rounded-2xl font-bold text-sm bg-white hover:bg-stone-50 text-stone-800 border-2 border-stone-200 hover:border-stone-400 shadow-sm cursor-pointer transition-all flex items-center justify-center gap-3 hover:scale-[1.01] active:scale-[0.99]"
              >
                {isGoogleLoading ? (
                  <div className="w-5 h-5 border-2 border-stone-400 border-t-stone-900 rounded-full animate-spin" />
                ) : (
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path
                      fill="#4285F4"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                    />
                  </svg>
                )}
                <span>Continue with Google</span>
              </Button>
            </div>

            <div className="flex flex-col items-center gap-2 pt-1">
              <Link
                to="/"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-stone-500 hover:text-stone-900 transition-colors cursor-pointer py-1"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Return to Home</span>
              </Link>
              <p className="text-[11px] text-center text-stone-400 font-medium">
                Secure authentication via Google. We never share your data.
              </p>
            </div>
          </div>
        ) : (
          /* ── STEP 2: Mandatory Student Onboarding Form ── */
          <div className="space-y-4 text-left">
            <DialogHeader className="space-y-1 text-left">
              <div className="flex items-center gap-2">
                {user.user_metadata?.avatar_url && (
                  <img
                    src={user.user_metadata.avatar_url}
                    alt="Google Profile"
                    className="w-7 h-7 rounded-full border border-stone-200"
                  />
                )}
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-[10px] font-black uppercase tracking-wider">
                  <ShieldCheck className="w-3 h-3 text-emerald-600" />
                  Google Verified
                </div>
              </div>
              <DialogTitle className="text-xl sm:text-2xl font-extrabold text-stone-900 tracking-tight mt-1">
                Welcome! Complete Your Profile
              </DialogTitle>
              <DialogDescription className="text-xs text-stone-500 font-medium">
                Please provide your student details to proceed to Explore Careers. All fields are mandatory.
              </DialogDescription>
            </DialogHeader>

            {errorMessage && (
              <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-medium flex items-start gap-2">
                <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                <span>{errorMessage}</span>
              </div>
            )}

            <form onSubmit={handleProfileSubmit} className="space-y-3 pt-1">
              {/* Student Name */}
              <div className="space-y-1">
                <label className="text-xs font-bold text-stone-700 flex items-center gap-1.5">
                  <UserIcon className="w-3.5 h-3.5 text-[#7C5C3E]" />
                  Student Name *
                </label>
                <Input
                  required
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                  placeholder="Full student name"
                  className="h-10 rounded-xl text-xs bg-stone-50 border-stone-200 focus:bg-white"
                />
              </div>

              {/* Class / Year */}
              <div className="space-y-1">
                <label className="text-xs font-bold text-stone-700 flex items-center gap-1.5">
                  <GraduationCap className="w-3.5 h-3.5 text-[#7C5C3E]" />
                  Class / Year *
                </label>
                <Input
                  required
                  value={studentClass}
                  onChange={(e) => setStudentClass(e.target.value)}
                  placeholder="e.g. 10th, 11th MPC, 12th BiPC, Degree"
                  className="h-10 rounded-xl text-xs bg-stone-50 border-stone-200 focus:bg-white"
                />
              </div>

              {/* Location / City */}
              <div className="space-y-1">
                <label className="text-xs font-bold text-stone-700 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#7C5C3E]" />
                  Location / City *
                </label>
                <Input
                  required
                  value={studentLocation}
                  onChange={(e) => setStudentLocation(e.target.value)}
                  placeholder="e.g. Kakinada, Rajahmundry, Visakhapatnam"
                  className="h-10 rounded-xl text-xs bg-stone-50 border-stone-200 focus:bg-white"
                />
              </div>

              {/* Contact Number */}
              <div className="space-y-1">
                <label className="text-xs font-bold text-stone-700 flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-[#7C5C3E]" />
                  Contact Number (WhatsApp / Mobile) *
                </label>
                <Input
                  required
                  type="tel"
                  value={studentPhone}
                  onChange={(e) => setStudentPhone(e.target.value)}
                  placeholder="10-digit mobile number"
                  className="h-10 rounded-xl text-xs bg-stone-50 border-stone-200 focus:bg-white"
                />
              </div>

              <div className="pt-2">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-11 rounded-xl font-bold text-xs sm:text-sm bg-stone-900 text-white hover:bg-stone-800 shadow-md cursor-pointer transition-all flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <div className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <span>Save &amp; Explore Careers</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </Button>
              </div>
            </form>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};
