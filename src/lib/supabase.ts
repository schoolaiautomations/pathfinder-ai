import type { FormData, CareerReport } from "./career-data";
import { createClient } from "@supabase/supabase-js";

export const SUPABASE_URL = "https://jqerkjewmmpowiwwpifv.supabase.co";
export const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpxZXJramV3bW1wb3dpd3dwaWZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODU4OTc0NTMsImV4cCI6MjEwMTQ3MzQ1M30.z7TpLsSWGrq4bE1cRED-Pm1G2_hQaVI5vYDKBdcwFOs";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true,
  },
});

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

// ─── Visitor Lead Capture (Careers Tree & FAQ) ────────────────────────────────

export interface VisitorLeadRecord {
  name: string;
  school_name: string;
  phone: string;
  source_page: string;
  councellor_name?: string | null;
}

export async function saveVisitorLeadToSupabase(lead: VisitorLeadRecord): Promise<boolean> {
  // Always save locally first as reliable backup
  try {
    const local = JSON.parse(localStorage.getItem("wabi_local_visitor_leads") || "[]");
    local.push({ ...lead, created_at: new Date().toISOString() });
    localStorage.setItem("wabi_local_visitor_leads", JSON.stringify(local));
  } catch (e) {
    console.warn("Local storage write error for visitor lead:", e);
  }

  // Save to Supabase table: visitor_leads
  try {
    const res = await fetch(`${SUPABASE_URL}/rest/v1/visitor_leads`, {
      method: "POST",
      headers: {
        "apikey": SUPABASE_ANON_KEY,
        "Authorization": `Bearer ${SUPABASE_ANON_KEY}`,
        "Content-Type": "application/json",
        "Prefer": "return=representation",
      },
      body: JSON.stringify({
        name: lead.name,
        school_name: lead.school_name,
        phone: lead.phone,
        source_page: lead.source_page,
        councellor_name: lead.councellor_name || null,
      }),
    });
    if (res.ok) {
      console.log("Successfully saved visitor lead to Supabase: visitor_leads");
      return true;
    } else {
      const errorBody = await res.text();
      console.warn("Supabase save visitor_leads error:", res.status, errorBody);
    }
  } catch (err) {
    console.warn("Supabase visitor_leads network error (saved locally):", err);
  }
  return false;
}

// ─── Student Explorers (Google Sign-In & Onboarding) ──────────────────────────

export interface StudentExplorerProfile {
  id?: number;
  created_at?: string;
  auth_user_id?: string | null;
  email?: string | null;
  student_name: string;
  student_class: string;
  student_location: string;
  student_phone: string;
  google_avatar_url?: string | null;
  last_active_at?: string;
}

const LOCAL_STORAGE_STUDENT_PROFILE_KEY = "wabi_student_explorer_profile";

/**
 * Initiates Google OAuth redirect flow via Supabase
 */
export async function signInWithGoogle(redirectTo?: string) {
  const target = redirectTo || `${window.location.origin}/career-reports`;
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: target,
      queryParams: {
        access_type: "offline",
        prompt: "consent",
      },
    },
  });
  if (error) {
    console.error("Google sign-in error:", error);
    throw error;
  }
  return data;
}

/**
 * Signs out current student and clears local profile
 */
export async function signOutStudent() {
  try {
    localStorage.removeItem(LOCAL_STORAGE_STUDENT_PROFILE_KEY);
    await supabase.auth.signOut();
  } catch (e) {
    console.warn("Sign out error:", e);
  }
}

/**
 * Fetches the registered student explorer profile from Supabase or local cache
 */
