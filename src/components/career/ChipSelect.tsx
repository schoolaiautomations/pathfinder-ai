import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

type Props = {
  options: string[];
  selected: string[];
  onChange: (next: string[]) => void;
  variant?: "default" | "accent";
};

export const ChipSelect = ({ options, selected, onChange, variant = "default" }: Props) => {
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
              "px-4 py-2 rounded-full border text-sm font-medium transition-smooth flex items-center gap-1.5",
              active
                ? variant === "accent"
                  ? "bg-gradient-accent text-white border-transparent shadow-soft"
                  : "bg-gradient-primary text-white border-transparent shadow-soft"
                : "bg-card text-foreground border-border hover:border-primary/40 hover:bg-secondary"
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
