import React, { useState } from "react";
import {
  X,
  RotateCcw,
  Calendar,
  Languages,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  AlertTriangle,
  Stethoscope,
  HeartPulse,
  Scale,
  Landmark,
  Compass,
  Sprout,
  GraduationCap,
  Code2,
  Calculator,
} from "lucide-react";

interface CareerSimulationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenBooking: () => void;
  initialLang?: "en" | "te";
  careerId?: string;
}

export interface SimulationSituation {
  id: number;
  filename: string;
  situation: {
    en: string;
    te: string;
  };
  description: {
    en: string;
    te: string;
  };
}

const SUPABASE_STORAGE_BASE =
  "https://jqerkjewmmpowiwwpifv.supabase.co/storage/v1/object/public/simulation_pics";

export const DOCTOR_SITUATIONS: SimulationSituation[] = [
  {
    id: 1,
    filename: "Doctor Arrives.jpg",
    situation: {
      en: "Reaching the Hospital",
      te: "ఆసుపత్రికి చేరుకోవడం",
    },
    description: {
      en: "Doctor arriving at the hospital to begin the day.",
      te: "రోజువారీ డ్యూటీని ప్రారంభించడానికి డాక్టర్ ఆసుపత్రికి చేరుకోవడం.",
    },
  },
  {
    id: 2,
    filename: "Compassionate Care in Ward 12.jpg",
    situation: {
      en: "Ward Rounds",
      te: "వార్డు రౌండ్స్",
    },
    description: {
      en: "Visiting patients in their beds and checking their conditions.",
      te: "వార్డులోని రోగుల బెడ్ల వద్దకు వెళ్లి వారి ఆరోగ్యాన్ని, కోలుకుంటున్న తీరును పరిశీలించడం.",
    },
  },
  {
    id: 3,
    filename: "Friendly OPD Consultation Scene.jpg",
    situation: {
      en: "OPD Consultation",
      te: "ఓపీ కన్సల్టేషన్",
    },
    description: {
      en: "Doctor consulting patients in the outpatient department.",
      te: "ఔట్ పేషెంట్ విభాగంలో రోగుల సమస్యలను విని వైద్య సలహాలు అందించడం.",
    },
  },
  {
    id: 4,
    filename: "Caring Pediatric Checkup.jpg",
    situation: {
      en: "General Case",
      te: "సాధారణ పిల్లల వైద్యం",
    },
    description: {
      en: "Mother brings a child with mild fever and cough. Doctor examines the child.",
      te: "జ్వరం, దగ్గుతో బాధపడుతున్న చిన్నారిని తల్లి తీసుకురాగా, డాక్టర్ పరీక్షించి ధైర్యం చెప్పడం.",
    },
  },
  {
    id: 5,
    filename: "Compassion Outside the ICU.jpg",
    situation: {
      en: "Talking to a Scared Family",
      te: "భయపడుతున్న కుటుంబంతో మాట్లాడటం",
    },
    description: {
      en: "Doctor talks to an anxious family waiting for news about their patient.",
      te: "ఐసీయూ బయట ఆందోళనతో వేచి చూస్తున్న కుటుంబ సభ్యులకు రోగి పరిస్థితిని ఓపికగా వివరించడం.",
    },
  },
  {
    id: 6,
    filename: "Doctors Puzzling Over a Case.jpg",
    situation: {
      en: "A Confusing Case",
      te: "క్లిష్టమైన కేసు పరిశీలన",
    },
    description: {
      en: "Doctor and medical team investigate symptoms that don't match one particular disease.",
      te: "లక్షణాలు స్పష్టంగా లేని అరుదైన వ్యాధిని గుర్తించడానికి వైద్యుల బృందమంతా కలిసి చర్చిస్తూ పరిశీలించడం.",
    },
  },
  {
    id: 7,
    filename: "Surgical Team.jpg",
    situation: {
      en: "Operating Theatre",
      te: "ఆపరేషన్ థియేటర్",
    },
    description: {
      en: "Doctor performing surgery with the surgical team.",
      te: "సర్జికల్ బృందంతో కలిసి ఆపరేషన్ థియేటర్‌లో శస్త్రచికిత్స నిర్వహించడం.",
    },
  },
  {
    id: 8,
    filename: "Midnight Medical.jpg",
    situation: {
      en: "Midnight Emergency Call",
      te: "అర్ధరాత్రి ఎమర్జెన్సీ కాల్",
    },
    description: {
      en: "Doctor receives a 2 AM call from an ICU nurse while at home.",
      te: "ఇంటి వద్ద నిద్రపోతున్న సమయంలో అర్ధరాత్రి 2 గంటలకు ఐసీయూ నర్స్ నుండి అత్యవసర పిలుపు రావడం.",
    },
  },
];

export const NURSE_SITUATIONS: SimulationSituation[] = [
  {
    id: 1,
    filename: "Morning ICU Handover at 7 AM.jpg",
    situation: {
      en: "Shift Handover – 7 AM",
      te: "షిఫ్ట్ హ్యాండ్‌ఓవర్ – ఉదయం 7 గంటలు",
    },
    description: {
      en: "Morning ICU Handover at 7 AM. Reviewing night reports and patient status with the outgoing team.",
      te: "ఉదయం 7 గంటలకు నైట్ డ్యూటీ నర్సుల నుంచి రోగుల తాజా హెల్త్ రిపోర్టులు, అత్యవసర వివరాలను తెలుసుకోవడం.",
    },
  },
  {
    id: 2,
    filename: "Morning Vitals Round in Hospital.jpg",
    situation: {
      en: "Morning Vitals Round – High BP Detected",
      te: "మార్నింగ్ వైటల్స్ రౌండ్ – అధిక రక్తపోటు గుర్తింపు",
    },
    description: {
      en: "Checking temperature, blood pressure, and pulse for all ward patients. Noticing one patient's high BP and noting it immediately.",
      te: "వార్డులోని ప్రతి రోగి బీపీ, పల్స్, జ్వరం పరీక్షించడం. ఒక రోగికి రక్తపోటు పెరిగినట్లు గుర్తించి వెంటనే చార్టులో నమోదు చేయడం.",
    },
  },
  {
    id: 3,
    filename: "Ward 3_ Bedside Clinical Discussion.jpg",
    situation: {
      en: "Doctor's Ward Rounds",
      te: "డాక్టర్ వార్డ్ రౌండ్స్",
    },
    description: {
      en: "Nurse explains patient conditions, morning vitals, and overnight changes bedside to the visiting doctor.",
      te: "వార్డ్ 3లో సీనియర్ డాక్టర్‌తో పాటు పేషెంట్ల బెడ్స్ వద్దకు వెళ్లి ఉదయపు వైటల్స్, రోగుల పరిస్థితిని వివరించడం.",
    },
  },
  {
    id: 4,
    filename: "Medicine Time in the Hospital Ward.jpg",
    situation: {
      en: "Medicine Time & IV Saline",
      te: "మందుల సమయం & సెలైన్ పర్యవేక్షణ",
    },
    description: {
      en: "Administering scheduled medicines, injections, and monitoring IV saline drips with care and precision.",
      te: "సరైన రోగికి సరైన సమయానికి మందులు, సెలైన్ బాటిల్స్ మరియు ఇంజెక్షన్లను పూర్తి ఏకాగ్రతతో అందించడం.",
    },
  },
  {
    id: 5,
    filename: "Brave Little Patient_ A Caring Vaccine.jpg",
    situation: {
      en: "A Nervous Child – Giving an Injection",
      te: "చిన్నారికి ధైర్యం – నొప్పి తెలియకుండా ఇంజెక్షన్",
    },
    description: {
      en: "Calming a frightened child with warmth and care so they don't feel pain while receiving their injection.",
      te: "ఇంజెక్షన్ అంటే భయపడుతున్న చిన్నారికి ప్రేమగా ధైర్యం చెప్పి, నొప్పి తెలియకుండా చికిత్స చేయడం.",
    },
  },
  {
    id: 6,
    filename: "Reassurance at the Hospital Bedside.jpg",
    situation: {
      en: "Reassuring a Worried Family",
      te: "కంగారు పడుతున్న కుటుంబానికి భరోసా",
    },
    description: {
      en: "Listening patiently to an anxious family at the bedside, reassuring them, and boosting their confidence.",
      te: "పేషెంట్ పరిస్థితిని చూసి కంగారు పడుతున్న కుటుంబ సభ్యులకు ఓపికగా పరిస్థితి వివరించి ధైర్యాన్ని నింపడం.",
    },
  },
  {
    id: 7,
    filename: "ICU Emergency_ Nurse Responds.jpg",
    situation: {
      en: "Emergency Alert – Oxygen Level Dropping",
      te: "ఎమర్జెన్సీ అలర్ట్ – ఆక్సిజన్ లెవెల్స్ పడిపోవడం",
    },
    description: {
      en: "Responding instantly as an ICU patient's monitor beeps with falling oxygen levels, providing oxygen and alerting doctors.",
      te: "ఐసీయూ మానిటర్ మోగగానే తక్షణమే స్పందించి రోగికి ఆక్సిజన్ అమర్చి, అత్యవసర వైద్య బృందాన్ని అలర్ట్ చేయడం.",
    },
  },
  {
    id: 8,
    filename: "Shift Complete_ Welcome Home.jpg",
    situation: {
      en: "Shift Complete – Reaching Home at 7 PM",
      te: "డ్యూటీ ముగింపు – సాయంత్రం 7 గంటలకు ఇంటికి",
    },
    description: {
      en: "Handing over the evening report after 12 hours of tireless dedication, and returning home with satisfaction.",
      te: "12 గంటల నిరంతర సేవల తర్వాత తర్వాతి టీమ్‌కు బాధ్యతలు అప్పగించి, సంతృప్తితో సాయంత్రం 7 గంటలకు ఇంటికి చేరడం.",
    },
  },
];

