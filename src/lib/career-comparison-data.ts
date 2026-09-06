export interface CareerProfile {
  id: string;
  name: string;
  category: string;
  icon: string;
  tagline: string;
  stream: string;
  educationRoute: string;
  durationYears: string;
  estimatedCost: string;
  keyExams: string;
  salaryStarting: string;
  salaryPeak: string;
  workLifeBalance: "High" | "Moderate" | "Demanding" | "Extreme";
  jobDemand: "Very High" | "High" | "Stable" | "Niche / Competitive";
  fieldRatio: string;
  keyPros: string[];
  keyCons: string[];
  backupPlan: string;
  dayInTheLife: {
    workHours: string;
    workEnvironment: string;
    mythsVsReality: { myth: string; reality: string }[];
    timeline: { time: string; title: string; desc: string; icon?: string }[];
    dailyChallenges: string[];
    toolsUsed: string[];
  };
}

export const CAREER_PROFILES: CareerProfile[] = [
  {
    id: "ias",
    name: "IAS (Indian Administrative Service)",
    category: "Civil Services",
    icon: "🏛️",
    tagline: "Drive policy execution, district administration, and public welfare at the highest level.",
    stream: "Any Stream (MPC, BiPC, MEC, CEC, HEC in 10+2)",
    educationRoute: "Any Bachelor Degree + UPSC Civil Services Examination (CSE)",
    durationYears: "3-4 Yrs Graduation + 1-3 Yrs UPSC Prep",
    estimatedCost: "₹50,000 - ₹2.5 Lakhs (Coaching & Books)",
    keyExams: "UPSC CSE (Prelims, Mains, Personality Test)",
    salaryStarting: "₹56,100/mo (Basic) + DA + HRA (approx ₹85,000 net)",
    salaryPeak: "₹2,50,000/mo (Cabinet Secretary rank) + Perks & Accommodation",
    workLifeBalance: "Demanding",
    jobDemand: "Niche / Competitive",
    fieldRatio: "50% Office, 50% District Field Visits",
    keyPros: [
      "Immense social impact affecting millions of citizens",
      "Tremendous prestige, government accommodation, and security",
      "Diverse postings across healthcare, education, revenue, and infrastructure"
    ],
    keyCons: [
      "Extremely competitive selection ratio (< 0.1%)",
      "Political pressure and frequent inter-district transfers",
      "Unpredictable 24/7 emergencies (disasters, law & order)"
    ],
    backupPlan: "State PSC (Group-1/Group-2), RBI Grade B, Banking, Policy Think Tanks, Law/Academia",
    dayInTheLife: {
      workHours: "9:00 AM – 9:00 PM+ (Often on call 24/7 during crises)",
      workEnvironment: "Collectorate Office, Government Secretariat, and on-ground project inspections",
      mythsVsReality: [
        { myth: "IAS officers only sign files in AC chambers.", reality: "They conduct surprise village inspections, manage disaster rescue, and resolve public grievances directly." },
        { myth: "Only toppers from IITs/IIMs crack UPSC.", reality: "Students from any graduation background and local colleges succeed with disciplined reading and answer writing." }
      ],
      timeline: [
        { time: "08:30 AM", title: "Morning Briefing & News Review", desc: "Reviews district law & order reports, intelligence inputs, and newspaper highlights with staff." },
        { time: "10:00 AM", title: "Prajavani / Public Grievance Hearing", desc: "Meets citizens directly to listen to land disputes, ration issues, and welfare pension petitions." },
        { time: "01:00 PM", title: "Department Review Meeting", desc: "Reviews progress with district medical officers, engineers, and education officers on welfare schemes." },
        { time: "03:30 PM", title: "On-Ground Inspection", desc: "Field visit to inspect construction of a government hospital and irrigation canal project." },
        { time: "06:30 PM", title: "File Clearance & Policy Directives", desc: "Scrutinizes and signs official government files, budget allocations, and replies to state ministries." },
        { time: "08:30 PM", title: "Evening Video Conference", desc: "Attends state Chief Secretary or Chief Minister video conference for state-wide policy directives." }
      ],
      dailyChallenges: [
        "Balancing urgent political expectations with strict legal regulations.",
        "Managing unexpected public emergencies, strikes, or floods.",
        "Ensuring ground-level delivery of government funds without leakage."
      ],
      toolsUsed: ["e-Office Government Portal", "GIS District Mapping", "Official Telepresence", "Revenue Cadastral Maps"]
    }
  },
  {
    id: "ips",
    name: "IPS (Indian Police Service)",
    category: "Law & Defense",
    icon: "🛡️",
    tagline: "Lead law enforcement, crime prevention, counter-terrorism, and public safety.",
    stream: "Any Stream (MPC, BiPC, MEC, CEC, HEC)",
    educationRoute: "Any Degree + UPSC CSE (IPS Cadre) + SVPNPA Academy Training",
    durationYears: "3-4 Yrs Degree + 1-2 Yrs Prep + 2 Yrs SVPNPA Training",
    estimatedCost: "₹50,000 - ₹2 Lakhs",
    keyExams: "UPSC Civil Services Exam + Physical Standards Test",
    salaryStarting: "₹56,100/mo (ASP/SP) + Allowances (approx ₹90,000 net)",
    salaryPeak: "₹2,25,000/mo (DGP Rank) + Perks",
    workLifeBalance: "Extreme",
    jobDemand: "Niche / Competitive",
    fieldRatio: "40% Office, 60% Field & Crime Scenes",
    keyPros: [
      "Direct power to protect citizens and curb crime",
      "Respected uniform service with deep community authority",
      "Opportunities in IB, CBI, RAW, and National Security"
    ],
    keyCons: [
      "Irregular working hours and round-the-clock emergency response",
      "High physical and mental stress during riots or violent crimes",
      "Frequent transfers affecting family routine"
    ],
    backupPlan: "State Police Services (DSP via Group-1), Central Armed Police Forces (CAPF AC), Corporate Security Leadership",
    dayInTheLife: {
      workHours: "8:00 AM – 10:00 PM (Emergency duty on all festivals and election days)",
      workEnvironment: "District Police HQ, Police Stations, Crime Scenes, and Law & Order Control Rooms",
      mythsVsReality: [
        { myth: "IPS officers just chase criminals in high-speed cars.", reality: "Most work revolves around meticulous case investigation, cyber surveillance, and crowd management planning." },
        { myth: "It is purely physical muscle work.", reality: "Modern policing is 80% analytical intelligence, forensic data, and legal precision." }
      ],
      timeline: [
        { time: "07:30 AM", title: "Morning PT & Crime Situation Report", desc: "Reviews overnight 24-hour FIR log, cybercrime alerts, and bandobast requirements." },
        { time: "09:30 AM", title: "Police Station Inspection", desc: "Surprise visit to local station to check lockups, case records, and public friendliness of staff." },
        { time: "12:00 PM", title: "Serious Crime Investigation Review", desc: "Meets special task force, cyber unit, and forensic analysts on major ongoing cases." },
        { time: "03:30 PM", title: "Public Interface & Citizen Redressal", desc: "Listens to women safety complaints, community disputes, and victim petitions." },
        { time: "06:00 PM", title: "Night Patrol & Bandobast Planning", desc: "Supervises security deployment for public rallies, festivals, and highway checkposts." },
        { time: "09:30 PM", title: "Overnight Briefing with Control Room", desc: "Assesses night patrol efficiency and coordinates emergency response teams." }
      ],
      dailyChallenges: [
        "Handling sudden law & order riots with minimal use of force.",
        "Tackling modern cyber fraud, financial scams, and drug syndicates.",
        "Ensuring mental well-being of subordinate police personnel under relentless shifts."
      ],
      toolsUsed: ["CCTNS Crime Tracking Portal", "Cyber Forensic Toolkits", "Wireless VHF/TETRA Networks", "Drone Surveillance Feeds"]
    }
  },
  {
    id: "doctor",
    name: "Doctor (MBBS / Specialist)",
    category: "Healthcare",
    icon: "🩺",
    tagline: "Diagnose ailments, perform surgeries, and save human lives every single day.",
    stream: "Science - BiPC (Physics, Chemistry, Biology in 10+2)",
    educationRoute: "NEET-UG ➔ MBBS (5.5 yrs) ➔ NEET-PG ➔ MD/MS (3 yrs)",
    durationYears: "5.5 Yrs (MBBS) + 3 Yrs (MD/MS) + 1-2 Yrs Fellowship",
    estimatedCost: "Govt: ₹50K - ₹2 Lakhs | Private: ₹40 - ₹80 Lakhs",
    keyExams: "NEET UG, NEET PG / NExT, INI-CET",
    salaryStarting: "₹65,000 – ₹1,10,000/mo (Resident Doctor)",
    salaryPeak: "₹2.5 Lakhs – ₹8 Lakhs+/mo (Senior Specialist / Surgeon)",
    workLifeBalance: "Demanding",
    jobDemand: "Very High",
    fieldRatio: "100% Hospital & Clinical OPD",
    keyPros: [
      "One of the most noble, respected, and recession-proof professions in the world",
      "Lifelong career stability with continuous intellectual growth",
      "Opportunity to start your own clinic or hospital"
    ],
    keyCons: [
      "Longest education runway (minimum 8-10 years before full practice)",
      "High emotional toll dealing with critical emergencies and patient distress",
      "Exhausting 24-36 hour on-call emergency hospital duties in early years"
    ],
    backupPlan: "BDS (Dentistry), BAMS/BHMS (Ayush), B.Pharm, Clinical Research, Hospital Administration (MHA), Biotechnology",
    dayInTheLife: {
      workHours: "8:00 AM – 6:00 PM (Plus rotational 24-hour emergency on-call shifts)",
      workEnvironment: "Hospital Wards, Intensive Care Units (ICU), Operation Theaters (OT), and Outpatient Clinics",
      mythsVsReality: [
        { myth: "Doctors earn huge money immediately after college.", reality: "Early residency years require intense 80-hour workweeks at modest stipend pay before specialization pays off." },
        { myth: "A doctor's job is only about medicine.", reality: "Empathy, clear communication with anxious families, and quick crisis decisions matter equally." }
      ],
      timeline: [
        { time: "08:00 AM", title: "Morning Inpatient Ward Rounds", desc: "Visits admitted patients, inspects vitals, checks lab blood reports, and updates treatment charts." },
        { time: "09:30 AM", title: "Outpatient Department (OPD)", desc: "Diagnoses 30-50 walk-in patients, performs physical examinations, and prescribes medications." },
        { time: "01:30 PM", title: "Case Discussions & Clinical Meetings", desc: "Reviews complex MRI/CT scans with radiologist, pathologist, and surgical team." },
        { time: "02:30 PM", title: "Operation Theater (OT) / Procedures", desc: "Performs scheduled surgical operations or minor clinical interventions with sterile team." },
        { time: "05:30 PM", title: "Evening Ward Check & Discharge Summary", desc: "Checks post-operative patients, signs discharge summaries, and counsels patient relatives." },
        { time: "07:30 PM", title: "Emergency / Trauma Duty Handover", desc: "Briefs the night duty medical officer on critical ICU patients and potential complications." }
      ],
      dailyChallenges: [
        "Making split-second life-or-death decisions in emergency rooms.",
        "Breaking difficult medical news to anxious family members with sensitivity.",
        "Staying updated with evolving medical drugs, surgical technologies, and research."
      ],
      toolsUsed: ["Stethoscope & Diagnostic Kit", "Electronic Health Record (EHR)", "Surgical Laparoscopy", "Radiology PACS Viewer"]
    }
  },
  {
    id: "swe",
    name: "Software Engineer / Tech Lead",
    category: "Technology",
    icon: "💻",
    tagline: "Architect intelligent software, mobile applications, cloud platforms, and AI systems.",
    stream: "Science - MPC (Math, Physics, Chemistry in 10+2)",
    educationRoute: "B.Tech/B.E (Computer Science/IT/ECE) or BCA ➔ MCA",
    durationYears: "4 Yrs (B.Tech) or 3+2 Yrs (BCA+MCA)",
    estimatedCost: "Govt: ₹1.5 - ₹4 Lakhs | Private: ₹6 - ₹16 Lakhs",
    keyExams: "JEE Main, JEE Advanced, State CETs, BITSAT, GATE",
    salaryStarting: "₹4 Lakhs – ₹18 Lakhs/year (Product vs Services firms)",
    salaryPeak: "₹40 Lakhs – ₹1.2 Crore+/year (Principal Architect / Tech Leader)",
    workLifeBalance: "Moderate",
    jobDemand: "Very High",
    fieldRatio: "100% Desk / Remote / Office",
    keyPros: [
      "Highest starting compensation packages in the corporate sector",
      "Exceptional remote work and global relocation opportunities",
      "Continuous creative problem solving building real products used by millions"
    ],
    keyCons: [
      "Skills become outdated every 3-4 years requiring lifelong self-learning",
      "Tight sprint deadlines and occasional late-night production bug fixes",
      "Sedentary desk lifestyle requiring conscious physical health focus"
    ],
    backupPlan: "Data Analyst, DevOps/Cloud Engineer, Cyber Security Analyst, Product Manager, IT Support / System Admin",
    dayInTheLife: {
      workHours: "10:00 AM – 7:00 PM (Flexible, with occasional sprint deployment crunches)",
      workEnvironment: "Modern tech office, home workspace, cloud IDEs",
      mythsVsReality: [
        { myth: "Coders sit alone in dark rooms typing 100 lines a minute.", reality: "Engineering is 60% system design discussions, code reviews, debugging, and team collaboration." },
        { myth: "You must be a math genius to code.", reality: "Logic, problem breakdown, persistence, and continuous reading of documentation matter far more." }
      ],
      timeline: [
        { time: "09:45 AM", title: "Async Catchup & Pull Request Review", desc: "Reviews code changes submitted by teammates, leaves constructive comments on GitHub." },
        { time: "10:30 AM", title: "Daily Agile Scrum Standup", desc: "15-minute quick sync with product manager and developers on sprint goals and blockers." },
        { time: "11:00 AM", title: "Deep Focus Coding Session", desc: "Develops new backend API services, writes unit tests, and integrates database models." },
        { time: "02:30 PM", title: "System Architecture & RFC Discussion", desc: "Meets team to design cloud microservices capable of handling 50,000 requests per second." },
        { time: "04:00 PM", title: "Debugging & Performance Optimization", desc: "Investigates memory leaks and optimizes SQL database queries to reduce latency." },
        { time: "06:30 PM", title: "Continuous Deployment & Test Verification", desc: "Pushes tested code to staging server, monitors automated CI/CD pipeline builds." }
      ],
      dailyChallenges: [
        "Diagnosing intermittent bugs that only occur in production under heavy traffic.",
        "Estimating accurate development timelines when technical unknowns exist.",
        "Balancing shipping features quickly with writing clean, maintainable code."
      ],
      toolsUsed: ["VS Code / JetBrains IDE", "Git & GitHub", "Docker & Kubernetes", "AWS / Google Cloud Console", "Postman API"]
    }
  },
  {
    id: "engineer",
    name: "Engineer (Core / Mechanical / Civil / Electrical)",
    category: "Engineering & Technology",
    icon: "⚙️",
    tagline: "Design machines, power grids, structures, robotics, and industrial systems shaping the physical world.",
    stream: "Science - MPC (Maths, Physics, Chemistry in 10+2)",
    educationRoute: "B.Tech / B.E. (Mechanical / Civil / EEE / ECE / Chemical) ➔ GATE / M.Tech / Core Industry",
    durationYears: "4 Yrs (B.Tech) or Diploma (3 Yrs) + B.Tech Lateral Entry (3 Yrs)",
    estimatedCost: "Govt (IIT/NIT/Univ): ₹1.5 - ₹5 Lakhs | Private: ₹4 - ₹12 Lakhs",
    keyExams: "JEE Main, JEE Advanced, AP EAPCET, TS EAMCET, AP ECET, GATE, IES / ESE",
    salaryStarting: "₹3.5 Lakhs – ₹8 Lakhs/year (Core Sector / PSUs / Tech)",
    salaryPeak: "₹25 Lakhs – ₹80 Lakhs+/year (Chief Engineer / Plant Head / VP Operations)",
    workLifeBalance: "Moderate",
    jobDemand: "High",
    fieldRatio: "50% Plant / Site / Lab, 50% Office / CAD Design",
    keyPros: [
      "Tangible real-world impact: seeing bridges, engines, circuits, and plants you built operate",
      "Broad versatility: easy pivot to robotics, EVs, automation, semiconductors, or data",
      "Strong public sector opportunities (ISRO, DRDO, BHEL, NTPC, ONGC, Indian Railways)"
    ],
    keyCons: [
      "Plant/site work requires safety boots, heat, noise, and on-ground field execution",
      "Campus placements in core manufacturing can start with lower pay than IT services",
      "Requires strong physical intuition and rigorous applied math/physics"
    ],
    backupPlan: "Automation / PLC Engineer, CAD Design Specialist, Technical Sales, Operations / Supply Chain, Software / Data Roles, Govt Technical Exams",
    dayInTheLife: {
      workHours: "8:30 AM – 5:30 PM (Plant / project shift schedules)",
      workEnvironment: "Design office, manufacturing plant floor, testing lab, construction site",
      mythsVsReality: [
        { myth: "Engineers only do greasy manual labor in factories.", reality: "Modern engineering is 70% computer simulation, 3D CAD design, PLC automation, and data analytics." },
        { myth: "Only CSE branch gets good jobs.", reality: "Core engineers in VLSI, EVs, renewables, automation, and infrastructure have long-term evergreen demand with zero layoff volatility." }
      ],
      timeline: [
        { time: "08:30 AM", title: "Plant Floor Walk & Safety Briefing", desc: "Reviews machinery uptime, production line yields, and conducts 5-minute safety toolbox meeting." },
        { time: "10:00 AM", title: "3D CAD Modeling & FEA Simulation", desc: "Refines mechanical part designs in SolidWorks/AutoCAD and runs stress/thermal simulation tests." },
        { time: "01:30 PM", title: "Testing & Quality Diagnostics Lab", desc: "Performs tensile/hardness tests on metal samples or inspects electrical circuit oscilloscopes." },
        { time: "03:30 PM", title: "Cross-Functional Vendor & Site Sync", desc: "Coordinates with component vendors, site contractors, and commissioning technicians." },
        { time: "05:00 PM", title: "Engineering Change Orders (ECO) & Log", desc: "Documents tolerance revisions, updates bill of materials (BOM), and files daily inspection log." }
      ],
      dailyChallenges: [
        "Troubleshooting unexpected equipment failures during high-capacity manufacturing runs.",
        "Ensuring structural designs meet exact tolerance limits and safety compliance codes.",
        "Balancing material cost efficiency with long-term reliability and thermal durability."
      ],
      toolsUsed: ["AutoCAD / SolidWorks CAD", "Ansys Simulation", "MATLAB / Simulink", "PLC / SCADA Control Panels", "Digital Calipers / Oscilloscopes"]
    }
  },
  {
    id: "ca",
    name: "Chartered Accountant (CA)",
    category: "Finance & Commerce",
    icon: "📊",
    tagline: "The trusted guardian of corporate finance, taxation, statutory auditing, and financial strategy.",
    stream: "Commerce - MEC / CEC (or MPC with math aptitude)",
    educationRoute: "CA Foundation ➔ CA Intermediate ➔ 2 Yrs Articleship ➔ CA Final (ICAI)",
    durationYears: "4.5 - 5.5 Yrs",
    estimatedCost: "₹1.5 - ₹3 Lakhs (ICAI registration & coaching)",
    keyExams: "ICAI CA Foundation, Intermediate, and Final Exams",
    salaryStarting: "₹8 Lakhs – ₹16 Lakhs/year (Fresher CA)",
    salaryPeak: "₹40 Lakhs – ₹1.5 Crore+/year (Partner in Big 4 / Corporate CFO)",
    workLifeBalance: "Demanding",
    jobDemand: "Very High",
    fieldRatio: "80% Office, 20% Client Auditing Visits",
    keyPros: [
      "Supreme financial authority (only CAs in India are legally authorized to sign audit reports)",
      "High prestige in corporate boardrooms with guaranteed career demand",
      "Low college fee route compared to expensive MBA or Private Engineering"
    ],
    keyCons: [
      "Rigorous pass percentage (often 10-18% in CA Final)",
      "Intense peak-season workloads during tax filing and statutory audit deadlines (July & September)",
      "Continuous compliance updates required as tax laws evolve every year"
    ],
    backupPlan: "CMA (Cost Accountant), ACCA (Global), CFA (Investment Banking), CS (Company Secretary), Financial Analyst",
    dayInTheLife: {
      workHours: "9:30 AM – 7:30 PM (9:30 PM+ during annual audit & tax filing seasons)",
      workEnvironment: "Audit firm office, corporate headquarters, client finance departments",
      mythsVsReality: [
        { myth: "CAs only file individual income tax returns.", reality: "CAs advise on multi-thousand-crore mergers, forensic fraud investigations, and corporate capital structures." },
        { myth: "You must score 100% in school math.", reality: "CA relies heavily on analytical logic, legal interpretation of tax statutes, and accounting principles." }
      ],
      timeline: [
        { time: "09:30 AM", title: "Morning Client Portfolio Review", desc: "Reviews statutory audit schedules, tax compliance deadlines, and financial balance sheets." },
        { time: "11:00 AM", title: "Client Audit & Internal Controls Check", desc: "Inspects company ledgers, detects revenue leakages, and validates GST/TDS returns." },
        { time: "02:00 PM", title: "Direct & Indirect Tax Advisory", desc: "Advises corporate executives on legal tax structuring, transfer pricing, and capital gains." },
        { time: "04:30 PM", title: "Financial Modeling & Valuation Review", desc: "Builds financial forecasts and valuation models for a client raising venture funding." },
        { time: "06:30 PM", title: "Articleship Trainee Review & Sign-Off", desc: "Reviews audit working papers submitted by trainee articles and prepares final audit report." }
      ],
      dailyChallenges: [
        "Uncovering discrepancies or accounting anomalies across thousands of financial transactions.",
        "Managing multiple tight government filing deadlines without a single error.",
        "Navigating complex, changing GST and Income Tax notifications."
      ],
      toolsUsed: ["TallyPrime / SAP ERP", "Excel Financial Modeling", "Tax Compliance Portals", "ICAI e-Auditing Software"]
    }
  },
  {
    id: "pilot",
    name: "Commercial Pilot",
    category: "Aviation",
    icon: "✈️",
    tagline: "Command multi-million dollar aircraft across domestic and international skies with supreme precision.",
    stream: "Science - MPC (Physics & Mathematics in 10+2 mandatory)",
    educationRoute: "10+2 (PCM) ➔ DGCA Class 1 & 2 Medical ➔ Flight School (200 Flying Hours) ➔ CPL License ➔ Type Rating",
    durationYears: "1.5 - 2.5 Yrs (Flight Training)",
    estimatedCost: "₹45 Lakhs - ₹75 Lakhs (CPL + Type Rating A320/B737)",
    keyExams: "DGCA Ground Theory Exams (Navigation, Meteorology, Air Regs, Technical)",
    salaryStarting: "₹1.5 Lakhs – ₹3.5 Lakhs/mo (First Officer)",
    salaryPeak: "₹6 Lakhs – ₹12 Lakhs+/mo (Senior Airline Captain)",
    workLifeBalance: "Moderate",
    jobDemand: "High",
    fieldRatio: "100% Cockpit & Flight Simulators",
    keyPros: [
      "Prestigious, thrilling global lifestyle with high tax-free allowances and travel perks",
      "Top-tier compensation packages from day one as a commercial airline First Officer",
      "Work stays in the cockpit — no homework, office files, or corporate emails when flight ends"
    ],
    keyCons: [
      "High initial financial training investment required",
      "Strict lifetime medical fitness (annual DGCA Class 1 medicals)",
      "Jet lag, irregular flight schedules, and flying during holidays/weekends"
    ],
    backupPlan: "Air Traffic Controller (ATC via AAI), Flight Operations Officer, Flight Dispatcher, Aeronautical Engineering, Drone Pilot",
    dayInTheLife: {
      workHours: "Regulated Flight Duty Time Limitations (FDTL) – Max 8-10 flight hours per duty",
      workEnvironment: "Modern airliner cockpit (Airbus A320 / Boeing 737), Flight Briefing Rooms",
      mythsVsReality: [
        { myth: "Autopilot does 100% of the flying while pilots sleep.", reality: "Pilots constantly manage weather deviations, fuel optimization, air traffic instructions, and contingency emergencies." },
        { myth: "Any minor eyesight power disqualifies you.", reality: "DGCA allows corrected 6/6 vision with glasses/lenses for commercial pilot licenses." }
      ],
      timeline: [
        { time: "05:00 AM", title: "Pre-Flight Briefing & Weather Check", desc: "Reviews METAR weather forecasts, NOTAMs, flight plan fuel calculations, and aircraft technical logs." },
        { time: "05:45 AM", title: "Cockpit Setup & Safety Walkaround", desc: "Conducts physical aircraft exterior inspection, programs Flight Management Computer (FMC)." },
        { time: "06:30 AM", title: "Takeoff & Climb-out", desc: "Executes manual takeoff roll, coordinates departure vectors with Air Traffic Control tower." },
        { time: "08:00 AM", title: "Cruise Monitoring & Fuel Management", desc: "Monitors engine parameters, navigates around turbulent monsoon clouds using weather radar." },
        { time: "09:30 AM", title: "Descent, Approach & Landing", desc: "Conducts briefing for ILS approach, executes smooth landing and taxis to destination gate." },
        { time: "10:15 AM", title: "Post-Flight Debrief & Log Signing", desc: "Signs aircraft journey log, logs flight hours, and hands over to turnaround crew." }
      ],
      dailyChallenges: [
        "Navigating sudden severe thunderstorms, crosswinds, and low-visibility landings.",
        "Managing fatigue from early morning and red-eye flight rotations.",
        "Passing biannual simulator check-rides with zero tolerance for emergency procedure errors."
      ],
      toolsUsed: ["EFB (Electronic Flight Bag iPad)", "Aircraft FMC/FMS", "Weather Radar", "DGCA Logbook"]
    }
  },
  {
    id: "police",
    name: "Police Officer / Sub-Inspector",
    category: "Law & Defense",
    icon: "👮",
    tagline: "The frontline shield maintaining peace, registering FIRs, and protecting neighborhoods.",
    stream: "Any Stream (Intermediate 10+2 for Constable / Degree for SI)",
    educationRoute: "10+2 / Degree + State Police Recruitment Board Exam + Physical Events",
    durationYears: "1-3 Yrs Degree + 9-12 Months Academy Training",
    estimatedCost: "₹10,000 - ₹50,000 (Coaching & Physical ground training)",
    keyExams: "State Police Recruitment (SI / Constable Prelims, PET, Mains)",
    salaryStarting: "₹35,000 – ₹55,000/mo for SI (₹25,000 – ₹38,000 for Constable)",
    salaryPeak: "₹85,000 – ₹1,20,000/mo (Circle Inspector / DSP promo)",
    workLifeBalance: "Demanding",
    jobDemand: "High",
    fieldRatio: "30% Station, 70% Ground Patrol & Investigation",
    keyPros: [
      "Immediate job security and stable government salary",
      "Direct respect and authority in local community",
      "Opportunity for accelerated promotions through gallantry and merit"
    ],
    keyCons: [
      "Long hours standing during VIP bandobast and festive security",
      "Direct exposure to hostile elements and difficult public disputes",
      "Night shifts and sudden call-outs"
    ],
    backupPlan: "Railway Protection Force (RPF), Central Industrial Security Force (CISF), SSC CPO, Private Security Management",
    dayInTheLife: {
      workHours: "8:00 AM – 8:00 PM (Rotational 24-hour shifts during emergency)",
      workEnvironment: "Police Station, patrol vehicles, traffic junctions, and local beats",
      mythsVsReality: [
        { myth: "Sub-Inspectors only do traffic checks.", reality: "SIs are the prime investigating officers empowered to file chargesheets in court for serious crimes." },
        { myth: "No legal study is needed.", reality: "Police officers must master the Bharatiya Nyaya Sanhita (BNS) and Bharatiya Nagarik Suraksha Sanhita (BNSS)." }
      ],
      timeline: [
        { time: "08:00 AM", title: "Station Roll Call & Beat Allocation", desc: "Assigns daily patrol beats to constables, checks weapon readiness, and reviews pending warrants." },
        { time: "10:30 AM", title: "FIR Registration & Witness Statements", desc: "Interviews complainants, records official statements, and submits initial FIR details." },
        { time: "01:30 PM", title: "Court Appearance", desc: "Presents evidence, case diaries, and witnesses before the local magistrate." },
        { time: "04:00 PM", title: "Crime Scene Inspection & Evidence Collection", desc: "Visits incident sites, collects CCTV footage, and inspects physical evidence with clues team." },
        { time: "07:30 PM", title: "Vehicle Checking & Night Patrol", desc: "Conducts highway vehicle checking, breathalyzer tests, and checks suspicious movements." },
        { time: "10:00 PM", title: "Case Diary Writing", desc: "Meticulously documents all daily investigative progress in the official station case diary." }
      ],
      dailyChallenges: [
        "De-escalating heated domestic or neighborhood quarrels calmly.",
        "Managing heavy paperwork and court schedules while simultaneously handling street incidents.",
        "Physical stamina required for long standing bandobast duties."
      ],
      toolsUsed: ["e-Challan Handheld Device", "Breathalyzer", "Body-Worn Cameras", "Crime Investigation Log"]
    }
  },
  {
    id: "lawyer",
    name: "Lawyer / Advocate",
    category: "Law & Governance",
    icon: "⚖️",
    tagline: "Argue cases in courtrooms, defend justice, draft contracts, and protect corporate rights.",
    stream: "Any Stream (HEC, CEC, MEC, MPC, BiPC)",
    educationRoute: "5-Yr Integrated BA-LLB / BBA-LLB (after 10+2) or 3-Yr LLB (after degree) + Bar Council Exam",
    durationYears: "5 Yrs (Integrated) or 3 Yrs (Post-Graduation)",
    estimatedCost: "Govt (NLU): ₹4 - ₹12 Lakhs | State College: ₹50K - ₹2 Lakhs",
    keyExams: "CLAT, AILET, State LAWCET, All India Bar Examination (AIBE)",
    salaryStarting: "Litigation: ₹25,000 – ₹50,000/mo | Law Firms: ₹8 – ₹18 Lakhs/year",
    salaryPeak: "Litigation: Unlimited (per hearing fees) | Corporate Partner: ₹60 Lakhs – ₹2 Crore+/year",
    workLifeBalance: "Demanding",
    jobDemand: "High",
    fieldRatio: "50% Office / Research, 50% Court / Arbitration",
    keyPros: [
      "Powerful intellectual career with deep social influence and defense of citizen rights",
      "Independent practice: You are your own boss with no mandatory retirement age",
      "Booming corporate law sector (M&A, Intellectual Property, Cyber Law, Fintech)"
    ],
    keyCons: [
      "Early courtroom litigation years require patience, mentorship, and modest stipends",
      "Heavy reading of case precedents, legal drafts, and evidence daily",
      "High emotional stakes representing clients under trial"
    ],
    backupPlan: "Judiciary Exams (Civil Judge / Magistrate), Corporate Compliance Officer, Legal Journalism, Public Prosecutor",
    dayInTheLife: {
      workHours: "8:30 AM – 8:00 PM",
      workEnvironment: "District/High Courts, Chambers, Corporate Law Offices",
      mythsVsReality: [
        { myth: "Lawyers scream dramatically like in movies.", reality: "Real courtroom advocacy is calm, structured, factual, and based strictly on written legal statutes." },
        { myth: "Law is only for families with existing advocates.", reality: "First-generation lawyers thrive equally through top National Law Universities (NLUs) and corporate law firms." }
      ],
      timeline: [
        { time: "08:30 AM", title: "Chamber Preparation & Case Briefing", desc: "Reviews case synopsis, relevant High Court/Supreme Court citations, and client briefs." },
        { time: "10:30 AM", title: "Courtroom Arguments & Hearings", desc: "Presents bail petitions, cross-examines witnesses, and argues motions before the judge." },
        { time: "02:00 PM", title: "Legal Drafting & Case Petitions", desc: "Drafts writ petitions, commercial contracts, notices, and rejoinder affidavits." },
        { time: "04:30 PM", title: "Client Consultations & Strategy", desc: "Meets clients, analyzes new evidence, explains legal risks, and outlines case strategy." },
        { time: "07:00 PM", title: "Legal Research & Precedent Search", desc: "Researches landmark case law on legal databases (SCC Online, Manupatra) for tomorrow's hearings." }
      ],
      dailyChallenges: [
        "Synthesizing hundreds of pages of case records under strict time constraints.",
        "Thinking on your feet to counter opposing counsel's unexpected arguments.",
        "Managing client expectations during prolonged court trial delays."
      ],
      toolsUsed: ["SCC Online", "Manupatra", "e-Courts Services Portal", "Legal Drafting Frameworks"]
    }
  },
  {
    id: "nurse",
    name: "Nurse (B.Sc / GNM Nursing)",
    category: "Healthcare",
    icon: "💉",
    tagline: "The heartbeat of hospital care, monitoring patient recovery 24/7 with clinical empathy.",
    stream: "Science - BiPC (Biology, Physics, Chemistry)",
    educationRoute: "B.Sc Nursing (4 yrs) or GNM (3 yrs) + Nursing Council Registration",
    durationYears: "3-4 Yrs",
    estimatedCost: "Govt: ₹30,000 - ₹80,000 | Private: ₹2 - ₹5 Lakhs",
    keyExams: "State Nursing CET, AIIMS NORCET, NCLEX-RN (for USA/UK/Gulf)",
    salaryStarting: "₹22,000 – ₹45,000/mo (India) | ₹2.5 – ₹4 Lakhs/mo (Abroad)",
    salaryPeak: "₹80,000 – ₹1.2 Lakhs/mo (India - Nursing Supt.) | ₹6 Lakhs+/mo (Abroad)",
    workLifeBalance: "Moderate",
    jobDemand: "Very High",
    fieldRatio: "100% Hospital Ward / ICU",
    keyPros: [
      "Massive global demand (highest overseas migration potential to UK, Canada, Australia, Gulf)",
      "Immediate employment upon graduation with zero unemployment risk",
      "Deep personal satisfaction seeing patients recover directly under your care"
    ],
    keyCons: [
      "Physically demanding shifts involving constant standing and patient movement",
      "Night shifts and exposure to infectious environments",
      "Initial starting pay in private Indian hospitals can be modest"
    ],
    backupPlan: "Medical Coding, Clinical Research Coordinator, Hospital Infection Control, Dialysis Tech, Healthcare Ops",
    dayInTheLife: {
      workHours: "Rotational 8-hour shifts (Morning 7-3, Evening 1-9, Night 9-7)",
      workEnvironment: "ICU, Emergency, Surgical Wards, Pediatric Units",
      mythsVsReality: [
        { myth: "Nurses only assist doctors with minor tasks.", reality: "Nurses manage critical ventilator alarms, IV medications, emergency resuscitation, and ICU monitoring." },
        { myth: "Nursing has limited growth.", reality: "Specialist nurses (Nurse Practitioners, ICU Leads, Clinical Educators) command massive salaries worldwide." }
      ],
      timeline: [
        { time: "07:00 AM", title: "Shift Handover & Patient Bedside Briefing", desc: "Receives clinical status of all admitted patients from the night nurse, verifying IV lines and meds." },
        { time: "08:00 AM", title: "Vital Signs & Morning Medication", desc: "Administers injections, IV drips, checks blood pressure, ECG rhythms, and blood sugar levels." },
        { time: "10:30 AM", title: "Doctor Rounds Collaboration", desc: "Accompanies senior doctors, provides vital patient updates, and notes down new prescription changes." },
        { time: "01:00 PM", title: "Wound Dressing & Patient Care", desc: "Changes post-surgical dressings, coordinates diagnostic tests, and assists with patient mobility." },
        { time: "02:30 PM", title: "Digital Nursing Documentation & Handover", desc: "Logs patient intake/output charts, medication compliance, and prepares handover notes." }
      ],
      dailyChallenges: [
        "Managing multiple critical patients simultaneously in fast-paced wards.",
        "Calming distressed patients and handling demanding family inquiries.",
        "Maintaining absolute 100% accuracy in dosage calculations under time pressure."
      ],
      toolsUsed: ["IV Infusion Pumps", "Cardiac Patient Monitors", "Defibrillators", "Hospital Management Systems"]
    }
  },
  {
    id: "pharmacist",
    name: "Pharmacist (B.Pharm / Pharm.D)",
    category: "Healthcare & Science",
    icon: "💊",
    tagline: "Master the chemistry of medicines, clinical drug safety, formulation, and pharmacy practice.",
    stream: "Science - BiPC or MPC (Physics, Chemistry, Biology/Math)",
    educationRoute: "B.Pharm (4 Yrs) or Pharm.D (6 Yrs) ➔ State Pharmacy Council License",
    durationYears: "4-6 Yrs",
    estimatedCost: "₹2 Lakhs - ₹8 Lakhs",
    keyExams: "GPAT, State Engineering & Pharmacy CETs, NIPER JEE",
    salaryStarting: "₹25,000 – ₹45,000/mo (Pharma R&D / Hospital / Retail)",
    salaryPeak: "₹1.5 Lakhs – ₹3.5 Lakhs+/mo (Pharma Production Head / Retail Chain Owner)",
    workLifeBalance: "High",
    jobDemand: "High",
    fieldRatio: "85% Lab / Plant / Pharmacy, 15% Field (for Pharma Marketing)",
    keyPros: [
      "India is the 'Pharmacy of the World' with massive drug manufacturing industry",
      "High flexibility: R&D, Quality Control, Hospital Pharmacy, or own business",
      "Regular working hours compared to doctors/nurses"
    ],
    keyCons: [
      "Requires rigorous memorization of chemical compounds and drug interactions",
      "Strict regulatory compliance and zero tolerance for manufacturing errors",
      "Entry-level retail pharmacy margins require good sales volume"
    ],
    backupPlan: "Regulatory Affairs, Pharmacovigilance, Clinical Data Management, Drug Inspector (Govt), Biotechnology",
    dayInTheLife: {
      workHours: "9:00 AM – 6:00 PM",
      workEnvironment: "Pharma QC Laboratories, Manufacturing Plants, Hospital Pharmacies, or Retail",
      mythsVsReality: [
        { myth: "Pharmacists are just medicine store cashiers.", reality: "Pharmacists analyze chemical stability, research clinical drug interactions, and ensure zero toxic contamination." },
        { myth: "Only MBBS doctors understand medicine.", reality: "Pharmacists are the dedicated specialists in pharmacology, toxicology, and drug mechanisms." }
      ],
      timeline: [
        { time: "09:00 AM", title: "Batch Quality Testing / Dispensing Audit", desc: "Tests sample purity using HPLC spectrometers or audits hospital prescription dispensing queue." },
        { time: "11:00 AM", title: "Drug Interaction Check", desc: "Screens patient prescriptions for dangerous contraindications, food-drug interactions, and correct dosage." },
        { time: "01:30 PM", title: "Regulatory Documentation & Compliance", desc: "Maintains FDA/GMP logs, cold-chain temperature records for vaccines and insulin." },
        { time: "03:30 PM", title: "Formulation R&D / Clinical Trial Review", desc: "Evaluates dissolution rates and stability tests for new generic tablet formulations." },
        { time: "05:30 PM", title: "Inventory & Scheduled Drug Auditing", desc: "Audits controlled narcotic registers and schedules next day production batch supplies." }
      ],
      dailyChallenges: [
        "Spotting dosage errors or contradictory medications written in hurried handwriting.",
        "Meeting strict international regulatory standards (USFDA / WHO-GMP).",
        "Ensuring unbroken cold-chain storage for sensitive biological medications."
      ],
      toolsUsed: ["HPLC & Chromatography Analyzers", "Spectrophotometers", "Pharmacy ERP", "Cleanroom Laminar Airflows"]
    }
  },
  {
    id: "army",
    name: "Indian Army (Soldier / Commissioned Officer)",
    category: "Defense",
    icon: "🎖️",
    tagline: "Lead troops, protect the nation's borders, and live a life of honor, courage, and purpose.",
    stream: "Any Stream for Army (MPC required for Air Force & Navy via NDA/TES)",
    educationRoute: "NDA (after 10+2) or CDS / AFCAT / TGC (after Degree) ➔ SSB Interview ➔ 1-3 Yrs Military Academy",
    durationYears: "3-4 Yrs Training at NDA / IMA / OTA / INA / AFA",
    estimatedCost: "Zero (100% Government funded with training stipend paid to cadet)",
    keyExams: "UPSC NDA, UPSC CDS, AFCAT, 5-Day SSB Interview",
    salaryStarting: "₹56,100/mo (Lieutenant) + Military Service Pay (MSP ₹15,500) + Allowances (approx ₹90K–₹1.2L net)",
    salaryPeak: "₹2,25,000/mo (General / Air Chief Marshal) + Lifetime Cantonment Perks",
    workLifeBalance: "Demanding",
    jobDemand: "Stable",
    fieldRatio: "70% Field Units / Tactical Ops, 30% Staff Postings",
    keyPros: [
      "Unmatched honor, pride, and national respect with a prestigious officer commission",
      "World-class physical fitness, adventure sports, and leadership development",
      "Complete family healthcare (ECHS), canteen facilities (CSD), and lifelong pension benefits"
    ],
    keyCons: [
      "Physical danger in border areas and counter-insurgency operational zones",
      "Separation from family during high-altitude and field postings",
      "Rigid military discipline and strict chain of command"
    ],
    backupPlan: "Central Armed Police Forces (BSF/CRPF/CISF Assistant Commandant), State Police DSP, Corporate Security/Logistics Leadership",
    dayInTheLife: {
      workHours: "24/7 Service lifestyle – Scheduled duty + Tactical field readiness",
      workEnvironment: "Military Cantonments, High-Altitude Border Posts, Naval Warships, Fighter Air Bases",
      mythsVsReality: [
        { myth: "Military officers only shoot guns in battle.", reality: "Officers manage complex drone surveillance, supply logistics, communication networks, and men's welfare." },
        { myth: "Only children of defense personnel clear SSB.", reality: "SSB looks purely for natural Officer-Like Qualities (OLQs): integrity, clarity of thought, and team spirit." }
      ],
      timeline: [
        { time: "06:00 AM", title: "Morning Physical Training / Parade", desc: "Leads battalion PT, cross-country run, and reviews company weapon inspection parade." },
        { time: "08:30 AM", title: "Orders Group (O-Group) & Operations Briefing", desc: "Briefs junior officers and JCOs on tactical training schedules, perimeter security, and convoy movements." },
        { time: "11:00 AM", title: "Equipment & Armory Inspection", desc: "Checks maintenance of specialized combat vehicles, night-vision equipment, and communication sets." },
        { time: "02:00 PM", title: "Troop Welfare (Sainik Sammelan)", desc: "Addresses soldiers' leave requests, family accommodations, ration quality, and administrative needs." },
        { time: "04:30 PM", title: "Games & Unit Sports", desc: "Plays football/volleyball with soldiers to foster high morale and unbreakable camaraderie." },
        { time: "07:30 PM", title: "Night Perimeter Security Briefing", desc: "Coordinates night guard rotations, thermal imaging posts, and radio frequency checks." }
      ],
      dailyChallenges: [
        "Maintaining peak troop morale under harsh weather (-20°C in Ladakh or 50°C in Thar).",
        "Making high-stakes decisions under combat stress where human lives are on the line.",
        "Balancing rigorous tactical readiness with extensive administrative paperwork."
      ],
      toolsUsed: ["Tactical GPS & Radio Comms", "Thermal & Night Vision Optics", "Standard Infantry Rifles", "GIS Terrain Maps"]
    }
  },
  {
    id: "agri",
    name: "Agricultural Officer / Agri-Tech",
    category: "Agriculture & Allied",
    icon: "🌾",
    tagline: "Empower farmers, boost crop yields, optimize soil health, and transform sustainable agriculture.",
    stream: "Science - BiPC or MPC (Biology/Agriculture in 10+2)",
    educationRoute: "B.Sc (Hons) Agriculture (4 Yrs) ➔ State AO Exam or IBPS SO (Agriculture Field Officer)",
    durationYears: "4 Yrs",
    estimatedCost: "Govt: ₹50,000 - ₹1.5 Lakhs | Private: ₹2 - ₹6 Lakhs",
    keyExams: "ICAR AIEEA, State EAMCET/AgriCET, IBPS SO AFO",
    salaryStarting: "₹38,000 – ₹60,000/mo (Govt AO / Bank AFO)",
    salaryPeak: "₹1.2 Lakhs – ₹2.5 Lakhs/mo (Joint Director of Agriculture / Agri-business Head)",
    workLifeBalance: "High",
    jobDemand: "High",
    fieldRatio: "60% Farmer Fields & Mandis, 40% Lab/Office",
    keyPros: [
      "Direct contribution to food security and rural farmer prosperity",
      "Excellent government job stability (Agriculture Department, KVKs, ICAR, NABARD)",
      "High growth in organic farming, drone spraying, precision agriculture startups"
    ],
    keyCons: [
      "Frequent travel across remote rural villages and farming clusters",
      "Workload peaks during sowing and harvest seasons (Kharif/Rabi)",
      "Dealing with climate crop loss distress among rural communities"
    ],
    backupPlan: "NABARD Grade A Officer, Agri-Banking Credit Manager, Seed/Fertilizer Corporate Manager, Food Processing Quality Manager",
    dayInTheLife: {
      workHours: "9:00 AM – 5:30 PM (Field visits in early mornings to meet farmers)",
      workEnvironment: "District Agriculture Office, Krishi Vigyan Kendras (KVK), crop fields, soil testing labs",
      mythsVsReality: [
        { myth: "Agriculture degrees are only for manual farming.", reality: "Agri graduates use satellite crop imaging, biotechnology, genetics, drone spraying, and banking finance." },
        { myth: "Low salary prospects.", reality: "IBPS Agriculture Field Officers enjoy identical starting pay to Probationary Bank Officers with fast promotion ladders." }
      ],
      timeline: [
        { time: "08:30 AM", title: "Morning Field Visit & Pest Scouting", desc: "Visits village farm clusters to inspect standing paddy/cotton crops for pest infestations or nutrient deficiencies." },
        { time: "11:00 AM", title: "Farmer Training Workshop (Rythu Vedika)", desc: "Conducts practical session demonstrating micro-irrigation, bio-fertilizers, and crop rotation." },
        { time: "01:30 PM", title: "Soil Testing Lab Diagnostics", desc: "Analyzes N-P-K nutrient reports and issues digital Soil Health Cards with customized fertilizer dosage." },
        { time: "03:30 PM", title: "Government Subsidy & Crop Insurance Verification", desc: "Verifies PM-KISAN, Rythu Bharosa, and crop insurance loss claims for affected farmers." },
        { time: "05:00 PM", title: "Reporting to District Agriculture Joint Director", desc: "Uploads district crop sowing progress data to state agricultural portal." }
      ],
      dailyChallenges: [
        "Educating traditional farmers to adopt scientific modern practices over outdated methods.",
        "Assessing crop damage accurately after sudden unseasonal rains or hailstorms.",
        "Ensuring quality supply of seeds and fertilizers without black marketing."
      ],
      toolsUsed: ["Soil NPK Testing Kits", "Agricultural Drone Controllers", "Satellite NDVI Vegetation Maps", "e-NAM Agri Trade Portal"]
    }
  },
  {
    id: "bank",
    name: "Bank PO (Probationary Officer)",
    category: "Banking & Finance",
    icon: "🏦",
    tagline: "Manage credit lending, retail banking operations, customer loans, and financial growth.",
    stream: "Any Stream (MPC, BiPC, MEC, CEC, HEC)",
    educationRoute: "Any Bachelor Degree + IBPS PO / SBI PO Exam",
    durationYears: "3-4 Yrs Degree + 6-12 Months Exam Preparation",
    estimatedCost: "₹10,000 - ₹40,000 (Exam coaching & test series)",
    keyExams: "SBI PO, IBPS PO, IBPS RRB PO, RBI Assistant",
    salaryStarting: "₹55,000 – ₹72,000/mo (Basic + DA + HRA + Leased Accommodation)",
    salaryPeak: "₹1.8 Lakhs – ₹2.8 Lakhs/mo (General Manager / Chief General Manager)",
    workLifeBalance: "Moderate",
    jobDemand: "Very High",
    fieldRatio: "85% Branch Office, 15% Loan Site Inspections",
    keyPros: [
      "Prestigious white-collar public sector job with great stability and leased housing",
      "Fast-track promotion structure leading to branch manager within 3-5 years",
      "Low-interest staff home loans, vehicle loans, and comprehensive family medical insurance"
    ],
    keyCons: [
      "High customer volume and daily cash balancing pressure",
      "Mandatory rural/semi-urban branch postings in early career years",
      "Quarterly business targets for loan disbursal, deposits, and recovery"
    ],
    backupPlan: "RBI Grade B, NABARD, Insurance Officer (LIC AAO / NIACL AO), SSC CGL, State Cooperative Banks",
    dayInTheLife: {
      workHours: "9:30 AM – 6:30 PM (Longer on month-end and financial year closing in March)",
      workEnvironment: "Bank Branch, Loan Processing Centers, Regional Offices",
      mythsVsReality: [
        { myth: "Bank POs only count cash and pass cheques.", reality: "POs evaluate multi-crore business loan proposals, assess collateral risk, and manage branch profitability." },
        { myth: "Public sector banks have no growth.", reality: "A talented PO can rise to Branch Manager, DGM, and Executive Director before age 50." }
      ],
      timeline: [
        { time: "09:30 AM", title: "Branch Opening & Vault Authorization", desc: "Jointly opens currency vault, authorizes morning cash limits with the chief cashier." },
        { time: "10:30 AM", title: "Customer Credit & Loan Appraisals", desc: "Interviews loan applicants (Home, Education, MSME loans), inspects CIBIL credit scores." },
        { time: "01:30 PM", title: "Operational Checks & High-Value Clearing", desc: "Verifies high-value RTGS/NEFT transfers, authorizes KYC updates and drafts." },
        { time: "03:30 PM", title: "Loan Collateral & Site Inspection", desc: "Field visit to inspect property/factory machinery mortgaged against commercial credit." },
        { time: "05:00 PM", title: "Day-End Balancing & Ledger Audits", desc: "Tallies all daily branch debits and credits, verifies cash balance in CBS system." },
        { time: "06:30 PM", title: "NPA Recovery & Marketing Planning", desc: "Reviews overdue loan accounts, issues repayment notices, plans next day priority sector targets." }
      ],
      dailyChallenges: [
        "Detecting fraudulent loan documentation or forged identity papers.",
        "Managing large customer crowds calmly during peak morning banking hours.",
        "Balancing aggressive loan growth with strict recovery of non-performing assets (NPAs)."
      ],
      toolsUsed: ["Finacle / BaNCS Core Banking Software", "CIBIL / Experian Credit Scoring", "e-KYC Biometric Terminals"]
    }
  },
  {
    id: "mba",
    name: "Business Management (MBA)",
    category: "Business & Management",
    icon: "💼",
    tagline: "Drive business strategy, marketing campaigns, team leadership, operations, and corporate growth.",
    stream: "Any Stream (MEC, CEC, MPC, BiPC)",
    educationRoute: "Any Degree (BBA, B.Com, B.Tech) ➔ CAT/XAT/MAT ➔ MBA / PGDM (2 Yrs)",
    durationYears: "3 Yrs Degree + 2 Yrs MBA",
    estimatedCost: "IIMs/Top B-Schools: ₹14 - ₹28 Lakhs | Tier 2/3: ₹4 - ₹10 Lakhs",
    keyExams: "CAT, XAT, GMAT, NMAT, SNAP, CMAT",
    salaryStarting: "Top IIMs: ₹22 – ₹35 Lakhs/year | Good B-Schools: ₹8 – ₹15 Lakhs/year",
    salaryPeak: "₹50 Lakhs – ₹2 Crore+/year (Vice President, Managing Director, CEO)",
    workLifeBalance: "Moderate",
    jobDemand: "Very High",
    fieldRatio: "80% Office & Virtual Meetings, 20% Client/Market Travel",
    keyPros: [
      "Accelerated pathway to executive leadership and high corporate compensation",
      "Versatile career options: Brand Marketing, Investment Banking, Consulting, Supply Chain, HR",
      "Powerful corporate networking with business leaders and alumni"
    ],
    keyCons: [
      "High investment cost for top business school degrees",
      "High pressure to deliver quarterly revenue targets and business KPIs",
      "Fast-paced corporate competition and matrix organizational politics"
    ],
    backupPlan: "Product Marketing Manager, Business Development Manager, Operations Manager, Financial Analyst, Entrepreneurship",
    dayInTheLife: {
      workHours: "9:00 AM – 7:30 PM",
      workEnvironment: "Corporate headquarters, glass boardrooms, collaborative workspaces",
      mythsVsReality: [
        { myth: "MBA is just about making PowerPoint slides.", reality: "Managers make critical data-driven decisions on multi-crore budgets, product pricing, and talent retention." },
        { myth: "Any MBA guarantees high pay.", reality: "The brand, accreditation, and campus placement track record of the B-School dictate starting career trajectory." }
      ],
      timeline: [
        { time: "09:00 AM", title: "Business Dashboard & KPI Review", desc: "Analyzes quarterly revenue metrics, customer acquisition costs (CAC), and sales pipeline." },
        { time: "10:30 AM", title: "Cross-Functional Strategy Meeting", desc: "Aligns engineering, design, marketing, and sales leads on new product launch roadmap." },
        { time: "01:30 PM", title: "Client Pitch & Deal Negotiation", desc: "Presents enterprise solution proposal to key corporate clients, negotiating contract terms." },
        { time: "03:30 PM", title: "Budget & Financial Allocation", desc: "Reviews resource allocation, marketing campaign ROI, and team hiring headcounts." },
        { time: "05:30 PM", title: "Executive Leadership Briefing", desc: "Presents quarterly growth findings and market expansion plans to the VP / Board of Directors." }
      ],
      dailyChallenges: [
        "Managing conflicting priorities between engineering capacity and aggressive sales commitments.",
        "Navigating uncertain market trends and competitor price wars.",
        "Motivating large diverse teams to hit demanding quarterly revenue targets."
      ],
      toolsUsed: ["Power BI / Tableau Analytics", "Salesforce CRM", "Notion / JIRA Project Management", "Advanced Excel Financials"]
    }
  },
  {
    id: "teacher",
    name: "Teacher / Educator",
    category: "Education",
    icon: "👩‍🏫",
    tagline: "Ignite young minds, shape character, build foundational skills, and inspire future generations.",
    stream: "Any Stream (MPC, BiPC, MEC, CEC, HEC)",
    educationRoute: "Bachelor Degree + B.Ed (2 Yrs) for School | Master Degree + NET/SET/Ph.D for College Lecturer",
    durationYears: "3-4 Yrs Degree + 2 Yrs B.Ed",
    estimatedCost: "Govt: ₹20,000 - ₹60,000 | Private: ₹1 - ₹2.5 Lakhs",
    keyExams: "CTET, State TET, DSC (State Teacher Recruitment), UGC-NET (for Lecturers)",
    salaryStarting: "Govt School: ₹40,000 – ₹65,000/mo | Private School: ₹20,000 – ₹45,000/mo",
    salaryPeak: "Govt Headmaster / College Principal: ₹1 Lakh – ₹1.8 Lakhs/mo",
    workLifeBalance: "High",
    jobDemand: "High",
    fieldRatio: "100% Classroom & School Campus",
    keyPros: [
      "Consistent working hours (usually 8:30 AM to 4:00 PM) with seasonal school vacations",
      "Deep personal joy seeing students learn, mature, and succeed in life",
      "Excellent work-life balance allowing quality time for family"
    ],
    keyCons: [
      "Private school starting salaries can be low in smaller towns",
      "Managing student discipline and diverse classroom attention spans",
      "Extensive grading of homework and exam answer papers outside class hours"
    ],
    backupPlan: "Curriculum Designer, EdTech Content Developer, Corporate Trainer, Private Coaching Faculty, Academic Counselor",
    dayInTheLife: {
      workHours: "8:30 AM – 4:00 PM",
      workEnvironment: "Classrooms, science/computer labs, staff room, school library",
      mythsVsReality: [
        { myth: "Teachers only work for 5 hours a day.", reality: "Teachers spend hours planning visual lesson plans, setting question papers, grading, and mentoring struggling students." },
        { myth: "Teaching requires no new learning.", reality: "Modern educators use digital smartboards, interactive AI pedagogy, and customized learning methods." }
      ],
      timeline: [
        { time: "08:30 AM", title: "Morning Assembly & Class Preparation", desc: "Greets students, conducts morning assembly, organizes lesson charts and teaching aids." },
        { time: "09:15 AM", title: "Interactive Classroom Teaching (Period 1-3)", desc: "Teaches core concepts using interactive blackboard diagrams, Q&A, and practical examples." },
        { time: "12:30 PM", title: "Student Doubt Clearing & Mentoring", desc: "Provides one-on-one help to students struggling with previous exam concepts." },
        { time: "01:30 PM", title: "Laboratory / Activity Sessions", desc: "Supervises hands-on science experiments or practical group problem solving." },
        { time: "02:45 PM", title: "Grading & Lesson Plan Documentation", desc: "Evaluates assignments, tracks attendance records, and plans tomorrow's lesson modules." },
        { time: "03:45 PM", title: "Parent Coordination & Dismissal", desc: "Updates parents on student academic progress and coordinates school departure." }
      ],
      dailyChallenges: [
        "Engaging students with diverse learning speeds in a single crowded classroom.",
        "Maintaining classroom discipline with empathy and positive reinforcement.",
        "Balancing creative teaching with completing heavy government syllabus on time."
      ],
      toolsUsed: ["Interactive Smartboards", "Google Classroom / LMS", "Visual Learning Charts", "Subject Lab Equipment"]
    }
  },
  {
    id: "fashion",
    name: "Fashion Designer",
    category: "Design & Creative",
    icon: "👗",
    tagline: "Create iconic clothing, textile patterns, fashion collections, and visual styling.",
    stream: "Any Stream (MPC, MEC, CEC, BiPC, HEC)",
    educationRoute: "B.Des in Fashion Design (4 Yrs) via NIFT / NID or private design institutes",
    durationYears: "4 Yrs",
    estimatedCost: "NIFT/NID: ₹6 - ₹12 Lakhs | Private: ₹10 - ₹20 Lakhs",
    keyExams: "NIFT Entrance Exam (CAT/GAT/Situation Test), NID DAT, UCEED",
    salaryStarting: "₹25,000 – ₹55,000/mo (Design Houses / Apparel Brands)",
    salaryPeak: "₹1.5 Lakhs – ₹8 Lakhs+/mo (Lead Designer / Own Fashion Label)",
    workLifeBalance: "Moderate",
    jobDemand: "Stable",
    fieldRatio: "70% Design Studio & Workshops, 30% Fabric Sourcing & Fashion Shows",
    keyPros: [
      "Highly creative, visually expressive, and glamorous profession",
      "Opportunity to launch your own clothing brand, boutique, or celebrity styling career",
      "Diverse specializations: Sustainable fashion, bridal wear, sportswear, footwear, accessories"
    ],
    keyCons: [
      "High competition with fast-moving seasonal trend cycles",
      "Long hours during fashion week launches and collection production deadlines",
      "Initial years require building an extensive personal portfolio and client network"
    ],
    backupPlan: "Textile Designer, Fashion Merchandiser, Costume Designer (Films/TV), Fashion Stylist, Visual Merchandiser",
    dayInTheLife: {
      workHours: "10:00 AM – 7:00 PM (Longer before fashion season launches)",
      workEnvironment: "Design Studio, textile mills, garment production workshops, photoshoot sets",
      mythsVsReality: [
        { myth: "Fashion design is only sketching pretty dresses.", reality: "It requires deep technical knowledge of fabric physics, pattern drafting, garment cost calculation, and supply chain." },
        { myth: "Only high-end haute couture exists.", reality: "Mass apparel retail (Zara, Myntra, Reliance Trends) provides thousands of high-paying design jobs." }
      ],
      timeline: [
        { time: "10:00 AM", title: "Trend Moodboarding & Color Forecasting", desc: "Researches global runway trends, gathers fabric swatches, and creates visual moodboards." },
        { time: "11:30 AM", title: "Digital Sketching & Technical Packs", desc: "Drafts detailed technical garment flats on Adobe Illustrator with exact stitch specifications." },
        { time: "02:00 PM", title: "Fabric Sourcing & Mill Coordination", desc: "Inspects organic cotton, silk weaves, and eco-friendly dyes from textile suppliers." },
        { time: "03:30 PM", title: "Fit Trials & Sample Draping", desc: "Drapes sample muslin cloth on mannequins, conducts fit tests with master tailors." },
        { time: "05:30 PM", title: "Photoshoot & Merchandising Sync", desc: "Directs catalog photoshoot styling and coordinates production timeline with factory managers." }
      ],
      dailyChallenges: [
        "Translating abstract artistic vision into a wearable, commercially profitable garment.",
        "Troubleshooting fabric shrinking, dye bleeding, or fitting defects on the production line.",
        "Staying consistently ahead of rapidly changing consumer fashion trends."
      ],
      toolsUsed: ["Adobe Illustrator & Photoshop", "CLO 3D Fashion Design", "Fabric Swatch Libraries", "Pattern Drafting Tables"]
    }
  },
  {
    id: "designer",
    name: "Graphic Designer / UI-UX",
    category: "Design & Digital Media",
    icon: "🎨",
    tagline: "Design intuitive digital interfaces, branding identities, visual narratives, and mobile apps.",
    stream: "Any Stream (MPC, MEC, CEC, BiPC, HEC)",
    educationRoute: "B.Des (UI/UX / Visual Comm) or Any Degree + Professional Design Portfolio",
    durationYears: "3-4 Yrs Degree or 1 Yr Dedicated Portfolio Training",
    estimatedCost: "₹1 Lakh - ₹8 Lakhs",
    keyExams: "NID DAT, UCEED, CEED, Portfolio Reviews",
    salaryStarting: "₹4 Lakhs – ₹10 Lakhs/year",
    salaryPeak: "₹25 Lakhs – ₹70 Lakhs+/year (Design Director / Head of UX)",
    workLifeBalance: "High",
    jobDemand: "Very High",
    fieldRatio: "100% Digital / Office / Remote",
    keyPros: [
      "Every modern app, website, and company requires continuous digital product design",
      "High remote working flexibility for international clients and tech startups",
      "Blend of visual creativity, user psychology, and modern technology"
    ],
    keyCons: [
      "Iterative feedback loops with stakeholders who have subjective design opinions",
      "Keeping pace with evolving design systems, Figma plugins, and AI design tools",
      "Eye strain from extended screen time requiring regular breaks"
    ],
    backupPlan: "Motion Graphics Designer, 3D Artist, Brand Identity Designer, Product Design Manager, Creative Director",
    dayInTheLife: {
      workHours: "10:00 AM – 7:00 PM",
      workEnvironment: "Creative studio, tech firm design pod, ergonomic home office",
      mythsVsReality: [
        { myth: "UI/UX design is just choosing pretty colors and fonts.", reality: "It is about user psychology: conducting user interviews, reducing app friction, and improving conversion rates." },
        { myth: "You must be great at hand painting on canvas.", reality: "Digital product design relies on layout hierarchy, typography logic, and component systems." }
      ],
      timeline: [
        { time: "10:00 AM", title: "User Analytics & Feedback Review", desc: "Analyzes user drop-off heatmaps on mobile app pages and reviews client design briefs." },
        { time: "11:00 AM", title: "User Journey & Wireframing", desc: "Maps user flows on digital whiteboards and designs low-fidelity wireframes for new features." },
        { time: "02:00 PM", title: "High-Fidelity UI Design & Prototyping", desc: "Crafts polished user interfaces in Figma, building interactive animated clickable prototypes." },
        { time: "04:30 PM", title: "Design System Component Building", desc: "Builds reusable design tokens, buttons, and responsive modal components for developers." },
        { time: "06:00 PM", title: "Developer Handoff & Usability Testing", desc: "Inspects coded screens with frontend software engineers to ensure 100% visual fidelity." }
      ],
      dailyChallenges: [
        "Simplifying complex user workflows into clean, effortless 1-click experiences.",
        "Defending design choices with user data when clients request cluttered layouts.",
        "Ensuring mobile accessibility for users with different screen sizes and visual impairments."
      ],
      toolsUsed: ["Figma / FigJam", "Adobe Creative Cloud", "Framer / Webflow", "Miro / Whimsical", "Lottie Animations"]
    }
  },
  {
    id: "journalist",
    name: "Journalist / News Reporter",
    category: "Media & Journalism",
    icon: "📰",
    tagline: "Investigate truth, hold power accountable, report breaking news, and shape public dialogue.",
    stream: "Any Stream (HEC, CEC, MEC, MPC, BiPC)",
    educationRoute: "Bachelor in Journalism & Mass Communication (BJMC - 3 Yrs) or Degree + PG Diploma",
    durationYears: "3 Yrs Degree + Optional 1 Yr PG Diploma",
    estimatedCost: "₹1 Lakh - ₹6 Lakhs (IIMC / Jamia / Asian College of Journalism)",
    keyExams: "IIMC Entrance, ACJ Entrance, University Media CETs",
    salaryStarting: "₹22,000 – ₹45,000/mo (Digital Media / TV / Print)",
    salaryPeak: "₹1.5 Lakhs – ₹5 Lakhs+/mo (Senior Editor / Prime Time Anchor / Investigative Lead)",
    workLifeBalance: "Demanding",
    jobDemand: "Stable",
    fieldRatio: "50% Ground Reporting, 50% Newsroom / Studio",
    keyPros: [
      "Exciting, purpose-driven role at the epicenter of historic events and public debates",
      "Meeting fascinating people: political leaders, artists, activists, and everyday heroes",
      "Booming digital journalism, podcasts, investigative video documentaries"
    ],
    keyCons: [
      "Breaking news happens 24/7 with strict hourly publication deadlines",
      "Ground reporting in disaster or conflict zones carries physical risks",
      "Scrutiny and criticism on social media"
    ],
    backupPlan: "Corporate Communications Lead, Public Relations (PR) Manager, Content Strategist, Policy Researcher, Podcast Producer",
    dayInTheLife: {
      workHours: "9:00 AM – 7:30 PM (Shifts vary widely based on breaking news)",
      workEnvironment: "Newsroom, TV studio, field reporting locations, press conferences",
      mythsVsReality: [
        { myth: "Journalists just read news off a teleprompter.", reality: "True journalism is 90% investigative research, verifying sources, cross-checking public records, and ground reporting." },
        { myth: "Print newspapers are dead so there are no jobs.", reality: "Digital news portals, YouTube investigative channels, and newsletter publications have created more media jobs than ever." }
      ],
      timeline: [
        { time: "09:00 AM", title: "Morning Editorial Pitch Meeting", desc: "Pitches investigative story ideas and breaking news coverage angles to the senior editor." },
        { time: "10:30 AM", title: "Field Reporting & Live Coverage", desc: "Covers a major government policy announcement or civic protest on ground with camera crew." },
        { time: "01:30 PM", title: "Source Verification & Expert Interviews", desc: "Interviews domain experts, cross-checks official RTI documents, and protects whistleblowers." },
        { time: "04:00 PM", title: "Story Writing & Video Package Editing", desc: "Writes concise, fact-checked article copy and records voice-over commentary for video reels." },
        { time: "06:30 PM", title: "Newsroom Publication / Live Studio Broadcast", desc: "Goes live for prime-time evening discussion or publishes breaking investigative dispatch online." }
      ],
      dailyChallenges: [
        "Verifying facts under intense breaking-news speed pressure to prevent misinformation.",
        "Persuading reluctant sources to speak on the record with evidence.",
        "Maintaining objective neutrality without succumbing to sensationalism."
      ],
      toolsUsed: ["DSLR / Wireless Mic Kits", "Adobe Premiere Pro", "Content Management Systems (CMS)", "RTI Government Portals"]
    }
  },
  {
    id: "architect",
    name: "Architect (B.Arch)",
    category: "Architecture & Design",
    icon: "🏛️",
    tagline: "Design spaces, homes, and skyline landmarks merging spatial creativity with structural physics.",
    stream: "Science - MPC (Physics & Mathematics in 10+2 compulsory)",
    educationRoute: "10+2 (PCM) ➔ NATA / JEE Main Paper 2A ➔ B.Arch (5 Yrs) ➔ Council of Architecture (CoA) License",
    durationYears: "5 Yrs B.Arch",
    estimatedCost: "Govt (SPA/NIT): ₹2 - ₹6 Lakhs | Private: ₹8 - ₹20 Lakhs",
    keyExams: "NATA, JEE Main Paper 2A (B.Arch), State Architecture CETs",
    salaryStarting: "₹25,000 – ₹50,000/mo (Junior Architect / BIM Specialist)",
    salaryPeak: "₹25 Lakhs – ₹1 Crore+/year (Principal Architect / Partner in Design Firm)",
    workLifeBalance: "Moderate",
    jobDemand: "High",
    fieldRatio: "65% Studio & BIM CAD, 35% Construction Site Visits",
    keyPros: [
      "Thrilling artistic satisfaction seeing physical structures you designed stand permanently",
      "Independent practice potential: establish your own architectural studio with direct client base",
      "Booming sustainable green architecture, luxury interior architecture, and urban planning"
    ],
    keyCons: [
      "Rigorous 5-year study with intensive late-night design studio juries and scale models",
      "Managing demanding clients with endless design revision requests and tight budgets",
      "Coordinating conflicts between structural engineers, MEP contractors, and municipal approvals"
    ],
    backupPlan: "Interior Architect, Urban Planner (M.Plan), 3D Visualization / BIM Manager, Landscape Architect, Sustainable Green Building Consultant",
    dayInTheLife: {
      workHours: "9:30 AM – 6:30 PM (Longer before municipal submission deadlines or client pitches)",
      workEnvironment: "Architectural design studio, client boardrooms, active construction sites",
      mythsVsReality: [
        { myth: "Architects only sketch pretty facade drawings.", reality: "Architecture is 70% building bylaws, MEP service coordination, material specifications, and site inspections." },
        { myth: "Civil engineers and architects do the exact same work.", reality: "Architects shape space, aesthetics, human experience, and climate responsiveness; civil engineers ensure load-bearing structural integrity." }
      ],
      timeline: [
        { time: "09:30 AM", title: "Studio Design Review & Concept Sketching", desc: "Reviews schematic floor plans, functional layouts, and material palettes with the design team." },
        { time: "11:00 AM", title: "Revit BIM & 3D Visualization", desc: "Develops 3D parametric digital building models, checks clash detection with plumbing and HVAC ducts." },
        { time: "02:00 PM", title: "Active Construction Site Inspection", desc: "Inspects concrete column reinforcement, verifies masonry dimensions match approved working blueprints." },
        { time: "04:30 PM", title: "Client Presentation & Material Sample Selection", desc: "Presents walkthrough renderings to property owners, selects Italian marble and facade glass samples." },
        { time: "06:30 PM", title: "Municipal Bylaw Compliance & Working Drawings", desc: "Cross-checks setback distances and FSI calculations for municipal corporation building permit filing." }
      ],
      dailyChallenges: [
        "Resolving unforeseen on-site construction discrepancies without compromising architectural aesthetics.",
        "Balancing visionary creative concepts with tight developer construction budgets.",
        "Ensuring 100% adherence to municipal fire, environmental, and building safety codes."
      ],
      toolsUsed: ["Autodesk Revit / AutoCAD", "Trimble SketchUp", "Lumion / V-Ray", "Rhino / Grasshopper", "Laser Measure & Blueprints"]
    }
  },
  {
    id: "navy-airforce",
    name: "Indian Navy & Air Force (Officer / Specialist)",
    category: "Armed Forces & Defense",
    icon: "⚓",
    tagline: "Defend national sovereignty across oceans and airspace commanding high-tech warships and fighter aircraft.",
    stream: "Science - MPC (Physics & Mathematics in 10+2 compulsory)",
    educationRoute: "NDA / Navy 10+2 B.Tech / CDS / AFCAT ➔ SSB Interview ➔ Naval / Air Force Academy Training",
    durationYears: "3-4 Yrs Academy + 1-1.5 Yrs Specialist School",
    estimatedCost: "Zero (Fully Government Funded with Cadet Stipend)",
    keyExams: "UPSC NDA & NA, AFCAT, UPSC CDS, JEE Main (for Navy B.Tech Cadet Scheme), 5-Day SSB Interview",
    salaryStarting: "₹56,100/mo (Sub-Lieutenant / Flying Officer) + MSP (₹15,500) + Flying/Sea Allowances (approx ₹1L–₹1.4L net)",
    salaryPeak: "₹2,25,000/mo (Admiral / Air Chief Marshal) + Official Residence & Life Perks",
    workLifeBalance: "Demanding",
    jobDemand: "Stable",
    fieldRatio: "70% Warship / Cockpit / Air Base, 30% Command Staff Postings",
    keyPros: [
      "Incredible adventure, pride, and supreme honor serving as a commissioned defense officer",
      "Operating supersonic fighter jets, nuclear submarines, guided missile destroyers, and radars",
      "Comprehensive defense perks: government quarters, world-class medical, club facilities, and CSD"
    ],
    keyCons: [
      "Extended sea deployments or remote border airbase postings away from family",
      "High operational danger and strict physical and medical category requirements",
      "Zero room for procedural error when operating multi-million dollar military equipment"
    ],
    backupPlan: "Commercial Airline Pilot (DGCA conversion for IAF pilots), Maritime Shipping Officer, Aerospace Defence Industry Lead, Coast Guard Officer",
    dayInTheLife: {
      workHours: "Round-the-clock defense readiness – Scheduled operations + watchkeeping shifts",
      workEnvironment: "Guided missile destroyers, aircraft carriers, fighter squadrons, radar control rooms",
      mythsVsReality: [
        { myth: "Everyone in the Air Force is a fighter pilot.", reality: "Over 80% of officers and personnel lead aeronautical engineering, radar air defence, logistics, and administration." },
        { myth: "Navy life is only on ships.", reality: "Naval officers rotate between frontline warship sea missions, naval air stations, marine technical dockyards, and naval headquarters." }
      ],
      timeline: [
        { time: "06:00 AM", title: "Morning Muster & Physical Conditioning", desc: "Participates in squadron drill parade, physical endurance run, and flight safety briefing." },
        { time: "08:00 AM", title: "Pre-Flight Briefing / Bridge Watch Handover", desc: "Coordinates radar surveillance tracks, weather updates, and navigational course coordinates." },
        { time: "10:30 AM", title: "Combat Sortie / Naval Tactical Maneuvers", desc: "Executes tactical training sorties or conducts anti-submarine warfare exercises in open ocean." },
        { time: "01:30 PM", title: "Technical Systems Inspection & Debriefing", desc: "Inspects jet engine telemetry, avionics maintenance logs, or warship propulsion plant data." },
        { time: "04:30 PM", title: "Division Games & Troop Welfare", desc: "Plays basketball/squash with junior sailors/airmen to maintain high operational morale." },
        { time: "07:30 PM", title: "Night Operations & Radar Watchstanding", desc: "Supervises maritime radar coverage and electronic combat readiness across designated maritime zones." }
      ],
      dailyChallenges: [
        "Handling extreme G-forces during aerial combat or enduring rough monsoon seas.",
        "Maintaining total mission focus under strict radio silence and high-stakes operational pressure.",
        "Managing precision military technology with zero room for equipment failure."
      ],
      toolsUsed: ["Tactical Radar & Sonar Consoles", "Flight Mission Simulators", "Encrypted Tactical Radio Networks", "Military Avionics & Telemetry"]
    }
  },
  {
    id: "hotel-management",
    name: "Hotel Management & Hospitality",
    category: "Hospitality & Tourism",
    icon: "🏨",
    tagline: "Curate five-star luxury guest experiences across top international hotels, fine-dining restaurants, and resorts.",
    stream: "Any Stream (MPC, BiPC, CEC, MEC, or Humanities with English)",
    educationRoute: "10+2 (with English) ➔ NCHM JEE ➔ B.Sc Hospitality & Hotel Administration (3 Yrs) ➔ Management Training (MT)",
    durationYears: "3 Yrs Degree + 1-2 Yrs Hotel Management Trainee Program",
    estimatedCost: "Govt (IHM): ₹3 - ₹5 Lakhs | Private: ₹5 - ₹10 Lakhs",
    keyExams: "NCHM JEE, State Hotel Management CETs",
    salaryStarting: "₹22,000 – ₹45,000/mo (Hotel Associate / Management Trainee)",
    salaryPeak: "₹20 Lakhs – ₹60 Lakhs+/year (General Manager / Corporate Director of Hospitality)",
    workLifeBalance: "Moderate",
    jobDemand: "High",
    fieldRatio: "100% Hotel Property, Banquets & Kitchens",
    keyPros: [
      "Dynamic global career with international hospitality transfers (Dubai, Europe, USA, cruise liners)",
      "Polished grooming, executive communication skills, and interactions with celebrities and diplomats",
      "Diverse specializations: Executive Chef, Food & Beverage Director, Revenue Manager, or Resort General Manager"
    ],
    keyCons: [
      "Demanding shift schedules working on weekends, New Year, festivals, and late nights",
      "Physically tiring early career years involving long hours of standing and guest service",
      "Strict service standards where even minor guest complaints require immediate diplomatic resolution"
    ],
    backupPlan: "Airline Cabin Crew / Ground Staff, Luxury Retail Store Manager, Corporate Event & Wedding Planner, Food & Beverage Entrepreneur, Tourism Board Lead",
    dayInTheLife: {
      workHours: "Rotational 8-10 hour shifts (Morning 7-4, Afternoon 2-11, Night 11-7)",
      workEnvironment: "5-star luxury hotel lobby, commercial culinary kitchens, banquet ballrooms, rooftop restaurants",
      mythsVsReality: [
        { myth: "Hotel management is only about cooking and cleaning.", reality: "It is multi-million dollar business management: pricing analytics, corporate sales, talent management, and luxury hospitality." },
        { myth: "It has low career prestige.", reality: "General Managers of five-star luxury properties are senior corporate executives commanding seven-figure compensation with palatial suites." }
      ],
      timeline: [
        { time: "07:30 AM", title: "Morning Operations Briefing", desc: "Reviews VIP guest arrivals, daily hotel occupancy rates, and special dietary/allergy requirements." },
        { time: "09:00 AM", title: "Lobby & Guest Relations Inspection", desc: "Welcomes corporate delegates, monitors check-in flow at reception, and verifies room readiness." },
        { time: "11:30 AM", title: "Kitchen & F&B Quality Walkthrough", desc: "Inspects food hygiene standards, samples lunch buffet preparation, and reviews food cost margins." },
        { time: "02:30 PM", title: "Corporate Banquet & Wedding Planning Sync", desc: "Coordinates layout, sound, lighting, and customized menus with event planners for a 500-guest gala." },
        { time: "05:00 PM", title: "Revenue Management & Room Pricing Strategy", desc: "Adjusts weekend room rates dynamically on booking engines based on competitor occupancy trends." },
        { time: "07:30 PM", title: "Evening Restaurant Operations Oversight", desc: "Ensures smooth guest seating, monitors service pace, and resolves guest dining feedback." }
      ],
      dailyChallenges: [
        "Defusing high-stress guest complaints with supreme diplomacy and professional charm.",
        "Managing peak banquet rush with flawless food delivery and impeccable table etiquette.",
        "Maintaining high staff morale and service consistency during relentless holiday seasons."
      ],
      toolsUsed: ["Opera / IDS Hotel PMS Software", "Point of Sale (POS) Billing", "Commercial Kitchen Automation", "Yield & Revenue Analytics Portals"]
    }
  },
  {
    id: "sports",
    name: "Sports / Professional Athlete & Coaching",
    category: "Sports & Athletics",
    icon: "🏆",
    tagline: "Compete at peak physical prowess in professional leagues, national championships, and international sporting arenas.",
    stream: "Any Stream (MPC, BiPC, CEC, MEC, or Humanities)",
    educationRoute: "Sporting Academy / Federation Pathway (District ➔ State ➔ National) + Optional B.P.Ed / Sports Science",
    durationYears: "Long-term athletic development (Starts age 8-16, Peak career 18-35)",
    estimatedCost: "₹50,000 - ₹5 Lakhs/year (Coaching, nutrition, gear & tournament travel; subsidised via SAI/Khelo India)",
    keyExams: "Sport-specific Federation Trials, State/National Selections, AP PECET (for B.P.Ed)",
    salaryStarting: "₹20,000 – ₹80,000/mo (Sports Quota Govt Jobs / Academy Trainee / League Contracts)",
    salaryPeak: "₹50 Lakhs – ₹10 Crore+/year (Elite National Athletes / IPL / ISL / Endorsements)",
    workLifeBalance: "Demanding",
    jobDemand: "Niche / Competitive",
    fieldRatio: "100% Sports Arenas, Tracks, Gyms & Tournaments",
    keyPros: [
      "Living your childhood passion: getting paid to play and master the sport you truly love",
      "Prestigious public employment under Sports Quota (Railways, Police, Income Tax, Defense, ONGC)",
      "National hero status, athletic medals, international travel, and corporate sponsorships"
    ],
    keyCons: [
      "Extremely narrow selection funnel — only top 1% secure long-term lucrative contracts",
      "Constant risk of career-threatening ligament or joint injuries requiring surgery",
      "Relatively short athletic playing career requiring proactive planning for life after 35"
    ],
    backupPlan: "Certified High-Performance Coach, Physical Education Teacher (B.P.Ed), Sports Physiotherapist, Sports Analyst, Sports League Operations Lead",
    dayInTheLife: {
      workHours: "6:00 AM – 6:30 PM (Structured into morning technical drills, afternoon conditioning, and recovery)",
      workEnvironment: "Stadium turf, indoor badminton courts, gym fitness facilities, physiotherapy suites",
      mythsVsReality: [
        { myth: "Sports is only about raw natural talent.", reality: "Elite sports is 95% relentless daily discipline: diet, sleep, film study, mental toughness, and thousands of drill repetitions." },
        { myth: "If you don't play for Team India, sports has no career.", reality: "Sports quota government jobs, franchise domestic leagues, academy coaching, and sports science offer thousands of stable careers." }
      ],
      timeline: [
        { time: "06:00 AM", title: "Morning Conditioning & Movement Drills", desc: "Performs dynamic warm-ups, agility ladder runs, sprint acceleration drills, and sport technique." },
        { time: "08:30 AM", title: "Nutrition, Hydration & Video Analysis", desc: "Takes high-protein recovery breakfast, analyzes high-speed video footage of yesterday's performance." },
        { time: "11:00 AM", title: "Sports Psychology & Mental Visualization", desc: "Practices pressure scenario visualization and breathing techniques with the sports mental coach." },
        { time: "03:30 PM", title: "Gym Strength & Power Resistance Session", desc: "Executes periodized compound lifts, plyometrics, and rotator cuff/core injury prevention sets." },
        { time: "05:00 PM", title: "Simulated Match Play & Strategy Scrimmage", desc: "Plays competitive match scenarios under strict tactical instructions from the head coach." },
        { time: "06:30 PM", title: "Physiotherapy, Ice Bath & Active Recovery", desc: "Undergoes sports massage, cold plunge ice bath, and foam rolling for rapid muscular recovery." }
      ],
      dailyChallenges: [
        "Overcoming performance slumps or selection heartbreaks without losing competitive drive.",
        "Strict adherence to nutrition and sleep schedules while peers enjoy carefree lifestyles.",
        "Rehabilitating injuries patiently without rushing back too early and risking permanent damage."
      ],
      toolsUsed: ["Wearable GPS Vests (Catapult/STATSports)", "Force Plates & Jump Mats", "High-Speed Biomechanics Video Cameras", "Ice Bath & Recovery Compression Boots"]
    }
  },
  {
    id: "govt-jobs",
    name: "Government Jobs (SSC / Railways / State Services)",
    category: "Public Administration",
    icon: "📋",
    tagline: "Serve the public, administer government policies, and enjoy unparalleled lifetime career stability.",
    stream: "Any Stream (HEC, CEC, MEC, MPC, BiPC, or Technical Diploma)",
    educationRoute: "10+2 / Any Bachelor Degree ➔ SSC (CGL/CHSL) / RRB (NTPC/ALP) / APPSC (Group 1, 2, 4) Recruitment Exams",
    durationYears: "3-4 Yrs Degree + 6-18 Months Competitive Exam Preparation",
    estimatedCost: "₹10,000 - ₹50,000 (Books, Mock Test Series & Online Preparation)",
    keyExams: "SSC CGL, SSC CHSL, RRB NTPC, APPSC Group 1 & 2, Railway ALP, State Police SI",
    salaryStarting: "₹30,000 – ₹75,000/mo (Basic + DA + HRA + Medical + Central Pension)",
    salaryPeak: "₹1.5 Lakhs – ₹2.5 Lakhs+/mo (Senior Administrative Officer / Department Director)",
    workLifeBalance: "High",
    jobDemand: "Very High",
    fieldRatio: "80% Government Secretariats & Offices, 20% Field Inspections",
    keyPros: [
      "Unmatched career stability and job security immune to private-sector economic recessions",
      "Fixed working hours, comprehensive gazetted holidays, and structured promotional ladders",
      "Direct authority to implement welfare schemes, public infrastructure, and citizen services"
    ],
    keyCons: [
      "Highly competitive applicant volume (lakhs of candidates competing for hundreds of posts)",
      "Recruitment cycles, exam notifications, and appointment processes can experience administrative delays",
      "Bureaucratic hierarchy and procedural file paperwork can feel repetitive"
    ],
    backupPlan: "Banking Examinations (IBPS/SBI PO), State Cooperative Banks, Public Sector Undertakings (PSUs), Corporate Administration, Legal/Compliance Officer",
    dayInTheLife: {
      workHours: "10:00 AM – 5:30 PM (Monday to Saturday / 5-day week depending on department)",
      workEnvironment: "District Collectorate, Central Government Ministry office, Railway Divisional HQ, Sub-Divisional Office",
      mythsVsReality: [
        { myth: "Government employees don't do any real work.", reality: "Modern officers handle extensive e-Office digitisation, public grievance resolution, budget auditing, and direct citizen welfare." },
        { myth: "You need personal recommendations or influence to get selected.", reality: "Central SSC and RRB recruitments are 100% transparent computer-based testing (CBT) evaluated on objective merit." }
      ],
      timeline: [
        { time: "10:00 AM", title: "e-Office Portal Login & File Scrutiny", desc: "Reviews pending digital files, official correspondence, and ministerial notices on the government intranet." },
        { time: "11:30 AM", title: "Citizen Public Grievance Hearing", desc: "Listens to visiting citizens, receives public petitions, and initiates departmental inquiry files." },
        { time: "01:30 PM", title: "Inter-Departmental Review Coordination", desc: "Coordinates with revenue, engineering, and welfare officers on project expenditure and fund utilization." },
        { time: "03:30 PM", title: "Field Inspection / Regional Audit Verification", desc: "Inspects local civil works, fair price ration supply outlets, or government school infrastructure." },
        { time: "05:00 PM", title: "Dispatch of Official Reports & Daily Clearance", desc: "Drafts replies to legislative assembly queries, verifies statistical progress data, and signs daily dispatches." }
      ],
      dailyChallenges: [
        "Ensuring complete compliance with government financial rules and anti-corruption audit regulations.",
        "Managing large queues of citizen applicants with patience, clarity, and empathy.",
        "Balancing urgent political deadlines with strict statutory legal procedures."
      ],
      toolsUsed: ["e-Office Government Workflow Portal", "PFMS Public Financial Management System", "CPGRAMS Citizen Grievance Portal", "Advanced Excel Data Audits"]
    }
  },
  {
    id: "scientist",
    name: "Scientist / Scientific Researcher",
    category: "Pure & Applied Sciences",
    icon: "🔬",
    tagline: "Unravel mysteries of nature, design groundbreaking experiments, and pioneer new technologies.",
    stream: "Science - MPC or BiPC (Physics, Chemistry, Maths/Biology in 10+2)",
    educationRoute: "BS-MS / B.Sc (3-5 Yrs) ➔ M.Sc ➔ CSIR-NET / GATE ➔ Ph.D ➔ Post-Doc Fellowship ➔ Scientist",
    durationYears: "5 Yrs (BS-MS) or 3+2 Yrs (B.Sc+M.Sc) + 4-5 Yrs Ph.D",
    estimatedCost: "Zero to Modest (Govt IISER/IISc fees are low; Ph.D students receive JRF stipends of ₹37,000–₹42,000/mo)",
    keyExams: "IAT (IISER), NEST, JEE Advanced (IISc BS), IIT JAM, CSIR-UGC NET JRF, GATE",
    salaryStarting: "₹56,100/mo (Scientist 'C' / Assistant Professor) + HRA/DA (approx ₹85,000–₹1.1L net)",
    salaryPeak: "₹2,25,000/mo (Distinguished Scientist / Lab Director at ISRO, DRDO, CSIR)",
    workLifeBalance: "High",
    jobDemand: "High",
    fieldRatio: "85% Advanced Labs & Cleanrooms, 15% Conferences / Field Trials",
    keyPros: [
      "Pure intellectual joy: discovering phenomena or inventing technologies that have never existed before",
      "Prestigious positions in national laboratories (ISRO, DRDO, BARC, TIFR, CSIR) and global universities",
      "Fully funded international research fellowships and global scientific conferences"
    ],
    keyCons: [
      "Long academic runway requiring 8-10 years of patient study before independent tenure",
      "Experiments frequently fail, requiring relentless emotional resilience and repetition",
      "Competitive race for high-impact journal publications (Nature/Science) and research grants"
    ],
    backupPlan: "Data Scientist, Quantitative Analyst, Pharma/Biotech R&D Lead, Intellectual Property (Patent) Attorney, College Professor",
    dayInTheLife: {
      workHours: "9:00 AM – 6:30 PM (Flexible, often driven by experiment incubation cycles)",
      workEnvironment: "High-tech cleanrooms, laser optics labs, supercomputing clusters, fume-hood wet labs",
      mythsVsReality: [
        { myth: "Scientists have instant 'Eureka' moments every week.", reality: "Real science is 90% careful calibration, meticulous documentation, error tracing, and statistical validation." },
        { myth: "Pure science graduates have no jobs compared to engineers.", reality: "Top scientists in materials, quantum computing, semiconductors, and genomics command immense corporate and government demand." }
      ],
      timeline: [
        { time: "09:00 AM", title: "Lab Prep & Experiment Status Check", desc: "Checks overnight sample incubation, laser cryostat temperatures, and spectroscopic sensors." },
        { time: "10:30 AM", title: "Primary Laboratory Experimentation", desc: "Runs spectrophotometer or particle accelerator measurements, logs data into digital lab notebooks." },
        { time: "01:30 PM", title: "Group Lab Sync & Journal Club", desc: "Discusses fresh breakthrough papers published in peer-reviewed journals with research scholars." },
        { time: "03:30 PM", title: "Scientific Python Modeling & Data Simulation", desc: "Processes raw experimental datasets using Python scripts, analyzes error bars and p-values." },
        { time: "05:30 PM", title: "Research Paper Manuscript Drafting", desc: "Drafts methodology sections and renders high-resolution publication charts for journal submission." }
      ],
      dailyChallenges: [
        "Troubleshooting experimental noise and unexpected anomalies in sensitive measurement apparatus.",
        "Synthesizing complex mathematical models with real-world empirical data.",
        "Securing competitive national research grants (DST, SERB) through meticulous proposal writing."
      ],
      toolsUsed: ["Spectrophotometers & NMR", "Python / MATLAB / SciPy", "Electron Microscopes (SEM)", "LaTeX Manuscript Editor", "Cleanroom Vacuum Systems"]
    }
  },
  {
    id: "entrepreneur",
    name: "Entrepreneur / Business Owner",
    category: "Business & Enterprise",
    icon: "🚀",
    tagline: "Build innovative ventures, create jobs, solve consumer problems, and generate scalable enterprise wealth.",
    stream: "Any Stream (Commerce, Science, or Humanities)",
    educationRoute: "Any Graduation Degree ➔ Market Problem Discovery ➔ MVP Prototyping ➔ Venture Scaling",
    durationYears: "Immediate Venture Execution (Lifelong entrepreneurship journey)",
    estimatedCost: "Variable (Can start lean with under ₹50,000 for digital/services or self-funded bootstrapping)",
    keyExams: "None required — Customer willingness to pay is your real entrance exam",
    salaryStarting: "Variable / Modest founder stipend (₹20,000 - ₹50,000/mo reinvested into business)",
    salaryPeak: "Unlimited equity valuation & profit dividends (Crores to multi-crores in scaled businesses)",
    workLifeBalance: "Demanding",
    jobDemand: "Very High",
    fieldRatio: "50% Client / Vendor Ground Market, 50% Strategy & Operations",
    keyPros: [
      "Total independence and creative freedom: you are the master of your own destiny and enterprise vision",
      "Uncapped financial upside through equity wealth creation and profit distributions",
      "Immense pride creating employment, solving real human problems, and impacting communities"
    ],
    keyCons: [
      "High financial risk: no guaranteed monthly salary, with risk of initial capital loss",
      "Buck stops with you: responsible for payroll, taxes, customer escalations, and crises 24/7",
      "High emotional pressure during early customer acquisition or cash flow crunch cycles"
    ],
    backupPlan: "Business Development Director, Product Management Lead, Management Consultant, Corporate Strategy Head, Franchise Operator",
    dayInTheLife: {
      workHours: "8:30 AM – 8:00 PM+ (High flexibility, but founder mindset never truly clocks off)",
      workEnvironment: "Startup office, co-working hub, client meeting venues, warehouse/manufacturing floor",
      mythsVsReality: [
        { myth: "Entrepreneurs must raise millions from VCs immediately.", reality: "Over 85% of successful Indian businesses are profitable, self-funded, cash-flow positive enterprises." },
        { myth: "You need a revolutionary tech app to be an entrepreneur.", reality: "Thriving businesses succeed in manufacturing, retail, food processing, logistics, and local services through superior execution." }
      ],
      timeline: [
        { time: "08:30 AM", title: "Daily Cash Flow & Sales Dashboard Review", desc: "Analyzes yesterday's orders, bank collections, inventory burn rate, and advertising ROAS." },
        { time: "10:00 AM", title: "Morning Team Standup & Priorities", desc: "Aligns sales, operations, and product teams on daily delivery targets and operational bottlenecks." },
        { time: "12:00 PM", title: "High-Value Client / Vendor Partnership Pitch", desc: "Negotiates bulk supply contracts with suppliers or closes a key corporate enterprise client." },
        { time: "03:00 PM", title: "Customer Interviews & Product Feedback", desc: "Personally speaks with 3 customers to uncover friction points and identify new product feature needs." },
        { time: "05:30 PM", title: "Financial Unit Economics & Growth Strategy", desc: "Refines unit margins, reviews marketing CAC vs LTV, and models next quarter expansion budgets." },
        { time: "07:30 PM", title: "Long-Term Vision & Strategic Planning", desc: "Researches competitor moves, evaluates expansion into new cities, and drafts key leadership hiring profiles." }
      ],
      dailyChallenges: [
        "Managing working capital cycles and chasing overdue client payments to ensure smooth payroll.",
        "Motivating team members when early sales results face friction or setbacks.",
        "Balancing urgent day-to-day fires with long-term strategic company building."
      ],
      toolsUsed: ["Notion / JIRA Project Management", "QuickBooks / Tally ERP", "Stripe / Razorpay Gateways", "Google Analytics & Meta Ads", "Slack / WhatsApp Business"]
    }
  },
  {
    id: "interior-designer",
    name: "Interior Designer (B.Des / B.Sc)",
    category: "Design & Spatial Arts",
    icon: "🛋️",
    tagline: "Transform bare architectural shells into breathtaking, functional, ergonomic residential and commercial spaces.",
    stream: "Any Stream (MPC, BiPC, CEC, MEC, or Humanities)",
    educationRoute: "10+2 Any Stream ➔ NID DAT / College Aptitude ➔ B.Des / B.Sc Interior Design (3-4 Yrs) ➔ Design Studio Practice",
    durationYears: "3-4 Yrs Degree / Diploma",
    estimatedCost: "Govt: ₹1.5 - ₹4 Lakhs | Private: ₹4 - ₹12 Lakhs",
    keyExams: "NID DAT, UCEED, State Design Entrance Tests, Portfolio Assessment",
    salaryStarting: "₹22,000 – ₹45,000/mo (Junior Interior Designer / 3D Visualizer)",
    salaryPeak: "₹20 Lakhs – ₹80 Lakhs+/year (Principal Interior Design Firm Owner / Luxury Consultant)",
    workLifeBalance: "Moderate",
    jobDemand: "Very High",
    fieldRatio: "60% Design Studio & CAD, 40% On-Site Execution Supervision",
    keyPros: [
      "Booming real estate market with soaring demand for modular homes, luxury villas, and chic cafes",
      "Direct creative expression choosing textures, custom lighting, bespoke furniture, and artwork",
      "Fast trajectory to independent entrepreneurship running your own interior design practice"
    ],
    keyCons: [
      "Contractor headaches: managing carpenters, electricians, plumbers, and painters to hit deadlines",
      "Demanding clients changing design preferences mid-construction after materials are ordered",
      "Initial years require building a strong visual portfolio before charging premium design commissions"
    ],
    backupPlan: "Furniture Designer, Retail Store Visual Merchandiser, 3D Architectural Visualizer, Lighting Design Specialist, Set & Exhibition Designer",
    dayInTheLife: {
      workHours: "9:30 AM – 6:30 PM (Site visits often scheduled around client weekend availability)",
      workEnvironment: "Interior design studio, material experience centers, ongoing apartment interior sites",
      mythsVsReality: [
        { myth: "Interior design is just choosing pretty curtains and pillows.", reality: "It is 80% spatial ergonomics, false ceiling electrical layout, plumbing routing, modular carpentry, and vendor coordination." },
        { myth: "You must be great at freehand drawing on paper.", reality: "Modern interior designers rely heavily on 3D computer software like SketchUp, AutoCAD, and Lumion to visualize spaces." }
      ],
      timeline: [
        { time: "09:30 AM", title: "Studio Design Review & AutoCAD Drafting", desc: "Refines modular kitchen floor plans, electrical switchboard coordinates, and false ceiling blueprints." },
        { time: "11:00 AM", title: "Material Experience Center Sourcing", desc: "Selects fluted wooden panels, quartz countertops, designer tiles, and fabric swatches with the client." },
        { time: "02:00 PM", title: "Live Residential Site Inspection", desc: "Checks carpentry woodwork carcass precision, verifies electrical conduit placement, and reviews paint swatches." },
        { time: "04:30 PM", title: "Photorealistic 3D Rendering in Lumion", desc: "Renders 3D walkthrough views of master bedroom wardrobes and accent lighting for evening client presentation." },
        { time: "06:30 PM", title: "Bill of Quantities (BOQ) & Vendor Costing", desc: "Prepares detailed material cost breakdown, cross-checks carpenter quote against budget limits." }
      ],
      dailyChallenges: [
        "Resolving on-site construction misalignments between civil walls and precision modular carpentry.",
        "Navigating client budget constraints without sacrificing aesthetic luxury and design elegance.",
        "Ensuring contractors maintain high craftsmanship standards and meet handover deadlines."
      ],
      toolsUsed: ["AutoCAD 2D Drafting", "Trimble SketchUp", "V-Ray / Lumion 3D", "Photoshop", "Laser Distance Meter & Swatch Kits"]
    }
  },
  {
    id: "not-decided",
    name: "Career Explorer / General Guidance",
    category: "General Guidance",
    icon: "🧭",
    tagline: "Uncover hidden natural aptitudes, evaluate all streams objectively, and build an exploratory foundation.",
    stream: "Open to explore: MPC, BiPC, MEC, CEC, HEC, or Vocational",
    educationRoute: "Four Circles Assessment ➔ Shortlist Top 3 Aptitudes ➔ Stream Alignment",
    durationYears: "Immediate Exploration (1-2 Weeks)",
    estimatedCost: "Zero (Included in Wabi Career Guidance)",
    keyExams: "Four Circles Psychometric & Stream Aptitude Diagnostic",
    salaryStarting: "Varies based on final chosen trajectory",
    salaryPeak: "Varies based on final chosen trajectory",
    workLifeBalance: "High",
    jobDemand: "Very High",
    fieldRatio: "Exploratory",
    keyPros: [
      "Prevents costly mistakes like picking MPC/BiPC purely out of neighbor pressure",
      "Identifies the intersection of your Passion, Natural Strengths, and Real Market Demand",
      "Keeps options flexible while building high-leverage communication and analytical skills"
    ],
    keyCons: [
      "Overthinking without taking small practical action steps can create temporary anxiety",
      "Needs open, honest conversations between students and parents"
    ],
    backupPlan: "Pick balanced stream (e.g. MPC or MEC) that preserves maximum degree eligibility",
    dayInTheLife: {
      workHours: "Flexible Learning Hours",
      workEnvironment: "School, Exploratory Workshops, Guidance Sessions",
      mythsVsReality: [
        { myth: "Not knowing your career at age 15 means you are behind.", reality: "Over 89% of students feel confused; honest exploration leads to far happier 40-year careers than rushed blind choices." },
        { myth: "There are only two careers in India: Engineering or Medicine.", reality: "There are over 250+ thriving high-paying careers across Law, Aviation, Design, Civil Services, Finance, and Media." }
      ],
      timeline: [
        { time: "09:00 AM", title: "Self-Reflection & Daily Joy Inventory", desc: "Identifies which school subjects and real-world projects create natural effortless focus." },
        { time: "11:00 AM", title: "Four Circles Diagnostic Review", desc: "Analyzes individual test results with Wabi career counselor across all 4 key dimensions." },
        { time: "02:00 PM", title: "Career Day-in-the-Life Exploration", desc: "Explores realistic daily routines of shortlisted professions to separate glamour from daily reality." },
        { time: "04:30 PM", title: "10+2 Stream Alignment Workshop", desc: "Maps preferred careers to the easiest, most rewarding Intermediate combination (MPC/BiPC/MEC/CEC/HEC)." }
      ],
      dailyChallenges: [
        "Filtering out conflicting advice from relatives and social media hype.",
        "Overcoming fear of math or biology by testing real strengths objectively.",
        "Aligning family financial realities with student personal dreams."
      ],
      toolsUsed: ["Four Circles Framework", "Stream Mapping Matrix", "Wabi Career Diagnostic"]
    }
  }
];
