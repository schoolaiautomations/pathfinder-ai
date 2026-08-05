import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Map, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { ROADMAP_FORM_KEY, roadmapEducationLevels } from "@/lib/roadmap-data";
import type { RoadmapFormData } from "@/lib/roadmap-data";
import wabiLogo from "@/lib/wabi_resolutions_logo.jpeg";

const RoadmapForm = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [form, setForm] = useState<RoadmapFormData>({
    careerGoal: "",
    currentClass: "",
    location: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.careerGoal.trim()) {
      toast({ title: "Career goal is required", description: "Please tell us what career you want to pursue.", variant: "destructive" });
      return;
    }
    if (!form.currentClass) {
      toast({ title: "Education level is required", description: "Please select your current class or stage.", variant: "destructive" });
      return;
    }
    if (!form.location.trim()) {
      toast({ title: "Location is required", description: "Please enter your city or state.", variant: "destructive" });
      return;
    }

    localStorage.setItem(ROADMAP_FORM_KEY, JSON.stringify(form));
    navigate("/roadmap/generating");
  };

  return (
    <main className="min-h-screen bg-background py-8 px-4">
      <div className="max-w-4xl mx-auto mb-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src={wabiLogo}
            alt="Wabi Resolutions Logo"
            className="w-9 h-9 rounded-full object-cover border border-zinc-200 shadow-sm"
          />
          <span className="font-extrabold text-base text-zinc-950">Wabi Career Guidance</span>
        </div>
        <Link to="/" className="inline-flex items-center gap-2 text-sm font-bold text-zinc-600 hover:text-black transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
      </div>

      <Card className="max-w-2xl mx-auto rounded-2xl sm:rounded-3xl border border-zinc-200 bg-white shadow-card p-6 sm:p-10 animate-fade-in">
        <div className="text-center mb-8">
          <div className="w-14 h-14 mx-auto rounded-2xl bg-black flex items-center justify-center text-white shadow-md mb-4">
            <Map className="w-7 h-7" />
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-zinc-950">
            Build Your Learning Roadmap
          </h1>
          <p className="text-sm sm:text-base text-zinc-500 mt-2 max-w-md mx-auto leading-relaxed font-medium">
            Tell us your career goal and we'll create a step-by-step learning path with skills you can click and start learning.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Career Goal */}
          <div className="space-y-2">
            <label className="text-sm font-bold text-zinc-900">
              Career Goal <span className="text-red-500">*</span>
            </label>
            <Input
              type="text"
              placeholder="e.g. Machine Learning Engineer, Doctor, Game Developer"
              value={form.careerGoal}
              onChange={(e) => setForm({ ...form, careerGoal: e.target.value })}
              className="h-12 rounded-xl border-zinc-300 text-base font-medium focus:border-black focus:ring-black"
            />
          </div>

          {/* Current Class */}
          <div className="space-y-2">
            <label className="text-sm font-bold text-zinc-900">
              Current Class / Education Level <span className="text-red-500">*</span>
            </label>
            <Select value={form.currentClass} onValueChange={(v) => setForm({ ...form, currentClass: v })}>
              <SelectTrigger className="h-12 rounded-xl border-zinc-300 text-base font-medium focus:border-black focus:ring-black">
                <SelectValue placeholder="Select your current level" />
              </SelectTrigger>
              <SelectContent>
                {roadmapEducationLevels.map((level) => (
                  <SelectItem key={level} value={level}>
                    {level}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Location */}
          <div className="space-y-2">
            <label className="text-sm font-bold text-zinc-900">
              Location <span className="text-red-500">*</span>
            </label>
            <Input
              type="text"
              placeholder="e.g. Hyderabad, Telangana"
              value={form.location}
              onChange={(e) => setForm({ ...form, location: e.target.value })}
              className="h-12 rounded-xl border-zinc-300 text-base font-medium focus:border-black focus:ring-black"
            />
          </div>

          <Button
            type="submit"
            size="lg"
            className="w-full bg-black text-white hover:bg-zinc-800 rounded-xl h-13 sm:h-14 font-bold shadow-md transition-all text-sm sm:text-base"
          >
            <Sparkles className="w-5 h-5 mr-2" />
            Generate My Learning Roadmap
          </Button>
        </form>
      </Card>
    </main>
  );
};

export default RoadmapForm;