export const LAWYER_SITUATIONS: SimulationSituation[] = [
  {
    id: 1,
    filename: "Focused Advocate at 8_30 AM.jpg",
    situation: {
      en: "Morning Case Preparation – 8:30 AM",
      te: "ఉదయం కేస్ ప్రిపరేషన్ – 8:30 AM",
    },
    description: {
      en: "Reviewing case files, FIR copies, and legal precedents early morning at the chamber before heading to court.",
      te: "కోర్టుకు వెళ్లేముందు ఉదయాన్నే ఛాంబర్‌లో కేస్ ఫైల్స్, ఎఫ్.ఐ.ఆర్ కాపీలు, చట్టపరమైన ఆధారాలను క్షుణ్ణంగా పరిశీలించడం.",
    },
  },
  {
    id: 2,
    filename: "Property Dispute.jpg",
    situation: {
      en: "Client Consultation – Property Dispute",
      te: "క్లయింట్ సంప్రదింపులు – ఆస్తి వివాదం",
    },
    description: {
      en: "Listening to an anxious client about a family land dispute, reviewing revenue documents, and advising honest legal recourse.",
      te: "కుటుంబ ఆస్తి వివాదంపై కంగారుపడుతున్న క్లయింట్ సమస్యను శ్రద్ధగా విని, పత్రాలు పరిశీలించి సరైన న్యాయ సలహా ఇవ్వడం.",
    },
  },
  {
    id: 3,
    filename: "Advocate's Legal Research Desk.jpg",
    situation: {
      en: "Legal Research & Precedents",
      te: "న్యాయ పరిశోధన & హైకోర్టు తీర్పుల అధ్యయనం",
    },
    description: {
      en: "Researching High Court and Supreme Court law reports in the library to find the strongest legal arguments for the hearing.",
      te: "కేసు విచారణలో బలమైన వాదనల కోసం హైకోర్టు, సుప్రీంకోర్టు గత తీర్పులు మరియు చట్టాలను లోతుగా అధ్యయనం చేయడం.",
    },
  },
  {
    id: 4,
    filename: "Advocate in Courtroom.jpg",
    situation: {
      en: "Courtroom Arguments & Hearing",
      te: "కోర్టు హాల్లో న్యాయమూర్తి ముందు వాదనలు",
    },
    description: {
      en: "Standing respectfully before the Judge in black robes, presenting facts clearly and defending the client's rights.",
      te: "కోర్టు హాల్లో న్యాయమూర్తి ముందు గౌరవంగా నిలబడి, పూర్తి ఆధారాలతో నిజాలను స్పష్టంగా వివరిస్తూ క్లయింట్ తరఫున వాదించడం.",
    },
  },
  {
    id: 5,
    filename: "Corporate Law Office Consultation.jpg",
    situation: {
      en: "Corporate Law Consultation",
      te: "కార్పొరేట్ సలహా & అగ్రిమెంట్ పరిశీలన",
    },
    description: {
      en: "Meeting with corporate clients to review business contracts, draft agreements, and safeguard against legal risks.",
      te: "వ్యాపార భాగస్వాములతో చర్చించి, ఒప్పంద పత్రాలు తయారు చేయడం మరియు భవిష్యత్తులో చట్టపరమైన ఇబ్బందులు రాకుండా రక్షణ కల్పించడం.",
    },
  },
];

export const BANK_PO_SITUATIONS: SimulationSituation[] = [
  {
    id: 1,
    filename: "Bank Opening at 9 AM.jpg",
    situation: {
      en: "Opening the Branch – 9:00 AM",
      te: "బ్రాంచ్ ప్రారంభం – ఉదయం 9:00 AM",
    },
    description: {
      en: "Arriving at 9:00 AM. Opening the cash vault with the dual-key system, checking core banking systems, and briefing the team.",
      te: "ఉదయం 9:00 గంటలకు బ్రాంచ్‌కు చేరుకోవడం. డ్యూయల్-కీ విధానంతో క్యాష్ వాల్ట్ తెరచి, రోజువారీ పనులకు సిద్ధమవడం.",
    },
  },
  {
    id: 2,
    filename: "Helping an Elderly Customer.jpg",
    situation: {
      en: "Helping an Elderly Customer",
      te: "వృద్ధురాలికి పింఛను సేవల్లో సహాయం",
    },
    description: {
      en: "An elderly lady wants to withdraw her pension but is confused about the form. Guiding her with patience, warmth, and respect.",
      te: "పింఛను డ్రా చేయడానికి వచ్చిన వృద్ధురాలికి ఫారమ్ నింపడంలో ఓపికగా సహాయం చేసి, గౌరవంగా సేవలందించడం.",
    },
  },
  {
    id: 3,
    filename: "Opening a New Account.jpg",
    situation: {
      en: "Opening a New Savings Account",
      te: "యువకుడికి కొత్త సేవింగ్స్ ఖాతా తెరవడం",
    },
    description: {
      en: "A young person arrives to open their first savings account. Verifying KYC documents and explaining debit cards, net banking, and UPI.",
      te: "మొదటిసారి బ్యాంక్ ఖాతా తెరవడానికి వచ్చిన యువకుడి కేవైసీ పత్రాలను పరిశీలించి, సేవింగ్స్ ఖాతాను ప్రారంభించడం.",
    },
  },
  {
    id: 4,
    filename: "A Small Business Loan.jpg",
    situation: {
      en: "Small Business Loan Appraisal",
      te: "చిరు వ్యాపారికి లోన్ పరిశీలన",
    },
    description: {
      en: "A tea-stall owner requests a loan to expand their stall. Inspecting cash flows, eligibility, and processing the application.",
      te: "టీ స్టాల్ విస్తరణ కోసం రుణం కోరిన వ్యాపారి ఆదాయ వివరాలను పరిశీలించి రుణ మంజూరు ప్రక్రియను నడపడం.",
    },
  },
  {
    id: 5,
    filename: "Helping a Farmer.jpg",
    situation: {
      en: "Helping a Farmer – Crop Loan (KCC)",
      te: "రైతన్నకు పంట రుణం (కిసాన్ క్రెడిట్ కార్డ్)",
    },
    description: {
      en: "A farmer visits asking about crop loans and government subsidies. Explaining interest subvention benefits and sanctioning the loan.",
      te: "పంట పెట్టుబడి రుణాల గురించి అడిగిన రైతుకు ప్రభుత్వ రాయితీలు, కిసాన్ క్రెడిట్ కార్డు ప్రయోజనాలను వివరించడం.",
    },
  },
  {
    id: 6,
    filename: "Digital Banking Help.jpg",
    situation: {
      en: "Digital Banking & Mobile App Help",
      te: "డిజిటల్ బ్యాంకింగ్ & మొబైల్ యాప్ సహాయం",
    },
    description: {
      en: "Guiding a customer step-by-step to safely use the mobile banking app, avoid phishing fraud, and manage money digitally.",
      te: "ఆన్‌లైన్ మోసాల బారిన పడకుండా, మొబైల్ యాప్ ద్వారా సురక్షితంగా బ్యాలెన్స్ చెక్ చేయడం మరియు డబ్బులు పంపడం నేర్పించడం.",
    },
  },
  {
    id: 7,
    filename: "Team Meeting.jpg",
    situation: {
      en: "Branch Team Review Meeting",
      te: "బ్రాంచ్ టీమ్ రివ్యూ సమావేశం",
    },
    description: {
      en: "Branch Manager and officers review daily targets, audit checklists, customer service requests, and recovery progress.",
      te: "బ్రాంచ్ మేనేజర్‌తో కలిసి రోజువారీ డిపాజిట్లు, లోన్ టార్గెట్లు మరియు పెండింగ్ పనులపై సమీక్ష జరపడం.",
    },
  },
  {
    id: 8,
    filename: "Closing the Day.jpg",
    situation: {
      en: "Closing the Day & Balancing Books",
      te: "రోజు ముగింపు & లెక్కల సరిచూత",
    },
    description: {
      en: "The bank doors close to the public at 4 PM. Tallying cash balances, reconciling day transactions, and locking the strong room.",
      te: "సాయంత్రం కౌంటర్లు ముగిశాక ప్రతి పైసా లెక్క సరిచూసి, క్యాష్ వాల్ట్ లాక్ చేసి సంతృప్తితో విధులు ముగించడం.",
    },
  },
];

