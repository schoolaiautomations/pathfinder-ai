import type { RoadmapFormData, LearningRoadmap, SkillLesson } from "./roadmap-data";

const API_KEY =
  (import.meta.env.VITE_OPENROUTER_API_KEY as string) ||
  "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";
const BASE_URL = "https://openrouter.ai/api/v1";

// ─── Helper: call OpenRouter ────────────────────────────────────────────────

async function callOpenRouter(systemPrompt: string, userPrompt: string): Promise<string> {
  const activeKey = API_KEY;
  if (!activeKey) {
    throw new Error("OpenRouter API key is not configured.");
  }

  const response = await fetch(`${BASE_URL}/chat/completions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${activeKey}`,
      "HTTP-Referer": window.location.origin,
      "X-Title": "Pathfinder AI - Learning Roadmap",
    },
    body: JSON.stringify({
      model: "openai/gpt-oss-120b",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userPrompt },
      ],
      temperature: 0.7,
      max_tokens: 8192,
    }),
  });

  if (!response.ok) {
    const errorBody = await response.text().catch(() => "");
    console.error("OpenRouter API error:", response.status, errorBody);
    throw new Error(`AI service returned an error (${response.status}). Please try again.`);
  }

  const data = await response.json();

  const finishReason = data?.choices?.[0]?.finish_reason;
  if (finishReason === "length") {
    throw new Error("The AI response was too long and got cut off. Please try again.");
  }

  const content: string = data?.choices?.[0]?.message?.content ?? "";
  if (!content) {
    throw new Error("The AI returned an empty response. Please try again.");
  }

  // Strip markdown code fences if present
  let cleaned = content.trim();
  const fenceMatch = cleaned.match(/```(?:json)?\s*([\s\S]*?)\s*```/);
  if (fenceMatch) {
    cleaned = fenceMatch[1].trim();
  }
  if (!cleaned.startsWith("{")) {
    const jsonStart = cleaned.indexOf("{");
    if (jsonStart !== -1) {
      cleaned = cleaned.slice(jsonStart);
    }
  }

  return cleaned;
}

// ─── Generate Learning Roadmap ──────────────────────────────────────────────

