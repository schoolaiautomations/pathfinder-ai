import { Hero } from "@/components/career/Hero";
import { CareerForm } from "@/components/career/CareerForm";
import { ReportPreview } from "@/components/career/ReportPreview";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <h1 className="sr-only">AI Career Guidance Portal – Student Profile Form</h1>
      <Hero />
      <ReportPreview />
      <CareerForm />
      <footer className="border-t border-border py-8 text-center text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} CareerPath AI · Helping students find their future</p>
      </footer>
    </main>
  );
};

export default Index;
