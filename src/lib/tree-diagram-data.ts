// Structured Tree Diagram Data for Master Career Guidance
// Comprehensive coverage of all professions: Engineering, Medical, Corporate, Govt, Police, Teaching, Law, Aviation, and Skilled Technical Trades.
// Level 1 Intermediate Streams: MPC (Maths, Physics, Chemistry), BiPC (Biology, Physics, Chemistry), CEC (Commerce, Economics, Civics), HEC (History, Economics, Civics), and After 10th (Polytechnic & ITI).

export interface TreeDiagramNode {
  id: string;
  title: string;
  subtitle?: string;
  level: number; // 0: Root, 1: Stream, 2: Gateway/Entrance, 3: Degree/Course, 4: Specialization/Training, 5: Career Leaf
  category: "pcb" | "pcm" | "commerce" | "arts" | "diploma" | "ssc" | "teaching" | "govt_police" | "root";
  duration?: string;
  exams?: string[];
  salaryTier?: string;
  description?: string;
  isCareerLeaf?: boolean;
  color?: string;
  children?: TreeDiagramNode[];
}

export const MASTER_CAREER_TREE: TreeDiagramNode = {
  "id": "root-education",
  "title": "School Education",
  "subtitle": "Class 10 (S.S.C.) & Class 12 (Intermediate)",
  "level": 0,
  "category": "root",
  "color": "#1E293B",
  "children": [
    {
      "id": "stream-pcm",
      "title": "12th Science (MPC)",
      "subtitle": "Maths, Physics & Chemistry — Engineering, Space & Aviation",
      "level": 1,
      "category": "pcm",
      "duration": "2 Years",
      "color": "#0284C7",
      "description": "Gateway to all engineering disciplines, computer tech, artificial intelligence, chip design, aerospace, defense command, and pure scientific research.",
      "children": [
        {
          "id": "pcm-jee-tech",
          "title": "JEE Main / Advanced & State Engg Entrances",
          "subtitle": "IITs, NITs, BITS & Premier Engineering Colleges",
          "level": 2,
          "category": "pcm",
          "exams": [
            "JEE Advanced",
            "JEE Main",
            "BITSAT",
            "State EAPCET/MHT-CET"
          ],
          "color": "#0369A1",
          "children": [
            {
              "id": "pcm-btech-cse",
              "title": "B.Tech Computer Science & AI (4 Yrs)",
              "subtitle": "Software Engineering, Machine Learning & Cloud",
              "level": 3,
              "category": "pcm",
              "duration": "4 Years",
              "color": "#0284C7",
              "children": [
                {
                  "id": "pcm-ai-arch-path",
                  "title": "System Architecture & AI/ML Labs",
                  "subtitle": "Distributed Cloud Platforms & Neural Networks",
                  "level": 4,
                  "category": "pcm",
                  "color": "#0369A1",
                  "children": [
                    {
                      "id": "career-software-architect",
                      "title": "Software Architect / AI Engineer",
                      "subtitle": "Principal Systems Architect / Tech Lead",
                      "level": 5,
                      "category": "pcm",
                      "isCareerLeaf": true,
                      "salaryTier": "₹20L - ₹80L+ / Year",
                      "description": "Design massive scalable cloud architectures, train large language models, and lead enterprise engineering teams at top global tech firms.",
                      "color": "#075985"
                    }
                  ]
                },
                {
                  "id": "pcm-cyber-path",
                  "title": "Cyber Security & Ethical Hacking",
                  "subtitle": "Certified Information Systems Security Professional (CISSP)",
                  "level": 4,
                  "category": "pcm",
                  "color": "#0369A1",
                  "children": [
                    {
                      "id": "career-cyber-security",
                      "title": "Cyber Security Architect / Ethical Hacker",
                      "subtitle": "Chief Information Security Officer (CISO) Track",
                      "level": 5,
                      "category": "pcm",
                      "isCareerLeaf": true,
                      "salaryTier": "₹18L - ₹60L / Year",
                      "description": "Defend banking infrastructure, critical government servers, and cloud networks against sophisticated cyber warfare and ransom attacks.",
                      "color": "#075985"
                    }
                  ]
                }
              ]
            },
            {
              "id": "pcm-btech-ece",
              "title": "B.Tech Electronics & VLSI (4 Yrs)",
              "subtitle": "Semiconductors, Microchips & Embedded IoT",
              "level": 3,
              "category": "pcm",
              "duration": "4 Years",
              "color": "#0284C7",
              "children": [
                {
                  "id": "pcm-vlsi-path",
                  "title": "M.Tech VLSI / GATE Chip Design",
                  "subtitle": "Silicon Fabrication & ASIC Layout Design",
                  "level": 4,
                  "category": "pcm",
                  "color": "#0369A1",
                  "children": [
                    {
                      "id": "career-chip-designer",
                      "title": "Chip Design Engineer / VLSI Architect",
                      "subtitle": "Semiconductor Hardware Specialist (NVIDIA/Intel)",
                      "level": 5,
                      "category": "pcm",
                      "isCareerLeaf": true,
                      "salaryTier": "₹18L - ₹65L / Year",
                      "description": "Design nanometer microprocessors, 5G RF chipsets, and AI accelerator chips for global semiconductor fabrication giants.",
                      "color": "#075985"
                    }
                  ]
                }
              ]
            },
            {
              "id": "pcm-btech-mechanical",
              "title": "B.Tech Mechanical & Robotics (4 Yrs)",
              "subtitle": "Automotive, Mechatronics & Precision Machinery",
              "level": 3,
              "category": "pcm",
              "duration": "4 Years",
              "color": "#0284C7",
              "children": [
                {
                  "id": "pcm-mech-design-path",
                  "title": "EV Powertrain & Robotics Automation",
                  "subtitle": "Computational Fluid Dynamics & CAE Simulation",
                  "level": 4,
                  "category": "pcm",
                  "color": "#0369A1",
                  "children": [
                    {
                      "id": "career-mechanical-engineer",
                      "title": "Automotive & Robotics Design Engineer",
                      "subtitle": "Chief Vehicle Architect / Industrial Robotics Lead",
                      "level": 5,
                      "category": "pcm",
                      "isCareerLeaf": true,
                      "salaryTier": "₹12L - ₹38L / Year",
                      "description": "Design electric vehicle platforms, autonomous factory robots, aerospace mechanisms, and precision power plants.",
                      "color": "#075985"
                    }
                  ]
                }
              ]
            },
            {
              "id": "pcm-btech-civil",
              "title": "B.Tech Civil & Structural Engg (4 Yrs)",
              "subtitle": "Mega Infrastructure, High-Rise Buildings & Metros",
              "level": 3,
              "category": "pcm",
              "duration": "4 Years",
              "color": "#0284C7",
              "children": [
                {
                  "id": "pcm-civil-ese-path",
                  "title": "UPSC ESE (IES) & Metro Project Planning",
                  "subtitle": "Structural Geotechnical Analysis & High-Speed Rail",
                  "level": 4,
                  "category": "pcm",
                  "color": "#0369A1",
                  "children": [
                    {
                      "id": "career-civil-engineer",
                      "title": "Chief Civil & Structural Project Engineer",
                      "subtitle": "Indian Railways / Metro Rail / Highway Authority Lead",
                      "level": 5,
                      "category": "pcm",
                      "isCareerLeaf": true,
                      "salaryTier": "₹14L - ₹35L / Year + Perks",
                      "description": "Direct massive sea-link bridges, underground metro tunnels, expressway corridors, and high-rise commercial smart towers.",
                      "color": "#075985"
                    }
                  ]
                }
              ]
            },
            {
              "id": "pcm-btech-electrical",
              "title": "B.Tech Electrical & Power Systems (4 Yrs)",
              "subtitle": "Power Grids, Renewable Solar/Wind & High Voltage",
              "level": 3,
              "category": "pcm",
              "duration": "4 Years",
              "color": "#0284C7",
              "children": [
                {
                  "id": "pcm-power-grid-path",
                  "title": "PowerGrid (PGCIL) / NTPC Executive Trainee",
                  "subtitle": "Renewable Energy Grid & Substation Automation",
                  "level": 4,
                  "category": "pcm",
                  "color": "#0369A1",
                  "children": [
                    {
                      "id": "career-electrical-engineer",
                      "title": "Power Grid & Renewable Energy Engineer",
                      "subtitle": "Executive Engineer (PowerGrid / Tata Power)",
                      "level": 5,
                      "category": "pcm",
                      "isCareerLeaf": true,
                      "salaryTier": "₹12L - ₹30L / Year",
                      "description": "Oversee national electrical grids, multi-gigawatt solar parks, high-voltage transformers, and renewable transmission networks.",
                      "color": "#075985"
                    }
                  ]
                }
              ]
            },
            {
              "id": "pcm-btech-chemical",
              "title": "B.Tech Chemical & Petrochemical (4 Yrs)",
              "subtitle": "Refineries, Polymers & Process Engineering",
              "level": 3,
              "category": "pcm",
              "duration": "4 Years",
              "color": "#0284C7",
              "children": [
                {
                  "id": "pcm-psu-gate-chemical",
                  "title": "ONGC / IOCL / Reliance Refining Trainee",
                  "subtitle": "Catalytic Processing & Plant Safety Engineering",
                  "level": 4,
                  "category": "pcm",
                  "color": "#0369A1",
                  "children": [
                    {
                      "id": "career-chemical-engineer",
                      "title": "Refinery / Petrochemical Process Engineer",
                      "subtitle": "Chief Plant Operations Controller (ONGC / IOCL)",
                      "level": 5,
                      "category": "pcm",
                      "isCareerLeaf": true,
                      "salaryTier": "₹14L - ₹36L / Year",
                      "description": "Control massive crude oil refineries, petrochemical synthesis reactors, hydrogen fuel plants, and green chemistry complexes.",
                      "color": "#075985"
                    }
                  ]
                }
              ]
            },
            {
              "id": "pcm-btech-aerospace",
              "title": "B.Tech Aerospace & Aeronautical (4 Yrs)",
              "subtitle": "Aerodynamics, Satellite Launchers & Gas Turbines",
              "level": 3,
              "category": "pcm",
              "duration": "4 Years",
              "color": "#0284C7",
              "children": [
                {
                  "id": "pcm-aero-propulsion-path",
                  "title": "Rocket Propulsion & Flight Dynamics R&D",
                  "subtitle": "Aviation Certification & Defence Aircraft Programs",
                  "level": 4,
                  "category": "pcm",
                  "color": "#0369A1",
                  "children": [
                    {
                      "id": "career-aerospace-engineer",
                      "title": "Aerospace / Aircraft Propulsion Engineer",
                      "subtitle": "HAL / ISRO / Airbus Aircraft System Designer",
                      "level": 5,
                      "category": "pcm",
                      "isCareerLeaf": true,
                      "salaryTier": "₹16L - ₹45L / Year",
                      "description": "Design supersonic fighter jet aerodynamics, satellite rocket thrusters, space launch vehicles, and civil airliner components.",
                      "color": "#075985"
                    }
                  ]
                }
              ]
            },
            {
              "id": "pcm-barch",
              "title": "B.Arch (Bachelor of Architecture 5 Yrs)",
              "subtitle": "Urban Master Planning via NATA / JEE Paper 2",
              "level": 3,
              "category": "pcm",
              "duration": "5 Years",
              "color": "#0284C7",
              "children": [
                {
                  "id": "pcm-coa-council-path",
                  "title": "Council of Architecture (COA) Registration",
                  "subtitle": "Sustainable Habitat & Smart City Infrastructure",
                  "level": 4,
                  "category": "pcm",
                  "color": "#0369A1",
                  "children": [
                    {
                      "id": "career-licensed-architect",
                      "title": "Licensed Architect / Urban Master Planner",
                      "subtitle": "Principal Architectural Consultant & Studio Lead",
                      "level": 5,
                      "category": "pcm",
                      "isCareerLeaf": true,
                      "salaryTier": "₹12L - ₹42L / Year",
                      "description": "Design iconic public landmarks, ecological airport terminals, luxury residential towers, and civic master plans.",
                      "color": "#075985"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "id": "pcm-space-marine-path",
          "title": "Pure Science, Space & Marine Entrances",
          "subtitle": "IISER / NISER IAT, IMU-CET & Space Cadres",
          "level": 2,
          "category": "pcm",
          "exams": [
            "IAT (IISER/IISc)",
            "IMU-CET",
            "NEST"
          ],
          "color": "#0369A1",
          "children": [
            {
              "id": "pcm-iiser-bsms",
              "title": "BS-MS Dual Degree (IISER / IISc 5 Yrs)",
              "subtitle": "Astrophysics, Quantum Mechanics & Theoretical Physics",
              "level": 3,
              "category": "pcm",
              "duration": "5 Years",
              "color": "#0284C7",
              "children": [
                {
                  "id": "pcm-isro-scientist-exam",
                  "title": "ISRO ICRB / DRDO RAC / BARC OCES Exam",
                  "subtitle": "Scientist / Engineer 'SC' Induction",
                  "level": 4,
                  "category": "pcm",
                  "color": "#0369A1",
                  "children": [
                    {
                      "id": "career-space-scientist",
                      "title": "Space / Nuclear Research Scientist",
                      "subtitle": "Scientist 'SC' / 'SD' (ISRO / DRDO / BARC)",
                      "level": 5,
                      "category": "pcm",
                      "isCareerLeaf": true,
                      "salaryTier": "₹14L - ₹32L / Year + Govt Honors",
                      "description": "Lead interplanetary missions, quantum radar defence, nuclear reactor physics, and satellite constellation tracking.",
                      "color": "#075985"
                    }
                  ]
                }
              ]
            },
            {
              "id": "pcm-marine-nautical",
              "title": "B.Sc Nautical Science / Marine Engg (3-4 Yrs)",
              "subtitle": "IMU Certified Cadets with Sea Navigation Drills",
              "level": 3,
              "category": "pcm",
              "duration": "3 to 4 Years",
              "color": "#0284C7",
              "children": [
                {
                  "id": "pcm-master-mariner-coc",
                  "title": "DG Shipping Master Mariner License (COC)",
                  "subtitle": "Global Ocean Sea Time & Deck Command Exam",
                  "level": 4,
                  "category": "pcm",
                  "color": "#0369A1",
                  "children": [
                    {
                      "id": "career-merchant-navy-captain",
                      "title": "Merchant Navy Captain / Chief Marine Engineer",
                      "subtitle": "Commander of Ultra-Large Cargo & LNG Tankers",
                      "level": 5,
                      "category": "pcm",
                      "isCareerLeaf": true,
                      "salaryTier": "₹25L - ₹90L+ / Year (Tax-Free)",
                      "description": "Command massive international commercial ships across global oceans with complete operational and navigational authority.",
                      "color": "#075985"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "id": "diploma-aviation-entrance",
          "title": "DGCA Flight Training & Airline Cadet Programs",
          "subtitle": "IndiGo / Air India / IGRUA Pilot Academy",
          "level": 2,
          "category": "diploma",
          "exams": [
            "DGCA Exams",
            "IGRUA Entrance",
            "Airline Cadet Selection"
          ],
          "color": "#0E7490",
          "children": [
            {
              "id": "diploma-cpl-flight",
              "title": "Commercial Pilot License (CPL)",
              "subtitle": "200 Flying Hours + Multi-Engine Instrument Rating",
              "level": 3,
              "category": "diploma",
              "duration": "18 to 24 Months",
              "color": "#0891B2",
              "children": [
                {
                  "id": "diploma-type-rating",
                  "title": "Airbus A320 / Boeing 777 Type Rating",
                  "subtitle": "Airline Line-Oriented Flight Operations (LOFT)",
                  "level": 4,
                  "category": "diploma",
                  "color": "#0E7490",
                  "children": [
                    {
                      "id": "career-commercial-pilot",
                      "title": "Commercial Airline Pilot (Captain)",
                      "subtitle": "Commander of Passenger Jet Aircraft",
                      "level": 5,
                      "category": "diploma",
                      "isCareerLeaf": true,
                      "salaryTier": "₹24L - ₹85L+ / Year",
                      "description": "Command long-haul passenger jet airliners, oversee cockpit safety, navigate international airspace, and fly worldwide.",
                      "color": "#155E75"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "stream-pcb",
      "title": "12th Science (BiPC)",
      "subtitle": "Biology, Physics & Chemistry — Medical, Pharma & Agriculture",
      "level": 1,
      "category": "pcb",
      "duration": "2 Years",
      "color": "#059669",
      "description": "Primary pathway to clinical medicine, surgery, dental surgery, pharmacy, veterinary care, physiotherapy, and agricultural science.",
      "children": [
        {
          "id": "pcb-neet-ug-all",
          "title": "NEET-UG National Medical Entrance",
          "subtitle": "Admissions to Medical, Dental & AYUSH Colleges",
          "level": 2,
          "category": "pcb",
          "exams": [
            "NEET-UG"
          ],
          "color": "#047857",
          "children": [
            {
              "id": "pcb-mbbs-degree",
              "title": "M.B.B.S. (Bachelor of Medicine 5.5 Yrs)",
              "subtitle": "4.5 Yrs Classroom + 1 Yr Rotatory Clinical Internship",
              "level": 3,
              "category": "pcb",
              "duration": "5.5 Years",
              "color": "#059669",
              "children": [
                {
                  "id": "pcb-neet-pg-residency",
                  "title": "NEET-PG / INI-CET (MD / MS 3 Yrs)",
                  "subtitle": "Cardiology, Neurology, Ortho, Gynecology, Pediatrics",
                  "level": 4,
                  "category": "pcb",
                  "color": "#047857",
                  "children": [
                    {
                      "id": "career-doctor-surgeon",
                      "title": "Doctor / Specialist Surgeon",
                      "subtitle": "Super-Specialist Consultant (DM / MCh / MD)",
                      "level": 5,
                      "category": "pcb",
                      "isCareerLeaf": true,
                      "salaryTier": "₹18L - ₹65L+ / Year",
                      "description": "Perform delicate surgeries, diagnose complex illnesses, save patient lives, and lead clinical departments in major hospitals.",
                      "color": "#065F46"
                    }
                  ]
                },
                {
                  "id": "pcb-upsc-cms-path",
                  "title": "UPSC Combined Medical Services (CMS)",
                  "subtitle": "Central Health Cadres & Railway Hospitals",
                  "level": 4,
                  "category": "pcb",
                  "color": "#047857",
                  "children": [
                    {
                      "id": "career-govt-doctor",
                      "title": "Govt Medical Officer (Civil Surgeon)",
                      "subtitle": "Class-1 Gazetted Medical Superintendent",
                      "level": 5,
                      "category": "pcb",
                      "isCareerLeaf": true,
                      "salaryTier": "₹14L - ₹28L / Year + Govt Perks",
                      "description": "Chief medical authority in government district civil hospitals, Indian Railways health services, or defense civilian clinics.",
                      "color": "#065F46"
                    }
                  ]
                }
              ]
            },
            {
              "id": "pcb-bds-degree",
              "title": "B.D.S. (Bachelor of Dental Surgery 5 Yrs)",
              "subtitle": "Oral Pathology, Maxillofacial Surgery & Orthodontics",
              "level": 3,
              "category": "pcb",
              "duration": "5 Years",
              "color": "#059669",
              "children": [
                {
                  "id": "pcb-mds-specialty",
                  "title": "M.D.S. (Master of Dental Surgery 3 Yrs)",
                  "subtitle": "Implantology, Braces Alignment & Cosmetic Dentistry",
                  "level": 4,
                  "category": "pcb",
                  "color": "#047857",
                  "children": [
                    {
                      "id": "career-dentist-orthodontist",
                      "title": "Dentist / Orthodontist Specialist",
                      "subtitle": "Maxillofacial Dental Surgeon & Clinic Owner",
                      "level": 5,
                      "category": "pcb",
                      "isCareerLeaf": true,
                      "salaryTier": "₹10L - ₹35L / Year",
                      "description": "Correct facial alignment with braces, perform dental root canals, oral implants, and operate independent dental clinics.",
                      "color": "#065F46"
                    }
                  ]
                }
              ]
            },
            {
              "id": "pcb-ayush-degree",
              "title": "B.A.M.S. / B.H.M.S. (AYUSH 5.5 Yrs)",
              "subtitle": "Ayurvedic & Homeopathic Clinical Systems",
              "level": 3,
              "category": "pcb",
              "duration": "5.5 Years",
              "color": "#059669",
              "children": [
                {
                  "id": "pcb-ayush-md-path",
                  "title": "MD Ayurveda & Panchakarma Specialization",
                  "subtitle": "Herbal Pharmacology & Holistic Healthcare",
                  "level": 4,
                  "category": "pcb",
                  "color": "#047857",
                  "children": [
                    {
                      "id": "career-ayush-doctor",
                      "title": "Ayurvedic Doctor / Wellness Director",
                      "subtitle": "AYUSH Medical Officer & Luxury Resort Physician",
                      "level": 5,
                      "category": "pcb",
                      "isCareerLeaf": true,
                      "salaryTier": "₹8L - ₹24L / Year",
                      "description": "Prescribe natural therapies, run wellness retreats, practice in government AYUSH dispensaries, and formulate herbal medicines.",
                      "color": "#065F46"
                    }
                  ]
                }
              ]
            },
            {
              "id": "pcb-bvsc-degree",
              "title": "B.V.Sc & A.H. (Veterinary Science 5.5 Yrs)",
              "subtitle": "Animal Surgery, Pathology & Wildlife Care",
              "level": 3,
              "category": "pcb",
              "duration": "5.5 Years",
              "color": "#059669",
              "children": [
                {
                  "id": "pcb-vet-pg-path",
                  "title": "M.V.Sc & State Veterinary Cadres",
                  "subtitle": "Wildlife Medicine & Livestock Breeding Centers",
                  "level": 4,
                  "category": "pcb",
                  "color": "#047857",
                  "children": [
                    {
                      "id": "career-veterinary-doctor",
                      "title": "Veterinary Doctor / Wildlife Surgeon",
                      "subtitle": "Animal Hospital Director & Livestock Officer",
                      "level": 5,
                      "category": "pcb",
                      "isCareerLeaf": true,
                      "salaryTier": "₹8L - ₹24L / Year",
                      "description": "Treat domestic pets, livestock in rural clinics, manage wildlife in national reserves, and direct animal breeding facilities.",
                      "color": "#065F46"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "id": "pcb-nursing-paramedical",
          "title": "Allied Healthcare, Nursing & Pharmacy",
          "subtitle": "AIIMS NORCET, GPAT & Paramedical Entrances",
          "level": 2,
          "category": "pcb",
          "exams": [
            "AIIMS NORCET",
            "GPAT",
            "Paramedical CET"
          ],
          "color": "#047857",
          "children": [
            {
              "id": "pcb-bsc-nursing",
              "title": "B.Sc Nursing (4 Yrs)",
              "subtitle": "Comprehensive Clinical Patient Care & Pharmacology",
              "level": 3,
              "category": "pcb",
              "duration": "4 Years",
              "color": "#059669",
              "children": [
                {
                  "id": "pcb-nclex-path",
                  "title": "AIIMS NORCET / NCLEX-RN (USA/UK)",
                  "subtitle": "Emergency Room & Cardiac ICU Critical Care",
                  "level": 4,
                  "category": "pcb",
                  "color": "#047857",
                  "children": [
                    {
                      "id": "career-nursing-officer",
                      "title": "Nursing Officer / Hospital Matron",
                      "subtitle": "AIIMS Nursing Superintendent / Global Registered Nurse",
                      "level": 5,
                      "category": "pcb",
                      "isCareerLeaf": true,
                      "salaryTier": "₹9L - ₹35L / Year (Global)",
                      "description": "Coordinate life-critical patient treatments, manage operating theater staff, and lead clinical emergency divisions worldwide.",
                      "color": "#065F46"
                    }
                  ]
                }
              ]
            },
            {
              "id": "pcb-bpharm-degree",
              "title": "B.Pharm / Pharm.D (4 to 6 Yrs)",
              "subtitle": "Medicinal Chemistry, Pharmacology & Formulations",
              "level": 3,
              "category": "pcb",
              "duration": "4 to 6 Years",
              "color": "#059669",
              "children": [
                {
                  "id": "pcb-drug-inspector-exam",
                  "title": "State Public Service Commission Drug Inspector Exam",
                  "subtitle": "Regulatory Quality Standards & Clinical Trials",
                  "level": 4,
                  "category": "pcb",
                  "color": "#047857",
                  "children": [
                    {
                      "id": "career-drug-inspector",
                      "title": "Drug Inspector / Pharma Scientist",
                      "subtitle": "State Drug Quality Controller / Senior R&D Chemist",
                      "level": 5,
                      "category": "pcb",
                      "isCareerLeaf": true,
                      "salaryTier": "₹10L - ₹28L / Year",
                      "description": "Inspect manufacturing plants for safety compliance, enforce drug quality laws, and invent new pharmaceutical formulations.",
                      "color": "#065F46"
                    }
                  ]
                }
              ]
            },
            {
              "id": "pcb-bpt-physio",
              "title": "B.P.T. (Bachelor of Physiotherapy 4.5 Yrs)",
              "subtitle": "Musculoskeletal Rehab, Sports Medicine & Biomechanics",
              "level": 3,
              "category": "pcb",
              "duration": "4.5 Years",
              "color": "#059669",
              "children": [
                {
                  "id": "pcb-mpt-sports",
                  "title": "M.P.T. (Master in Sports Physiotherapy)",
                  "subtitle": "Athletic Conditioning & Orthopedic Rehabilitation",
                  "level": 4,
                  "category": "pcb",
                  "color": "#047857",
                  "children": [
                    {
                      "id": "career-physiotherapist",
                      "title": "Sports Physiotherapist / Rehab Specialist",
                      "subtitle": "National Sports Teams Physiotherapist / Clinic Head",
                      "level": 5,
                      "category": "pcb",
                      "isCareerLeaf": true,
                      "salaryTier": "₹7L - ₹26L / Year",
                      "description": "Rehabilitate national Olympic athletes, treat joint/spine injuries, and restore physical mobility in patients.",
                      "color": "#065F46"
                    }
                  ]
                }
              ]
            },
            {
              "id": "pcb-agri-icar",
              "title": "B.Sc (Hons) Agriculture (ICAR 4 Yrs)",
              "subtitle": "Agronomy, Soil Chemistry & Crop Biotechnology",
              "level": 3,
              "category": "pcb",
              "duration": "4 Years",
              "color": "#059669",
              "children": [
                {
                  "id": "pcb-ibps-afo-exam",
                  "title": "IBPS Agricultural Field Officer (AFO) Exam",
                  "subtitle": "Priority Sector Lending & Crop Science Schemes",
                  "level": 4,
                  "category": "pcb",
                  "color": "#047857",
                  "children": [
                    {
                      "id": "career-agri-officer",
                      "title": "Agricultural Field Officer (AFO)",
                      "subtitle": "Public Sector Bank AFO / District Agriculture Officer",
                      "level": 5,
                      "category": "pcb",
                      "isCareerLeaf": true,
                      "salaryTier": "₹9L - ₹18L / Year",
                      "description": "Manage agricultural credit, inspect farming projects, guide farmers on modern tech, and administer govt subsidy schemes.",
                      "color": "#065F46"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "stream-commerce",
      "title": "12th Commerce (CEC / MEC)",
      "subtitle": "Commerce, Economics & Civics — CA, Banking & Corporate Leadership",
      "level": 1,
      "category": "commerce",
      "duration": "2 Years",
      "color": "#7C3AED",
      "description": "Gateway to chartered professional accounting, investment banking, stock trading, banking leadership, and Fortune 500 corporate executive roles.",
      "children": [
        {
          "id": "commerce-ca-cma-cs",
          "title": "Chartered Professional Accounting Boards",
          "subtitle": "ICAI, ICSI & ICMAI Statutory Accounting",
          "level": 2,
          "category": "commerce",
          "exams": [
            "CA Foundation",
            "CS EET",
            "CMA Foundation"
          ],
          "color": "#6D28D9",
          "children": [
            {
              "id": "commerce-ca-path",
              "title": "CA Intermediate & 2-Yr Articleship",
              "subtitle": "Auditing, Direct/Indirect Taxation & Company Law",
              "level": 3,
              "category": "commerce",
              "duration": "3 Years",
              "color": "#7C3AED",
              "children": [
                {
                  "id": "commerce-ca-final",
                  "title": "CA Final Exam & ICAI Membership",
                  "subtitle": "Advanced Financial Reporting & Forensic Audit",
                  "level": 4,
                  "category": "commerce",
                  "color": "#6D28D9",
                  "children": [
                    {
                      "id": "career-chartered-accountant",
                      "title": "Chartered Accountant (CA) / Audit Partner",
                      "subtitle": "Statutory Auditor & Chief Financial Officer (CFO)",
                      "level": 5,
                      "category": "commerce",
                      "isCareerLeaf": true,
                      "salaryTier": "₹15L - ₹60L+ / Year",
                      "description": "Audit balance sheets of listed corporations, structure international tax treaties, and manage enterprise finances.",
                      "color": "#5B21B6"
                    }
                  ]
                }
              ]
            },
            {
              "id": "commerce-cs-path",
              "title": "Company Secretary (CS Professional)",
              "subtitle": "SEBI Compliance, Capital Markets & Boardroom Law",
              "level": 3,
              "category": "commerce",
              "duration": "3 Years",
              "color": "#7C3AED",
              "children": [
                {
                  "id": "commerce-cs-board-liaison",
                  "title": "ICSI Corporate Governance Membership",
                  "subtitle": "Mergers, Acquisitions & Stock Exchange Listings",
                  "level": 4,
                  "category": "commerce",
                  "color": "#6D28D9",
                  "children": [
                    {
                      "id": "career-company-secretary",
                      "title": "Company Secretary (Chief Governance Officer)",
                      "subtitle": "Head of Legal & Board Compliance",
                      "level": 5,
                      "category": "commerce",
                      "isCareerLeaf": true,
                      "salaryTier": "₹12L - ₹40L / Year",
                      "description": "Advise boards of directors on regulatory laws, oversee AGM proceedings, and ensure zero SEBI violations.",
                      "color": "#5B21B6"
                    }
                  ]
                }
              ]
            },
            {
              "id": "commerce-cma-path",
              "title": "Cost & Management Accounting (CMA)",
              "subtitle": "Industrial Cost Optimization & Tariff Structuring",
              "level": 3,
              "category": "commerce",
              "duration": "3 Years",
              "color": "#7C3AED",
              "children": [
                {
                  "id": "commerce-cma-cert",
                  "title": "ICMAI Cost Audit Certification",
                  "subtitle": "Supply Chain Costing & Pricing Strategy",
                  "level": 4,
                  "category": "commerce",
                  "color": "#6D28D9",
                  "children": [
                    {
                      "id": "career-cost-accountant",
                      "title": "Cost & Management Accountant (CMA)",
                      "subtitle": "Vice President - Industrial Cost & Pricing",
                      "level": 5,
                      "category": "commerce",
                      "isCareerLeaf": true,
                      "salaryTier": "₹12L - ₹38L / Year",
                      "description": "Audit manufacturing overheads, optimize factory logistics costs, and set statutory market pricing structures.",
                      "color": "#5B21B6"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "id": "commerce-banking-management",
          "title": "Banking, Investment & MBA Business Schools",
          "subtitle": "CAT, IPMAT, IBPS PO & SBI PO Examinations",
          "level": 2,
          "category": "commerce",
          "exams": [
            "CAT / XAT",
            "IPMAT",
            "IBPS PO",
            "SBI PO",
            "RBI Grade B"
          ],
          "color": "#6D28D9",
          "children": [
            {
              "id": "commerce-bcom-degree",
              "title": "B.Com / BAF / BBI (3 to 4 Yrs)",
              "subtitle": "Commercial Banking & Financial Markets",
              "level": 3,
              "category": "commerce",
              "duration": "3 to 4 Years",
              "color": "#7C3AED",
              "children": [
                {
                  "id": "commerce-bank-po-path",
                  "title": "IBPS PO / SBI PO / RBI Grade B Exam",
                  "subtitle": "Credit Analysis & Treasury Operations",
                  "level": 4,
                  "category": "commerce",
                  "color": "#6D28D9",
                  "children": [
                    {
                      "id": "career-bank-manager",
                      "title": "Bank Branch Manager / RBI Officer",
                      "subtitle": "SBI Chief Manager / RBI Grade B Officer",
                      "level": 5,
                      "category": "commerce",
                      "isCareerLeaf": true,
                      "salaryTier": "₹10L - ₹24L / Year + Banking Perks",
                      "description": "Authorize corporate loans, supervise bank branches, oversee currency reserves, and guide monetary stability.",
                      "color": "#5B21B6"
                    }
                  ]
                },
                {
                  "id": "commerce-investment-path",
                  "title": "CFA Institute / Global Equity Research",
                  "subtitle": "Derivatives, Private Equity & Portfolio Structuring",
                  "level": 4,
                  "category": "commerce",
                  "color": "#6D28D9",
                  "children": [
                    {
                      "id": "career-investment-banker",
                      "title": "Investment Banker / Hedge Fund Manager",
                      "subtitle": "Mergers & Acquisitions Director / Fund Lead",
                      "level": 5,
                      "category": "commerce",
                      "isCareerLeaf": true,
                      "salaryTier": "₹18L - ₹75L+ / Year",
                      "description": "Advise on multi-billion dollar IPOs, manage sovereign wealth funds, and execute high-profile mergers.",
                      "color": "#5B21B6"
                    }
                  ]
                }
              ]
            },
            {
              "id": "commerce-bba-mba-track",
              "title": "BBA / 5-Yr IPM & Premier IIM MBA",
              "subtitle": "Corporate Strategy, Marketing & Leadership",
              "level": 3,
              "category": "commerce",
              "duration": "3 to 5 Years",
              "color": "#7C3AED",
              "children": [
                {
                  "id": "commerce-consulting-leadership",
                  "title": "Management Consulting & Corporate Headship",
                  "subtitle": "Business Turnarounds & Global Enterprise Scaling",
                  "level": 4,
                  "category": "commerce",
                  "color": "#6D28D9",
                  "children": [
                    {
                      "id": "career-management-consultant",
                      "title": "Management Consultant / Strategy Director",
                      "subtitle": "Partner at McKinsey/BCG / Corporate VP",
                      "level": 5,
                      "category": "commerce",
                      "isCareerLeaf": true,
                      "salaryTier": "₹22L - ₹80L / Year",
                      "description": "Consult global CEOs on market capture, product launches, operational transformations, and digital scaling.",
                      "color": "#5B21B6"
                    },
                    {
                      "id": "career-corporate-hr-lead",
                      "title": "Chief Human Resources Officer (CHRO)",
                      "subtitle": "Head of People & Global Talent Strategy",
                      "level": 5,
                      "category": "commerce",
                      "isCareerLeaf": true,
                      "salaryTier": "₹16L - ₹50L / Year",
                      "description": "Direct talent recruitment, executive leadership development, labor law compliance, and corporate culture.",
                      "color": "#5B21B6"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "id": "diploma-hotel-mgmt",
          "title": "NCHMCT JEE & Hospitality Leadership",
          "subtitle": "Institutes of Hotel Management (IHM)",
          "level": 2,
          "category": "diploma",
          "exams": [
            "NCHMCT JEE"
          ],
          "color": "#0E7490",
          "children": [
            {
              "id": "diploma-bhm-degree",
              "title": "BHM (Bachelor of Hotel Management 3 Yrs)",
              "subtitle": "Culinary Arts, Executive Front Office & F&B Services",
              "level": 3,
              "category": "diploma",
              "duration": "3 Years",
              "color": "#0891B2",
              "children": [
                {
                  "id": "diploma-ihm-management",
                  "title": "Luxury Hotel Operations Trainee (Taj/Oberoi)",
                  "subtitle": "Resort Asset Management & International Gastronomy",
                  "level": 4,
                  "category": "diploma",
                  "color": "#0E7490",
                  "children": [
                    {
                      "id": "career-hotel-general-manager",
                      "title": "5-Star Hotel General Manager",
                      "subtitle": "Luxury Resort Director & International Hospitality Head",
                      "level": 5,
                      "category": "diploma",
                      "isCareerLeaf": true,
                      "salaryTier": "₹14L - ₹42L / Year",
                      "description": "Direct luxury five-star resorts, host international heads of state, curate world-class dining, and oversee hospitality empires.",
                      "color": "#155E75"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "stream-arts",
      "title": "12th Arts (HEC / Humanities)",
      "subtitle": "History, Economics & Civics — Civil Services, Police, Law & Teaching",
      "level": 1,
      "category": "arts",
      "duration": "2 Years",
      "color": "#9333EA",
      "description": "Gateway to the judicial branch, constitutional advocacy, investigative journalism, digital media, and premier design houses.",
      "children": [
        {
          "id": "govt-upsc-cse-gateway",
          "title": "UPSC Civil Services Examination (CSE)",
          "subtitle": "Prelims, Mains & Union Personality Interview",
          "level": 2,
          "category": "govt_police",
          "exams": [
            "UPSC CSE (IAS/IPS)"
          ],
          "color": "#9F1239",
          "children": [
            {
              "id": "govt-ias-track",
              "title": "LBSNAA Mussoorie Officer Foundation",
              "subtitle": "Public Administration, District Revenue & Land Laws",
              "level": 3,
              "category": "govt_police",
              "duration": "2 Years Training",
              "color": "#BE123C",
              "children": [
                {
                  "id": "govt-district-admin-path",
                  "title": "Sub-Divisional Magistrate (SDM) Probation",
                  "subtitle": "Executive Magisterial & Development Authority",
                  "level": 4,
                  "category": "govt_police",
                  "color": "#9F1239",
                  "children": [
                    {
                      "id": "career-ias-officer",
                      "title": "IAS Officer (District Collector / DM)",
                      "subtitle": "District Magistrate / Ministry Joint Secretary",
                      "level": 5,
                      "category": "govt_police",
                      "isCareerLeaf": true,
                      "salaryTier": "₹14L - ₹28L / Year + Official Residence & Security",
                      "description": "Exercise supreme executive authority over entire districts, enforce law & order, direct multi-crore public projects, and shape policy.",
                      "color": "#881337"
                    }
                  ]
                }
              ]
            },
            {
              "id": "govt-ips-track",
              "title": "SVP National Police Academy (Hyderabad)",
              "subtitle": "Crime Investigation, Forensic Tech, Riot Control & Counter-Terror",
              "level": 3,
              "category": "govt_police",
              "duration": "2 Years Training",
              "color": "#BE123C",
              "children": [
                {
                  "id": "govt-police-command-path",
                  "title": "ASP / City DCP Police Command",
                  "subtitle": "District Armed Police & Crime Branch In-Charge",
                  "level": 4,
                  "category": "govt_police",
                  "color": "#9F1239",
                  "children": [
                    {
                      "id": "career-ips-officer",
                      "title": "IPS Officer (Superintendent of Police - SP)",
                      "subtitle": "District Police Chief / Commissioner of Police",
                      "level": 5,
                      "category": "govt_police",
                      "isCareerLeaf": true,
                      "salaryTier": "₹14L - ₹28L / Year + Uniform Honors & State Escort",
                      "description": "Command thousands of district police personnel, crush organized crime syndicates, and guarantee citizen safety across urban and rural zones.",
                      "color": "#881337"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "id": "govt-state-psc-gateway",
          "title": "State PSC Group-1 & Police SI Entrances",
          "subtitle": "State Public Service Commissions & Police Boards",
          "level": 2,
          "category": "govt_police",
          "exams": [
            "State PSC Group 1",
            "State Police SI Exam",
            "SSC CPO"
          ],
          "color": "#9F1239",
          "children": [
            {
              "id": "govt-state-group1-degree",
              "title": "Any Bachelor's Degree (B.A./B.Sc/B.Tech)",
              "subtitle": "Eligibility for State Gazetted Competitive Exams",
              "level": 3,
              "category": "govt_police",
              "duration": "3 to 4 Years",
              "color": "#BE123C",
              "children": [
                {
                  "id": "govt-dsp-tehsildar-exam",
                  "title": "State PSC Group 1 Mains & Interview",
                  "subtitle": "State Civil Services & Police Cadres",
                  "level": 4,
                  "category": "govt_police",
                  "color": "#9F1239",
                  "children": [
                    {
                      "id": "career-dsp-police",
                      "title": "Deputy Superintendent of Police (DSP)",
                      "subtitle": "Sub-Divisional Police Officer (SDPO)",
                      "level": 5,
                      "category": "govt_police",
                      "isCareerLeaf": true,
                      "salaryTier": "₹10L - ₹22L / Year + Official Vehicle",
                      "description": "Command police sub-divisions, supervise police stations, investigate murder/economic crimes, and maintain public order.",
                      "color": "#881337"
                    }
                  ]
                },
                {
                  "id": "govt-police-si-exam",
                  "title": "State Police SI / SSC CPO Physical & Written",
                  "subtitle": "State Police Training College (PTC)",
                  "level": 4,
                  "category": "govt_police",
                  "color": "#9F1239",
                  "children": [
                    {
                      "id": "career-police-sub-inspector",
                      "title": "Sub-Inspector of Police (SI / SHO)",
                      "subtitle": "Station House Officer / Crime Branch Lead",
                      "level": 5,
                      "category": "govt_police",
                      "isCareerLeaf": true,
                      "salaryTier": "₹8L - ₹18L / Year + Uniform Allowances",
                      "description": "Head local police stations (SHO), register FIRs, lead armed patrols, conduct crime scene investigations, and submit court chargesheets.",
                      "color": "#881337"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "id": "govt-ssc-defence-gateway",
          "title": "SSC CGL Ministries & Defence Entrances",
          "subtitle": "Staff Selection Commission CGL, NDA, CDS & CAPF",
          "level": 2,
          "category": "govt_police",
          "exams": [
            "SSC CGL",
            "UPSC CDS",
            "UPSC CAPF (AC)",
            "NDA"
          ],
          "color": "#9F1239",
          "children": [
            {
              "id": "govt-ssc-cgl-track",
              "title": "SSC Combined Graduate Level (CGL)",
              "subtitle": "All-India Central Civil Ministries Examination",
              "level": 3,
              "category": "govt_police",
              "duration": "Degree + Exam",
              "color": "#BE123C",
              "children": [
                {
                  "id": "govt-cgl-inspector-cadres",
                  "title": "Central Board of Direct Taxes / Customs",
                  "subtitle": "Tax Evasion Audits & Border Customs Control",
                  "level": 4,
                  "category": "govt_police",
                  "color": "#9F1239",
                  "children": [
                    {
                      "id": "career-income-tax-inspector",
                      "title": "Income Tax Inspector / Customs Inspector",
                      "subtitle": "Class-2 Gazetted Central Govt Inspector",
                      "level": 5,
                      "category": "govt_police",
                      "isCareerLeaf": true,
                      "salaryTier": "₹9L - ₹19L / Year + Central Perks",
                      "description": "Investigate corporate tax fraud, conduct search & seizure raids, and inspect container cargoes at international seaports/airports.",
                      "color": "#881337"
                    }
                  ]
                }
              ]
            },
            {
              "id": "govt-capf-ac-track",
              "title": "UPSC CAPF (Assistant Commandant)",
              "subtitle": "Direct Class-1 Officer Selection for Paramilitary",
              "level": 3,
              "category": "govt_police",
              "duration": "1 Year Academy",
              "color": "#BE123C",
              "children": [
                {
                  "id": "govt-capf-command-drills",
                  "title": "BSF / CRPF / CISF / ITBP Officer Academy",
                  "subtitle": "Tactical Jungle Warfare, Border Outposts & Riot Response",
                  "level": 4,
                  "category": "govt_police",
                  "color": "#9F1239",
                  "children": [
                    {
                      "id": "career-paramilitary-officer",
                      "title": "Assistant Commandant (CRPF / BSF / CISF)",
                      "subtitle": "Company Commander (135 Armed Troops)",
                      "level": 5,
                      "category": "govt_police",
                      "isCareerLeaf": true,
                      "salaryTier": "₹12L - ₹24L / Year + Risk Allowances",
                      "description": "Command armed paramilitary companies safeguarding international frontiers, nuclear installations, airports, and counter-insurgency sectors.",
                      "color": "#881337"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "id": "arts-law-gateway",
          "title": "National Law Universities (CLAT / AILET)",
          "subtitle": "Common Law Admission Test for Premier NLUs",
          "level": 2,
          "category": "arts",
          "exams": [
            "CLAT",
            "AILET",
            "State LAWCET"
          ],
          "color": "#7E22CE",
          "children": [
            {
              "id": "arts-ballb-degree",
              "title": "5-Year Integrated B.A. LL.B (Hons)",
              "subtitle": "Constitutional Law, Corporate Contracts & Criminal Code",
              "level": 3,
              "category": "arts",
              "duration": "5 Years",
              "color": "#9333EA",
              "children": [
                {
                  "id": "arts-judiciary-path",
                  "title": "Judicial Services Exam (PCS-J)",
                  "subtitle": "Provincial Judicial Academy & Bench Training",
                  "level": 4,
                  "category": "arts",
                  "color": "#7E22CE",
                  "children": [
                    {
                      "id": "career-civil-judge",
                      "title": "Civil Judge / High Court Advocate",
                      "subtitle": "Metropolitan Magistrate & Senior Legal Counsel",
                      "level": 5,
                      "category": "arts",
                      "isCareerLeaf": true,
                      "salaryTier": "₹15L - ₹45L+ / Year + Judicial Protocol",
                      "description": "Preside over legal trials, uphold the Constitution of India, deliver court judgments, and protect civil liberties.",
                      "color": "#6B21A8"
                    }
                  ]
                },
                {
                  "id": "arts-corporate-law-path",
                  "title": "Corporate Law Firm Senior Associate",
                  "subtitle": "International Arbitration & Securities Law",
                  "level": 4,
                  "category": "arts",
                  "color": "#7E22CE",
                  "children": [
                    {
                      "id": "career-corporate-lawyer",
                      "title": "Corporate Legal Counsel / Law Partner",
                      "subtitle": "General Counsel to Multinationals (Shardul/Cyril)",
                      "level": 5,
                      "category": "arts",
                      "isCareerLeaf": true,
                      "salaryTier": "₹18L - ₹60L / Year",
                      "description": "Draft billion-dollar cross-border contracts, defend corporations against regulatory lawsuits, and structure IP patents.",
                      "color": "#6B21A8"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "id": "teaching-school-gateway",
          "title": "Teacher Training & TET / CTET Entrances",
          "subtitle": "D.Ed, B.Ed, Central & State Teacher Eligibility Tests",
          "level": 2,
          "category": "teaching",
          "exams": [
            "CTET Paper 1 & 2",
            "State TET",
            "DEECET / EdCET"
          ],
          "color": "#C2410C",
          "children": [
            {
              "id": "teaching-primary-track",
              "title": "D.Ed / D.El.Ed (Elementary Education 2 Yrs)",
              "subtitle": "Child Psychology, Pedagogy & Foundational Literacy",
              "level": 3,
              "category": "teaching",
              "duration": "2 Years",
              "color": "#EA580C",
              "children": [
                {
                  "id": "teaching-prt-tet1",
                  "title": "CTET Paper 1 / State DSC Examination",
                  "subtitle": "Secondary Grade Teacher (SGT) Selection",
                  "level": 4,
                  "category": "teaching",
                  "color": "#C2410C",
                  "children": [
                    {
                      "id": "career-primary-teacher",
                      "title": "Government Primary School Teacher (SGT)",
                      "subtitle": "Classes 1 to 5 Foundational Educator",
                      "level": 5,
                      "category": "teaching",
                      "isCareerLeaf": true,
                      "salaryTier": "₹6L - ₹14L / Year + Pension & Holidays",
                      "description": "Teach basic mathematics, reading, and science in government primary schools with job security and government pay scales.",
                      "color": "#9A3412"
                    }
                  ]
                }
              ]
            },
            {
              "id": "teaching-highschool-track",
              "title": "Bachelor of Education (B.Ed 2 Yrs)",
              "subtitle": "Subject Methodology (Maths, Physical Science, Social, English)",
              "level": 3,
              "category": "teaching",
              "duration": "2 Years",
              "color": "#EA580C",
              "children": [
                {
                  "id": "teaching-tgt-pgt-tet2",
                  "title": "CTET Paper 2 / KVS / NVS / State DSC",
                  "subtitle": "Trained Graduate Teacher (TGT) & Post Graduate (PGT)",
                  "level": 4,
                  "category": "teaching",
                  "color": "#C2410C",
                  "children": [
                    {
                      "id": "career-high-school-teacher",
                      "title": "High School Teacher / PGT Lecturer",
                      "subtitle": "Classes 8 to 12 Government / Kendriya Vidyalaya Teacher",
                      "level": 5,
                      "category": "teaching",
                      "isCareerLeaf": true,
                      "salaryTier": "₹8L - ₹18L / Year",
                      "description": "Teach specialized subjects (Physics, Maths, Biology, History) in high schools, prepare students for board exams, and mentor youth.",
                      "color": "#9A3412"
                    }
                  ]
                }
              ]
            },
            {
              "id": "teaching-physical-track",
              "title": "B.P.Ed (Bachelor of Physical Education)",
              "subtitle": "Sports Coaching, Athletics, Gymnastics & Kinesiology",
              "level": 3,
              "category": "teaching",
              "duration": "2 to 3 Years",
              "color": "#EA580C",
              "children": [
                {
                  "id": "teaching-pet-selection",
                  "title": "State Sports Council / District PET Board",
                  "subtitle": "Sports Academy Certification & Coaching Accreditation",
                  "level": 4,
                  "category": "teaching",
                  "color": "#C2410C",
                  "children": [
                    {
                      "id": "career-pet-sports-coach",
                      "title": "Physical Education Teacher (PET) / Coach",
                      "subtitle": "School Sports Director / District Sports Authority",
                      "level": 5,
                      "category": "teaching",
                      "isCareerLeaf": true,
                      "salaryTier": "₹6L - ₹15L / Year",
                      "description": "Train student sports teams in cricket, volleyball, athletics, instill discipline, and organize district tournaments.",
                      "color": "#9A3412"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "id": "teaching-higher-edu-gateway",
          "title": "University Academia & Research Entrances",
          "subtitle": "Post-Graduation + UGC-NET / CSIR-NET & Ph.D",
          "level": 2,
          "category": "teaching",
          "exams": [
            "UGC-NET / JRF",
            "CSIR-NET",
            "SLET / SET"
          ],
          "color": "#C2410C",
          "children": [
            {
              "id": "teaching-master-degree",
              "title": "Master's Degree (M.A. / M.Sc / M.Tech / M.Com)",
              "subtitle": "Advanced Postgraduate Domain Specialization",
              "level": 3,
              "category": "teaching",
              "duration": "2 Years",
              "color": "#EA580C",
              "children": [
                {
                  "id": "teaching-phd-fellowship",
                  "title": "Doctor of Philosophy (Ph.D) & UGC-NET",
                  "subtitle": "Academic Publications, Peer Review & Doctoral Thesis",
                  "level": 4,
                  "category": "teaching",
                  "color": "#C2410C",
                  "children": [
                    {
                      "id": "career-college-professor",
                      "title": "University Professor / College Lecturer",
                      "subtitle": "Assistant Professor / Head of Department (HOD)",
                      "level": 5,
                      "category": "teaching",
                      "isCareerLeaf": true,
                      "salaryTier": "₹12L - ₹32L / Year (7th Pay UGC Scales)",
                      "description": "Lecture undergraduate and postgraduate students, publish research in global journals, and supervise doctoral research scholars.",
                      "color": "#9A3412"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "id": "arts-design-media-gateway",
          "title": "Design & Mass Media Entrances",
          "subtitle": "NIFT, NID DAT, CUET Mass Communication",
          "level": 2,
          "category": "arts",
          "exams": [
            "NID DAT",
            "NIFT Entrance",
            "IIMC Entrance"
          ],
          "color": "#7E22CE",
          "children": [
            {
              "id": "arts-bdes-degree",
              "title": "B.Des (Design 4 Yrs at NID / NIFT)",
              "subtitle": "Industrial Product, UX/UI, Fashion & Visual Design",
              "level": 3,
              "category": "arts",
              "duration": "4 Years",
              "color": "#9333EA",
              "children": [
                {
                  "id": "arts-creative-dir-path",
                  "title": "Product Design Studio & UX Direction",
                  "subtitle": "Human-Centered Design & Luxury Brand Aesthetics",
                  "level": 4,
                  "category": "arts",
                  "color": "#7E22CE",
                  "children": [
                    {
                      "id": "career-creative-director",
                      "title": "Product / Fashion Creative Director",
                      "subtitle": "Principal Designer & Global Brand Architect",
                      "level": 5,
                      "category": "arts",
                      "isCareerLeaf": true,
                      "salaryTier": "₹14L - ₹48L / Year",
                      "description": "Direct consumer tech UI/UX design, lead luxury fashion houses, and design physical smart electronics aesthetics.",
                      "color": "#6B21A8"
                    }
                  ]
                }
              ]
            },
            {
              "id": "arts-bjmc-degree",
              "title": "BJMC (Journalism & Mass Comm 3 Yrs)",
              "subtitle": "Investigative Journalism, Broadcast TV & Digital News",
              "level": 3,
              "category": "arts",
              "duration": "3 Years",
              "color": "#9333EA",
              "children": [
                {
                  "id": "arts-media-anchor-path",
                  "title": "Prime-Time News Editorial & Broadcast",
                  "subtitle": "Investigative Exposé & Multimedia Storytelling",
                  "level": 4,
                  "category": "arts",
                  "color": "#7E22CE",
                  "children": [
                    {
                      "id": "career-investigative-journalist",
                      "title": "Investigative Journalist / TV News Anchor",
                      "subtitle": "Chief News Editor & Media Foreign Bureau Chief",
                      "level": 5,
                      "category": "arts",
                      "isCareerLeaf": true,
                      "salaryTier": "₹10L - ₹35L / Year",
                      "description": "Investigate critical public policy corruption, anchor prime-time evening news, and report from warzones and capitals.",
                      "color": "#6B21A8"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "stream-ssc",
      "title": "After 10th (S.S.C.) Direct Routes",
      "subtitle": "Polytechnic Diplomas, ITI Trades & Police Constable",
      "level": 1,
      "category": "ssc",
      "duration": "1 to 3 Years",
      "color": "#D97706",
      "description": "Direct entry-level technical qualifications, railway operations, and government security jobs available right after Class 10.",
      "children": [
        {
          "id": "ssc-polycet-gateway",
          "title": "State POLYCET Polytechnic Entrance",
          "subtitle": "Admissions to Govt & Aided Polytechnic Colleges",
          "level": 2,
          "category": "ssc",
          "exams": [
            "POLYCET",
            "State Diploma CET"
          ],
          "color": "#B45309",
          "children": [
            {
              "id": "ssc-poly-diploma",
              "title": "3-Yr Polytechnic Engineering Diploma",
              "subtitle": "Civil, Mechanical, Electrical, ECE or Computer",
              "level": 3,
              "category": "ssc",
              "duration": "3 Years",
              "color": "#D97706",
              "children": [
                {
                  "id": "ssc-ecet-lateral-contractor",
                  "title": "Direct 2nd Yr B.Tech via ECET / PWD Licensing",
                  "subtitle": "Class-1 Government Contractor Licensing Board",
                  "level": 4,
                  "category": "ssc",
                  "color": "#B45309",
                  "children": [
                    {
                      "id": "career-govt-contractor",
                      "title": "Govt Contractor / Assistant Engineer (AE)",
                      "subtitle": "Class-1 PWD Contractor & Site Project Lead",
                      "level": 5,
                      "category": "ssc",
                      "isCareerLeaf": true,
                      "salaryTier": "₹10L - ₹35L+ / Year",
                      "description": "Execute municipal bridges, road networks, electrical transmission lines, or secure gazetted assistant engineer rank.",
                      "color": "#92400E"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "id": "ssc-iti-gateway",
          "title": "I.T.I. Industrial Training (NCVT)",
          "subtitle": "Electrician, Fitter, Machinist & Welder Trades",
          "level": 2,
          "category": "ssc",
          "exams": [
            "State ITI Merit Portal"
          ],
          "color": "#B45309",
          "children": [
            {
              "id": "ssc-iti-course",
              "title": "National Trade Certificate (NTC 1-2 Yrs)",
              "subtitle": "Hands-on Technical Machinery Training & Apprenticeship",
              "level": 3,
              "category": "ssc",
              "duration": "1 to 2 Years",
              "color": "#D97706",
              "children": [
                {
                  "id": "ssc-rrb-alp-exam",
                  "title": "Railway Recruitment Board (RRB ALP Exam)",
                  "subtitle": "Psychometric Aptitude & Medical Standards",
                  "level": 4,
                  "category": "ssc",
                  "color": "#B45309",
                  "children": [
                    {
                      "id": "career-railway-loco-pilot",
                      "title": "Railway Loco Pilot (Train Driver)",
                      "subtitle": "Indian Railways Senior Assistant Loco Pilot",
                      "level": 5,
                      "category": "ssc",
                      "isCareerLeaf": true,
                      "salaryTier": "₹8L - ₹18L / Year + Railway Benefits",
                      "description": "Drive high-speed passenger expresses, Vande Bharat trains, and freight rakes across Indian Railways national network.",
                      "color": "#92400E"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "id": "ssc-police-constable-gateway",
          "title": "Police & Armed Forces Matric Recruitment",
          "subtitle": "State Police Constable & Army Agniveer Rallies",
          "level": 2,
          "category": "ssc",
          "exams": [
            "Police Constable Exam",
            "Physical Endurance Test (PET)"
          ],
          "color": "#B45309",
          "children": [
            {
              "id": "ssc-police-recruit-training",
              "title": "State Police Academy Constable Training",
              "subtitle": "Law, Weapon Handling, Physical Drills & Investigation",
              "level": 3,
              "category": "ssc",
              "duration": "9 Months",
              "color": "#D97706",
              "children": [
                {
                  "id": "ssc-head-constable-path",
                  "title": "Departmental Senior Constable & Promotion",
                  "subtitle": "Law & Order Beat Officer / Highway Patrol",
                  "level": 4,
                  "category": "ssc",
                  "color": "#B45309",
                  "children": [
                    {
                      "id": "career-police-constable",
                      "title": "Police Constable / Head Constable",
                      "subtitle": "State Police Beat Officer & Armed Reserve",
                      "level": 5,
                      "category": "ssc",
                      "isCareerLeaf": true,
                      "salaryTier": "₹5L - ₹11L / Year + Govt Pension & Medical",
                      "description": "Serve directly on front-line public security, respond to emergency 112 distress calls, secure events, and safeguard local communities.",
                      "color": "#92400E"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};

// Helper function to find path from root to target node ID
export function findPathToNode(
  root: TreeDiagramNode,
  targetId: string,
  currentPath: string[] = []
): string[] | null {
  const newPath = [...currentPath, root.id];
  if (root.id === targetId) {
    return newPath;
  }
  if (!root.children || root.children.length === 0) {
    return null;
  }
  for (const child of root.children) {
    const res = findPathToNode(child, targetId, newPath);
    if (res) return res;
  }
  return null;
}

// Helper function to get all terminal career leaf nodes
export function getAllCareerLeaves(root: TreeDiagramNode): TreeDiagramNode[] {
  const leaves: TreeDiagramNode[] = [];
  function traverse(node: TreeDiagramNode) {
    if (node.isCareerLeaf) {
      leaves.push(node);
    }
    if (node.children) {
      node.children.forEach(traverse);
    }
  }
  traverse(root);
  return leaves;
}

// Helper to find a specific node by ID
export function findNodeById(root: TreeDiagramNode, id: string): TreeDiagramNode | null {
  if (root.id === id) return root;
  if (!root.children) return null;
  for (const child of root.children) {
    const found = findNodeById(child, id);
    if (found) return found;
  }
  return null;
}

// ═════════════════════════════════════════════════════════════════════════════
// MULTI-STREAM CAREER PATHWAY CONFIGURATIONS
// When a single career (e.g. IAS Officer, Software Architect, Bank Manager, Police SI)
// can be reached via multiple different intermediate streams (e.g. Arts vs B.Tech vs Commerce),
// this mapping defines each alternate route so the UI can highlight each specific path!
// ═════════════════════════════════════════════════════════════════════════════
export interface AlternateStreamRoute {
  routeId: string;
  streamName: string;
  streamBadge: string;
  streamCategory: "pcm" | "pcb" | "commerce" | "arts" | "diploma" | "ssc" | "teaching" | "govt_police";
  color: string;
  pathNodeIds: string[];
  steps: string[];
  description: string;
  eligibility: string;
}

export interface MultiStreamCareerConfig {
  careerId: string;
  careerTitle: string;
  routes: AlternateStreamRoute[];
}

export const MULTI_STREAM_CAREER_ROUTES: Record<string, MultiStreamCareerConfig> = {
  "career-ias-officer": {
    "careerId": "career-ias-officer",
    "careerTitle": "IAS Officer (District Collector / DM)",
    "routes": [
      {
        "routeId": "ias-via-arts",
        "streamName": "Via Arts & Humanities (B.A.)",
        "streamBadge": "Core Humanities",
        "streamCategory": "arts",
        "color": "#BE123C",
        "pathNodeIds": [
          "root-education",
          "stream-arts",
          "govt-upsc-cse-gateway",
          "govt-ias-track",
          "govt-district-admin-path",
          "career-ias-officer"
        ],
        "steps": [
          "Class 10 (S.S.C.)",
          "12th Arts (HEC)",
          "B.A. Public Administration / History",
          "UPSC CSE Examination (Prelims + Mains)",
          "LBSNAA Mussoorie Academy",
          "IAS District Collector"
        ],
        "description": "Direct alignment with UPSC general studies syllabus (Polity, History, Economy, Ethics). Highest conceptual overlap.",
        "eligibility": "Any recognized Bachelor's Degree in Arts / Humanities."
      },
      {
        "routeId": "ias-via-pcm",
        "streamName": "Via Science PCM / Engineering (B.Tech)",
        "streamBadge": "65% of Toppers",
        "streamCategory": "pcm",
        "color": "#0284C7",
        "pathNodeIds": [
          "root-education",
          "stream-pcm",
          "pcm-jee-tech",
          "pcm-btech-cse",
          "career-ias-officer"
        ],
        "steps": [
          "Class 10 (S.S.C.)",
          "12th Science (PCM / MPC)",
          "B.Tech Engineering (4 Yrs)",
          "UPSC CSE Examination (Optional Subject)",
          "LBSNAA Mussoorie Academy",
          "IAS District Collector"
        ],
        "description": "Over 65% of recent UPSC top rankers are engineering graduates due to strong analytical ability and high scoring in optional subjects.",
        "eligibility": "Any 4-year B.Tech / B.E. Degree."
      },
      {
        "routeId": "ias-via-commerce",
        "streamName": "Via Commerce & Economics (B.Com / BBA)",
        "streamBadge": "Economic Governance",
        "streamCategory": "commerce",
        "color": "#7C3AED",
        "pathNodeIds": [
          "root-education",
          "stream-commerce",
          "commerce-banking-management",
          "commerce-bcom-degree",
          "career-ias-officer"
        ],
        "steps": [
          "Class 10 (S.S.C.)",
          "12th Commerce (MEC/CEC)",
          "B.Com / Economics (Hons)",
          "UPSC CSE (Economics/Commerce Optional)",
          "LBSNAA Mussoorie Academy",
          "IAS District Collector"
        ],
        "description": "Equips candidates for high-level revenue administration, ministry economic planning, and public budget allocation.",
        "eligibility": "Any Bachelor's Degree in Commerce / Business."
      },
      {
        "routeId": "ias-via-pcb",
        "streamName": "Via Medical / Life Sciences (MBBS / B.Sc)",
        "streamBadge": "Healthcare Policy",
        "streamCategory": "pcb",
        "color": "#059669",
        "pathNodeIds": [
          "root-education",
          "stream-pcb",
          "pcb-neet-ug-all",
          "pcb-mbbs-degree",
          "career-ias-officer"
        ],
        "steps": [
          "Class 10 (S.S.C.)",
          "12th Science (PCB / BiPC)",
          "M.B.B.S. Medical Degree",
          "UPSC CSE (Medical Science Optional)",
          "LBSNAA Mussoorie Academy",
          "IAS District Collector"
        ],
        "description": "Doctors who enter the IAS lead district health emergencies, public epidemic management, and national health mission policies.",
        "eligibility": "Graduation in M.B.B.S. / B.Sc / Allied Medical."
      }
    ]
  },
  "career-ips-officer": {
    "careerId": "career-ips-officer",
    "careerTitle": "IPS Officer (Superintendent of Police - SP)",
    "routes": [
      {
        "routeId": "ips-via-humanities",
        "streamName": "Via Humanities / Law Degree",
        "streamBadge": "Criminal Law",
        "streamCategory": "arts",
        "color": "#BE123C",
        "pathNodeIds": [
          "root-education",
          "stream-arts",
          "govt-upsc-cse-gateway",
          "govt-ips-track",
          "govt-police-command-path",
          "career-ips-officer"
        ],
        "steps": [
          "Class 10 (S.S.C.)",
          "12th Arts / Humanities",
          "B.A. Criminology / Political Science / Law",
          "UPSC CSE Exam",
          "SVP National Police Academy (NPA)",
          "IPS Superintendent of Police"
        ],
        "description": "Strong command of Constitutional law, human rights, IPC criminal procedures, and state policing structures.",
        "eligibility": "Any Graduation Degree from recognized university."
      },
      {
        "routeId": "ips-via-tech",
        "streamName": "Via Engineering / Cyber Tech (B.Tech)",
        "streamBadge": "Cyber Crime Lead",
        "streamCategory": "pcm",
        "color": "#0284C7",
        "pathNodeIds": [
          "root-education",
          "stream-pcm",
          "pcm-jee-tech",
          "pcm-btech-cse",
          "career-ips-officer"
        ],
        "steps": [
          "Class 10 (S.S.C.)",
          "12th Science (PCM)",
          "B.Tech Engineering (4 Yrs)",
          "UPSC CSE Exam",
          "SVP National Police Academy (NPA)",
          "IPS Superintendent of Police"
        ],
        "description": "Crucial for modern cyber forensics, digital surveillance, biometric crime databases, and high-tech investigative policing.",
        "eligibility": "4-Year B.Tech Degree."
      }
    ]
  },
  "career-software-architect": {
    "careerId": "career-software-architect",
    "careerTitle": "Software Architect / AI Engineer",
    "routes": [
      {
        "routeId": "soft-via-jee",
        "streamName": "Via 12th PCM & B.Tech CSE",
        "streamBadge": "Standard Route",
        "streamCategory": "pcm",
        "color": "#0284C7",
        "pathNodeIds": [
          "root-education",
          "stream-pcm",
          "pcm-jee-tech",
          "pcm-btech-cse",
          "pcm-ai-arch-path",
          "career-software-architect"
        ],
        "steps": [
          "Class 10 (S.S.C.)",
          "12th Science (PCM)",
          "JEE / EAPCET Exam",
          "B.Tech Computer Science (4 Yrs)",
          "Distributed Cloud Labs",
          "Software Architect"
        ],
        "description": "Traditional 4-year premier engineering degree path with core algorithms, operating systems, and deep system architecture.",
        "eligibility": "12th with Physics, Chemistry & Mathematics (PCM)."
      },
      {
        "routeId": "soft-via-polytechnic",
        "streamName": "Via 10th Polytechnic (Lateral Entry)",
        "streamBadge": "Direct Lateral Route",
        "streamCategory": "ssc",
        "color": "#D97706",
        "pathNodeIds": [
          "root-education",
          "stream-ssc",
          "ssc-polycet-gateway",
          "ssc-poly-diploma",
          "ssc-ecet-lateral-contractor",
          "career-software-architect"
        ],
        "steps": [
          "Class 10 (S.S.C.)",
          "State POLYCET Exam",
          "3-Year Computer Engineering Diploma",
          "Direct 2nd Yr B.Tech Lateral Entry (ECET)",
          "Software Architect"
        ],
        "description": "Bypasses 11th and 12th standard. Direct hands-on coding diploma followed by direct admission into 2nd year B.Tech.",
        "eligibility": "10th Standard (S.S.C.) with minimum 35% marks."
      },
      {
        "routeId": "soft-via-bca",
        "streamName": "Via Any 12th Stream (BCA ➔ MCA)",
        "streamBadge": "Open to All Streams",
        "streamCategory": "commerce",
        "color": "#7C3AED",
        "pathNodeIds": [
          "root-education",
          "stream-commerce",
          "commerce-banking-management",
          "commerce-bcom-degree",
          "career-software-architect"
        ],
        "steps": [
          "Class 10 (S.S.C.)",
          "12th Any Stream (Commerce/Arts/Science)",
          "BCA (Bachelor of Computer Applications 3 Yrs)",
          "MCA (Master of Computer Applications 2 Yrs)",
          "Software Architect"
        ],
        "description": "Available even without 12th PCM! Students from commerce or arts can enroll in BCA and MCA to become top software architects.",
        "eligibility": "12th Standard in any stream (with Maths / Computer Studies preferred)."
      }
    ]
  },
  "career-police-sub-inspector": {
    "careerId": "career-police-sub-inspector",
    "careerTitle": "Sub-Inspector of Police (SI / SHO)",
    "routes": [
      {
        "routeId": "si-direct-degree",
        "streamName": "Via Any Bachelor's Degree",
        "streamBadge": "Direct Graduate Entry",
        "streamCategory": "govt_police",
        "color": "#BE123C",
        "pathNodeIds": [
          "root-education",
          "stream-arts",
          "govt-state-psc-gateway",
          "govt-state-group1-degree",
          "govt-police-si-exam",
          "career-police-sub-inspector"
        ],
        "steps": [
          "Class 10 (S.S.C.)",
          "12th Any Stream",
          "Any Bachelor's Degree (B.A./B.Sc/B.Com)",
          "State Police SI Exam / SSC CPO",
          "Police Training College (PTC)",
          "Sub-Inspector of Police"
        ],
        "description": "Direct entry exam open to all college graduates. Includes written reasoning, physical efficiency test, and 1-year police academy drills.",
        "eligibility": "Any recognized degree + physical height/chest standards."
      },
      {
        "routeId": "si-via-constable",
        "streamName": "Via 10th Constable + Departmental Exam",
        "streamBadge": "Matric Promotion Route",
        "streamCategory": "ssc",
        "color": "#D97706",
        "pathNodeIds": [
          "root-education",
          "stream-ssc",
          "ssc-police-constable-gateway",
          "ssc-police-recruit-training",
          "ssc-head-constable-path",
          "career-police-sub-inspector"
        ],
        "steps": [
          "Class 10 (S.S.C.)",
          "Police Constable Recruitment Rally",
          "Constable Police Academy (9 Months)",
          "3 to 5 Years Outstanding Field Service",
          "Departmental Promotion Exam (LDCE)",
          "Sub-Inspector of Police"
        ],
        "description": "Join right after 10th/12th as a police constable. Complete departmental graduation while in service and clear internal promotion board to become SI.",
        "eligibility": "10th/12th Pass + Physical Endurance Test."
      }
    ]
  },
  "career-bank-manager": {
    "careerId": "career-bank-manager",
    "careerTitle": "Bank Branch Manager / RBI Officer",
    "routes": [
      {
        "routeId": "bank-via-commerce",
        "streamName": "Via Commerce (B.Com / Finance)",
        "streamBadge": "Direct Accounting Fit",
        "streamCategory": "commerce",
        "color": "#7C3AED",
        "pathNodeIds": [
          "root-education",
          "stream-commerce",
          "commerce-banking-management",
          "commerce-bcom-degree",
          "commerce-bank-po-path",
          "career-bank-manager"
        ],
        "steps": [
          "Class 10 (S.S.C.)",
          "12th Commerce",
          "B.Com / Banking & Insurance (3 Yrs)",
          "IBPS PO / SBI PO Exam",
          "Bank Probationary Officer",
          "Bank Branch Manager"
        ],
        "description": "Natural progression with expertise in credit appraisal, ledger balancing, commercial lending, and treasury management.",
        "eligibility": "Graduate in Commerce / Business."
      },
      {
        "routeId": "bank-via-tech",
        "streamName": "Via Engineering / Science (B.Tech / B.Sc)",
        "streamBadge": "Fintech & Data Advantage",
        "streamCategory": "pcm",
        "color": "#0284C7",
        "pathNodeIds": [
          "root-education",
          "stream-pcm",
          "pcm-jee-tech",
          "pcm-btech-cse",
          "career-bank-manager"
        ],
        "steps": [
          "Class 10 (S.S.C.)",
          "12th Science (PCM)",
          "B.Tech Engineering (4 Yrs)",
          "IBPS PO / SBI PO / RBI Grade B Exam",
          "Fintech & Risk Operations",
          "Bank Branch Manager"
        ],
        "description": "Highly sought-after in banking due to strong quantitative aptitude, risk modeling, and modern digital banking infrastructure.",
        "eligibility": "Graduate in Engineering / Science."
      },
      {
        "routeId": "bank-via-economics",
        "streamName": "Via Arts (B.A. Economics / Policy)",
        "streamBadge": "Central Banking (RBI)",
        "streamCategory": "arts",
        "color": "#9333EA",
        "pathNodeIds": [
          "root-education",
          "stream-arts",
          "arts-design-media-gateway",
          "career-bank-manager"
        ],
        "steps": [
          "Class 10 (S.S.C.)",
          "12th Arts",
          "B.A. Economics (Hons)",
          "RBI Grade B Officer Examination",
          "Monetary Policy Department",
          "Reserve Bank Manager"
        ],
        "description": "Ideal foundation for economic forecasting, monetary policy formulation, currency regulation, and central banking supervision.",
        "eligibility": "Graduate in Economics / Arts with 60%."
      }
    ]
  },
  "career-high-school-teacher": {
    "careerId": "career-high-school-teacher",
    "careerTitle": "High School Teacher / PGT Lecturer",
    "routes": [
      {
        "routeId": "teach-via-science",
        "streamName": "Via Science Stream (Maths & Science)",
        "streamBadge": "STEM High School",
        "streamCategory": "teaching",
        "color": "#EA580C",
        "pathNodeIds": [
          "root-education",
          "stream-arts",
          "teaching-school-gateway",
          "teaching-highschool-track",
          "teaching-tgt-pgt-tet2",
          "career-high-school-teacher"
        ],
        "steps": [
          "Class 10 (S.S.C.)",
          "12th Science (PCM / PCB)",
          "B.Sc + M.Sc (Physics/Chemistry/Maths/Biology)",
          "Bachelor of Education (B.Ed 2 Yrs)",
          "CTET Paper 2 / KVS Selection",
          "PGT Science / Maths Lecturer"
        ],
        "description": "Prepares senior secondary educators for Physics, Chemistry, Biology, and Advanced Mathematics.",
        "eligibility": "Master's Degree in Science + B.Ed."
      },
      {
        "routeId": "teach-via-arts",
        "streamName": "Via Arts Stream (Social Studies & Languages)",
        "streamBadge": "Humanities & English",
        "streamCategory": "arts",
        "color": "#9333EA",
        "pathNodeIds": [
          "root-education",
          "stream-arts",
          "arts-design-media-gateway",
          "career-high-school-teacher"
        ],
        "steps": [
          "Class 10 (S.S.C.)",
          "12th Arts",
          "B.A. + M.A. (History/Pol.Sci/English/Geography)",
          "Bachelor of Education (B.Ed 2 Yrs)",
          "State DSC / CTET Paper 2",
          "PGT Social Studies / Literature Teacher"
        ],
        "description": "Specializes in teaching Indian history, civic government, world geography, and regional/English languages in high schools.",
        "eligibility": "Master's Degree in Arts + B.Ed."
      },
      {
        "routeId": "teach-via-commerce",
        "streamName": "Via Commerce Stream (Accountancy & Business)",
        "streamBadge": "Commerce PGT",
        "streamCategory": "commerce",
        "color": "#7C3AED",
        "pathNodeIds": [
          "root-education",
          "stream-commerce",
          "commerce-banking-management",
          "commerce-bcom-degree",
          "career-high-school-teacher"
        ],
        "steps": [
          "Class 10 (S.S.C.)",
          "12th Commerce",
          "B.Com + M.Com (Commerce & Accountancy)",
          "Bachelor of Education (B.Ed 2 Yrs)",
          "Central / State Teacher Board",
          "PGT Accountancy & Business Lecturer"
        ],
        "description": "Teaches Class 11 and 12 students Accountancy, Business Studies, Economics, and Financial Literacy.",
        "eligibility": "Master's Degree in Commerce (M.Com) + B.Ed."
      }
    ]
  },
  "career-commercial-pilot": {
    "careerId": "career-commercial-pilot",
    "careerTitle": "Commercial Airline Pilot (Captain)",
    "routes": [
      {
        "routeId": "pilot-via-pcm",
        "streamName": "Via 12th Science PCM Direct",
        "streamBadge": "Standard Aviation",
        "streamCategory": "diploma",
        "color": "#0891B2",
        "pathNodeIds": [
          "root-education",
          "stream-pcm",
          "diploma-aviation-entrance",
          "diploma-cpl-flight",
          "diploma-type-rating",
          "career-commercial-pilot"
        ],
        "steps": [
          "Class 10 (S.S.C.)",
          "12th Science (PCM with 50%+)",
          "DGCA Class-1 Medical Certification",
          "Flight School (200 Flying Hours CPL)",
          "Airbus A320 / Boeing 737 Type Rating",
          "Commercial Airline Captain"
        ],
        "description": "Direct entry into DGCA approved flying clubs immediately after 12th Science. Fastest route to commercial airline cockpit.",
        "eligibility": "12th PCM with Physics & Maths."
      },
      {
        "routeId": "pilot-via-airforce",
        "streamName": "Via Indian Air Force Military Conversion",
        "streamBadge": "Defence Flying Cadre",
        "streamCategory": "pcm",
        "color": "#0284C7",
        "pathNodeIds": [
          "root-education",
          "stream-pcm",
          "pcm-space-marine-path",
          "pcm-space-marine-path",
          "career-commercial-pilot"
        ],
        "steps": [
          "Class 10 (S.S.C.)",
          "12th Science (PCM)",
          "NDA / Air Force Academy (AFA)",
          "Fighter / Heavy Transport Military Pilot (10-15 Yrs)",
          "DGCA Military to Civil Pilot Conversion",
          "Senior Airline Commander / Chief Pilot"
        ],
        "description": "Government-funded flying training with thousands of supersonic or heavy cargo military cockpit hours, followed by premier airline leadership.",
        "eligibility": "NDA / AFCAT Air Force Pilot Commission."
      },
      {
        "routeId": "pilot-via-nios",
        "streamName": "Via Arts / Commerce (with NIOS Bridge)",
        "streamBadge": "Bridge Exam Route",
        "streamCategory": "arts",
        "color": "#9333EA",
        "pathNodeIds": [
          "root-education",
          "stream-arts",
          "arts-design-media-gateway",
          "career-commercial-pilot"
        ],
        "steps": [
          "Class 10 (S.S.C.)",
          "12th Arts or Commerce",
          "National Open School (NIOS) Physics & Maths Bridge Exam",
          "DGCA Flying School (200 Flying Hours)",
          "Commercial Pilot License (CPL)",
          "Commercial Airline First Officer"
        ],
        "description": "Did not take PCM in 12th? You can still become a pilot! Clear Physics and Maths papers via NIOS open board, then join DGCA flight academy.",
        "eligibility": "12th Any Stream + NIOS Physics & Maths passing certificate."
      }
    ]
  },
  "career-chartered-accountant": {
    "careerId": "career-chartered-accountant",
    "careerTitle": "Chartered Accountant (CA) / Audit Partner",
    "routes": [
      {
        "routeId": "ca-via-foundation",
        "streamName": "Via 12th Commerce (Foundation Route)",
        "streamBadge": "Direct After 12th",
        "streamCategory": "commerce",
        "color": "#7C3AED",
        "pathNodeIds": [
          "root-education",
          "stream-commerce",
          "commerce-ca-cma-cs",
          "commerce-ca-path",
          "commerce-ca-final",
          "career-chartered-accountant"
        ],
        "steps": [
          "Class 10 (S.S.C.)",
          "12th Commerce",
          "ICAI CA Foundation Exam",
          "CA Intermediate (8 Papers)",
          "2-Year Mandatory Articleship",
          "CA Final Examination",
          "Chartered Accountant (CA)"
        ],
        "description": "Traditional fast-track route directly after Class 12. Most popular path for aspiring accountants.",
        "eligibility": "12th Standard Pass in any stream (Commerce preferred)."
      },
      {
        "routeId": "ca-via-direct-entry",
        "streamName": "Via Any Graduation (Direct Entry Scheme)",
        "streamBadge": "Skips CA Foundation!",
        "streamCategory": "pcm",
        "color": "#0284C7",
        "pathNodeIds": [
          "root-education",
          "stream-pcm",
          "pcm-jee-tech",
          "pcm-btech-cse",
          "career-chartered-accountant"
        ],
        "steps": [
          "Class 10 (S.S.C.)",
          "Any Bachelor's Degree (B.Tech/B.Sc with 60% or B.Com with 55%)",
          "Direct Registration into CA Intermediate (No Foundation!)",
          "Practical Articleship Training",
          "CA Final Examination",
          "Chartered Accountant (CA)"
        ],
        "description": "ICAI Direct Entry Scheme allows graduates in Engineering, Science, or Commerce to skip CA Foundation entirely and start directly at CA Inter.",
        "eligibility": "Graduation with minimum 55% (Commerce) or 60% (Other Streams)."
      }
    ]
  },
  "career-civil-judge": {
    "careerId": "career-civil-judge",
    "careerTitle": "Civil Judge / High Court Advocate",
    "routes": [
      {
        "routeId": "judge-5year-clat",
        "streamName": "Via 5-Year Law after 12th (CLAT)",
        "streamBadge": "Direct After 12th",
        "streamCategory": "arts",
        "color": "#9333EA",
        "pathNodeIds": [
          "root-education",
          "stream-arts",
          "arts-law-gateway",
          "arts-ballb-degree",
          "arts-judiciary-path",
          "career-civil-judge"
        ],
        "steps": [
          "Class 10 (S.S.C.)",
          "12th Any Stream (Arts/Commerce/Science)",
          "CLAT / AILET Law Entrance",
          "5-Year Integrated B.A. LL.B / BBA LL.B",
          "State Judicial Services Exam (PCS-J)",
          "Civil Judge / Magistrate"
        ],
        "description": "Enters premier National Law Universities (NLUs) straight after 12th standard. Saves 1 full academic year.",
        "eligibility": "12th Standard Pass with 45%+ marks."
      },
      {
        "routeId": "judge-3year-grad",
        "streamName": "Via 3-Year Law after Any Graduation",
        "streamBadge": "Post-Graduate Law",
        "streamCategory": "commerce",
        "color": "#7C3AED",
        "pathNodeIds": [
          "root-education",
          "stream-commerce",
          "commerce-banking-management",
          "commerce-bcom-degree",
          "career-civil-judge"
        ],
        "steps": [
          "Class 10 (S.S.C.)",
          "Any Bachelor's Degree (B.Com / B.Sc / B.Tech)",
          "Law Entrance (DU LLB / State LAWCET)",
          "3-Year LL.B Degree",
          "State Judicial Services Exam (PCS-J)",
          "Civil Judge / Magistrate"
        ],
        "description": "Available for graduates in any field who decide to pursue a judicial or legal career later. Highly valued in corporate litigation.",
        "eligibility": "Any recognized Bachelor's degree with 50%+ marks."
      }
    ]
  },
  "career-management-consultant": {
    "careerId": "career-management-consultant",
    "careerTitle": "Management Consultant / Strategy Director",
    "routes": [
      {
        "routeId": "consult-via-engg",
        "streamName": "Via B.Tech Engineering + IIM MBA",
        "streamBadge": "70% of IIM Cohorts",
        "streamCategory": "pcm",
        "color": "#0284C7",
        "pathNodeIds": [
          "root-education",
          "stream-pcm",
          "pcm-jee-tech",
          "pcm-btech-cse",
          "career-management-consultant"
        ],
        "steps": [
          "Class 10 (S.S.C.)",
          "12th Science (PCM)",
          "B.Tech Engineering (4 Yrs)",
          "Common Admission Test (CAT - 99%+ Percentile)",
          "IIM Ahmedabad / Bangalore MBA",
          "Management Consultant (McKinsey/BCG)"
        ],
        "description": "Engineers with strong analytical, mathematical, and data skills constitute over 70% of top consulting recruits at McKinsey, BCG, and Bain.",
        "eligibility": "4-Year B.Tech Degree."
      },
      {
        "routeId": "consult-via-bba",
        "streamName": "Via Commerce / BBA IPMAT",
        "streamBadge": "Direct Management",
        "streamCategory": "commerce",
        "color": "#7C3AED",
        "pathNodeIds": [
          "root-education",
          "stream-commerce",
          "commerce-banking-management",
          "commerce-bba-mba-track",
          "commerce-consulting-leadership",
          "career-management-consultant"
        ],
        "steps": [
          "Class 10 (S.S.C.)",
          "12th Commerce",
          "BBA / 5-Yr Integrated IPM (IIM Indore/Rohtak)",
          "Specialization in Marketing & Corporate Strategy",
          "Management Consultant"
        ],
        "description": "Continuous 5-year business management education straight out of Class 12 without needing CAT examination.",
        "eligibility": "12th Commerce / Any Stream."
      }
    ]
  },
  "career-govt-contractor": {
    "careerId": "career-govt-contractor",
    "careerTitle": "Govt Contractor / Assistant Engineer (AE)",
    "routes": [
      {
        "routeId": "contractor-via-poly",
        "streamName": "Via 10th Polytechnic Civil/Mech Diploma",
        "streamBadge": "Fastest Route After 10th",
        "streamCategory": "ssc",
        "color": "#D97706",
        "pathNodeIds": [
          "root-education",
          "stream-ssc",
          "ssc-polycet-gateway",
          "ssc-poly-diploma",
          "ssc-ecet-lateral-contractor",
          "career-govt-contractor"
        ],
        "steps": [
          "Class 10 (S.S.C.)",
          "State POLYCET Entrance",
          "3-Year Polytechnic Engineering Diploma",
          "PWD / Irrigation Department Contractor License",
          "Class-1 Government Contractor"
        ],
        "description": "Allows students to become licensed contractors or junior engineers directly after 10th standard through a 3-year polytechnic diploma.",
        "eligibility": "10th Standard Pass (S.S.C.)."
      },
      {
        "routeId": "contractor-via-btech",
        "streamName": "Via 12th PCM & 4-Yr B.Tech Civil",
        "streamBadge": "Degree Engineer Route",
        "streamCategory": "pcm",
        "color": "#0284C7",
        "pathNodeIds": [
          "root-education",
          "stream-pcm",
          "pcm-jee-tech",
          "pcm-btech-civil",
          "pcm-civil-ese-path",
          "career-govt-contractor"
        ],
        "steps": [
          "Class 10 (S.S.C.)",
          "12th Science (PCM)",
          "B.Tech Civil Engineering (4 Yrs)",
          "State PSC Assistant Engineer Exam / CPWD Unlimited License",
          "Chief Project Engineer / Mega Contractor"
        ],
        "description": "Degree engineers qualify for Class-1 Unlimited Tender government licenses for mega infrastructure projects.",
        "eligibility": "12th PCM + B.Tech Civil."
      }
    ]
  },
  "career-income-tax-inspector": {
    "careerId": "career-income-tax-inspector",
    "careerTitle": "Income Tax Inspector / Customs Inspector",
    "routes": [
      {
        "routeId": "tax-via-commerce",
        "streamName": "Via Commerce (B.Com / Accounting)",
        "streamBadge": "Taxation Fit",
        "streamCategory": "commerce",
        "color": "#7C3AED",
        "pathNodeIds": [
          "root-education",
          "stream-commerce",
          "commerce-banking-management",
          "commerce-bcom-degree",
          "career-income-tax-inspector"
        ],
        "steps": [
          "Class 10 (S.S.C.)",
          "12th Commerce",
          "B.Com (Accounting & Tax Laws)",
          "SSC CGL Examination (Tier 1 & Tier 2)",
          "Central Board of Direct Taxes (CBDT)",
          "Income Tax Inspector"
        ],
        "description": "Background in corporate accounting and direct tax laws offers strong advantages during revenue audit investigations.",
        "eligibility": "Any Bachelor's Degree in Commerce."
      },
      {
        "routeId": "tax-via-any",
        "streamName": "Via Any Bachelor's Degree (Science/Arts/Engg)",
        "streamBadge": "Open to Any Degree",
        "streamCategory": "govt_police",
        "color": "#BE123C",
        "pathNodeIds": [
          "root-education",
          "stream-arts",
          "govt-ssc-defence-gateway",
          "govt-ssc-cgl-track",
          "govt-cgl-inspector-cadres",
          "career-income-tax-inspector"
        ],
        "steps": [
          "Class 10 (S.S.C.)",
          "12th Any Stream",
          "Any Bachelor's Degree (B.Sc/B.Tech/B.A.)",
          "SSC CGL Examination",
          "Customs & Central Excise Cadres",
          "Customs Inspector / Central Excise Lead"
        ],
        "description": "Open to graduates of all disciplines through the nationwide SSC CGL examination.",
        "eligibility": "Any recognized Bachelor's Degree."
      }
    ]
  }
};
