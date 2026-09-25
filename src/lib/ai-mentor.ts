/**
 * AI Career Mentor Service ("Wabi AI Mentor")
 * Primary Provider: OpenRouter Free Models using user's API Key.
 * Secondary Fallback: Google Gemini API Cascade.
 * Generates direct, factual, ~80-word career roadmaps for 8th-10th grade students.
 */

import { logAiMentorQuery } from "@/lib/supabase";

const OPENROUTER_API_KEY = (import.meta.env.VITE_OPENROUTER_API_KEY as string) || "";
const GEMINI_API_KEY = (import.meta.env.VITE_GEMINI_API_KEY as string) || "";

// Proven free models on OpenRouter (high availability & multi-lingual)
const OPENROUTER_FREE_MODELS = [
  "nex-agi/nex-n2.5-pro:free",
  "nex-agi/nex-n2.5-mini:free",
  "z-ai/glm-5.2:free",
  "google/gemma-4-31b-it:free",
];

// Fallback Gemini models (prioritizing 2.5-flash and flash-latest)
const GEMINI_MODELS = [
  "gemini-2.5-flash",
  "gemini-flash-latest",
  "gemini-3-flash-preview",
  "gemini-3.5-flash-lite",
];

const SYSTEM_PROMPT = `You are "Wabi AI Mentor", an objective and knowledgeable AI Career Guide for Indian school students (Classes 8th to 10th).

CRITICAL INSTRUCTIONS:
1. ANSWER THE EXACT QUESTION DIRECTLY:
   - Address what the student specifically asked with accurate, structured facts.
   - If asked about "types of doctors", detail the major medical specializations (Pediatrician, Cardiologist, Neurologist, Dermatologist, Orthopedic, General Physician) and the educational progression (BiPC -> NEET -> MBBS -> Specialization).
   - If asked about streams, detail MPC, BiPC, CEC, MEC, or Polytechnic with career outcomes.
2. TARGET LENGTH & COMPLETION:
   - Keep answers concise and informative (around 50 to 80 words).
   - ALWAYS complete every point and sentence fully with proper punctuation (. or !).
   - NEVER cut off mid-sentence or mid-word.
3. TONE & OBJECTIVITY:
   - Provide direct, factual, and practical guidance.
   - NEVER use patronizing, clingy, or misleading phrases like "I am there for you", "I am with you", or repetitive "You can do it!". Do not make false emotional promises.
   - Show empathy ONLY when the student explicitly mentions feeling stressed, failing a subject, or facing financial hardship.
4. LANGUAGE MATCHING:
   - If the student asks in Telugu (or Tanglish like "ela chadavali"), respond in clear, grammatically sound Telugu script (తెలుగు).
   - If the student asks in English, respond in clear English.
5. ANTI-HALLUCINATION & GUARDRAILS:
   - If the question asks for unpredictable future cutoffs/fees or requires deep individual 1-on-1 assessment, state clearly: "For personalized guidance, explore our in-depth career guides below or book an online counselling session with our expert counsellors."`;

export interface AskCareerMentorOptions {
  careerContext?: string | null;
  language?: string | null;
  inputMode?: "text" | "voice" | string | null;
  studentName?: string | null;
  studentPhone?: string | null;
  studentEmail?: string | null;
  studentClass?: string | null;
  studentSchool?: string | null;
  studentLocation?: string | null;
}

