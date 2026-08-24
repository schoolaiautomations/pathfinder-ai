import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { DEFAULT_CAREER_OPTIONS } from "@/lib/roadmap-data";
import {
  FileText,
  Sparkles,
  Search,
  ExternalLink,
  ArrowRight,
  Eye,
  CheckCircle,
  X,
  Printer,
} from "lucide-react";

export const DetailedReportsView = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [previewFile, setPreviewFile] = useState<string | null>(null);
  const [previewTitle, setPreviewTitle] = useState<string>("");

  const filteredOptions = DEFAULT_CAREER_OPTIONS.filter((opt) =>
    opt.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const openPreview = (file: string, title: string) => {
    setPreviewFile(`/career-format/${file}`);
    setPreviewTitle(title);
  };

  return (
    <div className="space-y-6">
      {/* Top Banner / Assessment Launcher */}
      <div
        className="rounded-3xl p-6 sm:p-8 text-stone-900 shadow-sm border relative overflow-hidden"
        style={{ background: "#F5F1EC", borderColor: "#E0D6CA" }}
      >
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="max-w-2xl space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-stone-900 text-[#FAF8F5]">
              <Sparkles className="w-3.5 h-3.5 text-[#C9A97A]" />
              In-Depth AI Career Diagnostics
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-stone-900">Detailed Report of Career</h2>
            <p className="text-xs sm:text-sm text-stone-600 font-medium leading-relaxed">
              Launch a full multi-dimensional student psychometric assessment or inspect our 19 comprehensive Four-Circles career blueprints covering passion, natural stream fit, market viability, and backup plans.
            </p>
          </div>

          <button
            onClick={() => navigate("/form")}
            className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl font-bold text-xs sm:text-sm transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 cursor-pointer shrink-0"
            style={{ background: "#1C1917", color: "#FAF8F5" }}
          >
            <Sparkles className="w-4 h-4 text-[#C9A97A]" />
            <span>Generate Full Student Report</span>
            <ArrowRight className="w-4 h-4 ml-1 opacity-70" />
          </button>
        </div>
      </div>

      {/* Blueprints Library Search */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h3 className="text-base sm:text-lg font-extrabold text-stone-900">
              Browse 4-Circles Career Blueprints ({DEFAULT_CAREER_OPTIONS.length})
            </h3>
            <p className="text-xs text-stone-500 font-medium">
              Click any career card below to inspect the complete full-length blueprint report.
            </p>
          </div>

          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
            <input
              type="text"
              placeholder="Search career blueprint..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full h-10 pl-9 pr-3 text-xs rounded-xl border border-stone-300 bg-white font-medium focus:ring-2 focus:ring-stone-900 outline-none"
            />
          </div>
        </div>

        {/* Career Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3.5">
          {filteredOptions.map((opt) => (
            <div
              key={opt.id}
              onClick={() => openPreview(opt.file, opt.label)}
              className="group p-4 rounded-2xl border bg-white hover:bg-stone-50 transition-all cursor-pointer shadow-2xs hover:shadow hover:-translate-y-0.5 flex items-center justify-between"
              style={{ borderColor: "#E5DDD2" }}
            >
              <div className="flex items-center gap-3 min-w-0">
                <span className="text-2xl shrink-0 p-2 rounded-xl bg-stone-50 border border-stone-200/60 group-hover:scale-110 transition-transform">
                  {opt.icon}
                </span>
                <div className="min-w-0">
                  <h4 className="font-extrabold text-xs sm:text-sm text-stone-900 truncate group-hover:text-[#7C5C3E] transition-colors">
                    {opt.label}
                  </h4>
                  <span className="text-[10px] font-bold text-stone-400 uppercase tracking-wider block mt-0.5">
                    4-Circles Report
                  </span>
                </div>
              </div>

              <div className="p-2 rounded-xl bg-stone-100 group-hover:bg-stone-900 group-hover:text-white transition-colors text-stone-600">
                <Eye className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Embedded Report Preview Modal */}
      {previewFile && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-2 sm:p-6 animate-in fade-in duration-150">
          <div className="bg-white w-full max-w-5xl h-[92vh] rounded-3xl shadow-2xl flex flex-col overflow-hidden border border-stone-300">
            {/* Modal Header */}
            <div className="px-5 py-3.5 border-b border-stone-200 flex items-center justify-between bg-stone-50">
              <div className="flex items-center gap-2.5">
                <FileText className="w-4 h-4 text-[#7C5C3E]" />
                <span className="font-extrabold text-sm text-stone-900">
                  {previewTitle} — Detailed Career Blueprint
                </span>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={previewFile}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-stone-200 bg-white hover:bg-stone-100 text-xs font-bold text-stone-700 shadow-2xs"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Open Full Tab</span>
                </a>
                <button
                  onClick={() => setPreviewFile(null)}
                  className="p-1.5 rounded-xl border border-stone-200 bg-white hover:bg-stone-100 text-stone-700 cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Iframe Viewer */}
            <div className="flex-1 w-full bg-stone-100 overflow-hidden">
              <iframe
                src={previewFile}
                title={previewTitle}
                className="w-full h-full border-0"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
