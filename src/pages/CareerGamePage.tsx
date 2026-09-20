import { useState, useEffect, useRef } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import {
  Sparkles,
  ArrowLeft,
  RotateCcw,
  Volume2,
  VolumeX,
  Flame,
  Award,
  CheckCircle2,
  XCircle,
  ArrowRight,
  BookOpen,
  GraduationCap,
  Cpu,
  Compass,
  Trophy,
  Zap,
  ChevronRight,
  FileText,
  Gamepad2,
  Lock,
  Play,
  Clock,
  Check,
  Milestone,
} from "lucide-react";
import wabiLogo from "@/lib/wabi_resolutions_logo.jpeg";
import { CAREER_GAMES, CareerGame, GameQuestion } from "@/lib/career-game-data";

// Web Audio API Sound Synthesizer (Zero External Assets, Instant & Reliable)
class SoundFX {
  private ctx: AudioContext | null = null;
  public enabled = true;

  private init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (AudioCtx) this.ctx = new AudioCtx();
    }
  }

  playCorrect() {
    if (!this.enabled) return;
    try {
      this.init();
      if (!this.ctx) return;
      const t = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = "triangle";
      osc.frequency.setValueAtTime(523.25, t); // C5
      osc.frequency.setValueAtTime(659.25, t + 0.08); // E5
      osc.frequency.setValueAtTime(783.99, t + 0.16); // G5
      osc.frequency.setValueAtTime(1046.50, t + 0.24); // C6

      gain.gain.setValueAtTime(0.2, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.45);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(t);
      osc.stop(t + 0.45);
    } catch {}
  }

  playWrong() {
    if (!this.enabled) return;
    try {
      this.init();
      if (!this.ctx) return;
      const t = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = "sawtooth";
      osc.frequency.setValueAtTime(220, t); // A3
      osc.frequency.linearRampToValueAtTime(160, t + 0.25);

      gain.gain.setValueAtTime(0.18, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.3);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(t);
      osc.stop(t + 0.3);
    } catch {}
  }

  playFanfare() {
    if (!this.enabled) return;
    try {
      this.init();
      if (!this.ctx) return;
      const notes = [523.25, 659.25, 783.99, 1046.50, 1318.51];
      const start = this.ctx.currentTime;
      notes.forEach((freq, idx) => {
        const osc = this.ctx!.createOscillator();
        const gain = this.ctx!.createGain();
        const t = start + idx * 0.1;
        osc.type = "triangle";
        osc.frequency.setValueAtTime(freq, t);
        gain.gain.setValueAtTime(0.25, t);
        gain.gain.exponentialRampToValueAtTime(0.001, t + 0.5);
        osc.connect(gain);
        gain.connect(this.ctx!.destination);
        osc.start(t);
        osc.stop(t + 0.5);
      });
    } catch {}
  }
}

const sfx = new SoundFX();

