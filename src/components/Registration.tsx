import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";
import { User, Heart, GraduationCap, Briefcase, Users, Home, Camera, CheckCircle, MapPin, Star } from "lucide-react";

const Registration = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Basic Info
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    gender: "",
    maritalStatus: "",
    profileFor: "",
    
    // Personal Details
    height: "",
    weight: "",
    complexion: "",
    bodyType: "",
    physicalStatus: "",
    diet: "",
    drinking: "",
    smoking: "",
    
    // Location
    country: "",
    state: "",
    city: "",
    pincode: "",
    residingIn: "",
    growingUp: "",
    
    // Religion & Caste
    religion: "",
    caste: "",
    subCaste: "",
    gothra: "",
    star: "",
    rashi: "",
    manglik: "",
    
    // Education & Career
    education: "",
    educationDetail: "",
    occupation: "",
    occupationDetail: "",
    employedIn: "",
    annualIncome: "",
    workLocation: "",
    
    // Family
    familyType: "",
    familyStatus: "",
    familyValues: "",
    fatherOccupation: "",
    motherOccupation: "",
    brothers: "",
    sisters: "",
    
    // Partner Preferences
    partnerAgeFrom: "",
    partnerAgeTo: "",
    partnerHeightFrom: "",
    partnerHeightTo: "",
    partnerMaritalStatus: "",
    partnerReligion: "",
    partnerCaste: "",
    partnerEducation: "",
    partnerOccupation: "",
    partnerIncomeFrom: "",
    partnerLocation: "",
    
    // About
    aboutMe: "",
    lookingFor: "",
    hobbies: "",
    interests: ""
  });

  const totalSteps = 7;
  const progress = (step / totalSteps) * 100;

  const nextStep = () => {
    if (step < totalSteps) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const updateFormData = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <User className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold">Basic Information</h3>
              <p className="text-gray-600">Let's start with your basic details</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="profileFor">Profile for</Label>
                <Select onValueChange={(value) => updateFormData("profileFor", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="self">Myself</SelectItem>
                    <SelectItem value="son">My Son</SelectItem>
                    <SelectItem value="daughter">My Daughter</SelectItem>
                    <SelectItem value="brother">My Brother</SelectItem>
                    <SelectItem value="sister">My Sister</SelectItem>
                    <SelectItem value="relative">Relative</SelectItem>
                    <SelectItem value="friend">Friend</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="gender">Gender</Label>
                <RadioGroup 
                  value={formData.gender} 
                  onValueChange={(value) => updateFormData("gender", value)}
                  className="flex space-x-4 mt-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="male" id="male" />
                    <Label htmlFor="male">Male</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="female" id="female" />
                    <Label htmlFor="female">Female</Label>
                  </div>
                </RadioGroup>
              </div>
              
              <div>
                <Label htmlFor="firstName">First Name</Label>
                <Input 
                  id="firstName"
                  value={formData.firstName}
                  onChange={(e) => updateFormData("firstName", e.target.value)}
                  placeholder="Enter first name"
                />
              </div>
              
              <div>
                <Label htmlFor="lastName">Last Name</Label>
                <Input 
                  id="lastName"
                  value={formData.lastName}
                  onChange={(e) => updateFormData("lastName", e.target.value)}
                  placeholder="Enter last name"
                />
              </div>
              
              <div>
                <Label htmlFor="email">Email</Label>
                <Input 
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => updateFormData("email", e.target.value)}
                  placeholder="Enter email address"
                />
              </div>
              
              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input 
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => updateFormData("phone", e.target.value)}
                  placeholder="Enter phone number"
                />
              </div>
              
              <div>
                <Label htmlFor="dateOfBirth">Date of Birth</Label>
                <Input 
                  id="dateOfBirth"
                  type="date"
                  value={formData.dateOfBirth}
                  onChange={(e) => updateFormData("dateOfBirth", e.target.value)}
                />
              </div>
              
              <div>
                <Label htmlFor="maritalStatus">Marital Status</Label>
                <Select onValueChange={(value) => updateFormData("maritalStatus", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="never-married">Never Married</SelectItem>
                    <SelectItem value="divorced">Divorced</SelectItem>
                    <SelectItem value="widowed">Widowed</SelectItem>
                    <SelectItem value="separated">Separated</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        );
        
      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <Heart className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold">Personal Details</h3>
              <p className="text-gray-600">Tell us about your physical attributes and lifestyle</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="height">Height</Label>
                <Select onValueChange={(value) => updateFormData("height", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select height" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="4ft-0in">4ft 0in</SelectItem>
                    <SelectItem value="4ft-6in">4ft 6in</SelectItem>
                    <SelectItem value="5ft-0in">5ft 0in</SelectItem>
                    <SelectItem value="5ft-6in">5ft 6in</SelectItem>
                    <SelectItem value="6ft-0in">6ft 0in</SelectItem>
                    <SelectItem value="6ft-6in">6ft 6in</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="weight">Weight</Label>
                <Select onValueChange={(value) => updateFormData("weight", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select weight" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="40-50kg">40-50 kg</SelectItem>
                    <SelectItem value="50-60kg">50-60 kg</SelectItem>
                    <SelectItem value="60-70kg">60-70 kg</SelectItem>
                    <SelectItem value="70-80kg">70-80 kg</SelectItem>
                    <SelectItem value="80-90kg">80-90 kg</SelectItem>
                    <SelectItem value="90kg+">90+ kg</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="complexion">Complexion</Label>
                <Select onValueChange={(value) => updateFormData("complexion", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select complexion" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="very-fair">Very Fair</SelectItem>
                    <SelectItem value="fair">Fair</SelectItem>
                    <SelectItem value="wheatish">Wheatish</SelectItem>
                    <SelectItem value="wheatish-brown">Wheatish Brown</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="bodyType">Body Type</Label>
                <Select onValueChange={(value) => updateFormData("bodyType", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select body type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="slim">Slim</SelectItem>
                    <SelectItem value="average">Average</SelectItem>
                    <SelectItem value="athletic">Athletic</SelectItem>
                    <SelectItem value="heavy">Heavy</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="diet">Diet</Label>
                <Select onValueChange={(value) => updateFormData("diet", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select diet preference" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="vegetarian">Vegetarian</SelectItem>
                    <SelectItem value="non-vegetarian">Non-Vegetarian</SelectItem>
                    <SelectItem value="eggetarian">Eggetarian</SelectItem>
                    <SelectItem value="vegan">Vegan</SelectItem>
                    <SelectItem value="jain">Jain</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="drinking">Drinking</Label>
                <Select onValueChange={(value) => updateFormData("drinking", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select drinking habit" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="never">Never</SelectItem>
                    <SelectItem value="occasionally">Occasionally</SelectItem>
                    <SelectItem value="regularly">Regularly</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="smoking">Smoking</Label>
                <Select onValueChange={(value) => updateFormData("smoking", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select smoking habit" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="never">Never</SelectItem>
                    <SelectItem value="occasionally">Occasionally</SelectItem>
                    <SelectItem value="regularly">Regularly</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="physicalStatus">Physical Status</Label>
                <Select onValueChange={(value) => updateFormData("physicalStatus", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select physical status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="normal">Normal</SelectItem>
                    <SelectItem value="physically-challenged">Physically Challenged</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <MapPin className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold">Location Details</h3>
              <p className="text-gray-600">Where are you located?</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="country">Country</Label>
                <Select onValueChange={(value) => updateFormData("country", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select country" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="india">India</SelectItem>
                    <SelectItem value="usa">USA</SelectItem>
                    <SelectItem value="uk">UK</SelectItem>
                    <SelectItem value="canada">Canada</SelectItem>
                    <SelectItem value="australia">Australia</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="state">State</Label>
                <Select onValueChange={(value) => updateFormData("state", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select state" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="maharashtra">Maharashtra</SelectItem>
                    <SelectItem value="delhi">Delhi</SelectItem>
                    <SelectItem value="gujarat">Gujarat</SelectItem>
                    <SelectItem value="karnataka">Karnataka</SelectItem>
                    <SelectItem value="tamil-nadu">Tamil Nadu</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="city">City</Label>
                <Input 
                  id="city"
                  value={formData.city}
                  onChange={(e) => updateFormData("city", e.target.value)}
                  placeholder="Enter your city"
                />
              </div>
              
              <div>
                <Label htmlFor="pincode">Pin Code</Label>
                <Input 
                  id="pincode"
                  value={formData.pincode}
                  onChange={(e) => updateFormData("pincode", e.target.value)}
                  placeholder="Enter pin code"
                />
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <Star className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold">Religious Details</h3>
              <p className="text-gray-600">Your religious and cultural background</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="religion">Religion</Label>
                <Select onValueChange={(value) => updateFormData("religion", value)}>
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
                  id="caste"
                  value={formData.caste}
                  onChange={(e) => updateFormData("caste", e.target.value)}
                  placeholder="Enter caste"
                />
              </div>
              
              <div>
                <Label htmlFor="subCaste">Sub Caste</Label>
                <Input 
                  id="subCaste"
                  value={formData.subCaste}
                  onChange={(e) => updateFormData("subCaste", e.target.value)}
                  placeholder="Enter sub caste"
                />
              </div>
              
              <div>
                <Label htmlFor="manglik">Manglik Status</Label>
                <Select onValueChange={(value) => updateFormData("manglik", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select manglik status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="yes">Yes</SelectItem>
                    <SelectItem value="no">No</SelectItem>
                    <SelectItem value="anshik">Anshik</SelectItem>
                    <SelectItem value="dont-know">Don't Know</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <GraduationCap className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold">Education & Career</h3>
              <p className="text-gray-600">Your educational and professional background</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="education">Highest Education</Label>
                <Select onValueChange={(value) => updateFormData("education", value)}>
                  <SelectTrigger>
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
                <Label htmlFor="occupation">Occupation</Label>
                <Select onValueChange={(value) => updateFormData("occupation", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select occupation" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="software-engineer">Software Engineer</SelectItem>
                    <SelectItem value="doctor">Doctor</SelectItem>
                    <SelectItem value="teacher">Teacher</SelectItem>
                    <SelectItem value="business">Business</SelectItem>
                    <SelectItem value="government-job">Government Job</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="annualIncome">Annual Income</Label>
                <Select onValueChange={(value) => updateFormData("annualIncome", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select income range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="2-4-lakhs">2-4 Lakhs</SelectItem>
                    <SelectItem value="4-6-lakhs">4-6 Lakhs</SelectItem>
                    <SelectItem value="6-8-lakhs">6-8 Lakhs</SelectItem>
                    <SelectItem value="8-10-lakhs">8-10 Lakhs</SelectItem>
                    <SelectItem value="10-lakhs+">10+ Lakhs</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="workLocation">Work Location</Label>
                <Input 
                  id="workLocation"
                  value={formData.workLocation}
                  onChange={(e) => updateFormData("workLocation", e.target.value)}
                  placeholder="Enter work location"
                />
              </div>
            </div>
          </div>
        );

      case 6:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <Users className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold">Family Details</h3>
              <p className="text-gray-600">Tell us about your family</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="familyType">Family Type</Label>
                <Select onValueChange={(value) => updateFormData("familyType", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select family type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="nuclear">Nuclear</SelectItem>
                    <SelectItem value="joint">Joint</SelectItem>
                    <SelectItem value="others">Others</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="familyValues">Family Values</Label>
                <Select onValueChange={(value) => updateFormData("familyValues", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select family values" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="orthodox">Orthodox</SelectItem>
                    <SelectItem value="traditional">Traditional</SelectItem>
                    <SelectItem value="moderate">Moderate</SelectItem>
                    <SelectItem value="liberal">Liberal</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="fatherOccupation">Father's Occupation</Label>
                <Input 
                  id="fatherOccupation"
                  value={formData.fatherOccupation}
                  onChange={(e) => updateFormData("fatherOccupation", e.target.value)}
                  placeholder="Father's occupation"
                />
              </div>
              
              <div>
                <Label htmlFor="motherOccupation">Mother's Occupation</Label>
                <Input 
                  id="motherOccupation"
                  value={formData.motherOccupation}
                  onChange={(e) => updateFormData("motherOccupation", e.target.value)}
                  placeholder="Mother's occupation"
                />
              </div>
            </div>
          </div>
        );

      case 7:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <Heart className="w-12 h-12 text-pink-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold">About You</h3>
              <p className="text-gray-600">Tell us more about yourself</p>
            </div>
            
            <div className="space-y-4">
              <div>
                <Label htmlFor="aboutMe">About Me</Label>
                <Textarea 
                  id="aboutMe"
                  value={formData.aboutMe}
                  onChange={(e) => updateFormData("aboutMe", e.target.value)}
                  placeholder="Write a brief description about yourself..."
                  rows={4}
                />
              </div>
              
              <div>
                <Label htmlFor="lookingFor">What I'm Looking For</Label>
                <Textarea 
                  id="lookingFor"
                  value={formData.lookingFor}
                  onChange={(e) => updateFormData("lookingFor", e.target.value)}
                  placeholder="Describe what you're looking for in a partner..."
                  rows={4}
                />
              </div>
              
              <div>
                <Label htmlFor="hobbies">Hobbies & Interests</Label>
                <Input 
                  id="hobbies"
                  value={formData.hobbies}
                  onChange={(e) => updateFormData("hobbies", e.target.value)}
                  placeholder="e.g., Reading, Traveling, Music, Sports..."
                />
              </div>
            </div>
          </div>
        );
        
      default:
        return (
          <div className="text-center space-y-4">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto" />
            <h3 className="text-2xl font-semibold">Registration Complete!</h3>
            <p className="text-gray-600">Your profile has been created successfully.</p>
            <Button 
              onClick={() => window.location.href = "/dashboard"}
              className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700"
            >
              Go to Dashboard
            </Button>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-red-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <Card className="shadow-2xl">
          <CardHeader className="text-center bg-gradient-to-r from-purple-600 via-blue-600 to-red-600 text-white rounded-t-lg">
            <CardTitle className="text-2xl">Create Your Profile</CardTitle>
            <CardDescription className="text-purple-100">
              Step {step} of {totalSteps}
            </CardDescription>
            <Progress value={progress} className="mt-4" />
          </CardHeader>
          
          <CardContent className="p-8">
            {renderStepContent()}
            
            <div className="flex justify-between mt-8">
              <Button 
                variant="outline" 
                onClick={prevStep}
                disabled={step === 1}
                className="border-purple-200 text-purple-600 hover:bg-purple-50"
              >
                Previous
              </Button>
              
              {step < totalSteps ? (
                <Button 
                  onClick={nextStep}
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                >
                  Next Step
                </Button>
              ) : (
                <Button 
                  className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700"
                >
                  Complete Registration
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Registration;
