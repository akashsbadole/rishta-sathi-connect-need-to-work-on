import { useState, useEffect } from "react";
import { Heart, User, Bell, Search, Menu, X, MessageCircle, Users, Settings, LogOut } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger,
  DropdownMenuSeparator 
} from "@/components/ui/dropdown-menu";
import { useAppStore } from "@/store/useAppStore";
import { trackEvent } from "@/utils/analytics";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  // Use state management
  const { 
    user, 
    isAuthenticated, 
    notifications, 
    logout 
  } = useAppStore();

  const [notificationCount] = useState(notifications.length);
  const [messageCount] = useState(3); // This would come from messaging state

  const isActive = (path: string) => location.pathname === path;

  const handleLogout = () => {
    logout();
    trackEvent('logout', 'user', 'header');
  };

  const handleUpgrade = () => {
    trackEvent('upgrade_click', 'subscription', 'header');
  };

  // Add Google Search Console verification meta tag
  useEffect(() => {
    // Add Google Search Console verification meta tag
    const metaTag = document.createElement('meta');
    metaTag.name = 'google-site-verification';
    metaTag.content = 'your-google-search-console-verification-code'; // Replace with actual code
    document.head.appendChild(metaTag);

    return () => {
      document.head.removeChild(metaTag);
    };
  }, []);

  return (
    <header className="bg-gradient-to-r from-purple-900 via-blue-900 to-red-900 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to={isAuthenticated ? "/dashboard" : "/"} className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold">Rishta Sathi</h1>
              <p className="text-xs text-purple-200">Perfect Matches, Perfect Lives</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {isAuthenticated ? (
              <>
                <Link 
                  to="/dashboard" 
                  className={`hover:text-purple-200 transition-colors duration-200 ${isActive('/dashboard') ? 'text-purple-200' : ''}`}
                >
                  Dashboard
                </Link>
                <Link 
                  to="/search" 
                  className={`hover:text-purple-200 transition-colors duration-200 ${isActive('/search') ? 'text-purple-200' : ''}`}
                >
                  Browse Profiles
                </Link>
                <Link 
                  to="/matches" 
                  className={`hover:text-purple-200 transition-colors duration-200 ${isActive('/matches') ? 'text-purple-200' : ''}`}
                >
                  My Matches
                </Link>
                <Link 
                  to="/interests" 
                  className={`hover:text-purple-200 transition-colors duration-200 ${isActive('/interests') ? 'text-purple-200' : ''}`}
                >
                  Interests
                </Link>
                <Link 
                  to="/messages" 
                  className={`hover:text-purple-200 transition-colors duration-200 ${isActive('/messages') ? 'text-purple-200' : ''}`}
                >
                  Messages
                </Link>
              </>
            ) : (
              <>
                <Link 
                  to="/search" 
                  className={`hover:text-purple-200 transition-colors duration-200 ${isActive('/search') ? 'text-purple-200' : ''}`}
                >
                  Browse Profiles
                </Link>
                <Link 
                  to="/success-stories" 
                  className={`hover:text-purple-200 transition-colors duration-200 ${isActive('/success-stories') ? 'text-purple-200' : ''}`}
                >
                  Success Stories
                </Link>
              </>
            )}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-3">
            {isAuthenticated ? (
              <>
                <Link to="/search">
                  <Button variant="ghost" size="sm" className="text-white hover:bg-purple-800">
                    <Search className="w-4 h-4" />
                  </Button>
                </Link>
                <Link to="/messages">
                  <Button variant="ghost" size="sm" className="text-white hover:bg-purple-800 relative">
                    <MessageCircle className="w-4 h-4" />
                    {messageCount > 0 && (
                      <Badge className="absolute -top-1 -right-1 w-5 h-5 text-xs bg-red-500 text-white">
                        {messageCount}
                      </Badge>
                    )}
                  </Button>
                </Link>
                <Button variant="ghost" size="sm" className="text-white hover:bg-purple-800 relative">
                  <Bell className="w-4 h-4" />
                  {notificationCount > 0 && (
                    <Badge className="absolute -top-1 -right-1 w-5 h-5 text-xs bg-red-500 text-white">
                      {notificationCount}
                    </Badge>
                  )}
                </Button>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm" className="text-white hover:bg-purple-800">
                      <User className="w-4 h-4 mr-1" />
                      {user?.name || 'Profile'}
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56 bg-white">
                    <DropdownMenuItem>
                      <Link to="/profile" className="flex items-center w-full">
                        <User className="mr-2 h-4 w-4" />
                        <span>My Profile</span>
                      </Link>
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
                    <DropdownMenuItem className="text-red-600" onClick={handleLogout}>
                      <LogOut className="mr-2 h-4 w-4" />
                      <span>Log out</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <Button 
                  onClick={handleUpgrade}
                  className="bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:from-pink-600 hover:to-purple-700 text-sm px-4 py-2"
                >
                  Upgrade Plan
                </Button>
              </>
            ) : (
              <>
                <Link to="/login">
                  <Button variant="ghost" className="text-white hover:bg-purple-800">
                    Login
                  </Button>
                </Link>
                <Link to="/register">
                  <Button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:from-pink-600 hover:to-purple-700">
                    Register Free
                  </Button>
                </Link>
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
              {isAuthenticated ? (
                <>
                  <Link 
                    to="/dashboard" 
                    className="hover:text-purple-200 transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Dashboard
                  </Link>
                  <Link 
                    to="/search" 
                    className="hover:text-purple-200 transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Browse Profiles
                  </Link>
                  <Link 
                    to="/matches" 
                    className="hover:text-purple-200 transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    My Matches
                  </Link>
                  <Link 
                    to="/interests" 
                    className="hover:text-purple-200 transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Interests
                  </Link>
                  <Link 
                    to="/messages" 
                    className="hover:text-purple-200 transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Messages
                  </Link>
                </>
              ) : (
                <>
                  <Link 
                    to="/search" 
                    className="hover:text-purple-200 transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Browse Profiles
                  </Link>
                  <Link 
                    to="/success-stories" 
                    className="hover:text-purple-200 transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Success Stories
                  </Link>
                </>
              )}
              <div className="flex items-center space-x-3 pt-3">
                {isAuthenticated ? (
                  <>
                    <Link to="/profile">
                      <Button variant="ghost" size="sm" className="text-white hover:bg-purple-800">
                        <User className="w-4 h-4 mr-1" />
                        Profile
                      </Button>
                    </Link>
                    <Button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:from-pink-600 hover:to-purple-700 text-sm">
                      Upgrade Plan
                    </Button>
                  </>
                ) : (
                  <>
                    <Link to="/login">
                      <Button variant="ghost" className="text-white hover:bg-purple-800">
                        Login
                      </Button>
                    </Link>
                    <Link to="/register">
                      <Button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:from-pink-600 hover:to-purple-700">
                        Register Free
                      </Button>
                    </Link>
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
