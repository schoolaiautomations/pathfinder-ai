import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Lock,
  LogIn,
  Users,
  Calendar,
  Phone,
  MapPin,
  School,
  GraduationCap,
  Briefcase,
  Eye,
  EyeOff,
  RefreshCw,
  ClipboardList,
  Sparkles,
  LogOut,
  ArrowLeftRight,
  ChevronRight,
  Clock,
  FileText,
  UserCheck,
  Search,
  Filter,
  X,
  AlertTriangle,
  CheckCircle2,
  TrendingDown,
  TrendingUp,
  PieChart,
  BarChart3,
  BookOpen,
  FlaskConical,
  Printer,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import {
  fetchRoadmapBasicByCounsellor,
  fetchBookCouncellingAll,
  fetchCounsellorCustomisation,
} from "@/lib/supabase";
import type { RoadmapBasicRow, BookCouncellingRow } from "@/lib/supabase";
import { StudentProfileView } from "@/components/counsellor/StudentProfileView";
import { DetailedReportsView } from "@/components/counsellor/DetailedReportsView";
import { CompareCareersView } from "@/components/counsellor/CompareCareersView";
import { DailyLifeView } from "@/components/counsellor/DailyLifeView";
import { CareerAnalyticsView } from "@/components/counsellor/CareerAnalyticsView";
import { CourseCurriculumView } from "@/components/counsellor/CourseCurriculumView";
import wabiLogo from "@/lib/wabi_resolutions_logo.jpeg";

const COUNSELLOR_PASSWORD = "wabi123";

// Class Teachers & Total Strengths Roster for Classes 8-10 (ZPHS Lingamparthi)
export interface ClassTeacherRosterItem {
  id: string;
  gradeLabel: string;   // "8th", "9th", "10th"
  gradeNumber: number;  // 8, 9, 10
  section: string;      // "A", "B", "C"
  teacherName: string;
  totalStrength: number;
}

export const CLASS_TEACHERS_ROSTER: ClassTeacherRosterItem[] = [
  { id: "8-A", gradeLabel: "8th", gradeNumber: 8, section: "A", teacherName: "Vijay Stalin", totalStrength: 39 },
  { id: "8-B", gradeLabel: "8th", gradeNumber: 8, section: "B", teacherName: "Nagendra Rao", totalStrength: 31 },
  { id: "8-C", gradeLabel: "8th", gradeNumber: 8, section: "C", teacherName: "Ravikumar", totalStrength: 36 },
  { id: "9-A", gradeLabel: "9th", gradeNumber: 9, section: "A", teacherName: "Pushpa Kumari", totalStrength: 37 },
  { id: "9-B", gradeLabel: "9th", gradeNumber: 9, section: "B", teacherName: "Savithri", totalStrength: 33 },
  { id: "9-C", gradeLabel: "9th", gradeNumber: 9, section: "C", teacherName: "Gangaraju", totalStrength: 33 },
  { id: "10-A", gradeLabel: "10th", gradeNumber: 10, section: "A", teacherName: "Rajeev", totalStrength: 32 },
  { id: "10-B", gradeLabel: "10th", gradeNumber: 10, section: "B", teacherName: "Murthy", totalStrength: 37 },
  { id: "10-C", gradeLabel: "10th", gradeNumber: 10, section: "C", teacherName: "Vanaja", totalStrength: 34 },
];

