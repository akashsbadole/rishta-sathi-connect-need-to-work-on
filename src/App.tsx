import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { CartProvider } from "@/components/cart/CartProvider";
import { initGA, trackPageView } from "@/utils/analytics";
import { useAppStore } from "@/store/useAppStore";
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
import AIChat from "@/components/common/AIChat";
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
              <Route path="/search" element={<Search />} />
              <Route path="/browse-profiles" element={<BrowseProfilesPage />} />
              <Route path="/success-stories" element={<SuccessStoriesPage />} />
              <Route path="/contact-us" element={<ContactUsPage />} />
              <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
              <Route path="/terms-of-service" element={<TermsOfServicePage />} />
              <Route path="/safety-tips" element={<SafetyTipsPage />} />
              <Route path="/support" element={<TicketSupport />} />
              <Route path="/payment" element={<Payment />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/messages" element={<Messages />} />
              <Route path="/interests" element={<Interests />} />
              <Route path="/matches" element={<Matches />} />
              <Route path="/ai-matching" element={<AIMatching />} />
              <Route path="/background-verification" element={<BackgroundVerification />} />
              <Route path="/wedding-services" element={<WeddingServices />} />
              <Route path="/wedding-planner" element={<WeddingPlanner />} />
              <Route path="/premium" element={<PremiumFeatures />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <AIChat />
            <CartSidebar />
          </BrowserRouter>
        </CartProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
