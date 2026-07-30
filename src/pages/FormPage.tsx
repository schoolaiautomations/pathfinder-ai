import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { CareerForm } from "@/components/career/CareerForm";
import wabiLogo from "@/lib/wabi_resolutions_logo.jpeg";

const FormPage = () => {
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
      <CareerForm />
    </main>
  );
};

export default FormPage;
