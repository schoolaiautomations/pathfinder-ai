import type { FormData, CareerReport } from "./career-data";

// Google Gemini API Configuration
const GEMINI_API_KEY = (import.meta.env.VITE_GEMINI_API_KEY as string) || "";
const GEMINI_API_URL =
  "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent";

// OpenRouter Fallback Configuration
const OPENROUTER_API_KEY = (import.meta.env.VITE_OPENROUTER_API_KEY as string) || "";
const OPENROUTER_BASE_URL = "https://openrouter.ai/api/v1";

function parseReportJSON(content: string): CareerReport {
  let cleaned = content.trim();

  // Strip markdown code fences if present
  const fenceMatch = cleaned.match(/```(?:json)?\s*([\s\S]*?)\s*```/);
  if (fenceMatch) {
    cleaned = fenceMatch[1].trim();
  }

  // Extract raw JSON object if text precedes it
  if (!cleaned.startsWith("{")) {
    const jsonStart = cleaned.indexOf("{");
    if (jsonStart !== -1) {
      cleaned = cleaned.slice(jsonStart);
    }
  }

  // Extract raw JSON object if trailing characters exist
  const lastBrace = cleaned.lastIndexOf("}");
  if (lastBrace !== -1 && lastBrace < cleaned.length - 1) {
    cleaned = cleaned.slice(0, lastBrace + 1);
  }

  const parsed = JSON.parse(cleaned) as CareerReport;

  // Validate matches
  if (!parsed.matches || !Array.isArray(parsed.matches) || parsed.matches.length === 0) {
    throw new Error("Invalid response: missing matches array");
  }

  // Validate insights
  if (!parsed.insights || typeof parsed.insights !== "object") {
    throw new Error("Invalid response: missing insights object");
  }

  // Ensure 3 matches with clamped scores and roadmaps
  parsed.matches = parsed.matches.slice(0, 3).map((m) => ({
    name: m.name || "Career Option",
    score: Math.max(1, Math.min(100, Math.round(Number(m.score) || 80))),
    why: m.why || "Matches your academic strengths and personal interests.",
    roadmap: Array.isArray(m.roadmap) ? m.roadmap : [],
  }));

  // Fallback defaults for any missing insights keys
  parsed.insights = {
    studyRoadmap: parsed.insights.studyRoadmap || "Focus on core foundation subjects and consistent revision.",
    whereToStudy: parsed.insights.whereToStudy || "Explore accredited state and national universities or polytechnics.",
    skillsToBuild: parsed.insights.skillsToBuild || "Develop digital literacy, problem solving, and effective communication.",
    salaryAndDemand: parsed.insights.salaryAndDemand || "Strong demand in growing industry sectors across India.",
    whatToStudyNext: parsed.insights.whatToStudyNext || "Select the relevant stream after Class 10 and prepare for standard entrance tests.",
    parentGuidance: parsed.insights.parentGuidance || "Provide encouragement and support balanced exploration of career pathways.",
  };

  return parsed;
}

async function callGemini(prompt: string, title?: string): Promise<CareerReport> {
  const response = await fetch(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      systemInstruction: {
        parts: [
          {
            text: "You are an elite, highly empathetic AI career counsellor in India. Analyze the student profile thoroughly and respond ONLY with valid JSON conforming to the exact schema specified. Do not include markdown code fences, backticks, or any conversational text.",
          },
        ],
      },
      contents: [
        {
          parts: [{ text: prompt }],
        },
      ],
      generationConfig: {
        responseMimeType: "application/json",
        temperature: 0.7,
      },
    }),
  });

  if (!response.ok) {
    const errorBody = await response.text().catch(() => "");
    console.error("Google Gemini API error:", response.status, errorBody);
    throw new Error(`Google Gemini API error (${response.status}): ${errorBody || response.statusText}`);
  }

  const data = await response.json();
  const text: string = data?.candidates?.[0]?.content?.parts?.[0]?.text ?? "";

  if (!text) {
    throw new Error("Gemini returned an empty response.");
  }

  return parseReportJSON(text);
}

