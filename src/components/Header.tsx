
import { useState } from "react";
import { Heart, User, Bell, Search, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [notifications] = useState(3);

  return (
    <header className="bg-gradient-to-r from-rose-900 via-red-900 to-rose-800 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold">Rishta Sathi</h1>
              <p className="text-xs text-rose-200">Perfect Matches, Perfect Lives</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#" className="hover:text-rose-200 transition-colors duration-200">Search</a>
            <a href="#" className="hover:text-rose-200 transition-colors duration-200">Matches</a>
            <a href="#" className="hover:text-rose-200 transition-colors duration-200">Messages</a>
            <a href="#" className="hover:text-rose-200 transition-colors duration-200">Interests</a>
            <a href="#" className="hover:text-rose-200 transition-colors duration-200">Success Stories</a>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-3">
            <Button variant="ghost" size="sm" className="text-white hover:bg-rose-800">
              <Search className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="sm" className="text-white hover:bg-rose-800 relative">
              <Bell className="w-4 h-4" />
              {notifications > 0 && (
                <Badge className="absolute -top-1 -right-1 w-5 h-5 text-xs bg-yellow-500 text-black">
                  {notifications}
                </Badge>
              )}
            </Button>
            <Button variant="ghost" size="sm" className="text-white hover:bg-rose-800">
              <User className="w-4 h-4 mr-1" />
              Profile
            </Button>
            <Button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white hover:from-yellow-500 hover:to-orange-600 text-sm px-4 py-2">
              Upgrade Plan
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-rose-700">
            <nav className="flex flex-col space-y-3">
              <a href="#" className="hover:text-rose-200 transition-colors duration-200">Search</a>
              <a href="#" className="hover:text-rose-200 transition-colors duration-200">Matches</a>
              <a href="#" className="hover:text-rose-200 transition-colors duration-200">Messages</a>
              <a href="#" className="hover:text-rose-200 transition-colors duration-200">Interests</a>
              <a href="#" className="hover:text-rose-200 transition-colors duration-200">Success Stories</a>
              <div className="flex items-center space-x-3 pt-3">
                <Button variant="ghost" size="sm" className="text-white hover:bg-rose-800">
                  <User className="w-4 h-4 mr-1" />
                  Profile
                </Button>
                <Button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white hover:from-yellow-500 hover:to-orange-600 text-sm">
                  Upgrade Plan
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
