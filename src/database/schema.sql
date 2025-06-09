
-- Core Users table
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR(255) UNIQUE NOT NULL,
  phone VARCHAR(20) UNIQUE,
  password_hash VARCHAR(255) NOT NULL,
  profile_for VARCHAR(20) DEFAULT 'self', -- self, son, daughter, brother, sister, friend, relative
  verification_status VARCHAR(20) DEFAULT 'pending', -- pending, verified, rejected
  subscription_type VARCHAR(20) DEFAULT 'free', -- free, silver, gold, platinum
  subscription_expires_at TIMESTAMP,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Personal Details
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
  weight_kg INTEGER,
  body_type VARCHAR(20), -- slim, average, athletic, heavy
  complexion VARCHAR(20), -- very_fair, fair, wheatish, dark
  physical_status VARCHAR(20) DEFAULT 'normal', -- normal, physically_challenged
  mother_tongue VARCHAR(50),
  known_languages TEXT[], -- array of languages
  about_me TEXT,
  looking_for TEXT,
  profile_photo_url VARCHAR(500),
  photo_urls TEXT[], -- array of photo URLs
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Location Details
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
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Religious Details
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
  willing_to_marry_other_caste BOOLEAN DEFAULT false,
  religious_practice VARCHAR(20), -- very_religious, religious, moderate, not_religious
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Family Details
CREATE TABLE family_details (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  family_type VARCHAR(20), -- nuclear, joint, others
  family_status VARCHAR(30), -- middle_class, upper_middle_class, rich, affluent
  family_values VARCHAR(20), -- orthodox, traditional, moderate, liberal
  father_name VARCHAR(100),
  father_occupation VARCHAR(100),
  father_living_status VARCHAR(20) DEFAULT 'living', -- living, deceased
  mother_name VARCHAR(100),
  mother_occupation VARCHAR(100),
  mother_living_status VARCHAR(20) DEFAULT 'living',
  brothers_count INTEGER DEFAULT 0,
  brothers_married INTEGER DEFAULT 0,
  sisters_count INTEGER DEFAULT 0,
  sisters_married INTEGER DEFAULT 0,
  family_income_annual VARCHAR(20), -- ranges like 2-4_lakhs, 4-6_lakhs etc
  property_details TEXT,
  about_family TEXT,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Education Details
CREATE TABLE education_details (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  highest_education VARCHAR(100),
  education_institution VARCHAR(200),
  education_year INTEGER,
  education_specialization VARCHAR(100),
  additional_qualifications TEXT[],
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Professional Details
CREATE TABLE professional_details (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  occupation VARCHAR(100),
  designation VARCHAR(100),
  company_name VARCHAR(200),
  work_location VARCHAR(100),
  work_experience_years INTEGER,
  annual_income VARCHAR(20), -- ranges like 2-4_lakhs, 4-6_lakhs etc
  currency VARCHAR(10) DEFAULT 'INR',
  career_aspirations TEXT,
  willing_to_relocate_for_work BOOLEAN DEFAULT false,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Lifestyle Details
CREATE TABLE lifestyle_details (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  diet VARCHAR(20), -- vegetarian, non_vegetarian, vegan, jain_food
  smoking VARCHAR(20) DEFAULT 'no', -- yes, no, occasionally
  drinking VARCHAR(20) DEFAULT 'no', -- yes, no, occasionally, socially
  hobbies TEXT[],
  interests TEXT[],
  music_preferences TEXT[],
  sports_interests TEXT[],
  reading_preferences TEXT[],
  movies_preferences TEXT[],
  travel_preferences TEXT[],
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Partner Preferences
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
  income_min VARCHAR(20),
  income_max VARCHAR(20),
  locations VARCHAR(100)[],
  religions VARCHAR(50)[],
  castes VARCHAR(100)[],
  diet_preferences VARCHAR(20)[],
  smoking_preference VARCHAR(20) DEFAULT 'no',
  drinking_preference VARCHAR(20) DEFAULT 'no',
  manglik_preference VARCHAR(20), -- yes, no, no_preference
  family_type_preference VARCHAR(20)[],
  family_values_preference VARCHAR(20)[],
  willing_to_relocate_preference BOOLEAN,
  other_preferences TEXT,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Interests/Connections
CREATE TABLE interests (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  sender_id UUID REFERENCES users(id) ON DELETE CASCADE,
  receiver_id UUID REFERENCES users(id) ON DELETE CASCADE,
  interest_type VARCHAR(20) DEFAULT 'regular', -- regular, premium, super
  status VARCHAR(20) DEFAULT 'pending', -- pending, accepted, declined, withdrawn
  message TEXT,
  sent_at TIMESTAMP DEFAULT NOW(),
  responded_at TIMESTAMP,
  UNIQUE(sender_id, receiver_id)
);

-- Messages
CREATE TABLE messages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  sender_id UUID REFERENCES users(id) ON DELETE CASCADE,
  receiver_id UUID REFERENCES users(id) ON DELETE CASCADE,
  message_text TEXT,
  message_type VARCHAR(20) DEFAULT 'text', -- text, photo, voice
  attachment_url VARCHAR(500),
  is_read BOOLEAN DEFAULT false,
  sent_at TIMESTAMP DEFAULT NOW(),
  read_at TIMESTAMP
);

-- Profile Views
CREATE TABLE profile_views (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  viewer_id UUID REFERENCES users(id) ON DELETE CASCADE,
  viewed_id UUID REFERENCES users(id) ON DELETE CASCADE,
  viewed_at TIMESTAMP DEFAULT NOW(),
  UNIQUE(viewer_id, viewed_id, DATE(viewed_at))
);

-- Shortlisted Profiles
CREATE TABLE shortlisted_profiles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  shortlisted_user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  shortlisted_at TIMESTAMP DEFAULT NOW(),
  UNIQUE(user_id, shortlisted_user_id)
);

-- Blocked Profiles
CREATE TABLE blocked_profiles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  blocked_user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  reason VARCHAR(200),
  blocked_at TIMESTAMP DEFAULT NOW(),
  UNIQUE(user_id, blocked_user_id)
);

-- Success Stories
CREATE TABLE success_stories (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  groom_id UUID REFERENCES users(id),
  bride_id UUID REFERENCES users(id),
  story_text TEXT,
  wedding_date DATE,
  wedding_photos TEXT[],
  is_approved BOOLEAN DEFAULT false,
  is_featured BOOLEAN DEFAULT false,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Subscription Plans
CREATE TABLE subscription_plans (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  plan_name VARCHAR(50) NOT NULL,
  plan_type VARCHAR(20) NOT NULL, -- silver, gold, platinum
  duration_months INTEGER NOT NULL,
  price_amount DECIMAL(10,2) NOT NULL,
  currency VARCHAR(10) DEFAULT 'INR',
  features JSONB,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT NOW()
);

-- User Subscriptions
CREATE TABLE user_subscriptions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  plan_id UUID REFERENCES subscription_plans(id),
  started_at TIMESTAMP DEFAULT NOW(),
  expires_at TIMESTAMP NOT NULL,
  is_active BOOLEAN DEFAULT true,
  payment_id VARCHAR(100),
  amount_paid DECIMAL(10,2),
  created_at TIMESTAMP DEFAULT NOW()
);

-- Admin Reports
CREATE TABLE user_reports (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  reporter_id UUID REFERENCES users(id),
  reported_user_id UUID REFERENCES users(id),
  reason VARCHAR(100),
  description TEXT,
  status VARCHAR(20) DEFAULT 'pending', -- pending, reviewed, resolved
  admin_notes TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Indexes for better performance
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_phone ON users(phone);
CREATE INDEX idx_personal_details_user_id ON personal_details(user_id);
CREATE INDEX idx_personal_details_age ON personal_details(age);
CREATE INDEX idx_personal_details_gender ON personal_details(gender);
CREATE INDEX idx_location_details_state_city ON location_details(state, city);
CREATE INDEX idx_religious_details_religion_caste ON religious_details(religion, caste);
CREATE INDEX idx_interests_sender_receiver ON interests(sender_id, receiver_id);
CREATE INDEX idx_interests_status ON interests(status);
CREATE INDEX idx_messages_sender_receiver ON messages(sender_id, receiver_id);
CREATE INDEX idx_profile_views_viewer_viewed ON profile_views(viewer_id, viewed_id);
