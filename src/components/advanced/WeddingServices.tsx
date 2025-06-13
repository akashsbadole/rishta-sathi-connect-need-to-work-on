
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Heart, Camera, Music, Car, Home, Utensils, Flower, 
  Star, MapPin, Phone, Calendar, Search, Filter
} from "lucide-react";

const WeddingServices = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const serviceCategories = [
    { id: "all", name: "All Services", icon: Heart },
    { id: "venues", name: "Venues", icon: Home },
    { id: "photography", name: "Photography", icon: Camera },
    { id: "catering", name: "Catering", icon: Utensils },
    { id: "decoration", name: "Decoration", icon: Flower },
    { id: "music", name: "Music & DJ", icon: Music },
    { id: "transport", name: "Transportation", icon: Car }
  ];

  const weddingServices = [
    {
      id: 1,
      name: "Royal Palace Wedding Hall",
      category: "venues",
      location: "Mumbai, Maharashtra",
      rating: 4.8,
      reviews: 156,
      price: "₹2,50,000 - ₹5,00,000",
      description: "Luxurious wedding venue with traditional architecture and modern amenities",
      features: ["AC Banquet Hall", "Parking for 200 cars", "Bridal Room", "Catering Kitchen"],
      images: ["/placeholder.svg"],
      verified: true,
      contact: "+91 98765 43210"
    },
    {
      id: 2,
      name: "Capture Moments Photography",
      category: "photography", 
      location: "Delhi, NCR",
      rating: 4.9,
      reviews: 89,
      price: "₹75,000 - ₹1,50,000",
      description: "Professional wedding photography with cinematic videography",
      features: ["Pre-wedding Shoot", "Wedding Day Coverage", "Album Design", "Video Editing"],
      images: ["/placeholder.svg"],
      verified: true,
      contact: "+91 87654 32109"
    },
    {
      id: 3,
      name: "Spice Garden Catering",
      category: "catering",
      location: "Bangalore, Karnataka",
      rating: 4.7,
      reviews: 203,
      price: "₹800 - ₹1,200 per plate",
      description: "Authentic Indian cuisine with customizable menu options",
      features: ["Multi-cuisine Menu", "Live Counters", "Service Staff", "Decoration"],
      images: ["/placeholder.svg"],
      verified: true,
      contact: "+91 76543 21098"
    }
  ];

  const filteredServices = weddingServices.filter(service => {
    const matchesCategory = selectedCategory === "all" || service.category === selectedCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <Heart className="w-16 h-16 text-red-600 mx-auto mb-4" />
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Wedding Services</h1>
        <p className="text-gray-600">Find verified vendors for your perfect wedding</p>
      </div>

      <Tabs defaultValue="services" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="services">Browse Services</TabsTrigger>
          <TabsTrigger value="bookings">My Bookings</TabsTrigger>
          <TabsTrigger value="planner">Wedding Planner</TabsTrigger>
        </TabsList>

        <TabsContent value="services" className="space-y-6">
          {/* Search and Filter */}
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input 
                      placeholder="Search services, vendors, or locations..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>
                <Button variant="outline" className="flex items-center space-x-2">
                  <Filter className="w-4 h-4" />
                  <span>Advanced Filters</span>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2">
            {serviceCategories.map((category) => {
              const IconComponent = category.icon;
              return (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category.id)}
                  className="flex items-center space-x-2"
                >
                  <IconComponent className="w-4 h-4" />
                  <span>{category.name}</span>
                </Button>
              );
            })}
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service) => (
              <Card key={service.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img 
                    src={service.images[0]} 
                    alt={service.name}
                    className="w-full h-48 object-cover"
                  />
                  {service.verified && (
                    <Badge className="absolute top-2 right-2 bg-green-500">
                      Verified
                    </Badge>
                  )}
                </div>
                <CardContent className="p-4">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold text-lg">{service.name}</h3>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{service.rating}</span>
                      <span className="text-sm text-gray-500">({service.reviews})</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-1 text-gray-600 mb-2">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{service.location}</span>
                  </div>

                  <p className="text-sm text-gray-600 mb-3">{service.description}</p>

                  <div className="flex flex-wrap gap-1 mb-3">
                    {service.features.slice(0, 3).map((feature, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-blue-600">{service.price}</span>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline">
                        <Phone className="w-4 h-4" />
                      </Button>
                      <Button size="sm">Book Now</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="bookings" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>My Wedding Bookings</CardTitle>
              <CardDescription>Track and manage your wedding service bookings</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8">
                <Calendar className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">No bookings yet</h3>
                <p className="text-gray-600 mb-4">Start booking wedding services to see them here</p>
                <Button>Browse Services</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="planner" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Wedding Planner</CardTitle>
              <CardDescription>Plan your perfect wedding with our comprehensive planner</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="font-semibold">Wedding Timeline</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 border rounded">
                      <span>Venue Booking</span>
                      <Badge variant="outline">Pending</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 border rounded">
                      <span>Photography</span>
                      <Badge variant="outline">Pending</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 border rounded">
                      <span>Catering</span>
                      <Badge variant="outline">Pending</Badge>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="font-semibold">Budget Tracker</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Total Budget</span>
                      <span className="font-semibold">₹10,00,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Spent</span>
                      <span className="text-red-600">₹2,50,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Remaining</span>
                      <span className="text-green-600">₹7,50,000</span>
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

export default WeddingServices;
