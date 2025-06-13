
import { Heart, Phone, Mail, MapPin, Facebook, Instagram, Youtube } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";

const Footer = () => {
  const quickLinks = [
    { name: "Browse Profiles", url: "/browse-profiles" },
    { name: "Search by City", url: "/search" },
    { name: "Search by Community", url: "/search" },
    { name: "Success Stories", url: "/success-stories" },
    { name: "Mobile App", url: "#" },
    { name: "Help Center", url: "/contact-us" }
  ];

  const matrimonyServices = [
    { name: "Wedding Photography", url: "/wedding-services" },
    { name: "Wedding Planning", url: "/wedding-services" },
    { name: "Astrology Services", url: "/wedding-services" },
    { name: "Wedding Venues", url: "/wedding-services" },
    { name: "Bridal Makeup", url: "/wedding-services" },
    { name: "Wedding Cards", url: "/wedding-services" }
  ];

  const supportLinks = [
    { name: "Customer Care", url: "/contact-us" },
    { name: "Contact Us", url: "/contact-us" },
    { name: "Premium Plans", url: "/premium" },
    { name: "Safety Tips", url: "/safety-tips" },
    { name: "Terms of Service", url: "/terms-of-service" },
    { name: "Privacy Policy", url: "/privacy-policy" }
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Rishta Sathi</h3>
                <p className="text-sm text-gray-400">Perfect Matches, Perfect Lives</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              India's most trusted matrimony platform connecting hearts, families, and traditions for over 15 years.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-rose-400" />
                <span className="text-gray-300">+91 1800-123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-rose-400" />
                <span className="text-gray-300">support@rishtasathi.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-rose-400" />
                <span className="text-gray-300">Mumbai, India</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.url} 
                    className="text-gray-300 hover:text-rose-400 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Matrimony Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Matrimony Services</h4>
            <ul className="space-y-3">
              {matrimonyServices.map((service, index) => (
                <li key={index}>
                  <Link 
                    to={service.url} 
                    className="text-gray-300 hover:text-rose-400 transition-colors duration-200 text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Support & Legal</h4>
            <ul className="space-y-3">
              {supportLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.url} 
                    className="text-gray-300 hover:text-rose-400 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-gray-800" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-gray-400 text-sm">
            © 2024 Rishta Sathi. All rights reserved. | Made with ❤️ for Indian families
          </div>
          
          {/* Social Media Links */}
          <div className="flex items-center space-x-4">
            <a href="#" className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center hover:from-blue-700 hover:to-blue-800 transition-all duration-200">
              <Facebook className="w-4 h-4 text-white" />
            </a>
            <a href="#" className="w-8 h-8 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center hover:from-pink-600 hover:to-purple-700 transition-all duration-200">
              <Instagram className="w-4 h-4 text-white" />
            </a>
            <a href="#" className="w-8 h-8 bg-gradient-to-br from-red-600 to-red-700 rounded-full flex items-center justify-center hover:from-red-700 hover:to-red-800 transition-all duration-200">
              <Youtube className="w-4 h-4 text-white" />
            </a>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center space-x-6 text-xs text-gray-500">
            <span className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>SSL Secured</span>
            </span>
            <span className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>100% Verified Profiles</span>
            </span>
            <span className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>ISO Certified</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
