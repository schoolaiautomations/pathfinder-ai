import { useState, useEffect, useRef } from "react";
import { Link, useSearchParams, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
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
  Calendar,
  X,
  MessageSquare,
  Lock,
  GraduationCap,
  Building2,
  Clock,
  IndianRupee,
  Zap,
  Phone,
  Gamepad2,
  Home,
} from "lucide-react";
import { DEFAULT_CAREER_OPTIONS } from "@/lib/roadmap-data";
import { BookOnlineCounsellingModal } from "@/components/common/BookOnlineCounsellingModal";
import { StudentAuthGateModal } from "@/components/common/StudentAuthGateModal";
import { AiCareerMentor } from "@/components/common/AiCareerMentor";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import {
  supabase,
  getStudentExplorerProfile,
  signOutStudent,
  StudentExplorerProfile,
} from "@/lib/supabase";
import type { User } from "@supabase/supabase-js";

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
  archaeologist: `${SUPABASE_AUDIO_BASE_URL}/archaeologist.mp3`,
  "environmental-consultant": `${SUPABASE_AUDIO_BASE_URL}/environmental_consultant.mp3`,
  psychologist: `${SUPABASE_AUDIO_BASE_URL}/psychologist.mp3`,
  entrepreneur: `${SUPABASE_AUDIO_BASE_URL}/entrepreneur.mp3`,
  fashion: `${SUPABASE_AUDIO_BASE_URL}/fashion_desinger.mp3`,
  pharmacist: `${SUPABASE_AUDIO_BASE_URL}/pharmacist.mp3`,
  ips: `${SUPABASE_AUDIO_BASE_URL}/ips.mp3`,
  mba: `${SUPABASE_AUDIO_BASE_URL}/mba.mp3`,
  physiotherapy: `${SUPABASE_AUDIO_BASE_URL}/physiotherapist.mp3`,
  "air-hostess": `${SUPABASE_AUDIO_BASE_URL}/air_hostess.mp3`,
  "ai-scientist": `${SUPABASE_AUDIO_BASE_URL}/ai_research_scientist.mp3`,
  "data-scientist": `${SUPABASE_AUDIO_BASE_URL}/data_scientist.mp3`,
  "robotics-engineer": `${SUPABASE_AUDIO_BASE_URL}/robotics_engineer.mp3`,
  "forensic-scientist": `${SUPABASE_AUDIO_BASE_URL}/forensic_scientist.mp3`,
  horticulturist: `${SUPABASE_AUDIO_BASE_URL}/horticulturist.mp3`,
  stenographer: `${SUPABASE_AUDIO_BASE_URL}/stenographer.mp3`,
  designer: `${SUPABASE_AUDIO_BASE_URL}/graphic_designer.mp3`,
  "cyber-security": `${SUPABASE_AUDIO_BASE_URL}/Cyber%20Security%20Specialist.mp3`,
  astrophysicist: `${SUPABASE_AUDIO_BASE_URL}/Astrophysicist.mp3`,
  "income-tax-officer": `${SUPABASE_AUDIO_BASE_URL}/Income%20Tax%20Officer.mp3`,
  "food-safety-officer": `${SUPABASE_AUDIO_BASE_URL}/Food%20Safety%20Officer.mp3`,
  "yoga-doctor": `${SUPABASE_AUDIO_BASE_URL}/Yoga%20%26%20Naturopathy%20Doctor.mp3`,
  "speech-pathologist": `${SUPABASE_AUDIO_BASE_URL}/Speech-Language%20Pathologist.mp3`,
  epigraphist: `${SUPABASE_AUDIO_BASE_URL}/Epigraphist.mp3`,
  geneticist: `${SUPABASE_AUDIO_BASE_URL}/Geneticist.mp3`,
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
  chef: {
    category: "Aviation & Hospitality",
    streamBadge: "Any Stream / Culinary Arts",
    description: "Professional kitchen operations, culinary arts degrees, bakery & pastry specialization, food production, and executive chef progression.",
  },
  psychologist: {
    category: "Arts, Design & Media",
    streamBadge: "Any Stream / B.A / B.Sc Psychology",
    description: "Cognitive science, counselling, school & clinical psychology, research methodology, RCI regulations, and mental wellbeing pathways.",
  },
  "environmental-consultant": {
    category: "Science (MPC / Engineering)",
    streamBadge: "MPC / BiPC / Environmental Science",
    description: "Environmental Impact Assessment (EIA), pollution control, sustainability audits, biodiversity surveys, and environmental compliance roles.",
  },
  archaeologist: {
    category: "Arts, Design & Media",
    streamBadge: "Humanities / B.A Archaeology",
    description: "Historical excavation, material culture analysis, Archaeological Survey of India (ASI) positions, museum curation, and heritage preservation.",
  },
  nutritionist: {
    category: "Medical & Healthcare (BiPC)",
    streamBadge: "BiPC / B.Sc Nutrition & Dietetics",
    description: "Clinical nutrition, hospital dietetics, sports nutrition, community public health programs, and certified dietitian credentials.",
  },
  veterinarian: {
    category: "Medical & Healthcare (BiPC)",
    streamBadge: "BiPC / B.V.Sc & AH",
    description: "Animal healthcare, surgery, veterinary clinics, livestock & poultry farms, wildlife conservation, and government veterinary officer posts.",
  },
  beautician: {
    category: "Arts, Design & Media",
    streamBadge: "Any Stream / Cosmetology",
    description: "Skincare treatments, professional hair styling, bridal & event makeup artistry, salon management, and aesthetic studio ownership.",
  },
  "ai-scientist": {
    category: "Science (MPC / Engineering)",
    streamBadge: "MPC / B.Tech / M.S / Ph.D AI",
    description: "Foundational AI research, neural architecture design, Large Language Models (LLMs), machine learning algorithms, and deep learning R&D laboratories.",
  },
  "data-scientist": {
    category: "Science (MPC / Engineering)",
    streamBadge: "MPC / B.Tech CSE / Data Science",
    description: "Machine learning pipelines, predictive modeling, statistical computing, big data analytics, and decision intelligence across tech, healthcare, and finance.",
  },
  "robotics-engineer": {
    category: "Science (MPC / Engineering)",
    streamBadge: "MPC / B.Tech Robotics / Mechatronics",
    description: "Industrial robot design, autonomous navigation, embedded microcontrollers, computer vision, kinematics, and automation engineering for manufacturing and space.",
  },
  "forensic-scientist": {
    category: "Science (MPC / Engineering)",
    streamBadge: "Science (BiPC / MPC) / B.Sc Forensic Science",
    description: "Crime scene evidence analysis, DNA profiling, forensic toxicology, ballistic analysis, cyber forensics, and central/state forensic science laboratories (CFSL).",
  },
  horticulturist: {
    category: "Medical & Healthcare (BiPC)",
    streamBadge: "BiPC / B.Sc Horticulture",
    description: "Cultivation of high-yield fruits, vegetables, flowers, and medicinal plants, greenhouse technology, landscape architecture, and agri-business enterprises.",
  },
  stenographer: {
    category: "Commerce & Finance",
    streamBadge: "Any Stream + Shorthand Certification",
    description: "High-speed verbatim transcription, court reporting, parliamentary reporting, SSC Stenographer Grade C & D, and secretarial executive roles in government.",
  },
  astrophysicist: {
    category: "Science (MPC / Engineering)",
    streamBadge: "MPC / B.Sc / B.Tech / Ph.D",
    description: "Observational astronomy, theoretical astrophysics, planetary exploration, ISRO/NASA research programs, and deep space data analysis.",
  },
  "cyber-security": {
    category: "Science (MPC / Engineering)",
    streamBadge: "MPC / B.Tech CSE / IT",
    description: "Penetration testing, network security, ethical hacking, digital forensics, threat response, and critical infrastructure defense.",
  },
  "drone-pilot": {
    category: "Aviation & Hospitality",
    streamBadge: "Any Stream / DGCA Certified",
    description: "DGCA Remote Pilot Certification, commercial UAV operations, agricultural spraying, geographic surveying, aerial cinematography, and drone maintenance.",
  },
  epigraphist: {
    category: "Arts, Design & Media",
    streamBadge: "Humanities / B.A History",
    description: "Deciphering ancient stone and copper plate inscriptions, classical linguistics, Archaeological Survey of India (ASI) epigraphy branch, and historical chronology.",
  },
  "fitness-coach": {
    category: "Aviation & Hospitality",
    streamBadge: "Any Stream / B.P.Ed / Certified",
    description: "Exercise physiology, strength conditioning, functional training, gym management, celebrity personal training, and international fitness certifications.",
  },
  "food-safety-officer": {
    category: "Civil Services & Defence",
    streamBadge: "BiPC / B.Sc Food Tech / Chemistry",
    description: "FSSAI compliance enforcement, food adulteration inspection, laboratory testing, state civil supplies regulation, and public health standards.",
  },
  geneticist: {
    category: "Medical & Healthcare (BiPC)",
    streamBadge: "BiPC / B.Sc Genetics / Biotech",
    description: "DNA sequencing, gene editing (CRISPR), hereditary disease research, clinical genetics, agricultural biotechnology, and molecular biology.",
  },
  "income-tax-officer": {
    category: "Civil Services & Defence",
    streamBadge: "Any Degree / SSC CGL",
    description: "Central Board of Direct Taxes (CBDT), direct tax assessment, corporate investigation, anti-evasion raids, and central civil service career security.",
  },
  "railway-jobs": {
    category: "Civil Services & Defence",
    streamBadge: "10th / ITI / Diploma / Any Degree",
    description: "Assistant Loco Pilot (ALP), Station Master, Track Maintainer, Section Engineer, RRB examinations, and lifetime railway welfare benefits.",
  },
  "speech-pathologist": {
    category: "Medical & Healthcare (BiPC)",
    streamBadge: "BiPC / BASLP",
    description: "Speech impediment therapy, hearing rehabilitation, pediatric communication disorders, clinical audiology, and private clinic setup.",
  },
  "yoga-doctor": {
    category: "Medical & Healthcare (BiPC)",
    streamBadge: "BiPC / BNYS (5.5 Years)",
    description: "5.5-year medical degree in naturopathy, yogic therapeutics, lifestyle disease reversal, AYUSH government medical officer roles, and wellness centers.",
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

function MascotBackgroundAnimation({ onFinished }: { onFinished?: () => void }) {
  const [mounted, setMounted] = useState(true);
  const onFinishedRef = useRef(onFinished);
  onFinishedRef.current = onFinished;

  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(false);
      onFinishedRef.current?.();
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!mounted) return null;

  return (
    <div
      className="fixed inset-0 z-40 pointer-events-none select-none flex items-center justify-center"
      style={{
        animation: "mascotPopupAndFade 2000ms cubic-bezier(0.16, 1, 0.3, 1) forwards",
      }}
    >
      <style>{`
        @keyframes mascotPopupAndFade {
          0% {
            opacity: 0;
            transform: scale(0.65) translateY(16px);
          }
          15% {
            opacity: 1;
            transform: scale(1.05) translateY(0);
          }
          25% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
          75% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
          95% {
            opacity: 0;
            transform: scale(0.9) translateY(-10px);
          }
          100% {
            opacity: 0;
            transform: scale(0.85) translateY(-16px);
            visibility: hidden;
          }
        }
      `}</style>
      <div className="w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 flex items-center justify-center">
        <DotLottieReact
          src="/mascot.lottie"
          loop={false}
          autoplay
          className="w-full h-full object-contain drop-shadow-2xl"
        />
      </div>
    </div>
  );
}

