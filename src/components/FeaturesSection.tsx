
import { Shield, Heart, Users, Star, Search, Bell, Video, Lock } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const FeaturesSection = () => {
  const features = [
    {
      icon: Shield,
      title: "100% Verified Profiles",
      description: "Every profile is manually verified with documents for authenticity and safety",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: Search,
      title: "Advanced Search",
      description: "Find matches based on religion, caste, education, profession and more",
      color: "from-blue-500 to-cyan-600"
    },
    {
      icon: Heart,
      title: "Horoscope Matching",
      description: "Traditional kundli matching with detailed astrological compatibility",
      color: "from-red-500 to-pink-600"
    },
    {
      icon: Users,
      title: "Family Involvement",
      description: "Parents and family members can create and manage profiles together",
      color: "from-purple-500 to-indigo-600"
    },
    {
      icon: Video,
      title: "Video Calls",
      description: "Secure video calling feature to connect with potential matches safely",
      color: "from-orange-500 to-red-600"
    },
    {
      icon: Bell,
      title: "Smart Notifications",
      description: "Get instant alerts for new matches, interests, and messages",
      color: "from-yellow-500 to-orange-600"
    },
    {
      icon: Star,
      title: "Premium Matching",
      description: "AI-powered compatibility analysis for better match suggestions",
      color: "from-teal-500 to-blue-600"
    },
    {
      icon: Lock,
      title: "Privacy Control",
      description: "Complete control over who can view your profile and contact details",
      color: "from-gray-500 to-slate-600"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Why Choose Rishta Sathi?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the perfect blend of tradition and technology with features designed 
            specifically for Indian matrimony
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg"
            >
              <CardHeader className="text-center pb-2">
                <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-lg font-bold text-gray-800 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-blue-600 transition-all duration-300">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-gray-600 leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 bg-gradient-to-r from-purple-900 via-blue-900 to-red-900 rounded-3xl p-8 text-white">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">2.5L+</div>
              <div className="text-purple-200">Active Profiles</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">25K+</div>
              <div className="text-purple-200">Success Stories</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">15+</div>
              <div className="text-purple-200">Years of Trust</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">99%</div>
              <div className="text-purple-200">Customer Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