export async function getStudentExplorerProfile(
  identifier?: { email?: string | null; auth_user_id?: string | null } | string
): Promise<StudentExplorerProfile | null> {
  let email: string | null = null;
  let authUserId: string | null = null;

  if (typeof identifier === "string") {
    if (identifier.includes("@")) {
      email = identifier.trim().toLowerCase();
    } else {
      authUserId = identifier.trim();
    }
  } else if (identifier) {
    email = identifier.email ? identifier.email.trim().toLowerCase() : null;
    authUserId = identifier.auth_user_id ? identifier.auth_user_id.trim() : null;
  }

  // 1. Check local cache first
  try {
    const cached = localStorage.getItem(LOCAL_STORAGE_STUDENT_PROFILE_KEY);
    if (cached) {
      const parsed: StudentExplorerProfile = JSON.parse(cached);
      const emailMatches = email && parsed.email?.toLowerCase() === email;
      const idMatches = authUserId && parsed.auth_user_id === authUserId;
      if (emailMatches || idMatches || (!email && !authUserId && parsed.student_name)) {
        return parsed;
      }
    }
  } catch (e) {
    console.warn("Error reading cached student profile:", e);
  }

  // 2. Fetch from Supabase student_explorers table
  try {
    let query = supabase.from("student_explorers").select("*");

    if (email && authUserId) {
      query = query.or(`email.ilike.${email},auth_user_id.eq.${authUserId}`);
    } else if (email) {
      query = query.ilike("email", email);
    } else if (authUserId) {
      query = query.eq("auth_user_id", authUserId);
    } else {
      return null;
    }

    const { data, error } = await query
      .order("created_at", { ascending: false })
      .limit(1)
      .maybeSingle();

    if (error) {
      console.warn("Error fetching student explorer profile from Supabase:", error);
    } else if (data) {
      localStorage.setItem(LOCAL_STORAGE_STUDENT_PROFILE_KEY, JSON.stringify(data));
      return data as StudentExplorerProfile;
    }
  } catch (err) {
    console.warn("Failed to fetch student explorer profile from Supabase:", err);
  }

  return null;
}

/**
 * Saves or updates student explorer details in Supabase
 */
export async function saveStudentExplorerProfile(profile: {
  student_name: string;
  student_class: string;
  student_location: string;
  student_phone: string;
  email?: string | null;
  auth_user_id?: string | null;
  google_avatar_url?: string | null;
}): Promise<{ success: boolean; data?: StudentExplorerProfile; error?: string }> {
  // Always cache locally so student can immediately continue
  try {
    localStorage.setItem(LOCAL_STORAGE_STUDENT_PROFILE_KEY, JSON.stringify(profile));
  } catch (e) {
    console.warn("Failed to cache profile in local storage:", e);
  }

  try {
    const { data, error } = await supabase
      .from("student_explorers")
      .insert({
        student_name: profile.student_name,
        student_class: profile.student_class,
        student_location: profile.student_location,
        student_phone: profile.student_phone,
        email: profile.email || null,
        auth_user_id: profile.auth_user_id || null,
        google_avatar_url: profile.google_avatar_url || null,
        last_active_at: new Date().toISOString(),
      })
      .select()
      .maybeSingle();

    if (error) {
      console.warn("Supabase student_explorers insert error (proceeding with local profile):", error);
      return { success: true, data: profile as any };
    }

    if (data) {
      localStorage.setItem(LOCAL_STORAGE_STUDENT_PROFILE_KEY, JSON.stringify(data));
      return { success: true, data: data as StudentExplorerProfile };
    }
  } catch (err: any) {
    console.warn("Network error saving student_explorers (proceeding with local profile):", err);
    return { success: true, data: profile as any };
  }

  return { success: true, data: profile as any };
}

// ─── Counsellor: Comprehensive Student Profiles ─────────────────────────────

export interface StudentProfileRecord {
  id: string;
  created_at?: string;
  updated_at?: string;
  counsellor_name?: string | null;

  // Section A: Personal & School Details
  student_name: string;
  student_class?: string | null;
  section?: string | null;
  school?: string | null;
  age?: string | null;
  gender?: string | null;
  caste?: string | null;
  village_town?: string | null;
  mandal?: string | null;
  district?: string | null;
  dob?: string | null;
  filler_role?: string | null;

