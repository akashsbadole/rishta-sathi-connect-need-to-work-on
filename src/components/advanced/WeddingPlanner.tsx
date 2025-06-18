
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, CheckCircle, Clock, DollarSign, Heart, Users } from "lucide-react";

const WeddingPlanner = () => {
  const [weddingDate, setWeddingDate] = useState('');
  const [budget, setBudget] = useState('');
  const [guestCount, setGuestCount] = useState('');

  const plannerSteps = [
    { id: 1, title: 'Wedding Date & Venue', status: 'completed', progress: 100 },
    { id: 2, title: 'Budget Planning', status: 'in_progress', progress: 60 },
    { id: 3, title: 'Vendor Selection', status: 'pending', progress: 0 },
    { id: 4, title: 'Invitation Design', status: 'pending', progress: 0 },
    { id: 5, title: 'Final Preparations', status: 'pending', progress: 0 }
  ];

  const budgetCategories = [
    { category: 'Venue', allocated: 400000, spent: 380000, percentage: 40 },
    { category: 'Catering', allocated: 300000, spent: 150000, percentage: 30 },
    { category: 'Photography', allocated: 150000, spent: 0, percentage: 15 },
    { category: 'Decoration', allocated: 100000, spent: 25000, percentage: 10 },
    { category: 'Miscellaneous', allocated: 50000, spent: 10000, percentage: 5 }
  ];

  const vendors = [
    {
      category: 'Photography',
      name: 'Royal Wedding Photography',
      rating: 4.9,
      price: '₹1,50,000',
      status: 'shortlisted',
      contact: '+91 98765 43210'
    },
    {
      category: 'Catering',
      name: 'Maharaja Catering Services',
      rating: 4.8,
      price: '₹800/plate',
      status: 'booked',
      contact: '+91 87654 32109'
    }
  ];

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR'
    }).format(amount);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <Heart className="w-16 h-16 text-pink-600 mx-auto mb-4" />
        <h1 className="text-3xl font-bold text-gray-900 mb-2">AI Wedding Planner</h1>
        <p className="text-gray-600">Plan your perfect wedding with our intelligent assistant</p>
      </div>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="budget">Budget</TabsTrigger>
          <TabsTrigger value="vendors">Vendors</TabsTrigger>
          <TabsTrigger value="timeline">Timeline</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          {/* Quick Setup */}
          <Card>
            <CardHeader>
              <CardTitle>Wedding Details</CardTitle>
              <CardDescription>Let's start with the basics of your dream wedding</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <label className="text-sm font-medium mb-2 block">Wedding Date</label>
                  <Input
                    type="date"
                    value={weddingDate}
                    onChange={(e) => setWeddingDate(e.target.value)}
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Total Budget</label>
                  <Input
                    type="number"
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    placeholder="₹10,00,000"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Guest Count</label>
                  <Input
                    type="number"
                    value={guestCount}
                    onChange={(e) => setGuestCount(e.target.value)}
                    placeholder="200"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Planning Progress */}
          <Card>
            <CardHeader>
              <CardTitle>Wedding Planning Progress</CardTitle>
              <CardDescription>Track your wedding preparation journey</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {plannerSteps.map((step) => (
                  <div key={step.id} className="flex items-center justify-between p-4 border rounded">
                    <div className="flex items-center space-x-4">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        step.status === 'completed' ? 'bg-green-500 text-white' :
                        step.status === 'in_progress' ? 'bg-blue-500 text-white' :
                        'bg-gray-200 text-gray-600'
                      }`}>
                        {step.status === 'completed' ? <CheckCircle className="w-4 h-4" /> : step.id}
                      </div>
                      <div>
                        <h4 className="font-medium">{step.title}</h4>
                        <Progress value={step.progress} className="w-48 mt-1" />
                      </div>
                    </div>
                    <Badge variant={
                      step.status === 'completed' ? 'default' :
                      step.status === 'in_progress' ? 'secondary' : 'outline'
                    }>
                      {step.status.replace('_', ' ')}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="budget" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <DollarSign className="w-5 h-5" />
                <span>Budget Management</span>
              </CardTitle>
              <CardDescription>Track and manage your wedding expenses</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {budgetCategories.map((item, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <h4 className="font-medium">{item.category}</h4>
                      <div className="text-right">
                        <div className="text-sm text-gray-600">
                          {formatCurrency(item.spent)} / {formatCurrency(item.allocated)}
                        </div>
                        <div className="text-xs text-gray-500">
                          {item.percentage}% of total budget
                        </div>
                      </div>
                    </div>
                    <div className="relative">
                      <Progress value={(item.spent / item.allocated) * 100} className="h-3" />
                      <div className="absolute inset-0 flex items-center justify-center text-xs font-medium text-white">
                        {((item.spent / item.allocated) * 100).toFixed(0)}%
                      </div>
                    </div>
                  </div>
                ))}
                
                <div className="border-t pt-4">
                  <div className="flex justify-between items-center text-lg font-bold">
                    <span>Total Spent:</span>
                    <span className="text-pink-600">
                      {formatCurrency(budgetCategories.reduce((sum, item) => sum + item.spent, 0))}
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="vendors" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Vendor Management</CardTitle>
              <CardDescription>Manage your wedding service providers</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {vendors.map((vendor, index) => (
                  <Card key={index} className="border">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h4 className="font-semibold text-lg">{vendor.name}</h4>
                            <Badge className="bg-blue-100 text-blue-800">
                              {vendor.category}
                            </Badge>
                          </div>
                          <div className="flex items-center space-x-4 text-sm text-gray-600">
                            <span>★ {vendor.rating}</span>
                            <span>{vendor.price}</span>
                            <span>{vendor.contact}</span>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <Badge variant={vendor.status === 'booked' ? 'default' : 'secondary'}>
                            {vendor.status}
                          </Badge>
                          <Button variant="outline" size="sm">
                            Contact
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="timeline" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Calendar className="w-5 h-5" />
                <span>Wedding Timeline</span>
              </CardTitle>
              <CardDescription>Stay on track with your wedding preparations</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="relative">
                  {/* Timeline items */}
                  <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200"></div>
                  
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center relative z-10">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium">Venue Booking Confirmed</h4>
                        <p className="text-sm text-gray-600">Royal Palace Wedding Hall - ₹3,80,000</p>
                        <p className="text-xs text-gray-500">Completed 2 weeks ago</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center relative z-10">
                        <Clock className="w-4 h-4 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium">Photography Selection</h4>
                        <p className="text-sm text-gray-600">Review and finalize photographer</p>
                        <p className="text-xs text-gray-500">Due this week</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center relative z-10">
                        <span className="text-sm font-medium text-gray-600">3</span>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium">Invitation Design</h4>
                        <p className="text-sm text-gray-600">Create and print wedding invitations</p>
                        <p className="text-xs text-gray-500">Starting next week</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default WeddingPlanner;
