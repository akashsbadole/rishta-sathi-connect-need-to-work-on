
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Eye, EyeOff, Heart, Users, ShoppingBag } from "lucide-react";

const LoginSystem = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
    userType: 'customer'
  });

  const handleLogin = (userType: string) => {
    console.log(`Logging in as ${userType}:`, loginData);
    // Redirect based on user type
    switch (userType) {
      case 'customer':
        window.location.href = '/dashboard';
        break;
      case 'vendor':
        window.location.href = '/vendor-dashboard';
        break;
      case 'admin':
        window.location.href = '/admin-dashboard';
        break;
    }
  };

  const UserTypeCard = ({ 
    type, 
    title, 
    description, 
    icon: Icon, 
    bgColor 
  }: {
    type: string;
    title: string;
    description: string;
    icon: any;
    bgColor: string;
  }) => (
    <Card className={`cursor-pointer transition-all hover:shadow-lg ${loginData.userType === type ? 'ring-2 ring-pink-500' : ''}`}>
      <CardContent className="p-6 text-center">
        <div className={`w-16 h-16 ${bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
          <Icon className="w-8 h-8 text-white" />
        </div>
        <h3 className="font-semibold text-lg mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        <div className="space-y-4">
          <div>
            <Label htmlFor={`${type}-email`}>Email</Label>
            <Input
              id={`${type}-email`}
              type="email"
              value={loginData.email}
              onChange={(e) => setLoginData({...loginData, email: e.target.value, userType: type})}
              placeholder="Enter your email"
            />
          </div>
          <div>
            <Label htmlFor={`${type}-password`}>Password</Label>
            <div className="relative">
              <Input
                id={`${type}-password`}
                type={showPassword ? "text" : "password"}
                value={loginData.password}
                onChange={(e) => setLoginData({...loginData, password: e.target.value, userType: type})}
                placeholder="Enter your password"
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 transform -translate-y-1/2"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>
          <Button 
            onClick={() => handleLogin(type)}
            className={`w-full ${bgColor.replace('bg-', 'bg-').replace('-500', '-600')} hover:${bgColor.replace('bg-', 'bg-').replace('-500', '-700')}`}
          >
            Login as {title}
          </Button>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-red-50 flex items-center justify-center py-12 px-4">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-8">
          <Heart className="w-16 h-16 text-pink-500 mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome to Rishta Sathi</h1>
          <p className="text-gray-600">Choose your login type to continue</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <UserTypeCard
            type="customer"
            title="Customer"
            description="Find your perfect life partner"
            icon={Heart}
            bgColor="bg-pink-500"
          />
          
          <UserTypeCard
            type="vendor"
            title="Vendor"
            description="Provide wedding and matrimony services"
            icon={ShoppingBag}
            bgColor="bg-blue-500"
          />
          
          <UserTypeCard
            type="admin"
            title="Super Admin"
            description="Manage platform and users"
            icon={Users}
            bgColor="bg-purple-500"
          />
        </div>

        <div className="text-center mt-8">
          <p className="text-gray-600">
            Don't have an account?{" "}
            <a href="/register" className="text-pink-600 hover:underline font-semibold">
              Register here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginSystem;
