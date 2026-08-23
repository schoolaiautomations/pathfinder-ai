import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import {
  fetchRoadmapBasicByCounsellor,
  fetchBookCouncellingAll,
} from "@/lib/supabase";
import type { RoadmapBasicRow, BookCouncellingRow } from "@/lib/supabase";
import wabiLogo from "@/lib/wabi_resolutions_logo.jpeg";

const COUNSELLOR_PASSWORD = "wabi123";

const CounsellorDashboard = () => {
  const { toast } = useToast();

  // Auth state
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState("");

  // Data state
  const [allSubmissions, setAllSubmissions] = useState<RoadmapBasicRow[]>([]);
  const [allBookings, setAllBookings] = useState<BookCouncellingRow[]>([]);
  const [submissions, setSubmissions] = useState<RoadmapBasicRow[]>([]);
  const [bookings, setBookings] = useState<BookCouncellingRow[]>([]);
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState<"submissions" | "bookings">("submissions");

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

  // Apply filter: strictly only this counsellor's submissions
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
    setBookings(filteredBooks);
  }, [allSubmissions, allBookings, username]);

  const loadData = async () => {
    setLoading(true);
    try {
      // Fetch all records and filter in-memory for maximum resilience
      const [subs, books] = await Promise.all([
        fetchRoadmapBasicByCounsellor(), // fetches all
        fetchBookCouncellingAll(),      // fetches all
      ]);
      setAllSubmissions(subs);
      setAllBookings(books);
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
        <div className="max-w-7xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <img src={wabiLogo} alt="Wabi" className="w-9 h-9 sm:w-10 sm:h-10 rounded-full object-cover shadow-sm" />
            <div>
              <span className="font-extrabold text-sm sm:text-base text-stone-900 tracking-tight block leading-none">
                Wabi Career Guidance
              </span>
              <span className="text-[10px] font-semibold text-stone-400 tracking-widest uppercase block mt-0.5">
                Counsellor Dashboard
              </span>
            </div>
          </Link>
          <div className="flex items-center gap-2">
            {isLoggedIn && (
              <button
                onClick={handleLogout}
                className="text-xs font-semibold text-stone-500 hover:text-stone-900 px-3 py-1.5 rounded-xl border border-stone-200 bg-white hover:bg-stone-50 transition-all cursor-pointer"
              >
                Logout
              </button>
            )}
            <Link
              to="/"
              className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-stone-600 hover:text-stone-900 px-3.5 py-1.5 rounded-xl border border-stone-200 bg-white hover:bg-stone-50 transition-all shadow-2xs"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Home</span>
            </Link>
          </div>
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
                
                <button
                  onClick={loadData}
                  disabled={loading}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold bg-white border border-stone-200 hover:bg-stone-50 transition-all cursor-pointer shadow-2xs disabled:opacity-50 self-start sm:self-auto"
                >
                  <RefreshCw className={`w-3.5 h-3.5 ${loading ? "animate-spin" : ""}`} />
                  Refresh
                </button>
              </div>

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

              {/* Tabs */}
              <div className="flex gap-1 p-1 rounded-xl" style={{ background: "#E8DFD0" }}>
                <button
                  onClick={() => setActiveTab("submissions")}
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
                  onClick={() => setActiveTab("bookings")}
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
                            <th className="text-left px-3 py-2.5 font-bold text-stone-600 uppercase tracking-wider text-[10px]">Date</th>
                          </tr>
                        </thead>
                        <tbody>
                          {submissions.map((row, i) => (
                            <tr
                              key={row.id}
                              className="border-t hover:bg-stone-50/50 transition-colors"
                              style={{ borderColor: "#E8DFD0" }}
                            >
                              <td className="px-3 py-2.5 font-mono text-stone-400">{i + 1}</td>
                              <td className="px-3 py-2.5 font-bold text-stone-900">{row.student_name || "—"}</td>
                              <td className="px-3 py-2.5 text-stone-700">{row.student_phone || "—"}</td>
                              <td className="px-3 py-2.5 text-stone-700">{row.student_class || "—"}</td>
                              <td className="px-3 py-2.5 text-stone-700 max-w-[120px] truncate">{row.student_school || "—"}</td>
                              <td className="px-3 py-2.5 text-stone-700">{row.student_location || "—"}</td>
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
                          {bookings.map((row, i) => (
                            <tr
                              key={row.id}
                              className="border-t hover:bg-stone-50/50 transition-colors"
                              style={{ borderColor: "#E8DFD0" }}
                            >
                              <td className="px-3 py-2.5 font-mono text-stone-400">{i + 1}</td>
                              <td className="px-3 py-2.5 font-bold text-stone-900">{row.student_name || "—"}</td>
                              <td className="px-3 py-2.5 text-stone-700">{row.student_phone || "—"}</td>
                              <td className="px-3 py-2.5 text-stone-700">{row.student_class || "—"}</td>
                              <td className="px-3 py-2.5 text-stone-700 max-w-[120px] truncate">{row.student_school || "—"}</td>
                              <td className="px-3 py-2.5 text-stone-700">{row.student_location || "—"}</td>
                              <td className="px-3 py-2.5">
                                {row.career_opted ? (
                                  <span className="inline-block px-2 py-0.5 rounded-full text-[10px] font-bold" style={{ background: "#E8DFD0", color: "#7C5C3E" }}>
                                    {row.career_opted}
                                  </span>
                                ) : (
                                  <span className="text-stone-400">—</span>
                                )}
                              </td>
                              <td className="px-3 py-2.5 text-stone-600 max-w-[180px] truncate">{row.query_description || "—"}</td>
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
          )}
        </div>
      </div>

      {/* ─── FOOTER ───────────────────────────────────────────────────────── */}
      <footer style={{ borderTop: "1px solid #E0D6CA", background: "#F0EBE1" }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-semibold text-stone-500">
          <span>© {new Date().getFullYear()} Wabi Resolutions &amp; Career Guidance</span>
          <div className="flex items-center gap-4">
            <Link to="/" className="hover:text-stone-900 transition-colors">Home</Link>
            <Link to="/roadmap" className="hover:text-stone-900 transition-colors">Roadmap</Link>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default CounsellorDashboard;
