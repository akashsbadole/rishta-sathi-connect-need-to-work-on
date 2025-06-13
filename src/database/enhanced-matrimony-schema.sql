
-- Enhanced Matrimony Platform Database Schema with Advanced Features

-- Core Users table with enhanced fields
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR(255) UNIQUE NOT NULL,
  phone VARCHAR(20) UNIQUE,
  password_hash VARCHAR(255) NOT NULL,
  profile_for VARCHAR(20) DEFAULT 'self',
  verification_status VARCHAR(20) DEFAULT 'pending',
  verification_tier VARCHAR(20) DEFAULT 'none', -- none, basic, standard, premium, elite
  email_verified BOOLEAN DEFAULT false,
  phone_verified BOOLEAN DEFAULT false,
  subscription_type VARCHAR(20) DEFAULT 'free',
  subscription_expires_at TIMESTAMP,
  is_active BOOLEAN DEFAULT true,
  is_premium BOOLEAN DEFAULT false,
  last_active TIMESTAMP DEFAULT NOW(),
  profile_completion_percentage INTEGER DEFAULT 0,
  ai_compatibility_score INTEGER DEFAULT 0,
  background_check_status VARCHAR(20) DEFAULT 'not_requested',
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Enhanced Personal Details with micro-profile features
CREATE TABLE personal_details (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  display_name VARCHAR(100),
  date_of_birth DATE NOT NULL,
  time_of_birth TIME,
  place_of_birth VARCHAR(200),
  age INTEGER GENERATED ALWAYS AS (EXTRACT(YEAR FROM AGE(date_of_birth))) STORED,
  gender VARCHAR(10) NOT NULL,
  marital_status VARCHAR(20) DEFAULT 'never_married',
  height_cm INTEGER,
  height_feet INTEGER,
  height_inches INTEGER,
  weight_kg INTEGER,
  body_type VARCHAR(20),
  complexion VARCHAR(20),
  hair_type VARCHAR(30),
  hair_color VARCHAR(30),
  eye_color VARCHAR(30),
  vision_status VARCHAR(30),
  blood_group VARCHAR(10),
  distinctive_marks TEXT,
  physical_status VARCHAR(20) DEFAULT 'normal',
  mother_tongue VARCHAR(50),
  known_languages TEXT[],
  about_me TEXT,
  looking_for TEXT,
  hobbies TEXT[],
  interests TEXT[],
  personality_type VARCHAR(20), -- MBTI type
  communication_style VARCHAR(30),
  emotional_intelligence_score INTEGER,
  profile_photo_url VARCHAR(500),
  photo_urls TEXT[],
  profile_visibility VARCHAR(20) DEFAULT 'public',
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Advanced Background Verification
CREATE TABLE background_verification (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  verification_tier VARCHAR(20) NOT NULL,
  verification_cost DECIMAL(10,2),
  payment_status VARCHAR(20) DEFAULT 'pending',
  verification_agency VARCHAR(100),
  documents_submitted TEXT[],
  verification_report_url VARCHAR(500),
  criminal_background_clear BOOLEAN,
  financial_verification_score INTEGER,
  employment_verified BOOLEAN,
  education_verified BOOLEAN,
  address_verified BOOLEAN,
  character_references TEXT[],
  verification_notes TEXT,
  verified_at TIMESTAMP,
  expires_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Wedding Services Integration
CREATE TABLE wedding_services (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  service_name VARCHAR(200) NOT NULL,
  service_category VARCHAR(50),
  vendor_id UUID,
  description TEXT,
  price_range VARCHAR(50),
  location VARCHAR(200),
  rating DECIMAL(3,2),
  reviews_count INTEGER DEFAULT 0,
  availability_status VARCHAR(20) DEFAULT 'available',
  photos TEXT[],
  contact_details JSONB,
  verification_status VARCHAR(20) DEFAULT 'pending',
  commission_rate DECIMAL(5,2),
  created_at TIMESTAMP DEFAULT NOW()
);

-- Wedding Planning
CREATE TABLE wedding_bookings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  partner_user_id UUID REFERENCES users(id),
  service_id UUID REFERENCES wedding_services(id),
  booking_date DATE,
  event_date DATE,
  total_amount DECIMAL(12,2),
  advance_paid DECIMAL(12,2),
  booking_status VARCHAR(20) DEFAULT 'pending',
  special_requirements TEXT,
  vendor_notes TEXT,
  commission_amount DECIMAL(10,2),
  created_at TIMESTAMP DEFAULT NOW()
);

-- Enhanced Family Details
CREATE TABLE family_details (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  family_type VARCHAR(20),
  family_status VARCHAR(30),
  family_values VARCHAR(20),
  father_name VARCHAR(100),
  father_occupation VARCHAR(100),
  father_designation VARCHAR(100),
  father_income_range VARCHAR(30),
  father_living_status VARCHAR(20) DEFAULT 'living',
  mother_name VARCHAR(100),
  mother_occupation VARCHAR(100),
  mother_designation VARCHAR(100),
  mother_income_range VARCHAR(30),
  mother_living_status VARCHAR(20) DEFAULT 'living',
  brothers_count INTEGER DEFAULT 0,
  brothers_married INTEGER DEFAULT 0,
  sisters_count INTEGER DEFAULT 0,
  sisters_married INTEGER DEFAULT 0,
  family_income_annual VARCHAR(20),
  property_details TEXT,
  property_ownership JSONB,
  about_family TEXT,
  native_place VARCHAR(100),
  ancestral_origin VARCHAR(100),
  family_reputation_score INTEGER,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- AI-Powered Matching Algorithm
CREATE TABLE ai_compatibility_scores (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user1_id UUID REFERENCES users(id) ON DELETE CASCADE,
  user2_id UUID REFERENCES users(id) ON DELETE CASCADE,
  overall_compatibility_score INTEGER,
  psychological_compatibility INTEGER,
  lifestyle_compatibility INTEGER,
  values_compatibility INTEGER,
  financial_compatibility INTEGER,
  family_compatibility INTEGER,
  career_compatibility INTEGER,
  communication_compatibility INTEGER,
  matching_algorithm_version VARCHAR(20),
  calculation_date TIMESTAMP DEFAULT NOW(),
  last_updated TIMESTAMP DEFAULT NOW()
);

-- Enhanced Communication System
CREATE TABLE conversations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  participant1_id UUID REFERENCES users(id) ON DELETE CASCADE,
  participant2_id UUID REFERENCES users(id) ON DELETE CASCADE,
  conversation_type VARCHAR(20) DEFAULT 'private', -- private, family_group
  encryption_key VARCHAR(500),
  auto_delete_enabled BOOLEAN DEFAULT false,
  auto_delete_duration INTEGER, -- in days
  created_at TIMESTAMP DEFAULT NOW(),
  last_message_at TIMESTAMP DEFAULT NOW()
);

-- Enhanced Messages with security
CREATE TABLE messages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  conversation_id UUID REFERENCES conversations(id) ON DELETE CASCADE,
  sender_id UUID REFERENCES users(id) ON DELETE CASCADE,
  receiver_id UUID REFERENCES users(id) ON DELETE CASCADE,
  message_text TEXT,
  encrypted_message TEXT,
  message_type VARCHAR(20) DEFAULT 'text',
  attachment_url VARCHAR(500),
  attachment_name VARCHAR(255),
  attachment_size INTEGER,
  is_read BOOLEAN DEFAULT false,
  is_delivered BOOLEAN DEFAULT false,
  is_encrypted BOOLEAN DEFAULT true,
  sent_at TIMESTAMP DEFAULT NOW(),
  read_at TIMESTAMP,
  delivered_at TIMESTAMP,
  reply_to_message_id UUID REFERENCES messages(id),
  is_deleted BOOLEAN DEFAULT false,
  auto_delete_at TIMESTAMP
);

