import { cn } from "@/lib/utils";
import { interestOptions } from "@/lib/career-data";

export const InterestGrid = ({ selected, onChange }: { selected: string[]; onChange: (n: string[]) => void }) => {
  const toggle = (name: string) => {
    onChange(selected.includes(name) ? selected.filter((s) => s !== name) : [...selected, name]);
  };
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
      {interestOptions.map((it) => {
        const active = selected.includes(it.name);
        return (
          <button
            key={it.name}
            type="button"
            onClick={() => toggle(it.name)}
            className={cn(
              "group relative p-4 rounded-2xl border-2 text-left transition-smooth hover:-translate-y-0.5",
              active
                ? "border-primary bg-gradient-soft shadow-glow"
                : "border-border bg-card hover:border-primary/40 shadow-soft"
            )}
          >
            <div className="text-2xl mb-1.5">{it.icon}</div>
            <div className={cn("text-sm font-medium", active && "text-primary")}>{it.name}</div>
            {active && (
              <div className="absolute top-2 right-2 w-5 h-5 rounded-full bg-gradient-primary flex items-center justify-center text-white text-xs">✓</div>
            )}
          </button>
        );
      })}
    </div>
  );
};
