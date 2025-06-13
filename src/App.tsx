
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Search from "./pages/Search";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Messages from "./pages/Messages";
import Interests from "./pages/Interests";
import Matches from "./pages/Matches";
import BackgroundVerification from "./pages/BackgroundVerification";
import WeddingServices from "./pages/WeddingServices";
import AIMatching from "./pages/AIMatching";
import PremiumFeatures from "./pages/PremiumFeatures";
import BrowseProfilesPage from "./pages/BrowseProfiles";
import SuccessStoriesPage from "./pages/SuccessStories";
import ContactUsPage from "./pages/ContactUs";
import PrivacyPolicyPage from "./pages/PrivacyPolicy";
import TermsOfServicePage from "./pages/TermsOfService";
import SafetyTipsPage from "./pages/SafetyTips";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/search" element={<Search />} />
          <Route path="/browse-profiles" element={<BrowseProfilesPage />} />
          <Route path="/success-stories" element={<SuccessStoriesPage />} />
          <Route path="/contact-us" element={<ContactUsPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms-of-service" element={<TermsOfServicePage />} />
          <Route path="/safety-tips" element={<SafetyTipsPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/interests" element={<Interests />} />
          <Route path="/matches" element={<Matches />} />
          <Route path="/ai-matching" element={<AIMatching />} />
          <Route path="/background-verification" element={<BackgroundVerification />} />
          <Route path="/wedding-services" element={<WeddingServices />} />
          <Route path="/premium" element={<PremiumFeatures />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
