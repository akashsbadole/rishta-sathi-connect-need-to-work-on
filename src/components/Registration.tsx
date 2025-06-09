
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
import { User, Heart, GraduationCap, Briefcase, Users, Home, Camera, CheckCircle } from "lucide-react";

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
        
      // Continue with other steps...
      default:
        return (
          <div className="text-center space-y-4">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto" />
            <h3 className="text-2xl font-semibold">Registration Complete!</h3>
            <p className="text-gray-600">Your profile has been created successfully.</p>
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