async function callOpenRouter(prompt: string, title?: string): Promise<CareerReport> {
  if (!OPENROUTER_API_KEY) {
    throw new Error("OpenRouter API key is not configured.");
  }

  const response = await fetch(`${OPENROUTER_BASE_URL}/chat/completions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${OPENROUTER_API_KEY}`,
      "HTTP-Referer": typeof window !== "undefined" ? window.location.origin : "http://localhost:5173",
      "X-Title": title || "Pathfinder AI",
    },
    body: JSON.stringify({
      model: "openai/gpt-oss-120b",
      messages: [
        {
          role: "system",
          content:
            "You are an expert career guidance AI. Always respond with valid JSON only, no markdown fences or extra text.",
        },
        {
          role: "user",
          content: prompt,
        },
      ],
      temperature: 0.7,
      max_tokens: 8192,
    }),
  });

  if (!response.ok) {
    const errorBody = await response.text().catch(() => "");
    console.error("OpenRouter API error:", response.status, errorBody);
    throw new Error(`OpenRouter returned an error (${response.status}).`);
  }

  const data = await response.json();
  const content: string = data?.choices?.[0]?.message?.content ?? "";

  if (!content) {
    throw new Error("The AI returned an empty response. Please try again.");
  }

  return parseReportJSON(content);
}

export async function callAI(prompt: string, title?: string): Promise<CareerReport> {
  // 1. Try Google Gemini 2.5 Flash first (User's Google AI Studio key)
  if (GEMINI_API_KEY) {
    try {
      return await callGemini(prompt, title);
    } catch (geminiError: any) {
      console.warn("Gemini API call failed, attempting fallback:", geminiError);
      if (!OPENROUTER_API_KEY) {
        throw new Error(geminiError.message || "Failed to generate report with Gemini AI.");
      }
    }
  }

  // 2. Try OpenRouter fallback
  if (OPENROUTER_API_KEY) {
    try {
      return await callOpenRouter(prompt, title);
    } catch (openRouterError: any) {
      console.error("OpenRouter API fallback also failed:", openRouterError);
      throw new Error("AI services are currently unavailable. Please check your network or API keys.");
    }
  }

  throw new Error("No AI API key is configured. Please provide a valid Google Gemini API key.");
}

