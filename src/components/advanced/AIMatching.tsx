
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Brain, Heart, TrendingUp, Users, MessageCircle, 
  Star, Eye, ThumbsUp, MapPin, GraduationCap, Briefcase
} from "lucide-react";

const AIMatching = () => {
  const [activeTab, setActiveTab] = useState("recommendations");

  const aiRecommendations = [
    {
      id: 1,
      name: "Priya Sharma",
      age: 26,
      location: "Mumbai, Maharashtra",
      education: "MBA Finance",
      occupation: "Investment Banker",
      compatibilityScore: 94,
      photo: "/placeholder.svg",
      reasons: [
        "95% lifestyle compatibility",
        "Shared career ambitions",
        "Compatible family values",
        "Similar education background"
      ],
      matchFactors: {
        psychological: 92,
        lifestyle: 95,
        values: 89,
        financial: 96,
        family: 88,
        career: 94
      }
    },
    {
      id: 2,
      name: "Anita Reddy",
      age: 24,
      location: "Bangalore, Karnataka", 
      education: "M.Tech Computer Science",
      occupation: "Software Engineer",
      compatibilityScore: 91,
      photo: "/placeholder.svg",
      reasons: [
        "Strong technical compatibility",
        "Similar communication style",
        "Aligned life goals",
        "Compatible personalities"
      ],
      matchFactors: {
        psychological: 94,
        lifestyle: 87,
        values: 92,
        financial: 89,
        family: 90,
        career: 91
      }
    },
    {
      id: 3,
      name: "Kavya Iyer",
      age: 27,
      location: "Chennai, Tamil Nadu",
      education: "CA",
      occupation: "Chartered Accountant", 
      compatibilityScore: 88,
      photo: "/placeholder.svg",
      reasons: [
        "Financial planning compatibility",
        "Traditional values alignment",
        "Career stability match",
        "Family background similarity"
      ],
      matchFactors: {
        psychological: 85,
        lifestyle: 90,
        values: 94,
        financial: 92,
        family: 86,
        career: 88
      }
    }
  ];

  const matchingInsights = [
    {
      title: "Peak Activity Times",
      description: "Your ideal matches are most active between 7-9 PM",
      icon: TrendingUp,
      color: "text-blue-600"
    },
    {
      title: "Response Rate",
      description: "85% higher response rate with compatibility score above 90%",
      icon: MessageCircle,
      color: "text-green-600"  
    },
    {
      title: "Success Patterns",
      description: "Similar profiles to yours have 78% marriage success rate",
      icon: Heart,
      color: "text-red-600"
    },
    {
      title: "Profile Views",
      description: "Your profile is 3x more viewed than average this week",
      icon: Eye,
      color: "text-purple-600"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <Brain className="w-16 h-16 text-purple-600 mx-auto mb-4" />
        <h1 className="text-3xl font-bold text-gray-900 mb-2">AI-Powered Matching</h1>
        <p className="text-gray-600">Discover your most compatible matches using advanced AI algorithms</p>
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        <Button 
          variant={activeTab === "recommendations" ? "default" : "outline"}
          onClick={() => setActiveTab("recommendations")}
        >
          AI Recommendations
        </Button>
        <Button 
          variant={activeTab === "insights" ? "default" : "outline"}
          onClick={() => setActiveTab("insights")}
        >
          Matching Insights
        </Button>
        <Button 
          variant={activeTab === "preferences" ? "default" : "outline"}
          onClick={() => setActiveTab("preferences")}
        >
          AI Preferences
        </Button>
      </div>

      {activeTab === "recommendations" && (
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Brain className="w-5 h-5" />
                <span>Today's AI Recommendations</span>
              </CardTitle>
              <CardDescription>
                Personalized matches based on your compatibility preferences and behavior patterns
              </CardDescription>
            </CardHeader>
          </Card>

          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {aiRecommendations.map((match) => (
              <Card key={match.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="relative">
                    <img 
                      src={match.photo} 
                      alt={match.name}
                      className="w-full h-64 object-cover"
                    />
                    <Badge className="absolute top-3 right-3 bg-gradient-to-r from-purple-600 to-blue-600">
                      {match.compatibilityScore}% Match
                    </Badge>
                  </div>
                  
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-lg">{match.name}</h3>
                      <span className="text-gray-600">{match.age} years</span>
                    </div>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-center space-x-1 text-sm text-gray-600">
                        <MapPin className="w-4 h-4" />
                        <span>{match.location}</span>
                      </div>
                      <div className="flex items-center space-x-1 text-sm text-gray-600">
                        <GraduationCap className="w-4 h-4" />
                        <span>{match.education}</span>
                      </div>
                      <div className="flex items-center space-x-1 text-sm text-gray-600">
                        <Briefcase className="w-4 h-4" />
                        <span>{match.occupation}</span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-medium text-sm mb-2">Compatibility Breakdown:</h4>
                      <div className="space-y-1">
                        {Object.entries(match.matchFactors).map(([factor, score]) => (
                          <div key={factor} className="flex items-center justify-between text-xs">
                            <span className="capitalize">{factor}</span>
                            <div className="flex items-center space-x-2">
                              <Progress value={score} className="w-16 h-1" />
                              <span>{score}%</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-medium text-sm mb-2">Why this match?</h4>
                      <ul className="space-y-1">
                        {match.reasons.slice(0, 2).map((reason, index) => (
                          <li key={index} className="text-xs text-gray-600 flex items-center space-x-1">
                            <div className="w-1 h-1 bg-blue-500 rounded-full"></div>
                            <span>{reason}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline" className="flex-1">
                        <Eye className="w-4 h-4 mr-1" />
                        View Profile
                      </Button>
                      <Button size="sm" className="flex-1">
                        <Heart className="w-4 h-4 mr-1" />
                        Send Interest
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {activeTab === "insights" && (
        <div className="space-y-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {matchingInsights.map((insight, index) => {
              const IconComponent = insight.icon;
              return (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3 mb-3">
                      <IconComponent className={`w-6 h-6 ${insight.color}`} />
                      <h3 className="font-semibold">{insight.title}</h3>
                    </div>
                    <p className="text-sm text-gray-600">{insight.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Compatibility Score Distribution</CardTitle>
              <CardDescription>See how your matches are distributed by compatibility scores</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span>90-100% (Excellent Match)</span>
                  <div className="flex items-center space-x-2">
                    <Progress value={25} className="w-32" />
                    <span className="text-sm">12 profiles</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span>80-89% (Very Good Match)</span>
                  <div className="flex items-center space-x-2">
                    <Progress value={45} className="w-32" />
                    <span className="text-sm">28 profiles</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span>70-79% (Good Match)</span>
                  <div className="flex items-center space-x-2">
                    <Progress value={65} className="w-32" />
                    <span className="text-sm">45 profiles</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span>60-69% (Fair Match)</span>
                  <div className="flex items-center space-x-2">
                    <Progress value={30} className="w-32" />
                    <span className="text-sm">18 profiles</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {activeTab === "preferences" && (
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>AI Learning Preferences</CardTitle>
              <CardDescription>
                Help our AI understand your preferences better for more accurate matching
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium mb-3">What matters most to you?</h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    {[
                      "Educational compatibility",
                      "Career ambitions alignment", 
                      "Family values similarity",
                      "Lifestyle preferences",
                      "Financial stability",
                      "Personality compatibility",
                      "Religious beliefs",
                      "Communication style"
                    ].map((preference) => (
                      <div key={preference} className="flex items-center space-x-2">
                        <input type="checkbox" id={preference} className="rounded" />
                        <label htmlFor={preference} className="text-sm">{preference}</label>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-medium mb-3">Matching Behavior</h3>
                  <div className="space-y-3">
                    <div>
                      <label className="text-sm font-medium">How many recommendations per day?</label>
                      <select className="w-full mt-1 p-2 border rounded">
                        <option>3-5 profiles</option>
                        <option>5-10 profiles</option>
                        <option>10-15 profiles</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-sm font-medium">Preferred match distance</label>
                      <select className="w-full mt-1 p-2 border rounded">
                        <option>Same city</option>
                        <option>Within state</option>
                        <option>Anywhere in India</option>
                        <option>International</option>
                      </select>
                    </div>
                  </div>
                </div>

                <Button className="w-full">Update AI Preferences</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default AIMatching;