export const ARCHITECT_SITUATIONS: SimulationSituation[] = [
  {
    id: 1,
    filename: "Morning Studio.jpg",
    situation: {
      en: "Morning Studio – 9:30 AM",
      te: "స్టూడియో ప్రారంభం – ఉదయం 9:30 AM",
    },
    description: {
      en: "Reaching the architecture studio at 9:30 AM with blueprint rolls, material samples, and active drafting boards.",
      te: "ఉదయం 9:30 గంటలకు ఆర్కిటెక్చర్ స్టూడియోకి చేరుకోవడం. డ్రాఫ్టింగ్ బోర్డులు, మెటీరియల్ శాంపిల్స్ మరియు ప్రాజెక్ట్ ప్లాన్లను పరిశీలించడం.",
    },
  },
  {
    id: 2,
    filename: "Meeting a Family.jpg",
    situation: {
      en: "Meeting a Family – Dream Home Brief",
      te: "కుటుంబంతో సమావేశం – కలల ఇంటి వివరాలు",
    },
    description: {
      en: "A family visits to build their dream home on a compact plot. Listening to their daily routine, budget, and wishes.",
      te: "చిన్న స్థలంలో తమ కలల ఇంటిని నిర్మించుకోవాలని వచ్చిన కుటుంబం అవసరాలు, బడ్జెట్ మరియు కోరికలను శ్రద్ధగా వినడం.",
    },
  },
  {
    id: 3,
    filename: "Visiting the Site.jpg",
    situation: {
      en: "Visiting the Plot – Sunlight & Wind Study",
      te: "స్థలాన్ని సందర్శించడం – ఎండ, గాలి పరిశీలన",
    },
    description: {
      en: "Walking the site to observe natural sunlight direction, wind flow, road access, and neighboring shade for eco-friendly design.",
      te: "ఇంటికి చక్కటి వెలుతురు, స్వచ్ఛమైన గాలి వచ్చేలా ప్లాట్ వద్ద ఎండ దిశ, గాలి ప్రవాహం మరియు చుట్టుపక్కల వాతావరణాన్ని పరిశీలించడం.",
    },
  },
  {
    id: 4,
    filename: "First Sketches.jpg",
    situation: {
      en: "First Hand Sketches & Floor Concepts",
      te: "మొదటి స్కెచ్‌లు & ఫ్లోర్ ప్లాన్ రూపకల్పన",
    },
    description: {
      en: "Putting pencil to tracing paper to sketch initial room layouts, open courtyards, and comfortable spatial flow for the family.",
      te: "కాగితంపై పెన్సిల్‌తో గదుల అమరిక, హాల్, వంటగది మరియు ప్రాంగణం (కోర్ట్‌యార్డ్) కోసం ప్రారంభ ఆలోచనలను గీయడం.",
    },
  },
  {
    id: 5,
    filename: "Building the 3D Model.jpg",
    situation: {
      en: "Building the 3D Computer Model",
      te: "3D కంప్యూటర్ మోడల్ నిర్మాణం",
    },
    description: {
      en: "Transforming hand sketches into realistic 3D digital elevations, lighting simulations, and textured walkthroughs.",
      te: "చేత్తో గీసిన స్కెచ్‌లను కంప్యూటర్ సాఫ్ట్‌వేర్ ద్వారా అందమైన 3D మోడల్ మరియు వర్చువల్ వాక్‌త్రూగా మార్చడం.",
    },
  },
  {
    id: 6,
    filename: "Client Presentation.jpg",
    situation: {
      en: "Client Presentation & Design Reveal",
      te: "డిజైన్ ప్రెజెంటేషన్ – నమూనా చూపించడం",
    },
    description: {
      en: "Presenting the 3D views and floor plan walkthrough to the family, watching their joy as their dream home takes shape.",
      te: "రూపొందించిన 3D ప్లాన్‌ను కుటుంబానికి చూపించడం. తమ కలల ఇల్లు కళ్లముందు సాక్షాత్కరించడంతో వారి కళ్లలో ఆనందాన్ని చూడటం.",
    },
  },
  {
    id: 7,
    filename: "Working with Engineers.jpg",
    situation: {
      en: "Coordinating with Structural Engineers",
      te: "స్ట్రక్చరల్ ఇంజనీర్‌తో సమన్వయం",
    },
    description: {
      en: "Reviewing column grids, beam depths, plumbing shafts, and construction material costs with the structural engineer.",
      te: "భవనం పటిష్టత కోసం పిల్లర్లు, బీములు, పైప్‌లైన్లు మరియు ఖర్చుల వివరాలపై స్ట్రక్చరల్ ఇంజనీర్‌తో చర్చించడం.",
    },
  },
  {
    id: 8,
    filename: "Site Visit as Construction Begins.jpg",
    situation: {
      en: "Site Inspection – Foundation Laying",
      te: "సైట్ తనిఖీ – పునాది నిర్మాణం",
    },
    description: {
      en: "Visiting the active construction site with safety helmet to inspect pillar alignments and foundation depth with the contractor.",
      te: "హెల్మెట్ ధరించి నిర్మాణ స్థలానికి వెళ్లడం. పిల్లర్ల అమరిక మరియు పునాది నాణ్యతను బిల్డర్‌తో కలిసి క్షుణ్ణంగా తనిఖీ చేయడం.",
    },
  },
  {
    id: 9,
    filename: "Suggestions for the Future.jpg",
    situation: {
      en: "Sustainable & Future-Ready Design",
      te: "పర్యావరణ హిత ఆలోచనలు – భవిష్యత్ రూపకల్పన",
    },
    description: {
      en: "Integrating rainwater harvesting, solar panels, terrace greenery, and passive cooling to save energy and water for years.",
      te: "భవిష్యత్తులో విద్యుత్ మరియు నీటి ఆదా కోసం ఇంట్లో వర్షపు నీటి నిల్వ, సోలార్ ప్యానెల్స్ మరియు చల్లదనం ఇచ్చే తోటను ప్రణాళిక చేయడం.",
    },
  },
];

