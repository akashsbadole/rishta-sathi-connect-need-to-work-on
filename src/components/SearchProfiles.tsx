
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Filter, Heart, Eye, MessageCircle, MapPin, 
  GraduationCap, Briefcase, Users, Star 
} from "lucide-react";

const SearchProfiles = () => {
  const [searchFilters, setSearchFilters] = useState({
    minAge: "",
    maxAge: "",
    minHeight: "",
    maxHeight: "",
    religion: "",
    caste: "",
    education: "",
    occupation: "",
    location: "",
    maritalStatus: "",
    income: "",
    manglik: "",
    diet: ""
  });

  const [activeView, setActiveView] = useState("grid");

  const searchResults = [
    {
      id: 1,
      name: "Anita Reddy",
      age: 24,
      height: "5'3\"",
      location: "Bangalore, Karnataka",
      education: "M.Tech Computer Science",
      occupation: "Software Engineer",
      religion: "Hindu",
      caste: "Reddy",
      income: "₹12,00,000",
      photo: "/placeholder.svg",
      verificationTier: "Standard",
      compatibility: 91,
      lastActive: "2 hours ago",
      isOnline: true,
      profileViews: 234,
      interests: {
        received: 45,
        sent: 12
      }
    },
    {
      id: 2,
      name: "Kavya Iyer",
      age: 27,
      height: "5'4\"",
      location: "Chennai, Tamil Nadu",
      education: "CA",
      occupation: "Chartered Accountant",
      religion: "Hindu",
      caste: "Iyer",
      income: "₹15,00,000",
      photo: "/placeholder.svg",
      verificationTier: "Premium",
      compatibility: 88,
      lastActive: "1 day ago",
      isOnline: false,
      profileViews: 178,
      interests: {
        received: 38,
        sent: 9
      }
    },
    {
      id: 3,
      name: "Sneha Gupta",
      age: 25,
      height: "5'2\"",
      location: "Delhi, NCR",
      education: "MBA Marketing",
      occupation: "Marketing Manager",
      religion: "Hindu",
      caste: "Gupta",
      income: "₹10,00,000",
      photo: "/placeholder.svg",
      verificationTier: "Basic",
      compatibility: 85,
      lastActive: "3 days ago",
      isOnline: false,
      profileViews: 156,
      interests: {
        received: 29,
        sent: 15
      }
    }
  ];

  const updateFilter = (key: string, value: string) => {
    setSearchFilters(prev => ({ ...prev, [key]: value }));
  };

  const resetFilters = () => {
    setSearchFilters({
      minAge: "",
      maxAge: "",
      minHeight: "",
      maxHeight: "",
      religion: "",
      caste: "",
      education: "",
      occupation: "",
      location: "",
      maritalStatus: "",
      income: "",
      manglik: "",
      diet: ""
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Search Profiles</h1>
        <p className="text-gray-600">Find your perfect match with advanced search filters</p>
      </div>

      <div className="grid lg:grid-cols-4 gap-6">
        <div className="lg:col-span-1">
          <Card className="sticky top-4">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Filter className="w-5 h-5" />
                <span>Search Filters</span>
              </CardTitle>
              <CardDescription>Refine your search criteria</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label className="text-sm font-medium mb-2 block">Age Range</Label>
                <div className="grid grid-cols-2 gap-2">
                  <Input
                    placeholder="Min"
                    type="number"
                    value={searchFilters.minAge}
                    onChange={(e) => updateFilter("minAge", e.target.value)}
                  />
                  <Input
                    placeholder="Max"
                    type="number"
                    value={searchFilters.maxAge}
                    onChange={(e) => updateFilter("maxAge", e.target.value)}
                  />
                </div>
              </div>

              <div>
                <Label className="text-sm font-medium mb-2 block">Height Range</Label>
                <div className="grid grid-cols-2 gap-2">
                  <Select value={searchFilters.minHeight} onValueChange={(value) => updateFilter("minHeight", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Min" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="4ft6in">4'6"</SelectItem>
                      <SelectItem value="5ft0in">5'0"</SelectItem>
                      <SelectItem value="5ft4in">5'4"</SelectItem>
                      <SelectItem value="5ft8in">5'8"</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select value={searchFilters.maxHeight} onValueChange={(value) => updateFilter("maxHeight", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Max" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="5ft4in">5'4"</SelectItem>
                      <SelectItem value="5ft8in">5'8"</SelectItem>
                      <SelectItem value="6ft0in">6'0"</SelectItem>
                      <SelectItem value="6ft4in">6'4"</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label htmlFor="religion">Religion</Label>
                <Select value={searchFilters.religion} onValueChange={(value) => updateFilter("religion", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select religion" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="hindu">Hindu</SelectItem>
                    <SelectItem value="muslim">Muslim</SelectItem>
                    <SelectItem value="christian">Christian</SelectItem>
                    <SelectItem value="sikh">Sikh</SelectItem>
                    <SelectItem value="buddhist">Buddhist</SelectItem>
                    <SelectItem value="jain">Jain</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="caste">Caste</Label>
                <Input
                  placeholder="Enter caste"
                  value={searchFilters.caste}
                  onChange={(e) => updateFilter("caste", e.target.value)}
                />
              </div>

              <div>
                <Label htmlFor="education">Education</Label>
                <Select value={searchFilters.education} onValueChange={(value) => updateFilter("education", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select education" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="high_school">High School</SelectItem>
                    <SelectItem value="diploma">Diploma</SelectItem>
                    <SelectItem value="bachelors">Bachelor's</SelectItem>
                    <SelectItem value="masters">Master's</SelectItem>
                    <SelectItem value="phd">PhD</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="occupation">Occupation</Label>
                <Input
                  placeholder="Enter occupation"
                  value={searchFilters.occupation}
                  onChange={(e) => updateFilter("occupation", e.target.value)}
                />
              </div>

              <div>
                <Label htmlFor="location">Location</Label>
                <Input
                  placeholder="City, State"
                  value={searchFilters.location}
                  onChange={(e) => updateFilter("location", e.target.value)}
                />
              </div>

              <div>
                <Label htmlFor="income">Annual Income</Label>
                <Select value={searchFilters.income} onValueChange={(value) => updateFilter("income", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select income range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="below_5">Below ₹5 Lakhs</SelectItem>
                    <SelectItem value="5_10">₹5-10 Lakhs</SelectItem>
                    <SelectItem value="10_20">₹10-20 Lakhs</SelectItem>
                    <SelectItem value="20_50">₹20-50 Lakhs</SelectItem>
                    <SelectItem value="above_50">Above ₹50 Lakhs</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="maritalStatus">Marital Status</Label>
                <Select value={searchFilters.maritalStatus} onValueChange={(value) => updateFilter("maritalStatus", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="never_married">Never Married</SelectItem>
                    <SelectItem value="divorced">Divorced</SelectItem>
                    <SelectItem value="widowed">Widowed</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="manglik">Manglik Status</Label>
                <Select value={searchFilters.manglik} onValueChange={(value) => updateFilter("manglik", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select manglik" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="yes">Manglik</SelectItem>
                    <SelectItem value="no">Non-Manglik</SelectItem>
                    <SelectItem value="dont_know">Don't Know</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="diet">Dietary Habits</Label>
                <Select value={searchFilters.diet} onValueChange={(value) => updateFilter("diet", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select diet" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="vegetarian">Vegetarian</SelectItem>
                    <SelectItem value="non_vegetarian">Non-Vegetarian</SelectItem>
                    <SelectItem value="vegan">Vegan</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex space-x-2">
                <Button className="flex-1">
                  <Filter className="w-4 h-4 mr-2" />
                  Search
                </Button>
                <Button variant="outline" onClick={resetFilters}>
                  Reset
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-3">
          <div className="mb-6">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-xl font-semibold">Search Results</h2>
                <p className="text-gray-600">{searchResults.length} profiles found</p>
              </div>
              <div className="flex space-x-2">
                <Button
                  variant={activeView === "grid" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveView("grid")}
                >
                  Grid
                </Button>
                <Button
                  variant={activeView === "list" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveView("list")}
                >
                  List
                </Button>
              </div>
            </div>
          </div>

          <Tabs value={activeView} onValueChange={setActiveView}>
            <TabsContent value="grid">
              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                {searchResults.map((profile) => (
                  <Card key={profile.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative">
                      <img 
                        src={profile.photo} 
                        alt={profile.name}
                        className="w-full h-64 object-cover"
                      />
                      <div className="absolute top-3 right-3 space-y-2">
                        <Badge className="bg-gradient-to-r from-purple-600 to-blue-600">
                          {profile.compatibility}% Match
                        </Badge>
                        {profile.isOnline && (
                          <Badge className="bg-green-500">
                            Online
                          </Badge>
                        )}
                      </div>
                      <Badge className="absolute top-3 left-3 bg-blue-500">
                        {profile.verificationTier}
                      </Badge>
                    </div>
                    
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold text-lg">{profile.name}</h3>
                        <span className="text-gray-600">{profile.age} years</span>
                      </div>

                      <div className="space-y-1 mb-3 text-sm text-gray-600">
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-3 h-3" />
                          <span>{profile.location}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <GraduationCap className="w-3 h-3" />
                          <span>{profile.education}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Briefcase className="w-3 h-3" />
                          <span>{profile.occupation}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Users className="w-3 h-3" />
                          <span>{profile.religion}, {profile.caste}</span>
                        </div>
                      </div>

                      <div className="flex justify-between items-center text-xs text-gray-500 mb-3">
                        <span>{profile.height}</span>
                        <span>{profile.income}</span>
                        <span>Last active: {profile.lastActive}</span>
                      </div>

                      <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                        <div className="flex items-center space-x-3">
                          <div className="flex items-center space-x-1">
                            <Eye className="w-3 h-3" />
                            <span>{profile.profileViews}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Heart className="w-3 h-3" />
                            <span>{profile.interests.received}</span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Star className="w-3 h-3 text-yellow-500" />
                          <span className="text-yellow-600">{profile.compatibility}%</span>
                        </div>
                      </div>

                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline" className="flex-1">
                          <Eye className="w-4 h-4 mr-1" />
                          View
                        </Button>
                        <Button size="sm" className="flex-1">
                          <Heart className="w-4 h-4 mr-1" />
                          Interest
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="list">
              <div className="space-y-4">
                {searchResults.map((profile) => (
                  <Card key={profile.id}>
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-4">
                        <Avatar className="w-20 h-20">
                          <AvatarImage src={profile.photo} alt={profile.name} />
                          <AvatarFallback>{profile.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center space-x-3">
                              <h3 className="text-xl font-semibold">{profile.name}</h3>
                              <Badge className="bg-gradient-to-r from-purple-600 to-blue-600">
                                {profile.compatibility}% Match
                              </Badge>
                              {profile.isOnline && (
                                <Badge className="bg-green-500">Online</Badge>
                              )}
                            </div>
                            <Badge variant="outline">{profile.verificationTier} Verified</Badge>
                          </div>
                          
                          <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-600 mb-3">
                            <div className="space-y-1">
                              <div>Age: {profile.age} years | Height: {profile.height}</div>
                              <div className="flex items-center space-x-1">
                                <MapPin className="w-3 h-3" />
                                <span>{profile.location}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <GraduationCap className="w-3 h-3" />
                                <span>{profile.education}</span>
                              </div>
                            </div>
                            <div className="space-y-1">
                              <div className="flex items-center space-x-1">
                                <Briefcase className="w-3 h-3" />
                                <span>{profile.occupation}</span>
                              </div>
                              <div>Income: {profile.income}</div>
                              <div>{profile.religion}, {profile.caste}</div>
                            </div>
                          </div>

                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4 text-xs text-gray-500">
                              <div className="flex items-center space-x-1">
                                <Eye className="w-3 h-3" />
                                <span>{profile.profileViews} views</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <Heart className="w-3 h-3" />
                                <span>{profile.interests.received} interests</span>
                              </div>
                              <span>Last active: {profile.lastActive}</span>
                            </div>
                            <div className="flex space-x-2">
                              <Button size="sm" variant="outline">
                                <Eye className="w-4 h-4 mr-1" />
                                View Profile
                              </Button>
                              <Button size="sm">
                                <Heart className="w-4 h-4 mr-1" />
                                Send Interest
                              </Button>
                              <Button size="sm" variant="outline">
                                <MessageCircle className="w-4 h-4 mr-1" />
                                Message
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default SearchProfiles;
