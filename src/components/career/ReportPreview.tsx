import { Card } from "@/components/ui/card";
import { Award, BookOpen, Briefcase, Compass, GraduationCap, Heart, MapPin, TrendingUp } from "lucide-react";

const items = [
  { icon: Compass, title: "Best career matches", desc: "Top paths tailored to you" },
  { icon: TrendingUp, title: "Match score", desc: "How well each career fits" },
  { icon: BookOpen, title: "Study roadmap", desc: "Step-by-step learning plan" },
  { icon: GraduationCap, title: "What to study", desc: "Subjects, courses, exams" },
  { icon: MapPin, title: "Where to study", desc: "Top colleges & institutes" },
  { icon: Award, title: "Skills to build", desc: "Skills that boost your future" },
  { icon: Briefcase, title: "Salary & demand", desc: "Earnings & job market trends" },
  { icon: Heart, title: "Parent guidance", desc: "Notes for parents to support you" },
];

export const ReportPreview = () => (
  <section className="max-w-6xl mx-auto px-4 py-12">
    <div className="text-center mb-10">
      <span className="inline-block px-4 py-1.5 rounded-full bg-zinc-100 border border-zinc-200 text-zinc-900 text-xs font-bold tracking-wider uppercase">
        What you'll get
      </span>
      <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-950 mt-4">Your AI report will include</h2>
      <p className="text-zinc-500 text-base mt-3 max-w-xl mx-auto font-medium">
        A complete, personalised guide to help you decide your next step with confidence.
      </p>
    </div>
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {items.map(({ icon: Icon, title, desc }) => (
        <Card key={title} className="p-5 rounded-2xl border border-zinc-200 bg-white shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
          <div className="w-11 h-11 rounded-xl bg-zinc-100 border border-zinc-200 flex items-center justify-center mb-3 text-black">
            <Icon className="w-5 h-5 text-black" />
          </div>
          <h3 className="font-bold text-zinc-950">{title}</h3>
          <p className="text-sm text-zinc-500 mt-1">{desc}</p>
        </Card>
      ))}
    </div>
  </section>
);


