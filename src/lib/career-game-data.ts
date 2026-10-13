export interface GameOption {
  text: string;
}

export interface GameQuestion {
  id: number;
  roadmapStage: string;
  category: "Choosing Branch / Stream" | "Course Duration" | "School Subjects" | "Skills to Build" | "College Degree & Exams" | "AI & Future World";
  categoryColor: string;
  question: string;
  options: GameOption[];
  correctIndex: number;
  explanation: string;
  proTip: string;
}

export interface CareerGame {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  badge: string;
  gradient: string;
  accentColor: string;
  description: string;
  totalQuestions: number;
  blueprintUrl: string;
  cheatSheet: string[];
  questions: GameQuestion[];
}

export const CAREER_GAMES: Record<string, CareerGame> = {
  swe: {
    id: "swe",
    title: "Software Engineer Roadmap Quiz",
    subtitle: "A student-friendly quiz for 8th, 9th & 10th classes: pick streams, course years, subjects & skills!",
    icon: "💻",
    badge: "For Classes 8th – 10th",
    gradient: "from-blue-600 via-indigo-600 to-violet-700",
    accentColor: "#6366F1",
    description: "Want to become a Software Engineer? Test if you know the exact roadmap: which stream to pick after Class 10, how many years each degree takes, which school subjects matter most, and what skills to build starting today!",
    totalQuestions: 10,
    blueprintUrl: "/career-reports?career=swe",
    cheatSheet: [
      "Class 8-10: Focus on Mathematics, logic puzzles, fast touch-typing & computer curiosity.",
      "After 10th: Choose MPC (Maths, Physics, Chemistry) for 2 years (or 3-year Polytechnic Diploma).",
      "After 12th: Prepare for JEE Main / State CET / EAPCET entrance exams.",
      "College Degree: 4-Year B.Tech / B.E. in Computer Science (or BCA + MCA).",
      "Future with AI: Use AI as a co-pilot while leading with human problem-solving & creative logic!"
    ],
    questions: [
      {
        id: 1,
        roadmapStage: "Stage 1: After 10th Class",
        category: "Choosing Branch / Stream",
        categoryColor: "bg-blue-100 text-blue-900 border-blue-300",
        question: "When you pass Class 10, which Intermediate (10+2) stream should you select to become a Software Engineer in India?",
        options: [
          { text: "BiPC (Biology, Physics, Chemistry)" },
          { text: "MPC (Mathematics, Physics, Chemistry)" },
          { text: "CEC (Commerce, Economics, Civics)" },
          { text: "HEC (History, Economics, Civics)" },
        ],
        correctIndex: 1,
        explanation: "MPC (Mathematics, Physics, Chemistry) is the mandatory stream for appearing in engineering entrance exams like JEE Main, JEE Advanced, and State EAPCET / CET.",
        proTip: "If you like problem solving and Maths, MPC is your direct launchpad to Computer Science!",
      },
      {
        id: 2,
        roadmapStage: "Stage 2: Plus-Two Duration",
        category: "Course Duration",
        categoryColor: "bg-emerald-100 text-emerald-900 border-emerald-300",
        question: "How many years does Intermediate (Junior College / Class 11 & 12) take to complete in India?",
        options: [
          { text: "1 Year" },
          { text: "4 Years" },
          { text: "2 Years (Class 11 & Class 12)" },
          { text: "6 Months" },
        ],
        correctIndex: 2,
        explanation: "Intermediate takes exactly 2 years (Class 11 and Class 12). During these 2 years, you prepare for both your Board exams and your Engineering entrance exams.",
        proTip: "Consistent daily study in Class 11 makes Class 12 board and entrance exams much less stressful.",
      },
      {
        id: 3,
        roadmapStage: "Stage 3: The Polytechnic Route",
        category: "Choosing Branch / Stream",
        categoryColor: "bg-purple-100 text-purple-900 border-purple-300",
        question: "If you want a practical, low-cost route directly after Class 10 without studying Class 11-12, what option is available?",
        options: [
          { text: "A 1-month mobile phone screen repair course" },
          { text: "Direct admission into MBBS without Class 12" },
          { text: "Drop out and wait until age 21" },
          { text: "3-Year Polytechnic Diploma in Computer Engineering (via POLYCET)" },
        ],
        correctIndex: 3,
        explanation: "Polytechnic Diploma in Computer Engineering (after Class 10 via POLYCET) is a 3-year course. It gives hands-on computer skills and lets you enter directly into the 2nd year of B.Tech through ECET (Lateral Entry)!",
        proTip: "Polytechnic is an amazing low-cost option for students who want direct technical learning right after 10th.",
      },
      {
        id: 4,
        roadmapStage: "Stage 4: School Foundations",
        category: "School Subjects",
        categoryColor: "bg-amber-100 text-amber-900 border-amber-300",
        question: "Which subject that you are studying right now in 8th, 9th, or 10th is the MOST important foundation for software programming?",
        options: [
          { text: "Mathematics (Algebra, Arithmetic & Geometry)" },
          { text: "Ancient History of Egyptian Pharaohs" },
          { text: "Sanskrit Grammar" },
          { text: "Drawing & Watercolours" },
        ],
        correctIndex: 0,
        explanation: "Mathematics is the backbone of computer science! Coding is not about memorizing words; it's about breaking down problems step-by-step using mathematical and logical thinking.",
        proTip: "Don't just memorize math formulas — try to understand the 'why' behind each step.",
      },
      {
        id: 5,
        roadmapStage: "Stage 5: College Degree",
        category: "College Degree & Exams",
        categoryColor: "bg-indigo-100 text-indigo-900 border-indigo-300",
        question: "After completing Class 12 (MPC), which undergraduate college degree is the main degree to become a professional Software Engineer?",
        options: [
          { text: "MBBS (Bachelor of Medicine)" },
          { text: "B.Tech / B.E. in Computer Science & Engineering (CSE)" },
          { text: "B.A. in History & Literature" },
          { text: "B.Com in General Accountancy" },
        ],
        correctIndex: 1,
        explanation: "B.Tech (Bachelor of Technology) or B.E. (Bachelor of Engineering) in CSE / IT is the prime degree. Other great degree pathways include BCA (Bachelor of Computer Applications) and B.Sc Computer Science.",
        proTip: "B.Tech CSE is the most sought-after degree for campus placements in software companies.",
      },
      {
        id: 6,
        roadmapStage: "Stage 6: Degree Duration",
        category: "Course Duration",
        categoryColor: "bg-emerald-100 text-emerald-900 border-emerald-300",
        question: "How many years does a full-time B.Tech Engineering Degree take in India?",
        options: [
          { text: "2 Years" },
          { text: "1 Year" },
          { text: "4 Years (8 Semesters)" },
          { text: "6 Years" },
        ],
        correctIndex: 2,
        explanation: "A standard B.Tech degree takes 4 years (2 semesters per year = 8 semesters). During these 4 years, you learn computer languages, software design, and do internships.",
        proTip: "Students who do a 3-year Polytechnic Diploma get lateral entry into the 2nd year of B.Tech, completing B.Tech in 3 years!",
      },
      {
        id: 7,
        roadmapStage: "Stage 7: Skills to Build in School",
        category: "Skills to Build",
        categoryColor: "bg-rose-100 text-rose-900 border-rose-300",
        question: "As an 8th, 9th, or 10th student, what skills should you start building right now to prepare for this career?",
        options: [
          { text: "Memorising entire dictionaries without understanding" },
          { text: "Lifting heavy dumbbells and marathon running" },
          { text: "Playing mobile games for 8 hours every day" },
          { text: "Fast keyboard typing, logical puzzles (Sudoku/chess), and basic computer curiosity" },
        ],
        correctIndex: 3,
        explanation: "In high school, you don't need to be a coding master! Building fast touch-typing, playing logic games like chess or Sudoku, learning basic computer skills, and being curious about how apps work is the best foundation.",
        proTip: "Practice touch-typing for 15 minutes a day — it will make you 3x faster when you learn to code!",
      },
      {
        id: 8,
        roadmapStage: "Stage 8: Key Entrance Exams",
        category: "College Degree & Exams",
        categoryColor: "bg-indigo-100 text-indigo-900 border-indigo-300",
        question: "Which entrance examination is written in India after Class 12 to get admission into top engineering colleges like IITs, NITs, and State Universities?",
        options: [
          { text: "JEE Main / JEE Advanced & State EAPCET / CET" },
          { text: "NEET (National Eligibility cum Entrance Test)" },
          { text: "CLAT (Common Law Admission Test)" },
          { text: "CA Foundation" },
        ],
        correctIndex: 0,
        explanation: "JEE Main and JEE Advanced are the premier national engineering exams for IITs and NITs. Every Indian state also conducts its own CET (like AP/TS EAPCET, KCET, MHT-CET) for state university admissions.",
        proTip: "Focus on understanding Class 11 and 12 Maths and Physics concepts thoroughly to crack these exams.",
      },
      {
        id: 9,
        roadmapStage: "Stage 9: What Engineers Actually Do",
        category: "Skills to Build",
        categoryColor: "bg-teal-100 text-teal-900 border-teal-300",
        question: "What does a Software Engineer actually do during their daily job?",
        options: [
          { text: "Repairs physical ceiling fans and electric wiring in homes" },
          { text: "Creates and maintains software apps like YouTube, WhatsApp, school portals, and games" },
          { text: "Sells mouse pads and keyboards in a street shop" },
          { text: "Only types letters in Microsoft Word all day" },
        ],
        correctIndex: 1,
        explanation: "Software engineers write instructions that tell computers and phones what to do. They build the games you play, the apps you order food with, Google Maps, online banking, and hospital systems!",
        proTip: "Every company in the world — from hospitals to banks and space agencies — needs software engineers.",
      },
      {
        id: 10,
        roadmapStage: "Stage 10: The Future with AI",
        category: "AI & Future World",
        categoryColor: "bg-purple-100 text-purple-900 border-purple-300",
        question: "By the time you finish school and graduate from college (in ~8 to 10 years), how will Artificial Intelligence (AI) shape software engineering?",
        options: [
          { text: "Computers will be thrown away and people will only use paper and ink" },
          { text: "Software will stop existing completely" },
          { text: "AI will help write simple code, so engineers who have creative ideas and solve real human problems will be super valuable!" },
          { text: "You won't need to study or learn anything ever again" },
        ],
        correctIndex: 2,
        explanation: "AI is a powerful super-assistant! It helps engineers build apps faster, but AI cannot replace human creativity, empathy, and problem solving. Future software engineers will be directors using AI tools to build big dreams!",
        proTip: "Students who cultivate strong thinking skills and learn how to collaborate with AI will have the highest-paying careers.",
      },
    ],
  },

  doctor: {
    id: "doctor",
    title: "Doctor & Healthcare Roadmap Quiz",
    subtitle: "A student-friendly quiz for 8th, 9th & 10th classes: BiPC stream, NEET, MBBS years, and healing lives!",
    icon: "🩺",
    badge: "For Classes 8th – 10th",
    gradient: "from-emerald-600 via-teal-600 to-cyan-700",
    accentColor: "#059669",
    description: "Dream of wearing the white coat and saving lives? Explore the real medical roadmap: which stream to choose after 10th, how many years MBBS takes, the truth about NEET, and what caring skills matter most!",
    totalQuestions: 10,
    blueprintUrl: "/career-reports?career=doctor",
    cheatSheet: [
      "Class 8-10: Build a solid foundation in Biology & Science, and develop patience and neat observation habits.",
      "After 10th: Choose BiPC (Biology, Physics, Chemistry) for 2 years of Intermediate / Junior College.",
      "After 12th: Appear for NEET-UG (National Eligibility cum Entrance Test).",
      "Medical College: 5.5 Years MBBS (4.5 years study + 1 year compulsory rotatory hospital internship).",
      "Plan B Options: BDS (Dental), BAMS (Ayurvedic), BHMS (Homeopathy), B.Sc Nursing, BPT Physiotherapy, or B.Pharm.",
      "Future with AI: AI will analyze MRI/X-ray scans in seconds, but doctor's empathy, bedside care, and human touch can never be automated!"
    ],
    questions: [
      {
        id: 1,
        roadmapStage: "Stage 1: After 10th Class",
        category: "Choosing Branch / Stream",
        categoryColor: "bg-emerald-100 text-emerald-900 border-emerald-300",
        question: "When you complete Class 10, which Intermediate (10+2) stream MUST you take to become a Doctor (MBBS) in India?",
        options: [
          { text: "MPC (Mathematics, Physics, Chemistry)" },
          { text: "BiPC (Biology, Physics, Chemistry)" },
          { text: "CEC (Commerce, Economics, Civics)" },
          { text: "MEC (Mathematics, Economics, Commerce)" },
        ],
        correctIndex: 1,
        explanation: "BiPC (Biology, Physics, Chemistry) is the compulsory stream. Biology (Botany and Zoology) carries 50% of the total marks in the medical entrance exam.",
        proTip: "If you love learning about the human body, plants, and living organisms, BiPC will feel natural and fascinating!",
      },
      {
        id: 2,
        roadmapStage: "Stage 2: School Foundations",
        category: "School Subjects",
        categoryColor: "bg-teal-100 text-teal-900 border-teal-300",
        question: "Which subject that you study in 8th, 9th, and 10th is the heart and soul of medical studies?",
        options: [
          { text: "General Science & Biology (Cells, Organ Systems & Living Processes)" },
          { text: "World Geography and Map Drawing" },
          { text: "Computer Coding in Python" },
          { text: "Accounting & Taxation" },
        ],
        correctIndex: 0,
        explanation: "Biology and Life Sciences form the bedrock of medicine. Learning how organs, the circulatory system, digestion, and cells function in school gives you a massive head start for MBBS.",
        proTip: "Draw neat biological diagrams in your school notebook — diagram memory helps tremendously in NEET!",
      },
      {
        id: 3,
        roadmapStage: "Stage 3: Plus-Two Duration",
        category: "Course Duration",
        categoryColor: "bg-blue-100 text-blue-900 border-blue-300",
        question: "How many years do you spend in Intermediate (Class 11 and 12) preparing for medical entrance?",
        options: [
          { text: "1 Year" },
          { text: "3 Years" },
          { text: "2 Years (Class 11 & Class 12)" },
          { text: "5 Years" },
        ],
        correctIndex: 2,
        explanation: "Intermediate takes 2 years. In these 2 years, you master the NCERT syllabus for Physics, Chemistry, and Biology, which is tested in the NEET exam.",
        proTip: "NCERT textbooks in Biology are considered the 'Bible' for NEET aspirants. Master them line by line!",
      },
      {
        id: 4,
        roadmapStage: "Stage 4: Mandatory Entrance Exam",
        category: "College Degree & Exams",
        categoryColor: "bg-indigo-100 text-indigo-900 border-indigo-300",
        question: "Which single all-India entrance exam must every student write to enter medical college for MBBS or BDS in India?",
        options: [
          { text: "JEE Advanced" },
          { text: "UPSC Civil Services Exam" },
          { text: "CA Foundation" },
          { text: "NEET-UG (National Eligibility cum Entrance Test)" },
        ],
        correctIndex: 3,
        explanation: "NEET-UG is the sole entrance exam in India for admission into all government and private medical colleges (including AIIMS and JIPMER).",
        proTip: "Consistent daily revision of formulas and biology definitions is the key to cracking NEET.",
      },
      {
        id: 5,
        roadmapStage: "Stage 5: The Primary Medical Degree",
        category: "College Degree & Exams",
        categoryColor: "bg-purple-100 text-purple-900 border-purple-300",
        question: "What is the official name of the primary undergraduate bachelor degree required to practice modern medicine as a Doctor?",
        options: [
          { text: "B.Tech in Biomedical Engineering" },
          { text: "MBBS (Bachelor of Medicine and Bachelor of Surgery)" },
          { text: "B.Pharmacy" },
          { text: "B.Sc in Agriculture" },
        ],
        correctIndex: 1,
        explanation: "MBBS stands for Bachelor of Medicine and Bachelor of Surgery (from Latin: Medicinae Baccalaureus, Baccalaureus Chirurgiae). It grants you the legal license to treat patients.",
        proTip: "After passing MBBS and registering with the National Medical Commission (NMC), you earn the proud title 'Dr.' before your name!",
      },
      {
        id: 6,
        roadmapStage: "Stage 6: Medical Degree Duration",
        category: "Course Duration",
        categoryColor: "bg-amber-100 text-amber-900 border-amber-300",
        question: "How long does the complete MBBS course take from day one until you receive your doctor license?",
        options: [
          { text: "3 Years" },
          { text: "4 Years" },
          { text: "5.5 Years (4.5 Years College + 1 Year Hospital Internship)" },
          { text: "8 Years" },
        ],
        correctIndex: 2,
        explanation: "MBBS takes 5.5 years: 4.5 years of rigorous classroom, lab, and hospital ward training, followed by 1 full year of compulsory rotatory internship in a hospital treating real patients.",
        proTip: "The 1-year internship is where medical graduates work in surgery, medicine, pediatric, and emergency departments 24/7.",
      },
      {
        id: 7,
        roadmapStage: "Stage 7: Plan B Healthcare Options",
        category: "Choosing Branch / Stream",
        categoryColor: "bg-emerald-100 text-emerald-900 border-emerald-300",
        question: "NEET is highly competitive. If a BiPC student does not get an MBBS government seat, which rewarding alternative healthcare careers are available?",
        options: [
          { text: "BDS (Dentist), BAMS (Ayurveda), BPT (Physiotherapy), B.Sc Nursing, or B.Pharm" },
          { text: "There are zero other options in healthcare" },
          { text: "Only a factory worker job" },
          { text: "Waiting at home for 10 years" },
        ],
        correctIndex: 0,
        explanation: "Healthcare has dozens of noble, high-paying career paths! Dentists (BDS), Physiotherapists (BPT), Ayurvedic doctors (BAMS), Pharmacists, and specialized Nurses are in huge demand globally.",
        proTip: "Always keep a strong Plan B in mind — saving lives happens across the entire healthcare ecosystem!",
      },
      {
        id: 8,
        roadmapStage: "Stage 8: Skills to Build in School",
        category: "Skills to Build",
        categoryColor: "bg-rose-100 text-rose-900 border-rose-300",
        question: "What personal quality or skill should an 8th-10th student cultivate if they want to be a respected doctor?",
        options: [
          { text: "Getting angry quickly when things go wrong" },
          { text: "Disliking talking to people and staying isolated" },
          { text: "Only caring about buying expensive sports cars" },
          { text: "Empathy, patient listening, sharp observation, and calm focus under stress" },
        ],
        correctIndex: 3,
        explanation: "A patient visits a doctor when they are in pain or scared. Empathy (caring for others), listening carefully to symptoms, and remaining calm in emergencies make a truly great doctor.",
        proTip: "Practice listening to friends and family without interrupting them — good listening is half the diagnosis!",
      },
      {
        id: 9,
        roadmapStage: "Stage 9: Becoming a Specialist",
        category: "College Degree & Exams",
        categoryColor: "bg-indigo-100 text-indigo-900 border-indigo-300",
        question: "After MBBS, if a doctor wants to specialize as a Cardiologist (Heart), Neurologist (Brain), or Surgeon, what postgraduate degree do they pursue?",
        options: [
          { text: "B.Ed (Bachelor of Education)" },
          { text: "MD (Doctor of Medicine) or MS (Master of Surgery) - 3 Years" },
          { text: "MBA in Marketing" },
          { text: "LLB (Bachelor of Law)" },
        ],
        correctIndex: 1,
        explanation: "After MBBS, doctors write the NEET-PG exam to enter 3-year MD (Medicine) or MS (Surgery) courses to become specialists in cardiology, pediatrics, orthopedics, or oncology.",
        proTip: "Specialization takes 3 additional years, but makes you an expert in your chosen field of healing.",
      },
      {
        id: 10,
        roadmapStage: "Stage 10: The Future with AI",
        category: "AI & Future World",
        categoryColor: "bg-purple-100 text-purple-900 border-purple-300",
        question: "How will Artificial Intelligence (AI) transform medicine by the time you become a doctor in 10-12 years?",
        options: [
          { text: "Robots will replace all human doctors and hospitals will have no people" },
          { text: "Diseases will completely stop existing in the world" },
          { text: "AI will analyze scans and predict illnesses early, but human doctors will provide the caring touch, judgment, and emotional comfort patients need" },
          { text: "Doctors will no longer need stethoscopes or medicines" },
        ],
        correctIndex: 2,
        explanation: "AI is becoming a powerful doctor's assistant — scanning X-rays in 2 seconds and discovering new medicines. However, a computer can never hold a crying patient's hand or deliver compassionate human reassurance.",
        proTip: "Future doctors who understand both medicine and AI tools will be the most sought-after healthcare leaders!",
      },
    ],
  },

  police: {
    id: "police",
    title: "Police Officer & IPS Roadmap Quiz",
    subtitle: "A student-friendly quiz for 8th, 9th & 10th classes: physical fitness, degrees, UPSC IPS, and protecting the nation!",
    icon: "👮",
    badge: "For Classes 8th – 10th",
    gradient: "from-amber-600 via-orange-600 to-red-700",
    accentColor: "#D97706",
    description: "Want to wear the Khaki uniform with proud stars and protect citizens? Discover the real roadmap: which streams qualify, how physical fitness tests work, how to crack SI and IPS exams, and what courage is all about!",
    totalQuestions: 10,
    blueprintUrl: "/career-reports?career=police",
    cheatSheet: [
      "Class 8-10: Build physical stamina (running, sports, NCC), follow daily news, and study Civics & Constitution.",
      "After 10th: Any stream! (MPC, BiPC, CEC, MEC, or Arts) — all are 100% eligible for police careers.",
      "College Degree: Complete any 3-year or 4-year Bachelor's degree (B.A., B.Sc., B.Com., or B.Tech).",
      "Two Main Pathways: 1) State Police Sub-Inspector (SI) via State Police Exam; 2) IPS Officer via UPSC Civil Services Exam.",
      "Academy Training: IPS officers train at the prestigious National Police Academy (SVPNPA) in Hyderabad.",
      "Future with AI: Modern policing uses AI for cyber-crime tracking, CCTV face recognition, and crime mapping, while human courage safeguards justice!"
    ],
    questions: [
      {
        id: 1,
        roadmapStage: "Stage 1: Stream Selection after 10th",
        category: "Choosing Branch / Stream",
        categoryColor: "bg-blue-100 text-blue-900 border-blue-300",
        question: "Which stream should you select in Intermediate (Class 11 & 12) if your dream is to become a Police Sub-Inspector or an IPS Officer?",
        options: [
          { text: "Only MPC is allowed, other streams are banned" },
          { text: "Only Commerce CEC is accepted" },
          { text: "Any stream! (MPC, BiPC, CEC, MEC, or Arts) — all are 100% eligible!" },
          { text: "You must skip Intermediate and join the army" },
        ],
        correctIndex: 2,
        explanation: "There is no stream restriction for police forces or civil services! Whether you choose Arts, Science, or Commerce, you can become an IPS officer or Sub-Inspector as long as you complete your graduation.",
        proTip: "Pick the stream you genuinely enjoy in 11th and 12th so you can score high marks!",
      },
      {
        id: 2,
        roadmapStage: "Stage 2: The Top Police Rank (IPS)",
        category: "College Degree & Exams",
        categoryColor: "bg-indigo-100 text-indigo-900 border-indigo-300",
        question: "What is the highest prestigious police exam in India conducted to select Indian Police Service (IPS) officers like SPs and DIGs?",
        options: [
          { text: "NEET Exam" },
          { text: "UPSC Civil Services Examination (CSE)" },
          { text: "JEE Advanced" },
          { text: "State Board 10th Class Exam" },
        ],
        correctIndex: 1,
        explanation: "UPSC (Union Public Service Commission) conducts the Civil Services Exam every year. Top rankers who choose police service are appointed as IPS officers (starting as ASP / SP).",
        proTip: "Reading newspapers like The Hindu or Indian Express from high school gives you deep general knowledge for UPSC.",
      },
      {
        id: 3,
        roadmapStage: "Stage 3: Sub-Inspector (SI) Route",
        category: "College Degree & Exams",
        categoryColor: "bg-emerald-100 text-emerald-900 border-emerald-300",
        question: "If you want to join your state police as a Sub-Inspector (SI) leading a local police station, who conducts that recruitment?",
        options: [
          { text: "State Police Recruitment Board (SLPRB) through SI Written & Physical Tests" },
          { text: "School principal interviews" },
          { text: "A lucky lottery draw" },
          { text: "Local municipality sports club" },
        ],
        correctIndex: 0,
        explanation: "Each state government has a State Level Police Recruitment Board that conducts SI examinations consisting of a prelims exam, physical endurance test (PET), and mains exam.",
        proTip: "SI is one of the most respected direct-entry leadership posts in state law enforcement.",
      },
      {
        id: 4,
        roadmapStage: "Stage 4: Physical Fitness in School",
        category: "Skills to Build",
        categoryColor: "bg-rose-100 text-rose-900 border-rose-300",
        question: "Unlike many desk jobs, police recruitment includes strict Physical Fitness Tests. What should high school students start practicing now?",
        options: [
          { text: "Sitting on a sofa playing video games all evening" },
          { text: "Eating junk food every day to gain weight" },
          { text: "Sleeping 14 hours a day" },
          { text: "Running endurance (1600m / 800m), long jump, push-ups, sports, and school NCC/scouts" },
        ],
        correctIndex: 3,
        explanation: "Every police selection has a Physical Efficiency Test (PET) that tests running (e.g. 1600 meters in ~7 minutes), long jump, and height/chest standards. Joining NCC or playing sports in school builds this naturally.",
        proTip: "Join NCC (National Cadet Corps) in school or junior college — 'C' certificate holders get special bonus weightage!",
      },
      {
        id: 5,
        roadmapStage: "Stage 5: High School Subjects",
        category: "School Subjects",
        categoryColor: "bg-amber-100 text-amber-900 border-amber-300",
        question: "Which subject you study right now in 8th, 9th, or 10th directly relates to laws, government, and the Indian Constitution?",
        options: [
          { text: "Chemistry laboratory titration" },
          { text: "Social Studies (Civics, Indian Constitution, History & Geography)" },
          { text: "Trigonometry and Calculus" },
          { text: "Botany flower dissection" },
        ],
        correctIndex: 1,
        explanation: "Social Studies — especially Civics and the Indian Constitution — teaches Fundamental Rights, duties, the judiciary, and how the state machinery operates. This forms 60% of General Studies in police exams!",
        proTip: "Pay close attention to your Civics lessons on the Parliament, Supreme Court, and Fundamental Rights.",
      },
      {
        id: 6,
        roadmapStage: "Stage 6: College Degree Requirement",
        category: "Course Duration",
        categoryColor: "bg-purple-100 text-purple-900 border-purple-300",
        question: "To be eligible to appear for the UPSC IPS exam or State Police Sub-Inspector (SI) exam, what minimum education is legally required?",
        options: [
          { text: "Only 5th Class pass" },
          { text: "Only 10th Class certificate" },
          { text: "Any recognized Bachelor's Degree (3 or 4 Years) from a university" },
          { text: "A Ph.D. Doctorate Degree (10 years)" },
        ],
        correctIndex: 2,
        explanation: "Candidates must hold any recognized undergraduate bachelor degree (like B.A., B.Sc., B.Com., or B.Tech). Even students in their final year of college can apply for UPSC CSE prelims!",
        proTip: "Maintain a steady 60%+ average in your degree so you meet all state and national eligibility criteria.",
      },
      {
        id: 7,
        roadmapStage: "Stage 7: The National Police Academy",
        category: "College Degree & Exams",
        categoryColor: "bg-teal-100 text-teal-900 border-teal-300",
        question: "Where in India are newly selected IPS officers trained in weapon handling, forensic science, horse riding, and criminal law?",
        options: [
          { text: "Sardar Vallabhbhai Patel National Police Academy (SVPNPA) in Hyderabad" },
          { text: "A movie theater in Mumbai" },
          { text: "A private coaching centre in Delhi" },
          { text: "At home through Zoom calls" },
        ],
        correctIndex: 0,
        explanation: "The Sardar Vallabhbhai Patel National Police Academy (SVPNPA) in Hyderabad is India's world-famous premier training academy where IPS probationers undergo intensive 1-year training.",
        proTip: "SVPNPA is known as the 'Cradle of Police Leadership' in India.",
      },
      {
        id: 8,
        roadmapStage: "Stage 8: Personality & Mental Strength",
        category: "Skills to Build",
        categoryColor: "bg-rose-100 text-rose-900 border-rose-300",
        question: "Beyond muscles and physical strength, what is the most vital mental quality a good police officer must possess?",
        options: [
          { text: "Taking bribes and breaking rules" },
          { text: "Showing off on social media with sunglasses" },
          { text: "Being cruel to poor or weak citizens" },
          { text: "High honesty, emotional calm under public pressure, courage, and respect for human dignity" },
        ],
        correctIndex: 3,
        explanation: "A true officer is a protector of citizens. Mental courage, honesty (integrity), staying calm during public tensions, and treating every citizen with equal fairness are the real qualities of heroism.",
        proTip: "Stand up for fairness and honesty in your school classroom — leadership begins with small everyday acts!",
      },
      {
        id: 9,
        roadmapStage: "Stage 9: Everyday Role & Duty",
        category: "Skills to Build",
        categoryColor: "bg-amber-100 text-amber-900 border-amber-300",
        question: "What is the primary daily mission of police officers in our society?",
        options: [
          { text: "Constructing highways and bridges" },
          { text: "Preventing crimes, maintaining peace, safeguarding citizens, and helping people in emergencies" },
          { text: "Selling airline flight tickets" },
          { text: "Repairing computer motherboards" },
        ],
        correctIndex: 1,
        explanation: "Police officers are the frontline guardians of law and order. They protect women and children, investigate theft and cybercrimes, manage emergency rescues, and maintain social harmony.",
        proTip: "Police officers are available 24 hours a day, 365 days a year to keep our cities and villages safe.",
      },
      {
        id: 10,
        roadmapStage: "Stage 10: Future Policing with AI",
        category: "AI & Future World",
        categoryColor: "bg-purple-100 text-purple-900 border-purple-300",
        question: "How will Artificial Intelligence (AI) and technology assist police officers over the next 10 years?",
        options: [
          { text: "Robo-cops will arrest people without any trials or courts" },
          { text: "Crimes will disappear forever with zero effort" },
          { text: "Smart AI systems will help detect cyber financial frauds, monitor smart traffic cameras, and map crime hotspots, while human officers ensure fairness and justice" },
          { text: "Police uniforms will be discontinued" },
        ],
        correctIndex: 2,
        explanation: "AI empowers modern police forces with predictive crime mapping, high-speed cyber forensic tracking, and automatic traffic management. Human empathy, constitutional judgment, and ground bravery remain irreplaceable.",
        proTip: "Learning basic computer security and cyber hygiene in school will make you a smart, modern law enforcement candidate!",
      },
    ],
  },

  teacher: {
    id: "teacher",
    title: "Teacher & Educator Roadmap Quiz",
    subtitle: "A student-friendly quiz for 8th, 9th & 10th classes: subject mastery, B.Ed degree, TET exams, and shaping future generations!",
    icon: "👩‍🏫",
    badge: "For Classes 8th – 10th",
    gradient: "from-sky-600 via-blue-600 to-indigo-700",
    accentColor: "#0284C7",
    description: "Want to follow in the footsteps of Dr. Sarvepalli Radhakrishnan or APJ Abdul Kalam and inspire young minds? Learn the exact roadmap: stream choices, B.Ed vs D.El.Ed, TET exams, and skills needed to become a master educator!",
    totalQuestions: 10,
    blueprintUrl: "/career-reports?career=teacher",
    cheatSheet: [
      "Class 8-10: Fall in love with your favorite subject, practice explaining topics to friends, and build clear public speaking.",
      "After 10th: Pick the stream that matches what you want to teach (MPC for Maths/Physics, BiPC for Biology, CEC/HEC for Social Sciences/Languages).",
      "Teacher Training Paths: 1) D.El.Ed (2-year diploma after 12th for Primary school); 2) Graduation + B.Ed (2-year degree for High School); 3) Post-Graduation + NET/Ph.D. for College Professor.",
      "Key Exams: CTET (Central Teacher Eligibility Test) & State TET for government and top private schools.",
      "Future with AI: AI helps create lesson plans and grade tests, but great teachers spark curiosity, build character, and inspire human potential!"
    ],
    questions: [
      {
        id: 1,
        roadmapStage: "Stage 1: Choosing Stream after 10th",
        category: "Choosing Branch / Stream",
        categoryColor: "bg-blue-100 text-blue-900 border-blue-300",
        question: "Which stream should you choose in Intermediate (10+2) if you want to become a Teacher?",
        options: [
          { text: "There is only one single stream for all teachers in India" },
          { text: "Choose the stream related to the subject you love most! (MPC for Maths/Physics, BiPC for Biology, CEC/HEC for Social Studies or Languages)" },
          { text: "You can only become a teacher if you fail all exams" },
          { text: "Only engineering streams are permitted" },
        ],
        correctIndex: 1,
        explanation: "Teaching depends on your subject passion! If you want to teach Mathematics, take MPC. If you love Biology, take BiPC. If you love History or Economics, choose HEC or CEC. Language teachers can pick any stream!",
        proTip: "Ask yourself: Which subject do you enjoy explaining to your classmates the most?",
      },
      {
        id: 2,
        roadmapStage: "Stage 2: The Core Teaching Degree",
        category: "College Degree & Exams",
        categoryColor: "bg-indigo-100 text-indigo-900 border-indigo-300",
        question: "What is the standard professional degree in India required to become a High School Teacher (Classes 6 to 10)?",
        options: [
          { text: "B.Ed (Bachelor of Education) taken after graduation (or integrated 4-year ITEP)" },
          { text: "B.Com in General Auditing" },
          { text: "MBBS Degree" },
          { text: "Diploma in Hotel Cooking" },
        ],
        correctIndex: 0,
        explanation: "B.Ed (Bachelor of Education) is the gold standard teacher training degree in India. It teaches child psychology, modern teaching methods, lesson planning, and classroom management.",
        proTip: "National Education Policy (NEP) also offers 4-year integrated B.Sc-B.Ed or B.A-B.Ed right after Class 12!",
      },
      {
        id: 3,
        roadmapStage: "Stage 3: Primary School Pathway",
        category: "Course Duration",
        categoryColor: "bg-emerald-100 text-emerald-900 border-emerald-300",
        question: "If someone wants to teach young primary children (Classes 1 to 5) directly after Class 12, what 2-year diploma course is popular in India?",
        options: [
          { text: "6-Year Ph.D. Research" },
          { text: "A 2-day workshop on YouTube" },
          { text: "D.El.Ed (Diploma in Elementary Education / TTC) - 2 Years" },
          { text: "Commercial Pilot License" },
        ],
        correctIndex: 2,
        explanation: "D.El.Ed (Diploma in Elementary Education), earlier known as TTC (Teacher Training Certificate), is a 2-year diploma after 10+2 focused specifically on foundational early-childhood learning.",
        proTip: "Primary teachers have the magical privilege of teaching children how to read, write, and count for the first time!",
      },
      {
        id: 4,
        roadmapStage: "Stage 4: Key Teacher Eligibility Exams",
        category: "College Degree & Exams",
        categoryColor: "bg-purple-100 text-purple-900 border-purple-300",
        question: "Which nationwide examination must be cleared in India to qualify for teaching jobs in Kendriya Vidyalayas (KVS), Navodaya, and CBSE schools?",
        options: [
          { text: "NEET Medical Exam" },
          { text: "CAT MBA Exam" },
          { text: "Chartered Accountancy Final" },
          { text: "CTET (Central Teacher Eligibility Test) & State TET" },
        ],
        correctIndex: 3,
        explanation: "CTET (conducted by CBSE) and State TETs are mandatory qualification tests to ensure that all appointed school teachers meet high national pedagogy and subject standards.",
        proTip: "A CTET certificate is now valid for lifetime, making it an incredible asset for your career!",
      },
      {
        id: 5,
        roadmapStage: "Stage 5: High School Habits",
        category: "Skills to Build",
        categoryColor: "bg-amber-100 text-amber-900 border-amber-300",
        question: "What habit can you start practicing in 8th, 9th, or 10th class that naturally prepares you to be a master teacher?",
        options: [
          { text: "Hiding your notes and refusing to help classmates who are struggling" },
          { text: "Helping your friends understand tricky topics and practicing explaining concepts simply" },
          { text: "Interrupting teachers and disrupting the classroom" },
          { text: "Memorizing answers word-for-word without understanding the meaning" },
        ],
        correctIndex: 1,
        explanation: "The best way to learn is to teach! When you explain a math problem or science concept to a friend in your own simple words, you build clarity, patience, and communication skills.",
        proTip: "Form a study group with 2 friends and take turns teaching one chapter to each other each week!",
      },
      {
        id: 6,
        roadmapStage: "Stage 6: Standard B.Ed Duration",
        category: "Course Duration",
        categoryColor: "bg-blue-100 text-blue-900 border-blue-300",
        question: "How many years does the standard B.Ed degree course take in Indian universities after completing your Bachelor degree?",
        options: [
          { text: "6 Months" },
          { text: "5 Years" },
          { text: "2 Years (4 Semesters)" },
          { text: "10 Years" },
        ],
        correctIndex: 2,
        explanation: "The standard B.Ed course takes 2 years (divided into 4 semesters). It includes classroom training, internship in real schools, and practical teaching demonstrations.",
        proTip: "During B.Ed, you spend months doing practice teaching in real government or private classrooms.",
      },
      {
        id: 7,
        roadmapStage: "Stage 7: The College Professor Route",
        category: "College Degree & Exams",
        categoryColor: "bg-indigo-100 text-indigo-900 border-indigo-300",
        question: "If you want to teach older college or university students as an Assistant Professor or Lecturer, what qualification is required?",
        options: [
          { text: "Master's Degree (M.A. / M.Sc. / M.Com) + Clearing UGC-NET (or Ph.D.)" },
          { text: "Only 10th Class pass with 50% marks" },
          { text: "Just knowing how to drive a car" },
          { text: "Winning a school running race" },
        ],
        correctIndex: 0,
        explanation: "To teach at the college and university level, you need a Master's degree (55%+ marks) followed by clearing the National Eligibility Test (UGC-NET / CSIR-NET) or completing a Ph.D. research doctorate.",
        proTip: "Professors both teach degree students and conduct original research to discover new knowledge for humanity.",
      },
      {
        id: 8,
        roadmapStage: "Stage 8: Core Skills of an Inspiring Educator",
        category: "Skills to Build",
        categoryColor: "bg-rose-100 text-rose-900 border-rose-300",
        question: "What is the most important personal quality of a truly memorable teacher?",
        options: [
          { text: "Carrying a big wooden stick and scaring students" },
          { text: "Never smiling and giving zero marks to everyone" },
          { text: "Reading lines monotonically from a textbook without explaining" },
          { text: "Patience, infectious passion for the subject, empathy for slow learners, and encouraging words" },
        ],
        correctIndex: 3,
        explanation: "Students never forget a teacher who believed in them! Great teachers make hard subjects fun, encourage students when they fail, and inspire lifelong curiosity and confidence.",
        proTip: "Think about your favorite teacher in school — it's always their patience and kindness that made learning fun!",
      },
      {
        id: 9,
        roadmapStage: "Stage 9: What Teachers Do Every Day",
        category: "Skills to Build",
        categoryColor: "bg-teal-100 text-teal-900 border-teal-300",
        question: "What does the day-to-day work of a dedicated teacher involve?",
        options: [
          { text: "Sitting quietly in an empty room with locked doors" },
          { text: "Designing engaging lessons, teaching students, checking homework, mentoring struggling learners, and organizing school activities" },
          { text: "Selling school uniforms in a clothing market" },
          { text: "Only working for 10 minutes a day" },
        ],
        correctIndex: 1,
        explanation: "Teaching is dynamic and full of life! Teachers create visual charts, explain concepts, mentor students through personal challenges, conduct science experiments, and shape future citizens.",
        proTip: "Teachers touch hundreds of lives every year — doctors, engineers, and presidents all learned from teachers first!",
      },
      {
        id: 10,
        roadmapStage: "Stage 10: Future Teaching with AI",
        category: "AI & Future World",
        categoryColor: "bg-purple-100 text-purple-900 border-purple-300",
        question: "With AI tools like ChatGPT and digital learning apps growing rapidly, what will happen to human teachers in the future?",
        options: [
          { text: "Schools will be completely abolished and children won't have any mentors" },
          { text: "AI will replace all human relationships" },
          { text: "AI will help teachers make interactive quizzes and lesson plans, while human teachers mentor students, build moral character, and inspire dreams!" },
          { text: "Students will be taught by mechanical factory machines" },
        ],
        correctIndex: 2,
        explanation: "AI can provide information, but it can never inspire a heart! Future teachers will use AI tools to automate paperwork and create exciting multimedia lessons, freeing up more time to mentor, guide, and care for each child individually.",
        proTip: "A teacher who embraces modern digital tools and leads with genuine human warmth is unbeatable in the AI era!",
      },
    ],
  },

  ias: {
    id: "ias",
    title: "IAS / Civil Services Roadmap Quiz",
    subtitle: "A student-friendly quiz for 8th, 9th & 10th classes: UPSC CSE, District Collector responsibilities, and public leadership!",
    icon: "🏛️",
    badge: "For Classes 8th – 10th",
    gradient: "from-amber-700 via-orange-700 to-yellow-800",
    accentColor: "#B45309",
    description: "Dream of leading a district as a District Collector and making policies that touch millions of citizens? Explore the real civil services roadmap: stream choices, degrees, UPSC exam stages, and leadership traits!",
    totalQuestions: 10,
    blueprintUrl: "/career-reports?career=ias",
    cheatSheet: [
      "Class 8-10: Read daily newspapers, build general awareness, and develop strong understanding of Civics & Indian History.",
      "After 10th: Any stream! (MPC, BiPC, CEC, MEC, or Arts/HEC) — all streams are 100% eligible for civil services.",
      "College Degree: Any 3-year or 4-year Bachelor's degree (B.A., B.Sc., B.Com., B.Tech, or MBBS).",
      "The Big Exam: UPSC Civil Services Examination (CSE) conducted in 3 stages: Prelims, Mains, and Personality Test (Interview).",
      "Academy Training: Selected IAS probationers train at LBSNAA (Mussoorie, Uttarakhand).",
      "Future with AI: AI will speed up file processing and public grievance handling, while ethical leadership and human justice stay firmly with civil servants!"
    ],
    questions: [
      {
        id: 1,
        roadmapStage: "Stage 1: Intermediate Stream Selection",
        category: "Choosing Branch / Stream",
        categoryColor: "bg-blue-100 text-blue-900 border-blue-300",
        question: "Which stream should you pick in Class 11 and 12 (Intermediate) if you want to become an IAS Officer in the future?",
        options: [
          { text: "Only Arts (HEC) is permitted, all other streams are disqualified" },
          { text: "Any stream you like! (MPC, BiPC, CEC, MEC, or Arts) — all are 100% equally eligible for UPSC CSE!" },
          { text: "Only Science students can appear" },
          { text: "You cannot study Intermediate in India" },
        ],
        correctIndex: 1,
        explanation: "UPSC does not demand any specific stream! Thousands of successful IAS officers come from Arts, Science, Commerce, and Engineering backgrounds alike.",
        proTip: "Choose the stream you enjoy most in 11th and 12th so you build strong critical thinking and conceptual depth.",
      },
      {
        id: 2,
        roadmapStage: "Stage 2: Degree Requirement",
        category: "Course Duration",
        categoryColor: "bg-emerald-100 text-emerald-900 border-emerald-300",
        question: "What minimum educational qualification is required by law to sit for the UPSC Civil Services Examination?",
        options: [
          { text: "A Ph.D. doctorate degree with 10 years experience" },
          { text: "Only a 12th Class board pass certificate" },
          { text: "Any recognized Bachelor's Degree (3 or 4 years) in any subject from an Indian university" },
          { text: "A specialized degree only from Oxford or Harvard" },
        ],
        correctIndex: 2,
        explanation: "Any graduate holding a recognized Bachelor's degree (such as B.A., B.Sc., B.Com., B.Tech, or MBBS) can appear. Even final-year college students can write the preliminary exam!",
        proTip: "Many aspirants complete graduation in B.A. Political Science/History or B.Tech before preparing for UPSC.",
      },
      {
        id: 3,
        roadmapStage: "Stage 3: The National Exam",
        category: "College Degree & Exams",
        categoryColor: "bg-indigo-100 text-indigo-900 border-indigo-300",
        question: "Which premier constitutional body in India conducts the prestigious Civil Services Examination every year?",
        options: [
          { text: "UPSC (Union Public Service Commission)" },
          { text: "CBSE School Board" },
          { text: "National Testing Agency (NTA)" },
          { text: "State Police Recruitment Board" },
        ],
        correctIndex: 0,
        explanation: "The Union Public Service Commission (UPSC) is India's premier central recruiting agency that conducts the nationwide Civil Services Examination for IAS, IPS, IFS, and IRS.",
        proTip: "UPSC CSE is considered one of the most respected examinations in the entire world.",
      },
      {
        id: 4,
        roadmapStage: "Stage 4: The 3 Stages of UPSC",
        category: "College Degree & Exams",
        categoryColor: "bg-purple-100 text-purple-900 border-purple-300",
        question: "How is the UPSC Civil Services Examination structured from start to finish?",
        options: [
          { text: "Only a 100-meter sprint and push-up contest" },
          { text: "A single 30-minute online multiple-choice test" },
          { text: "A lucky draw system" },
          { text: "3 Stages: Prelims (Objective MCQs) -> Mains (9 Descriptive Written Papers) -> Personality Test (Interview)" },
        ],
        correctIndex: 3,
        explanation: "UPSC CSE has 3 rigorous stages: 1) Prelims tests broad knowledge, 2) Mains tests deep analytical written expression across 9 papers, and 3) Personality Test evaluates character, leadership, and integrity.",
        proTip: "Writing clear, structured essays and answers in Mains is what secures top ranks in UPSC!",
      },
      {
        id: 5,
        roadmapStage: "Stage 5: School Subjects Foundation",
        category: "School Subjects",
        categoryColor: "bg-amber-100 text-amber-900 border-amber-300",
        question: "Which subject that you study in 8th, 9th, or 10th forms the biggest foundation for General Studies in UPSC?",
        options: [
          { text: "Trigonometric calculus only" },
          { text: "Social Studies (Indian History, Geography, Civics/Polity & Economics)" },
          { text: "Chemistry laboratory titration" },
          { text: "Computer graphic animations" },
        ],
        correctIndex: 1,
        explanation: "Social Science is the heart of General Studies! NCERT textbooks from Class 6 to 10 in History, Geography, Polity, and Economics are the primary study material read by even adult UPSC toppers.",
        proTip: "Read your school Social Science NCERT books with genuine curiosity — you are already building your UPSC foundation!",
      },
      {
        id: 6,
        roadmapStage: "Stage 6: Real Role of an IAS Officer",
        category: "Skills to Build",
        categoryColor: "bg-teal-100 text-teal-900 border-teal-300",
        question: "What are the primary duties of an IAS Officer serving as a District Collector / District Magistrate?",
        options: [
          { text: "Repairing electric meters in houses" },
          { text: "Acting in television shows and movies" },
          { text: "Supervising district administration, implementing welfare schemes (food, water, roads, schools), and managing disaster relief" },
          { text: "Selling school textbooks in town markets" },
        ],
        correctIndex: 2,
        explanation: "A District Collector is the administrative captain of an entire district (often home to 15 to 30 lakh citizens). They oversee education, healthcare, law and order, flood/drought relief, and elections.",
        proTip: "Few careers in the world give you this much direct power to improve the lives of millions of underprivileged citizens.",
      },
      {
        id: 7,
        roadmapStage: "Stage 7: Habits to Build in School",
        category: "Skills to Build",
        categoryColor: "bg-rose-100 text-rose-900 border-rose-300",
        question: "What daily habit should a high school student cultivate to prepare for future administrative leadership?",
        options: [
          { text: "Watching short video reels for 5 hours every day" },
          { text: "Arguing angrily without listening to facts" },
          { text: "Never reading anything outside school textbooks" },
          { text: "Reading newspapers daily, staying curious about current affairs, and writing opinions clearly in simple language" },
        ],
        correctIndex: 3,
        explanation: "Developing a daily habit of reading quality newspapers (like The Hindu or Indian Express) and following national and international news builds broad perspective, vocabulary, and balanced thinking.",
        proTip: "Start by reading the editorial page and national news columns for just 20 minutes each morning.",
      },
      {
        id: 8,
        roadmapStage: "Stage 8: The Famous Training Academy",
        category: "College Degree & Exams",
        categoryColor: "bg-indigo-100 text-indigo-900 border-indigo-300",
        question: "Where in India are newly appointed IAS probationers trained to become visionary administrators?",
        options: [
          { text: "LBSNAA (Lal Bahadur Shastri National Academy of Administration) in Mussoorie, Uttarakhand" },
          { text: "A cinema studio in Chennai" },
          { text: "A shopping mall in Delhi" },
          { text: "At home through social media videos" },
        ],
        correctIndex: 0,
        explanation: "LBSNAA in scenic Mussoorie is India's premier civil services academy. Officers undergo village visits, trekking, administrative law, public economics, and policy training here.",
        proTip: "Walking through the gates of LBSNAA is the lifelong dream of millions of youth across India.",
      },
      {
        id: 9,
        roadmapStage: "Stage 9: Minimum Age Requirement",
        category: "Course Duration",
        categoryColor: "bg-emerald-100 text-emerald-900 border-emerald-300",
        question: "What is the minimum age required to appear for the UPSC Civil Services Examination?",
        options: [
          { text: "16 Years (right after 10th)" },
          { text: "21 Years (after completing graduation)" },
          { text: "35 Years" },
          { text: "18 Years (right after 12th)" },
        ],
        correctIndex: 1,
        explanation: "A candidate must have attained the age of 21 years on August 1 of the examination year and completed graduation to write UPSC CSE.",
        proTip: "Starting college graduation at age 18 allows you to appear for UPSC immediately upon turning 21!",
      },
      {
        id: 10,
        roadmapStage: "Stage 10: Governance in the AI Era",
        category: "AI & Future World",
        categoryColor: "bg-purple-100 text-purple-900 border-purple-300",
        question: "How will Artificial Intelligence (AI) transform public administration and the work of IAS officers in the next decade?",
        options: [
          { text: "AI will eliminate government entirely and citizens won't have laws" },
          { text: "AI will make human decision-making illegal" },
          { text: "AI will automate routine paperwork, predict drought/flood patterns, and track ration delivery, while IAS officers make compassionate, ethical human decisions for people" },
          { text: "All government offices will be closed forever" },
        ],
        correctIndex: 2,
        explanation: "AI will make government services fast and transparent — detecting fraud in welfare schemes and predicting crop failures. However, ethical empathy, crisis leadership, and constitutional justice require human wisdom.",
        proTip: "Future civil servants who harness data and AI to solve poverty and public health will create revolutionary impact!",
      },
    ],
  },

  nurse: {
    id: "nurse",
    title: "Nurse & Healthcare Roadmap Quiz",
    subtitle: "A student-friendly quiz for 8th, 9th & 10th classes: BiPC stream, B.Sc Nursing, patient care, and global opportunities!",
    icon: "💉",
    badge: "For Classes 8th – 10th",
    gradient: "from-teal-600 via-emerald-600 to-green-700",
    accentColor: "#0D9488",
    description: "Want to follow Florence Nightingale and be the heart of hospital healing? Learn the nursing roadmap: stream selection, B.Sc Nursing vs GNM, clinical training, and huge worldwide career demand!",
    totalQuestions: 10,
    blueprintUrl: "/career-reports?career=nurse",
    cheatSheet: [
      "Class 8-10: Master Biology and Science basics, and cultivate deep kindness, patience, and attention to detail.",
      "After 10th: Choose BiPC (Biology, Physics, Chemistry) for 2 years of Intermediate / Junior College.",
      "Two Main Pathways: 1) 4-Year B.Sc Nursing degree (via state/national entrance); 2) 3-Year GNM diploma.",
      "Hands-On Training: Real hospital ward internships covering emergency, pediatric, ICU, and surgical wards.",
      "Global Demand: Indian nursing graduates have extraordinary international employment opportunities in the UK, USA, Canada, Australia, and Middle East.",
      "Future with AI: Smart sensors and AI will track patient vitals automatically, but comforting bedside care and empathetic healing are 100% human!"
    ],
    questions: [
      {
        id: 1,
        roadmapStage: "Stage 1: Stream Selection after 10th",
        category: "Choosing Branch / Stream",
        categoryColor: "bg-blue-100 text-blue-900 border-blue-300",
        question: "Which stream should you choose in Intermediate (Class 11 and 12) to pursue a professional B.Sc Nursing degree?",
        options: [
          { text: "CEC (Commerce, Economics, Civics)" },
          { text: "BiPC (Biology, Physics, Chemistry)" },
          { text: "HEC (History, Economics, Civics)" },
          { text: "Fine Arts & Classical Music" },
        ],
        correctIndex: 1,
        explanation: "BiPC (Biology, Physics, Chemistry) is required for admission into B.Sc Nursing programs across Indian universities and healthcare institutes.",
        proTip: "Biology is the most crucial subject, especially understanding human organs, cells, and nutrition.",
      },
      {
        id: 2,
        roadmapStage: "Stage 2: Primary Professional Degree",
        category: "College Degree & Exams",
        categoryColor: "bg-indigo-100 text-indigo-900 border-indigo-300",
        question: "What is the primary four-year undergraduate degree in India for practicing as a registered professional Nurse?",
        options: [
          { text: "B.Sc Nursing (Bachelor of Science in Nursing)" },
          { text: "B.Com in Banking" },
          { text: "B.Tech in Chemical Engineering" },
          { text: "Diploma in Hotel Front Desk" },
        ],
        correctIndex: 0,
        explanation: "B.Sc Nursing is a 4-year degree recognized by the Indian Nursing Council (INC) that prepares graduates for clinical nursing, critical care, and healthcare administration.",
        proTip: "B.Sc Nursing graduates qualify for exciting roles in top hospitals as well as direct opportunities abroad.",
      },
      {
        id: 3,
        roadmapStage: "Stage 3: B.Sc Nursing Course Duration",
        category: "Course Duration",
        categoryColor: "bg-emerald-100 text-emerald-900 border-emerald-300",
        question: "How many years does a full-time B.Sc Nursing degree take in Indian medical and nursing colleges?",
        options: [
          { text: "1 Year" },
          { text: "2 Years" },
          { text: "4 Years (including clinical hospital ward training)" },
          { text: "7 Years" },
        ],
        correctIndex: 2,
        explanation: "B.Sc Nursing takes 4 years. It combines medical classroom theory (anatomy, physiology, pharmacology) with extensive hands-on clinical training in hospital wards.",
        proTip: "During these 4 years, student nurses rotate through maternity, pediatric, psychiatric, and emergency departments.",
      },
      {
        id: 4,
        roadmapStage: "Stage 4: Diploma Route (GNM)",
        category: "Course Duration",
        categoryColor: "bg-purple-100 text-purple-900 border-purple-300",
        question: "What is the alternative 3-year diploma course in nursing popular after Class 12?",
        options: [
          { text: "A 2-week fitness trainer certificate" },
          { text: "Direct PhD in Surgery" },
          { text: "Commercial Driving License" },
          { text: "GNM (General Nursing and Midwifery) - 3 Years" },
        ],
        correctIndex: 3,
        explanation: "GNM (General Nursing and Midwifery) is a 3-year diploma course. After completing GNM and getting registered, students can also pursue a 2-year Post-Basic B.Sc Nursing to upgrade to a degree!",
        proTip: "GNM is a faster, cost-effective route to enter the healthcare workforce quickly.",
      },
      {
        id: 5,
        roadmapStage: "Stage 5: High School Foundation",
        category: "School Subjects",
        categoryColor: "bg-amber-100 text-amber-900 border-amber-300",
        question: "Which subject in school right now teaches you about germs, bacteria, hygiene, and human body organs?",
        options: [
          { text: "Ancient Roman History" },
          { text: "Science & Biology (Health, Hygiene, Microorganisms & Organ Systems)" },
          { text: "Geometry and Theorems" },
          { text: "Sanskrit Grammar" },
        ],
        correctIndex: 1,
        explanation: "School Science and Biology lessons on microorganisms, disease transmission, immunity, and bodily organs provide the core foundation for medical nursing.",
        proTip: "Good hand hygiene and understanding how infections spread starts right in your school science class!",
      },
      {
        id: 6,
        roadmapStage: "Stage 6: Qualities of a Compassionate Nurse",
        category: "Skills to Build",
        categoryColor: "bg-rose-100 text-rose-900 border-rose-300",
        question: "What personal qualities and skills are most essential for a nurse working in emergency and hospital wards?",
        options: [
          { text: "Being loud and impatient with sick people" },
          { text: "Panicking whenever there is an emergency" },
          { text: "Refusing to help patients who cannot walk" },
          { text: "Kindness, emotional empathy, physical stamina, patience, and sharp observation of patient vitals" },
        ],
        correctIndex: 3,
        explanation: "Nurses spend more continuous time with patients than any other medical professional! Kindness, comforting words, quick attention to changes in health, and physical stamina make nursing a noble calling.",
        proTip: "Developing gentle communication and calm patience with your family is great practice for a caring career.",
      },
      {
        id: 7,
        roadmapStage: "Stage 7: What Nurses Do Daily",
        category: "Skills to Build",
        categoryColor: "bg-teal-100 text-teal-900 border-teal-300",
        question: "What are the essential daily responsibilities of a staff nurse in a modern hospital?",
        options: [
          { text: "Administering medications, checking vitals (BP, pulse, oxygen), assisting doctors in surgeries, and comforting recovering patients" },
          { text: "Cooking meals for the entire hospital cafeteria" },
          { text: "Repairing ambulances and hospital electrical generators" },
          { text: "Selling medicines at retail prices in town" },
        ],
        correctIndex: 0,
        explanation: "Nurses are on the frontline 24/7! They administer IV lines and injections, monitor cardiac monitors, dress wounds, assist surgeons in the operation theater, and help patients recover.",
        proTip: "In many critical care units, nurses are the first to detect medical emergencies and save patients' lives.",
      },
      {
        id: 8,
        roadmapStage: "Stage 8: Worldwide Global Opportunities",
        category: "College Degree & Exams",
        categoryColor: "bg-indigo-100 text-indigo-900 border-indigo-300",
        question: "Why is Nursing considered one of the highest-demand careers internationally for Indian graduates?",
        options: [
          { text: "Hospitals in foreign countries are completely closing down" },
          { text: "Indian nurses are world-renowned for their high clinical competence and care, with massive demand and high salaries in the UK, USA, Canada, Australia, and Gulf nations" },
          { text: "Foreign countries do not allow doctors or nurses" },
          { text: "Nursing is only allowed in one city in India" },
        ],
        correctIndex: 1,
        explanation: "There is an enormous global shortage of healthcare workers. Passing language tests (IELTS/OET) and licensing exams (like NCLEX-RN for the USA) opens doors to high-paying international nursing careers.",
        proTip: "Learning strong English communication in school gives you a major advantage for global nursing exams!",
      },
      {
        id: 9,
        roadmapStage: "Stage 9: Higher Specialisations",
        category: "College Degree & Exams",
        categoryColor: "bg-purple-100 text-purple-900 border-purple-300",
        question: "After completing B.Sc Nursing, what postgraduate degree allows nurses to become specialists, nursing superintendents, or professors?",
        options: [
          { text: "LLB Degree" },
          { text: "B.Com" },
          { text: "M.Sc Nursing (Master of Science in Nursing) - 2 Years" },
          { text: "Diploma in Acting" },
        ],
        correctIndex: 2,
        explanation: "M.Sc Nursing (2 years) allows specialization in Cardiology, Pediatrics, Obstetrics, Psychiatry, or Community Health, leading to leadership and teaching roles.",
        proTip: "Nursing superintendents and nurse researchers command tremendous respect in healthcare administration.",
      },
      {
        id: 10,
        roadmapStage: "Stage 10: Future of Nursing in the AI Era",
        category: "AI & Future World",
        categoryColor: "bg-purple-100 text-purple-900 border-purple-300",
        question: "With smart patient monitors and AI alert systems in hospitals, what role will nurses play in the future?",
        options: [
          { text: "Robots will provide all emotional comfort and human nurses will disappear" },
          { text: "Hospitals will no longer have patients" },
          { text: "AI will track vitals and alert sudden changes in seconds, while nurses provide the compassionate human care, emotional comfort, and bedside healing that no machine can replicate!" },
          { text: "Nurses will stop talking to patients" },
        ],
        correctIndex: 2,
        explanation: "AI can monitor heart rates and flag drop in oxygen, but it can never hold a child's hand during an injection or comfort an anxious mother. Nursing remains one of the most AI-proof and compassionate professions on Earth.",
        proTip: "Healthcare will always be powered by human hearts and healing hands.",
      },
    ],
  },

  lawyer: {
    id: "lawyer",
    title: "Lawyer & Legal Roadmap Quiz",
    subtitle: "A student-friendly quiz for 8th, 9th & 10th classes: CLAT entrance, 5-year LL.B, courtroom debate, and fighting for justice!",
    icon: "⚖️",
    badge: "For Classes 8th – 10th",
    gradient: "from-amber-600 via-stone-700 to-stone-900",
    accentColor: "#78350F",
    description: "Love debating, logical arguments, and fighting for fairness and justice? Uncover the legal roadmap: choosing streams after 10th, cracking CLAT, studying in National Law Universities, and courtroom advocacy!",
    totalQuestions: 10,
    blueprintUrl: "/career-reports?career=lawyer",
    cheatSheet: [
      "Class 8-10: Participate in school debates, read books, improve English comprehension, and understand the Indian Constitution.",
      "After 10th: Any stream! (Arts/HEC, Commerce/CEC, or Science/MPC) — all streams can appear for law entrance exams.",
      "Two Main Degree Paths: 1) 5-Year Integrated BA-LLB / BBA-LLB directly after 12th; 2) 3-Year LLB after regular graduation.",
      "Premier Entrance Exam: CLAT (Common Law Admission Test) for India's 25+ National Law Universities (NLUs).",
      "License to Practice: Enrolling with a State Bar Council and clearing the All India Bar Examination (AIBE).",
      "Future with AI: AI will speed up contract drafting and legal research, but courtroom persuasion, judge cross-examination, and justice remain purely human!"
    ],
    questions: [
      {
        id: 1,
        roadmapStage: "Stage 1: Stream Selection after 10th",
        category: "Choosing Branch / Stream",
        categoryColor: "bg-blue-100 text-blue-900 border-blue-300",
        question: "Which stream should you pick in Intermediate (Class 11 & 12) if you want to become a Lawyer or Advocate in India?",
        options: [
          { text: "Only Science MPC is allowed" },
          { text: "Only Commerce is allowed" },
          { text: "Any stream you want! (Arts/HEC, Commerce/CEC, or Science/MPC) — all students are 100% eligible for law!" },
          { text: "You must take medical BiPC only" },
        ],
        correctIndex: 2,
        explanation: "Law has zero stream restrictions! Whether you studied Arts, Commerce, or Science in 10+2, you are eligible to appear for CLAT and enter top law universities.",
        proTip: "Arts and Humanities (History, Political Science, Economics) give you great contextual background for constitutional law!",
      },
      {
        id: 2,
        roadmapStage: "Stage 2: 5-Year Integrated Law Degree",
        category: "College Degree & Exams",
        categoryColor: "bg-indigo-100 text-indigo-900 border-indigo-300",
        question: "What is the popular integrated 5-year undergraduate law course that students join directly after passing Class 12?",
        options: [
          { text: "B.Tech Computer Science" },
          { text: "B.A. LL.B (Hons) or B.B.A. LL.B (Hons) - 5 Years" },
          { text: "MBBS Medical Degree" },
          { text: "B.Sc Agriculture" },
        ],
        correctIndex: 1,
        explanation: "The 5-year integrated B.A. LL.B / B.B.A. LL.B program allows high school graduates to earn both a Bachelor of Arts/Business and a Bachelor of Law degree in a combined 5-year course.",
        proTip: "Integrated law saves you one full year compared to doing a 3-year graduation followed by a 3-year LLB!",
      },
      {
        id: 3,
        roadmapStage: "Stage 3: The Premier Law Entrance Exam",
        category: "College Degree & Exams",
        categoryColor: "bg-purple-100 text-purple-900 border-purple-300",
        question: "Which national entrance examination is written after Class 12 to enter India's top National Law Universities (NLUs)?",
        options: [
          { text: "CLAT (Common Law Admission Test)" },
          { text: "JEE Main Exam" },
          { text: "NEET Exam" },
          { text: "GATE Examination" },
        ],
        correctIndex: 0,
        explanation: "CLAT (Common Law Admission Test) is conducted annually for admission into 25+ prestigious National Law Universities (like NLSIU Bengaluru, NALSAR Hyderabad, and WBNUJS Kolkata).",
        proTip: "CLAT tests reading comprehension, current affairs, logical reasoning, and legal awareness — no complex math required!",
      },
      {
        id: 4,
        roadmapStage: "Stage 4: The 3-Year Route after Graduation",
        category: "Course Duration",
        categoryColor: "bg-emerald-100 text-emerald-900 border-emerald-300",
        question: "If you first complete a regular 3-year graduation (like B.A., B.Sc., or B.Com), how many years does a standard LL.B course take afterwards?",
        options: [
          { text: "1 Year" },
          { text: "10 Years" },
          { text: "6 Months" },
          { text: "3 Years (6 Semesters)" },
        ],
        correctIndex: 3,
        explanation: "Graduates in any field can write exams like DU LLB, State Law CET, or university law tests to enter a 3-year LL.B program to become full lawyers.",
        proTip: "Even engineers, doctors, and accountants often pursue 3-year LL.B to become corporate and patent lawyers!",
      },
      {
        id: 5,
        roadmapStage: "Stage 5: High School Foundation",
        category: "School Subjects",
        categoryColor: "bg-amber-100 text-amber-900 border-amber-300",
        question: "Which subjects in school right now in 8th, 9th, and 10th help you build the sharpest foundation for law?",
        options: [
          { text: "Algebraic equations only" },
          { text: "English (Reading Comprehension & Vocabulary) and Social Studies (Civics & Indian Constitution)" },
          { text: "Botany and Plant Anatomy" },
          { text: "Handicrafts and Wood Carving" },
        ],
        correctIndex: 1,
        explanation: "Lawyers work with words, texts, and arguments! Strong English reading speed, clear comprehension, and understanding the Fundamental Rights in Civics give you an enormous head start.",
        proTip: "Read diverse books, newspapers, and school debate topics to broaden your worldview.",
      },
      {
        id: 6,
        roadmapStage: "Stage 6: License to Practice (AIBE)",
        category: "College Degree & Exams",
        categoryColor: "bg-teal-100 text-teal-900 border-teal-300",
        question: "After graduating with an LL.B degree, what official exam must you pass to practice in courts across India?",
        options: [
          { text: "A physical fitness test" },
          { text: "A school board exam" },
          { text: "All India Bar Examination (AIBE) conducted by the Bar Council of India" },
          { text: "A typing speed test" },
        ],
        correctIndex: 2,
        explanation: "Law graduates enroll with their State Bar Council and must clear the All India Bar Examination (AIBE) within 2 years to receive their Certificate of Practice to argue cases before judges.",
        proTip: "Once you pass AIBE, you can wear the black coat and represent clients in courts of law!",
      },
      {
        id: 7,
        roadmapStage: "Stage 7: High School Skills to Practice",
        category: "Skills to Build",
        categoryColor: "bg-rose-100 text-rose-900 border-rose-300",
        question: "What activity in school gives you the best hands-on practice for becoming a skilled courtroom advocate?",
        options: [
          { text: "Sitting silently without ever speaking in class" },
          { text: "Copying homework from others without understanding" },
          { text: "Believing everything you read on social media without proof" },
          { text: "School debates, elocution competitions, model parliaments (MUN), and asking 'why' with logical evidence" },
        ],
        correctIndex: 3,
        explanation: "Debating teaches you how to structure an argument, listen to opposing views, stay calm under counter-questions, and persuade an audience using evidence and facts.",
        proTip: "Join your school debate team or literary club — it builds extraordinary self-confidence!",
      },
      {
        id: 8,
        roadmapStage: "Stage 8: Exciting Law Specialisations",
        category: "College Degree & Exams",
        categoryColor: "bg-indigo-100 text-indigo-900 border-indigo-300",
        question: "Law is not just about criminal courts! Which of the following are high-paying modern legal careers?",
        options: [
          { text: "Corporate Law (Companies & Mergers), Cyber Law, Intellectual Property (Copyrights/Patents), and Human Rights Law" },
          { text: "Only arguing parking ticket fines" },
          { text: "Selling law books at bus stations" },
          { text: "There are zero specialisations in law" },
        ],
        correctIndex: 0,
        explanation: "Modern law includes corporate lawyers advising Google and Apple, cyber lawyers protecting online privacy, environmental lawyers fighting pollution, and international human rights advocates.",
        proTip: "Corporate and Cyber lawyers are among the highest-paid professionals in modern business.",
      },
      {
        id: 9,
        roadmapStage: "Stage 9: What Lawyers Do Every Day",
        category: "Skills to Build",
        categoryColor: "bg-amber-100 text-amber-900 border-amber-300",
        question: "What does the day-to-day work of a dedicated lawyer involve?",
        options: [
          { text: "Only shouting dramatically like in movies" },
          { text: "Researching legal precedents, drafting agreements, advising clients, negotiating settlements, and presenting logical arguments in court" },
          { text: "Typing random letters in MS Paint" },
          { text: "Fixing courtroom air conditioners" },
        ],
        correctIndex: 1,
        explanation: "Real law is about thorough research, drafting clear contracts, understanding client problems, negotiating peaceful solutions, and presenting well-researched arguments before judges.",
        proTip: "90% of a lawyer's success comes from preparation and deep study before ever stepping into the courtroom!",
      },
      {
        id: 10,
        roadmapStage: "Stage 10: The Legal Profession in the AI Era",
        category: "AI & Future World",
        categoryColor: "bg-purple-100 text-purple-900 border-purple-300",
        question: "How will Artificial Intelligence (AI) transform law by the time you graduate from law school?",
        options: [
          { text: "Robots will replace all human judges and courts will be closed" },
          { text: "Laws will stop existing in all countries" },
          { text: "AI will summarize long case files and find legal precedents in seconds, while lawyers focus on strategic thinking, cross-examination, client counseling, and ethical justice!" },
          { text: "Lawyers will no longer need to study law" },
        ],
        correctIndex: 2,
        explanation: "AI will speed up legal research and review hundreds of contract pages in seconds. But justice, empathy, ethical judgment, moral principles, and persuasive courtroom advocacy will always remain uniquely human.",
        proTip: "A lawyer who masters legal reasoning and uses AI tools to research 10x faster will be an unstoppable champion of justice!",
      },
    ],
  },

  bank: {
    id: "bank",
    title: "Bank PO / Banking Officer Roadmap Quiz",
    subtitle: "A student-friendly quiz for 8th, 9th & 10th classes: degrees, IBPS/SBI PO exams, loan approvals, and finance leadership!",
    icon: "🏦",
    badge: "For Classes 8th – 10th",
    gradient: "from-blue-700 via-sky-800 to-indigo-900",
    accentColor: "#1D4ED8",
    description: "Dream of managing bank branches, approving agriculture & business loans, and driving economic growth? Explore the banking roadmap: stream choices, any graduation degree, cracking IBPS/SBI PO, and smart fintech skills!",
    totalQuestions: 10,
    blueprintUrl: "/career-reports?career=bank",
    cheatSheet: [
      "Class 8-10: Master speed arithmetic (percentages, ratios, interest) and build fast English reading skills.",
      "After 10th: Any stream! (Commerce/CEC, MEC, MPC, or Arts) — all are 100% eligible for banking exams.",
      "College Degree: Any recognized 3-year or 4-year Bachelor's degree (B.Com, B.Sc, B.A., BBA, or B.Tech).",
      "Major National Exams: IBPS PO, SBI PO, and RBI Grade B conducted annually.",
      "Everyday Mission: Assessing business and crop loans, financial audits, managing customer deposits, and fraud monitoring.",
      "Future with AI: AI handles routine KYC & cash balances, while Bank Officers evaluate human character, credit risk, and financial strategy!"
    ],
    questions: [
      {
        id: 1,
        roadmapStage: "Stage 1: Intermediate Stream Selection",
        category: "Choosing Branch / Stream",
        categoryColor: "bg-blue-100 text-blue-900 border-blue-300",
        question: "Which stream should you choose in Intermediate (10+2) if you aim to become a Bank Probationary Officer (PO)?",
        options: [
          { text: "Only Commerce CEC is legally allowed" },
          { text: "Any stream! (Commerce, Science MPC/BiPC, or Arts) — banking exams are open to all streams!" },
          { text: "Only computer science students can apply" },
          { text: "You must skip college after 10th" },
        ],
        correctIndex: 1,
        explanation: "National banking exams have zero stream restrictions! Whether you study Commerce, Mathematics, Science, or Humanities in 11th-12th, you are 100% eligible to become a Bank PO.",
        proTip: "Taking Commerce (CEC/MEC) gives an early familiarity with accountancy and economics, while MPC builds lightning-fast math calculation speed!",
      },
      {
        id: 2,
        roadmapStage: "Stage 2: Degree Requirement",
        category: "Course Duration",
        categoryColor: "bg-emerald-100 text-emerald-900 border-emerald-300",
        question: "What minimum educational degree is required to write national Bank PO recruitment examinations in India?",
        options: [
          { text: "A 10-year Ph.D. research doctorate" },
          { text: "Only a 10th Class SSC board pass" },
          { text: "Any recognized Bachelor's Degree (like B.Com, B.Sc, B.A., BBA, or B.Tech) from a recognized university" },
          { text: "An international banking certificate from Switzerland only" },
        ],
        correctIndex: 2,
        explanation: "To appear for IBPS PO or SBI PO, candidates must hold any recognized undergraduate bachelor's degree. Students in their final semester can also register.",
        proTip: "Focus on maintaining at least 60% marks in your graduation so you qualify for all premier bank exams including RBI!",
      },
      {
        id: 3,
        roadmapStage: "Stage 3: Premier Banking Recruitment Exams",
        category: "College Degree & Exams",
        categoryColor: "bg-indigo-100 text-indigo-900 border-indigo-300",
        question: "Which premier entrance examinations are conducted across India to recruit Probationary Officers for public sector banks like SBI, PNB, and Canara Bank?",
        options: [
          { text: "IBPS PO (Institute of Banking Personnel Selection) & SBI PO" },
          { text: "NEET Medical Entrance" },
          { text: "JEE Advanced Exam" },
          { text: "GATE Engineering Exam" },
        ],
        correctIndex: 0,
        explanation: "IBPS conducts the nationwide common entrance test for 11 public sector banks, while State Bank of India conducts its prestigious SBI PO examination every year.",
        proTip: "Both exams evaluate Quantitative Aptitude (Maths), Reasoning Ability, English Comprehension, and General Banking Awareness.",
      },
      {
        id: 4,
        roadmapStage: "Stage 4: School Foundations to Master",
        category: "School Subjects",
        categoryColor: "bg-amber-100 text-amber-900 border-amber-300",
        question: "Which subject you study in 8th, 9th, and 10th is the MOST crucial for cracking the numerical aptitude section in bank exams?",
        options: [
          { text: "Drawing watercolours" },
          { text: "Memorizing geography mountain heights only" },
          { text: "Ancient Greek mythology" },
          { text: "School Mathematics (Percentages, Ratios, Profit & Loss, Simple/Compound Interest, and Averages)" },
        ],
        correctIndex: 3,
        explanation: "Bank exam quantitative sections test arithmetic concepts from 6th to 10th standard! Speed calculations in percentages, ratios, fractions, and simple interest are the bedrock of success.",
        proTip: "Practice mental math tables up to 25 and square numbers up to 30 — it saves valuable seconds during exams!",
      },
      {
        id: 5,
        roadmapStage: "Stage 5: Understanding What a PO Actually Does",
        category: "Skills to Build",
        categoryColor: "bg-teal-100 text-teal-900 border-teal-300",
        question: "What are the core daily responsibilities of a Bank Probationary Officer in a bank branch?",
        options: [
          { text: "Cleaning the bank floors and locking the front gate" },
          { text: "Evaluating business, home, and crop loan applications, auditing accounts, customer relationship management, and supervising transactions" },
          { text: "Selling laptops on the street outside the bank" },
          { text: "Printing currency notes on printing presses" },
        ],
        correctIndex: 1,
        explanation: "A Bank PO is a junior executive and future Branch Manager. They assess creditworthiness for loans, manage financial deposits, ensure RBI compliance, and prevent fraudulent transactions.",
        proTip: "Bank officers are key financial advisors who help small farmers, entrepreneurs, and families achieve their dreams through loans.",
      },
      {
        id: 6,
        roadmapStage: "Stage 6: Probation Period Duration",
        category: "Course Duration",
        categoryColor: "bg-purple-100 text-purple-900 border-purple-300",
        question: "After clearing the Bank PO exam and interview, how long does the mandatory probation and training period usually last?",
        options: [
          { text: "1 Week" },
          { text: "7 Years" },
          { text: "1 to 2 Years (with classroom academy training and rotational branch postings)" },
          { text: "No training is given, you must manage alone on day one" },
        ],
        correctIndex: 2,
        explanation: "New recruits undergo 1 to 2 years of probation. During this time, they train at bank leadership academies and rotate through foreign exchange, rural branches, and credit processing centers.",
        proTip: "Upon successfully completing probation, officers are confirmed as Assistant Managers with exciting promotion prospects!",
      },
      {
        id: 7,
        roadmapStage: "Stage 7: Skills to Build in High School",
        category: "Skills to Build",
        categoryColor: "bg-rose-100 text-rose-900 border-rose-300",
        question: "What high school habit gives students a huge edge in the English and General Awareness sections of banking exams?",
        options: [
          { text: "Reading newspapers (financial & national news) daily and practicing reading comprehension passages" },
          { text: "Ignoring English and only reading comic strips" },
          { text: "Watching movies without subtitles for 6 hours" },
          { text: "Avoiding all group activities and teamwork" },
        ],
        correctIndex: 0,
        explanation: "Reading editorial articles from newspapers builds fast reading comprehension speed and general financial vocabulary (like inflation, repo rate, and digital payments).",
        proTip: "Try reading one editorial paragraph daily and summarizing its main idea in 2 simple sentences!",
      },
      {
        id: 8,
        roadmapStage: "Stage 8: Career Growth & Leadership",
        category: "College Degree & Exams",
        categoryColor: "bg-indigo-100 text-indigo-900 border-indigo-300",
        question: "How high can a talented Bank PO rise within the banking hierarchy over a 20–25 year career?",
        options: [
          { text: "They remain at the entrance desk forever" },
          { text: "They can rise to Branch Manager, Chief Manager, General Manager, and even Chairman / Managing Director of the bank!" },
          { text: "Banking jobs have zero promotions by law" },
          { text: "They are transferred to the fire department" },
        ],
        correctIndex: 1,
        explanation: "Public sector banks offer fast-track merit promotions through internal examinations (JAIIB & CAIIB). Many bank Chairpersons and MDs started their careers as young Probationary Officers!",
        proTip: "Banking provides incredible job stability, respectable social status, and steady career advancement.",
      },
      {
        id: 9,
        roadmapStage: "Stage 9: Minimum Age Limit",
        category: "Course Duration",
        categoryColor: "bg-emerald-100 text-emerald-900 border-emerald-300",
        question: "What is the minimum age required to register for the IBPS PO and SBI PO competitive exams in India?",
        options: [
          { text: "15 Years (after Class 10)" },
          { text: "21 Years (after completing undergraduate graduation)" },
          { text: "35 Years" },
          { text: "18 Years (after Class 12)" },
        ],
        correctIndex: 1,
        explanation: "Candidates must be at least 21 years old (and typically under 30 years for general category, with age relaxations for reserved categories) and hold a college degree.",
        proTip: "Finishing your graduation at age 21 allows you to crack the exam and become an officer at an impressively young age!",
      },
      {
        id: 10,
        roadmapStage: "Stage 10: Banking in the AI & UPI Era",
        category: "AI & Future World",
        categoryColor: "bg-purple-100 text-purple-900 border-purple-300",
        question: "With UPI digital payments, mobile banking apps, and AI chatbots handling routine queries, how will Bank Officers thrive in the future?",
        options: [
          { text: "Banks will shut down completely and people will bury gold in their yards" },
          { text: "Only robots will decide who gets a home loan without any human review" },
          { text: "AI automates routine passbook printing, while human officers specialize in high-value business financing, cyber-fraud detection, and personalized customer trust!" },
          { text: "Bank officers will no longer need computers" },
        ],
        correctIndex: 2,
        explanation: "AI chatbots handle routine account balance queries and automated KYC. However, evaluating business character, sanctioning multi-crore factory loans, and resolving complex financial disputes always require human empathy, judgment, and ethics.",
        proTip: "Future bank officers who understand financial data, fintech apps, and customer psychology will be the most sought-after leaders in Indian finance!",
      },
    ],
  },

  agri: {
    id: "agri",
    title: "Agricultural Officer Roadmap Quiz",
    subtitle: "A student-friendly quiz for 8th, 9th & 10th classes: BiPC stream, B.Sc Agriculture (4 yrs), ICAR exams, and modern smart farming!",
    icon: "🌾",
    badge: "For Classes 8th – 10th",
    gradient: "from-emerald-700 via-green-700 to-lime-800",
    accentColor: "#15803D",
    description: "Want to transform Indian farming with biotechnology, drones, and soil science? Learn the exact roadmap: BiPC stream after 10th, 4-year B.Sc Agriculture, ICAR/EAPCET exams, and empowering rural farmers!",
    totalQuestions: 10,
    blueprintUrl: "/career-reports?career=agri",
    cheatSheet: [
      "Class 8-10: Love biology, plants, soil science, environmental care, and practical outdoor curiosity.",
      "After 10th: Select BiPC (Biology, Physics, Chemistry) in Intermediate / Class 11-12.",
      "Entrance Exams: ICAR CUET-UG (All-India) or State Agricultural CETs (like AP/TS EAPCET Agriculture).",
      "Professional Degree: 4-Year B.Sc (Hons) Agriculture from an ICAR-accredited university.",
      "Top Job Profiles: Government Agricultural Officer (AO / ADA via State PSC), Bank Agricultural Field Officer (AFO via IBPS), and Agri-Biotech Scientist.",
      "Future with AI: Agricultural Officers use AI crop disease scanners, satellite NDVI maps, and drones to double farm productivity while guiding farmers directly!"
    ],
    questions: [
      {
        id: 1,
        roadmapStage: "Stage 1: Intermediate Stream Selection",
        category: "Choosing Branch / Stream",
        categoryColor: "bg-blue-100 text-blue-900 border-blue-300",
        question: "When you finish Class 10, which Intermediate (10+2) stream is the primary qualification for B.Sc Agriculture in India?",
        options: [
          { text: "BiPC (Biology, Physics, Chemistry)" },
          { text: "Commerce CEC only" },
          { text: "Arts and Ancient History" },
          { text: "Automobile mechanic certificate" },
        ],
        correctIndex: 0,
        explanation: "BiPC (Biology, Physics, Chemistry) is the primary stream for agricultural science degree admissions. In some states, MPC students are also eligible for Agricultural Engineering and B.Sc Agri.",
        proTip: "Biology and Plant Science (Botany) give you the strongest foundational advantage for your entrance exams!",
      },
      {
        id: 2,
        roadmapStage: "Stage 2: Degree Duration",
        category: "Course Duration",
        categoryColor: "bg-emerald-100 text-emerald-900 border-emerald-300",
        question: "How many years does a professional B.Sc (Hons) Agriculture degree take in Indian agricultural universities?",
        options: [
          { text: "1 Year" },
          { text: "2 Years" },
          { text: "4 Years (8 Semesters, including rural village stay & farm internship)" },
          { text: "7 Years" },
        ],
        correctIndex: 2,
        explanation: "B.Sc (Hons) Agriculture is a rigorous 4-year professional program (8 semesters). The final year includes the famous RAWE (Rural Agricultural Work Experience) where students live in villages guiding farmers!",
        proTip: "The RAWE program gives you real-life experience solving real soil, pest, and crop challenges in farming communities.",
      },
      {
        id: 3,
        roadmapStage: "Stage 3: National & State Entrance Exams",
        category: "College Degree & Exams",
        categoryColor: "bg-indigo-100 text-indigo-900 border-indigo-300",
        question: "Which major entrance examinations in India lead to admission in top ICAR agricultural colleges and State Agricultural Universities?",
        options: [
          { text: "CLAT Law Exam" },
          { text: "ICAR AIEEA (via CUET-UG) and State EAPCET / CET Agriculture streams" },
          { text: "Chartered Accountancy Final" },
          { text: "Police physical running test" },
        ],
        correctIndex: 1,
        explanation: "Admission to premier agricultural universities (like IARI, ANGRAU, PJTSAU, TNAU, and UAS) is conducted through ICAR CUET-UG nationally and State CETs like EAPCET.",
        proTip: "Ensure the college you join is accredited by ICAR (Indian Council of Agricultural Research) for government job eligibility!",
      },
      {
        id: 4,
        roadmapStage: "Stage 4: School Science Foundation",
        category: "School Subjects",
        categoryColor: "bg-amber-100 text-amber-900 border-amber-300",
        question: "Which subject you study in 8th, 9th, and 10th directly introduces plant germination, photosynthesis, soil nutrients, and crop pests?",
        options: [
          { text: "European Medieval History" },
          { text: "Computer typing speed test" },
          { text: "Science & Biology (Botany, Photosynthesis, Soil Layers & Environmental Science)" },
          { text: "Musical instruments theory" },
        ],
        correctIndex: 2,
        explanation: "High school Biology lessons on plant tissues, photosynthesis, soil erosion, and organic manure form the core starting blocks for Agronomy, Soil Chemistry, and Plant Pathology.",
        proTip: "Take a closer look at local crops and plants around your neighborhood — noticing leaf colors and insects builds observational scientific acumen!",
      },
      {
        id: 5,
        roadmapStage: "Stage 5: Core Responsibilities of an AO",
        category: "Skills to Build",
        categoryColor: "bg-teal-100 text-teal-900 border-teal-300",
        question: "What does a Government Agricultural Officer (AO) or Mandal Agricultural Officer actually do on the job?",
        options: [
          { text: "Guides farmers on quality seeds, pest control, soil health testing, organic farming, and distributes government crop subsidies" },
          { text: "Repairs highway streetlights" },
          { text: "Conducts court trials for criminal cases" },
          { text: "Sells diesel at highway petrol pumps" },
        ],
        correctIndex: 0,
        explanation: "Agricultural Officers are the vital scientific bridge between research labs and farmers. They test soil fertility, diagnose crop fungal/insect attacks, advise on drip irrigation, and manage crop insurance.",
        proTip: "In India, an Agricultural Officer is one of the most respected figures in rural communities, directly enhancing farmers' livelihoods!",
      },
      {
        id: 6,
        roadmapStage: "Stage 6: The Banking Field Officer Route (AFO)",
        category: "College Degree & Exams",
        categoryColor: "bg-purple-100 text-purple-900 border-purple-300",
        question: "Apart from state government departments, which major banking exam recruits Agriculture graduates as Specialized Officers every year?",
        options: [
          { text: "IBPS Specialist Officer (Agriculture Field Officer - AFO) in Public Sector Banks" },
          { text: "Indian Navy Sailor Test" },
          { text: "Commercial Aircraft Pilot Test" },
          { text: "Cinema Director Audition" },
        ],
        correctIndex: 0,
        explanation: "IBPS conducts a dedicated Specialist Officer exam for B.Sc Agriculture graduates to appoint them as Agriculture Field Officers (AFOs) in banks to manage farmer credit, Kisan Credit Cards, and tractors loans.",
        proTip: "IBPS AFO is one of the quickest career pathways for agri graduates, offering officer-scale pay straight out of college!",
      },
      {
        id: 7,
        roadmapStage: "Stage 7: Modern Skills to Cultivate in School",
        category: "Skills to Build",
        categoryColor: "bg-rose-100 text-rose-900 border-rose-300",
        question: "What mindset and practical skills make an outstanding modern agricultural scientist or officer?",
        options: [
          { text: "Disliking the outdoors and refusing to speak with rural people" },
          { text: "Only playing indoor video games without knowing how food is grown" },
          { text: "Curiosity about nature, passion for food security, empathy for farmers, and interest in technology (like drones & smart irrigation)" },
          { text: "Ignoring environmental pollution and wasting fresh water" },
        ],
        correctIndex: 2,
        explanation: "Agriculture combines outdoor field passion with cutting-edge tech. Loving nature, understanding how food reaches our plates, and communicating respectfully with farmers make a great agri professional.",
        proTip: "Try growing a small vegetable plant in a pot at home — tracking its water, sunlight, and growth is hands-on agronomy!",
      },
      {
        id: 8,
        roadmapStage: "Stage 8: Higher Studies & Research Pathways",
        category: "College Degree & Exams",
        categoryColor: "bg-indigo-100 text-indigo-900 border-indigo-300",
        question: "If an agriculture graduate wants to become a Scientist developing high-yield disease-resistant seeds, what degree comes next?",
        options: [
          { text: "M.Sc (Agri) & Ph.D. via ICAR-JRF / Agricultural Research Service (ARS) Exam" },
          { text: "Chartered Accountant Articleship" },
          { text: "Hotel cooking diploma" },
          { text: "B.Ed School teaching certificate" },
        ],
        correctIndex: 0,
        explanation: "After B.Sc Agriculture, students write ICAR-JRF to pursue 2-year M.Sc and 3-year Ph.D. in Plant Genetics, Seed Science, or Agronomy, qualifying for Scientist roles in ICAR research institutes.",
        proTip: "Indian agricultural scientists developed the Green Revolution that made India self-sufficient in food grain production!",
      },
      {
        id: 9,
        roadmapStage: "Stage 9: Diploma Route after Class 10",
        category: "Course Duration",
        categoryColor: "bg-emerald-100 text-emerald-900 border-emerald-300",
        question: "Is there an option directly after Class 10 to study agriculture without 11th and 12th?",
        options: [
          { text: "No, agriculture is only taught to people over 40 years old" },
          { text: "Yes, 2-Year Diploma in Agriculture (via AGRI-POLYCET) offered by state agricultural universities" },
          { text: "Yes, you can directly become a District Collector" },
          { text: "Only through foreign correspondence" },
        ],
        correctIndex: 1,
        explanation: "State agricultural universities conduct AGRI-POLYCET after Class 10 for 2-year Diplomas in Agriculture, Seed Technology, and Organic Farming, enabling direct Village Agricultural Assistant (VAA) jobs!",
        proTip: "Agri-Diploma holders can also write state lateral entry exams to enter B.Sc Agriculture directly into the 2nd year!",
      },
      {
        id: 10,
        roadmapStage: "Stage 10: Future of Farming with AI & Tech",
        category: "AI & Future World",
        categoryColor: "bg-purple-100 text-purple-900 border-purple-300",
        question: "How are Artificial Intelligence, satellite imagery, and drones reshaping an Agricultural Officer's work in the 21st century?",
        options: [
          { text: "Farmers will stop planting seeds completely" },
          { text: "Officers will use AI smartphone apps to diagnose leaf diseases in 3 seconds, guide drone fertilizer spraying, and predict droughts from satellite maps!" },
          { text: "Plants will be manufactured inside plastic factories without soil" },
          { text: "Tractors will be banned worldwide" },
        ],
        correctIndex: 1,
        explanation: "Smart agriculture uses AI computer vision to spot plant fungi from phone photos, satellites to measure soil moisture, and drones to spray micro-nutrients precisely. Human officers translate this data into trusted guidance for farmers!",
        proTip: "Agri-Tech is one of the fastest-growing startup sectors in India — merging agriculture with technology is a superpower career!",
      },
    ],
  },

  ca: {
    id: "ca",
    title: "Chartered Accountant (CA) Roadmap Quiz",
    subtitle: "A student-friendly quiz for 8th, 9th & 10th classes: ICAI exams, Foundation -> Inter -> Final, 2-year articleship, and financial mastery!",
    icon: "📊",
    badge: "For Classes 8th – 10th",
    gradient: "from-amber-600 via-yellow-700 to-stone-900",
    accentColor: "#D97706",
    description: "Want to audit India's largest companies, advise CEOs on corporate taxes, and become a trusted financial doctor? Explore the ICAI roadmap: stream choices, cracking CA Foundation, the 2-year practical articleship, and high-income financial leadership!",
    totalQuestions: 10,
    blueprintUrl: "/career-reports?career=ca",
    cheatSheet: [
      "Class 8-10: Fall in love with numbers, mental math accuracy, analytical logic, and ethical honesty.",
      "After 10th: Commerce with Maths (MEC) or Commerce (CEC) is recommended; Science (MPC) students can also register.",
      "The Governing Body: The Institute of Chartered Accountants of India (ICAI) — India's premier statutory accounting body.",
      "The 3-Tier Exam Pathway: 1) CA Foundation (after 12th); 2) CA Intermediate (8 subjects); 3) CA Final.",
      "Mandatory Practical Training: 2 Years of Articleship auditing real multinational companies, banks, and businesses.",
      "Future with AI: AI automates routine bookkeeping and ledger entries, while Chartered Accountants lead complex tax strategy, financial forensics, mergers, and corporate ethics!"
    ],
    questions: [
      {
        id: 1,
        roadmapStage: "Stage 1: Intermediate Stream Selection",
        category: "Choosing Branch / Stream",
        categoryColor: "bg-blue-100 text-blue-900 border-blue-300",
        question: "Which stream in Intermediate (Class 11 & 12) is most popular and directly relevant for pursuing Chartered Accountancy (CA)?",
        options: [
          { text: "Commerce with Maths (MEC) or Commerce (CEC) — though Science (MPC) students are also eligible!" },
          { text: "Only Biology BiPC is allowed" },
          { text: "Only Sanskrit literature stream" },
          { text: "A certificate in motorcycle repair" },
        ],
        correctIndex: 0,
        explanation: "Commerce streams (MEC / CEC) teach Accountancy, Economics, Business Studies, and Commercial Math, giving students a massive head start. However, Science and Arts students are also 100% eligible to register for CA!",
        proTip: "Accountancy in 11th and 12th introduces double-entry bookkeeping — master the debit and credit rules early!",
      },
      {
        id: 2,
        roadmapStage: "Stage 2: The Regulating Body",
        category: "College Degree & Exams",
        categoryColor: "bg-indigo-100 text-indigo-900 border-indigo-300",
        question: "Which prestigious statutory institution in India conducts all Chartered Accountancy examinations and awards the CA qualification?",
        options: [
          { text: "National Testing Agency (NTA)" },
          { text: "ICAI (The Institute of Chartered Accountants of India)" },
          { text: "State Police Academy" },
          { text: "Reserve Bank of India front office" },
        ],
        correctIndex: 1,
        explanation: "ICAI is the national statutory accounting body established by the Parliament of India in 1949. It is the second-largest professional accounting body in the entire world!",
        proTip: "Passing CA exams and registering with ICAI entitles you to proudly use the letters 'CA' before your name.",
      },
      {
        id: 3,
        roadmapStage: "Stage 3: The 3 Exam Levels of CA",
        category: "College Degree & Exams",
        categoryColor: "bg-purple-100 text-purple-900 border-purple-300",
        question: "What are the three official progressive stages to become a qualified Chartered Accountant in India?",
        options: [
          { text: "Only a 100-meter sprint and pull-up test" },
          { text: "A single 1-hour online quiz on a smartphone" },
          { text: "CA Foundation -> CA Intermediate -> CA Final (along with practical Articleship)" },
          { text: "Submitting school report cards to a bank" },
        ],
        correctIndex: 2,
        explanation: "The ICAI roadmap consists of CA Foundation (entry level after 12th), CA Intermediate (8 detailed subjects), and CA Final (advanced corporate reporting, auditing, and international taxation).",
        proTip: "You can register for CA Foundation while studying in Class 12, allowing you to write the exam immediately after board exams!",
      },
      {
        id: 4,
        roadmapStage: "Stage 4: School Foundations that Matter",
        category: "School Subjects",
        categoryColor: "bg-amber-100 text-amber-900 border-amber-300",
        question: "Which skill that you develop in 8th, 9th, and 10th school Mathematics is most critical for accounting accuracy?",
        options: [
          { text: "Careful arithmetic accuracy, logical step-by-step thinking, and zero calculation errors" },
          { text: "Drawing maps of ancient empires" },
          { text: "Memorizing Latin biological plant names" },
          { text: "Running fast in athletic sports" },
        ],
        correctIndex: 0,
        explanation: "Accountancy demands extreme numerical accuracy! Even a 1-rupee difference in a balance sheet requires deep analysis to balance debits and credits correctly.",
        proTip: "Never rush your math homework — cultivate neat handwriting and verify your calculations twice!",
      },
      {
        id: 5,
        roadmapStage: "Stage 6: The Mandatory Articleship Training",
        category: "Course Duration",
        categoryColor: "bg-emerald-100 text-emerald-900 border-emerald-300",
        question: "Unlike traditional college degrees, CA requires mandatory full-time hands-on work with real businesses. What is this called and how long does it take?",
        options: [
          { text: "Summer vacation camp (1 week)" },
          { text: "2-Year Mandatory Practical Articleship under a practicing Chartered Accountant firm" },
          { text: "10-Year unpaid factory work" },
          { text: "Watching YouTube tutorials at home for 2 days" },
        ],
        correctIndex: 1,
        explanation: "Articleship is the superpower of the CA course! Under new ICAI guidelines, students complete 2 continuous years of practical training auditing company books, filing income tax returns, and visiting corporate offices.",
        proTip: "During articleship, students receive a monthly stipend while learning real-world corporate finance from senior partners.",
      },
      {
        id: 6,
        roadmapStage: "Stage 6: What Chartered Accountants Actually Do",
        category: "Skills to Build",
        categoryColor: "bg-teal-100 text-teal-900 border-teal-300",
        question: "What is the primary professional role of a Chartered Accountant in companies and economies?",
        options: [
          { text: "Manual counting of currency bundles in a cashier cage" },
          { text: "Selling insurance policies door-to-door" },
          { text: "Auditing company financial accounts, planning legal corporate taxes, financial forecasting, and preventing corporate fraud" },
          { text: "Typing letters in MS Word for office clerks" },
        ],
        correctIndex: 2,
        explanation: "By law in India, only a qualified Chartered Accountant can sign and certify statutory audit reports of companies, banks, and institutions. They are trusted business advisors to CEOs and boards of directors.",
        proTip: "A CA's signature on a financial statement is the gold standard of trust for investors and the government.",
      },
      {
        id: 7,
        roadmapStage: "Stage 7: Total Time Duration",
        category: "Course Duration",
        categoryColor: "bg-blue-100 text-blue-900 border-blue-300",
        question: "If a dedicated student passes all exams on their first attempt after Class 12, approximately how many years does it take to become a fully qualified CA?",
        options: [
          { text: "1 Year" },
          { text: "About 4.5 to 5 Years (including Foundation, Intermediate, 2-Year Articleship, and Final)" },
          { text: "12 to 15 Years" },
          { text: "6 Months" },
        ],
        correctIndex: 1,
        explanation: "A disciplined student completing Class 12 at age 18 can complete CA Foundation, Inter, 2-year articleship, and CA Final by age 22 to 23, becoming one of the youngest corporate financial professionals in India!",
        proTip: "Unlike costly private medical or engineering colleges, the CA course has very affordable examination and registration fees.",
      },
      {
        id: 8,
        roadmapStage: "Stage 8: Core Mindset for Success",
        category: "Skills to Build",
        categoryColor: "bg-rose-100 text-rose-900 border-rose-300",
        question: "What personal character trait is the hallmark of a respected Chartered Accountant?",
        options: [
          { text: "Helping dishonest people hide illegal money" },
          { text: "Giving up easily whenever an exam paper looks difficult" },
          { text: "Uncompromising integrity, dedication to truth, deep patience, and ethical honesty" },
          { text: "Arguing without looking at real data" },
        ],
        correctIndex: 2,
        explanation: "The ICAI motto is taken from the Vedas: 'Ya Esha Supteshu Jagarti' (The one who is awake among those who sleep). A CA must possess unwavering integrity, honesty, and financial ethics.",
        proTip: "Being honest in school homework and tests is the very first step toward building professional integrity!",
      },
      {
        id: 9,
        roadmapStage: "Stage 9: College Degree vs CA",
        category: "College Degree & Exams",
        categoryColor: "bg-indigo-100 text-indigo-900 border-indigo-300",
        question: "Can a student pursue a regular Bachelor's degree (like B.Com) alongside their Chartered Accountancy studies?",
        options: [
          { text: "No, ICAI strictly bans all college degrees" },
          { text: "Yes! Most students enroll in B.Com (Regular or Correspondence) simultaneously while preparing for CA" },
          { text: "You can only study CA after age 45" },
          { text: "Only engineering college students can write CA" },
        ],
        correctIndex: 1,
        explanation: "Thousands of CA aspirants complete their B.Com or BBA alongside CA. Since B.Com syllabus heavily overlaps with CA Intermediate subjects, students often excel in both simultaneously!",
        proTip: "Having both a B.Com degree and a CA qualification gives you double credentials for corporate careers.",
      },
      {
        id: 10,
        roadmapStage: "Stage 10: The CA Profession in the AI Era",
        category: "AI & Future World",
        categoryColor: "bg-purple-100 text-purple-900 border-purple-300",
        question: "With accounting software and AI automating routine vouchers and bank balance sheets, what will future Chartered Accountants focus on?",
        options: [
          { text: "Companies will no longer need accountants or financial advisors" },
          { text: "AI will replace all CEOs and CFOs" },
          { text: "AI takes care of routine data entry, while CAs become strategic Chief Financial Officers (CFOs), forensic fraud detectives, international tax planners, and business leaders!" },
          { text: "Chartered Accountants will use paper abacuses only" },
        ],
        correctIndex: 2,
        explanation: "AI is a blessing for modern accountants — it eliminates repetitive data entry. Chartered Accountants will focus on high-value strategic decisions: mergers & acquisitions, international taxation, fraud investigation, and corporate governance.",
        proTip: "CAs with strong data analytics skills and ethical leadership are among the highest-paid corporate executives in the world!",
      },
    ],
  },

  engineer: {
    id: "engineer",
    title: "Engineering (Mechanical / Civil / Electrical) Roadmap Quiz",
    subtitle: "A student-friendly quiz for 8th, 9th & 10th classes: MPC stream, JEE & EAPCET, B.Tech branches, and building national infrastructure!",
    icon: "⚙️",
    badge: "For Classes 8th – 10th",
    gradient: "from-slate-700 via-zinc-800 to-stone-900",
    accentColor: "#475569",
    description: "Want to design high-speed electric trains, build iconic bridges, manufacture rockets, and power entire cities? Discover the real core engineering roadmap: MPC stream after 10th, 4 years B.Tech, key physics concepts, and hands-on invention skills!",
    totalQuestions: 10,
    blueprintUrl: "/career-reports?career=engineer",
    cheatSheet: [
      "Class 8-10: Love Physics (machines, force, electricity), Mathematics (geometry, algebra), and building physical science models.",
      "After 10th: Choose MPC (Mathematics, Physics, Chemistry) for 2 years (or 3-Year Polytechnic Diploma via POLYCET).",
      "Premier Entrance Exams: JEE Main & Advanced (for IITs/NITs) and State EAPCET / CETs.",
      "The 4-Year B.Tech Degree: Major branches include Mechanical, Civil, Electrical (EEE), Electronics (ECE), and Chemical Engineering.",
      "Hands-On Labs: Workshops in lathe machining, circuit soldering, concrete testing, 3D CAD modeling, and robotics.",
      "Future with AI: AI aids in simulation and stress testing, while human engineers invent physical green energy solutions, smart infrastructure, and breakthrough machinery!"
    ],
    questions: [
      {
        id: 1,
        roadmapStage: "Stage 1: Intermediate Stream Selection",
        category: "Choosing Branch / Stream",
        categoryColor: "bg-blue-100 text-blue-900 border-blue-300",
        question: "Which stream MUST you take in Intermediate (Class 11 and 12) to qualify for engineering admissions across India?",
        options: [
          { text: "BiPC (Biology, Physics, Chemistry)" },
          { text: "MPC (Mathematics, Physics, Chemistry)" },
          { text: "CEC (Commerce, Economics, Civics)" },
          { text: "HEC (History, Economics, Civics)" },
        ],
        correctIndex: 1,
        explanation: "Mathematics and Physics are the compulsory core subjects for all engineering branches (Mechanical, Civil, Electrical, Aerospace, etc.). MPC is the mandatory 10+2 stream.",
        proTip: "If you enjoy understanding how ceiling fans, bicycles, gears, and electrical circuits work, MPC is your natural home!",
      },
      {
        id: 2,
        roadmapStage: "Stage 2: The Direct Polytechnic Pathway",
        category: "Choosing Branch / Stream",
        categoryColor: "bg-purple-100 text-purple-900 border-purple-300",
        question: "If a Class 10 student wants hands-on machinery and workshop training immediately without Class 11-12, what option is available?",
        options: [
          { text: "Direct admission into MBBS surgery" },
          { text: "3-Year Polytechnic Diploma in Mechanical, Civil, or Electrical Engineering (via POLYCET)" },
          { text: "Waiting at home until age 25" },
          { text: "A 1-week online coding certificate" },
        ],
        correctIndex: 1,
        explanation: "Polytechnic is an amazing 3-year diploma right after Class 10. Diploma holders get practical workshop experience and can enter directly into the 2nd year of B.Tech via ECET lateral entry!",
        proTip: "Polytechnic students often develop superior physical workshop and machine-handling skills compared to regular students.",
      },
      {
        id: 3,
        roadmapStage: "Stage 3: Core Engineering Branches",
        category: "College Degree & Exams",
        categoryColor: "bg-indigo-100 text-indigo-900 border-indigo-300",
        question: "Beyond computer software, which of the following are the world's core foundational engineering branches that build physical infrastructure?",
        options: [
          { text: "Only cinema acting and singing" },
          { text: "Mechanical (Engines/Machines), Civil (Bridges/Buildings), and Electrical (Power/Renewable Energy)" },
          { text: "Only retail shop management" },
          { text: "There are no physical engineering branches left in the world" },
        ],
        correctIndex: 1,
        explanation: "Civil engineers build airports, dams, and metro rails. Mechanical engineers design electric vehicles, aircraft, and industrial robots. Electrical engineers power cities and green solar grids!",
        proTip: "Everything physical in our modern world — from the house you sleep in to the train you travel on — was designed by core engineers.",
      },
      {
        id: 4,
        roadmapStage: "Stage 4: School Physics & Math Foundation",
        category: "School Subjects",
        categoryColor: "bg-amber-100 text-amber-900 border-amber-300",
        question: "Which high school science topics that you study right now in 8th, 9th, or 10th are the heart of engineering?",
        options: [
          { text: "Ancient roman coins" },
          { text: "Memorizing dictionary words" },
          { text: "Drawing plant leaf cells only" },
          { text: "Physics (Force, Motion, Work & Energy, Electricity, Magnetism & Pressure) and Mathematics" },
        ],
        correctIndex: 3,
        explanation: "Newton's laws of motion, Ohm's law of electricity, levers, gears, and pressure formulas that you learn in high school are the exact principles used to build supersonic jets and skyscrapers!",
        proTip: "When learning physics, always ask: 'Where is this principle used in real vehicles or machines around me?'",
      },
      {
        id: 5,
        roadmapStage: "Stage 5: Degree Name & Duration",
        category: "Course Duration",
        categoryColor: "bg-emerald-100 text-emerald-900 border-emerald-300",
        question: "What is the primary bachelor's degree required to become a certified professional Engineer, and how many years does it take?",
        options: [
          { text: "B.A. Literature (3 Years)" },
          { text: "B.Tech / B.E. (Bachelor of Technology / Engineering) - 4 Years (8 Semesters)" },
          { text: "MBBS (5.5 Years)" },
          { text: "B.Com General (3 Years)" },
        ],
        correctIndex: 1,
        explanation: "A full-time B.Tech or B.E. takes 4 years across 8 semesters. It includes engineering graphics, machine drawing, workshop labs, industrial visits, and a final-year major engineering project.",
        proTip: "During college, engineering students participate in national competitions like Formula Student (building real race cars) and drone challenges!",
      },
      {
        id: 6,
        roadmapStage: "Stage 6: Top Entrance Examinations",
        category: "College Degree & Exams",
        categoryColor: "bg-indigo-100 text-indigo-900 border-indigo-300",
        question: "Which nationwide competitive examinations are written after Class 12 to enter India's world-famous IITs, NITs, and premier state engineering colleges?",
        options: [
          { text: "JEE Main, JEE Advanced, and State EAPCET / CET examinations" },
          { text: "NEET Medical Test" },
          { text: "UPSC Civil Services Prelims" },
          { text: "CA Foundation Test" },
        ],
        correctIndex: 0,
        explanation: "JEE Main and JEE Advanced are India's premier engineering exams for the 23 IITs and 31 NITs. Every state also conducts its own CET/EAPCET for top government and university engineering colleges.",
        proTip: "Cracking JEE requires deep conceptual understanding of Physics and Maths problems rather than rote memorization.",
      },
      {
        id: 7,
        roadmapStage: "Stage 7: Public Sector & Govt Jobs (GATE)",
        category: "College Degree & Exams",
        categoryColor: "bg-purple-100 text-purple-900 border-purple-300",
        question: "Which prestigious exam do engineering graduates write to secure high-paying officer jobs in PSUs like ISRO, DRDO, BHEL, NTPC, and ONGC?",
        options: [
          { text: "A school sports trial" },
          { text: "GATE (Graduate Aptitude Test in Engineering)" },
          { text: "Bank Clerk typing test" },
          { text: "Driving license test" },
        ],
        correctIndex: 1,
        explanation: "GATE is the gold-standard national exam for engineers. Top scorers get recruited directly as Class-1 Gazetted / Executive Engineers in prestigious PSUs like ISRO, DRDO, BARC, and IOCL!",
        proTip: "Working as a rocket engineer in ISRO or defense scientist in DRDO is one of the proudest ways to serve India.",
      },
      {
        id: 8,
        roadmapStage: "Stage 8: Skills to Build in School",
        category: "Skills to Build",
        categoryColor: "bg-rose-100 text-rose-900 border-rose-300",
        question: "What hobbies and skills can high school students start practicing now to become great engineering innovators?",
        options: [
          { text: "Breaking household gadgets and hiding the pieces" },
          { text: "Building science project models, tinkering with electronics kits (like Arduino/LEDs), origami/geometry design, and solving 3D puzzles" },
          { text: "Refusing to touch any tools or screwdrivers" },
          { text: "Memorizing textbooks without understanding how machines operate" },
        ],
        correctIndex: 1,
        explanation: "Great engineers are makers! Building DIY science projects, experimenting with basic circuits, learning 3D geometric visualization, and participating in school science fairs build real engineering intuition.",
        proTip: "Try opening an old non-working clock or toy with your parents to see how gears and springs interact!",
      },
      {
        id: 9,
        roadmapStage: "Stage 9: What Engineers Actually Do",
        category: "Skills to Build",
        categoryColor: "bg-teal-100 text-teal-900 border-teal-300",
        question: "What is the fundamental mission of engineers in our society?",
        options: [
          { text: "Only drawing pictures in art books" },
          { text: "Applying scientific principles to solve human problems — designing safe buildings, clean energy, electric transport, and space exploration" },
          { text: "Selling train tickets at railway counters" },
          { text: "Only writing bills in supermarkets" },
        ],
        correctIndex: 1,
        explanation: "Scientists discover how the world works; engineers build the world that never was! Engineers invent solutions for clean water, solar energy, bullet trains, life-saving medical devices, and spacecraft.",
        proTip: "Engineers are the real builders of human civilization.",
      },
      {
        id: 10,
        roadmapStage: "Stage 10: Future of Engineering in the AI Era",
        category: "AI & Future World",
        categoryColor: "bg-purple-100 text-purple-900 border-purple-300",
        question: "How will Artificial Intelligence and robotics supercharge the work of Mechanical, Civil, and Electrical Engineers in the coming decades?",
        options: [
          { text: "Physical roads, power plants, and machinery will completely vanish" },
          { text: "Buildings will assemble themselves out of thin air without human physics" },
          { text: "AI will simulate wind tunnels and crash tests in seconds, empowering human engineers to design lighter aircraft, earthquake-proof cities, and clean fusion energy!" },
          { text: "Engineers will stop studying mathematics and physics" },
        ],
        correctIndex: 2,
        explanation: "AI cannot pour concrete, assemble a satellite in cleanrooms, or weld high-pressure pipelines. AI will act as a supercharged simulation tool, enabling human engineers to build safer, greener, and more resilient mega-projects faster than ever before!",
        proTip: "Engineers who combine core physical domain expertise with modern AI simulation tools will be the most valuable problem-solvers on the planet.",
      },
    ],
  },

  mba: {
    id: "mba",
    title: "Business Management (MBA) Roadmap Quiz",
    subtitle: "A student-friendly quiz for 8th, 9th & 10th classes: degrees, CAT exam, IIMs, business leadership, and strategy!",
    icon: "💼",
    badge: "For Classes 8th – 10th",
    gradient: "from-blue-600 via-indigo-700 to-slate-900",
    accentColor: "#2563EB",
    description: "Dream of leading global companies, managing marketing campaigns, and launching startups? Explore the MBA roadmap: stream flexibility, any graduation degree, cracking the CAT exam, and developing executive leadership!",
    totalQuestions: 10,
    blueprintUrl: "/career-reports?career=mba",
    cheatSheet: [
      "Class 8-10: Develop strong English reading, arithmetic math, public speaking, and team leadership.",
      "After 10th: Any stream! (Commerce, Science, or Arts) — all are 100% eligible for management degrees.",
      "College Degree: Any recognized 3-year or 4-year Bachelor's degree (BBA, B.Com, B.Tech, B.Sc, B.A.).",
      "Premier Entrance Exam: CAT (Common Admission Test) for top IIMs (Ahmedabad, Bangalore, Calcutta).",
      "Key Specializations: Marketing, Finance, Human Resources (HR), Operations, and Business Analytics.",
      "Future with AI: AI crunches consumer numbers and market reports, while MBA leaders craft company vision, build partnerships, and inspire human teams!"
    ],
    questions: [
      {
        id: 1,
        roadmapStage: "Stage 1: Stream Selection after Class 10",
        category: "Choosing Branch / Stream",
        categoryColor: "bg-blue-100 text-blue-900 border-blue-300",
        question: "Which stream should you choose in Intermediate (Class 11 & 12) if your dream is to pursue an MBA in the future?",
        options: [
          { text: "Only Commerce CEC is legally allowed" },
          { text: "Any stream! (Commerce, Science MPC/BiPC, or Arts) — management is open to students from all streams!" },
          { text: "Only students who studied abroad can do an MBA" },
          { text: "You must choose engineering MPC only" },
        ],
        correctIndex: 1,
        explanation: "Management has zero stream barriers! In fact, top IIMs actively encourage students from diverse educational backgrounds including arts, commerce, science, and engineering.",
        proTip: "Pick the stream in Class 11 and 12 that you genuinely enjoy and can score high marks in!",
      },
      {
        id: 2,
        roadmapStage: "Stage 2: Degree Requirement",
        category: "College Degree & Exams",
        categoryColor: "bg-indigo-100 text-indigo-900 border-indigo-300",
        question: "What is an MBA, and what educational degree must you complete before you can study an MBA?",
        options: [
          { text: "MBA is a high school diploma done right after Class 10" },
          { text: "MBA is a 2-year Postgraduate Master's Degree pursued after completing any undergraduate Bachelor's degree" },
          { text: "MBA is a certificate only for retired army officers" },
          { text: "MBA is an online video game certificate" },
        ],
        correctIndex: 1,
        explanation: "MBA stands for Master of Business Administration. It is a 2-year postgraduate program done after completing any 3 or 4-year bachelor's degree like BBA, B.Com, B.Sc, B.A., or B.Tech.",
        proTip: "Some premier universities also offer 5-year Integrated IPM programs (BBA+MBA) directly after Class 12 (via IPMAT)!",
      },
      {
        id: 3,
        roadmapStage: "Stage 3: The Premier Entrance Exam (CAT)",
        category: "College Degree & Exams",
        categoryColor: "bg-purple-100 text-purple-900 border-purple-300",
        question: "Which nationwide competitive exam is written in India to secure admission into premier management institutes like the IIMs?",
        options: [
          { text: "CAT (Common Admission Test)" },
          { text: "NEET Medical Exam" },
          { text: "JEE Advanced Exam" },
          { text: "NDA Army Exam" },
        ],
        correctIndex: 0,
        explanation: "CAT is the flagship national entrance exam conducted by the Indian Institutes of Management (IIMs). It tests Quantitative Aptitude, Data Interpretation & Logical Reasoning, and Verbal Ability.",
        proTip: "Other respected MBA entrance exams include XAT, SNAP, NMAT, and MAT.",
      },
      {
        id: 4,
        roadmapStage: "Stage 4: School Foundations for Management",
        category: "School Subjects",
        categoryColor: "bg-amber-100 text-amber-900 border-amber-300",
        question: "Which high school subject skills are most important for cracking MBA entrance exams like CAT?",
        options: [
          { text: "Drawing biological dissection diagrams" },
          { text: "English (Reading Comprehension & Vocabulary) and Arithmetic Mathematics (Percentages, Profit & Loss, Ratios)" },
          { text: "Memorizing chemical periodic table atomic numbers" },
          { text: "Handicrafts and pottery" },
        ],
        correctIndex: 1,
        explanation: "CAT mathematics tests high school Class 6 to 10 arithmetic and algebra, alongside fast English reading comprehension and logical puzzles like Sudoku and arrangements.",
        proTip: "Building speed-reading habits and solving logic puzzles in high school prepares you naturally for CAT!",
      },
      {
        id: 5,
        roadmapStage: "Stage 5: Popular MBA Specializations",
        category: "College Degree & Exams",
        categoryColor: "bg-teal-100 text-teal-900 border-teal-300",
        question: "What are the core functional branches or specializations available during an MBA program?",
        options: [
          { text: "Only farming and gardening" },
          { text: "Only aircraft repair" },
          { text: "Marketing, Finance, Human Resource Management (HR), Operations, and Business Analytics" },
          { text: "Wood carpentry and stone masonry" },
        ],
        correctIndex: 2,
        explanation: "An MBA trains you across major corporate functions: Marketing (sales and brand building), Finance (investment and budgets), HR (recruitment and culture), and Operations (supply chain and efficiency).",
        proTip: "Marketing suits outgoing creative thinkers, while Finance suits numerical and analytical minds!",
      },
      {
        id: 6,
        roadmapStage: "Stage 6: Course Duration",
        category: "Course Duration",
        categoryColor: "bg-emerald-100 text-emerald-900 border-emerald-300",
        question: "How long does a full-time regular MBA program take in Indian and international business schools?",
        options: [
          { text: "6 Months" },
          { text: "10 Years" },
          { text: "2 Years (4 Semesters, including a summer corporate internship)" },
          { text: "1 Week" },
        ],
        correctIndex: 2,
        explanation: "A standard full-time MBA takes 2 years. Between the 1st and 2nd year, students undergo a mandatory 2-month summer internship with real corporations, often receiving high stipends and pre-placement offers.",
        proTip: "Summer internships are where classroom theory meets real-world boardroom decision-making!",
      },
      {
        id: 7,
        roadmapStage: "Stage 7: What Business Managers Actually Do",
        category: "Skills to Build",
        categoryColor: "bg-rose-100 text-rose-900 border-rose-300",
        question: "What does an MBA manager actually do on a typical day in a company?",
        options: [
          { text: "Types bills at a grocery counter all day" },
          { text: "Leads project teams, makes strategic budgets, negotiates business contracts, and solves corporate growth problems" },
          { text: "Repairs the office plumbing system" },
          { text: "Stands at the office entrance checking employee ID cards" },
        ],
        correctIndex: 1,
        explanation: "Managers coordinate between engineers, sales teams, and customers. They decide which new products to launch, how to price them, how to market them, and how to keep teams motivated.",
        proTip: "Managers are problem-solvers who turn ideas into profitable, sustainable reality.",
      },
      {
        id: 8,
        roadmapStage: "Stage 8: Skills to Build in School",
        category: "Skills to Build",
        categoryColor: "bg-amber-100 text-amber-900 border-amber-300",
        question: "What activity in school gives you the best hands-on practice for becoming a charismatic corporate manager?",
        options: [
          { text: "Organizing school fests, leading student clubs, participating in group debates, and volunteering for responsibilities" },
          { text: "Sitting silently in a corner and refusing to talk to anyone" },
          { text: "Blaming teammates whenever a group project fails" },
          { text: "Playing mobile games alone for 8 hours" },
        ],
        correctIndex: 0,
        explanation: "Leadership begins at school! Managing school science exhibitions, being a sports captain, or leading a cultural club teaches communication, time management, and team collaboration.",
        proTip: "Volunteer to be a team coordinator for your next school project — real leadership is learned by doing!",
      },
      {
        id: 9,
        roadmapStage: "Stage 9: Top Business Schools in India",
        category: "College Degree & Exams",
        categoryColor: "bg-indigo-100 text-indigo-900 border-indigo-300",
        question: "Which group of government institutions in India is considered the pinnacle of business education, comparable to Harvard and Stanford?",
        options: [
          { text: "The Indian Institutes of Management (IIM Ahmedabad, Bangalore, Calcutta, etc.)" },
          { text: "Primary teacher training centers" },
          { text: "Local district sports stadiums" },
          { text: "State motor vehicle departments" },
        ],
        correctIndex: 0,
        explanation: "The IIMs are India's premier management institutions. Graduates from top IIMs command extraordinary campus placement packages from top global consulting firms, tech giants, and investment banks.",
        proTip: "Other elite non-IIM business schools include XLRI Jamshedpur, FMS Delhi, and SPJIMR Mumbai.",
      },
      {
        id: 10,
        roadmapStage: "Stage 10: Business Management in the AI Era",
        category: "AI & Future World",
        categoryColor: "bg-purple-100 text-purple-900 border-purple-300",
        question: "How will Artificial Intelligence transform business management by the time you graduate with an MBA?",
        options: [
          { text: "Companies will no longer have human employees or leaders" },
          { text: "All businesses will be permanently closed down" },
          { text: "AI will analyze market trends and automate reports, while MBA leaders focus on creative strategy, ethical decisions, and motivating people!" },
          { text: "Products will sell themselves with zero human marketing" },
        ],
        correctIndex: 2,
        explanation: "AI is a brilliant analytical assistant that forecasts market trends and optimizes supply chains in seconds. But human empathy, corporate culture, strategic negotiation, and vision remain 100% human leadership skills.",
        proTip: "A manager who understands how to use AI tools alongside human emotional intelligence will be unstoppable in the modern corporate world!",
      },
    ],
  },

  "air-hostess": {
    id: "air-hostess",
    title: "Air Hostess & Cabin Crew Roadmap Quiz",
    subtitle: "A student-friendly quiz for 8th, 9th & 10th classes: aviation grooming, cabin safety, foreign travel, and emergency rescue skills!",
    icon: "🛫",
    badge: "For Classes 8th – 10th",
    gradient: "from-sky-600 via-cyan-700 to-indigo-900",
    accentColor: "#0284C7",
    description: "Dream of flying across the world, exploring foreign cities, and wearing the smart airline uniform? Discover the aviation cabin crew roadmap: stream eligibility, language skills, safety training, and top airline recruitment!",
    totalQuestions: 10,
    blueprintUrl: "/career-reports?career=air-hostess",
    cheatSheet: [
      "Class 8-10: Master fluent English communication, practice clear speech, and maintain polite, friendly interpersonal habits.",
      "After 10th: Any stream! (Arts, Commerce, or Science) — 10+2 with minimum 50% marks is the basic requirement.",
      "Key Requirements: Minimum height standards (typically 155cm+ for females, 170cm+ for males), clear eyesight, and medical fitness.",
      "Training: 6-12 Month Diploma in Aviation & Hospitality or direct airline training academy.",
      "Core Responsibility: Passenger safety & in-flight medical emergencies first, luxury hospitality second.",
      "Future with AI: Automated boarding gates handle tickets, while cabin crew safeguard passenger lives, provide emergency medical care, and deliver warm human hospitality in the skies!"
    ],
    questions: [
      {
        id: 1,
        roadmapStage: "Stage 1: Intermediate Eligibility",
        category: "Choosing Branch / Stream",
        categoryColor: "bg-blue-100 text-blue-900 border-blue-300",
        question: "Which stream should you choose in Intermediate (Class 11 & 12) if you want to become an Air Hostess or Flight Steward (Cabin Crew)?",
        options: [
          { text: "Only aeronautical engineering is allowed" },
          { text: "Any stream you like! (Arts, Commerce, or Science) — airlines accept candidates from all educational backgrounds!" },
          { text: "Only students from medical BiPC can apply" },
          { text: "You must drop out after Class 10" },
        ],
        correctIndex: 1,
        explanation: "Airlines have zero stream restrictions for cabin crew! As long as you pass Class 12 with good marks and speak fluent English and Hindi, you are eligible to apply for airline interviews.",
        proTip: "Humanities or Commerce with English gives you great language confidence and communication practice!",
      },
      {
        id: 2,
        roadmapStage: "Stage 2: Basic Educational Qualification",
        category: "Course Duration",
        categoryColor: "bg-emerald-100 text-emerald-900 border-emerald-300",
        question: "What is the minimum basic educational qualification required by most airlines (like IndiGo, Air India, Emirates) to apply for cabin crew?",
        options: [
          { text: "A 5-year Master's degree" },
          { text: "Class 12 pass (10+2) from a recognized board" },
          { text: "Only a Class 5 pass" },
          { text: "A PhD in Aviation Physics" },
        ],
        correctIndex: 1,
        explanation: "Passing Class 12 (with minimum 50% marks in English) is the basic educational eligibility. Having a degree (like B.A., B.Com, or B.Sc in Hospitality) is an added advantage, especially for international airlines.",
        proTip: "Many candidates join domestic airlines at age 18 right after Class 12 and then transition to luxury international carriers like Emirates or Qatar Airways!",
      },
      {
        id: 3,
        roadmapStage: "Stage 3: Language & Communication Foundation",
        category: "School Subjects",
        categoryColor: "bg-amber-100 text-amber-900 border-amber-300",
        question: "Which school subject that you study in 8th, 9th, and 10th is the MOST critical for cracking airline interviews?",
        options: [
          { text: "Ancient world architecture" },
          { text: "English (Spoken Fluency, Pronunciation, Listening & Polite Vocabulary)" },
          { text: "Organic chemistry equations" },
          { text: "Calculus integration" },
        ],
        correctIndex: 1,
        explanation: "Aviation is an international industry where English is the universal language of safety and communication. Clear pronunciation, active listening, and polite expression are tested in every interview round.",
        proTip: "Practice speaking English with friends and reading news articles out loud in front of a mirror to build facial confidence!",
      },
      {
        id: 4,
        roadmapStage: "Stage 4: Physical & Medical Standards",
        category: "Skills to Build",
        categoryColor: "bg-purple-100 text-purple-900 border-purple-300",
        question: "Apart from educational marks, what physical criteria are evaluated by airlines during cabin crew selections?",
        options: [
          { text: "Weightlifting 100 kg dumbbells" },
          { text: "Height standards (to reach overhead bins easily), proportional BMI weight, clear skin, and normal eyesight" },
          { text: "Running a marathon in 2 hours" },
          { text: "Having visible tattoos on hands and face" },
        ],
        correctIndex: 1,
        explanation: "Cabin crew must reach the emergency equipment in overhead aircraft bins (minimum height ~155 cm for females, ~170 cm for males). Good posture, healthy fitness, and uncorrected or contact-lens 6/6 vision are required.",
        proTip: "Maintain good physical posture and an active lifestyle — healthy habits in school pay lifelong dividends!",
      },
      {
        id: 5,
        roadmapStage: "Stage 5: The Real Job Mission",
        category: "Skills to Build",
        categoryColor: "bg-teal-100 text-teal-900 border-teal-300",
        question: "What is the PRIMARY and most critical responsibility of an Air Hostess / Flight Steward onboard an aircraft?",
        options: [
          { text: "Only serving tea, coffee, and meals to passengers" },
          { text: "Passenger safety, emergency evacuation procedures, first aid, and in-flight medical emergencies" },
          { text: "Flying the airplane during turbulent weather" },
          { text: "Selling sunglasses and perfume only" },
        ],
        correctIndex: 1,
        explanation: "While hospitality and serving food are visible, cabin crew are primarily trained safety officers! They are certified in CPR, firefighting at 35,000 feet, emergency sea landings, and evacuating an entire plane in under 90 seconds.",
        proTip: "Cabin crew undergo rigorous safety drills every single year to renew their flying licenses.",
      },
      {
        id: 6,
        roadmapStage: "Stage 6: Airline Training Duration",
        category: "Course Duration",
        categoryColor: "bg-blue-100 text-blue-900 border-blue-300",
        question: "Once an airline selects a candidate, how long is the mandatory intensive safety and flight training at the airline's academy?",
        options: [
          { text: "2 Days" },
          { text: "3 to 4 Months of intensive practical simulator and emergency drill training" },
          { text: "10 Years" },
          { text: "No training is provided" },
        ],
        correctIndex: 1,
        explanation: "Selected cadets undergo 3 to 4 months of rigorous training covering aviation security, medical emergency care, simulated emergency water ditching, firefighting, and grooming at airline academies.",
        proTip: "Airlines pay cadets a stipend during this training period!",
      },
      {
        id: 7,
        roadmapStage: "Stage 7: Key Personal Qualities",
        category: "Skills to Build",
        categoryColor: "bg-rose-100 text-rose-900 border-rose-300",
        question: "What emotional quality is most admired in top cabin crew professionals?",
        options: [
          { text: "Getting angry when passengers ask questions" },
          { text: "Showing panic whenever there is minor airplane turbulence" },
          { text: "Calm composure under stress, polite patience, empathy, and a warm welcoming presence" },
          { text: "Ignoring passenger emergency calls" },
        ],
        correctIndex: 2,
        explanation: "Passengers can be scared of flying, travel-sick, or anxious. A flight attendant who stays calm, offers a reassuring smile, and solves problems with patience is a true professional.",
        proTip: "Practice staying calm and polite when someone around you is irritable — that emotional maturity is what airlines look for!",
      },
      {
        id: 8,
        roadmapStage: "Stage 8: Exciting Career Perks",
        category: "College Degree & Exams",
        categoryColor: "bg-indigo-100 text-indigo-900 border-indigo-300",
        question: "What unique global advantages and lifestyle perks come with a career in international commercial aviation?",
        options: [
          { text: "Traveling to world cities (London, Dubai, Singapore), luxury hotel stays, international exposure, and discounted flight tickets for family" },
          { text: "You can never leave your home city" },
          { text: "You must walk to foreign countries" },
          { text: "There are zero perks in aviation" },
        ],
        correctIndex: 0,
        explanation: "Aviation offers unmatched global travel! Cabin crew get layovers in world capitals with luxury 5-star hotel accommodations, tax-free allowances in international airlines, and deeply discounted flight tickets for parents and siblings.",
        proTip: "It is one of the most exciting careers for young people who love exploring different cultures and seeing the world!",
      },
      {
        id: 9,
        roadmapStage: "Stage 9: Career Progression Ladders",
        category: "College Degree & Exams",
        categoryColor: "bg-amber-100 text-amber-900 border-amber-300",
        question: "How can a flight attendant's career advance over 10 to 15 years in the aviation sector?",
        options: [
          { text: "They stay in the exact same role forever" },
          { text: "They can advance to Senior Cabin Crew, In-Flight Service Manager (Cabin Purser), Ground Trainer, or Airport Operations Director!" },
          { text: "They are forced to retire at age 22" },
          { text: "They must switch to railway trains" },
        ],
        correctIndex: 1,
        explanation: "With experience, cabin crew are promoted to Lead Flight Attendant, Cabin Purser (leading the entire cabin team), In-Flight Service Manager, and later transition to executive roles like Airline Safety Instructors or Airport Ground Managers.",
        proTip: "Aviation experience opens doors to luxury hospitality, corporate customer experience, and aviation management roles worldwide.",
      },
      {
        id: 10,
        roadmapStage: "Stage 10: Cabin Crew in the Modern Aviation World",
        category: "AI & Future World",
        categoryColor: "bg-purple-100 text-purple-900 border-purple-300",
        question: "Even with automated airport facial scanners and robotic luggage handlers, why is the human Cabin Crew completely irreplaceable?",
        options: [
          { text: "Robots will completely replace flight crews and fly planes alone" },
          { text: "Airplanes will no longer carry people" },
          { text: "A computer can never perform emergency medical CPR, comfort a crying child during turbulence, or provide the warmth of human hospitality in the skies!" },
          { text: "Passengers prefer robotic arms serving food" },
        ],
        correctIndex: 2,
        explanation: "Aviation safety authorities worldwide mandate human cabin crew on commercial flights. No machine can calmly lead an evacuation, handle a medical cardiac arrest mid-air, or provide the reassurance that human passengers need when flying 10 kilometers above the clouds.",
        proTip: "Human touch, emotional connection, and life-saving bravery make this career timelessly vital in the aviation world!",
      },
    ],
  },

  physiotherapy: {
    id: "physiotherapy",
    title: "Physiotherapist (BPT) Roadmap Quiz",
    subtitle: "A student-friendly quiz for 8th, 9th & 10th classes: BiPC stream, 4.5 years BPT, sports rehabilitation, and healing bodies without surgery!",
    icon: "🏃",
    badge: "For Classes 8th – 10th",
    gradient: "from-teal-600 via-emerald-700 to-green-900",
    accentColor: "#059669",
    description: "Love sports medicine, human muscle anatomy, and helping injured athletes or stroke patients walk again? Uncover the physiotherapy roadmap: BiPC stream after 10th, 4.5-year BPT degree, hospital clinics, and premier sports team medical roles!",
    totalQuestions: 10,
    blueprintUrl: "/career-reports?career=physiotherapy",
    cheatSheet: [
      "Class 8-10: Love biology, human bones, muscles, exercise science, sports fitness, and helping people recover from pain.",
      "After 10th: Choose BiPC (Biology, Physics, Chemistry) in Intermediate / Class 11-12.",
      "Primary Degree: 4.5-Year BPT (Bachelor of Physiotherapy) — 4 years study + 6 months mandatory hospital internship.",
      "Admission: State CET / EAPCET paramedical counseling or university medical entrance.",
      "Major Career Paths: Sports Physiotherapist for cricket/football teams, Orthopedic Rehab in hospitals, Neuro-Rehab for paralysis, and private clinics.",
      "Future with AI: Robotic exoskeletons and AI motion sensors track muscle movement, while Physiotherapists provide hands-on manual therapy and patient encouragement!"
    ],
    questions: [
      {
        id: 1,
        roadmapStage: "Stage 1: Stream Selection after Class 10",
        category: "Choosing Branch / Stream",
        categoryColor: "bg-blue-100 text-blue-900 border-blue-300",
        question: "Which stream should you select in Intermediate (Class 11 & 12) to be eligible for a Bachelor of Physiotherapy (BPT) degree?",
        options: [
          { text: "Commerce CEC only" },
          { text: "BiPC (Biology, Physics, Chemistry)" },
          { text: "Arts HEC only" },
          { text: "A diploma in computer typing" },
        ],
        correctIndex: 1,
        explanation: "BiPC (Biology, Physics, Chemistry) is the mandatory stream for Physiotherapy admissions across Indian medical and healthcare universities.",
        proTip: "Biology (especially human organ systems and skeletal anatomy) and Physics (mechanics and levers) form the direct core of physiotherapy!",
      },
      {
        id: 2,
        roadmapStage: "Stage 2: The Core Professional Degree",
        category: "College Degree & Exams",
        categoryColor: "bg-indigo-100 text-indigo-900 border-indigo-300",
        question: "What is the official undergraduate professional degree required to practice as a certified Physiotherapist in India?",
        options: [
          { text: "BPT (Bachelor of Physiotherapy)" },
          { text: "B.Tech Mechanical Engineering" },
          { text: "B.Com Accountancy" },
          { text: "Diploma in Hotel Cooking" },
        ],
        correctIndex: 0,
        explanation: "BPT (Bachelor of Physiotherapy) is the recognized medical undergraduate degree that qualifies you to evaluate, diagnose physical dysfunctions, and rehabilitate patients.",
        proTip: "After completing BPT and registering with the state paramedical/physiotherapy council, professionals earn the respected prefix 'Dr.' (PT)!",
      },
      {
        id: 3,
        roadmapStage: "Stage 3: Course Duration & Internship",
        category: "Course Duration",
        categoryColor: "bg-emerald-100 text-emerald-900 border-emerald-300",
        question: "How many years does the complete Bachelor of Physiotherapy (BPT) program take, including clinical training?",
        options: [
          { text: "1 Year" },
          { text: "2 Years" },
          { text: "4.5 Years (4 academic years + 6 months compulsory rotatory hospital internship)" },
          { text: "8 Years" },
        ],
        correctIndex: 2,
        explanation: "BPT takes 4.5 years: 4 years of classroom and anatomy lab study, followed by 6 months of full-time clinical internship in hospital orthopedic, neurology, and ICU wards.",
        proTip: "The 6-month internship is where students practice hands-on therapy on real post-surgery patients and accident recovery cases.",
      },
      {
        id: 4,
        roadmapStage: "Stage 4: School Science Foundation",
        category: "School Subjects",
        categoryColor: "bg-amber-100 text-amber-900 border-amber-300",
        question: "Which high school science topics that you study in 8th, 9th, and 10th form the foundation for physical rehabilitation?",
        options: [
          { text: "Ancient roman coins" },
          { text: "Human Skeletal System, Muscles, Joints, Nerves, and Physics Levers & Force" },
          { text: "Geography soil textures only" },
          { text: "Chemical industrial polymers" },
        ],
        correctIndex: 1,
        explanation: "Understanding how joints bend, how muscles contract, how nerves transmit impulses, and how levers work in physics is the foundation of biomechanics and physical therapy.",
        proTip: "Pay close attention to your school biology chapters on the skeletal and muscular systems — it's the exact map of a physiotherapist's daily work!",
      },
      {
        id: 5,
        roadmapStage: "Stage 5: What Physiotherapists Actually Do",
        category: "Skills to Build",
        categoryColor: "bg-teal-100 text-teal-900 border-teal-300",
        question: "What is the primary medical role of a Physiotherapist in healthcare?",
        options: [
          { text: "Prescribing high doses of chemical sleeping pills" },
          { text: "Restoring physical movement, relieving pain, and rehabilitating injured joints and muscles using exercises, manual therapy, and electrotherapy" },
          { text: "Selling sports shoes in shopping malls" },
          { text: "Operating hospital billing software" },
        ],
        correctIndex: 1,
        explanation: "Physiotherapists heal through movement! They help stroke patients relearn how to walk, help elderly people relieve chronic back and knee arthritis pain, and rehabilitate athletes after ligament tears without surgery.",
        proTip: "Physiotherapists are often called 'movement doctors' because they give people their independence back!",
      },
      {
        id: 6,
        roadmapStage: "Stage 6: Sports Medicine & Celebrity Athlete Roles",
        category: "Skills to Build",
        categoryColor: "bg-purple-100 text-purple-900 border-purple-300",
        question: "Why do top sports teams (like the Indian Cricket Team, IPL franchises, and Olympic athletes) always travel with dedicated Physiotherapists?",
        options: [
          { text: "To carry sports kits and bats" },
          { text: "To prevent muscle injuries, provide immediate on-field injury treatment, and optimize athletes' physical speed and flexibility" },
          { text: "To record videos for social media" },
          { text: "To sell tickets to matches" },
        ],
        correctIndex: 1,
        explanation: "Sports physiotherapists are the secret champions behind every gold medal and cricket victory! They manage hamstring pulls, shoulder strains, on-field injury emergencies, and design tailored recovery routines.",
        proTip: "Sports Physiotherapy is one of the highest-paying and most exciting specializations in the sports world!",
      },
      {
        id: 7,
        roadmapStage: "Stage 7: Higher Postgraduate Degrees (MPT)",
        category: "College Degree & Exams",
        categoryColor: "bg-indigo-100 text-indigo-900 border-indigo-300",
        question: "After completing BPT, what postgraduate degree allows physiotherapists to become specialists in Sports, Neurology, or Orthopedics?",
        options: [
          { text: "MPT (Master of Physiotherapy) - 2 Years" },
          { text: "B.Ed School Teaching Certificate" },
          { text: "Chartered Accountant Articleship" },
          { text: "LLB Law Degree" },
        ],
        correctIndex: 0,
        explanation: "A 2-year MPT program allows specialization in Orthopedics (bones/joints), Neurology (stroke/brain injuries), Sports Physiotherapy, Pediatrics (children), or Cardiovascular Pulmonary Rehab.",
        proTip: "Specialist MPT holders often head rehabilitation departments in top multi-specialty hospitals or run private clinics.",
      },
      {
        id: 8,
        roadmapStage: "Stage 8: Skills to Build in School",
        category: "Skills to Build",
        categoryColor: "bg-rose-100 text-rose-900 border-rose-300",
        question: "What physical and personal qualities should a school student develop to become an outstanding physiotherapist?",
        options: [
          { text: "Impatience and getting irritated when someone walks slowly" },
          { text: "Physical stamina, hand dexterity, patient encouragement, and genuine empathy for people in physical pain" },
          { text: "Avoiding all physical exercise and sports" },
          { text: "Only wanting a desk job staring at a computer screen all day" },
        ],
        correctIndex: 1,
        explanation: "Physiotherapy is an active, hands-on career. It requires good personal fitness, manual strength for joint mobilizations, and positive emotional encouragement to motivate patients through recovery.",
        proTip: "Playing school sports and participating in fitness activities builds the practical bodily intuition needed for this career!",
      },
      {
        id: 9,
        roadmapStage: "Stage 9: Independent Clinic & Career Freedom",
        category: "College Degree & Exams",
        categoryColor: "bg-amber-100 text-amber-900 border-amber-300",
        question: "What unique career flexibility does a Physiotherapist enjoy compared to many other healthcare professionals?",
        options: [
          { text: "They can only work in one government hospital forever" },
          { text: "They can open their own independent physiotherapy clinic, offer home rehabilitation visits, consult for sports academies, and work flexible hours" },
          { text: "They are legally banned from opening clinics" },
          { text: "They must work only night shifts" },
        ],
        correctIndex: 1,
        explanation: "Physiotherapists have tremendous entrepreneurial freedom! They can set up private rehab centers, partner with orthopedic surgeons, consult for gyms and corporate wellness centers, or visit home-bound patients.",
        proTip: "With India's growing fitness culture and aging population, the demand for private physiotherapy clinics is booming!",
      },
      {
        id: 10,
        roadmapStage: "Stage 10: Future with AI & Robotics",
        category: "AI & Future World",
        categoryColor: "bg-purple-100 text-purple-900 border-purple-300",
        question: "How are Artificial Intelligence, wearable sensors, and robotic exoskeletons transforming physiotherapy in the modern era?",
        options: [
          { text: "Robots will make human muscles disappear" },
          { text: "Smart AI wearable bands and robotic suits help measure joint angles and assist paralysis walking, while the Physiotherapist guides recovery with human touch and motivation!" },
          { text: "People will stop exercising completely" },
          { text: "All hospitals will close their rehabilitation wings" },
        ],
        correctIndex: 1,
        explanation: "Modern rehab combines robotic walking suits (exoskeletons) and AI camera sensors to track millimeter-accurate gait improvements. But hands-on muscle manipulation, patient trust, and encouraging words can never be automated.",
        proTip: "Physiotherapy is one of the most AI-proof healthcare careers on Earth because physical touch and empathy are central to healing!",
      },
    ],
  },

  psychologist: {
    id: "psychologist",
    title: "Psychologist & Mental Health Roadmap Quiz",
    subtitle: "A student-friendly quiz for 8th, 9th & 10th classes: understanding the human mind, B.A./B.Sc Psychology, counseling, and emotional wellness!",
    icon: "🧠",
    badge: "For Classes 8th – 10th",
    gradient: "from-purple-700 via-indigo-800 to-slate-900",
    accentColor: "#7C3AED",
    description: "Fascinated by human thoughts, emotions, memory, and helping people overcome anxiety and stress? Explore the psychology roadmap: stream flexibility, bachelor's & master's degrees, RCI clinical licensing, and mental health leadership!",
    totalQuestions: 10,
    blueprintUrl: "/career-reports?career=psychologist",
    cheatSheet: [
      "Class 8-10: Love observing human behavior, active listening, showing empathy to friends, and staying curious about how the brain works.",
      "After 10th: Any stream! (Arts/Humanities, Science, or Commerce) — all are 100% eligible for Psychology degrees.",
      "Degree Pathway: 3 or 4-Year B.A. / B.Sc in Psychology $\rightarrow$ 2-Year M.A. / M.Sc in Psychology.",
      "Clinical Licensing: M.Phil in Clinical Psychology / Psy.D recognized by RCI (Rehabilitation Council of India) to practice in hospitals.",
      "Specializations: Clinical Psychology, Child & Adolescent Counseling, Sports Psychology, and Corporate Organizational Psychology.",
      "Future with AI: AI chatbots provide basic mental health tips, while human Psychologists provide deep emotional empathy, trust, and psychological healing!"
    ],
    questions: [
      {
        id: 1,
        roadmapStage: "Stage 1: Intermediate Stream Selection",
        category: "Choosing Branch / Stream",
        categoryColor: "bg-blue-100 text-blue-900 border-blue-300",
        question: "Which stream should you choose in Intermediate (Class 11 & 12) if you want to become a professional Psychologist?",
        options: [
          { text: "Only medical BiPC is accepted" },
          { text: "Any stream! (Humanities/Arts, Science MPC/BiPC, or Commerce) — psychology is open to all streams!" },
          { text: "Only Commerce is allowed" },
          { text: "You must study abroad for high school" },
        ],
        correctIndex: 1,
        explanation: "Psychology welcomes students from every stream! Humanities (Psychology, Sociology) gives early theoretical exposure, while Science (Biology) gives strong neurological understanding. Both lead to top psychology universities.",
        proTip: "Choose the stream in which you can develop strong reading comprehension, scientific inquiry, and clear writing skills!",
      },
      {
        id: 2,
        roadmapStage: "Stage 2: Undergraduate College Degree",
        category: "College Degree & Exams",
        categoryColor: "bg-indigo-100 text-indigo-900 border-indigo-300",
        question: "What is the primary undergraduate degree to begin your journey in the field of psychology?",
        options: [
          { text: "B.Tech Computer Science" },
          { text: "B.A. in Psychology or B.Sc in Psychology (3 or 4 Years)" },
          { text: "B.Com Accountancy" },
          { text: "Commercial Pilot License" },
        ],
        correctIndex: 1,
        explanation: "Students enroll in B.A. or B.Sc in Psychology after Class 12. B.A. programs emphasize social and cognitive aspects, while B.Sc programs focus heavily on neurobiology and experimental laboratory statistics.",
        proTip: "Both B.A. and B.Sc Psychology degrees are equally respected for postgraduate admissions!",
      },
      {
        id: 3,
        roadmapStage: "Stage 3: Psychologist vs Psychiatrist",
        category: "College Degree & Exams",
        categoryColor: "bg-purple-100 text-purple-900 border-purple-300",
        question: "What is the fundamental difference between a Psychologist and a Psychiatrist?",
        options: [
          { text: "There is zero difference between them" },
          { text: "A Psychiatrist is an MBBS medical doctor who can prescribe chemical medicines; a Psychologist treats through psychotherapy, counseling, and cognitive behavioral therapy" },
          { text: "A Psychologist only treats physical bone fractures" },
          { text: "A Psychiatrist only works in schools" },
        ],
        correctIndex: 1,
        explanation: "Psychiatrists complete MBBS and MD in Psychiatry and treat severe chemical brain imbalances with medications. Psychologists specialize in psychotherapy, talk therapy, personality assessments, and counseling.",
        proTip: "Psychologists and Psychiatrists often work together in hospitals as a collaborative mental health team!",
      },
      {
        id: 4,
        roadmapStage: "Stage 4: School Foundations for Psychology",
        category: "School Subjects",
        categoryColor: "bg-amber-100 text-amber-900 border-amber-300",
        question: "Which high school subject topics that you study right now in 8th, 9th, and 10th relate directly to psychology?",
        options: [
          { text: "Trigonometric height formulas only" },
          { text: "Biology (Brain Structure, Nervous System, Hormones) and Social Science (Society, Culture & Human Behavior)" },
          { text: "Metallurgy and mining ores" },
          { text: "Ancient roman currency" },
        ],
        correctIndex: 1,
        explanation: "School biology lessons on the brain (cerebrum, neuron synapses, reflex arcs, adrenaline) and social studies on human societies form the scientific and cultural bedrock of psychology.",
        proTip: "Understanding how thoughts and nervous impulses interact helps you see psychology as both an art and a science!",
      },
      {
        id: 5,
        roadmapStage: "Stage 5: What Psychologists Actually Do",
        category: "Skills to Build",
        categoryColor: "bg-teal-100 text-teal-900 border-teal-300",
        question: "What is the core mission of a practicing Counselor or Clinical Psychologist?",
        options: [
          { text: "Judging people and telling everyone their secrets on social media" },
          { text: "Providing a safe, confidential space to help individuals manage anxiety, depression, exam stress, relationship conflicts, and emotional trauma" },
          { text: "Hypnotizing people to give away their money" },
          { text: "Selling self-help books at bus stands" },
        ],
        correctIndex: 1,
        explanation: "Psychologists are compassionate, non-judgmental guides. They use scientifically validated techniques (like CBT - Cognitive Behavioral Therapy) to help people change negative thought patterns and lead joyful, fulfilling lives.",
        proTip: "A psychologist's fundamental ethical pledge is complete client confidentiality.",
      },
      {
        id: 6,
        roadmapStage: "Stage 6: Mandatory Master's Degree Duration",
        category: "Course Duration",
        categoryColor: "bg-emerald-100 text-emerald-900 border-emerald-300",
        question: "Can someone practice as a licensed independent psychologist with only a bachelor's degree in India?",
        options: [
          { text: "Yes, you can practice after Class 10" },
          { text: "No, a Master's degree (M.A. / M.Sc in Psychology - 2 Years) is the minimum standard required for professional practice" },
          { text: "Only a 2-day workshop is required" },
          { text: "You must be over 60 years old" },
        ],
        correctIndex: 1,
        explanation: "A bachelor's degree introduces basic concepts. To work with real patients or corporate clients, you must complete a 2-year Master's degree (M.A. or M.Sc) in Clinical, Counseling, or Organizational Psychology.",
        proTip: "Premier institutions for psychology include NIMHANS Bengaluru, Delhi University, TISS Mumbai, and Christ University.",
      },
      {
        id: 7,
        roadmapStage: "Stage 7: Clinical Psychology Licensing (RCI)",
        category: "College Degree & Exams",
        categoryColor: "bg-indigo-100 text-indigo-900 border-indigo-300",
        question: "Which government statutory council in India grants official licenses to Clinical Psychologists to diagnose and treat mental health disorders in hospitals?",
        options: [
          { text: "Rehabilitation Council of India (RCI) through M.Phil in Clinical Psychology / Psy.D" },
          { text: "Indian Railways Recruitment Board" },
          { text: "CBSE School Board" },
          { text: "State Police Commission" },
        ],
        correctIndex: 0,
        explanation: "To become a certified Clinical Psychologist who can practice in hospitals and sign diagnostic reports, graduates complete an RCI-recognized M.Phil in Clinical Psychology or Psy.D program.",
        proTip: "NIMHANS in Bengaluru is India's apex institute for clinical neuro-psychology training.",
      },
      {
        id: 8,
        roadmapStage: "Stage 8: Essential Skills to Build in School",
        category: "Skills to Build",
        categoryColor: "bg-rose-100 text-rose-900 border-rose-300",
        question: "What personal personality trait is the superpower of a great psychologist?",
        options: [
          { text: "Talking continuously without ever listening to others" },
          { text: "Active empathetic listening, emotional patience, non-judgmental acceptance, and keen observational sensitivity" },
          { text: "Making fun of classmates who are sad or stressed" },
          { text: "Giving quick angry advice without understanding the situation" },
        ],
        correctIndex: 1,
        explanation: "People open their deepest hearts to a psychologist. Being able to listen without interrupting, validating emotions without criticism, and holding deep empathy are the greatest psychological skills.",
        proTip: "Practice being the kind friend who listens calmly when someone is going through a tough day — that is real empathy in action!",
      },
      {
        id: 9,
        roadmapStage: "Stage 9: Diverse Career Sectors",
        category: "College Degree & Exams",
        categoryColor: "bg-blue-100 text-blue-900 border-blue-300",
        question: "Beyond hospitals, where else do modern psychologists build exciting, high-income careers?",
        options: [
          { text: "Schools (Child Counselors), Top Corporates (HR Wellness), Sports Teams (Performance Mental Coach), and Forensic Crime Investigation" },
          { text: "Only in dark basement offices" },
          { text: "Nowhere, psychology is banned outside hospitals" },
          { text: "Only in movie theaters" },
        ],
        correctIndex: 0,
        explanation: "Psychology is everywhere people are! Sports psychologists train Olympic champions to stay calm under pressure; corporate psychologists design stress-free workplaces for Google; and school counselors help students succeed.",
        proTip: "Sports psychology and corporate mental wellness are two of the fastest-growing careers in modern India!",
      },
      {
        id: 10,
        roadmapStage: "Stage 10: Mental Health in the AI Era",
        category: "AI & Future World",
        categoryColor: "bg-purple-100 text-purple-900 border-purple-300",
        question: "With mental health apps and AI chatbots offering self-care tips, why will human Psychologists be more valuable than ever?",
        options: [
          { text: "AI chatbots will completely replace human emotional relationships" },
          { text: "Mental health problems will permanently vanish from the world" },
          { text: "AI cannot genuinely feel empathy, understand cultural context, or build real human emotional trust — human connection is the core of mental healing!" },
          { text: "People will prefer talking to mechanical voice recorders" },
        ],
        correctIndex: 2,
        explanation: "A chatbot can generate words, but it cannot shed a tear with you, understand what family means to you, or hold your hand through emotional grief. Psychology is fundamentally an art of human heart and consciousness.",
        proTip: "As screens and digital isolation increase in modern life, the human need for warm, empathetic counselors will grow exponentially!",
      },
    ],
  },

  pilot: {
    id: "pilot",
    title: "Commercial Pilot Roadmap Quiz",
    subtitle: "A student-friendly quiz for 8th, 9th & 10th classes: MPC stream, flying school (200 hrs), DGCA exams, CPL license, and commanding jumbo jets!",
    icon: "✈️",
    badge: "For Classes 8th – 10th",
    gradient: "from-blue-700 via-sky-800 to-indigo-950",
    accentColor: "#0284C7",
    description: "Dream of pushing the throttles of an Airbus A320 or Boeing 777, cruising above the clouds at 900 km/h, and landing in world capitals? Master the commercial aviation roadmap: MPC stream after 10th, DGCA exams, flying academy hours, and earning your gold stripes!",
    totalQuestions: 10,
    blueprintUrl: "/career-reports?career=pilot",
    cheatSheet: [
      "Class 8-10: Master Physics (motion, aerodynamics, air pressure), Mathematics, spatial orientation, and English communication.",
      "After 10th: Mandatory MPC stream (Physics & Mathematics in Class 11 and 12 with minimum 50% marks).",
      "Key Medical Tests: Class 2 Medical Assessment followed by DGCA Class 1 Medical Examination.",
      "The Official License: CPL (Commercial Pilot License) issued by DGCA (Directorate General of Civil Aviation).",
      "Flying School: Minimum 200 flying hours on trainer aircraft (like Cessna 172) + simulator training + clearing 5 DGCA ground theory exams.",
      "Future with AI: Autopilots assist during cruise flights, while human Pilots command takeoffs, landings, stormy weather decisions, and passenger safety!"
    ],
    questions: [
      {
        id: 1,
        roadmapStage: "Stage 1: Mandatory Intermediate Stream",
        category: "Choosing Branch / Stream",
        categoryColor: "bg-blue-100 text-blue-900 border-blue-300",
        question: "Which stream MUST a student study in Intermediate (Class 11 & 12) to be legally eligible to become a Commercial Pilot in India?",
        options: [
          { text: "Commerce CEC only" },
          { text: "MPC (Mathematics and Physics are compulsory by DGCA regulations)" },
          { text: "Arts and Ancient History" },
          { text: "Any stream with zero science subjects" },
        ],
        correctIndex: 1,
        explanation: "By DGCA (Directorate General of Civil Aviation) rules, candidates must pass Class 12 with Physics and Mathematics. Non-science students must clear Physics and Maths through NIOS (National Institute of Open Schooling) before flying school.",
        proTip: "If you dream of flying, focus on understanding Physics and Mathematics deeply in high school!",
      },
      {
        id: 2,
        roadmapStage: "Stage 2: The Official Pilot License",
        category: "College Degree & Exams",
        categoryColor: "bg-indigo-100 text-indigo-900 border-indigo-300",
        question: "What is the official aviation license required to fly commercial passenger airliners for airlines like IndiGo, Air India, or SpiceJet?",
        options: [
          { text: "CPL (Commercial Pilot License)" },
          { text: "A highway commercial truck license" },
          { text: "A drone hobby certificate" },
          { text: "A railway engine driver ticket" },
        ],
        correctIndex: 0,
        explanation: "CPL (Commercial Pilot License) is the internationally recognized credential issued by the aviation regulator (DGCA in India) that legally authorizes a pilot to act as pilot-in-command of aircraft for commercial airlines.",
        proTip: "Pilots start as First Officers (Co-Pilots) with 3 stripes on their shoulders and advance to Captains with 4 golden stripes!",
      },
      {
        id: 3,
        roadmapStage: "Stage 3: Flying Training Hours",
        category: "Course Duration",
        categoryColor: "bg-emerald-100 text-emerald-900 border-emerald-300",
        question: "How many actual logged flight hours in trainer aircraft are required by DGCA to earn a Commercial Pilot License (CPL)?",
        options: [
          { text: "5 Hours" },
          { text: "Minimum 200 Flying Hours (including solo flights, cross-country navigation, and night flying)" },
          { text: "10,000 Hours" },
          { text: "Zero hours, only computer gaming is needed" },
        ],
        correctIndex: 1,
        explanation: "Cadets must log at least 200 certified flight hours in single-engine and multi-engine trainer aircraft (like Cessna 172 or Piper Seneca), including 100 hours as Pilot-in-Command (PIC), night flying, and instrument flying.",
        proTip: "Flying schools in India and abroad (USA, South Africa, New Zealand) typically take 15 to 24 months to complete these hours.",
      },
      {
        id: 4,
        roadmapStage: "Stage 4: Mandatory Medical Examinations",
        category: "Skills to Build",
        categoryColor: "bg-purple-100 text-purple-900 border-purple-300",
        question: "What strict medical examination must every prospective pilot pass before being issued a commercial license?",
        options: [
          { text: "Only a quick eye check-up at a local eyeglasses shop" },
          { text: "DGCA Class 2 Medical followed by a rigorous DGCA Class 1 Medical Examination at designated Air Force or civilian aviation centers" },
          { text: "Running a 100-meter race in under 10 seconds" },
          { text: "There are no medical checks for pilots" },
        ],
        correctIndex: 1,
        explanation: "Aviation demands flawless health. DGCA Class 1 medicals test heart ECG, lung capacity, hearing audiometry, color vision, and spatial equilibrium. Spectacles are allowed as long as vision is corrected to 6/6.",
        proTip: "It's smart to undergo a Class 2 medical right after Class 10 to confirm you meet all aviation physical standards early!",
      },
      {
        id: 5,
        roadmapStage: "Stage 5: School Physics Foundations",
        category: "School Subjects",
        categoryColor: "bg-amber-100 text-amber-900 border-amber-300",
        question: "Which high school physics principles that you study in 8th, 9th, and 10th explain how a 70-ton airplane stays up in the sky?",
        options: [
          { text: "Bernoulli's Principle (Air pressure differences creating Lift) and Newton's Third Law of Motion" },
          { text: "Photosynthesis and plant chlorophyl" },
          { text: "Chemical corrosion of rusting iron" },
          { text: "Archaeological dating of fossils" },
        ],
        correctIndex: 0,
        explanation: "Airplane wings (airfoils) are shaped so air travels faster over the curved top, creating low pressure and upward aerodynamic LIFT. Thrust from jet engines propels the aircraft forward according to Newton's action-reaction law!",
        proTip: "Understanding vectors, velocity, air density, and pressure in high school physics makes aviation ground school super intuitive!",
      },
      {
        id: 6,
        roadmapStage: "Stage 6: The 5 DGCA Ground Theory Exams",
        category: "College Degree & Exams",
        categoryColor: "bg-indigo-100 text-indigo-900 border-indigo-300",
        question: "What specialized theoretical subjects must student pilots master to clear the DGCA CPL written examinations?",
        options: [
          { text: "Air Navigation, Aviation Meteorology (Weather), Air Regulations, Technical General, and Radio Telephony (RTR)" },
          { text: "Accounting, taxation, and company law" },
          { text: "World ancient history and painting" },
          { text: "Biology cell structures only" },
        ],
        correctIndex: 0,
        explanation: "Ground school is intellectually challenging! Pilots must read weather clouds, navigate using radio beacons and GPS coordinates, understand aircraft jet engines and hydraulics, and master radio communication with Air Traffic Control (ATC).",
        proTip: "Clearing your DGCA ground exams before or alongside flying hours speeds up your CPL completion significantly.",
      },
      {
        id: 7,
        roadmapStage: "Stage 7: What Pilots Actually Do in the Cockpit",
        category: "Skills to Build",
        categoryColor: "bg-teal-100 text-teal-900 border-teal-300",
        question: "What does a Commercial Airline Pilot do on a typical flight assignment?",
        options: [
          { text: "Only serves food to passengers" },
          { text: "Conducts pre-flight weather & fuel planning, inspects aircraft exterior, communicates with ATC, commands takeoffs/landings, and navigates through turbulence" },
          { text: "Repairs the runway tarmac before takeoff" },
          { text: "Sells airline tickets at the airport gate" },
        ],
        correctIndex: 1,
        explanation: "Pilots calculate aircraft weight and balance, check weather radar for storm clouds, program flight management computers, perform takeoffs and instrument landings, and ensure the safety of hundreds of passengers aboard.",
        proTip: "The cockpit is the most magnificent office in the world with panoramic views of sunrises from 38,000 feet!",
      },
      {
        id: 8,
        roadmapStage: "Stage 8: Skills to Build in School",
        category: "Skills to Build",
        categoryColor: "bg-rose-100 text-rose-900 border-rose-300",
        question: "What mental quality and habit in high school prepares a student to be a top pilot?",
        options: [
          { text: "Panicking and crying whenever an unexpected problem happens" },
          { text: "Laser focus, quick mental math calculations, multi-tasking calmness, and disciplined situational awareness" },
          { text: "Ignoring safety rules and doing whatever you feel like" },
          { text: "Never checking things twice" },
        ],
        correctIndex: 1,
        explanation: "Aviation is built on strict discipline and checklist adherence. Pilots must remain cool-headed in turbulent storms, cross-check instrument dials with extreme precision, and make calm, calculated decisions.",
        proTip: "Playing flight simulators on PC (like Microsoft Flight Simulator) is a fantastic way to develop instrument scan habits and cockpit curiosity!",
      },
      {
        id: 9,
        roadmapStage: "Stage 9: Premier Flying Academies",
        category: "College Degree & Exams",
        categoryColor: "bg-blue-100 text-blue-900 border-blue-300",
        question: "Which government-run premier flying academy in India (under the Ministry of Civil Aviation) has trained thousands of airline captains?",
        options: [
          { text: "IGRUA (Indira Gandhi Rashtriya Uran Akademi) in Amethi, Uttar Pradesh" },
          { text: "A local driving school" },
          { text: "A state maritime sailing club" },
          { text: "A railway diesel shed" },
        ],
        correctIndex: 0,
        explanation: "IGRUA is India's premier national flying institute established by the Government of India. It conducts an all-India entrance exam, pilot aptitude test, and interview to select cadet pilots.",
        proTip: "Airlines like IndiGo and Air India also run specialized Airline Cadet Pilot Programs that guarantee a First Officer job upon successful completion!",
      },
      {
        id: 10,
        roadmapStage: "Stage 10: The Future of Piloting with AI & Autopilot",
        category: "AI & Future World",
        categoryColor: "bg-purple-100 text-purple-900 border-purple-300",
        question: "Modern passenger jets already have sophisticated fly-by-wire and autopilot systems. Why will human Pilots always command passenger aircraft?",
        options: [
          { text: "Airplanes will be permanently replaced by underground hyperloop trains" },
          { text: "Passengers will never trust a pilotless computer when flying through severe monsoons, mountain crosswinds, or engine emergencies — human judgment and instinct save lives!" },
          { text: "Computers will completely refuse to fly airplanes" },
          { text: "Airlines will shut down worldwide" },
        ],
        correctIndex: 1,
        explanation: "Autopilot is simply a tool that holds altitude and heading. When emergencies happen — like Captain Chesley Sullenberger landing safely on the Hudson River after bird strikes — human split-second courage and decision-making save hundreds of lives.",
        proTip: "Future pilots will act like tactical flight directors, managing AI systems and ensuring absolute safety for global travelers!",
      },
    ],
  },

  army: {
    id: "army",
    title: "Indian Army & Defence Officer Roadmap Quiz",
    subtitle: "A student-friendly quiz for 8th, 9th & 10th classes: NDA entrance after 12th, CDS exam, SSB interview, physical stamina, and serving the nation!",
    icon: "🎖️",
    badge: "For Classes 8th – 10th",
    gradient: "from-amber-800 via-stone-800 to-emerald-950",
    accentColor: "#B45309",
    description: "Dream of wearing the olive-green Indian Army uniform with shining stars, leading courageous soldiers, and defending the nation's borders with valor? Explore the defence leadership roadmap: streams after 10th, cracking the NDA exam, the 5-day SSB interview, and military academy life!",
    totalQuestions: 10,
    blueprintUrl: "/career-reports?career=army",
    cheatSheet: [
      "Class 8-10: Build exceptional physical fitness (running, pull-ups, sports, NCC/Scouts), mental courage, and Indian history/current affairs knowledge.",
      "After 10th: Any stream! (Arts, Commerce, or Science) is eligible for the Indian Army wing in NDA; (MPC is required for Navy & Air Force).",
      "Premier Entrance Exam: NDA (National Defence Academy) written exam conducted twice a year by UPSC for Class 12 students (age 16.5 to 19.5).",
      "The Big Test: 5-Day SSB (Services Selection Board) Interview evaluating 15 Officer Like Qualities (OLQs).",
      "Military Academies: 3 years at NDA Khadakwasla (Pune) + 1 year at IMA (Indian Military Academy, Dehradun) $\rightarrow$ Commissioned as Lieutenant!",
      "Future with AI: Modern warfare uses AI drones, satellite recon, and cyber-defense, while ground bravery, moral honor, and soldier leadership remain 100% human!"
    ],
    questions: [
      {
        id: 1,
        roadmapStage: "Stage 1: Intermediate Stream Eligibility",
        category: "Choosing Branch / Stream",
        categoryColor: "bg-blue-100 text-blue-900 border-blue-300",
        question: "Which stream can you study in Intermediate (Class 11 & 12) if your dream is to join the Indian Army as an Officer through NDA?",
        options: [
          { text: "Only computer science with coding is allowed" },
          { text: "Any stream! (Arts, Commerce, or Science) is 100% eligible for the Indian Army wing in the NDA exam!" },
          { text: "Only students from military schools can apply" },
          { text: "You cannot study in India" },
        ],
        correctIndex: 1,
        explanation: "For the Indian Army wing of NDA, students from ANY stream (Arts, Commerce, or Science) are eligible! For the Air Force and Naval wings, Mathematics and Physics (MPC) in 10+2 are compulsory.",
        proTip: "Both boys and girls are now fully eligible to appear for the UPSC NDA examination!",
      },
      {
        id: 2,
        roadmapStage: "Stage 2: The Premier Defence Exam (NDA)",
        category: "College Degree & Exams",
        categoryColor: "bg-indigo-100 text-indigo-900 border-indigo-300",
        question: "Which prestigious examination is conducted twice every year by UPSC for Class 12 students to become commissioned military officers?",
        options: [
          { text: "NDA & NA (National Defence Academy & Naval Academy) Examination" },
          { text: "NEET Medical Exam" },
          { text: "CA Foundation Exam" },
          { text: "State Board 10th Class Exam" },
        ],
        correctIndex: 0,
        explanation: "The UPSC NDA exam is India's most prestigious tri-service military entrance test. It consists of a Mathematics paper (300 marks) and a General Ability Test (GAT - 600 marks covering English, History, Geography, and Science).",
        proTip: "You can write the NDA exam while studying in Class 12 (age 16.5 to 19.5 years)!",
      },
      {
        id: 3,
        roadmapStage: "Stage 3: The Famous 5-Day SSB Interview",
        category: "College Degree & Exams",
        categoryColor: "bg-purple-100 text-purple-900 border-purple-300",
        question: "After clearing the written NDA or CDS exam, what is the world-renowned 5-day psychological and obstacle test you must clear?",
        options: [
          { text: "A lucky draw contest" },
          { text: "SSB (Services Selection Board) Interview evaluating 15 Officer Like Qualities (OLQs)" },
          { text: "A 10-minute phone call" },
          { text: "Typing speed test on computer" },
        ],
        correctIndex: 1,
        explanation: "The 5-Day SSB interview tests personality, leadership, and courage through Psychology tests (TAT, WAT), Group Testing Officer (GTO) obstacle tasks, and a personal interview by senior military officers.",
        proTip: "SSB looks for natural honesty, team spirit, courage, and quick decision-making — not artificial memorization!",
      },
      {
        id: 4,
        roadmapStage: "Stage 4: School Physical Fitness Habits",
        category: "Skills to Build",
        categoryColor: "bg-rose-100 text-rose-900 border-rose-300",
        question: "What physical routines can an 8th, 9th, or 10th class student practice daily to build the stamina needed for defence forces?",
        options: [
          { text: "Eating fried junk food and sleeping all afternoon" },
          { text: "Running endurance (2.4 km run), push-ups, pull-ups, swimming, playing outdoor sports (football/basketball), and school NCC" },
          { text: "Only playing shooting video games on smartphones" },
          { text: "Avoiding all physical outdoor movement" },
        ],
        correctIndex: 1,
        explanation: "Officer cadets at NDA undergo rigorous physical training including obstacle courses, cross-country marathons, and horse riding. Building stamina and upper-body strength in high school gives you an enormous advantage.",
        proTip: "Joining NCC (National Cadet Corps) in school builds military drill discipline and gives direct entry opportunities (NCC Special Entry) after graduation!",
      },
      {
        id: 5,
        roadmapStage: "Stage 5: High School Subjects Foundation",
        category: "School Subjects",
        categoryColor: "bg-amber-100 text-amber-900 border-amber-300",
        question: "Which school subjects that you study in 8th, 9th, and 10th carry massive weightage in the NDA General Ability Test (GAT)?",
        options: [
          { text: "English (Grammar & Comprehension), Indian History (Freedom Movement), Geography, General Science & Current Affairs" },
          { text: "Ancient hieroglyphics only" },
          { text: "Computer graphic animation" },
          { text: "Sanskrit poetic grammar only" },
        ],
        correctIndex: 0,
        explanation: "The GAT paper has 150 questions: 50 in English, and 100 in General Knowledge (Physics, Chemistry, Biology, Indian History, Indian Polity, Geography, and current national events). School NCERT books are the best preparation!",
        proTip: "Following daily news about India's armed forces, international relations, and national geography builds effortless GAT readiness.",
      },
      {
        id: 6,
        roadmapStage: "Stage 6: The Cradle of Leadership (NDA Khadakwasla)",
        category: "Course Duration",
        categoryColor: "bg-emerald-100 text-emerald-900 border-emerald-300",
        question: "Where is the legendary National Defence Academy (NDA) located, where Army, Navy, and Air Force cadets train together for 3 years?",
        options: [
          { text: "At a shopping mall in Delhi" },
          { text: "Khadakwasla near Pune, Maharashtra" },
          { text: "In a foreign embassy in London" },
          { text: "Inside a cinema studio in Mumbai" },
        ],
        correctIndex: 1,
        explanation: "NDA Khadakwasla (Pune) is the world's first tri-service military academy! Cadets earn a recognized Bachelor's degree (B.A., B.Sc., or B.Tech from JNU) while mastering military tactics, shooting, aviation, and leadership.",
        proTip: "NDA's Sudan Block and parade ground have produced three Chiefs of Defence Staff (CDS), Army Chiefs, and Param Vir Chakra heroes!",
      },
      {
        id: 7,
        roadmapStage: "Stage 7: Entry Route after College (CDS Exam)",
        category: "College Degree & Exams",
        categoryColor: "bg-indigo-100 text-indigo-900 border-indigo-300",
        question: "If a student decides to complete college graduation first (like B.Tech, B.Sc, B.Com, or B.A.), which exam allows them to join the Army as an Officer?",
        options: [
          { text: "CDS (Combined Defence Services) Examination conducted by UPSC" },
          { text: "Bank Clerk typing test" },
          { text: "Chartered Accountant Articleship" },
          { text: "A school attendance certificate" },
        ],
        correctIndex: 0,
        explanation: "UPSC conducts the CDS exam twice every year for college graduates (age 19 to 24) to enter the Indian Military Academy (IMA Dehradun) or Officers Training Academy (OTA Chennai).",
        proTip: "Engineering graduates can also apply through TGC (Technical Graduate Course) without any written exam — direct SSB interview call!",
      },
      {
        id: 8,
        roadmapStage: "Stage 8: First Rank Commissioned",
        category: "Skills to Build",
        categoryColor: "bg-teal-100 text-teal-900 border-teal-300",
        question: "When an officer passes out of the Indian Military Academy (IMA) with two shining stars on each shoulder, what is their first rank?",
        options: [
          { text: "Lieutenant (pronounced 'Lef-tenant')" },
          { text: "Field Marshal" },
          { text: "General of the Army" },
          { text: "Police Constable" },
        ],
        correctIndex: 0,
        explanation: "A newly commissioned officer starts as a Lieutenant, commanding a platoon of ~30 brave soldiers. They can rise to Captain, Major, Colonel, Brigadier, Major General, and General (Chief of the Army Staff).",
        proTip: "The famous Chetwode motto at IMA inspires every officer: 'The safety, honour and welfare of your country come first, always and every time.'",
      },
      {
        id: 9,
        roadmapStage: "Stage 9: Non-Combat Technical & Medical Corps",
        category: "College Degree & Exams",
        categoryColor: "bg-blue-100 text-blue-900 border-blue-300",
        question: "Is the Indian Army only about infantry frontline combat, or are there diverse specialized technical and scientific branches?",
        options: [
          { text: "The Army has Corps of Engineers, Signals (Telecom & Cyber), Army Medical Corps (Doctors/Nurses), Aviation Corps, and Intelligence Corps!" },
          { text: "There are zero technical roles in the Army" },
          { text: "The Army only uses wooden spears" },
          { text: "Only infantry soldiers exist in the armed forces" },
        ],
        correctIndex: 0,
        explanation: "The Indian Army operates modern tanks, missile radar defense, satellite communications, armed helicopters, and military hospitals. Doctors (AFMC), engineers (EME & Sappers), and cyber specialists serve as proud officers!",
        proTip: "AFMC Pune (Armed Forces Medical College) trains MBBS doctors who serve as Commissioned Medical Officers in the armed forces.",
      },
      {
        id: 10,
        roadmapStage: "Stage 10: The Indian Armed Forces in the Tech & AI Era",
        category: "AI & Future World",
        categoryColor: "bg-purple-100 text-purple-900 border-purple-300",
        question: "How are modern technologies like AI, surveillance drones, and electronic warfare transforming the Indian Army?",
        options: [
          { text: "Wars will be fought entirely in virtual reality video games" },
          { text: "The Army uses AI for border thermal surveillance, drone swarm strikes, and cyber defense, while human courage, tactical honor, and ground leadership win battles!" },
          { text: "Soldiers will no longer wear uniforms or train physically" },
          { text: "Borders will disappear permanently" },
        ],
        correctIndex: 1,
        explanation: "Modern Indian defence uses indigenous Tejas jets, BrahMos missiles, satellite border monitoring, and robotic bomb disposal. Yet, holding Siachen glacier at minus 40 degrees or defending our motherland will always depend on the indomitable courage of our soldiers.",
        proTip: "Serving as an Indian Army officer offers unmatched honor, pride, brotherhood, and a life of profound national purpose!",
      },
    ],
  },

  journalist: {
    id: "journalist",
    title: "Journalist & Media Reporter Roadmap Quiz",
    subtitle: "A student-friendly quiz for 8th, 9th & 10th classes: BJMC degree, investigative reporting, digital media, and defending the truth!",
    icon: "📰",
    badge: "For Classes 8th – 10th",
    gradient: "from-rose-700 via-stone-800 to-slate-950",
    accentColor: "#BE123C",
    description: "Love asking tough questions, investigating breaking news, interviewing leaders, and giving a voice to the voiceless? Discover the journalism roadmap: stream choices, BJMC / Mass Communication degrees, field reporting, and ethical storytelling in the digital age!",
    totalQuestions: 10,
    blueprintUrl: "/career-reports?career=journalist",
    cheatSheet: [
      "Class 8-10: Read daily newspapers, follow current affairs, write school essays/blogs, and practice fearless, curious questioning.",
      "After 10th: Any stream! (Arts/Humanities, Commerce, or Science) — language proficiency and general knowledge matter most.",
      "Professional Degrees: 3-Year BJMC (Bachelor of Journalism & Mass Communication) or B.A. in Journalism / English.",
      "Major Career Paths: TV News Anchor, Investigative Reporter, Digital Content Editor, Photojournalist, and Foreign Correspondent.",
      "Key Ethics: Truthful fact-checking, objectivity, protecting confidential sources, and unbiased reporting.",
      "Future with AI: AI transcribes interviews and drafts basic news feeds, while human Journalists investigate ground corruption, conduct deep interviews, and uncover the human truth!"
    ],
    questions: [
      {
        id: 1,
        roadmapStage: "Stage 1: Intermediate Stream Selection",
        category: "Choosing Branch / Stream",
        categoryColor: "bg-blue-100 text-blue-900 border-blue-300",
        question: "Which stream should you choose in Intermediate (Class 11 & 12) if your dream is to become a News Reporter or Journalist?",
        options: [
          { text: "Only Science MPC is legally permitted" },
          { text: "Any stream you like! (Arts/Humanities, Commerce, or Science) — journalism is open to all passionate writers and communicators!" },
          { text: "Only Commerce CEC is accepted" },
          { text: "You can only become a journalist after age 50" },
        ],
        correctIndex: 1,
        explanation: "Journalism has zero stream restrictions! Humanities (Political Science, History, Sociology) provides great background on government and society, but science and commerce students often excel as science, business, and tech journalists.",
        proTip: "Focus on mastering languages (English and your regional mother tongue) and building a strong reading habit in Class 11 and 12!",
      },
      {
        id: 2,
        roadmapStage: "Stage 2: The Core Professional Degree",
        category: "College Degree & Exams",
        categoryColor: "bg-indigo-100 text-indigo-900 border-indigo-300",
        question: "What is the primary undergraduate bachelor's degree designed specifically for training journalists and media professionals?",
        options: [
          { text: "MBBS Degree" },
          { text: "BJMC (Bachelor of Journalism and Mass Communication) or B.A. in Journalism (3 Years)" },
          { text: "B.Tech Mechanical Engineering" },
          { text: "Diploma in Hotel Cooking" },
        ],
        correctIndex: 1,
        explanation: "BJMC is a 3-year degree that teaches news reporting, camera handling, newsroom editing, media law, radio broadcasting, documentary filmmaking, and digital news websites.",
        proTip: "Premier institutes for journalism in India include IIMC (Indian Institute of Mass Communication, New Delhi), Symbiosis Pune, and Asian College of Journalism (ACJ Chennai).",
      },
      {
        id: 3,
        roadmapStage: "Stage 3: The Role of Journalism in Democracy",
        category: "Skills to Build",
        categoryColor: "bg-teal-100 text-teal-900 border-teal-300",
        question: "Why is Free Journalism famously known as the 'Fourth Pillar of Democracy' (alongside the Legislature, Executive, and Judiciary)?",
        options: [
          { text: "Because journalists build physical stone pillars for government buildings" },
          { text: "Because journalists hold powerful leaders accountable, uncover corruption, and inform citizens of truth so democracy functions fairly" },
          { text: "Because journalists only print movie gossip" },
          { text: "Because it is an ancient religious title" },
        ],
        correctIndex: 1,
        explanation: "A vibrant democracy cannot survive without brave journalism. Journalists expose misuse of power, report on floods and poverty, investigate financial scams, and inform citizens about their rights.",
        proTip: "Courage, fact-checking, and unbiased reporting are the moral compass of true journalism.",
      },
      {
        id: 4,
        roadmapStage: "Stage 4: School Habits to Cultivate",
        category: "School Subjects",
        categoryColor: "bg-amber-100 text-amber-900 border-amber-300",
        question: "What high school habit that you can start right now in 8th, 9th, or 10th is the best preparation for journalism?",
        options: [
          { text: "Believing everything forward-messaged on social media without verifying facts" },
          { text: "Reading newspapers daily (print or digital), writing opinion articles for school magazines, and staying curious about current affairs" },
          { text: "Refusing to read any books outside school textbooks" },
          { text: "Never asking 'why' or 'how' questions" },
        ],
        correctIndex: 1,
        explanation: "Great journalists are insatiably curious! Reading newspapers like The Hindu or Indian Express, following global news, and writing articles or blogs helps you develop an authentic storytelling voice.",
        proTip: "Try interviewing an interesting person in your town (like an artisan, teacher, or local social worker) and writing a 300-word article about their life!",
      },
      {
        id: 5,
        roadmapStage: "Stage 5: What News Reporters Do Daily",
        category: "Skills to Build",
        categoryColor: "bg-rose-100 text-rose-900 border-rose-300",
        question: "What does the daily ground reality of an active field reporter involve?",
        options: [
          { text: "Sitting in an empty locked room for 12 hours" },
          { text: "Rushing to incident sites, interviewing witnesses and ministers, cross-verifying facts, filing breaking news reports, and live broadcasting" },
          { text: "Selling televisions in appliance stores" },
          { text: "Printing newspapers on mechanical printing rollers all night" },
        ],
        correctIndex: 1,
        explanation: "Field reporting is fast-paced and adventurous! Reporters travel to flood zones, election rallies, press conferences, and courtrooms to record footage, verify sources, and report live to millions of viewers.",
        proTip: "Journalists often receive exclusive press passes to parliament sessions, sporting finals, and international summits.",
      },
      {
        id: 6,
        roadmapStage: "Stage 6: Specialized Journalism Beats",
        category: "College Degree & Exams",
        categoryColor: "bg-indigo-100 text-indigo-900 border-indigo-300",
        question: "Journalists often specialize in a specific field of interest known as a 'Beat'. Which of the following are exciting modern journalism beats?",
        options: [
          { text: "Sports Journalism, Political & Parliamentary Reporting, Business & Finance, Environmental Climate Reporting, and Technology/AI Journalism" },
          { text: "Only writing grocery bills" },
          { text: "Only recording parking tickets" },
          { text: "There are no beats in journalism" },
        ],
        correctIndex: 0,
        explanation: "Every major newspaper and TV channel has dedicated beat correspondents: Sports journalists travel with cricket teams; Tech journalists review Apple and Google gadgets; Business journalists report on stock markets.",
        proTip: "Combine your personal passion (whether it's gaming, wildlife, or politics) with journalism to build a unique specialty career!",
      },
      {
        id: 7,
        roadmapStage: "Stage 7: Postgraduate Master's Pathways",
        category: "Course Duration",
        categoryColor: "bg-emerald-100 text-emerald-900 border-emerald-300",
        question: "If a student completes regular graduation (like B.A. English or B.Sc), what postgraduate course fast-tracks their entry into top media houses?",
        options: [
          { text: "A 1-year PG Diploma or 2-year Master's in Journalism & Mass Communication (MJMC / IIMC Entrance)" },
          { text: "A 10-year doctorate in ancient pottery" },
          { text: "A 2-day computer typing course" },
          { text: "MBBS surgery residency" },
        ],
        correctIndex: 0,
        explanation: "Graduates in any field can write the IIMC entrance exam or CUET-PG to join prestigious 1-year PG Diplomas in Journalism (English, Hindi, Radio/TV), enabling campus hiring by BBC, NDTV, Times Group, and Reuters.",
        proTip: "Many top international correspondents started with a B.A. followed by an intensive 1-year journalism diploma!",
      },
      {
        id: 8,
        roadmapStage: "Stage 8: The Cardinal Rule: Fact-Checking",
        category: "Skills to Build",
        categoryColor: "bg-amber-100 text-amber-900 border-amber-300",
        question: "What is the most sacred ethical principle in professional journalism to combat fake news and misinformation?",
        options: [
          { text: "Publishing rumors as quickly as possible without checking" },
          { text: "Strict fact-checking: verifying claims with at least two independent credible sources and separating facts from personal bias" },
          { text: "Copying text from unverified social media posts" },
          { text: "Taking bribes to publish biased advertisements disguised as news" },
        ],
        correctIndex: 1,
        explanation: "A journalist's reputation is their life! True reporters never publish unverified rumors. They verify documents, interview both sides of an issue, and protect freedom of speech with utmost integrity.",
        proTip: "Before sharing any news on WhatsApp or social media, always ask: 'What is the original primary source of this information?'",
      },
      {
        id: 9,
        roadmapStage: "Stage 9: Digital Media & Podcasting Explosion",
        category: "College Degree & Exams",
        categoryColor: "bg-purple-100 text-purple-900 border-purple-300",
        question: "How has the rise of YouTube, podcasts, newsletters, and digital news websites transformed careers for young journalists?",
        options: [
          { text: "Journalism has completely died and nobody reads news anymore" },
          { text: "Young journalists can create independent YouTube news channels, host podcasts, write newsletters, and reach millions of viewers directly without needing traditional TV networks!" },
          { text: "Smartphones are banned from journalism" },
          { text: "News is only transmitted by telegram wires" },
        ],
        correctIndex: 1,
        explanation: "The digital revolution gives journalists unprecedented independence! Creators like Vox, Johnny Harris, and Indian independent media founders report on ground realities via YouTube, substacks, and podcasts, earning both high impact and income.",
        proTip: "Learning smartphone mobile journalism (MoJo) and video editing in school gives you a massive launchpad in digital media!",
      },
      {
        id: 10,
        roadmapStage: "Stage 10: Journalism in the AI & Deepfake Era",
        category: "AI & Future World",
        categoryColor: "bg-purple-100 text-purple-900 border-purple-300",
        question: "With AI tools able to write automated summaries and deepfake videos circulating online, why are real investigative Journalists more crucial than ever?",
        options: [
          { text: "AI will replace all human truth and courts will close" },
          { text: "AI cannot walk into a flood zone to verify relief camps, question corrupt politicians face-to-face, or detect deepfakes through ground truth investigation — human courage is indispensable!" },
          { text: "Deepfakes will make all information true" },
          { text: "Journalists will stop talking to human beings" },
        ],
        correctIndex: 1,
        explanation: "In an age where AI can generate fake images and cloned voices in seconds, the world desperately needs authentic, fearless human journalists who go to the physical location, verify physical evidence, look into people's eyes, and report the undeniable truth.",
        proTip: "Truth and moral courage cannot be synthesized by an algorithm — fearless journalists will always be the conscience of humanity!",
      },
    ],
  },

  "architect": {
  "id": "architect",
  "title": "Architect Roadmap Quiz",
  "subtitle": "A student-friendly quiz for 8th, 9th & 10th classes: NATA exam, 5-year B.Arch degree, drawing skills & structural design!",
  "icon": "🏛️",
  "badge": "For Classes 8th – 10th",
  "gradient": "from-amber-600 via-orange-600 to-stone-800",
  "accentColor": "#D97706",
  "description": "Dream of designing iconic skyscrapers, modern eco-friendly homes, and grand airports? Test your knowledge of the architect roadmap: MPC stream after 10th, NATA & JEE Paper 2 entrance exams, 5-year B.Arch degree, and spatial design skills!",
  "totalQuestions": 10,
  "blueprintUrl": "/career-reports?career=architect",
  "cheatSheet": [
    "Class 8-10: Practice freehand sketching, 3D geometry visualization, and perspective drawing.",
    "After 10th: Choose MPC (Maths, Physics, Chemistry) — Mathematics is legally mandatory for architecture admissions in India.",
    "Key Entrance Exams: NATA (National Aptitude Test in Architecture) & JEE Main Paper 2 (for NITs & SPAs).",
    "College Degree: 5-Year Bachelor of Architecture (B.Arch) recognized by the Council of Architecture (COA).",
    "Future with AI: Architects leverage AI for parametric blueprints and energy modeling while leading human spatial empathy!"
  ],
  "questions": [
    {
      "id": 1,
      "roadmapStage": "Stage 1: After 10th Class",
      "category": "Choosing Branch / Stream",
      "categoryColor": "bg-blue-100 text-blue-900 border-blue-300",
      "question": "Which Intermediate (10+2) stream is mandatory in India to be eligible for Architecture degree entrance exams?",
      "options": [
        {
          "text": "HEC (History, Economics, Civics)"
        },
        {
          "text": "MPC (Mathematics, Physics, Chemistry) with Mathematics as a compulsory subject"
        },
        {
          "text": "BiPC without Mathematics"
        },
        {
          "text": "CEC without Mathematics"
        }
      ],
      "correctIndex": 1,
      "explanation": "Council of Architecture (COA) guidelines strictly require candidates to have studied Mathematics and Physics in Class 12 (MPC stream) to appear for NATA and JEE Paper 2.",
      "proTip": "Keep your Maths marks above 50% in Class 11 and 12 to meet eligibility requirements."
    },
    {
      "id": 2,
      "roadmapStage": "Stage 2: Key Architecture Entrance Exam",
      "category": "College Degree & Exams",
      "categoryColor": "bg-indigo-100 text-indigo-900 border-indigo-300",
      "question": "Which nationwide aptitude test conducted by the Council of Architecture is the primary gateway for admission to B.Arch colleges in India?",
      "options": [
        {
          "text": "NEET Medical Exam"
        },
        {
          "text": "CLAT Law Exam"
        },
        {
          "text": "NATA (National Aptitude Test in Architecture)"
        },
        {
          "text": "UPSC Civil Services Exam"
        }
      ],
      "correctIndex": 2,
      "explanation": "NATA tests drawing observation, visual perception, aesthetic sensitivity, and architectural awareness. JEE Main Paper 2 is also used for admission into NITs and SPAs (School of Planning and Architecture).",
      "proTip": "NATA tests your sketching ability and 3D perception rather than rote memory!"
    },
    {
      "id": 3,
      "roadmapStage": "Stage 3: B.Arch Course Duration",
      "category": "Course Duration",
      "categoryColor": "bg-emerald-100 text-emerald-900 border-emerald-300",
      "question": "Unlike a standard 4-year B.Tech engineering degree, how many years does a full B.Arch (Bachelor of Architecture) degree take in India?",
      "options": [
        {
          "text": "3 Years"
        },
        {
          "text": "5 Years (10 Semesters including practical architectural internship)"
        },
        {
          "text": "2 Years"
        },
        {
          "text": "1 Year"
        }
      ],
      "correctIndex": 1,
      "explanation": "A professional B.Arch degree takes exactly 5 years. The extended curriculum includes intensive studio design projects, building materials labs, structural calculations, and a full practical architectural firm internship.",
      "proTip": "During the 5th year, students work on real construction sites and design their own thesis building!"
    },
    {
      "id": 4,
      "roadmapStage": "Stage 4: School Foundations",
      "category": "School Subjects",
      "categoryColor": "bg-amber-100 text-amber-900 border-amber-300",
      "question": "Which high school subject helps you understand scale, angles, symmetry, and 3D shapes needed for building blueprints?",
      "options": [
        {
          "text": "Geometry and Solid Shapes in Mathematics"
        },
        {
          "text": "Ancient Roman Poetry"
        },
        {
          "text": "Memorizing historical treaty dates"
        },
        {
          "text": "Spelling competitions"
        }
      ],
      "correctIndex": 0,
      "explanation": "Geometry is the fundamental language of architects! Understanding 2D-to-3D projection, elevations, cross-sections, and perspective begins directly with high school geometry.",
      "proTip": "Try drawing everyday objects from top-view, front-view, and side-view to build spatial intelligence."
    },
    {
      "id": 5,
      "roadmapStage": "Stage 5: Skills to Build in School",
      "category": "Skills to Build",
      "categoryColor": "bg-rose-100 text-rose-900 border-rose-300",
      "question": "What creative habit should a school student in 8th-10th class develop to become a standout future architect?",
      "options": [
        {
          "text": "Never looking at buildings or city layouts"
        },
        {
          "text": "Freehand sketching of buildings, maintaining a sketchbook, and noticing natural lighting and ventilation"
        },
        {
          "text": "Spending all day playing mindless mobile games"
        },
        {
          "text": "Copying drawings without understanding scale"
        }
      ],
      "correctIndex": 1,
      "explanation": "Maintaining a personal visual sketchbook, drawing streetscapes, observing how sunlight enters rooms, and observing structural details builds the keen eye every great architect needs.",
      "proTip": "Spend 20 minutes on weekends sketching an interesting house or heritage monument near your home."
    },
    {
      "id": 6,
      "roadmapStage": "Stage 6: Council of Architecture Registration",
      "category": "College Degree & Exams",
      "categoryColor": "bg-purple-100 text-purple-900 border-purple-300",
      "question": "In India, which statutory body legally registers architects and grants the official license to sign and approve building plans?",
      "options": [
        {
          "text": "Indian Medical Association (IMA)"
        },
        {
          "text": "Council of Architecture (COA, India)"
        },
        {
          "text": "Bar Council of India"
        },
        {
          "text": "Cricket Control Board"
        }
      ],
      "correctIndex": 1,
      "explanation": "Under the Architects Act of 1972, only individuals registered with the Council of Architecture (COA) can legally designate themselves as 'Architect' and certify building blueprints.",
      "proTip": "Passing B.Arch from a COA-approved college gives you an official COA registration number for life."
    },
    {
      "id": 7,
      "roadmapStage": "Stage 7: Architect vs Civil Engineer",
      "category": "Skills to Build",
      "categoryColor": "bg-teal-100 text-teal-900 border-teal-300",
      "question": "What is the primary difference between what an Architect does and what a Civil Engineer does?",
      "options": [
        {
          "text": "They do the exact same job with different names"
        },
        {
          "text": "Architects envision the spatial design, aesthetic beauty, and functional living flow; Civil Engineers calculate the load-bearing strength and build the physical structural framework"
        },
        {
          "text": "Civil engineers only paint the walls"
        },
        {
          "text": "Architects only manufacture cement bags"
        }
      ],
      "correctIndex": 1,
      "explanation": "Architects design the soul and spatial flow of a building (how people live, breathe, and experience space). Civil engineers make that dream structurally safe, calculating concrete, steel, and soil loads.",
      "proTip": "Architects and civil engineers work hand-in-hand as partners on every major construction project!"
    },
    {
      "id": 8,
      "roadmapStage": "Stage 8: Everyday Tools of an Architect",
      "category": "Skills to Build",
      "categoryColor": "bg-indigo-100 text-indigo-900 border-indigo-300",
      "question": "Which digital software tools do modern architects use to model 3D buildings and simulate virtual walkthroughs?",
      "options": [
        {
          "text": "MS Paint and Calculator only"
        },
        {
          "text": "AutoCAD, Revit (BIM), SketchUp, and Rhino 3D"
        },
        {
          "text": "Video game controllers only"
        },
        {
          "text": "Paper charts and wooden scales exclusively"
        }
      ],
      "correctIndex": 1,
      "explanation": "Modern architecture firms rely heavily on BIM (Building Information Modeling) software like Autodesk Revit, AutoCAD, and SketchUp to simulate 3D walkthroughs and material schedules.",
      "proTip": "You don't need these tools in high school — basic pencil sketching and curiosity for structures is all you need!"
    },
    {
      "id": 9,
      "roadmapStage": "Stage 9: Green & Sustainable Architecture",
      "category": "Choosing Branch / Stream",
      "categoryColor": "bg-emerald-100 text-emerald-900 border-emerald-300",
      "question": "Why is 'Green Sustainable Architecture' one of the fastest growing career fields in India and the world?",
      "options": [
        {
          "text": "Buildings are painted only in bright green color"
        },
        {
          "text": "Modern buildings must minimize electricity use, harness solar power, harvest rainwater, and reduce global carbon emissions"
        },
        {
          "text": "Green buildings are built completely out of grass"
        },
        {
          "text": "It is banned by the government"
        }
      ],
      "correctIndex": 1,
      "explanation": "Buildings consume nearly 40% of global energy. Eco-friendly green architects design energy-efficient spaces with natural cross-ventilation, solar panels, and low-carbon materials (LEED / IGBC standards).",
      "proTip": "Designing buildings that fight climate change is one of the most rewarding parts of modern architecture."
    },
    {
      "id": 10,
      "roadmapStage": "Stage 10: Architecture in the AI Era",
      "category": "AI & Future World",
      "categoryColor": "bg-purple-100 text-purple-900 border-purple-300",
      "question": "With Generative AI tools creating instant building renderings, why will human architects remain indispensable?",
      "options": [
        {
          "text": "AI will replace all architects and build cities by itself"
        },
        {
          "text": "AI cannot understand human emotion, local cultural heritage, physical terrain safety, or municipal building bye-laws like a creative human architect"
        },
        {
          "text": "Architects will stop designing physical buildings"
        },
        {
          "text": "Buildings will no longer require doors or windows"
        }
      ],
      "correctIndex": 1,
      "explanation": "AI generates visual concepts in seconds, but human architects ensure that spaces feel joyful, honor local community traditions, comply with life-safety laws, and survive real weather for centuries.",
      "proTip": "Future architects will use AI as a creative turbocharger to draft greener and more imaginative spaces!"
    }
  ]
},

  "scientist": {
  "id": "scientist",
  "title": "Scientist & Researcher Roadmap Quiz",
  "subtitle": "A student-friendly quiz for 8th, 9th & 10th classes: IISc/IISER entrance, B.Sc/BS-MS research degrees, CSIR-NET & ISRO/DRDO labs!",
  "icon": "🔬",
  "badge": "For Classes 8th – 10th",
  "gradient": "from-teal-600 via-cyan-600 to-blue-800",
  "accentColor": "#0D9488",
  "description": "Driven by curiosity to uncover the secrets of nature, discover new medicines, or invent clean energy? Test your scientist roadmap: MPC or BiPC stream, IISER & IISc gateways, B.Sc + M.Sc + Ph.D., and top research careers at ISRO, DRDO, CSIR & BARC!",
  "totalQuestions": 10,
  "blueprintUrl": "/career-reports?career=scientist",
  "cheatSheet": [
    "Class 8-10: Develop intense scientific curiosity, ask 'why' questions, and enjoy hands-on science experiments.",
    "After 10th: Choose MPC (for Physics/Chemistry/Maths) or BiPC (for Life Sciences/Biochem). Both lead to pure sciences!",
    "Premier Research Institutes: IISc Bangalore, 7 IISERs, NISER Bhubaneswar, and IITs (BS-MS courses).",
    "Degrees: 4-Year B.S. / 5-Year Integrated BS-MS -> Ph.D. doctorate research.",
    "Key Entrance Gateways: IAT (IISER Aptitude Test), NEST (for NISER), JEE Advanced, and CSIR-UGC NET for fellowships."
  ],
  "questions": [
    {
      "id": 1,
      "roadmapStage": "Stage 1: After 10th Class",
      "category": "Choosing Branch / Stream",
      "categoryColor": "bg-blue-100 text-blue-900 border-blue-300",
      "question": "Which Intermediate streams in India open doors to become a scientific researcher in pure sciences?",
      "options": [
        {
          "text": "Only Commerce CEC"
        },
        {
          "text": "MPC (for Physical Sciences, Chemistry & Maths) OR BiPC (for Biological & Life Sciences)"
        },
        {
          "text": "Only Arts HEC"
        },
        {
          "text": "None of the above"
        }
      ],
      "correctIndex": 1,
      "explanation": "Both MPC and BiPC lead directly into pure scientific research. Physical, chemical, and computational scientists take MPC, while biological, genetic, and pharmaceutical scientists take BiPC.",
      "proTip": "If you love both biology and mathematics, some colleges offer PCMB (Physics, Chemistry, Maths & Biology)!"
    },
    {
      "id": 2,
      "roadmapStage": "Stage 2: India's Top Pure Science Institute",
      "category": "College Degree & Exams",
      "categoryColor": "bg-indigo-100 text-indigo-900 border-indigo-300",
      "question": "Which historic university in Bangalore, founded with the vision of Jamsetji Tata and Swami Vivekananda, is India's #1 ranked institution for scientific research?",
      "options": [
        {
          "text": "Indian Institute of Science (IISc), Bangalore"
        },
        {
          "text": "Film and Television Institute of India"
        },
        {
          "text": "National Institute of Design"
        },
        {
          "text": "State Bank of India Staff College"
        }
      ],
      "correctIndex": 0,
      "explanation": "IISc Bangalore is globally recognized as India's crown jewel of scientific research, producing world-renowned discoveries in physics, aerospace, biochemistry, and quantum science.",
      "proTip": "IISc admits students after Class 12 into its Bachelor of Science (Research) program through JEE Advanced, IAT, and NEET!"
    },
    {
      "id": 3,
      "roadmapStage": "Stage 3: IISER Integrated Research Degree",
      "category": "Course Duration",
      "categoryColor": "bg-emerald-100 text-emerald-900 border-emerald-300",
      "question": "How many years does the prestigious Integrated BS-MS (Bachelor + Master of Science) dual degree take at the 7 national IISER campuses?",
      "options": [
        {
          "text": "1 Year"
        },
        {
          "text": "5 Years (combining bachelor and master scientific research)"
        },
        {
          "text": "2 Years"
        },
        {
          "text": "10 Years"
        }
      ],
      "correctIndex": 1,
      "explanation": "The IISER BS-MS program takes 5 years. Students spend the first 2 years learning interdisciplinary sciences, followed by 3 years of deep research specialization and a master's research thesis.",
      "proTip": "IISERs are located in Pune, Kolkata, Mohali, Bhopal, Thiruvananthapuram, Tirupati, and Berhampur."
    },
    {
      "id": 4,
      "roadmapStage": "Stage 4: Key Research Aptitude Exam",
      "category": "College Degree & Exams",
      "categoryColor": "bg-purple-100 text-purple-900 border-purple-300",
      "question": "Which entrance exam is conducted specifically for admission into the 7 IISER campuses and IISc pure science degree programs after Class 12?",
      "options": [
        {
          "text": "IAT (IISER Aptitude Test)"
        },
        {
          "text": "Chartered Accountancy Intermediate"
        },
        {
          "text": "Hotel Management JEE"
        },
        {
          "text": "Driving License Test"
        }
      ],
      "correctIndex": 0,
      "explanation": "The IISER Aptitude Test (IAT) tests conceptual understanding across Biology, Chemistry, Mathematics, and Physics, opening doors to top research universities in India.",
      "proTip": "Preparing well for NCERT textbooks in Class 11 and 12 gives you the solid foundation needed for IAT."
    },
    {
      "id": 5,
      "roadmapStage": "Stage 5: Scientific Method in School",
      "category": "School Subjects",
      "categoryColor": "bg-amber-100 text-amber-900 border-amber-300",
      "question": "What is the core heart of the 'Scientific Method' that you learn in high school science labs?",
      "options": [
        {
          "text": "Believing rumors without testing them"
        },
        {
          "text": "Observing phenomena, forming a hypothesis, conducting controlled experiments, and drawing evidence-based conclusions"
        },
        {
          "text": "Memorizing formulas the night before an exam and forgetting them immediately"
        },
        {
          "text": "Refusing to accept experimental results that disagree with your wish"
        }
      ],
      "correctIndex": 1,
      "explanation": "Science is about honest evidence! Real scientists observe, hypothesize, test under controlled laboratory conditions, and let empirical data guide the truth.",
      "proTip": "Next time an experiment fails in your school lab, don't worry — finding out what didn't work is how real science advances!"
    },
    {
      "id": 6,
      "roadmapStage": "Stage 6: The Doctorate (Ph.D.) Degree",
      "category": "Course Duration",
      "categoryColor": "bg-teal-100 text-teal-900 border-teal-300",
      "question": "To become a lead Principal Investigator (Scientist) in prestigious labs, what doctorate degree is usually pursued after a Master's degree?",
      "options": [
        {
          "text": "Ph.D. (Doctor of Philosophy in Science)"
        },
        {
          "text": "Standard 10th Class SSC certificate"
        },
        {
          "text": "A 1-week certificate in social media"
        },
        {
          "text": "Primary school diploma"
        }
      ],
      "correctIndex": 0,
      "explanation": "A Ph.D. typically takes 4–5 years of original laboratory research, culminating in scientific papers published in peer-reviewed journals and a doctoral dissertation.",
      "proTip": "During your Ph.D. in India, government bodies like CSIR and UGC pay you a monthly Junior Research Fellowship (JRF) stipend!"
    },
    {
      "id": 7,
      "roadmapStage": "Stage 7: Premier Indian Science Laboratories",
      "category": "Skills to Build",
      "categoryColor": "bg-rose-100 text-rose-900 border-rose-300",
      "question": "Which of these premier government institutions employs thousands of Indian research scientists across space, defense, atomic energy, and industrial research?",
      "options": [
        {
          "text": "ISRO, DRDO, BARC, and CSIR laboratories"
        },
        {
          "text": "Movie production studios"
        },
        {
          "text": "Clothing retail malls"
        },
        {
          "text": "Private bus transport stands"
        }
      ],
      "correctIndex": 0,
      "explanation": "ISRO (Space), DRDO (Defense), BARC (Atomic Energy), and CSIR (38 national labs in chemicals, genetics, metallurgy) are the backbone of India's sovereign scientific power.",
      "proTip": "Scientists at ISRO who launched the Chandrayaan-3 Moon mission started with the same school science books you are reading today!"
    },
    {
      "id": 8,
      "roadmapStage": "Stage 8: Key Qualities of a Great Scientist",
      "category": "Skills to Build",
      "categoryColor": "bg-indigo-100 text-indigo-900 border-indigo-300",
      "question": "What mindset distinguishes a breakthrough scientist from ordinary students?",
      "options": [
        {
          "text": "Never asking questions in class"
        },
        {
          "text": "Relentless curiosity, intellectual honesty, patience with failed experiments, and resilience"
        },
        {
          "text": "Only caring about quick money in 1 month"
        },
        {
          "text": "Copying research from others without giving credit"
        }
      ],
      "correctIndex": 1,
      "explanation": "Thomas Edison tested over 1,000 materials before finding the working lightbulb filament. Great scientists are driven by curiosity and never give up when experiments fail.",
      "proTip": "Cultivate the habit of asking 'How does this work?' and 'Why does this happen?' in every school lesson."
    },
    {
      "id": 9,
      "roadmapStage": "Stage 9: International Research Fellowship Exams",
      "category": "College Degree & Exams",
      "categoryColor": "bg-purple-100 text-purple-900 border-purple-300",
      "question": "Which nationwide competitive examination qualifies postgraduate science students for the Junior Research Fellowship (JRF) to fund their doctoral research in India?",
      "options": [
        {
          "text": "CSIR-UGC NET (National Eligibility Test)"
        },
        {
          "text": "Bank Clerk Typing Exam"
        },
        {
          "text": "Railway Ticket Collector Exam"
        },
        {
          "text": "State Police Constable Physical Test"
        }
      ],
      "correctIndex": 0,
      "explanation": "Clearing the CSIR-UGC NET JRF provides a generous monthly stipend and contingency grant throughout your doctoral studies in top universities and national research laboratories.",
      "proTip": "Top scorers in GATE also gain direct recruitment as Scientist 'B' in DRDO and BARC!"
    },
    {
      "id": 10,
      "roadmapStage": "Stage 10: Science in the AI Era",
      "category": "AI & Future World",
      "categoryColor": "bg-teal-100 text-teal-900 border-teal-300",
      "question": "How are modern research scientists using Artificial Intelligence (like AlphaFold) to revolutionize scientific breakthroughs?",
      "options": [
        {
          "text": "Scientists have stopped doing experiments completely"
        },
        {
          "text": "AI predicts complex 3D protein structures, simulates nuclear reactions, and discovers new battery materials in hours instead of decades, accelerating human discoveries"
        },
        {
          "text": "AI has proven that scientific laws are completely fake"
        },
        {
          "text": "Microscopes and laboratories have been abolished"
        }
      ],
      "correctIndex": 1,
      "explanation": "AI tools like DeepMind's AlphaFold have predicted over 200 million protein structures, helping human scientists discover vaccines, fight climate change, and invent clean energy materials at lightning speed.",
      "proTip": "The future belongs to scientists who combine deep physics, chemistry, or biology with AI data analysis!"
    }
  ]
},

  "pharmacist": {
  "id": "pharmacist",
  "title": "Pharmacist & Pharma Scientist Roadmap Quiz",
  "subtitle": "A student-friendly quiz for 8th, 9th & 10th classes: B.Pharm vs Pharm.D, drug formulation, clinical research & pharmacy license!",
  "icon": "💊",
  "badge": "For Classes 8th – 10th",
  "gradient": "from-teal-600 via-emerald-600 to-green-700",
  "accentColor": "#059669",
  "description": "Curious about how medicines cure diseases, how vaccines are manufactured, or how pharmacy companies test new life-saving drugs? Test your pharmacist roadmap: BiPC/MPC after 10th, B.Pharm & Pharm.D degrees, Pharmacy Council of India (PCI) licensing, and global pharma R&D!",
  "totalQuestions": 10,
  "blueprintUrl": "/career-reports?career=pharmacist",
  "cheatSheet": [
    "Class 8-10: Love chemistry, understand organic molecules, and care about human health.",
    "After 10th: Choose BiPC (Biology, Physics, Chemistry) or MPC (Maths, Physics, Chemistry) — both streams are eligible for Pharmacy in India!",
    "Key Entrance Exams: State EAPCET / CET, GPAT (for Master's), and BITS HD.",
    "Degrees: 4-Year B.Pharm (Bachelor of Pharmacy) or 6-Year Pharm.D (Doctor of Pharmacy with clinical hospital practice).",
    "Registration: Licensed by State Pharmacy Council under the Pharmacy Act 1948."
  ],
  "questions": [
    {
      "id": 1,
      "roadmapStage": "Stage 1: After 10th Class",
      "category": "Choosing Branch / Stream",
      "categoryColor": "bg-blue-100 text-blue-900 border-blue-300",
      "question": "Which Intermediate (10+2) streams in India make you eligible to study Bachelor of Pharmacy (B.Pharm)?",
      "options": [
        {
          "text": "Only Commerce CEC"
        },
        {
          "text": "Both BiPC (Biology stream) and MPC (Maths stream) are eligible!"
        },
        {
          "text": "Only Arts HEC"
        },
        {
          "text": "Only Vocational carpentry"
        }
      ],
      "correctIndex": 1,
      "explanation": "Pharmacy is unique and wonderful! The Pharmacy Council of India (PCI) allows both BiPC (Biology) and MPC (Maths) students to enroll in B.Pharm and Pharm.D degrees.",
      "proTip": "If you took MPC but are interested in medicine and healthcare, Pharmacy is an incredible direct pathway!"
    },
    {
      "id": 2,
      "roadmapStage": "Stage 2: B.Pharm Course Duration",
      "category": "Course Duration",
      "categoryColor": "bg-emerald-100 text-emerald-900 border-emerald-300",
      "question": "How many years does the standard Bachelor of Pharmacy (B.Pharm) undergraduate degree take in India?",
      "options": [
        {
          "text": "2 Years"
        },
        {
          "text": "4 Years (8 Semesters)"
        },
        {
          "text": "1 Year"
        },
        {
          "text": "6 Months"
        }
      ],
      "correctIndex": 1,
      "explanation": "B.Pharm is a 4-year professional bachelor degree covering pharmaceutics, pharmacology, medicinal chemistry, pharmaceutical analysis, and clinical trials.",
      "proTip": "Diploma holders (D.Pharm, 2 years) can join the 2nd year of B.Pharm directly through lateral entry!"
    },
    {
      "id": 3,
      "roadmapStage": "Stage 3: B.Pharm vs Pharm.D",
      "category": "College Degree & Exams",
      "categoryColor": "bg-indigo-100 text-indigo-900 border-indigo-300",
      "question": "What is the 6-year clinical doctorate course called that includes 1 full year of hospital residency beside doctors?",
      "options": [
        {
          "text": "Pharm.D (Doctor of Pharmacy)"
        },
        {
          "text": "B.Com General"
        },
        {
          "text": "ITI Electrician"
        },
        {
          "text": "B.A. Political Science"
        }
      ],
      "correctIndex": 0,
      "explanation": "Pharm.D is a 6-year professional program (5 years study + 1 year hospital internship). Pharm.D graduates work in hospitals managing patient drug safety and advising doctors on dosage.",
      "proTip": "Pharm.D graduates are entitled to use the prefix 'Dr.' as clinical pharmacy specialists!"
    },
    {
      "id": 4,
      "roadmapStage": "Stage 4: School Foundations",
      "category": "School Subjects",
      "categoryColor": "bg-amber-100 text-amber-900 border-amber-300",
      "question": "Which high school science subject forms the deepest foundation for understanding medicines and drug molecules?",
      "options": [
        {
          "text": "Chemistry (Chemical Reactions, Acids & Bases, Organic compounds)"
        },
        {
          "text": "Physical geography of volcanoes"
        },
        {
          "text": "Ancient Roman wars"
        },
        {
          "text": "Carpentry & wood cutting"
        }
      ],
      "correctIndex": 0,
      "explanation": "Medicines are biochemical molecules! Understanding how chemicals interact, dissolve, and bond inside the human body starts directly with school Chemistry.",
      "proTip": "Pay close attention to periodic tables, chemical equations, and acid-base reactions in 9th and 10th science."
    },
    {
      "id": 5,
      "roadmapStage": "Stage 5: Skills to Build in School",
      "category": "Skills to Build",
      "categoryColor": "bg-rose-100 text-rose-900 border-rose-300",
      "question": "What personal habit is essential for someone working with medicines where a tiny dose mistake could hurt someone?",
      "options": [
        {
          "text": "Careless guessing of measurements"
        },
        {
          "text": "High accuracy, attention to exact measurements, and reading labels carefully"
        },
        {
          "text": "Working in a hurry without checking expired dates"
        },
        {
          "text": "Ignoring cleanliness and hygiene"
        }
      ],
      "correctIndex": 1,
      "explanation": "Pharmacists are trusted with human lives. Precision, meticulous measurement in milligrams, understanding side effects, and double-checking labels is the gold standard of the profession.",
      "proTip": "Practice measuring ingredients precisely in school chemistry lab experiments — it trains your scientific discipline!"
    },
    {
      "id": 6,
      "roadmapStage": "Stage 6: Legal Regulatory Body",
      "category": "College Degree & Exams",
      "categoryColor": "bg-purple-100 text-purple-900 border-purple-300",
      "question": "Which national statutory body regulates pharmacy education and grants the legal Registered Pharmacist license in India?",
      "options": [
        {
          "text": "Pharmacy Council of India (PCI)"
        },
        {
          "text": "Bar Council of India"
        },
        {
          "text": "Indian Railways"
        },
        {
          "text": "Sports Authority of India"
        }
      ],
      "correctIndex": 0,
      "explanation": "The Pharmacy Council of India (PCI) governs all pharmacy colleges, ensures curriculum standards, and registers professionals under the Pharmacy Act.",
      "proTip": "Every community pharmacy or hospital drug department must have a PCI-registered pharmacist on duty by law."
    },
    {
      "id": 7,
      "roadmapStage": "Stage 7: Global Pharma Capital",
      "category": "Skills to Build",
      "categoryColor": "bg-teal-100 text-teal-900 border-teal-300",
      "question": "Why is India known worldwide as the 'Pharmacy of the World'?",
      "options": [
        {
          "text": "India imports all its medicines from small islands"
        },
        {
          "text": "Indian pharma companies manufacture over 60% of the world's global vaccines and affordable generic life-saving medicines"
        },
        {
          "text": "Medicines are banned in all other nations"
        },
        {
          "text": "Only Indian doctors know how to make tablets"
        }
      ],
      "correctIndex": 1,
      "explanation": "India produces world-class medicines supplied to over 200 countries, including Hyderabad's Genome Valley and hubs in Gujarat and Maharashtra.",
      "proTip": "A degree in pharmacy in India provides global career opportunities in research, clinical trials, and manufacturing!"
    },
    {
      "id": 8,
      "roadmapStage": "Stage 8: Diverse Career Paths",
      "category": "Skills to Build",
      "categoryColor": "bg-indigo-100 text-indigo-900 border-indigo-300",
      "question": "Besides opening a medical shop, what major high-tech careers can a B.Pharm graduate pursue?",
      "options": [
        {
          "text": "Only sweeping medical store floors"
        },
        {
          "text": "Drug Formulation R&D Scientist, Quality Assurance (QA) Officer, Clinical Research Associate, and Drug Regulatory Inspector"
        },
        {
          "text": "Repairing bus engines"
        },
        {
          "text": "Selling cement bags"
        }
      ],
      "correctIndex": 1,
      "explanation": "Pharmacy graduates work in cutting-edge research labs inventing new tablets, inspecting vaccine manufacturing lines, managing clinical trials, and working as Government Drug Inspectors.",
      "proTip": "Drug Inspector (DI) is a respected gazetted government officer role recruited through State PSCs and UPSC!"
    },
    {
      "id": 9,
      "roadmapStage": "Stage 9: Master's Entrance Exam",
      "category": "College Degree & Exams",
      "categoryColor": "bg-emerald-100 text-emerald-900 border-emerald-300",
      "question": "Which national entrance exam is cleared after B.Pharm for admission into premier M.Pharm research institutions like NIPER?",
      "options": [
        {
          "text": "GPAT (Graduate Pharmacy Aptitude Test)"
        },
        {
          "text": "Bank PO Exam"
        },
        {
          "text": "Police Physical Efficiency Test"
        },
        {
          "text": "Merchant Navy Test"
        }
      ],
      "correctIndex": 0,
      "explanation": "GPAT qualifies students for Master of Pharmacy (M.Pharm) admissions with a monthly government scholarship, opening pathways into premier institutions like NIPER (National Institute of Pharmaceutical Education and Research).",
      "proTip": "NIPER institutes are to pharmacy what IITs are to engineering!"
    },
    {
      "id": 10,
      "roadmapStage": "Stage 10: Pharmacy in the AI Era",
      "category": "AI & Future World",
      "categoryColor": "bg-purple-100 text-purple-900 border-purple-300",
      "question": "How is AI transforming modern pharmacology and drug discovery?",
      "options": [
        {
          "text": "Medicines are no longer needed because humans live forever"
        },
        {
          "text": "AI predicts which chemical compounds bind to viruses in days, speeding up drug discovery from 12 years to under 1 year, while pharmacists lead safety validation"
        },
        {
          "text": "AI creates fake medicine packets with zero chemicals"
        },
        {
          "text": "Hospitals have closed down completely"
        }
      ],
      "correctIndex": 1,
      "explanation": "AI screens billions of molecular structures in virtual labs, predicting which compound will destroy cancer cells without harming healthy tissue. Human pharmacists guide the safe formulation and clinical trials.",
      "proTip": "Learning computational chemistry and data science alongside pharmacy is the biggest superpower of the next decade!"
    }
  ]
},

  "entrepreneur": {
  "id": "entrepreneur",
  "title": "Entrepreneur & Business Founder Roadmap Quiz",
  "subtitle": "A student-friendly quiz for 8th, 9th & 10th classes: problem solving, startup incubation, business models, funding & leadership!",
  "icon": "🚀",
  "badge": "For Classes 8th – 10th",
  "gradient": "from-amber-500 via-orange-600 to-red-700",
  "accentColor": "#EA580C",
  "description": "Dream of starting your own innovative company, launching a breakthrough product, or creating jobs for thousands of people? Test your startup founder roadmap: any stream after 10th, customer empathy, building minimum viable products (MVPs), seed funding, and business scaling!",
  "totalQuestions": 10,
  "blueprintUrl": "/career-reports?career=entrepreneur",
  "cheatSheet": [
    "Class 8-10: Identify real problems around you, practice selling ideas, and understand how pocket money or small shops work.",
    "After 10th: Any stream (Commerce CEC/MEC, Science MPC/BiPC, or Arts) can build a startup!",
    "Key Concept: Building a Minimum Viable Product (MVP) to test if real customers will pay for your solution.",
    "Support Ecosystem: Startup India, T-Hub Hyderabad, college incubation cells, and angel investor networks.",
    "Future with AI: Solo founders can build AI-powered multi-million dollar products with small, agile teams!"
  ],
  "questions": [
    {
      "id": 1,
      "roadmapStage": "Stage 1: After 10th Class",
      "category": "Choosing Branch / Stream",
      "categoryColor": "bg-blue-100 text-blue-900 border-blue-300",
      "question": "Which Intermediate (10+2) stream is required to become a startup founder or entrepreneur in India?",
      "options": [
        {
          "text": "Only Science MPC"
        },
        {
          "text": "Only Commerce CEC"
        },
        {
          "text": "Any stream! Entrepreneurs come from Science, Commerce, Arts, or Vocational backgrounds"
        },
        {
          "text": "Only students who failed 10th"
        }
      ],
      "correctIndex": 2,
      "explanation": "There is no single 'entrepreneur stream'! Tech founders often study MPC/B.Tech, consumer brand founders study Commerce/BBA, and social impact founders study Arts. Passion for problem-solving is what matters.",
      "proTip": "Pick the stream that aligns with what you love building — tech, commerce, or creative services!"
    },
    {
      "id": 2,
      "roadmapStage": "Stage 2: Core Definition of an Entrepreneur",
      "category": "Skills to Build",
      "categoryColor": "bg-amber-100 text-amber-900 border-amber-300",
      "question": "What is the true definition of an entrepreneur?",
      "options": [
        {
          "text": "Someone who sits at home waiting for a government salary"
        },
        {
          "text": "Someone who identifies a painful problem in society, creates a valuable product or service to solve it, and builds a sustainable business around it"
        },
        {
          "text": "Someone who only spends their parents' money on luxury items"
        },
        {
          "text": "Someone who dislikes talking to customers"
        }
      ],
      "correctIndex": 1,
      "explanation": "Entrepreneurs are problem solvers! From Zomato solving food delivery to Zoho solving business software, every great company starts by making people's daily lives easier.",
      "proTip": "Look around your school or neighborhood today: what is one problem people complain about that you could fix?"
    },
    {
      "id": 3,
      "roadmapStage": "Stage 3: What is an MVP?",
      "category": "Skills to Build",
      "categoryColor": "bg-emerald-100 text-emerald-900 border-emerald-300",
      "question": "In the startup world, what does 'MVP' stand for?",
      "options": [
        {
          "text": "Most Valuable Player in cricket"
        },
        {
          "text": "Minimum Viable Product — the simplest basic version of your idea that real customers can test and use"
        },
        {
          "text": "Maximum Video Player on YouTube"
        },
        {
          "text": "Mobile Vehicle Parking"
        }
      ],
      "correctIndex": 1,
      "explanation": "Smart founders don't spend 3 years building a giant product in secret. They build a simple 'Minimum Viable Product' (MVP) in a few weeks to see if people actually want it.",
      "proTip": "Before spending money, talk to 10 potential customers and ask if they would pay for your idea!"
    },
    {
      "id": 4,
      "roadmapStage": "Stage 4: School Foundations",
      "category": "School Subjects",
      "categoryColor": "bg-blue-100 text-blue-900 border-blue-300",
      "question": "Which high school subject teaches you how profit, revenue, costs, and percentage margins work?",
      "options": [
        {
          "text": "Commercial Mathematics (Arithmetic, Profit & Loss, Percentages, Simple Interest)"
        },
        {
          "text": "Drawing maps of ancient empires"
        },
        {
          "text": "Memorizing Sanskrit hymns"
        },
        {
          "text": "Gymnasium running drills"
        }
      ],
      "correctIndex": 0,
      "explanation": "If you don't understand profit and loss, you can't run a company! High school arithmetic on costs, revenue, profit margins, and discounts is the daily math of every CEO.",
      "proTip": "Master Profit & Loss problems in Class 8, 9, and 10 maths — that's the real language of business!"
    },
    {
      "id": 5,
      "roadmapStage": "Stage 5: Skills to Build in School",
      "category": "Skills to Build",
      "categoryColor": "bg-rose-100 text-rose-900 border-rose-300",
      "question": "What real-world activity in school helps you build early entrepreneurial confidence?",
      "options": [
        {
          "text": "Organizing a school exhibition stall, running a club, or leading a science fair project team"
        },
        {
          "text": "Never participating in any school event"
        },
        {
          "text": "Blaming team members whenever something goes wrong"
        },
        {
          "text": "Spending all day on social media scrolling"
        }
      ],
      "correctIndex": 0,
      "explanation": "Managing budgets for a school fest, convincing friends to join a project, and selling tickets or food at an exhibition teaches you marketing, leadership, and resource management.",
      "proTip": "Volunteer to lead a school stall or club event — it's the safest sandbox to practice leadership!"
    },
    {
      "id": 6,
      "roadmapStage": "Stage 6: College Incubation Hubs",
      "category": "College Degree & Exams",
      "categoryColor": "bg-purple-100 text-purple-900 border-purple-300",
      "question": "What is an organization called (like T-Hub Hyderabad or college incubation centers) that provides free office space, mentors, and seed money to young student founders?",
      "options": [
        {
          "text": "A prison"
        },
        {
          "text": "A Startup Incubator / Accelerator"
        },
        {
          "text": "A movie theater"
        },
        {
          "text": "A railway platform"
        }
      ],
      "correctIndex": 1,
      "explanation": "Incubators help baby companies grow! India has world-class incubators like T-Hub, NSRCEL (IIM Bangalore), and IIT Innovation Hubs that nurture young student ideas into funded enterprises.",
      "proTip": "Most top Indian colleges now have active student e-cells (Entrepreneurship Cells) and incubators on campus!"
    },
    {
      "id": 7,
      "roadmapStage": "Stage 7: How Startups Raise Money",
      "category": "College Degree & Exams",
      "categoryColor": "bg-indigo-100 text-indigo-900 border-indigo-300",
      "question": "When a startup needs funds to hire engineers and expand, who are the people that invest money in exchange for a small percentage ownership (equity) in the company?",
      "options": [
        {
          "text": "Angel Investors and Venture Capitalists (VCs)"
        },
        {
          "text": "Traffic police officers"
        },
        {
          "text": "Local bus conductors"
        },
        {
          "text": "Library book keepers"
        }
      ],
      "correctIndex": 0,
      "explanation": "Angel Investors (successful individuals) and Venture Capital funds invest risk capital into promising startups to help them scale rapidly nationwide and globally.",
      "proTip": "Shows like Shark Tank India demonstrate how real founders pitch their business models to angel investors!"
    },
    {
      "id": 8,
      "roadmapStage": "Stage 8: Customer Empathy & Feedback",
      "category": "Skills to Build",
      "categoryColor": "bg-teal-100 text-teal-900 border-teal-300",
      "question": "Why do the greatest founders spend hours talking directly to their customers?",
      "options": [
        {
          "text": "Because they have no other work to do"
        },
        {
          "text": "Because listening to customer complaints reveals exactly what product features need fixing and builds deep loyalty"
        },
        {
          "text": "To argue with them and prove the customer is wrong"
        },
        {
          "text": "To collect phone numbers for fun"
        }
      ],
      "correctIndex": 1,
      "explanation": "Customer empathy is a founder's secret weapon. If your users love your product and tell their friends, your business grows automatically through word-of-mouth.",
      "proTip": "Never get defensive when someone criticizes your project — feedback is free advice to get better!"
    },
    {
      "id": 9,
      "roadmapStage": "Stage 9: Government Initiatives in India",
      "category": "College Degree & Exams",
      "categoryColor": "bg-emerald-100 text-emerald-900 border-emerald-300",
      "question": "Which flagship Government of India initiative provides tax exemptions, easy patent filing, and seed funds to encourage young Indian entrepreneurs?",
      "options": [
        {
          "text": "Startup India & Standup India"
        },
        {
          "text": "Indian Postal Railway"
        },
        {
          "text": "National Forest Service"
        },
        {
          "text": "Old Age Pension Board"
        }
      ],
      "correctIndex": 0,
      "explanation": "Startup India has registered over 100,000+ recognized startups, making India the 3rd largest startup ecosystem in the entire world with over 110+ unicorns!",
      "proTip": "India is one of the most exciting countries in the world right now to build a new business."
    },
    {
      "id": 10,
      "roadmapStage": "Stage 10: Entrepreneurship in the AI Era",
      "category": "AI & Future World",
      "categoryColor": "bg-purple-100 text-purple-900 border-purple-300",
      "question": "How has modern Artificial Intelligence empowered young students to launch businesses with very little money?",
      "options": [
        {
          "text": "Nobody can start businesses anymore"
        },
        {
          "text": "AI helps solo founders generate code, design logos, write marketing emails, and automate customer support in hours, reducing startup costs to nearly zero!"
        },
        {
          "text": "AI forces all businesses to close down"
        },
        {
          "text": "AI is only used for playing computer games"
        }
      ],
      "correctIndex": 1,
      "explanation": "Today, a smart high school or college student with an AI assistant can build what previously took a 20-person engineering team. The cost of trying a new idea has never been lower in human history!",
      "proTip": "Your ideas and courage matter more than big money — learn to leverage AI tools to build your dreams!"
    }
  ]
},

  "ips": {
  "id": "ips",
  "title": "IPS (Indian Police Service) Roadmap Quiz",
  "subtitle": "A student-friendly quiz for 8th, 9th & 10th classes: UPSC CSE exam, SVPNPA Hyderabad training, law enforcement & leadership!",
  "icon": "🛡️",
  "badge": "For Classes 8th – 10th",
  "gradient": "from-blue-700 via-indigo-800 to-slate-900",
  "accentColor": "#1E40AF",
  "description": "Want to become a IPS (Indian Police Service)? Test if you know the exact roadmap: stream choices after 10th, required degrees, key entrance exams, and skills needed to excel!",
  "totalQuestions": 10,
  "blueprintUrl": "/career-reports?career=ips",
  "cheatSheet": [
    "Class 8-10: Focus on Social Studies (Civics, Indian Constitution, History, Geography) and build Physical fitness (daily running).",
    "After 10th: Choose Any Intermediate stream (MPC, BiPC, CEC, HEC) + Any recognized Bachelor's Degree.",
    "Key Gateways: Prepare for UPSC Civil Services Examination (CSE).",
    "Degree & Duration: 3–4 Years Degree + 1–2 Years UPSC preparation & 2 Years SVPNPA training.",
    "Future with AI: AI helps police forces analyze cyber fraud and traffic hotspots, while human IPS officers ensure constitutional justice and bravery."
  ],
  "questions": [
    {
      "id": 1,
      "roadmapStage": "Stage 1: After 10th Class",
      "category": "Choosing Branch / Stream",
      "categoryColor": "bg-blue-100 text-blue-900 border-blue-300",
      "question": "When you pass Class 10, which Intermediate (10+2) stream should you choose to become a IPS (Indian Police Service)?",
      "options": [
        {
          "text": "Any irrelevant vocational stream without checking eligibility"
        },
        {
          "text": "Any Intermediate stream (MPC, BiPC, CEC, HEC) + Any recognized Bachelor's Degree"
        },
        {
          "text": "Drop out of school after Class 10"
        },
        {
          "text": "Only study arts without required core subjects"
        }
      ],
      "correctIndex": 1,
      "explanation": "Any Intermediate stream (MPC, BiPC, CEC, HEC) + Any recognized Bachelor's Degree. Meeting the right stream criteria in 11th and 12th is the vital first step on this roadmap!",
      "proTip": "Check the exact entrance eligibility early in 10th class so you pick your Intermediate stream with 100% confidence!"
    },
    {
      "id": 2,
      "roadmapStage": "Stage 2: Training & Degree Duration",
      "category": "Course Duration",
      "categoryColor": "bg-emerald-100 text-emerald-900 border-emerald-300",
      "question": "How much time does it take to complete the foundational qualification and training for this career pathway?",
      "options": [
        {
          "text": "Just a 1-day certificate course"
        },
        {
          "text": "15 years of only theoretical reading"
        },
        {
          "text": "3–4 Years Degree + 1–2 Years UPSC preparation & 2 Years SVPNPA training"
        },
        {
          "text": "6 weeks of online videos"
        }
      ],
      "correctIndex": 2,
      "explanation": "This professional pathway takes 3–4 Years Degree + 1–2 Years UPSC preparation & 2 Years SVPNPA training. True professional expertise requires structured degrees, lab experiments, and hands-on practical postings.",
      "proTip": "Focus on mastering concepts every single year rather than rushing through degrees!"
    },
    {
      "id": 3,
      "roadmapStage": "Stage 3: Gateway Degree & Entrance Exam",
      "category": "College Degree & Exams",
      "categoryColor": "bg-indigo-100 text-indigo-900 border-indigo-300",
      "question": "Which key examination or degree gateway is central to entering this professional career in India?",
      "options": [
        {
          "text": "UPSC Civil Services Examination (CSE) — Prelims, Mains & Personality Interview"
        },
        {
          "text": "A random lucky lottery draw"
        },
        {
          "text": "Paying an unauthorized private middleman"
        },
        {
          "text": "Only writing a high school spelling test"
        }
      ],
      "correctIndex": 0,
      "explanation": "UPSC Civil Services Examination (CSE) — Prelims, Mains & Personality Interview. Clearing standard national or state entrances guarantees transparent admission into top accredited colleges and government commissions.",
      "proTip": "Previous years' question papers and conceptual NCERT mastery are your best friends when preparing for this gateway!"
    },
    {
      "id": 4,
      "roadmapStage": "Stage 4: School Foundations",
      "category": "School Subjects",
      "categoryColor": "bg-amber-100 text-amber-900 border-amber-300",
      "question": "Which subject that you study right now in 8th, 9th, or 10th class builds the deepest foundation for this career?",
      "options": [
        {
          "text": "Memorizing movie trivia"
        },
        {
          "text": "Playing mobile games during study hours"
        },
        {
          "text": "Social Studies (Civics, Indian Constitution, History, Geography) & English reading"
        },
        {
          "text": "Sleeping in the classroom"
        }
      ],
      "correctIndex": 2,
      "explanation": "Social Studies (Civics, Indian Constitution, History, Geography) & English reading. What you are learning in school right now directly connects to this field!",
      "proTip": "Pay extra attention when your teacher covers these topics in class — you are building the foundation of your future profession!"
    },
    {
      "id": 5,
      "roadmapStage": "Stage 5: High School Habits to Build",
      "category": "Skills to Build",
      "categoryColor": "bg-rose-100 text-rose-900 border-rose-300",
      "question": "As an 8th, 9th, or 10th student, what real habit should you start cultivating to prepare for this profession?",
      "options": [
        {
          "text": "Physical fitness (daily running), mental honesty, reading newspapers, and public leadership"
        },
        {
          "text": "Refusing to do school assignments on time"
        },
        {
          "text": "Spending 6 hours a day arguing on social media"
        },
        {
          "text": "Giving up whenever a lesson feels slightly challenging"
        }
      ],
      "correctIndex": 0,
      "explanation": "Physical fitness (daily running), mental honesty, reading newspapers, and public leadership. Great professionals develop their discipline, focus, and core habits long before they enter college.",
      "proTip": "Start with just 20 minutes a day practicing this habit — consistency over weeks and months creates champions!"
    },
    {
      "id": 6,
      "roadmapStage": "Stage 6: Premier Institutions & Regulators",
      "category": "College Degree & Exams",
      "categoryColor": "bg-purple-100 text-purple-900 border-purple-300",
      "question": "Which premier institutions or statutory bodies are recognized across India for this professional discipline?",
      "options": [
        {
          "text": "Unrecognized fake coaching websites with no campus"
        },
        {
          "text": "Sardar Vallabhbhai Patel National Police Academy (SVPNPA) in Hyderabad"
        },
        {
          "text": "Local amusement parks"
        },
        {
          "text": "Private bus booking counters"
        }
      ],
      "correctIndex": 1,
      "explanation": "Sardar Vallabhbhai Patel National Police Academy (SVPNPA) in Hyderabad. Studying in premier recognized institutions gives you top laboratory facilities, experienced mentors, and world-class campus recruitment.",
      "proTip": "Visit the official websites of these premier institutes online — seeing campus photos and student projects will inspire you!"
    },
    {
      "id": 7,
      "roadmapStage": "Stage 7: Everyday Role & Purpose",
      "category": "Skills to Build",
      "categoryColor": "bg-teal-100 text-teal-900 border-teal-300",
      "question": "What is the real day-to-day mission and responsibility of professionals working in this field?",
      "options": [
        {
          "text": "Sitting idle in an empty room with zero responsibilities"
        },
        {
          "text": "Taking shortcuts and breaking ethics"
        },
        {
          "text": "Leading district police forces, crime investigation, counter-terrorism, and public safety"
        },
        {
          "text": "Only showing up once a year"
        }
      ],
      "correctIndex": 2,
      "explanation": "Leading district police forces, crime investigation, counter-terrorism, and public safety. Professionals in this field play a critical role in strengthening society, public welfare, and national progress.",
      "proTip": "A career is not just a monthly paycheck — it is your daily opportunity to solve meaningful problems and make people's lives better!"
    },
    {
      "id": 8,
      "roadmapStage": "Stage 8: Career Ladder & Promotion",
      "category": "Course Duration",
      "categoryColor": "bg-indigo-100 text-indigo-900 border-indigo-300",
      "question": "As you gain experience and demonstrate exceptional leadership, what does your long-term career growth path look like?",
      "options": [
        {
          "text": "ASP -> SP / DCP -> DIG -> Inspector General (IG) -> Director General of Police (DGP) / CBI / IB Director"
        },
        {
          "text": "Staying in an entry-level trainee role forever with no advancement"
        },
        {
          "text": "Demotions every year"
        },
        {
          "text": "Being fired immediately without reason"
        }
      ],
      "correctIndex": 0,
      "explanation": "ASP -> SP / DCP -> DIG -> Inspector General (IG) -> Director General of Police (DGP) / CBI / IB Director. With consistent hard work, continuous learning, and integrity, you can rise to senior national leadership positions!",
      "proTip": "Never stop learning new skills — the best leaders in this field keep updating their knowledge throughout their lives!"
    },
    {
      "id": 9,
      "roadmapStage": "Stage 9: Mindset & Professional Ethics",
      "category": "Skills to Build",
      "categoryColor": "bg-amber-100 text-amber-900 border-amber-300",
      "question": "What is the single most vital quality that earns deep respect and enduring trust in this profession?",
      "options": [
        {
          "text": "Showing off with arrogance"
        },
        {
          "text": "High personal integrity, empathy for citizens, and relentless dedication to quality"
        },
        {
          "text": "Blaming others for your own mistakes"
        },
        {
          "text": "Accepting bribes and cutting safety corners"
        }
      ],
      "correctIndex": 1,
      "explanation": "Integrity and genuine dedication to quality are irreplaceable! In every high-impact career, your reputation and honest character are your greatest assets.",
      "proTip": "Always be honest in your school tests and assignments — true character is built through small choices made every day."
    },
    {
      "id": 10,
      "roadmapStage": "Stage 10: Future World & AI Collaboration",
      "category": "AI & Future World",
      "categoryColor": "bg-purple-100 text-purple-900 border-purple-300",
      "question": "How will modern Artificial Intelligence (AI) and technology assist human professionals in this career over the next decade?",
      "options": [
        {
          "text": "AI will eliminate the entire profession and humans will have no jobs"
        },
        {
          "text": "AI helps police forces analyze cyber fraud and traffic hotspots, while human IPS officers ensure constitutional justice and bravery"
        },
        {
          "text": "Computers will be outlawed in this profession"
        },
        {
          "text": "Nothing will change from 200 years ago"
        }
      ],
      "correctIndex": 1,
      "explanation": "AI helps police forces analyze cyber fraud and traffic hotspots, while human IPS officers ensure constitutional justice and bravery. AI is a powerful assistant, but human empathy, critical judgment, moral courage, and physical action will always lead the future!",
      "proTip": "Embrace modern technology as a co-pilot, while building your unique human strengths of empathy, creativity, and leadership!"
    }
  ]
},

  "navy-airforce": {
  "id": "navy-airforce",
  "title": "Indian Navy & Air Force Officer Roadmap Quiz",
  "subtitle": "A student-friendly quiz for 8th, 9th & 10th classes: NDA / AFCAT / INA, fighter pilot wings, naval warships & national defense!",
  "icon": "⚓",
  "badge": "For Classes 8th – 10th",
  "gradient": "from-sky-700 via-blue-800 to-indigo-950",
  "accentColor": "#0369A1",
  "description": "Want to become a Indian Navy & Air Force Officer? Test if you know the exact roadmap: stream choices after 10th, required degrees, key entrance exams, and skills needed to excel!",
  "totalQuestions": 10,
  "blueprintUrl": "/career-reports?career=navy-airforce",
  "cheatSheet": [
    "Class 8-10: Focus on Physics (mechanics, optics, aerodynamics) and Mathematics (calculus, trigonometry) and build Strict discipline.",
    "After 10th: Choose Compulsory MPC (Maths & Physics) in Intermediate Class 11-12.",
    "Key Gateways: Prepare for UPSC NDA (National Defence Academy) or AFCAT / CDS / INET exams + 5-day SSB Interview.",
    "Degree & Duration: 3 Years joint NDA training + 1 Year Air Force Academy (AFA Dundigal) or Indian Naval Academy (INA Ezhimala).",
    "Future with AI: Unmanned stealth drones and AI radars assist tactical navigation, while human military pilots make split-second strategic combat decisions."
  ],
  "questions": [
    {
      "id": 1,
      "roadmapStage": "Stage 1: After 10th Class",
      "category": "Choosing Branch / Stream",
      "categoryColor": "bg-blue-100 text-blue-900 border-blue-300",
      "question": "When you pass Class 10, which Intermediate (10+2) stream should you choose to become a Indian Navy & Air Force Officer?",
      "options": [
        {
          "text": "Any irrelevant vocational stream without checking eligibility"
        },
        {
          "text": "Compulsory MPC (Maths & Physics) in Intermediate Class 11-12"
        },
        {
          "text": "Drop out of school after Class 10"
        },
        {
          "text": "Only study arts without required core subjects"
        }
      ],
      "correctIndex": 1,
      "explanation": "Compulsory MPC (Maths & Physics) in Intermediate Class 11-12. Meeting the right stream criteria in 11th and 12th is the vital first step on this roadmap!",
      "proTip": "Check the exact entrance eligibility early in 10th class so you pick your Intermediate stream with 100% confidence!"
    },
    {
      "id": 2,
      "roadmapStage": "Stage 2: Training & Degree Duration",
      "category": "Course Duration",
      "categoryColor": "bg-emerald-100 text-emerald-900 border-emerald-300",
      "question": "How much time does it take to complete the foundational qualification and training for this career pathway?",
      "options": [
        {
          "text": "Just a 1-day certificate course"
        },
        {
          "text": "15 years of only theoretical reading"
        },
        {
          "text": "3 Years joint NDA training + 1 Year Air Force Academy (AFA Dundigal) or Indian Naval Academy (INA Ezhimala)"
        },
        {
          "text": "6 weeks of online videos"
        }
      ],
      "correctIndex": 2,
      "explanation": "This professional pathway takes 3 Years joint NDA training + 1 Year Air Force Academy (AFA Dundigal) or Indian Naval Academy (INA Ezhimala). True professional expertise requires structured degrees, lab experiments, and hands-on practical postings.",
      "proTip": "Focus on mastering concepts every single year rather than rushing through degrees!"
    },
    {
      "id": 3,
      "roadmapStage": "Stage 3: Gateway Degree & Entrance Exam",
      "category": "College Degree & Exams",
      "categoryColor": "bg-indigo-100 text-indigo-900 border-indigo-300",
      "question": "Which key examination or degree gateway is central to entering this professional career in India?",
      "options": [
        {
          "text": "UPSC NDA (National Defence Academy) or AFCAT / CDS / INET exams + 5-day SSB Interview"
        },
        {
          "text": "A random lucky lottery draw"
        },
        {
          "text": "Paying an unauthorized private middleman"
        },
        {
          "text": "Only writing a high school spelling test"
        }
      ],
      "correctIndex": 0,
      "explanation": "UPSC NDA (National Defence Academy) or AFCAT / CDS / INET exams + 5-day SSB Interview. Clearing standard national or state entrances guarantees transparent admission into top accredited colleges and government commissions.",
      "proTip": "Previous years' question papers and conceptual NCERT mastery are your best friends when preparing for this gateway!"
    },
    {
      "id": 4,
      "roadmapStage": "Stage 4: School Foundations",
      "category": "School Subjects",
      "categoryColor": "bg-amber-100 text-amber-900 border-amber-300",
      "question": "Which subject that you study right now in 8th, 9th, or 10th class builds the deepest foundation for this career?",
      "options": [
        {
          "text": "Memorizing movie trivia"
        },
        {
          "text": "Playing mobile games during study hours"
        },
        {
          "text": "Physics (mechanics, optics, aerodynamics) and Mathematics (calculus, trigonometry)"
        },
        {
          "text": "Sleeping in the classroom"
        }
      ],
      "correctIndex": 2,
      "explanation": "Physics (mechanics, optics, aerodynamics) and Mathematics (calculus, trigonometry). What you are learning in school right now directly connects to this field!",
      "proTip": "Pay extra attention when your teacher covers these topics in class — you are building the foundation of your future profession!"
    },
    {
      "id": 5,
      "roadmapStage": "Stage 5: High School Habits to Build",
      "category": "Skills to Build",
      "categoryColor": "bg-rose-100 text-rose-900 border-rose-300",
      "question": "As an 8th, 9th, or 10th student, what real habit should you start cultivating to prepare for this profession?",
      "options": [
        {
          "text": "Strict discipline, 5km daily running, pushups, swimming, NCC participation, and outdoor sports"
        },
        {
          "text": "Refusing to do school assignments on time"
        },
        {
          "text": "Spending 6 hours a day arguing on social media"
        },
        {
          "text": "Giving up whenever a lesson feels slightly challenging"
        }
      ],
      "correctIndex": 0,
      "explanation": "Strict discipline, 5km daily running, pushups, swimming, NCC participation, and outdoor sports. Great professionals develop their discipline, focus, and core habits long before they enter college.",
      "proTip": "Start with just 20 minutes a day practicing this habit — consistency over weeks and months creates champions!"
    },
    {
      "id": 6,
      "roadmapStage": "Stage 6: Premier Institutions & Regulators",
      "category": "College Degree & Exams",
      "categoryColor": "bg-purple-100 text-purple-900 border-purple-300",
      "question": "Which premier institutions or statutory bodies are recognized across India for this professional discipline?",
      "options": [
        {
          "text": "Unrecognized fake coaching websites with no campus"
        },
        {
          "text": "Air Force Academy (Hyderabad) / Indian Naval Academy (Ezhimala, Kerala) / NDA (Pune)"
        },
        {
          "text": "Local amusement parks"
        },
        {
          "text": "Private bus booking counters"
        }
      ],
      "correctIndex": 1,
      "explanation": "Air Force Academy (Hyderabad) / Indian Naval Academy (Ezhimala, Kerala) / NDA (Pune). Studying in premier recognized institutions gives you top laboratory facilities, experienced mentors, and world-class campus recruitment.",
      "proTip": "Visit the official websites of these premier institutes online — seeing campus photos and student projects will inspire you!"
    },
    {
      "id": 7,
      "roadmapStage": "Stage 7: Everyday Role & Purpose",
      "category": "Skills to Build",
      "categoryColor": "bg-teal-100 text-teal-900 border-teal-300",
      "question": "What is the real day-to-day mission and responsibility of professionals working in this field?",
      "options": [
        {
          "text": "Sitting idle in an empty room with zero responsibilities"
        },
        {
          "text": "Taking shortcuts and breaking ethics"
        },
        {
          "text": "Commanding advanced missile destroyers, flying supersonic fighter jets (Rafale/Su-30), and maritime border surveillance"
        },
        {
          "text": "Only showing up once a year"
        }
      ],
      "correctIndex": 2,
      "explanation": "Commanding advanced missile destroyers, flying supersonic fighter jets (Rafale/Su-30), and maritime border surveillance. Professionals in this field play a critical role in strengthening society, public welfare, and national progress.",
      "proTip": "A career is not just a monthly paycheck — it is your daily opportunity to solve meaningful problems and make people's lives better!"
    },
    {
      "id": 8,
      "roadmapStage": "Stage 8: Career Ladder & Promotion",
      "category": "Course Duration",
      "categoryColor": "bg-indigo-100 text-indigo-900 border-indigo-300",
      "question": "As you gain experience and demonstrate exceptional leadership, what does your long-term career growth path look like?",
      "options": [
        {
          "text": "Sub-Lieutenant / Flying Officer -> Lieutenant Commander / Squadron Leader -> Commodore / Air Commodore -> Admiral / Air Chief Marshal"
        },
        {
          "text": "Staying in an entry-level trainee role forever with no advancement"
        },
        {
          "text": "Demotions every year"
        },
        {
          "text": "Being fired immediately without reason"
        }
      ],
      "correctIndex": 0,
      "explanation": "Sub-Lieutenant / Flying Officer -> Lieutenant Commander / Squadron Leader -> Commodore / Air Commodore -> Admiral / Air Chief Marshal. With consistent hard work, continuous learning, and integrity, you can rise to senior national leadership positions!",
      "proTip": "Never stop learning new skills — the best leaders in this field keep updating their knowledge throughout their lives!"
    },
    {
      "id": 9,
      "roadmapStage": "Stage 9: Mindset & Professional Ethics",
      "category": "Skills to Build",
      "categoryColor": "bg-amber-100 text-amber-900 border-amber-300",
      "question": "What is the single most vital quality that earns deep respect and enduring trust in this profession?",
      "options": [
        {
          "text": "Showing off with arrogance"
        },
        {
          "text": "High personal integrity, empathy for citizens, and relentless dedication to quality"
        },
        {
          "text": "Blaming others for your own mistakes"
        },
        {
          "text": "Accepting bribes and cutting safety corners"
        }
      ],
      "correctIndex": 1,
      "explanation": "Integrity and genuine dedication to quality are irreplaceable! In every high-impact career, your reputation and honest character are your greatest assets.",
      "proTip": "Always be honest in your school tests and assignments — true character is built through small choices made every day."
    },
    {
      "id": 10,
      "roadmapStage": "Stage 10: Future World & AI Collaboration",
      "category": "AI & Future World",
      "categoryColor": "bg-purple-100 text-purple-900 border-purple-300",
      "question": "How will modern Artificial Intelligence (AI) and technology assist human professionals in this career over the next decade?",
      "options": [
        {
          "text": "AI will eliminate the entire profession and humans will have no jobs"
        },
        {
          "text": "Unmanned stealth drones and AI radars assist tactical navigation, while human military pilots make split-second strategic combat decisions"
        },
        {
          "text": "Computers will be outlawed in this profession"
        },
        {
          "text": "Nothing will change from 200 years ago"
        }
      ],
      "correctIndex": 1,
      "explanation": "Unmanned stealth drones and AI radars assist tactical navigation, while human military pilots make split-second strategic combat decisions. AI is a powerful assistant, but human empathy, critical judgment, moral courage, and physical action will always lead the future!",
      "proTip": "Embrace modern technology as a co-pilot, while building your unique human strengths of empathy, creativity, and leadership!"
    }
  ]
},

  "govt-jobs": {
  "id": "govt-jobs",
  "title": "Government Jobs (SSC, RRB, State PSC) Roadmap Quiz",
  "subtitle": "A student-friendly quiz for 8th, 9th & 10th classes: SSC CGL, State PSC Group 1 & 2, public administration & job stability!",
  "icon": "📋",
  "badge": "For Classes 8th – 10th",
  "gradient": "from-amber-600 via-stone-700 to-stone-900",
  "accentColor": "#B45309",
  "description": "Want to become a Government Jobs (SSC, RRB, State PSC)? Test if you know the exact roadmap: stream choices after 10th, required degrees, key entrance exams, and skills needed to excel!",
  "totalQuestions": 10,
  "blueprintUrl": "/career-reports?career=govt-jobs",
  "cheatSheet": [
    "Class 8-10: Focus on Mathematics (Quantitative Aptitude), General Studies (Science, Civics, History), and English grammar and build Fast mental arithmetic calculations.",
    "After 10th: Choose Any stream after 10th (CEC, MPC, BiPC, HEC) + Any recognized Bachelor's Degree.",
    "Key Gateways: Prepare for Staff Selection Commission (SSC CGL), Railway Recruitment Board (RRB), or State PSC (Group 1, 2, 4).",
    "Degree & Duration: 3-Year Degree + 1–2 Years dedicated competitive exam preparation.",
    "Future with AI: Government portals use AI for automated citizen service delivery, while human officers ensure policy empathy and public equity."
  ],
  "questions": [
    {
      "id": 1,
      "roadmapStage": "Stage 1: After 10th Class",
      "category": "Choosing Branch / Stream",
      "categoryColor": "bg-blue-100 text-blue-900 border-blue-300",
      "question": "When you pass Class 10, which Intermediate (10+2) stream should you choose to become a Government Jobs (SSC, RRB, State PSC)?",
      "options": [
        {
          "text": "Any irrelevant vocational stream without checking eligibility"
        },
        {
          "text": "Any stream after 10th (CEC, MPC, BiPC, HEC) + Any recognized Bachelor's Degree"
        },
        {
          "text": "Drop out of school after Class 10"
        },
        {
          "text": "Only study arts without required core subjects"
        }
      ],
      "correctIndex": 1,
      "explanation": "Any stream after 10th (CEC, MPC, BiPC, HEC) + Any recognized Bachelor's Degree. Meeting the right stream criteria in 11th and 12th is the vital first step on this roadmap!",
      "proTip": "Check the exact entrance eligibility early in 10th class so you pick your Intermediate stream with 100% confidence!"
    },
    {
      "id": 2,
      "roadmapStage": "Stage 2: Training & Degree Duration",
      "category": "Course Duration",
      "categoryColor": "bg-emerald-100 text-emerald-900 border-emerald-300",
      "question": "How much time does it take to complete the foundational qualification and training for this career pathway?",
      "options": [
        {
          "text": "Just a 1-day certificate course"
        },
        {
          "text": "15 years of only theoretical reading"
        },
        {
          "text": "3-Year Degree + 1–2 Years dedicated competitive exam preparation"
        },
        {
          "text": "6 weeks of online videos"
        }
      ],
      "correctIndex": 2,
      "explanation": "This professional pathway takes 3-Year Degree + 1–2 Years dedicated competitive exam preparation. True professional expertise requires structured degrees, lab experiments, and hands-on practical postings.",
      "proTip": "Focus on mastering concepts every single year rather than rushing through degrees!"
    },
    {
      "id": 3,
      "roadmapStage": "Stage 3: Gateway Degree & Entrance Exam",
      "category": "College Degree & Exams",
      "categoryColor": "bg-indigo-100 text-indigo-900 border-indigo-300",
      "question": "Which key examination or degree gateway is central to entering this professional career in India?",
      "options": [
        {
          "text": "Staff Selection Commission (SSC CGL), Railway Recruitment Board (RRB), or State PSC (Group 1, 2, 4)"
        },
        {
          "text": "A random lucky lottery draw"
        },
        {
          "text": "Paying an unauthorized private middleman"
        },
        {
          "text": "Only writing a high school spelling test"
        }
      ],
      "correctIndex": 0,
      "explanation": "Staff Selection Commission (SSC CGL), Railway Recruitment Board (RRB), or State PSC (Group 1, 2, 4). Clearing standard national or state entrances guarantees transparent admission into top accredited colleges and government commissions.",
      "proTip": "Previous years' question papers and conceptual NCERT mastery are your best friends when preparing for this gateway!"
    },
    {
      "id": 4,
      "roadmapStage": "Stage 4: School Foundations",
      "category": "School Subjects",
      "categoryColor": "bg-amber-100 text-amber-900 border-amber-300",
      "question": "Which subject that you study right now in 8th, 9th, or 10th class builds the deepest foundation for this career?",
      "options": [
        {
          "text": "Memorizing movie trivia"
        },
        {
          "text": "Playing mobile games during study hours"
        },
        {
          "text": "Mathematics (Quantitative Aptitude), General Studies (Science, Civics, History), and English grammar"
        },
        {
          "text": "Sleeping in the classroom"
        }
      ],
      "correctIndex": 2,
      "explanation": "Mathematics (Quantitative Aptitude), General Studies (Science, Civics, History), and English grammar. What you are learning in school right now directly connects to this field!",
      "proTip": "Pay extra attention when your teacher covers these topics in class — you are building the foundation of your future profession!"
    },
    {
      "id": 5,
      "roadmapStage": "Stage 5: High School Habits to Build",
      "category": "Skills to Build",
      "categoryColor": "bg-rose-100 text-rose-900 border-rose-300",
      "question": "As an 8th, 9th, or 10th student, what real habit should you start cultivating to prepare for this profession?",
      "options": [
        {
          "text": "Fast mental arithmetic calculations, solving puzzles, daily newspaper reading, and consistent revision"
        },
        {
          "text": "Refusing to do school assignments on time"
        },
        {
          "text": "Spending 6 hours a day arguing on social media"
        },
        {
          "text": "Giving up whenever a lesson feels slightly challenging"
        }
      ],
      "correctIndex": 0,
      "explanation": "Fast mental arithmetic calculations, solving puzzles, daily newspaper reading, and consistent revision. Great professionals develop their discipline, focus, and core habits long before they enter college.",
      "proTip": "Start with just 20 minutes a day practicing this habit — consistency over weeks and months creates champions!"
    },
    {
      "id": 6,
      "roadmapStage": "Stage 6: Premier Institutions & Regulators",
      "category": "College Degree & Exams",
      "categoryColor": "bg-purple-100 text-purple-900 border-purple-300",
      "question": "Which premier institutions or statutory bodies are recognized across India for this professional discipline?",
      "options": [
        {
          "text": "Unrecognized fake coaching websites with no campus"
        },
        {
          "text": "Staff Selection Commission (SSC) & State Public Service Commissions (APPSC/TSPSC)"
        },
        {
          "text": "Local amusement parks"
        },
        {
          "text": "Private bus booking counters"
        }
      ],
      "correctIndex": 1,
      "explanation": "Staff Selection Commission (SSC) & State Public Service Commissions (APPSC/TSPSC). Studying in premier recognized institutions gives you top laboratory facilities, experienced mentors, and world-class campus recruitment.",
      "proTip": "Visit the official websites of these premier institutes online — seeing campus photos and student projects will inspire you!"
    },
    {
      "id": 7,
      "roadmapStage": "Stage 7: Everyday Role & Purpose",
      "category": "Skills to Build",
      "categoryColor": "bg-teal-100 text-teal-900 border-teal-300",
      "question": "What is the real day-to-day mission and responsibility of professionals working in this field?",
      "options": [
        {
          "text": "Sitting idle in an empty room with zero responsibilities"
        },
        {
          "text": "Taking shortcuts and breaking ethics"
        },
        {
          "text": "Public administration, citizen welfare schemes, public file auditing, revenue collection, and department execution"
        },
        {
          "text": "Only showing up once a year"
        }
      ],
      "correctIndex": 2,
      "explanation": "Public administration, citizen welfare schemes, public file auditing, revenue collection, and department execution. Professionals in this field play a critical role in strengthening society, public welfare, and national progress.",
      "proTip": "A career is not just a monthly paycheck — it is your daily opportunity to solve meaningful problems and make people's lives better!"
    },
    {
      "id": 8,
      "roadmapStage": "Stage 8: Career Ladder & Promotion",
      "category": "Course Duration",
      "categoryColor": "bg-indigo-100 text-indigo-900 border-indigo-300",
      "question": "As you gain experience and demonstrate exceptional leadership, what does your long-term career growth path look like?",
      "options": [
        {
          "text": "Assistant Section Officer (ASO) -> Section Officer -> Under Secretary -> Deputy Secretary in Ministries"
        },
        {
          "text": "Staying in an entry-level trainee role forever with no advancement"
        },
        {
          "text": "Demotions every year"
        },
        {
          "text": "Being fired immediately without reason"
        }
      ],
      "correctIndex": 0,
      "explanation": "Assistant Section Officer (ASO) -> Section Officer -> Under Secretary -> Deputy Secretary in Ministries. With consistent hard work, continuous learning, and integrity, you can rise to senior national leadership positions!",
      "proTip": "Never stop learning new skills — the best leaders in this field keep updating their knowledge throughout their lives!"
    },
    {
      "id": 9,
      "roadmapStage": "Stage 9: Mindset & Professional Ethics",
      "category": "Skills to Build",
      "categoryColor": "bg-amber-100 text-amber-900 border-amber-300",
      "question": "What is the single most vital quality that earns deep respect and enduring trust in this profession?",
      "options": [
        {
          "text": "Showing off with arrogance"
        },
        {
          "text": "High personal integrity, empathy for citizens, and relentless dedication to quality"
        },
        {
          "text": "Blaming others for your own mistakes"
        },
        {
          "text": "Accepting bribes and cutting safety corners"
        }
      ],
      "correctIndex": 1,
      "explanation": "Integrity and genuine dedication to quality are irreplaceable! In every high-impact career, your reputation and honest character are your greatest assets.",
      "proTip": "Always be honest in your school tests and assignments — true character is built through small choices made every day."
    },
    {
      "id": 10,
      "roadmapStage": "Stage 10: Future World & AI Collaboration",
      "category": "AI & Future World",
      "categoryColor": "bg-purple-100 text-purple-900 border-purple-300",
      "question": "How will modern Artificial Intelligence (AI) and technology assist human professionals in this career over the next decade?",
      "options": [
        {
          "text": "AI will eliminate the entire profession and humans will have no jobs"
        },
        {
          "text": "Government portals use AI for automated citizen service delivery, while human officers ensure policy empathy and public equity"
        },
        {
          "text": "Computers will be outlawed in this profession"
        },
        {
          "text": "Nothing will change from 200 years ago"
        }
      ],
      "correctIndex": 1,
      "explanation": "Government portals use AI for automated citizen service delivery, while human officers ensure policy empathy and public equity. AI is a powerful assistant, but human empathy, critical judgment, moral courage, and physical action will always lead the future!",
      "proTip": "Embrace modern technology as a co-pilot, while building your unique human strengths of empathy, creativity, and leadership!"
    }
  ]
},

  "designer": {
  "id": "designer",
  "title": "Graphic & UI/UX Designer Roadmap Quiz",
  "subtitle": "A student-friendly quiz for 8th, 9th & 10th classes: NID & UCEED entrance, visual arts, design thinking & mobile app UI design!",
  "icon": "🎨",
  "badge": "For Classes 8th – 10th",
  "gradient": "from-purple-600 via-pink-600 to-rose-700",
  "accentColor": "#9333EA",
  "description": "Want to become a Graphic & UI/UX Designer? Test if you know the exact roadmap: stream choices after 10th, required degrees, key entrance exams, and skills needed to excel!",
  "totalQuestions": 10,
  "blueprintUrl": "/career-reports?career=designer",
  "cheatSheet": [
    "Class 8-10: Focus on Art, Geometry, Computer Graphics, and English communication and build Sketching daily.",
    "After 10th: Choose Any Intermediate stream (Science, Commerce, or Arts) with an active creative portfolio.",
    "Key Gateways: Prepare for UCEED (conducted by IIT Bombay) and NID DAT (Design Aptitude Test).",
    "Degree & Duration: 4-Year Bachelor of Design (B.Des) degree.",
    "Future with AI: AI generates fast design prototypes, while human designers master human psychology, user empathy, and delightful brand storytelling."
  ],
  "questions": [
    {
      "id": 1,
      "roadmapStage": "Stage 1: After 10th Class",
      "category": "Choosing Branch / Stream",
      "categoryColor": "bg-blue-100 text-blue-900 border-blue-300",
      "question": "When you pass Class 10, which Intermediate (10+2) stream should you choose to become a Graphic & UI/UX Designer?",
      "options": [
        {
          "text": "Any irrelevant vocational stream without checking eligibility"
        },
        {
          "text": "Any Intermediate stream (Science, Commerce, or Arts) with an active creative portfolio"
        },
        {
          "text": "Drop out of school after Class 10"
        },
        {
          "text": "Only study arts without required core subjects"
        }
      ],
      "correctIndex": 1,
      "explanation": "Any Intermediate stream (Science, Commerce, or Arts) with an active creative portfolio. Meeting the right stream criteria in 11th and 12th is the vital first step on this roadmap!",
      "proTip": "Check the exact entrance eligibility early in 10th class so you pick your Intermediate stream with 100% confidence!"
    },
    {
      "id": 2,
      "roadmapStage": "Stage 2: Training & Degree Duration",
      "category": "Course Duration",
      "categoryColor": "bg-emerald-100 text-emerald-900 border-emerald-300",
      "question": "How much time does it take to complete the foundational qualification and training for this career pathway?",
      "options": [
        {
          "text": "Just a 1-day certificate course"
        },
        {
          "text": "15 years of only theoretical reading"
        },
        {
          "text": "4-Year Bachelor of Design (B.Des) degree"
        },
        {
          "text": "6 weeks of online videos"
        }
      ],
      "correctIndex": 2,
      "explanation": "This professional pathway takes 4-Year Bachelor of Design (B.Des) degree. True professional expertise requires structured degrees, lab experiments, and hands-on practical postings.",
      "proTip": "Focus on mastering concepts every single year rather than rushing through degrees!"
    },
    {
      "id": 3,
      "roadmapStage": "Stage 3: Gateway Degree & Entrance Exam",
      "category": "College Degree & Exams",
      "categoryColor": "bg-indigo-100 text-indigo-900 border-indigo-300",
      "question": "Which key examination or degree gateway is central to entering this professional career in India?",
      "options": [
        {
          "text": "UCEED (conducted by IIT Bombay) and NID DAT (Design Aptitude Test)"
        },
        {
          "text": "A random lucky lottery draw"
        },
        {
          "text": "Paying an unauthorized private middleman"
        },
        {
          "text": "Only writing a high school spelling test"
        }
      ],
      "correctIndex": 0,
      "explanation": "UCEED (conducted by IIT Bombay) and NID DAT (Design Aptitude Test). Clearing standard national or state entrances guarantees transparent admission into top accredited colleges and government commissions.",
      "proTip": "Previous years' question papers and conceptual NCERT mastery are your best friends when preparing for this gateway!"
    },
    {
      "id": 4,
      "roadmapStage": "Stage 4: School Foundations",
      "category": "School Subjects",
      "categoryColor": "bg-amber-100 text-amber-900 border-amber-300",
      "question": "Which subject that you study right now in 8th, 9th, or 10th class builds the deepest foundation for this career?",
      "options": [
        {
          "text": "Memorizing movie trivia"
        },
        {
          "text": "Playing mobile games during study hours"
        },
        {
          "text": "Art, Geometry, Computer Graphics, and English communication"
        },
        {
          "text": "Sleeping in the classroom"
        }
      ],
      "correctIndex": 2,
      "explanation": "Art, Geometry, Computer Graphics, and English communication. What you are learning in school right now directly connects to this field!",
      "proTip": "Pay extra attention when your teacher covers these topics in class — you are building the foundation of your future profession!"
    },
    {
      "id": 5,
      "roadmapStage": "Stage 5: High School Habits to Build",
      "category": "Skills to Build",
      "categoryColor": "bg-rose-100 text-rose-900 border-rose-300",
      "question": "As an 8th, 9th, or 10th student, what real habit should you start cultivating to prepare for this profession?",
      "options": [
        {
          "text": "Sketching daily, noticing brand logos and app designs, learning Figma/Canva, and visual color theory"
        },
        {
          "text": "Refusing to do school assignments on time"
        },
        {
          "text": "Spending 6 hours a day arguing on social media"
        },
        {
          "text": "Giving up whenever a lesson feels slightly challenging"
        }
      ],
      "correctIndex": 0,
      "explanation": "Sketching daily, noticing brand logos and app designs, learning Figma/Canva, and visual color theory. Great professionals develop their discipline, focus, and core habits long before they enter college.",
      "proTip": "Start with just 20 minutes a day practicing this habit — consistency over weeks and months creates champions!"
    },
    {
      "id": 6,
      "roadmapStage": "Stage 6: Premier Institutions & Regulators",
      "category": "College Degree & Exams",
      "categoryColor": "bg-purple-100 text-purple-900 border-purple-300",
      "question": "Which premier institutions or statutory bodies are recognized across India for this professional discipline?",
      "options": [
        {
          "text": "Unrecognized fake coaching websites with no campus"
        },
        {
          "text": "National Institute of Design (NID Ahmedabad) and Industrial Design Centre (IDC - IIT Bombay)"
        },
        {
          "text": "Local amusement parks"
        },
        {
          "text": "Private bus booking counters"
        }
      ],
      "correctIndex": 1,
      "explanation": "National Institute of Design (NID Ahmedabad) and Industrial Design Centre (IDC - IIT Bombay). Studying in premier recognized institutions gives you top laboratory facilities, experienced mentors, and world-class campus recruitment.",
      "proTip": "Visit the official websites of these premier institutes online — seeing campus photos and student projects will inspire you!"
    },
    {
      "id": 7,
      "roadmapStage": "Stage 7: Everyday Role & Purpose",
      "category": "Skills to Build",
      "categoryColor": "bg-teal-100 text-teal-900 border-teal-300",
      "question": "What is the real day-to-day mission and responsibility of professionals working in this field?",
      "options": [
        {
          "text": "Sitting idle in an empty room with zero responsibilities"
        },
        {
          "text": "Taking shortcuts and breaking ethics"
        },
        {
          "text": "Designing intuitive mobile app screens, website interfaces, brand visual identities, and interactive product experiences"
        },
        {
          "text": "Only showing up once a year"
        }
      ],
      "correctIndex": 2,
      "explanation": "Designing intuitive mobile app screens, website interfaces, brand visual identities, and interactive product experiences. Professionals in this field play a critical role in strengthening society, public welfare, and national progress.",
      "proTip": "A career is not just a monthly paycheck — it is your daily opportunity to solve meaningful problems and make people's lives better!"
    },
    {
      "id": 8,
      "roadmapStage": "Stage 8: Career Ladder & Promotion",
      "category": "Course Duration",
      "categoryColor": "bg-indigo-100 text-indigo-900 border-indigo-300",
      "question": "As you gain experience and demonstrate exceptional leadership, what does your long-term career growth path look like?",
      "options": [
        {
          "text": "Junior UI/UX Designer -> Product Designer -> Lead UX Architect -> VP of Design / Creative Director"
        },
        {
          "text": "Staying in an entry-level trainee role forever with no advancement"
        },
        {
          "text": "Demotions every year"
        },
        {
          "text": "Being fired immediately without reason"
        }
      ],
      "correctIndex": 0,
      "explanation": "Junior UI/UX Designer -> Product Designer -> Lead UX Architect -> VP of Design / Creative Director. With consistent hard work, continuous learning, and integrity, you can rise to senior national leadership positions!",
      "proTip": "Never stop learning new skills — the best leaders in this field keep updating their knowledge throughout their lives!"
    },
    {
      "id": 9,
      "roadmapStage": "Stage 9: Mindset & Professional Ethics",
      "category": "Skills to Build",
      "categoryColor": "bg-amber-100 text-amber-900 border-amber-300",
      "question": "What is the single most vital quality that earns deep respect and enduring trust in this profession?",
      "options": [
        {
          "text": "Showing off with arrogance"
        },
        {
          "text": "High personal integrity, empathy for citizens, and relentless dedication to quality"
        },
        {
          "text": "Blaming others for your own mistakes"
        },
        {
          "text": "Accepting bribes and cutting safety corners"
        }
      ],
      "correctIndex": 1,
      "explanation": "Integrity and genuine dedication to quality are irreplaceable! In every high-impact career, your reputation and honest character are your greatest assets.",
      "proTip": "Always be honest in your school tests and assignments — true character is built through small choices made every day."
    },
    {
      "id": 10,
      "roadmapStage": "Stage 10: Future World & AI Collaboration",
      "category": "AI & Future World",
      "categoryColor": "bg-purple-100 text-purple-900 border-purple-300",
      "question": "How will modern Artificial Intelligence (AI) and technology assist human professionals in this career over the next decade?",
      "options": [
        {
          "text": "AI will eliminate the entire profession and humans will have no jobs"
        },
        {
          "text": "AI generates fast design prototypes, while human designers master human psychology, user empathy, and delightful brand storytelling"
        },
        {
          "text": "Computers will be outlawed in this profession"
        },
        {
          "text": "Nothing will change from 200 years ago"
        }
      ],
      "correctIndex": 1,
      "explanation": "AI generates fast design prototypes, while human designers master human psychology, user empathy, and delightful brand storytelling. AI is a powerful assistant, but human empathy, critical judgment, moral courage, and physical action will always lead the future!",
      "proTip": "Embrace modern technology as a co-pilot, while building your unique human strengths of empathy, creativity, and leadership!"
    }
  ]
},

  "interior-designer": {
  "id": "interior-designer",
  "title": "Interior Designer Roadmap Quiz",
  "subtitle": "A student-friendly quiz for 8th, 9th & 10th classes: space planning, residential & commercial decor, 3D modeling & material styling!",
  "icon": "🛋️",
  "badge": "For Classes 8th – 10th",
  "gradient": "from-amber-600 via-yellow-700 to-stone-800",
  "accentColor": "#D97706",
  "description": "Want to become a Interior Designer? Test if you know the exact roadmap: stream choices after 10th, required degrees, key entrance exams, and skills needed to excel!",
  "totalQuestions": 10,
  "blueprintUrl": "/career-reports?career=interior-designer",
  "cheatSheet": [
    "Class 8-10: Focus on Mathematics (Geometry, Mensuration), Visual Arts, and Physics (Lighting and build Observing room layouts.",
    "After 10th: Choose Any Intermediate stream (Science, Commerce, or Arts).",
    "Key Gateways: Prepare for NID DAT, UCEED, or University Interior Design entrance tests.",
    "Degree & Duration: 3-Year or 4-Year B.Des in Interior Design (or 3-Year B.Sc Interior Design).",
    "Future with AI: AI produces instant 3D room renders, while human interior designers curate tactile material textures and emotional comfort."
  ],
  "questions": [
    {
      "id": 1,
      "roadmapStage": "Stage 1: After 10th Class",
      "category": "Choosing Branch / Stream",
      "categoryColor": "bg-blue-100 text-blue-900 border-blue-300",
      "question": "When you pass Class 10, which Intermediate (10+2) stream should you choose to become a Interior Designer?",
      "options": [
        {
          "text": "Any irrelevant vocational stream without checking eligibility"
        },
        {
          "text": "Any Intermediate stream (Science, Commerce, or Arts)"
        },
        {
          "text": "Drop out of school after Class 10"
        },
        {
          "text": "Only study arts without required core subjects"
        }
      ],
      "correctIndex": 1,
      "explanation": "Any Intermediate stream (Science, Commerce, or Arts). Meeting the right stream criteria in 11th and 12th is the vital first step on this roadmap!",
      "proTip": "Check the exact entrance eligibility early in 10th class so you pick your Intermediate stream with 100% confidence!"
    },
    {
      "id": 2,
      "roadmapStage": "Stage 2: Training & Degree Duration",
      "category": "Course Duration",
      "categoryColor": "bg-emerald-100 text-emerald-900 border-emerald-300",
      "question": "How much time does it take to complete the foundational qualification and training for this career pathway?",
      "options": [
        {
          "text": "Just a 1-day certificate course"
        },
        {
          "text": "15 years of only theoretical reading"
        },
        {
          "text": "3-Year or 4-Year B.Des in Interior Design (or 3-Year B.Sc Interior Design)"
        },
        {
          "text": "6 weeks of online videos"
        }
      ],
      "correctIndex": 2,
      "explanation": "This professional pathway takes 3-Year or 4-Year B.Des in Interior Design (or 3-Year B.Sc Interior Design). True professional expertise requires structured degrees, lab experiments, and hands-on practical postings.",
      "proTip": "Focus on mastering concepts every single year rather than rushing through degrees!"
    },
    {
      "id": 3,
      "roadmapStage": "Stage 3: Gateway Degree & Entrance Exam",
      "category": "College Degree & Exams",
      "categoryColor": "bg-indigo-100 text-indigo-900 border-indigo-300",
      "question": "Which key examination or degree gateway is central to entering this professional career in India?",
      "options": [
        {
          "text": "NID DAT, UCEED, or University Interior Design entrance tests"
        },
        {
          "text": "A random lucky lottery draw"
        },
        {
          "text": "Paying an unauthorized private middleman"
        },
        {
          "text": "Only writing a high school spelling test"
        }
      ],
      "correctIndex": 0,
      "explanation": "NID DAT, UCEED, or University Interior Design entrance tests. Clearing standard national or state entrances guarantees transparent admission into top accredited colleges and government commissions.",
      "proTip": "Previous years' question papers and conceptual NCERT mastery are your best friends when preparing for this gateway!"
    },
    {
      "id": 4,
      "roadmapStage": "Stage 4: School Foundations",
      "category": "School Subjects",
      "categoryColor": "bg-amber-100 text-amber-900 border-amber-300",
      "question": "Which subject that you study right now in 8th, 9th, or 10th class builds the deepest foundation for this career?",
      "options": [
        {
          "text": "Memorizing movie trivia"
        },
        {
          "text": "Playing mobile games during study hours"
        },
        {
          "text": "Mathematics (Geometry, Mensuration), Visual Arts, and Physics (Lighting & Acoustics)"
        },
        {
          "text": "Sleeping in the classroom"
        }
      ],
      "correctIndex": 2,
      "explanation": "Mathematics (Geometry, Mensuration), Visual Arts, and Physics (Lighting & Acoustics). What you are learning in school right now directly connects to this field!",
      "proTip": "Pay extra attention when your teacher covers these topics in class — you are building the foundation of your future profession!"
    },
    {
      "id": 5,
      "roadmapStage": "Stage 5: High School Habits to Build",
      "category": "Skills to Build",
      "categoryColor": "bg-rose-100 text-rose-900 border-rose-300",
      "question": "As an 8th, 9th, or 10th student, what real habit should you start cultivating to prepare for this profession?",
      "options": [
        {
          "text": "Observing room layouts, measuring furniture spaces, drawing 3D room sketches, and color combinations"
        },
        {
          "text": "Refusing to do school assignments on time"
        },
        {
          "text": "Spending 6 hours a day arguing on social media"
        },
        {
          "text": "Giving up whenever a lesson feels slightly challenging"
        }
      ],
      "correctIndex": 0,
      "explanation": "Observing room layouts, measuring furniture spaces, drawing 3D room sketches, and color combinations. Great professionals develop their discipline, focus, and core habits long before they enter college.",
      "proTip": "Start with just 20 minutes a day practicing this habit — consistency over weeks and months creates champions!"
    },
    {
      "id": 6,
      "roadmapStage": "Stage 6: Premier Institutions & Regulators",
      "category": "College Degree & Exams",
      "categoryColor": "bg-purple-100 text-purple-900 border-purple-300",
      "question": "Which premier institutions or statutory bodies are recognized across India for this professional discipline?",
      "options": [
        {
          "text": "Unrecognized fake coaching websites with no campus"
        },
        {
          "text": "NID, CEPT University Ahmedabad, and top architecture and design schools"
        },
        {
          "text": "Local amusement parks"
        },
        {
          "text": "Private bus booking counters"
        }
      ],
      "correctIndex": 1,
      "explanation": "NID, CEPT University Ahmedabad, and top architecture and design schools. Studying in premier recognized institutions gives you top laboratory facilities, experienced mentors, and world-class campus recruitment.",
      "proTip": "Visit the official websites of these premier institutes online — seeing campus photos and student projects will inspire you!"
    },
    {
      "id": 7,
      "roadmapStage": "Stage 7: Everyday Role & Purpose",
      "category": "Skills to Build",
      "categoryColor": "bg-teal-100 text-teal-900 border-teal-300",
      "question": "What is the real day-to-day mission and responsibility of professionals working in this field?",
      "options": [
        {
          "text": "Sitting idle in an empty room with zero responsibilities"
        },
        {
          "text": "Taking shortcuts and breaking ethics"
        },
        {
          "text": "Transforming empty rooms into stunning living spaces, choosing wall paints, false ceilings, lighting, and custom furniture"
        },
        {
          "text": "Only showing up once a year"
        }
      ],
      "correctIndex": 2,
      "explanation": "Transforming empty rooms into stunning living spaces, choosing wall paints, false ceilings, lighting, and custom furniture. Professionals in this field play a critical role in strengthening society, public welfare, and national progress.",
      "proTip": "A career is not just a monthly paycheck — it is your daily opportunity to solve meaningful problems and make people's lives better!"
    },
    {
      "id": 8,
      "roadmapStage": "Stage 8: Career Ladder & Promotion",
      "category": "Course Duration",
      "categoryColor": "bg-indigo-100 text-indigo-900 border-indigo-300",
      "question": "As you gain experience and demonstrate exceptional leadership, what does your long-term career growth path look like?",
      "options": [
        {
          "text": "Junior Designer -> Interior Project Lead -> Studio Partner -> Independent Luxury Design Firm Founder"
        },
        {
          "text": "Staying in an entry-level trainee role forever with no advancement"
        },
        {
          "text": "Demotions every year"
        },
        {
          "text": "Being fired immediately without reason"
        }
      ],
      "correctIndex": 0,
      "explanation": "Junior Designer -> Interior Project Lead -> Studio Partner -> Independent Luxury Design Firm Founder. With consistent hard work, continuous learning, and integrity, you can rise to senior national leadership positions!",
      "proTip": "Never stop learning new skills — the best leaders in this field keep updating their knowledge throughout their lives!"
    },
    {
      "id": 9,
      "roadmapStage": "Stage 9: Mindset & Professional Ethics",
      "category": "Skills to Build",
      "categoryColor": "bg-amber-100 text-amber-900 border-amber-300",
      "question": "What is the single most vital quality that earns deep respect and enduring trust in this profession?",
      "options": [
        {
          "text": "Showing off with arrogance"
        },
        {
          "text": "High personal integrity, empathy for citizens, and relentless dedication to quality"
        },
        {
          "text": "Blaming others for your own mistakes"
        },
        {
          "text": "Accepting bribes and cutting safety corners"
        }
      ],
      "correctIndex": 1,
      "explanation": "Integrity and genuine dedication to quality are irreplaceable! In every high-impact career, your reputation and honest character are your greatest assets.",
      "proTip": "Always be honest in your school tests and assignments — true character is built through small choices made every day."
    },
    {
      "id": 10,
      "roadmapStage": "Stage 10: Future World & AI Collaboration",
      "category": "AI & Future World",
      "categoryColor": "bg-purple-100 text-purple-900 border-purple-300",
      "question": "How will modern Artificial Intelligence (AI) and technology assist human professionals in this career over the next decade?",
      "options": [
        {
          "text": "AI will eliminate the entire profession and humans will have no jobs"
        },
        {
          "text": "AI produces instant 3D room renders, while human interior designers curate tactile material textures and emotional comfort"
        },
        {
          "text": "Computers will be outlawed in this profession"
        },
        {
          "text": "Nothing will change from 200 years ago"
        }
      ],
      "correctIndex": 1,
      "explanation": "AI produces instant 3D room renders, while human interior designers curate tactile material textures and emotional comfort. AI is a powerful assistant, but human empathy, critical judgment, moral courage, and physical action will always lead the future!",
      "proTip": "Embrace modern technology as a co-pilot, while building your unique human strengths of empathy, creativity, and leadership!"
    }
  ]
},

  "fashion": {
  "id": "fashion",
  "title": "Fashion Designer Roadmap Quiz",
  "subtitle": "A student-friendly quiz for 8th, 9th & 10th classes: NIFT entrance, garment styling, textile science & launching couture labels!",
  "icon": "👗",
  "badge": "For Classes 8th – 10th",
  "gradient": "from-pink-600 via-rose-600 to-purple-800",
  "accentColor": "#DB2777",
  "description": "Want to become a Fashion Designer? Test if you know the exact roadmap: stream choices after 10th, required degrees, key entrance exams, and skills needed to excel!",
  "totalQuestions": 10,
  "blueprintUrl": "/career-reports?career=fashion",
  "cheatSheet": [
    "Class 8-10: Focus on Visual Art, Home Science, History of Indian Textiles, and English and build Fashion sketching.",
    "After 10th: Choose Any Intermediate stream (Arts, Science, or Commerce).",
    "Key Gateways: Prepare for NIFT Entrance Exam (CAT.",
    "Degree & Duration: 4-Year Bachelor of Design (B.Des) in Fashion Design / Knitwear / Leather Design.",
    "Future with AI: AI predicts upcoming global fashion trends and generates digital fabric patterns, while human designers pioneer physical craft and fit."
  ],
  "questions": [
    {
      "id": 1,
      "roadmapStage": "Stage 1: After 10th Class",
      "category": "Choosing Branch / Stream",
      "categoryColor": "bg-blue-100 text-blue-900 border-blue-300",
      "question": "When you pass Class 10, which Intermediate (10+2) stream should you choose to become a Fashion Designer?",
      "options": [
        {
          "text": "Any irrelevant vocational stream without checking eligibility"
        },
        {
          "text": "Any Intermediate stream (Arts, Science, or Commerce)"
        },
        {
          "text": "Drop out of school after Class 10"
        },
        {
          "text": "Only study arts without required core subjects"
        }
      ],
      "correctIndex": 1,
      "explanation": "Any Intermediate stream (Arts, Science, or Commerce). Meeting the right stream criteria in 11th and 12th is the vital first step on this roadmap!",
      "proTip": "Check the exact entrance eligibility early in 10th class so you pick your Intermediate stream with 100% confidence!"
    },
    {
      "id": 2,
      "roadmapStage": "Stage 2: Training & Degree Duration",
      "category": "Course Duration",
      "categoryColor": "bg-emerald-100 text-emerald-900 border-emerald-300",
      "question": "How much time does it take to complete the foundational qualification and training for this career pathway?",
      "options": [
        {
          "text": "Just a 1-day certificate course"
        },
        {
          "text": "15 years of only theoretical reading"
        },
        {
          "text": "4-Year Bachelor of Design (B.Des) in Fashion Design / Knitwear / Leather Design"
        },
        {
          "text": "6 weeks of online videos"
        }
      ],
      "correctIndex": 2,
      "explanation": "This professional pathway takes 4-Year Bachelor of Design (B.Des) in Fashion Design / Knitwear / Leather Design. True professional expertise requires structured degrees, lab experiments, and hands-on practical postings.",
      "proTip": "Focus on mastering concepts every single year rather than rushing through degrees!"
    },
    {
      "id": 3,
      "roadmapStage": "Stage 3: Gateway Degree & Entrance Exam",
      "category": "College Degree & Exams",
      "categoryColor": "bg-indigo-100 text-indigo-900 border-indigo-300",
      "question": "Which key examination or degree gateway is central to entering this professional career in India?",
      "options": [
        {
          "text": "NIFT Entrance Exam (CAT — Creative Ability Test & GAT — General Ability Test + Situation Test)"
        },
        {
          "text": "A random lucky lottery draw"
        },
        {
          "text": "Paying an unauthorized private middleman"
        },
        {
          "text": "Only writing a high school spelling test"
        }
      ],
      "correctIndex": 0,
      "explanation": "NIFT Entrance Exam (CAT — Creative Ability Test & GAT — General Ability Test + Situation Test). Clearing standard national or state entrances guarantees transparent admission into top accredited colleges and government commissions.",
      "proTip": "Previous years' question papers and conceptual NCERT mastery are your best friends when preparing for this gateway!"
    },
    {
      "id": 4,
      "roadmapStage": "Stage 4: School Foundations",
      "category": "School Subjects",
      "categoryColor": "bg-amber-100 text-amber-900 border-amber-300",
      "question": "Which subject that you study right now in 8th, 9th, or 10th class builds the deepest foundation for this career?",
      "options": [
        {
          "text": "Memorizing movie trivia"
        },
        {
          "text": "Playing mobile games during study hours"
        },
        {
          "text": "Visual Art, Home Science, History of Indian Textiles, and English"
        },
        {
          "text": "Sleeping in the classroom"
        }
      ],
      "correctIndex": 2,
      "explanation": "Visual Art, Home Science, History of Indian Textiles, and English. What you are learning in school right now directly connects to this field!",
      "proTip": "Pay extra attention when your teacher covers these topics in class — you are building the foundation of your future profession!"
    },
    {
      "id": 5,
      "roadmapStage": "Stage 5: High School Habits to Build",
      "category": "Skills to Build",
      "categoryColor": "bg-rose-100 text-rose-900 border-rose-300",
      "question": "As an 8th, 9th, or 10th student, what real habit should you start cultivating to prepare for this profession?",
      "options": [
        {
          "text": "Fashion sketching, understanding fabric textures (cotton, silk, linen), sewing curiosity, and following fashion weeks"
        },
        {
          "text": "Refusing to do school assignments on time"
        },
        {
          "text": "Spending 6 hours a day arguing on social media"
        },
        {
          "text": "Giving up whenever a lesson feels slightly challenging"
        }
      ],
      "correctIndex": 0,
      "explanation": "Fashion sketching, understanding fabric textures (cotton, silk, linen), sewing curiosity, and following fashion weeks. Great professionals develop their discipline, focus, and core habits long before they enter college.",
      "proTip": "Start with just 20 minutes a day practicing this habit — consistency over weeks and months creates champions!"
    },
    {
      "id": 6,
      "roadmapStage": "Stage 6: Premier Institutions & Regulators",
      "category": "College Degree & Exams",
      "categoryColor": "bg-purple-100 text-purple-900 border-purple-300",
      "question": "Which premier institutions or statutory bodies are recognized across India for this professional discipline?",
      "options": [
        {
          "text": "Unrecognized fake coaching websites with no campus"
        },
        {
          "text": "National Institute of Fashion Technology (NIFT Delhi, Mumbai, Hyderabad, Bengaluru)"
        },
        {
          "text": "Local amusement parks"
        },
        {
          "text": "Private bus booking counters"
        }
      ],
      "correctIndex": 1,
      "explanation": "National Institute of Fashion Technology (NIFT Delhi, Mumbai, Hyderabad, Bengaluru). Studying in premier recognized institutions gives you top laboratory facilities, experienced mentors, and world-class campus recruitment.",
      "proTip": "Visit the official websites of these premier institutes online — seeing campus photos and student projects will inspire you!"
    },
    {
      "id": 7,
      "roadmapStage": "Stage 7: Everyday Role & Purpose",
      "category": "Skills to Build",
      "categoryColor": "bg-teal-100 text-teal-900 border-teal-300",
      "question": "What is the real day-to-day mission and responsibility of professionals working in this field?",
      "options": [
        {
          "text": "Sitting idle in an empty room with zero responsibilities"
        },
        {
          "text": "Taking shortcuts and breaking ethics"
        },
        {
          "text": "Sketching apparel collections, selecting fabrics, draping patterns, overseeing garment stitching, and styling fashion shoots"
        },
        {
          "text": "Only showing up once a year"
        }
      ],
      "correctIndex": 2,
      "explanation": "Sketching apparel collections, selecting fabrics, draping patterns, overseeing garment stitching, and styling fashion shoots. Professionals in this field play a critical role in strengthening society, public welfare, and national progress.",
      "proTip": "A career is not just a monthly paycheck — it is your daily opportunity to solve meaningful problems and make people's lives better!"
    },
    {
      "id": 8,
      "roadmapStage": "Stage 8: Career Ladder & Promotion",
      "category": "Course Duration",
      "categoryColor": "bg-indigo-100 text-indigo-900 border-indigo-300",
      "question": "As you gain experience and demonstrate exceptional leadership, what does your long-term career growth path look like?",
      "options": [
        {
          "text": "Assistant Stylist -> Fashion Designer -> Head of Apparel Design -> Independent Fashion Brand Owner (Lakmé Fashion Week)"
        },
        {
          "text": "Staying in an entry-level trainee role forever with no advancement"
        },
        {
          "text": "Demotions every year"
        },
        {
          "text": "Being fired immediately without reason"
        }
      ],
      "correctIndex": 0,
      "explanation": "Assistant Stylist -> Fashion Designer -> Head of Apparel Design -> Independent Fashion Brand Owner (Lakmé Fashion Week). With consistent hard work, continuous learning, and integrity, you can rise to senior national leadership positions!",
      "proTip": "Never stop learning new skills — the best leaders in this field keep updating their knowledge throughout their lives!"
    },
    {
      "id": 9,
      "roadmapStage": "Stage 9: Mindset & Professional Ethics",
      "category": "Skills to Build",
      "categoryColor": "bg-amber-100 text-amber-900 border-amber-300",
      "question": "What is the single most vital quality that earns deep respect and enduring trust in this profession?",
      "options": [
        {
          "text": "Showing off with arrogance"
        },
        {
          "text": "High personal integrity, empathy for citizens, and relentless dedication to quality"
        },
        {
          "text": "Blaming others for your own mistakes"
        },
        {
          "text": "Accepting bribes and cutting safety corners"
        }
      ],
      "correctIndex": 1,
      "explanation": "Integrity and genuine dedication to quality are irreplaceable! In every high-impact career, your reputation and honest character are your greatest assets.",
      "proTip": "Always be honest in your school tests and assignments — true character is built through small choices made every day."
    },
    {
      "id": 10,
      "roadmapStage": "Stage 10: Future World & AI Collaboration",
      "category": "AI & Future World",
      "categoryColor": "bg-purple-100 text-purple-900 border-purple-300",
      "question": "How will modern Artificial Intelligence (AI) and technology assist human professionals in this career over the next decade?",
      "options": [
        {
          "text": "AI will eliminate the entire profession and humans will have no jobs"
        },
        {
          "text": "AI predicts upcoming global fashion trends and generates digital fabric patterns, while human designers pioneer physical craft and fit"
        },
        {
          "text": "Computers will be outlawed in this profession"
        },
        {
          "text": "Nothing will change from 200 years ago"
        }
      ],
      "correctIndex": 1,
      "explanation": "AI predicts upcoming global fashion trends and generates digital fabric patterns, while human designers pioneer physical craft and fit. AI is a powerful assistant, but human empathy, critical judgment, moral courage, and physical action will always lead the future!",
      "proTip": "Embrace modern technology as a co-pilot, while building your unique human strengths of empathy, creativity, and leadership!"
    }
  ]
},

  "hotel-management": {
  "id": "hotel-management",
  "title": "Hotel Management & Luxury Hospitality Roadmap Quiz",
  "subtitle": "A student-friendly quiz for 8th, 9th & 10th classes: NCHMCT JEE, 5-star hotel operations, luxury cruises & guest relations!",
  "icon": "🏨",
  "badge": "For Classes 8th – 10th",
  "gradient": "from-amber-700 via-yellow-800 to-stone-900",
  "accentColor": "#B45309",
  "description": "Want to become a Hotel Management & Luxury Hospitality? Test if you know the exact roadmap: stream choices after 10th, required degrees, key entrance exams, and skills needed to excel!",
  "totalQuestions": 10,
  "blueprintUrl": "/career-reports?career=hotel-management",
  "cheatSheet": [
    "Class 8-10: Focus on English communication, Geography (tourism destinations), and Basic Accountancy and build Polite public speaking.",
    "After 10th: Choose Any Intermediate stream (Science, Commerce, or Arts) with English as a compulsory subject.",
    "Key Gateways: Prepare for NCHMCT JEE (National Council for Hotel Management and Catering Technology Joint Entrance Exam).",
    "Degree & Duration: 3-Year B.Sc in Hospitality & Hotel Administration (H&HA).",
    "Future with AI: Smart hotel apps handle automated room check-in, while warm human hospitality managers deliver unforgettable guest care."
  ],
  "questions": [
    {
      "id": 1,
      "roadmapStage": "Stage 1: After 10th Class",
      "category": "Choosing Branch / Stream",
      "categoryColor": "bg-blue-100 text-blue-900 border-blue-300",
      "question": "When you pass Class 10, which Intermediate (10+2) stream should you choose to become a Hotel Management & Luxury Hospitality?",
      "options": [
        {
          "text": "Any irrelevant vocational stream without checking eligibility"
        },
        {
          "text": "Any Intermediate stream (Science, Commerce, or Arts) with English as a compulsory subject"
        },
        {
          "text": "Drop out of school after Class 10"
        },
        {
          "text": "Only study arts without required core subjects"
        }
      ],
      "correctIndex": 1,
      "explanation": "Any Intermediate stream (Science, Commerce, or Arts) with English as a compulsory subject. Meeting the right stream criteria in 11th and 12th is the vital first step on this roadmap!",
      "proTip": "Check the exact entrance eligibility early in 10th class so you pick your Intermediate stream with 100% confidence!"
    },
    {
      "id": 2,
      "roadmapStage": "Stage 2: Training & Degree Duration",
      "category": "Course Duration",
      "categoryColor": "bg-emerald-100 text-emerald-900 border-emerald-300",
      "question": "How much time does it take to complete the foundational qualification and training for this career pathway?",
      "options": [
        {
          "text": "Just a 1-day certificate course"
        },
        {
          "text": "15 years of only theoretical reading"
        },
        {
          "text": "3-Year B.Sc in Hospitality & Hotel Administration (H&HA)"
        },
        {
          "text": "6 weeks of online videos"
        }
      ],
      "correctIndex": 2,
      "explanation": "This professional pathway takes 3-Year B.Sc in Hospitality & Hotel Administration (H&HA). True professional expertise requires structured degrees, lab experiments, and hands-on practical postings.",
      "proTip": "Focus on mastering concepts every single year rather than rushing through degrees!"
    },
    {
      "id": 3,
      "roadmapStage": "Stage 3: Gateway Degree & Entrance Exam",
      "category": "College Degree & Exams",
      "categoryColor": "bg-indigo-100 text-indigo-900 border-indigo-300",
      "question": "Which key examination or degree gateway is central to entering this professional career in India?",
      "options": [
        {
          "text": "NCHMCT JEE (National Council for Hotel Management and Catering Technology Joint Entrance Exam)"
        },
        {
          "text": "A random lucky lottery draw"
        },
        {
          "text": "Paying an unauthorized private middleman"
        },
        {
          "text": "Only writing a high school spelling test"
        }
      ],
      "correctIndex": 0,
      "explanation": "NCHMCT JEE (National Council for Hotel Management and Catering Technology Joint Entrance Exam). Clearing standard national or state entrances guarantees transparent admission into top accredited colleges and government commissions.",
      "proTip": "Previous years' question papers and conceptual NCERT mastery are your best friends when preparing for this gateway!"
    },
    {
      "id": 4,
      "roadmapStage": "Stage 4: School Foundations",
      "category": "School Subjects",
      "categoryColor": "bg-amber-100 text-amber-900 border-amber-300",
      "question": "Which subject that you study right now in 8th, 9th, or 10th class builds the deepest foundation for this career?",
      "options": [
        {
          "text": "Memorizing movie trivia"
        },
        {
          "text": "Playing mobile games during study hours"
        },
        {
          "text": "English communication, Geography (tourism destinations), and Basic Accountancy"
        },
        {
          "text": "Sleeping in the classroom"
        }
      ],
      "correctIndex": 2,
      "explanation": "English communication, Geography (tourism destinations), and Basic Accountancy. What you are learning in school right now directly connects to this field!",
      "proTip": "Pay extra attention when your teacher covers these topics in class — you are building the foundation of your future profession!"
    },
    {
      "id": 5,
      "roadmapStage": "Stage 5: High School Habits to Build",
      "category": "Skills to Build",
      "categoryColor": "bg-rose-100 text-rose-900 border-rose-300",
      "question": "As an 8th, 9th, or 10th student, what real habit should you start cultivating to prepare for this profession?",
      "options": [
        {
          "text": "Polite public speaking, positive body language, grooming etiquette, and empathy for guests"
        },
        {
          "text": "Refusing to do school assignments on time"
        },
        {
          "text": "Spending 6 hours a day arguing on social media"
        },
        {
          "text": "Giving up whenever a lesson feels slightly challenging"
        }
      ],
      "correctIndex": 0,
      "explanation": "Polite public speaking, positive body language, grooming etiquette, and empathy for guests. Great professionals develop their discipline, focus, and core habits long before they enter college.",
      "proTip": "Start with just 20 minutes a day practicing this habit — consistency over weeks and months creates champions!"
    },
    {
      "id": 6,
      "roadmapStage": "Stage 6: Premier Institutions & Regulators",
      "category": "College Degree & Exams",
      "categoryColor": "bg-purple-100 text-purple-900 border-purple-300",
      "question": "Which premier institutions or statutory bodies are recognized across India for this professional discipline?",
      "options": [
        {
          "text": "Unrecognized fake coaching websites with no campus"
        },
        {
          "text": "Institute of Hotel Management (IHM Pusa New Delhi, IHM Mumbai, IHM Hyderabad)"
        },
        {
          "text": "Local amusement parks"
        },
        {
          "text": "Private bus booking counters"
        }
      ],
      "correctIndex": 1,
      "explanation": "Institute of Hotel Management (IHM Pusa New Delhi, IHM Mumbai, IHM Hyderabad). Studying in premier recognized institutions gives you top laboratory facilities, experienced mentors, and world-class campus recruitment.",
      "proTip": "Visit the official websites of these premier institutes online — seeing campus photos and student projects will inspire you!"
    },
    {
      "id": 7,
      "roadmapStage": "Stage 7: Everyday Role & Purpose",
      "category": "Skills to Build",
      "categoryColor": "bg-teal-100 text-teal-900 border-teal-300",
      "question": "What is the real day-to-day mission and responsibility of professionals working in this field?",
      "options": [
        {
          "text": "Sitting idle in an empty room with zero responsibilities"
        },
        {
          "text": "Taking shortcuts and breaking ethics"
        },
        {
          "text": "Managing luxury 5-star resort operations, fine-dining food & beverage service, front office, and VIP concierge"
        },
        {
          "text": "Only showing up once a year"
        }
      ],
      "correctIndex": 2,
      "explanation": "Managing luxury 5-star resort operations, fine-dining food & beverage service, front office, and VIP concierge. Professionals in this field play a critical role in strengthening society, public welfare, and national progress.",
      "proTip": "A career is not just a monthly paycheck — it is your daily opportunity to solve meaningful problems and make people's lives better!"
    },
    {
      "id": 8,
      "roadmapStage": "Stage 8: Career Ladder & Promotion",
      "category": "Course Duration",
      "categoryColor": "bg-indigo-100 text-indigo-900 border-indigo-300",
      "question": "As you gain experience and demonstrate exceptional leadership, what does your long-term career growth path look like?",
      "options": [
        {
          "text": "Management Trainee -> Department Manager -> Food & Beverage Director -> General Manager (GM) of 5-Star Hotel / Cruise Liner"
        },
        {
          "text": "Staying in an entry-level trainee role forever with no advancement"
        },
        {
          "text": "Demotions every year"
        },
        {
          "text": "Being fired immediately without reason"
        }
      ],
      "correctIndex": 0,
      "explanation": "Management Trainee -> Department Manager -> Food & Beverage Director -> General Manager (GM) of 5-Star Hotel / Cruise Liner. With consistent hard work, continuous learning, and integrity, you can rise to senior national leadership positions!",
      "proTip": "Never stop learning new skills — the best leaders in this field keep updating their knowledge throughout their lives!"
    },
    {
      "id": 9,
      "roadmapStage": "Stage 9: Mindset & Professional Ethics",
      "category": "Skills to Build",
      "categoryColor": "bg-amber-100 text-amber-900 border-amber-300",
      "question": "What is the single most vital quality that earns deep respect and enduring trust in this profession?",
      "options": [
        {
          "text": "Showing off with arrogance"
        },
        {
          "text": "High personal integrity, empathy for citizens, and relentless dedication to quality"
        },
        {
          "text": "Blaming others for your own mistakes"
        },
        {
          "text": "Accepting bribes and cutting safety corners"
        }
      ],
      "correctIndex": 1,
      "explanation": "Integrity and genuine dedication to quality are irreplaceable! In every high-impact career, your reputation and honest character are your greatest assets.",
      "proTip": "Always be honest in your school tests and assignments — true character is built through small choices made every day."
    },
    {
      "id": 10,
      "roadmapStage": "Stage 10: Future World & AI Collaboration",
      "category": "AI & Future World",
      "categoryColor": "bg-purple-100 text-purple-900 border-purple-300",
      "question": "How will modern Artificial Intelligence (AI) and technology assist human professionals in this career over the next decade?",
      "options": [
        {
          "text": "AI will eliminate the entire profession and humans will have no jobs"
        },
        {
          "text": "Smart hotel apps handle automated room check-in, while warm human hospitality managers deliver unforgettable guest care"
        },
        {
          "text": "Computers will be outlawed in this profession"
        },
        {
          "text": "Nothing will change from 200 years ago"
        }
      ],
      "correctIndex": 1,
      "explanation": "Smart hotel apps handle automated room check-in, while warm human hospitality managers deliver unforgettable guest care. AI is a powerful assistant, but human empathy, critical judgment, moral courage, and physical action will always lead the future!",
      "proTip": "Embrace modern technology as a co-pilot, while building your unique human strengths of empathy, creativity, and leadership!"
    }
  ]
},

  "sports": {
  "id": "sports",
  "title": "Professional Athlete & Sports Career Roadmap Quiz",
  "subtitle": "A student-friendly quiz for 8th, 9th & 10th classes: daily training, SAI academies, sports quota government jobs & Olympic dreams!",
  "icon": "🏆",
  "badge": "For Classes 8th – 10th",
  "gradient": "from-green-600 via-emerald-700 to-teal-900",
  "accentColor": "#15803D",
  "description": "Want to become a Professional Athlete & Sports Career? Test if you know the exact roadmap: stream choices after 10th, required degrees, key entrance exams, and skills needed to excel!",
  "totalQuestions": 10,
  "blueprintUrl": "/career-reports?career=sports",
  "cheatSheet": [
    "Class 8-10: Focus on Physical Education, Biology (human muscular anatomy and build Waking up at 5:00 AM.",
    "After 10th: Choose Any stream in Intermediate + Physical Education (B.P.Ed after degree or SAI training).",
    "Key Gateways: Prepare for State & National Sports Trials / Khelo India Youth Games / National Games selections.",
    "Degree & Duration: Continuous training + 3-Year B.P.Ed (Bachelor of Physical Education) or B.Sc Sports Science.",
    "Future with AI: AI wearable sensors track biomechanics and injury prevention, while supreme athletic grit and human heart win championship gold."
  ],
  "questions": [
    {
      "id": 1,
      "roadmapStage": "Stage 1: After 10th Class",
      "category": "Choosing Branch / Stream",
      "categoryColor": "bg-blue-100 text-blue-900 border-blue-300",
      "question": "When you pass Class 10, which Intermediate (10+2) stream should you choose to become a Professional Athlete & Sports Career?",
      "options": [
        {
          "text": "Any irrelevant vocational stream without checking eligibility"
        },
        {
          "text": "Any stream in Intermediate + Physical Education (B.P.Ed after degree or SAI training)"
        },
        {
          "text": "Drop out of school after Class 10"
        },
        {
          "text": "Only study arts without required core subjects"
        }
      ],
      "correctIndex": 1,
      "explanation": "Any stream in Intermediate + Physical Education (B.P.Ed after degree or SAI training). Meeting the right stream criteria in 11th and 12th is the vital first step on this roadmap!",
      "proTip": "Check the exact entrance eligibility early in 10th class so you pick your Intermediate stream with 100% confidence!"
    },
    {
      "id": 2,
      "roadmapStage": "Stage 2: Training & Degree Duration",
      "category": "Course Duration",
      "categoryColor": "bg-emerald-100 text-emerald-900 border-emerald-300",
      "question": "How much time does it take to complete the foundational qualification and training for this career pathway?",
      "options": [
        {
          "text": "Just a 1-day certificate course"
        },
        {
          "text": "15 years of only theoretical reading"
        },
        {
          "text": "Continuous training + 3-Year B.P.Ed (Bachelor of Physical Education) or B.Sc Sports Science"
        },
        {
          "text": "6 weeks of online videos"
        }
      ],
      "correctIndex": 2,
      "explanation": "This professional pathway takes Continuous training + 3-Year B.P.Ed (Bachelor of Physical Education) or B.Sc Sports Science. True professional expertise requires structured degrees, lab experiments, and hands-on practical postings.",
      "proTip": "Focus on mastering concepts every single year rather than rushing through degrees!"
    },
    {
      "id": 3,
      "roadmapStage": "Stage 3: Gateway Degree & Entrance Exam",
      "category": "College Degree & Exams",
      "categoryColor": "bg-indigo-100 text-indigo-900 border-indigo-300",
      "question": "Which key examination or degree gateway is central to entering this professional career in India?",
      "options": [
        {
          "text": "State & National Sports Trials / Khelo India Youth Games / National Games selections"
        },
        {
          "text": "A random lucky lottery draw"
        },
        {
          "text": "Paying an unauthorized private middleman"
        },
        {
          "text": "Only writing a high school spelling test"
        }
      ],
      "correctIndex": 0,
      "explanation": "State & National Sports Trials / Khelo India Youth Games / National Games selections. Clearing standard national or state entrances guarantees transparent admission into top accredited colleges and government commissions.",
      "proTip": "Previous years' question papers and conceptual NCERT mastery are your best friends when preparing for this gateway!"
    },
    {
      "id": 4,
      "roadmapStage": "Stage 4: School Foundations",
      "category": "School Subjects",
      "categoryColor": "bg-amber-100 text-amber-900 border-amber-300",
      "question": "Which subject that you study right now in 8th, 9th, or 10th class builds the deepest foundation for this career?",
      "options": [
        {
          "text": "Memorizing movie trivia"
        },
        {
          "text": "Playing mobile games during study hours"
        },
        {
          "text": "Physical Education, Biology (human muscular anatomy & nutrition), and Physics (projectile motion)"
        },
        {
          "text": "Sleeping in the classroom"
        }
      ],
      "correctIndex": 2,
      "explanation": "Physical Education, Biology (human muscular anatomy & nutrition), and Physics (projectile motion). What you are learning in school right now directly connects to this field!",
      "proTip": "Pay extra attention when your teacher covers these topics in class — you are building the foundation of your future profession!"
    },
    {
      "id": 5,
      "roadmapStage": "Stage 5: High School Habits to Build",
      "category": "Skills to Build",
      "categoryColor": "bg-rose-100 text-rose-900 border-rose-300",
      "question": "As an 8th, 9th, or 10th student, what real habit should you start cultivating to prepare for this profession?",
      "options": [
        {
          "text": "Waking up at 5:00 AM, disciplined athletic practice, clean nutrition, sleep hygiene, and mental resilience under pressure"
        },
        {
          "text": "Refusing to do school assignments on time"
        },
        {
          "text": "Spending 6 hours a day arguing on social media"
        },
        {
          "text": "Giving up whenever a lesson feels slightly challenging"
        }
      ],
      "correctIndex": 0,
      "explanation": "Waking up at 5:00 AM, disciplined athletic practice, clean nutrition, sleep hygiene, and mental resilience under pressure. Great professionals develop their discipline, focus, and core habits long before they enter college.",
      "proTip": "Start with just 20 minutes a day practicing this habit — consistency over weeks and months creates champions!"
    },
    {
      "id": 6,
      "roadmapStage": "Stage 6: Premier Institutions & Regulators",
      "category": "College Degree & Exams",
      "categoryColor": "bg-purple-100 text-purple-900 border-purple-300",
      "question": "Which premier institutions or statutory bodies are recognized across India for this professional discipline?",
      "options": [
        {
          "text": "Unrecognized fake coaching websites with no campus"
        },
        {
          "text": "Sports Authority of India (SAI) National Centers of Excellence and Netaji Subhas National Institute of Sports (NSNIS Patiala)"
        },
        {
          "text": "Local amusement parks"
        },
        {
          "text": "Private bus booking counters"
        }
      ],
      "correctIndex": 1,
      "explanation": "Sports Authority of India (SAI) National Centers of Excellence and Netaji Subhas National Institute of Sports (NSNIS Patiala). Studying in premier recognized institutions gives you top laboratory facilities, experienced mentors, and world-class campus recruitment.",
      "proTip": "Visit the official websites of these premier institutes online — seeing campus photos and student projects will inspire you!"
    },
    {
      "id": 7,
      "roadmapStage": "Stage 7: Everyday Role & Purpose",
      "category": "Skills to Build",
      "categoryColor": "bg-teal-100 text-teal-900 border-teal-300",
      "question": "What is the real day-to-day mission and responsibility of professionals working in this field?",
      "options": [
        {
          "text": "Sitting idle in an empty room with zero responsibilities"
        },
        {
          "text": "Taking shortcuts and breaking ethics"
        },
        {
          "text": "Intensive skill drills, cardio stamina conditioning, tactical match strategy, and competitive tournament participation"
        },
        {
          "text": "Only showing up once a year"
        }
      ],
      "correctIndex": 2,
      "explanation": "Intensive skill drills, cardio stamina conditioning, tactical match strategy, and competitive tournament participation. Professionals in this field play a critical role in strengthening society, public welfare, and national progress.",
      "proTip": "A career is not just a monthly paycheck — it is your daily opportunity to solve meaningful problems and make people's lives better!"
    },
    {
      "id": 8,
      "roadmapStage": "Stage 8: Career Ladder & Promotion",
      "category": "Course Duration",
      "categoryColor": "bg-indigo-100 text-indigo-900 border-indigo-300",
      "question": "As you gain experience and demonstrate exceptional leadership, what does your long-term career growth path look like?",
      "options": [
        {
          "text": "District Champion -> State / National Gold Medalist -> Indian National Team Player -> International Olympian / Chief Sports Coach"
        },
        {
          "text": "Staying in an entry-level trainee role forever with no advancement"
        },
        {
          "text": "Demotions every year"
        },
        {
          "text": "Being fired immediately without reason"
        }
      ],
      "correctIndex": 0,
      "explanation": "District Champion -> State / National Gold Medalist -> Indian National Team Player -> International Olympian / Chief Sports Coach. With consistent hard work, continuous learning, and integrity, you can rise to senior national leadership positions!",
      "proTip": "Never stop learning new skills — the best leaders in this field keep updating their knowledge throughout their lives!"
    },
    {
      "id": 9,
      "roadmapStage": "Stage 9: Mindset & Professional Ethics",
      "category": "Skills to Build",
      "categoryColor": "bg-amber-100 text-amber-900 border-amber-300",
      "question": "What is the single most vital quality that earns deep respect and enduring trust in this profession?",
      "options": [
        {
          "text": "Showing off with arrogance"
        },
        {
          "text": "High personal integrity, empathy for citizens, and relentless dedication to quality"
        },
        {
          "text": "Blaming others for your own mistakes"
        },
        {
          "text": "Accepting bribes and cutting safety corners"
        }
      ],
      "correctIndex": 1,
      "explanation": "Integrity and genuine dedication to quality are irreplaceable! In every high-impact career, your reputation and honest character are your greatest assets.",
      "proTip": "Always be honest in your school tests and assignments — true character is built through small choices made every day."
    },
    {
      "id": 10,
      "roadmapStage": "Stage 10: Future World & AI Collaboration",
      "category": "AI & Future World",
      "categoryColor": "bg-purple-100 text-purple-900 border-purple-300",
      "question": "How will modern Artificial Intelligence (AI) and technology assist human professionals in this career over the next decade?",
      "options": [
        {
          "text": "AI will eliminate the entire profession and humans will have no jobs"
        },
        {
          "text": "AI wearable sensors track biomechanics and injury prevention, while supreme athletic grit and human heart win championship gold"
        },
        {
          "text": "Computers will be outlawed in this profession"
        },
        {
          "text": "Nothing will change from 200 years ago"
        }
      ],
      "correctIndex": 1,
      "explanation": "AI wearable sensors track biomechanics and injury prevention, while supreme athletic grit and human heart win championship gold. AI is a powerful assistant, but human empathy, critical judgment, moral courage, and physical action will always lead the future!",
      "proTip": "Embrace modern technology as a co-pilot, while building your unique human strengths of empathy, creativity, and leadership!"
    }
  ]
},

  "chef": {
  "id": "chef",
  "title": "Chef & Culinary Arts Specialist Roadmap Quiz",
  "subtitle": "A student-friendly quiz for 8th, 9th & 10th classes: culinary academies, kitchen brigades, pastry arts & executive chef mastery!",
  "icon": "👨‍🍳",
  "badge": "For Classes 8th – 10th",
  "gradient": "from-orange-600 via-red-700 to-stone-900",
  "accentColor": "#EA580C",
  "description": "Want to become a Chef & Culinary Arts Specialist? Test if you know the exact roadmap: stream choices after 10th, required degrees, key entrance exams, and skills needed to excel!",
  "totalQuestions": 10,
  "blueprintUrl": "/career-reports?career=chef",
  "cheatSheet": [
    "Class 8-10: Focus on Chemistry (heat reactions, acids/bases in cooking), Biology (nutrition), and Food Science and build Cooking experiments at home.",
    "After 10th: Choose Any Intermediate stream (Science, Commerce, or Arts).",
    "Key Gateways: Prepare for NCHMCT JEE or Culinary Academy Entrance Tests (Culinary Institute of India).",
    "Degree & Duration: 3-Year Bachelor in Culinary Arts (BCA) or 1.5-Year Diploma in Food Production.",
    "Future with AI: Automated kitchen equipment aids temperature precision, while executive chefs pioneer creative flavor harmony and culinary artistry."
  ],
  "questions": [
    {
      "id": 1,
      "roadmapStage": "Stage 1: After 10th Class",
      "category": "Choosing Branch / Stream",
      "categoryColor": "bg-blue-100 text-blue-900 border-blue-300",
      "question": "When you pass Class 10, which Intermediate (10+2) stream should you choose to become a Chef & Culinary Arts Specialist?",
      "options": [
        {
          "text": "Any irrelevant vocational stream without checking eligibility"
        },
        {
          "text": "Any Intermediate stream (Science, Commerce, or Arts)"
        },
        {
          "text": "Drop out of school after Class 10"
        },
        {
          "text": "Only study arts without required core subjects"
        }
      ],
      "correctIndex": 1,
      "explanation": "Any Intermediate stream (Science, Commerce, or Arts). Meeting the right stream criteria in 11th and 12th is the vital first step on this roadmap!",
      "proTip": "Check the exact entrance eligibility early in 10th class so you pick your Intermediate stream with 100% confidence!"
    },
    {
      "id": 2,
      "roadmapStage": "Stage 2: Training & Degree Duration",
      "category": "Course Duration",
      "categoryColor": "bg-emerald-100 text-emerald-900 border-emerald-300",
      "question": "How much time does it take to complete the foundational qualification and training for this career pathway?",
      "options": [
        {
          "text": "Just a 1-day certificate course"
        },
        {
          "text": "15 years of only theoretical reading"
        },
        {
          "text": "3-Year Bachelor in Culinary Arts (BCA) or 1.5-Year Diploma in Food Production"
        },
        {
          "text": "6 weeks of online videos"
        }
      ],
      "correctIndex": 2,
      "explanation": "This professional pathway takes 3-Year Bachelor in Culinary Arts (BCA) or 1.5-Year Diploma in Food Production. True professional expertise requires structured degrees, lab experiments, and hands-on practical postings.",
      "proTip": "Focus on mastering concepts every single year rather than rushing through degrees!"
    },
    {
      "id": 3,
      "roadmapStage": "Stage 3: Gateway Degree & Entrance Exam",
      "category": "College Degree & Exams",
      "categoryColor": "bg-indigo-100 text-indigo-900 border-indigo-300",
      "question": "Which key examination or degree gateway is central to entering this professional career in India?",
      "options": [
        {
          "text": "NCHMCT JEE or Culinary Academy Entrance Tests (Culinary Institute of India)"
        },
        {
          "text": "A random lucky lottery draw"
        },
        {
          "text": "Paying an unauthorized private middleman"
        },
        {
          "text": "Only writing a high school spelling test"
        }
      ],
      "correctIndex": 0,
      "explanation": "NCHMCT JEE or Culinary Academy Entrance Tests (Culinary Institute of India). Clearing standard national or state entrances guarantees transparent admission into top accredited colleges and government commissions.",
      "proTip": "Previous years' question papers and conceptual NCERT mastery are your best friends when preparing for this gateway!"
    },
    {
      "id": 4,
      "roadmapStage": "Stage 4: School Foundations",
      "category": "School Subjects",
      "categoryColor": "bg-amber-100 text-amber-900 border-amber-300",
      "question": "Which subject that you study right now in 8th, 9th, or 10th class builds the deepest foundation for this career?",
      "options": [
        {
          "text": "Memorizing movie trivia"
        },
        {
          "text": "Playing mobile games during study hours"
        },
        {
          "text": "Chemistry (heat reactions, acids/bases in cooking), Biology (nutrition), and Food Science"
        },
        {
          "text": "Sleeping in the classroom"
        }
      ],
      "correctIndex": 2,
      "explanation": "Chemistry (heat reactions, acids/bases in cooking), Biology (nutrition), and Food Science. What you are learning in school right now directly connects to this field!",
      "proTip": "Pay extra attention when your teacher covers these topics in class — you are building the foundation of your future profession!"
    },
    {
      "id": 5,
      "roadmapStage": "Stage 5: High School Habits to Build",
      "category": "Skills to Build",
      "categoryColor": "bg-rose-100 text-rose-900 border-rose-300",
      "question": "As an 8th, 9th, or 10th student, what real habit should you start cultivating to prepare for this profession?",
      "options": [
        {
          "text": "Cooking experiments at home, knife safety, tasting different spices, and maintaining strict kitchen cleanliness"
        },
        {
          "text": "Refusing to do school assignments on time"
        },
        {
          "text": "Spending 6 hours a day arguing on social media"
        },
        {
          "text": "Giving up whenever a lesson feels slightly challenging"
        }
      ],
      "correctIndex": 0,
      "explanation": "Cooking experiments at home, knife safety, tasting different spices, and maintaining strict kitchen cleanliness. Great professionals develop their discipline, focus, and core habits long before they enter college.",
      "proTip": "Start with just 20 minutes a day practicing this habit — consistency over weeks and months creates champions!"
    },
    {
      "id": 6,
      "roadmapStage": "Stage 6: Premier Institutions & Regulators",
      "category": "College Degree & Exams",
      "categoryColor": "bg-purple-100 text-purple-900 border-purple-300",
      "question": "Which premier institutions or statutory bodies are recognized across India for this professional discipline?",
      "options": [
        {
          "text": "Unrecognized fake coaching websites with no campus"
        },
        {
          "text": "Culinary Academy of India (Hyderabad), IHM Culinary branches, and Le Cordon Bleu"
        },
        {
          "text": "Local amusement parks"
        },
        {
          "text": "Private bus booking counters"
        }
      ],
      "correctIndex": 1,
      "explanation": "Culinary Academy of India (Hyderabad), IHM Culinary branches, and Le Cordon Bleu. Studying in premier recognized institutions gives you top laboratory facilities, experienced mentors, and world-class campus recruitment.",
      "proTip": "Visit the official websites of these premier institutes online — seeing campus photos and student projects will inspire you!"
    },
    {
      "id": 7,
      "roadmapStage": "Stage 7: Everyday Role & Purpose",
      "category": "Skills to Build",
      "categoryColor": "bg-teal-100 text-teal-900 border-teal-300",
      "question": "What is the real day-to-day mission and responsibility of professionals working in this field?",
      "options": [
        {
          "text": "Sitting idle in an empty room with zero responsibilities"
        },
        {
          "text": "Taking shortcuts and breaking ethics"
        },
        {
          "text": "Curating gourmet menus, cooking signature dishes, plating food artistically, and leading high-speed kitchen lines"
        },
        {
          "text": "Only showing up once a year"
        }
      ],
      "correctIndex": 2,
      "explanation": "Curating gourmet menus, cooking signature dishes, plating food artistically, and leading high-speed kitchen lines. Professionals in this field play a critical role in strengthening society, public welfare, and national progress.",
      "proTip": "A career is not just a monthly paycheck — it is your daily opportunity to solve meaningful problems and make people's lives better!"
    },
    {
      "id": 8,
      "roadmapStage": "Stage 8: Career Ladder & Promotion",
      "category": "Course Duration",
      "categoryColor": "bg-indigo-100 text-indigo-900 border-indigo-300",
      "question": "As you gain experience and demonstrate exceptional leadership, what does your long-term career growth path look like?",
      "options": [
        {
          "text": "Commis Chef -> Chef de Partie -> Sous Chef -> Executive Chef -> Michelin Star Restaurant Founder"
        },
        {
          "text": "Staying in an entry-level trainee role forever with no advancement"
        },
        {
          "text": "Demotions every year"
        },
        {
          "text": "Being fired immediately without reason"
        }
      ],
      "correctIndex": 0,
      "explanation": "Commis Chef -> Chef de Partie -> Sous Chef -> Executive Chef -> Michelin Star Restaurant Founder. With consistent hard work, continuous learning, and integrity, you can rise to senior national leadership positions!",
      "proTip": "Never stop learning new skills — the best leaders in this field keep updating their knowledge throughout their lives!"
    },
    {
      "id": 9,
      "roadmapStage": "Stage 9: Mindset & Professional Ethics",
      "category": "Skills to Build",
      "categoryColor": "bg-amber-100 text-amber-900 border-amber-300",
      "question": "What is the single most vital quality that earns deep respect and enduring trust in this profession?",
      "options": [
        {
          "text": "Showing off with arrogance"
        },
        {
          "text": "High personal integrity, empathy for citizens, and relentless dedication to quality"
        },
        {
          "text": "Blaming others for your own mistakes"
        },
        {
          "text": "Accepting bribes and cutting safety corners"
        }
      ],
      "correctIndex": 1,
      "explanation": "Integrity and genuine dedication to quality are irreplaceable! In every high-impact career, your reputation and honest character are your greatest assets.",
      "proTip": "Always be honest in your school tests and assignments — true character is built through small choices made every day."
    },
    {
      "id": 10,
      "roadmapStage": "Stage 10: Future World & AI Collaboration",
      "category": "AI & Future World",
      "categoryColor": "bg-purple-100 text-purple-900 border-purple-300",
      "question": "How will modern Artificial Intelligence (AI) and technology assist human professionals in this career over the next decade?",
      "options": [
        {
          "text": "AI will eliminate the entire profession and humans will have no jobs"
        },
        {
          "text": "Automated kitchen equipment aids temperature precision, while executive chefs pioneer creative flavor harmony and culinary artistry"
        },
        {
          "text": "Computers will be outlawed in this profession"
        },
        {
          "text": "Nothing will change from 200 years ago"
        }
      ],
      "correctIndex": 1,
      "explanation": "Automated kitchen equipment aids temperature precision, while executive chefs pioneer creative flavor harmony and culinary artistry. AI is a powerful assistant, but human empathy, critical judgment, moral courage, and physical action will always lead the future!",
      "proTip": "Embrace modern technology as a co-pilot, while building your unique human strengths of empathy, creativity, and leadership!"
    }
  ]
},

  "environmental-consultant": {
  "id": "environmental-consultant",
  "title": "Environmental Consultant & Sustainability Roadmap Quiz",
  "subtitle": "A student-friendly quiz for 8th, 9th & 10th classes: EIA studies, pollution control, ESG audits & saving planet Earth!",
  "icon": "🌱",
  "badge": "For Classes 8th – 10th",
  "gradient": "from-emerald-600 via-teal-700 to-cyan-900",
  "accentColor": "#059669",
  "description": "Want to become a Environmental Consultant & Sustainability? Test if you know the exact roadmap: stream choices after 10th, required degrees, key entrance exams, and skills needed to excel!",
  "totalQuestions": 10,
  "blueprintUrl": "/career-reports?career=environmental-consultant",
  "cheatSheet": [
    "Class 8-10: Focus on Biology (Ecology, Ecosystems), Chemistry (Pollution chemistry), and Geography and build Planting trees.",
    "After 10th: Choose BiPC (Biology stream) OR MPC (Maths stream) in 10+2 Intermediate.",
    "Key Gateways: Prepare for CUET / State CET / GATE (for M.Tech) / NABET EIA Accreditation.",
    "Degree & Duration: 3-Year B.Sc / 4-Year B.Tech in Environmental Science / Engineering + 2-Year M.Sc / M.Tech.",
    "Future with AI: Satellite imagery and AI sensors detect global deforestation and pollution spikes in real time, while consultants enforce clean policies."
  ],
  "questions": [
    {
      "id": 1,
      "roadmapStage": "Stage 1: After 10th Class",
      "category": "Choosing Branch / Stream",
      "categoryColor": "bg-blue-100 text-blue-900 border-blue-300",
      "question": "When you pass Class 10, which Intermediate (10+2) stream should you choose to become a Environmental Consultant & Sustainability?",
      "options": [
        {
          "text": "Any irrelevant vocational stream without checking eligibility"
        },
        {
          "text": "BiPC (Biology stream) OR MPC (Maths stream) in 10+2 Intermediate"
        },
        {
          "text": "Drop out of school after Class 10"
        },
        {
          "text": "Only study arts without required core subjects"
        }
      ],
      "correctIndex": 1,
      "explanation": "BiPC (Biology stream) OR MPC (Maths stream) in 10+2 Intermediate. Meeting the right stream criteria in 11th and 12th is the vital first step on this roadmap!",
      "proTip": "Check the exact entrance eligibility early in 10th class so you pick your Intermediate stream with 100% confidence!"
    },
    {
      "id": 2,
      "roadmapStage": "Stage 2: Training & Degree Duration",
      "category": "Course Duration",
      "categoryColor": "bg-emerald-100 text-emerald-900 border-emerald-300",
      "question": "How much time does it take to complete the foundational qualification and training for this career pathway?",
      "options": [
        {
          "text": "Just a 1-day certificate course"
        },
        {
          "text": "15 years of only theoretical reading"
        },
        {
          "text": "3-Year B.Sc / 4-Year B.Tech in Environmental Science / Engineering + 2-Year M.Sc / M.Tech"
        },
        {
          "text": "6 weeks of online videos"
        }
      ],
      "correctIndex": 2,
      "explanation": "This professional pathway takes 3-Year B.Sc / 4-Year B.Tech in Environmental Science / Engineering + 2-Year M.Sc / M.Tech. True professional expertise requires structured degrees, lab experiments, and hands-on practical postings.",
      "proTip": "Focus on mastering concepts every single year rather than rushing through degrees!"
    },
    {
      "id": 3,
      "roadmapStage": "Stage 3: Gateway Degree & Entrance Exam",
      "category": "College Degree & Exams",
      "categoryColor": "bg-indigo-100 text-indigo-900 border-indigo-300",
      "question": "Which key examination or degree gateway is central to entering this professional career in India?",
      "options": [
        {
          "text": "CUET / State CET / GATE (for M.Tech) / NABET EIA Accreditation"
        },
        {
          "text": "A random lucky lottery draw"
        },
        {
          "text": "Paying an unauthorized private middleman"
        },
        {
          "text": "Only writing a high school spelling test"
        }
      ],
      "correctIndex": 0,
      "explanation": "CUET / State CET / GATE (for M.Tech) / NABET EIA Accreditation. Clearing standard national or state entrances guarantees transparent admission into top accredited colleges and government commissions.",
      "proTip": "Previous years' question papers and conceptual NCERT mastery are your best friends when preparing for this gateway!"
    },
    {
      "id": 4,
      "roadmapStage": "Stage 4: School Foundations",
      "category": "School Subjects",
      "categoryColor": "bg-amber-100 text-amber-900 border-amber-300",
      "question": "Which subject that you study right now in 8th, 9th, or 10th class builds the deepest foundation for this career?",
      "options": [
        {
          "text": "Memorizing movie trivia"
        },
        {
          "text": "Playing mobile games during study hours"
        },
        {
          "text": "Biology (Ecology, Ecosystems), Chemistry (Pollution chemistry), and Geography"
        },
        {
          "text": "Sleeping in the classroom"
        }
      ],
      "correctIndex": 2,
      "explanation": "Biology (Ecology, Ecosystems), Chemistry (Pollution chemistry), and Geography. What you are learning in school right now directly connects to this field!",
      "proTip": "Pay extra attention when your teacher covers these topics in class — you are building the foundation of your future profession!"
    },
    {
      "id": 5,
      "roadmapStage": "Stage 5: High School Habits to Build",
      "category": "Skills to Build",
      "categoryColor": "bg-rose-100 text-rose-900 border-rose-300",
      "question": "As an 8th, 9th, or 10th student, what real habit should you start cultivating to prepare for this profession?",
      "options": [
        {
          "text": "Planting trees, conserving water, organizing school waste segregation drives, and nature curiosity"
        },
        {
          "text": "Refusing to do school assignments on time"
        },
        {
          "text": "Spending 6 hours a day arguing on social media"
        },
        {
          "text": "Giving up whenever a lesson feels slightly challenging"
        }
      ],
      "correctIndex": 0,
      "explanation": "Planting trees, conserving water, organizing school waste segregation drives, and nature curiosity. Great professionals develop their discipline, focus, and core habits long before they enter college.",
      "proTip": "Start with just 20 minutes a day practicing this habit — consistency over weeks and months creates champions!"
    },
    {
      "id": 6,
      "roadmapStage": "Stage 6: Premier Institutions & Regulators",
      "category": "College Degree & Exams",
      "categoryColor": "bg-purple-100 text-purple-900 border-purple-300",
      "question": "Which premier institutions or statutory bodies are recognized across India for this professional discipline?",
      "options": [
        {
          "text": "Unrecognized fake coaching websites with no campus"
        },
        {
          "text": "TERI School of Advanced Studies (New Delhi), IITs (Environmental Engg), and premier central universities"
        },
        {
          "text": "Local amusement parks"
        },
        {
          "text": "Private bus booking counters"
        }
      ],
      "correctIndex": 1,
      "explanation": "TERI School of Advanced Studies (New Delhi), IITs (Environmental Engg), and premier central universities. Studying in premier recognized institutions gives you top laboratory facilities, experienced mentors, and world-class campus recruitment.",
      "proTip": "Visit the official websites of these premier institutes online — seeing campus photos and student projects will inspire you!"
    },
    {
      "id": 7,
      "roadmapStage": "Stage 7: Everyday Role & Purpose",
      "category": "Skills to Build",
      "categoryColor": "bg-teal-100 text-teal-900 border-teal-300",
      "question": "What is the real day-to-day mission and responsibility of professionals working in this field?",
      "options": [
        {
          "text": "Sitting idle in an empty room with zero responsibilities"
        },
        {
          "text": "Taking shortcuts and breaking ethics"
        },
        {
          "text": "Testing air and water quality, conducting Environmental Impact Assessments (EIA), and guiding industries to reduce carbon emissions"
        },
        {
          "text": "Only showing up once a year"
        }
      ],
      "correctIndex": 2,
      "explanation": "Testing air and water quality, conducting Environmental Impact Assessments (EIA), and guiding industries to reduce carbon emissions. Professionals in this field play a critical role in strengthening society, public welfare, and national progress.",
      "proTip": "A career is not just a monthly paycheck — it is your daily opportunity to solve meaningful problems and make people's lives better!"
    },
    {
      "id": 8,
      "roadmapStage": "Stage 8: Career Ladder & Promotion",
      "category": "Course Duration",
      "categoryColor": "bg-indigo-100 text-indigo-900 border-indigo-300",
      "question": "As you gain experience and demonstrate exceptional leadership, what does your long-term career growth path look like?",
      "options": [
        {
          "text": "Field Environmental Analyst -> Senior EIA Consultant -> ESG Lead Auditor -> Chief Sustainability Officer (CSO)"
        },
        {
          "text": "Staying in an entry-level trainee role forever with no advancement"
        },
        {
          "text": "Demotions every year"
        },
        {
          "text": "Being fired immediately without reason"
        }
      ],
      "correctIndex": 0,
      "explanation": "Field Environmental Analyst -> Senior EIA Consultant -> ESG Lead Auditor -> Chief Sustainability Officer (CSO). With consistent hard work, continuous learning, and integrity, you can rise to senior national leadership positions!",
      "proTip": "Never stop learning new skills — the best leaders in this field keep updating their knowledge throughout their lives!"
    },
    {
      "id": 9,
      "roadmapStage": "Stage 9: Mindset & Professional Ethics",
      "category": "Skills to Build",
      "categoryColor": "bg-amber-100 text-amber-900 border-amber-300",
      "question": "What is the single most vital quality that earns deep respect and enduring trust in this profession?",
      "options": [
        {
          "text": "Showing off with arrogance"
        },
        {
          "text": "High personal integrity, empathy for citizens, and relentless dedication to quality"
        },
        {
          "text": "Blaming others for your own mistakes"
        },
        {
          "text": "Accepting bribes and cutting safety corners"
        }
      ],
      "correctIndex": 1,
      "explanation": "Integrity and genuine dedication to quality are irreplaceable! In every high-impact career, your reputation and honest character are your greatest assets.",
      "proTip": "Always be honest in your school tests and assignments — true character is built through small choices made every day."
    },
    {
      "id": 10,
      "roadmapStage": "Stage 10: Future World & AI Collaboration",
      "category": "AI & Future World",
      "categoryColor": "bg-purple-100 text-purple-900 border-purple-300",
      "question": "How will modern Artificial Intelligence (AI) and technology assist human professionals in this career over the next decade?",
      "options": [
        {
          "text": "AI will eliminate the entire profession and humans will have no jobs"
        },
        {
          "text": "Satellite imagery and AI sensors detect global deforestation and pollution spikes in real time, while consultants enforce clean policies"
        },
        {
          "text": "Computers will be outlawed in this profession"
        },
        {
          "text": "Nothing will change from 200 years ago"
        }
      ],
      "correctIndex": 1,
      "explanation": "Satellite imagery and AI sensors detect global deforestation and pollution spikes in real time, while consultants enforce clean policies. AI is a powerful assistant, but human empathy, critical judgment, moral courage, and physical action will always lead the future!",
      "proTip": "Embrace modern technology as a co-pilot, while building your unique human strengths of empathy, creativity, and leadership!"
    }
  ]
},

  "archaeologist": {
  "id": "archaeologist",
  "title": "Archaeologist & Heritage Conservator Roadmap Quiz",
  "subtitle": "A student-friendly quiz for 8th, 9th & 10th classes: historical excavations, ASI expeditions, ancient relics & museum curation!",
  "icon": "🏺",
  "badge": "For Classes 8th – 10th",
  "gradient": "from-stone-600 via-amber-800 to-stone-950",
  "accentColor": "#78350F",
  "description": "Want to become a Archaeologist & Heritage Conservator? Test if you know the exact roadmap: stream choices after 10th, required degrees, key entrance exams, and skills needed to excel!",
  "totalQuestions": 10,
  "blueprintUrl": "/career-reports?career=archaeologist",
  "cheatSheet": [
    "Class 8-10: Focus on History (Harappan civilization, ancient dynasties), Geography, and Social Sciences and build Reading ancient history books.",
    "After 10th: Choose Humanities / Arts (HEC) preferred, though any Intermediate stream is eligible.",
    "Key Gateways: Prepare for CUET UG/PG & Archaeological Survey of India (ASI) Post Graduate Diploma entrance.",
    "Degree & Duration: 3-Year B.A + 2-Year M.A in Ancient Indian History, Culture and Archaeology + 2-Year ASI PGDA.",
    "Future with AI: LiDAR drones and AI satellite ground-penetrating radar reveal buried lost civilizations without disturbing the soil."
  ],
  "questions": [
    {
      "id": 1,
      "roadmapStage": "Stage 1: After 10th Class",
      "category": "Choosing Branch / Stream",
      "categoryColor": "bg-blue-100 text-blue-900 border-blue-300",
      "question": "When you pass Class 10, which Intermediate (10+2) stream should you choose to become a Archaeologist & Heritage Conservator?",
      "options": [
        {
          "text": "Any irrelevant vocational stream without checking eligibility"
        },
        {
          "text": "Humanities / Arts (HEC) preferred, though any Intermediate stream is eligible"
        },
        {
          "text": "Drop out of school after Class 10"
        },
        {
          "text": "Only study arts without required core subjects"
        }
      ],
      "correctIndex": 1,
      "explanation": "Humanities / Arts (HEC) preferred, though any Intermediate stream is eligible. Meeting the right stream criteria in 11th and 12th is the vital first step on this roadmap!",
      "proTip": "Check the exact entrance eligibility early in 10th class so you pick your Intermediate stream with 100% confidence!"
    },
    {
      "id": 2,
      "roadmapStage": "Stage 2: Training & Degree Duration",
      "category": "Course Duration",
      "categoryColor": "bg-emerald-100 text-emerald-900 border-emerald-300",
      "question": "How much time does it take to complete the foundational qualification and training for this career pathway?",
      "options": [
        {
          "text": "Just a 1-day certificate course"
        },
        {
          "text": "15 years of only theoretical reading"
        },
        {
          "text": "3-Year B.A + 2-Year M.A in Ancient Indian History, Culture and Archaeology + 2-Year ASI PGDA"
        },
        {
          "text": "6 weeks of online videos"
        }
      ],
      "correctIndex": 2,
      "explanation": "This professional pathway takes 3-Year B.A + 2-Year M.A in Ancient Indian History, Culture and Archaeology + 2-Year ASI PGDA. True professional expertise requires structured degrees, lab experiments, and hands-on practical postings.",
      "proTip": "Focus on mastering concepts every single year rather than rushing through degrees!"
    },
    {
      "id": 3,
      "roadmapStage": "Stage 3: Gateway Degree & Entrance Exam",
      "category": "College Degree & Exams",
      "categoryColor": "bg-indigo-100 text-indigo-900 border-indigo-300",
      "question": "Which key examination or degree gateway is central to entering this professional career in India?",
      "options": [
        {
          "text": "CUET UG/PG & Archaeological Survey of India (ASI) Post Graduate Diploma entrance"
        },
        {
          "text": "A random lucky lottery draw"
        },
        {
          "text": "Paying an unauthorized private middleman"
        },
        {
          "text": "Only writing a high school spelling test"
        }
      ],
      "correctIndex": 0,
      "explanation": "CUET UG/PG & Archaeological Survey of India (ASI) Post Graduate Diploma entrance. Clearing standard national or state entrances guarantees transparent admission into top accredited colleges and government commissions.",
      "proTip": "Previous years' question papers and conceptual NCERT mastery are your best friends when preparing for this gateway!"
    },
    {
      "id": 4,
      "roadmapStage": "Stage 4: School Foundations",
      "category": "School Subjects",
      "categoryColor": "bg-amber-100 text-amber-900 border-amber-300",
      "question": "Which subject that you study right now in 8th, 9th, or 10th class builds the deepest foundation for this career?",
      "options": [
        {
          "text": "Memorizing movie trivia"
        },
        {
          "text": "Playing mobile games during study hours"
        },
        {
          "text": "History (Harappan civilization, ancient dynasties), Geography, and Social Sciences"
        },
        {
          "text": "Sleeping in the classroom"
        }
      ],
      "correctIndex": 2,
      "explanation": "History (Harappan civilization, ancient dynasties), Geography, and Social Sciences. What you are learning in school right now directly connects to this field!",
      "proTip": "Pay extra attention when your teacher covers these topics in class — you are building the foundation of your future profession!"
    },
    {
      "id": 5,
      "roadmapStage": "Stage 5: High School Habits to Build",
      "category": "Skills to Build",
      "categoryColor": "bg-rose-100 text-rose-900 border-rose-300",
      "question": "As an 8th, 9th, or 10th student, what real habit should you start cultivating to prepare for this profession?",
      "options": [
        {
          "text": "Reading ancient history books, visiting museums and heritage temples, and meticulous field note-taking"
        },
        {
          "text": "Refusing to do school assignments on time"
        },
        {
          "text": "Spending 6 hours a day arguing on social media"
        },
        {
          "text": "Giving up whenever a lesson feels slightly challenging"
        }
      ],
      "correctIndex": 0,
      "explanation": "Reading ancient history books, visiting museums and heritage temples, and meticulous field note-taking. Great professionals develop their discipline, focus, and core habits long before they enter college.",
      "proTip": "Start with just 20 minutes a day practicing this habit — consistency over weeks and months creates champions!"
    },
    {
      "id": 6,
      "roadmapStage": "Stage 6: Premier Institutions & Regulators",
      "category": "College Degree & Exams",
      "categoryColor": "bg-purple-100 text-purple-900 border-purple-300",
      "question": "Which premier institutions or statutory bodies are recognized across India for this professional discipline?",
      "options": [
        {
          "text": "Unrecognized fake coaching websites with no campus"
        },
        {
          "text": "Institute of Archaeology (ASI, New Delhi), Deccan College (Pune), and BHU Varanasi"
        },
        {
          "text": "Local amusement parks"
        },
        {
          "text": "Private bus booking counters"
        }
      ],
      "correctIndex": 1,
      "explanation": "Institute of Archaeology (ASI, New Delhi), Deccan College (Pune), and BHU Varanasi. Studying in premier recognized institutions gives you top laboratory facilities, experienced mentors, and world-class campus recruitment.",
      "proTip": "Visit the official websites of these premier institutes online — seeing campus photos and student projects will inspire you!"
    },
    {
      "id": 7,
      "roadmapStage": "Stage 7: Everyday Role & Purpose",
      "category": "Skills to Build",
      "categoryColor": "bg-teal-100 text-teal-900 border-teal-300",
      "question": "What is the real day-to-day mission and responsibility of professionals working in this field?",
      "options": [
        {
          "text": "Sitting idle in an empty room with zero responsibilities"
        },
        {
          "text": "Taking shortcuts and breaking ethics"
        },
        {
          "text": "Leading scientific archaeological digs, uncovering buried ancient cities, carbon-dating pottery, and conserving national monuments"
        },
        {
          "text": "Only showing up once a year"
        }
      ],
      "correctIndex": 2,
      "explanation": "Leading scientific archaeological digs, uncovering buried ancient cities, carbon-dating pottery, and conserving national monuments. Professionals in this field play a critical role in strengthening society, public welfare, and national progress.",
      "proTip": "A career is not just a monthly paycheck — it is your daily opportunity to solve meaningful problems and make people's lives better!"
    },
    {
      "id": 8,
      "roadmapStage": "Stage 8: Career Ladder & Promotion",
      "category": "Course Duration",
      "categoryColor": "bg-indigo-100 text-indigo-900 border-indigo-300",
      "question": "As you gain experience and demonstrate exceptional leadership, what does your long-term career growth path look like?",
      "options": [
        {
          "text": "Assistant Archaeologist -> Superintending Archaeologist -> Director of Excavations -> Director General of ASI"
        },
        {
          "text": "Staying in an entry-level trainee role forever with no advancement"
        },
        {
          "text": "Demotions every year"
        },
        {
          "text": "Being fired immediately without reason"
        }
      ],
      "correctIndex": 0,
      "explanation": "Assistant Archaeologist -> Superintending Archaeologist -> Director of Excavations -> Director General of ASI. With consistent hard work, continuous learning, and integrity, you can rise to senior national leadership positions!",
      "proTip": "Never stop learning new skills — the best leaders in this field keep updating their knowledge throughout their lives!"
    },
    {
      "id": 9,
      "roadmapStage": "Stage 9: Mindset & Professional Ethics",
      "category": "Skills to Build",
      "categoryColor": "bg-amber-100 text-amber-900 border-amber-300",
      "question": "What is the single most vital quality that earns deep respect and enduring trust in this profession?",
      "options": [
        {
          "text": "Showing off with arrogance"
        },
        {
          "text": "High personal integrity, empathy for citizens, and relentless dedication to quality"
        },
        {
          "text": "Blaming others for your own mistakes"
        },
        {
          "text": "Accepting bribes and cutting safety corners"
        }
      ],
      "correctIndex": 1,
      "explanation": "Integrity and genuine dedication to quality are irreplaceable! In every high-impact career, your reputation and honest character are your greatest assets.",
      "proTip": "Always be honest in your school tests and assignments — true character is built through small choices made every day."
    },
    {
      "id": 10,
      "roadmapStage": "Stage 10: Future World & AI Collaboration",
      "category": "AI & Future World",
      "categoryColor": "bg-purple-100 text-purple-900 border-purple-300",
      "question": "How will modern Artificial Intelligence (AI) and technology assist human professionals in this career over the next decade?",
      "options": [
        {
          "text": "AI will eliminate the entire profession and humans will have no jobs"
        },
        {
          "text": "LiDAR drones and AI satellite ground-penetrating radar reveal buried lost civilizations without disturbing the soil"
        },
        {
          "text": "Computers will be outlawed in this profession"
        },
        {
          "text": "Nothing will change from 200 years ago"
        }
      ],
      "correctIndex": 1,
      "explanation": "LiDAR drones and AI satellite ground-penetrating radar reveal buried lost civilizations without disturbing the soil. AI is a powerful assistant, but human empathy, critical judgment, moral courage, and physical action will always lead the future!",
      "proTip": "Embrace modern technology as a co-pilot, while building your unique human strengths of empathy, creativity, and leadership!"
    }
  ]
},

  "nutritionist": {
  "id": "nutritionist",
  "title": "Nutritionist & Dietitian Roadmap Quiz",
  "subtitle": "A student-friendly quiz for 8th, 9th & 10th classes: clinical dietetics, sports nutrition, metabolic health & IDA registered dietitian!",
  "icon": "🥗",
  "badge": "For Classes 8th – 10th",
  "gradient": "from-lime-600 via-green-600 to-emerald-800",
  "accentColor": "#65A30D",
  "description": "Want to become a Nutritionist & Dietitian? Test if you know the exact roadmap: stream choices after 10th, required degrees, key entrance exams, and skills needed to excel!",
  "totalQuestions": 10,
  "blueprintUrl": "/career-reports?career=nutritionist",
  "cheatSheet": [
    "Class 8-10: Focus on Biology (human digestive system, vitamins, carbohydrates, proteins) and Chemistry and build Reading food ingredient nutrition labels.",
    "After 10th: Choose Compulsory BiPC (Biology, Physics, Chemistry) in Intermediate.",
    "Key Gateways: Prepare for University Entrance Tests + Registered Dietitian (RD) Examination by Indian Dietetic Association (IDA).",
    "Degree & Duration: 3-Year B.Sc Nutrition & Dietetics + 2-Year M.Sc + 6 Months Hospital Internship.",
    "Future with AI: AI apps calculate micronutrient calorie scans from plate photos, while human dietitians provide deep psychological habit counseling."
  ],
  "questions": [
    {
      "id": 1,
      "roadmapStage": "Stage 1: After 10th Class",
      "category": "Choosing Branch / Stream",
      "categoryColor": "bg-blue-100 text-blue-900 border-blue-300",
      "question": "When you pass Class 10, which Intermediate (10+2) stream should you choose to become a Nutritionist & Dietitian?",
      "options": [
        {
          "text": "Any irrelevant vocational stream without checking eligibility"
        },
        {
          "text": "Compulsory BiPC (Biology, Physics, Chemistry) in Intermediate"
        },
        {
          "text": "Drop out of school after Class 10"
        },
        {
          "text": "Only study arts without required core subjects"
        }
      ],
      "correctIndex": 1,
      "explanation": "Compulsory BiPC (Biology, Physics, Chemistry) in Intermediate. Meeting the right stream criteria in 11th and 12th is the vital first step on this roadmap!",
      "proTip": "Check the exact entrance eligibility early in 10th class so you pick your Intermediate stream with 100% confidence!"
    },
    {
      "id": 2,
      "roadmapStage": "Stage 2: Training & Degree Duration",
      "category": "Course Duration",
      "categoryColor": "bg-emerald-100 text-emerald-900 border-emerald-300",
      "question": "How much time does it take to complete the foundational qualification and training for this career pathway?",
      "options": [
        {
          "text": "Just a 1-day certificate course"
        },
        {
          "text": "15 years of only theoretical reading"
        },
        {
          "text": "3-Year B.Sc Nutrition & Dietetics + 2-Year M.Sc + 6 Months Hospital Internship"
        },
        {
          "text": "6 weeks of online videos"
        }
      ],
      "correctIndex": 2,
      "explanation": "This professional pathway takes 3-Year B.Sc Nutrition & Dietetics + 2-Year M.Sc + 6 Months Hospital Internship. True professional expertise requires structured degrees, lab experiments, and hands-on practical postings.",
      "proTip": "Focus on mastering concepts every single year rather than rushing through degrees!"
    },
    {
      "id": 3,
      "roadmapStage": "Stage 3: Gateway Degree & Entrance Exam",
      "category": "College Degree & Exams",
      "categoryColor": "bg-indigo-100 text-indigo-900 border-indigo-300",
      "question": "Which key examination or degree gateway is central to entering this professional career in India?",
      "options": [
        {
          "text": "University Entrance Tests + Registered Dietitian (RD) Examination by Indian Dietetic Association (IDA)"
        },
        {
          "text": "A random lucky lottery draw"
        },
        {
          "text": "Paying an unauthorized private middleman"
        },
        {
          "text": "Only writing a high school spelling test"
        }
      ],
      "correctIndex": 0,
      "explanation": "University Entrance Tests + Registered Dietitian (RD) Examination by Indian Dietetic Association (IDA). Clearing standard national or state entrances guarantees transparent admission into top accredited colleges and government commissions.",
      "proTip": "Previous years' question papers and conceptual NCERT mastery are your best friends when preparing for this gateway!"
    },
    {
      "id": 4,
      "roadmapStage": "Stage 4: School Foundations",
      "category": "School Subjects",
      "categoryColor": "bg-amber-100 text-amber-900 border-amber-300",
      "question": "Which subject that you study right now in 8th, 9th, or 10th class builds the deepest foundation for this career?",
      "options": [
        {
          "text": "Memorizing movie trivia"
        },
        {
          "text": "Playing mobile games during study hours"
        },
        {
          "text": "Biology (human digestive system, vitamins, carbohydrates, proteins) and Chemistry"
        },
        {
          "text": "Sleeping in the classroom"
        }
      ],
      "correctIndex": 2,
      "explanation": "Biology (human digestive system, vitamins, carbohydrates, proteins) and Chemistry. What you are learning in school right now directly connects to this field!",
      "proTip": "Pay extra attention when your teacher covers these topics in class — you are building the foundation of your future profession!"
    },
    {
      "id": 5,
      "roadmapStage": "Stage 5: High School Habits to Build",
      "category": "Skills to Build",
      "categoryColor": "bg-rose-100 text-rose-900 border-rose-300",
      "question": "As an 8th, 9th, or 10th student, what real habit should you start cultivating to prepare for this profession?",
      "options": [
        {
          "text": "Reading food ingredient nutrition labels, understanding balanced diets, and healthy cooking curiosity"
        },
        {
          "text": "Refusing to do school assignments on time"
        },
        {
          "text": "Spending 6 hours a day arguing on social media"
        },
        {
          "text": "Giving up whenever a lesson feels slightly challenging"
        }
      ],
      "correctIndex": 0,
      "explanation": "Reading food ingredient nutrition labels, understanding balanced diets, and healthy cooking curiosity. Great professionals develop their discipline, focus, and core habits long before they enter college.",
      "proTip": "Start with just 20 minutes a day practicing this habit — consistency over weeks and months creates champions!"
    },
    {
      "id": 6,
      "roadmapStage": "Stage 6: Premier Institutions & Regulators",
      "category": "College Degree & Exams",
      "categoryColor": "bg-purple-100 text-purple-900 border-purple-300",
      "question": "Which premier institutions or statutory bodies are recognized across India for this professional discipline?",
      "options": [
        {
          "text": "Unrecognized fake coaching websites with no campus"
        },
        {
          "text": "National Institute of Nutrition (NIN Hyderabad), SNDT Women's University, and top medical colleges"
        },
        {
          "text": "Local amusement parks"
        },
        {
          "text": "Private bus booking counters"
        }
      ],
      "correctIndex": 1,
      "explanation": "National Institute of Nutrition (NIN Hyderabad), SNDT Women's University, and top medical colleges. Studying in premier recognized institutions gives you top laboratory facilities, experienced mentors, and world-class campus recruitment.",
      "proTip": "Visit the official websites of these premier institutes online — seeing campus photos and student projects will inspire you!"
    },
    {
      "id": 7,
      "roadmapStage": "Stage 7: Everyday Role & Purpose",
      "category": "Skills to Build",
      "categoryColor": "bg-teal-100 text-teal-900 border-teal-300",
      "question": "What is the real day-to-day mission and responsibility of professionals working in this field?",
      "options": [
        {
          "text": "Sitting idle in an empty room with zero responsibilities"
        },
        {
          "text": "Taking shortcuts and breaking ethics"
        },
        {
          "text": "Designing specialized meal plans for diabetic patients, guiding sports athletes on protein intake, and treating malnutrition"
        },
        {
          "text": "Only showing up once a year"
        }
      ],
      "correctIndex": 2,
      "explanation": "Designing specialized meal plans for diabetic patients, guiding sports athletes on protein intake, and treating malnutrition. Professionals in this field play a critical role in strengthening society, public welfare, and national progress.",
      "proTip": "A career is not just a monthly paycheck — it is your daily opportunity to solve meaningful problems and make people's lives better!"
    },
    {
      "id": 8,
      "roadmapStage": "Stage 8: Career Ladder & Promotion",
      "category": "Course Duration",
      "categoryColor": "bg-indigo-100 text-indigo-900 border-indigo-300",
      "question": "As you gain experience and demonstrate exceptional leadership, what does your long-term career growth path look like?",
      "options": [
        {
          "text": "Junior Dietitian -> Hospital Chief Clinical Nutritionist -> National Sports Team Nutritionist -> Celebrity Wellness Consultant"
        },
        {
          "text": "Staying in an entry-level trainee role forever with no advancement"
        },
        {
          "text": "Demotions every year"
        },
        {
          "text": "Being fired immediately without reason"
        }
      ],
      "correctIndex": 0,
      "explanation": "Junior Dietitian -> Hospital Chief Clinical Nutritionist -> National Sports Team Nutritionist -> Celebrity Wellness Consultant. With consistent hard work, continuous learning, and integrity, you can rise to senior national leadership positions!",
      "proTip": "Never stop learning new skills — the best leaders in this field keep updating their knowledge throughout their lives!"
    },
    {
      "id": 9,
      "roadmapStage": "Stage 9: Mindset & Professional Ethics",
      "category": "Skills to Build",
      "categoryColor": "bg-amber-100 text-amber-900 border-amber-300",
      "question": "What is the single most vital quality that earns deep respect and enduring trust in this profession?",
      "options": [
        {
          "text": "Showing off with arrogance"
        },
        {
          "text": "High personal integrity, empathy for citizens, and relentless dedication to quality"
        },
        {
          "text": "Blaming others for your own mistakes"
        },
        {
          "text": "Accepting bribes and cutting safety corners"
        }
      ],
      "correctIndex": 1,
      "explanation": "Integrity and genuine dedication to quality are irreplaceable! In every high-impact career, your reputation and honest character are your greatest assets.",
      "proTip": "Always be honest in your school tests and assignments — true character is built through small choices made every day."
    },
    {
      "id": 10,
      "roadmapStage": "Stage 10: Future World & AI Collaboration",
      "category": "AI & Future World",
      "categoryColor": "bg-purple-100 text-purple-900 border-purple-300",
      "question": "How will modern Artificial Intelligence (AI) and technology assist human professionals in this career over the next decade?",
      "options": [
        {
          "text": "AI will eliminate the entire profession and humans will have no jobs"
        },
        {
          "text": "AI apps calculate micronutrient calorie scans from plate photos, while human dietitians provide deep psychological habit counseling"
        },
        {
          "text": "Computers will be outlawed in this profession"
        },
        {
          "text": "Nothing will change from 200 years ago"
        }
      ],
      "correctIndex": 1,
      "explanation": "AI apps calculate micronutrient calorie scans from plate photos, while human dietitians provide deep psychological habit counseling. AI is a powerful assistant, but human empathy, critical judgment, moral courage, and physical action will always lead the future!",
      "proTip": "Embrace modern technology as a co-pilot, while building your unique human strengths of empathy, creativity, and leadership!"
    }
  ]
},

  "veterinarian": {
  "id": "veterinarian",
  "title": "Veterinary Doctor (B.V.Sc) Roadmap Quiz",
  "subtitle": "A student-friendly quiz for 8th, 9th & 10th classes: animal surgery, pet care, livestock health & saving wildlife species!",
  "icon": "🐾",
  "badge": "For Classes 8th – 10th",
  "gradient": "from-emerald-700 via-teal-800 to-stone-900",
  "accentColor": "#047857",
  "description": "Want to become a Veterinary Doctor (B.V.Sc)? Test if you know the exact roadmap: stream choices after 10th, required degrees, key entrance exams, and skills needed to excel!",
  "totalQuestions": 10,
  "blueprintUrl": "/career-reports?career=veterinarian",
  "cheatSheet": [
    "Class 8-10: Focus on Biology (zoology, animal anatomy, genetics, physiology) and Chemistry and build Loving and caring for animals.",
    "After 10th: Choose Compulsory BiPC (Biology, Physics, Chemistry) in Class 11-12 Intermediate.",
    "Key Gateways: Prepare for NEET-UG (All India Veterinary Quota) or State EAPCET / CET Veterinary stream.",
    "Degree & Duration: 5.5 Years B.V.Sc & AH (Bachelor of Veterinary Science & Animal Husbandry including 1-year clinical internship).",
    "Future with AI: AI ultrasound and diagnostic tools detect animal diseases early, while compassionate veterinary doctors perform life-saving treatments."
  ],
  "questions": [
    {
      "id": 1,
      "roadmapStage": "Stage 1: After 10th Class",
      "category": "Choosing Branch / Stream",
      "categoryColor": "bg-blue-100 text-blue-900 border-blue-300",
      "question": "When you pass Class 10, which Intermediate (10+2) stream should you choose to become a Veterinary Doctor (B.V.Sc)?",
      "options": [
        {
          "text": "Any irrelevant vocational stream without checking eligibility"
        },
        {
          "text": "Compulsory BiPC (Biology, Physics, Chemistry) in Class 11-12 Intermediate"
        },
        {
          "text": "Drop out of school after Class 10"
        },
        {
          "text": "Only study arts without required core subjects"
        }
      ],
      "correctIndex": 1,
      "explanation": "Compulsory BiPC (Biology, Physics, Chemistry) in Class 11-12 Intermediate. Meeting the right stream criteria in 11th and 12th is the vital first step on this roadmap!",
      "proTip": "Check the exact entrance eligibility early in 10th class so you pick your Intermediate stream with 100% confidence!"
    },
    {
      "id": 2,
      "roadmapStage": "Stage 2: Training & Degree Duration",
      "category": "Course Duration",
      "categoryColor": "bg-emerald-100 text-emerald-900 border-emerald-300",
      "question": "How much time does it take to complete the foundational qualification and training for this career pathway?",
      "options": [
        {
          "text": "Just a 1-day certificate course"
        },
        {
          "text": "15 years of only theoretical reading"
        },
        {
          "text": "5.5 Years B.V.Sc & AH (Bachelor of Veterinary Science & Animal Husbandry including 1-year clinical internship)"
        },
        {
          "text": "6 weeks of online videos"
        }
      ],
      "correctIndex": 2,
      "explanation": "This professional pathway takes 5.5 Years B.V.Sc & AH (Bachelor of Veterinary Science & Animal Husbandry including 1-year clinical internship). True professional expertise requires structured degrees, lab experiments, and hands-on practical postings.",
      "proTip": "Focus on mastering concepts every single year rather than rushing through degrees!"
    },
    {
      "id": 3,
      "roadmapStage": "Stage 3: Gateway Degree & Entrance Exam",
      "category": "College Degree & Exams",
      "categoryColor": "bg-indigo-100 text-indigo-900 border-indigo-300",
      "question": "Which key examination or degree gateway is central to entering this professional career in India?",
      "options": [
        {
          "text": "NEET-UG (All India Veterinary Quota) or State EAPCET / CET Veterinary stream"
        },
        {
          "text": "A random lucky lottery draw"
        },
        {
          "text": "Paying an unauthorized private middleman"
        },
        {
          "text": "Only writing a high school spelling test"
        }
      ],
      "correctIndex": 0,
      "explanation": "NEET-UG (All India Veterinary Quota) or State EAPCET / CET Veterinary stream. Clearing standard national or state entrances guarantees transparent admission into top accredited colleges and government commissions.",
      "proTip": "Previous years' question papers and conceptual NCERT mastery are your best friends when preparing for this gateway!"
    },
    {
      "id": 4,
      "roadmapStage": "Stage 4: School Foundations",
      "category": "School Subjects",
      "categoryColor": "bg-amber-100 text-amber-900 border-amber-300",
      "question": "Which subject that you study right now in 8th, 9th, or 10th class builds the deepest foundation for this career?",
      "options": [
        {
          "text": "Memorizing movie trivia"
        },
        {
          "text": "Playing mobile games during study hours"
        },
        {
          "text": "Biology (zoology, animal anatomy, genetics, physiology) and Chemistry"
        },
        {
          "text": "Sleeping in the classroom"
        }
      ],
      "correctIndex": 2,
      "explanation": "Biology (zoology, animal anatomy, genetics, physiology) and Chemistry. What you are learning in school right now directly connects to this field!",
      "proTip": "Pay extra attention when your teacher covers these topics in class — you are building the foundation of your future profession!"
    },
    {
      "id": 5,
      "roadmapStage": "Stage 5: High School Habits to Build",
      "category": "Skills to Build",
      "categoryColor": "bg-rose-100 text-rose-900 border-rose-300",
      "question": "As an 8th, 9th, or 10th student, what real habit should you start cultivating to prepare for this profession?",
      "options": [
        {
          "text": "Loving and caring for animals, gentle handling of pets, compassion, and zero fear of blood or injuries"
        },
        {
          "text": "Refusing to do school assignments on time"
        },
        {
          "text": "Spending 6 hours a day arguing on social media"
        },
        {
          "text": "Giving up whenever a lesson feels slightly challenging"
        }
      ],
      "correctIndex": 0,
      "explanation": "Loving and caring for animals, gentle handling of pets, compassion, and zero fear of blood or injuries. Great professionals develop their discipline, focus, and core habits long before they enter college.",
      "proTip": "Start with just 20 minutes a day practicing this habit — consistency over weeks and months creates champions!"
    },
    {
      "id": 6,
      "roadmapStage": "Stage 6: Premier Institutions & Regulators",
      "category": "College Degree & Exams",
      "categoryColor": "bg-purple-100 text-purple-900 border-purple-300",
      "question": "Which premier institutions or statutory bodies are recognized across India for this professional discipline?",
      "options": [
        {
          "text": "Unrecognized fake coaching websites with no campus"
        },
        {
          "text": "Veterinary Council of India (VCI) colleges (SVVU Tirupati, PVNRTVU Hyderabad, IVRI Bareilly)"
        },
        {
          "text": "Local amusement parks"
        },
        {
          "text": "Private bus booking counters"
        }
      ],
      "correctIndex": 1,
      "explanation": "Veterinary Council of India (VCI) colleges (SVVU Tirupati, PVNRTVU Hyderabad, IVRI Bareilly). Studying in premier recognized institutions gives you top laboratory facilities, experienced mentors, and world-class campus recruitment.",
      "proTip": "Visit the official websites of these premier institutes online — seeing campus photos and student projects will inspire you!"
    },
    {
      "id": 7,
      "roadmapStage": "Stage 7: Everyday Role & Purpose",
      "category": "Skills to Build",
      "categoryColor": "bg-teal-100 text-teal-900 border-teal-300",
      "question": "What is the real day-to-day mission and responsibility of professionals working in this field?",
      "options": [
        {
          "text": "Sitting idle in an empty room with zero responsibilities"
        },
        {
          "text": "Taking shortcuts and breaking ethics"
        },
        {
          "text": "Treating sick dogs and cats, performing surgeries, vaccinating dairy cattle, and protecting wildlife in sanctuaries"
        },
        {
          "text": "Only showing up once a year"
        }
      ],
      "correctIndex": 2,
      "explanation": "Treating sick dogs and cats, performing surgeries, vaccinating dairy cattle, and protecting wildlife in sanctuaries. Professionals in this field play a critical role in strengthening society, public welfare, and national progress.",
      "proTip": "A career is not just a monthly paycheck — it is your daily opportunity to solve meaningful problems and make people's lives better!"
    },
    {
      "id": 8,
      "roadmapStage": "Stage 8: Career Ladder & Promotion",
      "category": "Course Duration",
      "categoryColor": "bg-indigo-100 text-indigo-900 border-indigo-300",
      "question": "As you gain experience and demonstrate exceptional leadership, what does your long-term career growth path look like?",
      "options": [
        {
          "text": "Veterinary Assistant Surgeon (VAS) -> Senior Pet Hospital Surgeon -> Wildlife Zoo Chief Vet -> Animal Husbandry Director"
        },
        {
          "text": "Staying in an entry-level trainee role forever with no advancement"
        },
        {
          "text": "Demotions every year"
        },
        {
          "text": "Being fired immediately without reason"
        }
      ],
      "correctIndex": 0,
      "explanation": "Veterinary Assistant Surgeon (VAS) -> Senior Pet Hospital Surgeon -> Wildlife Zoo Chief Vet -> Animal Husbandry Director. With consistent hard work, continuous learning, and integrity, you can rise to senior national leadership positions!",
      "proTip": "Never stop learning new skills — the best leaders in this field keep updating their knowledge throughout their lives!"
    },
    {
      "id": 9,
      "roadmapStage": "Stage 9: Mindset & Professional Ethics",
      "category": "Skills to Build",
      "categoryColor": "bg-amber-100 text-amber-900 border-amber-300",
      "question": "What is the single most vital quality that earns deep respect and enduring trust in this profession?",
      "options": [
        {
          "text": "Showing off with arrogance"
        },
        {
          "text": "High personal integrity, empathy for citizens, and relentless dedication to quality"
        },
        {
          "text": "Blaming others for your own mistakes"
        },
        {
          "text": "Accepting bribes and cutting safety corners"
        }
      ],
      "correctIndex": 1,
      "explanation": "Integrity and genuine dedication to quality are irreplaceable! In every high-impact career, your reputation and honest character are your greatest assets.",
      "proTip": "Always be honest in your school tests and assignments — true character is built through small choices made every day."
    },
    {
      "id": 10,
      "roadmapStage": "Stage 10: Future World & AI Collaboration",
      "category": "AI & Future World",
      "categoryColor": "bg-purple-100 text-purple-900 border-purple-300",
      "question": "How will modern Artificial Intelligence (AI) and technology assist human professionals in this career over the next decade?",
      "options": [
        {
          "text": "AI will eliminate the entire profession and humans will have no jobs"
        },
        {
          "text": "AI ultrasound and diagnostic tools detect animal diseases early, while compassionate veterinary doctors perform life-saving treatments"
        },
        {
          "text": "Computers will be outlawed in this profession"
        },
        {
          "text": "Nothing will change from 200 years ago"
        }
      ],
      "correctIndex": 1,
      "explanation": "AI ultrasound and diagnostic tools detect animal diseases early, while compassionate veterinary doctors perform life-saving treatments. AI is a powerful assistant, but human empathy, critical judgment, moral courage, and physical action will always lead the future!",
      "proTip": "Embrace modern technology as a co-pilot, while building your unique human strengths of empathy, creativity, and leadership!"
    }
  ]
},

  "beautician": {
  "id": "beautician",
  "title": "Cosmetologist & Aesthetician Roadmap Quiz",
  "subtitle": "A student-friendly quiz for 8th, 9th & 10th classes: professional skincare, bridal makeup artistry, salon styling & studio business!",
  "icon": "💄",
  "badge": "For Classes 8th – 10th",
  "gradient": "from-rose-500 via-pink-600 to-purple-800",
  "accentColor": "#E11D48",
  "description": "Want to become a Cosmetologist & Aesthetician? Test if you know the exact roadmap: stream choices after 10th, required degrees, key entrance exams, and skills needed to excel!",
  "totalQuestions": 10,
  "blueprintUrl": "/career-reports?career=beautician",
  "cheatSheet": [
    "Class 8-10: Focus on Biology (human skin layers, hair follicle health), Chemistry (cosmetic ingredients), and Arts and build Color blending.",
    "After 10th: Choose Any Intermediate stream (Science, Commerce, or Arts) or direct vocational cosmetology diploma.",
    "Key Gateways: Prepare for CIDESCO International Certification or CIBTAC / National Skill Development Corporation (NSDC) assessments.",
    "Degree & Duration: 1–2 Year Advanced Diploma in Cosmetology, Hair Dressing & Aesthetic Makeup.",
    "Future with AI: AI skin diagnostic scanners analyze dermal pigmentation, while expert aesthetic stylists deliver artistic human beauty transformations."
  ],
  "questions": [
    {
      "id": 1,
      "roadmapStage": "Stage 1: After 10th Class",
      "category": "Choosing Branch / Stream",
      "categoryColor": "bg-blue-100 text-blue-900 border-blue-300",
      "question": "When you pass Class 10, which Intermediate (10+2) stream should you choose to become a Cosmetologist & Aesthetician?",
      "options": [
        {
          "text": "Any irrelevant vocational stream without checking eligibility"
        },
        {
          "text": "Any Intermediate stream (Science, Commerce, or Arts) or direct vocational cosmetology diploma"
        },
        {
          "text": "Drop out of school after Class 10"
        },
        {
          "text": "Only study arts without required core subjects"
        }
      ],
      "correctIndex": 1,
      "explanation": "Any Intermediate stream (Science, Commerce, or Arts) or direct vocational cosmetology diploma. Meeting the right stream criteria in 11th and 12th is the vital first step on this roadmap!",
      "proTip": "Check the exact entrance eligibility early in 10th class so you pick your Intermediate stream with 100% confidence!"
    },
    {
      "id": 2,
      "roadmapStage": "Stage 2: Training & Degree Duration",
      "category": "Course Duration",
      "categoryColor": "bg-emerald-100 text-emerald-900 border-emerald-300",
      "question": "How much time does it take to complete the foundational qualification and training for this career pathway?",
      "options": [
        {
          "text": "Just a 1-day certificate course"
        },
        {
          "text": "15 years of only theoretical reading"
        },
        {
          "text": "1–2 Year Advanced Diploma in Cosmetology, Hair Dressing & Aesthetic Makeup"
        },
        {
          "text": "6 weeks of online videos"
        }
      ],
      "correctIndex": 2,
      "explanation": "This professional pathway takes 1–2 Year Advanced Diploma in Cosmetology, Hair Dressing & Aesthetic Makeup. True professional expertise requires structured degrees, lab experiments, and hands-on practical postings.",
      "proTip": "Focus on mastering concepts every single year rather than rushing through degrees!"
    },
    {
      "id": 3,
      "roadmapStage": "Stage 3: Gateway Degree & Entrance Exam",
      "category": "College Degree & Exams",
      "categoryColor": "bg-indigo-100 text-indigo-900 border-indigo-300",
      "question": "Which key examination or degree gateway is central to entering this professional career in India?",
      "options": [
        {
          "text": "CIDESCO International Certification or CIBTAC / National Skill Development Corporation (NSDC) assessments"
        },
        {
          "text": "A random lucky lottery draw"
        },
        {
          "text": "Paying an unauthorized private middleman"
        },
        {
          "text": "Only writing a high school spelling test"
        }
      ],
      "correctIndex": 0,
      "explanation": "CIDESCO International Certification or CIBTAC / National Skill Development Corporation (NSDC) assessments. Clearing standard national or state entrances guarantees transparent admission into top accredited colleges and government commissions.",
      "proTip": "Previous years' question papers and conceptual NCERT mastery are your best friends when preparing for this gateway!"
    },
    {
      "id": 4,
      "roadmapStage": "Stage 4: School Foundations",
      "category": "School Subjects",
      "categoryColor": "bg-amber-100 text-amber-900 border-amber-300",
      "question": "Which subject that you study right now in 8th, 9th, or 10th class builds the deepest foundation for this career?",
      "options": [
        {
          "text": "Memorizing movie trivia"
        },
        {
          "text": "Playing mobile games during study hours"
        },
        {
          "text": "Biology (human skin layers, hair follicle health), Chemistry (cosmetic ingredients), and Arts"
        },
        {
          "text": "Sleeping in the classroom"
        }
      ],
      "correctIndex": 2,
      "explanation": "Biology (human skin layers, hair follicle health), Chemistry (cosmetic ingredients), and Arts. What you are learning in school right now directly connects to this field!",
      "proTip": "Pay extra attention when your teacher covers these topics in class — you are building the foundation of your future profession!"
    },
    {
      "id": 5,
      "roadmapStage": "Stage 5: High School Habits to Build",
      "category": "Skills to Build",
      "categoryColor": "bg-rose-100 text-rose-900 border-rose-300",
      "question": "As an 8th, 9th, or 10th student, what real habit should you start cultivating to prepare for this profession?",
      "options": [
        {
          "text": "Color blending, practicing hairstyles, hygienic skin care habits, and friendly conversational warmth"
        },
        {
          "text": "Refusing to do school assignments on time"
        },
        {
          "text": "Spending 6 hours a day arguing on social media"
        },
        {
          "text": "Giving up whenever a lesson feels slightly challenging"
        }
      ],
      "correctIndex": 0,
      "explanation": "Color blending, practicing hairstyles, hygienic skin care habits, and friendly conversational warmth. Great professionals develop their discipline, focus, and core habits long before they enter college.",
      "proTip": "Start with just 20 minutes a day practicing this habit — consistency over weeks and months creates champions!"
    },
    {
      "id": 6,
      "roadmapStage": "Stage 6: Premier Institutions & Regulators",
      "category": "College Degree & Exams",
      "categoryColor": "bg-purple-100 text-purple-900 border-purple-300",
      "question": "Which premier institutions or statutory bodies are recognized across India for this professional discipline?",
      "options": [
        {
          "text": "Unrecognized fake coaching websites with no campus"
        },
        {
          "text": "CIDESCO accredited beauty academies, Lakme Academy, and VLCC Institute"
        },
        {
          "text": "Local amusement parks"
        },
        {
          "text": "Private bus booking counters"
        }
      ],
      "correctIndex": 1,
      "explanation": "CIDESCO accredited beauty academies, Lakme Academy, and VLCC Institute. Studying in premier recognized institutions gives you top laboratory facilities, experienced mentors, and world-class campus recruitment.",
      "proTip": "Visit the official websites of these premier institutes online — seeing campus photos and student projects will inspire you!"
    },
    {
      "id": 7,
      "roadmapStage": "Stage 7: Everyday Role & Purpose",
      "category": "Skills to Build",
      "categoryColor": "bg-teal-100 text-teal-900 border-teal-300",
      "question": "What is the real day-to-day mission and responsibility of professionals working in this field?",
      "options": [
        {
          "text": "Sitting idle in an empty room with zero responsibilities"
        },
        {
          "text": "Taking shortcuts and breaking ethics"
        },
        {
          "text": "Providing clinical facial therapies, luxury bridal makeup transformations, hair coloring, and spa treatments"
        },
        {
          "text": "Only showing up once a year"
        }
      ],
      "correctIndex": 2,
      "explanation": "Providing clinical facial therapies, luxury bridal makeup transformations, hair coloring, and spa treatments. Professionals in this field play a critical role in strengthening society, public welfare, and national progress.",
      "proTip": "A career is not just a monthly paycheck — it is your daily opportunity to solve meaningful problems and make people's lives better!"
    },
    {
      "id": 8,
      "roadmapStage": "Stage 8: Career Ladder & Promotion",
      "category": "Course Duration",
      "categoryColor": "bg-indigo-100 text-indigo-900 border-indigo-300",
      "question": "As you gain experience and demonstrate exceptional leadership, what does your long-term career growth path look like?",
      "options": [
        {
          "text": "Junior Hair/Skin Stylist -> Senior Bridal Makeup Artist -> Luxury Salon Manager -> Signature Beauty Brand / Studio Owner"
        },
        {
          "text": "Staying in an entry-level trainee role forever with no advancement"
        },
        {
          "text": "Demotions every year"
        },
        {
          "text": "Being fired immediately without reason"
        }
      ],
      "correctIndex": 0,
      "explanation": "Junior Hair/Skin Stylist -> Senior Bridal Makeup Artist -> Luxury Salon Manager -> Signature Beauty Brand / Studio Owner. With consistent hard work, continuous learning, and integrity, you can rise to senior national leadership positions!",
      "proTip": "Never stop learning new skills — the best leaders in this field keep updating their knowledge throughout their lives!"
    },
    {
      "id": 9,
      "roadmapStage": "Stage 9: Mindset & Professional Ethics",
      "category": "Skills to Build",
      "categoryColor": "bg-amber-100 text-amber-900 border-amber-300",
      "question": "What is the single most vital quality that earns deep respect and enduring trust in this profession?",
      "options": [
        {
          "text": "Showing off with arrogance"
        },
        {
          "text": "High personal integrity, empathy for citizens, and relentless dedication to quality"
        },
        {
          "text": "Blaming others for your own mistakes"
        },
        {
          "text": "Accepting bribes and cutting safety corners"
        }
      ],
      "correctIndex": 1,
      "explanation": "Integrity and genuine dedication to quality are irreplaceable! In every high-impact career, your reputation and honest character are your greatest assets.",
      "proTip": "Always be honest in your school tests and assignments — true character is built through small choices made every day."
    },
    {
      "id": 10,
      "roadmapStage": "Stage 10: Future World & AI Collaboration",
      "category": "AI & Future World",
      "categoryColor": "bg-purple-100 text-purple-900 border-purple-300",
      "question": "How will modern Artificial Intelligence (AI) and technology assist human professionals in this career over the next decade?",
      "options": [
        {
          "text": "AI will eliminate the entire profession and humans will have no jobs"
        },
        {
          "text": "AI skin diagnostic scanners analyze dermal pigmentation, while expert aesthetic stylists deliver artistic human beauty transformations"
        },
        {
          "text": "Computers will be outlawed in this profession"
        },
        {
          "text": "Nothing will change from 200 years ago"
        }
      ],
      "correctIndex": 1,
      "explanation": "AI skin diagnostic scanners analyze dermal pigmentation, while expert aesthetic stylists deliver artistic human beauty transformations. AI is a powerful assistant, but human empathy, critical judgment, moral courage, and physical action will always lead the future!",
      "proTip": "Embrace modern technology as a co-pilot, while building your unique human strengths of empathy, creativity, and leadership!"
    }
  ]
},

  "ai-scientist": {
  "id": "ai-scientist",
  "title": "AI Research Scientist Roadmap Quiz",
  "subtitle": "A student-friendly quiz for 8th, 9th & 10th classes: Large Language Models, deep neural networks, Ph.D. research & inventing AGI!",
  "icon": "🧠",
  "badge": "For Classes 8th – 10th",
  "gradient": "from-violet-600 via-indigo-700 to-blue-900",
  "accentColor": "#7C3AED",
  "description": "Want to become a AI Research Scientist? Test if you know the exact roadmap: stream choices after 10th, required degrees, key entrance exams, and skills needed to excel!",
  "totalQuestions": 10,
  "blueprintUrl": "/career-reports?career=ai-scientist",
  "cheatSheet": [
    "Class 8-10: Focus on Mathematics (Linear Algebra, Calculus, Probability, Coordinate Geometry) and Computer Programming (Python) and build Solving math olympiad problems.",
    "After 10th: Choose Compulsory MPC (Mathematics, Physics, Chemistry) with exceptional focus on Advanced Mathematics.",
    "Key Gateways: Prepare for JEE Advanced / Main, GATE (Computer Science), and GRE / University Ph.D. admissions.",
    "Degree & Duration: 4-Year B.Tech CSE + 2-Year M.S. + 4–5 Year Ph.D. in Computer Science & Artificial Intelligence.",
    "Future with AI: AI scientists are the architects of the future, building safe artificial general intelligence to solve global scientific grand challenges."
  ],
  "questions": [
    {
      "id": 1,
      "roadmapStage": "Stage 1: After 10th Class",
      "category": "Choosing Branch / Stream",
      "categoryColor": "bg-blue-100 text-blue-900 border-blue-300",
      "question": "When you pass Class 10, which Intermediate (10+2) stream should you choose to become a AI Research Scientist?",
      "options": [
        {
          "text": "Any irrelevant vocational stream without checking eligibility"
        },
        {
          "text": "Compulsory MPC (Mathematics, Physics, Chemistry) with exceptional focus on Advanced Mathematics"
        },
        {
          "text": "Drop out of school after Class 10"
        },
        {
          "text": "Only study arts without required core subjects"
        }
      ],
      "correctIndex": 1,
      "explanation": "Compulsory MPC (Mathematics, Physics, Chemistry) with exceptional focus on Advanced Mathematics. Meeting the right stream criteria in 11th and 12th is the vital first step on this roadmap!",
      "proTip": "Check the exact entrance eligibility early in 10th class so you pick your Intermediate stream with 100% confidence!"
    },
    {
      "id": 2,
      "roadmapStage": "Stage 2: Training & Degree Duration",
      "category": "Course Duration",
      "categoryColor": "bg-emerald-100 text-emerald-900 border-emerald-300",
      "question": "How much time does it take to complete the foundational qualification and training for this career pathway?",
      "options": [
        {
          "text": "Just a 1-day certificate course"
        },
        {
          "text": "15 years of only theoretical reading"
        },
        {
          "text": "4-Year B.Tech CSE + 2-Year M.S. + 4–5 Year Ph.D. in Computer Science & Artificial Intelligence"
        },
        {
          "text": "6 weeks of online videos"
        }
      ],
      "correctIndex": 2,
      "explanation": "This professional pathway takes 4-Year B.Tech CSE + 2-Year M.S. + 4–5 Year Ph.D. in Computer Science & Artificial Intelligence. True professional expertise requires structured degrees, lab experiments, and hands-on practical postings.",
      "proTip": "Focus on mastering concepts every single year rather than rushing through degrees!"
    },
    {
      "id": 3,
      "roadmapStage": "Stage 3: Gateway Degree & Entrance Exam",
      "category": "College Degree & Exams",
      "categoryColor": "bg-indigo-100 text-indigo-900 border-indigo-300",
      "question": "Which key examination or degree gateway is central to entering this professional career in India?",
      "options": [
        {
          "text": "JEE Advanced / Main, GATE (Computer Science), and GRE / University Ph.D. admissions"
        },
        {
          "text": "A random lucky lottery draw"
        },
        {
          "text": "Paying an unauthorized private middleman"
        },
        {
          "text": "Only writing a high school spelling test"
        }
      ],
      "correctIndex": 0,
      "explanation": "JEE Advanced / Main, GATE (Computer Science), and GRE / University Ph.D. admissions. Clearing standard national or state entrances guarantees transparent admission into top accredited colleges and government commissions.",
      "proTip": "Previous years' question papers and conceptual NCERT mastery are your best friends when preparing for this gateway!"
    },
    {
      "id": 4,
      "roadmapStage": "Stage 4: School Foundations",
      "category": "School Subjects",
      "categoryColor": "bg-amber-100 text-amber-900 border-amber-300",
      "question": "Which subject that you study right now in 8th, 9th, or 10th class builds the deepest foundation for this career?",
      "options": [
        {
          "text": "Memorizing movie trivia"
        },
        {
          "text": "Playing mobile games during study hours"
        },
        {
          "text": "Mathematics (Linear Algebra, Calculus, Probability, Coordinate Geometry) and Computer Programming (Python)"
        },
        {
          "text": "Sleeping in the classroom"
        }
      ],
      "correctIndex": 2,
      "explanation": "Mathematics (Linear Algebra, Calculus, Probability, Coordinate Geometry) and Computer Programming (Python). What you are learning in school right now directly connects to this field!",
      "proTip": "Pay extra attention when your teacher covers these topics in class — you are building the foundation of your future profession!"
    },
    {
      "id": 5,
      "roadmapStage": "Stage 5: High School Habits to Build",
      "category": "Skills to Build",
      "categoryColor": "bg-rose-100 text-rose-900 border-rose-300",
      "question": "As an 8th, 9th, or 10th student, what real habit should you start cultivating to prepare for this profession?",
      "options": [
        {
          "text": "Solving math olympiad problems, coding logic games in Python, and reading about how neural networks work"
        },
        {
          "text": "Refusing to do school assignments on time"
        },
        {
          "text": "Spending 6 hours a day arguing on social media"
        },
        {
          "text": "Giving up whenever a lesson feels slightly challenging"
        }
      ],
      "correctIndex": 0,
      "explanation": "Solving math olympiad problems, coding logic games in Python, and reading about how neural networks work. Great professionals develop their discipline, focus, and core habits long before they enter college.",
      "proTip": "Start with just 20 minutes a day practicing this habit — consistency over weeks and months creates champions!"
    },
    {
      "id": 6,
      "roadmapStage": "Stage 6: Premier Institutions & Regulators",
      "category": "College Degree & Exams",
      "categoryColor": "bg-purple-100 text-purple-900 border-purple-300",
      "question": "Which premier institutions or statutory bodies are recognized across India for this professional discipline?",
      "options": [
        {
          "text": "Unrecognized fake coaching websites with no campus"
        },
        {
          "text": "IIT Bombay/Delhi/Madras, IISc Bangalore, Stanford, CMU, and Google DeepMind / OpenAI R&D labs"
        },
        {
          "text": "Local amusement parks"
        },
        {
          "text": "Private bus booking counters"
        }
      ],
      "correctIndex": 1,
      "explanation": "IIT Bombay/Delhi/Madras, IISc Bangalore, Stanford, CMU, and Google DeepMind / OpenAI R&D labs. Studying in premier recognized institutions gives you top laboratory facilities, experienced mentors, and world-class campus recruitment.",
      "proTip": "Visit the official websites of these premier institutes online — seeing campus photos and student projects will inspire you!"
    },
    {
      "id": 7,
      "roadmapStage": "Stage 7: Everyday Role & Purpose",
      "category": "Skills to Build",
      "categoryColor": "bg-teal-100 text-teal-900 border-teal-300",
      "question": "What is the real day-to-day mission and responsibility of professionals working in this field?",
      "options": [
        {
          "text": "Sitting idle in an empty room with zero responsibilities"
        },
        {
          "text": "Taking shortcuts and breaking ethics"
        },
        {
          "text": "Designing novel Transformer neural architectures, training massive AI models on supercomputers, and publishing NeurIPS papers"
        },
        {
          "text": "Only showing up once a year"
        }
      ],
      "correctIndex": 2,
      "explanation": "Designing novel Transformer neural architectures, training massive AI models on supercomputers, and publishing NeurIPS papers. Professionals in this field play a critical role in strengthening society, public welfare, and national progress.",
      "proTip": "A career is not just a monthly paycheck — it is your daily opportunity to solve meaningful problems and make people's lives better!"
    },
    {
      "id": 8,
      "roadmapStage": "Stage 8: Career Ladder & Promotion",
      "category": "Course Duration",
      "categoryColor": "bg-indigo-100 text-indigo-900 border-indigo-300",
      "question": "As you gain experience and demonstrate exceptional leadership, what does your long-term career growth path look like?",
      "options": [
        {
          "text": "AI Research Engineer -> Research Scientist -> Staff Scientist -> Chief AI Scientist / Head of Frontier AI Lab"
        },
        {
          "text": "Staying in an entry-level trainee role forever with no advancement"
        },
        {
          "text": "Demotions every year"
        },
        {
          "text": "Being fired immediately without reason"
        }
      ],
      "correctIndex": 0,
      "explanation": "AI Research Engineer -> Research Scientist -> Staff Scientist -> Chief AI Scientist / Head of Frontier AI Lab. With consistent hard work, continuous learning, and integrity, you can rise to senior national leadership positions!",
      "proTip": "Never stop learning new skills — the best leaders in this field keep updating their knowledge throughout their lives!"
    },
    {
      "id": 9,
      "roadmapStage": "Stage 9: Mindset & Professional Ethics",
      "category": "Skills to Build",
      "categoryColor": "bg-amber-100 text-amber-900 border-amber-300",
      "question": "What is the single most vital quality that earns deep respect and enduring trust in this profession?",
      "options": [
        {
          "text": "Showing off with arrogance"
        },
        {
          "text": "High personal integrity, empathy for citizens, and relentless dedication to quality"
        },
        {
          "text": "Blaming others for your own mistakes"
        },
        {
          "text": "Accepting bribes and cutting safety corners"
        }
      ],
      "correctIndex": 1,
      "explanation": "Integrity and genuine dedication to quality are irreplaceable! In every high-impact career, your reputation and honest character are your greatest assets.",
      "proTip": "Always be honest in your school tests and assignments — true character is built through small choices made every day."
    },
    {
      "id": 10,
      "roadmapStage": "Stage 10: Future World & AI Collaboration",
      "category": "AI & Future World",
      "categoryColor": "bg-purple-100 text-purple-900 border-purple-300",
      "question": "How will modern Artificial Intelligence (AI) and technology assist human professionals in this career over the next decade?",
      "options": [
        {
          "text": "AI will eliminate the entire profession and humans will have no jobs"
        },
        {
          "text": "AI scientists are the architects of the future, building safe artificial general intelligence to solve global scientific grand challenges"
        },
        {
          "text": "Computers will be outlawed in this profession"
        },
        {
          "text": "Nothing will change from 200 years ago"
        }
      ],
      "correctIndex": 1,
      "explanation": "AI scientists are the architects of the future, building safe artificial general intelligence to solve global scientific grand challenges. AI is a powerful assistant, but human empathy, critical judgment, moral courage, and physical action will always lead the future!",
      "proTip": "Embrace modern technology as a co-pilot, while building your unique human strengths of empathy, creativity, and leadership!"
    }
  ]
},

  "data-scientist": {
  "id": "data-scientist",
  "title": "Data Scientist & ML Specialist Roadmap Quiz",
  "subtitle": "A student-friendly quiz for 8th, 9th & 10th classes: big data analytics, statistical modeling, machine learning & Python coding!",
  "icon": "📊",
  "badge": "For Classes 8th – 10th",
  "gradient": "from-blue-600 via-indigo-600 to-cyan-700",
  "accentColor": "#2563EB",
  "description": "Want to become a Data Scientist & ML Specialist? Test if you know the exact roadmap: stream choices after 10th, required degrees, key entrance exams, and skills needed to excel!",
  "totalQuestions": 10,
  "blueprintUrl": "/career-reports?career=data-scientist",
  "cheatSheet": [
    "Class 8-10: Focus on Mathematics (Statistics, Mean/Median/Mode, Probability, Graphs) and Computer Science and build Analyzing sports statistics (cricket averages).",
    "After 10th: Choose MPC (Mathematics, Physics, Chemistry) or MEC with strong Mathematics.",
    "Key Gateways: Prepare for JEE Main / Advanced, State CET / EAPCET, or ISI Entrance Exam (Indian Statistical Institute).",
    "Degree & Duration: 4-Year B.Tech in Data Science / CSE or 3-Year B.Stat / B.Sc Statistics + 2-Year M.Sc / M.Tech.",
    "Future with AI: Automated ML generates routine baseline models, while human data scientists formulate complex business logic and ethical safety."
  ],
  "questions": [
    {
      "id": 1,
      "roadmapStage": "Stage 1: After 10th Class",
      "category": "Choosing Branch / Stream",
      "categoryColor": "bg-blue-100 text-blue-900 border-blue-300",
      "question": "When you pass Class 10, which Intermediate (10+2) stream should you choose to become a Data Scientist & ML Specialist?",
      "options": [
        {
          "text": "Any irrelevant vocational stream without checking eligibility"
        },
        {
          "text": "MPC (Mathematics, Physics, Chemistry) or MEC with strong Mathematics"
        },
        {
          "text": "Drop out of school after Class 10"
        },
        {
          "text": "Only study arts without required core subjects"
        }
      ],
      "correctIndex": 1,
      "explanation": "MPC (Mathematics, Physics, Chemistry) or MEC with strong Mathematics. Meeting the right stream criteria in 11th and 12th is the vital first step on this roadmap!",
      "proTip": "Check the exact entrance eligibility early in 10th class so you pick your Intermediate stream with 100% confidence!"
    },
    {
      "id": 2,
      "roadmapStage": "Stage 2: Training & Degree Duration",
      "category": "Course Duration",
      "categoryColor": "bg-emerald-100 text-emerald-900 border-emerald-300",
      "question": "How much time does it take to complete the foundational qualification and training for this career pathway?",
      "options": [
        {
          "text": "Just a 1-day certificate course"
        },
        {
          "text": "15 years of only theoretical reading"
        },
        {
          "text": "4-Year B.Tech in Data Science / CSE or 3-Year B.Stat / B.Sc Statistics + 2-Year M.Sc / M.Tech"
        },
        {
          "text": "6 weeks of online videos"
        }
      ],
      "correctIndex": 2,
      "explanation": "This professional pathway takes 4-Year B.Tech in Data Science / CSE or 3-Year B.Stat / B.Sc Statistics + 2-Year M.Sc / M.Tech. True professional expertise requires structured degrees, lab experiments, and hands-on practical postings.",
      "proTip": "Focus on mastering concepts every single year rather than rushing through degrees!"
    },
    {
      "id": 3,
      "roadmapStage": "Stage 3: Gateway Degree & Entrance Exam",
      "category": "College Degree & Exams",
      "categoryColor": "bg-indigo-100 text-indigo-900 border-indigo-300",
      "question": "Which key examination or degree gateway is central to entering this professional career in India?",
      "options": [
        {
          "text": "JEE Main / Advanced, State CET / EAPCET, or ISI Entrance Exam (Indian Statistical Institute)"
        },
        {
          "text": "A random lucky lottery draw"
        },
        {
          "text": "Paying an unauthorized private middleman"
        },
        {
          "text": "Only writing a high school spelling test"
        }
      ],
      "correctIndex": 0,
      "explanation": "JEE Main / Advanced, State CET / EAPCET, or ISI Entrance Exam (Indian Statistical Institute). Clearing standard national or state entrances guarantees transparent admission into top accredited colleges and government commissions.",
      "proTip": "Previous years' question papers and conceptual NCERT mastery are your best friends when preparing for this gateway!"
    },
    {
      "id": 4,
      "roadmapStage": "Stage 4: School Foundations",
      "category": "School Subjects",
      "categoryColor": "bg-amber-100 text-amber-900 border-amber-300",
      "question": "Which subject that you study right now in 8th, 9th, or 10th class builds the deepest foundation for this career?",
      "options": [
        {
          "text": "Memorizing movie trivia"
        },
        {
          "text": "Playing mobile games during study hours"
        },
        {
          "text": "Mathematics (Statistics, Mean/Median/Mode, Probability, Graphs) and Computer Science"
        },
        {
          "text": "Sleeping in the classroom"
        }
      ],
      "correctIndex": 2,
      "explanation": "Mathematics (Statistics, Mean/Median/Mode, Probability, Graphs) and Computer Science. What you are learning in school right now directly connects to this field!",
      "proTip": "Pay extra attention when your teacher covers these topics in class — you are building the foundation of your future profession!"
    },
    {
      "id": 5,
      "roadmapStage": "Stage 5: High School Habits to Build",
      "category": "Skills to Build",
      "categoryColor": "bg-rose-100 text-rose-900 border-rose-300",
      "question": "As an 8th, 9th, or 10th student, what real habit should you start cultivating to prepare for this profession?",
      "options": [
        {
          "text": "Analyzing sports statistics (cricket averages), Excel tables, logic puzzles, and learning Python programming"
        },
        {
          "text": "Refusing to do school assignments on time"
        },
        {
          "text": "Spending 6 hours a day arguing on social media"
        },
        {
          "text": "Giving up whenever a lesson feels slightly challenging"
        }
      ],
      "correctIndex": 0,
      "explanation": "Analyzing sports statistics (cricket averages), Excel tables, logic puzzles, and learning Python programming. Great professionals develop their discipline, focus, and core habits long before they enter college.",
      "proTip": "Start with just 20 minutes a day practicing this habit — consistency over weeks and months creates champions!"
    },
    {
      "id": 6,
      "roadmapStage": "Stage 6: Premier Institutions & Regulators",
      "category": "College Degree & Exams",
      "categoryColor": "bg-purple-100 text-purple-900 border-purple-300",
      "question": "Which premier institutions or statutory bodies are recognized across India for this professional discipline?",
      "options": [
        {
          "text": "Unrecognized fake coaching websites with no campus"
        },
        {
          "text": "Indian Statistical Institute (ISI Kolkata), IITs, BITS Pilani, and top international analytics schools"
        },
        {
          "text": "Local amusement parks"
        },
        {
          "text": "Private bus booking counters"
        }
      ],
      "correctIndex": 1,
      "explanation": "Indian Statistical Institute (ISI Kolkata), IITs, BITS Pilani, and top international analytics schools. Studying in premier recognized institutions gives you top laboratory facilities, experienced mentors, and world-class campus recruitment.",
      "proTip": "Visit the official websites of these premier institutes online — seeing campus photos and student projects will inspire you!"
    },
    {
      "id": 7,
      "roadmapStage": "Stage 7: Everyday Role & Purpose",
      "category": "Skills to Build",
      "categoryColor": "bg-teal-100 text-teal-900 border-teal-300",
      "question": "What is the real day-to-day mission and responsibility of professionals working in this field?",
      "options": [
        {
          "text": "Sitting idle in an empty room with zero responsibilities"
        },
        {
          "text": "Taking shortcuts and breaking ethics"
        },
        {
          "text": "Cleaning enterprise datasets, building machine learning algorithms, predicting customer trends, and building dashboards"
        },
        {
          "text": "Only showing up once a year"
        }
      ],
      "correctIndex": 2,
      "explanation": "Cleaning enterprise datasets, building machine learning algorithms, predicting customer trends, and building dashboards. Professionals in this field play a critical role in strengthening society, public welfare, and national progress.",
      "proTip": "A career is not just a monthly paycheck — it is your daily opportunity to solve meaningful problems and make people's lives better!"
    },
    {
      "id": 8,
      "roadmapStage": "Stage 8: Career Ladder & Promotion",
      "category": "Course Duration",
      "categoryColor": "bg-indigo-100 text-indigo-900 border-indigo-300",
      "question": "As you gain experience and demonstrate exceptional leadership, what does your long-term career growth path look like?",
      "options": [
        {
          "text": "Junior Data Analyst -> Machine Learning Engineer -> Senior Data Scientist -> Chief Data & Analytics Officer (CDO)"
        },
        {
          "text": "Staying in an entry-level trainee role forever with no advancement"
        },
        {
          "text": "Demotions every year"
        },
        {
          "text": "Being fired immediately without reason"
        }
      ],
      "correctIndex": 0,
      "explanation": "Junior Data Analyst -> Machine Learning Engineer -> Senior Data Scientist -> Chief Data & Analytics Officer (CDO). With consistent hard work, continuous learning, and integrity, you can rise to senior national leadership positions!",
      "proTip": "Never stop learning new skills — the best leaders in this field keep updating their knowledge throughout their lives!"
    },
    {
      "id": 9,
      "roadmapStage": "Stage 9: Mindset & Professional Ethics",
      "category": "Skills to Build",
      "categoryColor": "bg-amber-100 text-amber-900 border-amber-300",
      "question": "What is the single most vital quality that earns deep respect and enduring trust in this profession?",
      "options": [
        {
          "text": "Showing off with arrogance"
        },
        {
          "text": "High personal integrity, empathy for citizens, and relentless dedication to quality"
        },
        {
          "text": "Blaming others for your own mistakes"
        },
        {
          "text": "Accepting bribes and cutting safety corners"
        }
      ],
      "correctIndex": 1,
      "explanation": "Integrity and genuine dedication to quality are irreplaceable! In every high-impact career, your reputation and honest character are your greatest assets.",
      "proTip": "Always be honest in your school tests and assignments — true character is built through small choices made every day."
    },
    {
      "id": 10,
      "roadmapStage": "Stage 10: Future World & AI Collaboration",
      "category": "AI & Future World",
      "categoryColor": "bg-purple-100 text-purple-900 border-purple-300",
      "question": "How will modern Artificial Intelligence (AI) and technology assist human professionals in this career over the next decade?",
      "options": [
        {
          "text": "AI will eliminate the entire profession and humans will have no jobs"
        },
        {
          "text": "Automated ML generates routine baseline models, while human data scientists formulate complex business logic and ethical safety"
        },
        {
          "text": "Computers will be outlawed in this profession"
        },
        {
          "text": "Nothing will change from 200 years ago"
        }
      ],
      "correctIndex": 1,
      "explanation": "Automated ML generates routine baseline models, while human data scientists formulate complex business logic and ethical safety. AI is a powerful assistant, but human empathy, critical judgment, moral courage, and physical action will always lead the future!",
      "proTip": "Embrace modern technology as a co-pilot, while building your unique human strengths of empathy, creativity, and leadership!"
    }
  ]
},

  "robotics-engineer": {
  "id": "robotics-engineer",
  "title": "Robotics Engineer Roadmap Quiz",
  "subtitle": "A student-friendly quiz for 8th, 9th & 10th classes: Arduino & microcontrollers, mechatronics, sensors, kinematics & autonomous bots!",
  "icon": "🤖",
  "badge": "For Classes 8th – 10th",
  "gradient": "from-cyan-600 via-blue-700 to-slate-900",
  "accentColor": "#0891B2",
  "description": "Want to become a Robotics Engineer? Test if you know the exact roadmap: stream choices after 10th, required degrees, key entrance exams, and skills needed to excel!",
  "totalQuestions": 10,
  "blueprintUrl": "/career-reports?career=robotics-engineer",
  "cheatSheet": [
    "Class 8-10: Focus on Physics (circuits, electromagnetism, kinematics, levers), Mathematics, and Computer Science and build Building DIY electronic kits (Arduino / Raspberry Pi).",
    "After 10th: Choose Compulsory MPC (Mathematics, Physics, Chemistry) in Class 11-12 Intermediate.",
    "Key Gateways: Prepare for JEE Main / Advanced, BITSAT, or State EAPCET / CET in Engineering.",
    "Degree & Duration: 4-Year B.Tech in Robotics / Mechatronics / Mechanical / Electronics Engineering.",
    "Future with AI: Generative AI provides spatial computer vision, while robotics engineers physically construct agile robots that build rockets and cars."
  ],
  "questions": [
    {
      "id": 1,
      "roadmapStage": "Stage 1: After 10th Class",
      "category": "Choosing Branch / Stream",
      "categoryColor": "bg-blue-100 text-blue-900 border-blue-300",
      "question": "When you pass Class 10, which Intermediate (10+2) stream should you choose to become a Robotics Engineer?",
      "options": [
        {
          "text": "Any irrelevant vocational stream without checking eligibility"
        },
        {
          "text": "Compulsory MPC (Mathematics, Physics, Chemistry) in Class 11-12 Intermediate"
        },
        {
          "text": "Drop out of school after Class 10"
        },
        {
          "text": "Only study arts without required core subjects"
        }
      ],
      "correctIndex": 1,
      "explanation": "Compulsory MPC (Mathematics, Physics, Chemistry) in Class 11-12 Intermediate. Meeting the right stream criteria in 11th and 12th is the vital first step on this roadmap!",
      "proTip": "Check the exact entrance eligibility early in 10th class so you pick your Intermediate stream with 100% confidence!"
    },
    {
      "id": 2,
      "roadmapStage": "Stage 2: Training & Degree Duration",
      "category": "Course Duration",
      "categoryColor": "bg-emerald-100 text-emerald-900 border-emerald-300",
      "question": "How much time does it take to complete the foundational qualification and training for this career pathway?",
      "options": [
        {
          "text": "Just a 1-day certificate course"
        },
        {
          "text": "15 years of only theoretical reading"
        },
        {
          "text": "4-Year B.Tech in Robotics / Mechatronics / Mechanical / Electronics Engineering"
        },
        {
          "text": "6 weeks of online videos"
        }
      ],
      "correctIndex": 2,
      "explanation": "This professional pathway takes 4-Year B.Tech in Robotics / Mechatronics / Mechanical / Electronics Engineering. True professional expertise requires structured degrees, lab experiments, and hands-on practical postings.",
      "proTip": "Focus on mastering concepts every single year rather than rushing through degrees!"
    },
    {
      "id": 3,
      "roadmapStage": "Stage 3: Gateway Degree & Entrance Exam",
      "category": "College Degree & Exams",
      "categoryColor": "bg-indigo-100 text-indigo-900 border-indigo-300",
      "question": "Which key examination or degree gateway is central to entering this professional career in India?",
      "options": [
        {
          "text": "JEE Main / Advanced, BITSAT, or State EAPCET / CET in Engineering"
        },
        {
          "text": "A random lucky lottery draw"
        },
        {
          "text": "Paying an unauthorized private middleman"
        },
        {
          "text": "Only writing a high school spelling test"
        }
      ],
      "correctIndex": 0,
      "explanation": "JEE Main / Advanced, BITSAT, or State EAPCET / CET in Engineering. Clearing standard national or state entrances guarantees transparent admission into top accredited colleges and government commissions.",
      "proTip": "Previous years' question papers and conceptual NCERT mastery are your best friends when preparing for this gateway!"
    },
    {
      "id": 4,
      "roadmapStage": "Stage 4: School Foundations",
      "category": "School Subjects",
      "categoryColor": "bg-amber-100 text-amber-900 border-amber-300",
      "question": "Which subject that you study right now in 8th, 9th, or 10th class builds the deepest foundation for this career?",
      "options": [
        {
          "text": "Memorizing movie trivia"
        },
        {
          "text": "Playing mobile games during study hours"
        },
        {
          "text": "Physics (circuits, electromagnetism, kinematics, levers), Mathematics, and Computer Science"
        },
        {
          "text": "Sleeping in the classroom"
        }
      ],
      "correctIndex": 2,
      "explanation": "Physics (circuits, electromagnetism, kinematics, levers), Mathematics, and Computer Science. What you are learning in school right now directly connects to this field!",
      "proTip": "Pay extra attention when your teacher covers these topics in class — you are building the foundation of your future profession!"
    },
    {
      "id": 5,
      "roadmapStage": "Stage 5: High School Habits to Build",
      "category": "Skills to Build",
      "categoryColor": "bg-rose-100 text-rose-900 border-rose-300",
      "question": "As an 8th, 9th, or 10th student, what real habit should you start cultivating to prepare for this profession?",
      "options": [
        {
          "text": "Building DIY electronic kits (Arduino / Raspberry Pi), soldering wires, participating in school robotics club contests"
        },
        {
          "text": "Refusing to do school assignments on time"
        },
        {
          "text": "Spending 6 hours a day arguing on social media"
        },
        {
          "text": "Giving up whenever a lesson feels slightly challenging"
        }
      ],
      "correctIndex": 0,
      "explanation": "Building DIY electronic kits (Arduino / Raspberry Pi), soldering wires, participating in school robotics club contests. Great professionals develop their discipline, focus, and core habits long before they enter college.",
      "proTip": "Start with just 20 minutes a day practicing this habit — consistency over weeks and months creates champions!"
    },
    {
      "id": 6,
      "roadmapStage": "Stage 6: Premier Institutions & Regulators",
      "category": "College Degree & Exams",
      "categoryColor": "bg-purple-100 text-purple-900 border-purple-300",
      "question": "Which premier institutions or statutory bodies are recognized across India for this professional discipline?",
      "options": [
        {
          "text": "Unrecognized fake coaching websites with no campus"
        },
        {
          "text": "IIT Kanpur, IIT Madras, BITS Pilani, and premier robotics research laboratories"
        },
        {
          "text": "Local amusement parks"
        },
        {
          "text": "Private bus booking counters"
        }
      ],
      "correctIndex": 1,
      "explanation": "IIT Kanpur, IIT Madras, BITS Pilani, and premier robotics research laboratories. Studying in premier recognized institutions gives you top laboratory facilities, experienced mentors, and world-class campus recruitment.",
      "proTip": "Visit the official websites of these premier institutes online — seeing campus photos and student projects will inspire you!"
    },
    {
      "id": 7,
      "roadmapStage": "Stage 7: Everyday Role & Purpose",
      "category": "Skills to Build",
      "categoryColor": "bg-teal-100 text-teal-900 border-teal-300",
      "question": "What is the real day-to-day mission and responsibility of professionals working in this field?",
      "options": [
        {
          "text": "Sitting idle in an empty room with zero responsibilities"
        },
        {
          "text": "Taking shortcuts and breaking ethics"
        },
        {
          "text": "Designing robotic arms for factory automation, programming autonomous rover navigation (ROS), and calibrating sensor motors"
        },
        {
          "text": "Only showing up once a year"
        }
      ],
      "correctIndex": 2,
      "explanation": "Designing robotic arms for factory automation, programming autonomous rover navigation (ROS), and calibrating sensor motors. Professionals in this field play a critical role in strengthening society, public welfare, and national progress.",
      "proTip": "A career is not just a monthly paycheck — it is your daily opportunity to solve meaningful problems and make people's lives better!"
    },
    {
      "id": 8,
      "roadmapStage": "Stage 8: Career Ladder & Promotion",
      "category": "Course Duration",
      "categoryColor": "bg-indigo-100 text-indigo-900 border-indigo-300",
      "question": "As you gain experience and demonstrate exceptional leadership, what does your long-term career growth path look like?",
      "options": [
        {
          "text": "Robotics Design Engineer -> Autonomous Systems Lead -> Chief Robotics Architect -> VP of Industrial Automation"
        },
        {
          "text": "Staying in an entry-level trainee role forever with no advancement"
        },
        {
          "text": "Demotions every year"
        },
        {
          "text": "Being fired immediately without reason"
        }
      ],
      "correctIndex": 0,
      "explanation": "Robotics Design Engineer -> Autonomous Systems Lead -> Chief Robotics Architect -> VP of Industrial Automation. With consistent hard work, continuous learning, and integrity, you can rise to senior national leadership positions!",
      "proTip": "Never stop learning new skills — the best leaders in this field keep updating their knowledge throughout their lives!"
    },
    {
      "id": 9,
      "roadmapStage": "Stage 9: Mindset & Professional Ethics",
      "category": "Skills to Build",
      "categoryColor": "bg-amber-100 text-amber-900 border-amber-300",
      "question": "What is the single most vital quality that earns deep respect and enduring trust in this profession?",
      "options": [
        {
          "text": "Showing off with arrogance"
        },
        {
          "text": "High personal integrity, empathy for citizens, and relentless dedication to quality"
        },
        {
          "text": "Blaming others for your own mistakes"
        },
        {
          "text": "Accepting bribes and cutting safety corners"
        }
      ],
      "correctIndex": 1,
      "explanation": "Integrity and genuine dedication to quality are irreplaceable! In every high-impact career, your reputation and honest character are your greatest assets.",
      "proTip": "Always be honest in your school tests and assignments — true character is built through small choices made every day."
    },
    {
      "id": 10,
      "roadmapStage": "Stage 10: Future World & AI Collaboration",
      "category": "AI & Future World",
      "categoryColor": "bg-purple-100 text-purple-900 border-purple-300",
      "question": "How will modern Artificial Intelligence (AI) and technology assist human professionals in this career over the next decade?",
      "options": [
        {
          "text": "AI will eliminate the entire profession and humans will have no jobs"
        },
        {
          "text": "Generative AI provides spatial computer vision, while robotics engineers physically construct agile robots that build rockets and cars"
        },
        {
          "text": "Computers will be outlawed in this profession"
        },
        {
          "text": "Nothing will change from 200 years ago"
        }
      ],
      "correctIndex": 1,
      "explanation": "Generative AI provides spatial computer vision, while robotics engineers physically construct agile robots that build rockets and cars. AI is a powerful assistant, but human empathy, critical judgment, moral courage, and physical action will always lead the future!",
      "proTip": "Embrace modern technology as a co-pilot, while building your unique human strengths of empathy, creativity, and leadership!"
    }
  ]
},

  "forensic-scientist": {
  "id": "forensic-scientist",
  "title": "Forensic Scientist Roadmap Quiz",
  "subtitle": "A student-friendly quiz for 8th, 9th & 10th classes: crime scene DNA analysis, ballistic evidence, toxicology & working with police!",
  "icon": "🔍",
  "badge": "For Classes 8th – 10th",
  "gradient": "from-slate-700 via-indigo-900 to-stone-950",
  "accentColor": "#475569",
  "description": "Want to become a Forensic Scientist? Test if you know the exact roadmap: stream choices after 10th, required degrees, key entrance exams, and skills needed to excel!",
  "totalQuestions": 10,
  "blueprintUrl": "/career-reports?career=forensic-scientist",
  "cheatSheet": [
    "Class 8-10: Focus on Biology (DNA structure, human genetics), Chemistry (chemical reactions, poisons), and Physics (optics and build Sharp observation of small details.",
    "After 10th: Choose BiPC (Biology stream) OR MPC (Maths stream) in 10+2 Intermediate.",
    "Key Gateways: Prepare for National Forensic Sciences University (NFSU) Entrance Test or University Science CET.",
    "Degree & Duration: 3-Year B.Sc in Forensic Science + 2-Year M.Sc in Forensic Science (Toxicology / DNA Profiling / Ballistics).",
    "Future with AI: AI facial recognition and automated DNA sequencer pipelines assist labs, while human forensic scientists guarantee court evidentiary truth."
  ],
  "questions": [
    {
      "id": 1,
      "roadmapStage": "Stage 1: After 10th Class",
      "category": "Choosing Branch / Stream",
      "categoryColor": "bg-blue-100 text-blue-900 border-blue-300",
      "question": "When you pass Class 10, which Intermediate (10+2) stream should you choose to become a Forensic Scientist?",
      "options": [
        {
          "text": "Any irrelevant vocational stream without checking eligibility"
        },
        {
          "text": "BiPC (Biology stream) OR MPC (Maths stream) in 10+2 Intermediate"
        },
        {
          "text": "Drop out of school after Class 10"
        },
        {
          "text": "Only study arts without required core subjects"
        }
      ],
      "correctIndex": 1,
      "explanation": "BiPC (Biology stream) OR MPC (Maths stream) in 10+2 Intermediate. Meeting the right stream criteria in 11th and 12th is the vital first step on this roadmap!",
      "proTip": "Check the exact entrance eligibility early in 10th class so you pick your Intermediate stream with 100% confidence!"
    },
    {
      "id": 2,
      "roadmapStage": "Stage 2: Training & Degree Duration",
      "category": "Course Duration",
      "categoryColor": "bg-emerald-100 text-emerald-900 border-emerald-300",
      "question": "How much time does it take to complete the foundational qualification and training for this career pathway?",
      "options": [
        {
          "text": "Just a 1-day certificate course"
        },
        {
          "text": "15 years of only theoretical reading"
        },
        {
          "text": "3-Year B.Sc in Forensic Science + 2-Year M.Sc in Forensic Science (Toxicology / DNA Profiling / Ballistics)"
        },
        {
          "text": "6 weeks of online videos"
        }
      ],
      "correctIndex": 2,
      "explanation": "This professional pathway takes 3-Year B.Sc in Forensic Science + 2-Year M.Sc in Forensic Science (Toxicology / DNA Profiling / Ballistics). True professional expertise requires structured degrees, lab experiments, and hands-on practical postings.",
      "proTip": "Focus on mastering concepts every single year rather than rushing through degrees!"
    },
    {
      "id": 3,
      "roadmapStage": "Stage 3: Gateway Degree & Entrance Exam",
      "category": "College Degree & Exams",
      "categoryColor": "bg-indigo-100 text-indigo-900 border-indigo-300",
      "question": "Which key examination or degree gateway is central to entering this professional career in India?",
      "options": [
        {
          "text": "National Forensic Sciences University (NFSU) Entrance Test or University Science CET"
        },
        {
          "text": "A random lucky lottery draw"
        },
        {
          "text": "Paying an unauthorized private middleman"
        },
        {
          "text": "Only writing a high school spelling test"
        }
      ],
      "correctIndex": 0,
      "explanation": "National Forensic Sciences University (NFSU) Entrance Test or University Science CET. Clearing standard national or state entrances guarantees transparent admission into top accredited colleges and government commissions.",
      "proTip": "Previous years' question papers and conceptual NCERT mastery are your best friends when preparing for this gateway!"
    },
    {
      "id": 4,
      "roadmapStage": "Stage 4: School Foundations",
      "category": "School Subjects",
      "categoryColor": "bg-amber-100 text-amber-900 border-amber-300",
      "question": "Which subject that you study right now in 8th, 9th, or 10th class builds the deepest foundation for this career?",
      "options": [
        {
          "text": "Memorizing movie trivia"
        },
        {
          "text": "Playing mobile games during study hours"
        },
        {
          "text": "Biology (DNA structure, human genetics), Chemistry (chemical reactions, poisons), and Physics (optics & motion)"
        },
        {
          "text": "Sleeping in the classroom"
        }
      ],
      "correctIndex": 2,
      "explanation": "Biology (DNA structure, human genetics), Chemistry (chemical reactions, poisons), and Physics (optics & motion). What you are learning in school right now directly connects to this field!",
      "proTip": "Pay extra attention when your teacher covers these topics in class — you are building the foundation of your future profession!"
    },
    {
      "id": 5,
      "roadmapStage": "Stage 5: High School Habits to Build",
      "category": "Skills to Build",
      "categoryColor": "bg-rose-100 text-rose-900 border-rose-300",
      "question": "As an 8th, 9th, or 10th student, what real habit should you start cultivating to prepare for this profession?",
      "options": [
        {
          "text": "Sharp observation of small details, methodical laboratory note-taking, and strong ethical integrity"
        },
        {
          "text": "Refusing to do school assignments on time"
        },
        {
          "text": "Spending 6 hours a day arguing on social media"
        },
        {
          "text": "Giving up whenever a lesson feels slightly challenging"
        }
      ],
      "correctIndex": 0,
      "explanation": "Sharp observation of small details, methodical laboratory note-taking, and strong ethical integrity. Great professionals develop their discipline, focus, and core habits long before they enter college.",
      "proTip": "Start with just 20 minutes a day practicing this habit — consistency over weeks and months creates champions!"
    },
    {
      "id": 6,
      "roadmapStage": "Stage 6: Premier Institutions & Regulators",
      "category": "College Degree & Exams",
      "categoryColor": "bg-purple-100 text-purple-900 border-purple-300",
      "question": "Which premier institutions or statutory bodies are recognized across India for this professional discipline?",
      "options": [
        {
          "text": "Unrecognized fake coaching websites with no campus"
        },
        {
          "text": "National Forensic Sciences University (NFSU Gandhinagar) and Central Forensic Science Laboratories (CFSL)"
        },
        {
          "text": "Local amusement parks"
        },
        {
          "text": "Private bus booking counters"
        }
      ],
      "correctIndex": 1,
      "explanation": "National Forensic Sciences University (NFSU Gandhinagar) and Central Forensic Science Laboratories (CFSL). Studying in premier recognized institutions gives you top laboratory facilities, experienced mentors, and world-class campus recruitment.",
      "proTip": "Visit the official websites of these premier institutes online — seeing campus photos and student projects will inspire you!"
    },
    {
      "id": 7,
      "roadmapStage": "Stage 7: Everyday Role & Purpose",
      "category": "Skills to Build",
      "categoryColor": "bg-teal-100 text-teal-900 border-teal-300",
      "question": "What is the real day-to-day mission and responsibility of professionals working in this field?",
      "options": [
        {
          "text": "Sitting idle in an empty room with zero responsibilities"
        },
        {
          "text": "Taking shortcuts and breaking ethics"
        },
        {
          "text": "Examining crime scene finger marks, testing blood DNA samples in clean rooms, analyzing bullet trajectories, and testifying in court"
        },
        {
          "text": "Only showing up once a year"
        }
      ],
      "correctIndex": 2,
      "explanation": "Examining crime scene finger marks, testing blood DNA samples in clean rooms, analyzing bullet trajectories, and testifying in court. Professionals in this field play a critical role in strengthening society, public welfare, and national progress.",
      "proTip": "A career is not just a monthly paycheck — it is your daily opportunity to solve meaningful problems and make people's lives better!"
    },
    {
      "id": 8,
      "roadmapStage": "Stage 8: Career Ladder & Promotion",
      "category": "Course Duration",
      "categoryColor": "bg-indigo-100 text-indigo-900 border-indigo-300",
      "question": "As you gain experience and demonstrate exceptional leadership, what does your long-term career growth path look like?",
      "options": [
        {
          "text": "Forensic Scientific Assistant -> Senior Scientific Officer (SSO) -> Assistant Director -> Director of State/Central FSL"
        },
        {
          "text": "Staying in an entry-level trainee role forever with no advancement"
        },
        {
          "text": "Demotions every year"
        },
        {
          "text": "Being fired immediately without reason"
        }
      ],
      "correctIndex": 0,
      "explanation": "Forensic Scientific Assistant -> Senior Scientific Officer (SSO) -> Assistant Director -> Director of State/Central FSL. With consistent hard work, continuous learning, and integrity, you can rise to senior national leadership positions!",
      "proTip": "Never stop learning new skills — the best leaders in this field keep updating their knowledge throughout their lives!"
    },
    {
      "id": 9,
      "roadmapStage": "Stage 9: Mindset & Professional Ethics",
      "category": "Skills to Build",
      "categoryColor": "bg-amber-100 text-amber-900 border-amber-300",
      "question": "What is the single most vital quality that earns deep respect and enduring trust in this profession?",
      "options": [
        {
          "text": "Showing off with arrogance"
        },
        {
          "text": "High personal integrity, empathy for citizens, and relentless dedication to quality"
        },
        {
          "text": "Blaming others for your own mistakes"
        },
        {
          "text": "Accepting bribes and cutting safety corners"
        }
      ],
      "correctIndex": 1,
      "explanation": "Integrity and genuine dedication to quality are irreplaceable! In every high-impact career, your reputation and honest character are your greatest assets.",
      "proTip": "Always be honest in your school tests and assignments — true character is built through small choices made every day."
    },
    {
      "id": 10,
      "roadmapStage": "Stage 10: Future World & AI Collaboration",
      "category": "AI & Future World",
      "categoryColor": "bg-purple-100 text-purple-900 border-purple-300",
      "question": "How will modern Artificial Intelligence (AI) and technology assist human professionals in this career over the next decade?",
      "options": [
        {
          "text": "AI will eliminate the entire profession and humans will have no jobs"
        },
        {
          "text": "AI facial recognition and automated DNA sequencer pipelines assist labs, while human forensic scientists guarantee court evidentiary truth"
        },
        {
          "text": "Computers will be outlawed in this profession"
        },
        {
          "text": "Nothing will change from 200 years ago"
        }
      ],
      "correctIndex": 1,
      "explanation": "AI facial recognition and automated DNA sequencer pipelines assist labs, while human forensic scientists guarantee court evidentiary truth. AI is a powerful assistant, but human empathy, critical judgment, moral courage, and physical action will always lead the future!",
      "proTip": "Embrace modern technology as a co-pilot, while building your unique human strengths of empathy, creativity, and leadership!"
    }
  ]
},

  "horticulturist": {
  "id": "horticulturist",
  "title": "Horticulturist & Green Agriculture Roadmap Quiz",
  "subtitle": "A student-friendly quiz for 8th, 9th & 10th classes: polyhouse farming, fruit orchards, floriculture & export agri-business!",
  "icon": "🪴",
  "badge": "For Classes 8th – 10th",
  "gradient": "from-emerald-600 via-green-700 to-lime-800",
  "accentColor": "#16A34A",
  "description": "Want to become a Horticulturist & Green Agriculture? Test if you know the exact roadmap: stream choices after 10th, required degrees, key entrance exams, and skills needed to excel!",
  "totalQuestions": 10,
  "blueprintUrl": "/career-reports?career=horticulturist",
  "cheatSheet": [
    "Class 8-10: Focus on Biology (botany, plant reproduction, photosynthesis, soil minerals) and Chemistry and build Growing balcony potted plants.",
    "After 10th: Choose Compulsory BiPC (Biology, Physics, Chemistry) in Class 11-12 Intermediate.",
    "Key Gateways: Prepare for State Agri/Horti EAPCET or ICAR AIEEA (Indian Council of Agricultural Research).",
    "Degree & Duration: 4-Year B.Sc (Hons) in Horticulture (including Rural Horticultural Work Experience internship).",
    "Future with AI: Drones and AI soil sensors optimize drip irrigation, while horticulturists develop drought-resistant crops to ensure national food security."
  ],
  "questions": [
    {
      "id": 1,
      "roadmapStage": "Stage 1: After 10th Class",
      "category": "Choosing Branch / Stream",
      "categoryColor": "bg-blue-100 text-blue-900 border-blue-300",
      "question": "When you pass Class 10, which Intermediate (10+2) stream should you choose to become a Horticulturist & Green Agriculture?",
      "options": [
        {
          "text": "Any irrelevant vocational stream without checking eligibility"
        },
        {
          "text": "Compulsory BiPC (Biology, Physics, Chemistry) in Class 11-12 Intermediate"
        },
        {
          "text": "Drop out of school after Class 10"
        },
        {
          "text": "Only study arts without required core subjects"
        }
      ],
      "correctIndex": 1,
      "explanation": "Compulsory BiPC (Biology, Physics, Chemistry) in Class 11-12 Intermediate. Meeting the right stream criteria in 11th and 12th is the vital first step on this roadmap!",
      "proTip": "Check the exact entrance eligibility early in 10th class so you pick your Intermediate stream with 100% confidence!"
    },
    {
      "id": 2,
      "roadmapStage": "Stage 2: Training & Degree Duration",
      "category": "Course Duration",
      "categoryColor": "bg-emerald-100 text-emerald-900 border-emerald-300",
      "question": "How much time does it take to complete the foundational qualification and training for this career pathway?",
      "options": [
        {
          "text": "Just a 1-day certificate course"
        },
        {
          "text": "15 years of only theoretical reading"
        },
        {
          "text": "4-Year B.Sc (Hons) in Horticulture (including Rural Horticultural Work Experience internship)"
        },
        {
          "text": "6 weeks of online videos"
        }
      ],
      "correctIndex": 2,
      "explanation": "This professional pathway takes 4-Year B.Sc (Hons) in Horticulture (including Rural Horticultural Work Experience internship). True professional expertise requires structured degrees, lab experiments, and hands-on practical postings.",
      "proTip": "Focus on mastering concepts every single year rather than rushing through degrees!"
    },
    {
      "id": 3,
      "roadmapStage": "Stage 3: Gateway Degree & Entrance Exam",
      "category": "College Degree & Exams",
      "categoryColor": "bg-indigo-100 text-indigo-900 border-indigo-300",
      "question": "Which key examination or degree gateway is central to entering this professional career in India?",
      "options": [
        {
          "text": "State Agri/Horti EAPCET or ICAR AIEEA (Indian Council of Agricultural Research)"
        },
        {
          "text": "A random lucky lottery draw"
        },
        {
          "text": "Paying an unauthorized private middleman"
        },
        {
          "text": "Only writing a high school spelling test"
        }
      ],
      "correctIndex": 0,
      "explanation": "State Agri/Horti EAPCET or ICAR AIEEA (Indian Council of Agricultural Research). Clearing standard national or state entrances guarantees transparent admission into top accredited colleges and government commissions.",
      "proTip": "Previous years' question papers and conceptual NCERT mastery are your best friends when preparing for this gateway!"
    },
    {
      "id": 4,
      "roadmapStage": "Stage 4: School Foundations",
      "category": "School Subjects",
      "categoryColor": "bg-amber-100 text-amber-900 border-amber-300",
      "question": "Which subject that you study right now in 8th, 9th, or 10th class builds the deepest foundation for this career?",
      "options": [
        {
          "text": "Memorizing movie trivia"
        },
        {
          "text": "Playing mobile games during study hours"
        },
        {
          "text": "Biology (botany, plant reproduction, photosynthesis, soil minerals) and Chemistry"
        },
        {
          "text": "Sleeping in the classroom"
        }
      ],
      "correctIndex": 2,
      "explanation": "Biology (botany, plant reproduction, photosynthesis, soil minerals) and Chemistry. What you are learning in school right now directly connects to this field!",
      "proTip": "Pay extra attention when your teacher covers these topics in class — you are building the foundation of your future profession!"
    },
    {
      "id": 5,
      "roadmapStage": "Stage 5: High School Habits to Build",
      "category": "Skills to Build",
      "categoryColor": "bg-rose-100 text-rose-900 border-rose-300",
      "question": "As an 8th, 9th, or 10th student, what real habit should you start cultivating to prepare for this profession?",
      "options": [
        {
          "text": "Growing balcony potted plants, grafting plant branches, learning seed varieties, and caring for greenery"
        },
        {
          "text": "Refusing to do school assignments on time"
        },
        {
          "text": "Spending 6 hours a day arguing on social media"
        },
        {
          "text": "Giving up whenever a lesson feels slightly challenging"
        }
      ],
      "correctIndex": 0,
      "explanation": "Growing balcony potted plants, grafting plant branches, learning seed varieties, and caring for greenery. Great professionals develop their discipline, focus, and core habits long before they enter college.",
      "proTip": "Start with just 20 minutes a day practicing this habit — consistency over weeks and months creates champions!"
    },
    {
      "id": 6,
      "roadmapStage": "Stage 6: Premier Institutions & Regulators",
      "category": "College Degree & Exams",
      "categoryColor": "bg-purple-100 text-purple-900 border-purple-300",
      "question": "Which premier institutions or statutory bodies are recognized across India for this professional discipline?",
      "options": [
        {
          "text": "Unrecognized fake coaching websites with no campus"
        },
        {
          "text": "Dr. YSR Horticultural University (AP), SKLTSHU (Telangana), and ICAR Horticultural Institutes (IIHR Bengaluru)"
        },
        {
          "text": "Local amusement parks"
        },
        {
          "text": "Private bus booking counters"
        }
      ],
      "correctIndex": 1,
      "explanation": "Dr. YSR Horticultural University (AP), SKLTSHU (Telangana), and ICAR Horticultural Institutes (IIHR Bengaluru). Studying in premier recognized institutions gives you top laboratory facilities, experienced mentors, and world-class campus recruitment.",
      "proTip": "Visit the official websites of these premier institutes online — seeing campus photos and student projects will inspire you!"
    },
    {
      "id": 7,
      "roadmapStage": "Stage 7: Everyday Role & Purpose",
      "category": "Skills to Build",
      "categoryColor": "bg-teal-100 text-teal-900 border-teal-300",
      "question": "What is the real day-to-day mission and responsibility of professionals working in this field?",
      "options": [
        {
          "text": "Sitting idle in an empty room with zero responsibilities"
        },
        {
          "text": "Taking shortcuts and breaking ethics"
        },
        {
          "text": "Supervising high-yield greenhouse polyhouses, developing disease-resistant fruit varieties, and guiding farmers on crop yield"
        },
        {
          "text": "Only showing up once a year"
        }
      ],
      "correctIndex": 2,
      "explanation": "Supervising high-yield greenhouse polyhouses, developing disease-resistant fruit varieties, and guiding farmers on crop yield. Professionals in this field play a critical role in strengthening society, public welfare, and national progress.",
      "proTip": "A career is not just a monthly paycheck — it is your daily opportunity to solve meaningful problems and make people's lives better!"
    },
    {
      "id": 8,
      "roadmapStage": "Stage 8: Career Ladder & Promotion",
      "category": "Course Duration",
      "categoryColor": "bg-indigo-100 text-indigo-900 border-indigo-300",
      "question": "As you gain experience and demonstrate exceptional leadership, what does your long-term career growth path look like?",
      "options": [
        {
          "text": "Horticulture Officer (HO) -> Assistant Director of Horticulture -> District Horticulture Officer (DHO) -> Agri-Export Entrepreneur"
        },
        {
          "text": "Staying in an entry-level trainee role forever with no advancement"
        },
        {
          "text": "Demotions every year"
        },
        {
          "text": "Being fired immediately without reason"
        }
      ],
      "correctIndex": 0,
      "explanation": "Horticulture Officer (HO) -> Assistant Director of Horticulture -> District Horticulture Officer (DHO) -> Agri-Export Entrepreneur. With consistent hard work, continuous learning, and integrity, you can rise to senior national leadership positions!",
      "proTip": "Never stop learning new skills — the best leaders in this field keep updating their knowledge throughout their lives!"
    },
    {
      "id": 9,
      "roadmapStage": "Stage 9: Mindset & Professional Ethics",
      "category": "Skills to Build",
      "categoryColor": "bg-amber-100 text-amber-900 border-amber-300",
      "question": "What is the single most vital quality that earns deep respect and enduring trust in this profession?",
      "options": [
        {
          "text": "Showing off with arrogance"
        },
        {
          "text": "High personal integrity, empathy for citizens, and relentless dedication to quality"
        },
        {
          "text": "Blaming others for your own mistakes"
        },
        {
          "text": "Accepting bribes and cutting safety corners"
        }
      ],
      "correctIndex": 1,
      "explanation": "Integrity and genuine dedication to quality are irreplaceable! In every high-impact career, your reputation and honest character are your greatest assets.",
      "proTip": "Always be honest in your school tests and assignments — true character is built through small choices made every day."
    },
    {
      "id": 10,
      "roadmapStage": "Stage 10: Future World & AI Collaboration",
      "category": "AI & Future World",
      "categoryColor": "bg-purple-100 text-purple-900 border-purple-300",
      "question": "How will modern Artificial Intelligence (AI) and technology assist human professionals in this career over the next decade?",
      "options": [
        {
          "text": "AI will eliminate the entire profession and humans will have no jobs"
        },
        {
          "text": "Drones and AI soil sensors optimize drip irrigation, while horticulturists develop drought-resistant crops to ensure national food security"
        },
        {
          "text": "Computers will be outlawed in this profession"
        },
        {
          "text": "Nothing will change from 200 years ago"
        }
      ],
      "correctIndex": 1,
      "explanation": "Drones and AI soil sensors optimize drip irrigation, while horticulturists develop drought-resistant crops to ensure national food security. AI is a powerful assistant, but human empathy, critical judgment, moral courage, and physical action will always lead the future!",
      "proTip": "Embrace modern technology as a co-pilot, while building your unique human strengths of empathy, creativity, and leadership!"
    }
  ]
},

  "stenographer": {
  "id": "stenographer",
  "title": "Court & Government Stenographer Roadmap Quiz",
  "subtitle": "A student-friendly quiz for 8th, 9th & 10th classes: high-speed shorthand, court transcription, SSC Steno Grade C & D & legal careers!",
  "icon": "⌨️",
  "badge": "For Classes 8th – 10th",
  "gradient": "from-stone-600 via-slate-700 to-stone-900",
  "accentColor": "#57534E",
  "description": "Want to become a Court & Government Stenographer? Test if you know the exact roadmap: stream choices after 10th, required degrees, key entrance exams, and skills needed to excel!",
  "totalQuestions": 10,
  "blueprintUrl": "/career-reports?career=stenographer",
  "cheatSheet": [
    "Class 8-10: Focus on English / Regional Language Grammar, Vocabulary, Spelling, and General Knowledge and build Fast touch typing on computer keyboards.",
    "After 10th: Choose Any stream in 10+2 Intermediate (CEC, HEC, MPC, or BiPC).",
    "Key Gateways: Prepare for SSC Stenographer Grade C & D Examination + Mandatory Shorthand & Computer Typing Skill Test (80–100 wpm).",
    "Degree & Duration: 1–2 Years dedicated training in Pitman Shorthand speed and touch typing after 10th/12th.",
    "Future with AI: Automated voice recognition generates rough draft text, while human stenographers ensure legally certified verbatim accuracy for courts."
  ],
  "questions": [
    {
      "id": 1,
      "roadmapStage": "Stage 1: After 10th Class",
      "category": "Choosing Branch / Stream",
      "categoryColor": "bg-blue-100 text-blue-900 border-blue-300",
      "question": "When you pass Class 10, which Intermediate (10+2) stream should you choose to become a Court & Government Stenographer?",
      "options": [
        {
          "text": "Any irrelevant vocational stream without checking eligibility"
        },
        {
          "text": "Any stream in 10+2 Intermediate (CEC, HEC, MPC, or BiPC)"
        },
        {
          "text": "Drop out of school after Class 10"
        },
        {
          "text": "Only study arts without required core subjects"
        }
      ],
      "correctIndex": 1,
      "explanation": "Any stream in 10+2 Intermediate (CEC, HEC, MPC, or BiPC). Meeting the right stream criteria in 11th and 12th is the vital first step on this roadmap!",
      "proTip": "Check the exact entrance eligibility early in 10th class so you pick your Intermediate stream with 100% confidence!"
    },
    {
      "id": 2,
      "roadmapStage": "Stage 2: Training & Degree Duration",
      "category": "Course Duration",
      "categoryColor": "bg-emerald-100 text-emerald-900 border-emerald-300",
      "question": "How much time does it take to complete the foundational qualification and training for this career pathway?",
      "options": [
        {
          "text": "Just a 1-day certificate course"
        },
        {
          "text": "15 years of only theoretical reading"
        },
        {
          "text": "1–2 Years dedicated training in Pitman Shorthand speed and touch typing after 10th/12th"
        },
        {
          "text": "6 weeks of online videos"
        }
      ],
      "correctIndex": 2,
      "explanation": "This professional pathway takes 1–2 Years dedicated training in Pitman Shorthand speed and touch typing after 10th/12th. True professional expertise requires structured degrees, lab experiments, and hands-on practical postings.",
      "proTip": "Focus on mastering concepts every single year rather than rushing through degrees!"
    },
    {
      "id": 3,
      "roadmapStage": "Stage 3: Gateway Degree & Entrance Exam",
      "category": "College Degree & Exams",
      "categoryColor": "bg-indigo-100 text-indigo-900 border-indigo-300",
      "question": "Which key examination or degree gateway is central to entering this professional career in India?",
      "options": [
        {
          "text": "SSC Stenographer Grade C & D Examination + Mandatory Shorthand & Computer Typing Skill Test (80–100 wpm)"
        },
        {
          "text": "A random lucky lottery draw"
        },
        {
          "text": "Paying an unauthorized private middleman"
        },
        {
          "text": "Only writing a high school spelling test"
        }
      ],
      "correctIndex": 0,
      "explanation": "SSC Stenographer Grade C & D Examination + Mandatory Shorthand & Computer Typing Skill Test (80–100 wpm). Clearing standard national or state entrances guarantees transparent admission into top accredited colleges and government commissions.",
      "proTip": "Previous years' question papers and conceptual NCERT mastery are your best friends when preparing for this gateway!"
    },
    {
      "id": 4,
      "roadmapStage": "Stage 4: School Foundations",
      "category": "School Subjects",
      "categoryColor": "bg-amber-100 text-amber-900 border-amber-300",
      "question": "Which subject that you study right now in 8th, 9th, or 10th class builds the deepest foundation for this career?",
      "options": [
        {
          "text": "Memorizing movie trivia"
        },
        {
          "text": "Playing mobile games during study hours"
        },
        {
          "text": "English / Regional Language Grammar, Vocabulary, Spelling, and General Knowledge"
        },
        {
          "text": "Sleeping in the classroom"
        }
      ],
      "correctIndex": 2,
      "explanation": "English / Regional Language Grammar, Vocabulary, Spelling, and General Knowledge. What you are learning in school right now directly connects to this field!",
      "proTip": "Pay extra attention when your teacher covers these topics in class — you are building the foundation of your future profession!"
    },
    {
      "id": 5,
      "roadmapStage": "Stage 5: High School Habits to Build",
      "category": "Skills to Build",
      "categoryColor": "bg-rose-100 text-rose-900 border-rose-300",
      "question": "As an 8th, 9th, or 10th student, what real habit should you start cultivating to prepare for this profession?",
      "options": [
        {
          "text": "Fast touch typing on computer keyboards, sharp listening comprehension, and neat fast handwriting"
        },
        {
          "text": "Refusing to do school assignments on time"
        },
        {
          "text": "Spending 6 hours a day arguing on social media"
        },
        {
          "text": "Giving up whenever a lesson feels slightly challenging"
        }
      ],
      "correctIndex": 0,
      "explanation": "Fast touch typing on computer keyboards, sharp listening comprehension, and neat fast handwriting. Great professionals develop their discipline, focus, and core habits long before they enter college.",
      "proTip": "Start with just 20 minutes a day practicing this habit — consistency over weeks and months creates champions!"
    },
    {
      "id": 6,
      "roadmapStage": "Stage 6: Premier Institutions & Regulators",
      "category": "College Degree & Exams",
      "categoryColor": "bg-purple-100 text-purple-900 border-purple-300",
      "question": "Which premier institutions or statutory bodies are recognized across India for this professional discipline?",
      "options": [
        {
          "text": "Unrecognized fake coaching websites with no campus"
        },
        {
          "text": "Government Commercial Institutes and State Board of Technical Education typing institutes"
        },
        {
          "text": "Local amusement parks"
        },
        {
          "text": "Private bus booking counters"
        }
      ],
      "correctIndex": 1,
      "explanation": "Government Commercial Institutes and State Board of Technical Education typing institutes. Studying in premier recognized institutions gives you top laboratory facilities, experienced mentors, and world-class campus recruitment.",
      "proTip": "Visit the official websites of these premier institutes online — seeing campus photos and student projects will inspire you!"
    },
    {
      "id": 7,
      "roadmapStage": "Stage 7: Everyday Role & Purpose",
      "category": "Skills to Build",
      "categoryColor": "bg-teal-100 text-teal-900 border-teal-300",
      "question": "What is the real day-to-day mission and responsibility of professionals working in this field?",
      "options": [
        {
          "text": "Sitting idle in an empty room with zero responsibilities"
        },
        {
          "text": "Taking shortcuts and breaking ethics"
        },
        {
          "text": "Transcribing High Court and Supreme Court judge oral judgments verbatim, taking ministerial dictations, and managing official records"
        },
        {
          "text": "Only showing up once a year"
        }
      ],
      "correctIndex": 2,
      "explanation": "Transcribing High Court and Supreme Court judge oral judgments verbatim, taking ministerial dictations, and managing official records. Professionals in this field play a critical role in strengthening society, public welfare, and national progress.",
      "proTip": "A career is not just a monthly paycheck — it is your daily opportunity to solve meaningful problems and make people's lives better!"
    },
    {
      "id": 8,
      "roadmapStage": "Stage 8: Career Ladder & Promotion",
      "category": "Course Duration",
      "categoryColor": "bg-indigo-100 text-indigo-900 border-indigo-300",
      "question": "As you gain experience and demonstrate exceptional leadership, what does your long-term career growth path look like?",
      "options": [
        {
          "text": "Stenographer Grade D -> Senior Stenographer -> Personal Assistant (PA) -> Private Secretary (PS) to Judges and Union Ministers"
        },
        {
          "text": "Staying in an entry-level trainee role forever with no advancement"
        },
        {
          "text": "Demotions every year"
        },
        {
          "text": "Being fired immediately without reason"
        }
      ],
      "correctIndex": 0,
      "explanation": "Stenographer Grade D -> Senior Stenographer -> Personal Assistant (PA) -> Private Secretary (PS) to Judges and Union Ministers. With consistent hard work, continuous learning, and integrity, you can rise to senior national leadership positions!",
      "proTip": "Never stop learning new skills — the best leaders in this field keep updating their knowledge throughout their lives!"
    },
    {
      "id": 9,
      "roadmapStage": "Stage 9: Mindset & Professional Ethics",
      "category": "Skills to Build",
      "categoryColor": "bg-amber-100 text-amber-900 border-amber-300",
      "question": "What is the single most vital quality that earns deep respect and enduring trust in this profession?",
      "options": [
        {
          "text": "Showing off with arrogance"
        },
        {
          "text": "High personal integrity, empathy for citizens, and relentless dedication to quality"
        },
        {
          "text": "Blaming others for your own mistakes"
        },
        {
          "text": "Accepting bribes and cutting safety corners"
        }
      ],
      "correctIndex": 1,
      "explanation": "Integrity and genuine dedication to quality are irreplaceable! In every high-impact career, your reputation and honest character are your greatest assets.",
      "proTip": "Always be honest in your school tests and assignments — true character is built through small choices made every day."
    },
    {
      "id": 10,
      "roadmapStage": "Stage 10: Future World & AI Collaboration",
      "category": "AI & Future World",
      "categoryColor": "bg-purple-100 text-purple-900 border-purple-300",
      "question": "How will modern Artificial Intelligence (AI) and technology assist human professionals in this career over the next decade?",
      "options": [
        {
          "text": "AI will eliminate the entire profession and humans will have no jobs"
        },
        {
          "text": "Automated voice recognition generates rough draft text, while human stenographers ensure legally certified verbatim accuracy for courts"
        },
        {
          "text": "Computers will be outlawed in this profession"
        },
        {
          "text": "Nothing will change from 200 years ago"
        }
      ],
      "correctIndex": 1,
      "explanation": "Automated voice recognition generates rough draft text, while human stenographers ensure legally certified verbatim accuracy for courts. AI is a powerful assistant, but human empathy, critical judgment, moral courage, and physical action will always lead the future!",
      "proTip": "Embrace modern technology as a co-pilot, while building your unique human strengths of empathy, creativity, and leadership!"
    }
  ]
},

  "astrophysicist": {
  "id": "astrophysicist",
  "title": "Astrophysicist & Space Scientist Roadmap Quiz",
  "subtitle": "A student-friendly quiz for 8th, 9th & 10th classes: telescopes, black holes, ISRO & NASA planetary missions & deep space physics!",
  "icon": "🔭",
  "badge": "For Classes 8th – 10th",
  "gradient": "from-indigo-900 via-purple-900 to-black",
  "accentColor": "#4338CA",
  "description": "Want to become a Astrophysicist & Space Scientist? Test if you know the exact roadmap: stream choices after 10th, required degrees, key entrance exams, and skills needed to excel!",
  "totalQuestions": 10,
  "blueprintUrl": "/career-reports?career=astrophysicist",
  "cheatSheet": [
    "Class 8-10: Focus on Physics (gravitation, electromagnetism, wave optics) and Mathematics (calculus, trigonometry) and build Observing night sky constellations.",
    "After 10th: Choose Compulsory MPC (Mathematics, Physics, Chemistry) in Class 11-12 Intermediate.",
    "Key Gateways: Prepare for JEE Advanced, IIST Entrance (for Indian Institute of Space Science and Technology), or JEST / GATE.",
    "Degree & Duration: 4-Year B.Tech / B.S + 2-Year M.S + 4–5 Year Ph.D. in Astronomy & Astrophysics.",
    "Future with AI: AI analyzes petabytes of space telescope imagery to discover exoplanets, while astrophysicists formulate grand unified laws of the cosmos."
  ],
  "questions": [
    {
      "id": 1,
      "roadmapStage": "Stage 1: After 10th Class",
      "category": "Choosing Branch / Stream",
      "categoryColor": "bg-blue-100 text-blue-900 border-blue-300",
      "question": "When you pass Class 10, which Intermediate (10+2) stream should you choose to become a Astrophysicist & Space Scientist?",
      "options": [
        {
          "text": "Any irrelevant vocational stream without checking eligibility"
        },
        {
          "text": "Compulsory MPC (Mathematics, Physics, Chemistry) in Class 11-12 Intermediate"
        },
        {
          "text": "Drop out of school after Class 10"
        },
        {
          "text": "Only study arts without required core subjects"
        }
      ],
      "correctIndex": 1,
      "explanation": "Compulsory MPC (Mathematics, Physics, Chemistry) in Class 11-12 Intermediate. Meeting the right stream criteria in 11th and 12th is the vital first step on this roadmap!",
      "proTip": "Check the exact entrance eligibility early in 10th class so you pick your Intermediate stream with 100% confidence!"
    },
    {
      "id": 2,
      "roadmapStage": "Stage 2: Training & Degree Duration",
      "category": "Course Duration",
      "categoryColor": "bg-emerald-100 text-emerald-900 border-emerald-300",
      "question": "How much time does it take to complete the foundational qualification and training for this career pathway?",
      "options": [
        {
          "text": "Just a 1-day certificate course"
        },
        {
          "text": "15 years of only theoretical reading"
        },
        {
          "text": "4-Year B.Tech / B.S + 2-Year M.S + 4–5 Year Ph.D. in Astronomy & Astrophysics"
        },
        {
          "text": "6 weeks of online videos"
        }
      ],
      "correctIndex": 2,
      "explanation": "This professional pathway takes 4-Year B.Tech / B.S + 2-Year M.S + 4–5 Year Ph.D. in Astronomy & Astrophysics. True professional expertise requires structured degrees, lab experiments, and hands-on practical postings.",
      "proTip": "Focus on mastering concepts every single year rather than rushing through degrees!"
    },
    {
      "id": 3,
      "roadmapStage": "Stage 3: Gateway Degree & Entrance Exam",
      "category": "College Degree & Exams",
      "categoryColor": "bg-indigo-100 text-indigo-900 border-indigo-300",
      "question": "Which key examination or degree gateway is central to entering this professional career in India?",
      "options": [
        {
          "text": "JEE Advanced, IIST Entrance (for Indian Institute of Space Science and Technology), or JEST / GATE"
        },
        {
          "text": "A random lucky lottery draw"
        },
        {
          "text": "Paying an unauthorized private middleman"
        },
        {
          "text": "Only writing a high school spelling test"
        }
      ],
      "correctIndex": 0,
      "explanation": "JEE Advanced, IIST Entrance (for Indian Institute of Space Science and Technology), or JEST / GATE. Clearing standard national or state entrances guarantees transparent admission into top accredited colleges and government commissions.",
      "proTip": "Previous years' question papers and conceptual NCERT mastery are your best friends when preparing for this gateway!"
    },
    {
      "id": 4,
      "roadmapStage": "Stage 4: School Foundations",
      "category": "School Subjects",
      "categoryColor": "bg-amber-100 text-amber-900 border-amber-300",
      "question": "Which subject that you study right now in 8th, 9th, or 10th class builds the deepest foundation for this career?",
      "options": [
        {
          "text": "Memorizing movie trivia"
        },
        {
          "text": "Playing mobile games during study hours"
        },
        {
          "text": "Physics (gravitation, electromagnetism, wave optics) and Mathematics (calculus, trigonometry)"
        },
        {
          "text": "Sleeping in the classroom"
        }
      ],
      "correctIndex": 2,
      "explanation": "Physics (gravitation, electromagnetism, wave optics) and Mathematics (calculus, trigonometry). What you are learning in school right now directly connects to this field!",
      "proTip": "Pay extra attention when your teacher covers these topics in class — you are building the foundation of your future profession!"
    },
    {
      "id": 5,
      "roadmapStage": "Stage 5: High School Habits to Build",
      "category": "Skills to Build",
      "categoryColor": "bg-rose-100 text-rose-900 border-rose-300",
      "question": "As an 8th, 9th, or 10th student, what real habit should you start cultivating to prepare for this profession?",
      "options": [
        {
          "text": "Observing night sky constellations, watching space documentaries, and solving challenging math & physics problems"
        },
        {
          "text": "Refusing to do school assignments on time"
        },
        {
          "text": "Spending 6 hours a day arguing on social media"
        },
        {
          "text": "Giving up whenever a lesson feels slightly challenging"
        }
      ],
      "correctIndex": 0,
      "explanation": "Observing night sky constellations, watching space documentaries, and solving challenging math & physics problems. Great professionals develop their discipline, focus, and core habits long before they enter college.",
      "proTip": "Start with just 20 minutes a day practicing this habit — consistency over weeks and months creates champions!"
    },
    {
      "id": 6,
      "roadmapStage": "Stage 6: Premier Institutions & Regulators",
      "category": "College Degree & Exams",
      "categoryColor": "bg-purple-100 text-purple-900 border-purple-300",
      "question": "Which premier institutions or statutory bodies are recognized across India for this professional discipline?",
      "options": [
        {
          "text": "Unrecognized fake coaching websites with no campus"
        },
        {
          "text": "IIST Thiruvananthapuram, IIA Bangalore, IUCAA Pune, TIFR Mumbai, and ISRO Space Applications Centers"
        },
        {
          "text": "Local amusement parks"
        },
        {
          "text": "Private bus booking counters"
        }
      ],
      "correctIndex": 1,
      "explanation": "IIST Thiruvananthapuram, IIA Bangalore, IUCAA Pune, TIFR Mumbai, and ISRO Space Applications Centers. Studying in premier recognized institutions gives you top laboratory facilities, experienced mentors, and world-class campus recruitment.",
      "proTip": "Visit the official websites of these premier institutes online — seeing campus photos and student projects will inspire you!"
    },
    {
      "id": 7,
      "roadmapStage": "Stage 7: Everyday Role & Purpose",
      "category": "Skills to Build",
      "categoryColor": "bg-teal-100 text-teal-900 border-teal-300",
      "question": "What is the real day-to-day mission and responsibility of professionals working in this field?",
      "options": [
        {
          "text": "Sitting idle in an empty room with zero responsibilities"
        },
        {
          "text": "Taking shortcuts and breaking ethics"
        },
        {
          "text": "Analyzing radio telescope data from deep space, simulating galaxy collisions on supercomputers, and planning Mars/Moon rover instruments"
        },
        {
          "text": "Only showing up once a year"
        }
      ],
      "correctIndex": 2,
      "explanation": "Analyzing radio telescope data from deep space, simulating galaxy collisions on supercomputers, and planning Mars/Moon rover instruments. Professionals in this field play a critical role in strengthening society, public welfare, and national progress.",
      "proTip": "A career is not just a monthly paycheck — it is your daily opportunity to solve meaningful problems and make people's lives better!"
    },
    {
      "id": 8,
      "roadmapStage": "Stage 8: Career Ladder & Promotion",
      "category": "Course Duration",
      "categoryColor": "bg-indigo-100 text-indigo-900 border-indigo-300",
      "question": "As you gain experience and demonstrate exceptional leadership, what does your long-term career growth path look like?",
      "options": [
        {
          "text": "Postdoctoral Researcher -> Scientist 'SD' at ISRO/IUCAA -> Mission Lead Principal Investigator -> Space Agency Research Director"
        },
        {
          "text": "Staying in an entry-level trainee role forever with no advancement"
        },
        {
          "text": "Demotions every year"
        },
        {
          "text": "Being fired immediately without reason"
        }
      ],
      "correctIndex": 0,
      "explanation": "Postdoctoral Researcher -> Scientist 'SD' at ISRO/IUCAA -> Mission Lead Principal Investigator -> Space Agency Research Director. With consistent hard work, continuous learning, and integrity, you can rise to senior national leadership positions!",
      "proTip": "Never stop learning new skills — the best leaders in this field keep updating their knowledge throughout their lives!"
    },
    {
      "id": 9,
      "roadmapStage": "Stage 9: Mindset & Professional Ethics",
      "category": "Skills to Build",
      "categoryColor": "bg-amber-100 text-amber-900 border-amber-300",
      "question": "What is the single most vital quality that earns deep respect and enduring trust in this profession?",
      "options": [
        {
          "text": "Showing off with arrogance"
        },
        {
          "text": "High personal integrity, empathy for citizens, and relentless dedication to quality"
        },
        {
          "text": "Blaming others for your own mistakes"
        },
        {
          "text": "Accepting bribes and cutting safety corners"
        }
      ],
      "correctIndex": 1,
      "explanation": "Integrity and genuine dedication to quality are irreplaceable! In every high-impact career, your reputation and honest character are your greatest assets.",
      "proTip": "Always be honest in your school tests and assignments — true character is built through small choices made every day."
    },
    {
      "id": 10,
      "roadmapStage": "Stage 10: Future World & AI Collaboration",
      "category": "AI & Future World",
      "categoryColor": "bg-purple-100 text-purple-900 border-purple-300",
      "question": "How will modern Artificial Intelligence (AI) and technology assist human professionals in this career over the next decade?",
      "options": [
        {
          "text": "AI will eliminate the entire profession and humans will have no jobs"
        },
        {
          "text": "AI analyzes petabytes of space telescope imagery to discover exoplanets, while astrophysicists formulate grand unified laws of the cosmos"
        },
        {
          "text": "Computers will be outlawed in this profession"
        },
        {
          "text": "Nothing will change from 200 years ago"
        }
      ],
      "correctIndex": 1,
      "explanation": "AI analyzes petabytes of space telescope imagery to discover exoplanets, while astrophysicists formulate grand unified laws of the cosmos. AI is a powerful assistant, but human empathy, critical judgment, moral courage, and physical action will always lead the future!",
      "proTip": "Embrace modern technology as a co-pilot, while building your unique human strengths of empathy, creativity, and leadership!"
    }
  ]
},

  "cyber-security": {
  "id": "cyber-security",
  "title": "Cyber Security & Ethical Hacker Roadmap Quiz",
  "subtitle": "A student-friendly quiz for 8th, 9th & 10th classes: network defense, ethical hacking, CEH certifications, cryptography & cyber police!",
  "icon": "🛡️",
  "badge": "For Classes 8th – 10th",
  "gradient": "from-emerald-700 via-teal-800 to-slate-950",
  "accentColor": "#0F766E",
  "description": "Want to become a Cyber Security & Ethical Hacker? Test if you know the exact roadmap: stream choices after 10th, required degrees, key entrance exams, and skills needed to excel!",
  "totalQuestions": 10,
  "blueprintUrl": "/career-reports?career=cyber-security",
  "cheatSheet": [
    "Class 8-10: Focus on Computer Science, Mathematics (modular arithmetic, logic gates, cryptography), and Physics and build Practicing safe cyber hygiene.",
    "After 10th: Choose Compulsory MPC (Mathematics, Physics, Chemistry) in Class 11-12 Intermediate.",
    "Key Gateways: Prepare for JEE Main / Advanced, State CET / EAPCET in Computer Science, and Global CEH / OSCP certifications.",
    "Degree & Duration: 4-Year B.Tech in CSE / Cybersecurity / Information Technology.",
    "Future with AI: Automated AI defends against instant automated cyber threats, while ethical hackers formulate high-level defense architecture and policy."
  ],
  "questions": [
    {
      "id": 1,
      "roadmapStage": "Stage 1: After 10th Class",
      "category": "Choosing Branch / Stream",
      "categoryColor": "bg-blue-100 text-blue-900 border-blue-300",
      "question": "When you pass Class 10, which Intermediate (10+2) stream should you choose to become a Cyber Security & Ethical Hacker?",
      "options": [
        {
          "text": "Any irrelevant vocational stream without checking eligibility"
        },
        {
          "text": "Compulsory MPC (Mathematics, Physics, Chemistry) in Class 11-12 Intermediate"
        },
        {
          "text": "Drop out of school after Class 10"
        },
        {
          "text": "Only study arts without required core subjects"
        }
      ],
      "correctIndex": 1,
      "explanation": "Compulsory MPC (Mathematics, Physics, Chemistry) in Class 11-12 Intermediate. Meeting the right stream criteria in 11th and 12th is the vital first step on this roadmap!",
      "proTip": "Check the exact entrance eligibility early in 10th class so you pick your Intermediate stream with 100% confidence!"
    },
    {
      "id": 2,
      "roadmapStage": "Stage 2: Training & Degree Duration",
      "category": "Course Duration",
      "categoryColor": "bg-emerald-100 text-emerald-900 border-emerald-300",
      "question": "How much time does it take to complete the foundational qualification and training for this career pathway?",
      "options": [
        {
          "text": "Just a 1-day certificate course"
        },
        {
          "text": "15 years of only theoretical reading"
        },
        {
          "text": "4-Year B.Tech in CSE / Cybersecurity / Information Technology"
        },
        {
          "text": "6 weeks of online videos"
        }
      ],
      "correctIndex": 2,
      "explanation": "This professional pathway takes 4-Year B.Tech in CSE / Cybersecurity / Information Technology. True professional expertise requires structured degrees, lab experiments, and hands-on practical postings.",
      "proTip": "Focus on mastering concepts every single year rather than rushing through degrees!"
    },
    {
      "id": 3,
      "roadmapStage": "Stage 3: Gateway Degree & Entrance Exam",
      "category": "College Degree & Exams",
      "categoryColor": "bg-indigo-100 text-indigo-900 border-indigo-300",
      "question": "Which key examination or degree gateway is central to entering this professional career in India?",
      "options": [
        {
          "text": "JEE Main / Advanced, State CET / EAPCET in Computer Science, and Global CEH / OSCP certifications"
        },
        {
          "text": "A random lucky lottery draw"
        },
        {
          "text": "Paying an unauthorized private middleman"
        },
        {
          "text": "Only writing a high school spelling test"
        }
      ],
      "correctIndex": 0,
      "explanation": "JEE Main / Advanced, State CET / EAPCET in Computer Science, and Global CEH / OSCP certifications. Clearing standard national or state entrances guarantees transparent admission into top accredited colleges and government commissions.",
      "proTip": "Previous years' question papers and conceptual NCERT mastery are your best friends when preparing for this gateway!"
    },
    {
      "id": 4,
      "roadmapStage": "Stage 4: School Foundations",
      "category": "School Subjects",
      "categoryColor": "bg-amber-100 text-amber-900 border-amber-300",
      "question": "Which subject that you study right now in 8th, 9th, or 10th class builds the deepest foundation for this career?",
      "options": [
        {
          "text": "Memorizing movie trivia"
        },
        {
          "text": "Playing mobile games during study hours"
        },
        {
          "text": "Computer Science, Mathematics (modular arithmetic, logic gates, cryptography), and Physics"
        },
        {
          "text": "Sleeping in the classroom"
        }
      ],
      "correctIndex": 2,
      "explanation": "Computer Science, Mathematics (modular arithmetic, logic gates, cryptography), and Physics. What you are learning in school right now directly connects to this field!",
      "proTip": "Pay extra attention when your teacher covers these topics in class — you are building the foundation of your future profession!"
    },
    {
      "id": 5,
      "roadmapStage": "Stage 5: High School Habits to Build",
      "category": "Skills to Build",
      "categoryColor": "bg-rose-100 text-rose-900 border-rose-300",
      "question": "As an 8th, 9th, or 10th student, what real habit should you start cultivating to prepare for this profession?",
      "options": [
        {
          "text": "Practicing safe cyber hygiene, learning Linux command-line, understanding how IP networks work, and solving coding riddles"
        },
        {
          "text": "Refusing to do school assignments on time"
        },
        {
          "text": "Spending 6 hours a day arguing on social media"
        },
        {
          "text": "Giving up whenever a lesson feels slightly challenging"
        }
      ],
      "correctIndex": 0,
      "explanation": "Practicing safe cyber hygiene, learning Linux command-line, understanding how IP networks work, and solving coding riddles. Great professionals develop their discipline, focus, and core habits long before they enter college.",
      "proTip": "Start with just 20 minutes a day practicing this habit — consistency over weeks and months creates champions!"
    },
    {
      "id": 6,
      "roadmapStage": "Stage 6: Premier Institutions & Regulators",
      "category": "College Degree & Exams",
      "categoryColor": "bg-purple-100 text-purple-900 border-purple-300",
      "question": "Which premier institutions or statutory bodies are recognized across India for this professional discipline?",
      "options": [
        {
          "text": "Unrecognized fake coaching websites with no campus"
        },
        {
          "text": "IITs, NITs, IIITs, and industry certification labs (Offensive Security OSCP, CompTIA Security+)"
        },
        {
          "text": "Local amusement parks"
        },
        {
          "text": "Private bus booking counters"
        }
      ],
      "correctIndex": 1,
      "explanation": "IITs, NITs, IIITs, and industry certification labs (Offensive Security OSCP, CompTIA Security+). Studying in premier recognized institutions gives you top laboratory facilities, experienced mentors, and world-class campus recruitment.",
      "proTip": "Visit the official websites of these premier institutes online — seeing campus photos and student projects will inspire you!"
    },
    {
      "id": 7,
      "roadmapStage": "Stage 7: Everyday Role & Purpose",
      "category": "Skills to Build",
      "categoryColor": "bg-teal-100 text-teal-900 border-teal-300",
      "question": "What is the real day-to-day mission and responsibility of professionals working in this field?",
      "options": [
        {
          "text": "Sitting idle in an empty room with zero responsibilities"
        },
        {
          "text": "Taking shortcuts and breaking ethics"
        },
        {
          "text": "Simulating ethical hacking penetration tests to fix security holes, monitoring Security Operations Centers (SOC), and stopping cyber attacks"
        },
        {
          "text": "Only showing up once a year"
        }
      ],
      "correctIndex": 2,
      "explanation": "Simulating ethical hacking penetration tests to fix security holes, monitoring Security Operations Centers (SOC), and stopping cyber attacks. Professionals in this field play a critical role in strengthening society, public welfare, and national progress.",
      "proTip": "A career is not just a monthly paycheck — it is your daily opportunity to solve meaningful problems and make people's lives better!"
    },
    {
      "id": 8,
      "roadmapStage": "Stage 8: Career Ladder & Promotion",
      "category": "Course Duration",
      "categoryColor": "bg-indigo-100 text-indigo-900 border-indigo-300",
      "question": "As you gain experience and demonstrate exceptional leadership, what does your long-term career growth path look like?",
      "options": [
        {
          "text": "SOC Security Analyst -> Penetration Tester -> Lead Security Architect -> Chief Information Security Officer (CISO)"
        },
        {
          "text": "Staying in an entry-level trainee role forever with no advancement"
        },
        {
          "text": "Demotions every year"
        },
        {
          "text": "Being fired immediately without reason"
        }
      ],
      "correctIndex": 0,
      "explanation": "SOC Security Analyst -> Penetration Tester -> Lead Security Architect -> Chief Information Security Officer (CISO). With consistent hard work, continuous learning, and integrity, you can rise to senior national leadership positions!",
      "proTip": "Never stop learning new skills — the best leaders in this field keep updating their knowledge throughout their lives!"
    },
    {
      "id": 9,
      "roadmapStage": "Stage 9: Mindset & Professional Ethics",
      "category": "Skills to Build",
      "categoryColor": "bg-amber-100 text-amber-900 border-amber-300",
      "question": "What is the single most vital quality that earns deep respect and enduring trust in this profession?",
      "options": [
        {
          "text": "Showing off with arrogance"
        },
        {
          "text": "High personal integrity, empathy for citizens, and relentless dedication to quality"
        },
        {
          "text": "Blaming others for your own mistakes"
        },
        {
          "text": "Accepting bribes and cutting safety corners"
        }
      ],
      "correctIndex": 1,
      "explanation": "Integrity and genuine dedication to quality are irreplaceable! In every high-impact career, your reputation and honest character are your greatest assets.",
      "proTip": "Always be honest in your school tests and assignments — true character is built through small choices made every day."
    },
    {
      "id": 10,
      "roadmapStage": "Stage 10: Future World & AI Collaboration",
      "category": "AI & Future World",
      "categoryColor": "bg-purple-100 text-purple-900 border-purple-300",
      "question": "How will modern Artificial Intelligence (AI) and technology assist human professionals in this career over the next decade?",
      "options": [
        {
          "text": "AI will eliminate the entire profession and humans will have no jobs"
        },
        {
          "text": "Automated AI defends against instant automated cyber threats, while ethical hackers formulate high-level defense architecture and policy"
        },
        {
          "text": "Computers will be outlawed in this profession"
        },
        {
          "text": "Nothing will change from 200 years ago"
        }
      ],
      "correctIndex": 1,
      "explanation": "Automated AI defends against instant automated cyber threats, while ethical hackers formulate high-level defense architecture and policy. AI is a powerful assistant, but human empathy, critical judgment, moral courage, and physical action will always lead the future!",
      "proTip": "Embrace modern technology as a co-pilot, while building your unique human strengths of empathy, creativity, and leadership!"
    }
  ]
},

  "drone-pilot": {
  "id": "drone-pilot",
  "title": "Drone Pilot & UAV Technician Roadmap Quiz",
  "subtitle": "A student-friendly quiz for 8th, 9th & 10th classes: DGCA license, flight simulator training, agricultural spraying & aerial cinema!",
  "icon": "🛸",
  "badge": "For Classes 8th – 10th",
  "gradient": "from-sky-600 via-indigo-700 to-slate-900",
  "accentColor": "#0284C7",
  "description": "Want to become a Drone Pilot & UAV Technician? Test if you know the exact roadmap: stream choices after 10th, required degrees, key entrance exams, and skills needed to excel!",
  "totalQuestions": 10,
  "blueprintUrl": "/career-reports?career=drone-pilot",
  "cheatSheet": [
    "Class 8-10: Focus on Physics (aerodynamics, battery electronics, radio frequency signals, gravity) and Geography (maps and build Playing with RC quadcopters safely.",
    "After 10th: Choose Any stream in Intermediate (MPC preferred for understanding electronics and aerodynamics).",
    "Key Gateways: Prepare for DGCA Medical Examination + DGCA-Approved Remote Pilot Training (RPTO) Certification Exam.",
    "Degree & Duration: 5–7 Days intensive flight training at DGCA RPTO center after 10th/12th (Age 18+ for commercial license).",
    "Future with AI: Autonomous AI drones fly preset GPS paths with collision-avoidance vision, while certified human drone pilots oversee fleet safety and compliance."
  ],
  "questions": [
    {
      "id": 1,
      "roadmapStage": "Stage 1: After 10th Class",
      "category": "Choosing Branch / Stream",
      "categoryColor": "bg-blue-100 text-blue-900 border-blue-300",
      "question": "When you pass Class 10, which Intermediate (10+2) stream should you choose to become a Drone Pilot & UAV Technician?",
      "options": [
        {
          "text": "Any irrelevant vocational stream without checking eligibility"
        },
        {
          "text": "Any stream in Intermediate (MPC preferred for understanding electronics and aerodynamics)"
        },
        {
          "text": "Drop out of school after Class 10"
        },
        {
          "text": "Only study arts without required core subjects"
        }
      ],
      "correctIndex": 1,
      "explanation": "Any stream in Intermediate (MPC preferred for understanding electronics and aerodynamics). Meeting the right stream criteria in 11th and 12th is the vital first step on this roadmap!",
      "proTip": "Check the exact entrance eligibility early in 10th class so you pick your Intermediate stream with 100% confidence!"
    },
    {
      "id": 2,
      "roadmapStage": "Stage 2: Training & Degree Duration",
      "category": "Course Duration",
      "categoryColor": "bg-emerald-100 text-emerald-900 border-emerald-300",
      "question": "How much time does it take to complete the foundational qualification and training for this career pathway?",
      "options": [
        {
          "text": "Just a 1-day certificate course"
        },
        {
          "text": "15 years of only theoretical reading"
        },
        {
          "text": "5–7 Days intensive flight training at DGCA RPTO center after 10th/12th (Age 18+ for commercial license)"
        },
        {
          "text": "6 weeks of online videos"
        }
      ],
      "correctIndex": 2,
      "explanation": "This professional pathway takes 5–7 Days intensive flight training at DGCA RPTO center after 10th/12th (Age 18+ for commercial license). True professional expertise requires structured degrees, lab experiments, and hands-on practical postings.",
      "proTip": "Focus on mastering concepts every single year rather than rushing through degrees!"
    },
    {
      "id": 3,
      "roadmapStage": "Stage 3: Gateway Degree & Entrance Exam",
      "category": "College Degree & Exams",
      "categoryColor": "bg-indigo-100 text-indigo-900 border-indigo-300",
      "question": "Which key examination or degree gateway is central to entering this professional career in India?",
      "options": [
        {
          "text": "DGCA Medical Examination + DGCA-Approved Remote Pilot Training (RPTO) Certification Exam"
        },
        {
          "text": "A random lucky lottery draw"
        },
        {
          "text": "Paying an unauthorized private middleman"
        },
        {
          "text": "Only writing a high school spelling test"
        }
      ],
      "correctIndex": 0,
      "explanation": "DGCA Medical Examination + DGCA-Approved Remote Pilot Training (RPTO) Certification Exam. Clearing standard national or state entrances guarantees transparent admission into top accredited colleges and government commissions.",
      "proTip": "Previous years' question papers and conceptual NCERT mastery are your best friends when preparing for this gateway!"
    },
    {
      "id": 4,
      "roadmapStage": "Stage 4: School Foundations",
      "category": "School Subjects",
      "categoryColor": "bg-amber-100 text-amber-900 border-amber-300",
      "question": "Which subject that you study right now in 8th, 9th, or 10th class builds the deepest foundation for this career?",
      "options": [
        {
          "text": "Memorizing movie trivia"
        },
        {
          "text": "Playing mobile games during study hours"
        },
        {
          "text": "Physics (aerodynamics, battery electronics, radio frequency signals, gravity) and Geography (maps & GPS)"
        },
        {
          "text": "Sleeping in the classroom"
        }
      ],
      "correctIndex": 2,
      "explanation": "Physics (aerodynamics, battery electronics, radio frequency signals, gravity) and Geography (maps & GPS). What you are learning in school right now directly connects to this field!",
      "proTip": "Pay extra attention when your teacher covers these topics in class — you are building the foundation of your future profession!"
    },
    {
      "id": 5,
      "roadmapStage": "Stage 5: High School Habits to Build",
      "category": "Skills to Build",
      "categoryColor": "bg-rose-100 text-rose-900 border-rose-300",
      "question": "As an 8th, 9th, or 10th student, what real habit should you start cultivating to prepare for this profession?",
      "options": [
        {
          "text": "Playing with RC quadcopters safely, learning drone simulator software on computers, and spatial hand-eye coordination"
        },
        {
          "text": "Refusing to do school assignments on time"
        },
        {
          "text": "Spending 6 hours a day arguing on social media"
        },
        {
          "text": "Giving up whenever a lesson feels slightly challenging"
        }
      ],
      "correctIndex": 0,
      "explanation": "Playing with RC quadcopters safely, learning drone simulator software on computers, and spatial hand-eye coordination. Great professionals develop their discipline, focus, and core habits long before they enter college.",
      "proTip": "Start with just 20 minutes a day practicing this habit — consistency over weeks and months creates champions!"
    },
    {
      "id": 6,
      "roadmapStage": "Stage 6: Premier Institutions & Regulators",
      "category": "College Degree & Exams",
      "categoryColor": "bg-purple-100 text-purple-900 border-purple-300",
      "question": "Which premier institutions or statutory bodies are recognized across India for this professional discipline?",
      "options": [
        {
          "text": "Unrecognized fake coaching websites with no campus"
        },
        {
          "text": "DGCA-Authorized Remote Pilot Training Organizations (RPTOs) across India and DigitalSky portal"
        },
        {
          "text": "Local amusement parks"
        },
        {
          "text": "Private bus booking counters"
        }
      ],
      "correctIndex": 1,
      "explanation": "DGCA-Authorized Remote Pilot Training Organizations (RPTOs) across India and DigitalSky portal. Studying in premier recognized institutions gives you top laboratory facilities, experienced mentors, and world-class campus recruitment.",
      "proTip": "Visit the official websites of these premier institutes online — seeing campus photos and student projects will inspire you!"
    },
    {
      "id": 7,
      "roadmapStage": "Stage 7: Everyday Role & Purpose",
      "category": "Skills to Build",
      "categoryColor": "bg-teal-100 text-teal-900 border-teal-300",
      "question": "What is the real day-to-day mission and responsibility of professionals working in this field?",
      "options": [
        {
          "text": "Sitting idle in an empty room with zero responsibilities"
        },
        {
          "text": "Taking shortcuts and breaking ethics"
        },
        {
          "text": "Flying commercial multi-rotor drones for agricultural fertilizer spraying, topographic land surveying, cinema shoots, and disaster delivery"
        },
        {
          "text": "Only showing up once a year"
        }
      ],
      "correctIndex": 2,
      "explanation": "Flying commercial multi-rotor drones for agricultural fertilizer spraying, topographic land surveying, cinema shoots, and disaster delivery. Professionals in this field play a critical role in strengthening society, public welfare, and national progress.",
      "proTip": "A career is not just a monthly paycheck — it is your daily opportunity to solve meaningful problems and make people's lives better!"
    },
    {
      "id": 8,
      "roadmapStage": "Stage 8: Career Ladder & Promotion",
      "category": "Course Duration",
      "categoryColor": "bg-indigo-100 text-indigo-900 border-indigo-300",
      "question": "As you gain experience and demonstrate exceptional leadership, what does your long-term career growth path look like?",
      "options": [
        {
          "text": "Junior Drone Operator -> Senior Commercial Remote Pilot -> Drone Fleet Operations Manager -> Drone Tech Enterprise Founder"
        },
        {
          "text": "Staying in an entry-level trainee role forever with no advancement"
        },
        {
          "text": "Demotions every year"
        },
        {
          "text": "Being fired immediately without reason"
        }
      ],
      "correctIndex": 0,
      "explanation": "Junior Drone Operator -> Senior Commercial Remote Pilot -> Drone Fleet Operations Manager -> Drone Tech Enterprise Founder. With consistent hard work, continuous learning, and integrity, you can rise to senior national leadership positions!",
      "proTip": "Never stop learning new skills — the best leaders in this field keep updating their knowledge throughout their lives!"
    },
    {
      "id": 9,
      "roadmapStage": "Stage 9: Mindset & Professional Ethics",
      "category": "Skills to Build",
      "categoryColor": "bg-amber-100 text-amber-900 border-amber-300",
      "question": "What is the single most vital quality that earns deep respect and enduring trust in this profession?",
      "options": [
        {
          "text": "Showing off with arrogance"
        },
        {
          "text": "High personal integrity, empathy for citizens, and relentless dedication to quality"
        },
        {
          "text": "Blaming others for your own mistakes"
        },
        {
          "text": "Accepting bribes and cutting safety corners"
        }
      ],
      "correctIndex": 1,
      "explanation": "Integrity and genuine dedication to quality are irreplaceable! In every high-impact career, your reputation and honest character are your greatest assets.",
      "proTip": "Always be honest in your school tests and assignments — true character is built through small choices made every day."
    },
    {
      "id": 10,
      "roadmapStage": "Stage 10: Future World & AI Collaboration",
      "category": "AI & Future World",
      "categoryColor": "bg-purple-100 text-purple-900 border-purple-300",
      "question": "How will modern Artificial Intelligence (AI) and technology assist human professionals in this career over the next decade?",
      "options": [
        {
          "text": "AI will eliminate the entire profession and humans will have no jobs"
        },
        {
          "text": "Autonomous AI drones fly preset GPS paths with collision-avoidance vision, while certified human drone pilots oversee fleet safety and compliance"
        },
        {
          "text": "Computers will be outlawed in this profession"
        },
        {
          "text": "Nothing will change from 200 years ago"
        }
      ],
      "correctIndex": 1,
      "explanation": "Autonomous AI drones fly preset GPS paths with collision-avoidance vision, while certified human drone pilots oversee fleet safety and compliance. AI is a powerful assistant, but human empathy, critical judgment, moral courage, and physical action will always lead the future!",
      "proTip": "Embrace modern technology as a co-pilot, while building your unique human strengths of empathy, creativity, and leadership!"
    }
  ]
},

  "epigraphist": {
  "id": "epigraphist",
  "title": "Epigraphist & Inscriptions Specialist Roadmap Quiz",
  "subtitle": "A student-friendly quiz for 8th, 9th & 10th classes: deciphering Brahmi & ancient scripts, temple copper plates & ASI discoveries!",
  "icon": "📜",
  "badge": "For Classes 8th – 10th",
  "gradient": "from-amber-700 via-stone-800 to-black",
  "accentColor": "#92400E",
  "description": "Want to become a Epigraphist & Inscriptions Specialist? Test if you know the exact roadmap: stream choices after 10th, required degrees, key entrance exams, and skills needed to excel!",
  "totalQuestions": 10,
  "blueprintUrl": "/career-reports?career=epigraphist",
  "cheatSheet": [
    "Class 8-10: Focus on History (ancient Indian kingdoms, Ashokan edicts), Classical Languages, and Linguistic grammar and build Fascination with ancient scripts.",
    "After 10th: Choose Humanities / Arts (HEC) or literature groups in 10+2 Intermediate.",
    "Key Gateways: Prepare for CUET UG / PG and Archaeological Survey of India (ASI) Epigraphy Branch selection.",
    "Degree & Duration: 3-Year B.A + 2-Year M.A in History / Classical Languages (Sanskrit, Telugu, Tamil, Kannada) + Diploma in Epigraphy.",
    "Future with AI: AI vision models help enhance damaged weathered stone inscription characters, while human epigraphists reconstruct the true cultural context."
  ],
  "questions": [
    {
      "id": 1,
      "roadmapStage": "Stage 1: After 10th Class",
      "category": "Choosing Branch / Stream",
      "categoryColor": "bg-blue-100 text-blue-900 border-blue-300",
      "question": "When you pass Class 10, which Intermediate (10+2) stream should you choose to become a Epigraphist & Inscriptions Specialist?",
      "options": [
        {
          "text": "Any irrelevant vocational stream without checking eligibility"
        },
        {
          "text": "Humanities / Arts (HEC) or literature groups in 10+2 Intermediate"
        },
        {
          "text": "Drop out of school after Class 10"
        },
        {
          "text": "Only study arts without required core subjects"
        }
      ],
      "correctIndex": 1,
      "explanation": "Humanities / Arts (HEC) or literature groups in 10+2 Intermediate. Meeting the right stream criteria in 11th and 12th is the vital first step on this roadmap!",
      "proTip": "Check the exact entrance eligibility early in 10th class so you pick your Intermediate stream with 100% confidence!"
    },
    {
      "id": 2,
      "roadmapStage": "Stage 2: Training & Degree Duration",
      "category": "Course Duration",
      "categoryColor": "bg-emerald-100 text-emerald-900 border-emerald-300",
      "question": "How much time does it take to complete the foundational qualification and training for this career pathway?",
      "options": [
        {
          "text": "Just a 1-day certificate course"
        },
        {
          "text": "15 years of only theoretical reading"
        },
        {
          "text": "3-Year B.A + 2-Year M.A in History / Classical Languages (Sanskrit, Telugu, Tamil, Kannada) + Diploma in Epigraphy"
        },
        {
          "text": "6 weeks of online videos"
        }
      ],
      "correctIndex": 2,
      "explanation": "This professional pathway takes 3-Year B.A + 2-Year M.A in History / Classical Languages (Sanskrit, Telugu, Tamil, Kannada) + Diploma in Epigraphy. True professional expertise requires structured degrees, lab experiments, and hands-on practical postings.",
      "proTip": "Focus on mastering concepts every single year rather than rushing through degrees!"
    },
    {
      "id": 3,
      "roadmapStage": "Stage 3: Gateway Degree & Entrance Exam",
      "category": "College Degree & Exams",
      "categoryColor": "bg-indigo-100 text-indigo-900 border-indigo-300",
      "question": "Which key examination or degree gateway is central to entering this professional career in India?",
      "options": [
        {
          "text": "CUET UG / PG and Archaeological Survey of India (ASI) Epigraphy Branch selection"
        },
        {
          "text": "A random lucky lottery draw"
        },
        {
          "text": "Paying an unauthorized private middleman"
        },
        {
          "text": "Only writing a high school spelling test"
        }
      ],
      "correctIndex": 0,
      "explanation": "CUET UG / PG and Archaeological Survey of India (ASI) Epigraphy Branch selection. Clearing standard national or state entrances guarantees transparent admission into top accredited colleges and government commissions.",
      "proTip": "Previous years' question papers and conceptual NCERT mastery are your best friends when preparing for this gateway!"
    },
    {
      "id": 4,
      "roadmapStage": "Stage 4: School Foundations",
      "category": "School Subjects",
      "categoryColor": "bg-amber-100 text-amber-900 border-amber-300",
      "question": "Which subject that you study right now in 8th, 9th, or 10th class builds the deepest foundation for this career?",
      "options": [
        {
          "text": "Memorizing movie trivia"
        },
        {
          "text": "Playing mobile games during study hours"
        },
        {
          "text": "History (ancient Indian kingdoms, Ashokan edicts), Classical Languages, and Linguistic grammar"
        },
        {
          "text": "Sleeping in the classroom"
        }
      ],
      "correctIndex": 2,
      "explanation": "History (ancient Indian kingdoms, Ashokan edicts), Classical Languages, and Linguistic grammar. What you are learning in school right now directly connects to this field!",
      "proTip": "Pay extra attention when your teacher covers these topics in class — you are building the foundation of your future profession!"
    },
    {
      "id": 5,
      "roadmapStage": "Stage 5: High School Habits to Build",
      "category": "Skills to Build",
      "categoryColor": "bg-rose-100 text-rose-900 border-rose-300",
      "question": "As an 8th, 9th, or 10th student, what real habit should you start cultivating to prepare for this profession?",
      "options": [
        {
          "text": "Fascination with ancient scripts, reading historical temple inscriptions, and patience with ancient linguistic puzzles"
        },
        {
          "text": "Refusing to do school assignments on time"
        },
        {
          "text": "Spending 6 hours a day arguing on social media"
        },
        {
          "text": "Giving up whenever a lesson feels slightly challenging"
        }
      ],
      "correctIndex": 0,
      "explanation": "Fascination with ancient scripts, reading historical temple inscriptions, and patience with ancient linguistic puzzles. Great professionals develop their discipline, focus, and core habits long before they enter college.",
      "proTip": "Start with just 20 minutes a day practicing this habit — consistency over weeks and months creates champions!"
    },
    {
      "id": 6,
      "roadmapStage": "Stage 6: Premier Institutions & Regulators",
      "category": "College Degree & Exams",
      "categoryColor": "bg-purple-100 text-purple-900 border-purple-300",
      "question": "Which premier institutions or statutory bodies are recognized across India for this professional discipline?",
      "options": [
        {
          "text": "Unrecognized fake coaching websites with no campus"
        },
        {
          "text": "ASI Epigraphy Branch (Mysore & Nagpur), Deccan College Pune, and University of Madras"
        },
        {
          "text": "Local amusement parks"
        },
        {
          "text": "Private bus booking counters"
        }
      ],
      "correctIndex": 1,
      "explanation": "ASI Epigraphy Branch (Mysore & Nagpur), Deccan College Pune, and University of Madras. Studying in premier recognized institutions gives you top laboratory facilities, experienced mentors, and world-class campus recruitment.",
      "proTip": "Visit the official websites of these premier institutes online — seeing campus photos and student projects will inspire you!"
    },
    {
      "id": 7,
      "roadmapStage": "Stage 7: Everyday Role & Purpose",
      "category": "Skills to Build",
      "categoryColor": "bg-teal-100 text-teal-900 border-teal-300",
      "question": "What is the real day-to-day mission and responsibility of professionals working in this field?",
      "options": [
        {
          "text": "Sitting idle in an empty room with zero responsibilities"
        },
        {
          "text": "Taking shortcuts and breaking ethics"
        },
        {
          "text": "Taking estampages (ink impressions) of ancient stone inscriptions, deciphering forgotten scripts like Brahmi, and reconstructing historical dates"
        },
        {
          "text": "Only showing up once a year"
        }
      ],
      "correctIndex": 2,
      "explanation": "Taking estampages (ink impressions) of ancient stone inscriptions, deciphering forgotten scripts like Brahmi, and reconstructing historical dates. Professionals in this field play a critical role in strengthening society, public welfare, and national progress.",
      "proTip": "A career is not just a monthly paycheck — it is your daily opportunity to solve meaningful problems and make people's lives better!"
    },
    {
      "id": 8,
      "roadmapStage": "Stage 8: Career Ladder & Promotion",
      "category": "Course Duration",
      "categoryColor": "bg-indigo-100 text-indigo-900 border-indigo-300",
      "question": "As you gain experience and demonstrate exceptional leadership, what does your long-term career growth path look like?",
      "options": [
        {
          "text": "Epigraphical Assistant -> Assistant Superintending Epigraphist -> Director of Epigraphy (ASI) -> National Classical Scholar"
        },
        {
          "text": "Staying in an entry-level trainee role forever with no advancement"
        },
        {
          "text": "Demotions every year"
        },
        {
          "text": "Being fired immediately without reason"
        }
      ],
      "correctIndex": 0,
      "explanation": "Epigraphical Assistant -> Assistant Superintending Epigraphist -> Director of Epigraphy (ASI) -> National Classical Scholar. With consistent hard work, continuous learning, and integrity, you can rise to senior national leadership positions!",
      "proTip": "Never stop learning new skills — the best leaders in this field keep updating their knowledge throughout their lives!"
    },
    {
      "id": 9,
      "roadmapStage": "Stage 9: Mindset & Professional Ethics",
      "category": "Skills to Build",
      "categoryColor": "bg-amber-100 text-amber-900 border-amber-300",
      "question": "What is the single most vital quality that earns deep respect and enduring trust in this profession?",
      "options": [
        {
          "text": "Showing off with arrogance"
        },
        {
          "text": "High personal integrity, empathy for citizens, and relentless dedication to quality"
        },
        {
          "text": "Blaming others for your own mistakes"
        },
        {
          "text": "Accepting bribes and cutting safety corners"
        }
      ],
      "correctIndex": 1,
      "explanation": "Integrity and genuine dedication to quality are irreplaceable! In every high-impact career, your reputation and honest character are your greatest assets.",
      "proTip": "Always be honest in your school tests and assignments — true character is built through small choices made every day."
    },
    {
      "id": 10,
      "roadmapStage": "Stage 10: Future World & AI Collaboration",
      "category": "AI & Future World",
      "categoryColor": "bg-purple-100 text-purple-900 border-purple-300",
      "question": "How will modern Artificial Intelligence (AI) and technology assist human professionals in this career over the next decade?",
      "options": [
        {
          "text": "AI will eliminate the entire profession and humans will have no jobs"
        },
        {
          "text": "AI vision models help enhance damaged weathered stone inscription characters, while human epigraphists reconstruct the true cultural context"
        },
        {
          "text": "Computers will be outlawed in this profession"
        },
        {
          "text": "Nothing will change from 200 years ago"
        }
      ],
      "correctIndex": 1,
      "explanation": "AI vision models help enhance damaged weathered stone inscription characters, while human epigraphists reconstruct the true cultural context. AI is a powerful assistant, but human empathy, critical judgment, moral courage, and physical action will always lead the future!",
      "proTip": "Embrace modern technology as a co-pilot, while building your unique human strengths of empathy, creativity, and leadership!"
    }
  ]
},

  "fitness-coach": {
  "id": "fitness-coach",
  "title": "Fitness Coach & Athletic Trainer Roadmap Quiz",
  "subtitle": "A student-friendly quiz for 8th, 9th & 10th classes: exercise biomechanics, certified personal training, gym leadership & athlete coaching!",
  "icon": "🏋️",
  "badge": "For Classes 8th – 10th",
  "gradient": "from-orange-600 via-amber-700 to-stone-900",
  "accentColor": "#C2410C",
  "description": "Want to become a Fitness Coach & Athletic Trainer? Test if you know the exact roadmap: stream choices after 10th, required degrees, key entrance exams, and skills needed to excel!",
  "totalQuestions": 10,
  "blueprintUrl": "/career-reports?career=fitness-coach",
  "cheatSheet": [
    "Class 8-10: Focus on Physical Education, Biology (skeletal and build Consistent daily bodyweight fitness (pushups.",
    "After 10th: Choose Any Intermediate stream (Science, Commerce, or Arts) with active physical athletics.",
    "Key Gateways: Prepare for International Certifications: ACE (American Council on Exercise), ACSM, ISSA, or B.P.Ed degree.",
    "Degree & Duration: 6–12 Months Certification Course or 3-Year B.P.Ed (Bachelor of Physical Education).",
    "Future with AI: AI smart cameras track workout repetition form and heart rates, while human fitness coaches provide the emotional drive and personal encouragement."
  ],
  "questions": [
    {
      "id": 1,
      "roadmapStage": "Stage 1: After 10th Class",
      "category": "Choosing Branch / Stream",
      "categoryColor": "bg-blue-100 text-blue-900 border-blue-300",
      "question": "When you pass Class 10, which Intermediate (10+2) stream should you choose to become a Fitness Coach & Athletic Trainer?",
      "options": [
        {
          "text": "Any irrelevant vocational stream without checking eligibility"
        },
        {
          "text": "Any Intermediate stream (Science, Commerce, or Arts) with active physical athletics"
        },
        {
          "text": "Drop out of school after Class 10"
        },
        {
          "text": "Only study arts without required core subjects"
        }
      ],
      "correctIndex": 1,
      "explanation": "Any Intermediate stream (Science, Commerce, or Arts) with active physical athletics. Meeting the right stream criteria in 11th and 12th is the vital first step on this roadmap!",
      "proTip": "Check the exact entrance eligibility early in 10th class so you pick your Intermediate stream with 100% confidence!"
    },
    {
      "id": 2,
      "roadmapStage": "Stage 2: Training & Degree Duration",
      "category": "Course Duration",
      "categoryColor": "bg-emerald-100 text-emerald-900 border-emerald-300",
      "question": "How much time does it take to complete the foundational qualification and training for this career pathway?",
      "options": [
        {
          "text": "Just a 1-day certificate course"
        },
        {
          "text": "15 years of only theoretical reading"
        },
        {
          "text": "6–12 Months Certification Course or 3-Year B.P.Ed (Bachelor of Physical Education)"
        },
        {
          "text": "6 weeks of online videos"
        }
      ],
      "correctIndex": 2,
      "explanation": "This professional pathway takes 6–12 Months Certification Course or 3-Year B.P.Ed (Bachelor of Physical Education). True professional expertise requires structured degrees, lab experiments, and hands-on practical postings.",
      "proTip": "Focus on mastering concepts every single year rather than rushing through degrees!"
    },
    {
      "id": 3,
      "roadmapStage": "Stage 3: Gateway Degree & Entrance Exam",
      "category": "College Degree & Exams",
      "categoryColor": "bg-indigo-100 text-indigo-900 border-indigo-300",
      "question": "Which key examination or degree gateway is central to entering this professional career in India?",
      "options": [
        {
          "text": "International Certifications: ACE (American Council on Exercise), ACSM, ISSA, or B.P.Ed degree"
        },
        {
          "text": "A random lucky lottery draw"
        },
        {
          "text": "Paying an unauthorized private middleman"
        },
        {
          "text": "Only writing a high school spelling test"
        }
      ],
      "correctIndex": 0,
      "explanation": "International Certifications: ACE (American Council on Exercise), ACSM, ISSA, or B.P.Ed degree. Clearing standard national or state entrances guarantees transparent admission into top accredited colleges and government commissions.",
      "proTip": "Previous years' question papers and conceptual NCERT mastery are your best friends when preparing for this gateway!"
    },
    {
      "id": 4,
      "roadmapStage": "Stage 4: School Foundations",
      "category": "School Subjects",
      "categoryColor": "bg-amber-100 text-amber-900 border-amber-300",
      "question": "Which subject that you study right now in 8th, 9th, or 10th class builds the deepest foundation for this career?",
      "options": [
        {
          "text": "Memorizing movie trivia"
        },
        {
          "text": "Playing mobile games during study hours"
        },
        {
          "text": "Physical Education, Biology (skeletal & muscular system, heart rate physiology, calories), and Physics"
        },
        {
          "text": "Sleeping in the classroom"
        }
      ],
      "correctIndex": 2,
      "explanation": "Physical Education, Biology (skeletal & muscular system, heart rate physiology, calories), and Physics. What you are learning in school right now directly connects to this field!",
      "proTip": "Pay extra attention when your teacher covers these topics in class — you are building the foundation of your future profession!"
    },
    {
      "id": 5,
      "roadmapStage": "Stage 5: High School Habits to Build",
      "category": "Skills to Build",
      "categoryColor": "bg-rose-100 text-rose-900 border-rose-300",
      "question": "As an 8th, 9th, or 10th student, what real habit should you start cultivating to prepare for this profession?",
      "options": [
        {
          "text": "Consistent daily bodyweight fitness (pushups, pullups, running), maintaining a positive encouraging attitude, and sports participation"
        },
        {
          "text": "Refusing to do school assignments on time"
        },
        {
          "text": "Spending 6 hours a day arguing on social media"
        },
        {
          "text": "Giving up whenever a lesson feels slightly challenging"
        }
      ],
      "correctIndex": 0,
      "explanation": "Consistent daily bodyweight fitness (pushups, pullups, running), maintaining a positive encouraging attitude, and sports participation. Great professionals develop their discipline, focus, and core habits long before they enter college.",
      "proTip": "Start with just 20 minutes a day practicing this habit — consistency over weeks and months creates champions!"
    },
    {
      "id": 6,
      "roadmapStage": "Stage 6: Premier Institutions & Regulators",
      "category": "College Degree & Exams",
      "categoryColor": "bg-purple-100 text-purple-900 border-purple-300",
      "question": "Which premier institutions or statutory bodies are recognized across India for this professional discipline?",
      "options": [
        {
          "text": "Unrecognized fake coaching websites with no campus"
        },
        {
          "text": "ACE-accredited fitness academies, Gold's Gym Fitness Institute, and Physical Education Colleges"
        },
        {
          "text": "Local amusement parks"
        },
        {
          "text": "Private bus booking counters"
        }
      ],
      "correctIndex": 1,
      "explanation": "ACE-accredited fitness academies, Gold's Gym Fitness Institute, and Physical Education Colleges. Studying in premier recognized institutions gives you top laboratory facilities, experienced mentors, and world-class campus recruitment.",
      "proTip": "Visit the official websites of these premier institutes online — seeing campus photos and student projects will inspire you!"
    },
    {
      "id": 7,
      "roadmapStage": "Stage 7: Everyday Role & Purpose",
      "category": "Skills to Build",
      "categoryColor": "bg-teal-100 text-teal-900 border-teal-300",
      "question": "What is the real day-to-day mission and responsibility of professionals working in this field?",
      "options": [
        {
          "text": "Sitting idle in an empty room with zero responsibilities"
        },
        {
          "text": "Taking shortcuts and breaking ethics"
        },
        {
          "text": "Guiding clients through safe weightlifting form, designing personalized fat loss / muscle gain workouts, and motivating lifestyle health"
        },
        {
          "text": "Only showing up once a year"
        }
      ],
      "correctIndex": 2,
      "explanation": "Guiding clients through safe weightlifting form, designing personalized fat loss / muscle gain workouts, and motivating lifestyle health. Professionals in this field play a critical role in strengthening society, public welfare, and national progress.",
      "proTip": "A career is not just a monthly paycheck — it is your daily opportunity to solve meaningful problems and make people's lives better!"
    },
    {
      "id": 8,
      "roadmapStage": "Stage 8: Career Ladder & Promotion",
      "category": "Course Duration",
      "categoryColor": "bg-indigo-100 text-indigo-900 border-indigo-300",
      "question": "As you gain experience and demonstrate exceptional leadership, what does your long-term career growth path look like?",
      "options": [
        {
          "text": "Floor Gym Trainer -> Senior Personal Coach -> Strength & Conditioning Specialist for Sports Teams -> Signature Fitness Studio Owner"
        },
        {
          "text": "Staying in an entry-level trainee role forever with no advancement"
        },
        {
          "text": "Demotions every year"
        },
        {
          "text": "Being fired immediately without reason"
        }
      ],
      "correctIndex": 0,
      "explanation": "Floor Gym Trainer -> Senior Personal Coach -> Strength & Conditioning Specialist for Sports Teams -> Signature Fitness Studio Owner. With consistent hard work, continuous learning, and integrity, you can rise to senior national leadership positions!",
      "proTip": "Never stop learning new skills — the best leaders in this field keep updating their knowledge throughout their lives!"
    },
    {
      "id": 9,
      "roadmapStage": "Stage 9: Mindset & Professional Ethics",
      "category": "Skills to Build",
      "categoryColor": "bg-amber-100 text-amber-900 border-amber-300",
      "question": "What is the single most vital quality that earns deep respect and enduring trust in this profession?",
      "options": [
        {
          "text": "Showing off with arrogance"
        },
        {
          "text": "High personal integrity, empathy for citizens, and relentless dedication to quality"
        },
        {
          "text": "Blaming others for your own mistakes"
        },
        {
          "text": "Accepting bribes and cutting safety corners"
        }
      ],
      "correctIndex": 1,
      "explanation": "Integrity and genuine dedication to quality are irreplaceable! In every high-impact career, your reputation and honest character are your greatest assets.",
      "proTip": "Always be honest in your school tests and assignments — true character is built through small choices made every day."
    },
    {
      "id": 10,
      "roadmapStage": "Stage 10: Future World & AI Collaboration",
      "category": "AI & Future World",
      "categoryColor": "bg-purple-100 text-purple-900 border-purple-300",
      "question": "How will modern Artificial Intelligence (AI) and technology assist human professionals in this career over the next decade?",
      "options": [
        {
          "text": "AI will eliminate the entire profession and humans will have no jobs"
        },
        {
          "text": "AI smart cameras track workout repetition form and heart rates, while human fitness coaches provide the emotional drive and personal encouragement"
        },
        {
          "text": "Computers will be outlawed in this profession"
        },
        {
          "text": "Nothing will change from 200 years ago"
        }
      ],
      "correctIndex": 1,
      "explanation": "AI smart cameras track workout repetition form and heart rates, while human fitness coaches provide the emotional drive and personal encouragement. AI is a powerful assistant, but human empathy, critical judgment, moral courage, and physical action will always lead the future!",
      "proTip": "Embrace modern technology as a co-pilot, while building your unique human strengths of empathy, creativity, and leadership!"
    }
  ]
},

  "food-safety-officer": {
  "id": "food-safety-officer",
  "title": "Food Safety Officer (FSO / FSSAI) Roadmap Quiz",
  "subtitle": "A student-friendly quiz for 8th, 9th & 10th classes: FSSAI food quality laws, restaurant inspections, food adulteration testing & public health!",
  "icon": "🧪",
  "badge": "For Classes 8th – 10th",
  "gradient": "from-emerald-700 via-teal-800 to-stone-900",
  "accentColor": "#0F766E",
  "description": "Want to become a Food Safety Officer (FSO / FSSAI)? Test if you know the exact roadmap: stream choices after 10th, required degrees, key entrance exams, and skills needed to excel!",
  "totalQuestions": 10,
  "blueprintUrl": "/career-reports?career=food-safety-officer",
  "cheatSheet": [
    "Class 8-10: Focus on Chemistry (chemical testing, food preservatives, adulterants), Biology (bacteria, food poisoning), and Civics and build Observing packaged food expiry dates and FSSAI logo marks.",
    "After 10th: Choose Compulsory BiPC (Biology) OR MPC (with Chemistry) in 10+2 Intermediate.",
    "Key Gateways: Prepare for FSSAI National Recruitment Exam or State PSC Food Safety Officer (FSO) Competitive Exam.",
    "Degree & Duration: 4-Year B.Tech in Food Technology or 3-Year B.Sc in Food Science / Chemistry / Microbiology.",
    "Future with AI: Smart chemical sensors and blockchain track food shipment freshness, while Food Safety Officers enforce legal penalties against adulteration."
  ],
  "questions": [
    {
      "id": 1,
      "roadmapStage": "Stage 1: After 10th Class",
      "category": "Choosing Branch / Stream",
      "categoryColor": "bg-blue-100 text-blue-900 border-blue-300",
      "question": "When you pass Class 10, which Intermediate (10+2) stream should you choose to become a Food Safety Officer (FSO / FSSAI)?",
      "options": [
        {
          "text": "Any irrelevant vocational stream without checking eligibility"
        },
        {
          "text": "Compulsory BiPC (Biology) OR MPC (with Chemistry) in 10+2 Intermediate"
        },
        {
          "text": "Drop out of school after Class 10"
        },
        {
          "text": "Only study arts without required core subjects"
        }
      ],
      "correctIndex": 1,
      "explanation": "Compulsory BiPC (Biology) OR MPC (with Chemistry) in 10+2 Intermediate. Meeting the right stream criteria in 11th and 12th is the vital first step on this roadmap!",
      "proTip": "Check the exact entrance eligibility early in 10th class so you pick your Intermediate stream with 100% confidence!"
    },
    {
      "id": 2,
      "roadmapStage": "Stage 2: Training & Degree Duration",
      "category": "Course Duration",
      "categoryColor": "bg-emerald-100 text-emerald-900 border-emerald-300",
      "question": "How much time does it take to complete the foundational qualification and training for this career pathway?",
      "options": [
        {
          "text": "Just a 1-day certificate course"
        },
        {
          "text": "15 years of only theoretical reading"
        },
        {
          "text": "4-Year B.Tech in Food Technology or 3-Year B.Sc in Food Science / Chemistry / Microbiology"
        },
        {
          "text": "6 weeks of online videos"
        }
      ],
      "correctIndex": 2,
      "explanation": "This professional pathway takes 4-Year B.Tech in Food Technology or 3-Year B.Sc in Food Science / Chemistry / Microbiology. True professional expertise requires structured degrees, lab experiments, and hands-on practical postings.",
      "proTip": "Focus on mastering concepts every single year rather than rushing through degrees!"
    },
    {
      "id": 3,
      "roadmapStage": "Stage 3: Gateway Degree & Entrance Exam",
      "category": "College Degree & Exams",
      "categoryColor": "bg-indigo-100 text-indigo-900 border-indigo-300",
      "question": "Which key examination or degree gateway is central to entering this professional career in India?",
      "options": [
        {
          "text": "FSSAI National Recruitment Exam or State PSC Food Safety Officer (FSO) Competitive Exam"
        },
        {
          "text": "A random lucky lottery draw"
        },
        {
          "text": "Paying an unauthorized private middleman"
        },
        {
          "text": "Only writing a high school spelling test"
        }
      ],
      "correctIndex": 0,
      "explanation": "FSSAI National Recruitment Exam or State PSC Food Safety Officer (FSO) Competitive Exam. Clearing standard national or state entrances guarantees transparent admission into top accredited colleges and government commissions.",
      "proTip": "Previous years' question papers and conceptual NCERT mastery are your best friends when preparing for this gateway!"
    },
    {
      "id": 4,
      "roadmapStage": "Stage 4: School Foundations",
      "category": "School Subjects",
      "categoryColor": "bg-amber-100 text-amber-900 border-amber-300",
      "question": "Which subject that you study right now in 8th, 9th, or 10th class builds the deepest foundation for this career?",
      "options": [
        {
          "text": "Memorizing movie trivia"
        },
        {
          "text": "Playing mobile games during study hours"
        },
        {
          "text": "Chemistry (chemical testing, food preservatives, adulterants), Biology (bacteria, food poisoning), and Civics"
        },
        {
          "text": "Sleeping in the classroom"
        }
      ],
      "correctIndex": 2,
      "explanation": "Chemistry (chemical testing, food preservatives, adulterants), Biology (bacteria, food poisoning), and Civics. What you are learning in school right now directly connects to this field!",
      "proTip": "Pay extra attention when your teacher covers these topics in class — you are building the foundation of your future profession!"
    },
    {
      "id": 5,
      "roadmapStage": "Stage 5: High School Habits to Build",
      "category": "Skills to Build",
      "categoryColor": "bg-rose-100 text-rose-900 border-rose-300",
      "question": "As an 8th, 9th, or 10th student, what real habit should you start cultivating to prepare for this profession?",
      "options": [
        {
          "text": "Observing packaged food expiry dates and FSSAI logo marks, maintaining kitchen cleanliness, and understanding health hygiene"
        },
        {
          "text": "Refusing to do school assignments on time"
        },
        {
          "text": "Spending 6 hours a day arguing on social media"
        },
        {
          "text": "Giving up whenever a lesson feels slightly challenging"
        }
      ],
      "correctIndex": 0,
      "explanation": "Observing packaged food expiry dates and FSSAI logo marks, maintaining kitchen cleanliness, and understanding health hygiene. Great professionals develop their discipline, focus, and core habits long before they enter college.",
      "proTip": "Start with just 20 minutes a day practicing this habit — consistency over weeks and months creates champions!"
    },
    {
      "id": 6,
      "roadmapStage": "Stage 6: Premier Institutions & Regulators",
      "category": "College Degree & Exams",
      "categoryColor": "bg-purple-100 text-purple-900 border-purple-300",
      "question": "Which premier institutions or statutory bodies are recognized across India for this professional discipline?",
      "options": [
        {
          "text": "Unrecognized fake coaching websites with no campus"
        },
        {
          "text": "NIFTEM (National Institute of Food Technology), CFTRI Mysore, and State Agricultural / Tech Universities"
        },
        {
          "text": "Local amusement parks"
        },
        {
          "text": "Private bus booking counters"
        }
      ],
      "correctIndex": 1,
      "explanation": "NIFTEM (National Institute of Food Technology), CFTRI Mysore, and State Agricultural / Tech Universities. Studying in premier recognized institutions gives you top laboratory facilities, experienced mentors, and world-class campus recruitment.",
      "proTip": "Visit the official websites of these premier institutes online — seeing campus photos and student projects will inspire you!"
    },
    {
      "id": 7,
      "roadmapStage": "Stage 7: Everyday Role & Purpose",
      "category": "Skills to Build",
      "categoryColor": "bg-teal-100 text-teal-900 border-teal-300",
      "question": "What is the real day-to-day mission and responsibility of professionals working in this field?",
      "options": [
        {
          "text": "Sitting idle in an empty room with zero responsibilities"
        },
        {
          "text": "Taking shortcuts and breaking ethics"
        },
        {
          "text": "Inspecting restaurants, bakeries, and food processing plants, collecting food samples for lab tests, and sealing adulterated factories"
        },
        {
          "text": "Only showing up once a year"
        }
      ],
      "correctIndex": 2,
      "explanation": "Inspecting restaurants, bakeries, and food processing plants, collecting food samples for lab tests, and sealing adulterated factories. Professionals in this field play a critical role in strengthening society, public welfare, and national progress.",
      "proTip": "A career is not just a monthly paycheck — it is your daily opportunity to solve meaningful problems and make people's lives better!"
    },
    {
      "id": 8,
      "roadmapStage": "Stage 8: Career Ladder & Promotion",
      "category": "Course Duration",
      "categoryColor": "bg-indigo-100 text-indigo-900 border-indigo-300",
      "question": "As you gain experience and demonstrate exceptional leadership, what does your long-term career growth path look like?",
      "options": [
        {
          "text": "Food Safety Officer (FSO) -> Designated Officer (DO) -> Joint Commissioner (Food Safety) -> Central FSSAI Director"
        },
        {
          "text": "Staying in an entry-level trainee role forever with no advancement"
        },
        {
          "text": "Demotions every year"
        },
        {
          "text": "Being fired immediately without reason"
        }
      ],
      "correctIndex": 0,
      "explanation": "Food Safety Officer (FSO) -> Designated Officer (DO) -> Joint Commissioner (Food Safety) -> Central FSSAI Director. With consistent hard work, continuous learning, and integrity, you can rise to senior national leadership positions!",
      "proTip": "Never stop learning new skills — the best leaders in this field keep updating their knowledge throughout their lives!"
    },
    {
      "id": 9,
      "roadmapStage": "Stage 9: Mindset & Professional Ethics",
      "category": "Skills to Build",
      "categoryColor": "bg-amber-100 text-amber-900 border-amber-300",
      "question": "What is the single most vital quality that earns deep respect and enduring trust in this profession?",
      "options": [
        {
          "text": "Showing off with arrogance"
        },
        {
          "text": "High personal integrity, empathy for citizens, and relentless dedication to quality"
        },
        {
          "text": "Blaming others for your own mistakes"
        },
        {
          "text": "Accepting bribes and cutting safety corners"
        }
      ],
      "correctIndex": 1,
      "explanation": "Integrity and genuine dedication to quality are irreplaceable! In every high-impact career, your reputation and honest character are your greatest assets.",
      "proTip": "Always be honest in your school tests and assignments — true character is built through small choices made every day."
    },
    {
      "id": 10,
      "roadmapStage": "Stage 10: Future World & AI Collaboration",
      "category": "AI & Future World",
      "categoryColor": "bg-purple-100 text-purple-900 border-purple-300",
      "question": "How will modern Artificial Intelligence (AI) and technology assist human professionals in this career over the next decade?",
      "options": [
        {
          "text": "AI will eliminate the entire profession and humans will have no jobs"
        },
        {
          "text": "Smart chemical sensors and blockchain track food shipment freshness, while Food Safety Officers enforce legal penalties against adulteration"
        },
        {
          "text": "Computers will be outlawed in this profession"
        },
        {
          "text": "Nothing will change from 200 years ago"
        }
      ],
      "correctIndex": 1,
      "explanation": "Smart chemical sensors and blockchain track food shipment freshness, while Food Safety Officers enforce legal penalties against adulteration. AI is a powerful assistant, but human empathy, critical judgment, moral courage, and physical action will always lead the future!",
      "proTip": "Embrace modern technology as a co-pilot, while building your unique human strengths of empathy, creativity, and leadership!"
    }
  ]
},

  "geneticist": {
  "id": "geneticist",
  "title": "Geneticist & Biotech Researcher Roadmap Quiz",
  "subtitle": "A student-friendly quiz for 8th, 9th & 10th classes: DNA sequencing, CRISPR gene editing, hereditary disease cure & future biotechnology!",
  "icon": "🧬",
  "badge": "For Classes 8th – 10th",
  "gradient": "from-indigo-600 via-purple-700 to-pink-900",
  "accentColor": "#4F46E5",
  "description": "Want to become a Geneticist & Biotech Researcher? Test if you know the exact roadmap: stream choices after 10th, required degrees, key entrance exams, and skills needed to excel!",
  "totalQuestions": 10,
  "blueprintUrl": "/career-reports?career=geneticist",
  "cheatSheet": [
    "Class 8-10: Focus on Biology (Mendelian inheritance, DNA double helix, cell division, genes) and Chemistry and build Fascination with heredity (why children look like parents).",
    "After 10th: Choose Compulsory BiPC (Biology, Physics, Chemistry) in Class 11-12 Intermediate.",
    "Key Gateways: Prepare for CUET UG / PG, GAT-B (Graduate Aptitude Test - Biotechnology), and CSIR-UGC NET for Ph.D. fellowship.",
    "Degree & Duration: 3-Year B.Sc in Genetics / Biotechnology + 2-Year M.Sc + 4–5 Year Ph.D. in Molecular Genetics.",
    "Future with AI: AI algorithms fold proteins and predict genetic disease risks from whole-genome scans, while geneticists pioneer cures using CRISPR gene editing."
  ],
  "questions": [
    {
      "id": 1,
      "roadmapStage": "Stage 1: After 10th Class",
      "category": "Choosing Branch / Stream",
      "categoryColor": "bg-blue-100 text-blue-900 border-blue-300",
      "question": "When you pass Class 10, which Intermediate (10+2) stream should you choose to become a Geneticist & Biotech Researcher?",
      "options": [
        {
          "text": "Any irrelevant vocational stream without checking eligibility"
        },
        {
          "text": "Compulsory BiPC (Biology, Physics, Chemistry) in Class 11-12 Intermediate"
        },
        {
          "text": "Drop out of school after Class 10"
        },
        {
          "text": "Only study arts without required core subjects"
        }
      ],
      "correctIndex": 1,
      "explanation": "Compulsory BiPC (Biology, Physics, Chemistry) in Class 11-12 Intermediate. Meeting the right stream criteria in 11th and 12th is the vital first step on this roadmap!",
      "proTip": "Check the exact entrance eligibility early in 10th class so you pick your Intermediate stream with 100% confidence!"
    },
    {
      "id": 2,
      "roadmapStage": "Stage 2: Training & Degree Duration",
      "category": "Course Duration",
      "categoryColor": "bg-emerald-100 text-emerald-900 border-emerald-300",
      "question": "How much time does it take to complete the foundational qualification and training for this career pathway?",
      "options": [
        {
          "text": "Just a 1-day certificate course"
        },
        {
          "text": "15 years of only theoretical reading"
        },
        {
          "text": "3-Year B.Sc in Genetics / Biotechnology + 2-Year M.Sc + 4–5 Year Ph.D. in Molecular Genetics"
        },
        {
          "text": "6 weeks of online videos"
        }
      ],
      "correctIndex": 2,
      "explanation": "This professional pathway takes 3-Year B.Sc in Genetics / Biotechnology + 2-Year M.Sc + 4–5 Year Ph.D. in Molecular Genetics. True professional expertise requires structured degrees, lab experiments, and hands-on practical postings.",
      "proTip": "Focus on mastering concepts every single year rather than rushing through degrees!"
    },
    {
      "id": 3,
      "roadmapStage": "Stage 3: Gateway Degree & Entrance Exam",
      "category": "College Degree & Exams",
      "categoryColor": "bg-indigo-100 text-indigo-900 border-indigo-300",
      "question": "Which key examination or degree gateway is central to entering this professional career in India?",
      "options": [
        {
          "text": "CUET UG / PG, GAT-B (Graduate Aptitude Test - Biotechnology), and CSIR-UGC NET for Ph.D. fellowship"
        },
        {
          "text": "A random lucky lottery draw"
        },
        {
          "text": "Paying an unauthorized private middleman"
        },
        {
          "text": "Only writing a high school spelling test"
        }
      ],
      "correctIndex": 0,
      "explanation": "CUET UG / PG, GAT-B (Graduate Aptitude Test - Biotechnology), and CSIR-UGC NET for Ph.D. fellowship. Clearing standard national or state entrances guarantees transparent admission into top accredited colleges and government commissions.",
      "proTip": "Previous years' question papers and conceptual NCERT mastery are your best friends when preparing for this gateway!"
    },
    {
      "id": 4,
      "roadmapStage": "Stage 4: School Foundations",
      "category": "School Subjects",
      "categoryColor": "bg-amber-100 text-amber-900 border-amber-300",
      "question": "Which subject that you study right now in 8th, 9th, or 10th class builds the deepest foundation for this career?",
      "options": [
        {
          "text": "Memorizing movie trivia"
        },
        {
          "text": "Playing mobile games during study hours"
        },
        {
          "text": "Biology (Mendelian inheritance, DNA double helix, cell division, genes) and Chemistry"
        },
        {
          "text": "Sleeping in the classroom"
        }
      ],
      "correctIndex": 2,
      "explanation": "Biology (Mendelian inheritance, DNA double helix, cell division, genes) and Chemistry. What you are learning in school right now directly connects to this field!",
      "proTip": "Pay extra attention when your teacher covers these topics in class — you are building the foundation of your future profession!"
    },
    {
      "id": 5,
      "roadmapStage": "Stage 5: High School Habits to Build",
      "category": "Skills to Build",
      "categoryColor": "bg-rose-100 text-rose-900 border-rose-300",
      "question": "As an 8th, 9th, or 10th student, what real habit should you start cultivating to prepare for this profession?",
      "options": [
        {
          "text": "Fascination with heredity (why children look like parents), reading science magazines on DNA, and biology lab experiments"
        },
        {
          "text": "Refusing to do school assignments on time"
        },
        {
          "text": "Spending 6 hours a day arguing on social media"
        },
        {
          "text": "Giving up whenever a lesson feels slightly challenging"
        }
      ],
      "correctIndex": 0,
      "explanation": "Fascination with heredity (why children look like parents), reading science magazines on DNA, and biology lab experiments. Great professionals develop their discipline, focus, and core habits long before they enter college.",
      "proTip": "Start with just 20 minutes a day practicing this habit — consistency over weeks and months creates champions!"
    },
    {
      "id": 6,
      "roadmapStage": "Stage 6: Premier Institutions & Regulators",
      "category": "College Degree & Exams",
      "categoryColor": "bg-purple-100 text-purple-900 border-purple-300",
      "question": "Which premier institutions or statutory bodies are recognized across India for this professional discipline?",
      "options": [
        {
          "text": "Unrecognized fake coaching websites with no campus"
        },
        {
          "text": "Centre for Cellular and Molecular Biology (CCMB Hyderabad), IISc Bangalore, and Rajiv Gandhi Centre for Biotechnology (RGCB)"
        },
        {
          "text": "Local amusement parks"
        },
        {
          "text": "Private bus booking counters"
        }
      ],
      "correctIndex": 1,
      "explanation": "Centre for Cellular and Molecular Biology (CCMB Hyderabad), IISc Bangalore, and Rajiv Gandhi Centre for Biotechnology (RGCB). Studying in premier recognized institutions gives you top laboratory facilities, experienced mentors, and world-class campus recruitment.",
      "proTip": "Visit the official websites of these premier institutes online — seeing campus photos and student projects will inspire you!"
    },
    {
      "id": 7,
      "roadmapStage": "Stage 7: Everyday Role & Purpose",
      "category": "Skills to Build",
      "categoryColor": "bg-teal-100 text-teal-900 border-teal-300",
      "question": "What is the real day-to-day mission and responsibility of professionals working in this field?",
      "options": [
        {
          "text": "Sitting idle in an empty room with zero responsibilities"
        },
        {
          "text": "Taking shortcuts and breaking ethics"
        },
        {
          "text": "Extracting and sequencing DNA in sterile laboratories, analyzing genetic mutations causing hereditary diseases, and testing gene therapies"
        },
        {
          "text": "Only showing up once a year"
        }
      ],
      "correctIndex": 2,
      "explanation": "Extracting and sequencing DNA in sterile laboratories, analyzing genetic mutations causing hereditary diseases, and testing gene therapies. Professionals in this field play a critical role in strengthening society, public welfare, and national progress.",
      "proTip": "A career is not just a monthly paycheck — it is your daily opportunity to solve meaningful problems and make people's lives better!"
    },
    {
      "id": 8,
      "roadmapStage": "Stage 8: Career Ladder & Promotion",
      "category": "Course Duration",
      "categoryColor": "bg-indigo-100 text-indigo-900 border-indigo-300",
      "question": "As you gain experience and demonstrate exceptional leadership, what does your long-term career growth path look like?",
      "options": [
        {
          "text": "Research Fellow -> Senior Scientist at CCMB / Pharma MNC -> Principal Investigator -> Director of Genomics Research Institute"
        },
        {
          "text": "Staying in an entry-level trainee role forever with no advancement"
        },
        {
          "text": "Demotions every year"
        },
        {
          "text": "Being fired immediately without reason"
        }
      ],
      "correctIndex": 0,
      "explanation": "Research Fellow -> Senior Scientist at CCMB / Pharma MNC -> Principal Investigator -> Director of Genomics Research Institute. With consistent hard work, continuous learning, and integrity, you can rise to senior national leadership positions!",
      "proTip": "Never stop learning new skills — the best leaders in this field keep updating their knowledge throughout their lives!"
    },
    {
      "id": 9,
      "roadmapStage": "Stage 9: Mindset & Professional Ethics",
      "category": "Skills to Build",
      "categoryColor": "bg-amber-100 text-amber-900 border-amber-300",
      "question": "What is the single most vital quality that earns deep respect and enduring trust in this profession?",
      "options": [
        {
          "text": "Showing off with arrogance"
        },
        {
          "text": "High personal integrity, empathy for citizens, and relentless dedication to quality"
        },
        {
          "text": "Blaming others for your own mistakes"
        },
        {
          "text": "Accepting bribes and cutting safety corners"
        }
      ],
      "correctIndex": 1,
      "explanation": "Integrity and genuine dedication to quality are irreplaceable! In every high-impact career, your reputation and honest character are your greatest assets.",
      "proTip": "Always be honest in your school tests and assignments — true character is built through small choices made every day."
    },
    {
      "id": 10,
      "roadmapStage": "Stage 10: Future World & AI Collaboration",
      "category": "AI & Future World",
      "categoryColor": "bg-purple-100 text-purple-900 border-purple-300",
      "question": "How will modern Artificial Intelligence (AI) and technology assist human professionals in this career over the next decade?",
      "options": [
        {
          "text": "AI will eliminate the entire profession and humans will have no jobs"
        },
        {
          "text": "AI algorithms fold proteins and predict genetic disease risks from whole-genome scans, while geneticists pioneer cures using CRISPR gene editing"
        },
        {
          "text": "Computers will be outlawed in this profession"
        },
        {
          "text": "Nothing will change from 200 years ago"
        }
      ],
      "correctIndex": 1,
      "explanation": "AI algorithms fold proteins and predict genetic disease risks from whole-genome scans, while geneticists pioneer cures using CRISPR gene editing. AI is a powerful assistant, but human empathy, critical judgment, moral courage, and physical action will always lead the future!",
      "proTip": "Embrace modern technology as a co-pilot, while building your unique human strengths of empathy, creativity, and leadership!"
    }
  ]
},

  "income-tax-officer": {
  "id": "income-tax-officer",
  "title": "Income Tax Officer (SSC CGL) Roadmap Quiz",
  "subtitle": "A student-friendly quiz for 8th, 9th & 10th classes: SSC CGL exam, CBDT direct taxes, financial investigation & central civil service power!",
  "icon": "💼",
  "badge": "For Classes 8th – 10th",
  "gradient": "from-blue-800 via-slate-800 to-stone-900",
  "accentColor": "#1E3A8A",
  "description": "Want to become a Income Tax Officer (SSC CGL)? Test if you know the exact roadmap: stream choices after 10th, required degrees, key entrance exams, and skills needed to excel!",
  "totalQuestions": 10,
  "blueprintUrl": "/career-reports?career=income-tax-officer",
  "cheatSheet": [
    "Class 8-10: Focus on Mathematics (Commercial Arithmetic, Percentages, Ratios), English comprehension, and General Knowledge and build Solving quick mental math equations.",
    "After 10th: Choose Any Intermediate stream (Commerce CEC/MEC, Science MPC, or Arts HEC) + Any recognized Bachelor's Degree.",
    "Key Gateways: Prepare for Staff Selection Commission Combined Graduate Level (SSC CGL) Examination.",
    "Degree & Duration: 3–4 Year Bachelor Degree + 1 Year dedicated SSC CGL preparation + 6 Months Direct Tax Training at DTRTI.",
    "Future with AI: AI tax algorithms detect fraudulent banking transactions and shell company networks automatically, while officers lead field investigations."
  ],
  "questions": [
    {
      "id": 1,
      "roadmapStage": "Stage 1: After 10th Class",
      "category": "Choosing Branch / Stream",
      "categoryColor": "bg-blue-100 text-blue-900 border-blue-300",
      "question": "When you pass Class 10, which Intermediate (10+2) stream should you choose to become a Income Tax Officer (SSC CGL)?",
      "options": [
        {
          "text": "Any irrelevant vocational stream without checking eligibility"
        },
        {
          "text": "Any Intermediate stream (Commerce CEC/MEC, Science MPC, or Arts HEC) + Any recognized Bachelor's Degree"
        },
        {
          "text": "Drop out of school after Class 10"
        },
        {
          "text": "Only study arts without required core subjects"
        }
      ],
      "correctIndex": 1,
      "explanation": "Any Intermediate stream (Commerce CEC/MEC, Science MPC, or Arts HEC) + Any recognized Bachelor's Degree. Meeting the right stream criteria in 11th and 12th is the vital first step on this roadmap!",
      "proTip": "Check the exact entrance eligibility early in 10th class so you pick your Intermediate stream with 100% confidence!"
    },
    {
      "id": 2,
      "roadmapStage": "Stage 2: Training & Degree Duration",
      "category": "Course Duration",
      "categoryColor": "bg-emerald-100 text-emerald-900 border-emerald-300",
      "question": "How much time does it take to complete the foundational qualification and training for this career pathway?",
      "options": [
        {
          "text": "Just a 1-day certificate course"
        },
        {
          "text": "15 years of only theoretical reading"
        },
        {
          "text": "3–4 Year Bachelor Degree + 1 Year dedicated SSC CGL preparation + 6 Months Direct Tax Training at DTRTI"
        },
        {
          "text": "6 weeks of online videos"
        }
      ],
      "correctIndex": 2,
      "explanation": "This professional pathway takes 3–4 Year Bachelor Degree + 1 Year dedicated SSC CGL preparation + 6 Months Direct Tax Training at DTRTI. True professional expertise requires structured degrees, lab experiments, and hands-on practical postings.",
      "proTip": "Focus on mastering concepts every single year rather than rushing through degrees!"
    },
    {
      "id": 3,
      "roadmapStage": "Stage 3: Gateway Degree & Entrance Exam",
      "category": "College Degree & Exams",
      "categoryColor": "bg-indigo-100 text-indigo-900 border-indigo-300",
      "question": "Which key examination or degree gateway is central to entering this professional career in India?",
      "options": [
        {
          "text": "Staff Selection Commission Combined Graduate Level (SSC CGL) Examination — Tier 1 & Tier 2"
        },
        {
          "text": "A random lucky lottery draw"
        },
        {
          "text": "Paying an unauthorized private middleman"
        },
        {
          "text": "Only writing a high school spelling test"
        }
      ],
      "correctIndex": 0,
      "explanation": "Staff Selection Commission Combined Graduate Level (SSC CGL) Examination — Tier 1 & Tier 2. Clearing standard national or state entrances guarantees transparent admission into top accredited colleges and government commissions.",
      "proTip": "Previous years' question papers and conceptual NCERT mastery are your best friends when preparing for this gateway!"
    },
    {
      "id": 4,
      "roadmapStage": "Stage 4: School Foundations",
      "category": "School Subjects",
      "categoryColor": "bg-amber-100 text-amber-900 border-amber-300",
      "question": "Which subject that you study right now in 8th, 9th, or 10th class builds the deepest foundation for this career?",
      "options": [
        {
          "text": "Memorizing movie trivia"
        },
        {
          "text": "Playing mobile games during study hours"
        },
        {
          "text": "Mathematics (Commercial Arithmetic, Percentages, Ratios), English comprehension, and General Knowledge"
        },
        {
          "text": "Sleeping in the classroom"
        }
      ],
      "correctIndex": 2,
      "explanation": "Mathematics (Commercial Arithmetic, Percentages, Ratios), English comprehension, and General Knowledge. What you are learning in school right now directly connects to this field!",
      "proTip": "Pay extra attention when your teacher covers these topics in class — you are building the foundation of your future profession!"
    },
    {
      "id": 5,
      "roadmapStage": "Stage 5: High School Habits to Build",
      "category": "Skills to Build",
      "categoryColor": "bg-rose-100 text-rose-900 border-rose-300",
      "question": "As an 8th, 9th, or 10th student, what real habit should you start cultivating to prepare for this profession?",
      "options": [
        {
          "text": "Solving quick mental math equations, following national budget news, and strong moral honesty"
        },
        {
          "text": "Refusing to do school assignments on time"
        },
        {
          "text": "Spending 6 hours a day arguing on social media"
        },
        {
          "text": "Giving up whenever a lesson feels slightly challenging"
        }
      ],
      "correctIndex": 0,
      "explanation": "Solving quick mental math equations, following national budget news, and strong moral honesty. Great professionals develop their discipline, focus, and core habits long before they enter college.",
      "proTip": "Start with just 20 minutes a day practicing this habit — consistency over weeks and months creates champions!"
    },
    {
      "id": 6,
      "roadmapStage": "Stage 6: Premier Institutions & Regulators",
      "category": "College Degree & Exams",
      "categoryColor": "bg-purple-100 text-purple-900 border-purple-300",
      "question": "Which premier institutions or statutory bodies are recognized across India for this professional discipline?",
      "options": [
        {
          "text": "Unrecognized fake coaching websites with no campus"
        },
        {
          "text": "Direct Taxes Regional Training Institute (DTRTI) and Central Board of Direct Taxes (CBDT)"
        },
        {
          "text": "Local amusement parks"
        },
        {
          "text": "Private bus booking counters"
        }
      ],
      "correctIndex": 1,
      "explanation": "Direct Taxes Regional Training Institute (DTRTI) and Central Board of Direct Taxes (CBDT). Studying in premier recognized institutions gives you top laboratory facilities, experienced mentors, and world-class campus recruitment.",
      "proTip": "Visit the official websites of these premier institutes online — seeing campus photos and student projects will inspire you!"
    },
    {
      "id": 7,
      "roadmapStage": "Stage 7: Everyday Role & Purpose",
      "category": "Skills to Build",
      "categoryColor": "bg-teal-100 text-teal-900 border-teal-300",
      "question": "What is the real day-to-day mission and responsibility of professionals working in this field?",
      "options": [
        {
          "text": "Sitting idle in an empty room with zero responsibilities"
        },
        {
          "text": "Taking shortcuts and breaking ethics"
        },
        {
          "text": "Auditing corporate financial tax returns, detecting black money and financial evasion, conducting search & seizure raids, and securing public revenue"
        },
        {
          "text": "Only showing up once a year"
        }
      ],
      "correctIndex": 2,
      "explanation": "Auditing corporate financial tax returns, detecting black money and financial evasion, conducting search & seizure raids, and securing public revenue. Professionals in this field play a critical role in strengthening society, public welfare, and national progress.",
      "proTip": "A career is not just a monthly paycheck — it is your daily opportunity to solve meaningful problems and make people's lives better!"
    },
    {
      "id": 8,
      "roadmapStage": "Stage 8: Career Ladder & Promotion",
      "category": "Course Duration",
      "categoryColor": "bg-indigo-100 text-indigo-900 border-indigo-300",
      "question": "As you gain experience and demonstrate exceptional leadership, what does your long-term career growth path look like?",
      "options": [
        {
          "text": "Income Tax Inspector (ITI) -> Income Tax Officer (ITO - Gazetted) -> Assistant Commissioner of Income Tax (IRS cadre)"
        },
        {
          "text": "Staying in an entry-level trainee role forever with no advancement"
        },
        {
          "text": "Demotions every year"
        },
        {
          "text": "Being fired immediately without reason"
        }
      ],
      "correctIndex": 0,
      "explanation": "Income Tax Inspector (ITI) -> Income Tax Officer (ITO - Gazetted) -> Assistant Commissioner of Income Tax (IRS cadre). With consistent hard work, continuous learning, and integrity, you can rise to senior national leadership positions!",
      "proTip": "Never stop learning new skills — the best leaders in this field keep updating their knowledge throughout their lives!"
    },
    {
      "id": 9,
      "roadmapStage": "Stage 9: Mindset & Professional Ethics",
      "category": "Skills to Build",
      "categoryColor": "bg-amber-100 text-amber-900 border-amber-300",
      "question": "What is the single most vital quality that earns deep respect and enduring trust in this profession?",
      "options": [
        {
          "text": "Showing off with arrogance"
        },
        {
          "text": "High personal integrity, empathy for citizens, and relentless dedication to quality"
        },
        {
          "text": "Blaming others for your own mistakes"
        },
        {
          "text": "Accepting bribes and cutting safety corners"
        }
      ],
      "correctIndex": 1,
      "explanation": "Integrity and genuine dedication to quality are irreplaceable! In every high-impact career, your reputation and honest character are your greatest assets.",
      "proTip": "Always be honest in your school tests and assignments — true character is built through small choices made every day."
    },
    {
      "id": 10,
      "roadmapStage": "Stage 10: Future World & AI Collaboration",
      "category": "AI & Future World",
      "categoryColor": "bg-purple-100 text-purple-900 border-purple-300",
      "question": "How will modern Artificial Intelligence (AI) and technology assist human professionals in this career over the next decade?",
      "options": [
        {
          "text": "AI will eliminate the entire profession and humans will have no jobs"
        },
        {
          "text": "AI tax algorithms detect fraudulent banking transactions and shell company networks automatically, while officers lead field investigations"
        },
        {
          "text": "Computers will be outlawed in this profession"
        },
        {
          "text": "Nothing will change from 200 years ago"
        }
      ],
      "correctIndex": 1,
      "explanation": "AI tax algorithms detect fraudulent banking transactions and shell company networks automatically, while officers lead field investigations. AI is a powerful assistant, but human empathy, critical judgment, moral courage, and physical action will always lead the future!",
      "proTip": "Embrace modern technology as a co-pilot, while building your unique human strengths of empathy, creativity, and leadership!"
    }
  ]
},

  "railway-jobs": {
  "id": "railway-jobs",
  "title": "Indian Railways Officer & Engineer Roadmap Quiz",
  "subtitle": "A student-friendly quiz for 8th, 9th & 10th classes: RRB NTPC & ALP, high-speed Vande Bharat trains, track engineering & railway administration!",
  "icon": "🚆",
  "badge": "For Classes 8th – 10th",
  "gradient": "from-red-700 via-amber-800 to-stone-900",
  "accentColor": "#B91C1C",
  "description": "Want to become a Indian Railways Officer & Engineer? Test if you know the exact roadmap: stream choices after 10th, required degrees, key entrance exams, and skills needed to excel!",
  "totalQuestions": 10,
  "blueprintUrl": "/career-reports?career=railway-jobs",
  "cheatSheet": [
    "Class 8-10: Focus on General Science (Physics mechanics, electricity), Mathematics (Speed, Time and build Solving time-and-distance train arithmetic problems.",
    "After 10th: Choose 10th + ITI (for Assistant Loco Pilot / Technician) OR Intermediate MPC / Polytechnic Diploma / Any Bachelor's Degree.",
    "Key Gateways: Prepare for Railway Recruitment Board (RRB) Exams.",
    "Degree & Duration: Degree or Diploma + RRB CBT-1 & CBT-2 + Strict Medical Test + 6–12 Months Training at Zonal Railway Training Institute (ZRTI).",
    "Future with AI: KAVACH automatic train protection and AI track monitoring prevent collisions, while railway professionals manage millions of passenger journeys daily."
  ],
  "questions": [
    {
      "id": 1,
      "roadmapStage": "Stage 1: After 10th Class",
      "category": "Choosing Branch / Stream",
      "categoryColor": "bg-blue-100 text-blue-900 border-blue-300",
      "question": "When you pass Class 10, which Intermediate (10+2) stream should you choose to become a Indian Railways Officer & Engineer?",
      "options": [
        {
          "text": "Any irrelevant vocational stream without checking eligibility"
        },
        {
          "text": "10th + ITI (for Assistant Loco Pilot / Technician) OR Intermediate MPC / Polytechnic Diploma / Any Bachelor's Degree"
        },
        {
          "text": "Drop out of school after Class 10"
        },
        {
          "text": "Only study arts without required core subjects"
        }
      ],
      "correctIndex": 1,
      "explanation": "10th + ITI (for Assistant Loco Pilot / Technician) OR Intermediate MPC / Polytechnic Diploma / Any Bachelor's Degree. Meeting the right stream criteria in 11th and 12th is the vital first step on this roadmap!",
      "proTip": "Check the exact entrance eligibility early in 10th class so you pick your Intermediate stream with 100% confidence!"
    },
    {
      "id": 2,
      "roadmapStage": "Stage 2: Training & Degree Duration",
      "category": "Course Duration",
      "categoryColor": "bg-emerald-100 text-emerald-900 border-emerald-300",
      "question": "How much time does it take to complete the foundational qualification and training for this career pathway?",
      "options": [
        {
          "text": "Just a 1-day certificate course"
        },
        {
          "text": "15 years of only theoretical reading"
        },
        {
          "text": "Degree or Diploma + RRB CBT-1 & CBT-2 + Strict Medical Test + 6–12 Months Training at Zonal Railway Training Institute (ZRTI)"
        },
        {
          "text": "6 weeks of online videos"
        }
      ],
      "correctIndex": 2,
      "explanation": "This professional pathway takes Degree or Diploma + RRB CBT-1 & CBT-2 + Strict Medical Test + 6–12 Months Training at Zonal Railway Training Institute (ZRTI). True professional expertise requires structured degrees, lab experiments, and hands-on practical postings.",
      "proTip": "Focus on mastering concepts every single year rather than rushing through degrees!"
    },
    {
      "id": 3,
      "roadmapStage": "Stage 3: Gateway Degree & Entrance Exam",
      "category": "College Degree & Exams",
      "categoryColor": "bg-indigo-100 text-indigo-900 border-indigo-300",
      "question": "Which key examination or degree gateway is central to entering this professional career in India?",
      "options": [
        {
          "text": "Railway Recruitment Board (RRB) Exams — RRB NTPC (Non-Technical), RRB ALP (Loco Pilot), or RRB JE (Junior Engineer)"
        },
        {
          "text": "A random lucky lottery draw"
        },
        {
          "text": "Paying an unauthorized private middleman"
        },
        {
          "text": "Only writing a high school spelling test"
        }
      ],
      "correctIndex": 0,
      "explanation": "Railway Recruitment Board (RRB) Exams — RRB NTPC (Non-Technical), RRB ALP (Loco Pilot), or RRB JE (Junior Engineer). Clearing standard national or state entrances guarantees transparent admission into top accredited colleges and government commissions.",
      "proTip": "Previous years' question papers and conceptual NCERT mastery are your best friends when preparing for this gateway!"
    },
    {
      "id": 4,
      "roadmapStage": "Stage 4: School Foundations",
      "category": "School Subjects",
      "categoryColor": "bg-amber-100 text-amber-900 border-amber-300",
      "question": "Which subject that you study right now in 8th, 9th, or 10th class builds the deepest foundation for this career?",
      "options": [
        {
          "text": "Memorizing movie trivia"
        },
        {
          "text": "Playing mobile games during study hours"
        },
        {
          "text": "General Science (Physics mechanics, electricity), Mathematics (Speed, Time & Distance), and General Awareness"
        },
        {
          "text": "Sleeping in the classroom"
        }
      ],
      "correctIndex": 2,
      "explanation": "General Science (Physics mechanics, electricity), Mathematics (Speed, Time & Distance), and General Awareness. What you are learning in school right now directly connects to this field!",
      "proTip": "Pay extra attention when your teacher covers these topics in class — you are building the foundation of your future profession!"
    },
    {
      "id": 5,
      "roadmapStage": "Stage 5: High School Habits to Build",
      "category": "Skills to Build",
      "categoryColor": "bg-rose-100 text-rose-900 border-rose-300",
      "question": "As an 8th, 9th, or 10th student, what real habit should you start cultivating to prepare for this profession?",
      "options": [
        {
          "text": "Solving time-and-distance train arithmetic problems, understanding railway network maps, and strict punctuality habits"
        },
        {
          "text": "Refusing to do school assignments on time"
        },
        {
          "text": "Spending 6 hours a day arguing on social media"
        },
        {
          "text": "Giving up whenever a lesson feels slightly challenging"
        }
      ],
      "correctIndex": 0,
      "explanation": "Solving time-and-distance train arithmetic problems, understanding railway network maps, and strict punctuality habits. Great professionals develop their discipline, focus, and core habits long before they enter college.",
      "proTip": "Start with just 20 minutes a day practicing this habit — consistency over weeks and months creates champions!"
    },
    {
      "id": 6,
      "roadmapStage": "Stage 6: Premier Institutions & Regulators",
      "category": "College Degree & Exams",
      "categoryColor": "bg-purple-100 text-purple-900 border-purple-300",
      "question": "Which premier institutions or statutory bodies are recognized across India for this professional discipline?",
      "options": [
        {
          "text": "Unrecognized fake coaching websites with no campus"
        },
        {
          "text": "Railway Recruitment Boards (RRB) across all Indian Railway zones and Indian Railway Institute of Mechanical & Electrical Engineering (IRIMEE)"
        },
        {
          "text": "Local amusement parks"
        },
        {
          "text": "Private bus booking counters"
        }
      ],
      "correctIndex": 1,
      "explanation": "Railway Recruitment Boards (RRB) across all Indian Railway zones and Indian Railway Institute of Mechanical & Electrical Engineering (IRIMEE). Studying in premier recognized institutions gives you top laboratory facilities, experienced mentors, and world-class campus recruitment.",
      "proTip": "Visit the official websites of these premier institutes online — seeing campus photos and student projects will inspire you!"
    },
    {
      "id": 7,
      "roadmapStage": "Stage 7: Everyday Role & Purpose",
      "category": "Skills to Build",
      "categoryColor": "bg-teal-100 text-teal-900 border-teal-300",
      "question": "What is the real day-to-day mission and responsibility of professionals working in this field?",
      "options": [
        {
          "text": "Sitting idle in an empty room with zero responsibilities"
        },
        {
          "text": "Taking shortcuts and breaking ethics"
        },
        {
          "text": "Operating high-speed locomotives (Vande Bharat), managing station traffic signals, maintaining railway electric tracks, and passenger safety"
        },
        {
          "text": "Only showing up once a year"
        }
      ],
      "correctIndex": 2,
      "explanation": "Operating high-speed locomotives (Vande Bharat), managing station traffic signals, maintaining railway electric tracks, and passenger safety. Professionals in this field play a critical role in strengthening society, public welfare, and national progress.",
      "proTip": "A career is not just a monthly paycheck — it is your daily opportunity to solve meaningful problems and make people's lives better!"
    },
    {
      "id": 8,
      "roadmapStage": "Stage 8: Career Ladder & Promotion",
      "category": "Course Duration",
      "categoryColor": "bg-indigo-100 text-indigo-900 border-indigo-300",
      "question": "As you gain experience and demonstrate exceptional leadership, what does your long-term career growth path look like?",
      "options": [
        {
          "text": "Station Master / Assistant Loco Pilot -> Chief Controller / Loco Pilot Mail -> Divisional Operations Manager (DOM) -> Divisional Railway Manager (DRM)"
        },
        {
          "text": "Staying in an entry-level trainee role forever with no advancement"
        },
        {
          "text": "Demotions every year"
        },
        {
          "text": "Being fired immediately without reason"
        }
      ],
      "correctIndex": 0,
      "explanation": "Station Master / Assistant Loco Pilot -> Chief Controller / Loco Pilot Mail -> Divisional Operations Manager (DOM) -> Divisional Railway Manager (DRM). With consistent hard work, continuous learning, and integrity, you can rise to senior national leadership positions!",
      "proTip": "Never stop learning new skills — the best leaders in this field keep updating their knowledge throughout their lives!"
    },
    {
      "id": 9,
      "roadmapStage": "Stage 9: Mindset & Professional Ethics",
      "category": "Skills to Build",
      "categoryColor": "bg-amber-100 text-amber-900 border-amber-300",
      "question": "What is the single most vital quality that earns deep respect and enduring trust in this profession?",
      "options": [
        {
          "text": "Showing off with arrogance"
        },
        {
          "text": "High personal integrity, empathy for citizens, and relentless dedication to quality"
        },
        {
          "text": "Blaming others for your own mistakes"
        },
        {
          "text": "Accepting bribes and cutting safety corners"
        }
      ],
      "correctIndex": 1,
      "explanation": "Integrity and genuine dedication to quality are irreplaceable! In every high-impact career, your reputation and honest character are your greatest assets.",
      "proTip": "Always be honest in your school tests and assignments — true character is built through small choices made every day."
    },
    {
      "id": 10,
      "roadmapStage": "Stage 10: Future World & AI Collaboration",
      "category": "AI & Future World",
      "categoryColor": "bg-purple-100 text-purple-900 border-purple-300",
      "question": "How will modern Artificial Intelligence (AI) and technology assist human professionals in this career over the next decade?",
      "options": [
        {
          "text": "AI will eliminate the entire profession and humans will have no jobs"
        },
        {
          "text": "KAVACH automatic train protection and AI track monitoring prevent collisions, while railway professionals manage millions of passenger journeys daily"
        },
        {
          "text": "Computers will be outlawed in this profession"
        },
        {
          "text": "Nothing will change from 200 years ago"
        }
      ],
      "correctIndex": 1,
      "explanation": "KAVACH automatic train protection and AI track monitoring prevent collisions, while railway professionals manage millions of passenger journeys daily. AI is a powerful assistant, but human empathy, critical judgment, moral courage, and physical action will always lead the future!",
      "proTip": "Embrace modern technology as a co-pilot, while building your unique human strengths of empathy, creativity, and leadership!"
    }
  ]
},

  "speech-pathologist": {
  "id": "speech-pathologist",
  "title": "Speech-Language Pathologist & Audiologist Roadmap Quiz",
  "subtitle": "A student-friendly quiz for 8th, 9th & 10th classes: BASLP degree, stuttering therapy, cochlear hearing implants & helping children speak!",
  "icon": "🗣️",
  "badge": "For Classes 8th – 10th",
  "gradient": "from-teal-600 via-cyan-700 to-blue-900",
  "accentColor": "#0D9488",
  "description": "Want to become a Speech-Language Pathologist & Audiologist? Test if you know the exact roadmap: stream choices after 10th, required degrees, key entrance exams, and skills needed to excel!",
  "totalQuestions": 10,
  "blueprintUrl": "/career-reports?career=speech-pathologist",
  "cheatSheet": [
    "Class 8-10: Focus on Biology (human ear anatomy, vocal cords, brain speech centers), Physics (sound acoustics, frequencies), and English and build High patience.",
    "After 10th: Choose Compulsory BiPC (Biology) or MPC (with Physics & Chemistry) in Class 11-12 Intermediate.",
    "Key Gateways: Prepare for AIISH All India Entrance Examination, NEET, or State Paramedical CET.",
    "Degree & Duration: 4-Year Bachelor of Audiology & Speech-Language Pathology (BASLP) including 1-year clinical hospital internship.",
    "Future with AI: AI speech recognition apps assist daily home vocal therapy exercises, while certified speech pathologists provide compassionate human vocal therapy."
  ],
  "questions": [
    {
      "id": 1,
      "roadmapStage": "Stage 1: After 10th Class",
      "category": "Choosing Branch / Stream",
      "categoryColor": "bg-blue-100 text-blue-900 border-blue-300",
      "question": "When you pass Class 10, which Intermediate (10+2) stream should you choose to become a Speech-Language Pathologist & Audiologist?",
      "options": [
        {
          "text": "Any irrelevant vocational stream without checking eligibility"
        },
        {
          "text": "Compulsory BiPC (Biology) or MPC (with Physics & Chemistry) in Class 11-12 Intermediate"
        },
        {
          "text": "Drop out of school after Class 10"
        },
        {
          "text": "Only study arts without required core subjects"
        }
      ],
      "correctIndex": 1,
      "explanation": "Compulsory BiPC (Biology) or MPC (with Physics & Chemistry) in Class 11-12 Intermediate. Meeting the right stream criteria in 11th and 12th is the vital first step on this roadmap!",
      "proTip": "Check the exact entrance eligibility early in 10th class so you pick your Intermediate stream with 100% confidence!"
    },
    {
      "id": 2,
      "roadmapStage": "Stage 2: Training & Degree Duration",
      "category": "Course Duration",
      "categoryColor": "bg-emerald-100 text-emerald-900 border-emerald-300",
      "question": "How much time does it take to complete the foundational qualification and training for this career pathway?",
      "options": [
        {
          "text": "Just a 1-day certificate course"
        },
        {
          "text": "15 years of only theoretical reading"
        },
        {
          "text": "4-Year Bachelor of Audiology & Speech-Language Pathology (BASLP) including 1-year clinical hospital internship"
        },
        {
          "text": "6 weeks of online videos"
        }
      ],
      "correctIndex": 2,
      "explanation": "This professional pathway takes 4-Year Bachelor of Audiology & Speech-Language Pathology (BASLP) including 1-year clinical hospital internship. True professional expertise requires structured degrees, lab experiments, and hands-on practical postings.",
      "proTip": "Focus on mastering concepts every single year rather than rushing through degrees!"
    },
    {
      "id": 3,
      "roadmapStage": "Stage 3: Gateway Degree & Entrance Exam",
      "category": "College Degree & Exams",
      "categoryColor": "bg-indigo-100 text-indigo-900 border-indigo-300",
      "question": "Which key examination or degree gateway is central to entering this professional career in India?",
      "options": [
        {
          "text": "AIISH All India Entrance Examination, NEET, or State Paramedical CET"
        },
        {
          "text": "A random lucky lottery draw"
        },
        {
          "text": "Paying an unauthorized private middleman"
        },
        {
          "text": "Only writing a high school spelling test"
        }
      ],
      "correctIndex": 0,
      "explanation": "AIISH All India Entrance Examination, NEET, or State Paramedical CET. Clearing standard national or state entrances guarantees transparent admission into top accredited colleges and government commissions.",
      "proTip": "Previous years' question papers and conceptual NCERT mastery are your best friends when preparing for this gateway!"
    },
    {
      "id": 4,
      "roadmapStage": "Stage 4: School Foundations",
      "category": "School Subjects",
      "categoryColor": "bg-amber-100 text-amber-900 border-amber-300",
      "question": "Which subject that you study right now in 8th, 9th, or 10th class builds the deepest foundation for this career?",
      "options": [
        {
          "text": "Memorizing movie trivia"
        },
        {
          "text": "Playing mobile games during study hours"
        },
        {
          "text": "Biology (human ear anatomy, vocal cords, brain speech centers), Physics (sound acoustics, frequencies), and English"
        },
        {
          "text": "Sleeping in the classroom"
        }
      ],
      "correctIndex": 2,
      "explanation": "Biology (human ear anatomy, vocal cords, brain speech centers), Physics (sound acoustics, frequencies), and English. What you are learning in school right now directly connects to this field!",
      "proTip": "Pay extra attention when your teacher covers these topics in class — you are building the foundation of your future profession!"
    },
    {
      "id": 5,
      "roadmapStage": "Stage 5: High School Habits to Build",
      "category": "Skills to Build",
      "categoryColor": "bg-rose-100 text-rose-900 border-rose-300",
      "question": "As an 8th, 9th, or 10th student, what real habit should you start cultivating to prepare for this profession?",
      "options": [
        {
          "text": "High patience, gentle listening, clear pronunciation, and compassion for children or elderly facing communication difficulties"
        },
        {
          "text": "Refusing to do school assignments on time"
        },
        {
          "text": "Spending 6 hours a day arguing on social media"
        },
        {
          "text": "Giving up whenever a lesson feels slightly challenging"
        }
      ],
      "correctIndex": 0,
      "explanation": "High patience, gentle listening, clear pronunciation, and compassion for children or elderly facing communication difficulties. Great professionals develop their discipline, focus, and core habits long before they enter college.",
      "proTip": "Start with just 20 minutes a day practicing this habit — consistency over weeks and months creates champions!"
    },
    {
      "id": 6,
      "roadmapStage": "Stage 6: Premier Institutions & Regulators",
      "category": "College Degree & Exams",
      "categoryColor": "bg-purple-100 text-purple-900 border-purple-300",
      "question": "Which premier institutions or statutory bodies are recognized across India for this professional discipline?",
      "options": [
        {
          "text": "Unrecognized fake coaching websites with no campus"
        },
        {
          "text": "All India Institute of Speech and Hearing (AIISH Mysore), Ali Yavar Jung National Institute (AYJNISHD Mumbai)"
        },
        {
          "text": "Local amusement parks"
        },
        {
          "text": "Private bus booking counters"
        }
      ],
      "correctIndex": 1,
      "explanation": "All India Institute of Speech and Hearing (AIISH Mysore), Ali Yavar Jung National Institute (AYJNISHD Mumbai). Studying in premier recognized institutions gives you top laboratory facilities, experienced mentors, and world-class campus recruitment.",
      "proTip": "Visit the official websites of these premier institutes online — seeing campus photos and student projects will inspire you!"
    },
    {
      "id": 7,
      "roadmapStage": "Stage 7: Everyday Role & Purpose",
      "category": "Skills to Build",
      "categoryColor": "bg-teal-100 text-teal-900 border-teal-300",
      "question": "What is the real day-to-day mission and responsibility of professionals working in this field?",
      "options": [
        {
          "text": "Sitting idle in an empty room with zero responsibilities"
        },
        {
          "text": "Taking shortcuts and breaking ethics"
        },
        {
          "text": "Helping young children overcome stammering and speech delays, fitting advanced digital hearing aids, and rehabilitating stroke patients"
        },
        {
          "text": "Only showing up once a year"
        }
      ],
      "correctIndex": 2,
      "explanation": "Helping young children overcome stammering and speech delays, fitting advanced digital hearing aids, and rehabilitating stroke patients. Professionals in this field play a critical role in strengthening society, public welfare, and national progress.",
      "proTip": "A career is not just a monthly paycheck — it is your daily opportunity to solve meaningful problems and make people's lives better!"
    },
    {
      "id": 8,
      "roadmapStage": "Stage 8: Career Ladder & Promotion",
      "category": "Course Duration",
      "categoryColor": "bg-indigo-100 text-indigo-900 border-indigo-300",
      "question": "As you gain experience and demonstrate exceptional leadership, what does your long-term career growth path look like?",
      "options": [
        {
          "text": "Clinical Speech Therapist -> Senior Audiology Specialist in Super-Specialty Hospitals -> Private Speech & Hearing Clinic Director"
        },
        {
          "text": "Staying in an entry-level trainee role forever with no advancement"
        },
        {
          "text": "Demotions every year"
        },
        {
          "text": "Being fired immediately without reason"
        }
      ],
      "correctIndex": 0,
      "explanation": "Clinical Speech Therapist -> Senior Audiology Specialist in Super-Specialty Hospitals -> Private Speech & Hearing Clinic Director. With consistent hard work, continuous learning, and integrity, you can rise to senior national leadership positions!",
      "proTip": "Never stop learning new skills — the best leaders in this field keep updating their knowledge throughout their lives!"
    },
    {
      "id": 9,
      "roadmapStage": "Stage 9: Mindset & Professional Ethics",
      "category": "Skills to Build",
      "categoryColor": "bg-amber-100 text-amber-900 border-amber-300",
      "question": "What is the single most vital quality that earns deep respect and enduring trust in this profession?",
      "options": [
        {
          "text": "Showing off with arrogance"
        },
        {
          "text": "High personal integrity, empathy for citizens, and relentless dedication to quality"
        },
        {
          "text": "Blaming others for your own mistakes"
        },
        {
          "text": "Accepting bribes and cutting safety corners"
        }
      ],
      "correctIndex": 1,
      "explanation": "Integrity and genuine dedication to quality are irreplaceable! In every high-impact career, your reputation and honest character are your greatest assets.",
      "proTip": "Always be honest in your school tests and assignments — true character is built through small choices made every day."
    },
    {
      "id": 10,
      "roadmapStage": "Stage 10: Future World & AI Collaboration",
      "category": "AI & Future World",
      "categoryColor": "bg-purple-100 text-purple-900 border-purple-300",
      "question": "How will modern Artificial Intelligence (AI) and technology assist human professionals in this career over the next decade?",
      "options": [
        {
          "text": "AI will eliminate the entire profession and humans will have no jobs"
        },
        {
          "text": "AI speech recognition apps assist daily home vocal therapy exercises, while certified speech pathologists provide compassionate human vocal therapy"
        },
        {
          "text": "Computers will be outlawed in this profession"
        },
        {
          "text": "Nothing will change from 200 years ago"
        }
      ],
      "correctIndex": 1,
      "explanation": "AI speech recognition apps assist daily home vocal therapy exercises, while certified speech pathologists provide compassionate human vocal therapy. AI is a powerful assistant, but human empathy, critical judgment, moral courage, and physical action will always lead the future!",
      "proTip": "Embrace modern technology as a co-pilot, while building your unique human strengths of empathy, creativity, and leadership!"
    }
  ]
},

  "yoga-doctor": {
  "id": "yoga-doctor",
  "title": "Yoga & Naturopathy Doctor (BNYS) Roadmap Quiz",
  "subtitle": "A student-friendly quiz for 8th, 9th & 10th classes: 5.5-year BNYS medical degree, natural disease reversal, acupuncture & AYUSH wellness!",
  "icon": "🧘",
  "badge": "For Classes 8th – 10th",
  "gradient": "from-emerald-600 via-teal-700 to-amber-900",
  "accentColor": "#059669",
  "description": "Want to become a Yoga & Naturopathy Doctor (BNYS)? Test if you know the exact roadmap: stream choices after 10th, required degrees, key entrance exams, and skills needed to excel!",
  "totalQuestions": 10,
  "blueprintUrl": "/career-reports?career=yoga-doctor",
  "cheatSheet": [
    "Class 8-10: Focus on Biology (human anatomy, physiology, preventive health, metabolism), Chemistry, and Physical Education and build Practicing morning yoga asanas and pranayama.",
    "After 10th: Choose Compulsory BiPC (Biology, Physics, Chemistry) in Class 11-12 Intermediate with minimum 50% marks.",
    "Key Gateways: Prepare for NEET-UG (AYUSH Quota) or State AYUSH Medical Counseling.",
    "Degree & Duration: 5.5 Years BNYS (Bachelor of Naturopathy & Yogic Sciences including 1 full year of compulsory rotatory medical internship).",
    "Future with AI: Smart health trackers monitor patient vital biometrics, while BNYS doctors guide holistic natural disease reversal without toxic side effects."
  ],
  "questions": [
    {
      "id": 1,
      "roadmapStage": "Stage 1: After 10th Class",
      "category": "Choosing Branch / Stream",
      "categoryColor": "bg-blue-100 text-blue-900 border-blue-300",
      "question": "When you pass Class 10, which Intermediate (10+2) stream should you choose to become a Yoga & Naturopathy Doctor (BNYS)?",
      "options": [
        {
          "text": "Any irrelevant vocational stream without checking eligibility"
        },
        {
          "text": "Compulsory BiPC (Biology, Physics, Chemistry) in Class 11-12 Intermediate with minimum 50% marks"
        },
        {
          "text": "Drop out of school after Class 10"
        },
        {
          "text": "Only study arts without required core subjects"
        }
      ],
      "correctIndex": 1,
      "explanation": "Compulsory BiPC (Biology, Physics, Chemistry) in Class 11-12 Intermediate with minimum 50% marks. Meeting the right stream criteria in 11th and 12th is the vital first step on this roadmap!",
      "proTip": "Check the exact entrance eligibility early in 10th class so you pick your Intermediate stream with 100% confidence!"
    },
    {
      "id": 2,
      "roadmapStage": "Stage 2: Training & Degree Duration",
      "category": "Course Duration",
      "categoryColor": "bg-emerald-100 text-emerald-900 border-emerald-300",
      "question": "How much time does it take to complete the foundational qualification and training for this career pathway?",
      "options": [
        {
          "text": "Just a 1-day certificate course"
        },
        {
          "text": "15 years of only theoretical reading"
        },
        {
          "text": "5.5 Years BNYS (Bachelor of Naturopathy & Yogic Sciences including 1 full year of compulsory rotatory medical internship)"
        },
        {
          "text": "6 weeks of online videos"
        }
      ],
      "correctIndex": 2,
      "explanation": "This professional pathway takes 5.5 Years BNYS (Bachelor of Naturopathy & Yogic Sciences including 1 full year of compulsory rotatory medical internship). True professional expertise requires structured degrees, lab experiments, and hands-on practical postings.",
      "proTip": "Focus on mastering concepts every single year rather than rushing through degrees!"
    },
    {
      "id": 3,
      "roadmapStage": "Stage 3: Gateway Degree & Entrance Exam",
      "category": "College Degree & Exams",
      "categoryColor": "bg-indigo-100 text-indigo-900 border-indigo-300",
      "question": "Which key examination or degree gateway is central to entering this professional career in India?",
      "options": [
        {
          "text": "NEET-UG (AYUSH Quota) or State AYUSH Medical Counseling"
        },
        {
          "text": "A random lucky lottery draw"
        },
        {
          "text": "Paying an unauthorized private middleman"
        },
        {
          "text": "Only writing a high school spelling test"
        }
      ],
      "correctIndex": 0,
      "explanation": "NEET-UG (AYUSH Quota) or State AYUSH Medical Counseling. Clearing standard national or state entrances guarantees transparent admission into top accredited colleges and government commissions.",
      "proTip": "Previous years' question papers and conceptual NCERT mastery are your best friends when preparing for this gateway!"
    },
    {
      "id": 4,
      "roadmapStage": "Stage 4: School Foundations",
      "category": "School Subjects",
      "categoryColor": "bg-amber-100 text-amber-900 border-amber-300",
      "question": "Which subject that you study right now in 8th, 9th, or 10th class builds the deepest foundation for this career?",
      "options": [
        {
          "text": "Memorizing movie trivia"
        },
        {
          "text": "Playing mobile games during study hours"
        },
        {
          "text": "Biology (human anatomy, physiology, preventive health, metabolism), Chemistry, and Physical Education"
        },
        {
          "text": "Sleeping in the classroom"
        }
      ],
      "correctIndex": 2,
      "explanation": "Biology (human anatomy, physiology, preventive health, metabolism), Chemistry, and Physical Education. What you are learning in school right now directly connects to this field!",
      "proTip": "Pay extra attention when your teacher covers these topics in class — you are building the foundation of your future profession!"
    },
    {
      "id": 5,
      "roadmapStage": "Stage 5: High School Habits to Build",
      "category": "Skills to Build",
      "categoryColor": "bg-rose-100 text-rose-900 border-rose-300",
      "question": "As an 8th, 9th, or 10th student, what real habit should you start cultivating to prepare for this profession?",
      "options": [
        {
          "text": "Practicing morning yoga asanas and pranayama, eating natural unprocessed foods, and cultivating mental peace and discipline"
        },
        {
          "text": "Refusing to do school assignments on time"
        },
        {
          "text": "Spending 6 hours a day arguing on social media"
        },
        {
          "text": "Giving up whenever a lesson feels slightly challenging"
        }
      ],
      "correctIndex": 0,
      "explanation": "Practicing morning yoga asanas and pranayama, eating natural unprocessed foods, and cultivating mental peace and discipline. Great professionals develop their discipline, focus, and core habits long before they enter college.",
      "proTip": "Start with just 20 minutes a day practicing this habit — consistency over weeks and months creates champions!"
    },
    {
      "id": 6,
      "roadmapStage": "Stage 6: Premier Institutions & Regulators",
      "category": "College Degree & Exams",
      "categoryColor": "bg-purple-100 text-purple-900 border-purple-300",
      "question": "Which premier institutions or statutory bodies are recognized across India for this professional discipline?",
      "options": [
        {
          "text": "Unrecognized fake coaching websites with no campus"
        },
        {
          "text": "Government Naturopathy Medical Colleges (Hyderabad, Chennai) and AYUSH recognized universities"
        },
        {
          "text": "Local amusement parks"
        },
        {
          "text": "Private bus booking counters"
        }
      ],
      "correctIndex": 1,
      "explanation": "Government Naturopathy Medical Colleges (Hyderabad, Chennai) and AYUSH recognized universities. Studying in premier recognized institutions gives you top laboratory facilities, experienced mentors, and world-class campus recruitment.",
      "proTip": "Visit the official websites of these premier institutes online — seeing campus photos and student projects will inspire you!"
    },
    {
      "id": 7,
      "roadmapStage": "Stage 7: Everyday Role & Purpose",
      "category": "Skills to Build",
      "categoryColor": "bg-teal-100 text-teal-900 border-teal-300",
      "question": "What is the real day-to-day mission and responsibility of professionals working in this field?",
      "options": [
        {
          "text": "Sitting idle in an empty room with zero responsibilities"
        },
        {
          "text": "Taking shortcuts and breaking ethics"
        },
        {
          "text": "Treating lifestyle diseases (diabetes, blood pressure, obesity) using medical yoga therapy, clinical fasting, hydrotherapy, and acupuncture"
        },
        {
          "text": "Only showing up once a year"
        }
      ],
      "correctIndex": 2,
      "explanation": "Treating lifestyle diseases (diabetes, blood pressure, obesity) using medical yoga therapy, clinical fasting, hydrotherapy, and acupuncture. Professionals in this field play a critical role in strengthening society, public welfare, and national progress.",
      "proTip": "A career is not just a monthly paycheck — it is your daily opportunity to solve meaningful problems and make people's lives better!"
    },
    {
      "id": 8,
      "roadmapStage": "Stage 8: Career Ladder & Promotion",
      "category": "Course Duration",
      "categoryColor": "bg-indigo-100 text-indigo-900 border-indigo-300",
      "question": "As you gain experience and demonstrate exceptional leadership, what does your long-term career growth path look like?",
      "options": [
        {
          "text": "Registered Naturopathy Doctor (Dr.) -> Medical Officer in Government AYUSH Hospitals -> Chief Naturopathic Physician in Luxury Wellness Sanatoriums"
        },
        {
          "text": "Staying in an entry-level trainee role forever with no advancement"
        },
        {
          "text": "Demotions every year"
        },
        {
          "text": "Being fired immediately without reason"
        }
      ],
      "correctIndex": 0,
      "explanation": "Registered Naturopathy Doctor (Dr.) -> Medical Officer in Government AYUSH Hospitals -> Chief Naturopathic Physician in Luxury Wellness Sanatoriums. With consistent hard work, continuous learning, and integrity, you can rise to senior national leadership positions!",
      "proTip": "Never stop learning new skills — the best leaders in this field keep updating their knowledge throughout their lives!"
    },
    {
      "id": 9,
      "roadmapStage": "Stage 9: Mindset & Professional Ethics",
      "category": "Skills to Build",
      "categoryColor": "bg-amber-100 text-amber-900 border-amber-300",
      "question": "What is the single most vital quality that earns deep respect and enduring trust in this profession?",
      "options": [
        {
          "text": "Showing off with arrogance"
        },
        {
          "text": "High personal integrity, empathy for citizens, and relentless dedication to quality"
        },
        {
          "text": "Blaming others for your own mistakes"
        },
        {
          "text": "Accepting bribes and cutting safety corners"
        }
      ],
      "correctIndex": 1,
      "explanation": "Integrity and genuine dedication to quality are irreplaceable! In every high-impact career, your reputation and honest character are your greatest assets.",
      "proTip": "Always be honest in your school tests and assignments — true character is built through small choices made every day."
    },
    {
      "id": 10,
      "roadmapStage": "Stage 10: Future World & AI Collaboration",
      "category": "AI & Future World",
      "categoryColor": "bg-purple-100 text-purple-900 border-purple-300",
      "question": "How will modern Artificial Intelligence (AI) and technology assist human professionals in this career over the next decade?",
      "options": [
        {
          "text": "AI will eliminate the entire profession and humans will have no jobs"
        },
        {
          "text": "Smart health trackers monitor patient vital biometrics, while BNYS doctors guide holistic natural disease reversal without toxic side effects"
        },
        {
          "text": "Computers will be outlawed in this profession"
        },
        {
          "text": "Nothing will change from 200 years ago"
        }
      ],
      "correctIndex": 1,
      "explanation": "Smart health trackers monitor patient vital biometrics, while BNYS doctors guide holistic natural disease reversal without toxic side effects. AI is a powerful assistant, but human empathy, critical judgment, moral courage, and physical action will always lead the future!",
      "proTip": "Embrace modern technology as a co-pilot, while building your unique human strengths of empathy, creativity, and leadership!"
    }
  ]
},
"business-analyst": {
  id: "business-analyst",
  title: "Business Analyst",
  subtitle: "Master of Data-Driven Decisions",
  icon: "📊",
  badge: "Strategy Pro",
  gradient: "from-blue-600 to-cyan-500",
  accentColor: "blue",
  description: "Test your knowledge about becoming a Business Analyst — the bridge between business needs and technology solutions!",
  totalQuestions: 10,
  blueprintUrl: "/career-format/four-circles-business-analyst.html",
  cheatSheet: [
    "Business Analysts identify business problems and propose data-driven solutions",
    "Key skills: data analysis, SQL, Excel, communication, requirements gathering",
    "Common certifications: CBAP, PMI-PBA, IIBA ECBA",
    "BA roles exist in IT, banking, consulting, healthcare, and e-commerce",
    "Average starting salary in India: ₹5-8 LPA"
  ],
  questions: [
    {
      id: 1,
      roadmapStage: "Stage 1: Choosing the Right Stream",
      category: "Choosing Branch / Stream",
      categoryColor: "bg-blue-100 text-blue-900 border-blue-300",
      question: "Which academic stream in 11th-12th is most commonly recommended for students aspiring to become a Business Analyst?",
      options: [
        { text: "Commerce or Science with Mathematics — strong analytical and quantitative foundation" },
        { text: "Arts with Music — creativity is the only requirement" },
        { text: "Physical Education stream — fitness matters most in business" },
        { text: "No education needed — just start working immediately after 10th" }
      ],
      correctIndex: 0,
      explanation: "Commerce or Science with Mathematics provides the quantitative and analytical foundation essential for business analysis. Subjects like Statistics, Economics, and Mathematics build the problem-solving mindset needed.",
      proTip: "Start learning basic Excel and data interpretation even while in school — it gives you a huge head start!"
    },
    {
      id: 2,
      roadmapStage: "Stage 2: Course Duration & Pathway",
      category: "Course Duration",
      categoryColor: "bg-green-100 text-green-900 border-green-300",
      question: "What is the typical educational pathway to become a Business Analyst in India?",
      options: [
        { text: "Just a 2-week online course is enough" },
        { text: "B.Com / BBA / B.Tech (3-4 years) → MBA or PG Diploma in Business Analytics (2 years) → Entry-level BA role" },
        { text: "PhD mandatory before any BA job" },
        { text: "No degree needed — only certifications matter" }
      ],
      correctIndex: 1,
      explanation: "Most Business Analysts hold a bachelor's degree (B.Com, BBA, B.Tech, or B.Sc) followed by an MBA or PG Diploma in Business Analytics. The total journey is typically 5-6 years of education before landing an entry-level role.",
      proTip: "Many top colleges like IIMs, ISB, and Great Lakes offer specialized Business Analytics programs — research them early!"
    },
    {
      id: 3,
      roadmapStage: "Stage 3: Essential School Subjects",
      category: "School Subjects",
      categoryColor: "bg-yellow-100 text-yellow-900 border-yellow-300",
      question: "Which school subjects are most important for a future Business Analyst?",
      options: [
        { text: "Only Sanskrit and Hindi literature" },
        { text: "Mathematics, Statistics, Economics, English, and Computer Science" },
        { text: "Only Physical Education and Art" },
        { text: "Geography is the only subject that matters" }
      ],
      correctIndex: 1,
      explanation: "Mathematics builds analytical thinking, Statistics helps with data interpretation, Economics teaches market dynamics, English enables clear communication, and Computer Science introduces data handling — all critical for a BA career.",
      proTip: "Practice word problems in Math — they train you to translate real-world scenarios into analytical frameworks, exactly what BAs do!"
    },
    {
      id: 4,
      roadmapStage: "Stage 4: Key Skills to Develop",
      category: "Skills to Build",
      categoryColor: "bg-amber-100 text-amber-900 border-amber-300",
      question: "What are the most important technical skills a Business Analyst must master?",
      options: [
        { text: "Only typing speed — the faster you type, the better BA you are" },
        { text: "SQL for database queries, Excel/Power BI for data visualization, and requirements documentation (BRD/FRD)" },
        { text: "Only cooking and gardening" },
        { text: "Memorizing the entire dictionary" }
      ],
      correctIndex: 1,
      explanation: "SQL lets you extract data from databases, Excel and Power BI help create insightful dashboards, and BRD/FRD writing ensures clear communication of business requirements to development teams.",
      proTip: "Learn SQL basics on free platforms like SQLZoo or HackerRank — even 30 minutes daily practice makes you proficient in 2-3 months!"
    },
    {
      id: 5,
      roadmapStage: "Stage 5: College Degree & Entrance Exams",
      category: "College Degree & Exams",
      categoryColor: "bg-indigo-100 text-indigo-900 border-indigo-300",
      question: "Which entrance exams and certifications are relevant for aspiring Business Analysts?",
      options: [
        { text: "CAT / XAT / GMAT for MBA admissions, plus IIBA ECBA / CBAP certifications for BA specialization" },
        { text: "Only NEET — same exam for all careers" },
        { text: "No exams exist for this career" },
        { text: "Only sports trials" }
      ],
      correctIndex: 0,
      explanation: "CAT, XAT, and GMAT open doors to top MBA programs. IIBA's ECBA (Entry Certificate in Business Analysis) and CBAP (Certified Business Analysis Professional) are globally recognized BA certifications that boost your career.",
      proTip: "Start CAT preparation in your final year of graduation — many IIM alumni work as senior Business Analysts and Product Managers!"
    },
    {
      id: 6,
      roadmapStage: "Stage 6: Daily Work Life",
      category: "Skills to Build",
      categoryColor: "bg-amber-100 text-amber-900 border-amber-300",
      question: "What does a typical day look like for a Business Analyst?",
      options: [
        { text: "Just sitting idle and waiting for instructions" },
        { text: "Gathering requirements from stakeholders, analyzing data, creating reports and dashboards, and facilitating meetings between business and tech teams" },
        { text: "Only writing code all day like a programmer" },
        { text: "Selling products door-to-door" }
      ],
      correctIndex: 1,
      explanation: "BAs are the bridge between business teams and technology teams. They conduct stakeholder interviews, analyze processes, create data visualizations, write requirement documents, and ensure solutions meet business needs.",
      proTip: "Practice presenting data insights to your family or friends — communication skills are just as important as technical skills for a BA!"
    },
    {
      id: 7,
      roadmapStage: "Stage 7: Industry Sectors",
      category: "Choosing Branch / Stream",
      categoryColor: "bg-blue-100 text-blue-900 border-blue-300",
      question: "In which industries do Business Analysts find the most opportunities?",
      options: [
        { text: "Only in agriculture — no other industry needs BAs" },
        { text: "IT/Software, Banking & Finance, E-commerce, Healthcare, Consulting firms like Deloitte, Accenture, and TCS" },
        { text: "Only in government offices" },
        { text: "Only in the movie industry" }
      ],
      correctIndex: 1,
      explanation: "Business Analysts are needed across virtually every industry. IT companies, banks, consulting firms, healthcare organizations, and e-commerce giants all hire BAs to optimize their processes and drive data-informed decisions.",
      proTip: "Internships during college in any of these sectors give you real-world BA experience — apply early, even for unpaid ones!"
    },
    {
      id: 8,
      roadmapStage: "Stage 8: Career Growth Path",
      category: "Skills to Build",
      categoryColor: "bg-amber-100 text-amber-900 border-amber-300",
      question: "What is a realistic career growth path for a Business Analyst?",
      options: [
        { text: "Junior BA → Senior BA → Lead BA → Business Consulting Manager → Director of Analytics / Chief Strategy Officer" },
        { text: "No growth possible — you stay in the same role forever" },
        { text: "Demotion every year is normal" },
        { text: "You must switch careers after 2 years" }
      ],
      correctIndex: 0,
      explanation: "The BA career path offers excellent growth: from Junior BA to Senior BA, then Lead or Principal BA, moving into management as a Consulting Manager or Director, and potentially reaching C-suite roles like Chief Strategy Officer.",
      proTip: "Building domain expertise in one industry (like fintech or healthcare) accelerates your growth much faster than being a generalist!"
    },
    {
      id: 9,
      roadmapStage: "Stage 9: Mindset & Professional Ethics",
      category: "Skills to Build",
      categoryColor: "bg-amber-100 text-amber-900 border-amber-300",
      question: "What mindset quality is most critical for success as a Business Analyst?",
      options: [
        { text: "Being arrogant and dismissing others' ideas" },
        { text: "Curiosity to ask 'why', empathy to understand stakeholder pain points, and integrity in presenting data honestly" },
        { text: "Avoiding all teamwork and working in isolation" },
        { text: "Never questioning anything — just follow orders blindly" }
      ],
      correctIndex: 1,
      explanation: "The best BAs are curious (they dig deep into problems), empathetic (they truly understand user needs), and honest (they present data truthfully even when findings are uncomfortable). These soft skills differentiate good BAs from great ones.",
      proTip: "In school projects, practice asking 'why does this problem exist?' at least 5 times — this '5 Whys' technique is used by real Business Analysts!"
    },
    {
      id: 10,
      roadmapStage: "Stage 10: Future World & AI Collaboration",
      category: "AI & Future World",
      categoryColor: "bg-purple-100 text-purple-900 border-purple-300",
      question: "How will AI transform the Business Analyst role in the next decade?",
      options: [
        { text: "AI will completely replace all Business Analysts" },
        { text: "AI tools will automate data collection and reporting, while BAs focus on strategic thinking, stakeholder management, and translating AI insights into business actions" },
        { text: "AI has nothing to do with business analysis" },
        { text: "Technology will go backwards and BAs will use only paper" }
      ],
      correctIndex: 1,
      explanation: "AI will handle repetitive tasks like data cleaning, report generation, and pattern detection. BAs will evolve to focus on strategic interpretation, complex stakeholder negotiations, and ensuring AI solutions align with business goals.",
      proTip: "Start learning basics of AI/ML concepts and tools like ChatGPT, Tableau AI — BAs who understand AI will be the most valuable professionals!"
    }
  ]
},
"financial-analyst": {
  id: "financial-analyst",
  title: "Financial Analyst",
  subtitle: "Master of Markets & Money",
  icon: "📈",
  badge: "Finance Guru",
  gradient: "from-emerald-600 to-teal-500",
  accentColor: "emerald",
  description: "Test your knowledge about becoming a Financial Analyst — the expert who turns numbers into strategic investment decisions!",
  totalQuestions: 10,
  blueprintUrl: "/career-format/four-circles-financial-analyst.html",
  cheatSheet: [
    "Financial Analysts evaluate investments, analyze company performance, and guide financial decisions",
    "Key certifications: CFA (Chartered Financial Analyst), FRM, CA, CMA",
    "Core skills: Financial modeling, Excel, valuation, accounting, statistics",
    "Work in investment banks, asset management, corporate finance, and consulting",
    "Average starting salary in India: ₹6-10 LPA"
  ],
  questions: [
    {
      id: 1,
      roadmapStage: "Stage 1: Choosing the Right Stream",
      category: "Choosing Branch / Stream",
      categoryColor: "bg-blue-100 text-blue-900 border-blue-300",
      question: "Which academic stream in 11th-12th best prepares you for a career as a Financial Analyst?",
      options: [
        { text: "Commerce with Mathematics — builds strong foundation in accounting, economics, and quantitative analysis" },
        { text: "Arts with Dance — creativity is the only requirement for finance" },
        { text: "Physical Education — fitness is the key to financial success" },
        { text: "No stream matters — anyone can become a Financial Analyst without any education" }
      ],
      correctIndex: 0,
      explanation: "Commerce with Mathematics is the ideal stream. Subjects like Accountancy, Business Studies, Economics, and Mathematics directly build the analytical and numerical skills needed for financial analysis.",
      proTip: "Pay extra attention to Accountancy and Economics in 11th-12th — these subjects form the backbone of financial analysis!"
    },
    {
      id: 2,
      roadmapStage: "Stage 2: Course Duration & Pathway",
      category: "Course Duration",
      categoryColor: "bg-green-100 text-green-900 border-green-300",
      question: "What is the typical educational pathway to become a Financial Analyst?",
      options: [
        { text: "A weekend workshop is sufficient" },
        { text: "B.Com / BBA / B.Sc (3 years) → MBA Finance or CFA Program (2-3 years) → Entry-level Financial Analyst role" },
        { text: "Only MBBS degree leads to finance careers" },
        { text: "Finish 10th and directly join a bank" }
      ],
      correctIndex: 1,
      explanation: "The standard path involves a bachelor's degree in Commerce, Business, or a quantitative field, followed by an MBA in Finance or the CFA (Chartered Financial Analyst) program. The total journey takes about 5-6 years before your first role.",
      proTip: "The CFA program has 3 levels and can be started during graduation — it's the gold standard certification for Financial Analysts worldwide!"
    },
    {
      id: 3,
      roadmapStage: "Stage 3: Essential School Subjects",
      category: "School Subjects",
      categoryColor: "bg-yellow-100 text-yellow-900 border-yellow-300",
      question: "Which school subjects are most crucial for aspiring Financial Analysts?",
      options: [
        { text: "Only Art and Craft" },
        { text: "Mathematics, Accountancy, Economics, Statistics, and English" },
        { text: "Only Physical Education" },
        { text: "Only History and Geography" }
      ],
      correctIndex: 1,
      explanation: "Mathematics develops quantitative reasoning, Accountancy teaches financial statement analysis, Economics explains market forces, Statistics enables data interpretation, and English ensures clear financial reporting and communication.",
      proTip: "Start reading the business section of newspapers like Economic Times or Mint — it builds financial vocabulary naturally!"
    },
    {
      id: 4,
      roadmapStage: "Stage 4: Key Skills to Develop",
      category: "Skills to Build",
      categoryColor: "bg-amber-100 text-amber-900 border-amber-300",
      question: "What are the most critical technical skills a Financial Analyst must possess?",
      options: [
        { text: "Only handwriting skills" },
        { text: "Financial modeling in Excel, company valuation (DCF, comparables), reading financial statements (Balance Sheet, P&L, Cash Flow)" },
        { text: "Only social media marketing" },
        { text: "Video editing and photography" }
      ],
      correctIndex: 1,
      explanation: "Financial modeling (building spreadsheet models to forecast company performance), valuation techniques (DCF analysis, comparable company analysis), and the ability to read and interpret Balance Sheets, Profit & Loss statements, and Cash Flow statements are the core technical skills.",
      proTip: "Download annual reports of companies like Infosys or TCS from their websites — try reading the financial statements. Practice makes perfect!"
    },
    {
      id: 5,
      roadmapStage: "Stage 5: College Degree & Entrance Exams",
      category: "College Degree & Exams",
      categoryColor: "bg-indigo-100 text-indigo-900 border-indigo-300",
      question: "Which exams and certifications are most important for Financial Analysts?",
      options: [
        { text: "CFA (Chartered Financial Analyst), CA (Chartered Accountant), and MBA entrance exams like CAT/GMAT" },
        { text: "Only NEET — it covers all career exams" },
        { text: "No exams are needed for this career" },
        { text: "Only driving license test" }
      ],
      correctIndex: 0,
      explanation: "The CFA charter is the most prestigious credential for Financial Analysts globally. CA gives deep accounting expertise. MBA from top institutions (via CAT/GMAT) opens doors to corporate finance and investment banking roles.",
      proTip: "CFA Level 1 can be attempted while still in college — start preparing early to get a head start over your peers!"
    },
    {
      id: 6,
      roadmapStage: "Stage 6: Daily Work Life",
      category: "Skills to Build",
      categoryColor: "bg-amber-100 text-amber-900 border-amber-300",
      question: "What does a typical workday look like for a Financial Analyst?",
      options: [
        { text: "Just counting cash notes all day" },
        { text: "Analyzing company financial data, building valuation models, preparing investment reports, attending client meetings, and monitoring market trends" },
        { text: "Only filing paper documents in cabinets" },
        { text: "Playing stock market games on a phone all day" }
      ],
      correctIndex: 1,
      explanation: "Financial Analysts spend their days analyzing financial data, building complex Excel models to value companies, preparing detailed investment reports and presentations, meeting clients/management, and staying updated on market news and economic indicators.",
      proTip: "Create a mock investment portfolio on apps like Moneycontrol or Groww — tracking real stocks teaches you market dynamics better than any textbook!"
    },
    {
      id: 7,
      roadmapStage: "Stage 7: Types of Financial Analysts",
      category: "Choosing Branch / Stream",
      categoryColor: "bg-blue-100 text-blue-900 border-blue-300",
      question: "What are the different specializations available for Financial Analysts?",
      options: [
        { text: "Only one type exists — all Financial Analysts do the same thing" },
        { text: "Equity Research Analyst, Investment Banking Analyst, Credit Analyst, Risk Analyst, and Corporate Finance Analyst" },
        { text: "Only accountants and cashiers" },
        { text: "Only stock brokers" }
      ],
      correctIndex: 1,
      explanation: "Financial Analysis has multiple specializations: Equity Research (analyzing stocks), Investment Banking (M&A deals, IPOs), Credit Analysis (loan risk assessment), Risk Management (portfolio risk), and Corporate Finance (company budgeting and capital allocation).",
      proTip: "During college, try internships in different specializations — you'll discover which area of finance excites you the most!"
    },
    {
      id: 8,
      roadmapStage: "Stage 8: Career Growth Path",
      category: "Skills to Build",
      categoryColor: "bg-amber-100 text-amber-900 border-amber-300",
      question: "What does the career growth trajectory look like for a Financial Analyst?",
      options: [
        { text: "Analyst → Senior Analyst → Associate VP → Vice President → Director → Managing Director / Chief Financial Officer" },
        { text: "No growth possible — same position for entire career" },
        { text: "Salary decreases every year" },
        { text: "Must quit after 5 years — there's an age limit" }
      ],
      correctIndex: 0,
      explanation: "Financial Analysts have one of the most structured career ladders: starting as an Analyst, progressing to Senior Analyst, then Associate VP, VP, Director, and ultimately Managing Director or CFO. Top performers in investment banking can earn ₹1-5 Crore+ annually.",
      proTip: "Networking at finance events and building a strong LinkedIn profile can accelerate your promotions — relationships matter as much as skills in finance!"
    },
    {
      id: 9,
      roadmapStage: "Stage 9: Mindset & Professional Ethics",
      category: "Skills to Build",
      categoryColor: "bg-amber-100 text-amber-900 border-amber-300",
      question: "What ethical principle is most important for Financial Analysts?",
      options: [
        { text: "Insider trading to make quick profits" },
        { text: "Integrity in financial reporting, avoiding conflicts of interest, and always putting client interests first" },
        { text: "Hiding losses to keep clients happy" },
        { text: "Recommending stocks based on bribes from companies" }
      ],
      correctIndex: 1,
      explanation: "Financial Analysts handle sensitive financial information and investment decisions that affect people's life savings. Integrity, transparency, and putting client interests first are non-negotiable ethical standards enforced by regulations like SEBI guidelines and CFA Institute's Code of Ethics.",
      proTip: "The CFA Institute's Code of Ethics is a must-read for every aspiring Financial Analyst — it teaches you professional standards that build lifelong trust!"
    },
    {
      id: 10,
      roadmapStage: "Stage 10: Future World & AI Collaboration",
      category: "AI & Future World",
      categoryColor: "bg-purple-100 text-purple-900 border-purple-300",
      question: "How will AI and technology reshape the Financial Analyst profession?",
      options: [
        { text: "AI will eliminate all finance jobs completely" },
        { text: "AI will automate data gathering and basic analysis, while Financial Analysts focus on strategic judgment, client relationships, and interpreting complex market scenarios" },
        { text: "Technology has no role in finance" },
        { text: "Calculators will be banned and analysts will use abacus" }
      ],
      correctIndex: 1,
      explanation: "AI and machine learning are already automating data collection, basic financial modeling, and pattern recognition. Future Financial Analysts will leverage AI tools for faster analysis while focusing on strategic interpretation, relationship management, and navigating complex scenarios that require human judgment.",
      proTip: "Learn Python for finance and explore tools like Bloomberg Terminal and Refinitiv — tech-savvy analysts are in highest demand!"
    }
  ]
},
"ms-masters": {
  id: "ms-masters",
  title: "MS / Master's Abroad",
  subtitle: "Gateway to Global Education",
  icon: "🌍",
  badge: "Global Scholar",
  gradient: "from-violet-600 to-fuchsia-500",
  accentColor: "violet",
  description: "Test your knowledge about pursuing a Master's degree abroad — your pathway to world-class education and global career opportunities!",
  totalQuestions: 10,
  blueprintUrl: "/career-format/four-circles-ms-masters-foreign-countries.html",
  cheatSheet: [
    "MS abroad typically takes 1.5-2 years in USA, 1 year in UK, 2 years in Germany/Canada",
    "Key exams: GRE/GMAT (aptitude), TOEFL/IELTS (English proficiency)",
    "Top destinations: USA, UK, Canada, Germany, Australia",
    "Funding options: Teaching/Research Assistantships, Scholarships, Education Loans",
    "SOP (Statement of Purpose) and LORs (Letters of Recommendation) are critical for admission"
  ],
  questions: [
    {
      id: 1,
      roadmapStage: "Stage 1: Choosing the Right Stream",
      category: "Choosing Branch / Stream",
      categoryColor: "bg-blue-100 text-blue-900 border-blue-300",
      question: "Which undergraduate background best prepares you for an MS (Master of Science) program abroad?",
      options: [
        { text: "Any bachelor's degree in a relevant field (B.Tech, B.Sc, BCA, B.Com) with strong academics and research interest" },
        { text: "Only students from IITs can apply for MS abroad" },
        { text: "No undergraduate degree is needed — just IELTS score" },
        { text: "Only medical graduates can pursue MS abroad" }
      ],
      correctIndex: 0,
      explanation: "Students from any recognized university can apply for MS abroad, provided they have a relevant bachelor's degree with good grades. B.Tech students often pursue MS in Engineering/CS, B.Sc students in Sciences, and B.Com students in Business/Finance programs.",
      proTip: "Maintain a GPA above 8.0/10 or 3.5/4.0 — top universities heavily weigh your academic performance during the admission process!"
    },
    {
      id: 2,
      roadmapStage: "Stage 2: Course Duration & Pathway",
      category: "Course Duration",
      categoryColor: "bg-green-100 text-green-900 border-green-300",
      question: "How long does a typical MS program take in different countries?",
      options: [
        { text: "Same duration everywhere — exactly 4 years" },
        { text: "USA: 1.5-2 years, UK: 1 year, Germany: 2 years, Canada: 1.5-2 years, Australia: 1.5-2 years" },
        { text: "Only 3 months in any country" },
        { text: "Minimum 5 years in every country" }
      ],
      correctIndex: 1,
      explanation: "MS duration varies by country: USA programs are typically 1.5-2 years (with thesis or coursework options), UK offers intensive 1-year programs, Germany has 2-year programs (often tuition-free at public universities), and Canada/Australia range from 1.5-2 years.",
      proTip: "Germany's public universities charge almost zero tuition — making it one of the most affordable destinations for MS abroad!"
    },
    {
      id: 3,
      roadmapStage: "Stage 3: Essential Entrance Exams",
      category: "College Degree & Exams",
      categoryColor: "bg-indigo-100 text-indigo-900 border-indigo-300",
      question: "Which standardized tests are required for MS admission abroad?",
      options: [
        { text: "Only NEET is required for all MS programs" },
        { text: "No tests are needed — just apply directly" },
        { text: "GRE (Graduate Record Examination) for aptitude + TOEFL or IELTS for English proficiency; GMAT for MBA/business programs" },
        { text: "Only a typing speed test" }
      ],
      correctIndex: 2,
      explanation: "GRE tests quantitative, verbal, and analytical writing skills (score out of 340). TOEFL (out of 120) or IELTS (out of 9) prove English proficiency. GMAT is specifically for MBA and business master's programs. Many universities also accept GRE scores for business programs.",
      proTip: "Aim for GRE 320+ and TOEFL 100+ (or IELTS 7.0+) to be competitive for top-50 universities — start preparation at least 6 months before your target test date!"
    },
    {
      id: 4,
      roadmapStage: "Stage 4: Application Components",
      category: "Skills to Build",
      categoryColor: "bg-amber-100 text-amber-900 border-amber-300",
      question: "What are the most critical components of an MS abroad application?",
      options: [
        { text: "Just the GRE score — nothing else matters" },
        { text: "SOP (Statement of Purpose), LORs (Letters of Recommendation), GRE/TOEFL scores, academic transcripts, resume, and research/project experience" },
        { text: "Only a passport photo and birth certificate" },
        { text: "Only money — universities accept anyone who pays" }
      ],
      correctIndex: 1,
      explanation: "A complete application includes: SOP (your motivation and goals), 2-3 LORs from professors/employers, GRE/TOEFL scores, official transcripts, a well-crafted resume, and details of research projects, internships, and publications. Each component matters!",
      proTip: "Start drafting your SOP at least 3 months before deadlines — get it reviewed by professors, seniors who went abroad, and professional editors. A powerful SOP can compensate for a slightly lower GPA!"
    },
    {
      id: 5,
      roadmapStage: "Stage 5: Funding & Scholarships",
      category: "Course Duration",
      categoryColor: "bg-green-100 text-green-900 border-green-300",
      question: "What are the main funding options for Indian students pursuing MS abroad?",
      options: [
        { text: "There are no funding options — everyone must pay full tuition from savings" },
        { text: "Teaching Assistantships (TA), Research Assistantships (RA), university scholarships, external scholarships (Fulbright, DAAD), and education loans" },
        { text: "The Indian government pays for everyone automatically" },
        { text: "Only lottery winners can afford MS abroad" }
      ],
      correctIndex: 1,
      explanation: "Multiple funding avenues exist: TA/RA positions (work for the university and get tuition waiver + stipend), merit-based scholarships, external scholarships like Fulbright (USA), DAAD (Germany), Chevening (UK), and education loans from banks (₹20-50 lakhs at competitive interest rates).",
      proTip: "Email professors directly about RA positions — professors with funded research projects often sponsor students. Check their recent publications and mention how your skills align with their research!"
    },
    {
      id: 6,
      roadmapStage: "Stage 6: Top Destinations Compared",
      category: "Choosing Branch / Stream",
      categoryColor: "bg-blue-100 text-blue-900 border-blue-300",
      question: "What are the key differences between the top MS destinations for Indian students?",
      options: [
        { text: "All countries are exactly the same — no difference at all" },
        { text: "USA: Best for STEM with OPT work visa; UK: 1-year fast programs; Germany: Nearly free tuition; Canada: Easier PR pathway; Australia: Post-study work rights" },
        { text: "Only USA is worth going to — all other countries are inferior" },
        { text: "No country accepts Indian students anymore" }
      ],
      correctIndex: 1,
      explanation: "Each destination has unique advantages: USA offers 3-year OPT for STEM graduates and the world's top universities. UK has prestigious 1-year programs. Germany has near-zero tuition at public universities. Canada offers straightforward PR pathways. Australia provides generous post-study work visas.",
      proTip: "Apply to a mix of 8-12 universities: 3-4 'ambitious' (dream schools), 4-5 'moderate' (good fit), and 2-3 'safe' (likely admits). This strategy maximizes your chances!"
    },
    {
      id: 7,
      roadmapStage: "Stage 7: Building a Strong Profile",
      category: "Skills to Build",
      categoryColor: "bg-amber-100 text-amber-900 border-amber-300",
      question: "What activities during undergraduate years strengthen your MS abroad application the most?",
      options: [
        { text: "Only getting high marks — nothing else matters" },
        { text: "Research projects, published papers, relevant internships, coding projects (for CS), and participation in hackathons/competitions" },
        { text: "Only extracurricular activities like sports and drama" },
        { text: "Just attending classes is enough" }
      ],
      correctIndex: 1,
      explanation: "Top universities look for well-rounded candidates: research experience (even course projects count), internships in your field, technical projects (GitHub portfolio for CS students), publications in conferences/journals, and relevant competitions. These demonstrate your passion and capability beyond grades.",
      proTip: "Approach professors for undergraduate research opportunities from your 2nd year — even a small project can lead to a publication that dramatically strengthens your application!"
    },
    {
      id: 8,
      roadmapStage: "Stage 8: Post-MS Career Opportunities",
      category: "Skills to Build",
      categoryColor: "bg-amber-100 text-amber-900 border-amber-300",
      question: "What career options are available after completing an MS abroad?",
      options: [
        { text: "You must return to India immediately — no work allowed abroad" },
        { text: "Work in the host country (using OPT/work visa), pursue a PhD, join top global companies, or return to India with international experience for premium roles" },
        { text: "Only teaching in universities is possible" },
        { text: "MS degree has no career value" }
      ],
      correctIndex: 1,
      explanation: "After MS, you can work in the host country (USA's OPT allows 1-3 years of work, UK's Graduate Route allows 2 years, etc.), pursue a PhD for research/academic careers, join companies like Google, Microsoft, or Amazon, or return to India with valuable international experience for senior roles.",
      proTip: "Start applying for jobs 3-4 months before graduation through university career fairs, LinkedIn, and company career pages. Networking with alumni is the #1 way to land interviews!"
    },
    {
      id: 9,
      roadmapStage: "Stage 9: Visa & Immigration Basics",
      category: "College Degree & Exams",
      categoryColor: "bg-indigo-100 text-indigo-900 border-indigo-300",
      question: "What is the student visa process for studying abroad?",
      options: [
        { text: "No visa is needed — Indian passport allows free entry everywhere" },
        { text: "After getting admission, apply for a student visa (F-1 for USA, Tier 4 for UK, Study Permit for Canada) with proof of admission, financial capability, and intent to study" },
        { text: "You need to be a citizen of that country first" },
        { text: "Visa is only for tourists, not students" }
      ],
      correctIndex: 1,
      explanation: "After receiving your admission letter (I-20 from USA, CAS from UK, LOA from Canada), you apply for a student visa. You'll need to show proof of admission, financial documents (bank statements, loan sanction letters), SOP, and attend a visa interview (for USA). The process takes 4-8 weeks.",
      proTip: "Keep all your financial documents organized well in advance — banks, scholarship letters, and sponsor affidavits. Visa officers want to see clear financial planning!"
    },
    {
      id: 10,
      roadmapStage: "Stage 10: Future World & AI Collaboration",
      category: "AI & Future World",
      categoryColor: "bg-purple-100 text-purple-900 border-purple-300",
      question: "How is AI and technology changing the landscape of studying abroad?",
      options: [
        { text: "AI will eliminate the need for any international education" },
        { text: "AI-powered tools help with GRE prep, SOP writing, university shortlisting, and scholarship matching; while international exposure provides irreplaceable cross-cultural skills and global networking" },
        { text: "Technology makes foreign degrees worthless" },
        { text: "Nothing has changed — the process is the same as 50 years ago" }
      ],
      correctIndex: 1,
      explanation: "AI tools like ChatGPT help with test preparation and SOP drafting, platforms like Yocket and CollegeDunia use AI for university recommendations, and virtual campus tours make research easier. However, the irreplaceable value of living abroad — cross-cultural competence, global professional networks, and independence — makes international education more relevant than ever.",
      proTip: "Use AI tools to research and shortlist universities, but write your SOP in your own authentic voice — admissions committees can spot generic AI-written essays instantly!"
    }
  ]
},
};
