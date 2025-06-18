
export const dummyWeddingServices = [
  {
    id: 'ws001',
    name: 'Royal Palace Wedding Hall',
    category: 'venues',
    vendor_id: 'vendor001',
    location: 'Mumbai, Maharashtra',
    rating: 4.8,
    reviews: 156,
    price: 350000,
    priceDisplay: '₹2,50,000 - ₹5,00,000',
    description: 'Luxurious wedding venue with traditional architecture and modern amenities',
    features: ['AC Banquet Hall', 'Parking for 200 cars', 'Bridal Room', 'Catering Kitchen'],
    images: ['/placeholder.svg'],
    verified: true,
    contact: '+91 98765 43210',
    vendor: 'Royal Events',
    availability: ['2024-02-15', '2024-02-20', '2024-03-10'],
    capacity: 500,
    commission_rate: 10
  },
  {
    id: 'ws002',
    name: 'Elite Wedding Photography',
    category: 'photography',
    vendor_id: 'vendor002',
    location: 'Delhi, NCR',
    rating: 4.9,
    reviews: 89,
    price: 112500,
    priceDisplay: '₹75,000 - ₹1,50,000',
    description: 'Professional wedding photography with cinematic videography',
    features: ['Pre-wedding Shoot', 'Wedding Day Coverage', 'Album Design', 'Video Editing'],
    images: ['/placeholder.svg'],
    verified: true,
    contact: '+91 87654 32109',
    vendor: 'Elite Studios',
    availability: ['2024-02-15', '2024-02-20', '2024-03-10'],
    capacity: 1,
    commission_rate: 15
  },
  {
    id: 'ws003',
    name: 'Maharaja Catering Services',
    category: 'catering',
    vendor_id: 'vendor003',
    location: 'Bangalore, Karnataka',
    rating: 4.7,
    reviews: 203,
    price: 1000,
    priceDisplay: '₹800 - ₹1,200 per plate',
    description: 'Authentic Indian cuisine with customizable menu options',
    features: ['Multi-cuisine Menu', 'Live Counters', 'Service Staff', 'Decoration'],
    images: ['/placeholder.svg'],
    verified: true,
    contact: '+91 76543 21098',
    vendor: 'Maharaja Foods',
    availability: ['2024-02-15', '2024-02-20', '2024-03-10'],
    capacity: 1000,
    commission_rate: 12
  },
  {
    id: 'ws004',
    name: 'Floral Dreams Decoration',
    category: 'decoration',
    vendor_id: 'vendor004',
    location: 'Pune, Maharashtra',
    rating: 4.6,
    reviews: 134,
    price: 150000,
    priceDisplay: '₹1,00,000 - ₹2,00,000',
    description: 'Stunning floral arrangements and themed decorations',
    features: ['Mandap Decoration', 'Entrance Arch', 'Stage Setup', 'Lighting'],
    images: ['/placeholder.svg'],
    verified: true,
    contact: '+91 65432 10987',
    vendor: 'Floral Dreams',
    availability: ['2024-02-15', '2024-02-20', '2024-03-10'],
    capacity: 1,
    commission_rate: 18
  },
  {
    id: 'ws005',
    name: 'Melody Music & DJ',
    category: 'music',
    vendor_id: 'vendor005',
    location: 'Chennai, Tamil Nadu',
    rating: 4.5,
    reviews: 98,
    price: 75000,
    priceDisplay: '₹50,000 - ₹1,00,000',
    description: 'Professional DJ services with live music options',
    features: ['Sound System', 'Lighting Setup', 'Live Band', 'DJ Services'],
    images: ['/placeholder.svg'],
    verified: true,
    contact: '+91 54321 09876',
    vendor: 'Melody Entertainment',
    availability: ['2024-02-15', '2024-02-20', '2024-03-10'],
    capacity: 1,
    commission_rate: 20
  }
];

