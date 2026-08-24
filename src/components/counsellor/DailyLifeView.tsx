import { useState } from "react";
import { CAREER_PROFILES } from "@/lib/career-comparison-data";
import {
  Clock,
  Building,
  CheckCircle,
  XCircle,
  Flame,
  Wrench,
  Sun,
  Sunrise,
  Sunset,
  Moon,
  Sparkles,
} from "lucide-react";

export const DailyLifeView = () => {
  const [selectedCareerId, setSelectedCareerId] = useState<string>("ias");

  const career = CAREER_PROFILES.find((c) => c.id === selectedCareerId) || CAREER_PROFILES[0];
  const { dayInTheLife } = career;

  return (
    <div className="space-y-6">
      {/* Header & Career Selector */}
      <div
        className="rounded-3xl p-6 sm:p-8 text-stone-900 shadow-sm border relative overflow-hidden"
        style={{ background: "#F5F1EC", borderColor: "#E0D6CA" }}
      >
        <div className="max-w-2xl space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-stone-900 text-[#FAF8F5]">
            <Clock className="w-3.5 h-3.5 text-[#C9A97A]" />
            Behind the Scenes
          </div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-stone-900">A Daily Life of a Career</h2>
          <p className="text-xs sm:text-sm text-stone-600 font-medium">
            Explore hour-by-hour operational routines, workplace atmospheres, common stressors, and real daily realities beyond the surface glamour.
          </p>
        </div>

        {/* Dropdown Selector */}
        <div className="mt-6 pt-6 border-t border-stone-300/80 max-w-md">
          <label className="text-xs font-bold text-stone-700 uppercase tracking-wider block mb-1.5">
            Select Career Profession
          </label>
          <select
            value={selectedCareerId}
            onChange={(e) => setSelectedCareerId(e.target.value)}
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

      {/* Main Career Overview Header */}
      <div className="rounded-3xl p-6 sm:p-8 bg-white border shadow-sm space-y-6" style={{ borderColor: "#E5DDD2" }}>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-stone-100">
          <div className="flex items-center gap-4">
            <span className="text-5xl">{career.icon}</span>
            <div>
              <div className="inline-block text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-stone-100 text-stone-600 mb-1">
                {career.category}
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-stone-900">{career.name}</h3>
              <p className="text-xs sm:text-sm text-stone-600 font-medium">{career.tagline}</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 sm:flex-col sm:items-end">
            <div className="px-3.5 py-1.5 rounded-xl bg-stone-50 border border-stone-200 text-xs font-bold text-stone-800">
              ⏱️ Shift: {dayInTheLife.workHours}
            </div>
            <div className="px-3.5 py-1.5 rounded-xl bg-stone-50 border border-stone-200 text-xs font-bold text-stone-800">
              🏢 Setting: {dayInTheLife.workEnvironment}
            </div>
          </div>
        </div>

        {/* Myths vs Reality Strip */}
        <div>
          <h4 className="text-xs font-bold text-stone-700 uppercase tracking-wider mb-3 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#7C5C3E]" />
            What People Imagine vs Daily Reality
          </h4>
          <div className="grid md:grid-cols-2 gap-3">
            {dayInTheLife.mythsVsReality.map((item, mIdx) => (
              <div
                key={mIdx}
                className="p-4 rounded-2xl border space-y-2"
                style={{ background: "#FAF8F5", borderColor: "#E8DFD0" }}
              >
                <div className="flex items-start gap-2 text-xs font-bold text-rose-800">
                  <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span>Myth: "{item.myth}"</span>
                </div>
                <div className="flex items-start gap-2 text-xs font-medium text-emerald-950 pl-6 border-l-2 border-emerald-400">
                  <span>Reality: {item.reality}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Hour-by-Hour Timeline */}
        <div className="pt-4">
          <h4 className="text-xs font-bold text-stone-700 uppercase tracking-wider mb-4 flex items-center gap-2">
            <Clock className="w-4 h-4 text-[#7C5C3E]" />
            A Typical Hour-by-Hour Workday Routine
          </h4>

          <div className="relative pl-6 sm:pl-8 space-y-6 before:absolute before:left-2.5 sm:before:left-3.5 before:top-2 before:bottom-2 before:w-0.5 before:bg-stone-200">
            {dayInTheLife.timeline.map((slot, sIdx) => (
              <div key={sIdx} className="relative group">
                {/* Timeline Dot */}
                <div
                  className="absolute -left-6 sm:-left-8 top-1 w-4 h-4 rounded-full border-2 border-white shadow-xs"
                  style={{ background: sIdx % 2 === 0 ? "#1C1917" : "#7C5C3E" }}
                />

                <div className="rounded-2xl p-4 sm:p-5 border bg-stone-50/70 hover:bg-stone-50 transition-colors" style={{ borderColor: "#E5DDD2" }}>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                    <span className="font-mono text-xs font-extrabold px-2.5 py-0.5 rounded-lg bg-stone-200 text-stone-800">
                      {slot.time}
                    </span>
                    <span className="text-xs font-extrabold text-stone-900">{slot.title}</span>
                  </div>
                  <p className="text-xs text-stone-600 font-medium leading-relaxed mt-1">
                    {slot.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Details: Daily Challenges & Tools */}
        <div className="grid md:grid-cols-2 gap-4 pt-4 border-t border-stone-100">
          <div className="p-5 rounded-2xl bg-amber-50/60 border border-amber-200/70 space-y-2">
            <h5 className="text-xs font-bold text-amber-900 uppercase tracking-wider flex items-center gap-2">
              <Flame className="w-4 h-4 text-amber-600" />
              High-Pressure Moments & Challenges
            </h5>
            <ul className="space-y-1.5">
              {dayInTheLife.dailyChallenges.map((ch, cIdx) => (
                <li key={cIdx} className="text-xs text-amber-950 font-medium flex items-start gap-2">
                  <span className="text-amber-500 font-bold">•</span>
                  <span>{ch}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
            <h5 className="text-xs font-bold text-stone-800 uppercase tracking-wider flex items-center gap-2">
              <Wrench className="w-4 h-4 text-[#7C5C3E]" />
              Core Equipment & Digital Tools Used
            </h5>
            <div className="flex flex-wrap gap-2 pt-1">
              {dayInTheLife.toolsUsed.map((tool, tIdx) => (
                <span
                  key={tIdx}
                  className="px-2.5 py-1 rounded-xl text-xs font-bold bg-white border border-stone-200 text-stone-800 shadow-2xs"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
