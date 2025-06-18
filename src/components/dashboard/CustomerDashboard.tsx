
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { 
  Heart, Users, Calendar, Star, MessageSquare, 
  Shield, Camera, Gift, Settings, Bell
} from "lucide-react";

const CustomerDashboard = () => {
  const [stats] = useState({
    profileViews: 234,
    interestsSent: 45,
    interestsReceived: 67,
    matches: 12,
    verificationStatus: 85,
    responseRate: 78
  });

  const [recentMatches] = useState([
    {
      id: 1,
      name: 'Priya Sharma',
      age: 26,
      location: 'Mumbai',
      compatibility: 95,
      status: 'new',
      image: '/placeholder.svg'
    },
    {
      id: 2,
      name: 'Anita Patel',
      age: 24,
      location: 'Delhi',
      compatibility: 88,
      status: 'interested',
      image: '/placeholder.svg'
    }
  ]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'new': return 'bg-green-500';
      case 'interested': return 'bg-blue-500';
      case 'contacted': return 'bg-yellow-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">My Dashboard</h1>
        <div className="flex space-x-3">
          <Button variant="outline" size="sm">
            <Bell className="w-4 h-4 mr-2" />
            Notifications
          </Button>
          <Button variant="outline" size="sm">
            <Settings className="w-4 h-4 mr-2" />
            Settings
          </Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Profile Views</p>
                <p className="text-2xl font-bold text-gray-900">{stats.profileViews}</p>
              </div>
              <Users className="w-8 h-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Interests Received</p>
                <p className="text-2xl font-bold text-gray-900">{stats.interestsReceived}</p>
              </div>
              <Heart className="w-8 h-8 text-pink-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Perfect Matches</p>
                <p className="text-2xl font-bold text-gray-900">{stats.matches}</p>
              </div>
              <Star className="w-8 h-8 text-yellow-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Response Rate</p>
                <p className="text-2xl font-bold text-gray-900">{stats.responseRate}%</p>
              </div>
              <MessageSquare className="w-8 h-8 text-green-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Profile Completion */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Shield className="w-5 h-5 text-blue-600" />
            <span>Profile Verification Status</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span>Profile Completion</span>
              <span className="font-semibold">{stats.verificationStatus}%</span>
            </div>
            <Progress value={stats.verificationStatus} className="w-full" />
            <div className="flex space-x-2">
              <Button size="sm" variant="outline">Complete Profile</Button>
              <Button size="sm" variant="outline">Verify Documents</Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="matches" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="matches">Matches</TabsTrigger>
          <TabsTrigger value="interests">Interests</TabsTrigger>
          <TabsTrigger value="wedding">Wedding Planning</TabsTrigger>
          <TabsTrigger value="messages">Messages</TabsTrigger>
        </TabsList>

        <TabsContent value="matches" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Perfect Matches for You</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {recentMatches.map((match) => (
                  <div key={match.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-start space-x-4">
                      <div className="w-16 h-16 bg-gray-200 rounded-lg flex-shrink-0">
                        <img src={match.image} alt={match.name} className="w-full h-full object-cover rounded-lg" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold">{match.name}</h4>
                        <p className="text-sm text-gray-600">{match.age} years • {match.location}</p>
                        <div className="flex items-center space-x-2 mt-2">
                          <span className="text-sm font-medium text-green-600">{match.compatibility}% Match</span>
                          <Badge className={getStatusColor(match.status)}>
                            {match.status}
                          </Badge>
                        </div>
                        <div className="flex space-x-2 mt-3">
                          <Button size="sm">View Profile</Button>
                          <Button size="sm" variant="outline">Send Interest</Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="interests" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Heart className="w-5 h-5 text-pink-600" />
                <span>Interest Management</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8">
                <Heart className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Manage Your Interests</h3>
                <p className="text-gray-600 mb-4">Track sent and received interests</p>
                <Button>View All Interests</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="wedding" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Gift className="w-5 h-5 text-purple-600" />
                <span>Wedding Planning</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8">
                <Gift className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Plan Your Perfect Wedding</h3>
                <p className="text-gray-600 mb-4">Access our comprehensive wedding planning tools</p>
                <Button>Start Planning</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="messages" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <MessageSquare className="w-5 h-5 text-blue-600" />
                <span>Messages</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8">
                <MessageSquare className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Your Conversations</h3>
                <p className="text-gray-600 mb-4">Connect with your matches</p>
                <Button>View Messages</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default CustomerDashboard;
