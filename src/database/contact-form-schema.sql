
-- Contact form submissions table
CREATE TABLE contact_submissions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    subject VARCHAR(500) NOT NULL,
    category contact_category NOT NULL,
    priority contact_priority NOT NULL DEFAULT 'medium',
    message TEXT NOT NULL,
    status contact_status NOT NULL DEFAULT 'new',
    assigned_to UUID REFERENCES users(id),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    resolved_at TIMESTAMP WITH TIME ZONE,
    response TEXT,
    response_by UUID REFERENCES users(id),
    ip_address INET,
    user_agent TEXT,
    source VARCHAR(50) DEFAULT 'website'
);

-- Enums for contact form
CREATE TYPE contact_category AS ENUM (
    'general',
    'technical',
    'billing',
    'verification',
    'wedding_services',
    'complaint'
);

CREATE TYPE contact_priority AS ENUM (
    'low',
    'medium',
    'high',
    'urgent'
);

CREATE TYPE contact_status AS ENUM (
    'new',
    'in_progress',
    'pending_info',
    'resolved',
    'closed'
);

-- Indexes for better performance
CREATE INDEX idx_contact_submissions_email ON contact_submissions(email);
CREATE INDEX idx_contact_submissions_status ON contact_submissions(status);
CREATE INDEX idx_contact_submissions_category ON contact_submissions(category);
CREATE INDEX idx_contact_submissions_created_at ON contact_submissions(created_at DESC);
CREATE INDEX idx_contact_submissions_priority ON contact_submissions(priority);

-- Trigger to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_contact_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_contact_submissions_updated_at
    BEFORE UPDATE ON contact_submissions
    FOR EACH ROW
    EXECUTE FUNCTION update_contact_updated_at();