  // Section B: Your Family
  lives_with_father?: boolean;
  lives_with_mother?: boolean;
  lives_with_brothers?: boolean;
  brother_count?: string | null;
  lives_with_sisters?: boolean;
  sister_count?: string | null;
  lives_with_grandparents?: boolean;
  lives_with_other_relative?: boolean;
  parents_status?: string | null;
  parents_status_other?: string | null;
  father_work_type?: string | null;
  father_work_detail?: string | null;
  mother_work_type?: string | null;
  mother_work_detail?: string | null;
  other_earners?: string | null;
  other_earners_detail?: string | null;
  parents_working_ability?: string | null;
  is_eldest_child?: string | null;
  older_siblings_studying?: boolean;
  older_siblings_working?: boolean;
  older_siblings_married?: boolean;
  older_siblings_at_home?: boolean;
  older_siblings_not_applicable?: boolean;
  older_siblings_detail?: string | null;
  house_type?: string | null;
  amenity_electricity?: boolean;
  amenity_tap_water_borewell?: boolean;
  amenity_none?: boolean;
  ration_card?: string | null;
  pension_old_age_widow_disability?: boolean;
  pension_other_scheme?: boolean;
  pension_none?: boolean;
  pension_not_sure?: boolean;
  travel_two_wheeler?: boolean;
  travel_car?: boolean;
  travel_bus_auto?: boolean;
  travel_walk_cycle?: boolean;
  travel_mixed?: boolean;
  study_device?: string | null;
  quiet_study_place?: string | null;
  family_loan?: string | null;
  earning_expectation?: string | null;
  family_responsibility_type?: string | null;
  family_responsibility_detail?: string | null;

  // Section D: Your Studies & Activities
  liked_subjects?: string[];
  difficult_subjects?: string[];
  marks_description?: string | null;
  tuition_attendance?: string | null;
  repeated_class_type?: string | null;
  repeated_class_detail?: string | null;
  extracurricular_sports?: boolean;
  extracurricular_arts?: boolean;
  extracurricular_music_dance?: boolean;
  extracurricular_debate_quiz?: boolean;
  extracurricular_ncc_scouts?: boolean;
  extracurricular_school_clubs?: boolean;
  extracurricular_none?: boolean;
  hobby_type?: string | null;
  hobby_detail?: string | null;

  // Section E: How You See Your Future
  career_discussion?: string | null;
  career_certainty?: string | null;
  career_on_mind?: string | null;
  admired_role_model?: string | null;

  // Section F: Your Health & Well-being
  wears_glasses?: string | null;
  eyesight_tested?: string | null;
  colour_vision_difficulty?: string | null;
  hearing_difficulty?: string | null;
  speech_difficulty?: string | null;
  height?: string | null;
  weight?: string | null;
  height_weight_unknown?: boolean;
  long_term_health_condition?: string | null;
  health_work_standing_walking?: boolean;
  health_work_heavy_physical?: boolean;
  health_work_night_shifts?: boolean;
  health_work_outdoors_dust?: boolean;
  health_work_screen_work?: boolean;
  health_work_heavy_weights?: boolean;
  health_work_none?: boolean;
  allergies_type?: string | null;
  allergies_detail?: string | null;
  disability_certificate?: string | null;
  major_illness_or_injury?: string | null;
  regular_medical_expenses?: string | null;
  stomach_digestion_problem?: string | null;
  skin_problem?: string | null;
  skin_problem_duration?: string | null;
  skin_problem_affects_sleep?: boolean;
  skin_problem_affects_coming_to_school?: boolean;
  skin_problem_affects_feel_uncomfortable?: boolean;
  skin_problem_affects_none?: boolean;
  worrying_talk_type?: string | null;
  worrying_talk_detail?: string | null;

  raw_profile?: any;
}

