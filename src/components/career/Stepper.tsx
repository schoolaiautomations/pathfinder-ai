import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

const steps = ["Basics", "Education", "Interests", "Skills", "Preferences", "Review"];

export const Stepper = ({ current }: { current: number }) => {
  const progress = ((current) / (steps.length - 1)) * 100;
  return (
    <div className="w-full">
      <div className="flex justify-between mb-3 text-xs sm:text-sm font-medium text-zinc-500">
        <span>Step {current + 1} of {steps.length}</span>
        <span className="text-zinc-900 font-bold">{Math.round(progress)}% complete</span>
      </div>
      <div className="relative h-2 bg-zinc-100 rounded-full overflow-hidden border border-zinc-200/50">
        <div className="absolute inset-y-0 left-0 bg-black rounded-full transition-smooth" style={{ width: `${progress}%` }} />
      </div>
      <div className="hidden md:flex justify-between mt-4">
        {steps.map((label, i) => {
          const done = i < current;
          const active = i === current;
          return (
            <div key={label} className="flex flex-col items-center gap-2 flex-1">
              <div className={cn(
                "w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold transition-smooth",
                done && "bg-zinc-800 text-white shadow-sm",
                active && "bg-black text-white shadow-md scale-110 ring-2 ring-zinc-400 ring-offset-2",
                !done && !active && "bg-zinc-100 text-zinc-400 border border-zinc-200"
              )}>
                {done ? <Check className="w-4 h-4" /> : i + 1}
              </div>
              <span className={cn("text-xs font-medium", active ? "text-zinc-950 font-bold" : "text-zinc-500")}>{label}</span>
            </div>
          );
        })}
      </div>
      <div className="md:hidden mt-2 text-center text-sm font-bold text-zinc-900">{steps[current]}</div>
    </div>
  );
};

