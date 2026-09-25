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
  { id: "air-hostess", label: "Air Hostess / Cabin Crew", icon: "🛫", file: "four-circles-air-hostess.html" },
  { id: "physiotherapy", label: "Physiotherapy / Physiotherapist", icon: "🏃", file: "four-circles-physiotherapy.html" },
  { id: "chef", label: "Chef / Culinary Professional", icon: "👨‍🍳", file: "four-circles-chef.html" },
  { id: "psychologist", label: "Psychologist", icon: "🧠", file: "four-circles-psychologist.html" },
  { id: "environmental-consultant", label: "Environmental Consultant", icon: "🌱", file: "four-circles-environmental-consultant.html" },
  { id: "archaeologist", label: "Archaeologist", icon: "🏺", file: "four-circles-archaeologist.html" },
  { id: "nutritionist", label: "Nutritionist / Dietitian", icon: "🥗", file: "four-circles-nutritionist.html" },
  { id: "veterinarian", label: "Veterinarian / Veterinary Doctor", icon: "🐾", file: "four-circles-veterinarian.html" },
  { id: "beautician", label: "Beautician / Beauty Professional", icon: "💄", file: "four-circles-beautician.html" },
  { id: "ai-scientist", label: "AI Research Scientist", icon: "🧠", file: "four-circles-ai-research-scientist.html" },
  { id: "data-scientist", label: "Data Scientist", icon: "📊", file: "four-circles-data-scientist.html" },
  { id: "robotics-engineer", label: "Robotics Engineer", icon: "🤖", file: "four-circles-robotics-engineer.html" },
  { id: "forensic-scientist", label: "Forensic Scientist", icon: "🔍", file: "four-circles-forensic-scientist.html" },
  { id: "horticulturist", label: "Horticulturist", icon: "🪴", file: "four-circles-horticulturist.html" },
  { id: "stenographer", label: "Stenographer", icon: "⌨️", file: "four-circles-stenographer.html" },
  { id: "astrophysicist", label: "Astrophysicist / Space Scientist", icon: "🔭", file: "four-circles-astrophysicist.html" },
  { id: "cyber-security", label: "Cyber Security Specialist / Ethical Hacker", icon: "🛡️", file: "four-circles-cyber-security-specialist.html" },
  { id: "drone-pilot", label: "Drone Pilot & UAV Technician", icon: "🛸", file: "four-circles-drone-pilot-uav-technician.html" },
  { id: "epigraphist", label: "Epigraphist (Inscriptions Specialist)", icon: "📜", file: "four-circles-epigraphist.html" },
  { id: "fitness-coach", label: "Fitness Coach / Personal Trainer", icon: "🏋️", file: "four-circles-fitness-coach.html" },
  { id: "food-safety-officer", label: "Food Safety Officer (FSO)", icon: "🧪", file: "four-circles-food-safety-officer.html" },
  { id: "geneticist", label: "Geneticist / Biotech Researcher", icon: "🧬", file: "four-circles-geneticist.html" },
  { id: "income-tax-officer", label: "Income Tax Officer (SSC CGL)", icon: "💼", file: "four-circles-income-tax-officer.html" },
  { id: "railway-jobs", label: "Indian Railways Jobs (RRB NTPC & ALP)", icon: "🚆", file: "four-circles-indian-railways-jobs.html" },
  { id: "speech-pathologist", label: "Speech-Language Pathologist (Audiologist)", icon: "🗣️", file: "four-circles-speech-language-pathologist.html" },
  { id: "yoga-doctor", label: "Yoga & Naturopathy Doctor (BNYS)", icon: "🧘", file: "four-circles-yoga-naturopathy-doctor.html" },
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
  if (normalized.includes("air hostess") || normalized.includes("airhostess") || normalized.includes("cabin crew") || normalized.includes("flight attendant") || normalized.includes("steward")) return "four-circles-air-hostess.html";
  if (normalized.includes("physiotherapy") || normalized.includes("physiotherapist") || normalized.includes("bpt") || normalized.includes("mpt") || normalized.includes("physical therapy") || normalized.includes("physical therapist")) return "four-circles-physiotherapy.html";
  if (normalized.includes("not decided") || normalized.includes("undecided") || normalized.includes("not sure") || normalized.includes("confused") || normalized.includes("dont know") || normalized.includes("don't know")) return "four-circles-not-decided-yet.html";
  if (normalized.includes("yoga") || normalized.includes("naturopathy") || normalized.includes("bnys")) return "four-circles-yoga-naturopathy-doctor.html";
  if (normalized.includes("speech") || normalized.includes("audiolog") || normalized.includes("baslp") || normalized.includes("pathologist") || normalized.includes("speech therapist")) return "four-circles-speech-language-pathologist.html";
  if (normalized.includes("genetic") || normalized.includes("gene editing") || normalized.includes("crispr") || normalized.includes("genomics")) return "four-circles-geneticist.html";
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
  if (normalized.includes("chef") || normalized.includes("culinary") || normalized.includes("cooking") || normalized.includes("bakery") || normalized.includes("pastry")) return "four-circles-chef.html";
  if (normalized.includes("hotel") || normalized.includes("hospitality") || normalized.includes("nchm") || normalized.includes("catering")) return "four-circles-hotel-management.html";
  if (normalized.includes("psycholog") || normalized.includes("counsellor") || normalized.includes("counselor") || normalized.includes("counseling") || normalized.includes("mental health")) return "four-circles-psychologist.html";
  if (normalized.includes("environment") || normalized.includes("ecology") || normalized.includes("eia") || normalized.includes("pollution control")) return "four-circles-environmental-consultant.html";
  if (normalized.includes("epigraph") || normalized.includes("inscription")) return "four-circles-epigraphist.html";
  if (normalized.includes("archaeolog") || normalized.includes("excavation") || normalized.includes("ancient history") || normalized.includes("asi")) return "four-circles-archaeologist.html";
  if (normalized.includes("nutrition") || normalized.includes("dietitian") || normalized.includes("dietician") || normalized.includes("dietetics")) return "four-circles-nutritionist.html";
  if (normalized.includes("veterinar") || normalized.includes("vet doctor") || normalized.includes("animal doctor") || normalized.includes("bvsc") || normalized.includes("b.v.sc")) return "four-circles-veterinarian.html";
  if (normalized.includes("beautician") || normalized.includes("beauty") || normalized.includes("cosmetolog") || normalized.includes("makeup artist") || normalized.includes("make up") || normalized.includes("hair stylist") || normalized.includes("salon")) return "four-circles-beautician.html";
  if (normalized.includes("fitness coach") || normalized.includes("personal trainer") || normalized.includes("gym trainer") || normalized.includes("fitness trainer")) return "four-circles-fitness-coach.html";
  if (normalized.includes("sport") || normalized.includes("athlete") || normalized.includes("athletics") || normalized.includes("cricket") || normalized.includes("football") || normalized.includes("badminton") || normalized.includes("khelo india") || normalized.includes("sportsman") || normalized.includes("sportswoman")) return "four-circles-sports-professional-athlete.html";
  if (normalized.includes("interior") || normalized.includes("furniture design") || normalized.includes("home decor") || normalized.includes("spatial design")) return "four-circles-interior-designer.html";
  if (normalized.includes("graphic")) return "four-circles-graphic-designer.html";
  if (normalized.includes("fashion")) return "four-circles-fashion-designer.html";
  if (normalized.includes("drone") || normalized.includes("uav") || normalized.includes("remote pilot")) return "four-circles-drone-pilot-uav-technician.html";
  if (normalized.includes("pilot") || normalized.includes("aviation")) return "four-circles-commercial-pilot.html";
  if (normalized.includes("mba") || normalized.includes("business management") || normalized.includes("bba")) return "four-circles-business-management-mba.html";
  if (normalized.includes("entrepreneur") || normalized.includes("startup") || normalized.includes("start-up") || normalized.includes("business owner") || normalized.includes("own business") || normalized.includes("founder") || normalized.includes("businessman") || normalized.includes("businesswoman")) return "four-circles-entrepreneur-business-owner.html";
  if (normalized.includes("ai research") || normalized.includes("artificial intelligence") || normalized.includes("ai scientist") || normalized.includes("machine learning") || normalized.includes("deep learning")) return "four-circles-ai-research-scientist.html";
  if (normalized.includes("data scientist") || normalized.includes("data science") || normalized.includes("data analyst") || normalized.includes("big data")) return "four-circles-data-scientist.html";
  if (normalized.includes("robotics") || normalized.includes("robot engineer") || normalized.includes("robotics engineer")) return "four-circles-robotics-engineer.html";
  if (normalized.includes("forensic") || normalized.includes("criminolog")) return "four-circles-forensic-scientist.html";
  if (normalized.includes("horticultur") || normalized.includes("floricultur")) return "four-circles-horticulturist.html";
  if (normalized.includes("stenograph") || normalized.includes("steno") || normalized.includes("shorthand")) return "four-circles-stenographer.html";
  if (normalized.includes("astrophysic") || normalized.includes("astronomy") || normalized.includes("space scientist")) return "four-circles-astrophysicist.html";
  if (normalized.includes("scientist") || normalized.includes("researcher") || normalized.includes("isro") || normalized.includes("drdo") || normalized.includes("iisc") || normalized.includes("iiser") || normalized.includes("research")) return "four-circles-scientist.html";
  if (normalized.includes("journalist") || normalized.includes("journalism") || normalized.includes("news reporter")) return "four-circles-journalist.html";
  if (normalized.includes("pharmacist") || normalized.includes("pharmacy")) return "four-circles-pharmacist.html";
  if (normalized.includes("income tax") || normalized.includes("tax officer") || normalized.includes("cbdt") || normalized.includes("tax inspector")) return "four-circles-income-tax-officer.html";
  if (normalized.includes("railway") || normalized.includes("rrb") || normalized.includes("loco pilot") || normalized.includes("station master") || normalized.includes("railways")) return "four-circles-indian-railways-jobs.html";
  if (normalized.includes("food safety") || normalized.includes("fso") || normalized.includes("fssai")) return "four-circles-food-safety-officer.html";
  if (normalized.includes("government job") || normalized.includes("govt job") || normalized.includes("sarkari") || normalized.includes("ssc") || normalized.includes("appsc") || normalized.includes("group 1") || normalized.includes("group 2") || normalized.includes("group 4") || normalized.includes("group-1") || normalized.includes("group-2") || normalized.includes("chsl") || normalized.includes("cgl")) return "four-circles-government-jobs.html";

  // Check software engineer keywords BEFORE general engineer
  if (normalized.includes("cyber security") || normalized.includes("cybersecurity") || normalized.includes("ethical hack") || normalized.includes("infosec") || normalized.includes("penetration test")) return "four-circles-cyber-security-specialist.html";
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
