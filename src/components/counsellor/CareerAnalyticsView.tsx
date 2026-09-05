import { useState, useMemo } from "react";
import {
  PieChart as RechartsPie,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import type { RoadmapBasicRow, BookCouncellingRow } from "@/lib/supabase";
import {
  PieChart as PieChartIcon,
  BarChart3,
  TrendingUp,
  Award,
  MapPin,
  School,
  GraduationCap,
  Users,
  Compass,
  Calendar,
  Filter,
  X,
  Sparkles,
  ArrowUpRight,
  HelpCircle,
} from "lucide-react";

interface CareerAnalyticsViewProps {
  submissions: RoadmapBasicRow[];
  bookings: BookCouncellingRow[];
  onClose?: () => void;
  isModal?: boolean;
}

const PALETTE = [
  "#7C5C3E", // Warm brown
  "#1C1917", // Dark stone
  "#C9A97A", // Warm gold
  "#0284C7", // Sky blue
  "#0D9488", // Teal
  "#E11D48", // Rose red
  "#8B5CF6", // Purple
  "#F59E0B", // Amber
  "#10B981", // Emerald
  "#64748B", // Slate
  "#EC4899", // Pink
  "#6366F1", // Indigo
];

// Helper to normalize career names
const normalizeCareer = (name?: string | null): string => {
  if (!name) return "Not Specified";
  const trimmed = name.trim();
  if (!trimmed || trimmed === "—" || trimmed === "-") return "Not Specified";
  return trimmed;
};

// Helper to normalize class names
const normalizeClass = (cls?: string | null): string => {
  if (!cls) return "Other / Not Specified";
  const c = cls.trim().toLowerCase();
  if (c.includes("8") || c.includes("eighth")) return "Class 8";
  if (c.includes("9") || c.includes("ninth")) return "Class 9";
  if (c.includes("10") || c.includes("tenth")) return "Class 10";
  if (c.includes("11") || c.includes("inter 1") || c.includes("first")) return "Intermediate 1st Year";
  if (c.includes("12") || c.includes("inter 2") || c.includes("second")) return "Intermediate 2nd Year";
  if (c.includes("degree") || c.includes("college") || c.includes("btech")) return "Degree / College";
  return cls.trim();
};

export const CareerAnalyticsView = ({
  submissions,
  bookings,
  onClose,
  isModal = false,
}: CareerAnalyticsViewProps) => {
  const [selectedSchool, setSelectedSchool] = useState<string>("ALL");
  const [selectedClass, setSelectedClass] = useState<string>("ALL");
  const [activeTab, setActiveTab] = useState<"overview" | "by_class" | "by_school" | "locations" | "bookings">("overview");

  // Extract unique schools & classes for filters
  const uniqueSchools = useMemo(() => {
    const set = new Set<string>();
    submissions.forEach((s) => {
      const sch = (s.student_school || "").trim();
      if (sch && sch !== "—" && sch !== "-") set.add(sch);
    });
    return Array.from(set).sort((a, b) => a.localeCompare(b));
  }, [submissions]);

  const uniqueClasses = useMemo(() => {
    const set = new Set<string>();
    submissions.forEach((s) => {
      const cls = normalizeClass(s.student_class);
      if (cls) set.add(cls);
    });
    return Array.from(set).sort((a, b) => a.localeCompare(b));
  }, [submissions]);

  // Filter submissions by school & class
  const filteredSubmissions = useMemo(() => {
    return submissions.filter((s) => {
      const rawSchool = (s.student_school || "").trim();
      const schoolMatches = selectedSchool === "ALL" || rawSchool.toLowerCase() === selectedSchool.toLowerCase();
      const normClass = normalizeClass(s.student_class);
      const classMatches = selectedClass === "ALL" || normClass.toLowerCase() === selectedClass.toLowerCase();
      return schoolMatches && classMatches;
    });
  }, [submissions, selectedSchool, selectedClass]);

  // 1. Overall Top Careers Distribution (for Pie & Ranked List)
  const careerDistribution = useMemo(() => {
    const counts: Record<string, number> = {};
    filteredSubmissions.forEach((s) => {
      const career = normalizeCareer(s.career_opted);
      counts[career] = (counts[career] || 0) + 1;
    });

    const total = filteredSubmissions.length || 1;
    const sorted = Object.entries(counts)
      .map(([name, count]) => ({
        name,
        count,
        percentage: Number(((count / total) * 100).toFixed(1)),
      }))
      .sort((a, b) => b.count - a.count);

    return sorted;
  }, [filteredSubmissions]);

  // Group smaller careers into "Other Careers" for clean Pie Chart rendering
  const pieChartData = useMemo(() => {
    if (careerDistribution.length <= 7) return careerDistribution;
    const top6 = careerDistribution.slice(0, 6);
    const otherCount = careerDistribution.slice(6).reduce((acc, curr) => acc + curr.count, 0);
    const total = filteredSubmissions.length || 1;
    return [
      ...top6,
      {
        name: "Other Careers",
        count: otherCount,
        percentage: Number(((otherCount / total) * 100).toFixed(1)),
      },
    ];
  }, [careerDistribution, filteredSubmissions.length]);

  // 2. Career Breakdown by Class / Grade
  const classBreakdownData = useMemo(() => {
    // Get top 5 careers overall
    const topCareers = careerDistribution.slice(0, 5).map((c) => c.name);

    const classes = ["Class 8", "Class 9", "Class 10"];
    return classes.map((clsName) => {
      const classSubs = submissions.filter((s) => normalizeClass(s.student_class) === clsName);
      const row: Record<string, any> = { class: clsName, total: classSubs.length };

      topCareers.forEach((career) => {
        const cCount = classSubs.filter((s) => normalizeCareer(s.career_opted) === career).length;
        row[career] = cCount;
      });

      return row;
    });
  }, [submissions, careerDistribution]);

  // 3. School-wise Top Career & Submissions Count
  const schoolComparisonData = useMemo(() => {
    const map: Record<string, { school: string; count: number; careerCounts: Record<string, number> }> = {};

    submissions.forEach((s) => {
      const rawSchool = (s.student_school || "").trim();
      const school = rawSchool && rawSchool !== "—" && rawSchool !== "-" ? rawSchool : "Other / Not Specified";
      const career = normalizeCareer(s.career_opted);

      if (!map[school]) {
        map[school] = { school, count: 0, careerCounts: {} };
      }
      map[school].count += 1;
      map[school].careerCounts[career] = (map[school].careerCounts[career] || 0) + 1;
    });

    return Object.values(map)
      .map((item) => {
        let topCareer = "N/A";
        let topCareerCount = 0;
        Object.entries(item.careerCounts).forEach(([cName, cCnt]) => {
          if (cCnt > topCareerCount) {
            topCareer = cName;
            topCareerCount = cCnt;
          }
        });
        return {
          school: item.school,
          count: item.count,
          topCareer,
          topCareerCount,
        };
      })
      .sort((a, b) => b.count - a.count);
  }, [submissions]);

  // 4. Location / Village / Mandal Distribution
  const locationData = useMemo(() => {
    const counts: Record<string, number> = {};
    submissions.forEach((s) => {
      const loc = (s.student_location || "").trim();
      const cleanLoc = loc && loc !== "—" && loc !== "-" ? loc : "Not Specified";
      counts[cleanLoc] = (counts[cleanLoc] || 0) + 1;
    });

    const total = submissions.length || 1;
    return Object.entries(counts)
      .map(([location, count]) => ({
        location,
        count,
        percentage: Number(((count / total) * 100).toFixed(1)),
      }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 10);
  }, [submissions]);

  // 5. Booking Requests Analytics
  const bookingCareerData = useMemo(() => {
    const counts: Record<string, number> = {};
    bookings.forEach((b) => {
      const career = normalizeCareer(b.career_opted);
      counts[career] = (counts[career] || 0) + 1;
    });

    return Object.entries(counts)
      .map(([name, count]) => ({
        name,
        count,
        percentage: Number(((count / (bookings.length || 1)) * 100).toFixed(1)),
      }))
      .sort((a, b) => b.count - a.count);
  }, [bookings]);

  // Top metric highlights
  const topCareerOverall = careerDistribution[0] || { name: "N/A", count: 0, percentage: 0 };
  const totalUniqueCareers = careerDistribution.length;
  const topSchool = schoolComparisonData[0] || { school: "N/A", count: 0 };

  return (
    <div className="space-y-6">
      {/* ── HEADER BANNER ── */}
      <div
        className="rounded-3xl p-5 sm:p-7 text-stone-900 shadow-sm border relative overflow-hidden"
        style={{ background: "#F5F1EC", borderColor: "#E0D6CA" }}
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1.5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-stone-900 text-[#FAF8F5]">
              <PieChartIcon className="w-3.5 h-3.5 text-[#C9A97A]" />
              Visual Analytics Hub
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-stone-900 tracking-tight">
              Student Career Choices &amp; Submission Analytics
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 font-medium">
              In-depth breakdown of career aspirations, grade preferences, school rankings, and guidance demand.
            </p>
          </div>

          {onClose && (
            <button
              onClick={onClose}
              className="self-start sm:self-center p-2.5 rounded-2xl bg-white border border-stone-200 text-stone-600 hover:text-stone-900 hover:bg-stone-50 transition-all cursor-pointer shadow-xs"
              aria-label="Close Analytics"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* ── Top Summary Metric Pills ── */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mt-5">
          {/* Submissions Count */}
          <div className="p-3.5 rounded-2xl bg-white border border-[#E0D6CA] shadow-2xs">
            <div className="flex items-center justify-between text-[11px] font-bold text-stone-500 uppercase tracking-wider">
              <span>Roadmap Submissions</span>
              <Compass className="w-3.5 h-3.5 text-[#7C5C3E]" />
            </div>
            <div className="text-2xl font-black text-stone-900 mt-1">{filteredSubmissions.length}</div>
            <div className="text-[11px] text-stone-500 font-medium mt-0.5">
              Analyzed in current filter
            </div>
          </div>

          {/* Top Opted Career */}
          <div className="p-3.5 rounded-2xl bg-white border border-[#E0D6CA] shadow-2xs">
            <div className="flex items-center justify-between text-[11px] font-bold text-stone-500 uppercase tracking-wider">
              <span>#1 Top Career Pick</span>
              <Award className="w-3.5 h-3.5 text-amber-600" />
            </div>
            <div className="text-lg sm:text-xl font-black text-stone-900 truncate mt-1" title={topCareerOverall.name}>
              {topCareerOverall.name}
            </div>
            <div className="text-[11px] text-emerald-700 font-bold mt-0.5 flex items-center gap-1">
              <TrendingUp className="w-3 h-3" />
              {topCareerOverall.count} students ({topCareerOverall.percentage}%)
            </div>
          </div>

          {/* Unique Career Options */}
          <div className="p-3.5 rounded-2xl bg-white border border-[#E0D6CA] shadow-2xs">
            <div className="flex items-center justify-between text-[11px] font-bold text-stone-500 uppercase tracking-wider">
              <span>Career Diversity</span>
              <Sparkles className="w-3.5 h-3.5 text-[#C9A97A]" />
            </div>
            <div className="text-2xl font-black text-stone-900 mt-1">{totalUniqueCareers}</div>
            <div className="text-[11px] text-stone-500 font-medium mt-0.5">
              Unique career options selected
            </div>
          </div>

          {/* Top Active School */}
          <div className="p-3.5 rounded-2xl bg-white border border-[#E0D6CA] shadow-2xs">
            <div className="flex items-center justify-between text-[11px] font-bold text-stone-500 uppercase tracking-wider">
              <span>Top Active School</span>
              <School className="w-3.5 h-3.5 text-[#7C5C3E]" />
            </div>
            <div className="text-base font-black text-stone-900 truncate mt-1" title={topSchool.school}>
              {topSchool.school}
            </div>
            <div className="text-[11px] text-stone-500 font-medium mt-0.5">
              {topSchool.count} submissions recorded
            </div>
          </div>
        </div>
      </div>

      {/* ── FILTER & NAVIGATION BAR ── */}
      <div
        className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-3.5 p-3.5 rounded-2xl border bg-white shadow-2xs"
        style={{ borderColor: "#E0D6CA" }}
      >
        {/* Navigation Tabs (Flex-wrap, no horizontal overflow scrollbar) */}
        <div className="flex items-center flex-wrap gap-1.5">
          <button
            onClick={() => setActiveTab("overview")}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === "overview"
                ? "bg-stone-900 text-white shadow-xs"
                : "text-stone-600 hover:bg-stone-100"
            }`}
          >
            <PieChartIcon className="w-3.5 h-3.5" />
            Most Selected Careers
          </button>
          <button
            onClick={() => setActiveTab("by_class")}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === "by_class"
                ? "bg-stone-900 text-white shadow-xs"
                : "text-stone-600 hover:bg-stone-100"
            }`}
          >
            <GraduationCap className="w-3.5 h-3.5" />
            Class-wise Trends
          </button>
          <button
            onClick={() => setActiveTab("by_school")}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === "by_school"
                ? "bg-stone-900 text-white shadow-xs"
                : "text-stone-600 hover:bg-stone-100"
            }`}
          >
            <School className="w-3.5 h-3.5" />
            School Comparison
          </button>
          <button
            onClick={() => setActiveTab("locations")}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === "locations"
                ? "bg-stone-900 text-white shadow-xs"
                : "text-stone-600 hover:bg-stone-100"
            }`}
          >
            <MapPin className="w-3.5 h-3.5" />
            Location Distribution
          </button>
          <button
            onClick={() => setActiveTab("bookings")}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === "bookings"
                ? "bg-stone-900 text-white shadow-xs"
                : "text-stone-600 hover:bg-stone-100"
            }`}
          >
            <Calendar className="w-3.5 h-3.5" />
            Guidance Requests ({bookings.length})
          </button>
        </div>

        {/* Dynamic Filters */}
        <div className="flex items-center gap-2 flex-wrap shrink-0">
          {/* School Selector */}
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border bg-stone-50 text-xs font-bold text-stone-800" style={{ borderColor: "#DDD3C5" }}>
            <School className="w-3.5 h-3.5 text-[#7C5C3E] shrink-0" />
            <select
              value={selectedSchool}
              onChange={(e) => setSelectedSchool(e.target.value)}
              className="bg-transparent focus:outline-none cursor-pointer text-xs font-bold max-w-[150px] truncate"
            >
              <option value="ALL">All Schools</option>
              {uniqueSchools.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>

          {/* Class Selector */}
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border bg-stone-50 text-xs font-bold text-stone-800" style={{ borderColor: "#DDD3C5" }}>
            <GraduationCap className="w-3.5 h-3.5 text-[#7C5C3E] shrink-0" />
            <select
              value={selectedClass}
              onChange={(e) => setSelectedClass(e.target.value)}
              className="bg-transparent focus:outline-none cursor-pointer text-xs font-bold max-w-[130px] truncate"
            >
              <option value="ALL">All Classes</option>
              {uniqueClasses.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>

          {(selectedSchool !== "ALL" || selectedClass !== "ALL") && (
            <button
              onClick={() => {
                setSelectedSchool("ALL");
                setSelectedClass("ALL");
              }}
              className="p-1.5 rounded-lg text-rose-600 hover:bg-rose-50 cursor-pointer"
              title="Reset Filters"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* ── TAB 1: OVERVIEW & PIE CHART (MOST SELECTED CAREERS) ── */}
      {activeTab === "overview" && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Pie / Donut Chart */}
          <div
            className="lg:col-span-6 rounded-3xl p-5 sm:p-6 border bg-white shadow-xs flex flex-col justify-between"
            style={{ borderColor: "#E0D6CA" }}
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-base font-black text-stone-900 flex items-center gap-2">
                  <PieChartIcon className="w-4 h-4 text-[#7C5C3E]" />
                  Career Options Share (Pie Chart)
                </h3>
                <span className="text-[11px] font-bold text-stone-500 bg-stone-100 px-2 py-0.5 rounded-md">
                  {filteredSubmissions.length} Responses
                </span>
              </div>
              <p className="text-xs text-stone-500 font-medium mb-4">
                Visualizing student career aspiration percentages for current selection.
              </p>
            </div>

            {filteredSubmissions.length === 0 ? (
              <div className="py-16 text-center text-xs font-bold text-stone-400">
                No submissions found for the selected filter.
              </div>
            ) : (
              <div className="w-full h-[320px]">
                <ResponsiveContainer width="100%" height="100%">
                  <RechartsPie>
                    <Pie
                      data={pieChartData}
                      dataKey="count"
                      nameKey="name"
                      cx="50%"
                      cy="50%"
                      innerRadius={50}
                      outerRadius={85}
                      paddingAngle={3}
                      label={({ name, percent, x, y, textAnchor }) => {
                        const displayName = name.length > 15 ? `${name.substring(0, 14)}…` : name;
                        return (
                          <text
                            x={x}
                            y={y}
                            fill="#292524"
                            textAnchor={textAnchor}
                            dominantBaseline="central"
                            style={{
                              fontSize: "10px",
                              fontWeight: 700,
                              fontFamily: "inherit",
                            }}
                          >
                            {displayName} ({(percent * 100).toFixed(0)}%)
                          </text>
                        );
                      }}
                      labelLine={{ stroke: "#C9A97A", strokeWidth: 1 }}
                    >
                      {pieChartData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={PALETTE[index % PALETTE.length]} />
                      ))}
                    </Pie>
                    <Tooltip
                      formatter={(val: number, name: string) => [
                        `${val} students (${((val / filteredSubmissions.length) * 100).toFixed(1)}%)`,
                        name,
                      ]}
                      contentStyle={{
                        borderRadius: "12px",
                        border: "1px solid #DDD3C5",
                        backgroundColor: "#FFFFFF",
                        fontWeight: "600",
                        fontSize: "12px",
                      }}
                    />
                  </RechartsPie>
                </ResponsiveContainer>
              </div>
            )}

            <div className="pt-3 border-t border-stone-100 flex items-center justify-between text-[11px] text-stone-500 font-medium">
              <span>*Hover over chart slices to inspect counts</span>
              <span>Total: {filteredSubmissions.length}</span>
            </div>
          </div>

          {/* Ranked List & Progress Bars */}
          <div
            className="lg:col-span-6 rounded-3xl p-5 sm:p-6 border bg-white shadow-xs space-y-4"
            style={{ borderColor: "#E0D6CA" }}
          >
            <div>
              <h3 className="text-base font-black text-stone-900 flex items-center gap-2">
                <BarChart3 className="w-4 h-4 text-[#7C5C3E]" />
                Top Selected Careers (Ranked)
              </h3>
              <p className="text-xs text-stone-500 font-medium mt-0.5">
                Detailed student count and percentage share per career choice.
              </p>
            </div>

            <div className="space-y-2.5 max-h-[360px] overflow-y-auto pr-1">
              {careerDistribution.map((item, idx) => (
                <div
                  key={item.name}
                  className="p-3 rounded-2xl border bg-stone-50/50 hover:bg-stone-50 transition-all"
                  style={{ borderColor: "#EFEAE3" }}
                >
                  <div className="flex items-center justify-between text-xs mb-1.5">
                    <div className="flex items-center gap-2 min-w-0">
                      <span
                        className={`w-5 h-5 rounded-md text-[10px] font-black flex items-center justify-center shrink-0 ${
                          idx === 0
                            ? "bg-amber-500 text-white"
                            : idx === 1
                            ? "bg-stone-400 text-white"
                            : idx === 2
                            ? "bg-[#C9A97A] text-white"
                            : "bg-stone-200 text-stone-700"
                        }`}
                      >
                        {idx + 1}
                      </span>
                      <span className="font-extrabold text-stone-900 truncate" title={item.name}>
                        {item.name}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <span className="font-black text-stone-900">{item.count} students</span>
                      <span className="text-[11px] font-bold text-stone-500 bg-white px-2 py-0.5 rounded-full border border-stone-200">
                        {item.percentage}%
                      </span>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="w-full bg-stone-200 h-2 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-500"
                      style={{
                        width: `${item.percentage}%`,
                        backgroundColor: PALETTE[idx % PALETTE.length],
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ── TAB 2: CAREER CHOICES BY CLASS / GRADE ── */}
      {activeTab === "by_class" && (
        <div className="space-y-6">
          <div
            className="rounded-3xl p-5 sm:p-6 border bg-white shadow-xs space-y-4"
            style={{ borderColor: "#E0D6CA" }}
          >
            <div>
              <h3 className="text-base font-black text-stone-900 flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-[#7C5C3E]" />
                Career Choices Across Classes (Class 8 vs 9 vs 10)
              </h3>
              <p className="text-xs text-stone-500 font-medium mt-0.5">
                Compare how student career choices vary across 8th, 9th, and 10th grades.
              </p>
            </div>

            <div className="w-full h-[320px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={classBreakdownData} margin={{ top: 10, right: 20, left: 0, bottom: 10 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#F0EBE1" />
                  <XAxis dataKey="class" tick={{ fill: "#44403C", fontSize: 12, fontWeight: 700 }} />
                  <YAxis tick={{ fill: "#78716C", fontSize: 11 }} />
                  <Tooltip
                    contentStyle={{
                      borderRadius: "12px",
                      border: "1px solid #DDD3C5",
                      backgroundColor: "#FFFFFF",
                      fontWeight: "600",
                      fontSize: "12px",
                    }}
                  />
                  <Legend />
                  {careerDistribution.slice(0, 5).map((c, i) => (
                    <Bar
                      key={c.name}
                      dataKey={c.name}
                      fill={PALETTE[i % PALETTE.length]}
                      radius={[6, 6, 0, 0]}
                    />
                  ))}
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Class Breakdown Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {["Class 8", "Class 9", "Class 10"].map((clsName) => {
              const classSubs = submissions.filter((s) => normalizeClass(s.student_class) === clsName);
              const classCareerCounts: Record<string, number> = {};
              classSubs.forEach((s) => {
                const c = normalizeCareer(s.career_opted);
                classCareerCounts[c] = (classCareerCounts[c] || 0) + 1;
              });

              const topInClass = Object.entries(classCareerCounts)
                .map(([name, count]) => ({ name, count }))
                .sort((a, b) => b.count - a.count);

              return (
                <div
                  key={clsName}
                  className="p-5 rounded-3xl border bg-white shadow-2xs space-y-3"
                  style={{ borderColor: "#E0D6CA" }}
                >
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-xl text-xs font-black bg-stone-900 text-white">
                      {clsName}
                    </span>
                    <span className="text-xs font-bold text-stone-500">
                      {classSubs.length} Submissions
                    </span>
                  </div>

                  <div className="space-y-2 pt-2 border-t border-stone-100">
                    <div className="text-[10px] uppercase font-bold text-stone-400 tracking-wider">
                      Top Career Preferences:
                    </div>
                    {topInClass.slice(0, 4).map((c, idx) => (
                      <div key={c.name} className="flex items-center justify-between text-xs">
                        <span className="font-extrabold text-stone-800 truncate" title={c.name}>
                          {idx + 1}. {c.name}
                        </span>
                        <span className="font-black text-stone-900 bg-stone-100 px-2 py-0.5 rounded-lg text-[11px]">
                          {c.count} ({Math.round((c.count / (classSubs.length || 1)) * 100)}%)
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* ── TAB 3: SCHOOL COMPARISON ── */}
      {activeTab === "by_school" && (
        <div className="space-y-6">
          <div
            className="rounded-3xl p-5 sm:p-6 border bg-white shadow-xs space-y-4"
            style={{ borderColor: "#E0D6CA" }}
          >
            <div>
              <h3 className="text-base font-black text-stone-900 flex items-center gap-2">
                <School className="w-4 h-4 text-[#7C5C3E]" />
                School-wise Submissions &amp; Preferred Careers
              </h3>
              <p className="text-xs text-stone-500 font-medium mt-0.5">
                Comparison of submission volumes and the leading career interest per school.
              </p>
            </div>

            <div className="w-full h-[280px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={schoolComparisonData.slice(0, 8)} margin={{ top: 10, right: 10, left: 0, bottom: 25 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#F0EBE1" />
                  <XAxis
                    dataKey="school"
                    tick={{ fill: "#44403C", fontSize: 10, fontWeight: 700 }}
                    angle={-15}
                    textAnchor="end"
                  />
                  <YAxis tick={{ fill: "#78716C", fontSize: 11 }} />
                  <Tooltip
                    formatter={(val: number, name: string) => [`${val} Submissions`, "Total"]}
                    contentStyle={{
                      borderRadius: "12px",
                      border: "1px solid #DDD3C5",
                      backgroundColor: "#FFFFFF",
                      fontWeight: "600",
                      fontSize: "12px",
                    }}
                  />
                  <Bar dataKey="count" fill="#7C5C3E" radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* School Details Table */}
          <div
            className="rounded-3xl border bg-white shadow-xs overflow-hidden"
            style={{ borderColor: "#E0D6CA" }}
          >
            <div className="p-4 border-b border-stone-200 bg-stone-50 flex items-center justify-between">
              <span className="text-xs font-black text-stone-900 uppercase tracking-wider">
                All Schools Summary ({schoolComparisonData.length} Schools)
              </span>
              <span className="text-xs text-stone-500 font-medium">
                Total Submissions: <strong>{submissions.length}</strong>
              </span>
            </div>

            <div className="divide-y divide-stone-100 max-h-[350px] overflow-y-auto">
              {schoolComparisonData.map((sch, i) => (
                <div key={sch.school} className="p-3.5 sm:p-4 flex items-center justify-between gap-3 hover:bg-stone-50/60 transition-colors">
                  <div className="flex items-center gap-3 min-w-0">
                    <span className="w-6 h-6 rounded-lg bg-stone-100 text-stone-700 text-xs font-black flex items-center justify-center shrink-0">
                      {i + 1}
                    </span>
                    <div className="min-w-0">
                      <div className="text-xs sm:text-sm font-extrabold text-stone-900 truncate" title={sch.school}>
                        {sch.school}
                      </div>
                      <div className="text-[11px] text-stone-500 font-medium">
                        Leading Choice: <strong className="text-stone-800">{sch.topCareer}</strong> ({sch.topCareerCount} students)
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 shrink-0">
                    <span className="px-3 py-1 rounded-xl bg-stone-900 text-white text-xs font-black">
                      {sch.count} Submissions
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ── TAB 4: LOCATIONS & GEOGRAPHY ── */}
      {activeTab === "locations" && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div
            className="lg:col-span-7 rounded-3xl p-5 sm:p-6 border bg-white shadow-xs space-y-4"
            style={{ borderColor: "#E0D6CA" }}
          >
            <div>
              <h3 className="text-base font-black text-stone-900 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#7C5C3E]" />
                Top Student Locations / Mandals
              </h3>
              <p className="text-xs text-stone-500 font-medium mt-0.5">
                Geographic concentration of applicants across mandals, towns, and villages.
              </p>
            </div>

            <div className="space-y-2.5">
              {locationData.map((loc, idx) => (
                <div
                  key={loc.location}
                  className="p-3 rounded-2xl border bg-stone-50/50 hover:bg-stone-50 transition-all"
                  style={{ borderColor: "#EFEAE3" }}
                >
                  <div className="flex items-center justify-between text-xs mb-1.5">
                    <div className="flex items-center gap-2 min-w-0">
                      <span className="w-5 h-5 rounded-md bg-stone-200 text-stone-700 text-[10px] font-black flex items-center justify-center shrink-0">
                        {idx + 1}
                      </span>
                      <span className="font-extrabold text-stone-900 truncate" title={loc.location}>
                        {loc.location}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <span className="font-black text-stone-900">{loc.count}</span>
                      <span className="text-[11px] font-bold text-stone-500 bg-white px-2 py-0.5 rounded-full border border-stone-200">
                        {loc.percentage}%
                      </span>
                    </div>
                  </div>

                  <div className="w-full bg-stone-200 h-1.5 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#7C5C3E] rounded-full transition-all duration-500"
                      style={{ width: `${loc.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Insights Card */}
          <div
            className="lg:col-span-5 rounded-3xl p-5 sm:p-6 border bg-white shadow-xs space-y-4 flex flex-col justify-between"
            style={{ borderColor: "#E0D6CA" }}
          >
            <div className="space-y-3">
              <h3 className="text-base font-black text-stone-900 flex items-center gap-2">
                <Compass className="w-4 h-4 text-[#7C5C3E]" />
                Geographic Takeaways
              </h3>
              <p className="text-xs text-stone-600 font-medium leading-relaxed">
                Analyzing village and mandal representation helps tailor local counselling workshops and scholarship roadmaps for specific government high schools.
              </p>

              <div className="p-4 rounded-2xl bg-[#F0EBE1] border border-[#DDD3C5] space-y-2 mt-4">
                <div className="text-xs font-black text-stone-900 uppercase tracking-wider">
                  Top Focus Mandal
                </div>
                <div className="text-base font-black text-stone-900">
                  {locationData[0]?.location || "N/A"}
                </div>
                <div className="text-xs text-stone-600 font-medium">
                  Represents <strong>{locationData[0]?.percentage || 0}%</strong> of all student applications.
                </div>
              </div>
            </div>

            <div className="p-3.5 rounded-2xl border border-stone-200 text-xs text-stone-500 font-medium bg-stone-50">
              💡 Tip: Counsellors can use location clusters to plan in-person group guidance camps.
            </div>
          </div>
        </div>
      )}

      {/* ── TAB 5: 1-ON-1 GUIDANCE & BOOKING REQUESTS ── */}
      {activeTab === "bookings" && (
        <div className="space-y-6">
          <div
            className="rounded-3xl p-5 sm:p-6 border bg-white shadow-xs space-y-4"
            style={{ borderColor: "#E0D6CA" }}
          >
            <div>
              <h3 className="text-base font-black text-stone-900 flex items-center gap-2">
                <Calendar className="w-4 h-4 text-[#7C5C3E]" />
                Careers with Highest 1-on-1 Guidance Demand ({bookings.length} Requests)
              </h3>
              <p className="text-xs text-stone-500 font-medium mt-0.5">
                Students who requested personalized counselling sessions categorized by their desired career pathways.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {bookingCareerData.map((b, idx) => (
                <div
                  key={b.name}
                  className="p-4 rounded-2xl border bg-stone-50/60 hover:bg-stone-50 transition-all space-y-2"
                  style={{ borderColor: "#EFEAE3" }}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black text-stone-900 truncate" title={b.name}>
                      {b.name}
                    </span>
                    <span className="px-2 py-0.5 rounded-lg bg-stone-900 text-white text-[11px] font-black">
                      {b.count} reqs
                    </span>
                  </div>

                  <div className="w-full bg-stone-200 h-1.5 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#C9A97A] rounded-full transition-all duration-500"
                      style={{ width: `${b.percentage}%` }}
                    />
                  </div>

                  <div className="text-[11px] text-stone-500 font-medium">
                    {b.percentage}% of all booking requests
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