export async function askCareerMentor(
  query: string,
  options?: AskCareerMentorOptions
): Promise<string> {
  const trimmed = query.trim();
  if (!trimmed) {
    return "Please ask your career question! (దయచేసి మీ కెరీర్ సందేహాన్ని అడగండి!)";
  }

  const isTeluguQuery =
    /[\u0C00-\u0C7F]/.test(trimmed) ||
    /telugu|chadavali|avvalante|cheyali|emi|em stream|inter tarvatha|10th tarvatha/i.test(trimmed);

  // 1. PRIMARY: Google Gemini API Cascade (Fast sub-second inference)
  if (GEMINI_API_KEY) {
    for (const model of GEMINI_MODELS) {
      try {
        const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${GEMINI_API_KEY}`;
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 6000); // 6s timeout

        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          signal: controller.signal,
          body: JSON.stringify({
            systemInstruction: {
              parts: [{ text: SYSTEM_PROMPT }],
            },
            contents: [
              {
                parts: [{ text: trimmed }],
              },
            ],
            generationConfig: {
              temperature: 0.2,
              maxOutputTokens: 350,
              thinkingConfig: {
                thinkingBudget: 0,
              },
            },
          }),
        });
        clearTimeout(timeoutId);

        if (response.ok) {
          const data = await response.json();
          const text: string = data?.candidates?.[0]?.content?.parts?.[0]?.text?.trim() || "";
          if (text) {
            void logAiMentorQuery({
              query_text: trimmed,
              response_text: text,
              language: isTeluguQuery ? "te" : (options?.language || "en"),
              input_mode: options?.inputMode || "text",
              career_context: options?.careerContext || null,
              model_used: `gemini/${model}`,
              student_name: options?.studentName,
              student_phone: options?.studentPhone,
              student_email: options?.studentEmail,
              student_class: options?.studentClass,
              student_school: options?.studentSchool,
              student_location: options?.studentLocation,
            });
            return text;
          }
        } else {
          console.warn(`Gemini [${model}] status ${response.status}. Trying next cascade model...`);
        }
      } catch (err: any) {
        console.warn(`Gemini [${model}] fetch error:`, err?.message || err);
      }
    }
  }

  // 2. SECONDARY: OpenRouter Free Models Fallback (with 7s timeout protection)
  if (OPENROUTER_API_KEY) {
    for (const model of OPENROUTER_FREE_MODELS) {
      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 7500); // 7.5s max per model

        const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${OPENROUTER_API_KEY}`,
            "HTTP-Referer": typeof window !== "undefined" ? window.location.origin : "http://localhost:8080",
            "X-Title": "Wabi Career Guidance",
          },
          signal: controller.signal,
          body: JSON.stringify({
            model,
            messages: [
              { role: "system", content: SYSTEM_PROMPT },
              { role: "user", content: trimmed },
            ],
            max_tokens: 350,
            temperature: 0.3,
          }),
        });
        clearTimeout(timeoutId);

        if (response.ok) {
          const data = await response.json();
          const content = data?.choices?.[0]?.message?.content?.trim();
          if (content) {
            void logAiMentorQuery({
              query_text: trimmed,
              response_text: content,
              language: isTeluguQuery ? "te" : (options?.language || "en"),
              input_mode: options?.inputMode || "text",
              career_context: options?.careerContext || null,
              model_used: `openrouter/${model}`,
              student_name: options?.studentName,
              student_phone: options?.studentPhone,
              student_email: options?.studentEmail,
              student_class: options?.studentClass,
              student_school: options?.studentSchool,
              student_location: options?.studentLocation,
            });
            return content;
          }
        } else if (response.status === 401 || response.status === 403) {
          console.warn(`OpenRouter authentication error (${response.status}). Exiting OpenRouter loop...`);
          break;
        } else {
          console.warn(`OpenRouter [${model}] status ${response.status}. Trying next free model...`);
        }
      } catch (err: any) {
        console.warn(`OpenRouter [${model}] error:`, err?.message || err);
      }
    }
  }

  // 3. Fallback message if all APIs are temporarily unavailable
  const fallbackMsg = isTeluguQuery
    ? "AI మెంటార్ సర్వర్ ప్రస్తుతం రద్దీగా ఉంది. దయచేసి కాసేపటి తర్వాత మళ్ళీ ప్రయత్నించండి, లేదా మా కెరీర్ గైడ్‌లను అన్వేషించండి (Explore Careers) లేదా మా నిపుణులతో ఆన్‌లైన్ కౌన్సెలింగ్ బుక్ చేసుకోండి."
    : "The AI Mentor is currently experiencing high server traffic. Please try asking again in a few moments, or explore in-depth career guides below or book an online counselling session for personalized 1-on-1 guidance.";

  void logAiMentorQuery({
    query_text: trimmed,
    response_text: fallbackMsg,
    language: isTeluguQuery ? "te" : (options?.language || "en"),
    input_mode: options?.inputMode || "text",
    career_context: options?.careerContext || null,
    model_used: "fallback/high-traffic",
    student_name: options?.studentName,
    student_phone: options?.studentPhone,
    student_email: options?.studentEmail,
    student_class: options?.studentClass,
    student_school: options?.studentSchool,
    student_location: options?.studentLocation,
  });

  return fallbackMsg;
}

export async function transcribeAudioBlob(
  audioBlob: Blob,
  language: "te-IN" | "en-IN"
): Promise<string> {
  if (!GEMINI_API_KEY) return "";

  try {
    const reader = new FileReader();
    const base64Promise = new Promise<string>((resolve, reject) => {
      reader.onloadend = () => {
        const res = reader.result as string;
        const base64 = res.split(",")[1];
        resolve(base64);
      };
      reader.onerror = reject;
    });
    reader.readAsDataURL(audioBlob);
    const audioBase64 = await base64Promise;
    const mimeType = audioBlob.type || "audio/webm";

    const isTelugu = language === "te-IN";
    const prompt = isTelugu
      ? "Listen to the student's voice input and transcribe the question in Telugu script (తెలుగు). Return ONLY the transcribed text without quotes or explanations."
      : "Listen to the student's voice input and transcribe the question in English. Return ONLY the transcribed text without quotes or explanations.";

    for (const model of GEMINI_MODELS) {
      try {
        const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${GEMINI_API_KEY}`;
        const response = await fetch(url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [
              {
                parts: [
                  { text: prompt },
                  { inlineData: { mimeType, data: audioBase64 } },
                ],
              },
            ],
          }),
        });

        if (response.ok) {
          const data = await response.json();
          const text = data?.candidates?.[0]?.content?.parts?.[0]?.text?.trim();
          if (text) return text;
        }
      } catch (e) {
        console.warn("Audio transcribe error on model", model, e);
      }
    }
  } catch (err) {
    console.warn("transcribeAudioBlob failed:", err);
  }

  return "";
}
