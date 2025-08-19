import { Button } from "@/components/ui/button";
import { Mail, Phone, Heart, Facebook, Twitter, Instagram, Linkedin, Accessibility } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-foreground text-white py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Mission & Purpose */}
          <div className="md:col-span-1">
            <h3 className="text-3xl font-bold mb-6 gradient-hero bg-clip-text text-transparent">
              UniSign
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed text-lg">
              Empowering deaf and mute communities through innovative AI-powered sign language learning. 
              Breaking communication barriers one sign at a time.
            </p>
            <div className="flex items-center text-gray-300 mb-6">
              <Accessibility className="w-5 h-5 mr-3" />
              <span className="text-sm">Built for accessibility, designed for everyone</span>
            </div>
            
            {/* Contact Information */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center text-gray-300 text-sm">
                <Mail className="w-4 h-4 mr-3 flex-shrink-0" />
                <span>support@unisign.com</span>
              </div>
              <div className="flex items-center text-gray-300 text-sm">
                <Phone className="w-4 h-4 mr-3 flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white hover:bg-white/10">
                <Facebook className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white hover:bg-white/10">
                <Twitter className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white hover:bg-white/10">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white hover:bg-white/10">
                <Linkedin className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Quick Access */}
          <div className="md:col-span-1">
            <h4 className="text-xl font-semibold mb-6">Quick Access</h4>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h5 className="font-medium mb-3 text-white">Learn</h5>
                <ul className="space-y-2">
                  <li><Link to="/features" className="text-gray-300 hover:text-white transition-colors text-sm">Features</Link></li>
                  <li><Link to="/how-it-works" className="text-gray-300 hover:text-white transition-colors text-sm">How It Works</Link></li>
                  <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors text-sm">About Us</Link></li>
                </ul>
              </div>
              <div>
                <h5 className="font-medium mb-3 text-white">Support</h5>
                <ul className="space-y-2">
                  <li><a href="mailto:support@unisign.com" className="text-gray-300 hover:text-white transition-colors text-sm">Contact Us</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Help Center</a></li>
                  <li><Link to="/privacy-policy" className="text-gray-300 hover:text-white transition-colors text-sm">Privacy Policy</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center text-gray-300 mb-4 md:mb-0">
              <span>Made with</span>
              <Heart className="w-4 h-4 mx-2 text-red-500 fill-red-500" />
              <span>for the deaf and mute community</span>
            </div>
            <div className="text-gray-300 text-sm">
              © 2024 UniSign. Empowering communication through technology.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};