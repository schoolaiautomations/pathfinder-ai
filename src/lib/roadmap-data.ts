// ─── Roadmap Form ───────────────────────────────────────────────────────────

export type RoadmapFormData = {
  name: string;
  currentClass: string;
  section?: string;
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
  { id: "engineer", label: "Engineer", icon: "⚙️", file: "four-circles-engineer.html" },
  { id: "architect", label: "Architect", icon: "🏛️", file: "four-circles-architect.html" },
  { id: "navy-airforce", label: "Indian Navy & Air Force", icon: "⚓", file: "four-circles-indian-navy-air-force.html" },
  { id: "hotel-management", label: "Hotel Management", icon: "🏨", file: "four-circles-hotel-management.html" },
  { id: "sports", label: "Sports / Professional Athlete", icon: "🏆", file: "four-circles-sports-professional-athlete.html" },
  { id: "govt-jobs", label: "Government Jobs", icon: "📋", file: "four-circles-government-jobs.html" },
  { id: "scientist", label: "Scientist / Researcher", icon: "🔬", file: "four-circles-scientist.html" },
  { id: "entrepreneur", label: "Entrepreneur / Business Owner", icon: "🚀", file: "four-circles-entrepreneur-business-owner.html" },
  { id: "interior-designer", label: "Interior Designer", icon: "🛋️", file: "four-circles-interior-designer.html" },
  { id: "mba", label: "Business Management (MBA)", icon: "💼", file: "four-circles-business-management-mba.html" },
  { id: "pilot", label: "Commercial Pilot", icon: "✈️", file: "four-circles-commercial-pilot.html" },
  { id: "fashion", label: "Fashion Designer", icon: "👗", file: "four-circles-fashion-designer.html" },
  { id: "journalist", label: "Journalist", icon: "📰", file: "four-circles-journalist.html" },
  { id: "ias", label: "IAS", icon: "🏛️", file: "four-circles-ias.html" },
  { id: "ips", label: "IPS", icon: "🛡️", file: "four-circles-ips.html" },
  { id: "not-decided", label: "Not Decided Yet", icon: "🧭", file: "four-circles-not-decided-yet.html" },
  { id: "other", label: "Other", icon: "✨", file: "four-circles-not-decided-yet.html" },
] as const;

