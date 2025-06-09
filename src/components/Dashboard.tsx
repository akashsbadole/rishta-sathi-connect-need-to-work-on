
import { useState } from "react";
import { 
  User, Heart, Search, MessageCircle, Users, Settings, 
  Star, Eye, Calendar, Gift, Crown, Shield, Sparkles 
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Dashboard = () => {
  const [profileCompletion] = useState(75);
  const [stats] = useState({
    profileViews: 127,
    interestsSent: 15,
    interestsReceived: 23,
    messages: 8,
    shortlisted: 12,
    matches: 6
  });

  const [recentActivities] = useState([
    { type: "view", user: "Priya S.", time: "2 hours ago", action: "viewed your profile" },
    { type: "interest", user: "Rahul G.", time: "5 hours ago", action: "sent you an interest" },
    { type: "message", user: "Anita P.", time: "1 day ago", action: "sent you a message" },
    { type: "match", user: "Vikash K.", time: "2 days ago", action: "mutual interest!" }
  ]);

  const [recommendations] = useState([
    {
      id: 1,
      name: "Kavya Sharma",
      age: 25,
      location: "Mumbai, Maharashtra",
      education: "MBA Finance",
      occupation: "Investment Analyst",
      image: "/placeholder.svg",
      compatibility: 92,
      verified: true,
      premium: false
    },
    {
      id: 2,
      name: "Arjun Patel",
      age: 28,
      location: "Ahmedabad, Gujarat",
      education: "B.Tech IT",
      occupation: "Software Engineer",
      image: "/placeholder.svg",
      compatibility: 88,
      verified: true,
      premium: true
    },
    {
      id: 3,
      name: "Meera Iyer",
      age: 26,
      location: "Chennai, Tamil Nadu",
      education: "M.Sc Biotechnology",
      occupation: "Research Scientist",
      image: "/placeholder.svg",
      compatibility: 85,
      verified: true,
      premium: false
    }
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-red-50">
      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Welcome back, Rohit!</h1>
          <p className="text-gray-600">Find your perfect life partner with our advanced matching system</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          <Card className="text-center">
            <CardContent className="pt-6">
              <Eye className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-800">{stats.profileViews}</div>
              <div className="text-sm text-gray-600">Profile Views</div>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardContent className="pt-6">
              <Heart className="w-8 h-8 text-red-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-800">{stats.interestsReceived}</div>
              <div className="text-sm text-gray-600">Interests Received</div>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardContent className="pt-6">
              <MessageCircle className="w-8 h-8 text-green-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-800">{stats.messages}</div>
              <div className="text-sm text-gray-600">Messages</div>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardContent className="pt-6">
              <Star className="w-8 h-8 text-yellow-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-800">{stats.shortlisted}</div>
              <div className="text-sm text-gray-600">Shortlisted</div>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardContent className="pt-6">
              <Users className="w-8 h-8 text-purple-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-800">{stats.matches}</div>
              <div className="text-sm text-gray-600">Mutual Matches</div>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardContent className="pt-6">
              <Crown className="w-8 h-8 text-orange-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-800">Gold</div>
              <div className="text-sm text-gray-600">Membership</div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Profile Completion */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <User className="w-5 h-5 mr-2" />
                  Complete Your Profile
                </CardTitle>
                <CardDescription>
                  A complete profile gets 3x more responses
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Profile Completion</span>
                    <span className="text-sm text-gray-600">{profileCompletion}%</span>
                  </div>
                  <Progress value={profileCompletion} className="h-2" />
                  <div className="grid md:grid-cols-2 gap-3">
                    <Button variant="outline" size="sm" className="justify-start">
                      <Shield className="w-4 h-4 mr-2" />
                      Verify Profile
                    </Button>
                    <Button variant="outline" size="sm" className="justify-start">
                      <Sparkles className="w-4 h-4 mr-2" />
                      Add Horoscope
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Recommended Matches */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Heart className="w-5 h-5 mr-2 text-red-500" />
                    Recommended Matches
                  </div>
                  <Button variant="link" size="sm">View All</Button>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recommendations.map((match) => (
                    <div key={match.id} className="flex items-center space-x-4 p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="relative">
                        <img 
                          src={match.image} 
                          alt={match.name}
                          className="w-16 h-16 rounded-full object-cover"
                        />
                        {match.verified && (
                          <Badge className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-green-500 text-white p-0 flex items-center justify-center">
                            ✓
                          </Badge>
                        )}
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center space-x-2">
                          <h4 className="font-semibold">{match.name}</h4>
                          {match.premium && (
                            <Crown className="w-4 h-4 text-yellow-500" />
                          )}
                        </div>
                        <p className="text-sm text-gray-600">{match.age} years • {match.location}</p>
                        <p className="text-sm text-gray-600">{match.education} • {match.occupation}</p>
                        <div className="flex items-center mt-1">
                          <Star className="w-4 h-4 text-yellow-500 mr-1" />
                          <span className="text-sm font-medium text-green-600">{match.compatibility}% Match</span>
                        </div>
                      </div>
                      
                      <div className="flex flex-col space-y-2">
                        <Button size="sm" className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700">
                          <Heart className="w-3 h-3 mr-1" />
                          Interest
                        </Button>
                        <Button size="sm" variant="outline">
                          <MessageCircle className="w-3 h-3 mr-1" />
                          Message
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Premium Features */}
            <Card className="bg-gradient-to-r from-purple-600 via-blue-600 to-red-600 text-white">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Crown className="w-5 h-5 mr-2" />
                  Upgrade to Premium
                </CardTitle>
                <CardDescription className="text-purple-100">
                  Get 5x more matches and premium features
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className="text-sm">Unlimited profile views</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className="text-sm">See who viewed your profile</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className="text-sm">Advanced search filters</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className="text-sm">Priority customer support</span>
                  </div>
                  <Button className="w-full mt-4 bg-white text-purple-600 hover:bg-gray-100">
                    Upgrade Now - ₹2,999/month
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full justify-start" variant="outline">
                  <Search className="w-4 h-4 mr-2" />
                  Advanced Search
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Messages ({stats.messages})
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <Heart className="w-4 h-4 mr-2" />
                  Interests ({stats.interestsReceived})
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <Star className="w-4 h-4 mr-2" />
                  Shortlisted
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <Settings className="w-4 h-4 mr-2" />
                  Privacy Settings
                </Button>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivities.map((activity, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        activity.type === 'view' ? 'bg-blue-100 text-blue-600' :
                        activity.type === 'interest' ? 'bg-red-100 text-red-600' :
                        activity.type === 'message' ? 'bg-green-100 text-green-600' :
                        'bg-purple-100 text-purple-600'
                      }`}>
                        {activity.type === 'view' && <Eye className="w-4 h-4" />}
                        {activity.type === 'interest' && <Heart className="w-4 h-4" />}
                        {activity.type === 'message' && <MessageCircle className="w-4 h-4" />}
                        {activity.type === 'match' && <Users className="w-4 h-4" />}
                      </div>
                      <div className="flex-1">
                        <p className="text-sm">
                          <span className="font-medium">{activity.user}</span> {activity.action}
                        </p>
                        <p className="text-xs text-gray-500">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Horoscope Match */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Sparkles className="w-5 h-5 mr-2 text-yellow-500" />
                  Today's Horoscope Match
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center space-y-3">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-100 to-orange-100 rounded-full flex items-center justify-center mx-auto">
                    <Star className="w-8 h-8 text-yellow-600" />
                  </div>
                  <h4 className="font-semibold">Excellent Match Day!</h4>
                  <p className="text-sm text-gray-600">Your stars align perfectly for meeting someone special today.</p>
                  <Button size="sm" className="w-full">
                    Find Compatible Matches
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Success Story */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Gift className="w-5 h-5 mr-2 text-pink-500" />
                  Success Story
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <img 
                    src="/placeholder.svg" 
                    alt="Success couple"
                    className="w-full h-32 object-cover rounded-lg"
                  />
                  <h4 className="font-semibold text-sm">Raj & Priya's Wedding</h4>
                  <p className="text-xs text-gray-600">
                    "We found each other through Rishta Sathi and couldn't be happier! Thank you for helping us find our perfect match."
                  </p>
                  <Button size="sm" variant="outline" className="w-full">
                    Read More Stories
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
