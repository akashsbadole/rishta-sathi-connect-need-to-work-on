
-- Enhanced Matrimony Platform Schema with Security & Roles

-- Enable necessary extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- Enum types for better data integrity
CREATE TYPE user_role AS ENUM ('customer', 'vendor', 'admin');
CREATE TYPE gender_type AS ENUM ('male', 'female', 'other');
CREATE TYPE verification_status AS ENUM ('pending', 'in_progress', 'verified', 'rejected');
CREATE TYPE booking_status AS ENUM ('pending', 'confirmed', 'completed', 'cancelled');
CREATE TYPE payment_status AS ENUM ('pending', 'completed', 'failed', 'refunded');
CREATE TYPE match_status AS ENUM ('new', 'interested', 'contacted', 'rejected');

-- Users table with enhanced security
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    clerk_id VARCHAR(255) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    name VARCHAR(255) NOT NULL,
    phone VARCHAR(20),
    role user_role NOT NULL DEFAULT 'customer',
    is_verified BOOLEAN DEFAULT FALSE,
    is_active BOOLEAN DEFAULT TRUE,
    email_verified BOOLEAN DEFAULT FALSE,
    phone_verified BOOLEAN DEFAULT FALSE,
    last_login TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    
    -- Security fields
    failed_login_attempts INTEGER DEFAULT 0,
    locked_until TIMESTAMP WITH TIME ZONE,
    password_changed_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    
    -- Privacy settings
    profile_visibility VARCHAR(50) DEFAULT 'public',
    show_contact_info BOOLEAN DEFAULT FALSE,
    
    -- Audit fields
    created_by UUID,
    updated_by UUID,
    deleted_at TIMESTAMP WITH TIME ZONE
);

