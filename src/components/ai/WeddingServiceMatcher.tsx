
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Star, MapPin, Brain, Target, TrendingUp } from "lucide-react";

interface MatchedService {
  id: string;
  name: string;
  category: string;
  rating: number;
  price: number;
  location: string;
  matchScore: number;
  reasons: string[];
  features: string[];
  vendor: string;
}

const WeddingServiceMatcher = () => {
  const [userPreferences] = useState({
    budget: 500000,
    location: 'Mumbai',
    style: 'Traditional',
    guestCount: 300,
    date: '2024-06-15'
  });

  const [matchedServices] = useState<MatchedService[]>([
    {
      id: 'ws001',
      name: 'Royal Palace Wedding Hall',
      category: 'Venue',
      rating: 4.8,
      price: 350000,
      location: 'Mumbai, Maharashtra',
      matchScore: 95,
      reasons: [
        'Perfect capacity for 300 guests',
        'Traditional architecture matches your style',
        'Within your budget range',
        'Excellent location accessibility'
      ],
      features: ['AC Banquet Hall', 'Parking for 200 cars', 'Bridal Room', 'Catering Kitchen'],
      vendor: 'Royal Events'
    },
    {
      id: 'ws002',
      name: 'Elite Wedding Photography',
      category: 'Photography',
      rating: 4.9,
      price: 85000,
      location: 'Mumbai, Maharashtra',
      matchScore: 92,
      reasons: [
        'Specializes in traditional weddings',
        'Excellent portfolio quality',
        'Available on your wedding date',
        'Competitive pricing'
      ],
      features: ['Pre-wedding Shoot', '2 Photographers', 'Video Editing', 'Album Design'],
      vendor: 'Elite Studios'
    },
    {
      id: 'ws003',
      name: 'Maharaja Catering Services',
      category: 'Catering',
      rating: 4.7,
      price: 180000,
      location: 'Mumbai, Maharashtra',
      matchScore: 88,
      reasons: [
        'Traditional Indian cuisine specialty',
        'Can handle 300+ guests',
        'Excellent hygiene standards',
        'Custom menu options'
      ],
      features: ['Multi-cuisine Menu', 'Live Counters', 'Service Staff', 'Decoration'],
      vendor: 'Maharaja Foods'
    }
  ]);

  const getMatchScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-600';
    if (score >= 80) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getMatchScoreBg = (score: number) => {
    if (score >= 90) return 'bg-green-500';
    if (score >= 80) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-6">
      <Card className="bg-gradient-to-r from-purple-50 to-blue-50">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Brain className="w-6 h-6 text-purple-600" />
            <span>AI-Powered Wedding Service Matching</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <div className="text-center">
              <p className="text-sm text-gray-600">Budget</p>
              <p className="font-semibold">₹{userPreferences.budget.toLocaleString()}</p>
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-600">Location</p>
              <p className="font-semibold">{userPreferences.location}</p>
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-600">Style</p>
              <p className="font-semibold">{userPreferences.style}</p>
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-600">Guests</p>
              <p className="font-semibold">{userPreferences.guestCount}</p>
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-600">Date</p>
              <p className="font-semibold">{userPreferences.date}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-6">
        {matchedServices.map((service) => (
          <Card key={service.id} className="overflow-hidden hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className="text-xl font-semibold">{service.name}</h3>
                    <Badge variant="secondary">{service.category}</Badge>
                  </div>
                  
                  <div className="flex items-center space-x-4 mb-3">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-medium">{service.rating}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4 text-gray-500" />
                      <span className="text-gray-600">{service.location}</span>
                    </div>
                    <span className="font-semibold text-blue-600">₹{service.price.toLocaleString()}</span>
                  </div>
                </div>

                <div className="text-right">
                  <div className="flex items-center space-x-2 mb-2">
                    <Target className="w-5 h-5 text-purple-600" />
                    <span className={`text-2xl font-bold ${getMatchScoreColor(service.matchScore)}`}>
                      {service.matchScore}%
                    </span>
                  </div>
                  <Progress value={service.matchScore} className="w-24" />
                  <p className="text-xs text-gray-500 mt-1">AI Match Score</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2 flex items-center space-x-2">
                    <TrendingUp className="w-4 h-4 text-green-600" />
                    <span>Why This Matches You</span>
                  </h4>
                  <ul className="space-y-1">
                    {service.reasons.map((reason, index) => (
                      <li key={index} className="text-sm text-gray-600 flex items-start">
                        <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                        {reason}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Key Features</h4>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.features.map((feature, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                  <p className="text-sm text-gray-600">
                    <span className="font-medium">Vendor:</span> {service.vendor}
                  </p>
                </div>
              </div>

              <div className="flex space-x-3 mt-6">
                <Button className="flex-1">
                  Book Now
                </Button>
                <Button variant="outline">
                  View Details
                </Button>
                <Button variant="outline">
                  Contact Vendor
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>How Our AI Matching Works</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-blue-600 font-bold">1</span>
              </div>
              <h4 className="font-semibold mb-2">Analyze Preferences</h4>
              <p className="text-sm text-gray-600">AI analyzes your wedding preferences, budget, and requirements</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-green-600 font-bold">2</span>
              </div>
              <h4 className="font-semibold mb-2">Match Services</h4>
              <p className="text-sm text-gray-600">Compare thousands of services against your criteria</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-purple-600 font-bold">3</span>
              </div>
              <h4 className="font-semibold mb-2">Score Compatibility</h4>
              <p className="text-sm text-gray-600">Calculate compatibility scores based on 50+ factors</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-yellow-600 font-bold">4</span>
              </div>
              <h4 className="font-semibold mb-2">Recommend Best</h4>
              <p className="text-sm text-gray-600">Present top matches with detailed reasoning</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default WeddingServiceMatcher;
