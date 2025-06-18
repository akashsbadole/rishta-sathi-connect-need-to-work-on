
-- Comprehensive Matrimony Platform Database Schema
-- Supports both SQLite and PostgreSQL
-- Created: 2024

-- ================================================================
-- USER MANAGEMENT & AUTHENTICATION
-- ================================================================

-- Core users table with multi-role support
CREATE TABLE users (
    id INTEGER PRIMARY KEY AUTOINCREMENT, -- SQLite
    -- id SERIAL PRIMARY KEY, -- PostgreSQL
    email VARCHAR(255) UNIQUE NOT NULL,
    phone VARCHAR(20) UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    user_type ENUM('customer', 'vendor', 'admin') DEFAULT 'customer',
    email_verified BOOLEAN DEFAULT FALSE,
    phone_verified BOOLEAN DEFAULT FALSE,
    is_active BOOLEAN DEFAULT TRUE,
    last_login TIMESTAMP,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- User profiles with comprehensive personal information
CREATE TABLE user_profiles (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL,
    profile_id VARCHAR(50) UNIQUE NOT NULL, -- Human readable ID like RIS001
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    middle_name VARCHAR(100),
    display_name VARCHAR(200),
    date_of_birth DATE NOT NULL,
    time_of_birth TIME,
    place_of_birth VARCHAR(200),
    gender ENUM('male', 'female', 'other') NOT NULL,
    marital_status ENUM('never_married', 'divorced', 'widowed', 'separated') DEFAULT 'never_married',
    profile_created_by ENUM('self', 'parent', 'relative', 'friend') DEFAULT 'self',
    profile_completion_percentage INTEGER DEFAULT 0,
    last_active TIMESTAMP,
    is_premium BOOLEAN DEFAULT FALSE,
    premium_expires_at TIMESTAMP,
    profile_privacy ENUM('public', 'private', 'semi_private') DEFAULT 'public',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- Physical attributes and appearance
CREATE TABLE physical_details (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL,
    height_feet INTEGER,
    height_inches INTEGER,
    height_cm INTEGER,
    weight_kg DECIMAL(5,2),
    body_type ENUM('slim', 'average', 'athletic', 'heavy', 'plus_size'),
    complexion ENUM('very_fair', 'fair', 'wheatish', 'dusky', 'dark'),
    hair_color ENUM('black', 'brown', 'blonde', 'grey', 'bald'),
    hair_type ENUM('straight', 'wavy', 'curly', 'bald'),
    eye_color ENUM('black', 'brown', 'blue', 'green', 'grey', 'hazel'),
    blood_group ENUM('A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'),
    any_disability TEXT,
    spectacles BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- ================================================================
-- CULTURAL & RELIGIOUS INFORMATION
-- ================================================================

-- Religious and cultural details
CREATE TABLE religious_details (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL,
    religion ENUM('hindu', 'muslim', 'christian', 'sikh', 'buddhist', 'jain', 'parsi', 'jewish', 'other') NOT NULL,
    caste VARCHAR(100),
    sub_caste VARCHAR(100),
    gotra VARCHAR(100), -- For Hindus
    sect VARCHAR(100), -- For Muslims/Christians etc
    mother_tongue VARCHAR(50),
    languages_known TEXT, -- JSON array of languages
    religious_practices ENUM('very_religious', 'religious', 'moderately_religious', 'not_religious'),
    dietary_habits ENUM('vegetarian', 'non_vegetarian', 'eggetarian', 'vegan', 'jain_vegetarian'),
    drinking_habits ENUM('never', 'socially', 'occasionally', 'regularly'),
    smoking_habits ENUM('never', 'socially', 'occasionally', 'regularly'),
    community VARCHAR(100),
    cultural_values ENUM('traditional', 'moderate', 'liberal'),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- Astrological details and horoscope information
CREATE TABLE horoscope_details (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL,
    birth_place VARCHAR(200) NOT NULL,
    birth_latitude DECIMAL(10, 8),
    birth_longitude DECIMAL(11, 8),
    birth_time_known BOOLEAN DEFAULT TRUE,
    birth_time TIME,
    rashi VARCHAR(50), -- Moon sign
    nakshatra VARCHAR(50), -- Birth star
    gotra_astro VARCHAR(100),
    manglik_status ENUM('manglik', 'non_manglik', 'anshik_manglik', 'unknown'),
    horoscope_match_required BOOLEAN DEFAULT TRUE,
    kundali_available BOOLEAN DEFAULT FALSE,
    kundali_file_path VARCHAR(500),
    ashtakoot_score INTEGER, -- For compatibility
    doshas TEXT, -- JSON array of doshas
    favorable_periods TEXT, -- JSON array
    unfavorable_periods TEXT, -- JSON array
    astrologer_verified BOOLEAN DEFAULT FALSE,
    astrologer_notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- ================================================================
-- FAMILY & BACKGROUND INFORMATION
-- ================================================================

-- Family details and background
CREATE TABLE family_details (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL,
    family_type ENUM('nuclear', 'joint', 'extended') DEFAULT 'nuclear',
    family_values ENUM('traditional', 'moderate', 'liberal'),
    family_income_range ENUM('below_2_lakh', '2_5_lakh', '5_10_lakh', '10_20_lakh', '20_50_lakh', 'above_50_lakh'),
    father_name VARCHAR(200),
    father_occupation VARCHAR(200),
    father_company VARCHAR(200),
    father_designation VARCHAR(200),
    father_income_range VARCHAR(50),
    father_education VARCHAR(200),
    mother_name VARCHAR(200),
    mother_occupation VARCHAR(200),
    mother_company VARCHAR(200),
    mother_designation VARCHAR(200),
    mother_income_range VARCHAR(50),
    mother_education VARCHAR(200),
    total_siblings INTEGER DEFAULT 0,
    male_siblings INTEGER DEFAULT 0,
    female_siblings INTEGER DEFAULT 0,
    married_siblings INTEGER DEFAULT 0,
    siblings_details TEXT, -- JSON array with sibling information
    native_place VARCHAR(200),
    current_residence VARCHAR(200),
    family_residence_type ENUM('own', 'rented', 'family_owned', 'company_provided'),
    ancestral_property TEXT,
    about_family TEXT,
    family_contact_person VARCHAR(200),
    family_contact_relation VARCHAR(100),
    family_contact_phone VARCHAR(20),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- ================================================================
-- EDUCATION & CAREER INFORMATION
-- ================================================================

-- Educational qualifications
CREATE TABLE education_details (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL,
    highest_education ENUM('high_school', 'intermediate', 'graduate', 'post_graduate', 'doctorate', 'diploma', 'professional') NOT NULL,
    education_field VARCHAR(200),
    school_name VARCHAR(300),
    school_year_passed INTEGER,
    school_percentage DECIMAL(5,2),
    college_name VARCHAR(300),
    college_course VARCHAR(200),
    college_year_passed INTEGER,
    college_percentage DECIMAL(5,2),
    college_university VARCHAR(300),
    postgraduate_course VARCHAR(200),
    postgraduate_college VARCHAR(300),
    postgraduate_year_passed INTEGER,
    postgraduate_percentage DECIMAL(5,2),
    additional_qualifications TEXT,
    certifications TEXT, -- JSON array
    achievements TEXT,
    currently_studying BOOLEAN DEFAULT FALSE,
    study_details TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- Professional and career details
CREATE TABLE professional_details (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL,
    employment_type ENUM('employed', 'self_employed', 'business', 'unemployed', 'student', 'homemaker'),
    occupation VARCHAR(200),
    designation VARCHAR(200),
    company_name VARCHAR(300),
    company_type ENUM('government', 'private', 'public', 'ngo', 'self_employed'),
    industry VARCHAR(200),
    work_experience_years INTEGER,
    monthly_income DECIMAL(10,2),
    annual_income DECIMAL(12,2),
    income_currency VARCHAR(10) DEFAULT 'INR',
    work_location VARCHAR(200),
    willing_to_relocate BOOLEAN DEFAULT FALSE,
    business_details TEXT,
    professional_summary TEXT,
    career_plans TEXT,
    work_abroad_experience BOOLEAN DEFAULT FALSE,
    abroad_work_details TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- ================================================================
-- LOCATION & CONTACT INFORMATION
-- ================================================================

-- Location and address details
CREATE TABLE location_details (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL,
    current_country VARCHAR(100) DEFAULT 'India',
    current_state VARCHAR(100),
    current_city VARCHAR(100),
    current_area VARCHAR(200),
    current_pincode VARCHAR(20),
    current_address TEXT,
    permanent_country VARCHAR(100) DEFAULT 'India',
    permanent_state VARCHAR(100),
    permanent_city VARCHAR(100),
    permanent_area VARCHAR(200),
    permanent_pincode VARCHAR(20),
    permanent_address TEXT,
    same_as_current BOOLEAN DEFAULT TRUE,
    time_zone VARCHAR(50),
    coordinates_lat DECIMAL(10, 8),
    coordinates_lng DECIMAL(11, 8),
    willing_to_relocate BOOLEAN DEFAULT FALSE,
    relocation_preferences TEXT, -- JSON array of preferred locations
    visa_status VARCHAR(100), -- For international users
    residency_status VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- ================================================================
-- PARTNER PREFERENCES & MATCHING
-- ================================================================

-- Partner preferences for matching
CREATE TABLE partner_preferences (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL,
    age_min INTEGER,
    age_max INTEGER,
    height_min_feet INTEGER,
    height_min_inches INTEGER,
    height_max_feet INTEGER,
    height_max_inches INTEGER,
    marital_status TEXT, -- JSON array
    education_levels TEXT, -- JSON array
    occupations TEXT, -- JSON array
    annual_income_min DECIMAL(12,2),
    annual_income_max DECIMAL(12,2),
    religions TEXT, -- JSON array
    castes TEXT, -- JSON array
    mother_tongues TEXT, -- JSON array
    countries TEXT, -- JSON array
    states TEXT, -- JSON array
    cities TEXT, -- JSON array
    complexions TEXT, -- JSON array
    body_types TEXT, -- JSON array
    dietary_preferences TEXT, -- JSON array
    smoking_preference TEXT, -- JSON array
    drinking_preference TEXT, -- JSON array
    manglik_preference ENUM('no_preference', 'manglik_only', 'non_manglik_only'),
    horoscope_match_required BOOLEAN DEFAULT FALSE,
    family_type_preference TEXT, -- JSON array
    family_values_preference TEXT, -- JSON array
    about_partner_expectations TEXT,
    deal_breakers TEXT,
    preferred_distances INTEGER, -- in KM
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- AI compatibility scores and matching data
CREATE TABLE ai_compatibility_scores (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user1_id INTEGER NOT NULL,
    user2_id INTEGER NOT NULL,
    overall_score DECIMAL(5,2), -- 0-100
    personality_score DECIMAL(5,2),
    lifestyle_score DECIMAL(5,2),
    family_score DECIMAL(5,2),
    education_score DECIMAL(5,2),
    career_score DECIMAL(5,2),
    location_score DECIMAL(5,2),
    astrological_score DECIMAL(5,2),
    cultural_score DECIMAL(5,2),
    physical_score DECIMAL(5,2),
    financial_score DECIMAL(5,2),
    match_reasons TEXT, -- JSON array of why they match
    compatibility_insights TEXT,
    success_probability DECIMAL(5,2),
    algorithm_version VARCHAR(20),
    last_calculated TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user1_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (user2_id) REFERENCES users(id) ON DELETE CASCADE,
    UNIQUE(user1_id, user2_id)
);

-- ================================================================
-- BACKGROUND VERIFICATION SYSTEM
-- ================================================================

-- Background verification requests and status
CREATE TABLE background_verification (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL,
    verification_tier ENUM('basic', 'standard', 'premium', 'elite') NOT NULL,
    status ENUM('pending', 'in_progress', 'documents_required', 'completed', 'failed', 'expired') DEFAULT 'pending',
    requested_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    started_at TIMESTAMP,
    completed_at TIMESTAMP,
    expires_at TIMESTAMP,
    verification_agency VARCHAR(200),
    agency_reference_id VARCHAR(100),
    total_cost DECIMAL(10,2),
    payment_status ENUM('pending', 'paid', 'refunded', 'failed') DEFAULT 'pending',
    payment_reference VARCHAR(100),
    overall_score INTEGER, -- 0-100
    verification_badge ENUM('none', 'basic', 'standard', 'premium', 'elite') DEFAULT 'none',
    auto_renewal BOOLEAN DEFAULT FALSE,
    verification_notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- Individual verification checks
CREATE TABLE verification_checks (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    verification_id INTEGER NOT NULL,
    check_type ENUM('phone', 'email', 'aadhaar', 'pan', 'education', 'employment', 'address', 'income', 'criminal', 'credit', 'medical', 'family', 'property', 'character_reference') NOT NULL,
    status ENUM('pending', 'in_progress', 'completed', 'failed', 'not_applicable') DEFAULT 'pending',
    result ENUM('verified', 'partial', 'failed', 'inconclusive') DEFAULT NULL,
    confidence_score INTEGER, -- 0-100
    verification_method VARCHAR(200),
    documents_required TEXT, -- JSON array
    documents_submitted TEXT, -- JSON array with file paths
    verification_date TIMESTAMP,
    verifier_name VARCHAR(200),
    verifier_agency VARCHAR(200),
    verification_cost DECIMAL(8,2),
    remarks TEXT,
    retry_count INTEGER DEFAULT 0,
    max_retries INTEGER DEFAULT 3,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (verification_id) REFERENCES background_verification(id) ON DELETE CASCADE
);

-- Document uploads for verification
CREATE TABLE verification_documents (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    verification_check_id INTEGER NOT NULL,
    document_type VARCHAR(100) NOT NULL,
    document_name VARCHAR(300),
    file_path VARCHAR(500),
    file_size BIGINT,
    file_type VARCHAR(50),
    upload_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    verification_status ENUM('pending', 'verified', 'rejected') DEFAULT 'pending',
    ai_analysis_result TEXT, -- JSON with AI analysis
    manual_review_notes TEXT,
    is_authentic BOOLEAN DEFAULT NULL,
    expiry_date DATE,
    document_number VARCHAR(100),
    issuing_authority VARCHAR(200),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (verification_check_id) REFERENCES verification_checks(id) ON DELETE CASCADE
);

-- ================================================================
-- COMMUNICATION & INTERACTIONS
-- ================================================================

-- User interactions and interests
CREATE TABLE user_interests (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    sender_id INTEGER NOT NULL,
    receiver_id INTEGER NOT NULL,
    interest_type ENUM('express_interest', 'shortlist', 'send_message', 'phone_request', 'meeting_request') NOT NULL,
    status ENUM('sent', 'viewed', 'accepted', 'declined', 'expired', 'blocked') DEFAULT 'sent',
    message TEXT,
    sent_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    viewed_at TIMESTAMP,
    responded_at TIMESTAMP,
    response_message TEXT,
    expires_at TIMESTAMP,
    is_premium_interest BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (sender_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (receiver_id) REFERENCES users(id) ON DELETE CASCADE
);

-- Messaging system
CREATE TABLE conversations (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user1_id INTEGER NOT NULL,
    user2_id INTEGER NOT NULL,
    started_by INTEGER NOT NULL,
    status ENUM('active', 'archived', 'blocked', 'deleted') DEFAULT 'active',
    last_message_id INTEGER,
    last_message_at TIMESTAMP,
    unread_count_user1 INTEGER DEFAULT 0,
    unread_count_user2 INTEGER DEFAULT 0,
    is_premium_chat BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user1_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (user2_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (started_by) REFERENCES users(id) ON DELETE CASCADE
);

-- Individual messages
CREATE TABLE messages (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    conversation_id INTEGER NOT NULL,
    sender_id INTEGER NOT NULL,
    message_text TEXT,
    message_type ENUM('text', 'image', 'file', 'voice', 'video', 'location') DEFAULT 'text',
    file_path VARCHAR(500),
    file_type VARCHAR(50),
    file_size BIGINT,
    is_read BOOLEAN DEFAULT FALSE,
    read_at TIMESTAMP,
    delivery_status ENUM('sent', 'delivered', 'read', 'failed') DEFAULT 'sent',
    edited_at TIMESTAMP,
    is_deleted BOOLEAN DEFAULT FALSE,
    deleted_for ENUM('sender', 'receiver', 'both'),
    encryption_key VARCHAR(500), -- For end-to-end encryption
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (conversation_id) REFERENCES conversations(id) ON DELETE CASCADE,
    FOREIGN KEY (sender_id) REFERENCES users(id) ON DELETE CASCADE
);

-- ================================================================
-- WEDDING SERVICES & VENDOR MANAGEMENT
-- ================================================================

-- Wedding service vendors
CREATE TABLE wedding_vendors (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER, -- Links to users table if vendor has account
    business_name VARCHAR(300) NOT NULL,
    contact_person VARCHAR(200),
    business_email VARCHAR(255),
    business_phone VARCHAR(20),
    service_category ENUM('venue', 'photography', 'catering', 'decoration', 'music', 'transport', 'makeup', 'clothing', 'jewelry', 'cards', 'planning', 'other') NOT NULL,
    sub_categories TEXT, -- JSON array
    business_description TEXT,
    years_in_business INTEGER,
    business_license VARCHAR(100),
    gst_number VARCHAR(20),
    pan_number VARCHAR(15),
    business_address TEXT,
    service_areas TEXT, -- JSON array of cities/regions served
    price_range_min DECIMAL(10,2),
    price_range_max DECIMAL(10,2),
    price_type ENUM('fixed', 'per_day', 'per_hour', 'per_person', 'per_event', 'negotiable'),
    rating DECIMAL(3,2) DEFAULT 0.0,
    total_reviews INTEGER DEFAULT 0,
    total_bookings INTEGER DEFAULT 0,
    is_verified BOOLEAN DEFAULT FALSE,
    verification_level ENUM('basic', 'premium', 'elite') DEFAULT 'basic',
    featured_vendor BOOLEAN DEFAULT FALSE,
    premium_listing BOOLEAN DEFAULT FALSE,
    commission_rate DECIMAL(5,2) DEFAULT 10.00,
    portfolio_images TEXT, -- JSON array of image paths
    sample_work TEXT, -- JSON array of work samples
    cancellation_policy TEXT,
    terms_and_conditions TEXT,
    availability_calendar TEXT, -- JSON with available dates
    instant_booking BOOLEAN DEFAULT FALSE,
    advance_booking_days INTEGER DEFAULT 30,
    payment_terms TEXT,
    refund_policy TEXT,
    insurance_details TEXT,
    certifications TEXT, -- JSON array
    awards_recognition TEXT,
    social_media_links TEXT, -- JSON object
    website_url VARCHAR(500),
    business_hours TEXT, -- JSON object
    emergency_contact VARCHAR(20),
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE SET NULL
);

-- Wedding service packages offered by vendors
CREATE TABLE wedding_service_packages (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    vendor_id INTEGER NOT NULL,
    package_name VARCHAR(300) NOT NULL,
    package_description TEXT,
    package_type ENUM('basic', 'standard', 'premium', 'luxury', 'custom'),
    base_price DECIMAL(10,2) NOT NULL,
    discounted_price DECIMAL(10,2),
    package_duration VARCHAR(100), -- e.g., "1 day", "3 days", "1 week"
    max_guests INTEGER,
    services_included TEXT, -- JSON array of included services
    services_excluded TEXT, -- JSON array of excluded services
    customization_available BOOLEAN DEFAULT TRUE,
    seasonal_pricing BOOLEAN DEFAULT FALSE,
    advance_payment_percentage DECIMAL(5,2) DEFAULT 25.00,
    cancellation_charges TEXT, -- JSON with cancellation policy
    package_images TEXT, -- JSON array of package images
    sample_events TEXT, -- JSON array of sample events
    client_testimonials TEXT, -- JSON array
    booking_terms TEXT,
    special_offers TEXT,
    validity_period INTEGER DEFAULT 365, -- days
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (vendor_id) REFERENCES wedding_vendors(id) ON DELETE CASCADE
);

-- Wedding service bookings
CREATE TABLE wedding_service_bookings (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL,
    vendor_id INTEGER NOT NULL,
    package_id INTEGER,
    booking_reference VARCHAR(100) UNIQUE NOT NULL,
    service_type VARCHAR(100) NOT NULL,
    event_date DATE NOT NULL,
    event_time TIME,
    event_duration INTEGER, -- in hours
    event_location TEXT,
    guest_count INTEGER,
    total_amount DECIMAL(12,2) NOT NULL,
    advance_amount DECIMAL(12,2),
    pending_amount DECIMAL(12,2),
    booking_status ENUM('inquiry', 'quoted', 'confirmed', 'advance_paid', 'completed', 'cancelled', 'refunded') DEFAULT 'inquiry',
    payment_status ENUM('pending', 'advance_paid', 'fully_paid', 'refunded', 'failed') DEFAULT 'pending',
    special_requirements TEXT,
    custom_services TEXT, -- JSON array
    contract_terms TEXT,
    booking_notes TEXT,
    vendor_notes TEXT,
    confirmed_at TIMESTAMP,
    completed_at TIMESTAMP,
    cancelled_at TIMESTAMP,
    cancellation_reason TEXT,
    refund_amount DECIMAL(12,2),
    commission_amount DECIMAL(10,2),
    commission_paid BOOLEAN DEFAULT FALSE,
    rating_given INTEGER, -- 1-5 stars
    review_text TEXT,
    review_date TIMESTAMP,
    follow_up_required BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (vendor_id) REFERENCES wedding_vendors(id) ON DELETE CASCADE,
    FOREIGN KEY (package_id) REFERENCES wedding_service_packages(id) ON DELETE SET NULL
);

-- ================================================================
-- PAYMENT & FINANCIAL MANAGEMENT
-- ================================================================

-- Payment transactions
CREATE TABLE payments (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL,
    transaction_id VARCHAR(100) UNIQUE NOT NULL,
    payment_gateway ENUM('razorpay', 'paypal', 'stripe', 'payu', 'cashfree', 'bank_transfer') NOT NULL,
    gateway_transaction_id VARCHAR(200),
    payment_type ENUM('subscription', 'verification', 'wedding_service', 'premium_feature', 'consultation', 'other') NOT NULL,
    reference_id VARCHAR(100), -- Links to booking, verification etc
    amount DECIMAL(12,2) NOT NULL,
    currency VARCHAR(10) DEFAULT 'INR',
    payment_status ENUM('pending', 'processing', 'completed', 'failed', 'cancelled', 'refunded') DEFAULT 'pending',
    payment_method ENUM('card', 'upi', 'netbanking', 'wallet', 'emi', 'cash') NOT NULL,
    card_last_four VARCHAR(4),
    payment_description TEXT,
    gateway_response TEXT, -- JSON response from payment gateway
    failure_reason TEXT,
    initiated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    completed_at TIMESTAMP,
    refund_amount DECIMAL(12,2),
    refunded_at TIMESTAMP,
    commission_rate DECIMAL(5,2),
    commission_amount DECIMAL(10,2),
    tax_amount DECIMAL(10,2),
    discount_amount DECIMAL(10,2),
    coupon_code VARCHAR(50),
    emi_tenure INTEGER,
    emi_amount DECIMAL(10,2),
    is_recurring BOOLEAN DEFAULT FALSE,
    next_payment_date DATE,
    invoice_number VARCHAR(100),
    invoice_path VARCHAR(500),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- Subscription plans and management
CREATE TABLE subscription_plans (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    plan_name VARCHAR(100) NOT NULL,
    plan_type ENUM('basic', 'silver', 'gold', 'platinum', 'elite') NOT NULL,
    duration_months INTEGER NOT NULL,
    original_price DECIMAL(10,2) NOT NULL,
    discounted_price DECIMAL(10,2),
    features TEXT, -- JSON array of features
    max_interests_per_month INTEGER,
    max_messages_per_month INTEGER,
    profile_views_per_month INTEGER,
    verification_included BOOLEAN DEFAULT FALSE,
    wedding_services_discount DECIMAL(5,2) DEFAULT 0,
    priority_support BOOLEAN DEFAULT FALSE,
    ai_matching BOOLEAN DEFAULT FALSE,
    horoscope_matching BOOLEAN DEFAULT FALSE,
    is_active BOOLEAN DEFAULT TRUE,
    sort_order INTEGER DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- User subscriptions
CREATE TABLE user_subscriptions (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL,
    plan_id INTEGER NOT NULL,
    subscription_reference VARCHAR(100) UNIQUE NOT NULL,
    started_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    expires_at TIMESTAMP NOT NULL,
    status ENUM('active', 'expired', 'cancelled', 'suspended') DEFAULT 'active',
    auto_renewal BOOLEAN DEFAULT TRUE,
    payment_id INTEGER,
    discount_applied DECIMAL(5,2) DEFAULT 0,
    promo_code VARCHAR(50),
    cancelled_at TIMESTAMP,
    cancellation_reason TEXT,
    usage_stats TEXT, -- JSON with usage statistics
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (plan_id) REFERENCES subscription_plans(id),
    FOREIGN KEY (payment_id) REFERENCES payments(id)
);

-- ================================================================
-- SUPPORT & CUSTOMER SERVICE
-- ================================================================

-- Customer support tickets
CREATE TABLE support_tickets (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    ticket_id VARCHAR(50) UNIQUE NOT NULL, -- Human readable like TK001
    user_id INTEGER,
    user_email VARCHAR(255),
    user_phone VARCHAR(20),
    subject VARCHAR(300) NOT NULL,
    category ENUM('verification', 'payment', 'profile', 'matching', 'communication', 'wedding', 'technical', 'other') NOT NULL,
    priority ENUM('low', 'medium', 'high', 'urgent') DEFAULT 'medium',
    status ENUM('open', 'in_progress', 'waiting_customer', 'resolved', 'closed', 'escalated') DEFAULT 'open',
    description TEXT NOT NULL,
    resolution TEXT,
    assigned_to INTEGER, -- Support agent user ID
    escalated_to INTEGER, -- Senior support user ID
    satisfaction_rating INTEGER, -- 1-5 stars
    satisfaction_feedback TEXT,
    resolution_time INTEGER, -- in minutes
    first_response_time INTEGER, -- in minutes
    attachments TEXT, -- JSON array of file paths
    internal_notes TEXT,
    tags TEXT, -- JSON array of tags
    related_ticket_id INTEGER,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    resolved_at TIMESTAMP,
    closed_at TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE SET NULL,
    FOREIGN KEY (assigned_to) REFERENCES users(id) ON DELETE SET NULL,
    FOREIGN KEY (escalated_to) REFERENCES users(id) ON DELETE SET NULL,
    FOREIGN KEY (related_ticket_id) REFERENCES support_tickets(id)
);

-- Support ticket messages/responses
CREATE TABLE support_ticket_messages (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    ticket_id INTEGER NOT NULL,
    sender_id INTEGER,
    sender_type ENUM('customer', 'support', 'system') NOT NULL,
    message_text TEXT NOT NULL,
    attachments TEXT, -- JSON array
    is_internal BOOLEAN DEFAULT FALSE, -- Internal notes only visible to support
    read_by_customer BOOLEAN DEFAULT FALSE,
    read_by_support BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (ticket_id) REFERENCES support_tickets(id) ON DELETE CASCADE,
    FOREIGN KEY (sender_id) REFERENCES users(id) ON DELETE SET NULL
);

-- ================================================================
-- ANALYTICS & REPORTING
-- ================================================================

-- User activity tracking
CREATE TABLE user_analytics (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL,
    activity_type ENUM('login', 'profile_view', 'search', 'interest_sent', 'message_sent', 'payment', 'subscription', 'verification', 'booking') NOT NULL,
    activity_details TEXT, -- JSON with activity details
    session_id VARCHAR(100),
    ip_address VARCHAR(45),
    user_agent TEXT,
    device_type ENUM('desktop', 'mobile', 'tablet'),
    operating_system VARCHAR(100),
    browser VARCHAR(100),
    location_country VARCHAR(100),
    location_state VARCHAR(100),
    location_city VARCHAR(100),
    referrer_url TEXT,
    page_url TEXT,
    time_spent_seconds INTEGER,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- Platform performance metrics
CREATE TABLE platform_metrics (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    metric_date DATE NOT NULL,
    total_users INTEGER DEFAULT 0,
    active_users INTEGER DEFAULT 0,
    new_registrations INTEGER DEFAULT 0,
    premium_users INTEGER DEFAULT 0,
    verified_users INTEGER DEFAULT 0,
    total_matches INTEGER DEFAULT 0,
    successful_matches INTEGER DEFAULT 0,
    total_messages INTEGER DEFAULT 0,
    total_interests INTEGER DEFAULT 0,
    total_bookings INTEGER DEFAULT 0,
    total_revenue DECIMAL(15,2) DEFAULT 0,
    support_tickets_created INTEGER DEFAULT 0,
    support_tickets_resolved INTEGER DEFAULT 0,
    average_resolution_time DECIMAL(8,2), -- in hours
    customer_satisfaction DECIMAL(3,2), -- average rating
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(metric_date)
);

-- Success stories and testimonials
CREATE TABLE success_stories (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user1_id INTEGER NOT NULL,
    user2_id INTEGER NOT NULL,
    story_title VARCHAR(300),
    story_content TEXT,
    wedding_date DATE,
    wedding_location VARCHAR(200),
    relationship_duration INTEGER, -- in months
    how_they_met TEXT,
    platform_experience TEXT,
    advice_to_others TEXT,
    story_images TEXT, -- JSON array of image paths
    video_testimonial VARCHAR(500), -- video file path
    is_featured BOOLEAN DEFAULT FALSE,
    is_public BOOLEAN DEFAULT TRUE,
    social_media_permission BOOLEAN DEFAULT FALSE,
    contact_permission BOOLEAN DEFAULT FALSE,
    rating_platform INTEGER, -- 1-5 stars
    would_recommend BOOLEAN DEFAULT TRUE,
    approved_by INTEGER, -- Admin user ID
    approved_at TIMESTAMP,
    published_at TIMESTAMP,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user1_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (user2_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (approved_by) REFERENCES users(id) ON DELETE SET NULL
);

-- ================================================================
-- SHOPPING CART & E-COMMERCE
-- ================================================================

-- Shopping cart for services
CREATE TABLE shopping_cart (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL,
    session_id VARCHAR(100), -- For guest users
    item_type ENUM('verification', 'wedding_service', 'premium_plan', 'consultation', 'other') NOT NULL,
    item_id INTEGER NOT NULL, -- References the specific service/plan
    item_name VARCHAR(300) NOT NULL,
    item_description TEXT,
    quantity INTEGER DEFAULT 1,
    unit_price DECIMAL(10,2) NOT NULL,
    total_price DECIMAL(10,2) NOT NULL,
    discount_amount DECIMAL(10,2) DEFAULT 0,
    tax_amount DECIMAL(10,2) DEFAULT 0,
    vendor_id INTEGER, -- For wedding services
    package_id INTEGER, -- For wedding service packages
    customizations TEXT, -- JSON with any customizations
    valid_until TIMESTAMP, -- Cart item expiry
    added_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (vendor_id) REFERENCES wedding_vendors(id) ON DELETE CASCADE,
    FOREIGN KEY (package_id) REFERENCES wedding_service_packages(id) ON DELETE CASCADE
);

-- ================================================================
-- SYSTEM CONFIGURATION & ADMIN
-- ================================================================

-- System configuration settings
CREATE TABLE system_settings (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    setting_key VARCHAR(100) UNIQUE NOT NULL,
    setting_value TEXT,
    setting_type ENUM('string', 'number', 'boolean', 'json') DEFAULT 'string',
    category VARCHAR(100),
    description TEXT,
    is_public BOOLEAN DEFAULT FALSE, -- Can be accessed by frontend
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Admin activity logs
CREATE TABLE admin_logs (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    admin_id INTEGER NOT NULL,
    action_type VARCHAR(100) NOT NULL,
    target_type VARCHAR(100), -- user, vendor, ticket, etc.
    target_id INTEGER,
    action_description TEXT,
    old_values TEXT, -- JSON of old values
    new_values TEXT, -- JSON of new values
    ip_address VARCHAR(45),
    user_agent TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (admin_id) REFERENCES users(id) ON DELETE CASCADE
);

-- ================================================================
-- INDEXES FOR PERFORMANCE OPTIMIZATION
-- ================================================================

-- User and profile indexes
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_phone ON users(phone);
CREATE INDEX idx_users_type ON users(user_type);
CREATE INDEX idx_user_profiles_user_id ON user_profiles(user_id);
CREATE INDEX idx_user_profiles_gender ON user_profiles(gender);
CREATE INDEX idx_user_profiles_marital_status ON user_profiles(marital_status);
CREATE INDEX idx_user_profiles_premium ON user_profiles(is_premium);

-- Matching and compatibility indexes
CREATE INDEX idx_ai_compatibility_users ON ai_compatibility_scores(user1_id, user2_id);
CREATE INDEX idx_ai_compatibility_score ON ai_compatibility_scores(overall_score);
CREATE INDEX idx_partner_preferences_user ON partner_preferences(user_id);

-- Location indexes
CREATE INDEX idx_location_details_user ON location_details(user_id);
CREATE INDEX idx_location_details_city ON location_details(current_city);
CREATE INDEX idx_location_details_state ON location_details(current_state);

-- Religious and cultural indexes
CREATE INDEX idx_religious_details_user ON religious_details(user_id);
CREATE INDEX idx_religious_details_religion ON religious_details(religion);
CREATE INDEX idx_religious_details_caste ON religious_details(caste);

-- Professional indexes
CREATE INDEX idx_professional_details_user ON professional_details(user_id);
CREATE INDEX idx_professional_details_employment ON professional_details(employment_type);
CREATE INDEX idx_professional_details_income ON professional_details(annual_income);

-- Verification indexes
CREATE INDEX idx_background_verification_user ON background_verification(user_id);
CREATE INDEX idx_background_verification_status ON background_verification(status);
CREATE INDEX idx_background_verification_tier ON background_verification(verification_tier);

-- Communication indexes
CREATE INDEX idx_user_interests_sender ON user_interests(sender_id);
CREATE INDEX idx_user_interests_receiver ON user_interests(receiver_id);
CREATE INDEX idx_user_interests_status ON user_interests(status);
CREATE INDEX idx_conversations_users ON conversations(user1_id, user2_id);
CREATE INDEX idx_messages_conversation ON messages(conversation_id);
CREATE INDEX idx_messages_sender ON messages(sender_id);

-- Wedding services indexes
CREATE INDEX idx_wedding_vendors_category ON wedding_vendors(service_category);
CREATE INDEX idx_wedding_vendors_verified ON wedding_vendors(is_verified);
CREATE INDEX idx_wedding_vendors_rating ON wedding_vendors(rating);
CREATE INDEX idx_wedding_service_bookings_user ON wedding_service_bookings(user_id);
CREATE INDEX idx_wedding_service_bookings_vendor ON wedding_service_bookings(vendor_id);
CREATE INDEX idx_wedding_service_bookings_status ON wedding_service_bookings(booking_status);

-- Payment indexes
CREATE INDEX idx_payments_user ON payments(user_id);
CREATE INDEX idx_payments_status ON payments(payment_status);
CREATE INDEX idx_payments_type ON payments(payment_type);
CREATE INDEX idx_payments_transaction ON payments(transaction_id);

-- Support indexes
CREATE INDEX idx_support_tickets_user ON support_tickets(user_id);
CREATE INDEX idx_support_tickets_status ON support_tickets(status);
CREATE INDEX idx_support_tickets_category ON support_tickets(category);
CREATE INDEX idx_support_tickets_priority ON support_tickets(priority);

-- Analytics indexes
CREATE INDEX idx_user_analytics_user ON user_analytics(user_id);
CREATE INDEX idx_user_analytics_activity ON user_analytics(activity_type);
CREATE INDEX idx_user_analytics_date ON user_analytics(created_at);

-- Cart indexes
CREATE INDEX idx_shopping_cart_user ON shopping_cart(user_id);
CREATE INDEX idx_shopping_cart_session ON shopping_cart(session_id);
CREATE INDEX idx_shopping_cart_type ON shopping_cart(item_type);

-- ================================================================
-- SAMPLE DATA INSERTION (FOR TESTING)
-- ================================================================

-- Insert system settings
INSERT INTO system_settings (setting_key, setting_value, setting_type, category, description, is_public) VALUES
('site_name', 'Rishta Sathi', 'string', 'general', 'Website name', true),
('site_tagline', 'Perfect Matches, Perfect Lives', 'string', 'general', 'Website tagline', true),
('maintenance_mode', 'false', 'boolean', 'system', 'Maintenance mode status', false),
('registration_enabled', 'true', 'boolean', 'user', 'New user registration enabled', true),
('email_verification_required', 'true', 'boolean', 'user', 'Email verification required for new users', false),
('phone_verification_required', 'true', 'boolean', 'user', 'Phone verification required for new users', false),
('min_age_registration', '18', 'number', 'user', 'Minimum age for registration', true),
('max_age_registration', '70', 'number', 'user', 'Maximum age for registration', true);

-- Insert default subscription plans
INSERT INTO subscription_plans (plan_name, plan_type, duration_months, original_price, discounted_price, features, max_interests_per_month, max_messages_per_month, profile_views_per_month, verification_included, wedding_services_discount, priority_support, ai_matching, horoscope_matching, is_active) VALUES
('Silver Plan', 'silver', 1, 999, 899, '["Unlimited profile views", "Advanced search filters", "Profile view analytics", "Priority customer support", "50 interests per month", "Basic compatibility reports"]', 50, 100, -1, false, 5.00, true, false, false, true),
('Gold Plan', 'gold', 1, 2999, 2699, '["All Silver features", "Unlimited messaging", "Contact information access", "Wedding planning assistance", "Dedicated relationship manager", "100 interests per month", "Detailed compatibility analysis"]', 100, -1, -1, false, 10.00, true, true, false, true),
('Platinum Plan', 'platinum', 1, 5999, 5399, '["All Gold features", "Background verification included (Standard Tier)", "AI compatibility analysis", "Concierge services", "Professional photoshoot", "Unlimited interests", "Priority matching", "Wedding vendor discounts"]', -1, -1, -1, true, 15.00, true, true, true, true),
('Elite Plan', 'elite', 1, 9999, 8999, '["All Platinum features", "Premium background verification", "Personal matchmaker", "Family consultation services", "Custom match curation", "Exclusive events access", "White-glove service"]', -1, -1, -1, true, 25.00, true, true, true, true);

-- ================================================================
-- END OF COMPREHENSIVE MATRIMONY SCHEMA
-- ================================================================