function buildPrompt(d: FormData): string {
  const age = d.dob
    ? Math.floor(
        (Date.now() - new Date(d.dob).getTime()) / (365.25 * 24 * 60 * 60 * 1000)
      )
    : null;

  return `You are an expert AI career counsellor for Indian students.
A student has filled a detailed career guidance form. Analyse every field carefully and produce a personalised career report.

=== STUDENT PROFILE ===
Name: ${d.name || "Not provided"}
Phone Number: ${d.phone_number || "Not provided"}
Father's Profession: ${d.fatherProfession || "Not provided"}
Mother's Profession: ${d.motherProfession || "Not provided"}
Age: ${age ?? "Not provided"}
Gender: ${d.gender || "Not provided"}
Location: ${[d.city, d.state, d.country].filter(Boolean).join(", ") || "Not provided"}

Education Level: ${d.educationLevel || "Not provided"}
Board / Curriculum: ${d.board || "Not provided"}
School / College: ${d.schoolName || "Not provided"}
Academic Performance: ${d.performance || "Not provided"}
Favourite Subjects: ${d.favoriteSubjects.length ? d.favoriteSubjects.join(", ") : "None selected"}
Difficult Subjects: ${d.difficultSubjects.length ? d.difficultSubjects.join(", ") : "None selected"}

Interests: ${d.interests.length ? d.interests.join(", ") : "None selected"}
Custom Interests: ${d.customInterests || "None"}

Skills: ${d.skills.length ? d.skills.join(", ") : "None selected"}
Hobbies: ${d.hobbies || "Not provided"}
Achievements: ${d.achievements || "Not provided"}
Projects: ${d.projects || "Not provided"}

Career Dream: ${d.careerDream || "Not provided"}
Preferred Career Type: ${d.careerType || "Not provided"}
Preferred Study Location: ${d.studyLocation || "Not provided"}
Preferred Study Mode: ${d.studyMode || "Not provided"}
Financial Considerations: ${d.financial || "Not provided"}
Parent Expectations: ${d.parentExpectations || "Not provided"}
Careers NOT wanted: ${d.notWanted || "Not provided"}
=== END PROFILE ===

Based on the above profile, generate a career guidance report with:

1. **matches** — An array of exactly 3 best-fit career paths. Each entry must have:
   - "name": career title (string)
   - "score": match percentage 1-100 (number) — be realistic, don't give all 90+
   - "why": one-sentence personalised explanation why this career suits the student (string)
   - "roadmap": An array of 3-6 steps (objects) starting from their current education level (${d.educationLevel || "current level"}) leading to the final career. Each step must have:
     - "stage": Stage title (string, e.g., "Class 11-12", "B.Tech Computer Science")
     - "description": What to do at this stage (string). If the stage is Class 11/12, clearly mention the stream to select (e.g., PCM, PCB, Commerce).
     - "duration": Time required (string, e.g., "2 years")
     - "institutes": Array of strings containing exactly 3-5 REAL institutes/colleges in India (or preferred location) excellent for this stage. IMPORTANT: If the stage is Class 11/12 (Intermediate), leave this array empty.

2. **insights** — An object with exactly 6 keys, each value is a short paragraph (2-3 sentences, practical and specific to this student):
   - "studyRoadmap": what subjects/courses to focus on right now
   - "whereToStudy": specific colleges/universities that fit (use real names relevant to India or the student's preferred location)
   - "skillsToBuild": specific skills to develop with actionable steps
   - "salaryAndDemand": realistic salary ranges and job market outlook in India
   - "whatToStudyNext": immediate next academic steps (which stream, which entrance exams, etc.)
   - "parentGuidance": advice for parents on how to support the student

IMPORTANT: Respond ONLY with valid JSON. No markdown, no code fences, no extra text.
The JSON must match this exact structure:
{
  "matches": [{"name":"...","score":0,"why":"...","roadmap":[{"stage":"...","description":"...","duration":"...","institutes":["..."]}]}],
  "insights": {"studyRoadmap":"...","whereToStudy":"...","skillsToBuild":"...","salaryAndDemand":"...","whatToStudyNext":"...","parentGuidance":"..."}
}`;
}

export async function generateCareerReport(formData: FormData): Promise<CareerReport> {
  const prompt = buildPrompt(formData);
  return callAI(prompt, "Pathfinder AI - Student Report");
}

// ─── Diagnostic Profile AI Career Guidance Report ───────────────────────────

