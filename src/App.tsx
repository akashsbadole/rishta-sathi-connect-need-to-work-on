
import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { CartProvider } from "@/components/cart/CartProvider";
import { initGA, trackPageView } from "@/utils/analytics";
import { useAppStore } from "@/store/useAppStore";
import { useAuth } from "@/hooks/useAuth";
import Index from "./pages/Index";
import Login from "./pages/Login";
import LoginMultiple from "./pages/LoginMultiple";
import Register from "./pages/Register";
import Search from "./pages/Search";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Messages from "./pages/Messages";
import Interests from "./pages/Interests";
import Matches from "./pages/Matches";
import BackgroundVerification from "./pages/BackgroundVerification";
import WeddingServices from "./pages/WeddingServices";
import WeddingPlanner from "./pages/WeddingPlanner";
import AIMatching from "./pages/AIMatching";
import PremiumFeatures from "./pages/PremiumFeatures";
import BrowseProfilesPage from "./pages/BrowseProfiles";
import SuccessStoriesPage from "./pages/SuccessStories";
import ContactUsPage from "./pages/ContactUs";
import PrivacyPolicyPage from "./pages/PrivacyPolicy";
import TermsOfServicePage from "./pages/TermsOfService";
import SafetyTipsPage from "./pages/SafetyTips";
import TicketSupport from "./pages/TicketSupport";
import Payment from "./pages/Payment";
import NotFound from "./pages/NotFound";
import CartSidebar from "@/components/cart/CartSidebar";

const queryClient = new QueryClient();

// Analytics tracking component
const AnalyticsTracker = () => {
  const location = useLocation();

  useEffect(() => {
    trackPageView(location.pathname + location.search);
  }, [location]);

  return null;
};

// Protected route wrapper
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { isSignedIn, isLoaded } = useAuth();
  const { isAuthenticated } = useAppStore();

  if (!isLoaded) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
  }

  // If Clerk is configured, use Clerk auth, otherwise use app store auth
  const hasClerkKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
  const isUserAuthenticated = hasClerkKey ? isSignedIn : isAuthenticated;

  if (!isUserAuthenticated) {
    return <LoginMultiple />;
  }

  return <>{children}</>;
};

// Role-based route wrapper
const RoleBasedRoute = ({ 
  children, 
  allowedRoles 
}: { 
  children: React.ReactNode;
  allowedRoles: string[];
}) => {
  const { user: clerkUser } = useAuth();
  const { user: storeUser } = useAppStore();
  
  const currentUser = clerkUser || storeUser;
  const userRole = clerkUser ? 
    (clerkUser.publicMetadata?.role as string) || 'customer' : 
    storeUser?.role || 'customer';

  if (!currentUser || !allowedRoles.includes(userRole)) {
    return <div className="text-center py-8">Access Denied</div>;
  }

  return <>{children}</>;
};

const App = () => {
  useEffect(() => {
    // Initialize Google Analytics
    initGA();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <CartProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <AnalyticsTracker />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/login" element={<Login />} />
              <Route path="/login-portal" element={<LoginMultiple />} />
              <Route path="/register" element={<Register />} />
              <Route path="/browse-profiles" element={<BrowseProfilesPage />} />
              <Route path="/success-stories" element={<SuccessStoriesPage />} />
              <Route path="/contact-us" element={<ContactUsPage />} />
              <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
              <Route path="/terms-of-service" element={<TermsOfServicePage />} />
              <Route path="/safety-tips" element={<SafetyTipsPage />} />
              <Route path="/support" element={<TicketSupport />} />
              <Route path="/payment" element={<Payment />} />
              <Route path="/wedding-services" element={<WeddingServices />} />
              
              {/* Protected Routes */}
              <Route path="/search" element={
                <ProtectedRoute>
                  <Search />
                </ProtectedRoute>
              } />
              <Route path="/dashboard" element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              } />
              <Route path="/profile" element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              } />
              <Route path="/messages" element={
                <ProtectedRoute>
                  <Messages />
                </ProtectedRoute>
              } />
              <Route path="/interests" element={
                <ProtectedRoute>
                  <Interests />
                </ProtectedRoute>
              } />
              <Route path="/matches" element={
                <ProtectedRoute>
                  <Matches />
                </ProtectedRoute>
              } />
              <Route path="/ai-matching" element={
                <ProtectedRoute>
                  <AIMatching />
                </ProtectedRoute>
              } />
              <Route path="/background-verification" element={
                <ProtectedRoute>
                  <BackgroundVerification />
                </ProtectedRoute>
              } />
              <Route path="/wedding-planner" element={
                <ProtectedRoute>
                  <WeddingPlanner />
                </ProtectedRoute>
              } />
              <Route path="/premium" element={
                <ProtectedRoute>
                  <PremiumFeatures />
                </ProtectedRoute>
              } />
              
              <Route path="*" element={<NotFound />} />
            </Routes>
            <CartSidebar />
          </BrowserRouter>
        </CartProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
