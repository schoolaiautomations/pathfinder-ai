import { useState, useEffect, useRef } from "react";
import { Link, useSearchParams } from "react-router-dom";
import {
  ArrowLeft,
  Search,
  BookOpen,
  Filter,
  Compass,
  Sparkles,
  Printer,
  ExternalLink,
  Play,
  Pause,
  Headphones,
  Volume2,
  VolumeX,
} from "lucide-react";
import { DEFAULT_CAREER_OPTIONS } from "@/lib/roadmap-data";
import wabiLogo from "@/lib/wabi_resolutions_logo.jpeg";

// Supabase Storage Bucket audio files mapping
const SUPABASE_AUDIO_BASE_URL = "https://jqerkjewmmpowiwwpifv.supabase.co/storage/v1/object/public/audio-files";

const CAREER_AUDIO_MAP: Record<string, string> = {
  doctor: `${SUPABASE_AUDIO_BASE_URL}/Doctor.mp3`,
  swe: `${SUPABASE_AUDIO_BASE_URL}/software_engineer.mp3`,
  police: `${SUPABASE_AUDIO_BASE_URL}/Police.mp3`,
  teacher: `${SUPABASE_AUDIO_BASE_URL}/Teacher.mp3`,
  agri: `${SUPABASE_AUDIO_BASE_URL}/agricultural_officer.mp3`,
  ias: `${SUPABASE_AUDIO_BASE_URL}/ias.mp3`,
  pilot: `${SUPABASE_AUDIO_BASE_URL}/commercial_pilot.mp3`,
  journalist: `${SUPABASE_AUDIO_BASE_URL}/journalist.mp3`,
  ca: `${SUPABASE_AUDIO_BASE_URL}/ca.mp3`,
  nurse: `${SUPABASE_AUDIO_BASE_URL}/nurse.mp3`,
  engineer: `${SUPABASE_AUDIO_BASE_URL}/engineer.mp3`,
  lawyer: `${SUPABASE_AUDIO_BASE_URL}/lawyer.mp3`,
  bank: `${SUPABASE_AUDIO_BASE_URL}/bank_po.mp3`,
};

interface CareerItem {
  id: string;
  label: string;
  icon: string;
  file: string;
  category: string;
  streamBadge: string;
  description: string;
}

