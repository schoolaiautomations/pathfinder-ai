import { useState } from "react";
import { CAREER_PROFILES, CareerProfile } from "@/lib/career-comparison-data";
import {
  ArrowLeftRight,
  GraduationCap,
  IndianRupee,
  Clock,
  Briefcase,
  TrendingUp,
  CheckCircle2,
  AlertTriangle,
  LifeBuoy,
  Building,
  Sparkles,
} from "lucide-react";

export const CompareCareersView = () => {
  const [careerAId, setCareerAId] = useState<string>("swe");
  const [careerBId, setCareerBId] = useState<string>("ca");

  const careerA = CAREER_PROFILES.find((c) => c.id === careerAId) || CAREER_PROFILES[0];
  const careerB = CAREER_PROFILES.find((c) => c.id === careerBId) || CAREER_PROFILES[1];

  const getBalanceColor = (balance: CareerProfile["workLifeBalance"]) => {
    switch (balance) {
      case "High":
        return "bg-emerald-100 text-emerald-800 border-emerald-200";
      case "Moderate":
        return "bg-amber-100 text-amber-800 border-amber-200";
      case "Demanding":
        return "bg-orange-100 text-orange-800 border-orange-200";
      case "Extreme":
        return "bg-rose-100 text-rose-800 border-rose-200";
    }
  };

  const getDemandColor = (demand: CareerProfile["jobDemand"]) => {
    switch (demand) {
      case "Very High":
        return "bg-emerald-100 text-emerald-800 border-emerald-200";
      case "High":
        return "bg-sky-100 text-sky-800 border-sky-200";
      case "Stable":
        return "bg-stone-100 text-stone-700 border-stone-200";
      case "Niche / Competitive":
        return "bg-purple-100 text-purple-800 border-purple-200";
    }
  };

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div
        className="rounded-3xl p-6 sm:p-8 text-stone-900 shadow-sm border relative overflow-hidden"
        style={{ background: "#F5F1EC", borderColor: "#E0D6CA" }}
      >
        <div className="max-w-2xl space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-stone-900 text-[#FAF8F5]">
            <ArrowLeftRight className="w-3.5 h-3.5 text-[#C9A97A]" />
            Side-by-Side Evaluation
          </div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-stone-900">Compare Career Pathways</h2>
          <p className="text-xs sm:text-sm text-stone-600 font-medium">
            Evaluate two career directions simultaneously across academic runways, financial investments, exam selectivities, salary ceilings, and lifestyle demands.
          </p>
        </div>

        {/* Selection Controls */}
        <div className="grid sm:grid-cols-2 gap-4 mt-6 pt-6 border-t border-stone-300/80">
          <div>
            <label className="text-xs font-bold text-stone-700 uppercase tracking-wider block mb-1.5">
              Select Primary Career
            </label>
            <select
              value={careerAId}
              onChange={(e) => setCareerAId(e.target.value)}
              className="w-full h-11 px-3.5 rounded-xl border border-stone-300 bg-white font-bold text-sm text-stone-900 focus:ring-2 focus:ring-stone-900 outline-none shadow-2xs"
            >
              {CAREER_PROFILES.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.icon} {c.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="text-xs font-bold text-stone-700 uppercase tracking-wider block mb-1.5">
              Select Comparison Career
            </label>
            <select
              value={careerBId}
              onChange={(e) => setCareerBId(e.target.value)}
              className="w-full h-11 px-3.5 rounded-xl border border-stone-300 bg-white font-bold text-sm text-stone-900 focus:ring-2 focus:ring-stone-900 outline-none shadow-2xs"
            >
              {CAREER_PROFILES.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.icon} {c.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Comparison Grid */}
      <div className="grid md:grid-cols-2 gap-5">
        {[careerA, careerB].map((career, idx) => (
          <div
            key={career.id + idx}
            className="rounded-3xl p-6 sm:p-7 border bg-white shadow-sm space-y-6 flex flex-col justify-between"
            style={{ borderColor: "#E5DDD2" }}
          >
            {/* Top Identity */}
            <div className="space-y-3 pb-4 border-b border-stone-100">
              <div className="flex items-center justify-between">
                <span className="text-4xl">{career.icon}</span>
                <span className="text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded-full bg-stone-100 text-stone-600">
                  {career.category}
                </span>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-extrabold text-stone-900">{career.name}</h3>
                <p className="text-xs text-stone-600 mt-1 leading-relaxed font-medium">{career.tagline}</p>
              </div>

              {/* Status Badges */}
              <div className="flex flex-wrap gap-2 pt-1">
                <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full border ${getBalanceColor(career.workLifeBalance)}`}>
                  Work-Life: {career.workLifeBalance}
                </span>
                <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full border ${getDemandColor(career.jobDemand)}`}>
                  Demand: {career.jobDemand}
                </span>
              </div>
            </div>

            {/* Core Metrics */}
            <div className="space-y-3.5 text-xs">
              <div className="p-3 rounded-2xl bg-stone-50 border border-stone-200/60 space-y-1">
                <div className="flex items-center gap-1.5 font-bold text-stone-500 uppercase tracking-wider text-[10px]">
                  <GraduationCap className="w-3.5 h-3.5 text-[#7C5C3E]" />
                  Recommended 10+2 Stream
                </div>
                <div className="font-bold text-stone-900 text-xs sm:text-sm">{career.stream}</div>
              </div>

              <div className="p-3 rounded-2xl bg-stone-50 border border-stone-200/60 space-y-1">
                <div className="flex items-center gap-1.5 font-bold text-stone-500 uppercase tracking-wider text-[10px]">
                  <Briefcase className="w-3.5 h-3.5 text-[#7C5C3E]" />
                  Education Route & Duration
                </div>
                <div className="font-bold text-stone-900">{career.educationRoute}</div>
                <div className="text-stone-500 font-medium text-[11px]">Duration: {career.durationYears}</div>
              </div>

              <div className="grid grid-cols-2 gap-2.5">
                <div className="p-3 rounded-2xl bg-stone-50 border border-stone-200/60 space-y-1">
                  <div className="flex items-center gap-1.5 font-bold text-stone-500 uppercase tracking-wider text-[10px]">
                    <IndianRupee className="w-3.5 h-3.5 text-emerald-600" />
                    Starting Pay
                  </div>
                  <div className="font-bold text-stone-900 text-[11px] sm:text-xs">{career.salaryStarting}</div>
                </div>

                <div className="p-3 rounded-2xl bg-stone-50 border border-stone-200/60 space-y-1">
                  <div className="flex items-center gap-1.5 font-bold text-stone-500 uppercase tracking-wider text-[10px]">
                    <TrendingUp className="w-3.5 h-3.5 text-[#7C5C3E]" />
                    Peak Potential
                  </div>
                  <div className="font-bold text-stone-900 text-[11px] sm:text-xs">{career.salaryPeak}</div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2.5">
                <div className="p-3 rounded-2xl bg-stone-50 border border-stone-200/60 space-y-1">
                  <div className="font-bold text-stone-500 uppercase tracking-wider text-[10px]">Estimated Study Cost</div>
                  <div className="font-bold text-stone-900 text-[11px]">{career.estimatedCost}</div>
                </div>

                <div className="p-3 rounded-2xl bg-stone-50 border border-stone-200/60 space-y-1">
                  <div className="font-bold text-stone-500 uppercase tracking-wider text-[10px]">Office vs Field</div>
                  <div className="font-bold text-stone-900 text-[11px]">{career.fieldRatio}</div>
                </div>
              </div>

              <div className="p-3 rounded-2xl bg-stone-50 border border-stone-200/60 space-y-1">
                <div className="font-bold text-stone-500 uppercase tracking-wider text-[10px]">Key Entrance Exams</div>
                <div className="font-bold text-stone-900 text-xs">{career.keyExams}</div>
              </div>
            </div>

            {/* Pros & Cons */}
            <div className="space-y-4 pt-2 border-t border-stone-100">
              <div>
                <h4 className="text-xs font-bold text-stone-800 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  Key Advantages
                </h4>
                <ul className="space-y-1.5">
                  {career.keyPros.map((pro, pIdx) => (
                    <li key={pIdx} className="text-xs text-stone-700 font-medium flex items-start gap-2">
                      <span className="text-emerald-500 font-bold">•</span>
                      <span>{pro}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-bold text-stone-800 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
                  Key Challenges
                </h4>
                <ul className="space-y-1.5">
                  {career.keyCons.map((con, cIdx) => (
                    <li key={cIdx} className="text-xs text-stone-700 font-medium flex items-start gap-2">
                      <span className="text-amber-500 font-bold">•</span>
                      <span>{con}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-3 rounded-2xl bg-amber-50/70 border border-amber-200/60">
                <div className="flex items-center gap-1.5 font-bold text-amber-900 text-[11px] mb-1">
                  <LifeBuoy className="w-3.5 h-3.5 text-amber-700" />
                  Recommended Backup (Plan B)
                </div>
                <p className="text-xs text-amber-950 font-medium">{career.backupPlan}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
