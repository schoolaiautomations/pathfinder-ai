// Master Career Guidance Tree Data
// Covers complete pathways after 10th (S.S.C.) and 12th (H.S.C. / Intermediate)

export interface CareerTreeNode {
  id: string;
  label: string;
  subtitle?: string;
  duration?: string;
  tag?: string;
  category: "ssc" | "science_pcm" | "science_pcb" | "commerce" | "arts" | "diploma" | "root";
  color?: string;
  entranceExams?: string[];
  jobRoles?: string[];
  description?: string;
  salaryTier?: string;
  children?: CareerTreeNode[];
}

export const CAREER_TREE_ROOT: CareerTreeNode = {
  id: "school-education",
  label: "School & Higher Secondary Education",
  subtitle: "Starting Points for Every Indian Student",
  category: "root",
  children: [
    // ═════════════════════════════════════════════════════════════════════════
    // ROOT BRANCH 1: AFTER 10th (S.S.C.)
    // ═════════════════════════════════════════════════════════════════════════
    {
      id: "after-10th",
      label: "After 10th (S.S.C.)",
      subtitle: "Direct Technical, Vocational, Defence & Diploma Avenues",
      duration: "1 to 3 Years",
      category: "ssc",
      color: "#D97706", // amber-600
      description: "Immediate career-oriented pathways, diplomas, and entry-level government service options available right after Class 10.",
      children: [
        {
          id: "polytechnic-diploma",
          label: "Polytechnic Engineering Diploma",
          subtitle: "Civil, Mechanical, Electrical, ECE, Computer, Automobile",
          duration: "3 Years",
          tag: "Technical",
          category: "ssc",
          entranceExams: ["POLYCET", "State Polytechnic Entrance Exams"],
          jobRoles: ["Junior Engineer (JE)", "Sub-Engineer", "Govt Contractor", "Plant Supervisor"],
          description: "Hands-on engineering education leading to direct lateral entry into 2nd year B.Tech/B.E.",
          children: [
            {
              id: "poly-btech-lateral",
              label: "B.Tech / B.E. (Direct 2nd Year Entry)",
              subtitle: "Lateral Entry through ECET into Engineering Colleges",
              duration: "3 Years",
              category: "ssc",
              entranceExams: ["ECET (Lateral Entry)"],
              jobRoles: ["Design Engineer", "Software Developer", "Site Engineer", "RTO Inspector"],
              children: [
                {
                  id: "poly-govt-contractor",
                  label: "Government Contractor / PSUs / Railways",
                  subtitle: "Class-1 Civil/Electrical/Mechanical Contractor & RRB JE",
                  category: "ssc",
                  jobRoles: ["Licensed Contractor", "Railway Section Engineer", "CPWD / State PWD Assistant Engineer"]
                },
                {
                  id: "poly-amie",
                  label: "AMIE / Professional Certification",
                  subtitle: "Associate Membership of Institution of Engineers",
                  category: "ssc",
                  jobRoles: ["Chartered Engineer (India)", "Chief Project Consultant"]
                }
              ]
            },
            {
              id: "poly-rto",
              label: "R.T.O. Inspector Exam",
              subtitle: "Motor Vehicle Inspector (MVI) via State PSC",
              category: "ssc",
              jobRoles: ["Assistant Motor Vehicle Inspector (AMVI)", "RTO Transport Officer"]
            },
            {
              id: "poly-merchant-navy",
              label: "Merchant Navy (Rating Entry)",
              subtitle: "GP Rating & Marine Technical Apprenticeship",
              duration: "6 Months - 1 Year",
              category: "ssc",
              jobRoles: ["Engine Rating", "Deck Rating", "Seaman"]
            }
          ]
        },
        {
          id: "iti-courses",
          label: "I.T.I. (Industrial Training Institute)",
          subtitle: "Electrician, Fitter, Welder, Machinist, COPA, Diesel Mechanic",
          duration: "1 to 2 Years",
          tag: "Vocational",
          category: "ssc",
          entranceExams: ["Merit-based Admissions / State ITI Portal"],
          jobRoles: ["Licensed Electrician", "Precision Machinist", "Tool & Die Maker", "Plant Technician"],
          description: "High-demand vocational trade certifications by NCVT/SCVT with immediate apprenticeship openings.",
          children: [
            {
              id: "iti-apprentice",
              label: "Apprenticeship in PSUs & Railways",
              subtitle: "Apprenticeship in BHEL, ONGC, IOCL, ISRO, DRDO & Indian Railways",
              duration: "1 Year",
              category: "ssc",
              jobRoles: ["Railway ALP (Assistant Loco Pilot)", "Technician Grade-III", "PSU Craftsman"]
            },
            {
              id: "iti-self-employed",
              label: "Self-Employment & MSME Workshops",
              subtitle: "Electrical Contracting, Welding & Fabrication Workshops",
              category: "ssc",
              jobRoles: ["Workshop Owner", "Industrial Fabrication Specialist", "HVAC Contractor"]
            }
          ]
        },
        {
          id: "defence-police-10th",
          label: "Armed Forces & Police (10th Entry)",
          subtitle: "Army Soldier (GD), Navy (MR), Air Force (Group Y), Police Constable",
          duration: "Immediate Service",
          tag: "Govt / Uniform",
          category: "ssc",
          entranceExams: ["Army Agniveer Exam", "Navy Agniveer (MR)", "Air Force Agniveer Non-Combatant", "State Police Recruitment"],
          jobRoles: ["Indian Army Soldier (General Duty)", "Navy Sailor (Matric Recruit)", "State Police Constable", "BSF / CRPF / CISF Constable"],
          description: "Prestigious uniformed service directly serving the nation with pension, healthcare and promotion tracks."
        },
        {
          id: "medical-lab-cert-10th",
          label: "Medical Laboratory Technician (MLT Certificate)",
          subtitle: "Certificate in Medical Lab Technology, X-Ray & Rural Healthcare",
          duration: "1 to 2 Years",
          tag: "Healthcare",
          category: "ssc",
          jobRoles: ["Phlebotomist", "Lab Assistant", "Diagnostic Centre Technician", "Rural Clinic Attendant"]
        },
        {
          id: "railways-clerical-10th",
          label: "Railway & Government Clerical Exams",
          subtitle: "Commercial Clerk, Ticket Collector (TC), Postman, SSC MTS",
          category: "ssc",
          entranceExams: ["RRB Group D & TC Exam", "SSC Multi-Tasking Staff (MTS)", "India Post GDS"],
          jobRoles: ["Ticket Collector (TC)", "Commercial Clerk", "Postal Assistant", "Central Govt Multi-Tasking Staff"]
        },
        {
          id: "art-vocational-10th",
          label: "Commercial Art & Teacher Diploma",
          subtitle: "Art Teacher Diploma, Commercial Art, Fine Art Drawing",
          duration: "2 Years",
          category: "ssc",
          jobRoles: ["School Art Teacher", "Freelance Illustrator", "Signboard & Visual Artist"]
        },
        {
          id: "various-diplomas-10th",
          label: "Vocational & Skill Diplomas",
          subtitle: "Interior Design, Stenography, Beauty Culture, Garment Tech, MS-CIT",
          duration: "6 Months - 2 Years",
          category: "ssc",
          jobRoles: ["Interior Decorator", "Court Stenographer", "Salon Owner", "Apparel Merchandiser", "Data Entry Operator"]
        },
        {
          id: "agriculture-farming-10th",
          label: "Agriculture & Dairy Management",
          subtitle: "Diploma in Farm Management & Animal Husbandry",
          duration: "2 Years",
          category: "ssc",
          jobRoles: ["Dairy Farm Manager", "Poultry Supervisor", "Agri-Input Sales Agent", "Veterinary Clinic Assistant"]
        }
      ]
    },

    // ═════════════════════════════════════════════════════════════════════════
    // ROOT BRANCH 2: 12th (H.S.C.) / INTERMEDIATE
    // ═════════════════════════════════════════════════════════════════════════
    {
      id: "after-12th",
      label: "After 12th (H.S.C. / Intermediate)",
      subtitle: "The Master Gateway to Science, Commerce, Arts & Professional Degrees",
      duration: "2 to 5.5 Years",
      category: "root",
      color: "#1C1917", // stone-900
      description: "The primary springboard for all professional careers in India, branched by intermediate streams: PCM, PCB, Commerce, and Arts.",
      children: [
        // ─────────────────────────────────────────────────────────────────────
        // DIRECT DIPLOMAS & LICENSES (Available after 12th)
        // ─────────────────────────────────────────────────────────────────────
        {
          id: "direct-12th-diplomas",
          label: "Direct Professional Licenses & Diplomas",
          subtitle: "Commercial Aviation, Hospitality, Tourism & Primary Teaching",
          category: "diploma",
          color: "#0284C7", // sky-600
          children: [
            {
              id: "aviation-pilot",
              label: "Commercial Pilot Training (CPL)",
              subtitle: "Student Pilot Licence (SPL) → Private Pilot (PPL) → Commercial Pilot Licence (CPL)",
              duration: "18 to 24 Months",
              entranceExams: ["DGCA Exams", "IGRUA Entrance", "Airline Cadet Pilot Programs"],
              category: "diploma",
              jobRoles: ["First Officer (Co-Pilot)", "Commercial Airline Captain", "Cargo Pilot", "Flight Instructor"]
            },
            {
              id: "hotel-management-diploma",
              label: "Hotel Management & Air Hostess",
              subtitle: "Diploma in Hotel Operations, Cabin Crew & Hospitality Services",
              duration: "1 to 3 Years",
              entranceExams: ["NCHMCT JEE", "Aviation Academy Interviews"],
              category: "diploma",
              jobRoles: ["Cabin Crew / Air Hostess", "Flight Steward", "5-Star Hotel Duty Manager", "Guest Relations Executive"]
            },
            {
              id: "travel-tourism-diploma",
              label: "Diploma in Travel & Tourism",
              subtitle: "IATA Certified Ticketing, Tour Packaging & Destination Management",
              duration: "1 to 2 Years",
              category: "diploma",
              jobRoles: ["Travel Consultant", "Tour Operations Manager", "Airport Ground Handling Agent"]
            },
            {
              id: "dmlt-after-12th",
              label: "D.M.L.T. (Medical Lab Tech Diploma)",
              subtitle: "Clinical Biochemistry, Pathology & Microbiology Testing",
              duration: "2 Years",
              category: "diploma",
              jobRoles: ["Clinical Lab Technician", "Blood Bank Officer", "Hospital Pathology Assistant"]
            },
            {
              id: "ded-teacher",
              label: "D.Ed. (Diploma in Elementary Education)",
              subtitle: "Primary School Teacher Training for Classes 1 to 5",
              duration: "2 Years",
              entranceExams: ["DEECET", "TET Paper 1"],
              category: "diploma",
              jobRoles: ["Government Primary Teacher (SGT)", "Private School Educator"]
            }
          ]
        },

        // ─────────────────────────────────────────────────────────────────────
        // STREAM 1: 12th SCIENCE (PCM - Physics, Chemistry, Maths)
        // ─────────────────────────────────────────────────────────────────────
        {
          id: "science-pcm",
          label: "12th Science (PCM / MPC)",
          subtitle: "Engineering, Technology, Architecture, Defence, Computing & Research",
          category: "science_pcm",
          color: "#0369A1", // sky-700
          description: "High-math and analytical domain leading to cutting-edge technology, defence command, and core sciences.",
          children: [
            {
              id: "btech-engineering",
              label: "B.Tech / B.E. (Bachelor of Technology / Engineering)",
              subtitle: "Computer Science, AI & ML, ECE, Mechanical, Civil, Electrical, Aerospace",
              duration: "4 Years",
              category: "science_pcm",
              entranceExams: ["JEE Main", "JEE Advanced (IITs)", "BITSAT", "State EAPCET / CETs"],
              jobRoles: ["Software Development Engineer", "System Architect", "Hardware Engineer", "Structural / Site Engineer"],
              children: [
                {
                  id: "btech-postgrad-tech",
                  label: "M.Tech / M.E. (via GATE)",
                  subtitle: "Specialized Master's Degree in IITs, NITs & Premier Research Institutes",
                  duration: "2 Years",
                  entranceExams: ["GATE (Graduate Aptitude Test in Engineering)"],
                  category: "science_pcm",
                  jobRoles: ["R&D Specialist", "Principal Design Engineer", "Assistant Professor in Engineering"]
                },
                {
                  id: "btech-ms-abroad",
                  label: "M.S. Abroad (USA, Germany, UK, Canada)",
                  subtitle: "Global Master of Science in AI, Robotics, Data Science",
                  duration: "1.5 to 2 Years",
                  entranceExams: ["GRE", "TOEFL / IELTS"],
                  category: "science_pcm",
                  jobRoles: ["Global Tech Lead", "Data Scientist", "Research Scientist"]
                },
                {
                  id: "btech-mba",
                  label: "M.B.A. (Tech Management / Leadership)",
                  subtitle: "IIMs, XLRI, ISB via CAT / GMAT",
                  duration: "2 Years",
                  entranceExams: ["CAT", "XAT", "GMAT"],
                  category: "science_pcm",
                  jobRoles: ["Product Manager", "Management Consultant", "Investment Banker", "Chief Technology Officer"]
                },
                {
                  id: "btech-govt-psus",
                  label: "Indian Engineering Services (IES) & PSUs",
                  subtitle: "UPSC Engineering Services & PSU Navratnas (ONGC, IOCL, BHEL, NTPC)",
                  category: "science_pcm",
                  entranceExams: ["UPSC ESE / IES", "GATE (PSU Recruitment)", "RRB Senior Section Engineer"],
                  jobRoles: ["Executive Engineer (Govt)", "Assistant Director CPWD", "PSU Plant Executive"]
                },
                {
                  id: "btech-defence-tech",
                  label: "Technical Commission in Army / Navy / Air Force",
                  subtitle: "TGC, UES, AFCAT, Navy Executive Technical Branch",
                  category: "science_pcm",
                  jobRoles: ["Captain / Lieutenant Engineer", "Flying Officer Aeronautical Engineer", "Naval Architect"]
                }
              ]
            },
            {
              id: "defence-nda-pcm",
              label: "N.D.A. (National Defence Academy)",
              subtitle: "Indian Army, Indian Navy & Indian Air Force Flying Officer Cadet",
              duration: "3 Yrs NDA + 1 Yr IMA/AFA/INA",
              category: "science_pcm",
              entranceExams: ["UPSC NDA & NA Exam + SSB Interview"],
              jobRoles: ["Commissioned Officer", "Fighter Pilot", "Warship Navigation Officer", "Infantry Commander"],
              description: "The pinnacle of military leadership training directly after 12th PCM."
            },
            {
              id: "barch-planning",
              label: "B.Arch & B.Planning (Architecture & Urban Design)",
              subtitle: "Designing Buildings, Landscapes, Sustainable Cities & Towns",
              duration: "5 Years (B.Arch) / 4 Years (B.Plan)",
              category: "science_pcm",
              entranceExams: ["NATA (National Aptitude Test in Architecture)", "JEE Main Paper 2"],
              jobRoles: ["Registered Architect (Council of Architecture)", "Urban / Town Planner", "Interior Architect", "Landscape Consultant"]
            },
            {
              id: "bca-bsc-cs",
              label: "B.C.A. / B.Sc. Computer Science / B.Sc. IT",
              subtitle: "Software Development, Cloud Engineering, Cyber Security",
              duration: "3 Years",
              category: "science_pcm",
              jobRoles: ["Full Stack Developer", "Database Administrator", "Cyber Analyst"],
              children: [
                {
                  id: "mca-postgrad",
                  label: "M.C.A. (Master of Computer Applications)",
                  subtitle: "NIMCET / State CET for Master's in Computer Applications",
                  duration: "2 Years",
                  category: "science_pcm",
                  jobRoles: ["Enterprise Software Architect", "Principal Cloud Engineer"]
                }
              ]
            },
            {
              id: "bsc-pure-science",
              label: "B.Sc. Pure Sciences & Research",
              subtitle: "Physics, Mathematics, Chemistry, Statistics at IISER / NISER / Central Univ.",
              duration: "3 to 4 Years",
              category: "science_pcm",
              entranceExams: ["IAT (IISER Aptitude Test)", "NEST", "CUET-UG"],
              jobRoles: ["Research Fellow", "Data Analyst", "Actuarial Associate"],
              children: [
                {
                  id: "msc-phd-scientist",
                  label: "M.Sc. → Ph.D. → Scientist",
                  subtitle: "CSIR-NET, JEST, GATE for ISRO, DRDO, TIFR, BARC",
                  category: "science_pcm",
                  jobRoles: ["Scientist (ISRO / DRDO / BARC)", "University Professor", "Quantum / Materials Researcher"]
                }
              ]
            },
            {
              id: "merchant-navy-pcm",
              label: "Merchant Navy (B.Sc. Nautical Science / Marine Engg)",
              subtitle: "Navigating international cargo ships & ocean tankers",
              duration: "3 to 4 Years",
              category: "science_pcm",
              entranceExams: ["IMU-CET"],
              jobRoles: ["Deck Officer", "Marine Chief Engineer", "Ship Captain"]
            },
            {
              id: "film-television-ftii",
              label: "Film & Television (FTII / SRFTI)",
              subtitle: "Cinematography, Direction, Audiography, Film Editing, VFX",
              duration: "3 Years",
              category: "science_pcm",
              entranceExams: ["FTII JET (Joint Entrance Test)"],
              jobRoles: ["Director of Photography (DOP)", "Film Editor", "Sound Designer", "OTT Series Director"]
            }
          ]
        },

        // ─────────────────────────────────────────────────────────────────────
        // STREAM 2: 12th SCIENCE (PCB - Physics, Chemistry, Biology)
        // ─────────────────────────────────────────────────────────────────────
        {
          id: "science-pcb",
          label: "12th Science (PCB / BiPC)",
          subtitle: "Medicine, Healthcare, Dental, Veterinary, Pharmacy, Agriculture & Life Sciences",
          category: "science_pcb",
          color: "#059669", // emerald-600
          description: "Biology-centric pathways dedicated to healing, clinical healthcare, pharmaceutical development, and agriculture.",
          children: [
            {
              id: "mbbs-medicine",
              label: "M.B.B.S. (Bachelor of Medicine & Bachelor of Surgery)",
              subtitle: "Modern Clinical Medicine, Surgery & Patient Diagnosis",
              duration: "5.5 Years (4.5 Yrs Study + 1 Yr Internship)",
              category: "science_pcb",
              entranceExams: ["NEET-UG (National Eligibility cum Entrance Test)"],
              jobRoles: ["General Physician", "Medical Officer (Govt / Private Hospital)", "Emergency Care Doctor"],
              children: [
                {
                  id: "md-ms-specialist",
                  label: "M.D. / M.S. (Doctor of Medicine / Master of Surgery)",
                  subtitle: "Cardiology, Neurology, Pediatrics, Orthopedics, Gynecology, General Surgery",
                  duration: "3 Years",
                  entranceExams: ["NEET-PG / INI-CET (AIIMS)"],
                  category: "science_pcb",
                  jobRoles: ["Consultant Specialist", "Surgeon", "Medical Superintendent", "Professor of Medicine"]
                },
                {
                  id: "dm-mch-superspecialist",
                  label: "D.M. / M.Ch. (Super Specialty)",
                  subtitle: "Interventional Cardiologist, Neurosurgeon, Surgical Oncologist",
                  duration: "3 Years",
                  entranceExams: ["NEET-SS"],
                  category: "science_pcb",
                  jobRoles: ["Super Specialist Surgeon", "Head of Department (Multi-speciality Hospital)"]
                }
              ]
            },
            {
              id: "bds-dental",
              label: "B.D.S. (Bachelor of Dental Surgery)",
              subtitle: "Oral Healthcare, Cosmetic Dentistry, Orthodontics",
              duration: "5 Years",
              category: "science_pcb",
              entranceExams: ["NEET-UG"],
              jobRoles: ["Dental Surgeon", "Cosmetic Dentist", "Clinic Owner"],
              children: [
                {
                  id: "mds-postgrad",
                  label: "M.D.S. (Master of Dental Surgery)",
                  subtitle: "Orthodontics, Oral & Maxillofacial Surgery, Periodontics",
                  duration: "3 Years",
                  entranceExams: ["NEET-MDS"],
                  category: "science_pcb",
                  jobRoles: ["Maxillofacial Surgeon", "Orthodontist", "Dental Consultant"]
                }
              ]
            },
            {
              id: "ayush-alternative",
              label: "AYUSH (BAMS, BHMS, BUMS, BNYS)",
              subtitle: "Ayurveda, Homeopathy, Unani, Naturopathy & Yoga Sciences",
              duration: "5.5 Years",
              category: "science_pcb",
              entranceExams: ["NEET-UG"],
              jobRoles: ["Ayurvedic Doctor (BAMS)", "Homeopathic Practitioner (BHMS)", "Wellness & Naturopathy Director"],
              children: [
                {
                  id: "ayush-md",
                  label: "M.D. / M.S. (Ayurveda / Homeopathy)",
                  subtitle: "Panchakarma, Kayachikitsa, Materia Medica Post-Graduation",
                  duration: "3 Years",
                  category: "science_pcb",
                  jobRoles: ["Senior Ayurvedic Consultant", "Ayush Research Officer", "Clinical Director"]
                }
              ]
            },
            {
              id: "bvsc-veterinary",
              label: "B.V.Sc. & A.H. (Veterinary Science)",
              subtitle: "Animal Healthcare, Livestock Welfare & Surgery",
              duration: "5.5 Years",
              category: "science_pcb",
              entranceExams: ["NEET-UG / State Veterinary Entrance"],
              jobRoles: ["Veterinary Doctor", "Veterinary Assistant Surgeon (Govt)", "Dairy/Poultry Health Director"],
              children: [
                {
                  id: "mvsc-postgrad",
                  label: "M.V.Sc. (Master of Veterinary Science)",
                  subtitle: "Veterinary Surgery, Animal Genetics & Pathology",
                  duration: "2 Years",
                  category: "science_pcb",
                  jobRoles: ["Wildlife Veterinarian", "Veterinary Research Scientist"]
                }
              ]
            },
            {
              id: "bpharm-pharmd",
              label: "B.Pharm & Pharm.D (Pharmacy & Clinical Pharmacology)",
              subtitle: "Drug Formulation, Pharmacology & Clinical Therapeutics",
              duration: "4 Years (B.Pharm) / 6 Years (Pharm.D)",
              category: "science_pcb",
              entranceExams: ["State EAPCET / GPAT / NEET-UG"],
              jobRoles: ["Clinical Pharmacist", "Drug Inspector (Govt)", "Formulation Scientist", "Pharma Production Manager"],
              children: [
                {
                  id: "mpharm-research",
                  label: "M.Pharm → Pharma R&D / Drug Regulatory Affairs",
                  subtitle: "Pharmaceutics, Pharmacology, Drug Safety",
                  duration: "2 Years",
                  entranceExams: ["GPAT"],
                  category: "science_pcb",
                  jobRoles: ["Senior Formulation Scientist", "Regulatory Affairs Manager", "Clinical Trials Lead"]
                }
              ]
            },
            {
              id: "bsc-nursing-pcb",
              label: "B.Sc. Nursing",
              subtitle: "Critical Care Nursing, Neonatal, Emergency & Hospital Management",
              duration: "4 Years",
              category: "science_pcb",
              entranceExams: ["AIIMS Nursing / State Nursing CET"],
              jobRoles: ["Nursing Officer (AIIMS / Govt)", "ICU Head Nurse", "International Healthcare Nurse (UK/US/Gulf)"],
              children: [
                {
                  id: "msc-nursing",
                  label: "M.Sc. Nursing & Clinical Supervision",
                  subtitle: "Pediatric, Psychiatric, Community Health Specialization",
                  duration: "2 Years",
                  category: "science_pcb",
                  jobRoles: ["Nursing Superintendent", "Clinical Nurse Specialist", "Nursing College Principal"]
                }
              ]
            },
            {
              id: "paramedical-allied",
              label: "Paramedical & Allied Health Sciences",
              subtitle: "BPT (Physiotherapy), BOT, B.Sc. Radiology, B.Sc. Optometry, Dialysis Tech",
              duration: "3 to 4.5 Years",
              category: "science_pcb",
              jobRoles: ["Physiotherapist (BPT)", "Radiographer / MRI Specialist", "Optometrist", "Dialysis Unit In-Charge"]
            },
            {
              id: "bsc-agriculture-allied",
              label: "B.Sc. (Hons) Agriculture & Horticulture",
              subtitle: "Agronomy, Plant Breeding, Soil Science, Horticulture & Forestry",
              duration: "4 Years",
              category: "science_pcb",
              entranceExams: ["ICAR AIEEA-UG", "State Agri CET / EAPCET"],
              jobRoles: ["Agricultural Officer (AO - Govt)", "Bank Agriculture Field Officer (AFO)", "Seed Technology Specialist"],
              children: [
                {
                  id: "msc-agri",
                  label: "M.Sc. Agriculture / M.Tech Agri Engg",
                  subtitle: "ICAR JRF, Agri-Business Management (ABM)",
                  duration: "2 Years",
                  category: "science_pcb",
                  jobRoles: ["Agri-Business Manager", "ICAR Scientist", "Agri-Biotech Consultant"]
                }
              ]
            },
            {
              id: "bsc-life-sciences",
              label: "B.Sc. Biotechnology, Microbiology & Genetics",
              subtitle: "Vaccine Research, Genetic Engineering & Industrial Microbiology",
              duration: "3 to 4 Years",
              category: "science_pcb",
              jobRoles: ["Quality Control Officer", "Microbiologist", "Biotech Lab Analyst"],
              children: [
                {
                  id: "msc-biotech",
                  label: "M.Sc. / M.Tech Biotechnology → Ph.D.",
                  subtitle: "GAT-B / CSIR-NET for Bio-Pharma R&D",
                  category: "science_pcb",
                  jobRoles: ["Biopharma Scientist", "Genomics Researcher", "Clinical Research Associate"]
                }
              ]
            }
          ]
        },

        // ─────────────────────────────────────────────────────────────────────
        // STREAM 3: 12th COMMERCE (MEC / CEC)
        // ─────────────────────────────────────────────────────────────────────
        {
          id: "commerce-stream",
          label: "12th Commerce (MEC / CEC)",
          subtitle: "Chartered Accountancy, Banking, Corporate Finance, Business Management & Law",
          category: "commerce",
          color: "#7C3AED", // violet-600
          description: "Financial, analytical, and corporate domains steering enterprise economy, wealth management, and commerce.",
          children: [
            {
              id: "chartered-accountancy-ca",
              label: "Chartered Accountancy (C.A. - ICAI)",
              subtitle: "CA Foundation → CA Intermediate → Articleship (2 Yrs) → CA Final",
              duration: "4 to 5 Years",
              category: "commerce",
              entranceExams: ["CA Foundation Exam"],
              jobRoles: ["Practicing Chartered Accountant", "Chief Financial Officer (CFO)", "Statutory Auditor", "Tax Consultant"],
              description: "The gold standard of financial accounting, corporate auditing, and taxation in India."
            },
            {
              id: "company-secretary-cs",
              label: "Company Secretary (C.S. - ICSI)",
              subtitle: "CSEET → CS Executive → Practical Training → CS Professional",
              duration: "3 to 4 Years",
              category: "commerce",
              entranceExams: ["CSEET (ICSI)"],
              jobRoles: ["Company Secretary", "Corporate Governance Officer", "Board Legal Advisor", "Compliance Officer"]
            },
            {
              id: "cma-icwa",
              label: "Cost & Management Accountant (CMA / ICWA)",
              subtitle: "CMA Foundation → Intermediate → Final (ICMAI)",
              duration: "3 to 4 Years",
              category: "commerce",
              entranceExams: ["CMA Foundation"],
              jobRoles: ["Cost Accountant", "Pricing Analyst", "Internal Auditor", "Financial Controller"]
            },
            {
              id: "bcom-degree",
              label: "B.Com (General, Honours, Computers, Banking)",
              subtitle: "Financial Accounting, Corporate Law, Business Economics & Taxation",
              duration: "3 Years",
              category: "commerce",
              jobRoles: ["Accountant", "Tax Preparer", "Financial Analyst", "Audit Associate"],
              children: [
                {
                  id: "bcom-mcom",
                  label: "M.Com (Master of Commerce) & Teaching",
                  subtitle: "Advanced Accounting, Business Statistics → UGC-NET for Lecturer",
                  duration: "2 Years",
                  category: "commerce",
                  jobRoles: ["Assistant Professor in Commerce", "Senior Financial Auditor"]
                },
                {
                  id: "bcom-banking-po",
                  label: "Bank PO & Insurance Development Officer",
                  subtitle: "IBPS PO, SBI PO, RBI Grade B, LIC AAO Exams",
                  category: "commerce",
                  entranceExams: ["IBPS PO", "SBI PO", "RBI Grade B", "LIC AAO"],
                  jobRoles: ["Bank Probationary Officer", "Branch Manager", "Assistant Administrative Officer"]
                },
                {
                  id: "bcom-civil-services",
                  label: "UPSC Civil Services / State PSC (IAS, IRS Officer)",
                  subtitle: "Indian Administrative Service & Indian Revenue Service (Income Tax / Customs)",
                  category: "commerce",
                  entranceExams: ["UPSC CSE", "State PSC Group 1"],
                  jobRoles: ["IAS Officer (District Collector)", "IRS Officer (Commissioner Income Tax/GST)", "Treasury Officer"]
                },
                {
                  id: "bcom-global-certs",
                  label: "Global Finance Certifications (ACCA, CPA, CFA)",
                  subtitle: "ACCA (UK), US CPA, Chartered Financial Analyst (CFA USA)",
                  category: "commerce",
                  jobRoles: ["Global Portfolio Manager", "International Auditor", "Equity Research Analyst"]
                }
              ]
            },
            {
              id: "bba-bms",
              label: "B.B.A. / B.M.S. (Business Administration)",
              subtitle: "Corporate Strategy, Marketing, Human Resources, Finance & Entrepreneurship",
              duration: "3 Years",
              category: "commerce",
              entranceExams: ["IPMAT (IIM Indore/Rohtak 5-yr)", "CUET-UG", "SET"],
              jobRoles: ["Business Development Executive", "Marketing Specialist", "Operations Manager", "Startup Founder"],
              children: [
                {
                  id: "bba-mba",
                  label: "M.B.A. (IIMs & Top Business Schools)",
                  subtitle: "Master of Business Administration via CAT / XAT",
                  duration: "2 Years",
                  entranceExams: ["CAT", "XAT", "SNAP", "NMAT"],
                  category: "commerce",
                  jobRoles: ["Management Consultant (McKinsey, BCG)", "Brand Director", "Investment Banker", "Venture Capitalist"]
                }
              ]
            },
            {
              id: "commerce-law",
              label: "B.Com. LL.B. (5-Year Integrated Corporate Law)",
              subtitle: "Commercial Law, Mergers & Acquisitions, Securities & Insolvency Law",
              duration: "5 Years",
              category: "commerce",
              entranceExams: ["CLAT (Common Law Admission Test)", "LSAT-India"],
              jobRoles: ["Corporate Legal Counsel", "Mergers & Acquisitions Lawyer", "Tax Litigation Advocate"]
            }
          ]
        },

        // ─────────────────────────────────────────────────────────────────────
        // STREAM 4: 12th ARTS & HUMANITIES (HEC)
        // ─────────────────────────────────────────────────────────────────────
        {
          id: "arts-stream",
          label: "12th Arts & Humanities (HEC / Languages)",
          subtitle: "Civil Services, Judiciary & Law, Design, Journalism, Psychology & Teaching",
          category: "arts",
          color: "#BE123C", // rose-700
          description: "Human-centric, governance, creative, and socio-legal domain influencing policy, society, journalism, and arts.",
          children: [
            {
              id: "ba-llb-law",
              label: "B.A. LL.B. (5-Year Integrated Law via CLAT)",
              subtitle: "National Law Universities (NLUs) & Premier Law Colleges",
              duration: "5 Years",
              category: "arts",
              entranceExams: ["CLAT", "AILET (NLU Delhi)", "State LawCET"],
              jobRoles: ["High Court / Supreme Court Advocate", "Corporate Counsel", "Legal Analyst"],
              children: [
                {
                  id: "judiciary-exam",
                  label: "Judicial Services Examination (Judge / Magistrate)",
                  subtitle: "Direct entry into State Judicial Service",
                  category: "arts",
                  entranceExams: ["State Judicial Services Exam (PCS-J)"],
                  jobRoles: ["Civil Judge (Junior Division)", "Metropolitan Magistrate", "District Judge"]
                },
                {
                  id: "llm-postgrad",
                  label: "LL.M. (Master of Laws) & Cyber/IPR Law",
                  subtitle: "Constitutional Law, Intellectual Property, Human Rights",
                  duration: "1 to 2 Years",
                  entranceExams: ["CLAT-PG"],
                  category: "arts",
                  jobRoles: ["Law Professor", "Senior Legal Consultant to Govt & UN"]
                }
              ]
            },
            {
              id: "ba-civil-services",
              label: "B.A. (History, Political Science, Public Admin, Economics)",
              subtitle: "The Most Popular Foundation for India's Premier Civil Services",
              duration: "3 Years",
              category: "arts",
              jobRoles: ["Research Analyst", "Public Policy Assistant"],
              children: [
                {
                  id: "upsc-cse-ias",
                  label: "UPSC Civil Services Exam (IAS, IPS, IFS, IRS)",
                  subtitle: "Indian Administrative Service, Police Service, Foreign Service",
                  category: "arts",
                  entranceExams: ["UPSC CSE (Prelims + Mains + Interview)"],
                  jobRoles: ["District Collector / Magistrate (IAS)", "Superintendent of Police (IPS)", "Ambassador / Diplomat (IFS)"]
                },
                {
                  id: "state-psc-group1",
                  label: "State PSC (Group-1 & Group-2 Services)",
                  subtitle: "Deputy Collector, Commercial Tax Officer, Mandal Revenue Officer",
                  category: "arts",
                  entranceExams: ["APPSC / TSPSC / State PSC Group 1 & 2"],
                  jobRoles: ["Deputy Collector", "DSP (Deputy Superintendent of Police)", "Commercial Tax Officer"]
                },
                {
                  id: "armed-forces-cds",
                  label: "Combined Defence Services (CDS) & Sub-Inspector",
                  subtitle: "IMA, OTA, Air Force Academy via UPSC CDS & SSC CPO",
                  category: "arts",
                  entranceExams: ["UPSC CDS Exam", "SSC CPO (Central Police Sub-Inspector)"],
                  jobRoles: ["Army Officer (Lieutenant)", "Paramilitary Sub-Inspector (BSF, CRPF, CISF, Delhi Police)"]
                }
              ]
            },
            {
              id: "design-nift-nid",
              label: "B.Des (Design: Fashion, Graphic, UI/UX, Interior)",
              subtitle: "NID (National Institute of Design) & NIFT (Fashion Technology)",
              duration: "4 Years",
              category: "arts",
              entranceExams: ["NID DAT", "NIFT Entrance Exam", "UCEED (IIT Bombay)"],
              jobRoles: ["UI/UX Product Designer", "Fashion Designer", "Visual Communication Lead", "Interior Concept Designer"]
            },
            {
              id: "journalism-mass-comm",
              label: "B.J.M.C. / B.A. Journalism & Mass Communication",
              subtitle: "Electronic News, Digital Journalism, Public Relations & Advertising",
              duration: "3 Years",
              category: "arts",
              entranceExams: ["IIMC Entrance", "CUET-UG", "University JMC Tests"],
              jobRoles: ["News Anchor", "Investigative Reporter", "Digital Content Director", "PR & Brand Manager", "Advertising Copywriter"]
            },
            {
              id: "psychology-social-work",
              label: "B.A. Psychology & B.S.W. (Social Work)",
              subtitle: "Clinical Counseling, Organizational Behavior & Community Development",
              duration: "3 Years",
              category: "arts",
              jobRoles: ["Counseling Assistant", "NGO Program Officer", "HR Recruiter"],
              children: [
                {
                  id: "ma-psychology-clinical",
                  label: "M.A. Psychology → M.Phil → Licensed Clinical Psychologist",
                  subtitle: "RCI (Rehabilitation Council of India) Licensed Psychologist",
                  duration: "2 + 2 Years",
                  category: "arts",
                  jobRoles: ["Licensed Clinical Psychologist", "Hospital Child Psychologist", "Mental Health Director"]
                },
                {
                  id: "msw-postgrad",
                  label: "M.S.W. (Master of Social Work) & CSR Leadership",
                  subtitle: "Corporate Social Responsibility (CSR) & International Development",
                  duration: "2 Years",
                  category: "arts",
                  jobRoles: ["CSR Head in Multi-National Corporation", "UN / UNICEF Project Lead", "Social Policy Director"]
                }
              ]
            },
            {
              id: "teaching-bfa-arts",
              label: "B.Ed. Teaching, Fine Arts (BFA) & Foreign Languages",
              subtitle: "School Teaching (Classes 6-10), Fine Arts (NSD), Language Translation",
              duration: "2 to 4 Years",
              category: "arts",
              entranceExams: ["State EdCET", "TET Paper 2", "NSD Auditions"],
              jobRoles: ["TGT / PGT School Teacher", "Actor / Theatre Director (NSD)", "Foreign Language Translator (German/French/Japanese)"]
            }
          ]
        }
      ]
    }
  ]
};