// Lightweight Canvas Confetti Engine
function triggerConfetti(canvas: HTMLCanvasElement | null) {
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const particles: Array<{
    x: number;
    y: number;
    vx: number;
    vy: number;
    size: number;
    color: string;
    rotation: number;
    vRot: number;
    alpha: number;
  }> = [];

  const colors = ["#C9A97A", "#1C1917", "#10B981", "#3B82F6", "#F59E0B", "#8B5CF6"];

  for (let i = 0; i < 90; i++) {
    particles.push({
      x: canvas.width / 2 + (Math.random() - 0.5) * 200,
      y: canvas.height * 0.45,
      vx: (Math.random() - 0.5) * 16,
      vy: (Math.random() - 1) * 16 - 2,
      size: Math.random() * 8 + 4,
      color: colors[Math.floor(Math.random() * colors.length)],
      rotation: Math.random() * 360,
      vRot: (Math.random() - 0.5) * 12,
      alpha: 1,
    });
  }

  function render() {
    if (!ctx || !canvas) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let active = 0;

    particles.forEach((p) => {
      if (p.alpha <= 0) return;
      active++;
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.45; // gravity
      p.rotation += p.vRot;
      p.alpha -= 0.012;

      ctx.save();
      ctx.globalAlpha = Math.max(0, p.alpha);
      ctx.translate(p.x, p.y);
      ctx.rotate((p.rotation * Math.PI) / 180);
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
      ctx.restore();
    });

    if (active > 0) {
      requestAnimationFrame(render);
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  }

  render();
}

// Career options available in lobby
const ALL_LOBBY_TRACKS = [
  {
    id: "swe",
    title: "Software Engineer Roadmap",
    icon: "💻",
    targetAudience: "Classes 8th, 9th & 10th",
    questionsCount: 10,
    status: "ready",
    description: "Learn the exact roadmap: MPC stream after 10th, 2 years Inter, 4 years B.Tech, key subjects & school skills.",
    badge: "🔥 Active Quiz · Ready to Play",
  },
  {
    id: "doctor",
    title: "Doctor / Healthcare Roadmap",
    icon: "🩺",
    targetAudience: "Classes 8th, 9th & 10th",
    questionsCount: 10,
    status: "ready",
    description: "Explore the medical journey: BiPC stream after 10th, NEET-UG exam, 5.5 years MBBS, and life-saving skills.",
    badge: "🔥 Active Quiz · Ready to Play",
  },
  {
    id: "police",
    title: "Police Officer & IPS Roadmap",
    icon: "👮",
    targetAudience: "Classes 8th, 9th & 10th",
    questionsCount: 10,
    status: "ready",
    description: "Discover the path to Khaki stars: any 10+2 stream, graduation, physical endurance, SI & UPSC IPS exams.",
    badge: "🔥 Active Quiz · Ready to Play",
  },
  {
    id: "teacher",
    title: "Teacher & Educator Roadmap",
    icon: "👩‍🏫",
    targetAudience: "Classes 8th, 9th & 10th",
    questionsCount: 10,
    status: "ready",
    description: "Inspire future generations: subject streams, 2-year B.Ed / D.El.Ed, CTET & TET exams, and pedagogy skills.",
    badge: "🔥 Active Quiz · Ready to Play",
  },
  {
    id: "ias",
    title: "IAS / Civil Services Roadmap",
    icon: "🏛️",
    targetAudience: "Classes 8th, 9th & 10th",
    questionsCount: 10,
    status: "ready",
    description: "Any graduation degree, UPSC Civil Services Examination, General Studies, Essay & Interview rounds.",
    badge: "🔥 Active Quiz · Ready to Play",
  },
  {
    id: "nurse",
    title: "Nurse / Nursing Roadmap",
    icon: "💉",
    targetAudience: "Classes 8th, 9th & 10th",
    questionsCount: 10,
    status: "ready",
    description: "BiPC stream, 4-year B.Sc Nursing or GNM diploma, hospital rotations, and compassionate patient care.",
    badge: "🔥 Active Quiz · Ready to Play",
  },
  {
    id: "lawyer",
    title: "Lawyer / Advocate Roadmap",
    icon: "⚖️",
    targetAudience: "Classes 8th, 9th & 10th",
    questionsCount: 10,
    status: "ready",
    description: "5-year integrated BA-LLB after 12th or 3-year LLB after graduation, CLAT exam, and courtroom skills.",
    badge: "🔥 Active Quiz · Ready to Play",
  },
  {
    id: "bank",
    title: "Bank PO / Banking Officer Roadmap",
    icon: "🏦",
    targetAudience: "Classes 8th, 9th & 10th",
    questionsCount: 10,
    status: "ready",
    description: "Any graduation degree, IBPS & SBI PO exams, arithmetic maths speed, credit loans, and branch management.",
    badge: "🔥 Active Quiz · Ready to Play",
  },
  {
    id: "agri",
    title: "Agricultural Officer Roadmap",
    icon: "🌾",
    targetAudience: "Classes 8th, 9th & 10th",
    questionsCount: 10,
    status: "ready",
    description: "BiPC stream, 4-year B.Sc Agriculture via ICAR/CET, soil testing, smart agri-tech, and farmer guidance.",
    badge: "🔥 Active Quiz · Ready to Play",
  },
  {
    id: "ca",
    title: "Chartered Accountant (CA) Roadmap",
    icon: "📊",
    targetAudience: "Classes 8th, 9th & 10th",
    questionsCount: 10,
    status: "ready",
    description: "Commerce/MEC stream, ICAI Foundation -> Inter -> Final, 2-year practical articleship, and financial auditing.",
    badge: "🔥 Active Quiz · Ready to Play",
  },
  {
    id: "engineer",
    title: "Engineer (Core Engineering) Roadmap",
    icon: "⚙️",
    targetAudience: "Classes 8th, 9th & 10th",
    questionsCount: 10,
    status: "ready",
    description: "MPC stream, 4-year B.Tech in Mechanical, Civil, or Electrical, JEE & EAPCET, and building national infrastructure.",
    badge: "🔥 Active Quiz · Ready to Play",
  },
  {
    id: "mba",
    title: "MBA & Business Leader Roadmap",
    icon: "💼",
    targetAudience: "Classes 8th, 9th & 10th",
    questionsCount: 10,
    status: "ready",
    description: "Any degree after 12th, CAT/XAT exams, 2-year MBA/PGDM from IIMs, strategy, marketing, and leadership skills.",
    badge: "🔥 Active Quiz · Ready to Play",
  },
  {
    id: "air-hostess",
    title: "Air Hostess & Cabin Crew Roadmap",
    icon: "🛫",
    targetAudience: "Classes 8th, 9th & 10th",
    questionsCount: 10,
    status: "ready",
    description: "Any 10+2 stream, cabin crew diploma/degree, fluent spoken English, first aid, emergency drills, and hospitality.",
    badge: "🔥 Active Quiz · Ready to Play",
  },
  {
    id: "physiotherapy",
    title: "Physiotherapist & Rehab Roadmap",
    icon: "🏃",
    targetAudience: "Classes 8th, 9th & 10th",
    questionsCount: 10,
    status: "ready",
    description: "BiPC stream, 4.5-year BPT degree with 6-month internship, NEET/state CET, sports injury recovery, and exercise therapy.",
    badge: "🔥 Active Quiz · Ready to Play",
  },
  {
    id: "psychologist",
    title: "Psychologist & Mental Health Roadmap",
    icon: "🧠",
    targetAudience: "Classes 8th, 9th & 10th",
    questionsCount: 10,
    status: "ready",
    description: "Any 10+2 stream (Arts/Science), 3-year BA/B.Sc + 2-year MA/M.Sc in Psychology, active listening, and counseling skills.",
    badge: "🔥 Active Quiz · Ready to Play",
  },
  {
    id: "pilot",
    title: "Commercial Pilot Roadmap",
    icon: "✈️",
    targetAudience: "Classes 8th, 9th & 10th",
    questionsCount: 10,
    status: "ready",
    description: "MPC (Physics & Maths) stream in 10+2, DGCA Class 1 medicals, Flying School, 200 flying hours, and Commercial Pilot License (CPL).",
    badge: "🔥 Active Quiz · Ready to Play",
  },
  {
    id: "army",
    title: "Indian Army Officer Roadmap",
    icon: "🎖️",
    targetAudience: "Classes 8th, 9th & 10th",
    questionsCount: 10,
    status: "ready",
    description: "NDA exam after 12th or CDS exam after graduation, 5-day SSB interview, physical endurance, and defending the nation.",
    badge: "🔥 Active Quiz · Ready to Play",
  },
  {
    id: "journalist",
    title: "Journalist & Media Reporter Roadmap",
    icon: "📰",
    targetAudience: "Classes 8th, 9th & 10th",
    questionsCount: 10,
    status: "ready",
    description: "Any 10+2 stream, 3-year BJMC / Mass Communication degree, field fact-checking, unbiased news reporting, and storytelling.",
    badge: "🔥 Active Quiz · Ready to Play",
  },
  {
    id: "data-scientist",
    title: "Data Scientist Roadmap",
    icon: "📈",
    targetAudience: "Classes 8th, 9th & 10th",
    questionsCount: 10,
    status: "coming_soon",
    description: "Maths & Statistics, MPC stream, B.Tech / BCA degrees, and working with big data & AI.",
    badge: "Coming Soon",
  },
  {
    id: "robotics-engineer",
    title: "Robotics Engineer Roadmap",
    icon: "🤖",
    targetAudience: "Classes 8th, 9th & 10th",
    questionsCount: 10,
    status: "coming_soon",
    description: "Physics, Mechanics, Electronics, MPC stream, B.Tech Mechatronics & Robot building.",
    badge: "Coming Soon",
  },
  {
    id: "designer",
    title: "Graphic & UI Designer",
    icon: "🎨",
    targetAudience: "Classes 8th, 9th & 10th",
    questionsCount: 10,
    status: "coming_soon",
    description: "Any 10+2 stream, B.Des degree, sketching, digital drawing tools, and visual storytelling.",
    badge: "Coming Soon",
  },
];

export default function CareerGamePage() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // View Mode: "lobby" | "playing" | "finished"
  const trackParam = searchParams.get("track");
  const [gameMode, setGameMode] = useState<"lobby" | "playing" | "finished">(
    trackParam ? "playing" : "lobby"
  );

  // Selected Career Game (defaults to swe)
  const careerKey = trackParam || "swe";
  const game: CareerGame = CAREER_GAMES[careerKey] || CAREER_GAMES.swe;

  // Game state
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [maxStreak, setMaxStreak] = useState(0);
  const [soundOn, setSoundOn] = useState(true);
  const [categoryBreakdown, setCategoryBreakdown] = useState<Record<string, { correct: number; total: number }>>({});

  const question: GameQuestion = game.questions[currentIdx];

  // Sound sync
  useEffect(() => {
    sfx.enabled = soundOn;
  }, [soundOn]);

  // Sync gameMode with URL ?track= param so back navigation and link switches work instantaneously
  useEffect(() => {
    const track = searchParams.get("track");
    if (track && CAREER_GAMES[track]) {
      setGameMode("playing");
    } else {
      setGameMode("lobby");
    }
  }, [searchParams]);

  // Handle single-click Back action:
  // If in a quiz, goes directly back to all career quiz cards (lobby)
  // If in lobby, returns to career reports page
  const handleBack = () => {
    if (gameMode !== "lobby" || searchParams.get("track")) {
      setSearchParams({}, { replace: true });
      setGameMode("lobby");
      setCurrentIdx(0);
      setIsAnswered(false);
      setSelectedOption(null);
      window.scrollTo({ top: 0, behavior: "instant" });
    } else {
      navigate("/career-reports");
    }
  };

  // Handle Career Select from Lobby
  const handleStartCareerQuiz = (id: string) => {
    if (!CAREER_GAMES[id]) return;
    setSearchParams({ track: id });
    setCurrentIdx(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setStreak(0);
    setMaxStreak(0);
    setCategoryBreakdown({});
    setGameMode("playing");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Handle Option Select
  const handleSelectOption = (index: number) => {
    if (isAnswered) return;
    setSelectedOption(index);
    setIsAnswered(true);

    const isCorrect = index === question.correctIndex;
    const cat = question.category;

    setCategoryBreakdown((prev) => {
      const current = prev[cat] || { correct: 0, total: 0 };
      return {
        ...prev,
        [cat]: {
          correct: current.correct + (isCorrect ? 1 : 0),
          total: current.total + 1,
        },
      };
    });

    if (isCorrect) {
      sfx.playCorrect();
      const nextStreak = streak + 1;
      setStreak(nextStreak);
      setMaxStreak((prev) => Math.max(prev, nextStreak));
      // Base 100 + Streak bonus
      const bonus = nextStreak > 1 ? (nextStreak - 1) * 20 : 0;
      setScore((prev) => prev + 100 + bonus);
      // Trigger celebration confetti animation on every correct option!
      triggerConfetti(canvasRef.current);
      if (nextStreak >= 3) {
        sfx.playFanfare();
      }
    } else {
      sfx.playWrong();
      setStreak(0);
    }
  };

  // Move to next question or show finish
  const handleNextQuestion = () => {
    if (currentIdx + 1 < game.questions.length) {
      setCurrentIdx((prev) => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      setGameMode("finished");
      sfx.playFanfare();
      setTimeout(() => triggerConfetti(canvasRef.current), 200);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Restart Game
  const handleRestart = () => {
    setCurrentIdx(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setStreak(0);
    setMaxStreak(0);
    setCategoryBreakdown({});
    setGameMode("playing");
  };

  // Calculate stats
  const totalQ = game.questions.length;
  const correctCount = Object.values(categoryBreakdown).reduce((acc, c) => acc + c.correct, 0);

  // Rank title tailored for school students
  const getRankBadge = () => {
    if (score >= 900) return { title: `Master of ${game.title}!`, badge: "🏆 Roadmap Master", color: "bg-[#1C1917] text-[#C9A97A]" };
    if (score >= 700) return { title: `High-Potential Future Specialist!`, badge: "💡 Super Clear Pathway", color: "bg-stone-900 text-[#C9A97A]" };
    if (score >= 500) return { title: `Promising Aspirant in the Making!`, badge: "👍 Good Roadmap Knowledge", color: "bg-emerald-900 text-emerald-100" };
    return { title: "Career Explorer (Great Beginning!)", badge: "📖 Ready to Learn", color: "bg-stone-800 text-stone-200" };
  };

  const rank = getRankBadge();

  return (
    <main className="min-h-screen font-sans text-stone-900 relative overflow-x-hidden flex flex-col" style={{ background: "#FAF8F5" }}>
      {/* Confetti Canvas */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-50 w-full h-full"
      />

      {/* ─── Top Navbar (Website Warm Theme) ─────────────────────────────────── */}
      <header
        className="sticky top-0 z-40 border-b border-stone-200/80"
        style={{ background: "rgba(250,248,245,0.92)", backdropFilter: "blur(16px)" }}
      >
        <div className={`w-full mx-auto px-4 sm:px-6 h-16 flex items-center justify-between transition-all ${
          gameMode === "lobby" ? "max-w-7xl" : "max-w-4xl"
        }`}>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={handleBack}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-stone-200 text-stone-700 hover:text-stone-900 text-xs font-bold transition-all shadow-2xs hover:bg-stone-50 cursor-pointer"
              title="Go Back"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back</span>
            </button>

            {gameMode !== "lobby" ? (
              <button
                type="button"
                onClick={handleBack}
                className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#F5F1EC] border border-[#E0D6CA] text-xs font-bold text-stone-800 hover:bg-stone-200/60 cursor-pointer transition-colors"
              >
                <Gamepad2 className="w-3.5 h-3.5 text-[#7C5C3E]" />
                <span>Switch Career</span>
              </button>
            ) : (
              <div className="flex items-center gap-2 pl-2 border-l border-stone-300">
                <Gamepad2 className="w-5 h-5 text-[#7C5C3E]" />
                <span className="text-xs sm:text-sm font-extrabold text-stone-900 tracking-wide">
                  Career Roadmap Quiz (For Classes 8th–10th)
                </span>
              </div>
            )}
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            {/* Streak Counter */}
            {gameMode === "playing" && streak > 1 && (
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-300 text-amber-900 text-xs font-black animate-bounce">
                <Flame className="w-3.5 h-3.5 text-orange-500 fill-current" />
                <span>{streak}x Streak!</span>
              </div>
            )}

            {/* Score Pill */}
            {gameMode === "playing" && (
              <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-stone-900 text-[#FAF8F5] text-xs font-black shadow-2xs">
                <Zap className="w-3.5 h-3.5 text-[#C9A97A] fill-current" />
                <span>{score} pts</span>
              </div>
            )}

            {/* Audio Toggle Button */}
            <button
              type="button"
              onClick={() => setSoundOn(!soundOn)}
              className="p-2 rounded-xl bg-white border border-stone-200 text-stone-600 hover:text-stone-900 cursor-pointer transition-colors shadow-2xs"
              title={soundOn ? "Mute Game Audio" : "Unmute Game Audio"}
            >
              {soundOn ? <Volume2 className="w-4 h-4 text-emerald-600" /> : <VolumeX className="w-4 h-4 text-stone-400" />}
            </button>
          </div>
        </div>
      </header>

      {/* ─── Main Container ──────────────────────────────────────────────────── */}
      <div className={`flex-1 w-full mx-auto px-3 sm:px-6 py-3 sm:py-8 flex flex-col justify-center ${
        gameMode === "lobby" ? "max-w-7xl" : "max-w-3xl"
      }`}>

        {/* ══════════════════════════════════════════════════════════════════════ */}
        {/* VIEW A: CAREER SELECTION LOBBY                                         */}
        {/* ══════════════════════════════════════════════════════════════════════ */}
        {gameMode === "lobby" && (
          <div className="space-y-8 animate-in fade-in zoom-in-95 duration-200">
            {/* Hero Banner */}
            <div className="text-center space-y-3 max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-stone-900 text-[#FAF8F5]">
                <Gamepad2 className="w-3.5 h-3.5 text-[#C9A97A]" />
                Career Roadmap Game &bull; Classes 8th, 9th &amp; 10th
              </div>

              <h1 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
                Pick Your Career Quiz!
              </h1>

              <p className="text-xs sm:text-base text-stone-600 font-medium leading-relaxed">
                Step into a school student's shoes! Make the right decisions: pick intermediate streams, understand course years, choose key school subjects, and build real skills!
              </p>
            </div>

            {/* Grid of Career Quiz Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
              {ALL_LOBBY_TRACKS.map((trk) => {
                const isReady = trk.status === "ready";
                return (
                  <div
                    key={trk.id}
                    className={`rounded-3xl border p-5 sm:p-6 flex flex-col justify-between transition-all duration-300 relative overflow-hidden ${
                      isReady
                        ? "bg-white border-stone-900 shadow-md hover:shadow-xl hover:-translate-y-1 cursor-pointer"
                        : "bg-[#F5F1EC]/70 border-[#E0D6CA] opacity-65"
                    }`}
                    onClick={() => isReady && handleStartCareerQuiz(trk.id)}
                  >
                    <div className="space-y-4">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-3xl sm:text-4xl p-2.5 rounded-2xl bg-[#F5F1EC] border border-[#E0D6CA] inline-block">
                          {trk.icon}
                        </span>
                        <span
                          className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${
                            isReady
                              ? "bg-stone-900 text-[#FAF8F5] border-stone-900"
                              : "bg-stone-100 border-stone-200 text-stone-500"
                          }`}
                        >
                          {trk.badge}
                        </span>
                      </div>

                      <div className="space-y-1">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#7C5C3E]">
                          {trk.targetAudience}
                        </span>
                        <h3 className="text-base sm:text-lg font-extrabold text-stone-900 leading-snug">
                          {trk.title}
                        </h3>
                      </div>
                    </div>

                    <div className="pt-5 mt-4 border-t border-stone-100 flex items-center justify-between">
                      <span className="text-xs text-stone-500 font-semibold font-mono">
                        {trk.questionsCount} Roadmap Steps
                      </span>

                      {isReady ? (
                        <button
                          type="button"
                          className="px-4 py-2 rounded-xl text-xs font-black bg-[#1C1917] text-[#FAF8F5] hover:bg-stone-800 shadow-sm flex items-center gap-1.5 transition-all cursor-pointer"
                        >
                          <span>Start Quiz</span>
                          <Play className="w-3 h-3 fill-current text-[#C9A97A]" />
                        </button>
                      ) : (
                        <div className="flex items-center gap-1 text-[11px] text-stone-400 font-medium">
                          <Lock className="w-3 h-3" />
                          <span>Locked</span>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ══════════════════════════════════════════════════════════════════════ */}
        {/* VIEW B: QUIZ IN PROGRESS                                               */}
        {/* ══════════════════════════════════════════════════════════════════════ */}
        {gameMode === "playing" && (
          <div className="space-y-3.5 sm:space-y-5 animate-in fade-in zoom-in-95 duration-200">
            {/* Roadmap Level Header */}
            <div className="space-y-1.5 sm:space-y-2">
              <div className="flex flex-wrap items-center justify-between text-[11px] sm:text-xs font-bold text-stone-700 gap-1.5">
                <span className="flex items-center gap-1.5 sm:gap-2">
                  <span className="px-2 py-0.5 rounded-md bg-stone-900 text-[#FAF8F5] font-mono text-[10px] sm:text-[11px]">
                    {question.roadmapStage}
                  </span>
                  <span className="text-stone-500">Step {currentIdx + 1} of {totalQ}</span>
                </span>
                <span className="text-stone-900 font-mono font-extrabold text-[11px] sm:text-xs">
                  {Math.round(((currentIdx + 1) / totalQ) * 100)}% Roadmap Explored
                </span>
              </div>

              {/* Progress Segment Bar */}
              <div className="w-full bg-stone-200 rounded-full h-1.5 sm:h-2 overflow-hidden p-0.5 border border-stone-300">
                <div
                  className="bg-stone-900 h-full rounded-full transition-all duration-500 ease-out shadow-sm"
                  style={{ width: `${((currentIdx + 1) / totalQ) * 100}%` }}
                />
              </div>
            </div>

            {/* Question Card Box */}
            <div className="rounded-2xl sm:rounded-3xl bg-white border border-[#E5DDD2] shadow-sm p-3.5 sm:p-6 space-y-3 sm:space-y-4 relative overflow-hidden">
              {/* Category Pill & XP */}
              <div className="flex items-center justify-between gap-2">
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] sm:text-xs font-extrabold border bg-[#F5F1EC] text-stone-800 border-[#E0D6CA]">
                  <Milestone className="w-3 h-3 text-[#7C5C3E]" />
                  {question.category}
                </span>

                <span className="text-[10px] sm:text-xs text-stone-900 font-bold font-mono bg-stone-100 px-2 py-0.5 rounded-md border border-stone-200">
                  +100 XP
                </span>
              </div>

              {/* Question Text */}
              <h2 className="text-sm sm:text-lg font-extrabold text-stone-900 leading-snug">
                {question.question}
              </h2>

              {/* 4 Interactive MCQ Options */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 pt-0.5">
                {question.options.map((opt, oIdx) => {
                  const letter = String.fromCharCode(65 + oIdx);
                  const isSelected = selectedOption === oIdx;
                  const isCorrect = oIdx === question.correctIndex;

                  let cardStyle = "bg-white hover:bg-[#FAF8F5] border-[#E5DDD2] hover:border-stone-400 text-stone-800 shadow-2xs hover:scale-[1.01]";
                  let badgeStyle = "bg-[#F5F1EC] text-stone-700 border border-[#E0D6CA]";

                  if (isAnswered) {
                    if (isCorrect) {
                      cardStyle = "bg-emerald-50 border-emerald-500 text-emerald-950 shadow-md scale-[1.01] ring-2 ring-emerald-400/40 transition-all duration-200";
                      badgeStyle = "bg-emerald-600 text-white border-emerald-600 shadow-sm";
                    } else if (isSelected) {
                      cardStyle = "bg-rose-50 border-rose-400 text-rose-950";
                      badgeStyle = "bg-rose-600 text-white border-rose-600";
                    } else {
                      cardStyle = "bg-stone-50 border-stone-200 text-stone-400 opacity-60";
                      badgeStyle = "bg-stone-100 text-stone-400";
                    }
                  }

                  return (
                    <button
                      key={oIdx}
                      type="button"
                      disabled={isAnswered}
                      onClick={() => handleSelectOption(oIdx)}
                      className={`p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl border text-left flex items-start gap-2.5 sm:gap-3 transition-all duration-200 cursor-pointer ${cardStyle}`}
                    >
                      <span className={`w-6 h-6 sm:w-7 sm:h-7 rounded-lg sm:rounded-xl font-black text-[11px] sm:text-xs flex items-center justify-center shrink-0 transition-transform ${badgeStyle}`}>
                        {isAnswered && isCorrect ? (
                          <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                        ) : isAnswered && isSelected ? (
                          <XCircle className="w-3.5 h-3.5 text-white" />
                        ) : (
                          letter
                        )}
                      </span>
                      <div className="space-y-1 min-w-0 flex-1">
                        <span className="text-xs sm:text-sm font-bold block leading-snug">
                          {opt.text}
                        </span>
                        {isAnswered && isCorrect && (
                          <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-black bg-emerald-100 text-emerald-900 border border-emerald-300 shadow-2xs">
                            <Sparkles className="w-2.5 h-2.5 text-emerald-600" />
                            <span>Correct Choice! +100 XP 🎉</span>
                          </div>
                        )}
                        {opt.badge && (
                          <span className="inline-block text-[9.5px] sm:text-[10px] font-bold text-stone-600 bg-stone-100 px-1.5 py-0.5 rounded border border-stone-200">
                            {opt.badge}
                          </span>
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Feedback & Explanation Card (Appears after answer) */}
              {isAnswered && (
                <div className="pt-1 animate-in fade-in slide-in-from-bottom-2 duration-300 space-y-3">
                  <div className={`p-3 sm:p-4 rounded-xl sm:rounded-2xl border ${
                    selectedOption === question.correctIndex
                      ? "bg-emerald-50/80 border-emerald-300 text-emerald-950"
                      : "bg-rose-50/80 border-rose-300 text-rose-950"
                  }`}>
                    <div className="flex items-center gap-1.5 font-extrabold text-xs sm:text-sm mb-1">
                      {selectedOption === question.correctIndex ? (
                        <>
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                          <span className="text-emerald-900">Spot On! You know your roadmap!</span>
                        </>
                      ) : (
                        <>
                          <XCircle className="w-3.5 h-3.5 text-rose-600" />
                          <span className="text-rose-900">Good try! Here is the right roadmap:</span>
                        </>
                      )}
                    </div>
                    <p className="text-[11.5px] sm:text-xs leading-relaxed text-stone-800 font-medium">
                      {question.explanation}
                    </p>

                    <div className="mt-2 pt-2 border-t border-stone-200 flex items-start gap-1.5 text-[11px] sm:text-xs text-stone-700 font-medium">
                      <Sparkles className="w-3.5 h-3.5 text-[#7C5C3E] shrink-0 mt-0.5" />
                      <span><strong>Student Pro Tip: </strong>{question.proTip}</span>
                    </div>
                  </div>

                  {/* Next Question CTA */}
                  <div className="flex justify-end">
                    <button
                      type="button"
                      onClick={handleNextQuestion}
                      className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl sm:rounded-2xl font-extrabold text-xs sm:text-sm bg-[#1C1917] hover:bg-stone-800 text-[#FAF8F5] shadow-md transition-all hover:scale-102 active:scale-98 cursor-pointer flex items-center gap-1.5"
                    >
                      <span>{currentIdx + 1 < totalQ ? "Next Roadmap Step" : "See Final Score"}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#C9A97A]" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* ══════════════════════════════════════════════════════════════════════ */}
        {/* VIEW C: GAME OVER / CELEBRATION RESULT VIEW                           */}
        {/* ══════════════════════════════════════════════════════════════════════ */}
        {gameMode === "finished" && (
          <div className="rounded-3xl bg-white border border-[#E5DDD2] shadow-xl p-6 sm:p-10 text-center space-y-8 animate-in zoom-in-95 duration-300 relative overflow-hidden">
            {/* Trophy Icon */}
            <div className="relative w-28 h-28 mx-auto flex items-center justify-center">
              <div className="w-24 h-24 rounded-3xl bg-[#1C1917] flex items-center justify-center shadow-lg">
                <Trophy className="w-12 h-12 text-[#C9A97A] animate-bounce" />
              </div>
            </div>

            {/* Score & Rank Header */}
            <div className="space-y-3 max-w-lg mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider bg-stone-900 text-[#C9A97A] shadow-sm">
                <Sparkles className="w-3.5 h-3.5" />
                {rank.badge}
              </div>

              <h1 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
                {rank.title}
              </h1>

              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-medium">
                Awesome work! You completed the {game.title}. Here is how well you understand the pathway:
              </p>
            </div>

            {/* Score Highlights Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5 max-w-xl mx-auto">
              <div className="p-4 rounded-2xl bg-[#F5F1EC] border border-[#E0D6CA] space-y-1">
                <span className="text-[10px] font-bold text-stone-500 uppercase">Roadmap Score</span>
                <div className="text-2xl sm:text-3xl font-black text-stone-900 font-mono">
                  {score}
                </div>
                <span className="text-[11px] text-stone-500 font-semibold">XP Earned</span>
              </div>

              <div className="p-4 rounded-2xl bg-[#F5F1EC] border border-[#E0D6CA] space-y-1">
                <span className="text-[10px] font-bold text-stone-500 uppercase">Steps Mastered</span>
                <div className="text-2xl sm:text-3xl font-black text-emerald-700 font-mono">
                  {correctCount} / {totalQ}
                </div>
                <span className="text-[11px] text-stone-500 font-semibold">
                  {Math.round((correctCount / totalQ) * 100)}% Accurate
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-[#F5F1EC] border border-[#E0D6CA] space-y-1 col-span-2 sm:col-span-1">
                <span className="text-[10px] font-bold text-stone-500 uppercase">Max Streak</span>
                <div className="text-2xl sm:text-3xl font-black text-orange-600 font-mono flex items-center justify-center gap-1">
                  <Flame className="w-6 h-6 fill-current" />
                  {maxStreak}
                </div>
                <span className="text-[11px] text-stone-500 font-semibold">In a Row</span>
              </div>
            </div>

            {/* Complete 10-Step Roadmap Summary for the Student */}
            <div className="max-w-xl mx-auto space-y-3 text-left p-5 rounded-2xl bg-[#FAF8F5] border border-[#E5DDD2] text-xs">
              <h3 className="font-extrabold text-stone-900 text-xs uppercase tracking-wider flex items-center gap-2">
                <Milestone className="w-4 h-4 text-[#7C5C3E]" />
                <span>Your 1-Minute {game.title} Cheat Sheet:</span>
              </h3>
              <ul className="space-y-2 text-stone-700 font-medium">
                {game.cheatSheet?.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Next Steps & Action Buttons */}
            <div className="pt-4 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                type="button"
                onClick={handleRestart}
                className="w-full sm:w-auto px-6 py-3 rounded-2xl font-bold text-xs sm:text-sm bg-white border border-stone-300 text-stone-800 hover:bg-stone-50 transition-all cursor-pointer flex items-center justify-center gap-2 shadow-2xs"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Play Again</span>
              </button>

              <button
                type="button"
                onClick={() => setGameMode("lobby")}
                className="w-full sm:w-auto px-6 py-3 rounded-2xl font-bold text-xs sm:text-sm bg-[#F5F1EC] hover:bg-stone-200/60 border border-[#E0D6CA] text-stone-900 transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <Gamepad2 className="w-4 h-4 text-[#7C5C3E]" />
                <span>Choose Another Career</span>
              </button>

              <Link
                to={game.blueprintUrl || `/career-reports?career=${game.id}`}
                className="w-full sm:w-auto px-6 py-3 rounded-2xl font-bold text-xs sm:text-sm bg-[#1C1917] hover:bg-stone-800 text-[#FAF8F5] shadow-sm transition-all hover:scale-103 cursor-pointer flex items-center justify-center gap-2"
              >
                <FileText className="w-4 h-4 text-[#C9A97A]" />
                <span>Read Full Blueprint</span>
              </Link>
            </div>
          </div>
        )}

      </div>
    </main>
  );
}
