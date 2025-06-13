
-- Universal Matrimony Platform Database Schema
-- Compatible with both SQLite and PostgreSQL
-- Version: 2.0
-- Created: 2024

-- Enable foreign key constraints for SQLite
PRAGMA foreign_keys = ON;

-- ============================================================================
-- CORE USER TABLES
-- ============================================================================

-- Users table - Core authentication and account management
CREATE TABLE users (
    id INTEGER PRIMARY KEY AUTOINCREMENT, -- SQLite: AUTOINCREMENT, PostgreSQL: SERIAL
    email VARCHAR(255) UNIQUE NOT NULL,
    phone VARCHAR(20) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    profile_for VARCHAR(50) DEFAULT 'self',
    is_active BOOLEAN DEFAULT true,
    is_verified BOOLEAN DEFAULT false,
    email_verified BOOLEAN DEFAULT false,
    phone_verified BOOLEAN DEFAULT false,
    last_login TIMESTAMP,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Personal details - Comprehensive personal information
CREATE TABLE personal_details (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    middle_name VARCHAR(100),
    display_name VARCHAR(200),
    date_of_birth DATE NOT NULL,
    time_of_birth TIME,
    place_of_birth VARCHAR(200),
    gender VARCHAR(10) NOT NULL,
    marital_status VARCHAR(50) DEFAULT 'never_married',
    height_feet INTEGER,
    height_inches INTEGER,
    weight DECIMAL(5,2),
    body_type VARCHAR(50),
    complexion VARCHAR(50),
    hair_type VARCHAR(50),
    hair_color VARCHAR(50),
    eye_color VARCHAR(50),
    blood_group VARCHAR(10),
    physical_status VARCHAR(50) DEFAULT 'normal',
    mother_tongue VARCHAR(100),
    known_languages TEXT, -- JSON array
    about_me TEXT,
    hobbies TEXT, -- JSON array
    personality_type VARCHAR(20), -- MBTI
    diet_habits VARCHAR(50),
    smoking_habits VARCHAR(50) DEFAULT 'never',
    drinking_habits VARCHAR(50) DEFAULT 'never',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- Family details - Family background and structure
CREATE TABLE family_details (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL,
    family_type VARCHAR(50), -- nuclear, joint, extended
    family_values VARCHAR(50), -- traditional, moderate, liberal
    father_name VARCHAR(200),
    father_occupation VARCHAR(200),
    father_income VARCHAR(100),
    father_education VARCHAR(200),
    mother_name VARCHAR(200),
    mother_occupation VARCHAR(200),
    mother_income VARCHAR(100),
    mother_education VARCHAR(200),
    brothers_count INTEGER DEFAULT 0,
    brothers_married INTEGER DEFAULT 0,
    sisters_count INTEGER DEFAULT 0,
    sisters_married INTEGER DEFAULT 0,
    family_income VARCHAR(100),
    family_business TEXT,
    about_family TEXT,
    native_place VARCHAR(200),
    ancestral_background TEXT,
    family_reputation VARCHAR(100),
    property_ownership TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- Education details - Academic background
CREATE TABLE education_details (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL,
    highest_education VARCHAR(200) NOT NULL,
    degree_name VARCHAR(200),
    specialization VARCHAR(200),
    college_university VARCHAR(300),
    graduation_year INTEGER,
    grades_percentage VARCHAR(20),
    additional_qualifications TEXT, -- JSON array
    certifications TEXT, -- JSON array
    research_work TEXT,
    publications TEXT,
    awards_achievements TEXT,
    extracurricular TEXT,
    language_proficiency TEXT, -- JSON object
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- Professional details - Career and employment information
CREATE TABLE professional_details (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL,
    occupation VARCHAR(200) NOT NULL,
    job_title VARCHAR(200),
    company_name VARCHAR(300),
    industry VARCHAR(200),
    work_experience_years INTEGER,
    annual_income DECIMAL(15,2),
    currency VARCHAR(10) DEFAULT 'INR',
    work_location VARCHAR(200),
    work_type VARCHAR(50), -- full_time, part_time, contract, freelance
    is_business_owner BOOLEAN DEFAULT false,
    business_details TEXT,
    previous_companies TEXT, -- JSON array
    career_goals TEXT,
    retirement_plans TEXT,
    professional_achievements TEXT,
    skills TEXT, -- JSON array
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- Location details - Geographic information
CREATE TABLE location_details (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL,
    current_address TEXT NOT NULL,
    current_city VARCHAR(200) NOT NULL,
    current_state VARCHAR(200) NOT NULL,
    current_country VARCHAR(100) DEFAULT 'India',
    current_pincode VARCHAR(20),
    current_latitude DECIMAL(10,8),
    current_longitude DECIMAL(11,8),
    permanent_address TEXT,
    permanent_city VARCHAR(200),
    permanent_state VARCHAR(200),
    permanent_country VARCHAR(100),
    permanent_pincode VARCHAR(20),
    permanent_latitude DECIMAL(10,8),
    permanent_longitude DECIMAL(11,8),
    willing_to_relocate BOOLEAN DEFAULT false,
    preferred_locations TEXT, -- JSON array
    citizenship VARCHAR(100),
    residency_status VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- Religious and cultural details
CREATE TABLE religious_details (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL,
    religion VARCHAR(100) NOT NULL,
    caste VARCHAR(200),
    sub_caste VARCHAR(200),
    gotra VARCHAR(100),
    manglik_status VARCHAR(50),
    star_nakshatra VARCHAR(100),
    rashi VARCHAR(100),
    birth_time_verified BOOLEAN DEFAULT false,
    religious_practices VARCHAR(100), -- very_religious, religious, moderate, not_religious
    cultural_values VARCHAR(100),
    temple_visit_frequency VARCHAR(50),
    festival_celebration VARCHAR(100),
    spiritual_beliefs TEXT,
    astrology_importance VARCHAR(50),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- Lifestyle and personal preferences
CREATE TABLE lifestyle_details (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL,
    interests TEXT, -- JSON array
    hobbies TEXT, -- JSON array
    sports_fitness TEXT, -- JSON array
    music_preferences TEXT, -- JSON array
    movie_preferences TEXT, -- JSON array
    reading_habits TEXT,
    travel_preferences TEXT,
    social_media_usage VARCHAR(50),
    party_lifestyle VARCHAR(50),
    pet_preferences VARCHAR(100),
    environmental_consciousness VARCHAR(50),
    technology_adoption VARCHAR(50),
    financial_planning_approach VARCHAR(100),
    life_goals TEXT,
    bucket_list TEXT,
    stress_management TEXT,
    communication_style VARCHAR(100),
    conflict_resolution VARCHAR(100),
    decision_making_style VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- Partner preferences and requirements
CREATE TABLE partner_preferences (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL,
    min_age INTEGER,
    max_age INTEGER,
    min_height_feet INTEGER,
    min_height_inches INTEGER,
    max_height_feet INTEGER,
    max_height_inches INTEGER,
    preferred_education TEXT, -- JSON array
    preferred_occupations TEXT, -- JSON array
    min_income DECIMAL(15,2),
    max_income DECIMAL(15,2),
    preferred_locations TEXT, -- JSON array
    preferred_religions TEXT, -- JSON array
    preferred_castes TEXT, -- JSON array
    preferred_marital_status TEXT, -- JSON array
    manglik_preference VARCHAR(50),
    diet_preference VARCHAR(50),
    smoking_preference VARCHAR(50),
    drinking_preference VARCHAR(50),
    family_type_preference VARCHAR(50),
    complexion_preference VARCHAR(50),
    body_type_preference VARCHAR(50),
    mother_tongue_preference TEXT, -- JSON array
    special_requirements TEXT,
    dealbreakers TEXT,
    nice_to_have TEXT,
    importance_weights TEXT, -- JSON object with weights for different criteria
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- ============================================================================
-- VERIFICATION AND TRUST TABLES
-- ============================================================================

-- Background verification tracking
CREATE TABLE background_verification (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL,
    verification_tier VARCHAR(50) NOT NULL, -- basic, standard, premium, elite
    verification_status VARCHAR(50) DEFAULT 'pending', -- pending, in_progress, completed, failed
    payment_status VARCHAR(50) DEFAULT 'pending',
    payment_amount DECIMAL(10,2),
    initiated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    completed_at TIMESTAMP,
    expiry_at TIMESTAMP,
    verification_agency VARCHAR(200),
    verification_id VARCHAR(100),
    report_url VARCHAR(500),
    verification_score INTEGER, -- 0-100
    trust_score INTEGER, -- 0-100
    verification_details TEXT, -- JSON object with detailed results
    last_updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- Document verification tracking
CREATE TABLE document_verification (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL,
    document_type VARCHAR(100) NOT NULL, -- aadhaar, pan, passport, education, etc.
    document_number VARCHAR(200),
    verification_status VARCHAR(50) DEFAULT 'pending',
    uploaded_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    verified_at TIMESTAMP,
    expiry_date DATE,
    verification_method VARCHAR(100), -- manual, api, ai
    verification_confidence DECIMAL(5,2), -- 0-100
    document_url VARCHAR(500),
    rejection_reason TEXT,
    verification_details TEXT, -- JSON object
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- Photo verification and management
CREATE TABLE user_photos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL,
    photo_url VARCHAR(500) NOT NULL,
    photo_type VARCHAR(50) DEFAULT 'profile', -- profile, gallery, verification
    is_primary BOOLEAN DEFAULT false,
    is_verified BOOLEAN DEFAULT false,
    verification_score DECIMAL(5,2), -- 0-100
    upload_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    verification_date TIMESTAMP,
    photo_order INTEGER DEFAULT 0,
    privacy_level VARCHAR(50) DEFAULT 'registered_users', -- public, registered_users, premium_users, private
    face_detected BOOLEAN DEFAULT false,
    ai_analysis TEXT, -- JSON object with AI analysis results
    moderation_status VARCHAR(50) DEFAULT 'pending', -- approved, rejected, pending
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- Trust and safety incidents
CREATE TABLE safety_incidents (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    reporter_id INTEGER NOT NULL,
    reported_user_id INTEGER NOT NULL,
    incident_type VARCHAR(100) NOT NULL, -- fake_profile, harassment, spam, fraud, etc.
    incident_description TEXT,
    evidence_urls TEXT, -- JSON array
    incident_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status VARCHAR(50) DEFAULT 'pending', -- pending, investigating, resolved, closed
    priority VARCHAR(20) DEFAULT 'medium', -- low, medium, high, critical
    assigned_to VARCHAR(200),
    resolution TEXT,
    resolved_at TIMESTAMP,
    FOREIGN KEY (reporter_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (reported_user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- ============================================================================
-- MATCHING AND COMPATIBILITY TABLES
-- ============================================================================

-- AI-generated compatibility scores
CREATE TABLE ai_compatibility_scores (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user1_id INTEGER NOT NULL,
    user2_id INTEGER NOT NULL,
    overall_score DECIMAL(5,2) NOT NULL, -- 0-100
    personality_score DECIMAL(5,2),
    lifestyle_score DECIMAL(5,2),
    family_score DECIMAL(5,2),
    career_score DECIMAL(5,2),
    location_score DECIMAL(5,2),
    religious_score DECIMAL(5,2),
    physical_score DECIMAL(5,2),
    astrological_score DECIMAL(5,2),
    financial_score DECIMAL(5,2),
    communication_score DECIMAL(5,2),
    score_explanation TEXT, -- JSON object with detailed breakdown
    last_calculated TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    algorithm_version VARCHAR(20),
    confidence_level DECIMAL(5,2), -- 0-100
    FOREIGN KEY (user1_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (user2_id) REFERENCES users(id) ON DELETE CASCADE,
    UNIQUE(user1_id, user2_id)
);

-- Horoscope and astrological data
CREATE TABLE horoscope_details (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL,
    birth_chart_data TEXT, -- JSON object with planetary positions
    kundli_url VARCHAR(500),
    rashi VARCHAR(100),
    nakshatra VARCHAR(100),
    charan INTEGER,
    manglik_status VARCHAR(50),
    gana VARCHAR(50), -- dev, manushya, rakshasa
    nadi VARCHAR(50),
    varna VARCHAR(50),
    yoni VARCHAR(50),
    gan VARCHAR(50),
    bhakoot VARCHAR(50),
    tara VARCHAR(50),
    vasya VARCHAR(50),
    ashtakoota_score INTEGER, -- 0-36
    dasha_analysis TEXT,
    gemstone_recommendations TEXT,
    auspicious_times TEXT, -- JSON object
    astrologer_notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- Horoscope matching results
CREATE TABLE horoscope_matching (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user1_id INTEGER NOT NULL,
    user2_id INTEGER NOT NULL,
    ashtakoota_total_score INTEGER, -- 0-36
    varna_score INTEGER, -- 0-1
    vasya_score INTEGER, -- 0-2
    tara_score INTEGER, -- 0-3
    yoni_score INTEGER, -- 0-4
    graha_maitri_score INTEGER, -- 0-5
    gana_score INTEGER, -- 0-6
    bhakoot_score INTEGER, -- 0-7
    nadi_score INTEGER, -- 0-8
    manglik_compatibility VARCHAR(50),
    overall_compatibility VARCHAR(50), -- excellent, good, average, poor
    compatibility_percentage DECIMAL(5,2),
    doshas_present TEXT, -- JSON array
    remedies_suggested TEXT,
    astrologer_recommendation TEXT,
    match_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user1_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (user2_id) REFERENCES users(id) ON DELETE CASCADE
);

-- User behavioral analytics
CREATE TABLE user_analytics (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL,
    login_frequency DECIMAL(5,2), -- logins per week
    profile_completion_percentage DECIMAL(5,2),
    search_frequency DECIMAL(5,2),
    profile_views_given INTEGER DEFAULT 0,
    profile_views_received INTEGER DEFAULT 0,
    interests_sent INTEGER DEFAULT 0,
    interests_received INTEGER DEFAULT 0,
    messages_sent INTEGER DEFAULT 0,
    messages_received INTEGER DEFAULT 0,
    response_rate DECIMAL(5,2), -- percentage
    avg_response_time INTEGER, -- in minutes
    preferred_search_criteria TEXT, -- JSON object
    activity_pattern TEXT, -- JSON object with hourly/daily patterns
    engagement_score DECIMAL(5,2), -- 0-100
    success_prediction_score DECIMAL(5,2), -- 0-100
    last_updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- ============================================================================
-- COMMUNICATION TABLES
-- ============================================================================

-- Conversations between users
CREATE TABLE conversations (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    participant1_id INTEGER NOT NULL,
    participant2_id INTEGER NOT NULL,
    conversation_type VARCHAR(50) DEFAULT 'private', -- private, family_group
    status VARCHAR(50) DEFAULT 'active', -- active, archived, blocked
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    last_message_at TIMESTAMP,
    last_message_id INTEGER,
    unread_count_p1 INTEGER DEFAULT 0,
    unread_count_p2 INTEGER DEFAULT 0,
    is_blocked_by_p1 BOOLEAN DEFAULT false,
    is_blocked_by_p2 BOOLEAN DEFAULT false,
    FOREIGN KEY (participant1_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (participant2_id) REFERENCES users(id) ON DELETE CASCADE,
    UNIQUE(participant1_id, participant2_id)
);

-- Messages within conversations
CREATE TABLE messages (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    conversation_id INTEGER NOT NULL,
    sender_id INTEGER NOT NULL,
    message_type VARCHAR(50) DEFAULT 'text', -- text, image, document, audio, video
    message_content TEXT,
    media_url VARCHAR(500),
    media_metadata TEXT, -- JSON object
    is_encrypted BOOLEAN DEFAULT true,
    encryption_key VARCHAR(500),
    sent_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    delivered_at TIMESTAMP,
    read_at TIMESTAMP,
    edited_at TIMESTAMP,
    is_deleted BOOLEAN DEFAULT false,
    deleted_at TIMESTAMP,
    reply_to_message_id INTEGER,
    sentiment_score DECIMAL(3,2), -- -1 to 1
    FOREIGN KEY (conversation_id) REFERENCES conversations(id) ON DELETE CASCADE,
    FOREIGN KEY (sender_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (reply_to_message_id) REFERENCES messages(id)
);

-- Interest management (expressing interest in profiles)
CREATE TABLE interests (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    sender_id INTEGER NOT NULL,
    receiver_id INTEGER NOT NULL,
    interest_type VARCHAR(50) DEFAULT 'standard', -- standard, premium, priority
    status VARCHAR(50) DEFAULT 'sent', -- sent, viewed, accepted, declined, expired
    message TEXT,
    sent_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    viewed_at TIMESTAMP,
    responded_at TIMESTAMP,
    expires_at TIMESTAMP,
    response_message TEXT,
    is_mutual BOOLEAN DEFAULT false,
    compatibility_score DECIMAL(5,2),
    FOREIGN KEY (sender_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (receiver_id) REFERENCES users(id) ON DELETE CASCADE,
    UNIQUE(sender_id, receiver_id)
);

-- Profile views tracking
CREATE TABLE profile_views (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    viewer_id INTEGER NOT NULL,
    viewed_user_id INTEGER NOT NULL,
    view_type VARCHAR(50) DEFAULT 'standard', -- standard, anonymous, premium
    viewed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    view_duration INTEGER, -- in seconds
    viewed_sections TEXT, -- JSON array of viewed profile sections
    source VARCHAR(100), -- search, recommendations, interest, direct
    device_type VARCHAR(50),
    location_data TEXT, -- JSON object
    FOREIGN KEY (viewer_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (viewed_user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- ============================================================================
-- SUBSCRIPTION AND PAYMENT TABLES
-- ============================================================================

-- Subscription plans
CREATE TABLE subscription_plans (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    plan_name VARCHAR(100) NOT NULL,
    plan_type VARCHAR(50) NOT NULL, -- silver, gold, platinum, elite
    duration_months INTEGER NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    currency VARCHAR(10) DEFAULT 'INR',
    features TEXT, -- JSON array of features
    limits_config TEXT, -- JSON object with usage limits
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- User subscriptions
CREATE TABLE user_subscriptions (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL,
    plan_id INTEGER NOT NULL,
    subscription_status VARCHAR(50) DEFAULT 'active', -- active, expired, cancelled, suspended
    start_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    end_date TIMESTAMP NOT NULL,
    auto_renewal BOOLEAN DEFAULT true,
    payment_method VARCHAR(100),
    payment_id VARCHAR(200),
    amount_paid DECIMAL(10,2),
    currency VARCHAR(10) DEFAULT 'INR',
    features_used TEXT, -- JSON object tracking feature usage
    usage_limits TEXT, -- JSON object with current usage
    cancellation_reason TEXT,
    cancelled_at TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (plan_id) REFERENCES subscription_plans(id)
);

-- Payment transactions
CREATE TABLE payment_transactions (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL,
    transaction_type VARCHAR(100) NOT NULL, -- subscription, verification, wedding_service
    reference_id INTEGER, -- subscription_id, verification_id, etc.
    amount DECIMAL(10,2) NOT NULL,
    currency VARCHAR(10) DEFAULT 'INR',
    payment_method VARCHAR(100), -- razorpay, stripe, upi, card, etc.
    payment_gateway VARCHAR(100),
    gateway_transaction_id VARCHAR(200),
    payment_status VARCHAR(50) DEFAULT 'pending', -- pending, completed, failed, refunded
    initiated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    completed_at TIMESTAMP,
    gateway_response TEXT, -- JSON object
    refund_amount DECIMAL(10,2) DEFAULT 0,
    refund_reason TEXT,
    refunded_at TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- ============================================================================
-- WEDDING SERVICES TABLES
-- ============================================================================

-- Wedding service vendors
CREATE TABLE wedding_vendors (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    vendor_name VARCHAR(300) NOT NULL,
    business_type VARCHAR(100) NOT NULL, -- photography, catering, decoration, etc.
    contact_person VARCHAR(200),
    email VARCHAR(255),
    phone VARCHAR(20),
    address TEXT,
    city VARCHAR(200),
    state VARCHAR(200),
    pincode VARCHAR(20),
    latitude DECIMAL(10,8),
    longitude DECIMAL(11,8),
    description TEXT,
    specializations TEXT, -- JSON array
    price_range VARCHAR(100),
    rating DECIMAL(3,2) DEFAULT 0,
    review_count INTEGER DEFAULT 0,
    portfolio_images TEXT, -- JSON array of image URLs
    certifications TEXT, -- JSON array
    years_experience INTEGER,
    team_size INTEGER,
    languages_spoken TEXT, -- JSON array
    service_areas TEXT, -- JSON array of cities/states
    availability_calendar TEXT, -- JSON object
    terms_conditions TEXT,
    cancellation_policy TEXT,
    is_verified BOOLEAN DEFAULT false,
    is_featured BOOLEAN DEFAULT false,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Wedding service categories and packages
CREATE TABLE wedding_service_packages (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    vendor_id INTEGER NOT NULL,
    package_name VARCHAR(200) NOT NULL,
    package_type VARCHAR(100), -- basic, standard, premium, deluxe
    description TEXT,
    inclusions TEXT, -- JSON array
    exclusions TEXT, -- JSON array
    price DECIMAL(12,2) NOT NULL,
    currency VARCHAR(10) DEFAULT 'INR',
    duration_hours INTEGER,
    max_guests INTEGER,
    advance_booking_days INTEGER DEFAULT 30,
    cancellation_charges TEXT, -- JSON object
    additional_charges TEXT, -- JSON object
    seasonal_pricing TEXT, -- JSON object
    is_customizable BOOLEAN DEFAULT true,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (vendor_id) REFERENCES wedding_vendors(id) ON DELETE CASCADE
);

-- Wedding service bookings
CREATE TABLE wedding_bookings (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL,
    vendor_id INTEGER NOT NULL,
    package_id INTEGER,
    booking_type VARCHAR(100) NOT NULL,
    event_date DATE NOT NULL,
    event_time TIME,
    event_duration INTEGER, -- in hours
    venue_name VARCHAR(300),
    venue_address TEXT,
    guest_count INTEGER,
    special_requirements TEXT,
    booking_amount DECIMAL(12,2) NOT NULL,
    advance_amount DECIMAL(12,2),
    balance_amount DECIMAL(12,2),
    total_amount DECIMAL(12,2) NOT NULL,
    currency VARCHAR(10) DEFAULT 'INR',
    booking_status VARCHAR(50) DEFAULT 'pending', -- pending, confirmed, completed, cancelled
    payment_status VARCHAR(50) DEFAULT 'pending', -- pending, partial, completed, refunded
    booking_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    confirmation_date TIMESTAMP,
    cancellation_date TIMESTAMP,
    cancellation_reason TEXT,
    vendor_notes TEXT,
    customer_notes TEXT,
    service_rating INTEGER, -- 1-5
    service_review TEXT,
    completion_photos TEXT, -- JSON array
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (vendor_id) REFERENCES wedding_vendors(id) ON DELETE CASCADE,
    FOREIGN KEY (package_id) REFERENCES wedding_service_packages(id)
);

-- Wedding planning and timeline
CREATE TABLE wedding_planning (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL,
    partner_user_id INTEGER,
    wedding_date DATE,
    engagement_date DATE,
    wedding_type VARCHAR(100), -- traditional, modern, destination, etc.
    ceremony_types TEXT, -- JSON array: engagement, mehendi, sangeet, wedding, reception
    estimated_budget DECIMAL(15,2),
    actual_budget DECIMAL(15,2),
    guest_count INTEGER,
    venue_type VARCHAR(100),
    theme_preferences TEXT,
    color_scheme TEXT, -- JSON array
    cultural_requirements TEXT,
    dietary_requirements TEXT,
    planning_status VARCHAR(50) DEFAULT 'planning', -- planning, booked, completed
    timeline_data TEXT, -- JSON object with detailed timeline
    checklist_data TEXT, -- JSON object with planning checklist
    notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (partner_user_id) REFERENCES users(id)
);

-- ============================================================================
-- NOTIFICATIONS AND ALERTS TABLES
-- ============================================================================

-- User notifications
CREATE TABLE notifications (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL,
    notification_type VARCHAR(100) NOT NULL, -- interest_received, message, match, verification, etc.
    title VARCHAR(300) NOT NULL,
    message TEXT,
    related_user_id INTEGER,
    related_entity_type VARCHAR(100), -- profile, conversation, booking, etc.
    related_entity_id INTEGER,
    is_read BOOLEAN DEFAULT false,
    is_actionable BOOLEAN DEFAULT false,
    action_type VARCHAR(100), -- view_profile, respond_interest, complete_payment, etc.
    action_data TEXT, -- JSON object
    priority VARCHAR(20) DEFAULT 'normal', -- low, normal, high, urgent
    delivery_method VARCHAR(50) DEFAULT 'in_app', -- in_app, email, sms, push
    sent_at TIMESTAMP,
    read_at TIMESTAMP,
    expires_at TIMESTAMP,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (related_user_id) REFERENCES users(id) ON DELETE SET NULL
);

-- User alert preferences
CREATE TABLE notification_preferences (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL,
    email_notifications BOOLEAN DEFAULT true,
    sms_notifications BOOLEAN DEFAULT true,
    push_notifications BOOLEAN DEFAULT true,
    marketing_emails BOOLEAN DEFAULT false,
    interest_notifications BOOLEAN DEFAULT true,
    message_notifications BOOLEAN DEFAULT true,
    match_notifications BOOLEAN DEFAULT true,
    verification_notifications BOOLEAN DEFAULT true,
    wedding_service_notifications BOOLEAN DEFAULT true,
    profile_view_notifications BOOLEAN DEFAULT false,
    newsletter_subscription BOOLEAN DEFAULT false,
    quiet_hours_start TIME DEFAULT '22:00:00',
    quiet_hours_end TIME DEFAULT '08:00:00',
    notification_frequency VARCHAR(50) DEFAULT 'immediate', -- immediate, hourly, daily, weekly
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- ============================================================================
-- SUCCESS TRACKING AND ANALYTICS TABLES
-- ============================================================================

-- Success stories and testimonials
CREATE TABLE success_stories (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user1_id INTEGER NOT NULL,
    user2_id INTEGER NOT NULL,
    story_title VARCHAR(300),
    story_content TEXT,
    wedding_date DATE,
    meeting_story TEXT,
    platform_role TEXT, -- how platform helped
    photos TEXT, -- JSON array of photo URLs
    video_url VARCHAR(500),
    is_featured BOOLEAN DEFAULT false,
    is_published BOOLEAN DEFAULT false,
    consent_given BOOLEAN DEFAULT false,
    privacy_level VARCHAR(50) DEFAULT 'public', -- public, registered_users, private
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    published_at TIMESTAMP,
    FOREIGN KEY (user1_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (user2_id) REFERENCES users(id) ON DELETE CASCADE
);

-- Platform analytics and metrics
CREATE TABLE platform_analytics (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    metric_name VARCHAR(200) NOT NULL,
    metric_category VARCHAR(100), -- user_engagement, success_rate, revenue, etc.
    metric_value DECIMAL(15,4),
    metric_unit VARCHAR(50),
    dimension_filters TEXT, -- JSON object for segmentation
    measurement_date DATE NOT NULL,
    measurement_period VARCHAR(50), -- daily, weekly, monthly, yearly
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    INDEX(metric_name, measurement_date)
);

-- ============================================================================
-- SYSTEM TABLES
-- ============================================================================

-- System configuration
CREATE TABLE system_config (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    config_key VARCHAR(200) NOT NULL UNIQUE,
    config_value TEXT,
    config_type VARCHAR(50) DEFAULT 'string', -- string, number, boolean, json
    description TEXT,
    is_sensitive BOOLEAN DEFAULT false,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Audit trail for important actions
CREATE TABLE audit_trail (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER,
    action_type VARCHAR(200) NOT NULL,
    entity_type VARCHAR(100), -- user, profile, payment, etc.
    entity_id INTEGER,
    old_values TEXT, -- JSON object
    new_values TEXT, -- JSON object
    ip_address VARCHAR(45),
    user_agent TEXT,
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE SET NULL
);

-- ============================================================================
-- INDEXES FOR PERFORMANCE
-- ============================================================================

-- Core indexes for users table
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_phone ON users(phone);
CREATE INDEX idx_users_is_active ON users(is_active);
CREATE INDEX idx_users_created_at ON users(created_at);

-- Profile search indexes
CREATE INDEX idx_personal_details_user_id ON personal_details(user_id);
CREATE INDEX idx_personal_details_gender ON personal_details(gender);
CREATE INDEX idx_personal_details_marital_status ON personal_details(marital_status);
CREATE INDEX idx_personal_details_age ON personal_details(date_of_birth);

-- Location indexes
CREATE INDEX idx_location_details_user_id ON location_details(user_id);
CREATE INDEX idx_location_details_current_city ON location_details(current_city);
CREATE INDEX idx_location_details_current_state ON location_details(current_state);

-- Professional indexes
CREATE INDEX idx_professional_details_user_id ON professional_details(user_id);
CREATE INDEX idx_professional_details_occupation ON professional_details(occupation);
CREATE INDEX idx_professional_details_income ON professional_details(annual_income);

-- Religious indexes
CREATE INDEX idx_religious_details_user_id ON religious_details(user_id);
CREATE INDEX idx_religious_details_religion ON religious_details(religion);
CREATE INDEX idx_religious_details_caste ON religious_details(caste);

-- Communication indexes
CREATE INDEX idx_conversations_participants ON conversations(participant1_id, participant2_id);
CREATE INDEX idx_messages_conversation ON messages(conversation_id);
CREATE INDEX idx_messages_sender ON messages(sender_id);
CREATE INDEX idx_interests_sender ON interests(sender_id);
CREATE INDEX idx_interests_receiver ON interests(receiver_id);
CREATE INDEX idx_profile_views_viewer ON profile_views(viewer_id);
CREATE INDEX idx_profile_views_viewed ON profile_views(viewed_user_id);

-- Verification indexes
CREATE INDEX idx_background_verification_user ON background_verification(user_id);
CREATE INDEX idx_document_verification_user ON document_verification(user_id);
CREATE INDEX idx_user_photos_user ON user_photos(user_id);

-- Subscription indexes
CREATE INDEX idx_user_subscriptions_user ON user_subscriptions(user_id);
CREATE INDEX idx_user_subscriptions_status ON user_subscriptions(subscription_status);

-- Wedding service indexes
CREATE INDEX idx_wedding_vendors_city ON wedding_vendors(city);
CREATE INDEX idx_wedding_vendors_type ON wedding_vendors(business_type);
CREATE INDEX idx_wedding_bookings_user ON wedding_bookings(user_id);
CREATE INDEX idx_wedding_bookings_vendor ON wedding_bookings(vendor_id);

-- Notification indexes
CREATE INDEX idx_notifications_user ON notifications(user_id);
CREATE INDEX idx_notifications_read ON notifications(is_read);
CREATE INDEX idx_notifications_created ON notifications(created_at);

-- ============================================================================
-- INITIAL DATA SETUP
-- ============================================================================

-- Insert default subscription plans
INSERT INTO subscription_plans (plan_name, plan_type, duration_months, price, features, limits_config) VALUES
('Silver Monthly', 'silver', 1, 999.00, 
 '["unlimited_profile_views", "advanced_search_filters", "profile_analytics", "priority_support"]',
 '{"interests_per_month": 50, "messages_per_day": 20, "profile_views_per_day": 100}'),
('Gold Monthly', 'gold', 1, 2999.00,
 '["all_silver_features", "unlimited_messaging", "contact_info_access", "wedding_planning", "relationship_manager"]',
 '{"interests_per_month": 100, "messages_per_day": -1, "profile_views_per_day": -1}'),
('Platinum Monthly', 'platinum', 1, 5999.00,
 '["all_gold_features", "background_verification", "ai_compatibility", "concierge_services", "photoshoot"]',
 '{"interests_per_month": -1, "messages_per_day": -1, "profile_views_per_day": -1}'),
('Elite Monthly', 'elite', 1, 9999.00,
 '["all_platinum_features", "premium_verification", "personal_matchmaker", "family_consultation", "exclusive_events"]',
 '{"interests_per_month": -1, "messages_per_day": -1, "profile_views_per_day": -1}');

-- Insert default system configuration
INSERT INTO system_config (config_key, config_value, config_type, description) VALUES
('platform_name', 'Rishta Sathi', 'string', 'Platform display name'),
('max_profile_photos', '10', 'number', 'Maximum photos per profile'),
('min_age_requirement', '18', 'number', 'Minimum age for registration'),
('max_age_limit', '70', 'number', 'Maximum age for registration'),
('compatibility_algorithm_version', '2.0', 'string', 'Current AI algorithm version'),
('verification_expiry_days', '365', 'number', 'Days before verification expires'),
('interest_expiry_days', '30', 'number', 'Days before interest expires'),
('free_interests_per_month', '5', 'number', 'Free interests for basic users'),
('maintenance_mode', 'false', 'boolean', 'Platform maintenance status');

-- ============================================================================
-- TRIGGERS AND CONSTRAINTS (PostgreSQL specific, comment out for SQLite)
-- ============================================================================

-- Uncomment the following for PostgreSQL deployment:

/*
-- Update timestamp triggers
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Apply update triggers to relevant tables
CREATE TRIGGER update_personal_details_updated_at BEFORE UPDATE ON personal_details FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_family_details_updated_at BEFORE UPDATE ON family_details FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_education_details_updated_at BEFORE UPDATE ON education_details FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_professional_details_updated_at BEFORE UPDATE ON professional_details FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_location_details_updated_at BEFORE UPDATE ON location_details FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_religious_details_updated_at BEFORE UPDATE ON religious_details FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_lifestyle_details_updated_at BEFORE UPDATE ON lifestyle_details FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_partner_preferences_updated_at BEFORE UPDATE ON partner_preferences FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Additional constraints
ALTER TABLE users ADD CONSTRAINT chk_email_format CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$');
ALTER TABLE personal_details ADD CONSTRAINT chk_gender CHECK (gender IN ('male', 'female'));
ALTER TABLE personal_details ADD CONSTRAINT chk_height_range CHECK (height_feet BETWEEN 3 AND 8);
ALTER TABLE ai_compatibility_scores ADD CONSTRAINT chk_score_range CHECK (overall_score BETWEEN 0 AND 100);
*/

-- ============================================================================
-- VIEWS FOR COMMON QUERIES
-- ============================================================================

-- Complete user profile view
CREATE VIEW user_profiles AS
SELECT 
    u.id,
    u.email,
    u.phone,
    u.is_active,
    u.is_verified,
    pd.first_name,
    pd.last_name,
    pd.date_of_birth,
    CAST((julianday('now') - julianday(pd.date_of_birth)) / 365.25 AS INTEGER) as age,
    pd.gender,
    pd.marital_status,
    pd.height_feet,
    pd.height_inches,
    pd.mother_tongue,
    rd.religion,
    rd.caste,
    ed.highest_education,
    prof.occupation,
    prof.annual_income,
    ld.current_city,
    ld.current_state,
    bv.verification_tier,
    bv.verification_status,
    u.created_at
FROM users u
LEFT JOIN personal_details pd ON u.id = pd.user_id
LEFT JOIN religious_details rd ON u.id = rd.user_id
LEFT JOIN education_details ed ON u.id = ed.user_id
LEFT JOIN professional_details prof ON u.id = prof.user_id
LEFT JOIN location_details ld ON u.id = ld.user_id
LEFT JOIN background_verification bv ON u.id = bv.user_id;

-- ============================================================================
-- END OF SCHEMA
-- ============================================================================

-- Schema Version Information
INSERT INTO system_config (config_key, config_value, config_type, description) VALUES
('schema_version', '2.0.0', 'string', 'Current database schema version'),
('schema_created_at', datetime('now'), 'string', 'Schema creation timestamp'),
('last_migration', '2024-01-01', 'string', 'Last migration date');

-- Success message
-- SELECT 'Advanced Matrimony Platform Database Schema v2.0 created successfully!' as message;
