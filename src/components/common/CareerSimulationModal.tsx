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

  const isNurse = careerId === "nurse";
  const situations = isNurse ? NURSE_SITUATIONS : DOCTOR_SITUATIONS;
  const folder = isNurse ? "Nurse" : "doctor";
  const localDir = isNurse ? "nurse" : "doctor";
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

  const imageUrl = `${SUPABASE_STORAGE_BASE}/${folder}/${encodeURIComponent(current.filename)}`;
  const localFallbackUrl = `/simulation_pics/${localDir}/${encodeURIComponent(current.filename)}`;

  return (
    <div className="fixed inset-0 z-50 bg-stone-900/60 backdrop-blur-xs flex items-center justify-center p-2 sm:p-4 animate-in fade-in duration-200">
      <div className="w-full max-w-lg bg-[#FAF8F5] border border-stone-200/90 rounded-2xl sm:rounded-3xl shadow-2xl flex flex-col relative overflow-hidden max-h-[95vh] sm:max-h-[92vh] text-stone-900">
        {/* ── Top Bar ── */}
        <div className="bg-[#F4EFEA] border-b border-[#E6DDD1] px-3 py-2 sm:px-4 sm:py-3 flex items-center justify-between z-20 shrink-0">
          <div className="flex items-center gap-2 sm:gap-2.5 min-w-0">
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg sm:rounded-xl bg-emerald-100 border border-emerald-300 flex items-center justify-center text-emerald-700 text-xs sm:text-sm font-bold shrink-0">
              {isNurse ? <HeartPulse className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> : <Stethoscope className="w-3.5 h-3.5 sm:w-4 sm:h-4" />}
            </div>
            <div className="min-w-0">
              <div className="text-[9px] sm:text-[10px] font-black uppercase tracking-wider text-emerald-700 truncate">
                {isTe ? "కెరీర్ సిమ్యులేషన్" : "Career Simulation"}
              </div>
              <div className="text-[11px] sm:text-xs font-bold text-stone-900 truncate">
                {isNurse
                  ? isTe
                    ? "నర్సు దినచర్య"
                    : "Nurse: A Day in the Life"
                  : isTe
                  ? "డాక్టర్ దినచర్య"
                  : "Doctor: A Day in the Life"}
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
                src={imageUrl}
                alt={current.situation[lang]}
                className="w-full max-h-[175px] xs:max-h-[210px] sm:max-h-[310px] object-contain rounded-lg sm:rounded-xl"
                loading="eager"
                onError={(e) => {
                  if (e.currentTarget.src !== localFallbackUrl) {
                    e.currentTarget.src = localFallbackUrl;
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
                🩺
              </div>
              <span className="text-[9px] sm:text-[10px] font-black tracking-widest uppercase bg-emerald-100 text-emerald-800 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full border border-emerald-300">
                {isTe ? "సిమ్యులేషన్ విజయవంతంగా పూర్తయింది" : "SIMULATION SUCCESSFULLY COMPLETED"}
              </span>
              <h2 className="text-sm sm:text-xl font-extrabold text-stone-900 tracking-tight mt-1.5 sm:mt-2.5 leading-snug">
                {isNurse
                  ? isTe
                    ? "మీరు నర్సు దినచర్యను విజయవంతంగా పూర్తి చేశారు!"
                    : "You Have Successfully Experienced a Day in the Life of a Nurse!"
                  : isTe
                  ? "మీరు డాక్టర్ దినచర్యను విజయవంతంగా పూర్తి చేశారు!"
                  : "You Have Successfully Experienced a Day in the Life of a Doctor!"}
              </h2>
            </div>

            {/* Important Reference Disclaimer Card (as requested) */}
            <div className="p-3 sm:p-5 rounded-xl sm:rounded-2xl bg-amber-50/90 border border-amber-300/90 space-y-1 sm:space-y-2 shadow-2xs">
              <div className="flex items-center gap-1.5 text-[11px] sm:text-sm font-black uppercase text-amber-900 tracking-wider">
                <AlertTriangle className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0 text-amber-600" />
                <span>{isTe ? "విద్యార్థుల కోసం ముఖ్య గమనిక:" : "Important Note for Students:"}</span>
              </div>
              <p className="text-[11px] sm:text-sm text-amber-900/90 font-medium leading-relaxed">
                {isNurse
                  ? isTe
                    ? "ఈ సిమ్యులేషన్ నర్సు రోజువారీ దినచర్యను అవగాహన చేసుకోవడానికి మాత్రమే. ప్రతి రోజూ ఒకేలా ఉండదు! ఆసుపత్రిలో అనుకోని అత్యవసర పరిస్థితులు, రోగుల సంరక్షణలో తీవ్రమైన ఒత్తిడి ఉండే క్లిష్టమైన సమస్యలను నర్సులు ఎప్పటికప్పుడు ఎదుర్కోవాల్సి ఉంటుంది."
                    : "This simulation is provided for your reference to understand a nurse's typical routine. Please remember that everyday won't be the same! There is always a possibility you will be placed in tough, unpredictable medical situations that demand courage, patience, and composure."
                  : isTe
                  ? "ఈ సిమ్యులేషన్ డాక్టర్ రోజువారీ దినచర్యను అవగాహన చేసుకోవడానికి మాత్రమే. ప్రతి రోజూ ఒకేలా ఉండదు! ఆసుపత్రిలో అనుకోని అత్యవసర పరిస్థితులు, తీవ్రమైన ఒత్తిడి ఉండే క్లిష్టమైన సమస్యలను డాక్టర్లు ఎప్పటికప్పుడు ఎదుర్కోవాల్సి ఉంటుంది."
                  : "This simulation is provided for your reference to understand a doctor's typical routine. Please remember that everyday won't be the same! There is always a possibility you will be placed in tough, unpredictable medical situations that demand courage, patience, and composure."}
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
                <Calendar className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                <span>{isTe ? "కౌన్సెలింగ్ బుక్ చేయండి" : "Book Guidance"}</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
