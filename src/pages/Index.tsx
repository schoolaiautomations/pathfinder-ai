import { useState, useRef, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  ArrowRight,
  Map,
  Sparkles,
  BookOpen,
  Compass,
  Heart,
  Users,
  Phone,
  ChevronRight,
  ChevronLeft,
  Menu,
  X,
  Lock,
  GitFork,
  Calendar,
  ClipboardCheck,
  Search,
  MessageSquare,
  FileText,
  TrendingUp,
  CheckCircle2,
  ArrowDown,
  HelpCircle,
} from "lucide-react";
import wabiLogo from "@/lib/wabi_resolutions_logo.jpeg";
import { BookOnlineCounsellingModal } from "@/components/common/BookOnlineCounsellingModal";
import { CaseStudyModal } from "@/components/common/CaseStudyModal";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import archerAnimation from "@/lib/Archer.lottie";
import questionAnimation from "@/lib/question.lottie";
import raviTeja from "@/lib/ravi_teja.jpg";
import srinivasN from "@/lib/srinivas_n.jpg";
import sivaSai from "@/lib/p_sivasai.jpeg";
import subhashReddy from "@/lib/v_subash_reddy.jpeg";
import sravyaVempati from "@/lib/sri_sravya_vempati.jpeg";
import ravikanthVarma from "@/lib/ravikanth_varma.jpeg";

const counsellors = [
  {
    name: "Sri. K. Ravikanth Varma",
    photo: ravikanthVarma,
    qualification: "M.Sc. Psychology • MBA • LL.B.",
    role: "Career & Mental Health Counsellor",
    specializations: ["Psychology & Legal Career Guidance", "Emotional Well-Being"],
  },
  {
    name: "Sri Sravya Vempati",
    photo: sravyaVempati,
    qualification: "Master's in Psychology • Stress Management",
    role: "Counseling Psychologist",
    specializations: ["Mental Well-Being & Counseling", "Stress Management"],
  },
  {
    name: "Siva Sai P",
    photo: sivaSai,
    qualification: "B.Tech Mechanical • M.Sc. Psychology",
    role: "District Career Counsellor",
    specializations: ["Aptitude Mapping", "Career Planning"],
  },
  {
    name: "Dr. V. Subhash Reddy",
    photo: subhashReddy,
    qualification: "B.H.M.S. • M.Sc. Psychology",
    role: "District Career Counsellor",
    specializations: ["Mental Health Awareness", "Student Development"],
  },
  {
    name: "KJD Raviteja",
    photo: raviTeja,
    qualification: "M.Sc. Psychology • Diploma in Counselling",
    role: "Career Mentor",
    specializations: ["Psychology Guidance", "Academic Goal Setting"],
  },
  {
    name: "N Srinivas",
    photo: srinivasN,
    qualification: "M.Sc. Psychology • Diploma in Counselling",
    role: "Career Mentor",
    specializations: ["Student Mentorship", "Career Pathway Planning"],
  },
];

const studentTypes = [
  { num: "01", label: "Confused in Choosing Career" },
  { num: "02", label: "Student with Multiple Interests" },
  { num: "03", label: "Complete Guidance for a Chosen Career" },
  { num: "06", label: "Academically Struggling Student" },
  { num: "07", label: "Academically Strong but Confused" },
  { num: "08", label: "Financially Constrained Student" },
  { num: "12", label: "Early Career Explorer" },
  { num: "18", label: "Parent-Only Enquiry" },
];

