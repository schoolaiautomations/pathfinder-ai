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
    "You are an expert education and career mentor. Always respond with valid JSON only, no markdown fences or extra text.";

  const userPrompt = `A student wants to become a "${formData.careerGoal}".
They are currently in "${formData.currentClass}" and located in "${formData.location}".

Generate a detailed, phase-by-phase learning roadmap that takes them from where they are RIGHT NOW to achieving their career goal. The roadmap should be a clean, step-by-step learning path.

Create 5 to 8 learning phases. Each phase must have:
- "title": Phase name (e.g., "Foundation Building", "Core Skills Development")
- "description": 2-3 sentence description of what this phase covers and why it matters
- "skills": Array of 3-5 specific skills to learn in this phase (these should be concrete and learnable)
- "resources": Array of 2-4 specific learning resources (real course names, book titles, websites, YouTube channels)
- "actions": Array of 2-3 immediate action items — things to start doing RIGHT NOW for this phase
- "milestone": A single clear, measurable milestone that marks completion of this phase
- "duration": Estimated time to complete this phase (e.g., "2-3 months", "6 months")

IMPORTANT: 
- Make the phases progressive — start from their current level and build up
- Skills should be specific enough that a student can search for and learn them
- Resources should be REAL (actual courses, books, platforms that exist)
- Action items should be immediately actionable
- Milestones should be measurable

Respond ONLY with valid JSON matching this structure:
{
  "careerGoal": "...",
  "summary": "A 2-3 sentence overview of the complete learning journey",
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
  ]
}`;

  const cleaned = await callOpenRouter(systemPrompt, userPrompt);

  try {
    const parsed = JSON.parse(cleaned) as LearningRoadmap;

    if (!parsed.phases || !Array.isArray(parsed.phases) || parsed.phases.length === 0) {
      throw new Error("Invalid response: missing phases array");
    }

    // Ensure careerGoal is set
    parsed.careerGoal = parsed.careerGoal || formData.careerGoal;

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
