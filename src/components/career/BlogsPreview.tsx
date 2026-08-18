import { Link } from "react-router-dom";
import { BookOpen, ArrowRight, ExternalLink } from "lucide-react";
import { Card } from "@/components/ui/card";
import { BLOG_POSTS } from "@/lib/blogs-data";

export const BlogsPreview = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-14 border-t border-zinc-200">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
        <div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200 text-zinc-900 text-xs font-bold tracking-wider uppercase">
            <BookOpen className="w-3.5 h-3.5 text-zinc-900" /> Research & Evidence
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-zinc-950 mt-3">
            Why Career Guidance Matters
          </h2>
          <p className="text-zinc-500 text-sm sm:text-base mt-2 max-w-xl font-medium">
            Empirical research and investigative data on why interest-and-acumen-based guidance transforms student futures.
          </p>
        </div>

        <Link to="/blogs" className="mt-4 md:mt-0">
          <button className="rounded-xl border border-zinc-300 bg-white hover:bg-zinc-100 text-zinc-900 font-bold text-xs sm:text-sm h-10 px-4 inline-flex items-center gap-1.5 transition-colors cursor-pointer">
            View All Articles <ArrowRight className="w-4 h-4 ml-1" />
          </button>
        </Link>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {BLOG_POSTS.map((post) => {
          const isExternal = post.isExternal && post.externalUrl;

          return (
            <Card
              key={post.id}
              className="p-6 sm:p-7 rounded-3xl border border-zinc-200 bg-white shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-zinc-950 text-white text-[11px] font-bold uppercase tracking-wider">
                    {post.category}
                  </span>
                  {post.sourceMeta && (
                    <span className="px-2.5 py-0.5 rounded-full bg-zinc-100 border border-zinc-200 text-zinc-800 text-[11px] font-semibold">
                      {post.sourceMeta.publisher}
                    </span>
                  )}
                  <span className="text-[11px] text-zinc-400 font-medium">
                    {post.readTime}
                  </span>
                </div>

                {isExternal ? (
                  <a
                    href={post.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <h3 className="text-lg sm:text-xl font-extrabold text-zinc-950 group-hover:text-zinc-700 transition-colors leading-snug">
                      {post.title} <ExternalLink className="w-4 h-4 inline ml-1 opacity-70" />
                    </h3>
                  </a>
                ) : (
                  <Link to={`/blogs/${post.slug}`}>
                    <h3 className="text-lg sm:text-xl font-extrabold text-zinc-950 group-hover:text-zinc-700 transition-colors leading-snug">
                      {post.title}
                    </h3>
                  </Link>
                )}

                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-medium line-clamp-3">
                  {post.subtitle}
                </p>

                {/* Research stats grid */}
                <div className="grid grid-cols-2 gap-2.5 pt-1">
                  {post.keyStatistics.slice(0, 2).map((stat, i) => (
                    <div key={i} className="bg-zinc-50 border border-zinc-150 rounded-xl p-3">
                      <div className="text-xl font-black text-black">{stat.value}</div>
                      <div className="text-[11px] font-bold text-zinc-800 mt-0.5 leading-tight">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-zinc-100 flex items-center justify-between">
                <div className="text-xs text-zinc-500 font-medium">
                  {post.publishedDate}
                </div>
                {isExternal ? (
                  <a
                    href={post.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-black hover:text-zinc-600 transition-colors"
                  >
                    {post.id.includes("ijnrd") ? "Read Research Paper (PDF)" : "Read on India Today"}{" "}
                    <ExternalLink className="w-4 h-4" />
                  </a>
                ) : (
                  <Link
                    to={`/blogs/${post.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-black hover:text-zinc-600 transition-colors"
                  >
                    Read Article <ArrowRight className="w-4 h-4" />
                  </Link>
                )}
              </div>
            </Card>
          );
        })}
      </div>
    </section>
  );
};