-- Premium Subscription Management
CREATE TABLE subscription_plans (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  plan_name VARCHAR(50) NOT NULL,
  plan_type VARCHAR(20) NOT NULL,
  duration_months INTEGER NOT NULL,
  price_amount DECIMAL(10,2) NOT NULL,
  currency VARCHAR(10) DEFAULT 'INR',
  features JSONB,
  max_interests_per_day INTEGER,
  max_messages_per_day INTEGER,
  max_profile_views_per_day INTEGER,
  background_verification_included BOOLEAN DEFAULT false,
  wedding_planning_included BOOLEAN DEFAULT false,
  ai_matching_enabled BOOLEAN DEFAULT false,
  concierge_service_included BOOLEAN DEFAULT false,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT NOW()
);

-- User Analytics and Behavior Tracking
CREATE TABLE user_analytics (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  event_type VARCHAR(50),
  event_data JSONB,
  session_id VARCHAR(100),
  ip_address INET,
  user_agent TEXT,
  device_type VARCHAR(30),
  location_data JSONB,
  timestamp TIMESTAMP DEFAULT NOW()
);

-- Success Stories with Analytics
CREATE TABLE success_stories (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  groom_id UUID REFERENCES users(id),
  bride_id UUID REFERENCES users(id),
  story_title VARCHAR(200),
  story_text TEXT,
  meeting_story TEXT,
  proposal_story TEXT,
  wedding_date DATE,
  wedding_location VARCHAR(200),
  wedding_photos TEXT[],
  video_url VARCHAR(500),
  compatibility_score_at_match INTEGER,
  platform_usage_duration INTEGER, -- days from registration to success
  is_approved BOOLEAN DEFAULT false,
  is_featured BOOLEAN DEFAULT false,
  likes_count INTEGER DEFAULT 0,
  views_count INTEGER DEFAULT 0,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Enhanced Verification Documents
CREATE TABLE verification_documents (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  document_type VARCHAR(50),
  document_url VARCHAR(500),
  document_number VARCHAR(100),
  verification_status VARCHAR(20) DEFAULT 'pending',
  ai_authenticity_score INTEGER,
  manual_verification_notes TEXT,
  verified_at TIMESTAMP,
  verified_by UUID,
  rejection_reason TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Horoscope and Astrology Matching
CREATE TABLE horoscope_details (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  birth_star VARCHAR(50),
  birth_rashi VARCHAR(50),
  manglik_status VARCHAR(20),
  horoscope_url VARCHAR(500),
  kundli_url VARCHAR(500),
  astrology_consultation_history TEXT[],
  compatibility_reports JSONB,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Wedding Vendor Network
CREATE TABLE vendors (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  vendor_name VARCHAR(200) NOT NULL,
  business_type VARCHAR(100),
  contact_person VARCHAR(100),
  phone VARCHAR(20),
  email VARCHAR(255),
  address TEXT,
  city VARCHAR(100),
  state VARCHAR(100),
  business_license VARCHAR(100),
  verification_status VARCHAR(20) DEFAULT 'pending',
  rating DECIMAL(3,2),
  total_bookings INTEGER DEFAULT 0,
  commission_rate DECIMAL(5,2),
  portfolio_urls TEXT[],
  services_offered TEXT[],
  price_ranges JSONB,
  availability_calendar JSONB,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Indexes for Performance Optimization
CREATE INDEX idx_users_subscription_verification ON users(subscription_type, verification_tier);
CREATE INDEX idx_ai_compatibility_scores ON ai_compatibility_scores(user1_id, user2_id, overall_compatibility_score);
CREATE INDEX idx_conversations_participants ON conversations(participant1_id, participant2_id);
CREATE INDEX idx_messages_conversation_date ON messages(conversation_id, sent_at);
CREATE INDEX idx_wedding_services_category_location ON wedding_services(service_category, location);
CREATE INDEX idx_user_analytics_user_event ON user_analytics(user_id, event_type, timestamp);
CREATE INDEX idx_background_verification_user_tier ON background_verification(user_id, verification_tier);

-- Views for Complex Queries
CREATE VIEW enhanced_user_profiles AS
SELECT 
  u.id,
  u.email,
  u.verification_tier,
  u.subscription_type,
  pd.first_name,
  pd.last_name,
  pd.age,
  pd.gender,
  pd.height_cm,
  pd.education_level,
  pd.occupation,
  fd.family_type,
  fd.family_values,
  ld.city,
  ld.state,
  rd.religion,
  rd.caste,
  acs.overall_compatibility_score,
  bv.verification_report_url,
  u.created_at
FROM users u
LEFT JOIN personal_details pd ON u.id = pd.user_id
LEFT JOIN family_details fd ON u.id = fd.user_id
LEFT JOIN location_details ld ON u.id = ld.user_id
LEFT JOIN religious_details rd ON u.id = rd.user_id
LEFT JOIN ai_compatibility_scores acs ON u.id = acs.user1_id
LEFT JOIN background_verification bv ON u.id = bv.user_id
WHERE u.is_active = true;