export function buildDiagnosticPrompt(profile: any, focusCareer?: string): string {
  // Extract all 44 questionnaire fields with fallbacks
  const liked = Array.isArray(profile.likedSubjects) && profile.likedSubjects.length > 0
    ? profile.likedSubjects.join(", ")
    : "None specified";
  const difficult = Array.isArray(profile.difficultSubjects) && profile.difficultSubjects.length > 0
    ? profile.difficultSubjects.join(", ")
    : "None specified";

  // Section B helpers
  const livingWith: string[] = [];
  if (profile.livesWithFather) livingWith.push("Father");
  if (profile.livesWithMother) livingWith.push("Mother");
  if (profile.livesWithBrothers) livingWith.push(`Brothers (${profile.brotherCount || "1"})`);
  if (profile.livesWithSisters) livingWith.push(`Sisters (${profile.sisterCount || "1"})`);
  if (profile.livesWithGrandparents) livingWith.push("Grandparents");
  if (profile.livesWithOtherRelative) livingWith.push("Other Relatives");

  const elderSiblings: string[] = [];
  if (profile.olderSiblingsStatus?.studying) elderSiblings.push("Studying");
  if (profile.olderSiblingsStatus?.working) elderSiblings.push("Working");
  if (profile.olderSiblingsStatus?.married) elderSiblings.push("Married");
  if (profile.olderSiblingsStatus?.atHome) elderSiblings.push("At Home");

  // Section C helpers
  const amenities: string[] = [];
  if (profile.houseAmenities?.electricity) amenities.push("Electricity");
  if (profile.houseAmenities?.tapWaterOrBorewell) amenities.push("Tap Water / Borewell");
  if (profile.houseAmenities?.none) amenities.push("Basic / None");

  const pensions: string[] = [];
  if (profile.pensionSchemes?.oldAgeWidowDisability) pensions.push("Old Age / Widow / Disability");
  if (profile.pensionSchemes?.otherScheme) pensions.push("Other Govt Scheme");
  if (profile.pensionSchemes?.no) pensions.push("None");

  const travel: string[] = [];
  if (profile.travelModes?.twoWheeler) travel.push("Two-wheeler");
  if (profile.travelModes?.car) travel.push("Car");
  if (profile.travelModes?.busOrAuto) travel.push("Bus / Auto");
  if (profile.travelModes?.walkOrCycle) travel.push("Walk / Bicycle");
  if (profile.travelModes?.mixed) travel.push("Mixed / Public Transport");

  // Section D helpers
  const extras: string[] = [];
  if (profile.extracurriculars?.sports) extras.push("Sports");
  if (profile.extracurriculars?.arts) extras.push("Visual Arts & Drawing");
  if (profile.extracurriculars?.musicDance) extras.push("Music / Dance");
  if (profile.extracurriculars?.debateQuiz) extras.push("Debate / Quiz / Public Speaking");
  if (profile.extracurriculars?.nccScouts) extras.push("NCC / Scouts & Guides");
  if (profile.extracurriculars?.schoolClubs) extras.push("School Clubs & Social Work");

  // Section F helpers
  const healthWorkIssues: string[] = [];
  if (profile.healthWorkDifficulties?.standingWalking) healthWorkIssues.push("Prolonged standing or walking");
  if (profile.healthWorkDifficulties?.heavyPhysical) healthWorkIssues.push("Heavy physical labor");
  if (profile.healthWorkDifficulties?.nightShifts) healthWorkIssues.push("Night shifts / erratic hours");
  if (profile.healthWorkDifficulties?.outdoorsDust) healthWorkIssues.push("Outdoors / dust / heat");
  if (profile.healthWorkDifficulties?.screenWork) healthWorkIssues.push("Continuous screen work");
  if (profile.healthWorkDifficulties?.heavyWeights) healthWorkIssues.push("Lifting heavy weights");

  const skinAffects: string[] = [];
  if (profile.skinProblemAffects?.sleep) skinAffects.push("Sleep");
  if (profile.skinProblemAffects?.comingToSchool) skinAffects.push("Attending School");
  if (profile.skinProblemAffects?.feelUncomfortable) skinAffects.push("Causes discomfort in public");

  const isCareerUndecided = !profile.careerOnMind ||
    ["no idea", "not sure", "none", "nil", "na", "don't know", "dont know", "undecided"].includes(
      profile.careerOnMind.trim().toLowerCase()
    );

  return `You are an elite, highly empathetic AI career counsellor analyzing a student in India.
You have been provided with all answers to a comprehensive 44-Question In-Depth Diagnostic Questionnaire conducted during a 1-on-1 session.

=== COMPLETE 44-QUESTION STUDENT DIAGNOSTIC PROFILE ===

[SECTION A: ABOUT YOU - PERSONAL & SCHOOL DETAILS]
- Student Name: ${profile.studentName || "Student"}
- Class / Grade: ${profile.studentClass || "Class 10"} | Section: ${profile.section || "—"}
- School Name: ${profile.school || "School in India"}
- Age: ${profile.age || "Not specified"} | Gender: ${profile.gender || "Not specified"} | Date of Birth: ${profile.dob || "Not specified"}
- Caste Category: ${profile.caste || "Not specified"}
- Residential Location: Village/Town: ${profile.villageTown || "—"}, Mandal: ${profile.mandal || "—"}, District: ${profile.district || "—"}
- Questionnaire Filled By: ${profile.fillerRole || "Student with Counsellor"}

[SECTION B: YOUR FAMILY & SOCIO-ECONOMIC CONTEXT]
- Q1 (Living arrangement): Lives with: ${livingWith.length ? livingWith.join(", ") : "Family"}
- Q2 (Parents status): ${profile.parentsStatus || "Living together"} ${profile.parentsStatusOther ? `(${profile.parentsStatusOther})` : ""}
- Q3 (Father's work): Type: ${profile.fatherWorkType || "Not specified"} | Details: ${profile.fatherWorkDetail || "—"}
- Q4 (Mother's work): Type: ${profile.motherWorkType || "Not specified"} | Details: ${profile.motherWorkDetail || "—"}
- Q5 (Other earners in house): ${profile.otherEarners || "None"} ${profile.otherEarnersDetail ? `(${profile.otherEarnersDetail})` : ""}
- Q6 (Both parents able to work): ${profile.parentsWorkingAbility || "Yes"}
- Q7 (Eldest child): ${profile.isEldestChild || "Not specified"}
- Q8 (Older siblings status): ${elderSiblings.length ? elderSiblings.join(", ") : "None/NA"} | Details: ${profile.olderSiblingsDetail || "—"}

[SECTION C: LIVING SITUATION & STUDY ENVIRONMENT]
- Q9 (House ownership): ${profile.houseType || "Own house / Rented"}
- Q10 (House amenities): ${amenities.length ? amenities.join(", ") : "Standard amenities"}
- Q11 (Ration card): ${profile.rationCard || "Not specified"}
- Q12 (Government schemes/pensions): ${pensions.length ? pensions.join(", ") : "None"}
- Q13 (Family travel mode): ${travel.length ? travel.join(", ") : "Public transport / Two-wheeler"}
- Q14 (Study device at home): ${profile.studyDevice || "Smartphone available"}
- Q15 (Quiet study place): ${profile.quietStudyPlace || "Yes"}
- Q16 (Family loan to repay): ${profile.familyLoan || "No active loan"}
- Q17 (Earning expectation after Class 10): ${profile.earningExpectation || "Can continue higher studies"}
- Q18 (Family responsibilities outside school): ${profile.familyResponsibilityType || "None"} ${profile.familyResponsibilityDetail ? `(${profile.familyResponsibilityDetail})` : ""}

[SECTION D: YOUR STUDIES & ACTIVITIES]
- Q19 (Favourite / Liked subjects): ${liked}
- Q20 (Difficult / Disliked subjects): ${difficult}
- Q21 (General marks & academic performance): ${profile.marksDescription || "Average (50-70%)"}
- Q22 (Tuition / Coaching attendance): ${profile.tuitionAttendance || "No"}
- Q23 (Repeated a class or long absence): ${profile.repeatedClassType || "No"} ${profile.repeatedClassDetail ? `(${profile.repeatedClassDetail})` : ""}
- Q24 (Extracurricular participation): ${extras.length ? extras.join(", ") : "None"}
- Q25 (Regular hobbies / Skills outside school): ${profile.hobbyType || "None"} ${profile.hobbyDetail ? `(${profile.hobbyDetail})` : ""}

[SECTION E: HOW YOU SEE YOUR FUTURE]
- Q26 (Has anyone spoken to you about career choices): ${profile.careerDiscussion || "Rarely / No"}
- Q27 (Career certainty): ${profile.careerCertainty || "Undecided / Exploring"}
- Q28 (Career on mind / Dream): ${isCareerUndecided ? "Completely undecided / No idea yet (Needs broad exploration)" : profile.careerOnMind}
- Q29 (Admired role model in family/society): ${profile.admiredRoleModel || "None specified"}
${focusCareer && !["auto", "none", "no idea"].includes(focusCareer.toLowerCase()) ? `- [SPECIAL COUNSELLOR FOCUS]: The counsellor has specifically requested evaluating "${focusCareer}". Include it as one of the paths or analyze its viability.` : ""}

[SECTION F: YOUR HEALTH & WELL-BEING]
- Q30 (Spectacles / Contact lenses): ${profile.wearsGlasses || "No"}
- Q31 (Eyesight last tested): ${profile.eyesightTested || "Not recently"}
- Q32 (Colour vision difficulty - red/green): ${profile.colourVisionDifficulty || "No difficulty"}
- Q33 (Hearing difficulty): ${profile.hearingDifficulty || "Normal"}
- Q34 (Speech difficulty): ${profile.speechDifficulty || "Normal"}
- Q35 (Height & Weight): Height: ${profile.height || "—"} | Weight: ${profile.weight || "—"} | ${profile.heightWeightUnknown ? "(Exact height/weight unknown)" : ""}
- Q36 (Long-term health condition): ${profile.longTermHealthCondition || "None"}
- Q37 (Health work restrictions): ${healthWorkIssues.length ? healthWorkIssues.join(", ") : "None (fit for general work)"}
- Q38 (Allergies affecting work): ${profile.allergiesType || "No"} ${profile.allergiesDetail ? `(${profile.allergiesDetail})` : ""}
- Q39 (Disability certificate / Sadarem): ${profile.disabilityCertificate || "No"}
- Q40 (Major illness, surgery, injury): ${profile.majorIllnessOrInjury || "None"}
- Q41 (Regular monthly medical expenses): ${profile.regularMedicalExpenses || "No"}
- Q42 (Stomach / digestion problems): ${profile.stomachDigestionProblem || "No"}
- Q43 (Skin problem): ${profile.skinProblem || "No"} ${profile.skinProblemDuration ? `(Duration: ${profile.skinProblemDuration})` : ""} ${skinAffects.length ? `(Affects: ${skinAffects.join(", ")})` : ""}
- Q44 (Worrying concerns / Personal talk desired): ${profile.worryingTalkType || "No"} ${profile.worryingTalkDetail ? `(Notes: ${profile.worryingTalkDetail})` : ""}

=== END OF 44-QUESTION DIAGNOSTIC DATA ===

CRITICAL INSTRUCTIONS FOR AI ANALYSIS:
1. **ANALYZE WITH COMPLETE FREEDOM**:
   You are NOT restricted to any predefined list of careers. You can suggest ANY career in India or the modern world.
   Suggest the 3 BEST-FIT careers that genuinely match this student's unique combination of answers.
   Careers can be in technology, sciences, arts, design, government services, public administration, healthcare, defence, skilled trades, entrepreneurship, media, aviation, agriculture, environmental science, finance, or modern hybrid digital careers.

2. **DEEP MULTI-DIMENSIONAL REASONING**:
   - Cross-check academic marks with career difficulty (e.g. don't suggest elite competitive medicine if marks are below 40% and biology is difficult, unless a practical diploma path exists).
   - Cross-check health restrictions: E.g., if colour vision difficulty is present, avoid commercial pilot, railway loco pilot, or certain armed forces roles where colour perception is mandatory. If standing/walking is difficult, favor desk or cognitive roles.
   - Cross-check family finances & earning expectation: If student must start earning quickly after Class 10/12, suggest high-ROI diploma, polytechnic, technical degree, or vocational pathways alongside long-term paths.

3. **OUTPUT FORMAT (STRICT JSON ONLY)**:
Produce a comprehensive report with exactly 3 matching careers and 6 detailed insight pillars:

- "matches": Array of exactly 3 objects:
  - "name": Precise career title (string, e.g. "Data Analyst", "Agricultural Officer", "Cybersecurity Specialist", "Physiotherapist", "Graphic & UI Designer", etc.)
  - "score": Realistic match score 1-100 (number)
  - "why": 1-2 insightful, highly personalised sentences explaining why this career fits this student's specific answers from the 44 questions.
  - "roadmap": Array of 3-5 progressive steps from current class to career launch:
    - "stage": Stage title (string, e.g., "Class 11-12 (MPC / BiPC / CEC / MEC / Vocational)", "Diploma / Degree", etc.)
    - "description": Practical advice for this stage including exact stream to select after Class 10.
    - "duration": Duration (string, e.g., "2 years")
    - "institutes": Array of 3-5 real top/reputed colleges or institutes in India for this stage (empty if Class 11-12).

- "insights": Object with 6 keys (2-3 practical, detailed sentences each):
  - "studyRoadmap": Immediate subject focus and academic strategy based on their liked and difficult subjects.
  - "whereToStudy": Recommended colleges, polytechnics, or universities in India matching their family financial context.
  - "skillsToBuild": Specific actionable skills, tools, or hobbies to develop starting today.
  - "salaryAndDemand": Realistic entry-level and 5-year salary ranges in India with job market outlook.
  - "whatToStudyNext": Immediate next academic step after Class 10 (exact Intermediate stream, diploma, or vocational course) and key entrance exams.
  - "parentGuidance": Tailored advice for parents considering their family situation, earning needs, and student's natural strengths.

Respond ONLY with valid JSON. No markdown backticks, no code fences.
{
  "matches": [{"name":"...","score":0,"why":"...","roadmap":[{"stage":"...","description":"...","duration":"...","institutes":["..."]}]}],
  "insights": {"studyRoadmap":"...","whereToStudy":"...","skillsToBuild":"...","salaryAndDemand":"...","whatToStudyNext":"...","parentGuidance":"..."}
}`;
}

