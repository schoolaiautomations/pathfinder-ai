import { Hero } from "@/components/career/Hero";
import { ReportPreview } from "@/components/career/ReportPreview";
import { BlogsPreview } from "@/components/career/BlogsPreview";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <h1 className="sr-only">AI Career Guidance Portal</h1>
      <Hero />
      <ReportPreview />
      <BlogsPreview />
      <footer className="border-t border-zinc-200 py-8 text-center text-sm font-medium text-zinc-500">
        <p>© {new Date().getFullYear()} Wabi Career Guidance · Helping students find their future</p>
      </footer>
    </main>
  );
};

export default Index;

