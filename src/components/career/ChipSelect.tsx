import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

type Props = {
  options: string[];
  selected: string[];
  onChange: (next: string[]) => void;
  variant?: "default" | "accent";
};

export const ChipSelect = ({ options, selected, onChange }: Props) => {
  const toggle = (opt: string) => {
    onChange(selected.includes(opt) ? selected.filter((s) => s !== opt) : [...selected, opt]);
  };
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((opt) => {
        const active = selected.includes(opt);
        return (
          <button
            key={opt}
            type="button"
            onClick={() => toggle(opt)}
            className={cn(
              "px-4 py-2 rounded-full border text-sm font-medium transition-all flex items-center gap-1.5",
              active
                ? "bg-black text-white border-black shadow-sm"
                : "bg-white text-zinc-800 border-zinc-200 hover:border-zinc-400 hover:bg-zinc-50"
            )}
          >
            {active && <Check className="w-3.5 h-3.5" />}
            {opt}
          </button>
        );
      })}
    </div>
  );
};

