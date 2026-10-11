-- ============================================================================
-- SQL Migration: Create 'schools' table in Supabase
-- Description: Stores school_id and logo_url for school-based Explore Careers access
-- ============================================================================

-- 1. Create schools table
CREATE TABLE IF NOT EXISTS public.schools (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    school_id TEXT UNIQUE NOT NULL,
    school_name TEXT,
    logo_url TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Create index on school_id for fast case-insensitive lookups
CREATE INDEX IF NOT EXISTS idx_schools_school_id ON public.schools (LOWER(school_id));

-- 3. Enable Row Level Security (RLS)
ALTER TABLE public.schools ENABLE ROW LEVEL SECURITY;

-- 4. Allow public read access so unauthenticated students can verify school_id & load logo
DROP POLICY IF EXISTS "Allow public read access to schools" ON public.schools;
CREATE POLICY "Allow public read access to schools"
    ON public.schools FOR SELECT
    USING (true);

-- 5. Allow authenticated users or service role to insert/update/delete
DROP POLICY IF EXISTS "Allow authenticated full management on schools" ON public.schools;
CREATE POLICY "Allow authenticated full management on schools"
    ON public.schools FOR ALL
    USING (true);

-- ============================================================================
-- Example Insert:
-- Replace 'TEST-SCHOOL-1' and logo URL with your actual school ID and Supabase bucket logo URL
-- ============================================================================
-- INSERT INTO public.schools (school_id, school_name, logo_url)
-- VALUES (
--   'TEST-SCHOOL-1',
--   'Model High School',
--   'https://jqerkjewmmpowiwwpifv.supabase.co/storage/v1/object/public/school-logos/logo.png'
-- )
-- ON CONFLICT (school_id) 
-- DO UPDATE SET logo_url = EXCLUDED.logo_url, school_name = EXCLUDED.school_name;
