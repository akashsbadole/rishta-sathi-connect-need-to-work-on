
import { Check, Star, Crown, Diamond, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const PricingSection = () => {
  const plans = [
    {
      name: "Free",
      icon: Star,
      price: "₹0",
      period: "Forever",
      description: "Perfect for getting started",
      popular: false,
      color: "from-gray-500 to-slate-600",
      features: [
        "Create basic profile",
        "Browse limited profiles",
        "Send 5 interests per month",
        "Basic search filters",
        "Standard customer support"
      ]
    },
    {
      name: "Silver",
      icon: Star,
      price: "₹1,999",
      period: "3 months",
      description: "Most popular choice",
      popular: true,
      color: "from-blue-500 to-cyan-600",
      features: [
        "Everything in Free",
        "View contact details",
        "Send unlimited interests",
        "Advanced search filters",
        "See who viewed your profile",
        "Priority customer support",
        "Horoscope matching"
      ]
    },
    {
      name: "Gold",
      icon: Crown,
      price: "₹3,999",
      period: "6 months",
      description: "Enhanced features for serious seekers",
      popular: false,
      color: "from-yellow-500 to-orange-600",
      features: [
        "Everything in Silver",
        "Featured profile listing",
        "Message read receipts",
        "Profile visitor analytics",
        "Video call feature",
        "Personal relationship manager",
        "Premium search placement"
      ]
    },
    {
      name: "Platinum",
      icon: Diamond,
      price: "₹6,999",
      period: "12 months",
      description: "Complete matrimony solution",
      popular: false,
      color: "from-purple-500 to-indigo-600",
      features: [
        "Everything in Gold",
        "Profile verification assistance",
        "Dedicated relationship counselor",
        "Wedding planning assistance",
        "Profile writing service",
        "Photography service discounts",
        "24/7 premium support"
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Choose Your Perfect Plan
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Upgrade your matrimony journey with our flexible plans designed to help you find your perfect match
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 ${
                plan.popular ? 'border-2 border-rose-500 shadow-lg' : 'border shadow-md'
              }`}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-rose-500 to-red-600 text-white px-4 py-1">
                  Most Popular
                </Badge>
              )}
              
              <CardHeader className="text-center pb-2">
                <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${plan.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <plan.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-800">
                  {plan.name}
                </CardTitle>
                <CardDescription className="text-gray-600">
                  {plan.description}
                </CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-gray-800">{plan.price}</span>
                  <span className="text-gray-600 ml-2">/ {plan.period}</span>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className={`w-full py-3 text-white font-semibold ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-rose-500 to-red-600 hover:from-rose-600 hover:to-red-700' 
                      : `bg-gradient-to-r ${plan.color} hover:opacity-90`
                  } transition-all duration-200`}
                >
                  {plan.price === "₹0" ? "Get Started Free" : "Choose Plan"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Money Back Guarantee */}
        <div className="text-center mt-12 p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl">
          <div className="flex items-center justify-center space-x-2 mb-2">
            <Shield className="w-6 h-6 text-green-600" />
            <span className="text-lg font-semibold text-gray-800">100% Money Back Guarantee</span>
          </div>
          <p className="text-gray-600">
            If you don't find your perfect match within your subscription period, we'll refund your money completely.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
