import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";
import { Link } from "react-router-dom";
import { useLocalization } from "@/contexts/LocalizationContext";

export const Hero = () => {
  const { t } = useLocalization();

  return (
    <section className="min-h-screen gradient-hero flex items-center justify-center px-4 py-16 sm:py-20">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="text-center lg:text-left animate-slide-up">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              {t('hero.title')}
              <span className="block text-secondary-glow mt-1 sm:mt-2">{t('hero.titleHighlight')}</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-6 sm:mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {t('hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <Link to="/qr-code">
                <Button variant="hero" size="lg" className="text-sm sm:text-base lg:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto">
                  <Download className="mr-2" />
                  {t('hero.download')}
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="text-sm sm:text-base lg:text-lg px-6 sm:px-8 py-3 sm:py-4 bg-white/10 border-white/30 text-white hover:bg-white/20 w-full sm:w-auto">
                {t('hero.learnMore')}
              </Button>
            </div>
          </div>
          
          <div className="relative animate-fade-in">
            <div className="relative animate-float">
              <img 
                src={heroImage} 
                alt="Students learning sign language with UniSign app" 
                className="w-full h-auto rounded-xl sm:rounded-2xl shadow-hero max-w-lg mx-auto lg:max-w-none"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};