const CATEGORY_MAP: Record<string, { category: string; streamBadge: string; description: string }> = {
  swe: {
    category: "Science (MPC / Engineering)",
    streamBadge: "MPC / B.Tech",
    description: "Software development, web/mobile apps, AI engineering, IIT/NIT entrance exams, tech stack specializations & salaries.",
  },
  engineer: {
    category: "Science (MPC / Engineering)",
    streamBadge: "MPC / Engineering",
    description: "Core engineering disciplines (Mechanical, Civil, Electrical), entrance gateways, lab skills, and public/private opportunities.",
  },
  architect: {
    category: "Science (MPC / Engineering)",
    streamBadge: "MPC / B.Arch",
    description: "Structural design, NATA & JEE Paper 2 requirements, portfolio preparation, and architecture firm progression.",
  },
  scientist: {
    category: "Science (MPC / Engineering)",
    streamBadge: "MPC / BiPC / Research",
    description: "Pure sciences, IISc/IISER/NISER pathways, CSIR/UGC-NET, laboratory fellowships, and global R&D institutions.",
  },
  doctor: {
    category: "Medical & Healthcare (BiPC)",
    streamBadge: "BiPC / MBBS",
    description: "NEET UG preparation, 5.5-year MBBS curriculum, residency, clinical PG specializations, and healthcare leadership.",
  },
  nurse: {
    category: "Medical & Healthcare (BiPC)",
    streamBadge: "BiPC / B.Sc Nursing",
    description: "Patient care diagnostics, hospital departments, government AIIMS exams, and international healthcare demand.",
  },
  pharmacist: {
    category: "Medical & Healthcare (BiPC)",
    streamBadge: "BiPC / MPC / B.Pharm",
    description: "Drug formulation, clinical pharmacology, pharmaceutical industry, quality control, and regulatory affairs.",
  },
  physiotherapy: {
    category: "Medical & Healthcare (BiPC)",
    streamBadge: "BiPC / BPT",
    description: "Musculoskeletal rehabilitation, sports team therapy, hospital clinics, and private physiotherapy practice.",
  },
  agri: {
    category: "Medical & Healthcare (BiPC)",
    streamBadge: "BiPC / B.Sc Agriculture",
    description: "Agronomy, farm tech, government agricultural officer exams, seed research, and rural banking specializations.",
  },
  ca: {
    category: "Commerce & Finance",
    streamBadge: "CEC / MEC / CA",
    description: "ICAI Foundation, Intermediate, Articleship, Auditing, Corporate Taxation, Financial Controller positions.",
  },
  bank: {
    category: "Commerce & Finance",
    streamBadge: "Any Degree / IBPS",
    description: "SBI & IBPS PO examination pattern, retail banking operations, credit management, and promotion ladders.",
  },
  mba: {
    category: "Commerce & Finance",
    streamBadge: "Any Degree / CAT",
    description: "CAT/XAT/GMAT, top IIMs, management consulting, product management, and corporate leadership roles.",
  },
  entrepreneur: {
    category: "Commerce & Finance",
    streamBadge: "Any Degree / Business",
    description: "Venture incubation, business model validation, seed funding, team scaling, and sustainable business management.",
  },
  ias: {
    category: "Civil Services & Defence",
    streamBadge: "Any Degree / UPSC CSE",
    description: "UPSC Civil Services examination, district administration, policy governance, and IAS officer career trajectory.",
  },
  ips: {
    category: "Civil Services & Defence",
    streamBadge: "Any Degree / UPSC CSE",
    description: "Law and order enforcement, police leadership, intelligence agencies (IB/RAW), and state/central police forces.",
  },
  police: {
    category: "Civil Services & Defence",
    streamBadge: "Intermediate / Degree / SI",
    description: "State Police SI & Constable recruitments, physical efficiency benchmarks, investigation methods, and department duty.",
  },
  army: {
    category: "Civil Services & Defence",
    streamBadge: "NDA / CDS / Army",
    description: "National Defence Academy, Combined Defence Services, officer commissioning, soldier recruitment rallies, and gallantry paths.",
  },
  "navy-airforce": {
    category: "Civil Services & Defence",
    streamBadge: "MPC / NDA / AFCAT",
    description: "Naval academy, Indian Air Force flying branch, AFCAT/INET selection, fighter pilot training, and technical logistics.",
  },
  lawyer: {
    category: "Civil Services & Defence",
    streamBadge: "CLAT / Any Degree / LLB",
    description: "CLAT examination, NLUs, corporate law firms, litigation practice in High Courts & Supreme Court, judiciary services.",
  },
  "govt-jobs": {
    category: "Civil Services & Defence",
    streamBadge: "Any Degree / SSC / RRB",
    description: "SSC CGL, Railway RRB, state PSC Group 1 & 2 examinations, job security, and public sector administrative positions.",
  },
  designer: {
    category: "Arts, Design & Media",
    streamBadge: "Any Stream / NID / UCEED",
    description: "Visual identity, UI/UX design, design thinking, NID/NIFT entrance, digital product agency careers.",
  },
  "interior-designer": {
    category: "Arts, Design & Media",
    streamBadge: "Any Stream / Interior Design",
    description: "Spatial aesthetics, architectural drafting, residential & commercial fitouts, material sourcing, and 3D rendering.",
  },
  fashion: {
    category: "Arts, Design & Media",
    streamBadge: "Any Stream / NIFT",
    description: "NIFT entrance, garment construction, fashion merchandising, export houses, and bespoke designer labels.",
  },
  journalist: {
    category: "Arts, Design & Media",
    streamBadge: "Any Stream / Mass Comm",
    description: "Investigative reporting, multimedia broadcasting, digital newsrooms, media ethics, and news editing.",
  },
  teacher: {
    category: "Arts, Design & Media",
    streamBadge: "B.Ed / TET / UGC-NET",
    description: "School teaching, D.Ed/B.Ed certification, State DSC/TET, university professorship, and coaching leadership.",
  },
  pilot: {
    category: "Aviation & Hospitality",
    streamBadge: "MPC / CPL Aviation",
    description: "Commercial Pilot License (CPL), DGCA theory exams, flying hours training, airline cadet programs, and captaincy.",
  },
  "air-hostess": {
    category: "Aviation & Hospitality",
    streamBadge: "Intermediate / Aviation",
    description: "Cabin safety protocols, in-flight passenger hospitality, domestic & international airline recruitment interviews.",
  },
  "hotel-management": {
    category: "Aviation & Hospitality",
    streamBadge: "NCHMCT JEE / Any Stream",
    description: "5-star luxury hotel operations, culinary arts, front office management, and global cruise hospitality.",
  },
  sports: {
    category: "Aviation & Hospitality",
    streamBadge: "Physical Education / Sports",
    description: "National tournaments, SAI coaching centers, sports quota public jobs, fitness training, and athletic management.",
  },
  "not-decided": {
    category: "Self-Discovery & Exploration",
    streamBadge: "All Streams",
    description: "Comprehensive guide for undecided students: how to map natural strengths, evaluate career fit, and pick the right stream.",
  },
  other: {
    category: "Self-Discovery & Exploration",
    streamBadge: "All Streams",
    description: "Holistic self-evaluation guide for alternative, emerging, and cross-disciplinary careers.",
  },
};

