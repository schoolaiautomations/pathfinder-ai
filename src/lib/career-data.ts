export type FormData = {
  name: string;
  phone_number: string;
  dob: string;
  gender: string;
  city: string;
  state: string;
  country: string;
  educationLevel: string;
  schoolName: string;
  favoriteSubjects: string[];
  difficultSubjects: string[];
  performance: string;
  board: string;
  interests: string[];
  customInterests: string;
  skills: string[];
  hobbies: string;
  achievements: string;
  projects: string;
  careerDream: string;
  careerType: string;
  studyLocation: string;
  studyMode: string;
  financial: string;
  parentExpectations: string;
  notWanted: string;
  confirmed: boolean;
  aiDisclaimerConfirmed: boolean;
};

export const initialFormData: FormData = {
  name: "", phone_number: "", dob: "", gender: "", city: "", state: "", country: "",
  educationLevel: "", schoolName: "", favoriteSubjects: [], difficultSubjects: [],
  performance: "", board: "", interests: [], customInterests: "",
  skills: [], hobbies: "", achievements: "", projects: "",
  careerDream: "", careerType: "", studyLocation: "", studyMode: "",
  financial: "", parentExpectations: "", notWanted: "", confirmed: false, aiDisclaimerConfirmed: false,
};

export const STORAGE_KEY = "ai-career-form-data";

export const educationLevels = ["Class 6","Class 7","Class 8","Class 9","Class 10","Class 11","Class 12","Diploma","Undergraduate","Graduate","Other"];
export const boards = ["State Board","CBSE","ICSE","IB","IGCSE","University","Other"];
export const performances = ["Excellent","Good","Average","Needs Improvement"];
export const genders = ["Male","Female","Other","Prefer not to say"];
export const subjects = ["Mathematics","Physics","Chemistry","Biology","English","History","Geography","Computer Science","Economics","Accounting","Business Studies","Political Science","Art","Physical Education"];

export const interestOptions = [
  { name: "Science", icon: "🔬" }, { name: "Biology", icon: "🧬" }, { name: "Medicine", icon: "🩺" },
  { name: "Engineering", icon: "⚙️" }, { name: "Computers", icon: "💻" }, { name: "AI & Robotics", icon: "🤖" },
  { name: "Business", icon: "💼" }, { name: "Design", icon: "🎨" }, { name: "Drawing", icon: "✏️" },
  { name: "Music", icon: "🎵" }, { name: "Sports", icon: "⚽" }, { name: "Agriculture", icon: "🌾" },
  { name: "Environment", icon: "🌱" }, { name: "Teaching", icon: "📚" }, { name: "Public Speaking", icon: "🎤" },
  { name: "Writing", icon: "✍️" }, { name: "Law", icon: "⚖️" }, { name: "Government Jobs", icon: "🏛️" },
  { name: "Defence", icon: "🎖️" }, { name: "Social Work", icon: "🤝" }, { name: "Animals", icon: "🐾" },
  { name: "Space", icon: "🚀" }, { name: "Electronics", icon: "🔌" }, { name: "Gaming", icon: "🎮" },
  { name: "Content Creation", icon: "📹" }, { name: "Entrepreneurship", icon: "💡" },
];

export const skillsList = ["Communication","Coding","Drawing","Problem Solving","Leadership","Teamwork","Creativity","Writing","Public Speaking","Research","Mathematics","Logical Thinking","Hands-on Making","Video Editing","Social Media"];

export const careerTypes = ["Medical","Engineering","Technology","Government","Business","Creative","Research","Teaching","Sports","Not Sure"];
export const studyLocations = ["Near my city","Within my state","Anywhere in India","Abroad","Online","No preference"];
export const studyModes = ["Full-time","Part-time","Online","Hybrid"];
export const financialOptions = ["No major constraint","Need affordable options","Need scholarships","Prefer government institutions","Not sure"];

export const countries = ["India","United States","United Kingdom","Canada","Australia","Singapore","UAE","Other"];
export const indianStates = ["Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Chhattisgarh","Delhi","Goa","Gujarat","Haryana","Himachal Pradesh","Jharkhand","Karnataka","Kerala","Madhya Pradesh","Maharashtra","Manipur","Meghalaya","Mizoram","Nagaland","Odisha","Punjab","Rajasthan","Sikkim","Tamil Nadu","Telangana","Tripura","Uttar Pradesh","Uttarakhand","West Bengal","Other"];

export type RoadmapStep = {
  stage: string;
  description: string;
  duration: string;
  institutes: string[];
};

export type CareerReport = {
  matches: { name: string; score: number; why: string; roadmap: RoadmapStep[] }[];
  insights: {
    studyRoadmap: string;
    whereToStudy: string;
    skillsToBuild: string;
    salaryAndDemand: string;
    whatToStudyNext: string;
    parentGuidance: string;
  };
};

export const REPORT_STORAGE_KEY = "ai-career-report";
