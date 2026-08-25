import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ChevronDown,
  ChevronUp,
  HelpCircle,
  Map,
  MessageCircle,
} from "lucide-react";
import wabiLogo from "@/lib/wabi_resolutions_logo.jpeg";

const PERSONAL_NOTE =
  "💡 Career choice is completely personal — many factors like your family situation, interests, strengths, and financial background affect your decision. To get personalised guidance tailored to your unique situation, book a 1-on-1 session with our counsellor.";

interface FaqItem {
  question: string;
  answer: string;
  showNote?: boolean;
}

const FAQ_DATA: { category: string; items: FaqItem[] }[] = [
  {
    category: "Career Confusion & Decision-Making",
    items: [
      {
        question: "I don't know what career I want. Where should I start?",
        answer:
          "Start by observing yourself honestly — what subjects or activities make you lose track of time? What are you naturally curious about? You don't need to know the exact job title. Begin with exploring broad career families (science, arts, commerce, government services, skilled trades) and narrow down from there. Talk to people in different fields, try internships, or even just shadow someone for a day.",
        showNote: true,
      },
      {
        question: "I like many things. How do I choose one career?",
        answer:
          "Having multiple interests is actually a strength! The key is to identify which interest can sustain you day after day as a profession — not just as a hobby. Ask yourself: 'Would I still enjoy this if I had to do it 8 hours a day, 5 days a week, even on bad days?' Also consider which interest aligns with your strengths, financial goals, and lifestyle preferences.",
        showNote: true,
      },
      {
        question: "Is it okay if I don't have a career goal in Class 8, 9 or 10?",
        answer:
          "Absolutely! Most successful adults didn't have a fixed goal at 14–16. What matters at this stage is building a strong academic foundation, exploring different activities, and developing self-awareness. Career clarity often comes gradually through experiences, not through pressure. Don't rush — explore widely.",
      },
      {
        question: "How do I know whether a career actually suits me?",
        answer:
          "A career suits you when it aligns with four things: (1) your genuine interests (passion), (2) your natural strengths, (3) the real-world demand and competition, and (4) your family's financial capacity to support the education path. Our Four Circles evaluation helps you check all four dimensions.",
        showNote: true,
      },
      {
        question: "Should I follow my passion or choose a safe career?",
        answer:
          "It's not always either/or. The best career choices combine both — something you enjoy AND something that provides financial stability. Pure passion without a plan can be risky, and a 'safe' job you hate leads to burnout. Look for the intersection: a career that excites you and has real demand in the market.",
        showNote: true,
      },
      {
        question: "What if my interests keep changing?",
        answer:
          "That's completely normal, especially in your teenage years! Your brain is still developing and you're being exposed to new things. Instead of worrying about changing interests, focus on building transferable skills — communication, problem-solving, digital literacy, discipline. These work across ALL careers. Your direction will become clearer with time and experience.",
      },
      {
        question: "Can hobbies like cooking, singing, dancing become careers?",
        answer:
          "Yes! Many people have built successful careers from hobbies. Cooking can lead to becoming a chef, food blogger, restaurant owner, or food technologist. Singing and dancing can lead to performing arts, teaching, content creation, or event management. The key is to understand the professional pathway, required training, competition level, and income reality before committing full-time.",
        showNote: true,
      },
    ],
  },
  {
    category: "Specific Career Questions",
    items: [
      {
        question: "Can I become a pilot if I wear glasses?",
        answer:
          "Yes, you can become a commercial pilot with glasses. DGCA (Directorate General of Civil Aviation) allows corrected vision up to 6/6 with glasses or contact lenses for commercial pilot licenses. However, there are limits on the maximum power allowed. For the Indian Air Force, vision requirements are stricter. Consult an aviation medical examiner to check your specific case.",
        showNote: true,
      },
      {
        question: "IAS or IPS — what is the real difference?",
        answer:
          "Both IAS (Indian Administrative Service) and IPS (Indian Police Service) are prestigious civil services selected through the same UPSC exam. IAS officers handle district administration, policy-making, and governance — they become District Collectors, Secretaries, etc. IPS officers lead law enforcement — they become SP, DIG, IG of Police, etc. The choice depends on whether you're drawn more to governance/development or law/order/security.",
      },
      {
        question: "Is NIFT compulsory to become a fashion designer?",
        answer:
          "No, NIFT is not the only path. While NIFT (National Institute of Fashion Technology) is one of the top institutions, there are many other good colleges like Pearl Academy, INIFD, Symbiosis Institute of Design, and state-level design colleges. Some successful designers are even self-taught or have learned through apprenticeships. What matters most is your portfolio, creativity, and industry connections.",
        showNote: true,
      },
      {
        question: "What if I don't clear NEET?",
        answer:
          "Not clearing NEET doesn't mean the end of a healthcare career. You can explore: (1) Reattempt NEET with better preparation, (2) Allied health sciences like physiotherapy, radiology, optometry (some don't require NEET), (3) Nursing (BSc Nursing), (4) Pharmacy (B.Pharm), (5) Biomedical Engineering, (6) Healthcare management, (7) Research careers through BSc Biology + MSc + PhD route. There are 50+ healthcare careers beyond MBBS.",
        showNote: true,
      },
      {
        question: "I like computers but don't like coding. What careers can I consider?",
        answer:
          "Great news — the tech industry has many non-coding roles! Consider: UI/UX Design, Product Management, Digital Marketing, Business Analysis, Technical Writing, Quality Assurance/Testing, IT Project Management, Data Analysis (using tools, not heavy coding), Cybersecurity (many roles are operations-focused), Cloud Computing Administration, or IT Sales and Consulting. The tech world needs far more than just coders.",
      },
    ],
  },
  {
    category: "Academics & Performance",
    items: [
      {
        question: "I am average in studies. What careers can I choose?",
        answer:
          "Being 'average' in school marks does NOT mean average in life. Many careers value skills over marks: graphic design, photography, content creation, event management, hospitality, skilled trades (electrician, plumber — earning ₹40K–₹1L/month), fitness training, culinary arts, salesmanship, entrepreneurship, and more. Focus on finding what you're naturally good at, not just what's on the exam paper.",
        showNote: true,
      },
      {
        question: "Do Class 10 marks matter after college?",
        answer:
          "For most jobs, Class 10 marks stop mattering once you have a college degree and work experience. However, some government exams and a few companies may check 10th marks as a basic eligibility filter. So it's worth performing well, but don't stress — your career isn't defined by one exam at age 15.",
      },
      {
        question: "Do Class 12 marks matter for jobs?",
        answer:
          "Class 12 marks matter mainly for: (1) college admissions — many require minimum cutoffs, (2) some government job eligibility, and (3) first job screening if you don't have a degree. Once you have a college degree + a few years of experience, employers rarely look at 12th marks. Focus on doing well, but know it's not the end-all.",
      },
      {
        question: "I am weak in Maths. Can I still become an engineer?",
        answer:
          "Engineering requires a reasonable foundation in Maths, but 'weak in Maths' often means the teaching method didn't work for you, not that you can't learn. With the right coaching and practice, many students improve dramatically. That said, if you genuinely dislike Maths, consider branches like Biotechnology, Environmental Engineering, or careers outside engineering that match your strengths better.",
        showNote: true,
      },
      {
        question: "Can an average student crack competitive exams?",
        answer:
          "Absolutely. Competitive exams test consistency, strategy, and smart preparation — not just raw intelligence. Many UPSC, banking, SSC, and state PSC toppers describe themselves as 'average students' who succeeded through disciplined study plans, good coaching, and multiple attempts. Start early, study smart, and don't let labels hold you back.",
      },
      {
        question: "Does scoring 90% guarantee a good career?",
        answer:
          "No. Marks open doors to good colleges, but a good career depends on skills, networking, communication, practical knowledge, and the right choices at each stage. Many 90%+ scorers end up in careers they dislike because they chose based on marks alone. And many moderate scorers build amazing careers by choosing wisely and developing real-world skills.",
      },
    ],
  },
  {
    category: "Entrance Exams & Coaching",
    items: [
      {
        question: "Can I pursue this career without clearing a famous entrance exam?",
        answer:
          "For many careers, yes. While top institutions require entrance exams (NEET for medical, JEE for IITs), there are alternative colleges, state-level exams, management quota seats, and sometimes direct admission pathways. Additionally, many excellent careers — like law (through CLAT or state CETs), teaching, design, hospitality — have multiple entry points.",
        showNote: true,
      },
      {
        question: "Is JEE compulsory to become an engineer?",
        answer:
          "No! JEE (Main/Advanced) is required only for IITs, NITs, and some central universities. There are 3,000+ engineering colleges in India with state-level entrance exams (EAMCET/AP ECET, KCET, MHT CET, WBJEE, etc.), and some accept 12th marks directly. You can become an excellent engineer without clearing JEE.",
      },
      {
        question: "Do I need coaching?",
        answer:
          "It depends on the exam and your self-study ability. For highly competitive exams like JEE Advanced, NEET, or UPSC, good coaching can provide structure, practice material, and peer motivation. But coaching is NOT mandatory — many toppers have succeeded through self-study using online resources. If coaching is unaffordable, free resources like Khan Academy, YouTube channels, and government e-learning portals are excellent alternatives.",
        showNote: true,
      },
    ],
  },
  {
    category: "Financial Concerns & Affordability",
    items: [
      {
        question: "Can middle-class students study abroad?",
        answer:
          "Yes! Options include: (1) Scholarships — many universities offer merit and need-based aid, (2) Education loans with moratorium periods, (3) Countries with low/no tuition — Germany (public universities are nearly free), Norway, Finland, (4) Funded Master's/PhD programs where the university pays YOU, (5) Work-study programs in the US, Canada, Australia. Research thoroughly and start applications early.",
        showNote: true,
      },
      {
        question:
          "I want to become a doctor, but my family cannot afford private medical college. What are my options?",
        answer:
          "Several options exist: (1) Government medical colleges through NEET — fees are ₹10K–₹50K/year, (2) State quota seats with lower cutoffs, (3) Central government scholarships for SC/ST/OBC/EWS students, (4) Post-matric scholarships from state governments, (5) Education loans from nationalised banks, (6) Alternative medical careers — BDS (dental), BAMS (Ayurveda), BHMS (Homeopathy), BSc Nursing — with lower costs and good employment.",
        showNote: true,
      },
      {
        question: "Can I become an engineer without spending lakhs on college fees?",
        answer:
          "Yes. Government engineering colleges (through state entrance exams) charge ₹30K–₹1.5L/year. IITs and NITs (through JEE) are heavily subsidised. Polytechnic diplomas are even cheaper (₹5K–₹30K/year) and lead to good technical jobs. Many companies care about skills, not college brand. Open-source learning, competitive programming, and personal projects can compensate for not attending expensive private colleges.",
      },
      {
        question: "Which careers allow me to start earning early?",
        answer:
          "If you need to earn quickly: (1) ITI trades (electrician, welder, fitter) — earn in 1–2 years, (2) Diploma courses (polytechnic) — 3 years, (3) Nursing/paramedical — start earning in 3–4 years, (4) Freelancing/content creation — can start alongside studies, (5) Vocational training (beautician, cooking, tailoring) — 6 months to 1 year, (6) Armed Forces (soldier entry after 12th), (7) Banking/SSC after graduation (3 years).",
        showNote: true,
      },
    ],
  },
  {
    category: "Scholarships",
    items: [
      {
        question: "Are scholarships available after Class 10?",
        answer:
          "Yes! Major options: (1) NMMS (National Means-cum-Merit Scholarship) — ₹12,000/year for economically weaker students, (2) State government post-matric scholarships for SC/ST/OBC/BC, (3) KVPY (for science students), (4) Private foundation scholarships (Tata, Reliance, Adani), (5) School-specific merit scholarships. Apply early — most have deadlines between June–October.",
      },
      {
        question: "What scholarships can I get after Class 12?",
        answer:
          "Many options: (1) Central Sector Scholarship — for top 20% of board exam scorers (₹10K–₹20K/year), (2) State post-matric scholarships, (3) INSPIRE Scholarship (for science — ₹80,000/year), (4) Pragati/Saksham (for girls/disabled in technical education), (5) College-specific merit and need-based aid, (6) Sitaram Jindal Foundation, Buddy4Study portal aggregates hundreds of scholarships. Check eligibility and apply to multiple.",
      },
      {
        question: "Are there scholarships for rural students?",
        answer:
          "Yes, specifically targeted ones: (1) Post-matric scholarships from state tribal/BC welfare departments, (2) NMMS for economically disadvantaged families, (3) Vidyalakshmi portal (education loans + scholarships), (4) Sitaram Jindal Foundation scholarships for rural students, (5) NGO scholarships (Pratham, Room to Read, Akanksha), (6) District-level merit awards. Your school or mandal education officer can guide you on local options.",
        showNote: true,
      },
    ],
  },
];