export async function generateLearningRoadmap(
  formData: RoadmapFormData
): Promise<LearningRoadmap> {
  const systemPrompt =
    "You are an expert Indian education and career mentor with deep knowledge of Indian academics, exams like JEE, NEET, CLAT, CAT, GATE, UPSC, entrance tests, and career pathways. Always respond with valid JSON only, no markdown fences or extra text.";

  const userPrompt = `A student wants to become a "${formData.careerGoal}".
They are currently in "${formData.currentClass}" and located in "${formData.location}".

Generate a comprehensive career guidance response with ALL of the following sections:

---

SECTION 1 — ACADEMIC PATHWAY (MUST BE STRICTLY CHRONOLOGICAL & LINEAR):
Generate the exact academic progression in this 3-step chronological order:

Step 1: intermediateOptions: 2-3 stream options for Class 11-12 (e.g. PCM, PCB, Commerce, Humanities) with subjects studied, duration ("2 years"), and why it fits this career.
Step 2: keyExams: 3-5 crucial entrance/competitive exams they must write BEFORE entering college/degree. Each exam MUST clearly state:
  - name: Name of the exam (e.g., "JEE Main & Advanced", "NEET-UG", "CUET-UG", "CLAT", "NDA")
  - when: Exactly when to write it in chronological order (e.g. "During Class 12 / Right after 12th Board Exams in April-May", "After Class 10 for Polytechnic Diploma", "Final year of Degree for GATE/CAT")
  - description: 1-2 sentence overview of what the exam tests and syllabus
  - forCourses: 2-3 specific degree courses/colleges this exam gives admission into
Step 3: degreeOptions: 3-4 degree/diploma courses they will pursue AFTER qualifying the entrance exams above (e.g. "B.Tech in Computer Science & Engineering", "MBBS", "B.Des in Product Design") with course duration (e.g. "4 years", "5.5 years"), type ("Degree" or "Diploma"), key subjects studied, and career relevance.

---

SECTION 2 — LEARNING PHASES:
A step-by-step learning roadmap (5–7 phases) from their current level to career goal.
Each phase must have: title, description, skills (3-5), resources (2-4 real ones), actions (2-3 immediate), milestone, duration.

---

SECTION 3 — HOBBIES TO DEVELOP:
5-7 hobbies or extracurricular activities this student should actively cultivate FROM NOW that align with their career goal.
Each with: hobby name, and reason why it helps their career.

---

SECTION 4 — SCHOLARSHIPS & SCHOLARSHIP EXAMS:
3-5 crucial scholarships and merit scholarship examinations (Government & Private/Corporate in India) relevant to this career/degree track:
- name: Name of the scholarship (e.g. "INSPIRE Scholarship (SHE)", "National Scholarship Portal (NSP) Post-Matric", "Reliance Foundation Undergraduate Scholarship", "AICTE Pragati / Saksham Scheme", "Kishore Vaigyanik / PM-USP Scheme")
- provider: Organization providing it (e.g. "Govt of India / DST", "Ministry of Education", "Reliance Foundation", "AICTE / State Govt")
- eligibility: Clear eligibility criteria (e.g. "Top 1% in 12th board exams / pursuing BSc or B.Tech", "Family income < 6 LPA")
- benefits: Financial assistance / perk (e.g. "Up to ₹80,000 per year + mentorship", "Full tuition waiver")
- examOrSelection: Selection process or exam required (e.g. "12th Board Merit + JEE/NEET Rank or NSP Aptitude Exam")
- whenToApply: When to apply (e.g. "July–November during Class 12 / 1st Year College")

---

SECTION 5 — SIMILAR PROFESSIONS:
3 related career alternatives that share significant skill overlap with their goal.
Each with: title, reason (why it's similar), overlap (shared skills/knowledge).

---

SECTION 6 — FUTURE OUTLOOK:
Honest, realistic future assessment of this profession in the next 5-15 years:
- demandTrend: One of "High Growth", "Stable", "Moderate", or "Declining"
- aiImpact: 2-3 sentences about how AI will affect this role (honestly — will it automate it? augment it? create new roles?)
- emergingOpportunities: 3-5 new and emerging sub-fields or opportunities opening up
- salaryRange: Realistic Indian salary range (entry level and senior level, in LPA)
- topRecruiters: 5-6 top companies or organisations that hire for this role in India
- jobSecurity: 1-2 sentences of honest job security assessment

---

Respond ONLY with valid JSON matching exactly this structure:
{
  "careerGoal": "...",
  "summary": "2-3 sentence overview of the journey",
  "academicPathway": {
    "intermediateOptions": [
      {
        "name": "...",
        "type": "Intermediate",
        "duration": "2 years",
        "subjects": ["...", "..."],
        "description": "..."
      }
    ],
    "degreeOptions": [
      {
        "name": "...",
        "type": "Degree",
        "duration": "...",
        "subjects": ["...", "..."],
        "description": "..."
      }
    ],
    "keyExams": [
      {
        "name": "...",
        "description": "...",
        "when": "...",
        "forCourses": ["B.Tech at IITs/NITs", "B.E. at top engineering colleges"]
      }
    ]
  },
  "phases": [
    {
      "title": "...",
      "description": "...",
      "skills": ["...", "..."],
      "resources": ["...", "..."],
      "actions": ["...", "..."],
      "milestone": "...",
      "duration": "..."
    }
  ],
  "hobbies": [
    {
      "hobby": "...",
      "reason": "..."
    }
  ],
  "scholarships": [
    {
      "name": "...",
      "provider": "...",
      "eligibility": "...",
      "benefits": "...",
      "examOrSelection": "...",
      "whenToApply": "..."
    }
  ],
  "similarProfessions": [
    {
      "title": "...",
      "reason": "...",
      "overlap": "..."
    }
  ],
  "futureOutlook": {
    "demandTrend": "...",
    "aiImpact": "...",
    "emergingOpportunities": ["...", "..."],
    "salaryRange": "...",
    "topRecruiters": ["...", "..."],
    "jobSecurity": "..."
  }
}`;

  const cleaned = await callOpenRouter(systemPrompt, userPrompt);

  try {
    const parsed = JSON.parse(cleaned) as LearningRoadmap;

    if (!parsed.phases || !Array.isArray(parsed.phases) || parsed.phases.length === 0) {
      throw new Error("Invalid response: missing phases array");
    }

    parsed.careerGoal = parsed.careerGoal || formData.careerGoal;

    // Provide defaults for new fields in case AI omits them
    if (!parsed.academicPathway) {
      parsed.academicPathway = { intermediateOptions: [], degreeOptions: [], keyExams: [] };
    }
    if (!parsed.hobbies) parsed.hobbies = [];
    if (!parsed.scholarships) parsed.scholarships = [];
    if (!parsed.similarProfessions) parsed.similarProfessions = [];
    if (!parsed.futureOutlook) {
      parsed.futureOutlook = {
        demandTrend: "Stable",
        aiImpact: "AI is expected to augment this profession.",
        emergingOpportunities: [],
        salaryRange: "Varies by experience",
        topRecruiters: [],
        jobSecurity: "Moderate job security.",
      };
    }

    return parsed;
  } catch (e) {
    console.error("Failed to parse roadmap response:", cleaned);
    throw new Error("The AI returned an invalid response. Please try again.");
  }
}

