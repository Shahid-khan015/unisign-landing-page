import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Heart } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-foreground text-white py-16 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-6 gradient-hero bg-clip-text text-transparent">
              UniSign
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Breaking barriers with sign language. Empowering deaf and mute students with innovative AI-powered learning experiences.
            </p>
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

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#about" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a></li>
              <li><a href="#how-it-works" className="text-gray-300 hover:text-white transition-colors">How It Works</a></li>
              <li><a href="#testimonials" className="text-gray-300 hover:text-white transition-colors">Testimonials</a></li>
              <li><a href="#download" className="text-gray-300 hover:text-white transition-colors">Download</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Support</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Accessibility</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Community Guidelines</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-center text-gray-300">
                <Mail className="w-5 h-5 mr-3 flex-shrink-0" />
                <span>support@unisign.com</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Phone className="w-5 h-5 mr-3 flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center text-gray-300">
                <MapPin className="w-5 h-5 mr-3 flex-shrink-0" />
                <span>123 Accessibility Ave, San Francisco, CA 94102</span>
              </div>
            </div>
            
            <div className="mt-6">
              <h5 className="font-semibold mb-3">Newsletter</h5>
              <p className="text-sm text-gray-300 mb-4">Stay updated with the latest features and accessibility news.</p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="flex-1 px-4 py-2 rounded-l-md text-black"
                />
                <Button variant="secondary" className="rounded-l-none">
                  Subscribe
                </Button>
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
              <span>for accessibility</span>
            </div>
            <div className="text-gray-300 text-sm">
              © 2024 UniSign. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};