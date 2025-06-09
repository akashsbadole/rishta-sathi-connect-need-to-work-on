
import { useState, useEffect } from "react";
import { Heart, Star, Users, TrendingUp, Filter } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const MatchingAlgorithm = () => {
  const [matches] = useState([
    {
      id: 1,
      name: "Priya Sharma",
      age: 26,
      location: "Mumbai, Maharashtra",
      education: "B.Tech Computer Science",
      profession: "Software Engineer",
      image: "/placeholder.svg",
      compatibilityScore: 95,
      commonInterests: ["Reading", "Travel", "Music"],
      matchReasons: ["Similar education background", "Compatible age range", "Same city"]
    },
    {
      id: 2,
      name: "Anita Patel",
      age: 24,
      location: "Ahmedabad, Gujarat",
      education: "M.Sc Biotechnology",
      profession: "Research Scientist",
      image: "/placeholder.svg",
      compatibilityScore: 88,
      commonInterests: ["Science", "Books", "Photography"],
      matchReasons: ["Similar professional field", "Compatible lifestyle", "Educational compatibility"]
    }
  ]);

  const [recommendations] = useState([
    {
      category: "Recently Joined",
      profiles: 12,
      description: "New profiles that match your preferences"
    },
    {
      category: "Premium Profiles",
      profiles: 8,
      description: "Verified premium members in your area"
    },
    {
      category: "Nearby Matches",
      profiles: 15,
      description: "Profiles within 50km of your location"
    }
  ]);

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Your Perfect Matches</h1>
        <p className="text-gray-600">Discover compatible profiles based on your preferences</p>
      </div>

      {/* Compatibility Score Overview */}
      <div className="grid md:grid-cols-4 gap-4 mb-8">
        <Card>
          <CardContent className="p-6 text-center">
            <Heart className="w-8 h-8 text-red-500 mx-auto mb-2" />
            <h3 className="font-semibold text-2xl">{matches.length}</h3>
            <p className="text-gray-600">Perfect Matches</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6 text-center">
            <Star className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
            <h3 className="font-semibold text-2xl">92%</h3>
            <p className="text-gray-600">Avg Compatibility</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6 text-center">
            <Users className="w-8 h-8 text-blue-500 mx-auto mb-2" />
            <h3 className="font-semibold text-2xl">35</h3>
            <p className="text-gray-600">Total Matches</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6 text-center">
            <TrendingUp className="w-8 h-8 text-green-500 mx-auto mb-2" />
            <h3 className="font-semibold text-2xl">12</h3>
            <p className="text-gray-600">New This Week</p>
          </CardContent>
        </Card>
      </div>

      {/* Top Matches */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Heart className="w-5 h-5 text-red-500" />
            <span>Top Compatibility Matches</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {matches.map((match) => (
              <div key={match.id} className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start space-x-6">
                  <div className="w-24 h-24 bg-gradient-to-br from-purple-100 to-blue-100 rounded-lg flex-shrink-0">
                    <img src={match.image} alt={match.name} className="w-full h-full object-cover rounded-lg" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-semibold">{match.name}</h3>
                      <div className="text-right">
                        <div className="flex items-center space-x-2">
                          <span className="text-2xl font-bold text-green-600">{match.compatibilityScore}%</span>
                          <Badge className="bg-green-100 text-green-800">High Match</Badge>
                        </div>
                        <Progress value={match.compatibilityScore} className="w-24 mt-1" />
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <p className="text-gray-600">{match.age} years • {match.location}</p>
                        <p className="text-gray-600">{match.education}</p>
                        <p className="text-gray-600">{match.profession}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-2">Common Interests:</h4>
                        <div className="flex flex-wrap gap-2">
                          {match.commonInterests.map((interest, index) => (
                            <Badge key={index} variant="secondary">{interest}</Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold mb-2">Why we think you're compatible:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {match.matchReasons.map((reason, index) => (
                          <li key={index} className="flex items-center">
                            <Star className="w-3 h-3 text-yellow-500 mr-2" />
                            {reason}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex space-x-3">
                      <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                        <Heart className="w-4 h-4 mr-2" />
                        Send Interest
                      </Button>
                      <Button variant="outline">
                        View Full Profile
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recommendations */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Filter className="w-5 h-5 text-blue-500" />
            <span>Recommended Categories</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4">
            {recommendations.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6 text-center">
                  <h3 className="font-semibold text-lg mb-2">{category.category}</h3>
                  <p className="text-3xl font-bold text-purple-600 mb-2">{category.profiles}</p>
                  <p className="text-gray-600 text-sm mb-4">{category.description}</p>
                  <Button variant="outline" className="w-full">
                    Explore
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MatchingAlgorithm;
