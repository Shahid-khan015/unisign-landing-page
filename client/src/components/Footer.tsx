import { Button } from "@/components/ui/button";
import { Mail, Phone, Heart, Facebook, Twitter, Instagram, Linkedin, Accessibility } from "lucide-react";
import { Link } from "react-router-dom";
import { useLocalization } from "@/contexts/LocalizationContext";

export const Footer = () => {
  const { t } = useLocalization();
  
  return (
    <footer className="bg-foreground text-white py-8 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Mission & Purpose */}
          <div className="md:col-span-1">
            <h3 className="text-xl md:text-2xl font-bold mb-4 gradient-hero bg-clip-text text-transparent">
              UniSign
            </h3>
            <p className="text-gray-300 mb-4 leading-relaxed text-sm md:text-base">
              {t('footer.mission')}
            </p>
            <div className="flex items-center text-gray-300 mb-4">
              <Accessibility className="w-5 h-5 mr-3" />
              <span className="text-sm">{t('footer.accessibility')}</span>
            </div>
            
            {/* Contact Information */}
            <div className="space-y-2 mb-4">
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
              <Button 
                variant="ghost" 
                size="icon" 
                className="text-gray-300 hover:text-white hover:bg-white/10"
                onClick={() => window.open('https://facebook.com/unisign', '_blank')}
              >
                <Facebook className="w-5 h-5" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="text-gray-300 hover:text-white hover:bg-white/10"
                onClick={() => window.open('https://twitter.com/unisign', '_blank')}
              >
                <Twitter className="w-5 h-5" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="text-gray-300 hover:text-white hover:bg-white/10"
                onClick={() => window.open('https://instagram.com/unisign', '_blank')}
              >
                <Instagram className="w-5 h-5" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="text-gray-300 hover:text-white hover:bg-white/10"
                onClick={() => window.open('https://linkedin.com/company/unisign', '_blank')}
              >
                <Linkedin className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Quick Access */}
          <div className="md:col-span-1">
            <h4 className="text-lg font-semibold mb-4">{t('footer.quickAccess')}</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <h5 className="font-medium mb-3 text-white">{t('footer.learn')}</h5>
                <ul className="space-y-2">
                  <li><Link to="/features" className="text-gray-300 hover:text-white transition-colors text-sm">{t('nav.features')}</Link></li>
                  <li><Link to="/how-it-works" className="text-gray-300 hover:text-white transition-colors text-sm">{t('nav.howItWorks')}</Link></li>
                  <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors text-sm">{t('nav.about')}</Link></li>
                </ul>
              </div>
              <div>
                <h5 className="font-medium mb-3 text-white">{t('footer.support')}</h5>
                <ul className="space-y-2">
                  <li>
                    <button 
                      onClick={() => window.location.href = 'mailto:support@unisign.com'} 
                      className="text-gray-300 hover:text-white transition-colors text-sm text-left"
                    >
                      {t('footer.contactUs')}
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => window.open('/help', '_blank')} 
                      className="text-gray-300 hover:text-white transition-colors text-sm"
                    >
                      {t('footer.helpCenter')}
                    </button>
                  </li>
                  <li><Link to="/privacy-policy" className="text-gray-300 hover:text-white transition-colors text-sm">{t('footer.privacyPolicy')}</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center text-gray-300 mb-4 md:mb-0">
              <span>{t('footer.madeWith')}</span>
              <Heart className="w-4 h-4 mx-2 text-red-500 fill-red-500" />
              <span>{t('footer.forCommunity')}</span>
            </div>
            <div className="text-gray-300 text-xs">
              {t('footer.copyright')}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};