import { Card } from "@/components/ui/card";
import { Heart, Users, Target, Award } from "lucide-react";
import { useLocalization } from "@/contexts/LocalizationContext";

export const About = () => {
  const { t } = useLocalization();

  const values = [
    {
      icon: Heart,
      title: t('about.accessibilityFirst'),
      description: t('about.accessibilityDesc')
    },
    {
      icon: Users,
      title: t('about.communityDriven'),
      description: t('about.communityDesc')
    },
    {
      icon: Target,
      title: t('about.goalOriented'),
      description: t('about.goalDesc')
    },
    {
      icon: Award,
      title: t('about.excellence'),
      description: t('about.excellenceDesc')
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-10 sm:mb-12 lg:mb-16 animate-slide-up">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6">
            {t('about.title')}
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
            {t('about.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <Card key={index} className="p-6 sm:p-8 gradient-feature hover:shadow-feature transition-all duration-300 animate-fade-in border-0">
                <div className="text-center">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 gradient-hero rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3 sm:mb-4">{value.title}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="mt-12 sm:mt-16 text-center">
          <Card className="p-6 sm:p-8 lg:p-12 gradient-card shadow-card max-w-4xl mx-auto">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mb-4 sm:mb-6">
              {t('about.comingSoon')}
            </h3>
            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground mb-4 sm:mb-6 px-4">
              {t('about.comingSoonDesc')}
            </p>
            <div className="flex justify-center items-center space-x-2 sm:space-x-4">
              <div className="w-3 h-3 sm:w-4 sm:h-4 bg-primary rounded-full animate-bounce"></div>
              <div className="w-3 h-3 sm:w-4 sm:h-4 bg-secondary rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
              <div className="w-3 h-3 sm:w-4 sm:h-4 bg-accent rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};