import { Link, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Home,
  Compass,
  Map,
  BookOpen,
  Share2,
  Sparkles,
} from "lucide-react";
import wabiLogo from "@/lib/wabi_resolutions_logo.jpeg";

interface NavbarProps {
  backTo?: string;
  backLabel?: string;
  showShare?: boolean;
  onShare?: () => void;
}

export const Navbar = ({
  backTo,
  backLabel = "Back",
  showShare = false,
  onShare,
}: NavbarProps) => {
  const navigate = useNavigate();

  return (
    <header className="border-b border-zinc-200 bg-white/90 backdrop-blur-md sticky top-0 z-40">
      <div className="max-w-6xl mx-auto px-3 sm:px-6 py-3 flex items-center justify-between gap-3">
        {/* Left Side: Back Button + Brand Logo */}
        <div className="flex items-center gap-3 sm:gap-4">
          {backTo && (
            <Link
              to={backTo}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-zinc-200 bg-white hover:bg-zinc-100 text-xs sm:text-sm font-bold text-zinc-800 transition-colors shadow-2xs"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="hidden xs:inline">{backLabel}</span>
            </Link>
          )}

          <Link to="/" className="flex items-center gap-2.5 group">
            <img
              src={wabiLogo}
              alt="Wabi Career Guidance"
              className="w-8 h-8 rounded-full object-cover border border-zinc-200 shadow-2xs"
            />
            <span className="font-extrabold text-sm sm:text-base text-zinc-950 tracking-tight group-hover:text-zinc-700 transition-colors">
              Wabi Career Guidance
            </span>
          </Link>
        </div>

        {/* Right Side: Global Nav Items & Actions */}
        <nav className="flex items-center gap-1.5 sm:gap-2.5">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-full text-xs font-bold text-zinc-700 hover:text-black hover:bg-zinc-100 transition-colors"
          >
            <Home className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Home</span>
          </Link>

          <Link
            to="/roadmap"
            className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-full text-xs font-bold text-zinc-700 hover:text-black hover:bg-zinc-100 transition-colors"
          >
            <Map className="w-3.5 h-3.5" />
            <span className="hidden md:inline">Roadmap</span>
          </Link>

          <Link
            to="/blogs"
            className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-full text-xs font-bold text-zinc-700 hover:text-black hover:bg-zinc-100 transition-colors"
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span className="hidden md:inline">Research & Blogs</span>
          </Link>

          {showShare && onShare && (
            <button
              onClick={onShare}
              className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-full border border-zinc-200 bg-white hover:bg-zinc-100 text-xs font-bold text-zinc-800 transition-colors cursor-pointer"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Share</span>
            </button>
          )}

          <button
            onClick={() => navigate("/form")}
            className="bg-black text-white hover:bg-zinc-800 rounded-full px-3.5 sm:px-4 h-8 sm:h-9 text-xs font-bold shadow-2xs flex items-center gap-1 cursor-pointer transition-colors"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span className="hidden xs:inline">Career Test</span>
          </button>
        </nav>
      </div>
    </header>
  );
};
