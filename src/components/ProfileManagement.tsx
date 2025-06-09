
import { useState } from "react";
import { 
  User, Camera, Edit, Shield, Star, Heart, Eye, 
  Upload, CheckCircle, AlertCircle, Crown, Sparkles 
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const ProfileManagement = () => {
  const [profileData, setProfileData] = useState({
    personalDetails: {
      firstName: "Rohit",
      lastName: "Sharma", 
      age: 28,
      height: "5'9\"",
      weight: "70 kg",
      complexion: "Fair",
      maritalStatus: "Never Married",
      motherTongue: "Hindi",
      physicalStatus: "Normal"
    },
    contactDetails: {
      email: "rohit.sharma@email.com",
      phone: "+91 9876543210",
      address: "Mumbai, Maharashtra"
    },
    familyDetails: {
      fatherOccupation: "Business",
      motherOccupation: "Homemaker",
      familyType: "Nuclear",
      familyValues: "Traditional",
      siblings: "1 Brother, 1 Sister"
    },
    educationCareer: {
      education: "B.Tech Computer Science",
      occupation: "Software Engineer",
      company: "Tech Corp",
      income: "8-12 Lakhs",
      workLocation: "Mumbai"
    },
    lifestyle: {
      diet: "Vegetarian",
      drinking: "Never",
      smoking: "Never",
      hobbies: "Reading, Cricket, Music"
    },
    religiousDetails: {
      religion: "Hindu",
      caste: "Brahmin",
      subCaste: "Sharma",
      gothra: "Bharadwaj",
      manglik: "No"
    }
  });

  const [verificationStatus] = useState({
    phone: true,
    email: true,
    photo: true,
    documents: false,
    education: false,
    profession: false
  });

  const [profileStats] = useState({
    completionPercentage: 85,
    views: 156,
    interests: 23,
    responses: 8,
    profileRank: "Premium"
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-red-50">
      <div className="container mx-auto px-4 py-8">
        {/* Profile Header */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
            <div className="relative">
              <img 
                src="/placeholder.svg" 
                alt="Profile"
                className="w-32 h-32 rounded-full object-cover border-4 border-purple-200"
              />
              <button className="absolute bottom-2 right-2 bg-purple-600 text-white rounded-full p-2 hover:bg-purple-700">
                <Camera className="w-4 h-4" />
              </button>
              {verificationStatus.photo && (
                <Badge className="absolute -top-2 -right-2 bg-green-500 text-white rounded-full w-8 h-8 p-0 flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </Badge>
              )}
            </div>
            
            <div className="flex-1 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start space-x-2 mb-2">
                <h1 className="text-2xl font-bold text-gray-800">
                  {profileData.personalDetails.firstName} {profileData.personalDetails.lastName}
                </h1>
                <Crown className="w-6 h-6 text-yellow-500" />
              </div>
              <p className="text-gray-600 mb-2">
                {profileData.personalDetails.age} years • {profileData.personalDetails.height} • 
                {profileData.contactDetails.address}
              </p>
              <p className="text-gray-600 mb-4">
                {profileData.educationCareer.education} • {profileData.educationCareer.occupation}
              </p>
              
              <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-4">
                <Badge variant="secondary" className="bg-green-100 text-green-700">
                  <Shield className="w-3 h-3 mr-1" />
                  Verified Profile
                </Badge>
                <Badge variant="secondary" className="bg-purple-100 text-purple-700">
                  <Crown className="w-3 h-3 mr-1" />
                  Premium Member
                </Badge>
                <Badge variant="secondary" className="bg-yellow-100 text-yellow-700">
                  <Star className="w-3 h-3 mr-1" />
                  Top Rated
                </Badge>
              </div>
              
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-xl font-bold text-purple-600">{profileStats.views}</div>
                  <div className="text-sm text-gray-600">Profile Views</div>
                </div>
                <div>
                  <div className="text-xl font-bold text-red-600">{profileStats.interests}</div>
                  <div className="text-sm text-gray-600">Interests</div>
                </div>
                <div>
                  <div className="text-xl font-bold text-green-600">{profileStats.responses}</div>
                  <div className="text-sm text-gray-600">Responses</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Profile Completion */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <div className="flex items-center">
                <User className="w-5 h-5 mr-2" />
                Profile Completion
              </div>
              <span className="text-2xl font-bold text-purple-600">{profileStats.completionPercentage}%</span>
            </CardTitle>
            <CardDescription>
              Complete your profile to get more matches and responses
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Progress value={profileStats.completionPercentage} className="mb-4" />
            <div className="grid md:grid-cols-3 gap-4">
              <div className="flex items-center space-x-2">
                {verificationStatus.documents ? (
                  <CheckCircle className="w-5 h-5 text-green-500" />
                ) : (
                  <AlertCircle className="w-5 h-5 text-orange-500" />
                )}
                <span className="text-sm">Document Verification</span>
              </div>
              <div className="flex items-center space-x-2">
                {verificationStatus.education ? (
                  <CheckCircle className="w-5 h-5 text-green-500" />
                ) : (
                  <AlertCircle className="w-5 h-5 text-orange-500" />
                )}
                <span className="text-sm">Education Verification</span>
              </div>
              <div className="flex items-center space-x-2">
                {verificationStatus.profession ? (
                  <CheckCircle className="w-5 h-5 text-green-500" />
                ) : (
                  <AlertCircle className="w-5 h-5 text-orange-500" />
                )}
                <span className="text-sm">Professional Verification</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Profile Details Tabs */}
        <Tabs defaultValue="personal" className="space-y-6">
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="personal">Personal</TabsTrigger>
            <TabsTrigger value="family">Family</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="lifestyle">Lifestyle</TabsTrigger>
            <TabsTrigger value="religious">Religious</TabsTrigger>
            <TabsTrigger value="photos">Photos</TabsTrigger>
          </TabsList>

          <TabsContent value="personal">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  Personal Details
                  <Button size="sm" variant="outline">
                    <Edit className="w-4 h-4 mr-2" />
                    Edit
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input 
                      id="firstName" 
                      value={profileData.personalDetails.firstName}
                      readOnly 
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input 
                      id="lastName" 
                      value={profileData.personalDetails.lastName}
                      readOnly 
                    />
                  </div>
                  <div>
                    <Label htmlFor="age">Age</Label>
                    <Input 
                      id="age" 
                      value={profileData.personalDetails.age}
                      readOnly 
                    />
                  </div>
                  <div>
                    <Label htmlFor="height">Height</Label>
                    <Input 
                      id="height" 
                      value={profileData.personalDetails.height}
                      readOnly 
                    />
                  </div>
                  <div>
                    <Label htmlFor="weight">Weight</Label>
                    <Input 
                      id="weight" 
                      value={profileData.personalDetails.weight}
                      readOnly 
                    />
                  </div>
                  <div>
                    <Label htmlFor="complexion">Complexion</Label>
                    <Input 
                      id="complexion" 
                      value={profileData.personalDetails.complexion}
                      readOnly 
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="aboutMe">About Me</Label>
                  <Textarea 
                    id="aboutMe"
                    placeholder="Tell us about yourself..."
                    className="h-32"
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="family">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  Family Details
                  <Button size="sm" variant="outline">
                    <Edit className="w-4 h-4 mr-2" />
                    Edit
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="fatherOccupation">Father's Occupation</Label>
                    <Input 
                      id="fatherOccupation" 
                      value={profileData.familyDetails.fatherOccupation}
                      readOnly 
                    />
                  </div>
                  <div>
                    <Label htmlFor="motherOccupation">Mother's Occupation</Label>
                    <Input 
                      id="motherOccupation" 
                      value={profileData.familyDetails.motherOccupation}
                      readOnly 
                    />
                  </div>
                  <div>
                    <Label htmlFor="familyType">Family Type</Label>
                    <Input 
                      id="familyType" 
                      value={profileData.familyDetails.familyType}
                      readOnly 
                    />
                  </div>
                  <div>
                    <Label htmlFor="familyValues">Family Values</Label>
                    <Input 
                      id="familyValues" 
                      value={profileData.familyDetails.familyValues}
                      readOnly 
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="aboutFamily">About Family</Label>
                  <Textarea 
                    id="aboutFamily"
                    placeholder="Tell us about your family..."
                    className="h-32"
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="education">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  Education & Career
                  <Button size="sm" variant="outline">
                    <Edit className="w-4 h-4 mr-2" />
                    Edit
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="education">Highest Education</Label>
                    <Input 
                      id="education" 
                      value={profileData.educationCareer.education}
                      readOnly 
                    />
                  </div>
                  <div>
                    <Label htmlFor="occupation">Occupation</Label>
                    <Input 
                      id="occupation" 
                      value={profileData.educationCareer.occupation}
                      readOnly 
                    />
                  </div>
                  <div>
                    <Label htmlFor="company">Company</Label>
                    <Input 
                      id="company" 
                      value={profileData.educationCareer.company}
                      readOnly 
                    />
                  </div>
                  <div>
                    <Label htmlFor="income">Annual Income</Label>
                    <Input 
                      id="income" 
                      value={profileData.educationCareer.income}
                      readOnly 
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="lifestyle">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  Lifestyle & Preferences
                  <Button size="sm" variant="outline">
                    <Edit className="w-4 h-4 mr-2" />
                    Edit
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <Label htmlFor="diet">Diet</Label>
                    <Input 
                      id="diet" 
                      value={profileData.lifestyle.diet}
                      readOnly 
                    />
                  </div>
                  <div>
                    <Label htmlFor="drinking">Drinking</Label>
                    <Input 
                      id="drinking" 
                      value={profileData.lifestyle.drinking}
                      readOnly 
                    />
                  </div>
                  <div>
                    <Label htmlFor="smoking">Smoking</Label>
                    <Input 
                      id="smoking" 
                      value={profileData.lifestyle.smoking}
                      readOnly 
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="hobbies">Hobbies & Interests</Label>
                  <Textarea 
                    id="hobbies"
                    value={profileData.lifestyle.hobbies}
                    className="h-24"
                    readOnly
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="religious">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  Religious Details
                  <Button size="sm" variant="outline">
                    <Edit className="w-4 h-4 mr-2" />
                    Edit
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="religion">Religion</Label>
                    <Input 
                      id="religion" 
                      value={profileData.religiousDetails.religion}
                      readOnly 
                    />
                  </div>
                  <div>
                    <Label htmlFor="caste">Caste</Label>
                    <Input 
                      id="caste" 
                      value={profileData.religiousDetails.caste}
                      readOnly 
                    />
                  </div>
                  <div>
                    <Label htmlFor="subCaste">Sub Caste</Label>
                    <Input 
                      id="subCaste" 
                      value={profileData.religiousDetails.subCaste}
                      readOnly 
                    />
                  </div>
                  <div>
                    <Label htmlFor="gothra">Gothra</Label>
                    <Input 
                      id="gothra" 
                      value={profileData.religiousDetails.gothra}
                      readOnly 
                    />
                  </div>
                  <div>
                    <Label htmlFor="manglik">Manglik Status</Label>
                    <Input 
                      id="manglik" 
                      value={profileData.religiousDetails.manglik}
                      readOnly 
                    />
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-4 rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <Sparkles className="w-5 h-5 text-yellow-600" />
                    <h4 className="font-semibold text-yellow-800">Horoscope Matching</h4>
                  </div>
                  <p className="text-sm text-yellow-700 mb-3">
                    Upload your horoscope for better matches and compatibility analysis
                  </p>
                  <Button size="sm" className="bg-yellow-600 hover:bg-yellow-700">
                    <Upload className="w-4 h-4 mr-2" />
                    Upload Horoscope
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="photos">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  Photo Gallery
                  <Button size="sm" variant="outline">
                    <Upload className="w-4 h-4 mr-2" />
                    Upload Photos
                  </Button>
                </CardTitle>
                <CardDescription>
                  Profiles with photos get 10x more responses
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[1, 2, 3, 4, 5, 6].map((photo) => (
                    <div key={photo} className="relative group">
                      <img 
                        src="/placeholder.svg" 
                        alt={`Photo ${photo}`}
                        className="w-full h-32 object-cover rounded-lg border-2 border-gray-200"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <div className="flex space-x-2">
                          <Button size="sm" variant="secondary">
                            <Eye className="w-4 h-4" />
                          </Button>
                          <Button size="sm" variant="secondary">
                            <Edit className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                      {photo === 1 && (
                        <Badge className="absolute top-2 left-2 bg-green-500 text-white">
                          Profile Photo
                        </Badge>
                      )}
                    </div>
                  ))}
                  
                  <div className="border-2 border-dashed border-gray-300 rounded-lg h-32 flex items-center justify-center hover:border-purple-400 transition-colors cursor-pointer">
                    <div className="text-center">
                      <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                      <span className="text-sm text-gray-600">Add Photo</span>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">Photo Guidelines</h4>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>• Use recent, clear photos</li>
                    <li>• Include at least one close-up face photo</li>
                    <li>• Photos should be appropriate and decent</li>
                    <li>• Avoid group photos or photos with others</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ProfileManagement;
