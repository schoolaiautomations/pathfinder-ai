// ─── Roadmap Form ───────────────────────────────────────────────────────────

export type RoadmapFormData = {
  name: string;
  currentClass: string;
  school: string;
  location: string;
  phone: string;
  careerGoal: string;
  councellorName?: string;
};

export const ROADMAP_FORM_KEY = "learning-roadmap-form";
export const ROADMAP_RESULT_KEY = "learning-roadmap-result";

export const DEFAULT_CAREER_OPTIONS = [
  { id: "police", label: "Police", icon: "👮", file: "four-circles-police-officer.html" },
  { id: "doctor", label: "Doctor", icon: "🩺", file: "four-circles-doctor-mbbs.html" },
  { id: "teacher", label: "Teacher", icon: "👩‍🏫", file: "four-circles-teacher.html" },
  { id: "army", label: "Indian Army", icon: "🎖️", file: "four-circles-indian-army-soldier-officer.html" },
  { id: "lawyer", label: "Lawyer", icon: "⚖️", file: "four-circles-lawyer.html" },
  { id: "nurse", label: "Nurse", icon: "💉", file: "four-circles-nurse.html" },
  { id: "agri", label: "Agricultural Officer", icon: "🌾", file: "four-circles-agriculture-officer.html" },
  { id: "bank", label: "Bank PO", icon: "🏦", file: "four-circles-bank-po-probationary-officer.html" },
  { id: "ca", label: "Chartered Accountant", icon: "📊", file: "four-circles-chartered-accountant-ca.html" },
  { id: "designer", label: "Graphic Designer", icon: "🎨", file: "four-circles-graphic-designer.html" },
  { id: "pharmacist", label: "Pharmacist", icon: "💊", file: "four-circles-pharmacist.html" },
  { id: "swe", label: "Software Engineer", icon: "💻", file: "four-circles-software-engineer.html" },
  { id: "mba", label: "Business Management (MBA)", icon: "💼", file: "four-circles-business-management-mba.html" },
  { id: "pilot", label: "Commercial Pilot", icon: "✈️", file: "four-circles-commercial-pilot.html" },
  { id: "fashion", label: "Fashion Designer", icon: "👗", file: "four-circles-fashion-designer.html" },
  { id: "journalist", label: "Journalist", icon: "📰", file: "four-circles-journalist.html" },
  { id: "ias", label: "IAS", icon: "🏛️", file: "four-circles-ias.html" },
  { id: "ips", label: "IPS", icon: "🛡️", file: "four-circles-ips.html" },
  { id: "not-decided", label: "Not Decided Yet", icon: "🧭", file: "four-circles-not-decided-yet.html" },
] as const;

export function findCareerFormatFile(careerGoal: string): string | null {
  if (!careerGoal) return null;
  const normalized = careerGoal.trim().toLowerCase();
  for (const opt of DEFAULT_CAREER_OPTIONS) {
    if (normalized === opt.label.toLowerCase() || normalized.includes(opt.label.toLowerCase())) {
      return opt.file;
    }
  }
  if (normalized === "ias" || normalized.includes("ias") || normalized.includes("civil services") || normalized.includes("administrative service")) return "four-circles-ias.html";
  if (normalized === "ips" || normalized.includes("ips") || normalized.includes("police service")) return "four-circles-ips.html";
  if (normalized.includes("not decided") || normalized.includes("undecided") || normalized.includes("not sure") || normalized.includes("confused") || normalized.includes("dont know") || normalized.includes("don't know")) return "four-circles-not-decided-yet.html";
  if (normalized.includes("doctor") || normalized.includes("mbbs")) return "four-circles-doctor-mbbs.html";
  if (normalized.includes("police")) return "four-circles-police-officer.html";
  if (normalized.includes("teacher")) return "four-circles-teacher.html";
  if (normalized.includes("army") || normalized.includes("soldier")) return "four-circles-indian-army-soldier-officer.html";
  if (normalized.includes("lawyer") || normalized.includes("advocate")) return "four-circles-lawyer.html";
  if (normalized.includes("nurse")) return "four-circles-nurse.html";
  if (normalized.includes("agriculture") || normalized.includes("agricultural")) return "four-circles-agriculture-officer.html";
  if (normalized.includes("bank") || normalized.includes("po")) return "four-circles-bank-po-probationary-officer.html";
  if (normalized.includes("chartered") || normalized.includes("ca")) return "four-circles-chartered-accountant-ca.html";
  if (normalized.includes("graphic")) return "four-circles-graphic-designer.html";
  if (normalized.includes("fashion")) return "four-circles-fashion-designer.html";
  if (normalized.includes("pilot") || normalized.includes("aviation")) return "four-circles-commercial-pilot.html";
  if (normalized.includes("mba") || normalized.includes("business management") || normalized.includes("bba")) return "four-circles-business-management-mba.html";
  if (normalized.includes("journalist") || normalized.includes("journalism") || normalized.includes("news reporter")) return "four-circles-journalist.html";
  if (normalized.includes("pharmacist") || normalized.includes("pharmacy")) return "four-circles-pharmacist.html";
  if (normalized.includes("software") || normalized.includes("developer") || normalized.includes("programmer") || normalized.includes("coder")) return "four-circles-software-engineer.html";
  return null;
}

