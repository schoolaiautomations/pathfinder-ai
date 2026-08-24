import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  ArrowRight,
  Map,
  Sparkles,
  BookOpen,
  Compass,
  Heart,
  Users,
  Phone,
  ChevronRight,
  Menu,
  X,
  Lock,
} from "lucide-react";
import wabiLogo from "@/lib/wabi_resolutions_logo.jpeg";
import councellingImg from "@/lib/councelling.png";

const Index = () => {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <main className="min-h-screen font-sans text-stone-900" style={{ background: "#FAF8F5" }}>

      {/* ─── NAVBAR ─────────────────────────────────────────────────────────── */}
      <header className="sticky top-0 z-50 border-b border-stone-200/70" style={{ background: "rgba(250,248,245,0.92)", backdropFilter: "blur(16px)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-8 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2.5 sm:gap-3 group min-w-0">
            <img
              src={wabiLogo}
              alt="Wabi"
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover shadow-sm shrink-0"
            />
            <div className="min-w-0">
              <span className="font-extrabold text-xs sm:text-base text-stone-900 tracking-tight block leading-none truncate">
                Wabi Career Guidance
              </span>
              <span className="text-[9px] sm:text-[10px] font-semibold text-stone-400 tracking-widest uppercase block mt-0.5 truncate">
                Career Counselling
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden sm:flex items-center gap-1 sm:gap-2">
            <Link
              to="/counsellor"
              className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-stone-600 hover:text-stone-900 px-3 py-2 rounded-xl hover:bg-stone-100 transition-all"
            >
              Counsellor Login
            </Link>
            <Link
              to="/roadmap"
              className="flex items-center gap-1.5 px-4 sm:px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all shadow-sm hover:shadow-md cursor-pointer hover:-translate-y-0.5 active:translate-y-0"
              style={{ background: "#1C1917", color: "#FAF8F5" }}
            >
              <Map className="w-3.5 h-3.5" />
              Explore Roadmaps
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="sm:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl border border-stone-200 bg-white text-stone-700 hover:text-stone-950 shadow-2xs cursor-pointer transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Panel */}
        {mobileMenuOpen && (
          <div className="sm:hidden border-t border-stone-200/80 px-4 py-3 space-y-2 bg-[#FAF8F5]/98 backdrop-blur-lg animate-in slide-in-from-top-2 duration-200">
            <Link
              to="/roadmap"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between p-3 rounded-xl font-bold text-xs shadow-sm cursor-pointer"
              style={{ background: "#1C1917", color: "#FAF8F5" }}
            >
              <span className="flex items-center gap-2">
                <Map className="w-4 h-4 text-[#C9A97A]" />
                Explore Roadmaps
              </span>
              <ChevronRight className="w-4 h-4 opacity-50" />
            </Link>
            <Link
              to="/counsellor"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between p-3 rounded-xl font-bold text-xs bg-white border border-stone-200 text-stone-800 shadow-2xs hover:bg-stone-50 transition-colors"
            >
              <span className="flex items-center gap-2">
                <Lock className="w-4 h-4 text-stone-500" />
                Counsellor Login
              </span>
              <ChevronRight className="w-4 h-4 opacity-50" />
            </Link>
          </div>
        )}
      </header>

      {/* ─── HERO ──────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden">
        {/* Warm ambient gradient */}
        <div
          className="absolute inset-0 -z-10"
          style={{
            background: "radial-gradient(ellipse 80% 60% at 50% -10%, #E8DFD0 0%, transparent 70%), #FAF8F5",
          }}
        />

        <div className="max-w-7xl mx-auto px-5 sm:px-8 pt-10 sm:pt-16 pb-14 sm:pb-20">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Left Column: Copy & CTAs */}
            <div className="lg:col-span-7 text-left space-y-5">
              {/* Eyebrow label */}
              <div>
                <span
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase"
                  style={{ background: "#F0EBE1", color: "#78645A", border: "1px solid #DDD3C5" }}
                >
                  <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "#B5956A" }} />
                  Personalised Career Counselling for Indian Students
                </span>
              </div>

              {/* Headline */}
              <h1
                className="font-extrabold leading-[1.12] tracking-tight"
                style={{ fontSize: "clamp(2rem, 5vw, 3.6rem)", color: "#1C1917" }}
              >
                Your child's future is{" "}
                <span
                  style={{
                    background: "linear-gradient(135deg, #B5956A 0%, #7C5C3E 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  too important
                </span>{" "}
                to leave to chance.
              </h1>

              {/* Subtext */}
              <p
                className="leading-relaxed text-sm sm:text-base font-medium max-w-xl"
                style={{ color: "#6B5E53" }}
              >
                Most students in India choose careers based on what their neighbours chose, not what truly fits them.
                We sit with you — honestly, patiently — and help you find a direction that genuinely matches who you are.
              </p>

              {/* Primary CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                <button
                  onClick={() => navigate("/roadmap")}
                  className="flex items-center justify-center gap-2 px-8 py-3.5 rounded-2xl font-bold text-sm sm:text-base cursor-pointer transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
                  style={{ background: "#1C1917", color: "#FAF8F5" }}
                >
                  <Map className="w-4 h-4" />
                  Explore Career Roadmaps
                  <ArrowRight className="w-4 h-4 ml-1" />
                </button>
              </div>

              {/* Social proof strip */}
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2 pt-2 text-xs font-medium" style={{ color: "#9B8B7E" }}>
                <span className="flex items-center gap-1.5">
                  <Heart className="w-3.5 h-3.5" style={{ color: "#C9A97A" }} />
                  Empathy-first counselling
                </span>
                <span className="w-1 h-1 rounded-full hidden sm:block" style={{ background: "#D5C9BE" }} />
                <span className="flex items-center gap-1.5">
                  <Compass className="w-3.5 h-3.5" style={{ color: "#C9A97A" }} />
                  Four Circles Methodology
                </span>
                <span className="w-1 h-1 rounded-full hidden sm:block" style={{ background: "#D5C9BE" }} />
                <span className="flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5" style={{ color: "#C9A97A" }} />
                  For students &amp; families
                </span>
              </div>
            </div>

            {/* Right Column: Hero Illustration Image */}
            <div className="lg:col-span-5 flex items-center justify-center lg:justify-end">
              <div className="relative max-w-sm sm:max-w-md w-full">
                <div
                  className="absolute -inset-2 rounded-3xl blur-2xl opacity-40 -z-10"
                  style={{ background: "#E8DFD0" }}
                />
                <img
                  src={councellingImg}
                  alt="Career Counselling Session"
                  className="w-full h-auto object-contain rounded-3xl drop-shadow-md hover:scale-[1.02] transition-transform duration-300"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── TRUTH STRIP (WHAT STUDIES REVEAL) ──────────────────────────────── */}
      <section style={{ background: "#F0EBE1", borderTop: "1px solid #E0D6CA", borderBottom: "1px solid #E0D6CA" }}>
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-10 sm:py-14">
          <p className="text-center text-xs sm:text-sm font-semibold tracking-widest uppercase mb-8" style={{ color: "#9B8B7E" }}>
            What national studies reveal
          </p>
          <div className="grid sm:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                stat: "9 in 10",
                text: "students in India receive zero professional career counselling before choosing their stream or college degree.",
              },
              {
                stat: "89%",
                text: "of secondary school students reported feeling confused or uncertain about their career direction at Class 10 or 12.",
              },
              {
                stat: "86.8%",
                text: "said guidance matched to their actual interests — not societal pressure — would have changed their decisions.",
              },
            ].map(({ stat, text }) => (
              <div key={stat} className="text-center space-y-2">
                <div
                  className="font-extrabold leading-none"
                  style={{ fontSize: "clamp(2rem, 5vw, 3rem)", color: "#7C5C3E" }}
                >
                  {stat}
                </div>
                <p className="text-xs sm:text-sm leading-relaxed" style={{ color: "#6B5E53" }}>
                  {text}
                </p>
              </div>
            ))}
          </div>
          <p className="text-center text-xs mt-8 italic" style={{ color: "#A89A8E" }}>
            Source: Peer-reviewed research (IJNRD, 2023) &amp; India Today national investigation.
          </p>
        </div>
      </section>

      {/* ─── EMPATHY SECTION ─────────────────────────────────────────────── */}
      <section style={{ background: "#F0EBE1", borderTop: "1px solid #E0D6CA", borderBottom: "1px solid #E0D6CA" }}>
        <div className="max-w-4xl mx-auto px-5 sm:px-8 py-16 sm:py-20 text-center space-y-5">
          <Compass className="w-8 h-8 mx-auto" style={{ color: "#B5956A" }} />
          <h2
            className="font-extrabold leading-tight tracking-tight"
            style={{ fontSize: "clamp(1.4rem, 3.5vw, 2.2rem)", color: "#1C1917" }}
          >
            "I don't know what to do after 10th" is the most honest thing a student can say.
          </h2>
          <p className="text-sm sm:text-base leading-relaxed" style={{ color: "#6B5E53" }}>
            The pressure to decide a life-long direction at 15 or 16 is immense. Parents want security.
            Friends have opinions. Society has expectations. And somewhere in all of that noise,
            the student's own voice gets lost.
          </p>
          <p className="text-sm sm:text-base leading-relaxed" style={{ color: "#6B5E53" }}>
            At Wabi, we create space for that voice. We don't rush, we don't judge, and we don't
            hand you a pre-packaged answer. We help you understand yourself — and from that
            understanding, build a future that is genuinely fulfilling.
          </p>
          <div className="flex justify-center pt-3">
            <button
              onClick={() => navigate("/roadmap")}
              className="flex items-center justify-center gap-2 px-8 py-3.5 rounded-2xl font-bold text-sm cursor-pointer transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
              style={{ background: "#1C1917", color: "#FAF8F5" }}
            >
              <Map className="w-4 h-4" />
              Explore Career Roadmaps
            </button>
          </div>
        </div>
      </section>

      {/* ─── WHAT WE LOOK AT ─────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-16 sm:py-24">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Left: sticky title */}
          <div className="space-y-5 lg:sticky lg:top-24">
            <p className="text-xs font-bold uppercase tracking-widest" style={{ color: "#B5956A" }}>
              Our Methodology
            </p>
            <h2
              className="font-extrabold leading-tight tracking-tight"
              style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.4rem)", color: "#1C1917" }}
            >
              Four dimensions we explore with every student
            </h2>
            <p className="text-sm sm:text-base leading-relaxed" style={{ color: "#6B5E53" }}>
              Career guidance isn't a single-question test. It's a conversation that
              looks at four interconnected areas — because a career that works for you
              must work across all of them.
            </p>
            <button
              onClick={() => navigate("/roadmap")}
              className="flex items-center gap-2 px-6 py-3 rounded-2xl font-bold text-sm cursor-pointer transition-all hover:-translate-y-0.5"
              style={{ background: "#1C1917", color: "#FAF8F5" }}
            >
              See it in Action <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Right: 4 dimensions */}
          <div className="space-y-4">
            {[
              {
                num: "01",
                title: "Passion & Daily Joy",
                body: "What subjects or activities make time feel like it's flying? A career anchored to genuine curiosity doesn't feel like work — and that sustainability matters over decades.",
              },
              {
                num: "02",
                title: "Natural Strengths & Stream Fit",
                body: "Where do you naturally excel without excessive effort? This guides which Intermediate stream (MPC, BiPC, MEC, CEC) or vocational path creates the least resistance and most momentum.",
              },
              {
                num: "03",
                title: "Real-World Demand & Competition",
                body: "What are actual applicant-to-vacancy ratios? How many seats exist? What does the market look like in 5–10 years? Honest data prevents years of effort toward a bottlenecked path.",
              },
              {
                num: "04",
                title: "Financial Investment & Plan B",
                body: "What is the total education cost and how many years of non-earning does it involve? Are there backup careers that protect you if Plan A doesn't work out? Security matters as much as aspiration.",
              },
            ].map(({ num, title, body }) => (
              <div
                key={num}
                className="rounded-2xl p-5 sm:p-6 flex gap-4 transition-all hover:shadow-sm"
                style={{ background: "#F5F1EC", border: "1px solid #E5DDD2" }}
              >
                <span className="font-mono font-extrabold text-xs shrink-0 mt-0.5 w-7" style={{ color: "#B5956A" }}>
                  {num}
                </span>
                <div>
                  <h4 className="font-extrabold text-sm sm:text-base mb-1.5" style={{ color: "#1C1917" }}>
                    {title}
                  </h4>
                  <p className="text-xs sm:text-sm leading-relaxed" style={{ color: "#6B5E53" }}>
                    {body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─────────────────────────────────────────────────────── */}
      <footer style={{ borderTop: "1px solid #E0D6CA", background: "#F0EBE1" }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img src={wabiLogo} alt="Wabi" className="w-7 h-7 rounded-full object-cover opacity-80" />
            <span className="text-xs font-semibold" style={{ color: "#7C6C62" }}>
              © {new Date().getFullYear()} Wabi Resolutions &amp; Career Guidance
            </span>
          </div>
          <div className="flex items-center gap-5 text-xs font-semibold" style={{ color: "#9B8B7E" }}>
            <Link to="/roadmap" className="hover:text-stone-900 transition-colors">Roadmap</Link>
            <Link to="/counsellor" className="hover:text-stone-900 transition-colors">Counsellor Login</Link>
          </div>
        </div>
      </footer>

    </main>
  );
};

export default Index;

