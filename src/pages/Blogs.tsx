import { useState, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  BookOpen,
  ArrowRight,
  Sparkles,
  Clock,
  Calendar,
  Search,
  ExternalLink,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { BLOG_POSTS, BLOG_CATEGORIES } from "@/lib/blogs-data";
import { Navbar } from "@/components/common/Navbar";

const Blogs = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredPosts = useMemo(() => {
    return BLOG_POSTS.filter((post) => {
      const matchesCategory =
        selectedCategory === "All" || post.category === selectedCategory;
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        post.title.toLowerCase().includes(query) ||
        post.summary.toLowerCase().includes(query) ||
        post.tags.some((tag) => tag.toLowerCase().includes(query)) ||
        post.author.name.toLowerCase().includes(query);
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <main className="min-h-screen bg-background pb-20">
      {/* Universal Top Navbar with Top-Left Back Button & Home Link */}
      <Navbar backTo="/" backLabel="Back to Home" />

      {/* Hero Section */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 pt-8 sm:pt-12 pb-6 text-center">
        <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-zinc-100 border border-zinc-200 shadow-sm text-xs font-bold text-zinc-800 uppercase tracking-wider mb-4 animate-fade-in">
          <BookOpen className="w-3.5 h-3.5 text-zinc-900" />
          Research & Articles
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-zinc-950 tracking-tight leading-tight max-w-3xl mx-auto">
          Why Career Guidance Matters:{" "}
          <span className="underline underline-offset-4 sm:underline-offset-8 decoration-zinc-300">
            Insights & Data
          </span>
        </h1>
        <p className="text-sm sm:text-base text-zinc-500 mt-4 max-w-2xl mx-auto font-medium leading-relaxed">
          Peer-reviewed empirical studies, national surveys, and data-backed analysis on the vital necessity of interest-and-acumen-based career planning.
        </p>
      </section>

      {/* Filter and Search Bar */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 pt-2 pb-6">
        <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
            {BLOG_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-black text-white shadow-sm"
                    : "bg-white text-zinc-600 border border-zinc-200 hover:bg-zinc-100 hover:text-black"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <Input
              type="text"
              placeholder="Search articles, topics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9 pr-4 h-9.5 rounded-full border-zinc-200 bg-white text-xs font-medium focus:border-black focus:ring-black"
            />
          </div>
        </div>
      </section>

      {/* Articles Grid - Wide Format */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 space-y-6">
        {filteredPosts.map((post) => {
          const isExternal = post.isExternal && post.externalUrl;

          return (
            <Card
              key={post.id}
              className="rounded-3xl border border-zinc-200 bg-white p-6 sm:p-8 shadow-card hover:shadow-lg transition-all group"
            >
              <div className="space-y-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-zinc-950 text-white text-[11px] font-bold uppercase tracking-wider">
                    {post.category}
                  </span>
                  {post.sourceMeta && (
                    <span className="px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200 text-zinc-700 text-xs font-semibold">
                      {post.sourceMeta.publisher}
                    </span>
                  )}
                  <div className="flex items-center gap-1 text-xs text-zinc-500 font-medium">
                    <Clock className="w-3.5 h-3.5" /> {post.readTime}
                  </div>
                  <span className="text-zinc-300">•</span>
                  <div className="flex items-center gap-1 text-xs text-zinc-500 font-medium">
                    <Calendar className="w-3.5 h-3.5" /> {post.publishedDate}
                  </div>
                </div>

                {isExternal ? (
                  <a
                    href={post.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-zinc-950 group-hover:text-zinc-700 transition-colors leading-snug">
                      {post.title} <ExternalLink className="w-5 h-5 inline ml-1.5 opacity-70" />
                    </h2>
                  </a>
                ) : (
                  <Link to={`/blogs/${post.slug}`}>
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-zinc-950 group-hover:text-zinc-700 transition-colors leading-snug">
                      {post.title}
                    </h2>
                  </Link>
                )}

                <p className="text-sm sm:text-base text-zinc-600 font-medium leading-relaxed">
                  {post.subtitle}
                </p>

                {/* Research Metrics Callout Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-1">
                  {post.keyStatistics.map((stat, idx) => (
                    <div
                      key={idx}
                      className="bg-zinc-50 border border-zinc-200 rounded-2xl p-3.5"
                    >
                      <div className="text-xl sm:text-2xl font-black text-black">{stat.value}</div>
                      <div className="text-xs font-bold text-zinc-800 mt-1 leading-snug">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-zinc-500 leading-relaxed pt-1">
                  {post.summary}
                </p>

                <div className="pt-5 border-t border-zinc-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-zinc-100 border border-zinc-200 flex items-center justify-center text-xs font-black text-zinc-800">
                      {post.author.avatarInitials}
                    </div>
                    <div className="text-xs">
                      <div className="font-bold text-zinc-950">{post.author.name}</div>
                      <div className="text-zinc-500 font-medium">{post.author.role}</div>
                    </div>
                  </div>

                  {isExternal ? (
                    <a
                      href={post.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto bg-black text-white hover:bg-zinc-800 rounded-xl font-bold text-xs sm:text-sm px-6 h-11 shadow-sm flex items-center justify-center gap-1.5 cursor-pointer transition-colors"
                    >
                      {post.id.includes("ijnrd")
                        ? "Read Research Paper (PDF)"
                        : `Read on ${post.sourceMeta?.publisher || "Official Source"}`}{" "}
                      <ExternalLink className="w-4 h-4 ml-1" />
                    </a>
                  ) : (
                    <Link to={`/blogs/${post.slug}`}>
                      <button className="w-full sm:w-auto bg-black text-white hover:bg-zinc-800 rounded-xl font-bold text-xs sm:text-sm px-6 h-11 shadow-sm flex items-center justify-center gap-1.5 cursor-pointer transition-colors">
                        Read Full Research Paper <ArrowRight className="w-4 h-4" />
                      </button>
                    </Link>
                  )}
                </div>
              </div>
            </Card>
          );
        })}
      </section>

      {/* Call to action section */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 pt-12">
        <Card className="rounded-3xl border border-zinc-200 bg-zinc-950 text-white p-8 sm:p-10 text-center shadow-glow">
          <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-white mx-auto mb-4">
            <Sparkles className="w-6 h-6" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Apply This Research To Your Own Career
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 mt-2 max-w-xl mx-auto leading-relaxed">
            Don't let career decisions happen by chance. Experience our AI-powered analysis to get personalized career matches and step-by-step learning roadmaps.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={() => navigate("/form")}
              className="bg-white text-black hover:bg-zinc-200 hover:text-black rounded-full px-6 font-bold text-xs sm:text-sm h-11 transition-colors cursor-pointer flex items-center justify-center"
            >
              Start Career Analysis
            </button>
            <button
              onClick={() => navigate("/roadmap")}
              className="bg-zinc-800 text-white border border-zinc-700 hover:bg-zinc-700 hover:text-white rounded-full px-6 font-bold text-xs sm:text-sm h-11 transition-colors cursor-pointer flex items-center justify-center"
            >
              Build Learning Roadmap
            </button>
          </div>
        </Card>
      </section>

      {/* Footer */}
      <footer className="mt-16 border-t border-zinc-200 py-8 text-center text-xs font-medium text-zinc-500">
        <p>© {new Date().getFullYear()} Wabi Career Guidance · Empowering students through data-driven mentorship</p>
      </footer>
    </main>
  );
};

export default Blogs;
