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
    const response = await fetch(`${SUPABASE_URL}/rest/v1/submissions`, {
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
      console.log("Successfully saved submission to Supabase");
      return true;
    } else {
      const errorBody = await response.text();
      console.warn("Supabase save response error:", response.status, errorBody);
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
    const response = await fetch(`${SUPABASE_URL}/rest/v1/submissions?select=*&order=created_at.desc`, {
      method: "GET",
      headers: {
        "apikey": SUPABASE_ANON_KEY,
        "Authorization": `Bearer ${SUPABASE_ANON_KEY}`,
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      const data = await response.json();
      if (Array.isArray(data)) {
        remoteRecords = data;
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
    await fetch(`${SUPABASE_URL}/rest/v1/submissions?id=eq.${id}`, {
      method: "DELETE",
      headers: {
        "apikey": SUPABASE_ANON_KEY,
        "Authorization": `Bearer ${SUPABASE_ANON_KEY}`,
      },
    });
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

// ─── Roadmap Basic (Career Roadmap Submissions) ──────────────────────────────

export interface RoadmapBasicRecord {
  councellor_name?: string | null;
  student_name: string;
  student_class: string;
  student_section?: string | null;
  student_school: string;
  student_location: string;
  student_phone: string;
  career_opted: string;
}

/**
 * Saves a basic roadmap form submission to the Supabase `roadmap_basic` table
 */
export async function saveRoadmapBasicToSupabase(data: RoadmapBasicRecord): Promise<boolean> {
  try {
    const response = await fetch(`${SUPABASE_URL}/rest/v1/roadmap_basic`, {
      method: "POST",
      headers: {
        "apikey": SUPABASE_ANON_KEY,
        "Authorization": `Bearer ${SUPABASE_ANON_KEY}`,
        "Content-Type": "application/json",
        "Prefer": "return=representation",
      },
      body: JSON.stringify({
        councellor_name: data.councellor_name || null,
        student_name: data.student_name,
        student_class: data.student_class,
        student_section: data.student_section || null,
        student_school: data.student_school,
        student_location: data.student_location,
        student_phone: data.student_phone,
        career_opted: data.career_opted,
      }),
    });

    if (response.ok) {
      console.log("Successfully saved roadmap submission to Supabase table: roadmap_basic");
      return true;
    } else {
      const errorBody = await response.text();
      console.warn("Supabase save roadmap_basic error:", response.status, errorBody);
    }
  } catch (err) {
    console.warn("Supabase save roadmap_basic network warning:", err);
  }
  return false;
}

// ─── Book Counselling Session Submissions ────────────────────────────────────

export interface BookCouncellingRecord {
  councellor_name?: string | null;
  student_name: string;
  student_phone: string;
  student_class?: string | null;
  student_school?: string | null;
  student_location?: string | null;
  query_description?: string | null;
  career_opted?: string | null;
}

export interface SaveBookingResult {
  success: boolean;
  isDuplicate?: boolean;
  error?: string;
}

/**
 * Saves a 1-on-1 career counselling booking request to Supabase `book_councelling` table.
 * Automatically checks and prevents duplicate bookings for the same student phone / name.
 */
export async function saveBookCouncellingToSupabase(data: BookCouncellingRecord): Promise<SaveBookingResult> {
  try {
    const cleanPhone = (data.student_phone || "").trim();
    const cleanName = (data.student_name || "").trim();

    // Check if an identical booking already exists in Supabase
    if (cleanPhone && cleanName) {
      const checkUrl = `${SUPABASE_URL}/rest/v1/book_councelling?student_phone=eq.${encodeURIComponent(cleanPhone)}&student_name=eq.${encodeURIComponent(cleanName)}&select=id,created_at&order=created_at.desc&limit=1`;
      const checkRes = await fetch(checkUrl, {
        method: "GET",
        headers: {
          "apikey": SUPABASE_ANON_KEY,
          "Authorization": `Bearer ${SUPABASE_ANON_KEY}`,
        },
      });
      if (checkRes.ok) {
        const existing = await checkRes.json();
        if (existing && existing.length > 0) {
          console.warn("Duplicate booking request rejected for:", cleanName, cleanPhone);
          return {
            success: false,
            isDuplicate: true,
            error: "A booking request for this student and phone number has already been submitted.",
          };
        }
      }
    }

    const response = await fetch(`${SUPABASE_URL}/rest/v1/book_councelling`, {
      method: "POST",
      headers: {
        "apikey": SUPABASE_ANON_KEY,
        "Authorization": `Bearer ${SUPABASE_ANON_KEY}`,
        "Content-Type": "application/json",
        "Prefer": "return=representation",
      },
      body: JSON.stringify({
        councellor_name: data.councellor_name || null,
        student_name: data.student_name,
        student_phone: data.student_phone,
        student_class: data.student_class || null,
        student_school: data.student_school || null,
        student_location: data.student_location || null,
        query_description: data.query_description || null,
        career_opted: data.career_opted || null,
      }),
    });

    if (response.ok) {
      console.log("Successfully saved booking request to Supabase table: book_councelling");
      return { success: true };
    } else {
      const errorBody = await response.text();
      console.warn("Supabase save book_councelling error:", response.status, errorBody);
      return {
        success: false,
        error: "Failed to submit booking request. Please try again.",
      };
    }
  } catch (err: any) {
    console.warn("Supabase save book_councelling network warning:", err);
    return {
      success: false,
      error: err?.message || "Network error while submitting booking request.",
    };
  }
}

// ─── Counsellor Dashboard: Fetch Submissions ─────────────────────────────────

export interface RoadmapBasicRow {
  id: number;
  created_at: string;
  councellor_name: string | null;
  student_name: string | null;
  student_class: string | null;
  student_section?: string | null;
  student_school: string | null;
  student_location: string | null;
  student_phone: string | null;
  career_opted: string | null;
}

export interface BookCouncellingRow {
  id: number;
  created_at: string;
  councellor_name: string | null;
  student_name: string | null;
  student_phone: string | null;
  student_class: string | null;
  student_school: string | null;
  student_location: string | null;
  query_description: string | null;
  career_opted: string | null;
}

// ─── Counsellor Customisation (School Names & Sections) ──────────────────────

export interface CounsellorCustomisationData {
  sections?: string[];
  school_names?: string[];
}

export interface CounsellorCustomisationRecord {
  id: number;
  created_at: string;
  councellor_customisation: CounsellorCustomisationData;
  councellor_name: string | null;
}

/**
 * Fetch customisation settings (school names & sections) for a counsellor
 */
export async function fetchCounsellorCustomisation(counsellorName: string): Promise<CounsellorCustomisationData | null> {
  if (!counsellorName || !counsellorName.trim()) return null;
  try {
    const url = `${SUPABASE_URL}/rest/v1/counsellor_customisation?councellor_name=eq.${encodeURIComponent(counsellorName.trim())}&order=created_at.desc&limit=1`;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        apikey: SUPABASE_ANON_KEY,
        Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      const data = await response.json();
      if (Array.isArray(data) && data.length > 0) {
        const item = data[0];
        const customObj = item.councellor_customisation || {};
        return {
          sections: Array.isArray(customObj.sections) ? customObj.sections.filter(Boolean) : [],
          school_names: Array.isArray(customObj.school_names) ? customObj.school_names.filter(Boolean) : [],
        };
      }
    } else {
      console.warn("Failed to fetch counsellor customisation:", response.status);
    }
  } catch (err) {
    console.warn("Error fetching counsellor customisation:", err);
  }
  return null;
}

/**
 * Fetch roadmap_basic submissions for a specific counsellor (or all if counsellorName is empty)
 */
export async function fetchRoadmapBasicByCounsellor(counsellorName?: string): Promise<RoadmapBasicRow[]> {
  try {
    const url = counsellorName?.trim()
      ? `${SUPABASE_URL}/rest/v1/roadmap_basic?councellor_name=eq.${encodeURIComponent(counsellorName.trim())}&order=created_at.desc`
      : `${SUPABASE_URL}/rest/v1/roadmap_basic?order=created_at.desc`;

    const response = await fetch(url, {
      method: "GET",
      headers: {
        "apikey": SUPABASE_ANON_KEY,
        "Authorization": `Bearer ${SUPABASE_ANON_KEY}`,
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      return await response.json();
    }
    console.warn("Failed to fetch roadmap_basic:", response.status);
  } catch (err) {
    console.warn("Error fetching roadmap_basic:", err);
  }
  return [];
}

/**
 * Fetch book_councelling submissions (optionally filtered by counsellorName)
 */
export async function fetchBookCouncellingByCounsellor(counsellorName?: string): Promise<BookCouncellingRow[]> {
  try {
    const url = counsellorName?.trim()
      ? `${SUPABASE_URL}/rest/v1/book_councelling?councellor_name=eq.${encodeURIComponent(counsellorName.trim())}&order=created_at.desc`
      : `${SUPABASE_URL}/rest/v1/book_councelling?order=created_at.desc`;

    const response = await fetch(url, {
      method: "GET",
      headers: {
        "apikey": SUPABASE_ANON_KEY,
        "Authorization": `Bearer ${SUPABASE_ANON_KEY}`,
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      return await response.json();
    }
    console.warn("Failed to fetch book_councelling:", response.status);
  } catch (err) {
    console.warn("Error fetching book_councelling:", err);
  }
  return [];
}

/**
 * Fetch all book_councelling submissions (for admin)
 */
export async function fetchBookCouncellingAll(): Promise<BookCouncellingRow[]> {
  return fetchBookCouncellingByCounsellor();
}