const STREAM_CATEGORIES = [
  "All",
  "Science (MPC / Engineering)",
  "Medical & Healthcare (BiPC)",
  "Commerce & Finance",
  "Civil Services & Defence",
  "Arts, Design & Media",
  "Aviation & Hospitality",
] as const;

export default function CareerReportsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  // Build full career items list
  const allCareers: CareerItem[] = DEFAULT_CAREER_OPTIONS.map((opt) => {
    const meta = CATEGORY_MAP[opt.id] || {
      category: "General Exploration",
      streamBadge: "All Streams",
      description: "Comprehensive Four-Circles career blueprint report covering career path, education, salary and backup plans.",
    };
    return {
      id: opt.id,
      label: opt.label,
      icon: opt.icon,
      file: opt.file,
      category: meta.category,
      streamBadge: meta.streamBadge,
      description: meta.description,
    };
  });

  // If a career is selected, show that report. If null, show all cards!
  const [selectedCareer, setSelectedCareer] = useState<CareerItem | null>(() => {
    const param = searchParams.get("career");
    if (param) {
      const match = allCareers.find(
        (c) =>
          c.id.toLowerCase() === param.toLowerCase() ||
          c.label.toLowerCase().replace(/[^a-z0-9]/g, "-") === param.toLowerCase()
      );
      return match || null;
    }
    return null;
  });

  const [isPlaying, setIsPlaying] = useState(false);
  const [audioDuration, setAudioDuration] = useState(0);
  const [audioCurrentTime, setAudioCurrentTime] = useState(0);
  const [isAudioLoading, setIsAudioLoading] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Sync with URL param
  useEffect(() => {
    const param = searchParams.get("career");
    if (param) {
      const match = allCareers.find(
        (c) =>
          c.id.toLowerCase() === param.toLowerCase() ||
          c.label.toLowerCase().replace(/[^a-z0-9]/g, "-") === param.toLowerCase()
      );
      if (match && (!selectedCareer || selectedCareer.id !== match.id)) {
        setSelectedCareer(match);
      }
    } else {
      setSelectedCareer(null);
    }
  }, [searchParams]);

  // Reset audio whenever selected career changes
  useEffect(() => {
    setIsPlaying(false);
    setAudioCurrentTime(0);
    setAudioDuration(0);
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  }, [selectedCareer?.id]);

  const handleOpenCareer = (career: CareerItem) => {
    setSelectedCareer(career);
    setSearchParams({ career: career.id });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBackToCards = () => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
    setIsPlaying(false);
    setSelectedCareer(null);
    setSearchParams({});
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const togglePlayAudio = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      setIsAudioLoading(true);
      audioRef.current.play()
        .then(() => {
          setIsPlaying(true);
          setIsAudioLoading(false);
        })
        .catch((err) => {
          console.error("Playback failed:", err);
          setIsAudioLoading(false);
        });
    }
  };

  const formatTime = (secs: number) => {
    if (isNaN(secs) || secs === 0) return "0:00";
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s < 10 ? "0" : ""}${s}`;
  };

  // Filtered list for the cards view
  const filteredCareers = allCareers.filter((item) => {
    const matchesSearch =
      item.label.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.streamBadge.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" || item.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  // ══════════════════════════════════════════════════════════════════════════
  // VIEW 2: CLEAN REPORT READING VIEW (WITH BACK BUTTON & AUDIO PLAYER)
  // ══════════════════════════════════════════════════════════════════════════
  if (selectedCareer) {
    const audioUrl = CAREER_AUDIO_MAP[selectedCareer.id];

    return (
      <main className="min-h-screen flex flex-col bg-white text-stone-900 font-sans">
        {/* Hidden HTML5 Audio Element */}
        {audioUrl && (
          <audio
            ref={audioRef}
            src={audioUrl}
            preload="metadata"
            onLoadedMetadata={(e) => setAudioDuration(e.currentTarget.duration)}
            onTimeUpdate={(e) => setAudioCurrentTime(e.currentTarget.currentTime)}
            onEnded={() => {
              setIsPlaying(false);
              setAudioCurrentTime(0);
            }}
            onError={() => {
              setIsPlaying(false);
              setIsAudioLoading(false);
            }}
          />
        )}

        {/* Clean Sticky Header with Back button, Career Title & Top Audio Player */}
        <header
          className="sticky top-0 z-50 px-3 sm:px-6 py-2.5 bg-[#FAF8F5] border-b border-[#E0D6CA] flex flex-wrap items-center justify-between gap-2.5 sm:gap-4 shadow-xs"
          style={{ backdropFilter: "blur(12px)" }}
        >
          {/* Left: Back Button */}
          <button
            type="button"
            onClick={handleBackToCards}
            className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-extrabold bg-stone-900 text-white hover:bg-stone-800 transition-all cursor-pointer shadow-xs hover:scale-102 active:scale-98 shrink-0"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Careers</span>
          </button>

          {/* Middle: Career Title Info */}
          <div className="flex items-center gap-2 min-w-0 mr-auto sm:mr-0">
            <span className="text-xl sm:text-2xl shrink-0">{selectedCareer.icon}</span>
            <div className="min-w-0 text-left">
              <h1 className="text-xs sm:text-base font-extrabold text-stone-900 truncate">
                {selectedCareer.label}
              </h1>
              <span className="text-[10px] font-bold text-stone-500 block truncate">
                {selectedCareer.streamBadge} &bull; {selectedCareer.category}
              </span>
            </div>
          </div>

          {/* Right: Audio Player or Unavailable Badge */}
          <div className="flex items-center gap-2 shrink-0">
            {audioUrl ? (
              <div className="flex items-center gap-2 bg-amber-50/90 border border-amber-300/80 rounded-2xl px-3 py-1.5 shadow-2xs">
                <button
                  type="button"
                  onClick={togglePlayAudio}
                  disabled={isAudioLoading}
                  className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-xl font-black text-xs transition-all shadow-xs cursor-pointer ${
                    isPlaying
                      ? "bg-amber-600 text-white animate-pulse"
                      : "bg-amber-900 hover:bg-amber-950 text-white hover:scale-103"
                  }`}
                  title={isPlaying ? "Pause Audio" : "Listen to Career Explanation Audio"}
                >
                  {isPlaying ? (
                    <>
                      <Pause className="w-3.5 h-3.5 fill-current" />
                      <span>Pause Audio</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-3.5 h-3.5 fill-current" />
                      <span>Listen to Career Audio</span>
                    </>
                  )}
                </button>

                {/* Duration / Progress counter */}
                <div className="hidden sm:flex items-center gap-1.5 text-[11px] font-bold text-amber-900 pr-1">
                  <Headphones className="w-3.5 h-3.5 text-amber-700" />
                  <span>
                    {formatTime(audioCurrentTime)} / {formatTime(audioDuration)}
                  </span>
                </div>
              </div>
            ) : (
              <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-stone-100 border border-stone-200 text-stone-400 text-xs font-bold">
                <Headphones className="w-3.5 h-3.5" />
                <span>Audio coming soon</span>
              </div>
            )}
          </div>
        </header>

        {/* Full-Page Clean Report Iframe */}
        <div className="flex-1 w-full bg-stone-50 min-h-[calc(100vh-65px)]">
          <iframe
            src={`/career-format/${selectedCareer.file}`}
            title={`${selectedCareer.label} Report`}
            className="w-full h-full min-h-[calc(100vh-65px)] border-0"
          />
        </div>
      </main>
    );
  }

  // ══════════════════════════════════════════════════════════════════════════
  // VIEW 1: FULL PAGE OF ALL CAREER CARDS
  // ══════════════════════════════════════════════════════════════════════════
  return (
    <main className="min-h-screen font-sans text-stone-900 flex flex-col" style={{ background: "#FAF8F5" }}>
      {/* Navbar */}
      <header
        className="sticky top-0 z-40 border-b border-stone-200/70"
        style={{ background: "rgba(250,248,245,0.95)", backdropFilter: "blur(16px)" }}
      >
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
                All Career Options &amp; Reports
              </span>
            </div>
          </Link>

          <nav className="flex items-center gap-1.5 sm:gap-2">
            <Link
              to="/careers-tree"
              className="hidden sm:inline-flex items-center gap-1 text-xs sm:text-sm font-semibold text-stone-600 hover:text-stone-900 px-3 py-2 rounded-xl hover:bg-stone-100 transition-all"
            >
              Careers Tree
            </Link>
            <Link
              to="/faq"
              className="hidden sm:inline-flex items-center gap-1 text-xs sm:text-sm font-semibold text-stone-600 hover:text-stone-900 px-3 py-2 rounded-xl hover:bg-stone-100 transition-all"
            >
              FAQ
            </Link>
            <Link
              to="/roadmap"
              className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-2 rounded-xl font-bold text-xs sm:text-sm transition-all shadow-sm hover:shadow-md cursor-pointer text-white bg-stone-900 hover:bg-stone-800"
            >
              <Compass className="w-3.5 h-3.5 text-[#C9A97A]" />
              <span>Career Roadmap</span>
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Header */}
      <section className="py-8 sm:py-12 px-4 sm:px-6 border-b border-stone-200/80 bg-[#F5F1EC]">
        <div className="max-w-5xl mx-auto text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-stone-900 text-[#FAF8F5]">
            <Sparkles className="w-3.5 h-3.5 text-[#C9A97A]" />
            Free Public Access &bull; {allCareers.length} Career Options
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
            Explore All Career Options &amp; Reports
          </h1>

          <p className="text-xs sm:text-base text-stone-600 font-medium max-w-2xl mx-auto leading-relaxed">
            Click any career card below to open and read its complete, full-length blueprint report. You can come back anytime with the Back button.
          </p>
        </div>
      </section>

      {/* Main Cards Section */}
      <section className="flex-1 max-w-7xl w-full mx-auto py-6 sm:py-10 px-4 sm:px-6 space-y-6">
        {/* Search & Filter Bar */}
        <div
          className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-white p-3.5 sm:p-4 rounded-2xl border shadow-2xs"
          style={{ borderColor: "#E0D6CA" }}
        >
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search careers (e.g. Doctor, Software Engineer, Pilot, IAS, Police)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm rounded-xl border border-stone-200 bg-stone-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-stone-900 font-medium transition-all"
            />
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <Filter className="w-4 h-4 text-[#7C5C3E]" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="bg-stone-50 border border-stone-200 rounded-xl px-3 py-2 text-xs sm:text-sm font-bold text-stone-900 focus:outline-none focus:ring-2 focus:ring-stone-900 cursor-pointer"
            >
              {STREAM_CATEGORIES.map((cat) => (
                <option key={cat} value={cat}>
                  {cat === "All" ? "All Streams & Categories" : cat}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Stream Category Tabs */}
        <div className="hidden sm:flex items-center gap-1.5 overflow-x-auto pb-1">
          {STREAM_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-xl text-xs font-extrabold whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === cat
                  ? "bg-stone-900 text-white shadow-xs"
                  : "bg-white border border-stone-200 text-stone-600 hover:bg-stone-50 hover:text-stone-900"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between text-xs text-stone-500 font-medium px-1">
          <span>
            Showing <strong className="text-stone-900">{filteredCareers.length}</strong> of {allCareers.length} career options
          </span>
          {(searchTerm || selectedCategory !== "All") && (
            <button
              onClick={() => { setSearchTerm(""); setSelectedCategory("All"); }}
              className="text-[#7C5C3E] font-bold hover:underline"
            >
              Reset filters
            </button>
          )}
        </div>

        {/* Full Grid of Career Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredCareers.map((item) => (
            <div
              key={item.id}
              onClick={() => handleOpenCareer(item)}
              className="group rounded-3xl border bg-white p-5 flex flex-col justify-between shadow-2xs hover:shadow-lg hover:-translate-y-1.5 transition-all cursor-pointer border-[#E5DDD2] hover:border-stone-900"
            >
              <div className="space-y-3">
                {/* Icon & Stream Badge */}
                <div className="flex items-start justify-between gap-2">
                  <div className="w-12 h-12 rounded-2xl bg-[#F5F1EC] border border-[#E0D6CA] flex items-center justify-center text-2xl shrink-0 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-lg text-[10px] font-black uppercase tracking-wider bg-stone-100 text-stone-700 border border-stone-200">
                      {item.streamBadge}
                    </span>
                    {CAREER_AUDIO_MAP[item.id] && (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[9px] font-extrabold uppercase tracking-wider bg-amber-100 text-amber-900 border border-amber-300">
                        <Headphones className="w-2.5 h-2.5 text-amber-700" />
                        <span>Audio</span>
                      </span>
                    )}
                  </div>
                </div>

                {/* Title & Category */}
                <div>
                  <h3 className="text-base font-extrabold text-stone-900 group-hover:text-[#7C5C3E] transition-colors leading-tight">
                    {item.label}
                  </h3>
                  <div className="text-[11px] font-bold text-stone-400 mt-1">
                    {item.category}
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs text-stone-500 font-medium line-clamp-3 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Click to Read Button */}
              <div className="pt-4 mt-4 border-t border-stone-100 flex items-center justify-between text-xs font-bold text-stone-900 group-hover:text-[#7C5C3E] transition-colors">
                <span className="inline-flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-[#C9A97A]" />
                  <span>Read Full Report</span>
                </span>
                <span className="text-stone-400 group-hover:translate-x-1 group-hover:text-stone-900 transition-transform">
                  →
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-stone-200 py-6 px-4 text-center text-xs text-stone-500 bg-white mt-auto">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} Wabi Career Guidance Portal. Free public career reports.</p>
          <div className="flex items-center gap-4 font-bold text-stone-700">
            <Link to="/" className="hover:underline">Home</Link>
            <Link to="/careers-tree" className="hover:underline">Careers Tree</Link>
            <Link to="/faq" className="hover:underline">FAQ</Link>
            <Link to="/counsellor" className="hover:underline">Counsellor Login</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