export const AGRI_SITUATIONS: SimulationSituation[] = [
  {
    id: 1,
    filename: "Morning at the Agriculture Office-4.jpg",
    situation: {
      en: "Morning Plan – 9:00 AM",
      te: "కార్యాలయం ప్రారంభం – ఉదయం 9:00 AM",
    },
    description: {
      en: "Reaching the Agriculture Office at 9:00 AM. Farmers from nearby villages are already waiting outside to consult about their crops.",
      te: "ఉదయం 9:00 గంటలకు వ్యవసాయ కార్యాలయానికి చేరుకోవడం. పంటల సలహాల కోసం చుట్టుపక్కల గ్రామాల రైతులు అప్పటికే వేచి ఉండటం.",
    },
  },
  {
    id: 2,
    filename: "Officer Examines Yellowing Rice.jpg",
    situation: {
      en: "A Worried Farmer – Leaf Discoloration",
      te: "కంగారు పడుతున్న రైతు – పసుపు రంగు ఆకులు",
    },
    description: {
      en: "A paddy farmer visits anxiously with diseased crop samples, explaining that the plant leaves are turning yellow.",
      te: "వరి ఆకులు పసుపు రంగులోకి మారిపోతున్నాయని ఆందోళనతో పొలం నుంచి తెచ్చిన నమూనాలను రైతు చూపించడం.",
    },
  },
  {
    id: 3,
    filename: "Rice Field Inspection_ Agricultural Officer.jpg",
    situation: {
      en: "Field Inspection with Farmer",
      te: "పొలం తనిఖీ – ప్రత్యక్ష పరిశీలన",
    },
    description: {
      en: "Visiting the farmer's paddy field in boots, inspecting the root zone, standing water level, and pest symptoms directly.",
      te: "రైతుతో కలిసి వరి చేనులోకి దిగి మొక్కల వేర్లు, నీటి నిల్వ మరియు తెగుళ్ల లక్షణాలను నేరుగా పరిశీలించడం.",
    },
  },
  {
    id: 4,
    filename: "Agricultural Officer Reviewing Soil Test.jpg",
    situation: {
      en: "Soil Testing Report Analysis",
      te: "భూసార పరీక్ష రిపోర్ట్ పరిశీలన",
    },
    description: {
      en: "Reviewing the laboratory soil health card to check nitrogen, phosphorus, potassium, and soil pH balance for the field.",
      te: "ల్యాబ్ నుంచి వచ్చిన సాయిల్ హెల్త్ కార్డును పరిశీలించి నేలలో నత్రజని, భాస్వరం, పొటాష్ లోపాలను గుర్తించడం.",
    },
  },
  {
    id: 5,
    filename: "Paddy Fertilizer Advisory.jpg",
    situation: {
      en: "Fertilizer Advisory – Saving Money",
      te: "సరైన ఎరువుల సలహా – పెట్టుబడి ఆదా",
    },
    description: {
      en: "Advising the farmer on the exact dose of micronutrients and zinc instead of costly chemical fertilizers, saving them thousands.",
      te: "అనవసరమైన రసాయన ఎరువులు వేసి డబ్బు వృథా చేయకుండా, అవసరమైన జింక్ మరియు సూక్ష్మ పోషకాలనే సరైన మోతాదులో వాడాలని రైతుకు సూచించడం.",
    },
  },
  {
    id: 6,
    filename: "Schemes Farmers Consultation.jpg",
    situation: {
      en: "Government Schemes & Subsidies",
      te: "ప్రభుత్వ పథకాలు & రాయితీల అవగాహన",
    },
    description: {
      en: "Explaining Rythu Bharosa, subsidized drip irrigation, high-yield seed distribution, and crop insurance coverage to the farmers.",
      te: "రైతు భరోసా, సబ్సిడీ డ్రిప్ పరికరాలు, నాణ్యమైన విత్తనాల పంపిణీ మరియు పంట బీమా గురించి రైతులకు వివరంగా తెలియజేయడం.",
    },
  },
  {
    id: 7,
    filename: "Training Day.jpg",
    situation: {
      en: "Farmer Training Session",
      te: "రైతులకు శిక్షణా తరగతి",
    },
    description: {
      en: "Conducting an interactive village meeting on modern organic compost, drone spraying, and sustainable crop rotation techniques.",
      te: "రైతు వేదిక వద్ద ఆధునిక సాగు పద్ధతులు, డ్రోన్ స్ప్రేయింగ్ మరియు సేంద్రీయ ఎరువుల తయారీపై రైతులకు ప్రత్యక్ష అవగాహన కల్పించడం.",
    },
  },
  {
    id: 8,
    filename: "Weather Alert.jpg",
    situation: {
      en: "Weather Alert & Harvest Safeguards",
      te: "వాతావరణ హెచ్చరిక – పంట రక్షణ",
    },
    description: {
      en: "Receiving an official IMD alert of heavy cyclone rains in 48 hours. Urgently advising farmers on harvest storage and canal drainage.",
      te: "మరో రెండు రోజుల్లో భారీ వర్షాలు వచ్చే అవకాశం ఉందని వాతావరణ శాఖ నుంచి హెచ్చరిక రావడంతో, పంట కోత భద్రత మరియు మురుగునీటి కాల్వల నిర్వహణపై రైతులకు తక్షణ సమాచారం ఇవ్వడం.",
    },
  },
  {
    id: 9,
    filename: "Encouraging Young Farmers.jpg",
    situation: {
      en: "Encouraging Young Agri-Entrepreneurs",
      te: "యువ రైతులకు మార్గదర్శనం",
    },
    description: {
      en: "Guiding young agriculture graduates and youth on polyhouse farming, natural organic cultivation, and agri-startups for a prosperous future.",
      te: "వ్యవసాయంలో మంచి భవిష్యత్ ఉందా అని అడిగిన యువకులకు పాలిహౌస్ సాగు, ఆర్గానిక్ ఫార్మింగ్ మరియు అగ్రి-స్టార్టప్ అవకాశాలను వివరించి ఉత్సాహం నింపడం.",
    },
  },
  {
    id: 10,
    filename: "Evening Reflection.jpg",
    situation: {
      en: "Evening Reflection – Sunset over Fields",
      te: "రోజు ముగింపు – సాయంత్రం సమీక్ష",
    },
    description: {
      en: "Heading back to the block office as the sun sets over lush green crops, feeling genuine fulfillment in helping rural farmers thrive.",
      te: "పచ్చని పొలాల మీదుగా సూర్యుడు అస్తమిస్తుండగా, రైతుల మొహాల్లో చిరునవ్వు చూసిన సంతృప్తితో సాయంత్రం కార్యాలయానికి తిరిగి రావడం.",
    },
  },
];

export const TEACHER_SITUATIONS: SimulationSituation[] = [
  {
    id: 1,
    filename: "Morning Lesson Planning.jpg",
    situation: {
      en: "Preparing for Class – 8:30 AM",
      te: "తరగతికి సన్నద్ధత – ఉదయం 8:30 AM",
    },
    description: {
      en: "Reaching school early to organize lesson plans, teaching aids, and activity sheets in the staff room before students arrive.",
      te: "విద్యార్థులు పాఠశాలకు రాకముందే స్టాఫ్ రూంలో కూర్చుని పాఠ్య ప్రణాళిక, బోధనా సామాగ్రి మరియు వర్క్‌షీట్లను సిద్ధం చేసుకోవడం.",
    },
  },
  {
    id: 2,
    filename: "Inspiring Morning Assembly.jpg",
    situation: {
      en: "School Morning Assembly",
      te: "ఉదయపు ప్రార్థనా సమావేశం (అసెంబ్లీ)",
    },
    description: {
      en: "Guiding students into orderly lines for the school assembly, leading the morning prayer, news reading, and motivational words.",
      te: "పాఠశాల ప్రార్థనా సమావేశంలో విద్యార్థుల క్రమశిక్షణ, ప్రార్థన, వార్తలు మరియు ప్రేరణాత్మక ఆలోచనలను పర్యవేక్షించడం.",
    },
  },
  {
    id: 3,
    filename: "Teaching lesson -1.jpg",
    situation: {
      en: "First Lesson – Introducing the Topic",
      te: "మొదటి పీరియడ్ – కొత్త పాఠం బోధన",
    },
    description: {
      en: "Writing key concepts on the blackboard and explaining a new chapter using simple real-world examples to spark curiosity.",
      te: "బ్లాక్‌బోర్డుపై ముఖ్యమైన అంశాలను రాస్తూ, నిత్యజీవిత ఉదాహరణలతో విద్యార్థులకు కొత్త పాఠాన్ని ఆసక్తికరంగా బోధించడం.",
    },
  },
  {
    id: 4,
    filename: "Supportive Classroom.jpg",
    situation: {
      en: "The Quiet Student – Gentle Encouragement",
      te: "మౌనంగా ఉండే విద్యార్థి – ఆప్యాయమైన ప్రోత్సాహం",
    },
    description: {
      en: "Noticing a quiet child who hesitates to ask questions. You step up to their desk with a warm smile, encouraging them to speak without fear.",
      te: "ఒక విద్యార్థి సందేహాలు అడగడానికి భయపడుతుండగా, వారి బెంచ్ దగ్గరకు వెళ్లి భయం పోగొట్టి స్నేహపూర్వకంగా ప్రోత్సహించడం.",
    },
  },
  {
    id: 5,
    filename: "A Caring Conversation.jpg",
    situation: {
      en: "A Caring Conversation – Break Time",
      te: "ఆప్యాయమైన సంభాషణ – విరామ సమయం",
    },
    description: {
      en: "During lunch break, a student opens up about personal stress at home. You listen patiently with warmth, empathy, and comfort.",
      te: "విరామ సమయంలో ఒక విద్యార్థి తన వ్యక్తిగత బాధను పంచుకోగా, ఓపికగా విని ధైర్యం మరియు మార్గదర్శకత్వం ఇవ్వడం.",
    },
  },
  {
    id: 6,
    filename: "Different Learners.jpg",
    situation: {
      en: "Mixed Abilities – Differentiated Learning",
      te: "వివిధ స్థాయిల విద్యార్థులు – సమాన పురోగతి",
    },
    description: {
      en: "Guiding fast learners with extension puzzles while spending devoted one-on-one time with children who need extra help.",
      te: "కొందరు విద్యార్థులు త్వరగా నేర్చుకుంటే, నెమ్మదిగా నేర్చుకునే వారికి ప్రత్యేక శ్రద్ధతో సులభంగా అర్థమయ్యేలా వివరించడం.",
    },
  },
  {
    id: 7,
    filename: "Exam invisilation.jpg",
    situation: {
      en: "Conducting School Exams & Invigilation",
      te: "పరీక్షల నిర్వహణ & ఇన్విజిలేషన్ విధులు",
    },
    description: {
      en: "Distributing question papers, maintaining peaceful discipline, and ensuring every student writes their exam with honesty and confidence.",
      te: "పరీక్షా హాల్లో విద్యార్థులు ప్రశాంతంగా, నిజాయితీగా పరీక్షలు రాసేలా నిశితంగా పర్యవేక్షించడం మరియు సందేహాలు నివృత్తి చేయడం.",
    },
  },
  {
    id: 8,
    filename: "Parent meeting.jpg",
    situation: {
      en: "Parent-Teacher Meeting (PTM)",
      te: "తల్లిదండ్రులతో సమావేశం (PTM)",
    },
    description: {
      en: "Meeting parents to discuss their child's academic progress, reassuring them with constructive praise and clear actionable guidance.",
      te: "పిల్లల మార్కులపై ఆందోళన చెందుతున్న తల్లిదండ్రులకు ధైర్యం చెబుతూ, విద్యార్థి ప్రతిభ మరియు అభివృద్ధి చెందాల్సిన అంశాలను వివరించడం.",
    },
  },
];

