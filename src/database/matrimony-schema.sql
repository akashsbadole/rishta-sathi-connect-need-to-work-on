
-- Enhanced Matrimony Platform Database Schema

-- Core Users table with enhanced fields
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR(255) UNIQUE NOT NULL,
  phone VARCHAR(20) UNIQUE,
  password_hash VARCHAR(255) NOT NULL,
  profile_for VARCHAR(20) DEFAULT 'self', -- self, son, daughter, brother, sister, friend, relative
  verification_status VARCHAR(20) DEFAULT 'pending', -- pending, verified, rejected, document_pending
  email_verified BOOLEAN DEFAULT false,
  phone_verified BOOLEAN DEFAULT false,
  subscription_type VARCHAR(20) DEFAULT 'free', -- free, silver, gold, platinum
  subscription_expires_at TIMESTAMP,
  is_active BOOLEAN DEFAULT true,
  is_premium BOOLEAN DEFAULT false,
  last_active TIMESTAMP DEFAULT NOW(),
  profile_completion_percentage INTEGER DEFAULT 0,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Enhanced Personal Details
CREATE TABLE personal_details (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  display_name VARCHAR(100),
  date_of_birth DATE NOT NULL,
  age INTEGER GENERATED ALWAYS AS (EXTRACT(YEAR FROM AGE(date_of_birth))) STORED,
  gender VARCHAR(10) NOT NULL, -- male, female
  marital_status VARCHAR(20) DEFAULT 'never_married', -- never_married, divorced, widowed, separated
  height_cm INTEGER,
  height_feet INTEGER,
  height_inches INTEGER,
  weight_kg INTEGER,
  body_type VARCHAR(20), -- slim, average, athletic, heavy
  complexion VARCHAR(20), -- very_fair, fair, wheatish, dark
  physical_status VARCHAR(20) DEFAULT 'normal', -- normal, physically_challenged
  mother_tongue VARCHAR(50),
  known_languages TEXT[], -- array of languages
  about_me TEXT,
  looking_for TEXT,
  hobbies TEXT[],
  interests TEXT[],
  profile_photo_url VARCHAR(500),
  photo_urls TEXT[], -- array of photo URLs
  profile_visibility VARCHAR(20) DEFAULT 'public', -- public, private, premium_only
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Enhanced Location Details
CREATE TABLE location_details (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  country VARCHAR(100) DEFAULT 'India',
  state VARCHAR(100),
  city VARCHAR(100),
  pin_code VARCHAR(10),
  residing_since VARCHAR(20), -- birth, 1_year, 2_years, 5_years, 10_years
  willing_to_relocate BOOLEAN DEFAULT false,
  preferred_locations TEXT[], -- array of preferred cities/states
  current_address TEXT,
  permanent_address TEXT,
  citizenship VARCHAR(50),
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Enhanced Religious Details with Astrology
CREATE TABLE religious_details (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  religion VARCHAR(50),
  caste VARCHAR(100),
  sub_caste VARCHAR(100),
  gothra VARCHAR(100),
  star VARCHAR(50), -- nakshatra
  rashi VARCHAR(50), -- zodiac sign
  manglik_status VARCHAR(20), -- yes, no, anshik
  horoscope_url VARCHAR(500),
  kundli_url VARCHAR(500),
  willing_to_marry_other_caste BOOLEAN DEFAULT false,
  willing_to_marry_other_religion BOOLEAN DEFAULT false,
  religious_practice VARCHAR(20), -- very_religious, religious, moderate, not_religious
  temple_preference VARCHAR(100),
  festivals_celebrated TEXT[],
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Enhanced Family Details
CREATE TABLE family_details (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  family_type VARCHAR(20), -- nuclear, joint, others
  family_status VARCHAR(30), -- middle_class, upper_middle_class, rich, affluent
  family_values VARCHAR(20), -- orthodox, traditional, moderate, liberal
  father_name VARCHAR(100),
  father_occupation VARCHAR(100),
  father_designation VARCHAR(100),
  father_living_status VARCHAR(20) DEFAULT 'living', -- living, deceased
  mother_name VARCHAR(100),
  mother_occupation VARCHAR(100),
  mother_designation VARCHAR(100),
  mother_living_status VARCHAR(20) DEFAULT 'living',
  brothers_count INTEGER DEFAULT 0,
  brothers_married INTEGER DEFAULT 0,
  sisters_count INTEGER DEFAULT 0,
  sisters_married INTEGER DEFAULT 0,
  family_income_annual VARCHAR(20), -- ranges like 2-4_lakhs, 4-6_lakhs etc
  property_details TEXT,
  about_family TEXT,
  native_place VARCHAR(100),
  ancestral_origin VARCHAR(100),
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Enhanced Education Details
CREATE TABLE education_details (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  highest_education VARCHAR(100),
  education_institution VARCHAR(200),
  education_year INTEGER,
  education_specialization VARCHAR(100),
  education_city VARCHAR(100),
  education_state VARCHAR(100),
  education_country VARCHAR(100),
  additional_qualifications TEXT[],
  certifications TEXT[],
  professional_courses TEXT[],
  grades_percentage DECIMAL(5,2),
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Enhanced Professional Details
CREATE TABLE professional_details (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  occupation VARCHAR(100),
  designation VARCHAR(100),
  company_name VARCHAR(200),
  company_type VARCHAR(50), -- government, private, business, self_employed
  work_location VARCHAR(100),
  work_experience_years INTEGER,
  annual_income_min INTEGER,
  annual_income_max INTEGER,
  currency VARCHAR(10) DEFAULT 'INR',
  career_aspirations TEXT,
  willing_to_relocate_for_work BOOLEAN DEFAULT false,
  employment_type VARCHAR(30), -- permanent, contract, freelance, business
  work_schedule VARCHAR(30), -- regular, shift, flexible, remote
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Enhanced Lifestyle Details
CREATE TABLE lifestyle_details (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  diet VARCHAR(20), -- vegetarian, non_vegetarian, vegan, jain_food, eggetarian
  smoking VARCHAR(20) DEFAULT 'no', -- yes, no, occasionally
  drinking VARCHAR(20) DEFAULT 'no', -- yes, no, occasionally, socially
  hobbies TEXT[],
  interests TEXT[],
  music_preferences TEXT[],
  sports_interests TEXT[],
  reading_preferences TEXT[],
  movies_preferences TEXT[],
  travel_preferences TEXT[],
  fitness_routine VARCHAR(50),
  social_media_usage VARCHAR(30), -- active, moderate, minimal, none
  weekend_activities TEXT[],
  favorite_cuisines TEXT[],
  pet_preferences VARCHAR(30), -- love_pets, okay_with_pets, no_pets
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Enhanced Partner Preferences
CREATE TABLE partner_preferences (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  age_min INTEGER,
  age_max INTEGER,
  height_min_cm INTEGER,
  height_max_cm INTEGER,
  marital_status VARCHAR(20)[],
  education_levels VARCHAR(100)[],
  occupations VARCHAR(100)[],
  income_min INTEGER,
  income_max INTEGER,
  locations VARCHAR(100)[],
  countries VARCHAR(100)[],
  religions VARCHAR(50)[],
  castes VARCHAR(100)[],
  diet_preferences VARCHAR(20)[],
  smoking_preference VARCHAR(20) DEFAULT 'no',
  drinking_preference VARCHAR(20) DEFAULT 'no',
  manglik_preference VARCHAR(20), -- yes, no, no_preference
  family_type_preference VARCHAR(20)[],
  family_values_preference VARCHAR(20)[],
  willing_to_relocate_preference BOOLEAN,
  complexion_preference VARCHAR(20)[],
  body_type_preference VARCHAR(20)[],
  mother_tongue_preference VARCHAR(50)[],
  other_preferences TEXT,
  deal_breakers TEXT[],
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Enhanced Interests/Connections
CREATE TABLE interests (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  sender_id UUID REFERENCES users(id) ON DELETE CASCADE,
  receiver_id UUID REFERENCES users(id) ON DELETE CASCADE,
  interest_type VARCHAR(20) DEFAULT 'regular', -- regular, premium, super, express
  status VARCHAR(20) DEFAULT 'pending', -- pending, accepted, declined, withdrawn, expired
  message TEXT,
  sent_at TIMESTAMP DEFAULT NOW(),
  responded_at TIMESTAMP,
  viewed_at TIMESTAMP,
  expires_at TIMESTAMP,
  is_mutual BOOLEAN DEFAULT false,
  UNIQUE(sender_id, receiver_id)
);

-- Enhanced Messages System
CREATE TABLE messages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  conversation_id UUID,
  sender_id UUID REFERENCES users(id) ON DELETE CASCADE,
  receiver_id UUID REFERENCES users(id) ON DELETE CASCADE,
  message_text TEXT,
  message_type VARCHAR(20) DEFAULT 'text', -- text, photo, voice, video, file
  attachment_url VARCHAR(500),
  attachment_name VARCHAR(255),
  attachment_size INTEGER,
  is_read BOOLEAN DEFAULT false,
  is_delivered BOOLEAN DEFAULT false,
  sent_at TIMESTAMP DEFAULT NOW(),
  read_at TIMESTAMP,
  delivered_at TIMESTAMP,
  reply_to_message_id UUID REFERENCES messages(id),
  is_deleted BOOLEAN DEFAULT false
);

-- Profile Views with Enhanced Tracking
CREATE TABLE profile_views (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  viewer_id UUID REFERENCES users(id) ON DELETE CASCADE,
  viewed_id UUID REFERENCES users(id) ON DELETE CASCADE,
  view_source VARCHAR(30), -- search, recommendation, interest, profile_link
  view_duration INTEGER, -- in seconds
  viewed_at TIMESTAMP DEFAULT NOW(),
  ip_address INET,
  user_agent TEXT
);

-- Enhanced Shortlisted Profiles
CREATE TABLE shortlisted_profiles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  shortlisted_user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  shortlist_reason TEXT,
  notes TEXT,
  priority_level INTEGER DEFAULT 1, -- 1-5 scale
  shortlisted_at TIMESTAMP DEFAULT NOW(),
  UNIQUE(user_id, shortlisted_user_id)
);

-- Enhanced Blocked Profiles
CREATE TABLE blocked_profiles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  blocked_user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  reason VARCHAR(200),
  detailed_reason TEXT,
  blocked_at TIMESTAMP DEFAULT NOW(),
  is_permanent BOOLEAN DEFAULT false,
  UNIQUE(user_id, blocked_user_id)
);

-- Success Stories with Enhanced Features
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
  is_approved BOOLEAN DEFAULT false,
  is_featured BOOLEAN DEFAULT false,
  likes_count INTEGER DEFAULT 0,
  views_count INTEGER DEFAULT 0,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Enhanced Subscription Plans
CREATE TABLE subscription_plans (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  plan_name VARCHAR(50) NOT NULL,
  plan_type VARCHAR(20) NOT NULL, -- silver, gold, platinum
  duration_months INTEGER NOT NULL,
  price_amount DECIMAL(10,2) NOT NULL,
  currency VARCHAR(10) DEFAULT 'INR',
  features JSONB,
  max_interests_per_day INTEGER,
  max_messages_per_day INTEGER,
  max_profile_views_per_day INTEGER,
  contact_details_access BOOLEAN DEFAULT false,
  advanced_search BOOLEAN DEFAULT false,
  priority_support BOOLEAN DEFAULT false,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Enhanced User Subscriptions
CREATE TABLE user_subscriptions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  plan_id UUID REFERENCES subscription_plans(id),
  started_at TIMESTAMP DEFAULT NOW(),
  expires_at TIMESTAMP NOT NULL,
  is_active BOOLEAN DEFAULT true,
  payment_id VARCHAR(100),
  payment_method VARCHAR(50),
  amount_paid DECIMAL(10,2),
  discount_applied DECIMAL(10,2) DEFAULT 0,
  auto_renewal BOOLEAN DEFAULT false,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Verification Documents
CREATE TABLE verification_documents (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  document_type VARCHAR(50), -- aadhar, pan, passport, driving_license, education_certificate
  document_url VARCHAR(500),
  document_number VARCHAR(100),
  verification_status VARCHAR(20) DEFAULT 'pending', -- pending, verified, rejected
  verified_at TIMESTAMP,
  verified_by UUID,
  rejection_reason TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Photo Management
CREATE TABLE user_photos (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  photo_url VARCHAR(500),
  photo_type VARCHAR(20), -- profile, gallery, verification
  is_profile_photo BOOLEAN DEFAULT false,
  is_verified BOOLEAN DEFAULT false,
  upload_order INTEGER,
  privacy_level VARCHAR(20) DEFAULT 'public', -- public, premium_only, private
  created_at TIMESTAMP DEFAULT NOW()
);

-- Horoscope Matching
CREATE TABLE horoscope_matches (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user1_id UUID REFERENCES users(id) ON DELETE CASCADE,
  user2_id UUID REFERENCES users(id) ON DELETE CASCADE,
  compatibility_score INTEGER, -- 0-100
  guna_milan_score INTEGER, -- Traditional 36-point matching
  manglik_compatibility BOOLEAN,
  detailed_analysis JSONB,
  astrologer_notes TEXT,
  match_date TIMESTAMP DEFAULT NOW()
);

-- Communication Preferences
CREATE TABLE communication_preferences (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  email_notifications BOOLEAN DEFAULT true,
  sms_notifications BOOLEAN DEFAULT true,
  push_notifications BOOLEAN DEFAULT true,
  interest_notifications BOOLEAN DEFAULT true,
  message_notifications BOOLEAN DEFAULT true,
  profile_view_notifications BOOLEAN DEFAULT true,
  marketing_emails BOOLEAN DEFAULT false,
  newsletter_subscription BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT NOW()
);

-- User Reports and Safety
CREATE TABLE user_reports (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  reporter_id UUID REFERENCES users(id),
  reported_user_id UUID REFERENCES users(id),
  report_category VARCHAR(50), -- fake_profile, inappropriate_behavior, spam, harassment
  reason VARCHAR(100),
  description TEXT,
  evidence_urls TEXT[],
  status VARCHAR(20) DEFAULT 'pending', -- pending, under_review, resolved, dismissed
  admin_notes TEXT,
  action_taken VARCHAR(100),
  created_at TIMESTAMP DEFAULT NOW(),
  resolved_at TIMESTAMP
);

-- Search Analytics
CREATE TABLE search_analytics (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  search_filters JSONB,
  results_count INTEGER,
  search_timestamp TIMESTAMP DEFAULT NOW(),
  session_id VARCHAR(100)
);

-- App Analytics
CREATE TABLE user_analytics (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  event_type VARCHAR(50), -- login, logout, profile_view, search, interest_sent
  event_data JSONB,
  timestamp TIMESTAMP DEFAULT NOW(),
  ip_address INET,
  user_agent TEXT,
  device_type VARCHAR(30),
  session_id VARCHAR(100)
);

-- Enhanced Indexes for Performance
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_phone ON users(phone);
CREATE INDEX idx_users_subscription ON users(subscription_type, subscription_expires_at);
CREATE INDEX idx_personal_details_user_age_gender ON personal_details(user_id, age, gender);
CREATE INDEX idx_location_details_state_city ON location_details(state, city);
CREATE INDEX idx_religious_details_religion_caste ON religious_details(religion, caste);
CREATE INDEX idx_professional_details_income ON professional_details(annual_income_min, annual_income_max);
CREATE INDEX idx_interests_sender_receiver_status ON interests(sender_id, receiver_id, status);
CREATE INDEX idx_messages_conversation ON messages(conversation_id, sent_at);
CREATE INDEX idx_profile_views_viewer_viewed_date ON profile_views(viewer_id, viewed_id, viewed_at);
CREATE INDEX idx_search_analytics_user_timestamp ON search_analytics(user_id, search_timestamp);

-- Views for Common Queries
CREATE VIEW user_profile_summary AS
SELECT 
  u.id,
  u.email,
  pd.first_name,
  pd.last_name,
  pd.age,
  pd.gender,
  pd.marital_status,
  pd.profile_photo_url,
  ld.city,
  ld.state,
  rd.religion,
  rd.caste,
  ed.highest_education,
  prof.occupation,
  prof.annual_income_min,
  prof.annual_income_max,
  u.subscription_type,
  u.verification_status
FROM users u
LEFT JOIN personal_details pd ON u.id = pd.user_id
LEFT JOIN location_details ld ON u.id = ld.user_id
LEFT JOIN religious_details rd ON u.id = rd.user_id
LEFT JOIN education_details ed ON u.id = ed.user_id
LEFT JOIN professional_details prof ON u.id = prof.user_id
WHERE u.is_active = true;
