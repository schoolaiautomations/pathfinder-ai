import { cn } from "@/lib/utils";
import { interestOptions } from "@/lib/career-data";

export const InterestGrid = ({ selected, onChange, labelsMap }: { selected: string[]; onChange: (n: string[]) => void; labelsMap?: Record<string, string> }) => {
  const toggle = (name: string) => {
    onChange(selected.includes(name) ? selected.filter((s) => s !== name) : [...selected, name]);
  };
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
      {interestOptions.map((it) => {
        const active = selected.includes(it.name);
        const displayName = labelsMap?.[it.name] || it.name;
        return (
          <button
            key={it.name}
            type="button"
            onClick={() => toggle(it.name)}
            className={cn(
              "group relative p-4 rounded-2xl border-2 text-left transition-all hover:-translate-y-0.5",
              active
                ? "border-black bg-zinc-100 text-zinc-950 shadow-sm"
                : "border-zinc-200 bg-white hover:border-zinc-400 shadow-none text-zinc-800"
            )}
          >
            <div className="text-2xl mb-1.5">{it.icon}</div>
            <div className={cn("text-sm font-semibold", active ? "text-black" : "text-zinc-800")}>{displayName}</div>
            {active && (
              <div className="absolute top-2.5 right-2.5 w-5 h-5 rounded-full bg-black flex items-center justify-center text-white text-xs font-bold">✓</div>
            )}
          </button>
        );
      })}
    </div>
  );
};