export const SWE_SITUATIONS: SimulationSituation[] = [
  {
    id: 1,
    filename: "Start the day..png",
    situation: {
      en: "Start the Day – 9:30 AM",
      te: "రోజు ప్రారంభం – ఉదయం 9:30 AM",
    },
    description: {
      en: "You open your laptop, grab coffee, and review new Slack messages, pull request notifications, and today's priority tasks.",
      te: "ఉదయం 9:30 గంటలకు ల్యాప్‌టాప్ తెరిచి కాఫీ తాగుతూ కొత్త స్లాక్ మెసేజ్‌లు, కోడ్ రివ్యూ నోటిఫికేషన్లు మరియు నేటి పనులను పరిశీలించడం.",
    },
  },
  {
    id: 2,
    filename: "Daily stand-up.png",
    situation: {
      en: "Daily Stand-up Meeting",
      te: "డైలీ స్టాండ్-అప్ సమావేశం (స్క్రమ్)",
    },
    description: {
      en: "Meeting the team for a 15-minute sync to share what you built yesterday, your goals for today, and any blockers in your way.",
      te: "రోజూ 15 నిమిషాల పాటు టీమ్‌తో కలిసి నిన్న పూర్తి చేసిన పనులు, ఈ రోజు చేయబోయే టాస్క్‌లు మరియు ఏమైనా అడ్డంకులు ఉన్నాయా అని చర్చించడం.",
    },
  },
  {
    id: 3,
    filename: "New feature request.png",
    situation: {
      en: "Understand the Problem – Feature Request",
      te: "సమస్యను అర్థం చేసుకోవడం – ఫీచర్ రిక్వెస్ట్",
    },
    description: {
      en: "Your product manager requests a new feature. You clarify user requirements, edge cases, and design the API architecture before coding.",
      te: "ప్రాడక్ట్ మేనేజర్ అడిగిన కొత్త ఫీచర్ అవసరాలు, వినియోగదారుల అనుభవం మరియు దానికి అవసరమైన సిస్టమ్ డిజైన్‌ను విశ్లేషించడం.",
    },
  },
  {
    id: 4,
    filename: "Write the code.png",
    situation: {
      en: "Deep Work – Writing the Code",
      te: "కోడింగ్ రాయడం – డీప్ ఫోకస్",
    },
    description: {
      en: "Putting on headphones to enter deep focus, writing clean modular code, unit tests, and optimizing database queries.",
      te: "హెడ్‌ఫోన్స్ పెట్టుకుని ఎలాంటి డిస్టర్బెన్స్ లేకుండా శుభ్రమైన, వేగవంతమైన కోడ్ మరియు టెస్ట్ కేస్‌లు రాయడం.",
    },
  },
  {
    id: 5,
    filename: "Lunch with the team.png",
    situation: {
      en: "Lunch with the Team",
      te: "టీమ్‌తో లంచ్ – స్నేహపూర్వక సంభాషణ",
    },
    description: {
      en: "Stepping away from the screen for lunch with colleagues, sharing laughs, discussing tech trends, and refreshing your mind.",
      te: "స్క్రీన్ నుంచి కాస్త విరామం తీసుకుని సహోద్యోగులతో కలిసి భోజనం చేయడం, కొత్త టెక్నాలజీలు మరియు సరదా విషయాలు పంచుకోవడం.",
    },
  },
  {
    id: 6,
    filename: "Something breaks.png",
    situation: {
      en: "The Bug Hunt – Debugging",
      te: "బగ్ హంట్ – లోపాన్ని గుర్తించడం",
    },
    description: {
      en: "Something unexpectedly breaks in testing. You inspect stack traces, reproduce the error, and isolate the hidden root cause.",
      te: "టెస్టింగ్‌లో అనుకోకుండా ఎర్రర్ రావడం. లాగ్స్ మరియు ఎర్రర్ కోడ్‌లను పరిశీలిస్తూ సమస్య ఎక్కడ ఉందో ఓపికగా కనిపెట్టడం.",
    },
  },
  {
    id: 7,
    filename: "Code review.png",
    situation: {
      en: "Peer Code Review",
      te: "కోడ్ రివ్యూ & ఫీడ్‌బ్యాక్ ఇవ్వడం",
    },
    description: {
      en: "Reviewing a teammate's pull request on GitHub, spotting a logical edge case, and leaving kind, constructive suggestions to improve code quality.",
      te: "గిట్‌హబ్‌లో కొలీగ్ రాసిన కోడ్‌ను తనిఖీ చేసి, పనితీరును మెరుగుపరచడానికి మరియు సెక్యూరిటీ సమస్యలు రాకుండా మంచి సలహాలు ఇవ్వడం.",
    },
  },
  {
    id: 8,
    filename: "Production emergency.png",
    situation: {
      en: "Production Emergency – Hotfix",
      te: "ప్రొడక్షన్ ఎమర్జెన్సీ – తక్షణ పరిష్కారం",
    },
    description: {
      en: "The app crashes and users are complaining. Staying calm, collaborating on war-room triage, and deploying a hotfix patch.",
      te: "లైవ్ యాప్‌లో సర్వర్ క్రాష్ అయి యూజర్లు ఫిర్యాదు చేయడం. కంగారు పడకుండా కారణాన్ని కనుగొని వెంటనే హాట్‌ఫిక్స్ ప్యాచ్ రిలీజ్ చేయడం.",
    },
  },
  {
    id: 9,
    filename: "Learn something new.png",
    situation: {
      en: "Continuous Learning – New Tech",
      te: "కొత్త టెక్నాలజీ నేర్చుకోవడం – స్కిల్స్ అప్‌గ్రేడ్",
    },
    description: {
      en: "A new tool or framework appears. You spend dedicated time experimenting, keeping your technical edge sharp.",
      te: "టెక్ ప్రపంచం వేగంగా మారుతున్నందున కొత్త ఏఐ టూల్స్, క్లౌడ్ టెక్నాలజీలు మరియు ఫ్రేమ్‌వర్క్‌లపై అవగాహన పెంచుకోవడం.",
    },
  },
  {
    id: 10,
    filename: "Wrap up.png",
    situation: {
      en: "Wrap Up & Tomorrow's Plan",
      te: "రోజు ముగింపు & రేపటి ప్రణాళిక – సాయంత్రం",
    },
    description: {
      en: "Pushing final git commits, writing notes, planning tomorrow's sprint tasks, and closing the laptop with satisfaction.",
      te: "కోడ్ కమిట్ చేసి, టికెట్లు అప్‌డేట్ చేసి, రేపు చేయాల్సిన పనులను నోట్ చేసుకుని సంతృప్తితో ల్యాప్‌టాప్ మూసివేయడం.",
    },
  },
];