// ─── Academic Pathway ────────────────────────────────────────────────────────

export type ExamInfo = {
  name: string;
  description: string;
  when: string;
  forCourses: string[]; // which degrees/courses this exam gives admission to
};

export type CourseInfo = {
  name: string;
  type: string; // "Intermediate", "Degree", "Diploma", "Certification"
  duration: string;
  subjects: string[];
  description: string;
};

export type AcademicPathway = {
  intermediateOptions: CourseInfo[];
  degreeOptions: CourseInfo[];
  keyExams: ExamInfo[];
};

// ─── Learning Roadmap (AI Response) ─────────────────────────────────────────

export type LearningPhase = {
  title: string;
  description: string;
  skills: string[];
  resources: string[];
  actions: string[];
  milestone: string;
  duration: string;
};

export type SimilarProfession = {
  title: string;
  reason: string;
  overlap: string;
};

export type FutureOutlook = {
  demandTrend: string;        // "High Growth", "Stable", "Declining"
  aiImpact: string;           // Paragraph about AI impact
  emergingOpportunities: string[];
  salaryRange: string;        // e.g. "₹4–8 LPA entry, ₹15–35 LPA senior"
  topRecruiters: string[];
  jobSecurity: string;        // Short honest assessment
};

export type HobbyRecommendation = {
  hobby: string;
  reason: string;
};

export type ScholarshipInfo = {
  name: string;
  provider: string;
  eligibility: string;
  benefits: string;
  examOrSelection: string;
  whenToApply: string;
};

export type LearningRoadmap = {
  careerGoal: string;
  summary: string;
  academicPathway: AcademicPathway;
  phases: LearningPhase[];
  hobbies: HobbyRecommendation[];
  scholarships: ScholarshipInfo[];
  similarProfessions: SimilarProfession[];
  futureOutlook: FutureOutlook;
};

// ─── Skill Lesson (AI Response) ─────────────────────────────────────────────

export type SkillTopic = {
  title: string;
  explanation: string;
  example: string;
};

export type SkillResource = {
  name: string;
  type: string;
  url?: string;
};

export type SkillLesson = {
  skillName: string;
  overview: string;
  topics: SkillTopic[];
  practiceExercises: string[];
  resources: SkillResource[];
  nextSteps: string[];
};

// ─── Reusable option lists ──────────────────────────────────────────────────

export const roadmapEducationLevels = [
  "Class 6",
  "Class 7",
  "Class 8",
  "Class 9",
  "Class 10",
  "Class 11",
  "Class 12",
  "Diploma",
  "Undergraduate (1st year)",
  "Undergraduate (2nd year)",
  "Undergraduate (3rd year)",
  "Undergraduate (4th year)",
  "Graduate",
  "Working Professional",
];
