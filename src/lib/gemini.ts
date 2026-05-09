import type { FormData, CareerReport } from "./career-data";

const API_KEY = import.meta.env.VITE_OPENROUTER_API_KEY as string;
const BASE_URL = "https://openrouter.ai/api/v1";

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
  if (!API_KEY) {
    throw new Error("OpenRouter API key is not configured. Please add VITE_OPENROUTER_API_KEY to your .env file.");
  }

  const prompt = buildPrompt(formData);

  const response = await fetch(`${BASE_URL}/chat/completions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${API_KEY}`,
      "HTTP-Referer": window.location.origin,
      "X-Title": "Pathfinder AI",
    },
    body: JSON.stringify({
      model: "openai/gpt-oss-120b:free",
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
    throw new Error(`AI service returned an error (${response.status}). Please try again.`);
  }

  const data = await response.json();

  // Check if the response was truncated
  const finishReason = data?.choices?.[0]?.finish_reason;
  if (finishReason === "length") {
    console.error("OpenRouter response truncated (finish_reason=length)");
    throw new Error("The AI response was too long and got cut off. Please try again.");
  }

  const content: string = data?.choices?.[0]?.message?.content ?? "";

  if (!content) {
    throw new Error("The AI returned an empty response. Please try again.");
  }

  // Extract JSON from the response — strip markdown code fences if present
  let cleaned = content.trim();
  // Remove ```json ... ``` or ``` ... ``` wrappers (multiline)
  const fenceMatch = cleaned.match(/```(?:json)?\s*([\s\S]*?)\s*```/);
  if (fenceMatch) {
    cleaned = fenceMatch[1].trim();
  }
  // Also try to extract raw JSON object if no fences
  if (!cleaned.startsWith("{")) {
    const jsonStart = cleaned.indexOf("{");
    if (jsonStart !== -1) {
      cleaned = cleaned.slice(jsonStart);
    }
  }

  try {
    const parsed = JSON.parse(cleaned) as CareerReport;

    // Validate structure
    if (!parsed.matches || !Array.isArray(parsed.matches) || parsed.matches.length === 0) {
      throw new Error("Invalid response: missing matches array");
    }
    if (!parsed.insights || typeof parsed.insights !== "object") {
      throw new Error("Invalid response: missing insights object");
    }

    // Ensure scores are clamped 1-100
    parsed.matches = parsed.matches.slice(0, 3).map((m) => ({
      name: m.name,
      score: Math.max(1, Math.min(100, Math.round(m.score))),
      why: m.why,
      roadmap: m.roadmap || [],
    }));

    return parsed;
  } catch (e) {
    console.error("Failed to parse OpenRouter response:", content);
    throw new Error("The AI returned an invalid response. Please try again.");
  }
}
