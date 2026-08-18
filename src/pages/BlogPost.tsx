import { useEffect, useMemo } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import {
  BookOpen,
  Calendar,
  Clock,
  CheckCircle2,
  Sparkles,
  Quote,
  TrendingUp,
  BookmarkCheck,
  Award,
  ExternalLink,
  Users,
  ShieldCheck,
  FileText,
  ChevronRight,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { BLOG_POSTS } from "@/lib/blogs-data";
import { Navbar } from "@/components/common/Navbar";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();

  const post = useMemo(() => {
    return BLOG_POSTS.find((p) => p.slug === slug || p.id === slug) || BLOG_POSTS[0];
  }, [slug]);

  // If this is an external article (like India Today), redirect directly to external URL
  useEffect(() => {
    if (post && post.isExternal && post.externalUrl) {
      window.location.href = post.externalUrl;
    }
  }, [post]);

  const relatedPosts = useMemo(() => {
    if (!post) return [];
    return BLOG_POSTS.filter((p) => p.id !== post.id);
  }, [post]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: post?.title,
          text: post?.subtitle,
          url: window.location.href,
        })
        .catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast({
        title: "Link Copied",
        description: "Article link copied to your clipboard.",
      });
    }
  };

  if (!post) {
    return (
      <main className="min-h-screen bg-background flex flex-col">
        <Navbar backTo="/blogs" backLabel="Back to Articles" />
        <div className="flex-1 flex items-center justify-center p-4">
          <Card className="max-w-md w-full p-8 text-center rounded-3xl border border-zinc-200 bg-white">
            <BookOpen className="w-12 h-12 text-zinc-400 mx-auto mb-4" />
            <h1 className="text-2xl font-bold text-zinc-950">Article Not Found</h1>
            <p className="text-sm text-zinc-500 mt-2">
              The article you are looking for might have been moved or updated.
            </p>
            <button
              onClick={() => navigate("/blogs")}
              className="mt-6 bg-black text-white hover:bg-zinc-800 rounded-xl px-5 py-2.5 font-bold text-sm cursor-pointer"
            >
              Back to Research Portal
            </button>
          </Card>
        </div>
      </main>
    );
  }

  // If external article is loading redirect, show a clean link banner
  if (post.isExternal && post.externalUrl) {
    return (
      <main className="min-h-screen bg-background flex flex-col">
        <Navbar backTo="/blogs" backLabel="Back to Articles" />
        <div className="flex-1 flex items-center justify-center p-4">
          <Card className="max-w-xl w-full p-8 text-center rounded-3xl border border-zinc-200 bg-white shadow-card">
            <ExternalLink className="w-12 h-12 text-zinc-950 mx-auto mb-4" />
            <span className="px-3 py-1 rounded-full bg-zinc-100 text-zinc-800 text-xs font-bold uppercase tracking-wider">
              {post.sourceMeta?.publisher || "External Publication"}
            </span>
            <h1 className="text-2xl font-extrabold text-zinc-950 mt-3">
              {post.title}
            </h1>
            <p className="text-sm text-zinc-500 mt-2">
              Redirecting you to the official India Today article...
            </p>
            <a
              href={post.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center justify-center gap-2 bg-black text-white hover:bg-zinc-800 rounded-full px-6 h-12 font-bold text-sm shadow-sm transition-colors"
            >
              Open on India Today <ExternalLink className="w-4 h-4" />
            </a>
          </Card>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background pb-20">
      {/* Universal Top Navbar with Top-Left Back Button & Home Link */}
      <Navbar
        backTo="/blogs"
        backLabel="Back to Articles"
        showShare={true}
        onShare={handleShare}
      />

      {/* Main Container - Extended Width */}
      <article className="max-w-5xl mx-auto px-4 sm:px-6 pt-8 sm:pt-12">
        {/* Journal Badge & Publication Metadata */}
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className="px-3 py-1 rounded-full bg-zinc-950 text-white text-xs font-bold">
            {post.category}
          </span>
          {post.sourceMeta && (
            <span className="px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200 text-zinc-800 text-xs font-semibold">
              {post.sourceMeta.publisher}
            </span>
          )}
          <div className="flex items-center gap-1.5 text-xs text-zinc-500 font-medium">
            <Clock className="w-3.5 h-3.5" /> {post.readTime}
          </div>
          <span className="text-zinc-300">•</span>
          <div className="flex items-center gap-1.5 text-xs text-zinc-500 font-medium">
            <Calendar className="w-3.5 h-3.5" /> {post.publishedDate}
          </div>
        </div>

        {/* Paper Title & Subtitle */}
        <h1 className="text-2xl sm:text-4xl lg:text-[42px] font-extrabold text-zinc-950 tracking-tight leading-[1.2]">
          {post.title}
        </h1>
        <p className="text-base sm:text-lg text-zinc-600 font-medium mt-3 leading-relaxed">
          {post.subtitle}
        </p>

        {/* Authors & Publisher Meta Box */}
        <div className="bg-zinc-50 border border-zinc-200 rounded-2xl p-4 sm:p-5 mt-6 mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-full bg-black text-white flex items-center justify-center font-bold text-sm shadow-sm shrink-0">
              {post.author.avatarInitials}
            </div>
            <div>
              <div className="font-extrabold text-sm sm:text-base text-zinc-950">
                {post.author.name}
              </div>
              <div className="text-xs text-zinc-500 font-medium">
                {post.author.role}
              </div>
            </div>
          </div>

          {post.sourceMeta && (
            <div className="text-xs text-zinc-600 sm:text-right border-t sm:border-t-0 pt-2 sm:pt-0 border-zinc-200 space-y-0.5">
              <div className="font-bold text-zinc-900">{post.sourceMeta.edition || post.sourceMeta.publisher}</div>
              <div className="text-zinc-500">
                {post.sourceMeta.issnOrUrl} {post.sourceMeta.identifier && `· ${post.sourceMeta.identifier}`}
              </div>
            </div>
          )}
        </div>

        {/* Visual Illustration */}
        <div className="rounded-2xl border border-zinc-200 bg-white p-2 shadow-sm overflow-hidden mb-8">
          <img
            src="/research_mentoring_cover.jpg"
            alt="Research and Mentoring Overview"
            className="w-full h-auto max-h-64 object-cover rounded-xl"
          />
        </div>

        {/* Abstract Box (if available) */}
        {post.content.abstract && (
          <Card className="rounded-3xl border border-zinc-200 bg-white p-6 sm:p-8 mb-10 shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <FileText className="w-4 h-4 text-black" />
              <span className="text-xs font-bold text-zinc-900 uppercase tracking-wider">
                Abstract
              </span>
            </div>
            <p className="text-sm sm:text-base text-zinc-700 leading-relaxed font-medium">
              {post.content.abstract}
            </p>
          </Card>
        )}

        {/* Key Empirical Research Statistics Grid */}
        {post.keyStatistics && post.keyStatistics.length > 0 && (
          <div className="mb-10">
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp className="w-4 h-4 text-black" />
              <span className="text-xs font-bold text-zinc-900 uppercase tracking-wider">
                Key Findings & Statistical Benchmarks
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              {post.keyStatistics.map((stat, i) => (
                <div
                  key={i}
                  className="bg-white border border-zinc-200 rounded-2xl p-4 shadow-sm hover:shadow-md transition-all"
                >
                  <div className="text-2xl sm:text-3xl font-black text-black">{stat.value}</div>
                  <div className="text-xs font-bold text-zinc-800 mt-1 leading-snug">
                    {stat.label}
                  </div>
                  <div className="text-[10px] text-zinc-400 font-medium mt-1">
                    {stat.source}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Introduction / Overview */}
        <div className="text-zinc-800 text-sm sm:text-base leading-relaxed mb-8">
          <div className="bg-zinc-50/70 p-5 rounded-2xl border-l-4 border-black text-zinc-800 font-normal leading-relaxed">
            <div className="text-xs font-bold text-zinc-900 uppercase tracking-wider mb-2">Introduction & Overview</div>
            <p>{post.content.introduction}</p>
          </div>
        </div>

        {/* Structured Sections */}
        <div className="space-y-10">
          {post.content.sections.map((section, idx) => (
            <section key={idx} className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-zinc-950 tracking-tight">
                {section.heading}
              </h2>

              {section.paragraphs.map((p, pIdx) => (
                <p key={pIdx} className="text-sm sm:text-base text-zinc-700 leading-relaxed font-normal">
                  {p}
                </p>
              ))}

              {/* Callout Quote or Stat */}
              {section.callout && (
                <div className="my-6 p-5 sm:p-6 rounded-2xl bg-zinc-900 text-white shadow-sm">
                  <div className="flex items-start gap-3">
                    <Quote className="w-6 h-6 text-zinc-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm sm:text-base font-semibold leading-relaxed text-zinc-100">
                        "{section.callout.text}"
                      </p>
                      {section.callout.author && (
                        <div className="text-xs text-zinc-400 mt-2 font-medium">
                          — {section.callout.author}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* Key points checklist */}
              {section.keyPoints && section.keyPoints.length > 0 && (
                <div className="bg-zinc-50 border border-zinc-200 rounded-2xl p-4 sm:p-5 space-y-2 mt-4">
                  <div className="text-xs font-bold text-zinc-900 uppercase tracking-wider mb-1">
                    Key Insights & Observations
                  </div>
                  {section.keyPoints.map((point, kIdx) => (
                    <div key={kIdx} className="flex items-start gap-2 text-xs sm:text-sm text-zinc-700 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-black shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              )}
            </section>
          ))}
        </div>

        {/* Survey Sample Demographics (if present) */}
        {post.surveyAgeDistribution && (
          <Card className="rounded-3xl border border-zinc-200 bg-white p-6 sm:p-8 my-10 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <Users className="w-5 h-5 text-black" />
              <h3 className="text-lg font-bold text-zinc-950">
                Survey Sample Demographics & Age Frequencies (N = 100)
              </h3>
            </div>
            <p className="text-xs text-zinc-500 mb-4">
              Data collected and evaluated using JMP statistical software across multiple academic age cohorts.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
              {post.surveyAgeDistribution.map((dist, i) => (
                <div key={i} className="bg-zinc-50 border border-zinc-200 rounded-2xl p-3.5 text-center">
                  <div className="text-xs font-bold text-zinc-500">{dist.ageGroup}</div>
                  <div className="text-xl font-extrabold text-black mt-1">{dist.percentage}</div>
                  <div className="text-[10px] text-zinc-400 font-medium">{dist.count} respondents</div>
                </div>
              ))}
            </div>
          </Card>
        )}

        {/* Quality Assurance Parameters Box (if present) */}
        {post.content.qualityParameters && (
          <Card className="rounded-3xl border border-zinc-200 bg-zinc-50/80 p-6 sm:p-8 my-10 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <ShieldCheck className="w-5 h-5 text-black" />
              <h3 className="text-lg sm:text-xl font-extrabold text-zinc-950">
                Quality Assurance Parameters In Career Mentoring
              </h3>
            </div>
            <p className="text-xs text-zinc-600 mb-6 leading-relaxed">
              The research argues that career counseling quality must be measured systematically across these five dimensions:
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
              {post.content.qualityParameters.map((q, i) => (
                <div key={i} className="bg-white border border-zinc-200 rounded-2xl p-4">
                  <div className="text-xs font-black text-black uppercase tracking-wider">
                    {i + 1}. {q.parameter}
                  </div>
                  <p className="text-xs text-zinc-600 mt-1.5 leading-relaxed font-medium">
                    {q.description}
                  </p>
                </div>
              ))}
            </div>
          </Card>
        )}

        {/* Actionable Takeaways */}
        {post.content.actionableTakeaways && (
          <Card className="rounded-3xl border-2 border-black bg-white p-6 sm:p-8 my-10 shadow-card">
            <div className="flex items-center gap-2 mb-4">
              <BookmarkCheck className="w-5 h-5 text-black" />
              <h3 className="text-lg sm:text-xl font-extrabold text-zinc-950">
                Actionable Recommendations
              </h3>
            </div>
            <ul className="space-y-3">
              {post.content.actionableTakeaways.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-zinc-800 font-semibold leading-relaxed">
                  <div className="w-5 h-5 rounded-full bg-zinc-100 border border-zinc-300 flex items-center justify-center text-xs font-bold text-zinc-900 shrink-0 mt-0.5">
                    {i + 1}
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        )}

        {/* Conclusion */}
        <div className="bg-zinc-50 rounded-2xl p-5 sm:p-6 border border-zinc-200 mb-10 text-sm text-zinc-700 leading-relaxed font-medium">
          <span className="font-bold text-zinc-950 block mb-1 text-base">Conclusion:</span>
          {post.content.conclusion}
        </div>

        {/* Academic / Source Citations */}
        {post.researchCitations && post.researchCitations.length > 0 && (
          <div className="border-t border-zinc-200 pt-6 mb-10">
            <div className="flex items-center gap-2 mb-3 text-xs font-bold text-zinc-500 uppercase tracking-wider">
              <Award className="w-4 h-4 text-zinc-600" />
              Cited Research & Surveys
            </div>
            <div className="space-y-2">
              {post.researchCitations.map((cite, i) => (
                <div key={i} className="text-xs text-zinc-600 bg-white border border-zinc-200 rounded-xl p-3 font-normal leading-relaxed">
                  <span className="font-bold text-zinc-950">{cite.institution}</span> ({cite.year}):{" "}
                  <span className="text-zinc-600">"{cite.finding}"</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Academic References List (if available) */}
        {post.content.academicReferences && (
          <div className="border-t border-zinc-200 pt-6 mb-12">
            <div className="flex items-center gap-2 mb-3 text-xs font-bold text-zinc-500 uppercase tracking-wider">
              <Award className="w-4 h-4 text-zinc-600" />
              Academic References & Literature Cited
            </div>
            <div className="space-y-2">
              {post.content.academicReferences.map((ref, i) => (
                <div key={i} className="text-xs text-zinc-600 bg-white border border-zinc-200 rounded-xl p-3 font-normal leading-relaxed">
                  <span className="font-bold text-zinc-800">[{i + 1}]</span> {ref}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Related Articles */}
        {relatedPosts.length > 0 && (
          <div className="border-t border-zinc-200 pt-8 my-10">
            <h3 className="text-lg sm:text-xl font-bold text-zinc-950 mb-4">
              More Research & Articles
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {relatedPosts.map((rel) => {
                if (rel.isExternal && rel.externalUrl) {
                  return (
                    <Card
                      key={rel.id}
                      className="p-5 rounded-2xl border border-zinc-200 bg-white hover:shadow-md transition-all flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-2">
                          <span className="px-2.5 py-0.5 rounded-full bg-zinc-100 border border-zinc-200 text-zinc-800 text-[10px] font-bold">
                            {rel.category}
                          </span>
                          <span className="text-[11px] text-zinc-400 font-medium">
                            {rel.readTime}
                          </span>
                        </div>
                        <a
                          href={rel.externalUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-bold text-sm sm:text-base text-zinc-950 hover:text-zinc-700 mt-1 line-clamp-2 leading-snug block"
                        >
                          {rel.title} <ExternalLink className="w-3.5 h-3.5 inline ml-1" />
                        </a>
                        <p className="text-xs text-zinc-500 mt-1.5 line-clamp-2 leading-relaxed font-medium">
                          {rel.summary}
                        </p>
                      </div>
                      <a
                        href={rel.externalUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-bold text-black hover:text-zinc-600 mt-4"
                      >
                        Read on India Today <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </Card>
                  );
                }

                return (
                  <Card
                    key={rel.id}
                    className="p-5 rounded-2xl border border-zinc-200 bg-white hover:shadow-md transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="px-2.5 py-0.5 rounded-full bg-zinc-100 border border-zinc-200 text-zinc-800 text-[10px] font-bold">
                          {rel.category}
                        </span>
                        <span className="text-[11px] text-zinc-400 font-medium">
                          {rel.readTime}
                        </span>
                      </div>
                      <Link
                        to={`/blogs/${rel.slug}`}
                        className="font-bold text-sm sm:text-base text-zinc-950 hover:text-zinc-700 mt-1 line-clamp-2 leading-snug block"
                      >
                        {rel.title}
                      </Link>
                      <p className="text-xs text-zinc-500 mt-1.5 line-clamp-2 leading-relaxed font-medium">
                        {rel.summary}
                      </p>
                    </div>
                    <Link
                      to={`/blogs/${rel.slug}`}
                      className="inline-flex items-center gap-1 text-xs font-bold text-black hover:text-zinc-600 mt-4"
                    >
                      Read Article <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                  </Card>
                );
              })}
            </div>
          </div>
        )}

        {/* Call to Action Box */}
        <Card className="rounded-3xl border border-zinc-200 bg-zinc-950 text-white p-8 sm:p-10 text-center my-10 shadow-glow">
          <Sparkles className="w-8 h-8 mx-auto mb-3 text-zinc-200" />
          <h3 className="text-xl sm:text-3xl font-extrabold tracking-tight">
            Assess Your Interest & Acumen With AI
          </h3>
          <p className="text-xs sm:text-sm text-zinc-400 mt-2 max-w-xl mx-auto leading-relaxed">
            Put the research into action. Discover the right career path tailored to your specific passions and strengths, or build a phase-by-phase learning roadmap.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={() => navigate("/form")}
              className="bg-white text-black hover:bg-zinc-200 hover:text-black rounded-full px-6 font-bold text-xs sm:text-sm h-11 transition-colors cursor-pointer flex items-center justify-center"
            >
              Start Free Career Analysis
            </button>
            <button
              onClick={() => navigate("/roadmap")}
              className="bg-zinc-800 text-white border border-zinc-700 hover:bg-zinc-700 hover:text-white rounded-full px-6 font-bold text-xs sm:text-sm h-11 transition-colors cursor-pointer flex items-center justify-center"
            >
              Build Learning Roadmap
            </button>
          </div>
        </Card>
      </article>

      {/* Footer */}
      <footer className="mt-16 border-t border-zinc-200 py-8 text-center text-xs font-medium text-zinc-500">
        <p>© {new Date().getFullYear()} Wabi Career Guidance · Empowering students through data-driven mentorship</p>
      </footer>
    </main>
  );
};

export default BlogPost;