export function mapRowToSavedProfile(row: any): any {
  if (row.raw_profile && typeof row.raw_profile === "object") {
    return {
      ...row.raw_profile,
      id: row.id || row.raw_profile.id,
      savedAt: row.created_at || row.updated_at || row.raw_profile.savedAt || new Date().toISOString(),
      studentName: row.student_name || row.raw_profile.studentName,
      studentClass: row.student_class || row.raw_profile.studentClass,
      school: row.school || row.raw_profile.school,
      generatedReport: row.raw_profile.generatedReport || row.generated_report || null,
      generatedReportAt: row.raw_profile.generatedReportAt || row.generated_report_at || null,
    };
  }

  return {
    id: row.id,
    savedAt: row.created_at || new Date().toISOString(),
    studentName: row.student_name || "",
    studentClass: row.student_class || "",
    section: row.section || "",
    school: row.school || "",
    age: row.age || "",
    gender: row.gender || "",
    caste: row.caste || "",
    villageTown: row.village_town || "",
    mandal: row.mandal || "",
    district: row.district || "",
    dob: row.dob || "",
    fillerRole: row.filler_role || "",
    livesWithFather: !!row.lives_with_father,
    livesWithMother: !!row.lives_with_mother,
    livesWithBrothers: !!row.lives_with_brothers,
    brotherCount: row.brother_count || "",
    livesWithSisters: !!row.lives_with_sisters,
    sisterCount: row.sister_count || "",
    livesWithGrandparents: !!row.lives_with_grandparents,
    livesWithOtherRelative: !!row.lives_with_other_relative,
    parentsStatus: row.parents_status || "",
    parentsStatusOther: row.parents_status_other || "",
    fatherWorkType: row.father_work_type || "",
    fatherWorkDetail: row.father_work_detail || "",
    motherWorkType: row.mother_work_type || "",
    motherWorkDetail: row.mother_work_detail || "",
    otherEarners: row.other_earners || "",
    otherEarnersDetail: row.other_earners_detail || "",
    parentsWorkingAbility: row.parents_working_ability || "",
    isEldestChild: row.is_eldest_child || "",
    olderSiblingsStatus: {
      studying: !!row.older_siblings_studying,
      working: !!row.older_siblings_working,
      married: !!row.older_siblings_married,
      atHome: !!row.older_siblings_at_home,
      notApplicable: !!row.older_siblings_not_applicable,
    },
    olderSiblingsDetail: row.older_siblings_detail || "",
    houseType: row.house_type || "",
    houseAmenities: {
      electricity: !!row.amenity_electricity,
      tapWaterOrBorewell: !!row.amenity_tap_water_borewell,
      none: !!row.amenity_none,
    },
    rationCard: row.ration_card || "",
    pensionSchemes: {
      oldAgeWidowDisability: !!row.pension_old_age_widow_disability,
      otherScheme: !!row.pension_other_scheme,
      no: !!row.pension_none,
      notSure: !!row.pension_not_sure,
    },
    travelModes: {
      twoWheeler: !!row.travel_two_wheeler,
      car: !!row.travel_car,
      busOrAuto: !!row.travel_bus_auto,
      walkOrCycle: !!row.travel_walk_cycle,
      mixed: !!row.travel_mixed,
    },
    studyDevice: row.study_device || "",
    quietStudyPlace: row.quiet_study_place || "",
    familyLoan: row.family_loan || "",
    earningExpectation: row.earning_expectation || "",
    familyResponsibilityType: row.family_responsibility_type || "",
    familyResponsibilityDetail: row.family_responsibility_detail || "",
    likedSubjects: Array.isArray(row.liked_subjects) ? row.liked_subjects : [],
    difficultSubjects: Array.isArray(row.difficult_subjects) ? row.difficult_subjects : [],
    marksDescription: row.marks_description || "",
    tuitionAttendance: row.tuition_attendance || "",
    repeatedClassType: row.repeated_class_type || "",
    repeatedClassDetail: row.repeated_class_detail || "",
    extracurriculars: {
      sports: !!row.extracurricular_sports,
      arts: !!row.extracurricular_arts,
      musicDance: !!row.extracurricular_music_dance,
      debateQuiz: !!row.extracurricular_debate_quiz,
      nccScouts: !!row.extracurricular_ncc_scouts,
      schoolClubs: !!row.extracurricular_school_clubs,
      none: !!row.extracurricular_none,
    },
    hobbyType: row.hobby_type || "",
    hobbyDetail: row.hobby_detail || "",
    careerDiscussion: row.career_discussion || "",
    careerCertainty: row.career_certainty || "",
    careerOnMind: row.career_on_mind || "",
    admiredRoleModel: row.admired_role_model || "",
    wearsGlasses: row.wears_glasses || "",
    eyesightTested: row.eyesight_tested || "",
    colourVisionDifficulty: row.colour_vision_difficulty || "",
    hearingDifficulty: row.hearing_difficulty || "",
    speechDifficulty: row.speech_difficulty || "",
    height: row.height || "",
    weight: row.weight || "",
    heightWeightUnknown: !!row.height_weight_unknown,
    longTermHealthCondition: row.long_term_health_condition || "",
    healthWorkDifficulties: {
      standingWalking: !!row.health_work_standing_walking,
      heavyPhysical: !!row.health_work_heavy_physical,
      nightShifts: !!row.health_work_night_shifts,
      outdoorsDust: !!row.health_work_outdoors_dust,
      screenWork: !!row.health_work_screen_work,
      heavyWeights: !!row.health_work_heavy_weights,
      none: !!row.health_work_none,
    },
    allergiesType: row.allergies_type || "",
    allergiesDetail: row.allergies_detail || "",
    disabilityCertificate: row.disability_certificate || "",
    majorIllnessOrInjury: row.major_illness_or_injury || "",
    regularMedicalExpenses: row.regular_medical_expenses || "",
    stomachDigestionProblem: row.stomach_digestion_problem || "",
    skinProblem: row.skin_problem || "",
    skinProblemDuration: row.skin_problem_duration || "",
    skinProblemAffects: {
      sleep: !!row.skin_problem_affects_sleep,
      comingToSchool: !!row.skin_problem_affects_coming_to_school,
      feelUncomfortable: !!row.skin_problem_affects_feel_uncomfortable,
      none: !!row.skin_problem_affects_none,
    },
    worryingTalkType: row.worrying_talk_type || "",
    worryingTalkDetail: row.worrying_talk_detail || "",
    generatedReport: row.generated_report || null,
    generatedReportAt: row.generated_report_at || null,
  };
}

