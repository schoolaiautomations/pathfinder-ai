export interface AiImpactPoint {
  heading: string;
  body: string;
}

export interface CareerAiImpact {
  careerId: string;
  title: string;
  tagline: string;
  badge: string;
  badgeColor: "emerald" | "amber" | "blue" | "rose";
  intro: string;
  points: AiImpactPoint[];
  netEffect: string;
}

export const CAREER_AI_IMPACT: Record<string, CareerAiImpact> = {
  police: {
    careerId: "police",
    title: "Police Officer",
    tagline: "Tool-augmentation in crime mapping and surveillance without replacing human field authority.",
    badge: "Tool Augmentation",
    badgeColor: "emerald",
    intro:
      "AI is changing policing more as a tool-augmentation than a replacement. Facial recognition, predictive crime mapping, automated CCTV analysis, and AI-based evidence/document processing are already cutting down manual investigation time in many police departments, including experiments in Indian states like Telangana and Punjab. Traffic and surveillance enforcement (number plate recognition, e-challans) is largely automated now.",
    points: [
      {
        heading: "What AI Won't Replace",
        body: "Field policing, judgment calls in volatile situations, public trust-building, interrogation, and the legal/human-authority side of arrests and enforcement. So the job shifts — fewer people doing manual record-keeping or basic surveillance watching, more people needed who can interpret AI-flagged data and act on it.",
      },
      {
        heading: "Technological Shift in Departments",
        body: "Modern policing units are adopting centralized command and control centers (C4i) where AI scans real-time drone and camera feeds, alerting patrolling personnel to anomalies.",
      },
    ],
    netEffect:
      "Still a stable, respected government path, but future recruits who are comfortable with tech/data tools will have an edge over purely traditional cops.",
  },

  doctor: {
    careerId: "doctor",
    title: "Doctor (MBBS & Specialists)",
    tagline: "AI serves as a high-precision diagnostic second opinion while patient care remains deeply human.",
    badge: "Second Pair of Eyes",
    badgeColor: "emerald",
    intro:
      "AI is a major force here, but mostly as a 'second pair of eyes' rather than a replacement for doctors — at least for the foreseeable future.",
    points: [
      {
        heading: "Diagnostics",
        body: "AI already matches or beats human accuracy in reading X-rays, MRIs, CT scans, and detecting things like diabetic retinopathy, certain cancers, and fractures. Radiology and pathology are the specialties most affected.",
      },
      {
        heading: "Drug Discovery & Research",
        body: "AI is speeding up how new medicines are developed, simulated, and clinically tested.",
      },
      {
        heading: "Documentation & Admin",
        body: "AI scribes and clinical speech-to-text are drastically cutting down the time doctors spend on manual notes, EHR logging, and paperwork.",
      },
      {
        heading: "Triage & Rural Healthcare Access",
        body: "AI chatbots and diagnostic screening apps are helping in areas with doctor shortages (very relevant in rural India) — patients get preliminary triage and guidance before seeing a human doctor.",
      },
      {
        heading: "What Stays Firmly Human",
        body: "Actual physical patient examination, complex surgical operations, empathy-driven bedside communication, nuanced decision-making with incomplete or ambiguous patient information, and legal/ethical responsibility for treatment outcomes.",
      },
    ],
    netEffect:
      "Doctor remains one of the safest long-term careers, but doctors who use AI tools well will be far more efficient than those who don't. Medical education is already starting to integrate AI literacy.",
  },

  teacher: {
    careerId: "teacher",
    title: "Teacher & Educator",
    tagline: "Content delivery becomes commoditized; human mentorship, inspiration, and emotional guidance surge in value.",
    badge: "Shift to Mentorship",
    badgeColor: "blue",
    intro:
      "This one's interesting because AI is hitting the content delivery side of teaching hard, but not the human development side.",
    points: [
      {
        heading: "What AI Already Does Well",
        body: "Personalized learning paths, instant doubt-solving (AI tutors like Khanmigo and ChatGPT-based tools), auto-grading, generating lesson plans, interactive quizzes, and worksheets, and translating content into regional Indian languages. This is huge for India, where teacher-to-student ratios are often poor.",
      },
      {
        heading: "What's Shrinking",
        body: "Rote instruction — a teacher who is essentially 'reading from the textbook' is easily replaceable by an AI tutor app on a smartphone. Basic content explanation is commoditized now.",
      },
      {
        heading: "What's Growing in Importance",
        body: "Mentorship, emotional support, classroom management, motivating kids, identifying learning gaps in a way that's contextual to the child, and fostering skills like critical thinking, ethics, and creativity that are harder to teach through a screen. Schools that adopt AI-assisted teaching tools will likely retain and attract more parents than ones that don't, since parents increasingly expect tech-enabled personalized learning.",
      },
    ],
    netEffect:
      "Teaching as a profession survives and even grows in importance, but the 'just deliver information' version of the job is fading. Teachers become more like guides/coaches than lecturers.",
  },

  army: {
    careerId: "army",
    title: "Indian Army Officer / Soldier",
    tagline: "High-tech drone warfare and border surveillance integrate with physical boots-on-the-ground defense.",
    badge: "Mission Critical & Resilient",
    badgeColor: "emerald",
    intro:
      "AI is transforming warfare and defense, but the profession itself remains very much intact — arguably more critical, not less.",
    points: [
      {
        heading: "What's Changing",
        body: "Drone warfare and autonomous surveillance (already proven decisive in conflicts like Ukraine), AI-based threat detection along borders, predictive logistics and supply chain management, cyber warfare units, and AI-assisted decision support in command centers. India's DRDO and armed forces are actively investing in AI-driven systems — border surveillance, autonomous vehicles, and cyber defense.",
      },
      {
        heading: "What's Not Changing",
        body: "Ground combat, physical presence for territorial control, human judgment in engagement decisions (especially given India's strict rules of engagement), leadership under extreme fire, and the human element of deterrence — an AI drone doesn't have the same strategic/political signaling weight as boots on the ground.",
      },
      {
        heading: "New Roles Emerging",
        body: "Cyber warfare specialists, drone operators, AI/data analysts within defense — meaning technical skill is becoming as valuable as physical fitness for a modern army career.",
      },
    ],
    netEffect:
      "Joining the Army remains a stable, respected path, but the profile of a 'good candidate' is shifting — technical literacy alongside traditional soldiering skills gives a real edge, especially for officer-track roles.",
  },

  lawyer: {
    careerId: "lawyer",
    title: "Lawyer & Legal Advocate",
    tagline: "Legal research and contract grunt-work are compressed; courtroom advocacy and negotiation dominate.",
    badge: "Heavy Junior Disruption",
    badgeColor: "amber",
    intro:
      "This is one of the more heavily disrupted white-collar professions — but disrupted in a specific layer, not wiped out.",
    points: [
      {
        heading: "What's Already Being Automated",
        body: "Contract review and drafting, legal research (case law search that used to take junior associates hours now takes minutes with AI tools), due diligence document review, and basic legal Q&A chatbots for simple matters (tenancy, consumer disputes, etc.). Indian legal-tech tools are already doing this for routine drafting and research.",
      },
      {
        heading: "What's Hit Hardest",
        body: "Entry-level/junior lawyer work — the grunt work of reading through thousands of documents or drafting boilerplate agreements. This was traditionally how young lawyers learned the trade, so there's now a real debate about how junior lawyers will gain experience.",
      },
      {
        heading: "What Stays Firmly Human",
        body: "Courtroom advocacy, negotiation, persuading a judge or jury, client relationships and trust, ethical judgment, and interpreting law in genuinely novel or ambiguous situations. An AI can't argue a case or read a courtroom's mood.",
      },
    ],
    netEffect:
      "Law survives strongly at the senior/strategic end (litigation, negotiation, advisory) but the traditional 'climb the ladder through years of document grunt work' path is being compressed. Lawyers who adopt AI tools for research/drafting will out-produce those who don't — it becomes a productivity multiplier rather than a threat, for anyone above entry level.",
  },

  nurse: {
    careerId: "nurse",
    title: "Nursing Professional",
    tagline: "Deeply empathetic physical bedside care is virtually immune to automation, aided by smart monitoring.",
    badge: "High Human Resilience",
    badgeColor: "emerald",
    intro:
      "Nursing is one of the more AI-resistant professions, because so much of it is physical, hands-on, and emotionally driven — but the administrative and monitoring layers are changing.",
    points: [
      {
        heading: "What's Already Changing",
        body: "AI-powered patient monitoring (early warning systems that flag deteriorating vitals before a human would notice), automated documentation/charting, medication management systems, and AI triage tools that help prioritize which patients need attention first. Wearables feeding data to AI systems are reducing manual vitals-checking rounds in advanced hospitals.",
      },
      {
        heading: "What's Not Going Anywhere",
        body: "Bedside care, wound dressing, giving injections, comforting patients and families, physical patient handling, and the judgment needed in fast-changing physical situations. No AI can hold a scared patient's hand or notice something is 'off' the way an experienced nurse's instinct does.",
      },
      {
        heading: "India-Specific Angle",
        body: "India has a chronic nurse shortage, so AI is more likely to be seen as a way to help nurses handle more patients efficiently (via smart alerts, automated paperwork) rather than replace them outright.",
      },
    ],
    netEffect:
      "Nursing remains a very secure, in-demand career — arguably safer from AI disruption than most white-collar jobs on this list — with AI mainly reducing paperwork burden and improving early detection, letting nurses focus more on actual patient care.",
  },

  agri: {
    careerId: "agri",
    title: "Agricultural Officer",
    tagline: "Translating satellite and drone sensor insights into trusted, actionable guidance for rural farmers.",
    badge: "Trusted Tech Translator",
    badgeColor: "blue",
    intro:
      "AI is reshaping agricultural guidance from physical field checks to data-driven decision-making.",
    points: [
      {
        heading: "What's Already Changing",
        body: "AI-driven soil analysis, crop disease detection via smartphone camera apps, satellite/drone imagery for yield prediction and irrigation planning, and weather-pattern-based advisory systems. Government schemes in India (like the Digital Agriculture Mission) are pushing AI-based crop advisories directly to farmers, which changes what an agricultural officer's job even looks like — less 'physically inspect every field' and more 'interpret AI-generated data and advise farmers on what to do.'",
      },
      {
        heading: "What's Growing",
        body: "Demand for officers who can bridge AI tools and actual farmer behavior — most farmers, especially older ones, won't trust or use an app directly; they trust a person. An agricultural officer who can translate AI recommendations into practical, on-ground guidance becomes more valuable, not less.",
      },
      {
        heading: "What's Shrinking",
        body: "Manual data collection and record-keeping — soil testing logs, yield surveys — since sensors and satellite data now do this faster and more accurately.",
      },
      {
        heading: "What Stays Human",
        body: "Relationship-building with farming communities, understanding local context (soil quirks, water availability, regional crop economics), and government scheme administration/advocacy on behalf of farmers.",
      },
    ],
    netEffect:
      "The role shifts from being a boots-on-the-ground data collector to being a translator between AI-generated insights and real farmers who need someone they trust to explain it.",
  },

  bank: {
    careerId: "bank",
    title: "Bank Probationary Officer (PO)",
    tagline: "Routine ops and credit scoring are algorithmic; advancement requires relationship and wealth management.",
    badge: "Routine Layer Disrupted",
    badgeColor: "amber",
    intro:
      "Banking operations are undergoing significant automation, particularly in routine transaction and credit screening workflows.",
    points: [
      {
        heading: "What's Already Gone or Going",
        body: "Routine transaction processing, basic account opening, cheque clearing, loan eligibility checks, and even first-level customer queries — all now handled by AI chatbots, automated KYC systems, and algorithmic credit scoring. Indian banks (SBI, HDFC, ICICI) have already cut a lot of routine back-office and even some front-desk work through automation.",
      },
      {
        heading: "What's Shrinking Hardest",
        body: "The traditional 'PO does everything from account opening to loan processing' generalist role.",
      },
      {
        heading: "What's Growing",
        body: "Relationship management (especially for high-value customers, business loans, wealth management), fraud investigation and complex case handling, and roles that require judgment on things algorithms flag but can't resolve — like disputed transactions or nuanced loan applications from small businesses without clean credit histories.",
      },
      {
        heading: "Recruitment Angle",
        body: "Bank PO exams themselves are evolving to test data literacy and analytical thinking more than they used to.",
      },
    ],
    netEffect:
      "This is a career where AI genuinely reduces headcount need at the entry level. It's still stable, but the growth ceiling depends heavily on moving up into relationship/credit-analysis roles rather than staying in routine ops.",
  },

  ca: {
    careerId: "ca",
    title: "Chartered Accountant (CA)",
    tagline: "Tax filing and reconciliation are automated; strategic CFO advisory and forensic auditing surge.",
    badge: "Compliance to Advisory",
    badgeColor: "amber",
    intro:
      "Accounting and routine compliance are heavily automated, shifting the CA value proposition toward strategic advisory.",
    points: [
      {
        heading: "What's Already Automated",
        body: "Bookkeeping, basic tax return filing, GST reconciliation, invoice processing, and routine auditing checks (AI tools can now flag anomalies across thousands of transactions instantly). Tools like AI-powered accounting software (Zoho Books, QuickBooks with AI add-ons, and India-specific GST automation tools) have already eaten into this.",
      },
      {
        heading: "What's Shrinking",
        body: "The traditional path where young CAs cut their teeth doing manual audits and tax filings for years before moving to advisory work.",
      },
      {
        heading: "What's Growing",
        body: "Forensic accounting, financial strategy/CFO-style advisory, M&A due diligence, complex tax planning (especially cross-border and multi-entity situations), and interpreting ambiguous regulatory situations.",
      },
      {
        heading: "India-Specific Point",
        body: "Purely compliance-focused CAs will feel pressure first, while CAs who position themselves as business advisors to SMEs (numbers + strategy) will do well.",
      },
    ],
    netEffect:
      "CA remains a strong, respected career, but success increasingly depends on how much of your value is 'advisor who understands the business' versus 'person who files the paperwork correctly.' The latter is where AI is squeezing hardest.",
  },

  designer: {
    careerId: "designer",
    title: "Graphic Designer",
    tagline: "Asset generation is commoditized; value shifts to creative direction, branding, and UI/UX.",
    badge: "High Creative Disruption",
    badgeColor: "rose",
    intro:
      "Generative image and layout AI models have upended entry-level asset production, pushing designers toward strategic direction.",
    points: [
      {
        heading: "What's Already Happening",
        body: "AI tools (Midjourney, DALL-E, Canva's AI features, Adobe Firefly) can now generate logos, social media graphics, posters, and basic branding assets in seconds. A lot of 'give me a quick banner/thumbnail/poster' freelance work has already dried up or collapsed in price.",
      },
      {
        heading: "What's Hit Hardest",
        body: "Entry-level and generic design work — stock-style graphics, basic social media content, simple logo concepts.",
      },
      {
        heading: "What's Holding Up or Growing",
        body: "Brand strategy, complex multi-element campaigns, motion design/video, UI/UX design for actual products, and designers who use AI as a tool to produce more, faster.",
      },
      {
        heading: "Real Shift",
        body: "The job is moving from 'I draw/create things' to 'I direct AI tools and curate/refine what they produce, with strong taste and brand judgment.'",
      },
    ],
    netEffect:
      "Pure production-based graphic design is genuinely at risk and already shrinking. The designers who survive and thrive move up into creative direction, branding strategy, or specialized areas like UI/UX.",
  },

  pharmacist: {
    careerId: "pharmacist",
    title: "Pharmacist",
    tagline: "Automated pill dispensing shifts emphasis to clinical counseling, pharmacovigilance, and patient trust.",
    badge: "Stable Clinical Care",
    badgeColor: "emerald",
    intro:
      "Pharmacy is transitioning from routine medication dispensing to patient safety and clinical medication management.",
    points: [
      {
        heading: "What's Already Changing",
        body: "Automated dispensing systems in large hospital/retail pharmacy chains, AI-driven inventory and expiry management, drug interaction checking software, and online pharmacy platforms (like PharmEasy, 1mg in India) that handle prescription verification and delivery logistics with minimal human involvement for routine refills.",
      },
      {
        heading: "What's Shrinking",
        body: "The purely transactional 'count pills and hand them over' role, especially in high-volume retail settings.",
      },
      {
        heading: "What's Growing",
        body: "Clinical pharmacy roles — advising patients on medication management, working alongside doctors on treatment plans, and community pharmacists who build trust with local patients. Also growing: pharmacovigilance and drug safety monitoring.",
      },
      {
        heading: "India-Specific Note",
        body: "Small independent pharmacies serve as accessible, low-cost, trusted local health touchpoints, but increasingly compete with app-based delivery pharmacies for routine refill business.",
      },
    ],
    netEffect:
      "Pharmacist remains a stable career, but like nursing, its safety comes from the human trust/advisory element rather than the technical dispensing part.",
  },

  swe: {
    careerId: "swe",
    title: "Software Engineer",
    tagline: "Coding assistants write boilerplate; system architecture, security, and verification define top engineers.",
    badge: "Evolving to System Architecture",
    badgeColor: "blue",
    intro:
      "AI coding assistants have accelerated code creation, shifting the focus to system architecture, security, and verification.",
    points: [
      {
        heading: "What's Already Changing Fast",
        body: "AI coding assistants (GitHub Copilot, Claude Code, Cursor) now write a large share of boilerplate code, generate entire small apps from prompts, write tests, debug, and even do basic architecture suggestions. Junior-level tasks — writing CRUD APIs, basic UI components, simple bug fixes — are increasingly done in minutes with AI assistance.",
      },
      {
        heading: "What's Hit Hardest",
        body: "Entry-level/junior developer hiring. Many companies globally (and increasingly in India) are hiring fewer junior engineers because a smaller senior team with AI tools can now produce what used to require a bigger team.",
      },
      {
        heading: "What's Growing in Value",
        body: "System design and architecture, debugging genuinely novel/complex issues, understanding business context well enough to translate vague requirements into the right product decisions, security, and reviewing/directing AI output critically rather than trusting it blindly.",
      },
      {
        heading: "The Real Shift",
        body: "The job is moving from 'write code' to 'direct AI to write code, then verify, integrate, and take responsibility for it.'",
      },
    ],
    netEffect:
      "Software engineering isn't disappearing, but the entry point into the profession is getting narrower and harder, while the ceiling for skilled, judgment-heavy engineers is arguably higher than ever. 'Learn to code AND develop strong system-level judgment' is the real advice now.",
  },

  engineer: {
    careerId: "engineer",
    title: "Core Engineer (Civil, Mechanical, Electrical)",
    tagline: "Physical execution, on-site problem solving, and complex infrastructure remain highly AI-resistant.",
    badge: "High Physical-World Resilience",
    badgeColor: "emerald",
    intro:
      "Core engineering blends generative simulation tools with real-world physical infrastructure and site execution.",
    points: [
      {
        heading: "What's Already Changing",
        body: "AI-assisted CAD and design tools that auto-generate and optimize structural/mechanical designs (generative design), predictive maintenance systems using sensor data, AI-driven project planning and cost estimation, and automated quality inspection using computer vision on production lines.",
      },
      {
        heading: "What's Shrinking",
        body: "Manual drafting, repetitive calculations, and basic design-checking work.",
      },
      {
        heading: "What's Growing",
        body: "On-site execution and problem-solving, interdisciplinary coordination, and specialized fields like renewable energy, robotics, and automation engineering.",
      },
      {
        heading: "India-Specific Angle",
        body: "Given the scale of infrastructure development in India (highways, bridges, railways, industrial corridors), on-ground core engineering demand stays strong regardless of AI.",
      },
    ],
    netEffect:
      "Core engineering is one of the more AI-resistant fields on this list because so much of it involves physical-world execution and site-specific problem solving. AI mostly acts as a productivity tool in the design/planning phase.",
  },

  architect: {
    careerId: "architect",
    title: "Architect",
    tagline: "Generative layout tools accelerate drafting while spatial creativity, zoning laws, and client vision stay human.",
    badge: "Design Acceleration",
    badgeColor: "blue",
    intro:
      "AI speeds up spatial modeling and compliance checks while leaving client relationships and physical site realities human.",
    points: [
      {
        heading: "What's Already Changing",
        body: "Generative design AI (producing dozens of floor plan or structural options based on constraints), AI-assisted rendering, automated code-compliance checking, and AI-driven structural analysis.",
      },
      {
        heading: "What's Shrinking",
        body: "Junior architect work involving repetitive drafting, basic 3D modeling, and generating standard layout options.",
      },
      {
        heading: "What's Holding Strong",
        body: "Site-specific design judgment (light, local climate, culture, how people use a space), client relationship management, regulatory/legal sign-off responsibility, and construction-site oversight.",
      },
      {
        heading: "Growing Niche",
        body: "Architects who use AI to rapidly prototype and visualize options for clients are becoming far more productive and competitive.",
      },
    ],
    netEffect:
      "Architecture remains a strong, creative, human-judgment-driven career. AI compresses the grunt-work drafting phase but architects who master it can serve far more clients and iterate faster.",
  },

  "navy-airforce": {
    careerId: "navy-airforce",
    title: "Indian Navy & Air Force Officer",
    tagline: "Autonomous surveillance and predictive maintenance elevate technical tracks alongside combat command.",
    badge: "Mission Critical & Strategic",
    badgeColor: "emerald",
    intro:
      "Naval and aerospace defense are leveraging autonomous unmanned surveillance and predictive fleet maintenance.",
    points: [
      {
        heading: "What's Already Changing",
        body: "Autonomous naval drones and underwater vehicles for surveillance and mine detection, AI-assisted radar and threat detection systems, predictive maintenance for aircraft and ships, and AI-driven mission planning/simulation for training pilots.",
      },
      {
        heading: "What's Not Changing",
        body: "Actual piloting of fighter aircraft in combat, naval vessel command, and the physical/tactical execution of operations at sea or in the air.",
      },
      {
        heading: "New Roles Emerging",
        body: "Cyber defense specialists, drone/UAV operators, satellite and radar data analysts.",
      },
      {
        heading: "India-Specific Context",
        body: "India's Navy and Air Force are actively modernizing with indigenous AI-assisted systems (Atmanirbhar Bharat defense push), so demand for tech-literate personnel is rising.",
      },
    ],
    netEffect:
      "These remain stable, prestigious careers, with the technical/analyst tracks growing in prominence alongside traditional combat roles.",
  },

  "hotel-management": {
    careerId: "hotel-management",
    title: "Hotel Management & Hospitality",
    tagline: "Kiosks and chatbots handle bookings; high-touch guest relations, event hosting, and F&B thrive.",
    badge: "High-Touch Hospitality",
    badgeColor: "blue",
    intro:
      "Automation handles routine check-ins and revenue algorithms, while human hospitality drives luxury and guest loyalty.",
    points: [
      {
        heading: "What's Already Changing",
        body: "AI-powered booking and revenue management systems, chatbots handling routine guest queries and check-in/check-out, AI-driven personalization, and automated back-office functions like inventory, housekeeping scheduling, and energy management.",
      },
      {
        heading: "What's Shrinking",
        body: "Front-desk roles focused purely on routine transactions — many hotels now have self-service kiosks or app-based check-in.",
      },
      {
        heading: "What's Holding Strong or Growing",
        body: "Guest experience delivery — concierge services, event/wedding management (huge in India), F&B service, problem resolution, and operations management that requires coordinating people.",
      },
      {
        heading: "Career Angle",
        body: "Graduates who understand both hospitality and AI tools for personalization/operations will have an edge.",
      },
    ],
    netEffect:
      "Hotel management remains a strong career, especially in India's growing tourism sector, but the 'just perform routine service tasks' layer is shrinking.",
  },

  sports: {
    careerId: "sports",
    title: "Sports / Professional Athlete",
    tagline: "On-field competition is 100% human; training, biomechanics, and tactics are heavily data-driven.",
    badge: "Fully Human Performance",
    badgeColor: "emerald",
    intro:
      "Athletic performance is intensely physical, but training regimes and injury prevention are now heavily data-driven.",
    points: [
      {
        heading: "What's Already Changing",
        body: "AI-powered performance analytics (tracking movement, biomechanics, fatigue in real time — used in cricket, football, Olympic training including Indian teams), injury prediction models, AI-assisted video analysis of opponents, and personalized training/nutrition plans.",
      },
      {
        heading: "What's Not Changing",
        body: "Actually playing the sport — reflexes, competitive instinct, performance under pressure.",
      },
      {
        heading: "What's Growing",
        body: "Sports science and analytics roles around athletes; athletes who adopt data-driven training gain a real edge.",
      },
      {
        heading: "India-Specific Angle",
        body: "Success still depends heavily on early identification, access to good coaching/infrastructure, and financial support — AI is making talent identification more efficient, potentially unearthing talent from smaller towns.",
      },
    ],
    netEffect:
      "Being an athlete itself remains fully human, but the path to becoming a top athlete is increasingly data-driven. This remains a high-risk/high-reward path independent of AI.",
  },

  "govt-jobs": {
    careerId: "govt-jobs",
    title: "Government Jobs (General / SSC / State)",
    tagline: "Clerical data-entry shrinks as Digital India automates forms; public delivery and tech oversight rise.",
    badge: "Clerical Shift",
    badgeColor: "amber",
    intro:
      "Routine administrative paperwork is being digitized, prioritizing field oversight and technical administration.",
    points: [
      {
        heading: "What's Already Changing",
        body: "Routine paperwork, form processing, records management, and basic public query handling are being automated across Indian government departments via Digital India initiatives.",
      },
      {
        heading: "What's Shrinking",
        body: "Pure data-entry and clerical roles — the 'sit at a desk and process forms' version of a government job.",
      },
      {
        heading: "What's Holding Strong or Growing",
        body: "On-ground verification and judgment roles (land records disputes, welfare scheme eligibility), regulatory and policy roles, technical roles managing digital governance infrastructure, and roles requiring direct public interaction (grievance redressal, local administration).",
      },
      {
        heading: "Important Nuance",
        body: "Job security/pension remains largely intact even as clerical work shrinks — new hiring into pure clerical cadres is slowing, while hiring for tech-literate government roles is rising.",
      },
    ],
    netEffect:
      "The traditional 'safe desk job' version of government service is shrinking in relevance, while 'govt job + tech literacy' combinations are becoming the more future-proof version.",
  },

  scientist: {
    careerId: "scientist",
    title: "Scientist / Researcher",
    tagline: "AI removes literature and experimental drudgery; hypothesis design and breakthroughs accelerate.",
    badge: "Major Force Multiplier",
    badgeColor: "emerald",
    intro:
      "AI acts as a force multiplier in scientific discovery by accelerating data analysis and hypothesis simulation.",
    points: [
      {
        heading: "What's Already Changing",
        body: "AI is accelerating literature review, hypothesis generation, data analysis in fields like genomics and materials science (AlphaFold being the famous example), and automating repetitive lab tasks. In India, DRDO, ISRO, and academic institutions (IITs, IISc) are integrating AI into research pipelines.",
      },
      {
        heading: "What's Shrinking",
        body: "The grunt-work side of research — manually sifting through data, running repetitive experiments, basic statistical analysis.",
      },
      {
        heading: "What's Growing",
        body: "Designing the right experiments and research questions, interdisciplinary thinking, and interpreting ambiguous or contradictory results in context.",
      },
      {
        heading: "Career Reality Check",
        body: "Research careers in India have always been somewhat constrained by funding and infrastructure — that structural challenge remains separate from AI.",
      },
    ],
    netEffect:
      "One of the more AI-positive careers on the list — AI mostly removes drudgery and accelerates discovery, making a good researcher significantly more productive rather than replacing the role.",
  },

  entrepreneur: {
    careerId: "entrepreneur",
    title: "Entrepreneur / Business Owner",
    tagline: "Leaner teams launch faster with AI leverage; differentiation shifts to customer trust and rapid execution.",
    badge: "Lower Barrier, Higher Speed",
    badgeColor: "blue",
    intro:
      "AI dramatically cuts operational and startup costs, lowering barriers to entry while intensifying market speed.",
    points: [
      {
        heading: "What's Already Changing",
        body: "AI is dramatically lowering the cost and team size needed to launch and run a business — marketing, customer support, product development, and even basic legal/accounting tasks can now be handled by a small team or solo founder using AI tools.",
      },
      {
        heading: "What's Shrinking",
        body: "The traditional advantage that came purely from having more capital or more employees.",
      },
      {
        heading: "What's Growing in Importance",
        body: "Identifying real problems worth solving, judgment on what to build and when to pivot, relationship-building with customers/partners/investors, and execution speed.",
      },
      {
        heading: "Real Risk",
        body: "Because AI lowers the barrier to entry, more competitors can launch similar products faster too — the moat shifts from 'I can build this' to 'I understand this market/customer better than anyone else.'",
      },
    ],
    netEffect:
      "Entrepreneurship is becoming more accessible because of AI, but also more competitive for the same reason. The advantage goes to founders who combine domain knowledge with strong AI-leverage.",
  },

  "interior-designer": {
    careerId: "interior-designer",
    title: "Interior Designer",
    tagline: "3D concepts and mood boards generate in seconds; value lies in space planning and on-site contracting.",
    badge: "Execution & Real-World Moat",
    badgeColor: "amber",
    intro:
      "AI instant concept generators compress mood board creation, elevating material curation and on-site execution.",
    points: [
      {
        heading: "What's Already Changing",
        body: "AI-powered design tools (built on Midjourney/Stable Diffusion, plus apps like Coohom or Planner 5D) can generate multiple room design concepts instantly, auto-suggest furniture layouts, color palettes, and material combinations.",
      },
      {
        heading: "What's Shrinking",
        body: "Entry-level work involving mood boards, basic 3D renders, and standard layout options.",
      },
      {
        heading: "What's Holding Strong",
        body: "Actual space planning that accounts for real-world constraints (plumbing, electrical, structural limitations), sourcing and vendor management (especially in India, relationship-driven), project management through execution, and understanding a client's actual lifestyle.",
      },
      {
        heading: "Career Shift",
        body: "Designers who use AI to rapidly generate and iterate concepts, combined with strong execution/vendor management, are pulling ahead.",
      },
    ],
    netEffect:
      "Interior design remains viable and creative, but pure 'concept generation' value is being commoditized fast. The differentiator becomes execution management and understanding practical client needs.",
  },

  mba: {
    careerId: "mba",
    title: "Business Management (MBA)",
    tagline: "Analyst grunt-work is automated; leading cross-functional teams and orchestrating AI workflows rise in value.",
    badge: "AI-Native Leadership",
    badgeColor: "blue",
    intro:
      "Routine analytical models are automated, elevating cross-functional leadership, empathy, and AI strategy execution.",
    points: [
      {
        heading: "What's Already Changing",
        body: "AI is automating a lot of the analytical grunt work MBAs traditionally did early in their careers — market research synthesis, financial modeling, competitive analysis, and basic strategy deck-building.",
      },
      {
        heading: "What's Shrinking",
        body: "The traditional 'MBA = guaranteed corporate ladder climb via analyst/associate roles' pipeline.",
      },
      {
        heading: "What's Growing",
        body: "Leadership and people-management skills, cross-functional strategic thinking, and AI-fluency itself — MBAs who understand how to deploy AI across a business are highly sought after ('AI-native managers').",
      },
      {
        heading: "India-Specific Note",
        body: "MBA value has always varied by institute tier — top-tier (IIMs, ISB) still commands strong outcomes, but mid/lower-tier programs face more ROI scrutiny.",
      },
    ],
    netEffect:
      "An MBA remains valuable, mainly for the leadership/strategic layer. It's increasingly a credential for leading AI-augmented teams rather than doing the analytical work itself.",
  },

  pilot: {
    careerId: "pilot",
    title: "Commercial Pilot",
    tagline: "Autopilot handles cruising; human pilots remain indispensable for emergency response and safety regulations.",
    badge: "Regulatory Safety Shield",
    badgeColor: "emerald",
    intro:
      "Aviation heavily relies on automated fly-by-wire and autopilot, yet safety regulations and emergency response remain firmly pilot-led.",
    points: [
      {
        heading: "What's Already True",
        body: "Modern aircraft already fly themselves for most of a flight using autopilot — this isn't new and hasn't eliminated pilots. AI is now improving predictive maintenance, optimizing flight paths for fuel efficiency, and assisting air traffic management.",
      },
      {
        heading: "What's Genuinely Being Discussed",
        body: "Single-pilot or fully autonomous commercial flight is a live research topic, but for passenger aviation, regulators (including India's DGCA) are extremely conservative — this is a decades-long process, not near-term.",
      },
      {
        heading: "What Stays Firmly Human",
        body: "Takeoff and landing in adverse conditions, handling genuine emergencies, passenger reassurance, and the redundancy/accountability regulators require.",
      },
      {
        heading: "India-Specific Context",
        body: "India's aviation sector is expanding fast, so pilot demand is growing from industry expansion, largely independent of AI.",
      },
    ],
    netEffect:
      "One of the safer careers from near-term AI disruption — automation has already done what it's going to do for a long while, and growth is currently driven more by industry expansion than threatened by AI replacement.",
  },

  fashion: {
    careerId: "fashion",
    title: "Fashion Designer",
    tagline: "Digital generation speeds up mass-market apparel; handloom craftsmanship and designer identity retain value.",
    badge: "Craftsmanship & Identity",
    badgeColor: "amber",
    intro:
      "Generative trend forecasting and digital sampling assist design, while craftsmanship, bespoke fit, and brand culture stay human.",
    points: [
      {
        heading: "What's Already Changing",
        body: "AI tools generate hundreds of design concepts, fabric patterns, and color combinations in seconds; AI-driven trend forecasting predicts styles before a season even starts; virtual try-on and AI-generated fashion photography reduce need for traditional photoshoots.",
      },
      {
        heading: "What's Shrinking",
        body: "Junior design roles focused on basic sketches, pattern variations, and trend-following collections.",
      },
      {
        heading: "What's Holding Strong or Growing",
        body: "Haute couture and craftsmanship-driven design (India's handloom, embroidery, and traditional textile work is a real cultural/skill moat), personal brand and designer identity, and the physical tailoring/fitting process (especially in India's bespoke and wedding-wear market).",
      },
      {
        heading: "India-Specific Angle",
        body: "India's artisanal/handcrafted fashion segment is fairly insulated from AI disruption compared to mass-market fast fashion.",
      },
    ],
    netEffect:
      "Fashion design as pure trend-following mass production is increasingly AI-assisted or automated, but designer-driven, craftsmanship-heavy, brand-driven fashion remains strong, especially for distinct creative identities.",
  },

  journalist: {
    careerId: "journalist",
    title: "Journalist & Media Reporter",
    tagline: "Routine press releases and match scores are auto-written; investigative journalism and unique voices survive.",
    badge: "Heavy Disruption at Base",
    badgeColor: "rose",
    intro:
      "Basic reporting and data summaries are automated; original investigation and trusted investigative voices become essential.",
    points: [
      {
        heading: "What's Already Changing",
        body: "AI can generate basic news reports (sports scores, financial summaries, weather updates) instantly from structured data. AI is also used for transcription, summarizing documents, and drafting first versions of routine articles.",
      },
      {
        heading: "What's Shrinking",
        body: "Routine reporting — rewriting press releases, basic event coverage, listicle-style content, generic news aggregation.",
      },
      {
        heading: "What's Growing in Importance",
        body: "Investigative journalism, on-the-ground reporting in conflict/disaster zones, opinion/analysis with a genuine distinct voice, and verification/fact-checking as AI-generated misinformation grows.",
      },
      {
        heading: "Compounding Challenge",
        body: "Journalism was already under economic pressure before AI (declining ad revenue, social media disrupting distribution) — AI adds another layer on top.",
      },
    ],
    netEffect:
      "One of the more genuinely at-risk careers on this list, especially at the entry/generalist level. Survivors do original investigative work, build a trusted personal brand, or cover highly specialized beats.",
  },

  ias: {
    careerId: "ias",
    title: "IAS (Indian Administrative Service)",
    tagline: "AI dashboards streamline scheme oversight; constitutional authority, crisis leadership, and discretion remain human.",
    badge: "High Security & Authority",
    badgeColor: "emerald",
    intro:
      "AI dashboards streamline public scheme monitoring and grievance redressal, while executive discretion and governance remain human.",
    points: [
      {
        heading: "What's Already Changing",
        body: "AI-powered data dashboards for tracking welfare scheme delivery, predictive analytics for resource allocation (disaster response, drought/flood management), automated grievance redressal systems, and AI tools helping process enormous volumes of applications and records. Several Indian states are piloting AI-based systems for PDS leakage detection and land record digitization.",
      },
      {
        heading: "What's Not Changing at All",
        body: "The actual authority and accountability structure — an IAS officer signs off and bears legal responsibility. Crisis management, inter-departmental coordination, political liaison, and on-ground judgment calls remain entirely human.",
      },
      {
        heading: "What's Growing",
        body: "Demand for officers comfortable directing AI-driven governance systems and using data dashboards to make faster, better-informed decisions.",
      },
      {
        heading: "Career Reality Check",
        body: "The difficulty of getting into IAS (UPSC) is unrelated to AI — that bottleneck is about exam competition, not automation risk.",
      },
    ],
    netEffect:
      "One of the most secure, prestigious, and AI-resistant careers on this list — officers who can effectively wield AI-powered governance tools will be more impactful than those who don't.",
  },
};