const sessionRoadmapSteps = [
  {
    step: "01",
    title: "Registration & Booking",
    description: "Fill basic details, select your preferred slot, and receive instant confirmation.",
    pinColor: "#8C6843",
    x: 200,
    y: 50,
    textSide: "right" as const,
  },
  {
    step: "02",
    title: "Profiling & Assessment",
    description: "Complete academic, interest, and aptitude questionnaires before the session.",
    pinColor: "#7C5C3E",
    x: 200,
    y: 145,
    textSide: "left" as const,
  },
  {
    step: "03",
    title: "Pre-Session Review",
    description: "Counsellor analyzes profile data and test insights to prepare discussion goals.",
    pinColor: "#684C32",
    x: 430,
    y: 145,
    textSide: "right" as const,
  },
  {
    step: "04",
    title: "1-on-1 Counselling",
    description: "Live empathetic session exploring student aspirations, strengths, and confusion.",
    pinColor: "#553C26",
    x: 430,
    y: 240,
    textSide: "left" as const,
  },
  {
    step: "05",
    title: "Evaluation & Decision",
    description: "Counsellor evaluates readiness to determine the best strategic next step:",
    isBranching: true,
    branchA: "Clarity → Personalized report",
    branchB: "Explore → Follow-up session",
    pinColor: "#422E1D",
    x: 660,
    y: 240,
    textSide: "right" as const,
  },
  {
    step: "06",
    title: "Guidance Report",
    description: "AI-assisted, counsellor-verified comprehensive career guidance report.",
    pinColor: "#342519",
    x: 660,
    y: 335,
    textSide: "left" as const,
  },
  {
    step: "07",
    title: "Action Plan",
    description: "Receive vetted career pathways, colleges, exams, and a 3–6 month plan.",
    pinColor: "#261D15",
    x: 890,
    y: 335,
    textSide: "right" as const,
  },
  {
    step: "08",
    title: "Ongoing Mentorship",
    description: "Track progress, review action milestones, and book follow-up check-ins.",
    pinColor: "#1C1917",
    x: 890,
    y: 430,
    textSide: "left" as const,
  },
];

