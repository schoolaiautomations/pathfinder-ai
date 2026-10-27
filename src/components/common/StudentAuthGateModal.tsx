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
  Building2,
  School as SchoolIcon,
  X,
} from "lucide-react";
import {
  signInWithGoogle,
  saveStudentExplorerProfile,
  StudentExplorerProfile,
  SchoolRecord,
  verifySchoolId,
  setVerifiedSchoolSession,
} from "@/lib/supabase";
import { useToast } from "@/hooks/use-toast";

interface StudentAuthGateModalProps {
  isOpen: boolean;
  user: User | null;
  verifiedSchool: SchoolRecord | null;
  onSchoolVerified: (school: SchoolRecord | null) => void;
  onProfileSaved: (profile: StudentExplorerProfile) => void;
  onClose?: () => void;
}

export const StudentAuthGateModal: React.FC<StudentAuthGateModalProps> = ({
  isOpen,
  user,
  verifiedSchool,
  onSchoolVerified,
  onProfileSaved,
  onClose,
}) => {
  const { toast } = useToast();
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isVerifyingSchool, setIsVerifyingSchool] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [showCelebration, setShowCelebration] = useState(false);

  // School ID input state
  const [inputSchoolId, setInputSchoolId] = useState("");

  // Mandatory student fields
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

  const handleVerifySchool = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    const cleanId = inputSchoolId.trim();
    if (!cleanId) {
      setErrorMessage("Please enter your School ID.");
      return;
    }

    setIsVerifyingSchool(true);
    try {
      const res = await verifySchoolId(cleanId);
      if (res.success && res.school) {
        setShowCelebration(true);
        toast({
          title: "✅ Access Granted!",
          description: `Welcome to ${res.school.school_name || res.school.school_id} Career Portal!`,
        });
        // Show celebration for 2.5s, then transition to next stage
        setTimeout(() => {
          onSchoolVerified(res.school!);
          setShowCelebration(false);
        }, 2500);
      } else {
        setErrorMessage(
          res.error || `School ID "${cleanId}" was not found. Please verify with your school coordinator.`
        );
      }
    } catch (err: any) {
      setErrorMessage(err?.message || "Failed to verify School ID. Please try again.");
    } finally {
      setIsVerifyingSchool(false);
    }
  };

  const handleResetSchool = () => {
    setVerifiedSchoolSession(null);
    onSchoolVerified(null);
    setInputSchoolId("");
    setErrorMessage(null);
  };

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
        school_id: verifiedSchool?.school_id || null,
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
          school_id: verifiedSchool?.school_id || null,
        });
      }
      if (onClose) onClose();
    } catch (err: any) {
      setErrorMessage(err?.message || "Failed to save profile. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => { if (!open && onClose && user && verifiedSchool) onClose(); }}>
      <DialogContent
        showCloseButton={false}
        className="max-w-md w-[92vw] sm:w-full max-h-[90vh] overflow-y-auto bg-white border border-stone-200 text-stone-900 rounded-3xl p-6 sm:p-7 shadow-2xl"
        onPointerDownOutside={(e) => {
          if (!verifiedSchool || !user) e.preventDefault();
        }}
        onEscapeKeyDown={(e) => {
          if (!verifiedSchool || !user) e.preventDefault();
        }}
      >
        {onClose && (verifiedSchool || user) && (
          <button
            type="button"
            onClick={onClose}
            className="absolute top-5 right-5 p-1 rounded-full text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
        )}

        {/* ── Celebration Animation Overlay (above all stages) ── */}
        {showCelebration && (
          <div className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-white/95 rounded-3xl animate-in fade-in duration-300">
            <div className="relative">
              <div className="absolute inset-0 -m-16">
                {Array.from({ length: 20 }).map((_, i) => (
                  <span
                    key={i}
                    className="absolute w-2 h-2 rounded-full"
                    style={{
                      background: ['#C9A97A', '#7C5C3E', '#34D399', '#3B82F6', '#F59E0B', '#EC4899'][i % 6],
                      top: '50%',
                      left: '50%',
                      animation: `confetti-burst 1.2s ease-out ${i * 0.05}s forwards`,
                      transform: `rotate(${i * 18}deg)`,
                    }}
                  />
                ))}
              </div>
              <div className="w-20 h-20 rounded-full bg-emerald-100 border-2 border-emerald-300 flex items-center justify-center shadow-lg animate-in zoom-in-50 duration-500">
                <CheckCircle2 className="w-10 h-10 text-emerald-600" />
              </div>
            </div>
            <h3 className="text-xl font-extrabold text-stone-900 mt-4 animate-in slide-in-from-bottom-2 duration-500">Access Granted!</h3>
            <p className="text-sm text-stone-500 font-medium mt-1 animate-in slide-in-from-bottom-2 duration-500 delay-100">Welcome to the Career Guidance Portal</p>
            <style>{`
              @keyframes confetti-burst {
                0% { transform: translate(0, 0) scale(1); opacity: 1; }
                100% { transform: translate(var(--tx, 60px), var(--ty, -80px)) scale(0); opacity: 0; }
              }
            `}</style>
            <style>{`
              ${Array.from({ length: 20 }).map((_, i) => {
                const angle = (i * 18) * Math.PI / 180;
                const dist = 50 + Math.random() * 60;
                return `span:nth-child(${i + 1}) { --tx: ${Math.cos(angle) * dist}px; --ty: ${Math.sin(angle) * dist - 30}px; }`;
              }).join('\n')}
            `}</style>
          </div>
        )}

        {/* ── STAGE 0: ENTER SCHOOL ID (BEFORE SIGN IN / TO SET BACKGROUND LOGO) ── */}
        {!verifiedSchool ? (
          <div className="space-y-5 text-left">
            <DialogHeader className="space-y-2 text-left">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F5F1EC] border border-[#E0D6CA] text-[#7C5C3E] text-xs font-bold uppercase tracking-wider w-fit">
                <Lock className="w-3.5 h-3.5 text-[#C9A97A]" />
                Authorized Access Only
              </div>
              <DialogTitle className="text-xl sm:text-2xl font-extrabold text-stone-900 tracking-tight leading-snug">
                Enter Your Access Token
              </DialogTitle>
              <DialogDescription className="text-xs sm:text-sm text-stone-500 font-medium leading-relaxed">
                Enter the access token provided by your school to explore career reports and guidance resources.
              </DialogDescription>
            </DialogHeader>

            {errorMessage && (
              <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-medium flex items-start gap-2">
                <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                <span>{errorMessage}</span>
              </div>
            )}

            <form onSubmit={handleVerifySchool} className="space-y-3 pt-1">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-stone-700 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#7C5C3E]" />
                  School Access Token *
                </label>
                <Input
                  required
                  autoFocus
                  value={inputSchoolId}
                  onChange={(e) => setInputSchoolId(e.target.value)}
                  placeholder="Enter your school token"
                  className="h-11 rounded-xl text-sm font-bold bg-stone-50 border-stone-200 focus:bg-white"
                />
                <p className="text-[11px] text-stone-400 font-medium">
                  Contact your school coordinator if you have not received your access token.
                </p>
              </div>

              <div className="pt-2">
                <Button
                  type="submit"
                  disabled={isVerifyingSchool || !inputSchoolId.trim()}
                  className="w-full h-11 rounded-xl font-bold text-xs sm:text-sm bg-stone-900 text-white hover:bg-stone-800 shadow-md cursor-pointer transition-all flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-[0.99]"
                >
                  {isVerifyingSchool ? (
                    <div className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <span>Verify Access</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </Button>
              </div>
            </form>

            <div className="flex flex-col items-center gap-2 pt-1">
              <Link
                to="/"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-stone-500 hover:text-stone-900 transition-colors cursor-pointer py-1"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Return to Home</span>
              </Link>
            </div>
          </div>
        ) : !user ? (
          /* ── STAGE 1: GOOGLE SIGN-IN REQUIRED ── */
          <div className="space-y-4 text-left">
            {/* Verified School Banner */}
            <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-amber-50/70 border border-amber-200/80">
              <img
                src={verifiedSchool.logo_url}
                alt="School Logo"
                className="h-8 max-w-[70px] object-contain rounded-md shrink-0 bg-white p-1 border border-amber-100 shadow-2xs"
              />
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-1 text-[10px] font-black uppercase tracking-wider text-amber-800">
                  <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                  <span>Verified &amp; Active</span>
                </div>
                <div className="text-xs font-extrabold text-stone-900 truncate">
                  {verifiedSchool.school_name || verifiedSchool.school_id}
                </div>
              </div>
              <button
                type="button"
                onClick={handleResetSchool}
                className="text-[11px] font-bold text-stone-400 hover:text-stone-800 underline shrink-0 cursor-pointer"
                title="Change School ID"
              >
                Change
              </button>
            </div>

            <DialogHeader className="space-y-1.5 text-left">
              <DialogTitle className="text-lg sm:text-xl font-extrabold text-stone-900 tracking-tight leading-snug">
                Sign in to Continue
              </DialogTitle>
              <DialogDescription className="text-xs text-stone-500 font-medium leading-relaxed">
                Sign in with your Google account to access career reports and guidance resources.
              </DialogDescription>
            </DialogHeader>

            {errorMessage && (
              <div className="p-2.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-medium flex items-start gap-2">
                <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                <span>{errorMessage}</span>
              </div>
            )}

            {/* Google Sign-In Button */}
            <div className="pt-1">
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

            <div className="flex flex-col items-center gap-1 pt-1">
              <Link
                to="/"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-stone-500 hover:text-stone-900 transition-colors cursor-pointer py-1"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Return to Home</span>
              </Link>
            </div>
          </div>
        ) : (
          /* ── STAGE 2: MANDATORY STUDENT ONBOARDING FORM ── */
          <div className="space-y-4 text-left">
            {/* Verified School Pill */}
            <div className="flex items-center gap-3 p-2.5 rounded-2xl bg-amber-50/70 border border-amber-200/80">
              <img
                src={verifiedSchool.logo_url}
                alt="School Logo"
                className="h-8 max-w-[70px] object-contain rounded shrink-0 bg-white p-0.5 border border-amber-100"
              />
              <div className="min-w-0 flex-1">
                <span className="text-[9px] font-black uppercase tracking-wider text-amber-800 block">
                  Enrolled School &amp; Background Active
                </span>
                <span className="text-xs font-bold text-stone-900 truncate block">
                  {verifiedSchool.school_name || verifiedSchool.school_id}
                </span>
              </div>
              <button
                type="button"
                onClick={handleResetSchool}
                className="text-[11px] font-bold text-stone-400 hover:text-stone-800 underline shrink-0 cursor-pointer"
                title="Change School ID"
              >
                Change
              </button>
            </div>

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
