import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";
import { Link } from "react-router-dom";
import { useLocalization } from "@/contexts/LocalizationContext";

export const Hero = () => {
  const { t } = useLocalization();

  return (
    <section className="min-h-screen gradient-hero flex items-center justify-center px-4 py-20">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left animate-slide-up">
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              {t('hero.title')}
              <span className="block text-secondary-glow">{t('hero.titleHighlight')}</span>
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed">
              {t('hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/qr-code">
                <Button variant="hero" size="lg" className="text-lg px-8 py-4">
                  <Download className="mr-2" />
                  {t('hero.download')}
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 bg-white/10 border-white/30 text-white hover:bg-white/20">
                {t('hero.learnMore')}
              </Button>
            </div>
          </div>
          
          <div className="relative animate-fade-in">
            <div className="relative animate-float">
              <img 
                src={heroImage} 
                alt="Students learning sign language with UniSign app" 
                className="w-full h-auto rounded-2xl shadow-hero"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};