const Index = () => {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isCaseStudyOpen, setIsCaseStudyOpen] = useState(false);
  const [counsellorIndex, setCounsellorIndex] = useState(counsellors.length);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [activeRoadmapStep, setActiveRoadmapStep] = useState<number | null>(null);
  const roadScrollRef = useRef<HTMLDivElement>(null);

  const scrollRoad = (direction: "left" | "right") => {
    if (roadScrollRef.current) {
      const amount = direction === "left" ? -350 : 350;
      roadScrollRef.current.scrollBy({ left: amount, behavior: "smooth" });
    }
  };

  // 3 copies to enable infinite seamless smooth sliding
  const extendedCounsellors = [...counsellors, ...counsellors, ...counsellors];

  const prevCounsellor = () => {
    setIsTransitioning(true);
    setCounsellorIndex((prev) => prev - 1);
  };

  const nextCounsellor = () => {
    setIsTransitioning(true);
    setCounsellorIndex((prev) => prev + 1);
  };

  const handleTransitionEnd = () => {
    if (counsellorIndex >= counsellors.length * 2) {
      setIsTransitioning(false);
      setCounsellorIndex((prev) => prev - counsellors.length);
      setTimeout(() => setIsTransitioning(true), 20);
    } else if (counsellorIndex < counsellors.length) {
      setIsTransitioning(false);
      setCounsellorIndex((prev) => prev + counsellors.length);
      setTimeout(() => setIsTransitioning(true), 20);
    }
  };

  const activeDot = ((counsellorIndex % counsellors.length) + counsellors.length) % counsellors.length;

  return (
    <main className="min-h-screen font-sans text-stone-900" style={{ background: "#FAF8F5" }}>

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
              <span className="font-normal uppercase tracking-wider text-xs sm:text-base text-stone-900 block leading-none truncate">
                Wabi Career Guidance
              </span>
              <span className="text-[9px] sm:text-[10px] font-semibold text-stone-400 tracking-widest uppercase block mt-0.5 truncate">
                Career Counselling
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden sm:flex items-center gap-1 sm:gap-2">
            <Link
              to="/faq"
              className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-stone-600 hover:text-stone-900 px-3 py-2 rounded-xl hover:bg-stone-100 transition-all"
            >
              FAQ
            </Link>
            <Link
              to="/counsellor"
              className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-stone-600 hover:text-stone-900 px-3 py-2 rounded-xl hover:bg-stone-100 transition-all"
            >
              Counsellor Login
            </Link>
            <Link
              to="/career-reports"
              className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-stone-600 hover:text-stone-900 px-3 py-2 rounded-xl hover:bg-stone-100 transition-all"
            >
              Explore Careers
            </Link>
            <Link
              to="/career-mentors"
              className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-stone-600 hover:text-stone-900 px-3 py-2 rounded-xl hover:bg-stone-100 transition-all"
            >
              Career Mentors
            </Link>
            <button
              type="button"
              onClick={() => setIsBookingModalOpen(true)}
              className="flex items-center gap-1.5 px-4 sm:px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all shadow-sm hover:shadow-md cursor-pointer hover:-translate-y-0.5 active:translate-y-0 text-white"
              style={{ background: "#1C1917", color: "#FAF8F5" }}
            >
              <Calendar className="w-3.5 h-3.5 text-[#C9A97A]" />
              Book Online Counselling
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="sm:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl border border-stone-200 bg-white text-stone-700 hover:text-stone-950 shadow-2xs cursor-pointer transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Panel */}
        {mobileMenuOpen && (
          <div className="sm:hidden border-t border-stone-200/80 px-4 py-3 space-y-2 bg-[#FAF8F5]/98 backdrop-blur-lg animate-in slide-in-from-top-2 duration-200">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                setIsBookingModalOpen(true);
              }}
              className="w-full flex items-center justify-between p-3 rounded-xl font-bold text-xs shadow-sm cursor-pointer"
              style={{ background: "#1C1917", color: "#FAF8F5" }}
            >
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-[#C9A97A]" />
                Book Online Counselling
              </span>
              <ChevronRight className="w-4 h-4 opacity-50" />
            </button>
            <Link
              to="/career-reports"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between p-3 rounded-xl font-bold text-xs bg-white border border-stone-200 text-stone-800 shadow-2xs hover:bg-stone-50 transition-colors"
            >
              <span className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-stone-500" />
                Explore Careers
              </span>
              <ChevronRight className="w-4 h-4 opacity-50" />
            </Link>
            <Link
              to="/career-mentors"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between p-3 rounded-xl font-bold text-xs bg-white border border-stone-200 text-stone-800 shadow-2xs hover:bg-stone-50 transition-colors"
            >
              <span className="flex items-center gap-2">
                <Users className="w-4 h-4 text-stone-500" />
                Career Mentors
              </span>
              <ChevronRight className="w-4 h-4 opacity-50" />
            </Link>
            <Link
              to="/faq"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between p-3 rounded-xl font-bold text-xs bg-white border border-stone-200 text-stone-800 shadow-2xs hover:bg-stone-50 transition-colors"
            >
              <span className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-stone-500" />
                FAQ
              </span>
              <ChevronRight className="w-4 h-4 opacity-50" />
            </Link>
            <Link
              to="/counsellor"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between p-3 rounded-xl font-bold text-xs bg-white border border-stone-200 text-stone-800 shadow-2xs hover:bg-stone-50 transition-colors"
            >
              <span className="flex items-center gap-2">
                <Lock className="w-4 h-4 text-stone-500" />
                Counsellor Login
              </span>
              <ChevronRight className="w-4 h-4 opacity-50" />
            </Link>
          </div>
        )}
      </header>

      {/* ─── HERO ──────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden">
        {/* Warm ambient gradient */}
        <div
          className="absolute inset-0 -z-10"
          style={{
            background: "radial-gradient(ellipse 80% 60% at 50% -10%, #E8DFD0 0%, transparent 70%), #FAF8F5",
          }}
        />


        <div className="max-w-7xl mx-auto px-5 sm:px-8 pt-10 sm:pt-16 pb-14 sm:pb-20">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Left Column: Copy & CTAs */}
            <div className="lg:col-span-7 text-left space-y-5">
              {/* Eyebrow label */}
              <div>
                <span
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase"
                  style={{ background: "#F0EBE1", color: "#78645A", border: "1px solid #DDD3C5" }}
                >
                  <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "#B5956A" }} />
                  Personalised Career Counselling for Indian Students
                </span>
              </div>

              {/* Headline */}
              <h1
                className="font-extrabold leading-[1.12] tracking-tight"
                style={{ fontSize: "clamp(2rem, 5vw, 3.6rem)", color: "#1C1917" }}
              >
                Every Career Decision Needs the Right Guidance!
              </h1>

              {/* National Studies Reveal - Animated Circular Stats */}
              <div className="pt-2 space-y-4">
                <p className="text-xs font-bold uppercase tracking-widest" style={{ color: "#9B8B7E" }}>
                  What national studies reveal
                </p>
                <div className="grid grid-cols-3 gap-3 sm:gap-5">
                  {[
                    {
                      stat: "1 in 10",
                      text: "students actually receive career counselling before choosing streams or degrees.",
                      pct: 10,
                    },
                    {
                      stat: "11%",
                      text: "feel clear and confident about their career direction at Class 10 or 12.",
                      pct: 11,
                    },
                    {
                      stat: "13.2%",
                      text: "received guidance matched to their genuine interests.",
                      pct: 13.2,
                    },
                  ].map(({ stat, text, pct }) => {
                    const r = 40;
                    const c = 2 * Math.PI * r;
                    const offset = c - (pct / 100) * c;
                    return (
                      <div key={stat} className="flex flex-col items-center text-center space-y-2">
                        {/* Animated Circle + Number */}
                        <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28">
                          <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                            {/* Track */}
                            <circle cx="50" cy="50" r={r} fill="none" stroke="#E0D6CA" strokeWidth="6" />
                            {/* Animated arc */}
                            <circle
                              cx="50" cy="50" r={r} fill="none"
                              stroke="#7C5C3E"
                              strokeWidth="6"
                              strokeLinecap="round"
                              strokeDasharray={c}
                              strokeDashoffset={offset}
                              className="transition-all duration-1000 ease-out"
                              style={{ animation: "circleIn 1.2s ease-out forwards" }}
                            />
                          </svg>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <span
                              className="font-extrabold leading-none"
                              style={{ fontSize: "clamp(0.95rem, 2.2vw, 1.35rem)", color: "#7C5C3E" }}
                            >
                              {stat}
                            </span>
                          </div>
                        </div>
                        <p className="text-[11px] sm:text-xs leading-snug font-medium" style={{ color: "#6B5E53" }}>
                          {text}
                        </p>
                      </div>
                    );
                  })}
                </div>
                <p className="text-[11px] italic pt-1" style={{ color: "#A89A8E" }}>
                  Source: Peer-reviewed research (IJNRD, 2023) &amp; India Today national investigation.
                </p>
              </div>
            </div>

            {/* Right Column: Hero Question Animation & Explore Careers Button */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center">
              <div className="relative max-w-sm sm:max-w-md w-full flex items-center justify-center aspect-[4/3]">
                <div className="w-full h-full flex items-center justify-center">
                  <DotLottieReact
                    src={questionAnimation || "/question.lottie"}
                    loop
                    autoplay
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              {/* Explore Careers Button under illustration */}
              <button
                type="button"
                onClick={() => navigate("/career-reports")}
                className="mt-2 sm:mt-3 flex items-center justify-center gap-2 px-8 py-3.5 rounded-2xl font-bold text-sm sm:text-base cursor-pointer transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
                style={{ background: "#1C1917", color: "#FAF8F5" }}
              >
                <BookOpen className="w-4 h-4" />
                Explore Careers
                <ArrowRight className="w-4 h-4 ml-1" />
              </button>
            </div>

          </div>
        </div>

        {/* ─── STUDENT TYPES RIGHT-TO-LEFT MOVABLE SLIDER ────────── */}
        <div className="pt-2 pb-12 sm:pb-16 max-w-7xl mx-auto px-5 sm:px-8">
          <div className="mb-5 flex items-center justify-between">
            <div className="space-y-1">
              <p className="text-xs font-bold uppercase tracking-widest" style={{ color: "#B5956A" }}>
                Who We Counsel
              </p>
              <h2 className="text-base sm:text-xl font-extrabold text-stone-900">
                Tailored Guidance for Every Student's Starting Point
              </h2>
            </div>
            <button
              type="button"
              onClick={() => setIsBookingModalOpen(true)}
              className="inline-flex items-center gap-1.5 px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl font-bold text-xs sm:text-sm cursor-pointer transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 shrink-0"
              style={{ background: "#1C1917", color: "#FAF8F5" }}
            >
              <Calendar className="w-3.5 h-3.5 text-[#C9A97A]" />
              <span>Book a 1-1 Session</span>
            </button>
          </div>

          {/* Marquee Track with edge fade masks - aligned with page width */}
          <div className="relative overflow-hidden group">
            <div
              className="pointer-events-none absolute inset-y-0 left-0 w-8 sm:w-14 z-10"
              style={{ background: "linear-gradient(to right, #FAF8F5, transparent)" }}
            />
            <div
              className="pointer-events-none absolute inset-y-0 right-0 w-8 sm:w-14 z-10"
              style={{ background: "linear-gradient(to left, #FAF8F5, transparent)" }}
            />

            <div className="marquee-slider-track py-2">
              {[...studentTypes, ...studentTypes, ...studentTypes].map((item, idx) => (
                <div
                  key={`${item.num}-${idx}`}
                  className="w-56 sm:w-64 shrink-0 rounded-2xl px-5 py-5 sm:py-6 text-center flex items-center justify-center transition-all duration-300 hover:shadow-md hover:-translate-y-1 bg-white cursor-pointer select-none min-h-[5rem]"
                  style={{ border: "1px solid #E0D6CA" }}
                >
                  <span className="font-bold text-xs sm:text-sm leading-snug tracking-tight" style={{ color: "#543926" }}>
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CSS keyframe for circle animation & slider track */}
      <style>{`
        @keyframes circleIn {
          from { stroke-dashoffset: ${2 * Math.PI * 40}; }
        }
        @keyframes marqueeScrollLeft {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-100% / 3));
          }
        }
        .marquee-slider-track {
          display: flex;
          gap: 1rem;
          width: max-content;
          animation: marqueeScrollLeft 28s linear infinite;
        }
        .marquee-slider-track:hover {
          animation-play-state: paused;
        }
        .counsellor-slider-track {
          --slide-pct: 100%;
        }
        @media (min-width: 640px) {
          .counsellor-slider-track {
            --slide-pct: 50%;
          }
        }
        @media (min-width: 1024px) {
          .counsellor-slider-track {
            --slide-pct: 25%;
          }
        }
        @keyframes flowDown {
          0% {
            stroke-dashoffset: 24;
          }
          100% {
            stroke-dashoffset: 0;
          }
        }
        @keyframes pulseHalo {
          0%, 100% {
            transform: scale(1);
            opacity: 0.7;
          }
          50% {
            transform: scale(1.35);
            opacity: 0.1;
          }
        }
        .flowing-dash-line {
          stroke-dasharray: 6 6;
          animation: flowDown 1.3s linear infinite;
        }
        .pulse-halo-ring {
          animation: pulseHalo 2.5s ease-out infinite;
        }
        @keyframes driveLane {
          from {
            stroke-dashoffset: 40;
          }
          to {
            stroke-dashoffset: 0;
          }
        }
        .animated-road-lane {
          stroke-dasharray: 14 14;
          animation: driveLane 1.1s linear infinite;
        }
      `}</style>

      {/* ─── CAREER COUNSELLORS CAROUSEL ──────────────────────────────── */}
      <section style={{ background: "#F0EBE1", borderTop: "1px solid #E0D6CA", borderBottom: "1px solid #E0D6CA" }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-16 sm:py-20">
          <p className="text-xs font-bold uppercase tracking-widest text-center mb-2" style={{ color: "#B5956A" }}>
            Certified Guidance Professionals
          </p>
          <h2
            className="font-extrabold leading-tight tracking-tight text-center mb-8 sm:mb-10"
            style={{ fontSize: "clamp(1.4rem, 3.5vw, 2.2rem)", color: "#1C1917" }}
          >
            Meet Our Career Counsellors
          </h2>

          {/* Smooth Sliding Carousel Track */}
          <div className="overflow-hidden py-2 -my-2">
            <div
              className="flex -mx-2.5 counsellor-slider-track"
              style={{
                transform: `translateX(calc(${counsellorIndex} * -1 * var(--slide-pct)))`,
                transition: isTransitioning
                  ? "transform 500ms cubic-bezier(0.25, 1, 0.5, 1)"
                  : "none",
              }}
              onTransitionEnd={handleTransitionEnd}
            >
              {extendedCounsellors.map((counsellor, idx) => (
                <div
                  key={`${counsellor.name}-${idx}`}
                  className="w-full sm:w-1/2 lg:w-1/4 shrink-0 px-2.5"
                >
                  <div className="rounded-2xl border border-stone-200/90 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col bg-white group h-full">
                    {/* Photo Area */}
                    <div className="h-48 sm:h-56 bg-gradient-to-b from-stone-100 to-stone-200/60 flex items-center justify-center overflow-hidden">
                      <img
                        src={counsellor.photo}
                        alt={counsellor.name}
                        className="w-full h-full object-contain object-center transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    {/* Info Area — dark bottom */}
                    <div className="flex-1 p-4 sm:p-5 flex flex-col justify-between" style={{ background: "#1C1917" }}>
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-wider text-[#C9A97A] leading-none mb-1.5">
                          {counsellor.role}
                        </p>
                        <h3 className="text-lg sm:text-xl font-black text-white leading-tight">
                          {counsellor.name}
                        </h3>
                        <p className="text-xs font-semibold text-stone-300 mt-1 leading-snug">
                          {counsellor.qualification}
                        </p>

                        {/* Specialization Tags */}
                        <div className="flex flex-wrap gap-1 mt-3">
                          {counsellor.specializations.map((spec, i) => (
                            <span
                              key={i}
                              className="text-[10px] px-2 py-0.5 rounded-md bg-stone-800 text-stone-300 border border-stone-700/60 font-medium"
                            >
                              {spec}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* View Profile Link */}
                      <div className="pt-3 mt-3 border-t border-stone-800">
                        <button
                          type="button"
                          onClick={() => navigate("/career-mentors")}
                          className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-bold transition-colors cursor-pointer border border-stone-700/80"
                        >
                          <span>View Full Profile</span>
                          <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Prev / Dots / Next */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevCounsellor}
              aria-label="Previous profile"
              className="shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-stone-300 bg-white hover:bg-stone-100 flex items-center justify-center shadow-sm transition-all hover:shadow-md cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-stone-700" />
            </button>

            <div className="flex items-center gap-1.5">
              {counsellors.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setIsTransitioning(true);
                    setCounsellorIndex(counsellors.length + idx);
                  }}
                  aria-label={`Go to counsellor ${idx + 1}`}
                  className={`w-2 h-2 rounded-full transition-all cursor-pointer ${
                    idx === activeDot
                      ? "bg-stone-800 scale-125"
                      : "bg-stone-300 hover:bg-stone-400"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextCounsellor}
              aria-label="Next profile"
              className="shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-stone-300 bg-white hover:bg-stone-100 flex items-center justify-center shadow-sm transition-all hover:shadow-md cursor-pointer"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-stone-700" />
            </button>
          </div>
        </div>
      </section>

      {/* ─── SESSIONS ROADMAP (WINDING HIGHWAY ROAD) ────────────────────── */}
      <section className="relative overflow-hidden py-16 sm:py-24" style={{ background: "#FAF8F5" }}>
        {/* Ambient background decoration */}
        <div
          className="absolute inset-0 -z-10 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 70% 50% at 50% 25%, rgba(224, 214, 202, 0.35) 0%, transparent 70%)",
          }}
        />

        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-12">
            <div className="space-y-2 max-w-2xl">
              <span
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase"
                style={{ background: "#F0EBE1", color: "#78645A", border: "1px solid #DDD3C5" }}
              >
                <span className="w-2 h-2 rounded-full animate-ping" style={{ background: "#B5956A" }} />
                Session Roadmap
              </span>
              <h2
                className="font-extrabold leading-tight tracking-tight text-stone-900 sm:whitespace-nowrap"
                style={{ fontSize: "clamp(1.3rem, 3vw, 2.4rem)" }}
              >
                How Your 1-on-1 Guidance Session Works
              </h2>
              <p className="text-xs sm:text-sm leading-relaxed" style={{ color: "#6B5E53" }}>
                A step-by-step journey from booking to career clarity. Follow the path to see what happens at every milestone.
              </p>
            </div>
          </div>

          {/* Stepped Snake Timeline */}
          <div
            ref={roadScrollRef}
            className="overflow-x-auto pb-6 pt-4 scrollbar-thin select-none relative rounded-3xl border border-stone-200/90 bg-[#FAF8F5] shadow-xs"
          >
            <div className="relative w-[1100px] h-[470px] mx-auto px-4">
              {/* SVG Connecting Lines */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none"
                viewBox="0 0 1100 470"
                fill="none"
              >
                {/* Vertical line: 01 down to 02 */}
                <line x1="200" y1="74" x2="200" y2="121" stroke="#292524" strokeWidth="3" />
                {/* Horizontal line: 02 right to 03 */}
                <line x1="224" y1="145" x2="406" y2="145" stroke="#292524" strokeWidth="3" />
                {/* Vertical line: 03 down to 04 */}
                <line x1="430" y1="169" x2="430" y2="216" stroke="#292524" strokeWidth="3" />
                {/* Horizontal line: 04 right to 05 */}
                <line x1="454" y1="240" x2="636" y2="240" stroke="#292524" strokeWidth="3" />
                {/* Vertical line: 05 down to 06 */}
                <line x1="660" y1="264" x2="660" y2="311" stroke="#292524" strokeWidth="3" />
                {/* Horizontal line: 06 right to 07 */}
                <line x1="684" y1="335" x2="866" y2="335" stroke="#292524" strokeWidth="3" />
                {/* Vertical line: 07 down to 08 */}
                <line x1="890" y1="359" x2="890" y2="406" stroke="#292524" strokeWidth="3" />

                {/* Animated flowing dash overlay */}
                <line x1="200" y1="74" x2="200" y2="121" stroke="#C9A97A" strokeWidth="1.5" strokeDasharray="5 5" className="animated-road-lane" />
                <line x1="224" y1="145" x2="406" y2="145" stroke="#C9A97A" strokeWidth="1.5" strokeDasharray="5 5" className="animated-road-lane" />
                <line x1="430" y1="169" x2="430" y2="216" stroke="#C9A97A" strokeWidth="1.5" strokeDasharray="5 5" className="animated-road-lane" />
                <line x1="454" y1="240" x2="636" y2="240" stroke="#C9A97A" strokeWidth="1.5" strokeDasharray="5 5" className="animated-road-lane" />
                <line x1="660" y1="264" x2="660" y2="311" stroke="#C9A97A" strokeWidth="1.5" strokeDasharray="5 5" className="animated-road-lane" />
                <line x1="684" y1="335" x2="866" y2="335" stroke="#C9A97A" strokeWidth="1.5" strokeDasharray="5 5" className="animated-road-lane" />
                <line x1="890" y1="359" x2="890" y2="406" stroke="#C9A97A" strokeWidth="1.5" strokeDasharray="5 5" className="animated-road-lane" />

                {/* Start arrow line */}
                <line x1="100" y1="50" x2="176" y2="50" stroke="#292524" strokeWidth="3" />
                <polygon points="172,44 184,50 172,56" fill="#292524" />

                {/* End arrow line */}
                <line x1="914" y1="430" x2="990" y2="430" stroke="#292524" strokeWidth="3" />
                <polygon points="985,424 997,430 985,436" fill="#292524" />
              </svg>

              {/* Start Label */}
              <div className="absolute z-10" style={{ left: 48, top: 35 }}>
                <span className="font-black text-sm tracking-tight" style={{ color: "#7C5C3E" }}>Start</span>
              </div>

              {/* End Label */}
              <div className="absolute z-10" style={{ left: 1000, top: 417 }}>
                <span className="font-black text-sm tracking-tight text-stone-900">End 🎯</span>
              </div>

              {/* 8 Stepped Milestone Nodes & Text Labels */}
              {sessionRoadmapSteps.map((stepItem, idx) => {
                const isSelected = activeRoadmapStep === idx;
                const isRight = stepItem.textSide === "right";
                const isStep5 = stepItem.isBranching;

                return (
                  <div key={stepItem.step}>
                    {/* Double-Ring Circular Node */}
                    <div
                      className="absolute z-20 cursor-pointer transition-transform duration-300 hover:scale-110"
                      style={{
                        left: stepItem.x,
                        top: stepItem.y,
                        transform: "translate(-50%, -50%)",
                      }}
                      onClick={() => setActiveRoadmapStep(isSelected ? null : idx)}
                      title={`Step ${stepItem.step}: ${stepItem.title}`}
                    >
                      <div
                        className={`w-12 h-12 rounded-full p-[3px] bg-white border-[2.5px] shadow-lg flex items-center justify-center transition-all ${
                          isSelected
                            ? "border-[#C9A97A] ring-4 ring-[#C9A97A]/25 scale-110"
                            : "border-stone-300 hover:border-stone-400"
                        }`}
                      >
                        <div
                          className="w-full h-full rounded-full flex items-center justify-center text-white font-mono font-black text-xs"
                          style={{ background: stepItem.pinColor }}
                        >
                          {stepItem.step}
                        </div>
                      </div>
                    </div>

                    {/* Text Label */}
                    <div
                      className={`absolute z-10 ${isSelected ? "scale-[1.02]" : ""} transition-all duration-200`}
                      style={{
                        left: isRight ? stepItem.x + 34 : undefined,
                        right: !isRight ? `calc(100% - ${stepItem.x - 34}px)` : undefined,
                        top: stepItem.y,
                        transform: "translateY(-50%)",
                        maxWidth: isStep5 ? "180px" : "165px",
                      }}
                    >
                      <h3 className={`font-extrabold text-xs sm:text-[13px] leading-tight mb-0.5 ${isSelected ? "text-[#7C5C3E]" : "text-stone-900"}`}>
                        {stepItem.title}
                      </h3>
                      <p className="text-[10px] sm:text-[11px] text-stone-500 leading-snug">
                        {stepItem.description}
                      </p>
                      {isStep5 && (
                        <div className="mt-1 space-y-0.5">
                          <div className="flex items-center gap-1 text-[9.5px] font-semibold text-stone-800">
                            <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "#7C5C3E" }} />
                            <span>{stepItem.branchA}</span>
                          </div>
                          <div className="flex items-center gap-1 text-[9.5px] font-semibold text-stone-600">
                            <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "#B5956A" }} />
                            <span>{stepItem.branchB}</span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </section>

      {/* ─── FOOTER ─────────────────────────────────────────────────────── */}
      <footer style={{ borderTop: "1px solid #E0D6CA", background: "#F0EBE1" }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img src={wabiLogo} alt="Wabi" className="w-7 h-7 rounded-full object-cover opacity-80" />
            <span className="text-xs font-semibold" style={{ color: "#7C6C62" }}>
              © {new Date().getFullYear()} Wabi Resolutions &amp; Career Guidance
            </span>
          </div>
          <div className="flex items-center gap-5 text-xs font-semibold" style={{ color: "#9B8B7E" }}>
            <Link to="/career-reports" className="hover:text-stone-900 transition-colors">Explore Careers</Link>
            <Link to="/faq" className="hover:text-stone-900 transition-colors">FAQ</Link>
            <Link to="/counsellor" className="hover:text-stone-900 transition-colors">Counsellor Login</Link>
          </div>
        </div>
      </footer>

      {/* Book Online Counselling Modal */}
      <BookOnlineCounsellingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />

      {/* Case Study Modal: Two Students & A Dream (Plan A vs Plan B) */}
      <CaseStudyModal
        isOpen={isCaseStudyOpen}
        onClose={() => setIsCaseStudyOpen(false)}
      />

      {/* Floating Case Study Toggle (Bottom Right - circular icon only) */}
      <div className="fixed bottom-5 inset-x-0 pointer-events-none z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex justify-end">
          <div className="pointer-events-auto relative flex items-center">
            {/* Circular Floating Action Button */}
            <button
              type="button"
              onClick={() => setIsCaseStudyOpen(true)}
              className="w-12 h-12 rounded-full bg-[#1C1917] hover:bg-stone-800 text-[#FAF8F5] shadow-xl hover:shadow-2xl hover:scale-110 active:scale-95 transition-all duration-200 border border-[#E0D6CA]/30 cursor-pointer flex items-center justify-center relative group"
              aria-label="Read Case Study: Two Students & A Dream"
              title="Read Case Study: Two Students & A Dream"
            >
              <BookOpen className="w-5 h-5 text-[#C9A97A] group-hover:scale-110 transition-transform" />
              {/* Subtle Amber Beacon Dot */}
              <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-[#C9A97A] rounded-full border-2 border-[#1C1917] animate-pulse" />
            </button>
          </div>
        </div>
      </div>

    </main>
  );
};

export default Index;