export const CA_SITUATIONS: SimulationSituation[] = [
  {
    id: 1,
    filename: "Morning Planning.jpg",
    situation: {
      en: "Morning Planning – 9:30 AM",
      te: "కార్యాలయ ప్రారంభం – ఉదయం 9:30 AM",
    },
    description: {
      en: "Reaching the CA firm at 9:30 AM to review urgent tax filing deadlines, client appointments, and team audit schedules.",
      te: "ఉదయం 9:30 గంటలకు కార్యాలయానికి చేరుకుని టాక్స్ డెడ్‌లైన్లు, క్లయింట్ అపాయింట్‌మెంట్లు మరియు ఆడిట్ పనులను సమీక్షించడం.",
    },
  },
  {
    id: 2,
    filename: "Meeting a Small Business Owner.jpg",
    situation: {
      en: "Meeting a Small Business Owner",
      te: "చిన్న వ్యాపారవేత్తతో సంప్రదింపులు",
    },
    description: {
      en: "A local shop owner brings a bag of receipts, worried about accounts. You patiently organize their ledgers and simplify GST filing.",
      te: "ఖాతాలు అర్థం కావడం లేదని బిల్లుల బ్యాగుతో వచ్చిన వ్యాపారికి ఓపికగా ఖాతాలు సరిచేసి, జీఎస్టీ రిటర్న్స్ సులభంగా అర్థమయ్యేలా వివరించడం.",
    },
  },
  {
    id: 3,
    filename: "Tax Planning.jpg",
    situation: {
      en: "Smart Legal Tax Planning",
      te: "చట్టబద్ధమైన పన్ను ప్రణాళిక (టాక్స్ ప్లానింగ్)",
    },
    description: {
      en: "Guiding a young professional on deductions under Sections 80C and 80D, NPS, and home loans to save taxes completely within legal norms.",
      te: "ఒక ఉద్యోగికి చట్టబద్ధంగా 80C, 80D, ఎన్‌పీఎస్ ద్వారా ఆదాయపు పన్నును ఎలా ఆదా చేసుకోవాలో సరైన సలహాలు ఇవ్వడం.",
    },
  },
  {
    id: 4,
    filename: "Audit Day.jpg",
    situation: {
      en: "Corporate Audit Day – Verifying Books",
      te: "కార్పొరేట్ ఆడిట్ – ఖాతాల తనిఖీ",
    },
    description: {
      en: "Visiting a client company to examine balance sheets, bank reconciliations, inventory registers, and statutory compliance.",
      te: "కంపెనీకి వెళ్లి బ్యాలెన్స్ షీట్లు, బ్యాంక్ లావాదేవీలు మరియు నిబంధనల అమలును నిశితంగా పరిశీలించి ఆడిట్ రిపోర్ట్ సిద్ధం చేయడం.",
    },
  },
  {
    id: 5,
    filename: "Startup Planning.jpg",
    situation: {
      en: "Guiding Young Startup Founders",
      te: "స్టార్టప్ వ్యవస్థాపకులకు మార్గదర్శనం",
    },
    description: {
      en: "Two young entrepreneurs consult on private limited incorporation, DPIIT recognition, equity structuring, and early seed funding.",
      te: "కొత్తగా కంపెనీ ప్రారంభించాలనుకుంటున్న యువకులకు కంపెనీ రిజిస్ట్రేషన్, నిధుల సమీకరణ మరియు వాటాల కేటాయింపుపై సలహా ఇవ్వడం.",
    },
  },
  {
    id: 6,
    filename: "Honest Advice.jpg",
    situation: {
      en: "Ethical Integrity – Standing Firm",
      te: "వృత్తిపరమైన నిజాయితీ – సరైన సలహా",
    },
    description: {
      en: "When a client asks to 'adjust' profit figures, you stand firm on ICAI ethics and transparency, safeguarding their long-term credibility.",
      te: "లాభాలను తప్పుగా చూపించాలని క్లయింట్ కోరినప్పుడు, నిబంధనలకు కట్టుబడి చట్టబద్ధమైన నిజాయితీతో కూడిన మార్గాన్ని మాత్రమే నొక్కిచెప్పడం.",
    },
  },
  {
    id: 7,
    filename: "Learning Something New.jpg",
    situation: {
      en: "Continuous Learning – New Regulations",
      te: "కొత్త నిబంధనలు నేర్చుకోవడం",
    },
    description: {
      en: "Studying the latest Union Budget circulars, international tax treaties, and automated accounting software to keep advisory cutting-edge.",
      te: "తాజా కేంద్ర బడ్జెట్ మార్పులు, కొత్త టాక్స్ నిబంధనలు మరియు ఏఐ అకౌంటింగ్ సాఫ్ట్‌వేర్లపై అధ్యయనం చేసి నైపుణ్యాన్ని పెంచుకోవడం.",
    },
  },
  {
    id: 8,
    filename: "Closing day.jpg",
    situation: {
      en: "Closing the Day & Filing Ledgers",
      te: "రోజు ముగింపు – ఫైల్స్ సమీక్ష",
    },
    description: {
      en: "Work is neatly reconciled, digitally signed returns are filed with the portal, and you close files with professional peace of mind.",
      te: "రోజు పనులన్నీ పూర్తి చేసి, డిజిటల్ సిగ్నేచర్‌తో రిటర్న్స్ ఫైల్ చేసి, సంతృప్తితో సాయంత్రం కార్యాలయాన్ని ముగించడం.",
    },
  },
];

