import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

const steps = ["Basics", "Education", "Interests", "Skills", "Preferences", "Review"];

export const Stepper = ({ current }: { current: number }) => {
  const progress = ((current) / (steps.length - 1)) * 100;
  return (
    <div className="w-full">
      <div className="flex justify-between mb-3 text-xs sm:text-sm font-medium text-muted-foreground">
        <span>Step {current + 1} of {steps.length}</span>
        <span className="text-primary font-semibold">{Math.round(progress)}% complete</span>
      </div>
      <div className="relative h-2 bg-muted rounded-full overflow-hidden">
        <div className="absolute inset-y-0 left-0 bg-gradient-primary rounded-full transition-smooth" style={{ width: `${progress}%` }} />
      </div>
      <div className="hidden md:flex justify-between mt-4">
        {steps.map((label, i) => {
          const done = i < current;
          const active = i === current;
          return (
            <div key={label} className="flex flex-col items-center gap-2 flex-1">
              <div className={cn(
                "w-9 h-9 rounded-full flex items-center justify-center text-sm font-semibold transition-smooth",
                done && "bg-gradient-accent text-white shadow-soft",
                active && "bg-gradient-primary text-white shadow-glow scale-110",
                !done && !active && "bg-muted text-muted-foreground"
              )}>
                {done ? <Check className="w-4 h-4" /> : i + 1}
              </div>
              <span className={cn("text-xs", active ? "text-primary font-semibold" : "text-muted-foreground")}>{label}</span>
            </div>
          );
        })}
      </div>
      <div className="md:hidden mt-2 text-center text-sm font-semibold text-primary">{steps[current]}</div>
    </div>
  );
};
