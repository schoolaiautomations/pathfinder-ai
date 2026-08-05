// ─── Roadmap Form ───────────────────────────────────────────────────────────

export type RoadmapFormData = {
  careerGoal: string;
  currentClass: string;
  location: string;
};

export const ROADMAP_FORM_KEY = "learning-roadmap-form";
export const ROADMAP_RESULT_KEY = "learning-roadmap-result";

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

export type LearningRoadmap = {
  careerGoal: string;
  summary: string;
  phases: LearningPhase[];
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