export const CareerSimulationModal: React.FC<CareerSimulationModalProps> = ({
  isOpen,
  onClose,
  onOpenBooking,
  initialLang = "en",
  careerId = "doctor",
}) => {
  const [lang, setLang] = useState<"en" | "te">(initialLang);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isCompleted, setIsCompleted] = useState<boolean>(false);

  // Reset progress when modal re-opens or career changes
  React.useEffect(() => {
    if (isOpen) {
      setCurrentIndex(0);
      setIsCompleted(false);
    }
  }, [isOpen, careerId]);

  if (!isOpen) return null;

  const careerKey = (careerId || "doctor").toLowerCase();
  const isLawyer = careerKey === "lawyer";
  const isBank = careerKey === "bank" || careerKey === "bank_po";
  const isNurse = careerKey === "nurse";
  const isArchitect = careerKey === "architect";
  const isAgri = careerKey === "agri" || careerKey === "agriculture" || careerKey === "agricultural_officer";
  const isTeacher = careerKey === "teacher";
  const isSwe = careerKey === "swe" || careerKey === "software_engineer" || careerKey === "software-engineer" || careerKey === "software";
  const isCa = careerKey === "ca" || careerKey === "chartered_accountant" || careerKey === "chartered-accountant";

  let situations = DOCTOR_SITUATIONS;
  let folder = "doctor";
  let localDir = "doctor";
  let iconNode = <Stethoscope className="w-3.5 h-3.5 sm:w-4 sm:h-4" />;
  let emoji = "🩺";
  let titleObj = { en: "Doctor: A Day in the Life", te: "డాక్టర్ దినచర్య" };
  let completionTitleObj = {
    en: "You Have Successfully Experienced a Day in the Life of a Doctor!",
    te: "మీరు డాక్టర్ దినచర్యను విజయవంతంగా పూర్తి చేశారు!",
  };
  let disclaimerObj = {
    en: "This simulation is provided for your reference to understand a doctor's typical routine. Please remember that everyday won't be the same! There is always a possibility you will be placed in tough, unpredictable medical situations that demand courage, patience, and composure.",
    te: "ఈ సిమ్యులేషన్ డాక్టర్ రోజువారీ దినచర్యను అవగాహన చేసుకోవడానికి మాత్రమే. ప్రతి రోజూ ఒకేలా ఉండదు! ఆసుపత్రిలో అనుకోని అత్యవసర పరిస్థితులు, తీవ్రమైన ఒత్తిడి ఉండే క్లిష్టమైన సమస్యలను డాక్టర్లు ఎప్పటికప్పుడు ఎదుర్కోవాల్సి ఉంటుంది.",
  };

  if (isNurse) {
    situations = NURSE_SITUATIONS;
    folder = "Nurse";
    localDir = "nurse";
    iconNode = <HeartPulse className="w-3.5 h-3.5 sm:w-4 sm:h-4" />;
    emoji = "🩺";
    titleObj = { en: "Nurse: A Day in the Life", te: "నర్సు దినచర్య" };
    completionTitleObj = {
      en: "You Have Successfully Experienced a Day in the Life of a Nurse!",
      te: "మీరు నర్సు దినచర్యను విజయవంతంగా పూర్తి చేశారు!",
    };
    disclaimerObj = {
      en: "This simulation is provided for your reference to understand a nurse's typical routine. Please remember that everyday won't be the same! There is always a possibility you will be placed in tough, unpredictable medical situations that demand courage, patience, and composure.",
      te: "ఈ సిమ్యులేషన్ నర్సు రోజువారీ దినచర్యను అవగాహన చేసుకోవడానికి మాత్రమే. ప్రతి రోజూ ఒకేలా ఉండదు! ఆసుపత్రిలో అనుకోని అత్యవసర పరిస్థితులు, రోగుల సంరక్షణలో తీవ్రమైన ఒత్తిడి ఉండే క్లిష్టమైన సమస్యలను నర్సులు ఎప్పటికప్పుడు ఎదుర్కోవాల్సి ఉంటుంది.",
    };
  } else if (isLawyer) {
    situations = LAWYER_SITUATIONS;
    folder = "Lawyer";
    localDir = "lawyer";
    iconNode = <Scale className="w-3.5 h-3.5 sm:w-4 sm:h-4" />;
    emoji = "⚖️";
    titleObj = { en: "Lawyer / Advocate: A Day in the Life", te: "లాయర్ / న్యాయవాది దినచర్య" };
    completionTitleObj = {
      en: "You Have Successfully Experienced a Day in the Life of a Lawyer!",
      te: "మీరు న్యాయవాది దినచర్యను విజయవంతంగా పూర్తి చేశారు!",
    };
    disclaimerObj = {
      en: "This simulation is provided for your reference to understand an advocate's typical routine. Please remember that everyday won't be the same! There is always a possibility you will be placed in tough legal situations and unpredictable courtroom debates that demand analytical composure, quick thinking, and integrity.",
      te: "ఈ సిమ్యులేషన్ న్యాయవాది రోజువారీ దినచర్యను అవగాహన చేసుకోవడానికి మాత్రమే. ప్రతి రోజూ ఒకేలా ఉండదు! కోర్టులో ఎదురయ్యే క్లిష్టమైన చట్టపరమైన సవాళ్లు, ఆకస్మిక వాదనలు మరియు తీవ్రమైన ఒత్తిడిని ఎదుర్కొనే సమయస్ఫూర్తి, ధైర్యం అవసరం.",
    };
  } else if (isBank) {
    situations = BANK_PO_SITUATIONS;
    folder = "bank_po";
    localDir = "bank_po";
    iconNode = <Landmark className="w-3.5 h-3.5 sm:w-4 sm:h-4" />;
    emoji = "🏦";
    titleObj = { en: "Bank PO: A Day in the Life", te: "బ్యాంక్ పీవో (PO) దినచర్య" };
    completionTitleObj = {
      en: "You Have Successfully Experienced a Day in the Life of a Bank PO!",
      te: "మీరు బ్యాంక్ ఆఫీసర్ దినచర్యను విజయవంతంగా పూర్తి చేశారు!",
    };
    disclaimerObj = {
      en: "This simulation is provided for your reference to understand a Bank Probationary Officer's typical routine. Please remember that everyday won't be the same! There is always a possibility you will handle high financial stakes, urgent audit requirements, or challenging customer situations that demand absolute accuracy, patience, and responsibility.",
      te: "ఈ సిమ్యులేషన్ బ్యాంక్ ప్రొబేషనరీ ఆఫీసర్ రోజువారీ దినచర్యను అవగాహన చేసుకోవడానికి మాత్రమే. ప్రతి రోజూ ఒకేలా ఉండదు! నగదు లావాదేవీల బాధ్యత, అనుకోని ఆడిట్ తనిఖీలు, ఖాతాదారుల సమస్యలు మరియు ఆర్థిక ఒత్తిడులను సమర్థవంతంగా ఎదుర్కొనే బాధ్యత ఎల్లప్పుడూ ఉంటుంది.",
    };
  } else if (isArchitect) {
    situations = ARCHITECT_SITUATIONS;
    folder = "architect";
    localDir = "architect";
    iconNode = <Compass className="w-3.5 h-3.5 sm:w-4 sm:h-4" />;
    emoji = "📐";
    titleObj = { en: "Architect: A Day in the Life", te: "ఆర్కిటెక్ట్ దినచర్య" };
    completionTitleObj = {
      en: "You Have Successfully Experienced a Day in the Life of an Architect!",
      te: "మీరు ఆర్కిటెక్ట్ దినచర్యను విజయవంతంగా పూర్తి చేశారు!",
    };
    disclaimerObj = {
      en: "This simulation is provided for your reference to understand an architect's typical routine. Please remember that everyday won't be the same! There is always a possibility you will manage complex municipal bylaws, sudden client revisions, material delays, or structural adjustments that demand spatial creativity, patience, and precise engineering harmony.",
      te: "ఈ సిమ్యులేషన్ ఆర్కిటెక్ట్ రోజువారీ దినచర్యను అవగాహన చేసుకోవడానికి మాత్రమే. ప్రతి రోజూ ఒకేలా ఉండదు! సైట్ వద్ద అనుకోని సమస్యలు, మున్సిపల్ అనుమతుల సవాళ్లు, క్లయింట్ మార్పులు మరియు నిర్మాణ వ్యయాలను సమర్థవంతంగా సమన్వయం చేయగల సృజనాత్మకత, ఓపిక ఎల్లప్పుడూ అవసరం.",
    };
  } else if (isAgri) {
    situations = AGRI_SITUATIONS;
    folder = "agricultural_officer";
    localDir = "agricultural_officer";
    iconNode = <Sprout className="w-3.5 h-3.5 sm:w-4 sm:h-4" />;
    emoji = "🌾";
    titleObj = { en: "Agricultural Officer: A Day in the Life", te: "వ్యవసాయ అధికారి (AO) దినచర్య" };
    completionTitleObj = {
      en: "You Have Successfully Experienced a Day in the Life of an Agricultural Officer!",
      te: "మీరు వ్యవసాయ అధికారి దినచర్యను విజయవంతంగా పూర్తి చేశారు!",
    };
    disclaimerObj = {
      en: "This simulation is provided for your reference to understand an Agricultural Officer's typical routine. Please remember that everyday won't be the same! There is always a possibility you will manage sudden pest outbreaks, unexpected monsoon floods, drought emergencies, or rural field inspections that demand deep scientific agricultural knowledge, stamina, and empathy for farmers.",
      te: "ఈ సిమ్యులేషన్ వ్యవసాయ అధికారి (AO) రోజువారీ దినచర్యను అవగాహన చేసుకోవడానికి మాత్రమే. ప్రతి రోజూ ఒకేలా ఉండదు! ఆకస్మిక చీడపీడల దాడి, అకాల వర్షాలు లేదా కరువు పరిస్థితులు మరియు గ్రామాల్లో క్షేత్రస్థాయి పరిశీలనలు ఎదురైనప్పుడు శాస్త్రీయ పరిజ్ఞానం, రైతు పట్ల దయ మరియు సమయస్ఫూర్తి ఎల్లప్పుడూ అవసరం.",
    };
  } else if (isTeacher) {
    situations = TEACHER_SITUATIONS;
    folder = "teacher";
    localDir = "teacher";
    iconNode = <GraduationCap className="w-3.5 h-3.5 sm:w-4 sm:h-4" />;
    emoji = "👩‍🏫";
    titleObj = { en: "Teacher: A Day in the Life", te: "టీచర్ (ఉపాధ్యాయుని) దినచర్య" };
    completionTitleObj = {
      en: "You Have Successfully Experienced a Day in the Life of a Teacher!",
      te: "మీరు ఉపాధ్యాయుని దినచర్యను విజయవంతంగా పూర్తి చేశారు!",
    };
    disclaimerObj = {
      en: "This simulation is provided for your reference to understand a teacher's typical routine. Please remember that everyday won't be the same! There is always a possibility you will manage diverse student emotions, lively classrooms, syllabus deadlines, or individualized learning challenges that demand deep patience, compassion, and dedication to inspiring young minds.",
      te: "ఈ సిమ్యులేషన్ ఉపాధ్యాయుని రోజువారీ దినచర్యను అవగాహన చేసుకోవడానికి మాత్రమే. ప్రతి రోజూ ఒకేలా ఉండదు! వివిధ రకాల మనస్తత్వాలు ఉన్న విద్యార్థులను అర్థం చేసుకోవడం, తరగతి గది క్రమశిక్షణ మరియు పాఠ్యాంశాల నిర్వహణకు అంకితభావం, అపారమైన ఓపిక మరియు విద్యార్థుల భవిష్యత్తును తీర్చిదిద్దాలనే తపన ఎల్లప్పుడూ అవసరం.",
    };
  } else if (isSwe) {
    situations = SWE_SITUATIONS;
    folder = "software_engineer";
    localDir = "software_engineer";
    iconNode = <Code2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />;
    emoji = "💻";
    titleObj = { en: "Software Engineer: A Day in the Life", te: "సాఫ్ట్‌వేర్ ఇంజనీర్ దినచర్య" };
    completionTitleObj = {
      en: "You Have Successfully Experienced a Day in the Life of a Software Engineer!",
      te: "మీరు సాఫ్ట్‌వేర్ ఇంజనీర్ దినచర్యను విజయవంతంగా పూర్తి చేశారు!",
    };
    disclaimerObj = {
      en: "This simulation is provided for your reference to understand a Software Engineer's typical routine. Please remember that everyday won't be the same! There is always a possibility you will face high-pressure production outages, tight sprint deadlines, complex architectural dilemmas, or tricky legacy bugs that demand analytical calm, continuous self-learning, and strong problem-solving perseverance.",
      te: "ఈ సిమ్యులేషన్ సాఫ్ట్‌వేర్ ఇంజనీర్ రోజువారీ దినచర్యను అవగాహన చేసుకోవడానికి మాత్రమే. ప్రతి రోజూ ఒకేలా ఉండదు! ప్రొడక్షన్ సర్వర్ ఎమర్జెన్సీలు, టైట్ స్ప్రింట్ డెడ్‌లైన్లు, సంక్లిష్టమైన సిస్టమ్ సమస్యలు వచ్చినప్పుడు సమయస్ఫూర్తి, నిరంతర అభ్యాసం మరియు ఓపికతో కూడిన సమస్య పరిష్కార సామర్థ్యం ఎల్లప్పుడూ అవసరం.",
    };
  } else if (isCa) {
    situations = CA_SITUATIONS;
    folder = "chartered_accountant";
    localDir = "chartered_accountant";
    iconNode = <Calculator className="w-3.5 h-3.5 sm:w-4 sm:h-4" />;
    emoji = "📊";
    titleObj = { en: "Chartered Accountant (CA): A Day in the Life", te: "చార్టర్డ్ అకౌంటెంట్ (CA) దినచర్య" };
    completionTitleObj = {
      en: "You Have Successfully Experienced a Day in the Life of a Chartered Accountant!",
      te: "మీరు చార్టర్డ్ అకౌంటెంట్ (CA) దినచర్యను విజయవంతంగా పూర్తి చేశారు!",
    };
    disclaimerObj = {
      en: "This simulation is provided for your reference to understand a Chartered Accountant's typical routine. Please remember that everyday won't be the same! There is always a possibility you will manage intense tax season deadlines, intricate audit scrutiny, complex forensic reviews, or challenging regulatory inquiries that demand uncompromising accuracy, deep financial acumen, and high ethical integrity.",
      te: "ఈ సిమ్యులేషన్ చార్టర్డ్ అకౌంటెంట్ (CA) రోజువారీ దినచర్యను అవగాహన చేసుకోవడానికి మాత్రమే. ప్రతి రోజూ ఒకేలా ఉండదు! టాక్స్ ఫైలింగ్ సీజన్ల తీవ్రమైన ఒత్తిడి, ఆడిట్ తనిఖీలు మరియు సంక్లిష్టమైన ఆర్థిక నిబంధనలను ఎదుర్కోవడానికి సంపూర్ణ ఖచ్చితత్వం, లోతైన ఆర్థిక పరిజ్ఞానం మరియు నైతిక సమగ్రత ఎల్లప్పుడూ అవసరం.",
    };
  }

  const totalSituations = situations.length;
  const current = situations[currentIndex];
  const isTe = lang === "te";

  const handleNext = () => {
    if (currentIndex < totalSituations - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const handleReset = () => {
    setCurrentIndex(0);
    setIsCompleted(false);
  };

  const localFallbackUrl = `/simulation_pics/${localDir}/${encodeURIComponent(current.filename)}`;
  const remoteUrl = `${SUPABASE_STORAGE_BASE}/${folder}/${encodeURIComponent(current.filename)}`;

  return (
    <div className="fixed inset-0 z-50 bg-stone-900/60 backdrop-blur-xs flex items-center justify-center p-2 sm:p-4 animate-in fade-in duration-200">
      <div className="w-full max-w-lg bg-[#FAF8F5] border border-stone-200/90 rounded-2xl sm:rounded-3xl shadow-2xl flex flex-col relative overflow-hidden max-h-[95vh] sm:max-h-[92vh] text-stone-900">
        {/* ── Top Bar ── */}
        <div className="bg-[#F4EFEA] border-b border-[#E6DDD1] px-3 py-2 sm:px-4 sm:py-3 flex items-center justify-between z-20 shrink-0">
          <div className="flex items-center gap-2 sm:gap-2.5 min-w-0">
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg sm:rounded-xl bg-emerald-100 border border-emerald-300 flex items-center justify-center text-emerald-700 text-xs sm:text-sm font-bold shrink-0">
              {iconNode}
            </div>
            <div className="min-w-0">
              <div className="text-[9px] sm:text-[10px] font-black uppercase tracking-wider text-emerald-700 truncate">
                {isTe ? "కెరీర్ సిమ్యులేషన్" : "Career Simulation"}
              </div>
              <div className="text-[11px] sm:text-xs font-bold text-stone-900 truncate">
                {titleObj[lang]}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            <button
              type="button"
              onClick={() => setLang(isTe ? "en" : "te")}
              className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full bg-white hover:bg-stone-100 text-stone-700 text-[10px] sm:text-[11px] font-bold border border-stone-200 shadow-2xs cursor-pointer active:scale-95 transition-all flex items-center gap-1"
            >
              <Languages className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-emerald-600" />
              <span>{isTe ? "English" : "తెలుగు"}</span>
            </button>

            <button
              type="button"
              onClick={handleReset}
              className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white hover:bg-stone-100 border border-stone-200 text-xs flex items-center justify-center text-stone-600 hover:text-stone-900 shadow-2xs cursor-pointer"
              title="Reset"
            >
              <RotateCcw className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            </button>

            <button
              type="button"
              onClick={onClose}
              className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white hover:bg-rose-50 hover:text-rose-600 border border-stone-200 text-xs flex items-center justify-center text-stone-600 shadow-2xs cursor-pointer transition-colors"
              title="Close"
            >
              <X className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </button>
          </div>
        </div>

        {/* ── Content View: Step-by-Step Situations OR Completion Summary ── */}
        {!isCompleted ? (
          <div className="flex-1 overflow-y-auto p-3 sm:p-5 flex flex-col justify-between space-y-2.5 sm:space-y-4">
            {/* Step Progress Tracker */}
            <div className="flex items-center justify-between text-stone-500 font-semibold px-0.5">
              <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-wider text-emerald-700">
                {isTe ? `పరిస్థితి ${current.id} / ${totalSituations}` : `Situation ${current.id} of ${totalSituations}`}
              </span>
              <div className="flex items-center gap-1 sm:gap-1.5">
                {situations.map((s, idx) => (
                  <span
                    key={s.id}
                    className={`h-1 sm:h-1.5 rounded-full transition-all ${
                      idx === currentIndex
                        ? "w-4 sm:w-5 bg-emerald-600"
                        : idx < currentIndex
                        ? "w-1.5 sm:w-2 bg-emerald-300"
                        : "w-1.5 sm:w-2 bg-stone-200"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Situation Image (Compact on mobile so full content fits without scrolling) */}
            <div className="rounded-xl sm:rounded-2xl overflow-hidden border border-stone-200 bg-white shadow-xs flex items-center justify-center p-1 sm:p-2">
              <img
                src={localFallbackUrl}
                alt={current.situation[lang]}
                className="w-full max-h-[175px] xs:max-h-[210px] sm:max-h-[310px] object-contain rounded-lg sm:rounded-xl"
                loading="eager"
                onError={(e) => {
                  if (e.currentTarget.src !== remoteUrl) {
                    e.currentTarget.src = remoteUrl;
                  }
                }}
              />
            </div>

            {/* Description Text Under Image */}
            <div className="p-2.5 sm:p-4 rounded-xl sm:rounded-2xl bg-white border border-[#E8DFD3] shadow-2xs space-y-0.5 sm:space-y-1.5 text-left">
              <h3 className="text-xs sm:text-base font-extrabold text-stone-900 leading-tight">
                {current.situation[lang]}
              </h3>
              <p className="text-[11px] sm:text-sm text-stone-600 font-medium leading-snug sm:leading-relaxed">
                {current.description[lang]}
              </p>
            </div>

            {/* Navigation Buttons: Previous & Continue */}
            <div className="flex items-center gap-2 pt-0.5 sm:pt-1 shrink-0">
              {currentIndex > 0 && (
                <button
                  type="button"
                  onClick={handlePrev}
                  className="px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl bg-white hover:bg-stone-100 text-stone-700 border border-stone-200 font-bold text-xs uppercase cursor-pointer transition-all flex items-center gap-1 sm:gap-1.5 shadow-2xs"
                >
                  <ArrowLeft className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                  <span>{isTe ? "వెనక్కి" : "Previous"}</span>
                </button>
              )}

              <button
                type="button"
                onClick={handleNext}
                className="flex-1 py-2.5 sm:py-3.5 rounded-xl sm:rounded-2xl bg-stone-900 hover:bg-stone-800 text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider shadow-md hover:shadow-lg cursor-pointer active:scale-98 transition-all flex items-center justify-center gap-1.5 sm:gap-2"
              >
                <span>
                  {currentIndex === totalSituations - 1
                    ? isTe
                      ? "పూర్తి చేయండి"
                      : "Complete Simulation"
                    : isTe
                    ? "కొనసాగించండి"
                    : "Continue"}
                </span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </button>
            </div>
          </div>
        ) : (
          /* ── Simulation Completed Screen ── */
          <div className="flex-1 overflow-y-auto p-3 sm:p-6 space-y-3 sm:space-y-4 text-left animate-in fade-in duration-300">
            {/* Header / Celebration */}
            <div className="text-center pb-0.5 sm:pb-1">
              <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-emerald-100 border-2 border-emerald-300 text-emerald-700 mx-auto flex items-center justify-center text-xl sm:text-2xl shadow-xs mb-1.5 sm:mb-2">
                {emoji}
              </div>
              <span className="text-[9px] sm:text-[10px] font-black tracking-widest uppercase bg-emerald-100 text-emerald-800 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full border border-emerald-300">
                {isTe ? "సిమ్యులేషన్ విజయవంతంగా పూర్తయింది" : "SIMULATION SUCCESSFULLY COMPLETED"}
              </span>
              <h2 className="text-sm sm:text-xl font-extrabold text-stone-900 tracking-tight mt-1.5 sm:mt-2.5 leading-snug">
                {completionTitleObj[lang]}
              </h2>
            </div>

            {/* Important Reference Disclaimer Card (as requested) */}
            <div className="p-3 sm:p-5 rounded-xl sm:rounded-2xl bg-amber-50/90 border border-amber-300/90 space-y-1 sm:space-y-2 shadow-2xs">
              <div className="flex items-center gap-1.5 text-[11px] sm:text-sm font-black uppercase text-amber-900 tracking-wider">
                <AlertTriangle className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0 text-amber-600" />
                <span>{isTe ? "విద్యార్థుల కోసం ముఖ్య గమనిక:" : "Important Note for Students:"}</span>
              </div>
              <p className="text-[11px] sm:text-sm text-amber-900/90 font-medium leading-relaxed">
                {disclaimerObj[lang]}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 sm:pt-4 flex gap-2 sm:gap-3">
              <button
                type="button"
                onClick={handleReset}
                className="flex-1 py-2.5 sm:py-3.5 rounded-xl sm:rounded-2xl bg-white hover:bg-stone-100 text-stone-800 font-bold text-xs uppercase border border-stone-200 shadow-2xs cursor-pointer transition-all flex items-center justify-center gap-1 sm:gap-1.5"
              >
                <RotateCcw className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                <span>{isTe ? "మళ్లీ చూడండి" : "Replay"}</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  onClose();
                  onOpenBooking();
                }}
                className="flex-1 py-2.5 sm:py-3.5 rounded-xl sm:rounded-2xl bg-stone-900 hover:bg-stone-800 text-white font-extrabold text-xs uppercase cursor-pointer transition-all flex items-center justify-center gap-1 sm:gap-1.5 shadow-md hover:shadow-lg"
              >
                <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span>{isTe ? "కౌన్సెలింగ్ బుక్ చేయండి" : "Book Guidance"}</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
