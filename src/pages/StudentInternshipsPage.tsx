import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Calendar,
  Sparkles,
  CheckCircle2,
  MapPin,
  Building2,
  Users,
  Award,
  Clock,
  ArrowRight,
  ChevronRight,
  Star,
  ShieldCheck,
  HelpCircle,
  FileText,
  Play,
  Compass,
  Brain,
  Stethoscope,
  Scale,
  Code2,
  Calculator,
  HeartPulse,
  Landmark,
  X,
  Phone,
  Video,
  Check,
  GraduationCap,
  Briefcase,
  AlertCircle,
  Menu,
} from "lucide-react";
import wabiLogo from "@/lib/wabi_resolutions_logo.jpeg";
import sravyaVempati from "@/lib/sri_sravya_vempati.jpeg";
import { BookOnlineCounsellingModal } from "@/components/common/BookOnlineCounsellingModal";

export interface InternshipCourse {
  id: string;
  title: string;
  category: "all" | "medical" | "tech" | "finance" | "law-humanities" | "design";
  categoryLabel: string;
  badgeColor: string;
  gradient: string;
  icon: React.ComponentType<{ className?: string }>;
  image: string;
  eligibleStream: string;
  batchSize: string;
  fieldVenue: string;
  fieldHighlights: string;
  mentorName: string;
  mentorRole: string;
  description: string;
  daysSummary: {
    day1to3: string;
    day4: string;
    day5: string;
    day6: string;
    day7: string;
  };
  keyTakeaways: string[];
}