const CounsellorDashboard = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  // Auth state
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState("");

  // Module state (null = main dashboard hub with 7 cards)
  const [activeModule, setActiveModule] = useState<"student_profile" | "requests" | "detailed_reports" | "compare" | "daily_life" | "analytics" | "curriculum" | null>(null);

  // Data state
  const [allSubmissions, setAllSubmissions] = useState<RoadmapBasicRow[]>([]);
  const [allBookings, setAllBookings] = useState<BookCouncellingRow[]>([]);
  const [submissions, setSubmissions] = useState<RoadmapBasicRow[]>([]);
  const [bookings, setBookings] = useState<BookCouncellingRow[]>([]);
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState<"submissions" | "bookings">("submissions");

  // Filter and search state
  const [schoolFilter, setSchoolFilter] = useState<string>("ALL");
  const [classFilter, setClassFilter] = useState<string>("ALL");
  const [sectionFilter, setSectionFilter] = useState<string>("ALL");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [customSections, setCustomSections] = useState<string[]>([]);
  const [customSchools, setCustomSchools] = useState<string[]>([]);
  const [isRosterModalOpen, setIsRosterModalOpen] = useState(false);
  const [isAnalyticsModalOpen, setIsAnalyticsModalOpen] = useState(false);

  // Check sessionStorage for existing login
  useEffect(() => {
    const saved = sessionStorage.getItem("counsellor_logged_in");
    if (saved) {
      setIsLoggedIn(true);
      setUsername(saved);
    }
  }, []);

  // Fetch data on login
  useEffect(() => {
    if (isLoggedIn && username) {
      loadData();
    }
  }, [isLoggedIn, username]);

  // Deduplicate bookings: keep only unique student bookings (prevent duplicates)
  const deduplicateBookings = (rows: BookCouncellingRow[]): BookCouncellingRow[] => {
    const seen = new Set<string>();
    const result: BookCouncellingRow[] = [];

    for (const row of rows) {
      const phone = (row.student_phone || "").replace(/\D/g, "");
      const name = (row.student_name || "").toLowerCase().trim().replace(/\s+/g, " ");
      const school = (row.student_school || "").toLowerCase().trim().replace(/\s+/g, " ");

      const key = phone.length >= 7
        ? `${phone}|${name}`
        : `${name}|${school}|${(row.student_class || "").trim().toLowerCase()}`;

      if (!seen.has(key)) {
        seen.add(key);
        result.push(row);
      }
    }
    return result;
  };

  // Deduplicate submissions: keep only unique roadmap submissions
  const deduplicateSubmissions = (rows: RoadmapBasicRow[]): RoadmapBasicRow[] => {
    const seen = new Set<string>();
    const result: RoadmapBasicRow[] = [];

    for (const row of rows) {
      const phone = (row.student_phone || "").replace(/\D/g, "");
      const name = (row.student_name || "").toLowerCase().trim().replace(/\s+/g, " ");
      const school = (row.student_school || "").toLowerCase().trim().replace(/\s+/g, " ");
      const career = (row.career_opted || "").trim().toLowerCase();

      const key = phone.length >= 7
        ? `${phone}|${name}|${career}`
        : `${name}|${school}|${(row.student_class || "").trim().toLowerCase()}|${career}`;

      if (!seen.has(key)) {
        seen.add(key);
        result.push(row);
      }
    }
    return result;
  };

  // Apply filter: strictly only this counsellor's submissions & deduplicate
  useEffect(() => {
    const u = username.toLowerCase().trim();
    const normalize = (s: string | null) => (s || "").toLowerCase().replace(/[\s_-]+/g, "");
    
    const filteredSubs = allSubmissions.filter((row) => {
      if (!row.councellor_name) return false;
      return normalize(row.councellor_name) === normalize(u) ||
             row.councellor_name.toLowerCase().trim() === u;
    });

    const filteredBooks = allBookings.filter((row) => {
      if (!row.councellor_name) return false;
      return normalize(row.councellor_name) === normalize(u) ||
             row.councellor_name.toLowerCase().trim() === u;
    });

    setSubmissions(filteredSubs);
    setBookings(deduplicateBookings(filteredBooks));
  }, [allSubmissions, allBookings, username]);

  const loadData = async () => {
    setLoading(true);
    try {
      // Fetch all records and customisation settings for maximum resilience
      const [subs, books, custom] = await Promise.all([
        fetchRoadmapBasicByCounsellor(), // fetches all
        fetchBookCouncellingAll(),      // fetches all
        username ? fetchCounsellorCustomisation(username) : Promise.resolve(null),
      ]);
      setAllSubmissions(subs);
      setAllBookings(books);
      if (custom) {
        if (Array.isArray(custom.sections)) {
          setCustomSections(custom.sections.filter(Boolean));
        }
        if (Array.isArray(custom.school_names)) {
          setCustomSchools(custom.school_names.filter(Boolean));
        }
      }
    } catch (err) {
      console.warn("Error loading dashboard data:", err);
    }
    setLoading(false);
  };

  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError("");

    const trimmedUser = username.trim().toLowerCase();
    if (!trimmedUser) {
      setLoginError("Please enter your counsellor name (URL slug).");
      return;
    }
    if (password !== COUNSELLOR_PASSWORD) {
      setLoginError("Incorrect password. Please try again.");
      return;
    }

    setIsLoggingIn(true);
    try {
      // Fetch submissions to check if councellor_name exists in roadmap_basic
      const allSubs = await fetchRoadmapBasicByCounsellor();
      const normalize = (s: string | null) => (s || "").toLowerCase().replace(/[\s_-]+/g, "");

      const matchedRow = allSubs.find((row) => {
        if (!row.councellor_name) return false;
        const c = row.councellor_name.toLowerCase().trim();
        return normalize(c) === normalize(trimmedUser) || c === trimmedUser;
      });

      if (!matchedRow) {
        setLoginError("User not found.");
        setIsLoggingIn(false);
        return;
      }

      const activeSlug = matchedRow.councellor_name || trimmedUser;
      sessionStorage.setItem("counsellor_logged_in", activeSlug);
      setUsername(activeSlug);
      setIsLoggedIn(true);
      toast({ title: "Welcome!", description: `Logged in as ${activeSlug}` });
    } catch (err) {
      setLoginError("Unable to verify user. Please try again.");
    } finally {
      setIsLoggingIn(false);
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem("counsellor_logged_in");
    setIsLoggedIn(false);
    setUsername("");
    setPassword("");
    setSubmissions([]);
    setBookings([]);
  };

  const formatDate = (dateStr: string) => {
    try {
      return new Date(dateStr).toLocaleString("en-IN", {
        day: "2-digit",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });
    } catch {
      return dateStr;
    }
  };

  return (
    <main className="min-h-screen font-sans text-stone-900 flex flex-col" style={{ background: "#FAF8F5" }}>
      {/* ─── NAVBAR ─────────────────────────────────────────────────────────── */}
      <header
        className="sticky top-0 z-50 border-b border-stone-200/70"
        style={{ background: "rgba(250,248,245,0.92)", backdropFilter: "blur(16px)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
            <img src={wabiLogo} alt="Wabi" className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover shadow-sm shrink-0" />
            <div className="min-w-0">
              <span className="font-extrabold text-xs sm:text-base text-stone-900 tracking-tight block leading-none truncate">
                Wabi Career Guidance
              </span>
              <span className="text-[9px] sm:text-[10px] font-semibold text-stone-400 tracking-widest uppercase block mt-0.5 truncate">
                Counsellor Dashboard
              </span>
            </div>
          </div>

          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-stone-700 hover:text-stone-950 px-3.5 py-1.5 rounded-xl border border-stone-200 bg-white hover:bg-stone-50 transition-all cursor-pointer shadow-2xs shrink-0"
            >
              <LogOut className="w-3.5 h-3.5 text-stone-500" />
              <span>Logout</span>
            </button>
          ) : (
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-stone-600 hover:text-stone-900 px-3 py-1.5 rounded-xl border border-stone-200 bg-white hover:bg-stone-50 transition-all shadow-2xs shrink-0"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Home</span>
            </Link>
          )}
        </div>
      </header>

      <div className="flex-1 py-6 sm:py-10 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          {!isLoggedIn ? (
            /* ─── LOGIN FORM ──────────────────────────────────────────────── */
            <div className="flex items-center justify-center min-h-[60vh]">
              <div
                className="w-full max-w-sm rounded-3xl p-6 sm:p-8 shadow-sm"
                style={{ background: "#F5F1EC", border: "1.5px solid #E0D6CA" }}
              >
                <div className="text-center mb-6">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-3" style={{ background: "#E8DFD0" }}>
                    <Lock className="w-6 h-6" style={{ color: "#7C5C3E" }} />
                  </div>
                  <h2 className="text-xl font-extrabold text-stone-900">Counsellor Login</h2>
                  <p className="text-xs text-stone-500 mt-1">
                    Enter your counsellor name (same as your URL slug) and password.
                  </p>
                </div>

                <form onSubmit={handleLogin} className="space-y-3.5">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-stone-800">Username (Counsellor Name)</label>
                    <Input
                      type="text"
                      placeholder="Enter username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      className="h-10 rounded-xl border-[#D5C9BE] text-sm bg-white font-medium focus:border-stone-900 focus:ring-stone-900"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-stone-800">Password</label>
                    <div className="relative">
                      <Input
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="h-10 rounded-xl border-[#D5C9BE] text-sm bg-white font-medium focus:border-stone-900 focus:ring-stone-900 pr-10"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-700 cursor-pointer"
                      >
                        {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>

                  {loginError && (
                    <p className="text-xs text-red-600 font-semibold">{loginError}</p>
                  )}

                  <Button
                    type="submit"
                    disabled={isLoggingIn}
                    className="w-full h-11 rounded-xl font-bold text-sm shadow cursor-pointer disabled:opacity-60"
                    style={{ background: "#1C1917", color: "#FAF8F5" }}
                  >
                    {isLoggingIn ? (
                      <>
                        <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                        Verifying...
                      </>
                    ) : (
                      <>
                        <LogIn className="w-4 h-4 mr-2" />
                        Login to Dashboard
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </div>
          ) : (
            /* ─── DASHBOARD ──────────────────────────────────────────────── */
            <div className="space-y-6">
              {activeModule === null ? (
                /* ─── MAIN HUB: 4 CARDS VIEW ─── */
                <div className="space-y-6">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                      <h1 className="text-xl sm:text-2xl font-extrabold text-stone-900">
                        Dashboard —{" "}
                        <span style={{ color: "#7C5C3E" }}>{username}</span>
                      </h1>
                      <p className="text-xs text-stone-500 mt-0.5">
                        Submissions received through referral link:{" "}
                        <code className="bg-stone-100 px-1.5 py-0.5 rounded text-[11px] font-mono">/roadmap/{username}</code>
                      </p>
                    </div>
                    
                    <div className="flex items-center gap-2 self-start sm:self-auto">
                      <button
                        onClick={loadData}
                        disabled={loading}
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold bg-white border border-stone-200 hover:bg-stone-50 transition-all cursor-pointer shadow-2xs disabled:opacity-50"
                      >
                        <RefreshCw className={`w-3.5 h-3.5 ${loading ? "animate-spin" : ""}`} />
                        Refresh
                      </button>
                    </div>
                  </div>

                  {/* ─── MAIN DASHBOARD HUB CARDS ─── */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {/* Card 1: Student Profile (FIRST) */}
                    <div
                      onClick={() => setActiveModule("student_profile")}
                      className="p-5 rounded-3xl border bg-white text-stone-900 border-stone-200/90 hover:border-stone-400 hover:bg-stone-50/80 transition-all cursor-pointer shadow-xs hover:shadow-md hover:-translate-y-1 flex flex-col justify-between group min-h-[210px]"
                    >
                      <div className="space-y-3.5">
                        <div className="flex items-center justify-between">
                          <div className="w-11 h-11 rounded-2xl flex items-center justify-center bg-stone-100 text-[#7C5C3E] group-hover:bg-stone-900 group-hover:text-[#C9A97A] transition-colors">
                            <UserCheck className="w-5 h-5" />
                          </div>
                          <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-stone-100 text-stone-700">
                            Session Tool
                          </span>
                        </div>
                        <div>
                          <h3 className="font-extrabold text-base text-stone-900 group-hover:text-[#7C5C3E] transition-colors leading-tight">
                            Student Profile
                          </h3>
                          <p className="text-xs mt-1.5 text-stone-500 line-clamp-2 leading-relaxed">
                            Fill in student diagnostic questionnaire and export session summary to PDF.
                          </p>
                        </div>
                      </div>
                      <div className="pt-3.5 flex items-center justify-between text-xs font-bold text-stone-900 border-t border-stone-100">
                        <span>Fill Profile</span>
                        <ChevronRight className="w-4 h-4 text-stone-400 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>

                    {/* Card 2: Career Requests & Submissions */}
                    <div
                      onClick={() => setActiveModule("requests")}
                      className="p-5 rounded-3xl border bg-white text-stone-900 border-stone-200/90 hover:border-stone-400 hover:bg-stone-50/80 transition-all cursor-pointer shadow-xs hover:shadow-md hover:-translate-y-1 flex flex-col justify-between group min-h-[210px]"
                    >
                      <div className="space-y-3.5">
                        <div className="flex items-center justify-between">
                          <div className="w-11 h-11 rounded-2xl flex items-center justify-center bg-stone-100 text-[#7C5C3E] group-hover:bg-stone-900 group-hover:text-[#C9A97A] transition-colors">
                            <ClipboardList className="w-5 h-5" />
                          </div>
                          <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-full bg-stone-100 text-stone-700">
                            {submissions.length + bookings.length} Total
                          </span>
                        </div>
                        <div>
                          <h3 className="font-extrabold text-base text-stone-900 group-hover:text-[#7C5C3E] transition-colors leading-tight">
                            Career Requests &amp; Submissions
                          </h3>
                          <p className="text-xs mt-1.5 text-stone-500 line-clamp-2 leading-relaxed">
                            View all roadmap student leads and 1-on-1 career guidance booking requests.
                          </p>
                        </div>
                      </div>
                      <div className="pt-3.5 flex items-center justify-between text-xs font-bold text-stone-900 border-t border-stone-100">
                        <span>Open Submissions</span>
                        <ChevronRight className="w-4 h-4 text-stone-400 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>

                    {/* Card 3: Detailed Report of Career */}
                    <div
                      onClick={() => setActiveModule("detailed_reports")}
                      className="p-5 rounded-3xl border bg-white text-stone-900 border-stone-200/90 hover:border-stone-400 hover:bg-stone-50/80 transition-all cursor-pointer shadow-xs hover:shadow-md hover:-translate-y-1 flex flex-col justify-between group min-h-[210px]"
                    >
                      <div className="space-y-3.5">
                        <div className="flex items-center justify-between">
                          <div className="w-11 h-11 rounded-2xl flex items-center justify-center bg-stone-100 text-[#7C5C3E] group-hover:bg-stone-900 group-hover:text-[#C9A97A] transition-colors">
                            <FileText className="w-5 h-5" />
                          </div>
                          <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-stone-100 text-stone-700">
                            19 Blueprints
                          </span>
                        </div>
                        <div>
                          <h3 className="font-extrabold text-base text-stone-900 group-hover:text-[#7C5C3E] transition-colors leading-tight">
                            Detailed Report of Career
                          </h3>
                          <p className="text-xs mt-1.5 text-stone-500 line-clamp-2 leading-relaxed">
                            Generate full AI student assessments and browse complete 4-circle blueprints.
                          </p>
                        </div>
                      </div>
                      <div className="pt-3.5 flex items-center justify-between text-xs font-bold text-stone-900 border-t border-stone-100">
                        <span>Explore Blueprints</span>
                        <ChevronRight className="w-4 h-4 text-stone-400 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>

                    {/* Card 4: Compare Careers */}
                    <div
                      onClick={() => setActiveModule("compare")}
                      className="p-5 rounded-3xl border bg-white text-stone-900 border-stone-200/90 hover:border-stone-400 hover:bg-stone-50/80 transition-all cursor-pointer shadow-xs hover:shadow-md hover:-translate-y-1 flex flex-col justify-between group min-h-[210px]"
                    >
                      <div className="space-y-3.5">
                        <div className="flex items-center justify-between">
                          <div className="w-11 h-11 rounded-2xl flex items-center justify-center bg-stone-100 text-[#7C5C3E] group-hover:bg-stone-900 group-hover:text-[#C9A97A] transition-colors">
                            <ArrowLeftRight className="w-5 h-5" />
                          </div>
                          <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-stone-100 text-stone-700">
                            Side-by-Side
                          </span>
                        </div>
                        <div>
                          <h3 className="font-extrabold text-base text-stone-900 group-hover:text-[#7C5C3E] transition-colors leading-tight">
                            Compare Careers
                          </h3>
                          <p className="text-xs mt-1.5 text-stone-500 line-clamp-2 leading-relaxed">
                            Compare two career paths across streams, study costs, salaries, and plan B backups.
                          </p>
                        </div>
                      </div>
                      <div className="pt-3.5 flex items-center justify-between text-xs font-bold text-stone-900 border-t border-stone-100">
                        <span>Compare Paths</span>
                        <ChevronRight className="w-4 h-4 text-stone-400 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>

                    {/* Card 5: A daily life of a career */}
                    <div
                      onClick={() => setActiveModule("daily_life")}
                      className="p-5 rounded-3xl border bg-white text-stone-900 border-stone-200/90 hover:border-stone-400 hover:bg-stone-50/80 transition-all cursor-pointer shadow-xs hover:shadow-md hover:-translate-y-1 flex flex-col justify-between group min-h-[210px]"
                    >
                      <div className="space-y-3.5">
                        <div className="flex items-center justify-between">
                          <div className="w-11 h-11 rounded-2xl flex items-center justify-center bg-stone-100 text-[#7C5C3E] group-hover:bg-stone-900 group-hover:text-[#C9A97A] transition-colors">
                            <Clock className="w-5 h-5" />
                          </div>
                          <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-stone-100 text-stone-700">
                            Hour-by-Hour
                          </span>
                        </div>
                        <div>
                          <h3 className="font-extrabold text-base text-stone-900 group-hover:text-[#7C5C3E] transition-colors leading-tight">
                            A daily life of a career
                          </h3>
                          <p className="text-xs mt-1.5 text-stone-500 line-clamp-2 leading-relaxed">
                            Real workday routines, hour-by-hour schedules, challenges, and workplace settings.
                          </p>
                        </div>
                      </div>
                      <div className="pt-3.5 flex items-center justify-between text-xs font-bold text-stone-900 border-t border-stone-100">
                        <span>View Daily Life</span>
                        <ChevronRight className="w-4 h-4 text-stone-400 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>

                    {/* Card 6: Career Analytics & Insights */}
                    <div
                      onClick={() => setActiveModule("analytics")}
                      className="p-5 rounded-3xl border bg-white text-stone-900 border-stone-200/90 hover:border-stone-400 hover:bg-stone-50/80 transition-all cursor-pointer shadow-xs hover:shadow-md hover:-translate-y-1 flex flex-col justify-between group min-h-[210px]"
                    >
                      <div className="space-y-3.5">
                        <div className="flex items-center justify-between">
                          <div className="w-11 h-11 rounded-2xl flex items-center justify-center bg-stone-100 text-[#7C5C3E] group-hover:bg-stone-900 group-hover:text-[#C9A97A] transition-colors">
                            <PieChart className="w-5 h-5" />
                          </div>
                          <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-stone-100 text-stone-700">
                            Pie &amp; Trends
                          </span>
                        </div>
                        <div>
                          <h3 className="font-extrabold text-base text-stone-900 group-hover:text-[#7C5C3E] transition-colors leading-tight">
                            Career Analytics &amp; Insights
                          </h3>
                          <p className="text-xs mt-1.5 text-stone-500 line-clamp-2 leading-relaxed">
                            Visual pie charts, most selected careers, class-wise trends, and school comparison.
                          </p>
                        </div>
                      </div>
                      <div className="pt-3.5 flex items-center justify-between text-xs font-bold text-stone-900 border-t border-stone-100">
                        <span>View Visual Analytics</span>
                        <ChevronRight className="w-4 h-4 text-stone-400 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>

                    {/* Card 7: Course Curriculum, Syllabus & Labs */}
                    <div
                      onClick={() => setActiveModule("curriculum")}
                      className="p-5 rounded-3xl border bg-white text-stone-900 border-stone-200/90 hover:border-stone-400 hover:bg-stone-50/80 transition-all cursor-pointer shadow-xs hover:shadow-md hover:-translate-y-1 flex flex-col justify-between group min-h-[210px]"
                    >
                      <div className="space-y-3.5">
                        <div className="flex items-center justify-between">
                          <div className="w-11 h-11 rounded-2xl flex items-center justify-center bg-stone-100 text-[#7C5C3E] group-hover:bg-stone-900 group-hover:text-[#C9A97A] transition-colors">
                            <BookOpen className="w-5 h-5" />
                          </div>
                          <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-stone-100 text-stone-700">
                            Syllabus &amp; Labs
                          </span>
                        </div>
                        <div>
                          <h3 className="font-extrabold text-base text-stone-900 group-hover:text-[#7C5C3E] transition-colors leading-tight">
                            Course Syllabus &amp; Labs
                          </h3>
                          <p className="text-xs mt-1.5 text-stone-500 line-clamp-2 leading-relaxed">
                            Year-by-year subjects, practical lab experiments, equipment, and skills across courses.
                          </p>
                        </div>
                      </div>
                      <div className="pt-3.5 flex items-center justify-between text-xs font-bold text-stone-900 border-t border-stone-100">
                        <span>Explore Syllabus &amp; Labs</span>
                        <ChevronRight className="w-4 h-4 text-stone-400 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                /* ─── DEDICATED SUB-SCREEN VIEW (WITH BACK BUTTON) ─── */
                <div className="space-y-6 animate-in fade-in duration-150">
                  {/* Sub-Screen Top Bar */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-stone-200/80 print:hidden">
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => setActiveModule(null)}
                        className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-extrabold bg-stone-900 text-white hover:bg-stone-800 transition-all cursor-pointer shadow-xs"
                      >
                        <ArrowLeft className="w-4 h-4" />
                        <span>Back to Dashboard</span>
                      </button>

                      <div className="h-4 w-px bg-stone-300 hidden sm:block" />

                      <span className="text-xs font-bold text-stone-500 hidden sm:inline">
                        {username} /{" "}
                        <span className="text-stone-900">
                          {activeModule === "student_profile" && "Student Profile & Session Assessment"}
                          {activeModule === "requests" && "Career Requests & Submissions"}
                          {activeModule === "detailed_reports" && "Detailed Report of Career"}
                          {activeModule === "compare" && "Compare Careers"}
                          {activeModule === "daily_life" && "A daily life of a career"}
                          {activeModule === "analytics" && "Career Analytics & Pie Charts"}
                          {activeModule === "curriculum" && "Course Curriculum, Syllabus & Practical Labs"}
                        </span>
                      </span>
                    </div>

                    {(activeModule === "requests" || activeModule === "analytics") && (
                      <div className="flex items-center gap-2 self-start sm:self-auto">
                        <button
                          onClick={loadData}
                          disabled={loading}
                          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold bg-white border border-stone-200 hover:bg-stone-50 transition-all cursor-pointer shadow-2xs disabled:opacity-50"
                        >
                          <RefreshCw className={`w-3.5 h-3.5 ${loading ? "animate-spin" : ""}`} />
                          Refresh
                        </button>
                      </div>
                    )}
                  </div>

                  {/* Sub-Screen Content */}
                  {activeModule === "student_profile" && <StudentProfileView counsellorName={username} />}
                  {activeModule === "detailed_reports" && <DetailedReportsView />}
                  {activeModule === "compare" && <CompareCareersView />}
                  {activeModule === "daily_life" && <DailyLifeView />}
                  {activeModule === "analytics" && <CareerAnalyticsView submissions={submissions} bookings={bookings} />}
                  {activeModule === "curriculum" && <CourseCurriculumView />}

                  {activeModule === "requests" && (() => {
                    const activeList = activeTab === "submissions" ? submissions : bookings;

                    // 1. Schools List & Counts
                    const schoolCounts = activeList.reduce<Record<string, number>>((acc, row) => {
                      const rawSchool = (row.student_school || "").trim();
                      const school = rawSchool && rawSchool !== "—" && rawSchool !== "-" ? rawSchool : "Other / Not Specified";
                      acc[school] = (acc[school] || 0) + 1;
                      return acc;
                    }, {});

                    const allSchoolKeys = new Set([...Object.keys(schoolCounts), ...customSchools]);
                    const uniqueSchools = Array.from(allSchoolKeys).filter(Boolean).sort((a, b) => a.localeCompare(b));

                    // 2. Classes List & Counts
                    const classCounts = activeList.reduce<Record<string, number>>((acc, row) => {
                      const rawClass = (row.student_class || "").trim();
                      const cls = rawClass && rawClass !== "—" && rawClass !== "-" ? rawClass : "Other / Not Specified";
                      acc[cls] = (acc[cls] || 0) + 1;
                      return acc;
                    }, {});
                    const uniqueClasses = Object.keys(classCounts).sort((a, b) => a.localeCompare(b));

                    // 3. Sections List & Counts (fetched from councellor_customisation + data)
                    const sectionCounts = activeList.reduce<Record<string, number>>((acc, row) => {
                      const rawSec = ((row as any).student_section || "").trim();
                      if (rawSec && rawSec !== "—" && rawSec !== "-") {
                        acc[rawSec] = (acc[rawSec] || 0) + 1;
                      }
                      return acc;
                    }, {});

                    const allSectionKeys = new Set([...customSections, ...Object.keys(sectionCounts)]);
                    const uniqueSections = Array.from(allSectionKeys).filter(Boolean).sort((a, b) => a.localeCompare(b));

                    // Filter Submissions
                    const displayedSubmissions = submissions.filter((row) => {
                      const rawSchool = (row.student_school || "").trim();
                      const school = rawSchool && rawSchool !== "—" && rawSchool !== "-" ? rawSchool : "Other / Not Specified";
                      const matchesSchool = schoolFilter === "ALL" || school.toLowerCase() === schoolFilter.toLowerCase();

                      const rawClass = (row.student_class || "").trim();
                      const cls = rawClass && rawClass !== "—" && rawClass !== "-" ? rawClass : "Other / Not Specified";
                      const matchesClass = classFilter === "ALL" || cls.toLowerCase() === classFilter.toLowerCase();

                      const rawSec = (row.student_section || "").trim();
                      const matchesSection = sectionFilter === "ALL" || (rawSec && rawSec.toLowerCase() === sectionFilter.toLowerCase());

                      const q = searchQuery.toLowerCase().trim();
                      const matchesSearch = !q ||
                        (row.student_name || "").toLowerCase().includes(q) ||
                        (row.student_phone || "").toLowerCase().includes(q) ||
                        (row.student_school || "").toLowerCase().includes(q) ||
                        (row.student_location || "").toLowerCase().includes(q) ||
                        (row.student_class || "").toLowerCase().includes(q) ||
                        (row.student_section || "").toLowerCase().includes(q) ||
                        (row.career_opted || "").toLowerCase().includes(q);

                      return matchesSchool && matchesClass && matchesSection && matchesSearch;
                    });

                    // Filter Bookings
                    const displayedBookings = bookings.filter((row) => {
                      const rawSchool = (row.student_school || "").trim();
                      const school = rawSchool && rawSchool !== "—" && rawSchool !== "-" ? rawSchool : "Other / Not Specified";
                      const matchesSchool = schoolFilter === "ALL" || school.toLowerCase() === schoolFilter.toLowerCase();

                      const rawClass = (row.student_class || "").trim();
                      const cls = rawClass && rawClass !== "—" && rawClass !== "-" ? rawClass : "Other / Not Specified";
                      const matchesClass = classFilter === "ALL" || cls.toLowerCase() === classFilter.toLowerCase();

                      const rawSec = ((row as any).student_section || "").trim();
                      const matchesSection = sectionFilter === "ALL" || (rawSec && rawSec.toLowerCase() === sectionFilter.toLowerCase());

                      const q = searchQuery.toLowerCase().trim();
                      const matchesSearch = !q ||
                        (row.student_name || "").toLowerCase().includes(q) ||
                        (row.student_phone || "").toLowerCase().includes(q) ||
                        (row.student_school || "").toLowerCase().includes(q) ||
                        (row.student_location || "").toLowerCase().includes(q) ||
                        (row.student_class || "").toLowerCase().includes(q) ||
                        (row.career_opted || "").toLowerCase().includes(q) ||
                        (row.query_description || "").toLowerCase().includes(q);

                      return matchesSchool && matchesClass && matchesSection && matchesSearch;
                    });

                    const currentDisplayed = activeTab === "submissions" ? displayedSubmissions : displayedBookings;
                    const hasActiveFilters = schoolFilter !== "ALL" || classFilter !== "ALL" || sectionFilter !== "ALL" || searchQuery.trim() !== "";

                    // Class Teachers Roster Analytics (Classes 8-10 specifically for ZPHS Lingamparthi)
                    const rosterStats = CLASS_TEACHERS_ROSTER.map((item) => {
                      const matchingSubs = submissions.filter((row) => {
                        const sch = (row.student_school || "").toLowerCase().trim();
                        const cls = (row.student_class || "").toLowerCase().trim();
                        const sec = (row.student_section || "").trim().toUpperCase();

                        // Match specifically ZPHS Lingamparthi school
                        const matchesSchool = sch.includes("lingamparthi") || sch.includes("lingam parthi") || sch.includes("lingamparti");

                        const matchesGrade =
                          (item.gradeNumber === 8 && (cls.includes("8") || cls.includes("eighth"))) ||
                          (item.gradeNumber === 9 && (cls.includes("9") || cls.includes("ninth"))) ||
                          (item.gradeNumber === 10 && (cls.includes("10") || cls.includes("tenth")));

                        const matchesSection = sec === item.section || sec.startsWith(item.section);

                        return matchesSchool && matchesGrade && matchesSection;
                      });

                      const receivedCount = matchingSubs.length;
                      const percentage = item.totalStrength > 0 ? Math.round((receivedCount / item.totalStrength) * 100) : 0;
                      const isBelowThreshold = percentage < 60;

                      return {
                        ...item,
                        receivedCount,
                        percentage,
                        isBelowThreshold,
                      };
                    });

                    const totalEnrolled = CLASS_TEACHERS_ROSTER.reduce((acc, curr) => acc + curr.totalStrength, 0); // 312
                    const totalRosterReceived = rosterStats.reduce((acc, curr) => acc + curr.receivedCount, 0);
                    const overallPercentage = totalEnrolled > 0 ? Math.round((totalRosterReceived / totalEnrolled) * 100) : 0;
                    const belowThresholdCount = rosterStats.filter((r) => r.isBelowThreshold).length;

                    const handlePrintRosterPDF = () => {
                      const dateStr = new Date().toLocaleDateString("en-IN", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                      });

                      const rowsHtml = rosterStats
                        .map(
                          (item) => `
                        <tr style="border-bottom: 1px solid #e5e7eb;">
                          <td style="padding: 10px 14px; font-weight: 700; color: #111827;">${item.gradeLabel} - Section ${item.section}</td>
                          <td style="padding: 10px 14px; font-weight: 600; color: #1f2937;">${item.teacherName}</td>
                          <td style="padding: 10px 14px; text-align: center; color: #4b5563;">${item.totalStrength}</td>
                          <td style="padding: 10px 14px; text-align: center; font-weight: 700; color: ${item.isBelowThreshold ? "#dc2626" : "#047857"};">${item.receivedCount}</td>
                          <td style="padding: 10px 14px; text-align: center;">
                            <span style="display: inline-block; padding: 2px 8px; border-radius: 9999px; font-size: 11px; font-weight: 700; ${
                              item.isBelowThreshold ? "background: #fee2e2; color: #991b1b;" : "background: #d1fae5; color: #065f46;"
                            }">
                              ${item.percentage}%
                            </span>
                          </td>
                          <td style="padding: 10px 14px; text-align: center; font-size: 11px; font-weight: 700; color: ${item.isBelowThreshold ? "#b91c1c" : "#047857"};">
                            ${item.isBelowThreshold ? "⚠️ Action Required (&lt;60%)" : "✓ Target Met"}
                          </td>
                        </tr>`
                        )
                        .join("");

                      const html = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <title>ZPHS Lingamparthi - Teachers & Submission Coverage Report</title>
  <style>
    @page { size: A4 portrait; margin: 14mm; }
    body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; color: #1f2937; margin: 0; padding: 12px; }
    .header { border-bottom: 2px solid #1c1917; padding-bottom: 14px; margin-bottom: 16px; }
    .badge { display: inline-block; font-size: 10px; font-weight: 800; text-transform: uppercase; color: #7c5c3e; letter-spacing: 0.05em; margin-bottom: 4px; }
    .title { font-size: 20px; font-weight: 800; color: #111827; margin: 0 0 4px 0; }
    .subtitle { font-size: 13px; color: #4b5563; margin: 0 0 10px 0; font-weight: 500; }
    .meta-bar { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 10px; font-size: 12px; }
    .meta-item { background: #f5f1ec; padding: 6px 12px; border-radius: 8px; border: 1px solid #e0d6ca; }
    .meta-item strong { color: #111827; }
    .summary-cards { display: flex; gap: 12px; margin: 16px 0; }
    .card { flex: 1; padding: 12px 14px; border-radius: 8px; background: #fafaf9; border: 1px solid #e7e5e4; }
    .card-title { font-size: 10px; text-transform: uppercase; color: #78716c; font-weight: 700; letter-spacing: 0.05em; }
    .card-val { font-size: 18px; font-weight: 800; color: #1c1917; margin-top: 2px; }
    table { width: 100%; border-collapse: collapse; margin-top: 14px; font-size: 12px; }
    th { background: #f5f1ec; color: #44403c; text-align: left; padding: 10px 14px; font-weight: 700; text-transform: uppercase; font-size: 10px; letter-spacing: 0.05em; border-bottom: 2px solid #d6d3d1; }
    .footer { margin-top: 40px; padding-top: 16px; display: flex; justify-content: space-between; align-items: flex-end; font-size: 12px; color: #6b7280; }
    .sig-box { text-align: center; min-width: 220px; }
    .sig-line { border-top: 1px dashed #9ca3af; margin-top: 45px; padding-top: 6px; font-weight: 700; color: #111827; font-size: 12px; }
    .no-print { margin-bottom: 16px; }
    .btn { background: #1c1917; color: #fff; border: none; padding: 9px 18px; border-radius: 8px; font-weight: 700; cursor: pointer; font-size: 13px; }
    @media print { .no-print { display: none !important; } body { padding: 0; } }
  </style>
</head>
<body>
  <div class="no-print">
    <button class="btn" onclick="window.print()">🖨️ Print / Save as PDF</button>
  </div>

  <div class="header">
    <div class="badge">Wabi Career Guidance &bull; School Administration Diagnostic Report</div>
    <h1 class="title">ZPHS Lingamparthi — Class Teachers &amp; Submission Coverage</h1>
    <div class="subtitle">Classes 8–10 Career Roadmap Submission &amp; Diagnostic Participation Coverage</div>
    <div class="meta-bar">
      <div class="meta-item">🏫 School: <strong>ZPHS Lingamparthi</strong></div>
      <div class="meta-item">👤 Headmaster: <strong>D Ravikumar</strong></div>
      <div class="meta-item">📅 Generated: <strong>${dateStr}</strong></div>
      <div class="meta-item">🎯 Benchmark Target: <strong>&ge; 60% Submissions</strong></div>
    </div>
  </div>

  <div class="summary-cards">
    <div class="card">
      <div class="card-title">Total Enrolled (8th–10th)</div>
      <div class="card-val">${totalEnrolled} Students</div>
    </div>
    <div class="card">
      <div class="card-title">Received Submissions</div>
      <div class="card-val" style="color: ${overallPercentage >= 60 ? "#047857" : "#b91c1c"};">${totalRosterReceived} (${overallPercentage}%)</div>
    </div>
    <div class="card">
      <div class="card-title">Target Compliance</div>
      <div class="card-val" style="color: ${belowThresholdCount > 0 ? "#b91c1c" : "#047857"};">
        ${belowThresholdCount > 0 ? `${belowThresholdCount} Teachers Below 60%` : "All Sections Met Target (≥60%)"}
      </div>
    </div>
  </div>

  <table>
    <thead>
      <tr>
        <th>Class &amp; Section</th>
        <th>Class Teacher</th>
        <th style="text-align: center;">Total Strength</th>
        <th style="text-align: center;">Submissions</th>
        <th style="text-align: center;">Coverage %</th>
        <th style="text-align: center;">Status</th>
      </tr>
    </thead>
    <tbody>
      ${rowsHtml}
    </tbody>
  </table>

  <div class="footer">
    <div>
      <div style="font-weight: 700; color: #111827;">Wabi Career Guidance Portal</div>
      <div style="font-size: 11px; margin-top: 2px;">School: ZPHS Lingamparthi &bull; Headmaster: D Ravikumar</div>
    </div>
    <div class="sig-box">
      <div class="sig-line">
        D Ravikumar<br/>
        <span style="font-weight: 500; font-size: 11px; color: #4b5563;">Headmaster, ZPHS Lingamparthi</span>
      </div>
    </div>
  </div>
</body>
</html>`;

                      const printWindow = window.open("", "_blank");
                      if (printWindow) {
                        printWindow.document.write(html);
                        printWindow.document.close();
                        printWindow.onload = () => {
                          setTimeout(() => printWindow.print(), 250);
                        };
                      }
                    };

                    return (
                      <div className="space-y-6">
                        {/* Stats */}
                        <div className="grid grid-cols-2 gap-3">
                          <div className="rounded-2xl p-4" style={{ background: "#F0EBE1", border: "1px solid #DDD3C5" }}>
                            <div className="text-[11px] font-semibold text-stone-500 uppercase tracking-wider mb-1">Roadmap Submissions</div>
                            <div className="text-2xl font-extrabold text-stone-900">{submissions.length}</div>
                          </div>
                          <div className="rounded-2xl p-4" style={{ background: "#F0EBE1", border: "1px solid #DDD3C5" }}>
                            <div className="text-[11px] font-semibold text-stone-500 uppercase tracking-wider mb-1">Booking Requests</div>
                            <div className="text-2xl font-extrabold text-stone-900">{bookings.length}</div>
                          </div>
                        </div>

                        {/* ── TWO ACTION CARDS: 1. CAREER ANALYTICS & PIE CHARTS, 2. ZPHS LINGAMPARTHI TEACHERS TRACKER ── */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3.5">
                          {/* Card 1: Career Analytics & Pie Charts */}
                          <div
                            className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3.5 p-4 sm:p-5 rounded-3xl border shadow-xs bg-white"
                            style={{ borderColor: "#E0D6CA" }}
                          >
                            <div className="flex items-center gap-3 min-w-0">
                              <div className="w-11 h-11 rounded-2xl bg-[#7C5C3E] text-white flex items-center justify-center shrink-0 shadow-xs">
                                <PieChart className="w-5 h-5" />
                              </div>
                              <div className="min-w-0">
                                <div className="text-sm font-black text-stone-900 truncate">
                                  Career Analytics &amp; Pie Charts
                                </div>
                                <p className="text-xs text-stone-500 font-medium mt-0.5 truncate">
                                  Most selected careers, class trends &amp; school stats
                                </p>
                              </div>
                            </div>

                            <button
                              type="button"
                              onClick={() => setIsAnalyticsModalOpen(true)}
                              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-extrabold bg-[#7C5C3E] text-white hover:bg-[#634830] transition-all cursor-pointer shadow-sm hover:scale-102 active:scale-98 shrink-0"
                            >
                              <span>View Analytics</span>
                              <ChevronRight className="w-3.5 h-3.5 text-[#C9A97A]" />
                            </button>
                          </div>

                          {/* Card 2: ZPHS Lingamparthi Teachers Tracker */}
                          <div
                            className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3.5 p-4 sm:p-5 rounded-3xl border shadow-xs bg-white"
                            style={{ borderColor: "#E0D6CA" }}
                          >
                            <div className="flex items-center gap-3 min-w-0">
                              <div className="w-11 h-11 rounded-2xl bg-stone-900 text-[#C9A97A] flex items-center justify-center shrink-0 shadow-xs">
                                <GraduationCap className="w-5 h-5" />
                              </div>
                              <div className="min-w-0">
                                <div className="text-sm font-black text-stone-900 truncate">
                                  ZPHS Lingamparthi Tracker
                                </div>
                                <p className="text-xs text-stone-500 font-medium mt-0.5 truncate">
                                  HM: <strong>D Ravikumar</strong> &bull; Enrolled: <strong>{totalEnrolled}</strong> &bull; Received: <strong>{totalRosterReceived}</strong> ({overallPercentage}%)
                                </p>
                              </div>
                            </div>

                            <div className="flex items-center gap-2 shrink-0 self-end sm:self-auto">
                              {belowThresholdCount > 0 ? (
                                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-xl text-[11px] font-black bg-rose-100 text-rose-800 border border-rose-300">
                                  <AlertTriangle className="w-3 h-3 text-rose-600 animate-pulse" />
                                  {belowThresholdCount} &lt;60%
                                </span>
                              ) : (
                                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-xl text-[11px] font-bold bg-emerald-100 text-emerald-800 border border-emerald-300">
                                  <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                                  Target Met
                                </span>
                              )}

                              <button
                                type="button"
                                onClick={() => setIsRosterModalOpen(true)}
                                className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl text-xs font-extrabold bg-stone-900 text-white hover:bg-stone-800 transition-all cursor-pointer shadow-sm hover:scale-102 active:scale-98"
                              >
                                <span>Roster</span>
                                <ChevronRight className="w-3.5 h-3.5 text-[#C9A97A]" />
                              </button>
                            </div>
                          </div>
                        </div>

                        {/* ── DIALOG POPUP: CAREER ANALYTICS & PIE CHARTS ── */}
                        <Dialog open={isAnalyticsModalOpen} onOpenChange={setIsAnalyticsModalOpen}>
                          <DialogContent
                            className="max-w-4xl max-h-[92vh] flex flex-col p-0 rounded-3xl overflow-hidden border shadow-2xl bg-[#FAF8F5]"
                            style={{ borderColor: "#E0D6CA" }}
                          >
                            <div className="p-4 sm:p-6 overflow-y-auto flex-1">
                              <CareerAnalyticsView
                                submissions={submissions}
                                bookings={bookings}
                                onClose={() => setIsAnalyticsModalOpen(false)}
                                isModal={true}
                              />
                            </div>
                          </DialogContent>
                        </Dialog>

                        {/* ── DIALOG POPUP: VERTICALLY ALIGNED FOR MOBILE ── */}
                        <Dialog open={isRosterModalOpen} onOpenChange={setIsRosterModalOpen}>
                          <DialogContent
                            className="max-w-xl max-h-[90vh] flex flex-col p-0 rounded-3xl overflow-hidden border shadow-2xl bg-[#FAF8F5]"
                            style={{ borderColor: "#E0D6CA" }}
                          >
                            {/* Top Header with Close/Cancel button and Print PDF option */}
                            <div className="p-4 sm:p-5 border-b border-stone-200 bg-white flex items-start justify-between gap-3 shrink-0">
                              <div>
                                <div className="flex flex-wrap items-center gap-2 mb-1.5">
                                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-stone-900 text-[#FAF8F5]">
                                    <GraduationCap className="w-3.5 h-3.5 text-[#C9A97A]" />
                                    ZPHS Lingamparthi Roster
                                  </div>
                                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#E8DFD0] text-stone-900 border border-[#DDD3C5]">
                                    <UserCheck className="w-3 h-3 text-[#7C5C3E]" />
                                    Headmaster: <span className="font-black text-stone-900">D Ravikumar</span>
                                  </div>
                                </div>
                                <DialogTitle className="text-base sm:text-lg font-black text-stone-900">
                                  Class Teachers &amp; Submission Coverage
                                </DialogTitle>
                                <DialogDescription className="text-xs text-stone-500 font-medium mt-0.5 flex flex-wrap items-center gap-x-2 gap-y-1">
                                  <span>Classes 8–10 (Total Strength: <strong className="text-stone-900">312 students</strong>)</span>
                                  <span>&bull;</span>
                                  <span>Headmaster: <strong className="text-stone-900">D Ravikumar</strong></span>
                                  <span>&bull;</span>
                                  <span>Target: <strong>&ge; 60%</strong></span>
                                </DialogDescription>
                              </div>

                              <div className="flex items-center gap-2 shrink-0">
                                <button
                                  type="button"
                                  onClick={handlePrintRosterPDF}
                                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold bg-stone-900 text-white hover:bg-stone-800 transition-all cursor-pointer shadow-xs hover:scale-102 active:scale-98"
                                  title="Print or Save PDF"
                                >
                                  <Printer className="w-3.5 h-3.5 text-[#C9A97A]" />
                                  <span>Print PDF</span>
                                </button>

                                <button
                                  type="button"
                                  onClick={() => setIsRosterModalOpen(false)}
                                  className="p-2 rounded-xl text-stone-500 hover:text-stone-900 bg-stone-100 hover:bg-stone-200 transition-colors cursor-pointer shrink-0"
                                  aria-label="Close"
                                >
                                  <X className="w-4 h-4" />
                                </button>
                              </div>
                            </div>

                            {/* Summary Status Strip */}
                            <div className="px-4 sm:px-5 py-2.5 bg-[#F0EBE1] border-b border-[#DDD3C5] flex items-center justify-between text-xs font-bold text-stone-700 shrink-0">
                              <span>
                                Received: <strong className="text-stone-900">{totalRosterReceived}</strong> / {totalEnrolled} ({overallPercentage}%)
                              </span>
                              {belowThresholdCount > 0 ? (
                                <span className="text-rose-700 font-black flex items-center gap-1">
                                  <AlertTriangle className="w-3.5 h-3.5 text-rose-600" />
                                  {belowThresholdCount} Teacher{belowThresholdCount > 1 ? "s" : ""} Below 60%
                                </span>
                              ) : (
                                <span className="text-emerald-700 font-bold flex items-center gap-1">
                                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                                  All Sections Target Met
                                </span>
                              )}
                            </div>

                            {/* Vertically Aligned Scrollable List for Mobile & Desktop */}
                            <div className="p-4 sm:p-5 overflow-y-auto space-y-3 flex-1">
                              {rosterStats.map((item) => (
                                <div
                                  key={item.id}
                                  onClick={() => {
                                    const matchingSchoolOption = uniqueSchools.find((s) => s.toLowerCase().includes("lingamparthi")) || "ALL";
                                    setSchoolFilter(matchingSchoolOption);
                                    setClassFilter(`Class ${item.gradeNumber}`);
                                    setSectionFilter(item.section);
                                    setActiveTab("submissions");
                                    setIsRosterModalOpen(false);
                                  }}
                                  className={`p-3.5 rounded-2xl border transition-all cursor-pointer shadow-2xs hover:shadow-md ${
                                    item.isBelowThreshold
                                      ? "bg-rose-50/70 border-rose-300 hover:border-rose-400 hover:bg-rose-50"
                                      : "bg-white border-stone-200 hover:border-stone-400 hover:bg-stone-50/60"
                                  }`}
                                >
                                  <div className="flex items-center justify-between gap-2 mb-1.5">
                                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-lg text-xs font-black bg-stone-900 text-white tracking-wide">
                                      {item.gradeLabel} - Section {item.section}
                                    </span>

                                    {item.isBelowThreshold ? (
                                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-black bg-rose-600 text-white shadow-2xs">
                                        <TrendingDown className="w-3 h-3" />
                                        {item.percentage}% (&lt;60%)
                                      </span>
                                    ) : (
                                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-black bg-emerald-700 text-white">
                                        <TrendingUp className="w-3 h-3" />
                                        {item.percentage}%
                                      </span>
                                    )}
                                  </div>

                                  {/* Teacher Name */}
                                  <div className="my-1.5">
                                    <div className="text-[10px] uppercase font-bold text-stone-500 tracking-wider">Class Teacher</div>
                                    <div
                                      className={`text-sm tracking-tight flex items-center gap-1.5 mt-0.5 ${
                                        item.isBelowThreshold ? "font-black text-rose-700" : "font-extrabold text-stone-900"
                                      }`}
                                    >
                                      <UserCheck className={`w-4 h-4 shrink-0 ${item.isBelowThreshold ? "text-rose-600" : "text-stone-500"}`} />
                                      <span>{item.teacherName}</span>
                                      {item.isBelowThreshold && (
                                        <span className="ml-auto text-[10px] font-black uppercase tracking-wider text-rose-700 bg-rose-200/80 px-1.5 py-0.5 rounded border border-rose-300">
                                          Action Req.
                                        </span>
                                      )}
                                    </div>
                                  </div>

                                  {/* Submissions & Strength Count */}
                                  <div className="flex items-center justify-between text-xs text-stone-600 font-semibold mb-1.5 pt-1 border-t border-stone-100">
                                    <span>
                                      Submissions: <strong className={item.isBelowThreshold ? "text-rose-700 font-extrabold" : "text-stone-900"}>{item.receivedCount}</strong> / {item.totalStrength} students
                                    </span>
                                    <span className="text-[11px] text-stone-400">Total: {item.totalStrength}</span>
                                  </div>

                                  {/* Progress Bar */}
                                  <div className="w-full bg-stone-200 h-2 rounded-full overflow-hidden">
                                    <div
                                      className={`h-full transition-all duration-500 rounded-full ${
                                        item.isBelowThreshold ? "bg-rose-500" : "bg-emerald-600"
                                      }`}
                                      style={{ width: `${Math.min(100, item.percentage)}%` }}
                                    />
                                  </div>
                                </div>
                              ))}
                            </div>
                          </DialogContent>
                        </Dialog>

                        {/* Tabs */}
                        <div className="flex gap-1 p-1 rounded-xl" style={{ background: "#E8DFD0" }}>
                          <button
                            onClick={() => {
                              setActiveTab("submissions");
                              setSchoolFilter("ALL");
                              setClassFilter("ALL");
                              setSectionFilter("ALL");
                            }}
                            className={`flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                              activeTab === "submissions"
                                ? "bg-white shadow-sm text-stone-900"
                                : "text-stone-500 hover:text-stone-700"
                            }`}
                          >
                            <ClipboardList className="w-3.5 h-3.5" />
                            Roadmap Submissions ({submissions.length})
                          </button>
                          <button
                            onClick={() => {
                              setActiveTab("bookings");
                              setSchoolFilter("ALL");
                              setClassFilter("ALL");
                              setSectionFilter("ALL");
                            }}
                            className={`flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                              activeTab === "bookings"
                                ? "bg-white shadow-sm text-stone-900"
                                : "text-stone-500 hover:text-stone-700"
                            }`}
                          >
                            <Calendar className="w-3.5 h-3.5" />
                            Booking Requests ({bookings.length})
                          </button>
                        </div>

                        {/* ── Filter Bar: School, Class, Section Dropdowns + Search Input ── */}
                        <div
                          className="flex flex-col gap-3 p-3.5 rounded-2xl border bg-white shadow-2xs"
                          style={{ borderColor: "#E0D6CA" }}
                        >
                          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
                            {/* School Dropdown */}
                            <div
                              className="flex items-center gap-2 px-3 py-2 rounded-xl border bg-stone-50 min-w-0"
                              style={{ borderColor: "#DDD3C5" }}
                            >
                              <School className="w-4 h-4 text-[#7C5C3E] shrink-0" />
                              <select
                                value={schoolFilter}
                                onChange={(e) => setSchoolFilter(e.target.value)}
                                className="w-full bg-transparent text-xs font-bold text-stone-900 focus:outline-none cursor-pointer truncate"
                              >
                                <option value="ALL">All Schools</option>
                                {uniqueSchools.map((sch) => (
                                  <option key={sch} value={sch}>
                                    {sch} ({schoolCounts[sch] || 0})
                                  </option>
                                ))}
                              </select>
                            </div>

                            {/* Class Dropdown */}
                            <div
                              className="flex items-center gap-2 px-3 py-2 rounded-xl border bg-stone-50 min-w-0"
                              style={{ borderColor: "#DDD3C5" }}
                            >
                              <GraduationCap className="w-4 h-4 text-[#7C5C3E] shrink-0" />
                              <select
                                value={classFilter}
                                onChange={(e) => setClassFilter(e.target.value)}
                                className="w-full bg-transparent text-xs font-bold text-stone-900 focus:outline-none cursor-pointer truncate"
                              >
                                <option value="ALL">All Classes</option>
                                {uniqueClasses.map((cls) => (
                                  <option key={cls} value={cls}>
                                    {cls}
                                  </option>
                                ))}
                              </select>
                            </div>

                            {/* Section Dropdown (customisation + data) */}
                            <div
                              className="flex items-center gap-2 px-3 py-2 rounded-xl border bg-stone-50 min-w-0"
                              style={{ borderColor: "#DDD3C5" }}
                            >
                              <Users className="w-4 h-4 text-[#7C5C3E] shrink-0" />
                              <select
                                value={sectionFilter}
                                onChange={(e) => setSectionFilter(e.target.value)}
                                className="w-full bg-transparent text-xs font-bold text-stone-900 focus:outline-none cursor-pointer truncate"
                              >
                                <option value="ALL">All Sections</option>
                                {uniqueSections.map((sec) => (
                                  <option key={sec} value={sec}>
                                    Section {sec}
                                  </option>
                                ))}
                              </select>
                            </div>

                            {/* Search Input */}
                            <div className="relative min-w-0">
                              <Search className="w-3.5 h-3.5 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                              <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Search name, phone..."
                                className="w-full h-9 pl-8 pr-8 text-xs rounded-xl border bg-stone-50 font-medium text-stone-800 placeholder:text-stone-400 focus:outline-none focus:bg-white transition-colors"
                                style={{ borderColor: "#DDD3C5" }}
                              />
                              {searchQuery && (
                                <button
                                  onClick={() => setSearchQuery("")}
                                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-700 cursor-pointer"
                                >
                                  <X className="w-3.5 h-3.5" />
                                </button>
                              )}
                            </div>
                          </div>

                          {/* Filter Status & Reset */}
                          {hasActiveFilters && (
                            <div className="flex items-center justify-between pt-1 border-t border-stone-100">
                              <span className="text-[11px] font-bold text-stone-600 bg-stone-100 px-2.5 py-1 rounded-lg border border-stone-200">
                                Showing {currentDisplayed.length} of {activeList.length} matching students
                              </span>
                              <button
                                onClick={() => {
                                  setSchoolFilter("ALL");
                                  setClassFilter("ALL");
                                  setSectionFilter("ALL");
                                  setSearchQuery("");
                                }}
                                className="flex items-center gap-1 text-[11px] font-bold text-rose-600 hover:text-rose-800 transition-colors cursor-pointer px-2 py-1 rounded-lg hover:bg-rose-50"
                              >
                                <X className="w-3 h-3" />
                                Reset all filters
                              </button>
                            </div>
                          )}
                        </div>

                        {/* Data Table */}
                        {loading ? (
                          <div className="py-16 text-center text-sm text-stone-400 font-semibold">Loading data...</div>
                        ) : activeTab === "submissions" ? (
                          /* ── SUBMISSIONS TABLE ── */
                          submissions.length === 0 ? (
                            <div className="py-16 text-center rounded-2xl border" style={{ background: "#F5F1EC", borderColor: "#E0D6CA" }}>
                              <Users className="w-10 h-10 mx-auto text-stone-300 mb-3" />
                              <p className="text-sm font-bold text-stone-500">No submissions found</p>
                              <p className="text-xs text-stone-400 mt-1">
                                Share your referral link <code className="bg-stone-100 px-1.5 py-0.5 rounded text-[11px] font-mono">/roadmap/{username}</code> to start receiving submissions.
                              </p>
                            </div>
                          ) : displayedSubmissions.length === 0 ? (
                            <div className="py-12 text-center rounded-2xl border bg-white" style={{ borderColor: "#E0D6CA" }}>
                              <School className="w-8 h-8 mx-auto text-stone-300 mb-2" />
                              <p className="text-xs font-bold text-stone-600">No submissions match the current school / search filter</p>
                              <button
                                onClick={() => { setSchoolFilter("ALL"); setSearchQuery(""); }}
                                className="mt-2 text-xs text-blue-600 hover:underline font-bold cursor-pointer"
                              >
                                Clear filters
                              </button>
                            </div>
                          ) : (
                            <div className="rounded-2xl border overflow-hidden" style={{ borderColor: "#E0D6CA" }}>
                              <div className="overflow-x-auto">
                                <table className="w-full text-xs">
                                  <thead>
                                    <tr style={{ background: "#F0EBE1" }}>
                                      <th className="text-left px-3 py-2.5 font-bold text-stone-600 uppercase tracking-wider text-[10px]">#</th>
                                      <th className="text-left px-3 py-2.5 font-bold text-stone-600 uppercase tracking-wider text-[10px]">Student Name</th>
                                      <th className="text-left px-3 py-2.5 font-bold text-stone-600 uppercase tracking-wider text-[10px]">Phone</th>
                                      <th className="text-left px-3 py-2.5 font-bold text-stone-600 uppercase tracking-wider text-[10px]">Class</th>
                                      <th className="text-left px-3 py-2.5 font-bold text-stone-600 uppercase tracking-wider text-[10px]">Section</th>
                                      <th className="text-left px-3 py-2.5 font-bold text-stone-600 uppercase tracking-wider text-[10px]">School</th>
                                      <th className="text-left px-3 py-2.5 font-bold text-stone-600 uppercase tracking-wider text-[10px]">Location</th>
                                      <th className="text-left px-3 py-2.5 font-bold text-stone-600 uppercase tracking-wider text-[10px]">Career Opted</th>
                                      <th className="text-left px-3 py-2.5 font-bold text-stone-600 uppercase tracking-wider text-[10px]">Date</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {displayedSubmissions.map((row, i) => (
                                      <tr
                                        key={row.id}
                                        className="border-t hover:bg-stone-50/50 transition-colors"
                                        style={{ borderColor: "#E8DFD0" }}
                                      >
                                        <td className="px-3 py-2.5 font-mono text-stone-400">{i + 1}</td>
                                        <td className="px-3 py-2.5 font-bold text-stone-900">{row.student_name || "—"}</td>
                                        <td className="px-3 py-2.5 text-stone-700">{row.student_phone || "—"}</td>
                                        <td className="px-3 py-2.5 text-stone-700">{row.student_class || "—"}</td>
                                        <td className="px-3 py-2.5 text-stone-700 font-medium">{row.student_section || "—"}</td>
                                        <td className="px-3 py-2.5 text-stone-700 whitespace-normal break-words leading-relaxed min-w-[140px] max-w-[240px]">{row.student_school || "—"}</td>
                                        <td className="px-3 py-2.5 text-stone-700 whitespace-normal break-words leading-relaxed min-w-[120px] max-w-[200px]">{row.student_location || "—"}</td>
                                        <td className="px-3 py-2.5">
                                          <span className="inline-block px-2 py-0.5 rounded-full text-[10px] font-bold" style={{ background: "#E8DFD0", color: "#7C5C3E" }}>
                                            {row.career_opted || "—"}
                                          </span>
                                        </td>
                                        <td className="px-3 py-2.5 text-stone-400 text-[10px] whitespace-nowrap">{formatDate(row.created_at)}</td>
                                      </tr>
                                    ))}
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          )
                        ) : (
                          /* ── BOOKINGS TABLE ── */
                          bookings.length === 0 ? (
                            <div className="py-16 text-center rounded-2xl border" style={{ background: "#F5F1EC", borderColor: "#E0D6CA" }}>
                              <Calendar className="w-10 h-10 mx-auto text-stone-300 mb-3" />
                              <p className="text-sm font-bold text-stone-500">No booking requests found</p>
                              <p className="text-xs text-stone-400 mt-1">
                                Booking requests from students using your link will appear here.
                              </p>
                            </div>
                          ) : displayedBookings.length === 0 ? (
                            <div className="py-12 text-center rounded-2xl border bg-white" style={{ borderColor: "#E0D6CA" }}>
                              <School className="w-8 h-8 mx-auto text-stone-300 mb-2" />
                              <p className="text-xs font-bold text-stone-600">No booking requests match the current school / search filter</p>
                              <button
                                onClick={() => { setSchoolFilter("ALL"); setSearchQuery(""); }}
                                className="mt-2 text-xs text-blue-600 hover:underline font-bold cursor-pointer"
                              >
                                Clear filters
                              </button>
                            </div>
                          ) : (
                            <div className="rounded-2xl border overflow-hidden" style={{ borderColor: "#E0D6CA" }}>
                              <div className="overflow-x-auto">
                                <table className="w-full text-xs">
                                  <thead>
                                    <tr style={{ background: "#F0EBE1" }}>
                                      <th className="text-left px-3 py-2.5 font-bold text-stone-600 uppercase tracking-wider text-[10px]">#</th>
                                      <th className="text-left px-3 py-2.5 font-bold text-stone-600 uppercase tracking-wider text-[10px]">Student Name</th>
                                      <th className="text-left px-3 py-2.5 font-bold text-stone-600 uppercase tracking-wider text-[10px]">Phone</th>
                                      <th className="text-left px-3 py-2.5 font-bold text-stone-600 uppercase tracking-wider text-[10px]">Class</th>
                                      <th className="text-left px-3 py-2.5 font-bold text-stone-600 uppercase tracking-wider text-[10px]">School</th>
                                      <th className="text-left px-3 py-2.5 font-bold text-stone-600 uppercase tracking-wider text-[10px]">Location</th>
                                      <th className="text-left px-3 py-2.5 font-bold text-stone-600 uppercase tracking-wider text-[10px]">Career Opted</th>
                                      <th className="text-left px-3 py-2.5 font-bold text-stone-600 uppercase tracking-wider text-[10px]">Query</th>
                                      <th className="text-left px-3 py-2.5 font-bold text-stone-600 uppercase tracking-wider text-[10px]">Date</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {displayedBookings.map((row, i) => (
                                      <tr
                                        key={row.id}
                                        className="border-t hover:bg-stone-50/50 transition-colors"
                                        style={{ borderColor: "#E8DFD0" }}
                                      >
                                        <td className="px-3 py-2.5 font-mono text-stone-400">{i + 1}</td>
                                        <td className="px-3 py-2.5 font-bold text-stone-900">{row.student_name || "—"}</td>
                                        <td className="px-3 py-2.5 text-stone-700">{row.student_phone || "—"}</td>
                                        <td className="px-3 py-2.5 text-stone-700">{row.student_class || "—"}</td>
                                        <td className="px-3 py-2.5 text-stone-700 whitespace-normal break-words leading-relaxed min-w-[140px] max-w-[240px]">{row.student_school || "—"}</td>
                                        <td className="px-3 py-2.5 text-stone-700 whitespace-normal break-words leading-relaxed min-w-[120px] max-w-[200px]">{row.student_location || "—"}</td>
                                        <td className="px-3 py-2.5">
                                          {row.career_opted ? (
                                            <span className="inline-block px-2 py-0.5 rounded-full text-[10px] font-bold" style={{ background: "#E8DFD0", color: "#7C5C3E" }}>
                                              {row.career_opted}
                                            </span>
                                          ) : (
                                            <span className="text-stone-400">—</span>
                                          )}
                                        </td>
                                        <td className="px-3 py-2.5 text-stone-700 min-w-[180px] max-w-[400px] whitespace-normal break-words leading-relaxed">
                                          {row.query_description || "—"}
                                        </td>
                                        <td className="px-3 py-2.5 text-stone-400 text-[10px] whitespace-nowrap">{formatDate(row.created_at)}</td>
                                      </tr>
                                    ))}
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          )
                        )}
                      </div>
                    );
                  })()}
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* ─── FOOTER ───────────────────────────────────────────────────────── */}
      <footer style={{ borderTop: "1px solid #E0D6CA", background: "#F0EBE1" }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-6 flex items-center justify-center text-xs font-semibold text-stone-500">
          <span>© {new Date().getFullYear()} Wabi Resolutions &amp; Career Guidance</span>
        </div>
      </footer>
    </main>
  );
};

export default CounsellorDashboard;
