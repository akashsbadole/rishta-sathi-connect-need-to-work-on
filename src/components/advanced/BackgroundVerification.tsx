import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Shield, CheckCircle, Clock, AlertTriangle, Upload, CreditCard, ShoppingCart } from "lucide-react";
import { useCart } from "@/components/cart/CartProvider";

const BackgroundVerification = () => {
  const [selectedTier, setSelectedTier] = useState("basic");
  const [verificationStatus, setVerificationStatus] = useState("not_started");
  const { addToCart } = useCart();

  const verificationTiers = [
    {
      id: "basic",
      name: "Basic Verification",
      price: 750,
      features: [
        "Phone number OTP verification",
        "Email verification",
        "Aadhaar card verification",
        "Basic photo authenticity check",
        "Social media profile cross-verification"
      ],
      color: "bg-blue-500"
    },
    {
      id: "standard", 
      name: "Standard Verification",
      price: 2250,
      features: [
        "All Basic features",
        "Educational qualification verification",
        "Employment verification",
        "Address verification",
        "Income bracket verification",
        "Family composition verification"
      ],
      color: "bg-green-500"
    },
    {
      id: "premium",
      name: "Premium Verification", 
      price: 7500,
      features: [
        "All Standard features",
        "Professional background check",
        "Property ownership verification",
        "Criminal background check",
        "Financial credit score verification",
        "Character references verification",
        "Medical fitness certificate"
      ],
      color: "bg-purple-500"
    },
    {
      id: "elite",
      name: "Elite Verification",
      price: 20000,
      features: [
        "All Premium features",
        "Comprehensive family background investigation",
        "Social standing and reputation analysis",
        "Asset and liability detailed report",
        "Lifestyle and spending pattern analysis",
        "Previous relationship history",
        "Psychological compatibility assessment"
      ],
      color: "bg-red-500"
    }
  ];

  const addToCartHandler = (tier: any) => {
    addToCart({
      id: `verification-${tier.id}`,
      type: 'verification',
      name: tier.name,
      price: tier.price,
      description: `${tier.features.length} verification services included`,
      tier: tier.name
    });
  };

  const verificationSteps = [
    { step: 1, title: "Document Upload", status: "completed" },
    { step: 2, title: "AI Verification", status: "in_progress" },
    { step: 3, title: "Manual Review", status: "pending" },
    { step: 4, title: "Background Check", status: "pending" },
    { step: 5, title: "Final Report", status: "pending" }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <Shield className="w-16 h-16 text-blue-600 mx-auto mb-4" />
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Background Verification</h1>
        <p className="text-gray-600">Choose your verification tier for enhanced trust and security</p>
      </div>

      <Tabs defaultValue="plans" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="plans">Verification Plans</TabsTrigger>
          <TabsTrigger value="status">Verification Status</TabsTrigger>
          <TabsTrigger value="reports">Reports & Documents</TabsTrigger>
        </TabsList>

        <TabsContent value="plans" className="space-y-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {verificationTiers.map((tier) => (
              <Card 
                key={tier.id}
                className={`cursor-pointer transition-all hover:shadow-lg ${
                  selectedTier === tier.id ? 'ring-2 ring-blue-500' : ''
                }`}
                onClick={() => setSelectedTier(tier.id)}
              >
                <CardHeader>
                  <div className={`w-8 h-8 rounded-full ${tier.color} mb-2`}></div>
                  <CardTitle className="text-lg">{tier.name}</CardTitle>
                  <CardDescription className="text-xl font-bold text-blue-600">
                    ₹{tier.price.toLocaleString()}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {tier.features.map((feature, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 space-y-2">
                    <Button 
                      className="w-full"
                      variant={selectedTier === tier.id ? "default" : "outline"}
                      onClick={() => setSelectedTier(tier.id)}
                    >
                      {selectedTier === tier.id ? "Selected" : "Select Plan"}
                    </Button>
                    <Button 
                      className="w-full bg-pink-500 hover:bg-pink-600"
                      onClick={() => addToCartHandler(tier)}
                    >
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Add to Cart
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-semibold mb-2">Ready to proceed with verification?</h3>
                <p className="text-gray-600">Start your background verification process today</p>
              </div>
              <Button size="lg" className="flex items-center space-x-2">
                <CreditCard className="w-4 h-4" />
                <span>Proceed to Payment</span>
              </Button>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="status" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Clock className="w-5 h-5" />
                <span>Verification Progress</span>
              </CardTitle>
              <CardDescription>Track your verification status in real-time</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">Overall Progress</span>
                    <span className="text-sm text-gray-500">40%</span>
                  </div>
                  <Progress value={40} className="w-full" />
                </div>

                <div className="space-y-4">
                  {verificationSteps.map((step) => (
                    <div key={step.step} className="flex items-center space-x-4">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        step.status === 'completed' 
                          ? 'bg-green-500 text-white' 
                          : step.status === 'in_progress'
                          ? 'bg-blue-500 text-white'
                          : 'bg-gray-200 text-gray-500'
                      }`}>
                        {step.status === 'completed' ? (
                          <CheckCircle className="w-4 h-4" />
                        ) : (
                          step.step
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <span className="font-medium">{step.title}</span>
                          <Badge variant={
                            step.status === 'completed' 
                              ? 'default' 
                              : step.status === 'in_progress'
                              ? 'secondary'
                              : 'outline'
                          }>
                            {step.status.replace('_', ' ')}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="reports" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Upload className="w-5 h-5" />
                <span>Verification Documents</span>
              </CardTitle>
              <CardDescription>Upload and manage your verification documents</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-600 mb-2">Upload Aadhaar Card</p>
                  <Button variant="outline" size="sm">Choose File</Button>
                </div>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-600 mb-2">Upload Education Certificate</p>
                  <Button variant="outline" size="sm">Choose File</Button>
                </div>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-600 mb-2">Upload Employment Proof</p>
                  <Button variant="outline" size="sm">Choose File</Button>
                </div>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-600 mb-2">Upload Income Proof</p>
                  <Button variant="outline" size="sm">Choose File</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default BackgroundVerification;
