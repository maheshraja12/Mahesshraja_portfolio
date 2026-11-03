-- ==============================================================================
-- SUPABASE ENQUIRY STORAGE SCHEMA FOR MAHESH RAJA PORTFOLIO
-- Table: contact_submissions
-- ==============================================================================

-- 1. Create table
CREATE TABLE IF NOT EXISTS public.contact_submissions (
    id TEXT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    message TEXT NOT NULL,
    ip_address VARCHAR(45),
    user_agent TEXT,
    created_at TIMESTAMPTZ DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- 2. Create index on created_at and email for fast filtering
CREATE INDEX IF NOT EXISTS idx_contact_submissions_created_at ON public.contact_submissions(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_email ON public.contact_submissions(email);

-- 3. Enable Row Level Security (RLS)
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

-- 4. Allow public anonymous insertion (for the portfolio contact form)
CREATE POLICY "Allow public submissions insert"
    ON public.contact_submissions
    FOR INSERT
    TO public
    WITH CHECK (true);

-- 5. Restrict read/update/delete access exclusively to service_role (Admin)
CREATE POLICY "Allow service_role full management"
    ON public.contact_submissions
    FOR ALL
    TO service_role
    USING (true)
    WITH CHECK (true);
