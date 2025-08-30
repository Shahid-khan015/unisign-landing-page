import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, UserPlus, BookOpen, Trophy, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useLocalization } from "@/contexts/LocalizationContext";

export const HowItWorks = () => {
  const { t } = useLocalization();

  const steps = [
    {
      step: "01",
      icon: Download,
      title: t('howItWorks.step1'),
      description: t('howItWorks.step1Desc'),
      color: "primary"
    },
    {
      step: "02", 
      icon: UserPlus,
      title: t('howItWorks.step2'),
      description: t('howItWorks.step2Desc'),
      color: "secondary"
    },
    {
      step: "03",
      icon: BookOpen,
      title: t('howItWorks.step3'),
      description: t('howItWorks.step3Desc'),
      color: "primary"
    },
    {
      step: "04",
      icon: Trophy,
      title: t('howItWorks.step4'),
      description: t('howItWorks.step4Desc'),
      color: "secondary"
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-10 sm:mb-12 lg:mb-16 animate-slide-up">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6">
            {t('howItWorks.title')}
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
            {t('howItWorks.subtitle')}
          </p>
        </div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden xl:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-secondary to-primary transform -translate-y-1/2 z-0"></div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative z-10">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <Card key={index} className="p-6 sm:p-8 gradient-card shadow-card hover:shadow-feature transition-all duration-300 animate-fade-in text-center group border-0">
                  <div className="relative mb-6">
                    <div className="w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 gradient-hero rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 text-white" />
                    </div>
                    <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-6 h-6 sm:w-8 sm:h-8 bg-secondary text-white rounded-full flex items-center justify-center text-xs sm:text-sm font-bold">
                      {step.step}
                    </div>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3 sm:mb-4">{step.title}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{step.description}</p>
                </Card>
              );
            })}
          </div>
        </div>

        <div className="mt-12 sm:mt-16 text-center">
          <Card className="p-6 sm:p-8 lg:p-12 gradient-feature shadow-card max-w-4xl mx-auto">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mb-4 sm:mb-6">
              {t('howItWorks.ready')}
            </h3>
            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
              {t('howItWorks.readyDesc')}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link to="/qr-code">
                <Button variant="hero" size="lg" className="text-sm sm:text-base lg:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto">
                  <Download className="mr-2" />
                  {t('landing.downloadNow')}
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="text-sm sm:text-base lg:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto">
                {t('howItWorks.watchDemo')}
                <ArrowRight className="ml-2" />
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};