// Category metadata for styling and badges
export const CATEGORY_INFO: Record<string, { label: string; bg: string; text: string; border: string; accent: string }> = {
  root: {
    label: "Education Milestones",
    bg: "bg-stone-900",
    text: "text-[#FAF8F5]",
    border: "border-stone-800",
    accent: "#1C1917"
  },
  ssc: {
    label: "After 10th (S.S.C.)",
    bg: "bg-amber-50",
    text: "text-amber-900",
    border: "border-amber-300",
    accent: "#D97706"
  },
  diploma: {
    label: "Direct Diplomas & Aviation",
    bg: "bg-cyan-50",
    text: "text-cyan-900",
    border: "border-cyan-300",
    accent: "#0284C7"
  },
  science_pcm: {
    label: "12th Science (PCM / Engineering)",
    bg: "bg-sky-50",
    text: "text-sky-900",
    border: "border-sky-300",
    accent: "#0369A1"
  },
  science_pcb: {
    label: "12th Science (PCB / Medical)",
    bg: "bg-emerald-50",
    text: "text-emerald-900",
    border: "border-emerald-300",
    accent: "#059669"
  },
  commerce: {
    label: "12th Commerce (CA / Finance)",
    bg: "bg-purple-50",
    text: "text-purple-900",
    border: "border-purple-300",
    accent: "#7C3AED"
  },
  arts: {
    label: "12th Arts (Civil Services / Law)",
    bg: "bg-rose-50",
    text: "text-rose-900",
    border: "border-rose-300",
    accent: "#BE123C"
  }
};
