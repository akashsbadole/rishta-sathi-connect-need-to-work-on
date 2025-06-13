
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { 
  User, MapPin, Heart, GraduationCap, Briefcase, Users, 
  Camera, Edit, Shield, Star, Eye, MessageCircle, Settings 
} from "lucide-react";

const ProfileManagement = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const profileData = {
    basic: {
      name: "Priya Sharma",
      age: 26,
      height: "5'4\"",
      location: "Mumbai, Maharashtra",
      profilePhoto: "/placeholder.svg",
      completionPercentage: 85,
      verificationTier: "Premium",
      isVerified: true
    },
    contact: {
      email: "priya.sharma@email.com",
      phone: "+91 98765 43210",
      whatsapp: "+91 98765 43210"
    },
    personal: {
      gender: "Female",
      maritalStatus: "Never Married",
      dateOfBirth: "1998-03-15",
      placeOfBirth: "Mumbai, Maharashtra",
      motherTongue: "Hindi",
      knownLanguages: ["Hindi", "English", "Marathi"],
      bloodGroup: "B+",
      complexion: "Fair",
      bodyType: "Average",
      physicalStatus: "Normal",
      personalityType: "ENFJ"
    },
    religious: {
      religion: "Hindu",
      caste: "Brahmin",
      subCaste: "Maharashtrian Brahmin",
      manglik: "No",
      dietaryHabits: "Vegetarian",
      smoking: "Never",
      drinking: "Never"
    },
    education: {
      level: "Master's Degree",
      degree: "MBA Finance",
      college: "XLRI Jamshedpur",
      specialization: "Finance & Marketing",
      graduationYear: "2020",
      grades: "8.5 CGPA"
    },
    professional: {
      occupation: "Investment Banker",
      company: "Goldman Sachs",
      designation: "Associate",
      industry: "Finance",
      experience: "4 years",
      income: "₹25,00,000",
      workLocation: "Mumbai"
    },
    family: {
      type: "Nuclear Family",
      values: "Traditional",
      fatherName: "Rajesh Sharma",
      fatherOccupation: "Business Owner",
      motherName: "Sunita Sharma",
      motherOccupation: "Homemaker",
      siblings: "1 Sister (Married)",
      familyIncome: "₹50,00,000+"
    },
    preferences: {
      ageRange: "28-35 years",
      heightRange: "5'6\" - 6'2\"",
      education: "Graduate or above",
      occupation: "Professional",
      location: "Mumbai, Delhi, Bangalore",
      religion: "Hindu",
      caste: "Any",
      income: "₹15,00,000+"
    }
  };

  const stats = {
    profileViews: 147,
    interestsSent: 23,
    interestsReceived: 45,
    mutualInterests: 8,
    messagesReceived: 12
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
          <div className="relative">
            <Avatar className="w-24 h-24">
              <AvatarImage src={profileData.basic.profilePhoto} alt={profileData.basic.name} />
              <AvatarFallback>PS</AvatarFallback>
            </Avatar>
            <Button size="sm" className="absolute -bottom-2 -right-2 rounded-full w-8 h-8 p-0">
              <Camera className="w-4 h-4" />
            </Button>
          </div>
          
          <div className="flex-1">
            <div className="flex items-center space-x-3 mb-2">
              <h1 className="text-2xl font-bold">{profileData.basic.name}</h1>
              {profileData.basic.isVerified && (
                <Badge className="bg-green-500">
                  <Shield className="w-3 h-3 mr-1" />
                  {profileData.basic.verificationTier} Verified
                </Badge>
              )}
            </div>
            
            <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-3">
              <span>{profileData.basic.age} years</span>
              <span>{profileData.basic.height}</span>
              <span>{profileData.basic.location}</span>
              <span>{profileData.professional.occupation}</span>
            </div>
            
            <div className="flex items-center space-x-4 mb-3">
              <div className="flex-1">
                <div className="flex justify-between text-sm mb-1">
                  <span>Profile Completion</span>
                  <span>{profileData.basic.completionPercentage}%</span>
                </div>
                <Progress value={profileData.basic.completionPercentage} className="h-2" />
              </div>
              <Button size="sm" variant="outline">
                <Edit className="w-4 h-4 mr-2" />
                Edit Profile
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardContent className="p-4 text-center">
            <Eye className="w-8 h-8 text-blue-500 mx-auto mb-2" />
            <div className="text-2xl font-bold">{stats.profileViews}</div>
            <div className="text-sm text-gray-600">Profile Views</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <Heart className="w-8 h-8 text-red-500 mx-auto mb-2" />
            <div className="text-2xl font-bold">{stats.interestsReceived}</div>
            <div className="text-sm text-gray-600">Interests Received</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <MessageCircle className="w-8 h-8 text-green-500 mx-auto mb-2" />
            <div className="text-2xl font-bold">{stats.messagesReceived}</div>
            <div className="text-sm text-gray-600">Messages</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <Star className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
            <div className="text-2xl font-bold">{stats.mutualInterests}</div>
            <div className="text-sm text-gray-600">Mutual Interests</div>
          </CardContent>
        </Card>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-8">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="personal">Personal</TabsTrigger>
          <TabsTrigger value="religious">Religious</TabsTrigger>
          <TabsTrigger value="education">Education</TabsTrigger>
          <TabsTrigger value="professional">Professional</TabsTrigger>
          <TabsTrigger value="family">Family</TabsTrigger>
          <TabsTrigger value="preferences">Preferences</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <User className="w-5 h-5" />
                  <span>Basic Information</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Full Name:</span>
                  <span className="font-medium">{profileData.basic.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Age:</span>
                  <span className="font-medium">{profileData.basic.age} years</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Height:</span>
                  <span className="font-medium">{profileData.basic.height}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Location:</span>
                  <span className="font-medium">{profileData.basic.location}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Mother Tongue:</span>
                  <span className="font-medium">{profileData.personal.motherTongue}</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Briefcase className="w-5 h-5" />
                  <span>Professional Details</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Occupation:</span>
                  <span className="font-medium">{profileData.professional.occupation}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Company:</span>
                  <span className="font-medium">{profileData.professional.company}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Experience:</span>
                  <span className="font-medium">{profileData.professional.experience}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Income:</span>
                  <span className="font-medium">{profileData.professional.income}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Location:</span>
                  <span className="font-medium">{profileData.professional.workLocation}</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="personal" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Personal Information</CardTitle>
              <CardDescription>Your personal details and characteristics</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Gender:</span>
                    <span className="font-medium">{profileData.personal.gender}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Marital Status:</span>
                    <span className="font-medium">{profileData.personal.maritalStatus}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Date of Birth:</span>
                    <span className="font-medium">{profileData.personal.dateOfBirth}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Place of Birth:</span>
                    <span className="font-medium">{profileData.personal.placeOfBirth}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Blood Group:</span>
                    <span className="font-medium">{profileData.personal.bloodGroup}</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Complexion:</span>
                    <span className="font-medium">{profileData.personal.complexion}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Body Type:</span>
                    <span className="font-medium">{profileData.personal.bodyType}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Physical Status:</span>
                    <span className="font-medium">{profileData.personal.physicalStatus}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Personality Type:</span>
                    <span className="font-medium">{profileData.personal.personalityType}</span>
                  </div>
                  <div>
                    <span className="text-gray-600">Languages Known:</span>
                    <div className="mt-1">
                      {profileData.personal.knownLanguages.map((lang, index) => (
                        <Badge key={index} variant="outline" className="mr-1">
                          {lang}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="religious" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Religious & Cultural Details</CardTitle>
              <CardDescription>Your religious beliefs and cultural preferences</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Religion:</span>
                    <span className="font-medium">{profileData.religious.religion}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Caste:</span>
                    <span className="font-medium">{profileData.religious.caste}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Sub Caste:</span>
                    <span className="font-medium">{profileData.religious.subCaste}</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Manglik:</span>
                    <span className="font-medium">{profileData.religious.manglik}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Diet:</span>
                    <span className="font-medium">{profileData.religious.dietaryHabits}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Smoking:</span>
                    <span className="font-medium">{profileData.religious.smoking}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Drinking:</span>
                    <span className="font-medium">{profileData.religious.drinking}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="education" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <GraduationCap className="w-5 h-5" />
                <span>Educational Background</span>
              </CardTitle>
              <CardDescription>Your academic qualifications and achievements</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Education Level:</span>
                    <span className="font-medium">{profileData.education.level}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Degree:</span>
                    <span className="font-medium">{profileData.education.degree}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">College:</span>
                    <span className="font-medium">{profileData.education.college}</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Specialization:</span>
                    <span className="font-medium">{profileData.education.specialization}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Graduation Year:</span>
                    <span className="font-medium">{profileData.education.graduationYear}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Grades:</span>
                    <span className="font-medium">{profileData.education.grades}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="professional" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Briefcase className="w-5 h-5" />
                <span>Professional Information</span>
              </CardTitle>
              <CardDescription>Your career and work details</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Occupation:</span>
                    <span className="font-medium">{profileData.professional.occupation}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Company:</span>
                    <span className="font-medium">{profileData.professional.company}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Designation:</span>
                    <span className="font-medium">{profileData.professional.designation}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Industry:</span>
                    <span className="font-medium">{profileData.professional.industry}</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Experience:</span>
                    <span className="font-medium">{profileData.professional.experience}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Annual Income:</span>
                    <span className="font-medium">{profileData.professional.income}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Work Location:</span>
                    <span className="font-medium">{profileData.professional.workLocation}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="family" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Users className="w-5 h-5" />
                <span>Family Details</span>
              </CardTitle>
              <CardDescription>Information about your family background</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Family Type:</span>
                    <span className="font-medium">{profileData.family.type}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Family Values:</span>
                    <span className="font-medium">{profileData.family.values}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Father's Name:</span>
                    <span className="font-medium">{profileData.family.fatherName}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Father's Occupation:</span>
                    <span className="font-medium">{profileData.family.fatherOccupation}</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Mother's Name:</span>
                    <span className="font-medium">{profileData.family.motherName}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Mother's Occupation:</span>
                    <span className="font-medium">{profileData.family.motherOccupation}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Siblings:</span>
                    <span className="font-medium">{profileData.family.siblings}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Family Income:</span>
                    <span className="font-medium">{profileData.family.familyIncome}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="preferences" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Partner Preferences</CardTitle>
              <CardDescription>Your expectations and requirements for life partner</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Age Range:</span>
                    <span className="font-medium">{profileData.preferences.ageRange}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Height Range:</span>
                    <span className="font-medium">{profileData.preferences.heightRange}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Education:</span>
                    <span className="font-medium">{profileData.preferences.education}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Occupation:</span>
                    <span className="font-medium">{profileData.preferences.occupation}</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Location:</span>
                    <span className="font-medium">{profileData.preferences.location}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Religion:</span>
                    <span className="font-medium">{profileData.preferences.religion}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Caste:</span>
                    <span className="font-medium">{profileData.preferences.caste}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Income:</span>
                    <span className="font-medium">{profileData.preferences.income}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="settings" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Settings className="w-5 h-5" />
                <span>Account Settings</span>
              </CardTitle>
              <CardDescription>Manage your account preferences and privacy settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="font-medium">Profile Visibility</h4>
                  <p className="text-sm text-gray-600">Control who can see your profile</p>
                </div>
                <Button variant="outline">Manage</Button>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="font-medium">Contact Information</h4>
                  <p className="text-sm text-gray-600">Update your contact details</p>
                </div>
                <Button variant="outline">Edit</Button>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="font-medium">Notification Preferences</h4>
                  <p className="text-sm text-gray-600">Choose what notifications you receive</p>
                </div>
                <Button variant="outline">Configure</Button>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="font-medium">Account Security</h4>
                  <p className="text-sm text-gray-600">Change password and security settings</p>
                </div>
                <Button variant="outline">Update</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ProfileManagement;
