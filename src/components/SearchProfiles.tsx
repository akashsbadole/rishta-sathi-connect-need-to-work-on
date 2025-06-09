
import { useState } from "react";
import { Search, Filter, Heart, MapPin, GraduationCap, Briefcase, Star, Eye, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

const SearchProfiles = () => {
  const [searchFilters, setSearchFilters] = useState({
    lookingFor: "",
    ageRange: [18, 35],
    heightRange: [150, 180],
    religion: "",
    caste: "",
    maritalStatus: "",
    education: "",
    occupation: "",
    location: "",
    incomeRange: [0, 2000000],
    manglik: "",
    diet: "",
    smoking: "",
    drinking: ""
  });

  const [profiles] = useState([
    {
      id: 1,
      name: "Priya Sharma",
      age: 26,
      height: "5'4\"",
      education: "B.Tech - Computer Science",
      occupation: "Software Engineer",
      location: "Mumbai, Maharashtra",
      religion: "Hindu",
      caste: "Brahmin",
      image: "/placeholder.svg",
      verified: true,
      online: true,
      premium: false,
      interests: 15,
      shortlisted: false
    },
    {
      id: 2,
      name: "Rahul Gupta",
      age: 29,
      height: "5'9\"",
      education: "MBA - Finance",
      occupation: "Investment Banker",
      location: "Delhi, Delhi",
      religion: "Hindu",
      caste: "Vaishya",
      image: "/placeholder.svg",
      verified: true,
      online: false,
      premium: true,
      interests: 23,
      shortlisted: true
    },
    {
      id: 3,
      name: "Anita Patel",
      age: 24,
      height: "5'2\"",
      education: "M.Sc - Biotechnology",
      occupation: "Research Scientist",
      location: "Ahmedabad, Gujarat",
      religion: "Hindu",
      caste: "Patel",
      image: "/placeholder.svg",
      verified: true,
      online: true,
      premium: false,
      interests: 12,
      shortlisted: false
    },
    {
      id: 4,
      name: "Vikash Kumar",
      age: 31,
      height: "5'8\"",
      education: "B.Com - Chartered Accountancy",
      occupation: "Chartered Accountant",
      location: "Bangalore, Karnataka",
      religion: "Hindu",
      caste: "Kayastha",
      image: "/placeholder.svg",
      verified: true,
      online: false,
      premium: true,
      interests: 18,
      shortlisted: false
    }
  ]);

  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const FilterSidebar = () => (
    <div className="space-y-6">
      <div>
        <Label className="text-sm font-medium">Looking for</Label>
        <Select onValueChange={(value) => setSearchFilters({...searchFilters, lookingFor: value})}>
          <SelectTrigger className="mt-2">
            <SelectValue placeholder="Select gender" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="bride">Bride</SelectItem>
            <SelectItem value="groom">Groom</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label className="text-sm font-medium">Age Range: {searchFilters.ageRange[0]} - {searchFilters.ageRange[1]} years</Label>
        <Slider
          value={searchFilters.ageRange}
          onValueChange={(value) => setSearchFilters({...searchFilters, ageRange: value})}
          max={50}
          min={18}
          step={1}
          className="mt-2"
        />
      </div>

      <div>
        <Label className="text-sm font-medium">Height Range: {searchFilters.heightRange[0]} - {searchFilters.heightRange[1]} cm</Label>
        <Slider
          value={searchFilters.heightRange}
          onValueChange={(value) => setSearchFilters({...searchFilters, heightRange: value})}
          max={200}
          min={140}
          step={1}
          className="mt-2"
        />
      </div>

      <div>
        <Label className="text-sm font-medium">Religion</Label>
        <Select onValueChange={(value) => setSearchFilters({...searchFilters, religion: value})}>
          <SelectTrigger className="mt-2">
            <SelectValue placeholder="Select religion" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="hindu">Hindu</SelectItem>
            <SelectItem value="muslim">Muslim</SelectItem>
            <SelectItem value="christian">Christian</SelectItem>
            <SelectItem value="sikh">Sikh</SelectItem>
            <SelectItem value="buddhist">Buddhist</SelectItem>
            <SelectItem value="jain">Jain</SelectItem>
            <SelectItem value="parsi">Parsi</SelectItem>
            <SelectItem value="jewish">Jewish</SelectItem>
            <SelectItem value="bahai">Bahai</SelectItem>
            <SelectItem value="no-religion">No Religion</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label className="text-sm font-medium">Marital Status</Label>
        <Select onValueChange={(value) => setSearchFilters({...searchFilters, maritalStatus: value})}>
          <SelectTrigger className="mt-2">
            <SelectValue placeholder="Select status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="never-married">Never Married</SelectItem>
            <SelectItem value="divorced">Divorced</SelectItem>
            <SelectItem value="widowed">Widowed</SelectItem>
            <SelectItem value="separated">Separated</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label className="text-sm font-medium">Education</Label>
        <Select onValueChange={(value) => setSearchFilters({...searchFilters, education: value})}>
          <SelectTrigger className="mt-2">
            <SelectValue placeholder="Select education" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="high-school">High School</SelectItem>
            <SelectItem value="diploma">Diploma</SelectItem>
            <SelectItem value="bachelors">Bachelor's Degree</SelectItem>
            <SelectItem value="masters">Master's Degree</SelectItem>
            <SelectItem value="doctorate">Doctorate</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label className="text-sm font-medium">Annual Income: ₹{searchFilters.incomeRange[0].toLocaleString()} - ₹{searchFilters.incomeRange[1].toLocaleString()}</Label>
        <Slider
          value={searchFilters.incomeRange}
          onValueChange={(value) => setSearchFilters({...searchFilters, incomeRange: value})}
          max={5000000}
          min={0}
          step={100000}
          className="mt-2"
        />
      </div>

      <div>
        <Label className="text-sm font-medium">Location</Label>
        <Input 
          placeholder="Enter city or state"
          className="mt-2"
          onChange={(e) => setSearchFilters({...searchFilters, location: e.target.value})}
        />
      </div>

      <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
        Apply Filters
      </Button>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-red-50">
      <div className="container mx-auto px-4 py-8">
        {/* Search Header */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input 
                placeholder="Search by name, location, profession..."
                className="pl-10"
              />
            </div>
            <div className="flex gap-2">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" className="border-purple-200 text-purple-600">
                    <Filter className="w-4 h-4 mr-2" />
                    Filters
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-80">
                  <SheetHeader>
                    <SheetTitle>Search Filters</SheetTitle>
                    <SheetDescription>
                      Refine your search to find the perfect match
                    </SheetDescription>
                  </SheetHeader>
                  <div className="mt-6">
                    <FilterSidebar />
                  </div>
                </SheetContent>
              </Sheet>
              
              <Button 
                variant="outline"
                onClick={() => setViewMode(viewMode === "grid" ? "list" : "grid")}
                className="border-blue-200 text-blue-600"
              >
                {viewMode === "grid" ? "List View" : "Grid View"}
              </Button>
            </div>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Desktop Filters Sidebar */}
          <div className="hidden lg:block w-80">
            <Card className="p-6 sticky top-4">
              <h3 className="text-lg font-semibold mb-4">Search Filters</h3>
              <FilterSidebar />
            </Card>
          </div>

          {/* Profiles Grid/List */}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-gray-800">
                {profiles.length} Profiles Found
              </h2>
              <div className="flex gap-2">
                <Select defaultValue="relevance">
                  <SelectTrigger className="w-40">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="relevance">Most Relevant</SelectItem>
                    <SelectItem value="recent">Recently Joined</SelectItem>
                    <SelectItem value="active">Last Active</SelectItem>
                    <SelectItem value="premium">Premium First</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className={viewMode === "grid" ? "grid md:grid-cols-2 xl:grid-cols-3 gap-6" : "space-y-4"}>
              {profiles.map((profile) => (
                <Card key={profile.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                  <div className="relative">
                    <div className="aspect-square bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center">
                      <img src={profile.image} alt={profile.name} className="w-full h-full object-cover" />
                      {profile.online && (
                        <div className="absolute top-3 right-3 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                      )}
                      {profile.premium && (
                        <Badge className="absolute top-3 left-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-white">
                          Premium
                        </Badge>
                      )}
                    </div>
                    
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                      <Button size="sm" className="bg-white text-purple-600 hover:bg-purple-50">
                        <Eye className="w-4 h-4 mr-1" />
                        View
                      </Button>
                      <Button size="sm" className="bg-purple-600 text-white hover:bg-purple-700">
                        <Heart className="w-4 h-4 mr-1" />
                        Interest
                      </Button>
                      <Button size="sm" className="bg-blue-600 text-white hover:bg-blue-700">
                        <MessageCircle className="w-4 h-4 mr-1" />
                        Message
                      </Button>
                    </div>
                  </div>
                  
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-lg">{profile.name}</h3>
                      {profile.verified && (
                        <Badge variant="secondary" className="text-green-600 bg-green-100">
                          ✓ Verified
                        </Badge>
                      )}
                    </div>
                    
                    <div className="space-y-1 text-sm text-gray-600">
                      <div className="flex items-center">
                        <span className="font-medium">{profile.age} years, {profile.height}</span>
                      </div>
                      
                      <div className="flex items-center">
                        <GraduationCap className="w-3 h-3 mr-1" />
                        <span>{profile.education}</span>
                      </div>
                      
                      <div className="flex items-center">
                        <Briefcase className="w-3 h-3 mr-1" />
                        <span>{profile.occupation}</span>
                      </div>
                      
                      <div className="flex items-center">
                        <MapPin className="w-3 h-3 mr-1" />
                        <span>{profile.location}</span>
                      </div>
                      
                      <div className="flex items-center">
                        <Star className="w-3 h-3 mr-1" />
                        <span>{profile.religion}, {profile.caste}</span>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center mt-4 pt-3 border-t">
                      <span className="text-xs text-gray-500">
                        {profile.interests} interests received
                      </span>
                      <div className="flex space-x-2">
                        <Button 
                          size="sm" 
                          variant="outline"
                          className="text-purple-600 border-purple-200 hover:bg-purple-50"
                        >
                          <Heart className="w-3 h-3 mr-1" />
                          Interest
                        </Button>
                        <Button 
                          size="sm"
                          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                        >
                          View Profile
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-8">
              <div className="flex space-x-2">
                <Button variant="outline" className="border-purple-200 text-purple-600">Previous</Button>
                <Button className="bg-purple-600 text-white">1</Button>
                <Button variant="outline" className="border-purple-200 text-purple-600">2</Button>
                <Button variant="outline" className="border-purple-200 text-purple-600">3</Button>
                <Button variant="outline" className="border-purple-200 text-purple-600">Next</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchProfiles;
