
import { useState } from "react";
import { Search, Heart, Users, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const HeroSection = () => {
  const [searchData, setSearchData] = useState({
    lookingFor: "",
    ageFrom: "",
    ageTo: "",
    city: ""
  });

  const stats = [
    { icon: Users, label: "Active Profiles", value: "2.5L+" },
    { icon: Heart, label: "Success Stories", value: "25K+" },
    { icon: Star, label: "Premium Members", value: "50K+" }
  ];

  return (
    <section className="relative min-h-[600px] bg-gradient-to-br from-purple-900 via-blue-900 to-red-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border border-white rounded-full"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border border-white rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 border border-white rounded-full"></div>
        <div className="absolute bottom-32 right-1/3 w-20 h-20 border border-white rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Find Your
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
                  Perfect Match
                </span>
              </h1>
              <p className="text-xl text-purple-200 leading-relaxed">
                India's most trusted matrimony platform connecting hearts, families, and traditions.
                Your journey to happily ever after starts here.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 py-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center space-y-2">
                  <stat.icon className="w-8 h-8 mx-auto text-pink-400" />
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-sm text-purple-200">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:from-pink-600 hover:to-purple-700 px-8 py-3 text-lg font-semibold transform hover:scale-105 transition-all duration-200">
                Register Free
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-purple-900 px-8 py-3 text-lg font-semibold">
                View Success Stories
              </Button>
            </div>
          </div>

          {/* Right Content - Search Form */}
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Start Your Search</h3>
              <p className="text-gray-600">Find profiles that match your preferences</p>
            </div>

            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Looking for
                </label>
                <Select onValueChange={(value) => setSearchData({...searchData, lookingFor: value})}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select gender" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="bride">Bride</SelectItem>
                    <SelectItem value="groom">Groom</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Age From
                  </label>
                  <Select onValueChange={(value) => setSearchData({...searchData, ageFrom: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Min" />
                    </SelectTrigger>
                    <SelectContent>
                      {Array.from({length: 30}, (_, i) => i + 18).map(age => (
                        <SelectItem key={age} value={age.toString()}>{age}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Age To
                  </label>
                  <Select onValueChange={(value) => setSearchData({...searchData, ageTo: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Max" />
                    </SelectTrigger>
                    <SelectContent>
                      {Array.from({length: 30}, (_, i) => i + 18).map(age => (
                        <SelectItem key={age} value={age.toString()}>{age}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred City
                </label>
                <Input 
                  placeholder="Enter city name"
                  value={searchData.city}
                  onChange={(e) => setSearchData({...searchData, city: e.target.value})}
                  className="w-full"
                />
              </div>

              <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-3 text-lg font-semibold">
                <Search className="w-5 h-5 mr-2" />
                Search Profiles
              </Button>
            </form>

            <div className="text-center mt-4">
              <p className="text-sm text-gray-600">
                Over <span className="font-semibold text-purple-600">2.5 Lakh</span> verified profiles
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
