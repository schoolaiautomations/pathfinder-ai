import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import FormPage from "./pages/FormPage.tsx";
import Analyzing from "./pages/Analyzing.tsx";
import Report from "./pages/Report.tsx";
import Admin from "./pages/Admin.tsx";
import NotFound from "./pages/NotFound.tsx";
import RoadmapForm from "./pages/RoadmapForm.tsx";
import RoadmapGenerating from "./pages/RoadmapGenerating.tsx";
import RoadmapResult from "./pages/RoadmapResult.tsx";
import SkillLearning from "./pages/SkillLearning.tsx";
import Blogs from "./pages/Blogs.tsx";
import BlogPost from "./pages/BlogPost.tsx";
import CounsellorDashboard from "./pages/CounsellorDashboard.tsx";
import FaqPage from "./pages/FaqPage.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/form" element={<FormPage />} />
          <Route path="/analyzing" element={<Analyzing />} />
          <Route path="/report" element={<Report />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/roadmap" element={<RoadmapForm />} />
          <Route path="/roadmap/generating" element={<RoadmapGenerating />} />
          <Route path="/roadmap/result" element={<RoadmapResult />} />
          <Route path="/roadmap/learn" element={<SkillLearning />} />
          <Route path="/counsellor" element={<CounsellorDashboard />} />
          <Route path="/roadmap/:counsellorName" element={<RoadmapForm />} />
          <Route path="/roadmap/:counsellorName/generating" element={<RoadmapGenerating />} />
          <Route path="/roadmap/:counsellorName/result" element={<RoadmapResult />} />
          <Route path="/roadmap/:counsellorName/learn" element={<SkillLearning />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