export const INTERNSHIP_COURSES: InternshipCourse[] = [
  {
    id: "doctor",
    title: "Doctor (MBBS & Clinical Care)",
    category: "medical",
    categoryLabel: "Medical & Healthcare",
    badgeColor: "bg-rose-50 text-rose-700 border-rose-200",
    gradient: "from-rose-500 to-red-600",
    icon: Stethoscope,
    image: "/simulation_pics/doctor/Caring Pediatric Checkup.jpg",
    eligibleStream: "Class 9–12 • BiPC / Pre-Med / NEET Aspirants",
    batchSize: "Max 15 Students / Cohort",
    fieldVenue: "Multi-Speciality Hospital & Emergency Trauma Ward",
    fieldHighlights: "OPD consultation dynamics, diagnostic lab tours, sterile Operation Theatre (OT) etiquette, patient triage observation.",
    mentorName: "Dr. K. Srinivas Rao, MD, DNB",
    mentorRole: "Senior Consultant Physician & Medical Superintendent (18+ yrs exp)",
    description: "Step into the scrubs of an active doctor. Understand how diagnostics, patient psychology, and emergency composure work before committing 5.5 years and lakhs to an MBBS degree.",
    daysSummary: {
      day1to3: "Animated Day-in-the-Life video series covering morning OPD consultations, pediatric rounds, ICU emergencies, and hospital shift handovers.",
      day4: "Interactive Clinical Checkpoint Quiz testing symptom identification, diagnostic prioritization, and ethical bedside decision-making.",
      day5: "Live Guided Hospital Field Visit + 30-min private Q&A meetup with Dr. Srinivas Rao on NEET realities, MBBS pressure points, and patient empathy.",
      day6: "Student Reflection Circle where students openly discuss handling patient illness, blood/emergency comfort, and whether medicine is their genuine life's calling.",
      day7: "Official Certificate of Medical Career Immersion ceremony, personalized NEET fitment scorecard, 11th/12th BiPC stream roadmap, and 1-on-1 family counselling session.",
    },
    keyTakeaways: [
      "Understand MBBS workload vs real-life doctor lifestyle",
      "Observe live hospital ward & emergency protocols",
      "Direct 1-on-1 mentorship with a practicing senior physician",
      "Verified Certificate of Medical Career Immersion",
    ],
  },
  {
    id: "lawyer",
    title: "Lawyer (Advocate & Corporate Legal Counsel)",
    category: "law-humanities",
    categoryLabel: "Law & Judiciary",
    badgeColor: "bg-amber-50 text-amber-800 border-amber-200",
    gradient: "from-amber-600 to-amber-700",
    icon: Scale,
    image: "/simulation_pics/lawyer/Advocate in Courtroom.jpg",
    eligibleStream: "Class 9–12 • Any Stream • CLAT / Judiciary Aspirants",
    batchSize: "Max 15 Students / Cohort",
    fieldVenue: "District Court Chambers & High Court Legal Registry",
    fieldHighlights: "Live courtroom argument observation, legal case archives, filing registry, dispute mediation conference desk.",
    mentorName: "Adv. M. Vikramaditya, B.A. LL.B (Hons), LL.M",
    mentorRole: "High Court Advocate & Corporate Dispute Arbitrator (15+ yrs exp)",
    description: "Experience the adrenaline and intellectual discipline of law. Explore legal research, case strategy, cross-examination, and corporate agreements before entering a 5-year law school.",
    daysSummary: {
      day1to3: "Animated video series depicting morning case prep, property dispute consultations, corporate contracts, and courtroom cross-examination craft.",
      day4: "Interactive Legal Reasoning Quiz on evidentiary analysis, legal rights, and contractual edge cases.",
      day5: "Guided Court Complex & Chamber Field Visit + 30-min private meetup with Adv. Vikramaditya on litigation realities vs corporate salary tracks.",
      day6: "Student Moot Reflection Circle discussing public advocacy, moral conflicts, argument temperament, and constitutional curiosity.",
      day7: "Official Certificate of Legal Career Immersion ceremony, CLAT & 5-Year Integrated Law roadmap alignment, college selection advice, and family counselling debrief.",
    },
    keyTakeaways: [
      "Witness real courtroom proceedings and chamber consultation",
      "Understand litigation practice vs corporate law firm lifestyle",
      "30-minute private Q&A with a veteran High Court Advocate",
      "Verified Certificate of Legal Career Immersion",
    ],
  },
  {
    id: "swe",
    title: "Software Engineer (AI, Cloud & Full-Stack)",
    category: "tech",
    categoryLabel: "Engineering & Tech",
    badgeColor: "bg-blue-50 text-blue-700 border-blue-200",
    gradient: "from-blue-600 to-indigo-600",
    icon: Code2,
    image: "/simulation_pics/software_engineer/Write the code.png",
    eligibleStream: "Class 9–12 • MPC / B.Tech CSE / AI Aspirants",
    batchSize: "Max 15 Students / Cohort",
    fieldVenue: "High-Growth Software Tech Park & AI Innovation Lab",
    fieldHighlights: "Agile scrum board in action, cloud server infrastructure, developer workspace ergonomics, war-room bug hunt.",
    mentorName: "R. Karthik, B.Tech (IIT), M.S.",
    mentorRole: "Senior Staff Engineer & Ex-FAANG Architect (12+ yrs exp)",
    description: "Look beyond simple coding syntax. Experience system architecture, daily stand-ups, live feature building, production crash emergencies, and scalable tech leadership.",
    daysSummary: {
      day1to3: "Animated video series following a software engineer through morning stand-ups, system design, deep-focus coding, bug hunts, and production hotfixes.",
      day4: "Interactive Engineering Logic Quiz evaluating problem decomposition, algorithmic thinking, and debugging instincts.",
      day5: "Live Guided Tech Park & Software Lab Visit + 30-min 1-on-1 meetup with Karthik discussing AI disruption, engineering college choices, and real tech salaries.",
      day6: "Student Reflection Circle on screen hours, creative logic problem-solving, and tech domain fit (AI vs Web vs Cyber Security).",
      day7: "Official Certificate of Software Engineering Immersion ceremony, JEE / B.Tech stream roadmap, foundational coding portfolio plan, and family counselling debrief.",
    },
    keyTakeaways: [
      "Understand real day-to-day software engineering beyond coaching hype",
      "Visit an active technology park and software development studio",
      "30-minute 1-on-1 Q&A with an ex-FAANG senior engineer",
      "Verified Certificate of Software Engineering Immersion",
    ],
  },
  {
    id: "ca",
    title: "Chartered Accountant (CA & Corporate Finance)",
    category: "finance",
    categoryLabel: "Commerce & Finance",
    badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
    gradient: "from-emerald-600 to-teal-700",
    icon: Calculator,
    image: "/simulation_pics/chartered_accountant/Audit Day.jpg",
    eligibleStream: "Class 9–12 • MEC / CEC / MPC / CA Foundation Aspirants",
    batchSize: "Max 15 Students / Cohort",
    fieldVenue: "Leading Chartered Accountancy Practice Firm & Corporate Tax Suite",
    fieldHighlights: "Statutory balance sheet audit walkthrough, GST portal filing demo, client reconciliation room, startup valuation desk.",
    mentorName: "CA. P. Haritha, FCA, DISA",
    mentorRole: "Senior Partner, Audit & Corporate Advisory (14+ yrs exp)",
    description: "Experience the analytical depth and ethical authority of India's premier finance qualification. Understand corporate audit rigor, startup equity, taxation, and advisory.",
    daysSummary: {
      day1to3: "Animated video series following a CA through morning tax deadlines, small business ledgers, corporate audits, and startup incorporation.",
      day4: "Financial Compliance Checkpoint Quiz evaluating ledger reconciliation, tax deductions, and ethical judgment.",
      day5: "Live CA Firm Field Visit + 30-min private meetup with CA Haritha on passing CA Foundation/Inter while building resilience and independent practice.",
      day6: "Student Reflection Circle comparing CA vs MBA Finance, numerical appetite, and tax season lifestyle realities.",
      day7: "Official Certificate of Chartered Accountancy Immersion ceremony, CA Foundation study blueprint, commerce stream selection, and family counselling session.",
    },
    keyTakeaways: [
      "Witness real client audits and statutory filing operations",
      "Demystify the CA Foundation / Inter journey with practicing experts",
      "30-minute private Q&A with a Fellow Chartered Accountant (FCA)",
      "Verified Certificate of Chartered Accountancy Immersion",
    ],
  },
  {
    id: "nurse",
    title: "Nurse (Critical Care & Healthcare Leadership)",
    category: "medical",
    categoryLabel: "Medical & Healthcare",
    badgeColor: "bg-teal-50 text-teal-700 border-teal-200",
    gradient: "from-teal-600 to-cyan-700",
    icon: HeartPulse,
    image: "/simulation_pics/nurse/Medicine Time in the Hospital Ward.jpg",
    eligibleStream: "Class 9–12 • BiPC / B.Sc Nursing Aspirants",
    batchSize: "Max 15 Students / Cohort",
    fieldVenue: "NABH Accredited Tertiary Care Hospital & ICU Trauma Wing",
    fieldHighlights: "Patient vitals monitoring station, sterile medicine prep, emergency crash cart demonstration, rehabilitation unit.",
    mentorName: "Sr. G. Mary Margaret, M.Sc Nursing",
    mentorRole: "Nursing Superintendent & Critical Care Specialist (20+ yrs exp)",
    description: "Discover the vital clinical skills and empathy powering modern healthcare. Understand bedside medicine, life-saving ICU response, and high-demand global nursing careers (NCLEX/NHS).",
    daysSummary: {
      day1to3: "Animated video series covering ICU handovers, vitals charting, medication administration, and emergency room coordination.",
      day4: "Clinical Protocols & Patient Care Quiz assessing observational reflexes and empathetic decision-making.",
      day5: "Guided Hospital Ward & ICU Field Visit + 30-min 1-on-1 with Nursing Superintendent Mary on global opportunities and healthcare dignity.",
      day6: "Student Reflection Circle on shift resilience, healthcare compassion, and career mobility in hospitals vs clinical research.",
      day7: "Official Certificate of Clinical Nursing Immersion ceremony, B.Sc Nursing entrance roadmap, global licensure pathway, and family counselling debrief.",
    },
    keyTakeaways: [
      "Observe active hospital wards and critical trauma protocols",
      "Learn about immense domestic and international career demand",
      "30-minute private Q&A with a senior Nursing Superintendent",
      "Verified Certificate of Clinical Nursing Immersion",
    ],
  },
  {
    id: "bank_po",
    title: "Bank PO (Commercial Banking & Financial Services)",
    category: "finance",
    categoryLabel: "Commerce & Finance",
    badgeColor: "bg-indigo-50 text-indigo-700 border-indigo-200",
    gradient: "from-indigo-600 to-purple-700",
    icon: Landmark,
    image: "/simulation_pics/bank_po/Bank Opening at 9 AM.jpg",
    eligibleStream: "Class 9–12 & College • Any Stream • Banking Aspirants",
    batchSize: "Max 15 Students / Cohort",
    fieldVenue: "Leading Commercial Bank Main Branch & Regional Hub",
    fieldHighlights: "Branch cash vault and security tour, loan appraisal desk, retail credit review, customer service dynamics.",
    mentorName: "S. Venkat Ramana, MBA (Finance)",
    mentorRole: "Assistant General Manager (AGM) / Ex-Chief Manager (16+ yrs exp)",
    description: "Experience the engine of India's economic growth. Discover how commercial bankers evaluate loans, serve retail and rural customers, manage branches, and build lifelong financial security.",
    daysSummary: {
      day1to3: "Animated video series showing morning 9 AM bank opening, senior citizen pension help, SME business loans, and evening ledger reconciliation.",
      day4: "Banking Operations & Credit Risk Checkpoint Quiz on loans, interest models, and digital banking fraud detection.",
      day5: "Guided Commercial Bank Branch Tour + 30-min meetup with AGM Venkat Ramana on IBPS/SBI PO competition and promotions to executive cadre.",
      day6: "Student Reflection Circle on public service patience, job security, and financial career satisfaction.",
      day7: "Official Certificate of Banking & Financial Services Immersion ceremony, degree stream selection (B.Com/BBA/B.Sc), bank exam syllabus strategy, and family counselling debrief.",
    },
    keyTakeaways: [
      "Behind-the-counter access to commercial bank operations",
      "Understand public sector job security vs private wealth management",
      "30-minute private Q&A with a veteran Bank Executive",
      "Verified Certificate of Banking Career Immersion",
    ],
  },
  {
    id: "architect",
    title: "Architect (Design, 3D Modeling & Construction)",
    category: "design",
    categoryLabel: "Architecture & Design",
    badgeColor: "bg-sky-50 text-sky-700 border-sky-200",
    gradient: "from-sky-600 to-blue-700",
    icon: Compass,
    image: "/simulation_pics/architect/Client Presentation.jpg",
    eligibleStream: "Class 9–12 • MPC • NATA / JEE Paper 2 / B.Arch Aspirants",
    batchSize: "Max 15 Students / Cohort",
    fieldVenue: "Architectural Design Studio & Active Construction Project Site",
    fieldHighlights: "Blueprints and material library exploration, 3D BIM modeling suite, live foundation and structural site walk.",
    mentorName: "Ar. D. Sneha Reddy, B.Arch, M.Des (CEPT)",
    mentorRole: "Principal Registered Architect & Sustainable Design Consultant (13+ yrs exp)",
    description: "Translate imagination into physical living spaces. Understand site sun/wind analysis, family dream home design, 3D digital modeling, and structural coordination with engineers.",
    daysSummary: {
      day1to3: "Animated video series detailing morning studio drafting, client plot visits, 3D computer modeling, and foundation site inspections.",
      day4: "Spatial Reasoning & Blueprint Comprehension Quiz on room flow, natural ventilation, and material choices.",
      day5: "Live Architectural Studio & Construction Site Walkthrough + 30-min 1-on-1 with Ar. Sneha on NATA prep, design colleges, and firm ownership.",
      day6: "Student Reflection Circle on drawing interest, contractor coordination, and sustainable green design enthusiasm.",
      day7: "Official Certificate of Architecture & Spatial Design Immersion ceremony, NATA/JEE Paper 2 preparation blueprint, portfolio roadmap, and family counselling debrief.",
    },
    keyTakeaways: [
      "Tour an active design studio and live construction site with safety gear",
      "Understand 5-year B.Arch journey and independent practice economics",
      "30-minute private Q&A with a Council of Architecture (COA) architect",
      "Verified Certificate of Architecture Career Immersion",
    ],
  },
  {
    id: "psychologist",
    title: "Psychologist (Counseling & Behavioral Health)",
    category: "law-humanities",
    categoryLabel: "Psychology & Behavioral Health",
    badgeColor: "bg-purple-50 text-purple-700 border-purple-200",
    gradient: "from-purple-600 to-violet-700",
    icon: Brain,
    image: sravyaVempati,
    eligibleStream: "Class 9–12 • Any Stream • BA / B.Sc Psychology Aspirants",
    batchSize: "Max 15 Students / Cohort",
    fieldVenue: "Adolescent Counseling Center & Psychological Assessment Clinic",
    fieldHighlights: "Therapy room acoustic design, psychometric assessment battery, stress-management biofeedback setup, case analysis framework.",
    mentorName: "Sri Sravya Vempati, M.Sc Psychology",
    mentorRole: "Counseling Psychologist & Mental Health Educator (Certified in Stress Counseling)",
    description: "Understand the human mind and emotions. Explore counseling methods, psychological assessment, behavioral therapy, and mental wellness without confusing it with psychiatry.",
    daysSummary: {
      day1to3: "Animated video series depicting active listening skills, school anxiety counseling, emotional regulation cases, and ethical confidentiality.",
      day4: "Empathetic Communication & Psychology Concept Quiz assessing diagnostic listening and non-judgmental response reflexes.",
      day5: "Guided Psychology Clinic Visit + 30-min 1-on-1 with Sri Sravya on Clinical vs Counseling vs Organizational roles and master's licensing paths.",
      day6: "Student Reflection Circle on emotional boundaries, empathy without emotional burnout, and listening patience.",
      day7: "Official Certificate of Psychology & Behavioral Science Immersion ceremony, undergraduate degree mapping (BA vs B.Sc Psychology), university selection, and family counselling debrief.",
    },
    keyTakeaways: [
      "Visit an authentic psychological counseling center and testing lab",
      "Distinguish Counseling vs Clinical Psychology vs Psychiatry clearly",
      "30-minute private Q&A with a practicing Counseling Psychologist",
      "Verified Certificate of Psychology Career Immersion",
    ],
  },
];

