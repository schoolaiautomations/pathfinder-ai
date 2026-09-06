import { useState, useMemo } from "react";
import {
  ALL_18_CAREER_CURRICULA,
  CareerCurriculum,
  CourseTopicItem,
} from "@/lib/course-curriculum-data";
import {
  BookOpen,
  FlaskConical,
  Search,
  CheckCircle2,
  Printer,
  Layers,
  Copy,
  Check,
  Sparkles,
  GraduationCap,
} from "lucide-react";

export const CourseCurriculumView = () => {
  const [selectedCareerId, setSelectedCareerId] = useState<string>("swe");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [copied, setCopied] = useState(false);

  // Filter career options based on search
  const filteredCareers = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) return ALL_18_CAREER_CURRICULA;
    return ALL_18_CAREER_CURRICULA.filter((c) => {
      return (
        c.title.toLowerCase().includes(q) ||
        c.shortCode.toLowerCase().includes(q) ||
        c.category.toLowerCase().includes(q) ||
        c.degreeTrack.toLowerCase().includes(q) ||
        c.topics.some((t) => t.title.toLowerCase().includes(q) || t.description.toLowerCase().includes(q))
      );
    });
  }, [searchQuery]);

  const activeCareer: CareerCurriculum = useMemo(() => {
    return (
      ALL_18_CAREER_CURRICULA.find((c) => c.id === selectedCareerId) ||
      filteredCareers[0] ||
      ALL_18_CAREER_CURRICULA[0]
    );
  }, [selectedCareerId, filteredCareers]);

  const handleCopySummary = () => {
    const text = [
      `${activeCareer.icon} ${activeCareer.title} — What You Actually Study & Practice:`,
      `Degree Track: ${activeCareer.degreeTrack} (${activeCareer.duration})`,
      `Eligibility: ${activeCareer.eligibilityAfterInter}`,
      `Summary: ${activeCareer.oneLineSummary}`,
      "",
      `14 Key Subjects, Practical Labs & Real-world Training:`,
      ...activeCareer.topics.map((t) => `${t.id}. [${t.category}] ${t.title}: ${t.description}`),
    ].join("\n");

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getCategoryBadge = (category: CourseTopicItem["category"]) => {
    switch (category) {
      case "Lab & Practical":
        return "bg-emerald-100 text-emerald-800 border-emerald-300";
      case "Advanced / Project":
        return "bg-purple-100 text-purple-800 border-purple-300";
      default:
        return "bg-stone-100 text-stone-700 border-stone-300";
    }
  };

  return (
    <div className="space-y-6">
      {/* ── HEADER BANNER ── */}
      <div
        className="rounded-3xl p-5 sm:p-7 text-stone-900 shadow-sm border relative overflow-hidden print:hidden"
        style={{ background: "#F5F1EC", borderColor: "#E0D6CA" }}
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1.5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-stone-900 text-[#FAF8F5]">
              <BookOpen className="w-3.5 h-3.5 text-[#C9A97A]" />
              Career Curriculum &amp; Practical Topics
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-stone-900 tracking-tight">
              What Do Students Actually Study in Each Career?
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 font-medium max-w-2xl leading-relaxed">
              12–14 crisp, single-liner topics showing what students study in college/training, what practical labs they do, and hands-on skills acquired across all {ALL_18_CAREER_CURRICULA.length} career paths after intermediate.
            </p>
          </div>

          <div className="flex items-center gap-2 self-start sm:self-center">
            <button
              onClick={handleCopySummary}
              className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-2xl bg-white border border-stone-200 text-stone-800 text-xs font-bold hover:bg-stone-50 transition-all shadow-xs cursor-pointer"
              title="Copy topics to clipboard"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4 text-[#7C5C3E]" />}
              <span>{copied ? "Copied!" : "Copy List"}</span>
            </button>
            <button
              onClick={() => window.print()}
              className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-2xl bg-white border border-stone-200 text-stone-800 text-xs font-bold hover:bg-stone-50 transition-all shadow-xs cursor-pointer"
            >
              <Printer className="w-4 h-4 text-[#7C5C3E]" />
              <span>Print</span>
            </button>
          </div>
        </div>
      </div>

      {/* ── ALL 18 CAREER OPTIONS SELECTOR ── */}
      <div
        className="p-4 rounded-3xl border bg-white shadow-2xs space-y-3.5 print:hidden"
        style={{ borderColor: "#E0D6CA" }}
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <span className="text-xs font-black uppercase tracking-wider text-stone-600">
            Select Any of the 18 Career Paths:
          </span>
          <div className="relative min-w-[220px]">
            <Search className="w-3.5 h-3.5 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by career or subject..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-8 pr-3 py-1.5 rounded-xl border bg-stone-50 text-xs font-bold text-stone-800 placeholder:text-stone-400 focus:outline-none focus:ring-1 focus:ring-stone-400"
              style={{ borderColor: "#DDD3C5" }}
            />
          </div>
        </div>

        {/* 18 Career Pills Grid */}
        <div className="flex items-center flex-wrap gap-2">
          {filteredCareers.map((c) => {
            const isSelected = c.id === activeCareer.id;
            return (
              <button
                key={c.id}
                onClick={() => setSelectedCareerId(c.id)}
                className={`px-3 py-2 rounded-xl text-xs font-extrabold transition-all cursor-pointer flex items-center gap-1.5 ${
                  isSelected
                    ? "bg-stone-900 text-white shadow-sm scale-102"
                    : "bg-stone-100 text-stone-800 hover:bg-stone-200 border border-stone-200/60"
                }`}
              >
                <span>{c.icon}</span>
                <span>{c.shortCode}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ── ACTIVE CAREER SUMMARY HEADER ── */}
      <div
        className="p-5 sm:p-6 rounded-3xl border bg-white shadow-xs space-y-3"
        style={{ borderColor: "#E0D6CA" }}
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2 flex-wrap mb-1">
              <span className="text-xl">{activeCareer.icon}</span>
              <h1 className="text-lg sm:text-xl font-black text-stone-900">
                {activeCareer.title}
              </h1>
              <span className="px-2.5 py-0.5 rounded-lg text-xs font-bold bg-[#F0EBE1] text-[#7C5C3E] border border-[#DDD3C5]">
                {activeCareer.category}
              </span>
            </div>

            <div className="flex items-center gap-3 text-xs text-stone-600 font-semibold flex-wrap">
              <span>Degree / Track: <strong className="text-stone-900">{activeCareer.degreeTrack}</strong></span>
              <span>&bull;</span>
              <span>Duration: <strong className="text-stone-900">{activeCareer.duration}</strong></span>
            </div>
          </div>

          <div className="text-xs text-stone-700 bg-[#FAF8F5] p-3 rounded-2xl border border-[#E0D6CA] max-w-md">
            <span className="font-bold text-stone-900">Eligibility After 10+2: </span>
            {activeCareer.eligibilityAfterInter}
          </div>
        </div>

        {/* 1-Line Summary Banner */}
        <div className="p-3.5 rounded-2xl bg-[#F0EBE1]/60 border border-[#DDD3C5] text-xs font-semibold text-stone-900 flex items-start gap-2.5">
          <Sparkles className="w-4 h-4 text-[#7C5C3E] shrink-0 mt-0.5" />
          <span>{activeCareer.oneLineSummary}</span>
        </div>
      </div>

      {/* ── 12-14 CRISP TOPICS LIST ── */}
      <div className="space-y-3">
        <div className="flex items-center justify-between px-1">
          <h3 className="text-sm sm:text-base font-black text-stone-900 flex items-center gap-2">
            <Layers className="w-4 h-4 text-[#7C5C3E]" />
            What Students Study &amp; Practice ({activeCareer.topics.length} Core Areas):
          </h3>
          <div className="flex items-center gap-2 text-[11px] font-bold text-stone-500">
            <span className="inline-flex items-center gap-1">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" /> Lab &amp; Practical
            </span>
            <span className="inline-flex items-center gap-1">
              <span className="w-2.5 h-2.5 rounded-full bg-stone-500" /> Core Theory
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {activeCareer.topics.map((topic) => (
            <div
              key={topic.id}
              className="p-4 rounded-2xl border bg-white shadow-2xs hover:border-stone-400 hover:shadow-xs transition-all flex items-start gap-3 group"
              style={{ borderColor: "#E0D6CA" }}
            >
              {/* Number Badge */}
              <div className={`w-8 h-8 rounded-xl font-black text-xs flex items-center justify-center shrink-0 mt-0.5 ${
                topic.category === "Lab & Practical"
                  ? "bg-emerald-100 text-emerald-900 border border-emerald-200"
                  : topic.category === "Advanced / Project"
                  ? "bg-purple-100 text-purple-900 border border-purple-200"
                  : "bg-[#F0EBE1] text-[#7C5C3E] border border-[#DDD3C5]"
              }`}>
                {topic.id}
              </div>

              {/* Topic Info */}
              <div className="min-w-0 flex-1 space-y-1">
                <div className="flex items-center justify-between gap-2">
                  <h4 className="text-xs sm:text-sm font-extrabold text-stone-900 leading-tight">
                    {topic.title}
                  </h4>
                  <span className={`px-2 py-0.5 rounded-md text-[10px] font-bold border shrink-0 ${getCategoryBadge(topic.category)}`}>
                    {topic.category === "Lab & Practical" ? "🔬 Lab / Field" : topic.category === "Advanced / Project" ? "🚀 Training / Project" : "📚 Theory"}
                  </span>
                </div>

                <p className="text-xs text-stone-600 font-medium leading-relaxed">
                  {topic.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
