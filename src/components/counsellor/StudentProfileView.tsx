import { useState, useEffect } from "react";
import {
  UserCheck,
  FileDown,
  RotateCcw,
  Home,
  GraduationCap,
  BookOpen,
  Compass,
  HeartPulse,
  Info,
  MessageCircle,
  Landmark,
  FilePlus,
  FolderOpen,
  ArrowLeft,
  Eye,
  Pencil,
  Trash2,
  Save,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
interface SavedProfile { [key: string]: any; id: string; savedAt: string; studentName: string; studentClass: string; school: string; }

const STORAGE_KEY = "wabi_student_profiles";

export const StudentProfileView = ({ counsellorName }: { counsellorName: string }) => {
  // ─── View management ─────────────────────────────────────────────
  const [view, setView] = useState<"landing" | "create" | "saved" | "view_profile">("landing");
  const [savedProfiles, setSavedProfiles] = useState<SavedProfile[]>([]);
  const [editingProfileId, setEditingProfileId] = useState<string | null>(null);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) setSavedProfiles(JSON.parse(stored));
    } catch { /* ignore */ }
  }, []);

  // ─── Section A: ABOUT YOU ──────────────────────────────────────────
  const [name, setName] = useState("");
  const [studentClass, setStudentClass] = useState("");
  const [section, setSection] = useState("");
  const [school, setSchool] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState<"Boy" | "Girl" | "">("");
  const [caste, setCaste] = useState("");
  const [villageTown, setVillageTown] = useState("");
  const [mandal, setMandal] = useState("");
  const [district, setDistrict] = useState("");
  const [dob, setDob] = useState("");
  const [fillerRole, setFillerRole] = useState("");

  // ─── Section B: YOUR FAMILY ─────────────────────────────────────────
  // Q1: Who lives in your house?
  const [livesWithFather, setLivesWithFather] = useState(false);
  const [livesWithMother, setLivesWithMother] = useState(false);
  const [livesWithBrothers, setLivesWithBrothers] = useState(false);
  const [brotherCount, setBrotherCount] = useState("");
  const [livesWithSisters, setLivesWithSisters] = useState(false);
  const [sisterCount, setSisterCount] = useState("");
  const [livesWithGrandparents, setLivesWithGrandparents] = useState(false);
  const [livesWithOtherRelative, setLivesWithOtherRelative] = useState(false);

  // Q2: Are your parents:
  const [parentsStatus, setParentsStatus] = useState("");
  const [parentsStatusOther, setParentsStatusOther] = useState("");

  // Q3: What work does your father do?
  const [fatherWorkType, setFatherWorkType] = useState<"not_applicable" | "other" | "">("");
  const [fatherWorkDetail, setFatherWorkDetail] = useState("");

  // Q4: What work does your mother do?
  const [motherWorkType, setMotherWorkType] = useState<"homemaker" | "not_applicable" | "other" | "">("");
  const [motherWorkDetail, setMotherWorkDetail] = useState("");

  // Q5: Is there any other adult in the house who earns money?
  const [otherEarners, setOtherEarners] = useState<"none" | "yes" | "">("");
  const [otherEarnersDetail, setOtherEarnersDetail] = useState("");

  // Q6: Are both your parents able to work and earn right now?
  const [parentsWorkingAbility, setParentsWorkingAbility] = useState("");

  // Q7: Are you the eldest child in your family?
  const [isEldestChild, setIsEldestChild] = useState<"Yes" | "No" | "">("");

  // Q8: Do you have older brothers or sisters? What are they doing now?
  const [olderSiblingsStatus, setOlderSiblingsStatus] = useState<{
    studying: boolean;
    working: boolean;
    married: boolean;
    atHome: boolean;
    notApplicable: boolean;
  }>({
    studying: false,
    working: false,
    married: false,
    atHome: false,
    notApplicable: false,
  });
  const [olderSiblingsDetail, setOlderSiblingsDetail] = useState("");

  // Q9: Your house is:
  const [houseType, setHouseType] = useState("");

  // Q10: Your house has:
  const [houseAmenities, setHouseAmenities] = useState<{
    electricity: boolean;
    tapWaterOrBorewell: boolean;
    none: boolean;
  }>({
    electricity: false,
    tapWaterOrBorewell: false,
    none: false,
  });

  // Q11: Does your family have a ration card?
  const [rationCard, setRationCard] = useState("");

  // Q12: Does your family receive any government pension or scheme support?
  const [pensionSchemes, setPensionSchemes] = useState<{
    oldAgeWidowDisability: boolean;
    otherScheme: boolean;
    no: boolean;
    notSure: boolean;
  }>({
    oldAgeWidowDisability: false,
    otherScheme: false,
    no: false,
    notSure: false,
  });

  // Q13: How does your family usually travel?
  const [travelModes, setTravelModes] = useState<{
    twoWheeler: boolean;
    car: boolean;
    busOrAuto: boolean;
    walkOrCycle: boolean;
    mixed: boolean;
  }>({
    twoWheeler: false,
    car: false,
    busOrAuto: false,
    walkOrCycle: false,
    mixed: false,
  });

  // Q14: Do you have a smartphone or computer at home that you can use for studies?
  const [studyDevice, setStudyDevice] = useState("");

  // Q15: Do you have a quiet place at home to study?
  const [quietStudyPlace, setQuietStudyPlace] = useState("");

  // Q16: Does anyone in your family currently have a loan to repay?
  const [familyLoan, setFamilyLoan] = useState("");

  // Q17: After Class 10, will you be expected to start earning soon, or can you continue studying?
  const [earningExpectation, setEarningExpectation] = useState("");

  // Q18: Is there any family responsibility that takes up your time outside school?
  const [familyResponsibilityType, setFamilyResponsibilityType] = useState<"None" | "Yes" | "">("");
  const [familyResponsibilityDetail, setFamilyResponsibilityDetail] = useState("");

  // ─── Section D: YOUR STUDIES & ACTIVITIES ───────────────────────────
  // Q19: Which subjects do you like the most? (Tick up to 3)
  const [likedSubjects, setLikedSubjects] = useState<string[]>([]);

  // Q20: Which subjects do you find most difficult?
  const [difficultSubjects, setDifficultSubjects] = useState<string[]>([]);

  // Q21: How would you describe your marks generally?
  const [marksDescription, setMarksDescription] = useState("");

  // Q22: Do you attend any tuition or extra coaching outside school?
  const [tuitionAttendance, setTuitionAttendance] = useState("");

  // Q23: Have you ever repeated a class, or been absent from school for a long period?
  const [repeatedClassType, setRepeatedClassType] = useState<"No" | "Yes" | "">("");
  const [repeatedClassDetail, setRepeatedClassDetail] = useState("");

  // Q24: Do you take part in any of these? (Tick all that apply)
  const [extracurriculars, setExtracurriculars] = useState<{
    sports: boolean;
    arts: boolean;
    musicDance: boolean;
    debateQuiz: boolean;
    nccScouts: boolean;
    schoolClubs: boolean;
    none: boolean;
  }>({
    sports: false,
    arts: false,
    musicDance: false,
    debateQuiz: false,
    nccScouts: false,
    schoolClubs: false,
    none: false,
  });

  // Q25: Outside school, do you spend time on any skill or hobby regularly?
  const [hobbyType, setHobbyType] = useState<"None" | "Yes" | "">("");
  const [hobbyDetail, setHobbyDetail] = useState("");

  // ─── Section E: HOW YOU SEE YOUR FUTURE ──────────────────────────────
  // Q26: Has anyone spoken to you about which career to choose?
  const [careerDiscussion, setCareerDiscussion] = useState("");

  // Q27: Do you know what you want to become?
  const [careerCertainty, setCareerCertainty] = useState("");

  // Q28: If you know, which career or field is on your mind right now?
  const [careerOnMind, setCareerOnMind] = useState("");

  // Q29: Do you know anyone in your family or close circle working in a job you admire?
  const [admiredRoleModel, setAdmiredRoleModel] = useState("");

  // ─── Section F: YOUR HEALTH & WELL-BEING ──────────────────────────────
  // Q30: Do you wear spectacles or contact lenses?
  const [wearsGlasses, setWearsGlasses] = useState("");

  // Q31: When was your eyesight last tested?
  const [eyesightTested, setEyesightTested] = useState("");

  // Q32: Colour vision difficulty (e.g. red and green)?
  const [colourVisionDifficulty, setColourVisionDifficulty] = useState("");

  // Q33: Difficulty hearing in class, or on phone?
  const [hearingDifficulty, setHearingDifficulty] = useState("");

  // Q34: Difficulty with speech for which support is desired?
  const [speechDifficulty, setSpeechDifficulty] = useState("");

  // Q35: Height and weight
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [heightWeightUnknown, setHeightWeightUnknown] = useState(false);

  // Q36: Long-term health condition needing regular medicine/check-ups?
  const [longTermHealthCondition, setLongTermHealthCondition] = useState("");

  // Q37: Work you would find difficult for health reasons
  const [healthWorkDifficulties, setHealthWorkDifficulties] = useState<{
    standingWalking: boolean;
    heavyPhysical: boolean;
    nightShifts: boolean;
    outdoorsDust: boolean;
    screenWork: boolean;
    heavyWeights: boolean;
    none: boolean;
  }>({
    standingWalking: false,
    heavyPhysical: false,
    nightShifts: false,
    outdoorsDust: false,
    screenWork: false,
    heavyWeights: false,
    none: false,
  });

  // Q38: Allergies affecting work environment
  const [allergiesType, setAllergiesType] = useState<"No" | "Yes" | "">("");
  const [allergiesDetail, setAllergiesDetail] = useState("");

  // Q39: Disability certificate (Sadarem) or condition
  const [disabilityCertificate, setDisabilityCertificate] = useState("");

  // Q40: Major illness, surgery, or injury that kept away from school?
  const [majorIllnessOrInjury, setMajorIllnessOrInjury] = useState("");

  // Q41: Regular medical expenses every month?
  const [regularMedicalExpenses, setRegularMedicalExpenses] = useState("");

  // Q42: Ongoing problem with stomach or digestion?
  const [stomachDigestionProblem, setStomachDigestionProblem] = useState("");

  // Q43: Ongoing skin problem?
  const [skinProblem, setSkinProblem] = useState("");
  const [skinProblemDuration, setSkinProblemDuration] = useState("");
  const [skinProblemAffects, setSkinProblemAffects] = useState<{
    sleep: boolean;
    comingToSchool: boolean;
    feelUncomfortable: boolean;
    none: boolean;
  }>({
    sleep: false,
    comingToSchool: false,
    feelUncomfortable: false,
    none: false,
  });

  // Q44: Is there anything worrying you that you would like to talk about?
  const [worryingTalkType, setWorryingTalkType] = useState<"No" | "Yes" | "">("");
  const [worryingTalkDetail, setWorryingTalkDetail] = useState("");

  const SUBJECT_OPTIONS = [
    "Telugu",
    "Hindi",
    "English",
    "Maths",
    "Physical Science",
    "Biology",
    "Social Studies",
    "Computers",
    "Drawing",
    "Physical Education",
  ];

  const handleSubjectToggle = (
    subject: string,
    list: string[],
    setList: React.Dispatch<React.SetStateAction<string[]>>,
    maxCount?: number
  ) => {
    if (list.includes(subject)) {
      setList(list.filter((s) => s !== subject));
    } else {
      if (maxCount && list.length >= maxCount) {
        alert(`You can select up to ${maxCount} subjects.`);
        return;
      }
      setList([...list, subject]);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const handleReset = () => {
    if (window.confirm("Are you sure you want to clear the entire questionnaire?")) {
      setName("");
      setStudentClass("");
      setSection("");
      setSchool("");
      setAge("");
      setGender("");
      setCaste("");
      setVillageTown("");
      setMandal("");
      setDistrict("");
      setDob("");
      setFillerRole("");
      setLivesWithFather(false);
      setLivesWithMother(false);
      setLivesWithBrothers(false);
      setBrotherCount("");
      setLivesWithSisters(false);
      setSisterCount("");
      setLivesWithGrandparents(false);
      setLivesWithOtherRelative(false);
      setParentsStatus("");
      setParentsStatusOther("");
      setFatherWorkType("");
      setFatherWorkDetail("");
      setMotherWorkType("");
      setMotherWorkDetail("");
      setOtherEarners("");
      setOtherEarnersDetail("");
      setParentsWorkingAbility("");
      setIsEldestChild("");
      setOlderSiblingsStatus({
        studying: false,
        working: false,
        married: false,
        atHome: false,
        notApplicable: false,
      });
      setOlderSiblingsDetail("");
      setHouseType("");
      setHouseAmenities({ electricity: false, tapWaterOrBorewell: false, none: false });
      setRationCard("");
      setPensionSchemes({ oldAgeWidowDisability: false, otherScheme: false, no: false, notSure: false });
      setTravelModes({ twoWheeler: false, car: false, busOrAuto: false, walkOrCycle: false, mixed: false });
      setStudyDevice("");
      setQuietStudyPlace("");
      setFamilyLoan("");
      setEarningExpectation("");
      setFamilyResponsibilityType("");
      setFamilyResponsibilityDetail("");
      setLikedSubjects([]);
      setDifficultSubjects([]);
      setMarksDescription("");
      setTuitionAttendance("");
      setRepeatedClassType("");
      setRepeatedClassDetail("");
      setExtracurriculars({
        sports: false,
        arts: false,
        musicDance: false,
        debateQuiz: false,
        nccScouts: false,
        schoolClubs: false,
        none: false,
      });
      setHobbyType("");
      setHobbyDetail("");
      setCareerDiscussion("");
      setCareerCertainty("");
      setCareerOnMind("");
      setAdmiredRoleModel("");
      setWearsGlasses("");
      setEyesightTested("");
      setColourVisionDifficulty("");
      setHearingDifficulty("");
      setSpeechDifficulty("");
      setHeight("");
      setWeight("");
      setHeightWeightUnknown(false);
      setLongTermHealthCondition("");
      setHealthWorkDifficulties({
        standingWalking: false,
        heavyPhysical: false,
        nightShifts: false,
        outdoorsDust: false,
        screenWork: false,
        heavyWeights: false,
        none: false,
      });
      setAllergiesType("");
      setAllergiesDetail("");
      setDisabilityCertificate("");
      setMajorIllnessOrInjury("");
      setRegularMedicalExpenses("");
      setStomachDigestionProblem("");
      setSkinProblem("");
      setSkinProblemDuration("");
      setSkinProblemAffects({
        sleep: false,
        comingToSchool: false,
        feelUncomfortable: false,
        none: false,
      });
      setWorryingTalkType("");
      setWorryingTalkDetail("");
    }
  };

  const silentReset = () => {
    setName(""); setStudentClass(""); setSection(""); setSchool(""); setAge("");
    setGender(""); setCaste(""); setVillageTown(""); setMandal(""); setDistrict("");
    setDob(""); setFillerRole("");
    setLivesWithFather(false); setLivesWithMother(false); setLivesWithBrothers(false);
    setBrotherCount(""); setLivesWithSisters(false); setSisterCount("");
    setLivesWithGrandparents(false); setLivesWithOtherRelative(false);
    setParentsStatus(""); setParentsStatusOther("");
    setFatherWorkType(""); setFatherWorkDetail(""); setMotherWorkType(""); setMotherWorkDetail("");
    setOtherEarners(""); setOtherEarnersDetail(""); setParentsWorkingAbility("");
    setIsEldestChild(""); setOlderSiblingsStatus({ studying: false, working: false, married: false, atHome: false, notApplicable: false }); setOlderSiblingsDetail("");
    setHouseType(""); setHouseAmenities({ electricity: false, tapWaterOrBorewell: false, none: false });
    setRationCard(""); setPensionSchemes({ oldAgeWidowDisability: false, otherScheme: false, no: false, notSure: false });
    setTravelModes({ twoWheeler: false, car: false, busOrAuto: false, walkOrCycle: false, mixed: false });
    setStudyDevice(""); setQuietStudyPlace(""); setFamilyLoan(""); setEarningExpectation("");
    setFamilyResponsibilityType(""); setFamilyResponsibilityDetail("");
    setLikedSubjects([]); setDifficultSubjects([]); setMarksDescription(""); setTuitionAttendance("");
    setRepeatedClassType(""); setRepeatedClassDetail("");
    setExtracurriculars({ sports: false, arts: false, musicDance: false, debateQuiz: false, nccScouts: false, schoolClubs: false, none: false });
    setHobbyType(""); setHobbyDetail("");
    setCareerDiscussion(""); setCareerCertainty(""); setCareerOnMind(""); setAdmiredRoleModel("");
    setWearsGlasses(""); setEyesightTested(""); setColourVisionDifficulty("");
    setHearingDifficulty(""); setSpeechDifficulty(""); setHeight(""); setWeight("");
    setHeightWeightUnknown(false); setLongTermHealthCondition("");
    setHealthWorkDifficulties({ standingWalking: false, heavyPhysical: false, nightShifts: false, outdoorsDust: false, screenWork: false, heavyWeights: false, none: false });
    setAllergiesType(""); setAllergiesDetail(""); setDisabilityCertificate("");
    setMajorIllnessOrInjury(""); setRegularMedicalExpenses(""); setStomachDigestionProblem("");
    setSkinProblem(""); setSkinProblemDuration("");
    setSkinProblemAffects({ sleep: false, comingToSchool: false, feelUncomfortable: false, none: false });
    setWorryingTalkType(""); setWorryingTalkDetail("");
    setEditingProfileId(null);
  };

  const handleSaveProfile = () => {
    if (!name.trim()) {
      alert("Please enter the student name before saving.");
      return;
    }
    const profile: SavedProfile = {
      id: editingProfileId || Date.now().toString(),
      savedAt: new Date().toISOString(),
      studentName: name, studentClass, section, school, age, gender, caste,
      villageTown, mandal, district, dob, fillerRole,
      livesWithFather, livesWithMother, livesWithBrothers, brotherCount,
      livesWithSisters, sisterCount, livesWithGrandparents, livesWithOtherRelative,
      parentsStatus, parentsStatusOther, fatherWorkType, fatherWorkDetail,
      motherWorkType, motherWorkDetail, otherEarners, otherEarnersDetail,
      parentsWorkingAbility, isEldestChild, olderSiblingsStatus, olderSiblingsDetail,
      houseType, houseAmenities, rationCard, pensionSchemes, travelModes,
      studyDevice, quietStudyPlace, familyLoan, earningExpectation,
      familyResponsibilityType, familyResponsibilityDetail,
      likedSubjects, difficultSubjects, marksDescription, tuitionAttendance,
      repeatedClassType, repeatedClassDetail, extracurriculars, hobbyType, hobbyDetail,
      careerDiscussion, careerCertainty, careerOnMind, admiredRoleModel,
      wearsGlasses, eyesightTested, colourVisionDifficulty, hearingDifficulty,
      speechDifficulty, height, weight, heightWeightUnknown, longTermHealthCondition,
      healthWorkDifficulties, allergiesType, allergiesDetail, disabilityCertificate,
      majorIllnessOrInjury, regularMedicalExpenses, stomachDigestionProblem,
      skinProblem, skinProblemDuration, skinProblemAffects,
      worryingTalkType, worryingTalkDetail,
    };
    let updated: SavedProfile[];
    if (editingProfileId) {
      updated = savedProfiles.map((p) => (p.id === editingProfileId ? profile : p));
    } else {
      updated = [profile, ...savedProfiles];
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    setSavedProfiles(updated);
    setEditingProfileId(null);
    alert("Profile saved successfully!");
    setView("saved");
  };

  const handleDeleteProfile = (id: string) => {
    if (!window.confirm("Are you sure you want to delete this profile?")) return;
    const updated = savedProfiles.filter((p) => p.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    setSavedProfiles(updated);
  };

  const loadProfileIntoForm = (profile: SavedProfile) => {
    setName(profile.studentName || ""); setStudentClass(profile.studentClass || "");
    setSection(profile.section || ""); setSchool(profile.school || "");
    setAge(profile.age || ""); setGender(profile.gender || "");
    setCaste(profile.caste || ""); setVillageTown(profile.villageTown || "");
    setMandal(profile.mandal || ""); setDistrict(profile.district || "");
    setDob(profile.dob || ""); setFillerRole(profile.fillerRole || "");
    setLivesWithFather(!!profile.livesWithFather); setLivesWithMother(!!profile.livesWithMother);
    setLivesWithBrothers(!!profile.livesWithBrothers); setBrotherCount(profile.brotherCount || "");
    setLivesWithSisters(!!profile.livesWithSisters); setSisterCount(profile.sisterCount || "");
    setLivesWithGrandparents(!!profile.livesWithGrandparents); setLivesWithOtherRelative(!!profile.livesWithOtherRelative);
    setParentsStatus(profile.parentsStatus || ""); setParentsStatusOther(profile.parentsStatusOther || "");
    setFatherWorkType(profile.fatherWorkType || ""); setFatherWorkDetail(profile.fatherWorkDetail || "");
    setMotherWorkType(profile.motherWorkType || ""); setMotherWorkDetail(profile.motherWorkDetail || "");
    setOtherEarners(profile.otherEarners || ""); setOtherEarnersDetail(profile.otherEarnersDetail || "");
    setParentsWorkingAbility(profile.parentsWorkingAbility || "");
    setIsEldestChild(profile.isEldestChild || "");
    setOlderSiblingsStatus(profile.olderSiblingsStatus || { studying: false, working: false, married: false, atHome: false, notApplicable: false });
    setOlderSiblingsDetail(profile.olderSiblingsDetail || "");
    setHouseType(profile.houseType || "");
    setHouseAmenities(profile.houseAmenities || { electricity: false, tapWaterOrBorewell: false, none: false });
    setRationCard(profile.rationCard || "");
    setPensionSchemes(profile.pensionSchemes || { oldAgeWidowDisability: false, otherScheme: false, no: false, notSure: false });
    setTravelModes(profile.travelModes || { twoWheeler: false, car: false, busOrAuto: false, walkOrCycle: false, mixed: false });
    setStudyDevice(profile.studyDevice || ""); setQuietStudyPlace(profile.quietStudyPlace || "");
    setFamilyLoan(profile.familyLoan || ""); setEarningExpectation(profile.earningExpectation || "");
    setFamilyResponsibilityType(profile.familyResponsibilityType || "");
    setFamilyResponsibilityDetail(profile.familyResponsibilityDetail || "");
    setLikedSubjects(profile.likedSubjects || []); setDifficultSubjects(profile.difficultSubjects || []);
    setMarksDescription(profile.marksDescription || ""); setTuitionAttendance(profile.tuitionAttendance || "");
    setRepeatedClassType(profile.repeatedClassType || ""); setRepeatedClassDetail(profile.repeatedClassDetail || "");
    setExtracurriculars(profile.extracurriculars || { sports: false, arts: false, musicDance: false, debateQuiz: false, nccScouts: false, schoolClubs: false, none: false });
    setHobbyType(profile.hobbyType || ""); setHobbyDetail(profile.hobbyDetail || "");
    setCareerDiscussion(profile.careerDiscussion || ""); setCareerCertainty(profile.careerCertainty || "");
    setCareerOnMind(profile.careerOnMind || ""); setAdmiredRoleModel(profile.admiredRoleModel || "");
    setWearsGlasses(profile.wearsGlasses || ""); setEyesightTested(profile.eyesightTested || "");
    setColourVisionDifficulty(profile.colourVisionDifficulty || "");
    setHearingDifficulty(profile.hearingDifficulty || ""); setSpeechDifficulty(profile.speechDifficulty || "");
    setHeight(profile.height || ""); setWeight(profile.weight || "");
    setHeightWeightUnknown(!!profile.heightWeightUnknown);
    setLongTermHealthCondition(profile.longTermHealthCondition || "");
    setHealthWorkDifficulties(profile.healthWorkDifficulties || { standingWalking: false, heavyPhysical: false, nightShifts: false, outdoorsDust: false, screenWork: false, heavyWeights: false, none: false });
    setAllergiesType(profile.allergiesType || ""); setAllergiesDetail(profile.allergiesDetail || "");
    setDisabilityCertificate(profile.disabilityCertificate || "");
    setMajorIllnessOrInjury(profile.majorIllnessOrInjury || "");
    setRegularMedicalExpenses(profile.regularMedicalExpenses || "");
    setStomachDigestionProblem(profile.stomachDigestionProblem || "");
    setSkinProblem(profile.skinProblem || ""); setSkinProblemDuration(profile.skinProblemDuration || "");
    setSkinProblemAffects(profile.skinProblemAffects || { sleep: false, comingToSchool: false, feelUncomfortable: false, none: false });
    setWorryingTalkType(profile.worryingTalkType || ""); setWorryingTalkDetail(profile.worryingTalkDetail || "");
  };

  const handleViewProfile = (profile: SavedProfile) => {
    loadProfileIntoForm(profile);
    setEditingProfileId(profile.id);
    setView("view_profile");
  };

  const handleEditProfile = (profile: SavedProfile) => {
    loadProfileIntoForm(profile);
    setEditingProfileId(profile.id);
    setView("create");
  };

  // ═══════════════════════════════════════════════════════════════════
  //  LANDING VIEW — Two cards: Create New & View Saved
  // ═══════════════════════════════════════════════════════════════════
  if (view === "landing") {
    return (
      <div className="space-y-6">
        <div
          className="rounded-3xl p-6 sm:p-8 text-stone-900 shadow-sm border relative overflow-hidden"
          style={{ background: "#F5F1EC", borderColor: "#E0D6CA" }}
        >
          <div className="max-w-2xl space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-stone-900 text-[#FAF8F5]">
              <UserCheck className="w-3.5 h-3.5 text-[#C9A97A]" />
              Student Profile
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-stone-900">Student Profile Management</h2>
            <p className="text-xs sm:text-sm text-stone-600 font-medium leading-relaxed">
              Create new student diagnostic profiles or view previously saved ones.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Create New Profile Card */}
          <button
            onClick={() => { silentReset(); setView("create"); }}
            className="group p-6 sm:p-8 rounded-2xl border-2 border-dashed border-stone-300 bg-white hover:border-stone-900 hover:bg-stone-50 transition-all cursor-pointer text-left space-y-3"
          >
            <div className="w-12 h-12 rounded-xl bg-stone-900 text-[#FAF8F5] flex items-center justify-center">
              <FilePlus className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-extrabold text-stone-900">Create New Profile</h3>
            <p className="text-xs text-stone-500 font-medium">Start a new diagnostic evaluation form for a student session.</p>
          </button>

          {/* View Saved Profiles Card */}
          <button
            onClick={() => setView("saved")}
            className="group p-6 sm:p-8 rounded-2xl border border-stone-200 bg-white hover:border-stone-900 hover:bg-stone-50 transition-all cursor-pointer text-left space-y-3"
          >
            <div className="w-12 h-12 rounded-xl bg-[#C9A97A] text-white flex items-center justify-center">
              <FolderOpen className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-extrabold text-stone-900">View Saved Profiles</h3>
            <p className="text-xs text-stone-500 font-medium">
              {savedProfiles.length} profile{savedProfiles.length !== 1 ? "s" : ""} saved
            </p>
          </button>
        </div>
      </div>
    );
  }

  // ═══════════════════════════════════════════════════════════════════
  //  SAVED PROFILES LIST VIEW
  // ═══════════════════════════════════════════════════════════════════
  if (view === "saved") {
    return (
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setView("landing")}
            className="flex items-center gap-1.5 text-xs font-bold text-stone-600 hover:text-stone-900 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </button>
          <h2 className="text-xl font-extrabold text-stone-900">Saved Profiles</h2>
        </div>

        {savedProfiles.length === 0 ? (
          <div className="p-8 text-center rounded-2xl border border-stone-200 bg-white">
            <FolderOpen className="w-12 h-12 text-stone-300 mx-auto mb-3" />
            <p className="text-sm font-bold text-stone-500">No saved profiles yet</p>
            <p className="text-xs text-stone-400 mt-1">Create a new profile to get started.</p>
            <Button
              onClick={() => { silentReset(); setView("create"); }}
              className="mt-4 h-10 px-5 rounded-xl font-bold text-xs cursor-pointer"
              style={{ background: "#1C1917", color: "#FAF8F5" }}
            >
              <FilePlus className="w-4 h-4 mr-1.5" />
              Create New Profile
            </Button>
          </div>
        ) : (
          <div className="space-y-3">
            {savedProfiles.map((profile) => (
              <div
                key={profile.id}
                className="p-4 sm:p-5 rounded-2xl border border-stone-200 bg-white flex flex-col sm:flex-row sm:items-center justify-between gap-3"
              >
                <div className="space-y-1">
                  <h3 className="text-sm font-extrabold text-stone-900">{profile.studentName || "Unnamed Student"}</h3>
                  <div className="flex flex-wrap items-center gap-3 text-[11px] text-stone-500 font-medium">
                    {profile.studentClass && <span>Class: {profile.studentClass}</span>}
                    {profile.school && <span>School: {profile.school}</span>}
                    <span>Saved: {new Date(profile.savedAt).toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit" })}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <Button onClick={() => handleViewProfile(profile)} variant="outline" className="h-9 px-3 rounded-xl text-xs font-bold cursor-pointer">
                    <Eye className="w-3.5 h-3.5 mr-1" /> View
                  </Button>
                  <Button onClick={() => handleEditProfile(profile)} variant="outline" className="h-9 px-3 rounded-xl text-xs font-bold cursor-pointer">
                    <Pencil className="w-3.5 h-3.5 mr-1" /> Edit
                  </Button>
                  <Button onClick={() => handleDeleteProfile(profile.id)} variant="outline" className="h-9 px-3 rounded-xl text-xs font-bold text-red-600 border-red-200 hover:bg-red-50 cursor-pointer">
                    <Trash2 className="w-3.5 h-3.5 mr-1" /> Delete
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }

  // ═══════════════════════════════════════════════════════════════════
  //  CREATE / VIEW PROFILE FORM (existing form below)
  // ═══════════════════════════════════════════════════════════════════
  return (
    <div className="space-y-6">
      {/* Back Button (hidden in print) */}
      <button
        onClick={() => setView("landing")}
        className="flex items-center gap-1.5 text-xs font-bold text-stone-600 hover:text-stone-900 transition-colors cursor-pointer print:hidden"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Student Profiles
      </button>

      {/* Top Banner (hidden in print) */}
      <div
        className="rounded-3xl p-6 sm:p-8 text-stone-900 shadow-sm border relative overflow-hidden print:hidden"
        style={{ background: "#F5F1EC", borderColor: "#E0D6CA" }}
      >
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div className="max-w-2xl space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-stone-900 text-[#FAF8F5]">
              <UserCheck className="w-3.5 h-3.5 text-[#C9A97A]" />
              {view === "view_profile" ? "Viewing Profile" : editingProfileId ? "Editing Profile" : "New Profile"}
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-stone-900">Comprehensive Student Profile</h2>
            <p className="text-xs sm:text-sm text-stone-600 font-medium leading-relaxed">
              Fill in student insights, family context, aspirations, and health readiness during 1-on-1 sessions. Export as a structured PDF report at any time.
            </p>
          </div>

          <div className="flex items-center gap-2.5 shrink-0 flex-wrap">
            <Button
              type="button"
              onClick={handleReset}
              variant="outline"
              className="h-11 px-4 rounded-xl font-bold text-xs bg-white border-stone-300 text-stone-700 hover:bg-stone-100 cursor-pointer shadow-2xs"
            >
              <RotateCcw className="w-3.5 h-3.5 mr-1.5" />
              Clear Form
            </Button>

            <Button
              type="button"
              onClick={handleSaveProfile}
              className="h-11 px-5 rounded-xl font-bold text-xs sm:text-sm shadow-md cursor-pointer transition-all flex items-center gap-2 bg-emerald-700 hover:bg-emerald-800 text-white"
            >
              <Save className="w-4 h-4" />
              <span>Save Profile</span>
            </Button>

            <Button
              type="button"
              onClick={handlePrint}
              className="h-11 px-5 rounded-xl font-bold text-xs sm:text-sm shadow-md cursor-pointer transition-all flex items-center gap-2"
              style={{ background: "#1C1917", color: "#FAF8F5" }}
            >
              <FileDown className="w-4 h-4 text-[#C9A97A]" />
              <span>Export to PDF / Print</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Main Questionnaire Document Canvas */}
      <div
        className="rounded-3xl p-6 sm:p-10 bg-white border shadow-sm space-y-8 print:p-0 print:border-none print:shadow-none print:space-y-6"
        style={{ borderColor: "#E5DDD2" }}
      >
        {/* Document Header */}
        <div className="border-b border-stone-200 pb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="text-xs font-extrabold uppercase tracking-widest text-[#7C5C3E]">
              Wabi Career Guidance &bull; Student Diagnostic Profile
            </div>
            <h1 className="text-2xl font-extrabold text-stone-900 mt-1">
              Student Diagnostic Questionnaire
            </h1>
            <p className="text-xs text-stone-500 font-medium mt-0.5">
              Counsellor: <span className="font-bold text-stone-800">{counsellorName || "Career Counsellor"}</span> &bull; Date: {new Date().toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}
            </p>
          </div>

          <div className="px-3.5 py-1.5 rounded-xl bg-stone-100 border border-stone-200 text-xs font-mono font-bold text-stone-700 self-start sm:self-auto">
            Session ID: #STU-{Math.floor(100000 + Math.random() * 900000)}
          </div>
        </div>

        {/* ══════════════════════════════════════════════════════════════════
            SECTION A: ABOUT YOU
           ══════════════════════════════════════════════════════════════════ */}
        <div className="space-y-5">
          <div className="px-4 py-2.5 rounded-xl bg-stone-900 text-[#FAF8F5] flex items-center justify-between">
            <div className="flex items-center gap-2 font-extrabold text-xs sm:text-sm uppercase tracking-wider">
              <GraduationCap className="w-4 h-4 text-[#C9A97A]" />
              <span>Section A: About You</span>
            </div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400">Personal &amp; School Details</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Name */}
            <div className="space-y-1.5 p-3.5 rounded-2xl bg-stone-50/70 border border-stone-200/80">
              <label className="text-xs font-bold text-stone-800 block">
                Name <span className="text-rose-500">*</span>
              </label>
              <Input
                placeholder="Enter full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="h-10 rounded-xl text-xs font-semibold bg-white border-stone-300"
              />
            </div>

            {/* Class */}
            <div className="space-y-1.5 p-3.5 rounded-2xl bg-stone-50/70 border border-stone-200/80">
              <label className="text-xs font-bold text-stone-800 block">
                Class / Grade <span className="text-rose-500">*</span>
              </label>
              <Input
                placeholder="e.g. 8, 9, 10, Intermediate 1st Yr"
                value={studentClass}
                onChange={(e) => setStudentClass(e.target.value)}
                className="h-10 rounded-xl text-xs font-semibold bg-white border-stone-300"
              />
            </div>

            {/* Section */}
            <div className="space-y-1.5 p-3.5 rounded-2xl bg-stone-50/70 border border-stone-200/80">
              <label className="text-xs font-bold text-stone-800 block">
                Section <span className="text-rose-500">*</span>
              </label>
              <Input
                placeholder="e.g. A, B, Q, Rose"
                value={section}
                onChange={(e) => setSection(e.target.value)}
                className="h-10 rounded-xl text-xs font-semibold bg-white border-stone-300"
              />
            </div>

            {/* School */}
            <div className="space-y-1.5 p-3.5 rounded-2xl bg-stone-50/70 border border-stone-200/80 sm:col-span-2">
              <label className="text-xs font-bold text-stone-800 block">
                School Name <span className="text-rose-500">*</span>
              </label>
              <Input
                placeholder="e.g. YLM School / ZP High School"
                value={school}
                onChange={(e) => setSchool(e.target.value)}
                className="h-10 rounded-xl text-xs font-semibold bg-white border-stone-300"
              />
            </div>

            {/* Age */}
            <div className="space-y-1.5 p-3.5 rounded-2xl bg-stone-50/70 border border-stone-200/80">
              <label className="text-xs font-bold text-stone-800 block">
                Age <span className="text-rose-500">*</span>
              </label>
              <Input
                type="number"
                placeholder="e.g. 15"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                className="h-10 rounded-xl text-xs font-semibold bg-white border-stone-300"
              />
            </div>

            {/* Gender */}
            <div className="space-y-1.5 p-3.5 rounded-2xl bg-stone-50/70 border border-stone-200/80">
              <label className="text-xs font-bold text-stone-800 block">
                Gender <span className="text-rose-500">*</span>
              </label>
              <div className="flex items-center gap-4 h-10">
                <label className="flex items-center gap-2 text-xs font-bold text-stone-700 cursor-pointer">
                  <input
                    type="radio"
                    name="gender"
                    value="Boy"
                    checked={gender === "Boy"}
                    onChange={() => setGender("Boy")}
                    className="w-4 h-4 text-stone-900 focus:ring-stone-900"
                  />
                  <span>Boy</span>
                </label>
                <label className="flex items-center gap-2 text-xs font-bold text-stone-700 cursor-pointer">
                  <input
                    type="radio"
                    name="gender"
                    value="Girl"
                    checked={gender === "Girl"}
                    onChange={() => setGender("Girl")}
                    className="w-4 h-4 text-stone-900 focus:ring-stone-900"
                  />
                  <span>Girl</span>
                </label>
              </div>
            </div>

            {/* Caste */}
            <div className="space-y-1.5 p-3.5 rounded-2xl bg-stone-50/70 border border-stone-200/80">
              <label className="text-xs font-bold text-stone-800 block">
                Caste Category <span className="text-rose-500">*</span>
              </label>
              <Input
                placeholder="e.g. BC, OC, SC, ST"
                value={caste}
                onChange={(e) => setCaste(e.target.value)}
                className="h-10 rounded-xl text-xs font-semibold bg-white border-stone-300"
              />
            </div>

            {/* Date of Birth */}
            <div className="space-y-1.5 p-3.5 rounded-2xl bg-stone-50/70 border border-stone-200/80">
              <label className="text-xs font-bold text-stone-800 block">
                Date of Birth <span className="text-rose-500">*</span>
              </label>
              <Input
                type="date"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                className="h-10 rounded-xl text-xs font-semibold bg-white border-stone-300"
              />
            </div>

            {/* Village / Town */}
            <div className="space-y-1.5 p-3.5 rounded-2xl bg-stone-50/70 border border-stone-200/80">
              <label className="text-xs font-bold text-stone-800 block">
                Village or Town <span className="text-rose-500">*</span>
              </label>
              <Input
                placeholder="e.g. Yeleswaram"
                value={villageTown}
                onChange={(e) => setVillageTown(e.target.value)}
                className="h-10 rounded-xl text-xs font-semibold bg-white border-stone-300"
              />
            </div>

            {/* Mandal */}
            <div className="space-y-1.5 p-3.5 rounded-2xl bg-stone-50/70 border border-stone-200/80">
              <label className="text-xs font-bold text-stone-800 block">
                Mandal <span className="text-rose-500">*</span>
              </label>
              <Input
                placeholder="e.g. Yeleswaram"
                value={mandal}
                onChange={(e) => setMandal(e.target.value)}
                className="h-10 rounded-xl text-xs font-semibold bg-white border-stone-300"
              />
            </div>

            {/* District */}
            <div className="space-y-1.5 p-3.5 rounded-2xl bg-stone-50/70 border border-stone-200/80">
              <label className="text-xs font-bold text-stone-800 block">
                District <span className="text-rose-500">*</span>
              </label>
              <Input
                placeholder="e.g. Kakinada / East Godavari"
                value={district}
                onChange={(e) => setDistrict(e.target.value)}
                className="h-10 rounded-xl text-xs font-semibold bg-white border-stone-300"
              />
            </div>
          </div>

          {/* Who is filling this form? */}
          <div className="p-4 rounded-2xl bg-stone-50/70 border border-stone-200/80 space-y-2.5">
            <label className="text-xs font-bold text-stone-800 block">
              Who is filling this form? <span className="text-rose-500">*</span>
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {[
                { id: "student_alone", label: "Student alone" },
                { id: "student_parent", label: "Student with parent's help" },
                { id: "parent_behalf", label: "Parent, on student's behalf" },
                { id: "student_teacher", label: "Student with teacher's help" },
              ].map((opt) => (
                <label
                  key={opt.id}
                  className={`flex items-center gap-2.5 p-2.5 rounded-xl border cursor-pointer transition-colors ${
                    fillerRole === opt.label
                      ? "bg-stone-900 text-white border-stone-900 font-bold"
                      : "bg-white text-stone-800 border-stone-200 hover:bg-stone-100 font-medium"
                  }`}
                >
                  <input
                    type="radio"
                    name="fillerRole"
                    value={opt.label}
                    checked={fillerRole === opt.label}
                    onChange={() => setFillerRole(opt.label)}
                    className="w-3.5 h-3.5"
                  />
                  <span>{opt.label}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* ══════════════════════════════════════════════════════════════════
            SECTION B: YOUR FAMILY
           ══════════════════════════════════════════════════════════════════ */}
        <div className="space-y-5 pt-4">
          <div className="px-4 py-2.5 rounded-xl bg-stone-900 text-[#FAF8F5] flex items-center justify-between">
            <div className="flex items-center gap-2 font-extrabold text-xs sm:text-sm uppercase tracking-wider">
              <Home className="w-4 h-4 text-[#C9A97A]" />
              <span>Section B: Your Family</span>
            </div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400">Household &amp; Economic Context</span>
          </div>

          {/* Q1: Who lives in your house? */}
          <div className="p-4 sm:p-5 rounded-2xl bg-stone-50/70 border border-stone-200/80 space-y-3">
            <label className="text-xs font-bold text-stone-900 block">
              1. Who lives in your house? (Tick all that apply) <span className="text-rose-500">*</span>
            </label>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 text-xs">
              <label className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-stone-200 font-medium cursor-pointer hover:bg-stone-100">
                <input
                  type="checkbox"
                  checked={livesWithFather}
                  onChange={(e) => setLivesWithFather(e.target.checked)}
                  className="w-4 h-4 rounded text-stone-900"
                />
                <span className="font-bold">Father</span>
              </label>

              <label className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-stone-200 font-medium cursor-pointer hover:bg-stone-100">
                <input
                  type="checkbox"
                  checked={livesWithMother}
                  onChange={(e) => setLivesWithMother(e.target.checked)}
                  className="w-4 h-4 rounded text-stone-900"
                />
                <span className="font-bold">Mother</span>
              </label>

              <label className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-stone-200 font-medium cursor-pointer hover:bg-stone-100">
                <input
                  type="checkbox"
                  checked={livesWithGrandparents}
                  onChange={(e) => setLivesWithGrandparents(e.target.checked)}
                  className="w-4 h-4 rounded text-stone-900"
                />
                <span className="font-bold">Grandparent(s)</span>
              </label>

              <label className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-stone-200 font-medium cursor-pointer hover:bg-stone-100">
                <input
                  type="checkbox"
                  checked={livesWithOtherRelative}
                  onChange={(e) => setLivesWithOtherRelative(e.target.checked)}
                  className="w-4 h-4 rounded text-stone-900"
                />
                <span className="font-bold">Other relative</span>
              </label>

              {/* Brother(s) */}
              <div className="p-2.5 rounded-xl bg-white border border-stone-200 space-y-2 sm:col-span-2 lg:col-span-1">
                <label className="flex items-center gap-2 font-bold cursor-pointer">
                  <input
                    type="checkbox"
                    checked={livesWithBrothers}
                    onChange={(e) => setLivesWithBrothers(e.target.checked)}
                    className="w-4 h-4 rounded text-stone-900"
                  />
                  <span>Brother(s)</span>
                </label>
                {livesWithBrothers && (
                  <select
                    value={brotherCount}
                    onChange={(e) => setBrotherCount(e.target.value)}
                    className="w-full h-8 px-2 text-xs rounded-lg border border-stone-300 font-medium bg-stone-50"
                  >
                    <option value="">Select how many...</option>
                    <option value="One Brother">One Brother</option>
                    <option value="Two Brothers">Two Brothers</option>
                    <option value="Three Brothers">Three Brothers</option>
                    <option value="More than Three">More than Three</option>
                  </select>
                )}
              </div>

              {/* Sister(s) */}
              <div className="p-2.5 rounded-xl bg-white border border-stone-200 space-y-2 sm:col-span-2 lg:col-span-1">
                <label className="flex items-center gap-2 font-bold cursor-pointer">
                  <input
                    type="checkbox"
                    checked={livesWithSisters}
                    onChange={(e) => setLivesWithSisters(e.target.checked)}
                    className="w-4 h-4 rounded text-stone-900"
                  />
                  <span>Sister(s)</span>
                </label>
                {livesWithSisters && (
                  <select
                    value={sisterCount}
                    onChange={(e) => setSisterCount(e.target.value)}
                    className="w-full h-8 px-2 text-xs rounded-lg border border-stone-300 font-medium bg-stone-50"
                  >
                    <option value="">Select how many...</option>
                    <option value="One Sister">One Sister</option>
                    <option value="Two Sisters">Two Sisters</option>
                    <option value="Three Sisters">Three Sisters</option>
                    <option value="More than Three">More than Three</option>
                  </select>
                )}
              </div>
            </div>
          </div>

          {/* Q2: Are your parents: */}
          <div className="p-4 sm:p-5 rounded-2xl bg-stone-50/70 border border-stone-200/80 space-y-2.5">
            <label className="text-xs font-bold text-stone-900 block">
              2. Are your parents: <span className="text-rose-500">*</span>
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {[
                "Both living together with you",
                "One parent only",
                "Living with guardian/relative",
                "Other",
              ].map((opt) => (
                <label
                  key={opt}
                  className={`flex items-center gap-2.5 p-2.5 rounded-xl border cursor-pointer transition-colors ${
                    parentsStatus === opt
                      ? "bg-stone-900 text-white border-stone-900 font-bold"
                      : "bg-white text-stone-800 border-stone-200 hover:bg-stone-100 font-medium"
                  }`}
                >
                  <input
                    type="radio"
                    name="parentsStatus"
                    value={opt}
                    checked={parentsStatus === opt}
                    onChange={() => setParentsStatus(opt)}
                    className="w-3.5 h-3.5"
                  />
                  <span>{opt}</span>
                </label>
              ))}
            </div>
            {parentsStatus === "Other" && (
              <Input
                placeholder="Please describe living situation..."
                value={parentsStatusOther}
                onChange={(e) => setParentsStatusOther(e.target.value)}
                className="h-9 text-xs rounded-xl bg-white border-stone-300 mt-2"
              />
            )}
          </div>

          {/* Q3: What work does your father do? */}
          <div className="p-4 sm:p-5 rounded-2xl bg-stone-50/70 border border-stone-200/80 space-y-2.5">
            <label className="text-xs font-bold text-stone-900 block">
              3. What work does your father do? <span className="text-rose-500">*</span>
            </label>
            <div className="space-y-2 text-xs">
              <label className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white border border-stone-200 font-medium cursor-pointer hover:bg-stone-100">
                <input
                  type="radio"
                  name="fatherWork"
                  value="not_applicable"
                  checked={fatherWorkType === "not_applicable"}
                  onChange={() => {
                    setFatherWorkType("not_applicable");
                    setFatherWorkDetail("");
                  }}
                  className="w-3.5 h-3.5"
                />
                <span>Not applicable / not living with family</span>
              </label>

              <div className="p-2.5 rounded-xl bg-white border border-stone-200 space-y-2">
                <label className="flex items-center gap-2.5 font-bold cursor-pointer">
                  <input
                    type="radio"
                    name="fatherWork"
                    value="other"
                    checked={fatherWorkType === "other"}
                    onChange={() => setFatherWorkType("other")}
                    className="w-3.5 h-3.5"
                  />
                  <span>Occupation (e.g. Farmer, Shopkeeper, Driver, Employee):</span>
                </label>
                {fatherWorkType === "other" && (
                  <Input
                    placeholder="Enter father's occupation (e.g. Farmer, Private Job, Business)"
                    value={fatherWorkDetail}
                    onChange={(e) => setFatherWorkDetail(e.target.value)}
                    className="h-9 text-xs rounded-xl bg-stone-50 border-stone-300 font-semibold"
                  />
                )}
              </div>
            </div>
          </div>

          {/* Q4: What work does your mother do? */}
          <div className="p-4 sm:p-5 rounded-2xl bg-stone-50/70 border border-stone-200/80 space-y-2.5">
            <label className="text-xs font-bold text-stone-900 block">
              4. What work does your mother do? <span className="text-rose-500">*</span>
            </label>
            <div className="space-y-2 text-xs">
              <label className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white border border-stone-200 font-medium cursor-pointer hover:bg-stone-100">
                <input
                  type="radio"
                  name="motherWork"
                  value="homemaker"
                  checked={motherWorkType === "homemaker"}
                  onChange={() => {
                    setMotherWorkType("homemaker");
                    setMotherWorkDetail("Homemaker");
                  }}
                  className="w-3.5 h-3.5"
                />
                <span className="font-bold">Homemaker</span>
              </label>

              <label className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white border border-stone-200 font-medium cursor-pointer hover:bg-stone-100">
                <input
                  type="radio"
                  name="motherWork"
                  value="not_applicable"
                  checked={motherWorkType === "not_applicable"}
                  onChange={() => {
                    setMotherWorkType("not_applicable");
                    setMotherWorkDetail("");
                  }}
                  className="w-3.5 h-3.5"
                />
                <span>Not applicable / not living with family</span>
              </label>

              <div className="p-2.5 rounded-xl bg-white border border-stone-200 space-y-2">
                <label className="flex items-center gap-2.5 font-bold cursor-pointer">
                  <input
                    type="radio"
                    name="motherWork"
                    value="other"
                    checked={motherWorkType === "other"}
                    onChange={() => setMotherWorkType("other")}
                    className="w-3.5 h-3.5"
                  />
                  <span>Other Occupation:</span>
                </label>
                {motherWorkType === "other" && (
                  <Input
                    placeholder="Enter mother's occupation (e.g. Teacher, Tailor, Agriculture)"
                    value={motherWorkDetail}
                    onChange={(e) => setMotherWorkDetail(e.target.value)}
                    className="h-9 text-xs rounded-xl bg-stone-50 border-stone-300 font-semibold"
                  />
                )}
              </div>
            </div>
          </div>

          {/* Q5: Is there any other adult in the house who earns money? */}
          <div className="p-4 sm:p-5 rounded-2xl bg-stone-50/70 border border-stone-200/80 space-y-2.5">
            <label className="text-xs font-bold text-stone-900 block">
              5. Is there any other adult in the house who earns money? <span className="text-rose-500">*</span>
            </label>
            <div className="space-y-2 text-xs">
              <label className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white border border-stone-200 font-medium cursor-pointer hover:bg-stone-100">
                <input
                  type="radio"
                  name="otherEarners"
                  value="none"
                  checked={otherEarners === "none"}
                  onChange={() => {
                    setOtherEarners("none");
                    setOtherEarnersDetail("");
                  }}
                  className="w-3.5 h-3.5"
                />
                <span>No one else</span>
              </label>

              <div className="p-2.5 rounded-xl bg-white border border-stone-200 space-y-2">
                <label className="flex items-center gap-2.5 font-bold cursor-pointer">
                  <input
                    type="radio"
                    name="otherEarners"
                    value="yes"
                    checked={otherEarners === "yes"}
                    onChange={() => setOtherEarners("yes")}
                    className="w-3.5 h-3.5"
                  />
                  <span>Yes (Please specify who):</span>
                </label>
                {otherEarners === "yes" && (
                  <Input
                    placeholder="e.g. Father, Brother, Uncle"
                    value={otherEarnersDetail}
                    onChange={(e) => setOtherEarnersDetail(e.target.value)}
                    className="h-9 text-xs rounded-xl bg-stone-50 border-stone-300 font-semibold"
                  />
                )}
              </div>
            </div>
          </div>

          {/* Q6: Are both your parents able to work and earn right now? */}
          <div className="p-4 sm:p-5 rounded-2xl bg-stone-50/70 border border-stone-200/80 space-y-2.5">
            <label className="text-xs font-bold text-stone-900 block">
              6. Are both your parents able to work and earn right now? <span className="text-rose-500">*</span>
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {[
                "Yes, both",
                "Only one",
                "Neither, currently",
                "Not applicable",
              ].map((opt) => (
                <label
                  key={opt}
                  className={`flex items-center gap-2.5 p-2.5 rounded-xl border cursor-pointer transition-colors ${
                    parentsWorkingAbility === opt
                      ? "bg-stone-900 text-white border-stone-900 font-bold"
                      : "bg-white text-stone-800 border-stone-200 hover:bg-stone-100 font-medium"
                  }`}
                >
                  <input
                    type="radio"
                    name="parentsWorkingAbility"
                    value={opt}
                    checked={parentsWorkingAbility === opt}
                    onChange={() => setParentsWorkingAbility(opt)}
                    className="w-3.5 h-3.5"
                  />
                  <span>{opt}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Q7: Are you the eldest child in your family? */}
          <div className="p-4 sm:p-5 rounded-2xl bg-stone-50/70 border border-stone-200/80 space-y-2.5">
            <label className="text-xs font-bold text-stone-900 block">
              7. Are you the eldest child in your family? <span className="text-rose-500">*</span>
            </label>
            <div className="flex items-center gap-4 text-xs font-bold">
              <label className="flex items-center gap-2 p-2.5 px-4 rounded-xl bg-white border border-stone-200 cursor-pointer hover:bg-stone-100">
                <input
                  type="radio"
                  name="isEldestChild"
                  value="Yes"
                  checked={isEldestChild === "Yes"}
                  onChange={() => setIsEldestChild("Yes")}
                  className="w-3.5 h-3.5"
                />
                <span>Yes</span>
              </label>

              <label className="flex items-center gap-2 p-2.5 px-4 rounded-xl bg-white border border-stone-200 cursor-pointer hover:bg-stone-100">
                <input
                  type="radio"
                  name="isEldestChild"
                  value="No"
                  checked={isEldestChild === "No"}
                  onChange={() => setIsEldestChild("No")}
                  className="w-3.5 h-3.5"
                />
                <span>No</span>
              </label>
            </div>
          </div>

          {/* Q8: Do you have older brothers or sisters? What are they doing now? */}
          <div className="p-4 sm:p-5 rounded-2xl bg-stone-50/70 border border-stone-200/80 space-y-3">
            <label className="text-xs font-bold text-stone-900 block">
              8. Do you have older brothers or sisters? What are they doing now? <span className="text-rose-500">*</span>
            </label>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
              {[
                { key: "studying", label: "Studying" },
                { key: "working", label: "Working" },
                { key: "married", label: "Married" },
                { key: "atHome", label: "At home" },
              ].map((item) => (
                <label
                  key={item.key}
                  className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-stone-200 font-medium cursor-pointer hover:bg-stone-100"
                >
                  <input
                    type="checkbox"
                    checked={olderSiblingsStatus[item.key as keyof typeof olderSiblingsStatus]}
                    onChange={(e) =>
                      setOlderSiblingsStatus((prev) => ({
                        ...prev,
                        [item.key]: e.target.checked,
                      }))
                    }
                    className="w-4 h-4 rounded text-stone-900"
                  />
                  <span className="font-bold">{item.label}</span>
                </label>
              ))}
            </div>

            <div className="space-y-1.5 pt-1">
              <label className="text-[11px] font-bold text-stone-600 block">
                Additional Details / Notes about older siblings (Optional):
              </label>
              <Input
                placeholder="e.g. Elder brother working in Hyderabad, sister studying B.Com"
                value={olderSiblingsDetail}
                onChange={(e) => setOlderSiblingsDetail(e.target.value)}
                className="h-9 text-xs rounded-xl bg-white border-stone-300 font-medium"
              />
            </div>
          </div>
        </div>

        {/* ══════════════════════════════════════════════════════════════════
            SECTION C: YOUR HOME AND FINANCIAL SITUATION
           ══════════════════════════════════════════════════════════════════ */}
        <div className="space-y-5 pt-4">
          <div className="px-4 py-2.5 rounded-xl bg-stone-900 text-[#FAF8F5] flex items-center justify-between">
            <div className="flex items-center gap-2 font-extrabold text-xs sm:text-sm uppercase tracking-wider">
              <Landmark className="w-4 h-4 text-[#C9A97A]" />
              <span>Section C: Your Home and Financial Situation</span>
            </div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400">Housing &amp; Resources</span>
          </div>

          <div className="p-3.5 rounded-2xl bg-amber-50/70 border border-amber-200/80 text-xs font-medium text-amber-900 flex items-center gap-2">
            <Info className="w-4 h-4 text-amber-700 shrink-0" />
            <span>(These questions help us understand your situation, not to judge it)</span>
          </div>

          {/* Q9: Your house is: */}
          <div className="p-4 sm:p-5 rounded-2xl bg-stone-50/70 border border-stone-200/80 space-y-2.5">
            <label className="text-xs font-bold text-stone-900 block">
              9. Your house is: <span className="text-rose-500">*</span>
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {[
                "Own house",
                "Rented house",
                "Government housing scheme",
                "Living with relatives",
              ].map((opt) => (
                <label
                  key={opt}
                  className={`flex items-center gap-2.5 p-2.5 rounded-xl border cursor-pointer transition-colors ${
                    houseType === opt
                      ? "bg-stone-900 text-white border-stone-900 font-bold"
                      : "bg-white text-stone-800 border-stone-200 hover:bg-stone-100 font-medium"
                  }`}
                >
                  <input
                    type="radio"
                    name="houseType"
                    value={opt}
                    checked={houseType === opt}
                    onChange={() => setHouseType(opt)}
                    className="w-3.5 h-3.5"
                  />
                  <span>{opt}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Q10: Your house has: */}
          <div className="p-4 sm:p-5 rounded-2xl bg-stone-50/70 border border-stone-200/80 space-y-3">
            <label className="text-xs font-bold text-stone-900 block">
              10. Your house has: (Tick all that apply) <span className="text-rose-500">*</span>
            </label>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs">
              <label className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-stone-200 font-medium cursor-pointer hover:bg-stone-100">
                <input
                  type="checkbox"
                  checked={houseAmenities.electricity}
                  onChange={(e) =>
                    setHouseAmenities((prev) => ({
                      ...prev,
                      electricity: e.target.checked,
                      none: false,
                    }))
                  }
                  className="w-4 h-4 rounded text-stone-900"
                />
                <span className="font-bold">Electricity</span>
              </label>

              <label className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-stone-200 font-medium cursor-pointer hover:bg-stone-100">
                <input
                  type="checkbox"
                  checked={houseAmenities.tapWaterOrBorewell}
                  onChange={(e) =>
                    setHouseAmenities((prev) => ({
                      ...prev,
                      tapWaterOrBorewell: e.target.checked,
                      none: false,
                    }))
                  }
                  className="w-4 h-4 rounded text-stone-900"
                />
                <span className="font-bold">Own tap water or borewell</span>
              </label>

              <label className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-stone-200 font-medium cursor-pointer hover:bg-stone-100">
                <input
                  type="checkbox"
                  checked={houseAmenities.none}
                  onChange={(e) =>
                    setHouseAmenities({
                      electricity: false,
                      tapWaterOrBorewell: false,
                      none: e.target.checked,
                    })
                  }
                  className="w-4 h-4 rounded text-stone-900"
                />
                <span className="font-bold">None of these currently</span>
              </label>
            </div>
          </div>

          {/* Q11: Does your family have a ration card? */}
          <div className="p-4 sm:p-5 rounded-2xl bg-stone-50/70 border border-stone-200/80 space-y-2.5">
            <label className="text-xs font-bold text-stone-900 block">
              11. Does your family have a ration card? <span className="text-rose-500">*</span>
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {[
                "White card (APL)",
                "Pink/Rice card (BPL)",
                "Not sure",
                "No ration card",
              ].map((opt) => (
                <label
                  key={opt}
                  className={`flex items-center gap-2.5 p-2.5 rounded-xl border cursor-pointer transition-colors ${
                    rationCard === opt
                      ? "bg-stone-900 text-white border-stone-900 font-bold"
                      : "bg-white text-stone-800 border-stone-200 hover:bg-stone-100 font-medium"
                  }`}
                >
                  <input
                    type="radio"
                    name="rationCard"
                    value={opt}
                    checked={rationCard === opt}
                    onChange={() => setRationCard(opt)}
                    className="w-3.5 h-3.5"
                  />
                  <span>{opt}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Q12: Does your family receive any government pension or scheme support? */}
          <div className="p-4 sm:p-5 rounded-2xl bg-stone-50/70 border border-stone-200/80 space-y-3">
            <label className="text-xs font-bold text-stone-900 block">
              12. Does your family receive any government pension or scheme support? <span className="text-rose-500">*</span>
            </label>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
              <label className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-stone-200 font-medium cursor-pointer hover:bg-stone-100">
                <input
                  type="checkbox"
                  checked={pensionSchemes.oldAgeWidowDisability}
                  onChange={(e) =>
                    setPensionSchemes((prev) => ({
                      ...prev,
                      oldAgeWidowDisability: e.target.checked,
                      no: false,
                    }))
                  }
                  className="w-4 h-4 rounded text-stone-900"
                />
                <span className="font-bold">Yes - old age / widow / disability pension</span>
              </label>

              <label className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-stone-200 font-medium cursor-pointer hover:bg-stone-100">
                <input
                  type="checkbox"
                  checked={pensionSchemes.otherScheme}
                  onChange={(e) =>
                    setPensionSchemes((prev) => ({
                      ...prev,
                      otherScheme: e.target.checked,
                      no: false,
                    }))
                  }
                  className="w-4 h-4 rounded text-stone-900"
                />
                <span className="font-bold">Yes - other scheme</span>
              </label>

              <label className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-stone-200 font-medium cursor-pointer hover:bg-stone-100">
                <input
                  type="checkbox"
                  checked={pensionSchemes.no}
                  onChange={(e) =>
                    setPensionSchemes({
                      oldAgeWidowDisability: false,
                      otherScheme: false,
                      no: e.target.checked,
                      notSure: false,
                    })
                  }
                  className="w-4 h-4 rounded text-stone-900"
                />
                <span className="font-bold">No</span>
              </label>

              <label className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-stone-200 font-medium cursor-pointer hover:bg-stone-100">
                <input
                  type="checkbox"
                  checked={pensionSchemes.notSure}
                  onChange={(e) =>
                    setPensionSchemes({
                      oldAgeWidowDisability: false,
                      otherScheme: false,
                      no: false,
                      notSure: e.target.checked,
                    })
                  }
                  className="w-4 h-4 rounded text-stone-900"
                />
                <span className="font-bold">Not sure</span>
              </label>
            </div>
          </div>

          {/* Q13: How does your family usually travel? */}
          <div className="p-4 sm:p-5 rounded-2xl bg-stone-50/70 border border-stone-200/80 space-y-3">
            <label className="text-xs font-bold text-stone-900 block">
              13. How does your family usually travel? (Tick all that apply) <span className="text-rose-500">*</span>
            </label>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 text-xs">
              {[
                { key: "twoWheeler", label: "Own two-wheeler" },
                { key: "car", label: "Car" },
                { key: "busOrAuto", label: "Bus or auto" },
                { key: "walkOrCycle", label: "Walk or cycle" },
                { key: "mixed", label: "Mixed" },
              ].map((item) => (
                <label
                  key={item.key}
                  className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-stone-200 font-medium cursor-pointer hover:bg-stone-100"
                >
                  <input
                    type="checkbox"
                    checked={travelModes[item.key as keyof typeof travelModes]}
                    onChange={(e) =>
                      setTravelModes((prev) => ({
                        ...prev,
                        [item.key]: e.target.checked,
                      }))
                    }
                    className="w-4 h-4 rounded text-stone-900"
                  />
                  <span className="font-bold">{item.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Q14: Smartphone or computer for studies */}
          <div className="p-4 sm:p-5 rounded-2xl bg-stone-50/70 border border-stone-200/80 space-y-2.5">
            <label className="text-xs font-bold text-stone-900 block">
              14. Do you have a smartphone or computer at home that you can use for studies? <span className="text-rose-500">*</span>
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
              {[
                "Yes, my own",
                "Yes, shared with family",
                "No",
              ].map((opt) => (
                <label
                  key={opt}
                  className={`flex items-center gap-2.5 p-2.5 rounded-xl border cursor-pointer transition-colors ${
                    studyDevice === opt
                      ? "bg-stone-900 text-white border-stone-900 font-bold"
                      : "bg-white text-stone-800 border-stone-200 hover:bg-stone-100 font-medium"
                  }`}
                >
                  <input
                    type="radio"
                    name="studyDevice"
                    value={opt}
                    checked={studyDevice === opt}
                    onChange={() => setStudyDevice(opt)}
                    className="w-3.5 h-3.5"
                  />
                  <span>{opt}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Q15: Quiet place at home to study */}
          <div className="p-4 sm:p-5 rounded-2xl bg-stone-50/70 border border-stone-200/80 space-y-2.5">
            <label className="text-xs font-bold text-stone-900 block">
              15. Do you have a quiet place at home to study? <span className="text-rose-500">*</span>
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
              {[
                "Yes, always",
                "Sometimes",
                "Rarely or never",
              ].map((opt) => (
                <label
                  key={opt}
                  className={`flex items-center gap-2.5 p-2.5 rounded-xl border cursor-pointer transition-colors ${
                    quietStudyPlace === opt
                      ? "bg-stone-900 text-white border-stone-900 font-bold"
                      : "bg-white text-stone-800 border-stone-200 hover:bg-stone-100 font-medium"
                  }`}
                >
                  <input
                    type="radio"
                    name="quietStudyPlace"
                    value={opt}
                    checked={quietStudyPlace === opt}
                    onChange={() => setQuietStudyPlace(opt)}
                    className="w-3.5 h-3.5"
                  />
                  <span>{opt}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Q16: Family loan to repay */}
          <div className="p-4 sm:p-5 rounded-2xl bg-stone-50/70 border border-stone-200/80 space-y-2.5">
            <label className="text-xs font-bold text-stone-900 block">
              16. Does anyone in your family currently have a loan to repay? (for house, farming, business, education, etc.) <span className="text-rose-500">*</span>
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
              {[
                "Yes",
                "No",
                "Not sure",
              ].map((opt) => (
                <label
                  key={opt}
                  className={`flex items-center gap-2.5 p-2.5 rounded-xl border cursor-pointer transition-colors ${
                    familyLoan === opt
                      ? "bg-stone-900 text-white border-stone-900 font-bold"
                      : "bg-white text-stone-800 border-stone-200 hover:bg-stone-100 font-medium"
                  }`}
                >
                  <input
                    type="radio"
                    name="familyLoan"
                    value={opt}
                    checked={familyLoan === opt}
                    onChange={() => setFamilyLoan(opt)}
                    className="w-3.5 h-3.5"
                  />
                  <span>{opt}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Q17: Earning expectation after Class 10 */}
          <div className="p-4 sm:p-5 rounded-2xl bg-stone-50/70 border border-stone-200/80 space-y-2.5">
            <label className="text-xs font-bold text-stone-900 block">
              17. After Class 10, will you be expected to start earning soon, or can you continue studying? <span className="text-rose-500">*</span>
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {[
                "Can continue studying as long as needed",
                "May need to start earning soon",
                "Not decided yet",
                "Not sure",
              ].map((opt) => (
                <label
                  key={opt}
                  className={`flex items-center gap-2.5 p-2.5 rounded-xl border cursor-pointer transition-colors ${
                    earningExpectation === opt
                      ? "bg-stone-900 text-white border-stone-900 font-bold"
                      : "bg-white text-stone-800 border-stone-200 hover:bg-stone-100 font-medium"
                  }`}
                >
                  <input
                    type="radio"
                    name="earningExpectation"
                    value={opt}
                    checked={earningExpectation === opt}
                    onChange={() => setEarningExpectation(opt)}
                    className="w-3.5 h-3.5"
                  />
                  <span>{opt}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Q18: Family responsibility outside school */}
          <div className="p-4 sm:p-5 rounded-2xl bg-stone-50/70 border border-stone-200/80 space-y-2.5">
            <label className="text-xs font-bold text-stone-900 block">
              18. Is there any family responsibility that takes up your time outside school? (e.g., housework, farm work, part-time job) <span className="text-rose-500">*</span>
            </label>
            <div className="space-y-2 text-xs">
              <label className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white border border-stone-200 font-medium cursor-pointer hover:bg-stone-100">
                <input
                  type="radio"
                  name="familyResponsibility"
                  value="None"
                  checked={familyResponsibilityType === "None"}
                  onChange={() => {
                    setFamilyResponsibilityType("None");
                    setFamilyResponsibilityDetail("");
                  }}
                  className="w-3.5 h-3.5"
                />
                <span>None</span>
              </label>

              <div className="p-2.5 rounded-xl bg-white border border-stone-200 space-y-2">
                <label className="flex items-center gap-2.5 font-bold cursor-pointer">
                  <input
                    type="radio"
                    name="familyResponsibility"
                    value="Yes"
                    checked={familyResponsibilityType === "Yes"}
                    onChange={() => setFamilyResponsibilityType("Yes")}
                    className="w-3.5 h-3.5"
                  />
                  <span>Yes (write briefly):</span>
                </label>
                {familyResponsibilityType === "Yes" && (
                  <Input
                    placeholder="Describe responsibility (e.g. helping in shop in evening, farm irrigation)"
                    value={familyResponsibilityDetail}
                    onChange={(e) => setFamilyResponsibilityDetail(e.target.value)}
                    className="h-9 text-xs rounded-xl bg-stone-50 border-stone-300 font-semibold"
                  />
                )}
              </div>
            </div>
          </div>
        </div>

        {/* ══════════════════════════════════════════════════════════════════
            SECTION D: YOUR STUDIES & ACTIVITIES
           ══════════════════════════════════════════════════════════════════ */}
        <div className="space-y-5 pt-4">
          <div className="px-4 py-2.5 rounded-xl bg-stone-900 text-[#FAF8F5] flex items-center justify-between">
            <div className="flex items-center gap-2 font-extrabold text-xs sm:text-sm uppercase tracking-wider">
              <BookOpen className="w-4 h-4 text-[#C9A97A]" />
              <span>Section D: Your Studies &amp; Activities</span>
            </div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400">Subject Preferences &amp; Extracurriculars</span>
          </div>

          {/* Q19: Which subjects do you like the most? (Tick up to 3) */}
          <div className="p-4 sm:p-5 rounded-2xl bg-stone-50/70 border border-stone-200/80 space-y-3">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold text-stone-900 block">
                19. Which subjects do you like the most? (Tick up to 3) <span className="text-rose-500">*</span>
              </label>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-stone-200 text-stone-700">
                {likedSubjects.length} / 3 selected
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 text-xs">
              {SUBJECT_OPTIONS.map((subj) => (
                <label
                  key={subj}
                  className={`flex items-center gap-2 p-2.5 rounded-xl border font-medium cursor-pointer transition-colors ${
                    likedSubjects.includes(subj)
                      ? "bg-stone-900 text-white border-stone-900 font-bold"
                      : "bg-white text-stone-800 border-stone-200 hover:bg-stone-100"
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={likedSubjects.includes(subj)}
                    onChange={() => handleSubjectToggle(subj, likedSubjects, setLikedSubjects, 3)}
                    className="w-4 h-4 rounded text-stone-900"
                  />
                  <span>{subj}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Q20: Which subjects do you find most difficult? */}
          <div className="p-4 sm:p-5 rounded-2xl bg-stone-50/70 border border-stone-200/80 space-y-3">
            <label className="text-xs font-bold text-stone-900 block">
              20. Which subjects do you find most difficult? <span className="text-rose-500">*</span>
            </label>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 text-xs">
              {SUBJECT_OPTIONS.map((subj) => (
                <label
                  key={subj}
                  className={`flex items-center gap-2 p-2.5 rounded-xl border font-medium cursor-pointer transition-colors ${
                    difficultSubjects.includes(subj)
                      ? "bg-stone-900 text-white border-stone-900 font-bold"
                      : "bg-white text-stone-800 border-stone-200 hover:bg-stone-100"
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={difficultSubjects.includes(subj)}
                    onChange={() => handleSubjectToggle(subj, difficultSubjects, setDifficultSubjects)}
                    className="w-4 h-4 rounded text-stone-900"
                  />
                  <span>{subj}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Q21: Marks description */}
          <div className="p-4 sm:p-5 rounded-2xl bg-stone-50/70 border border-stone-200/80 space-y-2.5">
            <label className="text-xs font-bold text-stone-900 block">
              21. How would you describe your marks generally? <span className="text-rose-500">*</span>
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 text-xs">
              {[
                "Mostly above 90%",
                "Mostly 75-90%",
                "Mostly 50-75%",
                "Below 50%",
                "Not sure",
              ].map((opt) => (
                <label
                  key={opt}
                  className={`flex items-center gap-2.5 p-2.5 rounded-xl border cursor-pointer transition-colors ${
                    marksDescription === opt
                      ? "bg-stone-900 text-white border-stone-900 font-bold"
                      : "bg-white text-stone-800 border-stone-200 hover:bg-stone-100 font-medium"
                  }`}
                >
                  <input
                    type="radio"
                    name="marksDescription"
                    value={opt}
                    checked={marksDescription === opt}
                    onChange={() => setMarksDescription(opt)}
                    className="w-3.5 h-3.5"
                  />
                  <span>{opt}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Q22: Tuition or extra coaching */}
          <div className="p-4 sm:p-5 rounded-2xl bg-stone-50/70 border border-stone-200/80 space-y-2.5">
            <label className="text-xs font-bold text-stone-900 block">
              22. Do you attend any tuition or extra coaching outside school? <span className="text-rose-500">*</span>
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {[
                "Yes, regularly",
                "Sometimes",
                "No, cannot afford it",
                "No, not needed",
              ].map((opt) => (
                <label
                  key={opt}
                  className={`flex items-center gap-2.5 p-2.5 rounded-xl border cursor-pointer transition-colors ${
                    tuitionAttendance === opt
                      ? "bg-stone-900 text-white border-stone-900 font-bold"
                      : "bg-white text-stone-800 border-stone-200 hover:bg-stone-100 font-medium"
                  }`}
                >
                  <input
                    type="radio"
                    name="tuitionAttendance"
                    value={opt}
                    checked={tuitionAttendance === opt}
                    onChange={() => setTuitionAttendance(opt)}
                    className="w-3.5 h-3.5"
                  />
                  <span>{opt}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Q23: Repeated class or absent for long period */}
          <div className="p-4 sm:p-5 rounded-2xl bg-stone-50/70 border border-stone-200/80 space-y-2.5">
            <label className="text-xs font-bold text-stone-900 block">
              23. Have you ever repeated a class, or been absent from school for a long period? <span className="text-rose-500">*</span>
            </label>
            <div className="space-y-2 text-xs">
              <label className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white border border-stone-200 font-medium cursor-pointer hover:bg-stone-100">
                <input
                  type="radio"
                  name="repeatedClass"
                  value="No"
                  checked={repeatedClassType === "No"}
                  onChange={() => {
                    setRepeatedClassType("No");
                    setRepeatedClassDetail("");
                  }}
                  className="w-3.5 h-3.5"
                />
                <span>No</span>
              </label>

              <div className="p-2.5 rounded-xl bg-white border border-stone-200 space-y-2">
                <label className="flex items-center gap-2.5 font-bold cursor-pointer">
                  <input
                    type="radio"
                    name="repeatedClass"
                    value="Yes"
                    checked={repeatedClassType === "Yes"}
                    onChange={() => setRepeatedClassType("Yes")}
                    className="w-3.5 h-3.5"
                  />
                  <span>Yes (briefly explain if you'd like):</span>
                </label>
                {repeatedClassType === "Yes" && (
                  <Input
                    placeholder="Enter reason (e.g. health issue in Class 7, missed 3 months)"
                    value={repeatedClassDetail}
                    onChange={(e) => setRepeatedClassDetail(e.target.value)}
                    className="h-9 text-xs rounded-xl bg-stone-50 border-stone-300 font-semibold"
                  />
                )}
              </div>
            </div>
          </div>

          {/* Q24: Do you take part in any of these? */}
          <div className="p-4 sm:p-5 rounded-2xl bg-stone-50/70 border border-stone-200/80 space-y-3">
            <label className="text-xs font-bold text-stone-900 block">
              24. Do you take part in any of these? (Tick all that apply) <span className="text-rose-500">*</span>
            </label>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 text-xs">
              {[
                { key: "sports", label: "Sports" },
                { key: "arts", label: "Arts / drawing / craft" },
                { key: "musicDance", label: "Music / dance" },
                { key: "debateQuiz", label: "Debate / quiz" },
                { key: "nccScouts", label: "NCC / scouts" },
                { key: "schoolClubs", label: "School clubs" },
                { key: "none", label: "None currently" },
              ].map((item) => (
                <label
                  key={item.key}
                  className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-stone-200 font-medium cursor-pointer hover:bg-stone-100"
                >
                  <input
                    type="checkbox"
                    checked={extracurriculars[item.key as keyof typeof extracurriculars]}
                    onChange={(e) => {
                      if (item.key === "none") {
                        setExtracurriculars({
                          sports: false,
                          arts: false,
                          musicDance: false,
                          debateQuiz: false,
                          nccScouts: false,
                          schoolClubs: false,
                          none: e.target.checked,
                        });
                      } else {
                        setExtracurriculars((prev) => ({
                          ...prev,
                          [item.key]: e.target.checked,
                          none: false,
                        }));
                      }
                    }}
                    className="w-4 h-4 rounded text-stone-900"
                  />
                  <span className="font-bold">{item.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Q25: Outside school, do you spend time on any skill or hobby regularly? */}
          <div className="p-4 sm:p-5 rounded-2xl bg-stone-50/70 border border-stone-200/80 space-y-2.5">
            <label className="text-xs font-bold text-stone-900 block">
              25. Outside school, do you spend time on any skill or hobby regularly? (e.g., drawing, cricket, cooking, repairing things) <span className="text-rose-500">*</span>
            </label>
            <div className="space-y-2 text-xs">
              <label className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white border border-stone-200 font-medium cursor-pointer hover:bg-stone-100">
                <input
                  type="radio"
                  name="hobbyType"
                  value="None"
                  checked={hobbyType === "None"}
                  onChange={() => {
                    setHobbyType("None");
                    setHobbyDetail("");
                  }}
                  className="w-3.5 h-3.5"
                />
                <span>None currently</span>
              </label>

              <div className="p-2.5 rounded-xl bg-white border border-stone-200 space-y-2">
                <label className="flex items-center gap-2.5 font-bold cursor-pointer">
                  <input
                    type="radio"
                    name="hobbyType"
                    value="Yes"
                    checked={hobbyType === "Yes"}
                    onChange={() => setHobbyType("Yes")}
                    className="w-3.5 h-3.5"
                  />
                  <span>Yes (specify):</span>
                </label>
                {hobbyType === "Yes" && (
                  <Input
                    placeholder="e.g. Cricket practice, digital drawing, computer hardware fixing, tailoring"
                    value={hobbyDetail}
                    onChange={(e) => setHobbyDetail(e.target.value)}
                    className="h-9 text-xs rounded-xl bg-stone-50 border-stone-300 font-semibold"
                  />
                )}
              </div>
            </div>
          </div>
        </div>

        {/* ══════════════════════════════════════════════════════════════════
            SECTION E: HOW YOU SEE YOUR FUTURE
           ══════════════════════════════════════════════════════════════════ */}
        <div className="space-y-5 pt-4">
          <div className="px-4 py-2.5 rounded-xl bg-stone-900 text-[#FAF8F5] flex items-center justify-between">
            <div className="flex items-center gap-2 font-extrabold text-xs sm:text-sm uppercase tracking-wider">
              <Compass className="w-4 h-4 text-[#C9A97A]" />
              <span>Section E: How You See Your Future</span>
            </div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400">Aspirations &amp; Guidance</span>
          </div>

          <div className="p-3.5 rounded-2xl bg-amber-50/70 border border-amber-200/80 text-xs font-medium text-amber-900 flex items-center gap-2">
            <Info className="w-4 h-4 text-amber-700 shrink-0" />
            <span>There are no wrong answers here — we only want to understand where you stand today.</span>
          </div>

          {/* Q26: Has anyone spoken to you about which career to choose? */}
          <div className="p-4 sm:p-5 rounded-2xl bg-stone-50/70 border border-stone-200/80 space-y-2.5">
            <label className="text-xs font-bold text-stone-900 block">
              26. Has anyone spoken to you about which career to choose? <span className="text-rose-500">*</span>
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {[
                "Parents have suggested something",
                "Relative/neighbour has suggested something",
                "Teacher has suggested something",
                "No one has discussed this with me yet",
              ].map((opt) => (
                <label
                  key={opt}
                  className={`flex items-center gap-2.5 p-2.5 rounded-xl border cursor-pointer transition-colors ${
                    careerDiscussion === opt
                      ? "bg-stone-900 text-white border-stone-900 font-bold"
                      : "bg-white text-stone-800 border-stone-200 hover:bg-stone-100 font-medium"
                  }`}
                >
                  <input
                    type="radio"
                    name="careerDiscussion"
                    value={opt}
                    checked={careerDiscussion === opt}
                    onChange={() => setCareerDiscussion(opt)}
                    className="w-3.5 h-3.5"
                  />
                  <span>{opt}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Q27: Do you know what you want to become? */}
          <div className="p-4 sm:p-5 rounded-2xl bg-stone-50/70 border border-stone-200/80 space-y-2.5">
            <label className="text-xs font-bold text-stone-900 block">
              27. Do you know what you want to become? <span className="text-rose-500">*</span>
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
              {[
                "Yes, I have decided",
                "I have some ideas, not decided",
                "I have no idea yet",
              ].map((opt) => (
                <label
                  key={opt}
                  className={`flex items-center gap-2.5 p-2.5 rounded-xl border cursor-pointer transition-colors ${
                    careerCertainty === opt
                      ? "bg-stone-900 text-white border-stone-900 font-bold"
                      : "bg-white text-stone-800 border-stone-200 hover:bg-stone-100 font-medium"
                  }`}
                >
                  <input
                    type="radio"
                    name="careerCertainty"
                    value={opt}
                    checked={careerCertainty === opt}
                    onChange={() => setCareerCertainty(opt)}
                    className="w-3.5 h-3.5"
                  />
                  <span>{opt}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Q28: If you know, which career or field is on your mind right now? */}
          <div className="p-4 sm:p-5 rounded-2xl bg-stone-50/70 border border-stone-200/80 space-y-2">
            <label className="text-xs font-bold text-stone-900 block">
              28. If you know, which career or field is on your mind right now? <span className="text-rose-500">*</span>
            </label>
            <Input
              placeholder="e.g. Software Engineer, Doctor, Chartered Accountant, IPS Officer, Graphic Designer"
              value={careerOnMind}
              onChange={(e) => setCareerOnMind(e.target.value)}
              className="h-10 text-xs rounded-xl bg-white border-stone-300 font-semibold"
            />
          </div>

          {/* Q29: Do you know anyone in your family or close circle working in a job you admire? */}
          <div className="p-4 sm:p-5 rounded-2xl bg-stone-50/70 border border-stone-200/80 space-y-2">
            <label className="text-xs font-bold text-stone-900 block">
              29. Do you know anyone in your family or close circle working in a job you admire? <span className="text-rose-500">*</span>
            </label>
            <Input
              placeholder="e.g. Yes, my uncle is a Bank Manager / My cousin is a Software Engineer"
              value={admiredRoleModel}
              onChange={(e) => setAdmiredRoleModel(e.target.value)}
              className="h-10 text-xs rounded-xl bg-white border-stone-300 font-semibold"
            />
          </div>
        </div>

        {/* ══════════════════════════════════════════════════════════════════
            SECTION F: YOUR HEALTH & PHYSICAL READINESS
           ══════════════════════════════════════════════════════════════════ */}
        <div className="space-y-5 pt-4">
          <div className="px-4 py-2.5 rounded-xl bg-stone-900 text-[#FAF8F5] flex items-center justify-between">
            <div className="flex items-center gap-2 font-extrabold text-xs sm:text-sm uppercase tracking-wider">
              <HeartPulse className="w-4 h-4 text-[#C9A97A]" />
              <span>Section F: Your Health &amp; Physical Fitness</span>
            </div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400">Confidential Assessment</span>
          </div>

          <div className="p-3.5 rounded-2xl bg-stone-100 border border-stone-200/90 text-xs font-medium text-stone-700 leading-relaxed">
            <p>
              To be filled with a parent or guardian. Everything here is confidential. Why we ask: some careers have medical or physical standards fixed by the government (e.g. defence, police, aviation, railways). Knowing early allows proper preparation and tailored roadmap selection.
            </p>
          </div>

          {/* Q30: Do you wear spectacles or contact lenses? */}
          <div className="p-4 sm:p-5 rounded-2xl bg-stone-50/70 border border-stone-200/80 space-y-2.5">
            <label className="text-xs font-bold text-stone-900 block">
              30. Do you wear spectacles or contact lenses? <span className="text-rose-500">*</span>
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
              {[
                "No",
                "Yes",
                "Not sure",
              ].map((opt) => (
                <label
                  key={opt}
                  className={`flex items-center gap-2.5 p-2.5 rounded-xl border cursor-pointer transition-colors ${
                    wearsGlasses === opt
                      ? "bg-stone-900 text-white border-stone-900 font-bold"
                      : "bg-white text-stone-800 border-stone-200 hover:bg-stone-100 font-medium"
                  }`}
                >
                  <input
                    type="radio"
                    name="wearsGlasses"
                    value={opt}
                    checked={wearsGlasses === opt}
                    onChange={() => setWearsGlasses(opt)}
                    className="w-3.5 h-3.5"
                  />
                  <span>{opt}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Q31: When was your eyesight last tested? */}
          <div className="p-4 sm:p-5 rounded-2xl bg-stone-50/70 border border-stone-200/80 space-y-2.5">
            <label className="text-xs font-bold text-stone-900 block">
              31. When was your eyesight last tested? <span className="text-rose-500">*</span>
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
              {[
                "Within the last year",
                "More than a year ago",
                "Never tested",
              ].map((opt) => (
                <label
                  key={opt}
                  className={`flex items-center gap-2.5 p-2.5 rounded-xl border cursor-pointer transition-colors ${
                    eyesightTested === opt
                      ? "bg-stone-900 text-white border-stone-900 font-bold"
                      : "bg-white text-stone-800 border-stone-200 hover:bg-stone-100 font-medium"
                  }`}
                >
                  <input
                    type="radio"
                    name="eyesightTested"
                    value={opt}
                    checked={eyesightTested === opt}
                    onChange={() => setEyesightTested(opt)}
                    className="w-3.5 h-3.5"
                  />
                  <span>{opt}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Q32: Colour vision difficulty */}
          <div className="p-4 sm:p-5 rounded-2xl bg-stone-50/70 border border-stone-200/80 space-y-2.5">
            <div>
              <label className="text-xs font-bold text-stone-900 block">
                32. Has anyone ever told you that you have difficulty telling certain colours apart (e.g., red and green)? <span className="text-rose-500">*</span>
              </label>
              <p className="text-[11px] text-stone-500 mt-0.5">
                Note: Normal colour vision is required for police, defence, aviation, merchant navy, and railways.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
              {[
                "No",
                "Yes",
                "Never been checked",
              ].map((opt) => (
                <label
                  key={opt}
                  className={`flex items-center gap-2.5 p-2.5 rounded-xl border cursor-pointer transition-colors ${
                    colourVisionDifficulty === opt
                      ? "bg-stone-900 text-white border-stone-900 font-bold"
                      : "bg-white text-stone-800 border-stone-200 hover:bg-stone-100 font-medium"
                  }`}
                >
                  <input
                    type="radio"
                    name="colourVisionDifficulty"
                    value={opt}
                    checked={colourVisionDifficulty === opt}
                    onChange={() => setColourVisionDifficulty(opt)}
                    className="w-3.5 h-3.5"
                  />
                  <span>{opt}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Q33: Difficulty hearing */}
          <div className="p-4 sm:p-5 rounded-2xl bg-stone-50/70 border border-stone-200/80 space-y-2.5">
            <label className="text-xs font-bold text-stone-900 block">
              33. Do you have any difficulty hearing in class, or on the phone? <span className="text-rose-500">*</span>
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
              {[
                "No",
                "Yes",
                "Not sure",
              ].map((opt) => (
                <label
                  key={opt}
                  className={`flex items-center gap-2.5 p-2.5 rounded-xl border cursor-pointer transition-colors ${
                    hearingDifficulty === opt
                      ? "bg-stone-900 text-white border-stone-900 font-bold"
                      : "bg-white text-stone-800 border-stone-200 hover:bg-stone-100 font-medium"
                  }`}
                >
                  <input
                    type="radio"
                    name="hearingDifficulty"
                    value={opt}
                    checked={hearingDifficulty === opt}
                    onChange={() => setHearingDifficulty(opt)}
                    className="w-3.5 h-3.5"
                  />
                  <span>{opt}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Q34: Difficulty with speech */}
          <div className="p-4 sm:p-5 rounded-2xl bg-stone-50/70 border border-stone-200/80 space-y-2.5">
            <label className="text-xs font-bold text-stone-900 block">
              34. Do you have any difficulty with speech that you would like support for? <span className="text-rose-500">*</span>
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {[
                "No",
                "Yes",
              ].map((opt) => (
                <label
                  key={opt}
                  className={`flex items-center gap-2.5 p-2.5 rounded-xl border cursor-pointer transition-colors ${
                    speechDifficulty === opt
                      ? "bg-stone-900 text-white border-stone-900 font-bold"
                      : "bg-white text-stone-800 border-stone-200 hover:bg-stone-100 font-medium"
                  }`}
                >
                  <input
                    type="radio"
                    name="speechDifficulty"
                    value={opt}
                    checked={speechDifficulty === opt}
                    onChange={() => setSpeechDifficulty(opt)}
                    className="w-3.5 h-3.5"
                  />
                  <span>{opt}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Q35: Height and weight */}
          <div className="p-4 sm:p-5 rounded-2xl bg-stone-50/70 border border-stone-200/80 space-y-3">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold text-stone-900 block">
                35. Height and weight (from school records, if known) <span className="text-rose-500">*</span>
              </label>
              <label className="flex items-center gap-1.5 text-xs font-semibold text-stone-600 cursor-pointer">
                <input
                  type="checkbox"
                  checked={heightWeightUnknown}
                  onChange={(e) => {
                    setHeightWeightUnknown(e.target.checked);
                    if (e.target.checked) {
                      setHeight("Don't know");
                      setWeight("Don't know");
                    } else {
                      setHeight("");
                      setWeight("");
                    }
                  }}
                  className="w-3.5 h-3.5 rounded text-stone-900"
                />
                <span>Don't know</span>
              </label>
            </div>

            {!heightWeightUnknown && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-stone-600">Height (cm or feet)</label>
                  <Input
                    placeholder="e.g. 158 cm / 5 ft 2 in"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    className="h-9 text-xs rounded-xl bg-white border-stone-300"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-stone-600">Weight (kg)</label>
                  <Input
                    placeholder="e.g. 48 kg"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    className="h-9 text-xs rounded-xl bg-white border-stone-300"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Q36: Long-term health condition */}
          <div className="p-4 sm:p-5 rounded-2xl bg-stone-50/70 border border-stone-200/80 space-y-2.5">
            <label className="text-xs font-bold text-stone-900 block">
              36. Do you have any long-term health condition that needs regular medicine or regular check-ups? <span className="text-rose-500">*</span>
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
              {[
                "No",
                "Yes",
                "Prefer not to say",
              ].map((opt) => (
                <label
                  key={opt}
                  className={`flex items-center gap-2.5 p-2.5 rounded-xl border cursor-pointer transition-colors ${
                    longTermHealthCondition === opt
                      ? "bg-stone-900 text-white border-stone-900 font-bold"
                      : "bg-white text-stone-800 border-stone-200 hover:bg-stone-100 font-medium"
                  }`}
                >
                  <input
                    type="radio"
                    name="longTermHealthCondition"
                    value={opt}
                    checked={longTermHealthCondition === opt}
                    onChange={() => setLongTermHealthCondition(opt)}
                    className="w-3.5 h-3.5"
                  />
                  <span>{opt}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Q37: Work you would find difficult for health reasons */}
          <div className="p-4 sm:p-5 rounded-2xl bg-stone-50/70 border border-stone-200/80 space-y-3">
            <label className="text-xs font-bold text-stone-900 block">
              37. Is there any kind of work you would find difficult for health reasons? (Tick any that apply) <span className="text-rose-500">*</span>
            </label>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 text-xs">
              {[
                { key: "standingWalking", label: "Standing or walking for many hours" },
                { key: "heavyPhysical", label: "Heavy physical work or running" },
                { key: "nightShifts", label: "Night shifts" },
                { key: "outdoorsDust", label: "Working outdoors in heat or dust" },
                { key: "screenWork", label: "Long hours of close work or screen work" },
                { key: "heavyWeights", label: "Lifting heavy weights" },
                { key: "none", label: "None of these" },
              ].map((item) => (
                <label
                  key={item.key}
                  className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-stone-200 font-medium cursor-pointer hover:bg-stone-100"
                >
                  <input
                    type="checkbox"
                    checked={healthWorkDifficulties[item.key as keyof typeof healthWorkDifficulties]}
                    onChange={(e) => {
                      if (item.key === "none") {
                        setHealthWorkDifficulties({
                          standingWalking: false,
                          heavyPhysical: false,
                          nightShifts: false,
                          outdoorsDust: false,
                          screenWork: false,
                          heavyWeights: false,
                          none: e.target.checked,
                        });
                      } else {
                        setHealthWorkDifficulties((prev) => ({
                          ...prev,
                          [item.key]: e.target.checked,
                          none: false,
                        }));
                      }
                    }}
                    className="w-4 h-4 rounded text-stone-900"
                  />
                  <span className="font-bold">{item.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Q38: Allergies that affect where you can work */}
          <div className="p-4 sm:p-5 rounded-2xl bg-stone-50/70 border border-stone-200/80 space-y-2.5">
            <label className="text-xs font-bold text-stone-900 block">
              38. Do you have any allergies that affect where you can work (dust, chemicals, animals, particular foods)? <span className="text-rose-500">*</span>
            </label>
            <div className="space-y-2 text-xs">
              <label className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white border border-stone-200 font-medium cursor-pointer hover:bg-stone-100">
                <input
                  type="radio"
                  name="allergies"
                  value="No"
                  checked={allergiesType === "No"}
                  onChange={() => {
                    setAllergiesType("No");
                    setAllergiesDetail("");
                  }}
                  className="w-3.5 h-3.5"
                />
                <span>No</span>
              </label>

              <div className="p-2.5 rounded-xl bg-white border border-stone-200 space-y-2">
                <label className="flex items-center gap-2.5 font-bold cursor-pointer">
                  <input
                    type="radio"
                    name="allergies"
                    value="Yes"
                    checked={allergiesType === "Yes"}
                    onChange={() => setAllergiesType("Yes")}
                    className="w-3.5 h-3.5"
                  />
                  <span>Yes (Specify):</span>
                </label>
                {allergiesType === "Yes" && (
                  <Input
                    placeholder="e.g. Severe dust allergy, chemical fumes sensitivity"
                    value={allergiesDetail}
                    onChange={(e) => setAllergiesDetail(e.target.value)}
                    className="h-9 text-xs rounded-xl bg-stone-50 border-stone-300 font-semibold"
                  />
                )}
              </div>
            </div>
          </div>

          {/* Q39: Disability certificate (Sadarem) */}
          <div className="p-4 sm:p-5 rounded-2xl bg-stone-50/70 border border-stone-200/80 space-y-2.5">
            <label className="text-xs font-bold text-stone-900 block">
              39. Do you have a disability certificate (Sadarem), or a condition for which you could apply for one? <span className="text-rose-500">*</span>
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {[
                "No",
                "Yes, I have one",
                "Possibly, not applied",
                "Not sure",
              ].map((opt) => (
                <label
                  key={opt}
                  className={`flex items-center gap-2.5 p-2.5 rounded-xl border cursor-pointer transition-colors ${
                    disabilityCertificate === opt
                      ? "bg-stone-900 text-white border-stone-900 font-bold"
                      : "bg-white text-stone-800 border-stone-200 hover:bg-stone-100 font-medium"
                  }`}
                >
                  <input
                    type="radio"
                    name="disabilityCertificate"
                    value={opt}
                    checked={disabilityCertificate === opt}
                    onChange={() => setDisabilityCertificate(opt)}
                    className="w-3.5 h-3.5"
                  />
                  <span>{opt}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Q40: Major illness, surgery, or injury */}
          <div className="p-4 sm:p-5 rounded-2xl bg-stone-50/70 border border-stone-200/80 space-y-2.5">
            <label className="text-xs font-bold text-stone-900 block">
              40. Have you ever had a major illness, surgery, or injury that kept you away from school for a long time? <span className="text-rose-500">*</span>
            </label>
            <div className="flex items-center gap-4 text-xs font-bold">
              <label className="flex items-center gap-2 p-2.5 px-4 rounded-xl bg-white border border-stone-200 cursor-pointer hover:bg-stone-100">
                <input
                  type="radio"
                  name="majorIllnessOrInjury"
                  value="No"
                  checked={majorIllnessOrInjury === "No"}
                  onChange={() => setMajorIllnessOrInjury("No")}
                  className="w-3.5 h-3.5"
                />
                <span>No</span>
              </label>

              <label className="flex items-center gap-2 p-2.5 px-4 rounded-xl bg-white border border-stone-200 cursor-pointer hover:bg-stone-100">
                <input
                  type="radio"
                  name="majorIllnessOrInjury"
                  value="Yes"
                  checked={majorIllnessOrInjury === "Yes"}
                  onChange={() => setMajorIllnessOrInjury("Yes")}
                  className="w-3.5 h-3.5"
                />
                <span>Yes</span>
              </label>
            </div>
          </div>

          {/* Q41: Regular medical expenses every month */}
          <div className="p-4 sm:p-5 rounded-2xl bg-stone-50/70 border border-stone-200/80 space-y-2.5">
            <label className="text-xs font-bold text-stone-900 block">
              41. Does your family have regular medical expenses every month? <span className="text-rose-500">*</span>
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
              {[
                "No",
                "Yes",
                "Not sure",
              ].map((opt) => (
                <label
                  key={opt}
                  className={`flex items-center gap-2.5 p-2.5 rounded-xl border cursor-pointer transition-colors ${
                    regularMedicalExpenses === opt
                      ? "bg-stone-900 text-white border-stone-900 font-bold"
                      : "bg-white text-stone-800 border-stone-200 hover:bg-stone-100 font-medium"
                  }`}
                >
                  <input
                    type="radio"
                    name="regularMedicalExpenses"
                    value={opt}
                    checked={regularMedicalExpenses === opt}
                    onChange={() => setRegularMedicalExpenses(opt)}
                    className="w-3.5 h-3.5"
                  />
                  <span>{opt}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Q42: Stomach or digestion problem */}
          <div className="p-4 sm:p-5 rounded-2xl bg-stone-50/70 border border-stone-200/80 space-y-2.5">
            <label className="text-xs font-bold text-stone-900 block">
              42. Do you have an ongoing problem with your stomach or digestion? <span className="text-rose-500">*</span>
            </label>
            <div className="space-y-2 text-xs">
              {[
                "No problem",
                "Constipation — difficulty passing stools, or going only once in two or three days",
                "Passing stools more than three times a day, on most days",
                "Frequent stomach pain",
                "Not sure",
              ].map((opt) => (
                <label
                  key={opt}
                  className={`flex items-start gap-2.5 p-2.5 rounded-xl border cursor-pointer transition-colors ${
                    stomachDigestionProblem === opt
                      ? "bg-stone-900 text-white border-stone-900 font-bold"
                      : "bg-white text-stone-800 border-stone-200 hover:bg-stone-100 font-medium"
                  }`}
                >
                  <input
                    type="radio"
                    name="stomachDigestionProblem"
                    value={opt}
                    checked={stomachDigestionProblem === opt}
                    onChange={() => setStomachDigestionProblem(opt)}
                    className="w-3.5 h-3.5 mt-0.5"
                  />
                  <span>{opt}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Q43: Ongoing skin problem & Follow-ups */}
          <div className="p-4 sm:p-5 rounded-2xl bg-stone-50/70 border border-stone-200/80 space-y-3">
            <label className="text-xs font-bold text-stone-900 block">
              43. Do you have any ongoing skin problem? <span className="text-rose-500">*</span>
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
              {[
                "No",
                "Yes",
                "Not sure",
              ].map((opt) => (
                <label
                  key={opt}
                  className={`flex items-center gap-2.5 p-2.5 rounded-xl border cursor-pointer transition-colors ${
                    skinProblem === opt
                      ? "bg-stone-900 text-white border-stone-900 font-bold"
                      : "bg-white text-stone-800 border-stone-200 hover:bg-stone-100 font-medium"
                  }`}
                >
                  <input
                    type="radio"
                    name="skinProblem"
                    value={opt}
                    checked={skinProblem === opt}
                    onChange={() => setSkinProblem(opt)}
                    className="w-3.5 h-3.5"
                  />
                  <span>{opt}</span>
                </label>
              ))}
            </div>

            {/* If Yes: Q43 sub-questions */}
            {skinProblem === "Yes" && (
              <div className="p-4 rounded-xl bg-amber-50/60 border border-amber-200/70 space-y-3.5 mt-3">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-stone-800 block">
                    If yes, how long have you had it?
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                    {[
                      "Less than a month",
                      "More than a month",
                      "Since childhood",
                    ].map((dur) => (
                      <label
                        key={dur}
                        className={`flex items-center gap-2 p-2 rounded-lg border cursor-pointer ${
                          skinProblemDuration === dur
                            ? "bg-stone-900 text-white font-bold"
                            : "bg-white text-stone-800 border-stone-200 font-medium"
                        }`}
                      >
                        <input
                          type="radio"
                          name="skinProblemDuration"
                          value={dur}
                          checked={skinProblemDuration === dur}
                          onChange={() => setSkinProblemDuration(dur)}
                          className="w-3.5 h-3.5"
                        />
                        <span>{dur}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-stone-800 block">
                    Does it affect any of these? (Tick any)
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 text-xs">
                    {[
                      { key: "sleep", label: "Sleep" },
                      { key: "comingToSchool", label: "Coming to school" },
                      { key: "feelUncomfortable", label: "Feel uncomfortable around people" },
                      { key: "none", label: "None of these" },
                    ].map((item) => (
                      <label
                        key={item.key}
                        className="flex items-center gap-2 p-2 rounded-lg bg-white border border-stone-200 font-medium cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          checked={skinProblemAffects[item.key as keyof typeof skinProblemAffects]}
                          onChange={(e) => {
                            if (item.key === "none") {
                              setSkinProblemAffects({
                                sleep: false,
                                comingToSchool: false,
                                feelUncomfortable: false,
                                none: e.target.checked,
                              });
                            } else {
                              setSkinProblemAffects((prev) => ({
                                ...prev,
                                [item.key]: e.target.checked,
                                none: false,
                              }));
                            }
                          }}
                          className="w-4 h-4 rounded text-stone-900"
                        />
                        <span>{item.label}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Q44: Worrying / Personal Well-being Discussion */}
          <div className="p-4 sm:p-5 rounded-2xl bg-stone-50/70 border border-stone-200/80 space-y-2.5">
            <label className="text-xs font-bold text-stone-900 block">
              44. Is there anything worrying you that you would like to talk to someone about? <span className="text-rose-500">*</span>
            </label>
            <div className="space-y-2 text-xs">
              <label className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white border border-stone-200 font-medium cursor-pointer hover:bg-stone-100">
                <input
                  type="radio"
                  name="worryingTalk"
                  value="No"
                  checked={worryingTalkType === "No"}
                  onChange={() => {
                    setWorryingTalkType("No");
                    setWorryingTalkDetail("");
                  }}
                  className="w-3.5 h-3.5"
                />
                <span>No</span>
              </label>

              <div className="p-2.5 rounded-xl bg-white border border-stone-200 space-y-2">
                <label className="flex items-center gap-2.5 font-bold cursor-pointer">
                  <input
                    type="radio"
                    name="worryingTalk"
                    value="Yes"
                    checked={worryingTalkType === "Yes"}
                    onChange={() => setWorryingTalkType("Yes")}
                    className="w-3.5 h-3.5"
                  />
                  <span>Yes, I would like to talk:</span>
                </label>
                {worryingTalkType === "Yes" && (
                  <textarea
                    rows={2}
                    placeholder="Enter what you would like to share or discuss with the counsellor..."
                    value={worryingTalkDetail}
                    onChange={(e) => setWorryingTalkDetail(e.target.value)}
                    className="w-full p-2.5 text-xs rounded-xl bg-stone-50 border border-stone-300 font-semibold focus:ring-2 focus:ring-stone-900 outline-none"
                  />
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Signatures & Session Sign-off (for PDF print export) */}
        <div className="pt-6 border-t border-stone-200 grid grid-cols-2 gap-8">
          <div className="space-y-8">
            <div className="h-10 border-b border-stone-300 w-48" />
            <div className="text-[11px] font-bold text-stone-600">
              Student / Parent Signature
            </div>
          </div>
          <div className="space-y-8 text-right flex flex-col items-end">
            <div className="h-10 border-b border-stone-300 w-48" />
            <div className="text-[11px] font-bold text-stone-600">
              Counsellor Signature ({counsellorName || "Authorized Counsellor"})
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