// ─── Generate Skill Lesson ──────────────────────────────────────────────────

export async function generateSkillLesson(
  skillName: string,
  careerGoal: string,
  currentClass: string
): Promise<SkillLesson> {
  const systemPrompt =
    "You are an expert tutor who creates clear, engaging learning content for students. Always respond with valid JSON only, no markdown fences or extra text.";

  const userPrompt = `Create a comprehensive learning lesson for the skill: "${skillName}"

Context: The student wants to become a "${careerGoal}" and is currently in "${currentClass}".

Generate a structured lesson with:

1. "skillName": "${skillName}"
2. "overview": A 3-4 sentence overview explaining what this skill is, why it's important for their career goal, and what they'll be able to do after learning it.
3. "topics": An array of 3-5 topic sections. Each topic must have:
   - "title": Topic heading
   - "explanation": Clear 3-5 sentence explanation suitable for a ${currentClass} student
   - "example": A practical, real-world example or code snippet that illustrates the concept
4. "practiceExercises": Array of 3-4 hands-on exercises the student can do to practice this skill. Be specific and actionable.
5. "resources": Array of 3-5 learning resources, each with:
   - "name": Resource name
   - "type": Type of resource (e.g., "Course", "Book", "YouTube Channel", "Website", "Tool")
   - "url": URL if applicable (use real URLs), or omit if not available
6. "nextSteps": Array of 2-3 suggestions for what to learn next after mastering this skill

IMPORTANT:
- Tailor the difficulty level to a "${currentClass}" student
- Use simple, clear language
- Examples should be practical and relatable
- Resources should be REAL and accessible
- Make it engaging and encouraging

Respond ONLY with valid JSON matching this structure:
{
  "skillName": "...",
  "overview": "...",
  "topics": [{"title": "...", "explanation": "...", "example": "..."}],
  "practiceExercises": ["...", "..."],
  "resources": [{"name": "...", "type": "...", "url": "..."}],
  "nextSteps": ["...", "..."]
}`;

  const cleaned = await callOpenRouter(systemPrompt, userPrompt);

  try {
    const parsed = JSON.parse(cleaned) as SkillLesson;

    if (!parsed.topics || !Array.isArray(parsed.topics) || parsed.topics.length === 0) {
      throw new Error("Invalid response: missing topics array");
    }

    parsed.skillName = parsed.skillName || skillName;

    return parsed;
  } catch (e) {
    console.error("Failed to parse skill lesson response:", cleaned);
    throw new Error("The AI returned an invalid response. Please try again.");
  }
}
