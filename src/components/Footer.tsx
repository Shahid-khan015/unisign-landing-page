import { Button } from "@/components/ui/button";
import { Heart, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import { useLocalization } from "@/contexts/LocalizationContext";

export const Footer = () => {
  const { t } = useLocalization();
  
  return (
    <footer className="bg-foreground text-white py-6 sm:py-8 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-4 sm:gap-6">
          {/* Brand & Mission */}
          <div className="text-center lg:text-left max-w-md">
            <h3 className="text-xl sm:text-2xl font-bold mb-2 gradient-hero bg-clip-text text-transparent">
              UniSign
            </h3>
            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
              {t('footer.mission')}
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 lg:gap-6 text-xs sm:text-sm">
            <Link to="/features" className="text-gray-300 hover:text-white transition-colors font-medium">
              {t('nav.features')}
            </Link>
            <Link to="/how-it-works" className="text-gray-300 hover:text-white transition-colors font-medium">
              {t('nav.howItWorks')}
            </Link>
            <Link to="/about" className="text-gray-300 hover:text-white transition-colors font-medium">
              {t('nav.about')}
            </Link>
            <Link to="/privacy-policy" className="text-gray-300 hover:text-white transition-colors font-medium">
              {t('footer.privacyPolicy')}
            </Link>
          </div>

          {/* Social Media */}
          <div className="flex space-x-2 sm:space-x-3">
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-gray-300 hover:text-white hover:bg-white/10 h-7 w-7 sm:h-8 sm:w-8 p-1"
              onClick={() => window.open('https://facebook.com/', '_blank')}
            >
              <Facebook className="w-3 h-3 sm:w-4 sm:h-4" />
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-gray-300 hover:text-white hover:bg-white/10 h-7 w-7 sm:h-8 sm:w-8 p-1"
              onClick={() => window.open('https://twitter.com/', '_blank')}
            >
              <Twitter className="w-3 h-3 sm:w-4 sm:h-4" />
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-gray-300 hover:text-white hover:bg-white/10 h-7 w-7 sm:h-8 sm:w-8 p-1"
              onClick={() => window.open('https://www.instagram.com/unisign_edu?igsh=NmtqaWxmbHdleG43', '_blank')}
            >
              <Instagram className="w-3 h-3 sm:w-4 sm:h-4" />
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-gray-300 hover:text-white hover:bg-white/10 h-7 w-7 sm:h-8 sm:w-8 p-1"
              onClick={() => window.open('https://linkedin.com/', '_blank')}
            >
              <Linkedin className="w-3 h-3 sm:w-4 sm:h-4" />
            </Button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-4 sm:mt-6 pt-4 sm:pt-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-4">
            <div className="flex items-center text-gray-300 text-xs sm:text-sm">
              <span>{t('footer.madeWith')}</span>
              <Heart className="w-3 h-3 sm:w-4 sm:h-4 mx-1 sm:mx-2 text-red-500 fill-red-500" />
              <span>{t('footer.forCommunity')}</span>
            </div>
            <div className="text-gray-300 text-xs sm:text-sm font-medium">
              {t('footer.copyright')}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