export function findCareerFormatFile(careerGoal: string): string | null {
  if (!careerGoal) return null;
  const normalized = careerGoal.trim().toLowerCase();

  // 1. Exact match first
  for (const opt of DEFAULT_CAREER_OPTIONS) {
    if (normalized === opt.label.toLowerCase()) {
      return opt.file;
    }
  }

  // 2. Specific keywords
  if (normalized === "other" || normalized.includes("other")) return "four-circles-not-decided-yet.html";
  if (normalized === "ias" || normalized.includes("ias") || normalized.includes("civil services") || normalized.includes("administrative service")) return "four-circles-ias.html";
  if (normalized === "ips" || normalized.includes("ips") || normalized.includes("police service")) return "four-circles-ips.html";
  if (normalized.includes("not decided") || normalized.includes("undecided") || normalized.includes("not sure") || normalized.includes("confused") || normalized.includes("dont know") || normalized.includes("don't know")) return "four-circles-not-decided-yet.html";
  if (normalized.includes("doctor") || normalized.includes("mbbs")) return "four-circles-doctor-mbbs.html";
  if (normalized.includes("police")) return "four-circles-police-officer.html";
  if (normalized.includes("teacher")) return "four-circles-teacher.html";
  if (normalized.includes("navy") || normalized.includes("air force") || normalized.includes("airforce") || normalized.includes("naval") || normalized.includes("afcat") || normalized.includes("agniveer") || normalized.includes("sailor") || normalized.includes("airman")) return "four-circles-indian-navy-air-force.html";
  if (normalized.includes("army") || normalized.includes("soldier")) return "four-circles-indian-army-soldier-officer.html";
  if (normalized.includes("lawyer") || normalized.includes("advocate")) return "four-circles-lawyer.html";
  if (normalized.includes("nurse")) return "four-circles-nurse.html";
  if (normalized.includes("agriculture") || normalized.includes("agricultural")) return "four-circles-agriculture-officer.html";
  if (normalized.includes("bank") || normalized.includes("po")) return "four-circles-bank-po-probationary-officer.html";
  if (normalized.includes("chartered") || normalized.includes("ca")) return "four-circles-chartered-accountant-ca.html";
  if (normalized.includes("architect") || normalized.includes("architecture") || normalized.includes("b.arch") || normalized.includes("barch") || normalized.includes("nata")) return "four-circles-architect.html";
  if (normalized.includes("hotel") || normalized.includes("hospitality") || normalized.includes("nchm") || normalized.includes("culinary") || normalized.includes("catering") || normalized.includes("chef")) return "four-circles-hotel-management.html";
  if (normalized.includes("sport") || normalized.includes("athlete") || normalized.includes("athletics") || normalized.includes("cricket") || normalized.includes("football") || normalized.includes("badminton") || normalized.includes("khelo india") || normalized.includes("sportsman") || normalized.includes("sportswoman")) return "four-circles-sports-professional-athlete.html";
  if (normalized.includes("interior") || normalized.includes("furniture design") || normalized.includes("home decor") || normalized.includes("spatial design")) return "four-circles-interior-designer.html";
  if (normalized.includes("graphic")) return "four-circles-graphic-designer.html";
  if (normalized.includes("fashion")) return "four-circles-fashion-designer.html";
  if (normalized.includes("pilot") || normalized.includes("aviation")) return "four-circles-commercial-pilot.html";
  if (normalized.includes("mba") || normalized.includes("business management") || normalized.includes("bba")) return "four-circles-business-management-mba.html";
  if (normalized.includes("entrepreneur") || normalized.includes("startup") || normalized.includes("start-up") || normalized.includes("business owner") || normalized.includes("own business") || normalized.includes("founder") || normalized.includes("businessman") || normalized.includes("businesswoman")) return "four-circles-entrepreneur-business-owner.html";
  if (normalized.includes("scientist") || normalized.includes("researcher") || normalized.includes("isro") || normalized.includes("drdo") || normalized.includes("iisc") || normalized.includes("iiser") || normalized.includes("astronomy") || normalized.includes("astrophysics") || normalized.includes("research")) return "four-circles-scientist.html";
  if (normalized.includes("journalist") || normalized.includes("journalism") || normalized.includes("news reporter")) return "four-circles-journalist.html";
  if (normalized.includes("pharmacist") || normalized.includes("pharmacy")) return "four-circles-pharmacist.html";
  if (normalized.includes("government job") || normalized.includes("govt job") || normalized.includes("sarkari") || normalized.includes("ssc") || normalized.includes("railway") || normalized.includes("rrb") || normalized.includes("appsc") || normalized.includes("group 1") || normalized.includes("group 2") || normalized.includes("group 4") || normalized.includes("group-1") || normalized.includes("group-2") || normalized.includes("chsl") || normalized.includes("cgl")) return "four-circles-government-jobs.html";

  // Check software engineer keywords BEFORE general engineer
  if (normalized.includes("software") || normalized.includes("developer") || normalized.includes("programmer") || normalized.includes("coder") || normalized.includes("cse")) return "four-circles-software-engineer.html";

  // Core / General Engineering
  if (
    normalized.includes("engineer") ||
    normalized.includes("engineering") ||
    normalized.includes("b.tech") ||
    normalized.includes("btech") ||
    normalized.includes("mechanical") ||
    normalized.includes("civil") ||
    normalized.includes("electrical") ||
    normalized.includes("electronics") ||
    normalized.includes("ece") ||
    normalized.includes("eee") ||
    normalized.includes("mechatronics") ||
    normalized.includes("robotics") ||
    normalized.includes("aerospace") ||
    normalized.includes("aeronautical") ||
    normalized.includes("chemical engineer") ||
    normalized.includes("biomedical engineer") ||
    normalized.includes("metallurgy")
  ) {
    return "four-circles-engineer.html";
  }

  // 3. Fallback substring matching
  for (const opt of DEFAULT_CAREER_OPTIONS) {
    if (opt.id !== "engineer" && opt.id !== "swe" && opt.id !== "not-decided" && opt.id !== "other" && normalized.includes(opt.label.toLowerCase())) {
      return opt.file;
    }
  }

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