/**
 * Saves or updates a student diagnostic profile in Supabase table `student_profiles`
 */
export async function saveStudentProfileToSupabase(
  profile: any,
  counsellorName?: string
): Promise<{ success: boolean; error?: string }> {
  const profileId = profile.id || `stu_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;
  
  // Cache locally first so nothing is lost offline
  try {
    const stored = localStorage.getItem("wabi_student_profiles");
    const existing: any[] = stored ? JSON.parse(stored) : [];
    const updated = [{ ...profile, id: profileId }, ...existing.filter((p) => p.id !== profileId)];
    localStorage.setItem("wabi_student_profiles", JSON.stringify(updated));
  } catch (e) {
    console.warn("Local storage cache warning:", e);
  }

  const row: StudentProfileRecord = {
    id: profileId,
    updated_at: new Date().toISOString(),
    counsellor_name: counsellorName || null,

    // Section A: Personal & School Details
    student_name: profile.studentName || "",
    student_class: profile.studentClass || null,
    section: profile.section || null,
    school: profile.school || null,
    age: profile.age || null,
    gender: profile.gender || null,
    caste: profile.caste || null,
    village_town: profile.villageTown || null,
    mandal: profile.mandal || null,
    district: profile.district || null,
    dob: profile.dob || null,
    filler_role: profile.fillerRole || null,

    // Section B: Your Family
    lives_with_father: !!profile.livesWithFather,
    lives_with_mother: !!profile.livesWithMother,
    lives_with_brothers: !!profile.livesWithBrothers,
    brother_count: profile.brotherCount || null,
    lives_with_sisters: !!profile.livesWithSisters,
    sister_count: profile.sisterCount || null,
    lives_with_grandparents: !!profile.livesWithGrandparents,
    lives_with_other_relative: !!profile.livesWithOtherRelative,
    parents_status: profile.parentsStatus || null,
    parents_status_other: profile.parentsStatusOther || null,
    father_work_type: profile.fatherWorkType || null,
    father_work_detail: profile.fatherWorkDetail || null,
    mother_work_type: profile.motherWorkType || null,
    mother_work_detail: profile.motherWorkDetail || null,
    other_earners: profile.otherEarners || null,
    other_earners_detail: profile.otherEarnersDetail || null,
    parents_working_ability: profile.parentsWorkingAbility || null,
    is_eldest_child: profile.isEldestChild || null,
    older_siblings_studying: !!profile.olderSiblingsStatus?.studying,
    older_siblings_working: !!profile.olderSiblingsStatus?.working,
    older_siblings_married: !!profile.olderSiblingsStatus?.married,
    older_siblings_at_home: !!profile.olderSiblingsStatus?.atHome,
    older_siblings_not_applicable: !!profile.olderSiblingsStatus?.notApplicable,
    older_siblings_detail: profile.olderSiblingsDetail || null,
    house_type: profile.houseType || null,
    amenity_electricity: !!profile.houseAmenities?.electricity,
    amenity_tap_water_borewell: !!profile.houseAmenities?.tapWaterOrBorewell,
    amenity_none: !!profile.houseAmenities?.none,
    ration_card: profile.rationCard || null,
    pension_old_age_widow_disability: !!profile.pensionSchemes?.oldAgeWidowDisability,
    pension_other_scheme: !!profile.pensionSchemes?.otherScheme,
    pension_none: !!profile.pensionSchemes?.no,
    pension_not_sure: !!profile.pensionSchemes?.notSure,
    travel_two_wheeler: !!profile.travelModes?.twoWheeler,
    travel_car: !!profile.travelModes?.car,
    travel_bus_auto: !!profile.travelModes?.busOrAuto,
    travel_walk_cycle: !!profile.travelModes?.walkOrCycle,
    travel_mixed: !!profile.travelModes?.mixed,
    study_device: profile.studyDevice || null,
    quiet_study_place: profile.quietStudyPlace || null,
    family_loan: profile.familyLoan || null,
    earning_expectation: profile.earningExpectation || null,
    family_responsibility_type: profile.familyResponsibilityType || null,
    family_responsibility_detail: profile.familyResponsibilityDetail || null,

    // Section D: Your Studies & Activities
    liked_subjects: Array.isArray(profile.likedSubjects) ? profile.likedSubjects : [],
    difficult_subjects: Array.isArray(profile.difficultSubjects) ? profile.difficultSubjects : [],
    marks_description: profile.marksDescription || null,
    tuition_attendance: profile.tuitionAttendance || null,
    repeated_class_type: profile.repeatedClassType || null,
    repeated_class_detail: profile.repeatedClassDetail || null,
    extracurricular_sports: !!profile.extracurriculars?.sports,
    extracurricular_arts: !!profile.extracurriculars?.arts,
    extracurricular_music_dance: !!profile.extracurriculars?.musicDance,
    extracurricular_debate_quiz: !!profile.extracurriculars?.debateQuiz,
    extracurricular_ncc_scouts: !!profile.extracurriculars?.nccScouts,
    extracurricular_school_clubs: !!profile.extracurriculars?.schoolClubs,
    extracurricular_none: !!profile.extracurriculars?.none,
    hobby_type: profile.hobbyType || null,
    hobby_detail: profile.hobbyDetail || null,

    // Section E: How You See Your Future
    career_discussion: profile.careerDiscussion || null,
    career_certainty: profile.careerCertainty || null,
    career_on_mind: profile.careerOnMind || null,
    admired_role_model: profile.admiredRoleModel || null,

    // Section F: Your Health & Well-being
    wears_glasses: profile.wearsGlasses || null,
    eyesight_tested: profile.eyesightTested || null,
    colour_vision_difficulty: profile.colourVisionDifficulty || null,
    hearing_difficulty: profile.hearingDifficulty || null,
    speech_difficulty: profile.speechDifficulty || null,
    height: profile.height || null,
    weight: profile.weight || null,
    height_weight_unknown: !!profile.heightWeightUnknown,
    long_term_health_condition: profile.longTermHealthCondition || null,
    health_work_standing_walking: !!profile.healthWorkDifficulties?.standingWalking,
    health_work_heavy_physical: !!profile.healthWorkDifficulties?.heavyPhysical,
    health_work_night_shifts: !!profile.healthWorkDifficulties?.nightShifts,
    health_work_outdoors_dust: !!profile.healthWorkDifficulties?.outdoorsDust,
    health_work_screen_work: !!profile.healthWorkDifficulties?.screenWork,
    health_work_heavy_weights: !!profile.healthWorkDifficulties?.heavyWeights,
    health_work_none: !!profile.healthWorkDifficulties?.none,
    allergies_type: profile.allergiesType || null,
    allergies_detail: profile.allergiesDetail || null,
    disability_certificate: profile.disabilityCertificate || null,
    major_illness_or_injury: profile.majorIllnessOrInjury || null,
    regular_medical_expenses: profile.regularMedicalExpenses || null,
    stomach_digestion_problem: profile.stomachDigestionProblem || null,
    skin_problem: profile.skinProblem || null,
    skin_problem_duration: profile.skinProblemDuration || null,
    skin_problem_affects_sleep: !!profile.skinProblemAffects?.sleep,
    skin_problem_affects_coming_to_school: !!profile.skinProblemAffects?.comingToSchool,
    skin_problem_affects_feel_uncomfortable: !!profile.skinProblemAffects?.feelUncomfortable,
    skin_problem_affects_none: !!profile.skinProblemAffects?.none,
    worrying_talk_type: profile.worryingTalkType || null,
    worrying_talk_detail: profile.worryingTalkDetail || null,

    raw_profile: profile,
  };

  try {
    const { error } = await supabase
      .from("student_profiles")
      .upsert(row, { onConflict: "id" });

    if (error) {
      console.warn("Supabase student_profiles save error (cached locally):", error);
      return { success: false, error: error.message };
    }
    return { success: true };
  } catch (err: any) {
    console.warn("Network error saving student_profiles (cached locally):", err);
    return { success: false, error: err?.message };
  }
}

/**
 * Fetches all student profiles from Supabase and merges with local storage
 */
export async function fetchStudentProfilesFromSupabase(counsellorName?: string): Promise<any[]> {
  let remoteRows: any[] = [];
  try {
    let query = supabase.from("student_profiles").select("*");
    if (counsellorName && counsellorName.trim() && counsellorName.trim().toLowerCase() !== "admin") {
      query = query.eq("counsellor_name", counsellorName.trim());
    }
    const { data, error } = await query.order("created_at", { ascending: false });
    if (!error && Array.isArray(data)) {
      remoteRows = data;
    }
  } catch (err) {
    console.warn("Could not fetch remote student_profiles, using local cache:", err);
  }

  // Load from local storage
  let localProfiles: any[] = [];
  try {
    const stored = localStorage.getItem("wabi_student_profiles");
    if (stored) localProfiles = JSON.parse(stored);
  } catch { /* ignore */ }

  const map = new Map<string, any>();

  // Put remote items first
  remoteRows.forEach((r) => {
    const mapped = mapRowToSavedProfile(r);
    map.set(mapped.id, mapped);
  });

  // Put local items if not present
  localProfiles.forEach((p) => {
    if (!map.has(p.id)) {
      map.set(p.id, p);
    }
  });

  const merged = Array.from(map.values()).sort(
    (a, b) => new Date(b.savedAt || 0).getTime() - new Date(a.savedAt || 0).getTime()
  );

  // Sync back to local storage
  try {
    localStorage.setItem("wabi_student_profiles", JSON.stringify(merged));
  } catch { /* ignore */ }

  return merged;
}

/**
 * Deletes a student profile from Supabase and local cache
 */
export async function deleteStudentProfileFromSupabase(id: string): Promise<void> {
  // Delete from local cache
  try {
    const stored = localStorage.getItem("wabi_student_profiles");
    if (stored) {
      const list = JSON.parse(stored).filter((p: any) => p.id !== id);
      localStorage.setItem("wabi_student_profiles", JSON.stringify(list));
    }
  } catch { /* ignore */ }

  // Delete from Supabase
  try {
    await supabase.from("student_profiles").delete().eq("id", id);
  } catch (err) {
    console.warn("Failed to delete from Supabase student_profiles:", err);
  }
}

/**
 * Saves a generated AI career report directly to Supabase table `student_profiles`.
 * Stored persistently in Supabase raw_profile, never relying on local storage.
 */
export async function saveGeneratedReportToSupabase(
  profileId: string,
  report: CareerReport
): Promise<{ success: boolean; error?: string }> {
  try {
    const { data, error: fetchErr } = await supabase
      .from("student_profiles")
      .select("id, raw_profile")
      .eq("id", profileId)
      .single();

    if (fetchErr) {
      console.error("Error fetching profile from Supabase to attach report:", fetchErr);
      return { success: false, error: fetchErr.message };
    }

    const currentRaw = (data?.raw_profile && typeof data.raw_profile === "object") ? data.raw_profile : {};
    const timestamp = new Date().toISOString();
    const updatedRaw = {
      ...currentRaw,
      generatedReport: report,
      generatedReportAt: timestamp,
    };

    const { error: updateErr } = await supabase
      .from("student_profiles")
      .update({
        raw_profile: updatedRaw,
        updated_at: timestamp,
      })
      .eq("id", profileId);

    if (updateErr) {
      console.error("Failed to update report in Supabase student_profiles:", updateErr);
      return { success: false, error: updateErr.message };
    }

    console.log("Successfully saved AI career report to Supabase for student:", profileId);
    return { success: true };
  } catch (err: any) {
    console.error("Exception saving report to Supabase:", err);
    return { success: false, error: err?.message || "Failed to save report to Supabase" };
  }
}



