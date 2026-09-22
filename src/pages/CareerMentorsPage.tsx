import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import wabiLogo from "@/lib/wabi_resolutions_logo.jpeg";
import raviTeja from "@/lib/ravi_teja.jpg";
import srinivasN from "@/lib/srinivas_n.jpg";

const mentors = [
  {
    name: "KJD Raviteja",
    photo: raviTeja,
    qualification: "Diploma in Psychology Guidance and Counselling",
    role: "Career Mentor",
  },
  {
    name: "N Srinivas",
    photo: srinivasN,
    qualification: "Diploma in Psychology Guidance and Counselling",
    role: "Career Mentor",
  },
];

const CareerMentorsPage = () => {
  return (
    <div
      className="min-h-screen md:h-screen flex flex-col font-sans text-stone-900 md:overflow-hidden"
      style={{ background: "#FAF8F5" }}
    >
      {/* ─── NAVBAR ─────────────────────────────────────────────────────────── */}
      <header
        className="shrink-0 border-b border-stone-200/70"
        style={{ background: "rgba(250,248,245,0.96)", backdropFilter: "blur(16px)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 h-16 flex items-center justify-between">
          {/* Left: Brand — identical to homepage */}
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

          {/* Right: Back button */}
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-stone-200 bg-white hover:bg-stone-50 text-xs font-bold text-stone-700 shadow-sm transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back
          </Link>
        </div>
      </header>

      {/* ─── PAGE HEADER ────────────────────────────────────────────────────── */}
      <div className="shrink-0 text-center pt-4 pb-3 px-4">
        <h1 className="text-xl sm:text-2xl font-black text-stone-900 leading-tight">
          Meet Your Career Mentors
        </h1>
        <p className="text-stone-400 text-xs sm:text-sm mt-1">
          Expert counsellors guiding students towards fulfilling careers
        </p>
      </div>

      {/* ─── MENTOR GRID ─────────────────────────────────────────────────────── */}
      <div className="flex-1 px-5 sm:px-10 pb-5 md:overflow-hidden">
        <div className="max-w-5xl mx-auto h-full grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4">
          {mentors.map((mentor) => (
            <div
              key={mentor.name}
              className="rounded-2xl border border-stone-200 shadow-sm overflow-hidden flex flex-col bg-white"
            >
              {/* Full photo */}
              <div className="h-52 md:h-auto md:flex-1 bg-stone-50 flex items-center justify-center overflow-hidden min-h-0">
                <img
                  src={mentor.photo}
                  alt={mentor.name}
                  className="w-full h-full object-contain object-center"
                />
              </div>

              {/* Black info strip */}
              <div
                className="shrink-0 px-3 py-2.5 flex flex-col gap-1"
                style={{ background: "#1C1917" }}
              >
                <p className="text-[9px] font-semibold uppercase tracking-widest text-stone-400 leading-none">
                  {mentor.role}
                </p>
                <h2 className="text-sm sm:text-base font-black text-white leading-tight">
                  {mentor.name}
                </h2>
                <p className="text-[10px] sm:text-xs font-medium text-stone-300 leading-snug">
                  {mentor.qualification}
                </p>
              </div>
            </div>
          ))}
          {/* Remaining grid cells — intentionally empty */}
        </div>
      </div>
    </div>
  );
};

export default CareerMentorsPage;
