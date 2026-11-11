import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Play,
  CheckCircle2,
  Lock,
  Award,
  Building2,
  Calendar,
  Download,
  RotateCcw,
} from "lucide-react";

// ─── 20 CLINICAL CHECKPOINT QUIZ QUESTIONS (DAY 4) ───────────────────────────
export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
}

export const DOCTOR_QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: "A patient arrives at the Emergency Room with sudden chest pain and cold sweats. What is the first diagnostic test ordered?",
    options: ["Complete Blood Count (CBC)", "12-Lead ECG", "Abdominal Ultrasound", "Brain MRI Scan"],
    correctIndex: 1,
  },
  {
    id: 2,
    question: "In hospital emergency triage, which color tag represents an immediate life-threatening condition requiring instant care?",
    options: ["Green Tag", "Yellow Tag", "Red Tag", "Black Tag"],
    correctIndex: 2,
  },
  {
    id: 3,
    question: "What does an SpO2 reading from a pulse oximeter indicate?",
    options: ["Fasting blood sugar", "Blood oxygen saturation percentage", "White blood cell count", "Arterial pressure"],
    correctIndex: 1,
  },
  {
    id: 4,
    question: "What is the mandatory protocol for surgical scrubbing before entering an Operation Theatre (OT)?",
    options: ["10-second water rinse", "3 to 5 minutes antiseptic scrub up to elbows", "Quick alcohol spray", "Washing only after surgery"],
    correctIndex: 1,
  },
  {
    id: 5,
    question: "Why are pediatric medication doses calculated by body weight (mg/kg) instead of giving adult tablets?",
    options: [
      "Children metabolize and clear drugs differently based on weight",
      "Adult tablets are too bitter",
      "Child doses are experimental",
      "Pediatric measuring units differ from adult units",
    ],
    correctIndex: 0,
  },
  {
    id: 6,
    question: "What is the normal resting heart rate range for a healthy adolescent or adult?",
    options: ["30 to 45 bpm", "60 to 100 bpm", "115 to 145 bpm", "150 to 180 bpm"],
    correctIndex: 1,
  },
  {
    id: 7,
    question: "What constitutes legally and ethically valid 'Informed Consent' before surgery?",
    options: [
      "Signing a blank admission sheet",
      "Clear explanation of procedure, risks, alternatives, and voluntary agreement",
      "Verbal approval by a neighbor over phone",
      "Informing family after the operation",
    ],
    correctIndex: 1,
  },
  {
    id: 8,
    question: "An elevated White Blood Cell (WBC) count in a patient's blood report most commonly indicates:",
    options: ["Dehydration", "Active bacterial infection or inflammation", "Vitamin C deficiency", "High dietary calcium"],
    correctIndex: 1,
  },
  {
    id: 9,
    question: "Under the Medical Code of Ethics, what is the core rule of Patient Confidentiality?",
    options: [
      "Photos can be shared on social media if hospital is hidden",
      "Medical records cannot be disclosed to unauthorized parties without consent",
      "Doctors must inform neighbors about patient conditions",
      "Confidentiality only applies to celebrities",
    ],
    correctIndex: 1,
  },
  {
    id: 10,
    question: "During adult CPR for an unresponsive patient with no pulse, what is the standard compression-to-breath ratio?",
    options: ["10 compressions : 5 breaths", "30 compressions : 2 rescue breaths", "50 compressions : 1 breath", "Rescue breaths only"],
    correctIndex: 1,
  },
  {
    id: 11,
    question: "Which medical instrument is used to inspect the ear canal and eardrum (tympanic membrane)?",
    options: ["Ophthalmoscope", "Otoscope", "Sphygmomanometer", "Reflex Hammer"],
    correctIndex: 1,
  },
  {
    id: 12,
    question: "A diabetic patient feels shaky, sweaty, and confused after skipping lunch. What is the suspected condition?",
    options: ["Hypoglycemia (low blood sugar)", "High blood pressure spike", "Appendicitis", "Migraine"],
    correctIndex: 0,
  },
  {
    id: 13,
    question: "What does 'NPO' (Nil Per Os) on a surgical patient's chart mean?",
    options: [
      "Drink 2 liters of water",
      "Nothing by mouth (fasting to prevent aspiration under anesthesia)",
      "No IV fluids allowed",
      "Patient can go home",
    ],
    correctIndex: 1,
  },
  {
    id: 14,
    question: "High-pitched musical whistling sounds (wheezing) heard during lung expiration typically indicate:",
    options: ["Narrowed bronchial airways (e.g. asthma)", "Rib fracture", "Normal deep breathing", "Stomach gas"],
    correctIndex: 0,
  },
  {
    id: 15,
    question: "What is the purpose of the SBAR format used during doctor shift handovers?",
    options: [
      "Hospital billing calculations",
      "Structured handoff: Situation, Background, Assessment, Recommendation",
      "Ordering surgical tools",
      "Selecting night shift doctors",
    ],
    correctIndex: 1,
  },
  {
    id: 16,
    question: "What is the standard structure of the undergraduate MBBS degree in India?",
    options: [
      "3 academic years without internship",
      "4.5 academic years + 1 year compulsory rotatory internship (5.5 yrs total)",
      "2 years classroom + 4 years clinic",
      "6 academic years + 2 years rural service",
    ],
    correctIndex: 1,
  },
  {
    id: 17,
    question: "Which organ filters metabolic wastes from blood to form urine and maintain fluid balance?",
    options: ["Liver", "Kidneys", "Spleen", "Gallbladder"],
    correctIndex: 1,
  },
  {
    id: 18,
    question: "When breaking serious medical news to a family, what is the doctor's most vital approach?",
    options: [
      "Handing the report and leaving quickly",
      "Private setting with empathy, clear non-jargon language, and listening",
      "Announcing it on the hospital bulletin board",
      "Letting the billing desk explain the condition",
    ],
    correctIndex: 1,
  },
  {
    id: 19,
    question: "Why should antibiotics not be prescribed for common viral colds or flu?",
    options: [
      "Antibiotics kill bacteria, not viruses; misuse breeds resistant superbugs",
      "Antibiotics are too expensive",
      "Antibiotics harm lung capacity",
      "Common colds turn into bacteria",
    ],
    correctIndex: 0,
  },
  {
    id: 20,
    question: "A blood pressure reading of 195/125 mmHg with severe headache and blurred vision is considered a:",
    options: ["Low pressure dip", "Hypertensive Emergency requiring urgent controlled medical care", "Dehydration effect", "Normal athletic variation"],
    correctIndex: 1,
  },
];

