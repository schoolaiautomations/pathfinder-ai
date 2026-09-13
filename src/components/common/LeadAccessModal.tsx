import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { User, School, Phone, Lock, ArrowRight, ArrowLeft, Sparkles, AlertCircle } from "lucide-react";
import { saveVisitorLeadToSupabase } from "@/lib/supabase";
import wabiLogo from "@/lib/wabi_resolutions_logo.jpeg";

interface LeadAccessModalProps {
  sourcePage: "Careers Tree" | "FAQ";
  onUnlocked?: () => void;
}

export const LeadAccessModal: React.FC<LeadAccessModalProps> = ({ sourcePage, onUnlocked }) => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const [schoolName, setSchoolName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    // 1. Check if counsellor is logged in (bypass)
    const counsellorLoggedIn = sessionStorage.getItem("counsellor_logged_in");
    if (counsellorLoggedIn) {
      setIsOpen(false);
      return;
    }

    // 2. Check if visitor has already unlocked access
    const isUnlocked = localStorage.getItem("wabi_lead_unlocked") === "true";
    if (!isUnlocked) {
      setIsOpen(true);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const trimmedName = name.trim();
    const trimmedSchool = schoolName.trim();
    const cleanPhone = phone.replace(/\D/g, "");

    if (!trimmedName || trimmedName.length < 2) {
      setError("Please enter your full name.");
      return;
    }
    if (!trimmedSchool || trimmedSchool.length < 2) {
      setError("Please enter your school or college name.");
      return;
    }
    if (!cleanPhone || cleanPhone.length < 10) {
      setError("Please enter a valid 10-digit mobile number.");
      return;
    }

    setSubmitting(true);

    try {
      await saveVisitorLeadToSupabase({
        name: trimmedName,
        school_name: trimmedSchool,
        phone: cleanPhone.length > 10 ? cleanPhone.slice(-10) : cleanPhone,
        source_page: sourcePage,
      });

      // Save unlocked state and visitor details
      localStorage.setItem("wabi_lead_unlocked", "true");
      localStorage.setItem(
        "wabi_visitor_info",
        JSON.stringify({
          name: trimmedName,
          school_name: trimmedSchool,
          phone: cleanPhone,
          unlockedAt: new Date().toISOString(),
          sourcePage,
        })
      );

      setIsOpen(false);
      if (onUnlocked) onUnlocked();
    } catch (err) {
      console.warn("Error submitting lead:", err);
      // Fallback: still unlock so user is never permanently blocked
      localStorage.setItem("wabi_lead_unlocked", "true");
      setIsOpen(false);
      if (onUnlocked) onUnlocked();
    } finally {
      setSubmitting(false);
    }
  };

  const handleBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate("/");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-stone-950/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div
        className="w-full max-w-md rounded-3xl p-6 sm:p-8 shadow-2xl border relative overflow-hidden animate-in zoom-in-95 duration-200"
        style={{ background: "#FAF8F5", borderColor: "#E0D6CA" }}
      >
        {/* Top Controls: Back Button & Badge */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <button
            type="button"
            onClick={handleBack}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-stone-200 bg-white hover:bg-stone-100 text-xs font-bold text-stone-700 transition-colors shadow-2xs cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back</span>
          </button>

          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-stone-900 text-[#FAF8F5] shadow-2xs">
            <Sparkles className="w-3 h-3 text-[#C9A97A]" />
            <span>Free Resource</span>
          </div>
        </div>

        {/* Top Header */}
        <div className="text-center space-y-2 mb-6">
          <div className="flex items-center justify-center gap-2.5 pt-1">
            <img
              src={wabiLogo}
              alt="Wabi"
              className="w-8 h-8 rounded-full object-cover shadow-2xs border border-stone-200"
            />
            <h2 className="text-xl sm:text-2xl font-black text-stone-900 tracking-tight">
              Access {sourcePage}
            </h2>
          </div>

          <p className="text-xs text-stone-600 font-medium leading-relaxed max-w-xs mx-auto">
            Please enter your details to unlock and explore the complete interactive {sourcePage} guidance platform.
          </p>
        </div>

        {/* Lead Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Field */}
          <div className="space-y-1">
            <label className="text-xs font-bold text-stone-800 flex items-center gap-1.5">
              <User className="w-3.5 h-3.5 text-[#7C5C3E]" />
              <span>Full Name</span>
              <span className="text-rose-600 font-bold">*</span>
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Ramesh Kumar"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full h-11 px-3.5 rounded-xl border border-stone-300 bg-white font-medium text-sm text-stone-900 placeholder:text-stone-400 focus:ring-2 focus:ring-stone-900 focus:border-stone-900 outline-none shadow-2xs transition-all"
            />
          </div>

          {/* School Name Field */}
          <div className="space-y-1">
            <label className="text-xs font-bold text-stone-800 flex items-center gap-1.5">
              <School className="w-3.5 h-3.5 text-[#7C5C3E]" />
              <span>School / College Name</span>
              <span className="text-rose-600 font-bold">*</span>
            </label>
            <input
              type="text"
              required
              placeholder="e.g. ZPHS Lingamparthi"
              value={schoolName}
              onChange={(e) => setSchoolName(e.target.value)}
              className="w-full h-11 px-3.5 rounded-xl border border-stone-300 bg-white font-medium text-sm text-stone-900 placeholder:text-stone-400 focus:ring-2 focus:ring-stone-900 focus:border-stone-900 outline-none shadow-2xs transition-all"
            />
          </div>

          {/* Contact Field */}
          <div className="space-y-1">
            <label className="text-xs font-bold text-stone-800 flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-[#7C5C3E]" />
              <span>Contact Mobile Number</span>
              <span className="text-rose-600 font-bold">*</span>
            </label>
            <div className="relative">
              <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-xs font-bold text-stone-500 select-none">
                +91
              </span>
              <input
                type="tel"
                required
                maxLength={10}
                placeholder="10-digit mobile number"
                value={phone}
                onChange={(e) => setPhone(e.target.value.replace(/\D/g, "").slice(0, 10))}
                className="w-full h-11 pl-12 pr-3.5 rounded-xl border border-stone-300 bg-white font-medium text-sm text-stone-900 placeholder:text-stone-400 focus:ring-2 focus:ring-stone-900 focus:border-stone-900 outline-none shadow-2xs transition-all"
              />
            </div>
          </div>

          {error && (
            <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 flex items-center gap-2 text-xs font-bold text-rose-700">
              <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
              <span>{error}</span>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={submitting}
            className="w-full h-12 rounded-xl font-bold text-sm bg-stone-900 text-[#FAF8F5] hover:bg-stone-800 active:scale-[0.99] transition-all flex items-center justify-center gap-2 shadow-md cursor-pointer disabled:opacity-60"
          >
            {submitting ? (
              <span>Unlocking...</span>
            ) : (
              <>
                <span>Continue to {sourcePage}</span>
                <ArrowRight className="w-4 h-4 text-[#C9A97A]" />
              </>
            )}
          </button>

          {/* Secondary Back Button */}
          <button
            type="button"
            onClick={handleBack}
            className="w-full h-10 rounded-xl font-bold text-xs text-stone-600 hover:text-stone-900 hover:bg-stone-200/50 transition-colors cursor-pointer flex items-center justify-center gap-1.5"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Cancel &amp; Go Back</span>
          </button>
        </form>

        {/* Security / Privacy Trust Footer */}
        <div className="mt-5 pt-4 border-t border-stone-200/80 flex items-center justify-center gap-2 text-[11px] text-stone-500 font-medium">
          <Lock className="w-3.5 h-3.5 text-stone-400 shrink-0" />
          <span>Your information is kept secure and confidential.</span>
        </div>
      </div>
    </div>
  );
};
