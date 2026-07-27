-- ==============================================================================
-- STRATEGY ARENA x DADA MANAGEMENT: TALENT RECRUITMENT DATABASE SCHEMA
-- Table: talent_applications
-- Database: Supabase / PostgreSQL
-- ==============================================================================

-- 1. Create Application Status Enum
CREATE TYPE application_status_type AS ENUM (
    'new',
    'under_review',
    'shortlisted',
    'interview',
    'information_requested',
    'selected',
    'not_selected',
    'talent_pool'
);

-- 2. Create talent_applications Table
CREATE TABLE IF NOT EXISTS public.talent_applications (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

    -- Step 1: Personal Information
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    phone TEXT NOT NULL,
    date_of_birth DATE NOT NULL,
    country TEXT NOT NULL,
    city TEXT NOT NULL,
    preferred_language TEXT NOT NULL DEFAULT 'French',
    pronouns TEXT,
    is_adult_confirmed BOOLEAN NOT NULL DEFAULT TRUE,

    -- Step 2: Talent Profile
    primary_category TEXT NOT NULL,
    secondary_category TEXT,
    content_niche TEXT,
    biography TEXT NOT NULL,
    years_experience TEXT NOT NULL,
    languages TEXT,
    occupation TEXT,
    currently_represented BOOLEAN NOT NULL DEFAULT FALSE,
    representation_details TEXT,

    -- Step 3: Social Media & Online Presence
    primary_platform TEXT NOT NULL,
    instagram_url TEXT,
    tiktok_url TEXT,
    youtube_url TEXT,
    facebook_url TEXT,
    twitter_url TEXT,
    portfolio_url TEXT,
    other_platform_url TEXT,
    audience_size TEXT NOT NULL,
    monthly_views TEXT,
    engagement_rate TEXT,

    -- Step 4: Experience & Portfolio
    brand_collaborations TEXT,
    achievements TEXT,
    best_content_url TEXT,
    media_kit_url TEXT,
    portfolio_files JSONB DEFAULT '[]'::jsonb,
    additional_document_url TEXT,

    -- Step 5: Motivation & Goals
    motivation TEXT NOT NULL,
    unique_value TEXT NOT NULL,
    twelve_month_goals TEXT NOT NULL,
    support_needed TEXT NOT NULL,
    target_brands TEXT,
    referral_source TEXT,

    -- Step 6: Consents & Agreements
    accurate_info_consent BOOLEAN NOT NULL DEFAULT TRUE,
    data_processing_consent BOOLEAN NOT NULL DEFAULT TRUE,
    profile_review_consent BOOLEAN NOT NULL DEFAULT TRUE,
    no_guarantee_consent BOOLEAN NOT NULL DEFAULT TRUE,
    communication_consent BOOLEAN NOT NULL DEFAULT FALSE,

    -- Administrative & Internal Review
    application_status application_status_type NOT NULL DEFAULT 'new',
    internal_notes TEXT
);

-- 3. Create Indexes for High Performance Querying
CREATE INDEX IF NOT EXISTS idx_talent_apps_email ON public.talent_applications(email);
CREATE INDEX IF NOT EXISTS idx_talent_apps_status ON public.talent_applications(application_status);
CREATE INDEX IF NOT EXISTS idx_talent_apps_primary_cat ON public.talent_applications(primary_category);
CREATE INDEX IF NOT EXISTS idx_talent_apps_created_at ON public.talent_applications(created_at DESC);

-- 4. Enable Row Level Security (RLS)
ALTER TABLE public.talent_applications ENABLE ROW LEVEL SECURITY;

-- Allow public anonymous users to insert new talent applications
CREATE POLICY "Allow public insert to talent_applications"
    ON public.talent_applications
    FOR INSERT
    TO anon, authenticated
    WITH CHECK (true);

-- Restrict read/update access to authenticated admins / Strategy ARENA recruitment team
CREATE POLICY "Allow authenticated service role full access"
    ON public.talent_applications
    FOR ALL
    TO service_role
    USING (true)
    WITH CHECK (true);

-- 5. Auto-update updated_at timestamp trigger
CREATE OR REPLACE FUNCTION update_talent_applications_timestamp()
RETURNS TRIGGER AS $$
BEGIN
   NEW.updated_at = NOW();
   RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trg_update_talent_applications_timestamp
BEFORE UPDATE ON public.talent_applications
FOR EACH ROW
EXECUTE FUNCTION update_talent_applications_timestamp();
