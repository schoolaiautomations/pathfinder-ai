import type { FormData, CareerReport } from "./career-data";

export const SUPABASE_URL = "https://jqerkjewmmpowiwwpifv.supabase.co";
export const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpxZXJramV3bW1wb3dpd3dwaWZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODU4OTc0NTMsImV4cCI6MjEwMTQ3MzQ1M30.z7TpLsSWGrq4bE1cRED-Pm1G2_hQaVI5vYDKBdcwFOs";

export interface SubmissionRecord {
  id?: string;
  created_at: string;
  name: string;
  phone_number: string;
  father_profession?: string;
  mother_profession?: string;
  dob?: string;
  gender?: string;
  city?: string;
  state?: string;
  country?: string;
  education_level: string;
  section?: string;
  school_name?: string;
  performance?: string;
  board?: string;
  interests?: string[];
  skills?: string[];
  career_dream?: string;
  form_data: FormData;
  report_data: CareerReport;
  top_match?: string;
  top_match_score?: number;
}

const LOCAL_STORAGE_SUBMISSIONS_KEY = "wabi_admin_submissions";

/**
 * Saves submission data and generated AI report to Supabase (and local backup)
 */
export async function saveSubmissionToSupabase(formData: FormData, report: CareerReport): Promise<boolean> {
  const topMatch = report.matches?.[0];
  const record: SubmissionRecord = {
    id: `sub_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
    created_at: new Date().toISOString(),
    name: formData.name || "Anonymous Student",
    phone_number: formData.phone_number || "Not provided",
    father_profession: formData.fatherProfession || "",
    mother_profession: formData.motherProfession || "",
    dob: formData.dob || "",
    gender: formData.gender || "",
    city: formData.city || "",
    state: formData.state || "",
    country: formData.country || "",
    education_level: formData.educationLevel || "",
    section: formData.section || "",
    school_name: formData.schoolName || "",
    performance: formData.performance || "",
    board: formData.board || "",
    interests: formData.interests || [],
    skills: formData.skills || [],
    career_dream: formData.careerDream || "",
    form_data: formData,
    report_data: report,
    top_match: topMatch?.name || "N/A",
    top_match_score: topMatch?.score || 0,
  };

  // 1. Save to local storage cache so admin always has access
  saveToLocalStorage(record);

  // 2. Try saving to Supabase REST endpoint
  try {
    const endpoints = ["submissions", "career_submissions", "reports"];
    for (const table of endpoints) {
      const response = await fetch(`${SUPABASE_URL}/rest/v1/${table}`, {
        method: "POST",
        headers: {
          "apikey": SUPABASE_ANON_KEY,
          "Authorization": `Bearer ${SUPABASE_ANON_KEY}`,
          "Content-Type": "application/json",
          "Prefer": "return=representation",
        },
        body: JSON.stringify(record),
      });

      if (response.ok) {
        console.log(`Successfully saved submission to Supabase table: ${table}`);
        return true;
      }
    }
  } catch (err) {
    console.warn("Supabase save network warning (saved to local backup):", err);
  }

  return true;
}

/**
 * Fetches all submissions from Supabase and merges with local submissions
 */
export async function getSubmissionsFromSupabase(): Promise<SubmissionRecord[]> {
  let remoteRecords: SubmissionRecord[] = [];

  try {
    const endpoints = ["submissions", "career_submissions", "reports"];
    for (const table of endpoints) {
      const response = await fetch(`${SUPABASE_URL}/rest/v1/${table}?select=*&order=created_at.desc`, {
        method: "GET",
        headers: {
          "apikey": SUPABASE_ANON_KEY,
          "Authorization": `Bearer ${SUPABASE_ANON_KEY}`,
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const data = await response.json();
        if (Array.isArray(data) && data.length > 0) {
          remoteRecords = data;
          break;
        }
      }
    }
  } catch (err) {
    console.warn("Could not fetch remote Supabase submissions, using local cache:", err);
  }

  const localRecords = getFromLocalStorage();

  // Combine remote and local records without duplicates (by id or date+name)
  const map = new Map<string, SubmissionRecord>();
  
  localRecords.forEach((r) => {
    const key = r.id || `${r.created_at}_${r.name}`;
    map.set(key, r);
  });

  remoteRecords.forEach((r) => {
    const key = r.id || `${r.created_at}_${r.name}`;
    map.set(key, r);
  });

  const merged = Array.from(map.values()).sort(
    (a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
  );

  return merged;
}

/**
 * Delete a submission record
 */
export async function deleteSubmission(id: string): Promise<void> {
  // Delete from local storage
  const local = getFromLocalStorage().filter((r) => r.id !== id);
  localStorage.setItem(LOCAL_STORAGE_SUBMISSIONS_KEY, JSON.stringify(local));

  // Delete from Supabase if possible
  try {
    const endpoints = ["submissions", "career_submissions", "reports"];
    for (const table of endpoints) {
      await fetch(`${SUPABASE_URL}/rest/v1/${table}?id=eq.${id}`, {
        method: "DELETE",
        headers: {
          "apikey": SUPABASE_ANON_KEY,
          "Authorization": `Bearer ${SUPABASE_ANON_KEY}`,
        },
      });
    }
  } catch (err) {
    console.warn("Supabase delete failed:", err);
  }
}

// Helpers
function saveToLocalStorage(record: SubmissionRecord) {
  try {
    const existing = getFromLocalStorage();
    const updated = [record, ...existing.filter((r) => r.id !== record.id)];
    localStorage.setItem(LOCAL_STORAGE_SUBMISSIONS_KEY, JSON.stringify(updated.slice(0, 200)));
  } catch (e) {
    console.error("Failed to save submission to localStorage:", e);
  }
}

function getFromLocalStorage(): SubmissionRecord[] {
  try {
    const saved = localStorage.getItem(LOCAL_STORAGE_SUBMISSIONS_KEY);
    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
}
