import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Calendar,
  Award,
  GraduationCap,
  Briefcase,
  Sparkles,
  BookOpen,
  ChevronRight,
  UserCheck,
} from "lucide-react";
import wabiLogo from "@/lib/wabi_resolutions_logo.jpeg";
import raviTeja from "@/lib/ravi_teja.jpg";
import srinivasN from "@/lib/srinivas_n.jpg";
import sivaSai from "@/lib/p_sivasai.jpeg";
import { BookOnlineCounsellingModal } from "@/components/common/BookOnlineCounsellingModal";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface Mentor {
  name: string;
  photo: string;
  qualification: string;
  role: string;
  bio?: string;
  specializations?: string[];
}

const mentors: Mentor[] = [
  {
    name: "Siva Sai P",
    photo: sivaSai,
    qualification: "B.Tech in Mechanical Engineering • M.Sc. in Psychology",
    role: "District Career & Mental Health Counsellor",
    bio: "Currently working as a District Career and Mental Health Counsellor, I am passionate about career guidance, student development, and helping individuals make informed career decisions. My interdisciplinary background combines analytical thinking with an understanding of human behaviour, motivation, and decision-making. I aim to help individuals identify their strengths, explore career opportunities, and develop meaningful career plans aligned with their interests and aspirations. I aspire to contribute to an innovative startup by making career guidance accessible, practical, and impactful.",
    specializations: [
      "Analytical & Psychological Guidance",
      "Student Strengths & Aptitude Mapping",
      "Decision-Making & Motivation",
      "Mental Health & Career Planning",
    ],
  },
  {
    name: "KJD Raviteja",
    photo: raviTeja,
    qualification: "Diploma in Psychology Guidance and Counselling",
    role: "Career Mentor",
    bio: "Dedicated career mentor specializing in psychological guidance, student counselling, and helping learners navigate academic milestones with confidence.",
    specializations: [
      "Psychology Guidance",
      "Academic Goal Setting",
      "Student Counseling",
    ],
  },
  {
    name: "N Srinivas",
    photo: srinivasN,
    qualification: "Diploma in Psychology Guidance and Counselling",
    role: "Career Mentor",
    bio: "Experienced guidance counsellor focused on student self-discovery, emotional well-being, and structured career decision-making.",
    specializations: [
      "Student Mentorship",
      "Emotional Well-Being",
      "Career Pathway Planning",
    ],
  },
];

