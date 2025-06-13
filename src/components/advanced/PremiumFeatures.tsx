
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Crown, Zap, Shield, Eye, MessageCircle, Search, 
  Calendar, Phone, Users, Star, CheckCircle, CreditCard
} from "lucide-react";

const PremiumFeatures = () => {
  const [selectedPlan, setSelectedPlan] = useState("gold");

  const subscriptionPlans = [
    {
      id: "silver",
      name: "Silver",
      price: "₹999",
      duration: "per month",
      color: "from-gray-400 to-gray-600",
      popular: false,
      features: [
        "View unlimited profiles",
        "Send 50 interests per month",
        "See who viewed your profile",
        "Advanced search filters",
        "Priority customer support",
        "Hide ads"
      ]
    },
    {
      id: "gold", 
      name: "Gold",
      price: "₹2,999",
      duration: "per month",
      color: "from-yellow-400 to-yellow-600",
      popular: true,
      features: [
        "All Silver features",
        "Unlimited interests",
        "Direct messaging without mutual interest",
        "Contact details of interested profiles",
        "Wedding planning assistance",
        "Horoscope matching services",
        "Profile highlighting",
        "Dedicated relationship manager"
      ]
    },
    {
      id: "platinum",
      name: "Platinum", 
      price: "₹5,999",
      duration: "per month",
      color: "from-purple-400 to-purple-600",
      popular: false,
      features: [
        "All Gold features",
        "Background verification included",
        "AI-powered compatibility analysis", 
        "Premium wedding vendor access",
        "Concierge services",
        "Profile writing assistance",
        "Professional photoshoot",
        "Success story promotion",
        "VIP customer support"
      ]
    }
  ];

  const premiumFeatures = [
    {
      icon: Eye,
      title: "Profile Views Analytics",
      description: "See who viewed your profile and when",
      availability: ["Silver", "Gold", "Platinum"]
    },
    {
      icon: MessageCircle,
      title: "Unlimited Messaging",
      description: "Send unlimited messages to any member",
      availability: ["Gold", "Platinum"]
    },
    {
      icon: Search,
      title: "Advanced Search",
      description: "Filter by specific criteria and preferences",
      availability: ["Silver", "Gold", "Platinum"]
    },
    {
      icon: Phone,
      title: "Contact Information",
      description: "Access phone numbers and email addresses",
      availability: ["Gold", "Platinum"]
    },
    {
      icon: Shield,
      title: "Background Verification",
      description: "Comprehensive background checks included",
      availability: ["Platinum"]
    },
    {
      icon: Calendar,
      title: "Meeting Coordination",
      description: "Professional assistance in arranging meetings",
      availability: ["Gold", "Platinum"]
    },
    {
      icon: Users,
      title: "Relationship Manager",
      description: "Dedicated manager for personalized assistance",
      availability: ["Gold", "Platinum"]
    },
    {
      icon: Star,
      title: "Profile Highlighting",
      description: "Make your profile stand out in search results",
      availability: ["Gold", "Platinum"]
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <Crown className="w-16 h-16 text-yellow-600 mx-auto mb-4" />
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Premium Features</h1>
        <p className="text-gray-600">Unlock exclusive features to find your perfect match faster</p>
      </div>

      <Tabs defaultValue="plans" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="plans">Subscription Plans</TabsTrigger>
          <TabsTrigger value="features">Feature Comparison</TabsTrigger>
          <TabsTrigger value="benefits">Member Benefits</TabsTrigger>
        </TabsList>

        <TabsContent value="plans" className="space-y-6">
          <div className="grid lg:grid-cols-3 gap-6">
            {subscriptionPlans.map((plan) => (
              <Card 
                key={plan.id}
                className={`relative overflow-hidden ${
                  plan.popular ? 'ring-2 ring-yellow-400 scale-105' : ''
                } ${selectedPlan === plan.id ? 'ring-2 ring-blue-500' : ''}`}
              >
                {plan.popular && (
                  <Badge className="absolute top-4 right-4 bg-yellow-500">
                    Most Popular
                  </Badge>
                )}
                
                <CardHeader className="text-center">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${plan.color} mx-auto mb-4 flex items-center justify-center`}>
                    <Crown className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="space-y-1">
                    <div className="text-3xl font-bold text-blue-600">{plan.price}</div>
                    <div className="text-sm text-gray-600">{plan.duration}</div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className="w-full"
                    variant={selectedPlan === plan.id ? "default" : "outline"}
                    onClick={() => setSelectedPlan(plan.id)}
                  >
                    {selectedPlan === plan.id ? "Selected" : "Choose Plan"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-semibold mb-2">Ready to upgrade?</h3>
                <p className="text-gray-600">Get instant access to premium features</p>
              </div>
              <Button size="lg" className="flex items-center space-x-2">
                <CreditCard className="w-4 h-4" />
                <span>Proceed to Payment</span>
              </Button>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="features" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Feature Comparison</CardTitle>
              <CardDescription>Compare features across different subscription plans</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {premiumFeatures.map((feature, index) => {
                  const IconComponent = feature.icon;
                  return (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-3">
                        <IconComponent className="w-5 h-5 text-blue-600" />
                        <div>
                          <h3 className="font-medium">{feature.title}</h3>
                          <p className="text-sm text-gray-600">{feature.description}</p>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        {["Silver", "Gold", "Platinum"].map((plan) => (
                          <Badge 
                            key={plan}
                            variant={feature.availability.includes(plan) ? "default" : "outline"}
                            className="text-xs"
                          >
                            {plan}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="benefits" className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Zap className="w-5 h-5 text-yellow-500" />
                  <span>Enhanced Visibility</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">5x more profile views</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Top search results placement</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Featured profile highlighting</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MessageCircle className="w-5 h-5 text-blue-500" />
                  <span>Communication Benefits</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Direct messaging without matching</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Access to contact information</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Priority message delivery</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Users className="w-5 h-5 text-purple-500" />
                  <span>Personal Assistance</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Dedicated relationship manager</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Profile optimization assistance</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Meeting coordination support</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Shield className="w-5 h-5 text-green-500" />
                  <span>Safety & Verification</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Enhanced background verification</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Identity verification badge</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Fraud protection guarantee</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default PremiumFeatures;
