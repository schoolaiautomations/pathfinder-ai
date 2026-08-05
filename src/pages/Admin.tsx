import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { 
  Users, 
  Search, 
  Download, 
  Trash2, 
  Eye, 
  RefreshCw, 
  LogOut, 
  ShieldCheck, 
  GraduationCap, 
  Sparkles, 
  FileText, 
  Calendar,
  X,
  Printer,
  ChevronRight,
  TrendingUp,
  MapPin,
  Lock,
  Mail,
  Key
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import wabiLogo from "@/lib/wabi_resolutions_logo.jpeg";
import { getSubmissionsFromSupabase, deleteSubmission, type SubmissionRecord } from "@/lib/supabase";
import { downloadReportAsPDF, downloadFormPreviewAsPDF } from "@/lib/pdf-report";

const ADMIN_STORAGE_KEY = "wabi_admin_authed";
const ADMIN_USERNAME = "wabiresolutions@gmail.com";
const ADMIN_PASSWORD = "wabi1234@";

export const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return sessionStorage.getItem(ADMIN_STORAGE_KEY) === "true";
  });

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [submissions, setSubmissions] = useState<SubmissionRecord[]>([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [classFilter, setClassFilter] = useState("all");
  const [selectedRecord, setSelectedRecord] = useState<SubmissionRecord | null>(null);

  const { toast } = useToast();

  useEffect(() => {
    if (isAuthenticated) {
      loadSubmissions();
    }
  }, [isAuthenticated]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError("");
    if (username.trim() === ADMIN_USERNAME && password.trim() === ADMIN_PASSWORD) {
      sessionStorage.setItem(ADMIN_STORAGE_KEY, "true");
      setIsAuthenticated(true);
      toast({ title: "Welcome Admin", description: "Successfully logged in to Wabi Career Finder Dashboard." });
    } else {
      setLoginError("Invalid username or password. Please try again.");
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem(ADMIN_STORAGE_KEY);
    setIsAuthenticated(false);
    toast({ title: "Logged Out", description: "You have been logged out." });
  };

  const loadSubmissions = async () => {
    setLoading(true);
    try {
      const records = await getSubmissionsFromSupabase();
      setSubmissions(records);
    } catch (err) {
      console.error("Failed to load submissions:", err);
      toast({ title: "Error", description: "Failed to load submissions.", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id?: string) => {
    if (!id) return;
    if (confirm("Are you sure you want to delete this submission record?")) {
      await deleteSubmission(id);
      setSubmissions((prev) => prev.filter((s) => s.id !== id));
      if (selectedRecord?.id === id) setSelectedRecord(null);
      toast({ title: "Deleted", description: "Record removed successfully." });
    }
  };

  // Download raw form data PDF (answers user filled)
  const handleDownloadFormPDF = (record: SubmissionRecord) => {
    if (record.form_data) {
      downloadFormPreviewAsPDF(record.form_data);
    } else {
      toast({ title: "No Form Data", description: "Form data is not available for this record.", variant: "destructive" });
    }
  };

  // Download full AI career report PDF
  const handleDownloadReportPDF = (record: SubmissionRecord) => {
    if (record.report_data && record.form_data) {
      downloadReportAsPDF(record.report_data, record.form_data);
    } else {
      toast({ title: "Incomplete Data", description: "Full report data is not available for PDF export.", variant: "destructive" });
    }
  };

  const exportCSV = () => {
    if (!submissions.length) return;
    const headers = [
      "Date", "Name", "Phone", "Class", "Section", "Board", "School",
      "City", "State", "Father Profession", "Mother Profession",
      "Academic Performance", "Top AI Match", "Match Score", "Career Dream"
    ];

    const rows = filteredSubmissions.map((s) => [
      new Date(s.created_at).toLocaleString(),
      `"${s.name || ""}"`,
      `"${s.phone_number || ""}"`,
      `"${s.education_level || ""}"`,
      `"${s.section || ""}"`,
      `"${s.board || ""}"`,
      `"${s.school_name || ""}"`,
      `"${s.city || ""}"`,
      `"${s.state || ""}"`,
      `"${s.father_profession || ""}"`,
      `"${s.mother_profession || ""}"`,
      `"${s.performance || ""}"`,
      `"${s.top_match || ""}"`,
      `"${s.top_match_score || ""}%"`,
      `"${s.career_dream || ""}"`
    ]);

    const csvContent = "data:text/csv;charset=utf-8," + [headers.join(","), ...rows.map(e => e.join(","))].join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `wabi_submissions_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Filtering
  const filteredSubmissions = submissions.filter((s) => {
    const q = search.toLowerCase();
    const matchesSearch =
      (s.name || "").toLowerCase().includes(q) ||
      (s.phone_number || "").toLowerCase().includes(q) ||
      (s.education_level || "").toLowerCase().includes(q) ||
      (s.section || "").toLowerCase().includes(q) ||
      (s.city || "").toLowerCase().includes(q) ||
      (s.state || "").toLowerCase().includes(q) ||
      (s.career_dream || "").toLowerCase().includes(q);

    const matchesClass = classFilter === "all" || s.education_level === classFilter;
    return matchesSearch && matchesClass;
  });

  // Analytics stats
  const totalSubmissions = submissions.length;
  const uniquePhones = new Set(submissions.map((s) => s.phone_number).filter(Boolean)).size;
  const topMatchCountMap: Record<string, number> = {};
  submissions.forEach((s) => {
    if (s.top_match) {
      topMatchCountMap[s.top_match] = (topMatchCountMap[s.top_match] || 0) + 1;
    }
  });
  const mostPopularCareer = Object.entries(topMatchCountMap).sort((a, b) => b[1] - a[1])[0]?.[0] || "None yet";

  // Login Screen
  if (!isAuthenticated) {
    return (
      <main className="min-h-screen bg-background flex items-center justify-center p-4">
        <Card className="max-w-md w-full bg-white border border-zinc-200 rounded-3xl p-6 sm:p-8 shadow-card animate-fade-in">
          <div className="text-center mb-6">
            <img 
              src={wabiLogo} 
              alt="Wabi Logo" 
              className="w-14 h-14 mx-auto rounded-full object-cover border border-zinc-200 shadow-sm mb-3" 
            />
            <h1 className="text-2xl font-extrabold text-zinc-950">Wabi Admin Portal</h1>
            <p className="text-zinc-500 text-xs mt-1 font-medium">Sign in to view student submissions & AI reports</p>
          </div>

          {loginError && (
            <div className="mb-4 p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-semibold text-center">
              {loginError}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-1.5">
              <Label className="text-xs font-semibold">Email / Username</Label>
              <div className="relative">
                <Mail className="w-4 h-4 text-zinc-400 absolute left-3 top-3.5" />
                <Input 
                  type="email" 
                  value={username} 
                  onChange={(e) => setUsername(e.target.value)} 
                  placeholder="wabiresolutions@gmail.com"
                  className="pl-9 rounded-xl h-11"
                  required
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <Label className="text-xs font-semibold">Password</Label>
              <div className="relative">
                <Key className="w-4 h-4 text-zinc-400 absolute left-3 top-3.5" />
                <Input 
                  type="password" 
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)} 
                  placeholder="••••••••"
                  className="pl-9 rounded-xl h-11"
                  required
                />
              </div>
            </div>

            <Button type="submit" className="w-full bg-black text-white hover:bg-zinc-800 rounded-xl h-11 font-bold text-sm shadow-sm mt-2">
              <Lock className="w-4 h-4 mr-2" /> Sign In
            </Button>
          </form>

          <div className="mt-6 pt-4 border-t border-zinc-100 text-center">
            <Link to="/" className="text-xs text-zinc-500 hover:text-black font-semibold">← Back to Wabi Career Finder</Link>
          </div>
        </Card>
      </main>
    );
  }

  // Dashboard View
  return (
    <main className="min-h-screen bg-background pb-16 safe-bottom">
      {/* Top Header Navbar */}
      <header className="bg-white border-b border-zinc-200 sticky top-0 z-20">
        <div className="max-w-7xl mx-auto px-4 py-3 sm:py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src={wabiLogo} 
              alt="Wabi Logo" 
              className="w-9 h-9 rounded-full object-cover border border-zinc-200 shadow-sm" 
            />
            <div>
              <span className="font-extrabold text-base sm:text-lg text-zinc-950 tracking-tight block">Wabi Career Finder</span>
              <span className="text-[10px] sm:text-xs font-semibold text-zinc-500 uppercase tracking-wider">Admin Dashboard</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" onClick={loadSubmissions} disabled={loading} className="rounded-xl h-9 text-xs font-bold border-zinc-300">
              <RefreshCw className={`w-3.5 h-3.5 mr-1.5 ${loading ? "animate-spin" : ""}`} /> Refresh
            </Button>
            <Button variant="outline" size="sm" onClick={handleLogout} className="rounded-xl h-9 text-xs font-bold text-red-600 hover:text-red-700 border-zinc-300 hover:bg-red-50">
              <LogOut className="w-3.5 h-3.5 sm:mr-1.5" /> <span className="hidden sm:inline">Logout</span>
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-3 sm:px-6 pt-6 sm:pt-8">
        
        {/* Analytics Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-8">
          <Card className="p-4 sm:p-5 rounded-2xl bg-white border border-zinc-200 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-zinc-100 flex items-center justify-center text-black shrink-0">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-extrabold text-zinc-950">{totalSubmissions}</div>
                <div className="text-xs text-zinc-500 font-medium">Total Submissions</div>
              </div>
            </div>
          </Card>

          <Card className="p-4 sm:p-5 rounded-2xl bg-white border border-zinc-200 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-zinc-100 flex items-center justify-center text-black shrink-0">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-extrabold text-zinc-950">{uniquePhones}</div>
                <div className="text-xs text-zinc-500 font-medium">Unique Students</div>
              </div>
            </div>
          </Card>

          <Card className="p-4 sm:p-5 rounded-2xl bg-white border border-zinc-200 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-zinc-100 flex items-center justify-center text-black shrink-0">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm sm:text-base font-extrabold text-zinc-950 truncate max-w-[140px]">{mostPopularCareer}</div>
                <div className="text-xs text-zinc-500 font-medium">Top Recommended Path</div>
              </div>
            </div>
          </Card>

          <Card className="p-4 sm:p-5 rounded-2xl bg-white border border-zinc-200 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-zinc-100 flex items-center justify-center text-black shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-extrabold text-zinc-950">Active</div>
                <div className="text-xs text-zinc-500 font-medium">Supabase Cloud Sync</div>
              </div>
            </div>
          </Card>
        </div>

        {/* Search, Filter & Export Controls */}
        <Card className="p-4 rounded-2xl bg-white border border-zinc-200 shadow-sm mb-6">
          <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between">
            <div className="flex flex-col sm:flex-row gap-3 flex-1">
              <div className="relative flex-1">
                <Search className="w-4 h-4 text-zinc-400 absolute left-3 top-3.5" />
                <Input
                  type="text"
                  placeholder="Search by student name, phone, class, section, city..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="pl-9 rounded-xl h-10 text-xs sm:text-sm"
                />
              </div>
              <select
                value={classFilter}
                onChange={(e) => setClassFilter(e.target.value)}
                className="h-10 rounded-xl border border-zinc-200 bg-white px-3 text-xs sm:text-sm font-medium text-zinc-900 focus:outline-none focus:ring-1 focus:ring-black"
              >
                <option value="all">All Classes / Levels</option>
                <option value="Class 6">Class 6</option>
                <option value="Class 7">Class 7</option>
                <option value="Class 8">Class 8</option>
                <option value="Class 9">Class 9</option>
                <option value="Class 10">Class 10</option>
                <option value="Class 11">Class 11</option>
                <option value="Class 12">Class 12</option>
                <option value="Diploma">Diploma</option>
                <option value="Undergraduate">Undergraduate</option>
                <option value="Graduate">Graduate</option>
              </select>
            </div>
            
            <Button onClick={exportCSV} disabled={!filteredSubmissions.length} size="sm" className="bg-black text-white hover:bg-zinc-800 rounded-xl h-10 px-4 font-semibold text-xs shrink-0">
              <Download className="w-3.5 h-3.5 mr-1.5" /> Export Excel / CSV
            </Button>
          </div>
        </Card>

        {/* Submissions Table / Cards */}
        {loading ? (
          <div className="text-center py-16">
            <RefreshCw className="w-8 h-8 animate-spin mx-auto text-zinc-400 mb-3" />
            <p className="text-sm font-medium text-zinc-500">Loading student submissions...</p>
          </div>
        ) : filteredSubmissions.length === 0 ? (
          <Card className="text-center py-16 px-4 rounded-3xl bg-white border border-zinc-200">
            <Users className="w-12 h-12 text-zinc-300 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-zinc-950">No Submissions Found</h3>
            <p className="text-xs sm:text-sm text-zinc-500 mt-1 max-w-sm mx-auto">
              {search || classFilter !== "all"
                ? "No student record matches your search filter."
                : "When students complete the guidance form, their full details and AI reports will automatically appear here."}
            </p>
          </Card>
        ) : (
          <div className="bg-white border border-zinc-200 rounded-2xl sm:rounded-3xl shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm border-collapse">
                <thead>
                  <tr className="bg-zinc-50/80 border-b border-zinc-200 text-zinc-500 font-semibold uppercase tracking-wider text-[11px]">
                    <th className="py-3.5 px-4">Date</th>
                    <th className="py-3.5 px-4">Student Name</th>
                    <th className="py-3.5 px-4">Phone</th>
                    <th className="py-3.5 px-4">Class & Section</th>
                    <th className="py-3.5 px-4">Location</th>
                    <th className="py-3.5 px-4">Top AI Match</th>
                    <th className="py-3.5 px-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-100">
                  {filteredSubmissions.map((s) => (
                    <tr key={s.id || s.created_at} className="hover:bg-zinc-50/60 transition-colors">
                      <td className="py-3.5 px-4 text-zinc-500 font-medium whitespace-nowrap text-xs">
                        {new Date(s.created_at).toLocaleDateString("en-IN", { month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" })}
                      </td>
                      <td className="py-3.5 px-4 font-bold text-zinc-950 whitespace-nowrap">
                        {s.name || "Anonymous"}
                      </td>
                      <td className="py-3.5 px-4 text-zinc-700 font-semibold whitespace-nowrap">
                        {s.phone_number || "—"}
                      </td>
                      <td className="py-3.5 px-4 whitespace-nowrap">
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-zinc-100 border border-zinc-200 text-xs font-bold text-zinc-900">
                          {s.education_level || "—"} {s.section ? `(${s.section})` : ""}
                        </span>
                      </td>
                      <td className="py-3.5 px-4 text-zinc-600 whitespace-nowrap">
                        {[s.city, s.state].filter(Boolean).join(", ") || "—"}
                      </td>
                      <td className="py-3.5 px-4 whitespace-nowrap">
                        {s.top_match ? (
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-zinc-900">{s.top_match}</span>
                            {s.top_match_score ? (
                              <span className="text-[11px] font-extrabold bg-black text-white px-1.5 py-0.5 rounded-md">
                                {s.top_match_score}%
                              </span>
                            ) : null}
                          </div>
                        ) : (
                          <span className="text-zinc-400">—</span>
                        )}
                      </td>
                      <td className="py-3.5 px-4 text-right whitespace-nowrap">
                        <div className="flex items-center justify-end gap-1.5">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => setSelectedRecord(s)}
                            className="h-8 px-2.5 rounded-lg border-zinc-300 text-xs font-semibold"
                            title="View Full Preview & Report"
                          >
                            <Eye className="w-3.5 h-3.5 mr-1" /> View
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleDownloadFormPDF(s)}
                            className="h-8 px-2.5 rounded-lg border-zinc-300 text-xs font-semibold bg-zinc-50"
                            title="Download Form Answers PDF"
                          >
                            <FileText className="w-3.5 h-3.5 mr-1 text-zinc-700" /> Form PDF
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleDownloadReportPDF(s)}
                            className="h-8 px-2.5 rounded-lg border-zinc-300 text-xs font-semibold bg-zinc-900 text-white hover:bg-zinc-800"
                            title="Download AI Career Report PDF"
                          >
                            <Sparkles className="w-3.5 h-3.5 mr-1 text-white" /> Report PDF
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleDelete(s.id)}
                            className="h-8 w-8 p-0 text-zinc-400 hover:text-red-600 hover:bg-red-50 rounded-lg"
                            title="Delete"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>

      {/* Detail Modal View */}
      {selectedRecord && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
          <div className="bg-white border border-zinc-200 rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl p-5 sm:p-8 animate-scale-in">
            {/* Modal Header */}
            <div className="flex items-start justify-between border-b border-zinc-100 pb-4 mb-6">
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-zinc-100 text-xs font-bold text-zinc-800 uppercase tracking-wider mb-2">
                  Student Profile & AI Report
                </span>
                <h2 className="text-2xl font-extrabold text-zinc-950">{selectedRecord.name}</h2>
                <p className="text-xs text-zinc-500 mt-0.5">Submitted on {new Date(selectedRecord.created_at).toLocaleString()}</p>
              </div>
              <button 
                onClick={() => setSelectedRecord(null)}
                className="w-9 h-9 rounded-full bg-zinc-100 hover:bg-zinc-200 flex items-center justify-center text-zinc-700 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="space-y-6 text-sm">
              
              {/* Form Data Preview Section */}
              <div>
                <h3 className="font-bold text-base text-zinc-950 mb-3 flex items-center gap-2">
                  <FileText className="w-4 h-4" /> Form Submission Answers (User Filled Preview)
                </h3>
                <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2.5 bg-zinc-50 border border-zinc-200 p-4 rounded-2xl text-xs sm:text-sm">
                  <div><span className="font-semibold text-zinc-500">Phone:</span> <span className="font-bold text-zinc-900">{selectedRecord.phone_number || "—"}</span></div>
                  <div><span className="font-semibold text-zinc-500">Class & Section:</span> <span className="font-bold text-zinc-900">{selectedRecord.education_level || "—"} {selectedRecord.section ? `(${selectedRecord.section})` : ""}</span></div>
                  <div><span className="font-semibold text-zinc-500">Board:</span> <span className="font-bold text-zinc-900">{selectedRecord.board || "—"}</span></div>
                  <div><span className="font-semibold text-zinc-500">School/College:</span> <span className="font-bold text-zinc-900">{selectedRecord.school_name || "—"}</span></div>
                  <div><span className="font-semibold text-zinc-500">Academic Performance:</span> <span className="font-bold text-zinc-900">{selectedRecord.performance || "—"}</span></div>
                  <div><span className="font-semibold text-zinc-500">Location:</span> <span className="font-bold text-zinc-900">{[selectedRecord.city, selectedRecord.state, selectedRecord.country].filter(Boolean).join(", ") || "—"}</span></div>
                  <div><span className="font-semibold text-zinc-500">Father's Profession:</span> <span className="font-bold text-zinc-900">{selectedRecord.father_profession || "—"}</span></div>
                  <div><span className="font-semibold text-zinc-500">Mother's Profession:</span> <span className="font-bold text-zinc-900">{selectedRecord.mother_profession || "—"}</span></div>
                  <div className="sm:col-span-2"><span className="font-semibold text-zinc-500">Interests:</span> <span className="font-bold text-zinc-900">{selectedRecord.interests?.length ? selectedRecord.interests.join(", ") : "—"}</span></div>
                  <div className="sm:col-span-2"><span className="font-semibold text-zinc-500">Skills:</span> <span className="font-bold text-zinc-900">{selectedRecord.skills?.length ? selectedRecord.skills.join(", ") : "—"}</span></div>
                  <div className="sm:col-span-2"><span className="font-semibold text-zinc-500">Career Dream:</span> <span className="font-bold text-zinc-900">{selectedRecord.career_dream || "—"}</span></div>
                </div>
              </div>

              {/* AI Report Section */}
              {selectedRecord.report_data?.matches && (
                <div>
                  <h3 className="font-bold text-base text-zinc-950 mb-3 flex items-center gap-2">
                    <Sparkles className="w-4 h-4" /> AI Recommended Careers
                  </h3>
                  <div className="space-y-3">
                    {selectedRecord.report_data.matches.map((m, idx) => (
                      <div key={m.name} className="p-4 rounded-2xl border border-zinc-200 bg-white">
                        <div className="flex items-center justify-between gap-3">
                          <div className="flex items-center gap-3">
                            <span className="w-7 h-7 rounded-lg bg-black text-white font-bold flex items-center justify-center text-xs">
                              {idx + 1}
                            </span>
                            <span className="font-bold text-base text-zinc-950">{m.name}</span>
                          </div>
                          <span className="text-base font-extrabold text-black">{m.score}%</span>
                        </div>
                        <p className="text-xs text-zinc-600 mt-2">{m.why}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>

            {/* Modal Footer */}
            <div className="mt-8 pt-4 border-t border-zinc-100 flex flex-col sm:flex-row gap-3 sm:justify-end">
              <Button variant="outline" onClick={() => setSelectedRecord(null)} className="rounded-xl border-zinc-300">
                Close
              </Button>
              <Button variant="outline" onClick={() => handleDownloadFormPDF(selectedRecord)} className="rounded-xl border-zinc-300 font-semibold bg-zinc-50">
                <FileText className="w-4 h-4 mr-2" /> Download Form Answers PDF
              </Button>
              <Button onClick={() => handleDownloadReportPDF(selectedRecord)} className="bg-black text-white hover:bg-zinc-800 rounded-xl px-6 font-semibold">
                <Sparkles className="w-4 h-4 mr-2" /> Download AI Report PDF
              </Button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default Admin;