const CareerMentorsPage = () => {
  const [selectedMentor, setSelectedMentor] = useState<Mentor | null>(null);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingCareer, setBookingCareer] = useState<string>("Career Counselling");

  const handleOpenBooking = (mentor?: Mentor) => {
    if (mentor) {
      setBookingCareer(`Session with ${mentor.name} (${mentor.role})`);
    } else {
      setBookingCareer("General Career Counselling");
    }
    setIsBookingOpen(true);
  };

  return (
    <div
      className="min-h-screen flex flex-col font-sans text-stone-900"
      style={{ background: "#FAF8F5" }}
    >
      {/* ─── NAVBAR ─────────────────────────────────────────────────────────── */}
      <header
        className="shrink-0 border-b border-stone-200/70 sticky top-0 z-40"
        style={{ background: "rgba(250,248,245,0.96)", backdropFilter: "blur(16px)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 h-16 flex items-center justify-between">
          {/* Left: Brand */}
          <Link to="/" className="flex items-center gap-2.5 sm:gap-3 group min-w-0">
            <img
              src={wabiLogo}
              alt="Wabi"
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover shadow-sm shrink-0"
            />
            <div className="min-w-0">
              <span className="font-normal uppercase tracking-wider text-xs sm:text-base text-stone-900 block leading-none truncate">
                Wabi Career Guidance
              </span>
              <span className="text-[9px] sm:text-[10px] font-semibold text-stone-400 tracking-widest uppercase block mt-0.5 truncate">
                Career Counselling
              </span>
            </div>
          </Link>

          {/* Right: Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              type="button"
              onClick={() => handleOpenBooking()}
              className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-1.5 rounded-full bg-stone-900 hover:bg-stone-800 text-xs font-bold text-white shadow-xs transition-colors cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5 text-[#C9A97A]" />
              <span>Book Session</span>
            </button>
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-stone-200 bg-white hover:bg-stone-50 text-xs font-bold text-stone-700 shadow-sm transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back</span>
            </Link>
          </div>
        </div>
      </header>

      {/* ─── PAGE HEADER ────────────────────────────────────────────────────── */}
      <div className="shrink-0 text-center pt-6 pb-4 px-4 max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-200/70 text-stone-700 text-[11px] font-bold uppercase tracking-wider mb-2">
          <UserCheck className="w-3.5 h-3.5 text-[#7C5C3E]" />
          <span>Certified Guidance Professionals</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-black text-stone-900 leading-tight">
          Meet Your Career Mentors
        </h1>
        <p className="text-stone-500 text-xs sm:text-sm mt-1.5 leading-relaxed">
          Expert counsellors combining psychology, analytical reasoning, and career strategy to guide students towards fulfilling futures.
        </p>
      </div>

      {/* ─── MENTOR GRID ─────────────────────────────────────────────────────── */}
      <main className="flex-1 px-4 sm:px-8 pb-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {mentors.map((mentor) => (
            <div
              key={mentor.name}
              className="rounded-2xl border border-stone-200/90 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col bg-white group"
            >
              {/* Photo Area */}
              <div className="h-64 sm:h-72 bg-gradient-to-b from-stone-100 to-stone-200/60 flex items-center justify-center overflow-hidden relative">
                <img
                  src={mentor.photo}
                  alt={mentor.name}
                  className="w-full h-full object-contain object-center transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-full bg-black/75 backdrop-blur-md text-[10px] font-extrabold text-[#FAF8F5] tracking-wider uppercase shadow-xs">
                    {mentor.role}
                  </span>
                </div>
              </div>

              {/* Info Area */}
              <div
                className="flex-1 p-4 sm:p-5 flex flex-col justify-between"
                style={{ background: "#1C1917" }}
              >
                <div>
                  <h2 className="text-lg sm:text-xl font-black text-white leading-tight">
                    {mentor.name}
                  </h2>
                  <p className="text-xs font-semibold text-[#C9A97A] mt-1 leading-snug">
                    {mentor.qualification}
                  </p>

                  {mentor.bio && (
                    <p className="text-[12px] text-stone-300 font-normal leading-relaxed mt-2.5 line-clamp-3">
                      {mentor.bio}
                    </p>
                  )}

                  {mentor.specializations && (
                    <div className="flex flex-wrap gap-1 mt-3">
                      {mentor.specializations.slice(0, 2).map((spec, i) => (
                        <span
                          key={i}
                          className="text-[10px] px-2 py-0.5 rounded-md bg-stone-800 text-stone-300 border border-stone-700/60 font-medium"
                        >
                          {spec}
                        </span>
                      ))}
                      {mentor.specializations.length > 2 && (
                        <span className="text-[10px] px-1.5 py-0.5 rounded-md bg-stone-800 text-stone-400 font-medium">
                          +{mentor.specializations.length - 2} more
                        </span>
                      )}
                    </div>
                  )}
                </div>

                {/* Actions */}
                <div className="pt-4 mt-4 border-t border-stone-800 flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setSelectedMentor(mentor)}
                    className="flex-1 inline-flex items-center justify-center gap-1 px-3 py-2 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-bold transition-colors cursor-pointer border border-stone-700/80"
                  >
                    <span>Read Bio</span>
                    <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
                  </button>
                  <button
                    type="button"
                    onClick={() => handleOpenBooking(mentor)}
                    className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-[#C9A97A] hover:bg-[#b89564] text-stone-900 text-xs font-extrabold transition-all cursor-pointer shadow-xs"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Book 1-on-1</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* ─── FULL MENTOR PROFILE DIALOG ─────────────────────────────────────── */}
      <Dialog open={Boolean(selectedMentor)} onOpenChange={(open) => !open && setSelectedMentor(null)}>
        <DialogContent className="max-w-lg sm:max-w-xl p-0 overflow-hidden rounded-2xl bg-white border border-stone-200 shadow-2xl">
          {selectedMentor && (
            <div>
              {/* Header Banner */}
              <div className="bg-stone-900 p-5 sm:p-6 text-white flex items-start gap-4">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-stone-800 overflow-hidden shrink-0 border-2 border-[#C9A97A]/40 shadow-md">
                  <img
                    src={selectedMentor.photo}
                    alt={selectedMentor.name}
                    className="w-full h-full object-contain bg-stone-900"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-[10px] font-black uppercase tracking-wider text-[#C9A97A] block">
                    {selectedMentor.role}
                  </span>
                  <DialogTitle className="text-xl sm:text-2xl font-black text-white mt-0.5">
                    {selectedMentor.name}
                  </DialogTitle>
                  <p className="text-xs sm:text-sm text-stone-300 font-medium mt-1 leading-snug">
                    {selectedMentor.qualification}
                  </p>
                </div>
              </div>

              {/* Body */}
              <div className="p-5 sm:p-6 space-y-4 max-h-[60vh] overflow-y-auto">
                <div>
                  <h4 className="text-xs font-extrabold uppercase tracking-wider text-stone-400 mb-1.5">
                    About the Mentor
                  </h4>
                  <p className="text-sm text-stone-700 leading-relaxed font-normal whitespace-pre-line">
                    {selectedMentor.bio}
                  </p>
                </div>

                {selectedMentor.specializations && (
                  <div>
                    <h4 className="text-xs font-extrabold uppercase tracking-wider text-stone-400 mb-2">
                      Key Areas of Guidance
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedMentor.specializations.map((spec, i) => (
                        <span
                          key={i}
                          className="text-xs px-2.5 py-1 rounded-lg bg-stone-100 border border-stone-200 text-stone-800 font-semibold"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Footer CTA */}
              <div className="p-4 bg-stone-50 border-t border-stone-200 flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedMentor(null)}
                  className="px-4 py-2 rounded-xl text-xs font-bold text-stone-600 hover:text-stone-900 hover:bg-stone-200/60 transition-colors cursor-pointer"
                >
                  Close
                </button>
                <button
                  type="button"
                  onClick={() => {
                    const m = selectedMentor;
                    setSelectedMentor(null);
                    handleOpenBooking(m);
                  }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-stone-900 hover:bg-stone-800 text-white text-xs font-extrabold transition-all cursor-pointer shadow-xs"
                >
                  <Calendar className="w-3.5 h-3.5 text-[#C9A97A]" />
                  <span>Book 1-on-1 Session with {selectedMentor.name}</span>
                </button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* ─── BOOK ONLINE COUNSELLING MODAL ──────────────────────────────────── */}
      <BookOnlineCounsellingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        defaultCareer={bookingCareer}
      />
    </div>
  );
};

export default CareerMentorsPage;
