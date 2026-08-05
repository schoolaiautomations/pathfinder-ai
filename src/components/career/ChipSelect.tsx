import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

type Props = {
  options: string[];
  selected: string[];
  onChange: (next: string[]) => void;
  variant?: "default" | "accent";
  labelsMap?: Record<string, string>;
};

export const ChipSelect = ({ options, selected, onChange, labelsMap }: Props) => {
  const toggle = (opt: string) => {
    onChange(selected.includes(opt) ? selected.filter((s) => s !== opt) : [...selected, opt]);
  };
  return (
    <div className="flex flex-wrap gap-1.5 sm:gap-2">
      {options.map((opt) => {
        const active = selected.includes(opt);
        const label = labelsMap?.[opt] || opt;
        return (
          <button
            key={opt}
            type="button"
            onClick={() => toggle(opt)}
            className={cn(
              "px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border text-xs sm:text-sm font-medium transition-all flex items-center gap-1 sm:gap-1.5 touch-manipulation active:scale-95",
              active
                ? "bg-black text-white border-black shadow-sm"
                : "bg-white text-zinc-800 border-zinc-200 hover:border-zinc-400 hover:bg-zinc-50"
            )}
          >
            {active && <Check className="w-3 h-3 sm:w-3.5 sm:h-3.5" />}
            {label}
          </button>
        );
      })}
    </div>
  );
};

