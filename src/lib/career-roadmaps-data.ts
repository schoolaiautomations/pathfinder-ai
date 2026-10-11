import { CareerRoadmap } from "@/components/common/CareerRoadmapModal";

export const CAREER_ROADMAP_DATA: Record<string, CareerRoadmap> = {
  doctor: {
    careerId: "doctor",
    careerName: "Doctor (MBBS / MD)",
    totalDuration: "~10–11 years after 10th",
    steps: [
      {
        title: "10th Class (SSC)",
        duration: "",
        description: "Complete 10th with high marks in Science & Maths. Focus on Biology fundamentals.",
        type: "start",
        icon: "📚",
      },
      {
        title: "Intermediate — BiPC Stream",
        duration: "2 years",
        description: "Enroll in BiPC (Biology, Physics, Chemistry). Build conceptual mastery for medical entrances.",
        type: "education",
        icon: "🔬",
      },
      {
        title: "NEET-UG Entrance Examination",
        duration: "Exam",
        description: "National Eligibility cum Entrance Test — sole gateway to MBBS/BDS seats in AIIMS, JIPMER & state colleges.",
        type: "exam",
        icon: "📝",
      },
      {
        title: "MBBS Undergraduate Degree",
        duration: "4.5 years",
        description: "Pre-clinical, para-clinical, and clinical medical training covering anatomy, pharmacology, pathology, and surgery.",
        type: "degree",
        icon: "🎓",
      },
      {
        title: "Compulsory Rotatory Internship (CRRI)",
        duration: "1 year",
        description: "Hands-on clinical hospital posting across Emergency, OBG, Pediatrics, Medicine, and Community Health.",
        type: "degree",
        icon: "🏥",
      },
      {
        title: "NEET-PG / NExT Entrance Examination",
        duration: "Exam",
        description: "National exit & post-graduate entrance test for securing competitive MD/MS specialization seats.",
        type: "exam",
        icon: "📝",
      },
      {
        title: "Post-Graduation: MD / MS Specialization",
        duration: "3 years",
        description: "Specialized residency in Cardiology, Pediatrics, General Surgery, Radiology, Dermatology, or Orthopedics.",
        type: "degree",
        icon: "⚕️",
      },
      {
        title: "Specialist Consultant / Clinical Practice",
        duration: "Career",
        description: "Practice as a certified specialist physician/surgeon in hospitals, medical colleges, or private clinics.",
        type: "career",
        icon: "👨‍⚕️",
      },
      {
        title: "Super-Specialization (DM / MCh / Fellowships)",
        duration: "3 years",
        description: "Advanced super-specialty training in Surgical Oncology, Neurosurgery, or Interventional Cardiology.",
        type: "growth",
        icon: "🏆",
      },
    ],
  },

  police: {
    careerId: "police",
    careerName: "Police Officer (SI / DSP / IPS)",
    totalDuration: "~4–6 years after 10th",
    steps: [
      {
        title: "10th Class (SSC)",
        duration: "",
        description: "Complete 10th with disciplined habits, physical agility, and strong foundational knowledge.",
        type: "start",
        icon: "🏃",
      },
      {
        title: "Intermediate (Any Stream — MPC / BiPC / CEC / HEC)",
        duration: "2 years",
        description: "Any group is eligible. CEC, HEC, or MPC develop analytical reasoning and general awareness.",
        type: "education",
        icon: "📚",
      },
      {
        title: "Physical Fitness & Endurance Conditioning",
        duration: "Ongoing",
        description: "Build stamina for Physical Efficiency Tests (PET): 1600m running, sprint, long jump, and height/chest norms.",
        type: "education",
        icon: "🏋️",
      },
      {
        title: "Bachelor's Degree (Any Discipline)",
        duration: "3–4 years",
        description: "Earn a recognized degree (B.A, B.Sc, B.Com, B.Tech) required for Sub-Inspector and DSP notifications.",
        type: "degree",
        icon: "🎓",
      },
      {
        title: "State Police SI Recruitment Exam (APSLPRB / TSLPRB)",
        duration: "Exam",
        description: "Three tiers: Prelims (Aptitude & General Studies) → Physical Measurements & PET → Final Mains Written Exam.",
        type: "exam",
        icon: "📝",
      },
      {
        title: "Police Academy Training (APPA / PTC)",
        duration: "9–12 months",
        description: "Rigorous police training in criminal law (IPC/CrPC/BNS), forensic investigation, weapon drills, and field tactics.",
        type: "degree",
        icon: "🛡️",
      },
      {
        title: "Sub-Inspector of Police (SI) — Station Posting",
        duration: "Career",
        description: "Station House Officer (SHO) leading station staff, investigating local crime, and preserving public order.",
        type: "career",
        icon: "👮",
      },
      {
        title: "Promotions: Circle Inspector (CI) & DSP",
        duration: "Growth",
        description: "Merit-based promotions to Circle Inspector, SDPO/DSP, and eligibility for IPS cadre conferment.",
        type: "growth",
        icon: "⭐",
      },
      {
        title: "Direct IPS Gateway: UPSC Civil Services Examination",
        duration: "Optional",
        description: "Alternatively, clear UPSC CSE after graduation to enter directly as an Indian Police Service (IPS) officer.",
        type: "exam",
        icon: "🇮🇳",
      },
    ],
  },

  swe: {
    careerId: "swe",
    careerName: "Software Engineer (Full Stack / AI / Cloud)",
    totalDuration: "~6 years after 10th",
    steps: [
      {
        title: "10th Class (SSC)",
        duration: "",
        description: "Complete 10th focusing on Mathematics, Logic, and introductory programming concepts.",
        type: "start",
        icon: "💻",
      },
      {
        title: "Intermediate — MPC Stream (Maths, Physics, Chemistry)",
        duration: "2 years",
        description: "Master MPC syllabus to build the mathematical foundation required for engineering entrance tests.",
        type: "education",
        icon: "📐",
      },
      {
        title: "Engineering Entrance Exams (JEE Main / Adv / EAMCET)",
        duration: "Exam",
        description: "Crack JEE Main/Advanced for IITs, NITs, IIITs, or State EAMCET for top engineering colleges.",
        type: "exam",
        icon: "📝",
      },
      {
        title: "B.Tech in Computer Science / IT / AI & ML",
        duration: "4 years",
        description: "Undergraduate study in Data Structures, Algorithms, Operating Systems, Computer Networks, and DBMS.",
        type: "degree",
        icon: "🎓",
      },
      {
        title: "Coding Mastery, GitHub Projects & Problem Solving",
        duration: "Years 2–3",
        description: "Learn Python, Java, or TypeScript. Build full-stack apps, practice DSA on LeetCode, and build a GitHub portfolio.",
        type: "education",
        icon: "⚡",
      },
      {
        title: "Internships & Campus Placement Coding Drives",
        duration: "Final Year",
        description: "Ace competitive coding rounds, technical interviews, and system design evaluations during placements.",
        type: "exam",
        icon: "💼",
      },
      {
        title: "Associate Software Engineer / SDE-1 — First Tech Role",
        duration: "Career",
        description: "Ship clean production code, write REST/GraphQL APIs, and deploy cloud microservices in Agile tech squads.",
        type: "career",
        icon: "🚀",
      },
      {
        title: "Senior SDE, Tech Lead & Engineering Manager",
        duration: "Growth",
        description: "Progress into Senior Engineer (SDE-2/3), Technical Architect, or Engineering Manager leading large systems.",
        type: "growth",
        icon: "🏆",
      },
      {
        title: "Specialization & Global Pathways (AI / Cloud / MS Abroad)",
        duration: "Optional",
        description: "Specialize in AI/ML, Cloud DevOps, or pursue an M.S. in Computer Science abroad for international tech roles.",
        type: "growth",
        icon: "🌐",
      },
    ],
  },

  teacher: {
    careerId: "teacher",
    careerName: "School Teacher / Professor",
    totalDuration: "~5–7 years after 10th",
    steps: [
      { title: "10th Class (SSC)", duration: "", description: "Pass 10th with interest in teaching and academic subjects.", type: "start", icon: "📚" },
      { title: "Intermediate (Any Stream)", duration: "2 years", description: "Choose MPC, BiPC, CEC, or HEC depending on your teaching subject focus.", type: "education", icon: "📖" },
      { title: "Bachelor's Degree (B.A / B.Sc / B.Com)", duration: "3 years", description: "Graduate in your chosen teaching specialization (e.g. B.Sc Maths/Science, B.A English/Social).", type: "degree", icon: "🎓" },
      { title: "Bachelor of Education (B.Ed / D.Ed)", duration: "2 years", description: "Complete professional teaching training in pedagogy, classroom management, and child psychology.", type: "degree", icon: "👩‍🏫" },
      { title: "Teacher Eligibility Test (TET / CTET / DSC)", duration: "Exam", description: "Crack State DSC or Central CTET to qualify for government and top private school teacher recruitment.", type: "exam", icon: "📝" },
      { title: "School Teacher (SGT / School Assistant)", duration: "Career", description: "Begin teaching in primary or high school, inspiring young minds and shaping future generations.", type: "career", icon: "🏫" },
      { title: "Master's Degree & Headmaster / Professor", duration: "Growth", description: "Pursue M.Ed/M.A/M.Sc, qualify UGC NET/SET, and advance to Headmaster, College Lecturer, or Professor.", type: "growth", icon: "🏆" }
    ]
  },

  army: {
    careerId: "army",
    careerName: "Indian Army Officer (NDA / CDS)",
    totalDuration: "~3–5 years after 10th",
    steps: [
      { title: "10th Class (SSC)", duration: "", description: "Pass 10th with high mental toughness, discipline, and daily physical running habits.", type: "start", icon: "🎖️" },
      { title: "Intermediate (MPC / Any Stream)", duration: "2 years", description: "MPC is required for technical branches, while any stream is eligible for non-technical army wings.", type: "education", icon: "🏃" },
      { title: "NDA Entrance Exam (UPSC)", duration: "Exam", description: "National Defence Academy written exam followed by the 5-day Services Selection Board (SSB) interview.", type: "exam", icon: "📝" },
      { title: "National Defence Academy (NDA) Training", duration: "3 years", description: "Joint military training at Khadakwasla, Pune, earning a B.A/B.Sc/B.Tech degree with military leadership.", type: "degree", icon: "🛡️" },
      { title: "Indian Military Academy (IMA) Dehradun", duration: "1 year", description: "Intensive officer-cadet combat training in tactics, weapons, mountain warfare, and field leadership.", type: "degree", icon: "⚔️" },
      { title: "Lieutenant (Commissioned Officer)", duration: "Career", description: "Commissioned as Lieutenant in the Indian Army leading combat platoons and serving national sovereignty.", type: "career", icon: "🇮🇳" },
      { title: "Captain, Major, Colonel & General Ranks", duration: "Growth", description: "Time-scale and selection-based promotions to Captain, Major, Colonel, and senior command positions.", type: "growth", icon: "⭐" }
    ]
  },

  lawyer: {
    careerId: "lawyer",
    careerName: "Advocate / Corporate Lawyer (CLAT / LLB)",
    totalDuration: "~5–7 years after 10th",
    steps: [
      { title: "10th Class (SSC)", duration: "", description: "Complete 10th focusing on English comprehension, debate, logical reasoning, and current affairs.", type: "start", icon: "📚" },
      { title: "Intermediate (Any Stream — CEC / HEC / MPC)", duration: "2 years", description: "Any stream is eligible. Humanities, Arts, or Commerce build legal aptitude and constitutional awareness.", type: "education", icon: "⚖️" },
      { title: "CLAT / AILET / State LAWCET Exam", duration: "Exam", description: "Crack national law entrance exam to secure admission in top National Law Universities (NLUs).", type: "exam", icon: "📝" },
      { title: "5-Year Integrated Law Degree (BA LLB / BBA LLB)", duration: "5 years", description: "Comprehensive legal education covering Constitutional, Criminal, Corporate, and Civil Law, plus moot courts.", type: "degree", icon: "🎓" },
      { title: "Bar Council Enrollment & All India Bar Exam (AIBE)", duration: "Exam", description: "Enroll with State Bar Council and clear the AIBE examination to earn your Certificate of Practice.", type: "exam", icon: "📜" },
      { title: "Advocate / Junior Associate at Law Firm", duration: "Career", description: "Commence legal litigation in district courts or join corporate law firms advising business contracts.", type: "career", icon: "💼" },
      { title: "Senior Advocate / Corporate Partner / Judicial Officer", duration: "Growth", description: "Advance to Senior Counsel in High Court/Supreme Court, or clear Judicial Services Exam to become a Judge.", type: "growth", icon: "🏆" }
    ]
  },

  nurse: {
    careerId: "nurse",
    careerName: "Nursing Officer (B.Sc Nursing / AIIMS)",
    totalDuration: "~6 years after 10th",
    steps: [
      { title: "10th Class (SSC)", duration: "", description: "Pass 10th with interest in healthcare, compassion, and human biology.", type: "start", icon: "🩺" },
      { title: "Intermediate — BiPC Stream", duration: "2 years", description: "Compulsory Biology, Physics, and Chemistry (BiPC) with minimum 50% marks.", type: "education", icon: "🔬" },
      { title: "B.Sc Nursing Entrance Exams (AIIMS / State CET)", duration: "Exam", description: "Entrance exam for admission into government nursing colleges and premier institutions like AIIMS.", type: "exam", icon: "📝" },
      { title: "B.Sc Nursing Undergraduate Degree", duration: "4 years", description: "Intensive 4-year curriculum covering clinical nursing, anatomy, pharmacology, maternal care, and ICU management.", type: "degree", icon: "🎓" },
      { title: "State Nursing Council Registration (RN / RM)", duration: "Exam", description: "Register as a Registered Nurse (RN) and Registered Midwife (RM) with the state nursing council.", type: "degree", icon: "📜" },
      { title: "Staff Nurse / Nursing Officer (AIIMS NORCET)", duration: "Career", description: "Crack AIIMS NORCET or state health recruitments to serve as permanent Nursing Officer in major hospitals.", type: "career", icon: "💉" },
      { title: "M.Sc Nursing, Nurse Practitioner & Global Roles", duration: "Growth", description: "Specialize in Critical Care, advance to Nursing Superintendent, or clear NCLEX/OET for lucrative jobs abroad.", type: "growth", icon: "🌐" }
    ]
  },

  agri: {
    careerId: "agri",
    careerName: "Agricultural Officer (B.Sc Agri / AO)",
    totalDuration: "~6 years after 10th",
    steps: [
      { title: "10th Class (SSC)", duration: "", description: "Pass 10th with foundational knowledge in biology, plants, and natural sciences.", type: "start", icon: "🌱" },
      { title: "Intermediate — BiPC Stream (or MPC for Agri Engg)", duration: "2 years", description: "BiPC stream is the primary eligibility for Agricultural, Horticultural, and Forestry degrees.", type: "education", icon: "🌾" },
      { title: "ICAR AIEEA / State EAMCET (Agri Stream)", duration: "Exam", description: "Competitive entrance examination for securing admission into Agricultural Universities (ANGRAU / PJTSAU).", type: "exam", icon: "📝" },
      { title: "B.Sc (Hons) Agriculture Undergraduate Degree", duration: "4 years", description: "Study agronomy, soil science, entomology, genetics, plant pathology, and rural agricultural work experience (RAWE).", type: "degree", icon: "🎓" },
      { title: "Agricultural Officer (AO) Recruitment (APPSC / IBPS AFO)", duration: "Exam", description: "Clear State Public Service Commission AO exams or IBPS Agriculture Field Officer for banking sector.", type: "exam", icon: "📋" },
      { title: "Agricultural Officer (AO) — Field Operations", duration: "Career", description: "Work with farmers, oversee government subsidy schemes, test soil health, and introduce modern farming technologies.", type: "career", icon: "🚜" },
      { title: "Assistant Director of Agriculture (ADA) / Scientist", duration: "Growth", description: "Progress to Mandal/District Agriculture Officer (DAO), or pursue M.Sc/Ph.D for ICAR Research Scientist roles.", type: "growth", icon: "🏆" }
    ]
  },

  bank: {
    careerId: "bank",
    careerName: "Bank Probationary Officer (IBPS / SBI PO)",
    totalDuration: "~5–6 years after 10th",
    steps: [
      { title: "10th Class (SSC)", duration: "", description: "Pass 10th with strong calculation speed, analytical ability, and basic mathematics.", type: "start", icon: "📊" },
      { title: "Intermediate (Any Stream — CEC / MEC / MPC)", duration: "2 years", description: "Any stream is eligible. Commerce and Mathematics streams help with speed calculations.", type: "education", icon: "📚" },
      { title: "Bachelor's Degree (Any Discipline)", duration: "3–4 years", description: "Complete any recognized graduation (B.Com, B.Sc, B.A, B.Tech) with good academic record.", type: "degree", icon: "🎓" },
      { title: "Bank PO Competitive Exam (SBI PO / IBPS PO / RBI)", duration: "Exam", description: "Prelims (Quant, Reasoning, English) → Mains (Advanced Data Analysis & General Awareness) → Group Discussion & Interview.", type: "exam", icon: "📝" },
      { title: "Bank Probationary Officer (PO) Induction & Training", duration: "1–2 years", description: "Intensive banking operations training across rural and urban bank branches.", type: "degree", icon: "🏦" },
      { title: "Assistant Manager (Scale-I) — Branch Banking", duration: "Career", description: "Manage retail lending, credit underwriting, Forex transactions, and customer financial services.", type: "career", icon: "💼" },
      { title: "Branch Manager, AGM & Chief General Manager", duration: "Growth", description: "Internal promotional exams lead to Branch Manager, DGM, General Manager, and executive leadership.", type: "growth", icon: "⭐" }
    ]
  },

  ca: {
    careerId: "ca",
    careerName: "Chartered Accountant (ICAI CA)",
    totalDuration: "~5–6 years after 10th",
    steps: [
      { title: "10th Class (SSC)", duration: "", description: "Pass 10th with strong mathematical inclination, analytical precision, and interest in commerce.", type: "start", icon: "📚" },
      { title: "Intermediate — MEC / CEC Stream", duration: "2 years", description: "Commerce with Mathematics or Economics provides foundational accounting, taxation, and law concepts.", type: "education", icon: "📈" },
      { title: "CA Foundation Examination (ICAI)", duration: "Exam", description: "First entrance test covering Accounting, Business Laws, Quantitative Aptitude, and Business Economics.", type: "exam", icon: "📝" },
      { title: "CA Intermediate Examination (8 Papers)", duration: "9 months", description: "Intensive 8-paper syllabus covering Advanced Accounting, Corporate Laws, Costing, Direct & Indirect Taxation, and Auditing.", type: "degree", icon: "📖" },
      { title: "Practical Articleship Training (Big 4 / CA Firms)", duration: "2–3 years", description: "Mandatory rigorous hands-on audit and tax filing experience under a practicing Chartered Accountant.", type: "degree", icon: "💼" },
      { title: "CA Final Examination (Group I & II)", duration: "Exam", description: "Elite-level comprehensive examination in Financial Reporting, Strategic Financial Management, and International Tax.", type: "exam", icon: "🎯" },
      { title: "Qualified Chartered Accountant (FCA / Partner)", duration: "Career", description: "Sign audit reports, lead corporate finance, advise multinational corporations, or run your own CA firm.", type: "career", icon: "🏆" }
    ]
  },

  designer: {
    careerId: "designer",
    careerName: "Graphic & UI/UX Designer",
    totalDuration: "~4–5 years after 10th",
    steps: [
      { title: "10th Class (SSC)", duration: "", description: "Complete 10th exploring sketching, digital art, color sense, and creative problem solving.", type: "start", icon: "🎨" },
      { title: "Intermediate (Any Stream — Arts / MPC / CEC)", duration: "2 years", description: "Any stream is valid. Focus on building an artistic portfolio and visual communication skills.", type: "education", icon: "🖌️" },
      { title: "Design Entrance Exams (UCEED / NID DAT / NIFT)", duration: "Exam", description: "Crack national design entrance exams to enter prestigious design institutes like NID, IIT-IDC, or NIFT.", type: "exam", icon: "📝" },
      { title: "B.Des in Graphic / Communication / UI-UX Design", duration: "4 years", description: "Professional degree covering typography, visual branding, user research, wireframing, and Figma prototyping.", type: "degree", icon: "🎓" },
      { title: "Design Portfolio & Industry Internships", duration: "Ongoing", description: "Build 5+ polished real-world case studies on Behance and Dribbble showcasing product UX workflows.", type: "education", icon: "💻" },
      { title: "Junior UI/UX or Graphic Designer — Tech/Agencies", duration: "Career", description: "Join tech startups, design studios, or multinational corporations designing user-centric interfaces.", type: "career", icon: "🚀" },
      { title: "Lead Product Designer & Creative Director", duration: "Growth", description: "Advance to Senior Product Designer, UX Architect, Design Director, or build a specialized design agency.", type: "growth", icon: "🏆" }
    ]
  },

  pharmacist: {
    careerId: "pharmacist",
    careerName: "Pharmacist / Drug Inspector (B.Pharm)",
    totalDuration: "~6 years after 10th",
    steps: [
      { title: "10th Class (SSC)", duration: "", description: "Pass 10th with interest in chemistry, biology, and medicinal sciences.", type: "start", icon: "🧪" },
      { title: "Intermediate — BiPC / MPC Stream", duration: "2 years", description: "BiPC or MPC stream with Chemistry and Biology/Maths fundamentals.", type: "education", icon: "🔬" },
      { title: "Pharmacy Entrance Exams (EAMCET / GPAT)", duration: "Exam", description: "State EAMCET exam for admission to government and top private pharmacy colleges.", type: "exam", icon: "📝" },
      { title: "Bachelor of Pharmacy (B.Pharm Degree)", duration: "4 years", description: "Study pharmaceutics, pharmacology, medicinal chemistry, clinical trials, and drug formulation.", type: "degree", icon: "🎓" },
      { title: "State Pharmacy Council Registered Pharmacist", duration: "Exam", description: "Official registration granting legal license to dispense medicines and run clinical pharmacies.", type: "degree", icon: "💊" },
      { title: "Clinical Pharmacist / Pharma Production Executive", duration: "Career", description: "Work in hospital pharmacy, pharma R&D plants, or multinational healthcare formulation labs.", type: "career", icon: "🏥" },
      { title: "Drug Inspector (Govt) / Pharma R&D Scientist", duration: "Growth", description: "Crack state Drug Inspector exams or complete M.Pharm/Pharm.D for senior regulatory and research leadership.", type: "growth", icon: "🏆" }
    ]
  },

  engineer: {
    careerId: "engineer",
    careerName: "Core Engineer (Mechanical / Civil / EEE)",
    totalDuration: "~6 years after 10th",
    steps: [
      { title: "10th Class (SSC)", duration: "", description: "Complete 10th focusing on physics, mathematics, and building curiosity for machines & structures.", type: "start", icon: "⚙️" },
      { title: "Intermediate — MPC Stream", duration: "2 years", description: "Mathematics, Physics, Chemistry stream with intensive problem-solving and mechanics concepts.", type: "education", icon: "📐" },
      { title: "Engineering Entrance Tests (JEE / EAMCET / BITSAT)", duration: "Exam", description: "Competitive entrance tests for IITs, NITs, BITS, and premier state university engineering colleges.", type: "exam", icon: "📝" },
      { title: "B.Tech in Mechanical / Civil / Electrical Engineering", duration: "4 years", description: "Study thermodynamics, structural engineering, electrical machines, CAD modeling, and industrial labs.", type: "degree", icon: "🎓" },
      { title: "Core Industry Internships & Project Work", duration: "Years 3–4", description: "Hands-on site training in manufacturing plants, construction projects, or power substations.", type: "education", icon: "🏭" },
      { title: "Graduate Engineer Trainee (GET) — Core Sector", duration: "Career", description: "Join PSUs (L&T, Tata Motors, BHEL, ONGC, NTPC) or infrastructure MNCs as site/design engineer.", type: "career", icon: "👷" },
      { title: "GATE Exam / Project Manager / Chief Engineer", duration: "Growth", description: "Crack GATE for PSU Executive Engineer jobs or Master's (M.Tech), leading mega infrastructure projects.", type: "growth", icon: "🏆" }
    ]
  },

  architect: {
    careerId: "architect",
    careerName: "Architect (NATA / B.Arch)",
    totalDuration: "~7 years after 10th",
    steps: [
      { title: "10th Class (SSC)", duration: "", description: "Pass 10th with strong geometric drawing skills, spatial visualization, and mathematics.", type: "start", icon: "🏛️" },
      { title: "Intermediate — MPC Stream", duration: "2 years", description: "Mathematics and Physics are compulsory prerequisites for architectural council eligibility.", type: "education", icon: "📐" },
      { title: "NATA / JEE Main Paper-2 Architecture Exam", duration: "Exam", description: "National Aptitude Test in Architecture (NATA) evaluating drawing aptitude, proportion, and visual thinking.", type: "exam", icon: "📝" },
      { title: "Bachelor of Architecture (B.Arch Degree)", duration: "5 years", description: "Comprehensive 5-year studio program covering building construction, urban design, CAD, Revit, and landscape design.", type: "degree", icon: "🎓" },
      { title: "Architectural Apprenticeship / Studio Internship", duration: "1 year", description: "Practical training in recognized architectural design studios working on real building sites.", type: "degree", icon: "🏗️" },
      { title: "Council of Architecture (COA) License & Practice", duration: "Career", description: "Register with COA to legally stamp building plans, lead architectural consultancies, or design sustainable skyscrapers.", type: "career", icon: "🏢" },
      { title: "Urban Planner / Principal Architect / Own Firm", duration: "Growth", description: "Earn M.Arch in Urban Design, Landscape, or run a prestigious private architecture and master-planning studio.", type: "growth", icon: "🏆" }
    ]
  },

  "navy-airforce": {
    careerId: "navy-airforce",
    careerName: "Indian Navy & Air Force Officer (NDA / AFCAT)",
    totalDuration: "~4–6 years after 10th",
    steps: [
      { title: "10th Class (SSC)", duration: "", description: "Pass 10th with high physical agility, sharp vision, and strong general science basics.", type: "start", icon: "⚓" },
      { title: "Intermediate — MPC Stream (Compulsory)", duration: "2 years", description: "Physics and Mathematics in 12th are mandatory for Navy and Air Force flying wings.", type: "education", icon: "✈️" },
      { title: "NDA Exam / AFCAT / CDSE (UPSC)", duration: "Exam", description: "Clear written exam followed by Pilot Aptitude Battery Test (CPSS) and 5-day SSB interview board.", type: "exam", icon: "📝" },
      { title: "Air Force Academy (AFA) / Indian Naval Academy (INA)", duration: "3–4 years", description: "Specialized military flight training at Dundigal or naval warship navigation training at Ezhimala.", type: "degree", icon: "🛡️" },
      { title: "Flying Officer / Sub-Lieutenant Commissioning", duration: "Career", description: "Command fighter jets (Rafale, Su-30), combat helicopters, or naval destroyers guarding oceans.", type: "career", icon: "🚀" },
      { title: "Flight Lieutenant, Squadron Leader & Commander", duration: "Growth", description: "Promotions based on operational merit, leading air squadrons and missile commands.", type: "growth", icon: "⭐" },
      { title: "Air Marshal / Admiral (Chief of Staff)", duration: "Growth", description: "Attain top military leadership at the highest headquarters of Indian Armed Forces.", type: "growth", icon: "🇮🇳" }
    ]
  },

  "hotel-management": {
    careerId: "hotel-management",
    careerName: "Hotel & Hospitality Manager (BHM / IHM)",
    totalDuration: "~5 years after 10th",
    steps: [
      { title: "10th Class (SSC)", duration: "", description: "Pass 10th focusing on communication fluency, personality, and social grace.", type: "start", icon: "🏨" },
      { title: "Intermediate (Any Stream)", duration: "2 years", description: "Any stream is valid. English communication and interpersonal skills are evaluated.", type: "education", icon: "🗣️" },
      { title: "NCHMCT JEE Entrance Examination", duration: "Exam", description: "National entrance exam for admission into top government Institutes of Hotel Management (IHM).", type: "exam", icon: "📝" },
      { title: "B.Sc in Hospitality & Hotel Administration", duration: "3 years", description: "Specialized training in Front Office, Food & Beverage, Housekeeping, and Culinary Arts.", type: "degree", icon: "🎓" },
      { title: "Luxury Hotel Industrial Exposure (6 Months)", duration: "Internship", description: "Rigorous operational training at 5-star properties (Taj, Oberoi, Marriott, Hyatt).", type: "degree", icon: "🛎️" },
      { title: "Management Trainee (MT) / Operations Executive", duration: "Career", description: "Fast-track management training leading to Assistant Manager roles in luxury hospitality.", type: "career", icon: "💼" },
      { title: "General Manager (GM) / Luxury Resort Director", duration: "Growth", description: "Lead multi-million dollar luxury hotels, international cruise liners, or global airline hospitality.", type: "growth", icon: "🏆" }
    ]
  },

  sports: {
    careerId: "sports",
    careerName: "Professional Athlete / Sports Coach",
    totalDuration: "~5–8 years after 10th",
    steps: [
      { title: "10th Class (SSC)", duration: "", description: "Pursue 10th while training daily in your chosen sport (Cricket, Athletics, Badminton, Kabaddi).", type: "start", icon: "🏆" },
      { title: "Intermediate + State/National Sports Tournaments", duration: "2 years", description: "Represent district and state teams in school games federations and national championships.", type: "education", icon: "🥇" },
      { title: "Bachelor of Physical Education (B.P.Ed) / Sports Science", duration: "3–4 years", description: "Formal degree in exercise physiology, sports biomechanics, injury prevention, and athletic conditioning.", type: "degree", icon: "🎓" },
      { title: "Sports Authority of India (SAI) / NIS Coaching Diploma", duration: "1 year", description: "Prestigious NIS coaching diploma at Netaji Subhas National Institute of Sports, Patiala.", type: "degree", icon: "📋" },
      { title: "Professional Player / District Sports Officer (DSO)", duration: "Career", description: "Compete in national leagues, secure government jobs under sports quota, or train young athletes.", type: "career", icon: "🏃" },
      { title: "National Coach / High-Performance Sports Director", duration: "Growth", description: "Train Olympic and national teams, head sports franchises, or launch private athletic academies.", type: "growth", icon: "⭐" }
    ]
  },

  "govt-jobs": {
    careerId: "govt-jobs",
    careerName: "Government Administrative Officer (APPSC / SSC CGL)",
    totalDuration: "~5–6 years after 10th",
    steps: [
      { title: "10th Class (SSC)", duration: "", description: "Pass 10th with disciplined reading habits, general knowledge, and Indian history basics.", type: "start", icon: "📋" },
      { title: "Intermediate (Any Stream — CEC / HEC / MPC)", duration: "2 years", description: "Any group is eligible. Arts, Commerce, or Science provide broad competitive foundations.", type: "education", icon: "📚" },
      { title: "Bachelor's Degree (Any Discipline)", duration: "3–4 years", description: "Graduate with any recognized degree (B.A, B.Com, B.Sc, B.Tech) required for Group-1/2 and SSC CGL.", type: "degree", icon: "🎓" },
      { title: "APPSC Group-1 / Group-2 / SSC CGL Examination", duration: "Exam", description: "Rigorous competitive exam covering Indian Constitution, Economy, History, Aptitude, and Current Affairs.", type: "exam", icon: "📝" },
      { title: "State Administrative Academy Training", duration: "6–12 months", description: "Administrative training in public service delivery, treasury rules, revenue administration, and governance.", type: "degree", icon: "🏛️" },
      { title: "Gazetted Officer (Deputy Collector / ACTO / Tahsildar)", duration: "Career", description: "Serve as a gazetted government officer implementing government welfare programs and district governance.", type: "career", icon: "🇮🇳" },
      { title: "Joint Collector / Head of Department (IAS Cadre)", duration: "Growth", description: "Merit promotions to Joint Collector, District Collector, and conferment into Indian Administrative Service (IAS).", type: "growth", icon: "⭐" }
    ]
  },

  scientist: {
    careerId: "scientist",
    careerName: "Research Scientist (ISRO / DRDO / CSIR)",
    totalDuration: "~8–10 years after 10th",
    steps: [
      { title: "10th Class (SSC)", duration: "", description: "Pass 10th with deep curiosity for scientific inquiry, experiments, and mathematics.", type: "start", icon: "🔬" },
      { title: "Intermediate — MPC / BiPC Stream", duration: "2 years", description: "Master Physics, Chemistry, Mathematics, or Biology to qualify for premier science institutes.", type: "education", icon: "🧪" },
      { title: "KVPY / NEST / JEE / IAT Entrance Exams", duration: "Exam", description: "National entrance exams for admission into IISc Bangalore, IISERs, and NISER.", type: "exam", icon: "📝" },
      { title: "BS-MS / B.Sc + M.Sc in Pure Sciences", duration: "5 years", description: "Integrated Master's in Physics, Chemistry, Biology, or Mathematics with laboratory research projects.", type: "degree", icon: "🎓" },
      { title: "CSIR-UGC NET JRF / GATE Examination", duration: "Exam", description: "National eligibility test qualifying you for prestigious Junior Research Fellowships (JRF).", type: "exam", icon: "📜" },
      { title: "Doctor of Philosophy (Ph.D) Research", duration: "4–5 years", description: "Original doctoral research, publishing high-impact peer-reviewed papers in international science journals.", type: "degree", icon: "💡" },
      { title: "Scientist 'C' / 'D' at ISRO, BARC, DRDO, or CSIR", duration: "Career", description: "Conduct space exploration research, defense tech development, or advanced nanotechnology at national labs.", type: "career", icon: "🚀" }
    ]
  },

  entrepreneur: {
    careerId: "entrepreneur",
    careerName: "Entrepreneur / Startup Founder",
    totalDuration: "~4–6 years after 10th",
    steps: [
      { title: "10th Class (SSC)", duration: "", description: "Pass 10th with curiosity for solving real-world problems, trade, and business ideas.", type: "start", icon: "🚀" },
      { title: "Intermediate (Any Stream — MEC / CEC / MPC)", duration: "2 years", description: "Commerce or Science provides financial literacy, analytical logic, and market awareness.", type: "education", icon: "💡" },
      { title: "Bachelor's Degree (BBA / B.Tech / B.Com)", duration: "3–4 years", description: "Build deep domain expertise, technical skills, and valuable peer networks in college.", type: "degree", icon: "🎓" },
      { title: "Market Research, Prototyping & MVP Building", duration: "Ongoing", description: "Identify market gaps, validate user problems, and build a Minimum Viable Product (MVP).", type: "education", icon: "⚡" },
      { title: "Company Incorporation & Seed Funding", duration: "Step", description: "Register your private limited company, pitch to angel investors, incubators (T-Hub), and venture capitalists.", type: "exam", icon: "💼" },
      { title: "Founder & Chief Executive Officer (CEO)", duration: "Career", description: "Lead product development, customer acquisition, hiring talent, and revenue generation.", type: "career", icon: "📈" },
      { title: "Scale-Up, Profitable Enterprise & IPO", duration: "Growth", description: "Scale operations internationally, achieve sustainable profitability, and list company on stock exchanges.", type: "growth", icon: "🏆" }
    ]
  },

  "interior-designer": {
    careerId: "interior-designer",
    careerName: "Interior Designer (B.Des / Space Planning)",
    totalDuration: "~5 years after 10th",
    steps: [
      { title: "10th Class (SSC)", duration: "", description: "Pass 10th with passion for aesthetics, sketching, room layouts, and architectural beauty.", type: "start", icon: "🛋️" },
      { title: "Intermediate (Any Stream)", duration: "2 years", description: "Any stream is eligible. Develop freehand sketching and spatial sense.", type: "education", icon: "🎨" },
      { title: "Design Entrance Exams (NID / UCEED / NIFT)", duration: "Exam", description: "Entrance exam for top national design schools and university interior programs.", type: "exam", icon: "📝" },
      { title: "B.Des / B.Sc in Interior Design", duration: "3–4 years", description: "Learn 3D rendering (SketchUp, 3ds Max, AutoCAD), lighting design, materials, and ergonomics.", type: "degree", icon: "🎓" },
      { title: "Studio Apprenticeship & Portfolio Building", duration: "1 year", description: "Work under senior interior architects managing residential villas, luxury retail, and commercial offices.", type: "education", icon: "📐" },
      { title: "Interior Designer — Design Studio / Firm", duration: "Career", description: "Plan interior spaces, select materials, oversee contractor execution, and deliver dream spaces.", type: "career", icon: "🏡" },
      { title: "Principal Interior Architect / Luxury Firm Owner", duration: "Growth", description: "Launch your independent interior firm catering to celebrity homes, hotels, and corporate campuses.", type: "growth", icon: "🏆" }
    ]
  },

  mba: {
    careerId: "mba",
    careerName: "Business Management Leader (CAT / IIM / MBA)",
    totalDuration: "~5–6 years after 10th",
    steps: [
      { title: "10th Class (SSC)", duration: "", description: "Pass 10th focusing on quantitative aptitude, reading comprehension, and leadership skills.", type: "start", icon: "💼" },
      { title: "Intermediate (Any Stream — MPC / MEC / CEC)", duration: "2 years", description: "Build strong quantitative problem-solving and English communication fundamentals.", type: "education", icon: "📊" },
      { title: "Bachelor's Degree (Any Discipline)", duration: "3–4 years", description: "Graduate in B.Tech, B.Com, BBA, or B.Sc maintaining a top-tier academic GPA.", type: "degree", icon: "🎓" },
      { title: "Common Admission Test (CAT / XAT / GMAT)", duration: "Exam", description: "Elite entrance exam testing Quantitative Aptitude, Data Interpretation, Logical Reasoning, and Verbal Ability.", type: "exam", icon: "📝" },
      { title: "Master of Business Administration (MBA at IIMs)", duration: "2 years", description: "Case-study pedagogy in Marketing, Finance, Strategy, Operations, and Leadership at premier B-schools.", type: "degree", icon: "🏛️" },
      { title: "Management Consultant / Product Manager / Investment Banker", duration: "Career", description: "Join top management consulting firms (McKinsey, BCG), product tech MNCs, or investment banks.", type: "career", icon: "🚀" },
      { title: "Vice President, Managing Director & CEO", duration: "Growth", description: "Rise into C-suite executive leadership managing global business verticals and enterprise growth.", type: "growth", icon: "⭐" }
    ]
  },

  pilot: {
    careerId: "pilot",
    careerName: "Commercial Pilot (CPL / DGCA)",
    totalDuration: "~3–4 years after 10th",
    steps: [
      { title: "10th Class (SSC)", duration: "", description: "Pass 10th with sharp vision, strong spatial awareness, and passion for aviation.", type: "start", icon: "✈️" },
      { title: "Intermediate — MPC Stream (Compulsory)", duration: "2 years", description: "Physics and Mathematics in 12th are mandatory prerequisites set by DGCA India.", type: "education", icon: "📐" },
      { title: "Class 2 & Class 1 DGCA Medical Examination", duration: "Medical", description: "Comprehensive aviation medical fitness tests by DGCA-approved medical examiners.", type: "exam", icon: "🩺" },
      { title: "Flying Training School (IGRUA / Flying Club)", duration: "1.5–2 years", description: "Complete 200 hours of mandatory flight training (solo, cross-country, night flying, and instrument flying).", type: "degree", icon: "🛫" },
      { title: "DGCA Ground Theory Exams & Commercial Pilot License (CPL)", duration: "Exam", description: "Clear 5 DGCA exams (Navigation, Meteorology, Air Regulations, Technical General, RTR) to earn CPL.", type: "degree", icon: "📜" },
      { title: "Type Rating (A320 / B737) & Airline Induction", duration: "Career", description: "Complete type-rating on commercial airliners and join airlines (IndiGo, Air India) as First Officer.", type: "career", icon: "👨‍✈️" },
      { title: "Airline Captain (Commander) & Flight Examiner", duration: "Growth", description: "Accumulate 1,500+ flying hours to upgrade to Captain (Commander) leading international widebody flights.", type: "growth", icon: "🏆" }
    ]
  },

  fashion: {
    careerId: "fashion",
    careerName: "Fashion Designer (NIFT / B.Des)",
    totalDuration: "~5 years after 10th",
    steps: [
      { title: "10th Class (SSC)", duration: "", description: "Pass 10th exploring garment sketching, fabrics, trend awareness, and color palette coordination.", type: "start", icon: "👗" },
      { title: "Intermediate (Any Stream)", duration: "2 years", description: "Any stream is eligible. Build creative illustration and styling portfolio.", type: "education", icon: "🎨" },
      { title: "NIFT Entrance Exam (CAT & GAT + Situation Test)", duration: "Exam", description: "National Institute of Fashion Technology entrance test for admission into premier fashion campuses.", type: "exam", icon: "📝" },
      { title: "B.Des in Fashion Design", duration: "4 years", description: "Study pattern making, garment construction, textile science, fashion draping, and digital fashion CAD.", type: "degree", icon: "🎓" },
      { title: "Graduation Fashion Show & Fashion House Internship", duration: "Final Year", description: "Showcase your designer collection to industry scouts and intern with top fashion houses.", type: "education", icon: "✨" },
      { title: "Fashion Designer / Apparel Brand Stylist", duration: "Career", description: "Work with top fashion labels, export houses, or luxury designer brands creating seasonal collections.", type: "career", icon: "🧵" },
      { title: "Creative Director / Independent Fashion Label", duration: "Growth", description: "Launch your own couture label, showcase at Lakmé Fashion Week, and retail worldwide.", type: "growth", icon: "🏆" }
    ]
  },

  journalist: {
    careerId: "journalist",
    careerName: "Journalist / News Anchor (BJMC / IIMC)",
    totalDuration: "~5 years after 10th",
    steps: [
      { title: "10th Class (SSC)", duration: "", description: "Pass 10th with curiosity for current events, public speaking, reading news, and writing.", type: "start", icon: "📰" },
      { title: "Intermediate (Any Stream — Arts / CEC / MPC)", duration: "2 years", description: "Humanities or Commerce develops understanding of Indian politics, economy, and society.", type: "education", icon: "📚" },
      { title: "Mass Communication Entrance (IIMC / JMI / CUET)", duration: "Exam", description: "Entrance exam for top journalism colleges like IIMC New Delhi, Jamia, and Delhi University.", type: "exam", icon: "📝" },
      { title: "Bachelor in Journalism & Mass Communication (BJMC)", duration: "3 years", description: "Learn news reporting, broadcast journalism, investigative reporting, digital media, and video editing.", type: "degree", icon: "🎓" },
      { title: "Newsroom Internship (Print & TV Media)", duration: "6 Months", description: "Field reporting experience with leading newspapers (The Hindu) or broadcast TV channels.", type: "education", icon: "🎙️" },
      { title: "Special Correspondent / Prime Time News Anchor", duration: "Career", description: "Report breaking news from the field, anchor daily news debates, or run digital media investigations.", type: "career", icon: "📺" },
      { title: "Editor-in-Chief / Media House Director", duration: "Growth", description: "Lead major national news organizations, author books, or head international digital news portals.", type: "growth", icon: "🏆" }
    ]
  },

  ias: {
    careerId: "ias",
    careerName: "Indian Administrative Service (IAS / UPSC)",
    totalDuration: "~6–8 years after 10th",
    steps: [
      { title: "10th Class (SSC)", duration: "", description: "Pass 10th with disciplined reading, moral integrity, and deep curiosity for national affairs.", type: "start", icon: "🏛️" },
      { title: "Intermediate (Any Stream — HEC / CEC / MPC)", duration: "2 years", description: "Any stream is valid. HEC or CEC provides early exposure to Indian history, polity, and economy.", type: "education", icon: "📚" },
      { title: "Bachelor's Degree (Any Discipline)", duration: "3–4 years", description: "Earn any recognized degree (B.A, B.Sc, B.Com, B.Tech) with deep subject mastery for UPSC optional paper.", type: "degree", icon: "🎓" },
      { title: "UPSC Civil Services Examination (CSE)", duration: "1.5 years", description: "Three-stage national exam: Prelims (GS & CSAT) → Mains (9 Written Papers) → Personality Interview at Dholpur House.", type: "exam", icon: "📝" },
      { title: "LBSNAA Mussoorie Officer-Trainee Induction", duration: "2 years", description: "Foundational and professional training in administration, public finance, law, and Bharat Darshan tour.", type: "degree", icon: "🇮🇳" },
      { title: "Sub-Collector / Assistant Secretary Posting", duration: "Career", description: "Begin field administration as Sub-Collector (SDM) managing land revenue, disaster relief, and law & order.", type: "career", icon: "⭐" },
      { title: "District Collector / Cabinet Secretary of India", duration: "Growth", description: "Lead an entire district as Collector & DM, progressing to Chief Secretary and Cabinet Secretary of India.", type: "growth", icon: "🏆" }
    ]
  },

  ips: {
    careerId: "ips",
    careerName: "Indian Police Service Officer (IPS / UPSC)",
    totalDuration: "~6–8 years after 10th",
    steps: [
      { title: "10th Class (SSC)", duration: "", description: "Pass 10th developing high physical fitness, ethical clarity, and mental resilience.", type: "start", icon: "🛡️" },
      { title: "Intermediate (Any Stream)", duration: "2 years", description: "Any group is eligible. Combine academic focus with regular physical stamina training.", type: "education", icon: "🏃" },
      { title: "Bachelor's Degree (Any Discipline)", duration: "3–4 years", description: "Complete any recognized degree required for UPSC Civil Services examination.", type: "degree", icon: "🎓" },
      { title: "UPSC Civil Services Examination (IPS Rank)", duration: "1.5 years", description: "Crack UPSC CSE securing a top rank to be allocated into the elite Indian Police Service.", type: "exam", icon: "📝" },
      { title: "SVP National Police Academy (SVPNPA) Hyderabad", duration: "2 years", description: "Rigorous police leadership training in counter-terrorism, criminal law, weapons combat, and cyber warfare.", type: "degree", icon: "🚔" },
      { title: "Assistant Superintendent of Police (ASP)", duration: "Career", description: "Assume field leadership overseeing sub-divisional police commands and anti-crime operations.", type: "career", icon: "👮" },
      { title: "Superintendent of Police (SP) / Director General (DGP)", duration: "Growth", description: "Lead district police as SP/CP, leading premier agencies like CBI, IB, RAW, NIA, or State DGP.", type: "growth", icon: "🇮🇳" }
    ]
  },

  "air-hostess": {
    careerId: "air-hostess",
    careerName: "Air Hostess / Cabin Crew",
    totalDuration: "~2–3 years after 10th",
    steps: [
      { title: "10th Class (SSC)", duration: "", description: "Pass 10th with emphasis on spoken English, grooming, positive attitude, and fitness.", type: "start", icon: "🛫" },
      { title: "Intermediate (Any Stream)", duration: "2 years", description: "Any 12th stream is eligible. Height criteria: Min 155–157 cm for females, 170 cm for males.", type: "education", icon: "✨" },
      { title: "Cabin Crew Training Diploma / Aviation Certification", duration: "6–12 months", description: "Specialized training in in-flight safety protocols, emergency ditching, first aid, and customer hospitality.", type: "degree", icon: "📜" },
      { title: "Airline Walk-In Interview & Personality Assessment", duration: "Exam", description: "Multi-round selection: Grooming check, group discussion, communication test, and personal interview.", type: "exam", icon: "📝" },
      { title: "Airline Induction & DGCA Safety Clearance", duration: "3 Months", description: "Aircraft-specific emergency simulator training (A320/B777) certified by DGCA.", type: "degree", icon: "✈️" },
      { title: "Flight Attendant / Cabin Crew — Domestic Flights", duration: "Career", description: "Operate domestic flights ensuring passenger safety, comfort, and onboard service delivery.", type: "career", icon: "👩‍✈️" },
      { title: "Senior In-Flight Manager / International Lead", duration: "Growth", description: "Upgrade to International Long-Haul lead, Cabin Safety Instructor, or In-Flight Base Manager.", type: "growth", icon: "🏆" }
    ]
  },

  physiotherapy: {
    careerId: "physiotherapy",
    careerName: "Physiotherapist (BPT / Sports Rehab)",
    totalDuration: "~6 years after 10th",
    steps: [
      { title: "10th Class (SSC)", duration: "", description: "Pass 10th with interest in human anatomy, sports injuries, and movement science.", type: "start", icon: "🏃" },
      { title: "Intermediate — BiPC Stream", duration: "2 years", description: "Biology, Physics, Chemistry stream with strong understanding of human body mechanics.", type: "education", icon: "🔬" },
      { title: "Paramedical / BPT Entrance Examination", duration: "Exam", description: "Entrance tests for admission to government medical colleges and physiotherapy institutes.", type: "exam", icon: "📝" },
      { title: "Bachelor of Physiotherapy (BPT Degree)", duration: "4.5 years", description: "Comprehensive clinical training covering electrotherapy, orthopedics, neurology, and cardiopulmonary rehab.", type: "degree", icon: "🎓" },
      { title: "Compulsory Clinical Hospital Internship", duration: "6 Months", description: "Hands-on patient rehabilitation across trauma wards, ICU, pediatric care, and orthopedic clinics.", type: "degree", icon: "🏥" },
      { title: "Consultant Physiotherapist / Sports Physio", duration: "Career", description: "Work in super-specialty hospitals, private rehabilitation clinics, or athletic sports teams.", type: "career", icon: "💪" },
      { title: "MPT Specialization / Team India Sports Physio", duration: "Growth", description: "Complete Master of Physiotherapy (MPT) in Sports or Neurology, leading national athletic teams.", type: "growth", icon: "🏆" }
    ]
  },

  chef: {
    careerId: "chef",
    careerName: "Executive Chef & Culinary Specialist",
    totalDuration: "~4–6 years after 10th",
    steps: [
      { title: "10th Class (SSC)", duration: "", description: "Pass 10th with passion for cooking, taste profiles, global ingredients, and culinary creativity.", type: "start", icon: "👨‍🍳" },
      { title: "Intermediate (Any Stream)", duration: "2 years", description: "Any stream is valid. Cultivate knife skills and cooking fundamentals at home.", type: "education", icon: "🔪" },
      { title: "Culinary Arts Entrance / NCHMCT JEE", duration: "Exam", description: "Admission tests for top culinary academies and institutes of hotel management.", type: "exam", icon: "📝" },
      { title: "Bachelor in Culinary Arts / Diploma in Food Production", duration: "3 years", description: "Study classic culinary techniques, bakery & pastry, kitchen chemistry, food safety, and menu engineering.", type: "degree", icon: "🎓" },
      { title: "Kitchen Apprenticeship (Commis Chef)", duration: "1–2 years", description: "Work up the kitchen brigade hierarchy starting from Commis III, Commis II, to Chef de Partie.", type: "education", icon: "🍳" },
      { title: "Sous Chef / Head Chef at Fine-Dining Properties", duration: "Career", description: "Manage kitchen operations, develop signature recipes, and curate high-end culinary experiences.", type: "career", icon: "🍽️" },
      { title: "Executive Chef / Michelin Star Restaurateur", duration: "Growth", description: "Lead flagship luxury resort kitchens, host television shows, or launch your own award-winning restaurant.", type: "growth", icon: "⭐" }
    ]
  },

  psychologist: {
    careerId: "psychologist",
    careerName: "Clinical Psychologist & Counsellor (RCI)",
    totalDuration: "~7–8 years after 10th",
    steps: [
      { title: "10th Class (SSC)", duration: "", description: "Pass 10th with deep empathy, active listening, and interest in human behavior and mental health.", type: "start", icon: "🧠" },
      { title: "Intermediate (Any Stream — Arts / BiPC / CEC)", duration: "2 years", description: "Humanities or Science builds understanding of biological psychology and social dynamics.", type: "education", icon: "📖" },
      { title: "B.A / B.Sc in Psychology", duration: "3 years", description: "Undergraduate study in cognitive psychology, abnormal psychology, research statistics, and developmental phases.", type: "degree", icon: "🎓" },
      { title: "Master's Degree: M.A / M.Sc in Clinical Psychology", duration: "2 years", description: "Advanced diagnostic assessments, psychometric testing, cognitive behavioral therapy (CBT), and psychotherapy.", type: "degree", icon: "📝" },
      { title: "M.Phil in Clinical Psychology (RCI Recognized)", duration: "2 years", description: "Mandatory Rehabilitation Council of India (RCI) clinical training at premier hospitals (NIMHANS).", type: "degree", icon: "🏥" },
      { title: "Licensed Clinical Psychologist / Mental Health Specialist", duration: "Career", description: "Diagnose psychological disorders, conduct therapy sessions, and support mental wellness in clinics.", type: "career", icon: "🌱" },
      { title: "Doctor of Psychology (Psy.D) / Private Practice Owner", duration: "Growth", description: "Establish high-impact clinical practices, author mental wellness programs, and lead hospital psychology depts.", type: "growth", icon: "🏆" }
    ]
  },

  "environmental-consultant": {
    careerId: "environmental-consultant",
    careerName: "Environmental Consultant & Sustainability Specialist",
    totalDuration: "~5–7 years after 10th",
    steps: [
      { title: "10th Class (SSC)", duration: "", description: "Pass 10th with passion for climate action, ecology, biodiversity, and clean energy.", type: "start", icon: "🌱" },
      { title: "Intermediate — BiPC / MPC Stream", duration: "2 years", description: "Biology or Mathematics with Chemistry provides the scientific base for environmental chemistry.", type: "education", icon: "🔬" },
      { title: "B.Sc / B.Tech in Environmental Science / Engineering", duration: "3–4 years", description: "Study ecology, air and water pollution control, GIS mapping, environmental laws, and ESG frameworks.", type: "degree", icon: "🎓" },
      { title: "M.Sc in Environmental Management / Climate Studies", duration: "2 years", description: "Specialize in carbon footprint accounting, renewable energy systems, and industrial impact assessments.", type: "degree", icon: "🌍" },
      { title: "Environmental Impact Assessment (EIA) Certification", duration: "Exam", description: "NABET / QCI accredited certification for leading industrial environmental clearances.", type: "exam", icon: "📜" },
      { title: "Environmental Consultant — Corporate / Govt Projects", duration: "Career", description: "Conduct EIA studies for infrastructure projects, guide ESG compliance, and audit carbon emissions.", type: "career", icon: "🏭" },
      { title: "Chief Sustainability Officer (CSO) / UN Policy Advisor", duration: "Growth", description: "Lead global corporate net-zero strategies, direct sustainability funds, or advise international bodies.", type: "growth", icon: "🏆" }
    ]
  },

  archaeologist: {
    careerId: "archaeologist",
    careerName: "Archaeologist & Heritage Conservator (ASI)",
    totalDuration: "~7–8 years after 10th",
    steps: [
      { title: "10th Class (SSC)", duration: "", description: "Pass 10th with fascination for ancient civilizations, monuments, and historical relics.", type: "start", icon: "🏺" },
      { title: "Intermediate — HEC / Arts Stream", duration: "2 years", description: "History, Economics, and Civics provide foundational historical timelines and cultural contexts.", type: "education", icon: "📜" },
      { title: "B.A in Ancient Indian History, Culture & Archaeology", duration: "3 years", description: "Study prehistoric archaeology, numismatics, epigraphy, iconography, and ancient architecture.", type: "degree", icon: "🎓" },
      { title: "M.A in Archaeology / Heritage Conservation", duration: "2 years", description: "Advanced excavation methodologies, radiocarbon dating, stratigraphy, and museum curation.", type: "degree", icon: "🏛️" },
      { title: "Postgraduate Diploma in Archaeology (PGDA) at ASI", duration: "2 years", description: "Premier field excavation training at the Institute of Archaeology, Archaeological Survey of India.", type: "degree", icon: "⛏️" },
      { title: "Assistant Archaeologist — Archaeological Survey of India (ASI)", duration: "Career", description: "Lead historical excavation digs, preserve protected UNESCO monuments, and document ancient artifacts.", type: "career", icon: "🔍" },
      { title: "Superintending Archaeologist / Museum Director", duration: "Growth", description: "Head ASI regional circles, direct national museums, or lead international archaeological expeditions.", type: "growth", icon: "🏆" }
    ]
  },

  nutritionist: {
    careerId: "nutritionist",
    careerName: "Nutritionist & Clinical Dietitian (IDA)",
    totalDuration: "~5–6 years after 10th",
    steps: [
      { title: "10th Class (SSC)", duration: "", description: "Pass 10th with interest in healthy lifestyle, food biochemistry, and preventive wellness.", type: "start", icon: "🥗" },
      { title: "Intermediate — BiPC Stream", duration: "2 years", description: "Biology, Chemistry, and Physics form the prerequisite science base for nutrition studies.", type: "education", icon: "🔬" },
      { title: "B.Sc in Clinical Nutrition & Dietetics / Food Science", duration: "3 years", description: "Study human nutritional physiology, therapeutic diets, biochemical nutrition, and food microbiology.", type: "degree", icon: "🎓" },
      { title: "M.Sc in Food & Nutrition / Sports Nutrition", duration: "2 years", description: "Advanced clinical diet therapy for diabetes, oncology, pediatrics, and high-performance athletics.", type: "degree", icon: "🍎" },
      { title: "Hospital Dietetics Internship (6 Months)", duration: "Internship", description: "Clinical training in hospital inpatient departments creating individualized patient diet plans.", type: "degree", icon: "🏥" },
      { title: "Registered Dietitian (RD) Examination (IDA)", duration: "Exam", description: "Clear Indian Dietetic Association examination to legally practice as a Registered Dietitian.", type: "exam", icon: "📜" },
      { title: "Chief Clinical Dietitian / Celebrity Sports Nutritionist", duration: "Career", description: "Manage hospital dietetics departments, advise athletic sports teams, or launch private wellness clinics.", type: "career", icon: "🏆" }
    ]
  },

  veterinarian: {
    careerId: "veterinarian",
    careerName: "Veterinary Doctor (B.V.Sc & AH)",
    totalDuration: "~7–8 years after 10th",
    steps: [
      { title: "10th Class (SSC)", duration: "", description: "Pass 10th with genuine love for animals, biology curiosity, and compassionate temperament.", type: "start", icon: "🐾" },
      { title: "Intermediate — BiPC Stream", duration: "2 years", description: "BiPC (Biology, Physics, Chemistry) with top scores for veterinary medical entry.", type: "education", icon: "🔬" },
      { title: "State EAMCET / NEET-UG (Veterinary Quota)", duration: "Exam", description: "Entrance examination for admission into Veterinary Universities (SVVU Tirupati / PVNRTVU).", type: "exam", icon: "📝" },
      { title: "B.V.Sc & A.H (Bachelor of Veterinary Science)", duration: "5.5 years", description: "Study veterinary anatomy, animal surgery, pharmacology, pathology, livestock breeding, and epidemiology.", type: "degree", icon: "🎓" },
      { title: "Compulsory Rotatory Veterinary Internship", duration: "1 year", description: "Clinical hands-on rotations in animal hospitals, dairy farms, equine centers, and zoo clinics.", type: "degree", icon: "🏥" },
      { title: "State Veterinary Council Registration & Practice", duration: "Exam", description: "Register as a certified veterinary physician legally authorized to treat companion and farm animals.", type: "degree", icon: "🐕" },
      { title: "Veterinary Assistant Surgeon (VAS) / Specialist", duration: "Career", description: "Join government animal husbandry departments or run successful multi-specialty pet hospitals.", type: "career", icon: "🩺" }
    ]
  },

  beautician: {
    careerId: "beautician",
    careerName: "Cosmetologist & Beauty Professional",
    totalDuration: "~2–3 years after 10th",
    steps: [
      { title: "10th Class (SSC)", duration: "", description: "Pass 10th with interest in skin wellness, hair styling, cosmetics, and client grooming.", type: "start", icon: "💄" },
      { title: "Intermediate (Any Stream) or Direct Diploma", duration: "2 years", description: "Complete intermediate or join professional cosmetology certification programs directly.", type: "education", icon: "✨" },
      { title: "Diploma in Cosmetology & Aesthetic Skin Care", duration: "1 year", description: "Comprehensive training in clinical skin analysis, hair chemical treatments, bridal makeup, and hygiene.", type: "degree", icon: "📜" },
      { title: "CIDESCO / CIBTAC International Certification", duration: "Exam", description: "World-standard Swiss cosmetology certification qualifying you for luxury international salons and spas.", type: "exam", icon: "🌟" },
      { title: "Salon Apprenticeship & Portfolio Building", duration: "1 year", description: "Hands-on experience in leading salon chains (Lakme, Naturals, Toni&Guy) mastering advanced beauty arts.", type: "education", icon: "✂️" },
      { title: "Senior Cosmetologist / Bridal Makeup Artist", duration: "Career", description: "Provide high-end beauty transformations, bridal packages, and aesthetic skincare therapies.", type: "career", icon: "💅" },
      { title: "Luxury Salon Owner / Celebrity Makeup Director", duration: "Growth", description: "Launch your own chain of signature beauty salons, cosmetic brands, or work in cinema & fashion.", type: "growth", icon: "🏆" }
    ]
  },

  "ai-scientist": {
    careerId: "ai-scientist",
    careerName: "AI Research Scientist & Deep Learning Specialist",
    totalDuration: "~8–10 years after 10th",
    steps: [
      { title: "10th Class (SSC)", duration: "", description: "Pass 10th with exceptional mathematics aptitude, algebra mastery, and algorithmic thinking.", type: "start", icon: "🧠" },
      { title: "Intermediate — MPC Stream", duration: "2 years", description: "Mathematics, Physics, Chemistry with deep focus on calculus, vectors, and linear algebra.", type: "education", icon: "📐" },
      { title: "JEE Advanced / Main Entrance Exam", duration: "Exam", description: "Secure admission in IITs, BITS, or IIITs in Computer Science or Artificial Intelligence branches.", type: "exam", icon: "📝" },
      { title: "B.Tech in Computer Science / AI & ML", duration: "4 years", description: "Study neural networks, probability theory, optimization algorithms, Python, and PyTorch deep learning frameworks.", type: "degree", icon: "🎓" },
      { title: "Research Internship & Top Conference Papers (NeurIPS)", duration: "Years 3–4", description: "Publish original research on computer vision, generative AI, or LLMs at premier academic conferences.", type: "education", icon: "💡" },
      { title: "Master's & Ph.D in Artificial Intelligence", duration: "4–5 years", description: "Doctoral research at top global universities (Stanford, CMU, IISc) on cutting-edge AI foundations.", type: "degree", icon: "🔬" },
      { title: "Staff AI Scientist at Google DeepMind, OpenAI, or Meta", duration: "Career", description: "Develop world-changing foundation models, autonomous agents, and next-generation AGI systems.", type: "career", icon: "🚀" }
    ]
  },

  "data-scientist": {
    careerId: "data-scientist",
    careerName: "Data Scientist & Machine Learning Engineer",
    totalDuration: "~6 years after 10th",
    steps: [
      { title: "10th Class (SSC)", duration: "", description: "Pass 10th focusing on statistics, probability, algebra, and logical reasoning.", type: "start", icon: "📊" },
      { title: "Intermediate — MPC / MEC Stream", duration: "2 years", description: "Mathematics is essential. Build strong foundation in statistics, calculus, and matrix algebra.", type: "education", icon: "📐" },
      { title: "Engineering / Stats Entrance (JEE / ISI / EAMCET)", duration: "Exam", description: "Admission to top colleges in Computer Science, Data Science, or Indian Statistical Institute (ISI).", type: "exam", icon: "📝" },
      { title: "B.Tech in Data Science / CSE or B.Stat", duration: "4 years", description: "Learn Python, SQL, Machine Learning, Big Data (Spark), Data Warehousing, and Predictive Modeling.", type: "degree", icon: "🎓" },
      { title: "Kaggle Competitions & Real-World ML Pipelines", duration: "Ongoing", description: "Build end-to-end predictive models, participate in Kaggle challenges, and deploy ML models to cloud.", type: "education", icon: "⚡" },
      { title: "Associate Data Scientist / ML Engineer", duration: "Career", description: "Analyze massive enterprise datasets, build recommendation systems, and automate business intelligence.", type: "career", icon: "💻" },
      { title: "Principal Data Scientist / Head of Analytics", duration: "Growth", description: "Lead enterprise AI transformation, architect data science strategy, and drive predictive business growth.", type: "growth", icon: "🏆" }
    ]
  },

  "robotics-engineer": {
    careerId: "robotics-engineer",
    careerName: "Robotics & Automation Engineer",
    totalDuration: "~6–7 years after 10th",
    steps: [
      { title: "10th Class (SSC)", duration: "", description: "Pass 10th with enthusiasm for electronics, robotics competitions, microcontrollers, and coding.", type: "start", icon: "🤖" },
      { title: "Intermediate — MPC Stream", duration: "2 years", description: "Physics and Mathematics mastery for understanding kinematics, dynamics, and circuit theory.", type: "education", icon: "📐" },
      { title: "Engineering Entrance Exams (JEE / BITSAT / EAMCET)", duration: "Exam", description: "Entrance exam for Mech, Mechatronics, Electrical, or Robotics engineering programs.", type: "exam", icon: "📝" },
      { title: "B.Tech in Mechatronics / Robotics / Electronics", duration: "4 years", description: "Multidisciplinary degree combining mechanical design, sensors, embedded systems (ROS, C++), and computer vision.", type: "degree", icon: "🎓" },
      { title: "Robotics Club Competitions & Lab Prototyping", duration: "Years 2–4", description: "Build autonomous mobile robots, robotic arms, and IoT automation hardware prototypes.", type: "education", icon: "⚡" },
      { title: "Robotics Automation Engineer — Industry / R&D", duration: "Career", description: "Design industrial robotic arms, automated warehouse robots (AGVs), and surgical robotics systems.", type: "career", icon: "🏭" },
      { title: "Chief Robotics Architect / Autonomous Systems Lead", duration: "Growth", description: "Lead self-driving vehicle teams (Tesla, Waymo), aerospace robotics, or advanced defense drones.", type: "growth", icon: "🚀" }
    ]
  },

  "forensic-scientist": {
    careerId: "forensic-scientist",
    careerName: "Forensic Scientist (Crime Investigation / FSL)",
    totalDuration: "~6–7 years after 10th",
    steps: [
      { title: "10th Class (SSC)", duration: "", description: "Pass 10th with sharp observational skills, curiosity for criminal investigation and science.", type: "start", icon: "🔍" },
      { title: "Intermediate — BiPC / MPC Stream", duration: "2 years", description: "Biology, Chemistry, and Physics form the core scientific base for forensic evidence examination.", type: "education", icon: "🔬" },
      { title: "NFSU Entrance Exam / University CET", duration: "Exam", description: "Admission test for National Forensic Sciences University (NFSU Gandhinagar) and central universities.", type: "exam", icon: "📝" },
      { title: "B.Sc in Forensic Science", duration: "3 years", description: "Study crime scene investigation, fingerprint analysis, forensic toxicology, ballistic analysis, and cyber forensics.", type: "degree", icon: "🎓" },
      { title: "M.Sc in Forensic Science / DNA Profiling", duration: "2 years", description: "Specialize in Forensic DNA profiling, Digital Forensics, Questioned Documents, or Narco-Analysis.", type: "degree", icon: "🧬" },
      { title: "Scientific Officer — Forensic Science Laboratory (FSL)", duration: "Career", description: "Analyze crime scene evidence, prepare expert scientific court reports, and assist police investigations.", type: "career", icon: "🛡️" },
      { title: "Director of FSL / Central Forensic Advisor", duration: "Growth", description: "Head Central Forensic Science Laboratories (CFSL), advise CBI/NIA, and pioneer national forensic tech.", type: "growth", icon: "🏆" }
    ]
  },

  horticulturist: {
    careerId: "horticulturist",
    careerName: "Horticulturist & Plantation Specialist",
    totalDuration: "~6 years after 10th",
    steps: [
      { title: "10th Class (SSC)", duration: "", description: "Pass 10th with interest in floriculture, organic fruits, landscaping, and plant breeding.", type: "start", icon: "🪴" },
      { title: "Intermediate — BiPC Stream", duration: "2 years", description: "Biology and Chemistry provide the botanical and biochemical foundation for plant genetics.", type: "education", icon: "🌿" },
      { title: "State EAMCET (Agri/Horti Stream) / ICAR AIEEA", duration: "Exam", description: "Entrance exam for admission to Horticultural Universities (Dr. YSRHU / SKLTSHU).", type: "exam", icon: "📝" },
      { title: "B.Sc (Hons) Horticulture Degree", duration: "4 years", description: "Study pomology (fruits), olericulture (vegetables), floriculture, greenhouse technology, and post-harvest management.", type: "degree", icon: "🎓" },
      { title: "Rural Horticultural Work Experience (RHWE)", duration: "6 Months", description: "Practical village immersion program solving real farmer crop issues and greenhouse operations.", type: "education", icon: "🚜" },
      { title: "Horticulture Officer (HO) — State Govt / Agri MNCs", duration: "Career", description: "Manage government horticulture schemes, polyhouse cultivation, fruit orchards, and nursery development.", type: "career", icon: "🍎" },
      { title: "Assistant Director of Horticulture (ADH) / Export Head", duration: "Growth", description: "Advance to District Horticulture Officer (DHO) or head commercial exotic fruit and flower export businesses.", type: "growth", icon: "🏆" }
    ]
  },

  stenographer: {
    careerId: "stenographer",
    careerName: "Court & Government Stenographer (SSC Steno)",
    totalDuration: "~2–3 years after 10th",
    steps: [
      { title: "10th Class (SSC)", duration: "", description: "Pass 10th with sharp hearing, rapid handwriting reflexes, and high English/Telugu typing speed.", type: "start", icon: "⌨️" },
      { title: "Intermediate (Any Stream)", duration: "2 years", description: "Any stream is eligible. Minimum qualification for SSC Stenographer Grade C & D notifications.", type: "education", icon: "📚" },
      { title: "Professional Shorthand & Typing Certification", duration: "1 year", description: "Master Pitman shorthand speed (80–100 wpm) and high-speed computer typing (40+ wpm).", type: "degree", icon: "📜" },
      { title: "SSC Stenographer Exam (Grade C & D) / High Court Steno", duration: "Exam", description: "Computer Based Test (General Awareness, Reasoning, English) followed by the mandatory 100 wpm Shorthand Skill Test.", type: "exam", icon: "📝" },
      { title: "Stenographer Grade 'D' / High Court Personal Assistant", duration: "Career", description: "Record verbatim court proceedings, transcribe judicial judgments, and manage ministerial correspondence.", type: "career", icon: "⚖️" },
      { title: "Senior Stenographer / Private Secretary (Gazetted)", duration: "Growth", description: "Promote to Senior Personal Assistant (PA) and Private Secretary (PS) to Judges and Central Ministry Secretaries.", type: "growth", icon: "🏆" }
    ]
  },

  astrophysicist: {
    careerId: "astrophysicist",
    careerName: "Astrophysicist & Space Scientist (ISRO / NASA)",
    totalDuration: "~8–10 years after 10th",
    steps: [
      { title: "10th Class (SSC)", duration: "", description: "Pass 10th with deep wonder for stars, galaxies, rocket propulsion, and advanced mathematics.", type: "start", icon: "🔭" },
      { title: "Intermediate — MPC Stream", duration: "2 years", description: "Intensive Mathematics and Physics concepts in mechanics, electromagnetism, and calculus.", type: "education", icon: "📐" },
      { title: "JEE Advanced / IIST Entrance Exam", duration: "Exam", description: "Top ranks for admission into Indian Institute of Space Science and Technology (IIST) or IITs.", type: "exam", icon: "📝" },
      { title: "B.Tech in Aerospace/Avionics or B.Sc Physics", duration: "4 years", description: "Undergraduate foundation in orbital mechanics, computational astrophysics, and quantum physics.", type: "degree", icon: "🎓" },
      { title: "M.Sc / Integrated Ph.D in Astronomy & Astrophysics", duration: "2–3 years", description: "Advanced study at premier research institutes like IIA Bangalore, IUCAA Pune, or TIFR Mumbai.", type: "degree", icon: "🌌" },
      { title: "Doctoral Research (Ph.D) & Observational Astronomy", duration: "4 years", description: "Analyze space telescope data (James Webb, Astrosat) on black holes, cosmology, and exoplanets.", type: "degree", icon: "💡" },
      { title: "Scientist / Astrophysicist at ISRO, NASA, or ESA", duration: "Career", description: "Lead deep space satellite missions, planetary rovers, and cosmic research programs.", type: "career", icon: "🚀" }
    ]
  },

  "cyber-security": {
    careerId: "cyber-security",
    careerName: "Cyber Security Specialist & Ethical Hacker",
    totalDuration: "~5–6 years after 10th",
    steps: [
      { title: "10th Class (SSC)", duration: "", description: "Pass 10th with curiosity for computer networks, cryptography, and defense against hackers.", type: "start", icon: "🛡️" },
      { title: "Intermediate — MPC Stream", duration: "2 years", description: "Mathematics and Physics to develop algorithmic logic and networking fundamentals.", type: "education", icon: "📐" },
      { title: "Engineering Entrance (JEE / State EAMCET)", duration: "Exam", description: "Admission into Computer Science, Cybersecurity, or Information Technology degree programs.", type: "exam", icon: "📝" },
      { title: "B.Tech in Computer Science / Cybersecurity", duration: "4 years", description: "Study network security, operating systems, cryptography, reverse engineering, and threat modeling.", type: "degree", icon: "🎓" },
      { title: "Industry Certifications: CEH, CompTIA Security+, OSCP", duration: "Certifications", description: "Earn Certified Ethical Hacker (CEH) and offensive security certifications with hands-on labs.", type: "degree", icon: "📜" },
      { title: "Security Analyst / Penetration Tester — First Role", duration: "Career", description: "Defend corporate networks, conduct vulnerability penetration tests, and manage SOC operations.", type: "career", icon: "💻" },
      { title: "Chief Information Security Officer (CISO)", duration: "Growth", description: "Lead national cybersecurity defense, head global security operations, and direct threat intelligence.", type: "growth", icon: "🏆" }
    ]
  },

  "drone-pilot": {
    careerId: "drone-pilot",
    careerName: "Drone Pilot & UAV Specialist (DGCA License)",
    totalDuration: "~2–3 years after 10th",
    steps: [
      { title: "10th Class (SSC)", duration: "", description: "Pass 10th with interest in drone technology, aerial filming, sensors, and remote flight control.", type: "start", icon: "🛸" },
      { title: "Intermediate (Any Stream — MPC preferred)", duration: "2 years", description: "MPC provides useful knowledge of electronics, aerodynamics, and spatial navigation.", type: "education", icon: "✈️" },
      { title: "DGCA Medical Examination", duration: "Medical", description: "Standard medical fitness check required to qualify for DGCA Remote Pilot Certification.", type: "exam", icon: "🩺" },
      { title: "DGCA-Approved Remote Pilot Training (RPTO)", duration: "5–7 Days", description: "Intensive flight simulator and multi-rotor field training covering airspace regulations and emergency procedures.", type: "degree", icon: "📜" },
      { title: "Remote Pilot Certificate (RPC) issued by DGCA", duration: "License", description: "Official commercial drone pilot license valid for flying micro and small category drones across India.", type: "degree", icon: "🎯" },
      { title: "Commercial Drone Pilot — Agriculture, Mapping & Cinema", duration: "Career", description: "Fly drones for precision agricultural pesticide spraying, GIS land survey, infrastructure inspection, and filmmaking.", type: "career", icon: "🚁" },
      { title: "Chief UAV Fleet Commander / Drone Tech Entrepreneur", duration: "Growth", description: "Manage enterprise drone fleets, launch drone survey consultancies, or train next-gen remote pilots.", type: "growth", icon: "🏆" }
    ]
  },

  epigraphist: {
    careerId: "epigraphist",
    careerName: "Epigraphist & Inscriptions Specialist",
    totalDuration: "~7–8 years after 10th",
    steps: [
      { title: "10th Class (SSC)", duration: "", description: "Pass 10th with deep love for ancient Indian history, scripts, and temple heritage.", type: "start", icon: "📜" },
      { title: "Intermediate — HEC / Arts Stream", duration: "2 years", description: "History, Telugu/Sanskrit literature, and Civics build foundational context for regional ancient scripts.", type: "education", icon: "🏛️" },
      { title: "B.A in History / Classical Languages (Sanskrit / Telugu)", duration: "3 years", description: "Study ancient Indian history, early kingdoms, classical grammar, and historical archaeology.", type: "degree", icon: "🎓" },
      { title: "M.A in Ancient Indian History & Epigraphy", duration: "2 years", description: "Master ancient scripts: Brahmi, Kharosthi, Vatteluttu, Grantha, and ancient Kannada/Telugu lipi.", type: "degree", icon: "📖" },
      { title: "Diploma in Epigraphy & Palaeography (ASI)", duration: "1 year", description: "Field training in deciphering stone inscriptions, copper plates, estampage techniques, and dating.", type: "degree", icon: "🔍" },
      { title: "Epigraphist — Archaeological Survey of India (ASI)", duration: "Career", description: "Document newly discovered temple inscriptions, publish Epigraphia Indica volumes, and reconstruct history.", type: "career", icon: "🏺" },
      { title: "Director of Epigraphy / National Scholar", duration: "Growth", description: "Head the Epigraphy Branch of ASI, author monumental historical treatises, and advise global universities.", type: "growth", icon: "🏆" }
    ]
  },

  "fitness-coach": {
    careerId: "fitness-coach",
    careerName: "Certified Fitness Coach & Strength Trainer",
    totalDuration: "~2–4 years after 10th",
    steps: [
      { title: "10th Class (SSC)", duration: "", description: "Pass 10th with passion for physical training, athletic discipline, and healthy nutrition habits.", type: "start", icon: "🏋️" },
      { title: "Intermediate (Any Stream)", duration: "2 years", description: "Any stream is eligible. Maintain consistent gym conditioning and track athletic progress.", type: "education", icon: "💪" },
      { title: "International Personal Trainer Certification (ACE / ACSM / ISSA)", duration: "6–12 months", description: "Accredited certification covering human anatomy, exercise physiology, biomechanics, and program design.", type: "degree", icon: "📜" },
      { title: "CPR & First Aid AED Certification", duration: "Exam", description: "Mandatory emergency medical and life-saving certification for all fitness trainers.", type: "exam", icon: "❤️" },
      { title: "Gym Floor Trainer & Apprenticeship", duration: "1 year", description: "Coach diverse clients in leading fitness clubs (Cult.fit, Gold's Gym) mastering client retention.", type: "education", icon: "👟" },
      { title: "Senior Strength & Conditioning Coach", duration: "Career", description: "Personal trainer to high-profile clients, corporate executives, and professional athletes.", type: "career", icon: "🔥" },
      { title: "Celebrity Fitness Director / Gym Franchise Owner", duration: "Growth", description: "Launch your own signature fitness studio chain, online coaching brand, or train Olympic sports stars.", type: "growth", icon: "🏆" }
    ]
  },

  "food-safety-officer": {
    careerId: "food-safety-officer",
    careerName: "Food Safety Officer (FSO / FSSAI)",
    totalDuration: "~6 years after 10th",
    steps: [
      { title: "10th Class (SSC)", duration: "", description: "Pass 10th with interest in food science, microbiology, chemistry, and public health hygiene.", type: "start", icon: "🧪" },
      { title: "Intermediate — BiPC / MPC Stream", duration: "2 years", description: "Biology or Mathematics with Chemistry forms the core science eligibility for food technology.", type: "education", icon: "🔬" },
      { title: "State EAMCET / ICAR Entrance Examination", duration: "Exam", description: "Entrance exam for admission into Food Technology, Dairy Tech, or Microbiology degrees.", type: "exam", icon: "📝" },
      { title: "B.Tech in Food Technology / B.Sc in Food Science / Microbiology", duration: "4 years", description: "Study food chemistry, preservation, food toxicology, quality analysis, and food safety standards.", type: "degree", icon: "🎓" },
      { title: "FSSAI / State PSC Food Safety Officer Exam", duration: "Exam", description: "Competitive government examination testing Food Safety and Standards Act (FSSAI Act 2006) and food microbiology.", type: "exam", icon: "📋" },
      { title: "Food Safety Officer (FSO) — Gazetted Officer", duration: "Career", description: "Inspect restaurants, food manufacturing factories, collect food samples for testing, and enforce hygiene laws.", type: "career", icon: "🛡️" },
      { title: "Designated Officer (DO) / Joint Commissioner (Food Safety)", duration: "Growth", description: "Lead district and state food safety administration, issue food licenses, and direct public health audits.", type: "growth", icon: "🏆" }
    ]
  },

  geneticist: {
    careerId: "geneticist",
    careerName: "Geneticist & Biotech Researcher",
    totalDuration: "~8–10 years after 10th",
    steps: [
      { title: "10th Class (SSC)", duration: "", description: "Pass 10th with deep fascination for DNA, cell biology, inheritance traits, and biotechnology.", type: "start", icon: "🧬" },
      { title: "Intermediate — BiPC Stream", duration: "2 years", description: "Biology and Chemistry mastery is essential for genetics, biochemistry, and molecular biology.", type: "education", icon: "🔬" },
      { title: "University Science Entrance (CUET / State CET)", duration: "Exam", description: "Admission to top universities offering Genetics, Biotechnology, or Biochemistry programs.", type: "exam", icon: "📝" },
      { title: "B.Sc in Genetics / Biotechnology / Molecular Biology", duration: "3 years", description: "Study Mendelian genetics, recombinant DNA technology, cell biology, bioinformatics, and immunology.", type: "degree", icon: "🎓" },
      { title: "M.Sc in Human Genetics / Medical Biotechnology", duration: "2 years", description: "Specialized training in CRISPR gene editing, chromosomal karyotyping, genetic counseling, and genomics.", type: "degree", icon: "🧪" },
      { title: "Ph.D in Genetics & Postdoctoral Research", duration: "4–5 years", description: "Doctoral research publishing breakthrough discoveries in genetic therapies, cancer genomics, or crop genetics.", type: "degree", icon: "💡" },
      { title: "Lead Geneticist / Clinical Genomics Director", duration: "Career", description: "Direct genetics diagnostic laboratories, develop gene therapies in pharma MNCs, or lead research at CCMB.", type: "career", icon: "🏆" }
    ]
  },

  "income-tax-officer": {
    careerId: "income-tax-officer",
    careerName: "Income Tax Officer (SSC CGL / IRS)",
    totalDuration: "~5–6 years after 10th",
    steps: [
      { title: "10th Class (SSC)", duration: "", description: "Pass 10th with strong calculation aptitude, reading comprehension, and general awareness.", type: "start", icon: "💼" },
      { title: "Intermediate (Any Stream — CEC / MEC / MPC)", duration: "2 years", description: "Any stream is eligible. Commerce and Mathematics build strong background for tax analysis.", type: "education", icon: "📚" },
      { title: "Bachelor's Degree (Any Discipline)", duration: "3–4 years", description: "Complete any recognized graduation (B.Com, B.A, B.Sc, B.Tech) with good academic record.", type: "degree", icon: "🎓" },
      { title: "Staff Selection Commission Combined Graduate Level (SSC CGL)", duration: "Exam", description: "Tier-1 (Aptitude, Reasoning, English, GS) → Tier-2 (Mathematical Abilities, English, Data Entry) with high merit score.", type: "exam", icon: "📝" },
      { title: "Direct Tax Training at DTRTI (Income Tax Department)", duration: "6 Months", description: "Specialized training in Income Tax Act 1961, tax assessment, search & seizure procedures, and financial fraud detection.", type: "degree", icon: "🏛️" },
      { title: "Income Tax Inspector (ITI) — Investigation & Assessment", duration: "Career", description: "Conduct corporate tax assessments, investigate financial evasion, participate in raids, and secure national revenue.", type: "career", icon: "🔍" },
      { title: "Income Tax Officer (ITO) / Assistant Commissioner", duration: "Growth", description: "Gazetted promotion to Income Tax Officer (ITO), Joint Commissioner, and conferment into Indian Revenue Service (IRS).", type: "growth", icon: "⭐" }
    ]
  },

  "railway-jobs": {
    careerId: "railway-jobs",
    careerName: "Indian Railways Officer & Tech (RRB NTPC / ALP / JE)",
    totalDuration: "~3–5 years after 10th",
    steps: [
      { title: "10th Class (SSC) / ITI", duration: "", description: "Pass 10th with strong arithmetic ability, mechanical curiosity, and reasoning fundamentals.", type: "start", icon: "🚆" },
      { title: "Intermediate / Polytechnic Diploma / Degree", duration: "2–3 years", description: "Diploma/B.Tech for Junior Engineer (JE), Degree for Station Master (NTPC), or ITI/MPC for Loco Pilot (ALP).", type: "education", icon: "🔧" },
      { title: "Railway Recruitment Board (RRB) Examination", duration: "Exam", description: "Computer Based Tests: CBT-1 (General Awareness, Maths, Reasoning) → CBT-2 (Specialized Technical & Aptitude tests).", type: "exam", icon: "📝" },
      { title: "Medical Fitness Test (A1 / A2 / B1 Categories)", duration: "Medical", description: "Strict eyesight (6/6 vision without glasses for ALP) and physical fitness certification by railway doctors.", type: "exam", icon: "🩺" },
      { title: "Zonal Railway Training Institute (ZRTI) Training", duration: "6–12 months", description: "Comprehensive operational training in train signaling, railway track safety, locomotive mechanics, and block working.", type: "degree", icon: "🛤️" },
      { title: "Station Master / Assistant Loco Pilot / Junior Engineer", duration: "Career", description: "Operate major railway stations, drive express passenger locomotives, or maintain railway signal/track infrastructure.", type: "career", icon: "👨‍✈️" },
      { title: "Divisional Operations Manager (DOM) / Senior Section Engineer", duration: "Growth", description: "Promote to Divisional Commercial Manager, Section Engineer, or clear UPSC ESE for Indian Railway Management Service (IRMS).", type: "growth", icon: "🏆" }
    ]
  },

  "speech-pathologist": {
    careerId: "speech-pathologist",
    careerName: "Speech-Language Pathologist & Audiologist (BASLP)",
    totalDuration: "~6 years after 10th",
    steps: [
      { title: "10th Class (SSC)", duration: "", description: "Pass 10th with interest in speech therapy, human biology, sound physics, and helping children.", type: "start", icon: "🗣️" },
      { title: "Intermediate — BiPC / MPC Stream", duration: "2 years", description: "Physics and Chemistry with Biology or Mathematics (minimum 50% marks).", type: "education", icon: "🔬" },
      { title: "All India AIISH Entrance Exam / NEET / State CET", duration: "Exam", description: "National entrance exam for premier institutions like All India Institute of Speech and Hearing (AIISH Mysore).", type: "exam", icon: "📝" },
      { title: "Bachelor of Audiology & Speech-Language Pathology (BASLP)", duration: "4 years", description: "Comprehensive clinical degree in speech disorders, stuttering therapy, cochlear implants, and audiological testing.", type: "degree", icon: "🎓" },
      { title: "Clinical Hospital Internship", duration: "1 year", description: "Hospital rotations evaluating pediatric speech delay, hearing loss diagnostics, and stroke speech rehab.", type: "degree", icon: "🏥" },
      { title: "Rehabilitation Council of India (RCI) Registration", duration: "License", description: "Official RCI license required to practice as certified Audiologist and Speech-Language Pathologist across India.", type: "degree", icon: "📜" },
      { title: "Consultant Speech Pathologist / Audiology Clinic Director", duration: "Career", description: "Treat speech & hearing disorders in super-specialty hospitals, schools, or launch private hearing clinics.", type: "career", icon: "🏆" }
    ]
  },

  "yoga-doctor": {
    careerId: "yoga-doctor",
    careerName: "Yoga & Naturopathy Doctor (BNYS)",
    totalDuration: "~7–8 years after 10th",
    steps: [
      { title: "10th Class (SSC)", duration: "", description: "Pass 10th with passion for holistic health, natural healing, yoga philosophy, and human anatomy.", type: "start", icon: "🧘" },
      { title: "Intermediate — BiPC Stream", duration: "2 years", description: "Compulsory Biology, Physics, and Chemistry (BiPC) stream with minimum 50% marks.", type: "education", icon: "🌿" },
      { title: "State AYUSH NEET Entrance Exam", duration: "Exam", description: "State AYUSH entrance merit ranking for admission into recognized BNYS medical colleges.", type: "exam", icon: "📝" },
      { title: "Bachelor of Naturopathy & Yogic Sciences (BNYS)", duration: "4.5 years", description: "Medical curriculum covering anatomy, physiology, pathology, yoga therapy, hydrotherapy, dietetics, and acupuncture.", type: "degree", icon: "🎓" },
      { title: "Compulsory Rotatory Medical Internship (CRMI)", duration: "1 year", description: "Hospital clinical rotations treating lifestyle diseases, diabetes, hypertension, and stress naturally.", type: "degree", icon: "🏥" },
      { title: "State Medical Council Registration as Naturopathy Doctor", duration: "License", description: "Registered medical practitioner status granting legal doctor title (Dr.) to practice natural medicine.", type: "degree", icon: "📜" },
      { title: "Chief Naturopathy Physician / Holistic Wellness Director", duration: "Career", description: "Lead AYUSH government hospitals, luxury wellness retreats, or run integrative natural medicine clinics.", type: "career", icon: "🏆" }
    ]
  },

};