export const dummyUsers = [
  {
    id: 'user001',
    clerk_id: 'clerk_user001',
    name: 'Arjun Sharma',
    email: 'arjun.sharma@email.com',
    role: 'customer',
    phone: '+91 98765 43210',
    isVerified: true,
    profile: {
      age: 28,
      location: 'Mumbai, Maharashtra',
      education: 'B.Tech Computer Science',
      profession: 'Software Engineer',
      interests: ['Travel', 'Photography', 'Music'],
      looking_for: 'Marriage'
    }
  },
  {
    id: 'vendor001',
    clerk_id: 'clerk_vendor001',
    name: 'Royal Events',
    email: 'info@royalevents.com',
    role: 'vendor',
    phone: '+91 98765 43210',
    isVerified: true,
    business: {
      business_name: 'Royal Events',
      category: 'venues',
      location: 'Mumbai, Maharashtra',
      years_experience: 10,
      services: ['Wedding Venues', 'Event Management']
    }
  },
  {
    id: 'admin001',
    clerk_id: 'clerk_admin001',
    name: 'Admin User',
    email: 'admin@matrimony.com',
    role: 'admin',
    phone: '+91 98765 43210',
    isVerified: true,
    permissions: ['manage_users', 'manage_vendors', 'view_analytics']
  }
];

export const dummyMatches = [
  {
    id: 'match001',
    user1_id: 'user001',
    user2_id: 'user002',
    compatibility_score: 95,
    ai_reasoning: 'High compatibility based on education, career goals, and lifestyle preferences',
    common_interests: ['Travel', 'Music', 'Photography'],
    match_factors: ['Similar education background', 'Compatible age range', 'Same city'],
    status: 'new',
    created_at: new Date().toISOString()
  },
  {
    id: 'match002',
    user1_id: 'user001',
    user2_id: 'user003',
    compatibility_score: 88,
    ai_reasoning: 'Good compatibility with strong career alignment and family values',
    common_interests: ['Reading', 'Cooking', 'Travel'],
    match_factors: ['Professional compatibility', 'Family values alignment', 'Educational match'],
    status: 'interested',
    created_at: new Date().toISOString()
  }
];

export const dummyBookings = [
  {
    id: 'booking001',
    user_id: 'user001',
    service_id: 'ws001',
    vendor_id: 'vendor001',
    booking_date: '2024-02-15',
    event_date: '2024-06-15',
    amount: 350000,
    commission: 35000,
    status: 'confirmed',
    payment_status: 'paid',
    created_at: new Date().toISOString()
  },
  {
    id: 'booking002',
    user_id: 'user001',
    service_id: 'ws002',
    vendor_id: 'vendor002',
    booking_date: '2024-02-16',
    event_date: '2024-06-15',
    amount: 112500,
    commission: 16875,
    status: 'pending',
    payment_status: 'pending',
    created_at: new Date().toISOString()
  }
];

export const dummyVerificationRequests = [
  {
    id: 'verification001',
    user_id: 'user001',
    tier: 'premium',
    status: 'in_progress',
    documents: ['aadhar', 'education', 'employment'],
    price: 5000,
    assigned_to: 'admin001',
    submitted_at: new Date().toISOString(),
    verification_data: {
      education_verified: true,
      employment_verified: true,
      address_verified: false,
      background_check: 'pending'
    }
  }
];

export const dummySupportTickets = [
  {
    id: 'ticket001',
    user_id: 'user001',
    subject: 'Profile Photo Upload Issue',
    description: 'Unable to upload profile photos. Getting error message.',
    category: 'technical',
    priority: 'medium',
    status: 'open',
    assigned_to: 'admin001',
    created_at: new Date().toISOString()
  },
  {
    id: 'ticket002',
    user_id: 'vendor001',
    subject: 'Commission Payment Delay',
    description: 'Commission payment for last month is delayed. Need clarification.',
    category: 'billing',
    priority: 'high',
    status: 'in_progress',
    assigned_to: 'admin001',
    created_at: new Date().toISOString()
  }
];

export const dummyPayments = [
  {
    id: 'payment001',
    user_id: 'user001',
    booking_id: 'booking001',
    amount: 350000,
    payment_method: 'razorpay',
    payment_id: 'razorpay_payment_001',
    status: 'completed',
    created_at: new Date().toISOString()
  },
  {
    id: 'payment002',
    user_id: 'vendor001',
    type: 'commission',
    amount: 35000,
    payment_method: 'bank_transfer',
    status: 'completed',
    created_at: new Date().toISOString()
  }
];
