
import { useState } from "react";
import { Heart, User, Bell, Search, Menu, X, MessageCircle, Users, Settings, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger,
  DropdownMenuSeparator 
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [notifications] = useState(5);
  const [messages] = useState(3);
  const [isLoggedIn] = useState(true);

  return (
    <header className="bg-gradient-to-r from-purple-900 via-blue-900 to-red-900 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold">Rishta Sathi</h1>
              <p className="text-xs text-purple-200">Perfect Matches, Perfect Lives</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#" className="hover:text-purple-200 transition-colors duration-200">Browse Profiles</a>
            <a href="#" className="hover:text-purple-200 transition-colors duration-200">My Matches</a>
            <a href="#" className="hover:text-purple-200 transition-colors duration-200">Interests</a>
            <a href="#" className="hover:text-purple-200 transition-colors duration-200">Messages</a>
            <a href="#" className="hover:text-purple-200 transition-colors duration-200">Search</a>
            <a href="#" className="hover:text-purple-200 transition-colors duration-200">Success Stories</a>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-3">
            {isLoggedIn ? (
              <>
                <Button variant="ghost" size="sm" className="text-white hover:bg-purple-800">
                  <Search className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="sm" className="text-white hover:bg-purple-800 relative">
                  <MessageCircle className="w-4 h-4" />
                  {messages > 0 && (
                    <Badge className="absolute -top-1 -right-1 w-5 h-5 text-xs bg-red-500 text-white">
                      {messages}
                    </Badge>
                  )}
                </Button>
                <Button variant="ghost" size="sm" className="text-white hover:bg-purple-800 relative">
                  <Bell className="w-4 h-4" />
                  {notifications > 0 && (
                    <Badge className="absolute -top-1 -right-1 w-5 h-5 text-xs bg-red-500 text-white">
                      {notifications}
                    </Badge>
                  )}
                </Button>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm" className="text-white hover:bg-purple-800">
                      <User className="w-4 h-4 mr-1" />
                      Profile
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56 bg-white">
                    <DropdownMenuItem>
                      <User className="mr-2 h-4 w-4" />
                      <span>My Profile</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Users className="mr-2 h-4 w-4" />
                      <span>Family Profiles</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Settings className="mr-2 h-4 w-4" />
                      <span>Settings</span>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="text-red-600">
                      <LogOut className="mr-2 h-4 w-4" />
                      <span>Log out</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <Button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:from-pink-600 hover:to-purple-700 text-sm px-4 py-2">
                  Upgrade Plan
                </Button>
              </>
            ) : (
              <>
                <Button variant="ghost" className="text-white hover:bg-purple-800">
                  Login
                </Button>
                <Button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:from-pink-600 hover:to-purple-700">
                  Register Free
                </Button>
              </>
            )}
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
          <div className="md:hidden py-4 border-t border-purple-700">
            <nav className="flex flex-col space-y-3">
              <a href="#" className="hover:text-purple-200 transition-colors duration-200">Browse Profiles</a>
              <a href="#" className="hover:text-purple-200 transition-colors duration-200">My Matches</a>
              <a href="#" className="hover:text-purple-200 transition-colors duration-200">Interests</a>
              <a href="#" className="hover:text-purple-200 transition-colors duration-200">Messages</a>
              <a href="#" className="hover:text-purple-200 transition-colors duration-200">Search</a>
              <a href="#" className="hover:text-purple-200 transition-colors duration-200">Success Stories</a>
              <div className="flex items-center space-x-3 pt-3">
                {isLoggedIn ? (
                  <>
                    <Button variant="ghost" size="sm" className="text-white hover:bg-purple-800">
                      <User className="w-4 h-4 mr-1" />
                      Profile
                    </Button>
                    <Button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:from-pink-600 hover:to-purple-700 text-sm">
                      Upgrade Plan
                    </Button>
                  </>
                ) : (
                  <>
                    <Button variant="ghost" className="text-white hover:bg-purple-800">
                      Login
                    </Button>
                    <Button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:from-pink-600 hover:to-purple-700">
                      Register Free
                    </Button>
                  </>
                )}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