const DAYS_META = [
  { day: 1, label: "Day 1", title: "OPD & Triage", type: "video" },
  { day: 2, label: "Day 2", title: "Pediatric Ward", type: "video" },
  { day: 3, label: "Day 3", title: "ICU & Emergencies", type: "video" },
  { day: 4, label: "Day 4", title: "20Q Quiz", type: "quiz" },
  { day: 5, label: "Day 5", title: "Hospital Visit", type: "visit" },
  { day: 6, label: "Day 6", title: "Reflection", type: "reflection" },
  { day: 7, label: "Day 7", title: "Certificate", type: "certificate" },
];

export const DoctorInternshipExperiencePage: React.FC = () => {
  // Completed days list
  const [completedDays, setCompletedDays] = useState<number[]>(() => {
    try {
      const saved = localStorage.getItem("wabi_doc_completed");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [activeDay, setActiveDay] = useState<number>(1);
  const [videoProgress, setVideoProgress] = useState<number>(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState<boolean>(false);

  // Day 4 Quiz states (step-by-step single question view to eliminate text overload)
  const [quizIndex, setQuizIndex] = useState<number>(0);
  const [quizAnswers, setQuizAnswers] = useState<{ [qId: number]: number }>({});
  const [quizFinished, setQuizFinished] = useState<boolean>(false);
  const [quizScore, setQuizScore] = useState<number>(0);

  // Day 6 Reflection state
  const [reflectionChoice, setReflectionChoice] = useState<string>("");
  const [reflectionNotes, setReflectionNotes] = useState<string>("");

  // Student name
  const [studentName, setStudentName] = useState<string>(() => {
    return localStorage.getItem("wabi_student_name") || "Rahul Sharma";
  });

  useEffect(() => {
    localStorage.setItem("wabi_doc_completed", JSON.stringify(completedDays));
  }, [completedDays]);

  const isUnlocked = (d: number) => {
    if (d === 1) return true;
    return completedDays.includes(d - 1);
  };

  const isCompleted = (d: number) => completedDays.includes(d);

  const completeCurrentDay = (d: number) => {
    if (!completedDays.includes(d)) {
      setCompletedDays((prev) => [...prev, d]);
    }
    if (d < 7) {
      setActiveDay(d + 1);
    }
  };

  // Video quick simulator
  const handleWatchVideo = () => {
    setIsVideoPlaying(true);
    let p = 0;
    const interval = setInterval(() => {
      p += 25;
      if (p >= 100) {
        p = 100;
        clearInterval(interval);
        setVideoProgress(100);
        setIsVideoPlaying(false);
        completeCurrentDay(activeDay);
      } else {
        setVideoProgress(p);
      }
    }, 300);
  };

  // Submit Quiz
  const handleSubmitQuiz = () => {
    let score = 0;
    DOCTOR_QUIZ_QUESTIONS.forEach((q) => {
      if (quizAnswers[q.id] === q.correctIndex) {
        score += 1;
      }
    });
    setQuizScore(score);
    setQuizFinished(true);
    if (score >= 14) {
      if (!completedDays.includes(4)) {
        setCompletedDays((prev) => [...prev, 4]);
      }
    }
  };

  const handleReset = () => {
    if (window.confirm("Reset all progress back to Day 1?")) {
      setCompletedDays([]);
      setActiveDay(1);
      setQuizAnswers({});
      setQuizFinished(false);
      setQuizIndex(0);
      setVideoProgress(0);
      localStorage.removeItem("wabi_doc_completed");
    }
  };

  const activeMeta = DAYS_META.find((m) => m.day === activeDay) || DAYS_META[0];

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-stone-900 font-sans flex flex-col selection:bg-emerald-100">
      {/* ─── SLEEK MINIMAL TOP BAR ─────────────────────────────────────── */}
      <header className="sticky top-0 z-30 bg-[#FAF8F5]/90 backdrop-blur-md border-b border-stone-200 px-4 sm:px-8 py-3">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link
              to="/student-internships"
              className="w-8 h-8 rounded-full border border-stone-200 flex items-center justify-center text-stone-500 hover:text-stone-900 hover:bg-stone-100 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
            </Link>
            <div>
              <h1 className="text-sm sm:text-base font-black text-stone-900 tracking-tight">
                Doctor Immersion
              </h1>
              <span className="text-[11px] text-stone-500 font-semibold">
                {completedDays.length} of 7 Completed
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleReset}
              className="text-[11px] font-bold text-stone-500 hover:text-stone-900 px-2.5 py-1 rounded-lg border border-stone-200 hover:bg-stone-100 transition-colors"
              title="Reset progress"
            >
              Reset
            </button>
            <Link
              to="/student-internships"
              className="text-xs font-bold px-3 py-1.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-white transition-colors"
            >
              Exit
            </Link>
          </div>
        </div>
      </header>

      {/* ─── CLEAN COMPACT 7-DAY TABS (NO CLUTTER) ────────────────────── */}
      <div className="bg-white border-b border-stone-200/80 py-2.5 px-4 sticky top-[57px] z-20 overflow-x-auto scrollbar-none">
        <div className="max-w-3xl mx-auto flex items-center justify-between gap-1.5 sm:gap-2">
          {DAYS_META.map((item) => {
            const unlocked = isUnlocked(item.day);
            const done = isCompleted(item.day);
            const active = activeDay === item.day;

            return (
              <button
                key={item.day}
                type="button"
                disabled={!unlocked}
                onClick={() => {
                  setActiveDay(item.day);
                  setVideoProgress(0);
                }}
                className={`flex-1 py-1.5 px-2 rounded-xl text-center transition-all cursor-pointer flex items-center justify-center gap-1.5 whitespace-nowrap text-xs ${
                  active
                    ? "bg-emerald-700 text-white font-bold shadow-2xs"
                    : done
                    ? "bg-emerald-50 text-emerald-800 border border-emerald-200 font-bold hover:bg-emerald-100"
                    : unlocked
                    ? "bg-stone-100 text-stone-700 font-semibold hover:bg-stone-200"
                    : "bg-stone-100/50 text-stone-400 opacity-40 cursor-not-allowed"
                }`}
              >
                <span>{item.label}</span>
                {done ? (
                  <CheckCircle2 className={`w-3.5 h-3.5 ${active ? "text-white" : "text-emerald-600"}`} />
                ) : !unlocked ? (
                  <Lock className="w-3 h-3 text-stone-400" />
                ) : null}
              </button>
            );
          })}
        </div>
      </div>

      {/* ─── FOCUSED CLEAN WORKSPACE ───────────────────────────────────── */}
      <main className="max-w-3xl mx-auto px-4 py-8 flex-1 w-full flex flex-col justify-center">
        {/* ════════════════════════════════════════════════════════════════
            DAYS 1, 2, 3: MINIMAL VIDEO PLAYER
           ════════════════════════════════════════════════════════════════ */}
        {(activeDay === 1 || activeDay === 2 || activeDay === 3) && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-[11px] font-bold text-emerald-700 uppercase tracking-wider">
                  Day {activeDay} Video Walkthrough
                </span>
                <h2 className="text-lg sm:text-xl font-black text-stone-900">
                  {activeMeta.title}
                </h2>
              </div>
              {isCompleted(activeDay) && (
                <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Completed
                </span>
              )}
            </div>

            {/* Video Player Box */}
            {activeDay === 1 ? (
              <div className="relative rounded-2xl overflow-hidden bg-black aspect-video shadow-md border border-stone-200">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/x95X_umdOc8?rel=0&modestbranding=1"
                  title="Day 1: A Day in the Life of a Doctor"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ) : (
              <div className="relative rounded-2xl overflow-hidden bg-stone-950 aspect-video shadow-md flex flex-col justify-between p-4 sm:p-5 text-white">
                <img
                  src={
                    activeDay === 2
                      ? "/simulation_pics/nurse/Medicine Time in the Hospital Ward.jpg"
                      : "/simulation_pics/doctor/Caring Pediatric Checkup.jpg"
                  }
                  alt={activeMeta.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-40"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-stone-950/50" />

                <div className="relative z-10 flex items-center justify-between text-xs">
                  <span className="font-semibold text-stone-300">Animated Simulation</span>
                  <span className="text-[10px] bg-stone-900/80 px-2 py-0.5 rounded text-stone-300">
                    {videoProgress > 0 ? `${videoProgress}%` : "15 mins"}
                  </span>
                </div>

                {/* Play Button */}
                <div className="relative z-10 flex flex-col items-center justify-center my-auto">
                  <button
                    type="button"
                    onClick={handleWatchVideo}
                    className="w-16 h-16 rounded-full bg-rose-600 hover:bg-rose-500 text-white flex items-center justify-center shadow-lg hover:scale-105 transition-all cursor-pointer"
                  >
                    <Play className="w-8 h-8 fill-white translate-x-0.5" />
                  </button>
                </div>

                {/* Bottom Scrubber */}
                <div className="relative z-10 space-y-1.5">
                  <div className="w-full bg-white/20 h-1.5 rounded-full overflow-hidden">
                    <div
                      className="bg-rose-500 h-full transition-all duration-300 rounded-full"
                      style={{ width: `${videoProgress}%` }}
                    />
                  </div>
                  <div className="flex items-center justify-between text-[10px] text-stone-400">
                    <span>{isVideoPlaying ? "Watching..." : videoProgress === 100 ? "Finished" : "Click Play to begin"}</span>
                    <button
                      type="button"
                      onClick={handleWatchVideo}
                      className="text-stone-300 hover:text-white font-bold cursor-pointer"
                    >
                      Quick Complete →
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Next Action */}
            <div className="pt-2 flex justify-end">
              <button
                type="button"
                onClick={() => completeCurrentDay(activeDay)}
                className="px-6 py-2.5 rounded-xl text-xs font-black text-white bg-emerald-700 hover:bg-emerald-600 transition-colors shadow-xs cursor-pointer flex items-center gap-1.5"
              >
                <span>Complete Day {activeDay} & Next</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* ════════════════════════════════════════════════════════════════
            DAY 4: CLEAN 1-BY-1 QUIZ (NO WALL OF TEXT)
           ════════════════════════════════════════════════════════════════ */}
        {activeDay === 4 && (
          <div className="space-y-4">
            {!quizFinished ? (
              <div className="bg-white rounded-3xl border border-stone-200/90 p-6 sm:p-8 shadow-sm space-y-6">
                {/* Header & Step progress */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs font-bold">
                    <span className="text-emerald-700 uppercase tracking-wider text-[11px]">
                      Question {quizIndex + 1} of 20
                    </span>
                    <span className="text-stone-400 font-medium">
                      Pass: 70% (14 correct)
                    </span>
                  </div>
                  <div className="w-full h-1.5 bg-stone-100 rounded-full overflow-hidden">
                    <div
                      className="bg-emerald-600 h-full rounded-full transition-all duration-300"
                      style={{ width: `${((quizIndex + 1) / 20) * 100}%` }}
                    />
                  </div>
                </div>

                {/* Single Question */}
                <h3 className="text-base sm:text-lg font-black text-stone-900 leading-snug">
                  {DOCTOR_QUIZ_QUESTIONS[quizIndex].question}
                </h3>

                {/* 4 Clean Options */}
                <div className="space-y-2">
                  {DOCTOR_QUIZ_QUESTIONS[quizIndex].options.map((opt, optIdx) => {
                    const currentQ = DOCTOR_QUIZ_QUESTIONS[quizIndex];
                    const selected = quizAnswers[currentQ.id] === optIdx;

                    return (
                      <button
                        key={optIdx}
                        type="button"
                        onClick={() =>
                          setQuizAnswers((prev) => ({
                            ...prev,
                            [currentQ.id]: optIdx,
                          }))
                        }
                        className={`w-full p-3.5 rounded-2xl border text-left text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center justify-between ${
                          selected
                            ? "bg-emerald-50 border-emerald-500 text-emerald-950 ring-1 ring-emerald-500"
                            : "bg-white border-stone-200 text-stone-700 hover:bg-stone-50"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <span
                            className={`w-5 h-5 rounded-full border text-[10px] font-black flex items-center justify-center shrink-0 ${
                              selected
                                ? "bg-emerald-600 border-emerald-600 text-white"
                                : "border-stone-300 text-stone-500"
                            }`}
                          >
                            {String.fromCharCode(65 + optIdx)}
                          </span>
                          <span>{opt}</span>
                        </div>
                        {selected && <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />}
                      </button>
                    );
                  })}
                </div>

                {/* Controls */}
                <div className="pt-2 flex items-center justify-between">
                  <button
                    type="button"
                    disabled={quizIndex === 0}
                    onClick={() => setQuizIndex((i) => Math.max(0, i - 1))}
                    className="px-4 py-2 rounded-xl text-xs font-bold text-stone-500 hover:text-stone-900 disabled:opacity-30 cursor-pointer"
                  >
                    ← Back
                  </button>

                  {quizIndex < 19 ? (
                    <button
                      type="button"
                      onClick={() => setQuizIndex((i) => i + 1)}
                      className="px-5 py-2.5 rounded-xl text-xs font-black text-white bg-emerald-700 hover:bg-emerald-600 transition-colors shadow-xs cursor-pointer flex items-center gap-1.5"
                    >
                      <span>Next</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  ) : (
                    <button
                      type="button"
                      disabled={Object.keys(quizAnswers).length < 20}
                      onClick={handleSubmitQuiz}
                      className="px-6 py-2.5 rounded-xl text-xs font-black text-white bg-emerald-700 hover:bg-emerald-600 disabled:bg-stone-300 transition-colors shadow-xs cursor-pointer"
                    >
                      Submit Quiz
                    </button>
                  )}
                </div>
              </div>
            ) : (
              /* Minimal Score Card */
              <div className="bg-white rounded-3xl border border-stone-200/90 p-8 shadow-sm text-center space-y-4 max-w-sm mx-auto">
                <div
                  className={`w-14 h-14 rounded-full mx-auto flex items-center justify-center text-xl font-black ${
                    quizScore >= 14 ? "bg-emerald-100 text-emerald-800" : "bg-rose-100 text-rose-800"
                  }`}
                >
                  {quizScore >= 14 ? "✓" : "!"}
                </div>

                <div>
                  <h3 className="text-lg font-black text-stone-900">
                    {quizScore >= 14 ? "Quiz Passed!" : "Try Again"}
                  </h3>
                  <div className="text-2xl font-black text-stone-900 mt-1">
                    {quizScore} / 20{" "}
                    <span className="text-xs font-bold text-stone-500">
                      ({Math.round((quizScore / 20) * 100)}%)
                    </span>
                  </div>
                  <p className="text-xs text-stone-500 mt-1">
                    {quizScore >= 14
                      ? "Day 5 Live Field Visit is now unlocked!"
                      : "Minimum 14 correct (70%) required to pass."}
                  </p>
                </div>

                <div className="pt-2">
                  {quizScore < 14 ? (
                    <button
                      type="button"
                      onClick={() => {
                        setQuizFinished(false);
                        setQuizIndex(0);
                        setQuizAnswers({});
                      }}
                      className="px-5 py-2.5 rounded-xl text-xs font-bold text-stone-700 bg-stone-100 hover:bg-stone-200 cursor-pointer flex items-center justify-center gap-1.5 mx-auto"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>Retry</span>
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={() => {
                        completeCurrentDay(4);
                        setActiveDay(5);
                      }}
                      className="px-6 py-2.5 rounded-xl text-xs font-black text-white bg-emerald-700 hover:bg-emerald-600 cursor-pointer flex items-center justify-center gap-1.5 mx-auto"
                    >
                      <span>Unlock Day 5</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>
        )}

        {/* ════════════════════════════════════════════════════════════════
            DAY 5: CLEAN ON-SITE PASS
           ════════════════════════════════════════════════════════════════ */}
        {activeDay === 5 && (
          <div className="max-w-md mx-auto space-y-4">
            <div className="bg-stone-900 text-white rounded-3xl p-6 shadow-xl space-y-5">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="text-[10px] font-black uppercase tracking-wider text-emerald-400">
                  Hospital Pass
                </span>
                <span className="text-xs font-mono text-stone-400">#DOC-88</span>
              </div>

              <div className="space-y-2.5 text-xs text-stone-300">
                <div className="flex items-center gap-2.5">
                  <Building2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Apollo / Care Multi-Speciality Hospital</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Calendar className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Saturday Morning • 9:30 AM Cohort</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Award className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>30-Min Q&A with Dr. K. Srinivas Rao, MD</span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => completeCurrentDay(5)}
                className="w-full py-3 rounded-2xl text-xs font-black text-emerald-950 bg-emerald-400 hover:bg-emerald-300 transition-colors cursor-pointer text-center"
              >
                Confirm Attendance & Unlock Day 6 →
              </button>
            </div>
          </div>
        )}

        {/* ════════════════════════════════════════════════════════════════
            DAY 6: CLEAN REFLECTION
           ════════════════════════════════════════════════════════════════ */}
        {activeDay === 6 && (
          <div className="bg-white rounded-3xl border border-stone-200/90 p-6 sm:p-8 shadow-sm space-y-5 max-w-md mx-auto">
            <div>
              <span className="text-[11px] font-bold text-emerald-700 uppercase tracking-wider">
                Day 6 • Self-Assessment
              </span>
              <h3 className="text-base font-black text-stone-900 mt-1">
                How do you feel about the medical routine?
              </h3>
            </div>

            <div className="grid grid-cols-2 gap-2 text-xs">
              {["Very Inspired", "Diagnostics Excites Me", "Long Shifts Worry Me", "Comparing Options"].map(
                (opt, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setReflectionChoice(opt)}
                    className={`p-3 rounded-xl border text-center font-bold transition-all cursor-pointer ${
                      reflectionChoice === opt
                        ? "bg-emerald-50 border-emerald-500 text-emerald-950"
                        : "bg-stone-50 border-stone-200 text-stone-600 hover:bg-stone-100"
                    }`}
                  >
                    {opt}
                  </button>
                )
              )}
            </div>

            <textarea
              rows={2}
              value={reflectionNotes}
              onChange={(e) => setReflectionNotes(e.target.value)}
              placeholder="Brief reflection notes (optional)..."
              className="w-full p-3 rounded-xl border border-stone-300 text-xs text-stone-900 focus:outline-none focus:ring-1 focus:ring-emerald-500"
            />

            <button
              type="button"
              onClick={() => completeCurrentDay(6)}
              className="w-full py-2.5 rounded-xl text-xs font-black text-white bg-emerald-700 hover:bg-emerald-600 transition-colors cursor-pointer text-center"
            >
              Submit & Unlock Day 7 Certificate →
            </button>
          </div>
        )}

        {/* ════════════════════════════════════════════════════════════════
            DAY 7: CLEAN CERTIFICATE
           ════════════════════════════════════════════════════════════════ */}
        {activeDay === 7 && (
          <div className="space-y-4 max-w-lg mx-auto text-center">
            <div className="bg-white rounded-3xl border-2 border-emerald-700 p-8 shadow-lg space-y-4">
              <Award className="w-10 h-10 text-emerald-700 mx-auto" />
              <div>
                <span className="text-[10px] font-black uppercase tracking-widest text-emerald-800">
                  Wabi Credential
                </span>
                <h3 className="text-xl font-black text-stone-900 font-serif">
                  Certificate of Career Immersion
                </h3>
              </div>

              <input
                type="text"
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
                className="text-lg font-black text-stone-900 text-center w-full border-b border-stone-300 pb-1 focus:outline-none"
              />

              <p className="text-xs text-stone-600 leading-relaxed">
                Successfully completed the <strong>7-Day Medical Immersion (MBBS)</strong>, including daily triage scenarios, clinical quiz, and hospital field visit.
              </p>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => window.print()}
                  className="px-5 py-2.5 rounded-xl text-xs font-bold text-emerald-950 bg-emerald-100 hover:bg-emerald-200 transition-colors cursor-pointer inline-flex items-center gap-1.5"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Certificate</span>
                </button>
              </div>
            </div>

            <Link
              to="/student-internships"
              className="inline-block text-xs font-bold text-stone-500 hover:text-stone-900 underline"
            >
              ← Back to Internships
            </Link>
          </div>
        )}
      </main>
    </div>
  );
};

export default DoctorInternshipExperiencePage;
