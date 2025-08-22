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
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            {t('howItWorks.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t('howItWorks.subtitle')}
          </p>
        </div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-secondary to-primary transform -translate-y-1/2 z-0"></div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <Card key={index} className="p-8 gradient-card shadow-card hover:shadow-feature transition-all duration-300 animate-fade-in text-center group border-0">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 gradient-hero rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-secondary text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {step.step}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </Card>
              );
            })}
          </div>
        </div>

        <div className="mt-16 text-center">
          <Card className="p-8 lg:p-12 gradient-feature shadow-card max-w-4xl mx-auto">
            <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-6">
              {t('howItWorks.ready')}
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              {t('howItWorks.readyDesc')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/qr-code">
                <Button variant="hero" size="lg" className="text-lg px-8 py-4">
                  <Download className="mr-2" />
                  {t('landing.downloadNow')}
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4">
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