export default function StudentInternshipsPage() {
  const [selectedCategory, setSelectedCategory] = useState<
    "all" | "medical" | "tech" | "finance" | "law-humanities" | "design"
  >("all");
  const [selectedCourse, setSelectedCourse] = useState<InternshipCourse | null>(null);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isEnrollModalOpen, setIsEnrollModalOpen] = useState(false);
  const [enrollCourse, setEnrollCourse] = useState<InternshipCourse | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeModalTab, setActiveModalTab] = useState<
    "curriculum" | "field-visit" | "mentor" | "inclusions"
  >("curriculum");

  const navigate = useNavigate();

  // Enrollment Form State
  const [studentName, setStudentName] = useState("");
  const [parentPhone, setParentPhone] = useState("");
  const [studentGrade, setStudentGrade] = useState("Class 10");
  const [city, setCity] = useState("");
  const [enrolledSuccess, setEnrolledSuccess] = useState(false);

  const filteredCourses =
    selectedCategory === "all"
      ? INTERNSHIP_COURSES
      : INTERNSHIP_COURSES.filter((c) => c.category === selectedCategory);

  const handleOpenEnroll = (course: InternshipCourse) => {
    setEnrollCourse(course);
    setEnrolledSuccess(false);
    setIsEnrollModalOpen(true);
  };

  const handleEnrollSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEnrolledSuccess(true);
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-stone-900 font-sans antialiased flex flex-col selection:bg-emerald-100 selection:text-emerald-900">
      {/* ─── TOP HEADER NAVBAR ────────────────────────────────────────────── */}
      <header
        className="sticky top-0 z-50 border-b border-stone-200/80 bg-[#FAF8F5]/90 backdrop-blur-md"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2.5 sm:gap-3 group min-w-0">
            <img
              src={wabiLogo}
              alt="Wabi"
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover shadow-xs shrink-0"
            />
            <div className="min-w-0">
              <span className="font-normal uppercase tracking-wider text-xs sm:text-base text-stone-900 block leading-none truncate">
                Wabi Career Guidance
              </span>
              <span className="text-[9px] sm:text-[10px] font-semibold text-stone-400 tracking-widest uppercase block mt-0.5 truncate">
                Career Counselling & Internships
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1.5 lg:gap-2">
            <Link
              to="/"
              className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-stone-600 hover:text-stone-900 px-3 py-2 rounded-xl hover:bg-stone-100 transition-all"
            >
              Home
            </Link>
            <Link
              to="/career-reports"
              className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-stone-600 hover:text-stone-900 px-3 py-2 rounded-xl hover:bg-stone-100 transition-all"
            >
              Explore Careers
            </Link>
            <Link
              to="/student-internships"
              className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-stone-600 hover:text-stone-900 px-3 py-2 rounded-xl hover:bg-stone-100 transition-all"
            >
              Student Internships
            </Link>
            <Link
              to="/career-mentors"
              className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-stone-600 hover:text-stone-900 px-3 py-2 rounded-xl hover:bg-stone-100 transition-all"
            >
              Career Mentors
            </Link>
            <Link
              to="/faq"
              className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-stone-600 hover:text-stone-900 px-3 py-2 rounded-xl hover:bg-stone-100 transition-all"
            >
              FAQ
            </Link>
            <button
              type="button"
              onClick={() => setIsBookingModalOpen(true)}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl font-bold text-xs sm:text-sm transition-all shadow-xs hover:shadow-md cursor-pointer hover:-translate-y-0.5 active:translate-y-0 text-white bg-[#1C1917]"
            >
              <Calendar className="w-3.5 h-3.5 text-[#C9A97A]" />
              Book Counselling
            </button>
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl border border-stone-200 bg-white text-stone-700 hover:text-stone-950 shadow-2xs cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-stone-200 px-4 py-3 space-y-2 bg-[#FAF8F5]/98 backdrop-blur-lg">
            <Link
              to="/student-internships"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between p-3 rounded-xl font-bold text-xs bg-white border border-stone-200 text-stone-800"
            >
              <span>Student Internships</span>
              <ChevronRight className="w-4 h-4 opacity-50" />
            </Link>
            <Link
              to="/career-reports"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between p-3 rounded-xl font-bold text-xs bg-white border border-stone-200 text-stone-800"
            >
              <span>Explore Careers</span>
              <ChevronRight className="w-4 h-4 opacity-50" />
            </Link>
            <Link
              to="/career-mentors"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between p-3 rounded-xl font-bold text-xs bg-white border border-stone-200 text-stone-800"
            >
              <span>Career Mentors</span>
              <ChevronRight className="w-4 h-4 opacity-50" />
            </Link>
            <Link
              to="/faq"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between p-3 rounded-xl font-bold text-xs bg-white border border-stone-200 text-stone-800"
            >
              <span>FAQ</span>
              <ChevronRight className="w-4 h-4 opacity-50" />
            </Link>
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                setIsBookingModalOpen(true);
              }}
              className="w-full flex items-center justify-between p-3 rounded-xl font-bold text-xs bg-[#1C1917] text-[#FAF8F5]"
            >
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-[#C9A97A]" />
                Book Online Counselling
              </span>
              <ChevronRight className="w-4 h-4 opacity-50" />
            </button>
          </div>
        )}
      </header>

      {/* ─── CAREER COURSE DIRECTORY ───────────────────────────────────────── */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 bg-emerald-100/70 px-2.5 py-1 rounded-md mb-2">
                <Briefcase className="w-3.5 h-3.5 text-emerald-700" />
                <span>Available Career Tracks</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-stone-900">
                Choose a 7-Day Immersion Internship
              </h2>
              <p className="text-xs sm:text-sm text-stone-600 font-medium mt-1">
                Strictly capped at 15 students per batch for direct mentor attention and safe, chaperoned field visits.
              </p>
            </div>

            {/* Category Filter Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none">
              {[
                { id: "all", label: "All Careers (8)" },
                { id: "medical", label: "Medical (2)" },
                { id: "tech", label: "Tech / AI (1)" },
                { id: "finance", label: "Finance / CA (2)" },
                { id: "law-humanities", label: "Law & Psychology (2)" },
                { id: "design", label: "Architecture (1)" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setSelectedCategory(tab.id as any)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                    selectedCategory === tab.id
                      ? "bg-stone-900 text-white shadow-xs"
                      : "bg-white border border-stone-200 text-stone-600 hover:text-stone-900 hover:bg-stone-50"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {filteredCourses.map((course) => {
              const IconComp = course.icon;
              return (
                <div
                  key={course.id}
                  className="bg-white border border-stone-200/90 rounded-2xl overflow-hidden shadow-2xs hover:shadow-lg transition-all flex flex-col group hover:-translate-y-1 duration-200"
                >
                  {/* Card Thumbnail */}
                  <div className="relative h-44 sm:h-48 bg-stone-100 overflow-hidden">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        // fallback to a clean gradient if local file has unexpected mime
                        e.currentTarget.style.display = "none";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-stone-900/20 to-transparent" />

                    {/* Title & Icon on Thumbnail Base */}
                    <div className="absolute bottom-3 left-3 right-3 text-white">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-lg bg-white/20 backdrop-blur-md flex items-center justify-center shrink-0">
                          <IconComp className="w-4 h-4 text-white" />
                        </div>
                        <h3 className="text-sm font-black leading-tight drop-shadow-xs truncate">
                          {course.title}
                        </h3>
                      </div>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-4 flex-1 flex flex-col justify-between space-y-3.5">
                    <div className="space-y-2">
                      <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed font-medium">
                        {course.description}
                      </p>

                      {/* Stream Eligibility */}
                      <div className="text-[11px] font-bold text-stone-500 bg-stone-50 border border-stone-200/80 px-2.5 py-1.5 rounded-lg flex items-center gap-1.5">
                        <GraduationCap className="w-3.5 h-3.5 text-stone-700 shrink-0" />
                        <span className="truncate">{course.eligibleStream}</span>
                      </div>

                      {/* Day 5 Field Visit Highlight Box */}
                      <div className="text-[11px] font-medium text-emerald-950 bg-emerald-50/80 border border-emerald-200/80 p-2.5 rounded-xl space-y-1">
                        <div className="font-extrabold flex items-center gap-1 text-emerald-800">
                          <MapPin className="w-3 h-3 text-emerald-600 shrink-0" />
                          <span>Day 5 Field Visit Venue:</span>
                        </div>
                        <p className="text-[11px] text-emerald-900 leading-snug">
                          {course.fieldVenue}
                        </p>
                      </div>

                      {/* Mentor Badge */}
                      <div className="text-[11px] text-stone-600 bg-stone-50 p-2 rounded-lg flex items-start gap-1.5">
                        <Users className="w-3.5 h-3.5 text-stone-500 shrink-0 mt-0.5" />
                        <div className="min-w-0">
                          <span className="font-bold text-stone-800 block truncate">
                            {course.mentorName}
                          </span>
                          <span className="text-[10px] text-stone-500 block truncate">
                            {course.mentorRole}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="pt-2 border-t border-stone-100 flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => {
                          setSelectedCourse(course);
                          setActiveModalTab("curriculum");
                        }}
                        className="flex-1 py-2 rounded-xl text-xs font-bold text-stone-700 bg-stone-100 hover:bg-stone-200/80 transition-colors cursor-pointer text-center"
                      >
                        View 7-Day Plan
                      </button>
                      <button
                        type="button"
                        onClick={() => handleOpenEnroll(course)}
                        className="flex-1 py-2 rounded-xl text-xs font-black text-white bg-emerald-700 hover:bg-emerald-600 transition-colors shadow-2xs hover:shadow-xs cursor-pointer text-center flex items-center justify-center gap-1"
                      >
                        <span>Enroll Now</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>


      {/* ─── PARENT & STUDENT FAQ SECTION ─────────────────────────────────── */}
      <section className="py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 space-y-6">
          <div className="text-center space-y-2">
            <span className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-emerald-700 bg-emerald-100/70 px-2.5 py-1 rounded-md">
              Frequently Asked Questions
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-stone-900">
              Questions Parents Ask Us
            </h2>
          </div>

          <div className="space-y-3">
            {[
              {
                q: "What age or grade is this 7-day internship designed for?",
                a: "It is specifically structured for students in Class 9, 10, 11, and 12, as well as early degree college students who want to test their career interest before committing to specific streams (MPC, BiPC, MEC) or entrance exams (NEET, JEE, CLAT, CA Foundation).",
              },
              {
                q: "Can parents accompany students during the Day 5 physical field visit?",
                a: "Yes! Parents are encouraged to accompany students or join the designated chaperone group. All field visit locations adhere to strict safety, institutional clearance, and child safeguarding standards.",
              },
              {
                q: "How does the 30-minute 1-on-1 practitioner meet work?",
                a: "On Day 5 during the field visit, students sit with the senior professional (Doctor, Advocate, Tech Lead, CA, Architect, etc.). The mentor shares how they built their career, lifestyle truths, earnings, and answers every question the student has prepared in their workbook.",
              },
              {
                q: "What happens on Day 7 when the certificate is awarded?",
                a: "On the final day, the student receives their Official Immersion Certificate. Alongside the ceremony, our certified career counselling team conducts a personalized fitment analysis based on quiz scores, reflection notes, and enthusiasm, followed by a 1-on-1 parent alignment session to chart the precise 11th/12th stream and entrance exam roadmap.",
              },
              {
                q: "Can a student enroll in more than one career internship?",
                a: "Absolutely. Many students who are split between two options (e.g., Doctor vs Software Engineer, or Law vs Chartered Accountancy) take two tracks across consecutive cohorts to compare their feelings.",
              },
            ].map((faq, idx) => (
              <details
                key={idx}
                className="group bg-white rounded-2xl border border-stone-200/90 p-4 sm:p-5 shadow-2xs open:border-emerald-300 transition-all"
              >
                <summary className="flex items-center justify-between font-bold text-xs sm:text-sm text-stone-900 cursor-pointer list-none">
                  <span>{faq.q}</span>
                  <ChevronRight className="w-4 h-4 text-stone-400 group-open:rotate-90 transition-transform shrink-0 ml-2" />
                </summary>
                <p className="text-xs text-stone-600 font-medium leading-relaxed pt-3 border-t border-stone-100 mt-3">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FOOTER CTA ───────────────────────────────────────────────────── */}
      <footer className="mt-auto bg-[#1C1917] text-[#FAF8F5] py-10 sm:py-12 border-t border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <div className="text-lg font-black tracking-wide">
              Wabi Experiential Student Internships
            </div>
            <p className="text-xs text-stone-400 max-w-md">
              Helping Indian students and parents make confident, pressure-free career decisions through immersive real-world practice.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setIsBookingModalOpen(true)}
              className="px-5 py-2.5 rounded-xl font-bold text-xs bg-emerald-600 hover:bg-emerald-500 text-white transition-all shadow-xs cursor-pointer"
            >
              Talk to a Career Counsellor
            </button>
            <Link
              to="/career-reports"
              className="px-4 py-2.5 rounded-xl font-bold text-xs bg-stone-800 hover:bg-stone-700 text-stone-200 transition-all border border-stone-700"
            >
              Explore 30+ Roadmaps
            </Link>
          </div>
        </div>
      </footer>

      {/* ─── DETAILED COURSE MODAL (DAY-BY-DAY BREAKDOWN) ─────────────────── */}
      {selectedCourse && (
        <div className="fixed inset-0 z-50 bg-stone-900/60 backdrop-blur-xs flex items-center justify-center p-2 sm:p-4 animate-in fade-in duration-200">
          <div className="w-full max-w-2xl bg-[#FAF8F5] border border-stone-200 rounded-3xl shadow-2xl flex flex-col max-h-[92vh] overflow-hidden text-stone-900">
            {/* Modal Top Bar */}
            <div className="bg-[#F4EFEA] border-b border-stone-200/90 px-4 py-3 sm:px-6 sm:py-4 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-3">
                <div
                  className={`w-9 h-9 rounded-xl flex items-center justify-center text-white bg-gradient-to-br ${selectedCourse.gradient} shadow-2xs`}
                >
                  {React.createElement(selectedCourse.icon, { className: "w-5 h-5" })}
                </div>
                <div>
                  <div className="text-[10px] font-black uppercase tracking-wider text-emerald-800">
                    7-Day Experiential Course
                  </div>
                  <h3 className="text-sm sm:text-base font-black text-stone-900 leading-tight">
                    {selectedCourse.title}
                  </h3>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setSelectedCourse(null)}
                className="w-7 h-7 rounded-full bg-white hover:bg-rose-50 hover:text-rose-600 border border-stone-200 text-xs flex items-center justify-center text-stone-600 shadow-2xs cursor-pointer transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Tabs */}
            <div className="flex items-center gap-1 px-4 sm:px-6 pt-3 border-b border-stone-200 bg-white shrink-0 overflow-x-auto scrollbar-none">
              {[
                { id: "curriculum", label: "7-Day Syllabus" },
                { id: "field-visit", label: "Day 5 Field Visit" },
                { id: "mentor", label: "1-on-1 Mentor" },
                { id: "inclusions", label: "What's Included" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveModalTab(tab.id as any)}
                  className={`px-3 py-2 text-xs font-bold border-b-2 transition-all cursor-pointer whitespace-nowrap ${
                    activeModalTab === tab.id
                      ? "border-emerald-600 text-emerald-800"
                      : "border-transparent text-stone-500 hover:text-stone-900"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Modal Body */}
            <div className="p-4 sm:p-6 overflow-y-auto space-y-4 text-xs font-medium text-stone-700 leading-relaxed">
              {activeModalTab === "curriculum" && (
                <div className="space-y-3">
                  <div className="bg-white border border-stone-200 p-3.5 rounded-xl space-y-1">
                    <span className="text-[10px] font-black uppercase text-emerald-700">
                      Days 1–3: Video Walkthrough
                    </span>
                    <p className="text-stone-700 font-medium">
                      {selectedCourse.daysSummary.day1to3}
                    </p>
                  </div>

                  <div className="bg-white border border-stone-200 p-3.5 rounded-xl space-y-1">
                    <span className="text-[10px] font-black uppercase text-amber-700">
                      Day 4: Knowledge Quiz
                    </span>
                    <p className="text-stone-700 font-medium">
                      {selectedCourse.daysSummary.day4}
                    </p>
                  </div>

                  <div className="bg-emerald-50/70 border border-emerald-300 p-3.5 rounded-xl space-y-1">
                    <span className="text-[10px] font-black uppercase text-emerald-800">
                      Day 5: On-Site Visit & 30-Min Meetup
                    </span>
                    <p className="text-emerald-950 font-semibold">
                      {selectedCourse.daysSummary.day5}
                    </p>
                  </div>

                  <div className="bg-white border border-stone-200 p-3.5 rounded-xl space-y-1">
                    <span className="text-[10px] font-black uppercase text-blue-700">
                      Day 6: Student Reflection Circle
                    </span>
                    <p className="text-stone-700 font-medium">
                      {selectedCourse.daysSummary.day6}
                    </p>
                  </div>

                  <div className="bg-purple-50/50 border border-purple-200 p-3.5 rounded-xl space-y-1">
                    <span className="text-[10px] font-black uppercase text-purple-700">
                      Day 7: Certificate, Roadmap & Family Counselling
                    </span>
                    <p className="text-stone-700 font-medium">
                      {selectedCourse.daysSummary.day7}
                    </p>
                  </div>
                </div>
              )}

              {activeModalTab === "field-visit" && (
                <div className="space-y-3">
                  <div className="bg-white border border-stone-200 p-4 rounded-xl space-y-2">
                    <div className="flex items-center gap-2 font-bold text-stone-900 text-sm">
                      <Building2 className="w-4 h-4 text-emerald-600" />
                      <span>Field Visit Venue:</span>
                    </div>
                    <p className="text-xs text-stone-700 font-semibold">
                      {selectedCourse.fieldVenue}
                    </p>
                  </div>

                  <div className="bg-white border border-stone-200 p-4 rounded-xl space-y-2">
                    <div className="flex items-center gap-2 font-bold text-stone-900 text-sm">
                      <MapPin className="w-4 h-4 text-amber-600" />
                      <span>On-Site Experience Highlights:</span>
                    </div>
                    <p className="text-xs text-stone-600 font-medium leading-relaxed">
                      {selectedCourse.fieldHighlights}
                    </p>
                  </div>

                  <div className="bg-amber-50/70 border border-amber-200 p-3 rounded-xl flex items-start gap-2 text-[11px] text-amber-900 font-medium">
                    <ShieldCheck className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                    <span>
                      <strong>Chaperone & Safety Policy:</strong> Transportation arrangements, institutional permissions, and security badges are fully managed by Wabi Resolutions. Parents are welcome to join.
                    </span>
                  </div>
                </div>
              )}

              {activeModalTab === "mentor" && (
                <div className="bg-white border border-stone-200 p-4 rounded-xl space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-lg">
                      {selectedCourse.mentorName.charAt(0)}
                    </div>
                    <div>
                      <h4 className="text-sm font-black text-stone-900">
                        {selectedCourse.mentorName}
                      </h4>
                      <p className="text-[11px] text-stone-500 font-medium">
                        {selectedCourse.mentorRole}
                      </p>
                    </div>
                  </div>

                  <div className="border-t border-stone-100 pt-3 space-y-2">
                    <div className="text-[11px] font-bold text-stone-800">
                      30-Minute Dedicated 1-on-1 Q&A Scope:
                    </div>
                    <ul className="space-y-1.5 text-stone-600">
                      <li className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span>The real career journey from school to professional stability.</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Work-life balance realities.</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Honest answers to the student's personal fears and doubts.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              )}

              {activeModalTab === "inclusions" && (
                <div className="space-y-2">
                  {[
                    "Access to full animated day-in-the-life video series till the course completion",
                    "Physical institutional visitor pass for Day 5 field visit",
                    "Dedicated 30-minute 1-on-1 mentorship session with senior professional",
                    "Printed Career Roadmap Card",
                    "Official Certificate of Career Immersion",
                  ].map((inc, i) => (
                    <div
                      key={i}
                      className="bg-white border border-stone-200 p-2.5 rounded-xl flex items-center gap-2 text-xs font-semibold text-stone-800"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{inc}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Modal Bottom CTA */}
            <div className="bg-[#F4EFEA] border-t border-stone-200 p-3 sm:p-4 flex items-center justify-between shrink-0">
              <div className="text-[11px] text-stone-600 font-medium">
                Cohort size: <strong>{selectedCourse.batchSize}</strong>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => {
                    const c = selectedCourse;
                    setSelectedCourse(null);
                    navigate(`/student-internship/${c.id}`);
                  }}
                  className="px-3 py-2 rounded-xl text-xs font-bold text-emerald-900 bg-emerald-100 hover:bg-emerald-200 border border-emerald-300 transition-colors shadow-2xs cursor-pointer flex items-center gap-1"
                >
                  <span className="px-1 py-0.2 rounded bg-emerald-700 text-white text-[9px] font-black uppercase">Free</span>
                  <span>Preview</span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    const c = selectedCourse;
                    setSelectedCourse(null);
                    handleOpenEnroll(c);
                  }}
                  className="px-4 py-2 rounded-xl text-xs font-black text-white bg-emerald-700 hover:bg-emerald-600 transition-colors shadow-xs cursor-pointer flex items-center gap-1.5"
                >
                  <span>Reserve Seat in Next Batch</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ─── ENROLLMENT / SEAT RESERVATION MODAL ───────────────────────────── */}
      {isEnrollModalOpen && enrollCourse && (
        <div className="fixed inset-0 z-50 bg-stone-900/60 backdrop-blur-xs flex items-center justify-center p-2.5 sm:p-4 overflow-y-auto animate-in fade-in duration-200">
          <div className="w-full max-w-sm sm:max-w-md bg-[#FAF8F5] border border-stone-200 rounded-2xl sm:rounded-3xl shadow-2xl p-4 sm:p-5 space-y-2.5 relative text-stone-900 max-h-[92vh] overflow-y-auto">
            <button
              type="button"
              onClick={() => setIsEnrollModalOpen(false)}
              className="absolute top-3.5 right-3.5 w-6 h-6 rounded-full bg-white hover:bg-rose-50 hover:text-rose-600 border border-stone-200 text-xs flex items-center justify-center text-stone-500 cursor-pointer shadow-2xs"
            >
              <X className="w-3.5 h-3.5" />
            </button>

            {!enrolledSuccess ? (
              <form onSubmit={handleEnrollSubmit} className="space-y-2">
                <div className="pr-6 space-y-0.5">
                  <span className="text-[9px] font-black uppercase tracking-wider text-emerald-700 block">
                    Application / Seat Inquiry
                  </span>
                  <h3 className="text-sm sm:text-base font-black text-stone-900 leading-tight">
                    Enroll in {enrollCourse.title}
                  </h3>
                </div>

                <div>
                  <label className="text-[10px] font-bold text-stone-600 block mb-0.5">
                    Student Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={studentName}
                    onChange={(e) => setStudentName(e.target.value)}
                    placeholder="e.g. Rahul Sharma"
                    className="w-full px-2.5 py-1.5 rounded-lg border border-stone-300 bg-white text-xs text-stone-900 focus:outline-none focus:ring-1 focus:ring-emerald-500 font-medium"
                  />
                </div>

                <div>
                  <label className="text-[10px] font-bold text-stone-600 block mb-0.5">
                    Parent / Guardian Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={parentPhone}
                    onChange={(e) => setParentPhone(e.target.value)}
                    placeholder="e.g. 9876543210"
                    className="w-full px-2.5 py-1.5 rounded-lg border border-stone-300 bg-white text-xs text-stone-900 focus:outline-none focus:ring-1 focus:ring-emerald-500 font-medium"
                  />
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="text-[10px] font-bold text-stone-600 block mb-0.5">
                      Grade / Class
                    </label>
                    <select
                      value={studentGrade}
                      onChange={(e) => setStudentGrade(e.target.value)}
                      className="w-full px-2 py-1.5 rounded-lg border border-stone-300 bg-white text-xs text-stone-900 focus:outline-none focus:ring-1 focus:ring-emerald-500 font-medium"
                    >
                      <option>Class 9</option>
                      <option>Class 10</option>
                      <option>Class 11</option>
                      <option>Class 12</option>
                      <option>Degree College</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-[10px] font-bold text-stone-600 block mb-0.5">
                      City / District *
                    </label>
                    <input
                      type="text"
                      required
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      placeholder="e.g. Hyderabad"
                      className="w-full px-2.5 py-1.5 rounded-lg border border-stone-300 bg-white text-xs text-stone-900 focus:outline-none focus:ring-1 focus:ring-emerald-500 font-medium"
                    />
                  </div>
                </div>

                <div className="px-2.5 py-1.5 rounded-lg bg-emerald-50 border border-emerald-200 text-[10px] text-emerald-900 font-semibold flex items-center gap-1.5">
                  <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0" />
                  <span>Includes 7-day video series, Day 5 visit pass & certificate.</span>
                </div>

                <div className="space-y-1.5 pt-1">
                  <button
                    type="submit"
                    className="w-full py-2 rounded-xl text-xs font-black text-white bg-emerald-700 hover:bg-emerald-600 transition-colors shadow-2xs cursor-pointer text-center"
                  >
                    Submit Application & Request Callback
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      if (studentName.trim()) {
                        localStorage.setItem("wabi_student_name", studentName.trim());
                      }
                      setIsEnrollModalOpen(false);
                      navigate(`/student-internship/${enrollCourse.id}`);
                    }}
                    className="w-full py-2 rounded-xl text-xs font-bold text-emerald-950 bg-emerald-100 hover:bg-emerald-200 border border-emerald-300 transition-all shadow-2xs cursor-pointer flex items-center justify-center gap-1.5"
                  >
                    <span className="px-1.5 py-0.2 rounded bg-emerald-700 text-white text-[9px] font-black uppercase">
                      Free Access
                    </span>
                    <span>Start 7-Day Experience Portal →</span>
                  </button>
                </div>
              </form>
            ) : (
              <div className="text-center py-4 space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto text-xl">
                  ✓
                </div>
                <h4 className="text-base font-black text-stone-900">
                  Application Received for {enrollCourse.title}!
                </h4>
                <p className="text-xs text-stone-600 leading-relaxed font-medium">
                  Thank you, <strong>{studentName}</strong>! Our senior counselling coordinator will contact you at <strong>{parentPhone}</strong> within 24 hours to confirm batch schedules and venue details.
                </p>
                <button
                  type="button"
                  onClick={() => setIsEnrollModalOpen(false)}
                  className="px-6 py-2 rounded-xl text-xs font-bold bg-stone-900 text-white cursor-pointer"
                >
                  Done
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ─── BOOK ONLINE COUNSELLING MODAL ─────────────────────────────────── */}
      <BookOnlineCounsellingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />
    </div>
  );
}