-- User profiles with comprehensive information
CREATE TABLE user_profiles (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    
    -- Basic information
    date_of_birth DATE,
    age INTEGER,
    gender gender_type,
    height_cm INTEGER,
    weight_kg INTEGER,
    blood_group VARCHAR(10),
    complexion VARCHAR(50),
    
    -- Contact information
    current_address TEXT,
    permanent_address TEXT,
    city VARCHAR(100),
    state VARCHAR(100),
    country VARCHAR(100) DEFAULT 'India',
    pincode VARCHAR(10),
    
    -- Family information
    father_name VARCHAR(255),
    mother_name VARCHAR(255),
    father_occupation VARCHAR(255),
    mother_occupation VARCHAR(255),
    siblings_count INTEGER DEFAULT 0,
    family_type VARCHAR(50), -- nuclear, joint
    family_income_range VARCHAR(50),
    
    -- Education and Career
    education_level VARCHAR(100),
    education_field VARCHAR(100),
    university VARCHAR(255),
    profession VARCHAR(255),
    company VARCHAR(255),
    annual_income DECIMAL(15,2),
    work_location VARCHAR(255),
    
    -- Religious and Cultural
    religion VARCHAR(100),
    caste VARCHAR(100),
    sub_caste VARCHAR(100),
    gotra VARCHAR(100),
    mother_tongue VARCHAR(100),
    languages_known TEXT[],
    
    -- Lifestyle
    dietary_habits VARCHAR(50), -- vegetarian, non-vegetarian, vegan
    drinking_habits VARCHAR(50),
    smoking_habits VARCHAR(50),
    hobbies TEXT[],
    interests TEXT[],
    
    -- Partner preferences
    preferred_age_min INTEGER,
    preferred_age_max INTEGER,
    preferred_height_min INTEGER,
    preferred_height_max INTEGER,
    preferred_education TEXT[],
    preferred_profession TEXT[],
    preferred_income_min DECIMAL(15,2),
    preferred_location TEXT[],
    preferred_caste TEXT[],
    
    -- Profile completion
    profile_completion_percentage INTEGER DEFAULT 0,
    profile_views INTEGER DEFAULT 0,
    last_active TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Vendor profiles for service providers
CREATE TABLE vendor_profiles (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    
    business_name VARCHAR(255) NOT NULL,
    business_type VARCHAR(100), -- individual, company, partnership
    category VARCHAR(100) NOT NULL, -- venues, photography, catering, etc.
    subcategory VARCHAR(100),
    
    -- Business details
    establishment_year INTEGER,
    years_experience INTEGER,
    license_number VARCHAR(255),
    pan_number VARCHAR(20),
    gst_number VARCHAR(20),
    
    -- Contact and location
    business_address TEXT,
    business_city VARCHAR(100),
    business_state VARCHAR(100),
    business_pincode VARCHAR(10),
    website_url VARCHAR(500),
    social_media_links JSONB,
    
    -- Service information
    services_offered TEXT[],
    service_areas TEXT[],
    capacity_min INTEGER,
    capacity_max INTEGER,
    price_range_min DECIMAL(15,2),
    price_range_max DECIMAL(15,2),
    
    -- Business verification
    business_verified BOOLEAN DEFAULT FALSE,
    documents_verified BOOLEAN DEFAULT FALSE,
    background_verified BOOLEAN DEFAULT FALSE,
    
    -- Performance metrics
    total_bookings INTEGER DEFAULT 0,
    completed_bookings INTEGER DEFAULT 0,
    cancelled_bookings INTEGER DEFAULT 0,
    average_rating DECIMAL(3,2) DEFAULT 0,
    total_reviews INTEGER DEFAULT 0,
    
    -- Commission and payments
    commission_rate DECIMAL(5,2) DEFAULT 10.00,
    payment_terms INTEGER DEFAULT 30, -- days
    bank_account_verified BOOLEAN DEFAULT FALSE,
    
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Wedding services offered by vendors
CREATE TABLE wedding_services (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    vendor_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    
    name VARCHAR(255) NOT NULL,
    category VARCHAR(100) NOT NULL,
    subcategory VARCHAR(100),
    description TEXT,
    detailed_description TEXT,
    
    -- Pricing
    base_price DECIMAL(15,2),
    price_type VARCHAR(50), -- fixed, per_person, per_hour, custom
    currency VARCHAR(10) DEFAULT 'INR',
    
    -- Service details
    duration_hours INTEGER,
    advance_booking_days INTEGER DEFAULT 30,
    cancellation_policy TEXT,
    terms_conditions TEXT,
    
    -- Availability
    available_days TEXT[], -- monday, tuesday, etc.
    seasonal_availability JSONB,
    advance_booking_required BOOLEAN DEFAULT TRUE,
    
    -- Media and documentation
    images TEXT[],
    videos TEXT[],
    documents TEXT[],
    portfolio_link VARCHAR(500),
    
    -- Features and specifications
    features TEXT[],
    included_items TEXT[],
    excluded_items TEXT[],
    additional_services TEXT[],
    
    -- Location and logistics
    service_locations TEXT[],
    travel_charges DECIMAL(15,2) DEFAULT 0,
    setup_time_hours INTEGER,
    
    -- Performance metrics
    bookings_count INTEGER DEFAULT 0,
    average_rating DECIMAL(3,2) DEFAULT 0,
    review_count INTEGER DEFAULT 0,
    
    -- Status and visibility
    is_active BOOLEAN DEFAULT TRUE,
    is_featured BOOLEAN DEFAULT FALSE,
    visibility VARCHAR(50) DEFAULT 'public',
    
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- AI-powered matching system
CREATE TABLE ai_matches (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user1_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    user2_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    
    compatibility_score INTEGER NOT NULL CHECK (compatibility_score >= 0 AND compatibility_score <= 100),
    ai_reasoning TEXT,
    matching_algorithm_version VARCHAR(50) DEFAULT 'v1.0',
    
    -- Detailed compatibility factors
    age_compatibility INTEGER,
    location_compatibility INTEGER,
    education_compatibility INTEGER,
    profession_compatibility INTEGER,
    income_compatibility INTEGER,
    family_compatibility INTEGER,
    lifestyle_compatibility INTEGER,
    religious_compatibility INTEGER,
    
    -- Match insights
    common_interests TEXT[],
    potential_concerns TEXT[],
    match_factors TEXT[],
    improvement_suggestions TEXT[],
    
    -- Status and interaction
    status match_status DEFAULT 'new',
    viewed_by_user1 BOOLEAN DEFAULT FALSE,
    viewed_by_user2 BOOLEAN DEFAULT FALSE,
    user1_interested BOOLEAN,
    user2_interested BOOLEAN,
    
    -- AI confidence and learning
    confidence_score DECIMAL(5,2),
    feedback_received BOOLEAN DEFAULT FALSE,
    actual_outcome VARCHAR(50), -- for ML learning
    
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    
    UNIQUE(user1_id, user2_id)
);

-- Service bookings with comprehensive tracking
CREATE TABLE service_bookings (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    booking_number VARCHAR(50) UNIQUE NOT NULL,
    
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    service_id UUID NOT NULL REFERENCES wedding_services(id) ON DELETE CASCADE,
    vendor_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    
    -- Event details
    event_date DATE NOT NULL,
    event_time TIME,
    event_duration_hours INTEGER,
    event_location TEXT,
    guest_count INTEGER,
    special_requirements TEXT,
    
    -- Booking details
    booking_date TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    confirmation_date TIMESTAMP WITH TIME ZONE,
    completion_date TIMESTAMP WITH TIME ZONE,
    
    -- Pricing and payments
    base_amount DECIMAL(15,2) NOT NULL,
    additional_charges DECIMAL(15,2) DEFAULT 0,
    discount_amount DECIMAL(15,2) DEFAULT 0,
    tax_amount DECIMAL(15,2) DEFAULT 0,
    total_amount DECIMAL(15,2) NOT NULL,
    
    -- Commission calculation
    commission_rate DECIMAL(5,2) NOT NULL,
    commission_amount DECIMAL(15,2) NOT NULL,
    vendor_amount DECIMAL(15,2) NOT NULL,
    
    -- Status tracking
    status booking_status DEFAULT 'pending',
    payment_status payment_status DEFAULT 'pending',
    cancellation_reason TEXT,
    cancelled_by UUID REFERENCES users(id),
    cancelled_at TIMESTAMP WITH TIME ZONE,
    
    -- Communication
    booking_notes TEXT,
    vendor_notes TEXT,
    customer_feedback TEXT,
    vendor_feedback TEXT,
    
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Payment transactions with security
CREATE TABLE payments (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    transaction_id VARCHAR(255) UNIQUE NOT NULL,
    
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    booking_id UUID REFERENCES service_bookings(id) ON DELETE CASCADE,
    
    amount DECIMAL(15,2) NOT NULL,
    currency VARCHAR(10) DEFAULT 'INR',
    
    -- Payment gateway details
    payment_method VARCHAR(100) NOT NULL, -- razorpay, paypal, bank_transfer
    gateway_transaction_id VARCHAR(255),
    gateway_response JSONB,
    
    -- Payment status
    status payment_status DEFAULT 'pending',
    processed_at TIMESTAMP WITH TIME ZONE,
    
    -- Security and audit
    ip_address INET,
    user_agent TEXT,
    fraud_score INTEGER,
    risk_assessment JSONB,
    
    -- Refund information
    refund_amount DECIMAL(15,2) DEFAULT 0,
    refund_reason TEXT,
    refunded_at TIMESTAMP WITH TIME ZONE,
    
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Background verification system
CREATE TABLE verification_requests (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    
    verification_tier VARCHAR(50) NOT NULL, -- basic, standard, premium, elite
    verification_type VARCHAR(100) NOT NULL, -- identity, education, employment, etc.
    
    -- Request details
    requested_documents TEXT[],
    submitted_documents JSONB, -- document type and file paths
    verification_notes TEXT,
    
    -- Verification process
    status verification_status DEFAULT 'pending',
    assigned_to UUID REFERENCES users(id),
    verified_by UUID REFERENCES users(id),
    verification_date TIMESTAMP WITH TIME ZONE,
    
    -- Results
    verification_result JSONB, -- detailed verification results
    verification_score INTEGER CHECK (verification_score >= 0 AND verification_score <= 100),
    issues_found TEXT[],
    recommendations TEXT[],
    
    -- Pricing
    tier_price DECIMAL(10,2) NOT NULL,
    payment_status payment_status DEFAULT 'pending',
    
    -- Validity
    valid_until DATE,
    renewal_required BOOLEAN DEFAULT FALSE,
    
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Customer support system
CREATE TABLE support_tickets (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    ticket_number VARCHAR(50) UNIQUE NOT NULL,
    
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    assigned_to UUID REFERENCES users(id),
    
    subject VARCHAR(500) NOT NULL,
    description TEXT NOT NULL,
    category VARCHAR(100) NOT NULL,
    priority VARCHAR(50) DEFAULT 'medium',
    
    status VARCHAR(50) DEFAULT 'open',
    resolution TEXT,
    resolution_time_hours INTEGER,
    
    -- Satisfaction tracking
    customer_rating INTEGER CHECK (customer_rating >= 1 AND customer_rating <= 5),
    customer_feedback TEXT,
    
    -- Communication
    last_response_at TIMESTAMP WITH TIME ZONE,
    response_due_at TIMESTAMP WITH TIME ZONE,
    
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    resolved_at TIMESTAMP WITH TIME ZONE
);

-- Indexes for performance optimization
CREATE INDEX idx_users_clerk_id ON users(clerk_id);
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_role ON users(role);
CREATE INDEX idx_users_active ON users(is_active) WHERE is_active = TRUE;

CREATE INDEX idx_user_profiles_user_id ON user_profiles(user_id);
CREATE INDEX idx_user_profiles_age ON user_profiles(age);
CREATE INDEX idx_user_profiles_city ON user_profiles(city);
CREATE INDEX idx_user_profiles_religion ON user_profiles(religion);

CREATE INDEX idx_wedding_services_vendor_id ON wedding_services(vendor_id);
CREATE INDEX idx_wedding_services_category ON wedding_services(category);
CREATE INDEX idx_wedding_services_active ON wedding_services(is_active) WHERE is_active = TRUE;

CREATE INDEX idx_ai_matches_user1 ON ai_matches(user1_id);
CREATE INDEX idx_ai_matches_user2 ON ai_matches(user2_id);
CREATE INDEX idx_ai_matches_score ON ai_matches(compatibility_score DESC);
CREATE INDEX idx_ai_matches_status ON ai_matches(status);

CREATE INDEX idx_bookings_user_id ON service_bookings(user_id);
CREATE INDEX idx_bookings_vendor_id ON service_bookings(vendor_id);
CREATE INDEX idx_bookings_event_date ON service_bookings(event_date);
CREATE INDEX idx_bookings_status ON service_bookings(status);

CREATE INDEX idx_payments_user_id ON payments(user_id);
CREATE INDEX idx_payments_transaction_id ON payments(transaction_id);
CREATE INDEX idx_payments_status ON payments(status);

-- Security: Row Level Security (RLS) policies
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE vendor_profiles ENABLE ROW LEVEL SECURITY;

-- RLS Policies for users table
CREATE POLICY "Users can view their own data" ON users
    FOR SELECT USING (clerk_id = current_setting('app.current_user_clerk_id', true));

CREATE POLICY "Users can update their own data" ON users
    FOR UPDATE USING (clerk_id = current_setting('app.current_user_clerk_id', true));

-- RLS Policies for user_profiles table
CREATE POLICY "Users can view their own profile" ON user_profiles
    FOR SELECT USING (user_id = (SELECT id FROM users WHERE clerk_id = current_setting('app.current_user_clerk_id', true)));

CREATE POLICY "Users can update their own profile" ON user_profiles
    FOR UPDATE USING (user_id = (SELECT id FROM users WHERE clerk_id = current_setting('app.current_user_clerk_id', true)));

-- Trigger functions for updated_at timestamps
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Add updated_at triggers to all relevant tables
CREATE TRIGGER update_users_updated_at BEFORE UPDATE ON users
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_user_profiles_updated_at BEFORE UPDATE ON user_profiles
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_vendor_profiles_updated_at BEFORE UPDATE ON vendor_profiles
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_wedding_services_updated_at BEFORE UPDATE ON wedding_services
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_ai_matches_updated_at BEFORE UPDATE ON ai_matches
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_service_bookings_updated_at BEFORE UPDATE ON service_bookings
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_payments_updated_at BEFORE UPDATE ON payments
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Insert dummy data
INSERT INTO users (id, clerk_id, email, name, phone, role, is_verified) VALUES
('user001', 'clerk_user001', 'arjun.sharma@email.com', 'Arjun Sharma', '+91 98765 43210', 'customer', true),
('user002', 'clerk_user002', 'priya.patel@email.com', 'Priya Patel', '+91 98765 43211', 'customer', true),
('vendor001', 'clerk_vendor001', 'info@royalevents.com', 'Royal Events', '+91 98765 43212', 'vendor', true),
('vendor002', 'clerk_vendor002', 'contact@elitestudios.com', 'Elite Studios', '+91 98765 43213', 'vendor', true),
('admin001', 'clerk_admin001', 'admin@matrimony.com', 'Admin User', '+91 98765 43214', 'admin', true);

-- Insert user profiles
INSERT INTO user_profiles (user_id, age, gender, height_cm, city, state, education_level, profession, annual_income) VALUES
('user001', 28, 'male', 175, 'Mumbai', 'Maharashtra', 'B.Tech', 'Software Engineer', 1200000),
('user002', 26, 'female', 165, 'Delhi', 'Delhi', 'MBA', 'Marketing Manager', 1000000);

-- Insert vendor profiles
INSERT INTO vendor_profiles (user_id, business_name, category, years_experience, commission_rate) VALUES
('vendor001', 'Royal Events', 'venues', 10, 10.00),
('vendor002', 'Elite Studios', 'photography', 8, 15.00);

-- Insert wedding services
INSERT INTO wedding_services (id, vendor_id, name, category, description, base_price) VALUES
('ws001', 'vendor001', 'Royal Palace Wedding Hall', 'venues', 'Luxurious wedding venue with traditional architecture', 350000),
('ws002', 'vendor002', 'Elite Wedding Photography', 'photography', 'Professional wedding photography services', 112500);

-- Insert AI matches
INSERT INTO ai_matches (user1_id, user2_id, compatibility_score, ai_reasoning) VALUES
('user001', 'user002', 95, 'High compatibility based on education, career goals, and lifestyle preferences');

-- Insert sample bookings
INSERT INTO service_bookings (id, booking_number, user_id, service_id, vendor_id, event_date, base_amount, total_amount, commission_rate, commission_amount, vendor_amount) VALUES
('booking001', 'WB001', 'user001', 'ws001', 'vendor001', '2024-06-15', 350000, 350000, 10.00, 35000, 315000);
