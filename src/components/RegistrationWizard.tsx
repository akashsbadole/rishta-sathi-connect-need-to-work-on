
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { 
  User, MapPin, Heart, GraduationCap, Briefcase, 
  Users, Info, ArrowLeft, ArrowRight, Check 
} from "lucide-react";

const RegistrationWizard = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Basic Info
    email: "",
    phone: "",
    password: "",
    profileFor: "self",
    
    // Personal Details
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    timeOfBirth: "",
    placeOfBirth: "",
    gender: "",
    maritalStatus: "never_married",
    heightFeet: "",
    heightInches: "",
    weight: "",
    bodyType: "",
    complexion: "",
    hairType: "",
    hairColor: "",
    eyeColor: "",
    bloodGroup: "",
    physicalStatus: "normal",
    motherTongue: "",
    knownLanguages: [],
    aboutMe: "",
    hobbies: [],
    personalityType: "",
    
    // Location Details
    currentAddress: "",
    currentCity: "",
    currentState: "",
    currentPincode: "",
    permanentAddress: "",
    permanentCity: "",
    permanentState: "",
    permanentPincode: "",
    willingToRelocate: false,
    
    // Religious Details
    religion: "",
    caste: "",
    subCaste: "",
    manglikStatus: "",
    dietaryHabits: "",
    smokingHabits: "never",
    drinkingHabits: "never",
    
    // Education Details
    educationLevel: "",
    degreeName: "",
    collegeUniversity: "",
    specialization: "",
    graduationYear: "",
    gradesPercentage: "",
    additionalQualifications: [],
    
    // Professional Details
    occupation: "",
    companyName: "",
    jobTitle: "",
    industry: "",
    experienceYears: "",
    annualIncome: "",
    workLocation: "",
    isBusinessOwner: false,
    
    // Family Details
    familyType: "",
    familyValues: "",
    fatherName: "",
    fatherOccupation: "",
    fatherIncome: "",
    motherName: "",
    motherOccupation: "",
    motherIncome: "",
    brothersCount: 0,
    brothersMarried: 0,
    sistersCount: 0,
    sistersMarried: 0,
    aboutFamily: "",
    
    // Partner Preferences
    minAge: "",
    maxAge: "",
    minHeight: "",
    maxHeight: "",
    preferredEducation: [],
    preferredOccupations: [],
    preferredLocations: [],
    preferredReligions: [],
    preferredCastes: [],
    specialRequirements: ""
  });

  const steps = [
    { id: 1, title: "Basic Info", icon: User },
    { id: 2, title: "Personal Details", icon: Heart },
    { id: 3, title: "Location", icon: MapPin },
    { id: 4, title: "Religion & Culture", icon: Heart },
    { id: 5, title: "Education", icon: GraduationCap },
    { id: 6, title: "Profession", icon: Briefcase },
    { id: 7, title: "Family", icon: Users },
    { id: 8, title: "Partner Preferences", icon: Info }
  ];

  const updateFormData = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => updateFormData("email", e.target.value)}
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => updateFormData("phone", e.target.value)}
                  placeholder="Enter your phone number"
                />
              </div>
            </div>
            
            <div>
              <Label htmlFor="password">Password *</Label>
              <Input
                id="password"
                type="password"
                value={formData.password}
                onChange={(e) => updateFormData("password", e.target.value)}
                placeholder="Create a strong password"
              />
            </div>
            
            <div>
              <Label htmlFor="profileFor">Profile Created For *</Label>
              <Select value={formData.profileFor} onValueChange={(value) => updateFormData("profileFor", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select profile type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="self">Myself</SelectItem>
                  <SelectItem value="son">My Son</SelectItem>
                  <SelectItem value="daughter">My Daughter</SelectItem>
                  <SelectItem value="brother">My Brother</SelectItem>
                  <SelectItem value="sister">My Sister</SelectItem>
                  <SelectItem value="friend">My Friend</SelectItem>
                  <SelectItem value="relative">My Relative</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="firstName">First Name *</Label>
                <Input
                  id="firstName"
                  value={formData.firstName}
                  onChange={(e) => updateFormData("firstName", e.target.value)}
                  placeholder="Enter first name"
                />
              </div>
              <div>
                <Label htmlFor="lastName">Last Name *</Label>
                <Input
                  id="lastName"
                  value={formData.lastName}
                  onChange={(e) => updateFormData("lastName", e.target.value)}
                  placeholder="Enter last name"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <Label htmlFor="dateOfBirth">Date of Birth *</Label>
                <Input
                  id="dateOfBirth"
                  type="date"
                  value={formData.dateOfBirth}
                  onChange={(e) => updateFormData("dateOfBirth", e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="timeOfBirth">Time of Birth</Label>
                <Input
                  id="timeOfBirth"
                  type="time"
                  value={formData.timeOfBirth}
                  onChange={(e) => updateFormData("timeOfBirth", e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="placeOfBirth">Place of Birth</Label>
                <Input
                  id="placeOfBirth"
                  value={formData.placeOfBirth}
                  onChange={(e) => updateFormData("placeOfBirth", e.target.value)}
                  placeholder="City, State"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="gender">Gender *</Label>
                <Select value={formData.gender} onValueChange={(value) => updateFormData("gender", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select gender" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="maritalStatus">Marital Status *</Label>
                <Select value={formData.maritalStatus} onValueChange={(value) => updateFormData("maritalStatus", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select marital status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="never_married">Never Married</SelectItem>
                    <SelectItem value="divorced">Divorced</SelectItem>
                    <SelectItem value="widowed">Widowed</SelectItem>
                    <SelectItem value="separated">Separated</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid md:grid-cols-4 gap-4">
              <div>
                <Label htmlFor="heightFeet">Height (Feet) *</Label>
                <Select value={formData.heightFeet} onValueChange={(value) => updateFormData("heightFeet", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Feet" />
                  </SelectTrigger>
                  <SelectContent>
                    {[4, 5, 6, 7].map(feet => (
                      <SelectItem key={feet} value={feet.toString()}>{feet} ft</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="heightInches">Height (Inches)</Label>
                <Select value={formData.heightInches} onValueChange={(value) => updateFormData("heightInches", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Inches" />
                  </SelectTrigger>
                  <SelectContent>
                    {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(inches => (
                      <SelectItem key={inches} value={inches.toString()}>{inches} in</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="weight">Weight (kg)</Label>
                <Input
                  id="weight"
                  type="number"
                  value={formData.weight}
                  onChange={(e) => updateFormData("weight", e.target.value)}
                  placeholder="Weight in kg"
                />
              </div>
              <div>
                <Label htmlFor="bloodGroup">Blood Group</Label>
                <Select value={formData.bloodGroup} onValueChange={(value) => updateFormData("bloodGroup", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Blood Group" />
                  </SelectTrigger>
                  <SelectContent>
                    {["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"].map(bg => (
                      <SelectItem key={bg} value={bg}>{bg}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <Label htmlFor="complexion">Complexion</Label>
                <Select value={formData.complexion} onValueChange={(value) => updateFormData("complexion", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select complexion" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="very_fair">Very Fair</SelectItem>
                    <SelectItem value="fair">Fair</SelectItem>
                    <SelectItem value="wheatish">Wheatish</SelectItem>
                    <SelectItem value="wheatish_brown">Wheatish Brown</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="bodyType">Body Type</Label>
                <Select value={formData.bodyType} onValueChange={(value) => updateFormData("bodyType", value)}>
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
                <Label htmlFor="motherTongue">Mother Tongue *</Label>
                <Select value={formData.motherTongue} onValueChange={(value) => updateFormData("motherTongue", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select mother tongue" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="hindi">Hindi</SelectItem>
                    <SelectItem value="english">English</SelectItem>
                    <SelectItem value="bengali">Bengali</SelectItem>
                    <SelectItem value="telugu">Telugu</SelectItem>
                    <SelectItem value="marathi">Marathi</SelectItem>
                    <SelectItem value="tamil">Tamil</SelectItem>
                    <SelectItem value="gujarati">Gujarati</SelectItem>
                    <SelectItem value="urdu">Urdu</SelectItem>
                    <SelectItem value="kannada">Kannada</SelectItem>
                    <SelectItem value="odia">Odia</SelectItem>
                    <SelectItem value="malayalam">Malayalam</SelectItem>
                    <SelectItem value="punjabi">Punjabi</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

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
          </div>
        );

      case 3:
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Current Address</h3>
            <div>
              <Label htmlFor="currentAddress">Address *</Label>
              <Textarea
                id="currentAddress"
                value={formData.currentAddress}
                onChange={(e) => updateFormData("currentAddress", e.target.value)}
                placeholder="Enter your current address"
                rows={3}
              />
            </div>
            
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <Label htmlFor="currentCity">City *</Label>
                <Input
                  id="currentCity"
                  value={formData.currentCity}
                  onChange={(e) => updateFormData("currentCity", e.target.value)}
                  placeholder="Enter city"
                />
              </div>
              <div>
                <Label htmlFor="currentState">State *</Label>
                <Input
                  id="currentState"
                  value={formData.currentState}
                  onChange={(e) => updateFormData("currentState", e.target.value)}
                  placeholder="Enter state"
                />
              </div>
              <div>
                <Label htmlFor="currentPincode">Pincode</Label>
                <Input
                  id="currentPincode"
                  value={formData.currentPincode}
                  onChange={(e) => updateFormData("currentPincode", e.target.value)}
                  placeholder="Enter pincode"
                />
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox
                id="sameAddress"
                onCheckedChange={(checked) => {
                  if (checked) {
                    updateFormData("permanentAddress", formData.currentAddress);
                    updateFormData("permanentCity", formData.currentCity);
                    updateFormData("permanentState", formData.currentState);
                    updateFormData("permanentPincode", formData.currentPincode);
                  }
                }}
              />
              <Label htmlFor="sameAddress">Permanent address is same as current address</Label>
            </div>

            <h3 className="text-lg font-semibold">Permanent Address</h3>
            <div>
              <Label htmlFor="permanentAddress">Address</Label>
              <Textarea
                id="permanentAddress"
                value={formData.permanentAddress}
                onChange={(e) => updateFormData("permanentAddress", e.target.value)}
                placeholder="Enter your permanent address"
                rows={3}
              />
            </div>
            
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <Label htmlFor="permanentCity">City</Label>
                <Input
                  id="permanentCity"
                  value={formData.permanentCity}
                  onChange={(e) => updateFormData("permanentCity", e.target.value)}
                  placeholder="Enter city"
                />
              </div>
              <div>
                <Label htmlFor="permanentState">State</Label>
                <Input
                  id="permanentState"
                  value={formData.permanentState}
                  onChange={(e) => updateFormData("permanentState", e.target.value)}
                  placeholder="Enter state"
                />
              </div>
              <div>
                <Label htmlFor="permanentPincode">Pincode</Label>
                <Input
                  id="permanentPincode"
                  value={formData.permanentPincode}
                  onChange={(e) => updateFormData("permanentPincode", e.target.value)}
                  placeholder="Enter pincode"
                />
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox
                id="willingToRelocate"
                checked={formData.willingToRelocate}
                onCheckedChange={(checked) => updateFormData("willingToRelocate", checked)}
              />
              <Label htmlFor="willingToRelocate">Willing to relocate after marriage</Label>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="religion">Religion *</Label>
                <Select value={formData.religion} onValueChange={(value) => updateFormData("religion", value)}>
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
                    <SelectItem value="parsi">Parsi</SelectItem>
                    <SelectItem value="jewish">Jewish</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
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
            </div>

            <div className="grid md:grid-cols-2 gap-4">
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
                <Label htmlFor="manglikStatus">Manglik Status</Label>
                <Select value={formData.manglikStatus} onValueChange={(value) => updateFormData("manglikStatus", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select manglik status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="yes">Manglik</SelectItem>
                    <SelectItem value="no">Non-Manglik</SelectItem>
                    <SelectItem value="dont_know">Don't Know</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <Label htmlFor="dietaryHabits">Dietary Habits</Label>
                <Select value={formData.dietaryHabits} onValueChange={(value) => updateFormData("dietaryHabits", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select dietary habits" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="vegetarian">Vegetarian</SelectItem>
                    <SelectItem value="non_vegetarian">Non-Vegetarian</SelectItem>
                    <SelectItem value="eggetarian">Eggetarian</SelectItem>
                    <SelectItem value="vegan">Vegan</SelectItem>
                    <SelectItem value="jain_vegetarian">Jain Vegetarian</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="smokingHabits">Smoking Habits</Label>
                <Select value={formData.smokingHabits} onValueChange={(value) => updateFormData("smokingHabits", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select smoking habits" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="never">Never</SelectItem>
                    <SelectItem value="occasionally">Occasionally</SelectItem>
                    <SelectItem value="regularly">Regularly</SelectItem>
                    <SelectItem value="planning_to_quit">Planning to Quit</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="drinkingHabits">Drinking Habits</Label>
                <Select value={formData.drinkingHabits} onValueChange={(value) => updateFormData("drinkingHabits", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select drinking habits" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="never">Never</SelectItem>
                    <SelectItem value="occasionally">Occasionally</SelectItem>
                    <SelectItem value="socially">Socially</SelectItem>
                    <SelectItem value="regularly">Regularly</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="educationLevel">Education Level *</Label>
                <Select value={formData.educationLevel} onValueChange={(value) => updateFormData("educationLevel", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select education level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="high_school">High School</SelectItem>
                    <SelectItem value="diploma">Diploma</SelectItem>
                    <SelectItem value="bachelors">Bachelor's Degree</SelectItem>
                    <SelectItem value="masters">Master's Degree</SelectItem>
                    <SelectItem value="phd">PhD</SelectItem>
                    <SelectItem value="professional">Professional Degree</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="degreeName">Degree Name</Label>
                <Input
                  id="degreeName"
                  value={formData.degreeName}
                  onChange={(e) => updateFormData("degreeName", e.target.value)}
                  placeholder="e.g., B.Tech, MBA, MBBS"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="collegeUniversity">College/University</Label>
                <Input
                  id="collegeUniversity"
                  value={formData.collegeUniversity}
                  onChange={(e) => updateFormData("collegeUniversity", e.target.value)}
                  placeholder="Enter college/university name"
                />
              </div>
              <div>
                <Label htmlFor="specialization">Specialization</Label>
                <Input
                  id="specialization"
                  value={formData.specialization}
                  onChange={(e) => updateFormData("specialization", e.target.value)}
                  placeholder="e.g., Computer Science, Finance"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="graduationYear">Graduation Year</Label>
                <Input
                  id="graduationYear"
                  type="number"
                  value={formData.graduationYear}
                  onChange={(e) => updateFormData("graduationYear", e.target.value)}
                  placeholder="e.g., 2020"
                />
              </div>
              <div>
                <Label htmlFor="gradesPercentage">Grades/Percentage</Label>
                <Input
                  id="gradesPercentage"
                  value={formData.gradesPercentage}
                  onChange={(e) => updateFormData("gradesPercentage", e.target.value)}
                  placeholder="e.g., 85%, 8.5 CGPA"
                />
              </div>
            </div>
          </div>
        );

      case 6:
        return (
          <div className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="occupation">Occupation *</Label>
                <Input
                  id="occupation"
                  value={formData.occupation}
                  onChange={(e) => updateFormData("occupation", e.target.value)}
                  placeholder="e.g., Software Engineer, Doctor"
                />
              </div>
              <div>
                <Label htmlFor="companyName">Company Name</Label>
                <Input
                  id="companyName"
                  value={formData.companyName}
                  onChange={(e) => updateFormData("companyName", e.target.value)}
                  placeholder="Enter company name"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="jobTitle">Job Title</Label>
                <Input
                  id="jobTitle"
                  value={formData.jobTitle}
                  onChange={(e) => updateFormData("jobTitle", e.target.value)}
                  placeholder="e.g., Senior Software Developer"
                />
              </div>
              <div>
                <Label htmlFor="industry">Industry</Label>
                <Select value={formData.industry} onValueChange={(value) => updateFormData("industry", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select industry" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="it">Information Technology</SelectItem>
                    <SelectItem value="healthcare">Healthcare</SelectItem>
                    <SelectItem value="finance">Finance</SelectItem>
                    <SelectItem value="education">Education</SelectItem>
                    <SelectItem value="manufacturing">Manufacturing</SelectItem>
                    <SelectItem value="retail">Retail</SelectItem>
                    <SelectItem value="government">Government</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <Label htmlFor="experienceYears">Experience (Years)</Label>
                <Input
                  id="experienceYears"
                  type="number"
                  value={formData.experienceYears}
                  onChange={(e) => updateFormData("experienceYears", e.target.value)}
                  placeholder="e.g., 5"
                />
              </div>
              <div>
                <Label htmlFor="annualIncome">Annual Income (₹)</Label>
                <Input
                  id="annualIncome"
                  type="number"
                  value={formData.annualIncome}
                  onChange={(e) => updateFormData("annualIncome", e.target.value)}
                  placeholder="e.g., 1200000"
                />
              </div>
              <div>
                <Label htmlFor="workLocation">Work Location</Label>
                <Input
                  id="workLocation"
                  value={formData.workLocation}
                  onChange={(e) => updateFormData("workLocation", e.target.value)}
                  placeholder="e.g., Mumbai, Bangalore"
                />
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox
                id="isBusinessOwner"
                checked={formData.isBusinessOwner}
                onCheckedChange={(checked) => updateFormData("isBusinessOwner", checked)}
              />
              <Label htmlFor="isBusinessOwner">I own a business</Label>
            </div>
          </div>
        );

      case 7:
        return (
          <div className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="familyType">Family Type</Label>
                <Select value={formData.familyType} onValueChange={(value) => updateFormData("familyType", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select family type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="nuclear">Nuclear Family</SelectItem>
                    <SelectItem value="joint">Joint Family</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="familyValues">Family Values</Label>
                <Select value={formData.familyValues} onValueChange={(value) => updateFormData("familyValues", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select family values" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="traditional">Traditional</SelectItem>
                    <SelectItem value="moderate">Moderate</SelectItem>
                    <SelectItem value="liberal">Liberal</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <h3 className="text-lg font-semibold">Father's Details</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <Label htmlFor="fatherName">Father's Name</Label>
                <Input
                  id="fatherName"
                  value={formData.fatherName}
                  onChange={(e) => updateFormData("fatherName", e.target.value)}
                  placeholder="Enter father's name"
                />
              </div>
              <div>
                <Label htmlFor="fatherOccupation">Father's Occupation</Label>
                <Input
                  id="fatherOccupation"
                  value={formData.fatherOccupation}
                  onChange={(e) => updateFormData("fatherOccupation", e.target.value)}
                  placeholder="Enter father's occupation"
                />
              </div>
              <div>
                <Label htmlFor="fatherIncome">Father's Income Range</Label>
                <Select value={formData.fatherIncome} onValueChange={(value) => updateFormData("fatherIncome", value)}>
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
            </div>

            <h3 className="text-lg font-semibold">Mother's Details</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <Label htmlFor="motherName">Mother's Name</Label>
                <Input
                  id="motherName"
                  value={formData.motherName}
                  onChange={(e) => updateFormData("motherName", e.target.value)}
                  placeholder="Enter mother's name"
                />
              </div>
              <div>
                <Label htmlFor="motherOccupation">Mother's Occupation</Label>
                <Input
                  id="motherOccupation"
                  value={formData.motherOccupation}
                  onChange={(e) => updateFormData("motherOccupation", e.target.value)}
                  placeholder="Enter mother's occupation"
                />
              </div>
              <div>
                <Label htmlFor="motherIncome">Mother's Income Range</Label>
                <Select value={formData.motherIncome} onValueChange={(value) => updateFormData("motherIncome", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select income range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="homemaker">Homemaker</SelectItem>
                    <SelectItem value="below_5">Below ₹5 Lakhs</SelectItem>
                    <SelectItem value="5_10">₹5-10 Lakhs</SelectItem>
                    <SelectItem value="10_20">₹10-20 Lakhs</SelectItem>
                    <SelectItem value="above_20">Above ₹20 Lakhs</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <h3 className="text-lg font-semibold">Siblings</h3>
            <div className="grid md:grid-cols-4 gap-4">
              <div>
                <Label htmlFor="brothersCount">Number of Brothers</Label>
                <Input
                  id="brothersCount"
                  type="number"
                  value={formData.brothersCount}
                  onChange={(e) => updateFormData("brothersCount", parseInt(e.target.value) || 0)}
                  placeholder="0"
                />
              </div>
              <div>
                <Label htmlFor="brothersMarried">Brothers Married</Label>
                <Input
                  id="brothersMarried"
                  type="number"
                  value={formData.brothersMarried}
                  onChange={(e) => updateFormData("brothersMarried", parseInt(e.target.value) || 0)}
                  placeholder="0"
                />
              </div>
              <div>
                <Label htmlFor="sistersCount">Number of Sisters</Label>
                <Input
                  id="sistersCount"
                  type="number"
                  value={formData.sistersCount}
                  onChange={(e) => updateFormData("sistersCount", parseInt(e.target.value) || 0)}
                  placeholder="0"
                />
              </div>
              <div>
                <Label htmlFor="sistersMarried">Sisters Married</Label>
                <Input
                  id="sistersMarried"
                  type="number"
                  value={formData.sistersMarried}
                  onChange={(e) => updateFormData("sistersMarried", parseInt(e.target.value) || 0)}
                  placeholder="0"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="aboutFamily">About Family</Label>
              <Textarea
                id="aboutFamily"
                value={formData.aboutFamily}
                onChange={(e) => updateFormData("aboutFamily", e.target.value)}
                placeholder="Write about your family background, values, and traditions..."
                rows={4}
              />
            </div>
          </div>
        );

      case 8:
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Partner Age & Physical Preferences</h3>
            <div className="grid md:grid-cols-4 gap-4">
              <div>
                <Label htmlFor="minAge">Minimum Age</Label>
                <Input
                  id="minAge"
                  type="number"
                  value={formData.minAge}
                  onChange={(e) => updateFormData("minAge", e.target.value)}
                  placeholder="e.g., 25"
                />
              </div>
              <div>
                <Label htmlFor="maxAge">Maximum Age</Label>
                <Input
                  id="maxAge"
                  type="number"
                  value={formData.maxAge}
                  onChange={(e) => updateFormData("maxAge", e.target.value)}
                  placeholder="e.g., 35"
                />
              </div>
              <div>
                <Label htmlFor="minHeight">Minimum Height</Label>
                <Input
                  id="minHeight"
                  value={formData.minHeight}
                  onChange={(e) => updateFormData("minHeight", e.target.value)}
                  placeholder="e.g., 5'2\""
                />
              </div>
              <div>
                <Label htmlFor="maxHeight">Maximum Height</Label>
                <Input
                  id="maxHeight"
                  value={formData.maxHeight}
                  onChange={(e) => updateFormData("maxHeight", e.target.value)}
                  placeholder="e.g., 6'0\""
                />
              </div>
            </div>

            <div>
              <Label htmlFor="specialRequirements">Special Requirements</Label>
              <Textarea
                id="specialRequirements"
                value={formData.specialRequirements}
                onChange={(e) => updateFormData("specialRequirements", e.target.value)}
                placeholder="Any specific requirements or preferences for your life partner..."
                rows={4}
              />
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-2">Registration Complete!</h4>
              <p className="text-blue-700 text-sm">
                You're about to complete your registration. After submitting, you'll be able to:
              </p>
              <ul className="text-blue-700 text-sm mt-2 space-y-1">
                <li>• Browse and search for compatible matches</li>
                <li>• Send and receive interests</li>
                <li>• Communicate with matched profiles</li>
                <li>• Access AI-powered compatibility scores</li>
                <li>• Use advanced verification services</li>
              </ul>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  const progress = (currentStep / steps.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <Card>
          <CardHeader>
            <CardTitle className="text-center text-2xl font-bold text-purple-800">
              Create Your Matrimony Profile
            </CardTitle>
            <CardDescription className="text-center">
              Step {currentStep} of {steps.length}: {steps.find(s => s.id === currentStep)?.title}
            </CardDescription>
            <div className="mt-4">
              <Progress value={progress} className="w-full" />
            </div>
          </CardHeader>
          
          <CardContent>
            <div className="mb-6">
              <div className="flex justify-center space-x-2 mb-6">
                {steps.map((step) => {
                  const IconComponent = step.icon;
                  return (
                    <div
                      key={step.id}
                      className={`flex items-center justify-center w-10 h-10 rounded-full ${
                        step.id < currentStep
                          ? 'bg-green-500 text-white'
                          : step.id === currentStep
                          ? 'bg-purple-500 text-white'
                          : 'bg-gray-200 text-gray-500'
                      }`}
                    >
                      {step.id < currentStep ? (
                        <Check className="w-5 h-5" />
                      ) : (
                        <IconComponent className="w-5 h-5" />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {renderStep()}

            <div className="flex justify-between mt-8">
              <Button
                variant="outline"
                onClick={prevStep}
                disabled={currentStep === 1}
                className="flex items-center space-x-2"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Previous</span>
              </Button>
              
              {currentStep === steps.length ? (
                <Button 
                  className="flex items-center space-x-2 bg-purple-600 hover:bg-purple-700"
                  onClick={() => {
                    console.log('Registration completed:', formData);
                    // Handle form submission
                  }}
                >
                  <Check className="w-4 h-4" />
                  <span>Complete Registration</span>
                </Button>
              ) : (
                <Button
                  onClick={nextStep}
                  className="flex items-center space-x-2 bg-purple-600 hover:bg-purple-700"
                >
                  <span>Next</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default RegistrationWizard;
