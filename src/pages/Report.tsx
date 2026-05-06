import { Link } from "react-router-dom";
import { Sparkles, TrendingUp, BookOpen, MapPin, Award, Briefcase, Heart, Download, ArrowLeft } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const matches = [
  { name: "Software Engineer", score: 94, why: "Strong logical thinking, coding interest, and problem solving align perfectly." },
  { name: "AI / ML Researcher", score: 89, why: "Curiosity in AI & robotics combined with strong math fundamentals." },
  { name: "Product Designer", score: 81, why: "Creative interests and design thinking make this a great fit." },
];

const Report = () => (
  <main className="min-h-screen bg-gradient-hero pb-16">
    <div className="max-w-5xl mx-auto px-4 pt-10">
      <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-6">
        <ArrowLeft className="w-4 h-4" /> Back to home
      </Link>
      <Card className="bg-gradient-card rounded-3xl p-8 sm:p-10 shadow-card animate-fade-in">
        <div className="flex items-center gap-2 mb-3">
          <Sparkles className="w-5 h-5 text-primary" />
          <span className="text-sm font-semibold text-primary">Your AI Career Report</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold">Your personalised career path</h1>
        <p className="text-muted-foreground mt-3 max-w-2xl">Based on your interests, education, and goals — here are the careers our AI thinks suit you best.</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Button variant="hero" size="lg"><Download /> Download PDF</Button>
          <Button variant="outline" size="lg" className="rounded-xl">Share with parents</Button>
        </div>
      </Card>

      <h2 className="text-xl font-bold mt-10 mb-4">Top career matches</h2>
      <div className="grid gap-4">
        {matches.map((m, i) => (
          <Card key={m.name} className="p-6 rounded-2xl shadow-soft hover:shadow-card transition-smooth">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center text-white font-bold shadow-glow">{i + 1}</div>
                <div>
                  <h3 className="text-lg font-bold">{m.name}</h3>
                  <p className="text-sm text-muted-foreground mt-0.5">{m.why}</p>
                </div>
              </div>
              <div className="text-right shrink-0">
                <div className="text-3xl font-bold text-gradient-primary">{m.score}%</div>
                <div className="text-xs text-muted-foreground">Match score</div>
              </div>
            </div>
            <div className="mt-4 h-2 bg-muted rounded-full overflow-hidden">
              <div className="h-full bg-gradient-primary rounded-full" style={{ width: `${m.score}%` }} />
            </div>
          </Card>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 gap-4 mt-10">
        {[
          { icon: BookOpen, title: "Study roadmap", body: "Focus on Math, Physics & Computer Science. Start with a Python or web-dev course this year." },
          { icon: MapPin, title: "Where to study", body: "Top picks: IITs, NITs, BITS Pilani, IIITs. Explore international options with scholarships." },
          { icon: Award, title: "Skills to build", body: "Coding fundamentals, problem solving (DSA), communication, and a portfolio of projects." },
          { icon: Briefcase, title: "Salary & demand", body: "Entry-level: ₹6–15 LPA. Senior roles: ₹30 LPA+. Demand growing 22% YoY in India." },
          { icon: TrendingUp, title: "What to study next", body: "Class 11–12 PCM, then B.Tech CSE / AI. Consider an internship by year 2." },
          { icon: Heart, title: "Parent guidance", body: "Encourage hands-on projects, support coding bootcamps, and celebrate small wins." },
        ].map(({ icon: Icon, title, body }) => (
          <Card key={title} className="p-6 rounded-2xl shadow-soft">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-soft flex items-center justify-center">
                <Icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-semibold">{title}</h3>
            </div>
            <p className="text-sm text-muted-foreground">{body}</p>
          </Card>
        ))}
      </div>
    </div>
  </main>
);

export default Report;