export default function CareerReportsPage() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [showBookingPopup, setShowBookingPopup] = useState(false);
  const [popupCancelCount, setPopupCancelCount] = useState(0);
  const popupTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Student Auth Gate State (Google Sign-In & Profile Onboarding)
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [studentProfile, setStudentProfile] = useState<StudentExplorerProfile | null>(null);
  const [isAuthChecking, setIsAuthChecking] = useState(true);

  // Check auth session & profile on mount and on auth state change
  useEffect(() => {
    let mounted = true;

    // 1. Check existing session
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!mounted) return;
      if (session?.user) {
        setCurrentUser(session.user);
        getStudentExplorerProfile({
          email: session.user.email,
          auth_user_id: session.user.id,
        }).then((prof) => {
          if (!mounted) return;
          if (prof) setStudentProfile(prof);
          setIsAuthChecking(false);
        });
      } else {
        // Check if cached student profile exists locally
        getStudentExplorerProfile().then((prof) => {
          if (!mounted) return;
          if (prof) setStudentProfile(prof);
          setIsAuthChecking(false);
        });
      }
    });

    // 2. Listen to auth state changes (e.g. after Google redirect)
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (!mounted) return;
      if (session?.user) {
        setCurrentUser(session.user);
        const prof = await getStudentExplorerProfile({
          email: session.user.email,
          auth_user_id: session.user.id,
        });
        if (mounted) {
          if (prof) setStudentProfile(prof);
          setIsAuthChecking(false);
        }
      } else {
        setCurrentUser(null);
      }
    });

    return () => {
      mounted = false;
      subscription.unsubscribe();
    };
  }, []);

  const isAccessGranted = Boolean(currentUser && studentProfile);

  const scheduleNextPopup = (delayMs: number) => {
    if (popupTimerRef.current) {
      clearTimeout(popupTimerRef.current);
    }
    popupTimerRef.current = setTimeout(() => {
      setShowBookingPopup(true);
    }, delayMs);
  };

  // Initial popup appears after 20 seconds
  useEffect(() => {
    scheduleNextPopup(20000); // 20 seconds
    return () => {
      if (popupTimerRef.current) clearTimeout(popupTimerRef.current);
    };
  }, []);

  const handleDismissBookingPopup = () => {
    setShowBookingPopup(false);
    setPopupCancelCount((prev) => {
      const nextCount = prev + 1;
      // 1st cancel -> show after 1 minute (60,000 ms)
      // 2nd cancel onwards -> show after 2 minutes (120,000 ms)
      const nextDelay = nextCount === 1 ? 60000 : 120000;
      scheduleNextPopup(nextDelay);
      return nextCount;
    });
  };

  const handleOpenBookingModal = () => {
    setShowBookingPopup(false);
    setIsBookingModalOpen(true);
    scheduleNextPopup(120000);
  };

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
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  const handleBackToCards = () => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
    setIsPlaying(false);
    setSelectedCareer(null);
    setSearchParams({});
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  // Mascot Background Animation (shows for 2s on career page background, then disappears)
  const [shouldShowMascot, setShouldShowMascot] = useState(false);

  useEffect(() => {
    if (selectedCareer) {
      // Clean up previous test keys so they never block
      try {
        localStorage.removeItem("wabi_career_mascot_shown");
        localStorage.removeItem("wabi_mascot_shown_once");
        localStorage.removeItem("wabi_mascot_celebration_done");
      } catch {}

      setShouldShowMascot(true);
      window.scrollTo({ top: 0, behavior: "instant" });
    } else {
      setShouldShowMascot(false);
    }
  }, [selectedCareer?.id]);

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

  // Loading state while verifying Google session & student profile
  if (isAuthChecking) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-[#FAF8F5] font-sans">
        <div className="flex flex-col items-center gap-3">
          <div className="w-8 h-8 border-3 border-stone-300 border-t-stone-900 rounded-full animate-spin" />
          <span className="text-xs font-bold text-stone-500">Checking access...</span>
        </div>
      </main>
    );
  }

  // ══════════════════════════════════════════════════════════════════════════
  // VIEW 2: CLEAN REPORT READING VIEW (WITH BACK BUTTON & AUDIO PLAYER)
  // ══════════════════════════════════════════════════════════════════════════
  if (selectedCareer) {
    const audioUrl = CAREER_AUDIO_MAP[selectedCareer.id];

    return (
      <main className={`min-h-screen flex flex-col bg-white text-stone-900 font-sans ${!isAccessGranted ? "filter blur-sm pointer-events-none select-none max-h-screen overflow-hidden" : ""}`}>
        {/* Background Mascot Animation (Plays for 2 seconds on respective career page, non-blocking, no dialog) */}
        {shouldShowMascot && (
          <MascotBackgroundAnimation
            key={selectedCareer.id}
            onFinished={() => setShouldShowMascot(false)}
          />
        )}

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
            <span className="hidden sm:inline">Back to All Careers</span>
            <span className="sm:hidden">Back</span>
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

            {/* Student Profile / Sign Out */}
            {currentUser && studentProfile && (
              <div className="hidden md:flex items-center gap-2 px-2.5 py-1 rounded-xl bg-stone-100 border border-stone-200 text-xs font-bold text-stone-800">
                {currentUser.user_metadata?.avatar_url ? (
                  <img
                    src={currentUser.user_metadata.avatar_url}
                    alt="Avatar"
                    className="w-5 h-5 rounded-full object-cover"
                  />
                ) : null}
                <span className="max-w-[110px] truncate">{studentProfile.student_name}</span>
                <button
                  type="button"
                  onClick={async () => {
                    await signOutStudent();
                    setCurrentUser(null);
                    setStudentProfile(null);
                    navigate("/");
                  }}
                  className="text-stone-400 hover:text-red-600 text-[10px] ml-0.5 underline cursor-pointer"
                  title="Sign Out"
                >
                  Sign out
                </button>
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

        {/* ── Advanced Career Pack · Locked ── */}
        <section className="w-full border-t border-stone-200" style={{ background: "#F5F1EC" }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-8 py-10 sm:py-14">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-8">
              <div className="space-y-2.5">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-200/70 border border-stone-300/60 text-stone-500 text-[10px] font-black uppercase tracking-widest w-fit">
                  <Lock className="w-3 h-3" />
                  Advanced Career Pack · Locked
                </div>
                <h2 className="text-xl sm:text-2xl font-extrabold text-stone-900 leading-tight">
                  Want deeper insights on {selectedCareer.label}?
                </h2>
                <p className="text-xs sm:text-sm text-stone-500 font-medium leading-relaxed max-w-lg">
                  Financial aid, entrance exam tips, top colleges, and daily life details — unlock everything with a 1-on-1 career guidance session.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIsBookingModalOpen(true)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-stone-900 text-[#FAF8F5] hover:bg-stone-800 transition-all cursor-pointer shadow-sm shrink-0 self-start"
              >
                <Calendar className="w-4 h-4 text-[#C9A97A]" />
                Book a Guidance Session
              </button>
            </div>

            {/* Locked Feature Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {[
                {
                  icon: IndianRupee,
                  title: "Financial Aid & Scholarships",
                  subtitle: "Govt schemes, private trusts & waivers",
                  preview: "National Scholarship Portal schemes, state fee reimbursements, AICTE PragatiSaksham grants, corporate sponsorships with deadline calendars and application templates.",
                },
                {
                  icon: Zap,
                  title: "Tips to Crack Entrance Exams",
                  subtitle: "High-yield topics & rank strategy",
                  preview: "Chapter weightage analysis, speed-building mock tests, negative marking elimination tactics, timetable planning, and recommended standard reference books.",
                },
                {
                  icon: Building2,
                  title: "Top Colleges & Institutes",
                  subtitle: "Cut-offs, rankings, ROI & placements",
                  preview: "Top government and accredited private institutes across Andhra Pradesh and India, realistic category cutoffs, hostel facilities, actual ROI and campus hiring records.",
                },
                {
                  icon: Clock,
                  title: `Daily Life of a ${selectedCareer.label}`,
                  subtitle: "Real routine, hours & work culture",
                  preview: "Realistic hour-by-hour day in the life, field or office duties, pressure points, career growth ladder, work-life balance realities and practitioner interview insights.",
                },
              ].map((card) => (
                <div
                  key={card.title}
                  className="relative bg-white/70 border border-stone-200/80 rounded-2xl p-5 space-y-3 overflow-hidden"
                >
                  {/* Card Header */}
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-stone-100 border border-stone-200/60 flex items-center justify-center shrink-0">
                        <card.icon className="w-4.5 h-4.5 text-stone-400" />
                      </div>
                      <div>
                        <h4 className="text-sm font-extrabold text-stone-900 leading-tight">{card.title}</h4>
                        <p className="text-[11px] font-medium text-stone-400 mt-0.5">{card.subtitle}</p>
                      </div>
                    </div>
                    <Lock className="w-4 h-4 text-stone-300 shrink-0 mt-1" />
                  </div>

                  {/* Blurred Preview Text */}
                  <p className="text-xs text-stone-400 leading-relaxed select-none" style={{ filter: "blur(4px)", WebkitUserSelect: "none" }}>
                    {card.preview}
                  </p>

                  {/* Unlock Label */}
                  <div className="flex items-center gap-1.5 text-[11px] font-bold text-stone-400">
                    <Lock className="w-3 h-3 text-[#C9A97A]" />
                    Unlocked in 1-on-1 Guidance Session
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom CTA Bar */}
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-stone-200/80 pt-6">
              <p className="text-xs text-stone-500 font-medium flex items-center gap-1.5">
                <GraduationCap className="w-4 h-4 text-stone-400" />
                Connect with certified counsellors for stream selection, college shortlisting, and entrance roadmap planning.
              </p>
              <button
                type="button"
                onClick={() => setIsBookingModalOpen(true)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold bg-white border border-stone-300 text-stone-900 hover:bg-stone-50 hover:border-stone-400 transition-all cursor-pointer shadow-xs shrink-0"
              >
                <Phone className="w-3.5 h-3.5 text-stone-500" />
                Book Session Now
              </button>
            </div>
          </div>
        </section>

        {/* Book Online Counselling Modal */}
        <BookOnlineCounsellingModal
          isOpen={isBookingModalOpen}
          onClose={() => setIsBookingModalOpen(false)}
          defaultCareer={selectedCareer.label}
        />

        {/* Bottom-Right Floating 1-Minute Booking Callout */}
        {showBookingPopup && (
          <aside
            aria-label="Book Online Counselling Notification"
            className="fixed bottom-20 right-5 z-50 max-w-xs sm:max-w-sm bg-white border border-stone-200/90 rounded-2xl p-4 shadow-2xl animate-in slide-in-from-bottom-5 duration-300 flex items-start gap-3 text-stone-900"
          >
            <div className="w-10 h-10 rounded-xl bg-stone-900 text-[#C9A97A] flex items-center justify-center shrink-0 shadow-xs">
              <Calendar className="w-5 h-5" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-1">
                <span className="text-[10px] font-black uppercase tracking-wider text-[#7C5C3E]">
                  Need Career Guidance?
                </span>
                <button
                  type="button"
                  onClick={handleDismissBookingPopup}
                  className="p-1 rounded-lg text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition-colors cursor-pointer"
                  aria-label="Dismiss popup"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
              <h4 className="text-xs sm:text-sm font-extrabold leading-tight text-stone-900 mt-0.5">
                Book 1-on-1 Online Counselling
              </h4>
              <p className="text-[11px] text-stone-500 font-medium mt-1 leading-snug">
                Speak directly with an expert career counsellor for personalized guidance.
              </p>
              <button
                type="button"
                onClick={handleOpenBookingModal}
                className="mt-2.5 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold bg-stone-900 text-[#FAF8F5] hover:bg-stone-800 transition-all cursor-pointer shadow-xs"
              >
                <Calendar className="w-3.5 h-3.5 text-[#C9A97A]" />
                <span>Book Session Now</span>
              </button>
            </div>
          </aside>
        )}

        {/* Student Auth & Mandatory Onboarding Gate Modal */}
        <StudentAuthGateModal
          isOpen={!isAuthChecking && !isAccessGranted}
          user={currentUser}
          onProfileSaved={(prof) => setStudentProfile(prof)}
        />

        {/* AI Career Mentor Floating Toggle Popup (Bottom Right) */}
        <AiCareerMentor onOpenBooking={handleOpenBookingModal} careerContext={selectedCareer.label} />
      </main>
    );
  }

  // ══════════════════════════════════════════════════════════════════════════
  // VIEW 1: FULL PAGE OF ALL CAREER CARDS
  // ══════════════════════════════════════════════════════════════════════════
  return (
    <main
      className={`min-h-screen font-sans text-stone-900 flex flex-col ${
        !isAccessGranted ? "filter blur-sm pointer-events-none select-none max-h-screen overflow-hidden" : ""
      }`}
      style={{ background: "#FAF8F5" }}
    >
      {/* Navbar */}
      <header
        className="sticky top-0 z-40 border-b border-stone-200/70"
        style={{ background: "rgba(250,248,245,0.95)", backdropFilter: "blur(16px)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 h-16 flex items-center justify-between">
          {/* Left: Home Button */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold bg-white border border-stone-200 text-stone-700 hover:text-stone-900 hover:bg-stone-50 hover:border-stone-300 transition-all cursor-pointer shadow-2xs hover:scale-102 active:scale-98 shrink-0"
          >
            <Home className="w-4 h-4 text-stone-600" />
            <span>Home</span>
          </Link>

          <nav className="flex items-center gap-1.5 sm:gap-2">
            {/* Student Profile / Sign Out */}
            {currentUser && studentProfile && (
              <div className="hidden md:flex items-center gap-2 px-2.5 py-1 rounded-xl bg-stone-100 border border-stone-200 text-xs font-bold text-stone-800">
                {currentUser.user_metadata?.avatar_url ? (
                  <img
                    src={currentUser.user_metadata.avatar_url}
                    alt="Avatar"
                    className="w-5 h-5 rounded-full object-cover"
                  />
                ) : null}
                <span className="max-w-[110px] truncate">{studentProfile.student_name}</span>
                <button
                  type="button"
                  onClick={async () => {
                    await signOutStudent();
                    setCurrentUser(null);
                    setStudentProfile(null);
                    navigate("/");
                  }}
                  className="text-stone-400 hover:text-red-600 text-[10px] ml-0.5 underline cursor-pointer"
                  title="Sign Out"
                >
                  Sign out
                </button>
              </div>
            )}

            <button
              type="button"
              onClick={() => setIsBookingModalOpen(true)}
              className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-2 rounded-xl font-bold text-xs sm:text-sm transition-all shadow-sm hover:shadow-md cursor-pointer hover:-translate-y-0.5 active:translate-y-0 text-white shrink-0"
              style={{ background: "#1C1917", color: "#FAF8F5" }}
            >
              <Calendar className="w-3.5 h-3.5 text-[#C9A97A] shrink-0" />
              <span className="hidden sm:inline">Book Online Counselling</span>
              <span className="sm:hidden">Book Counselling</span>
            </button>
          </nav>
        </div>
      </header>

      {/* Hero Header */}
      <section className="border-b border-stone-200/80 bg-[#F5F1EC]">
        <div className="max-w-7xl w-full mx-auto py-8 sm:py-10 px-4 sm:px-6 flex flex-col md:flex-row md:items-center justify-between gap-6">
          {/* Left-aligned Content */}
          <div className="space-y-3 max-w-2xl text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-stone-900 text-[#FAF8F5]">
              <Sparkles className="w-3.5 h-3.5 text-[#C9A97A]" />
              Free Public Access &bull; {allCareers.length} Career Options
            </div>

            <h1 className="text-2xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
              Explore All Career Options &amp; Reports
            </h1>

            <p className="text-xs sm:text-base text-stone-600 font-medium leading-relaxed">
              Click any career card below to open and read its complete, full-length blueprint report. We listed few here but there are 300+ broad recognizable career options in india. 
            </p>
          </div>

          {/* Top Right: Snail Dance Lottie Animation */}
          <div className="shrink-0 flex items-center justify-start md:justify-end">
            <div className="w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 flex items-center justify-center">
              <DotLottieReact
                src="/snail-dance.lottie"
                loop
                autoplay
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Cards Section */}
      <section className="flex-1 max-w-7xl w-full mx-auto py-6 sm:py-10 px-4 sm:px-6 space-y-6">
        {/* Interactive Career Quest Game Showcase Banner */}
        <div className="rounded-3xl bg-white border border-[#E0D6CA] p-6 sm:p-7 shadow-2xs text-stone-900 flex flex-col md:flex-row md:items-center justify-between gap-6 relative overflow-hidden">
          <div className="space-y-2 max-w-xl z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#F5F1EC] text-stone-800 border border-[#E0D6CA]">
              <Gamepad2 className="w-3.5 h-3.5 text-[#7C5C3E]" />
              <span>Career Roadmap Quiz &bull; For Classes 8th–10th</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black tracking-tight text-stone-900">
              Play the Career Roadmap Quiz!
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 font-medium leading-relaxed">
              Step into a student's shoes: pick your intermediate stream, course duration, school subjects, and skills to build.
            </p>
          </div>

          <div className="flex items-center shrink-0 z-10">
            <Link
              to="/career-game"
              className="px-5 sm:px-6 py-3 rounded-2xl font-black text-xs sm:text-sm bg-[#1C1917] hover:bg-stone-800 text-[#FAF8F5] shadow-sm hover:shadow-md transition-all flex items-center gap-2 cursor-pointer"
            >
              <Gamepad2 className="w-4 h-4 text-[#C9A97A]" />
              <span>Play Career Roadmap Quiz</span>
              <ArrowRight className="w-4 h-4 text-[#C9A97A]" />
            </Link>
          </div>
        </div>

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
                    {["swe", "doctor", "police", "teacher", "ias", "nurse", "lawyer", "bank", "agri", "ca", "engineer", "mba", "air-hostess", "physiotherapy", "psychologist", "pilot", "army", "journalist"].includes(item.id) && (
                      <Link
                        to={`/career-game?track=${item.id}`}
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[9px] font-black uppercase tracking-wider bg-indigo-100 text-indigo-900 border border-indigo-300 hover:bg-indigo-200 transition-colors shadow-2xs"
                        title={`Play ${item.label} Career Roadmap Quiz`}
                      >
                        <Gamepad2 className="w-2.5 h-2.5 text-indigo-700 animate-pulse" />
                        <span>Play Quiz</span>
                      </Link>
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
            <Link to="/faq" className="hover:underline">FAQ</Link>
            <Link to="/counsellor" className="hover:underline">Counsellor Login</Link>
          </div>
        </div>
      </footer>
      {/* Book Online Counselling Modal */}
      <BookOnlineCounsellingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />

      {/* Bottom-Right Floating 1-Minute Booking Callout */}
      {showBookingPopup && (
        <aside
          aria-label="Book Online Counselling Notification"
          className="fixed bottom-20 right-5 z-50 max-w-xs sm:max-w-sm bg-white border border-stone-200/90 rounded-2xl p-4 shadow-2xl animate-in slide-in-from-bottom-5 duration-300 flex items-start gap-3 text-stone-900"
        >
          <div className="w-10 h-10 rounded-xl bg-stone-900 text-[#C9A97A] flex items-center justify-center shrink-0 shadow-xs">
            <Calendar className="w-5 h-5" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between gap-1">
              <span className="text-[10px] font-black uppercase tracking-wider text-[#7C5C3E]">
                Need Career Guidance?
              </span>
              <button
                type="button"
                onClick={handleDismissBookingPopup}
                className="p-1 rounded-lg text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition-colors cursor-pointer"
                aria-label="Dismiss popup"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
            <h4 className="text-xs sm:text-sm font-extrabold leading-tight text-stone-900 mt-0.5">
              Book 1-on-1 Online Counselling
            </h4>
            <p className="text-[11px] text-stone-500 font-medium mt-1 leading-snug">
              Speak directly with an expert career counsellor for personalized guidance.
            </p>
            <button
              type="button"
              onClick={handleOpenBookingModal}
              className="mt-2.5 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold bg-stone-900 text-[#FAF8F5] hover:bg-stone-800 transition-all cursor-pointer shadow-xs"
            >
              <Calendar className="w-3.5 h-3.5 text-[#C9A97A]" />
              <span>Book Session Now</span>
            </button>
          </div>
        </aside>
      )}

      {/* Student Auth & Mandatory Onboarding Gate Modal */}
      <StudentAuthGateModal
        isOpen={!isAuthChecking && !isAccessGranted}
        user={currentUser}
        onProfileSaved={(prof) => setStudentProfile(prof)}
      />

      {/* AI Career Mentor Floating Toggle Popup (Bottom Right) */}
      <AiCareerMentor onOpenBooking={handleOpenBookingModal} careerContext="Explore All Careers" />
    </main>
  );
}