const FaqPage = () => {
  const navigate = useNavigate();
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  const toggle = (key: string) => {
    setOpenIndex((prev) => (prev === key ? null : key));
  };

  return (
    <main
      className="min-h-screen font-sans text-stone-900 flex flex-col"
      style={{ background: "#FAF8F5" }}
    >
      {/* ─── NAVBAR ─────────────────────────────────────────────────────────── */}
      <header
        className="sticky top-0 z-50 border-b border-stone-200/70"
        style={{
          background: "rgba(250,248,245,0.92)",
          backdropFilter: "blur(16px)",
        }}
      >
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

          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-stone-600 hover:text-stone-900 px-3 py-1.5 rounded-xl border border-stone-200 bg-white hover:bg-stone-50 transition-all shadow-2xs shrink-0 cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back</span>
          </button>
        </div>
      </header>

      {/* ─── CONTENT ────────────────────────────────────────────────────────── */}
      <div className="flex-1 py-8 sm:py-12 px-4 sm:px-8">
        <div className="max-w-3xl mx-auto space-y-8">
          {/* Page Header */}
          <div className="text-center space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase"
              style={{ background: "#F0EBE1", color: "#78645A", border: "1px solid #DDD3C5" }}
            >
              <HelpCircle className="w-3.5 h-3.5" style={{ color: "#B5956A" }} />
              Frequently Asked Questions
            </div>
            <h1
              className="font-extrabold leading-tight tracking-tight"
              style={{ fontSize: "clamp(1.5rem, 4vw, 2.4rem)", color: "#1C1917" }}
            >
              Career Questions{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #B5956A 0%, #7C5C3E 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Answered
              </span>
            </h1>
            <p
              className="text-xs sm:text-sm max-w-lg mx-auto leading-relaxed font-medium"
              style={{ color: "#6B5E53" }}
            >
              Common doubts students and parents have about careers, exams,
              scholarships, and more — answered honestly and simply.
            </p>
          </div>

          {/* FAQ Categories */}
          {FAQ_DATA.map((category, catIdx) => (
            <div key={catIdx} className="space-y-3">
              <h2
                className="text-xs font-extrabold uppercase tracking-widest px-1"
                style={{ color: "#B5956A" }}
              >
                {category.category}
              </h2>
              <div className="space-y-2">
                {category.items.map((item, itemIdx) => {
                  const key = `${catIdx}-${itemIdx}`;
                  const isOpen = openIndex === key;
                  return (
                    <div
                      key={key}
                      className="rounded-2xl border transition-all"
                      style={{
                        background: isOpen ? "#F5F1EC" : "#FFFFFF",
                        borderColor: isOpen ? "#D5C9BE" : "#E5DDD2",
                      }}
                    >
                      <button
                        onClick={() => toggle(key)}
                        className="w-full flex items-start gap-3 p-4 sm:p-5 text-left cursor-pointer"
                      >
                        <span
                          className="shrink-0 mt-0.5 w-6 h-6 rounded-lg flex items-center justify-center"
                          style={{ background: isOpen ? "#1C1917" : "#F0EBE1" }}
                        >
                          {isOpen ? (
                            <ChevronUp className="w-3.5 h-3.5 text-[#FAF8F5]" />
                          ) : (
                            <ChevronDown className="w-3.5 h-3.5" style={{ color: "#7C5C3E" }} />
                          )}
                        </span>
                        <span
                          className={`text-sm sm:text-base font-bold leading-snug ${
                            isOpen ? "text-stone-900" : "text-stone-800"
                          }`}
                        >
                          {item.question}
                        </span>
                      </button>
                      {isOpen && (
                        <div className="px-4 sm:px-5 pb-4 sm:pb-5 pl-[3.25rem] space-y-3 animate-in fade-in-0 slide-in-from-top-1 duration-200">
                          <p
                            className="text-xs sm:text-sm leading-relaxed"
                            style={{ color: "#4A3B32" }}
                          >
                            {item.answer}
                          </p>
                          {item.showNote && (
                            <div
                              className="flex items-start gap-2.5 p-3 rounded-xl text-xs leading-relaxed font-medium"
                              style={{
                                background: "#F0EBE1",
                                color: "#6B5E53",
                                border: "1px solid #DDD3C5",
                              }}
                            >
                              <MessageCircle
                                className="w-4 h-4 shrink-0 mt-0.5"
                                style={{ color: "#B5956A" }}
                              />
                              <span>{PERSONAL_NOTE}</span>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}

          {/* Bottom CTA */}
          <div
            className="rounded-2xl p-6 sm:p-8 text-center space-y-3"
            style={{ background: "#F0EBE1", border: "1px solid #E0D6CA" }}
          >
            <h3 className="text-base sm:text-lg font-extrabold text-stone-900">
              Still have questions?
            </h3>
            <p className="text-xs sm:text-sm font-medium" style={{ color: "#6B5E53" }}>
              Every student's situation is unique. Book a free 1-on-1 session with our career
              counsellor for personalised guidance.
            </p>
            <button
              onClick={() => navigate("/roadmap")}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl font-bold text-sm cursor-pointer transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
              style={{ background: "#1C1917", color: "#FAF8F5" }}
            >
              <Map className="w-4 h-4" />
              Explore Career Roadmaps
            </button>
          </div>
        </div>
      </div>

      {/* ─── FOOTER ─────────────────────────────────────────────────────── */}
      <footer style={{ borderTop: "1px solid #E0D6CA", background: "#F0EBE1" }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img
              src={wabiLogo}
              alt="Wabi"
              className="w-7 h-7 rounded-full object-cover opacity-80"
            />
            <span className="text-xs font-semibold" style={{ color: "#7C6C62" }}>
              © {new Date().getFullYear()} Wabi Resolutions &amp; Career Guidance
            </span>
          </div>
          <div
            className="flex items-center gap-5 text-xs font-semibold"
            style={{ color: "#9B8B7E" }}
          >
            <Link to="/roadmap" className="hover:text-stone-900 transition-colors">
              Roadmap
            </Link>
            <Link to="/faq" className="hover:text-stone-900 transition-colors">
              FAQ
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default FaqPage;