export function convertProfileToFormData(profile: any): FormData {
  const liked = Array.isArray(profile.likedSubjects) ? profile.likedSubjects : [];
  const difficult = Array.isArray(profile.difficultSubjects) ? profile.difficultSubjects : [];
  
  const interests: string[] = [];
  if (profile.extracurriculars?.sports) interests.push("Sports");
  if (profile.extracurriculars?.arts) interests.push("Design");
  if (profile.extracurriculars?.musicDance) interests.push("Music");
  if (profile.extracurriculars?.debateQuiz) interests.push("Public Speaking");
  if (profile.extracurriculars?.nccScouts) interests.push("Defence");
  if (profile.extracurriculars?.schoolClubs) interests.push("Social Work");
  if (liked.includes("Computers")) interests.push("Computers");
  if (liked.includes("Biology")) interests.push("Biology");
  if (liked.includes("Maths")) interests.push("Engineering");
  if (liked.includes("Social Studies")) interests.push("Government Jobs");
  if (liked.includes("Physical Science")) interests.push("Science");

  return {
    name: profile.studentName || "Student",
    phone_number: profile.student_phone || profile.phone || "Not provided",
    fatherProfession: profile.fatherWorkDetail || profile.fatherWorkType || "",
    motherProfession: profile.motherWorkDetail || profile.motherWorkType || "",
    dob: profile.dob || "",
    gender: profile.gender || "",
    city: profile.villageTown || profile.mandal || "",
    state: profile.district ? `${profile.district}, Andhra Pradesh` : "Andhra Pradesh",
    country: "India",
    educationLevel: profile.studentClass || "Class 10",
    section: profile.section || "",
    schoolName: profile.school || "",
    favoriteSubjects: liked,
    difficultSubjects: difficult,
    performance: profile.marksDescription || "Good",
    board: "State Board",
    interests: interests.length > 0 ? interests : ["Science", "Computers"],
    customInterests: profile.careerOnMind || "",
    skills: ["Problem Solving", "Communication"],
    hobbies: profile.hobbyDetail || "",
    achievements: "",
    projects: "",
    careerDream: profile.careerOnMind || "",
    careerType: "Not Sure",
    studyLocation: "Within my state",
    studyMode: "Full-time",
    financial: profile.familyLoan ? "Need affordable options" : "No major constraint",
    parentExpectations: profile.earningExpectation || "",
    notWanted: "",
    confirmed: true,
    aiDisclaimerConfirmed: true,
  };
}

export async function generateDiagnosticCareerReport(
  profile: any,
  focusCareer?: string
): Promise<CareerReport> {
  const prompt = buildDiagnosticPrompt(profile, focusCareer);
  return callAI(prompt, "Pathfinder AI - Diagnostic Report");
}

