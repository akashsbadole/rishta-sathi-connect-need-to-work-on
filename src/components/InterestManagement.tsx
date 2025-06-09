
import { useState } from "react";
import { Heart, MessageCircle, X, Check, Clock, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const InterestManagement = () => {
  const [interests] = useState([
    {
      id: 1,
      name: "Priya Sharma",
      age: 26,
      location: "Mumbai, Maharashtra",
      profession: "Software Engineer",
      image: "/placeholder.svg",
      status: "pending",
      sentAt: "2 hours ago",
      type: "sent"
    },
    {
      id: 2,
      name: "Rahul Gupta",
      age: 29,
      location: "Delhi, Delhi",
      profession: "Investment Banker",
      image: "/placeholder.svg",
      status: "accepted",
      receivedAt: "1 day ago",
      type: "received"
    },
    {
      id: 3,
      name: "Anita Patel",
      age: 24,
      location: "Ahmedabad, Gujarat",
      profession: "Research Scientist",
      image: "/placeholder.svg",
      status: "pending",
      receivedAt: "3 hours ago",
      type: "received"
    }
  ]);

  const handleAcceptInterest = (id: number) => {
    console.log("Accepting interest:", id);
  };

  const handleDeclineInterest = (id: number) => {
    console.log("Declining interest:", id);
  };

  const sentInterests = interests.filter(interest => interest.type === "sent");
  const receivedInterests = interests.filter(interest => interest.type === "received");

  const InterestCard = ({ interest, showActions = false }: { interest: any, showActions?: boolean }) => (
    <Card className="hover:shadow-lg transition-shadow">
      <CardContent className="p-4">
        <div className="flex items-center space-x-4">
          <Avatar className="w-16 h-16">
            <AvatarImage src={interest.image} alt={interest.name} />
            <AvatarFallback>{interest.name.split(' ').map((n: string) => n[0]).join('')}</AvatarFallback>
          </Avatar>
          
          <div className="flex-1">
            <h3 className="font-semibold text-lg">{interest.name}</h3>
            <p className="text-gray-600">{interest.age} years • {interest.profession}</p>
            <p className="text-sm text-gray-500">{interest.location}</p>
            
            <div className="flex items-center space-x-2 mt-2">
              <Badge 
                variant={interest.status === "accepted" ? "default" : 
                        interest.status === "declined" ? "destructive" : "secondary"}
              >
                {interest.status === "pending" ? <Clock className="w-3 h-3 mr-1" /> : 
                 interest.status === "accepted" ? <Check className="w-3 h-3 mr-1" /> : 
                 <X className="w-3 h-3 mr-1" />}
                {interest.status.charAt(0).toUpperCase() + interest.status.slice(1)}
              </Badge>
              
              <span className="text-xs text-gray-500">
                {interest.type === "sent" ? interest.sentAt : interest.receivedAt}
              </span>
            </div>
          </div>
          
          <div className="flex flex-col space-y-2">
            <Button variant="outline" size="sm">
              <Eye className="w-4 h-4 mr-1" />
              View Profile
            </Button>
            
            {showActions && interest.status === "pending" && (
              <div className="flex space-x-2">
                <Button 
                  size="sm"
                  onClick={() => handleAcceptInterest(interest.id)}
                  className="bg-green-600 hover:bg-green-700"
                >
                  <Check className="w-4 h-4" />
                </Button>
                <Button 
                  size="sm" 
                  variant="destructive"
                  onClick={() => handleDeclineInterest(interest.id)}
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
            )}
            
            {interest.status === "accepted" && (
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                <MessageCircle className="w-4 h-4 mr-1" />
                Message
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Interest Management</h1>
        <p className="text-gray-600">Manage your sent and received interests</p>
      </div>

      <Tabs defaultValue="received" className="space-y-6">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="received" className="flex items-center space-x-2">
            <Heart className="w-4 h-4" />
            <span>Received Interests ({receivedInterests.length})</span>
          </TabsTrigger>
          <TabsTrigger value="sent" className="flex items-center space-x-2">
            <MessageCircle className="w-4 h-4" />
            <span>Sent Interests ({sentInterests.length})</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="received" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Heart className="w-5 h-5 text-red-500" />
                <span>Interests You Received</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {receivedInterests.length > 0 ? (
                receivedInterests.map((interest) => (
                  <InterestCard key={interest.id} interest={interest} showActions={true} />
                ))
              ) : (
                <div className="text-center py-8">
                  <Heart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-500">No interests received yet</p>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="sent" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <MessageCircle className="w-5 h-5 text-blue-500" />
                <span>Interests You Sent</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {sentInterests.length > 0 ? (
                sentInterests.map((interest) => (
                  <InterestCard key={interest.id} interest={interest} />
                ))
              ) : (
                <div className="text-center py-8">
                  <MessageCircle className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-500">No interests sent yet</p>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default InterestManagement;
