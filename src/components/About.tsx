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
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            {t('about.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t('about.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <Card key={index} className="p-8 gradient-feature hover:shadow-feature transition-all duration-300 animate-fade-in border-0">
                <div className="text-center">
                  <div className="w-16 h-16 gradient-hero rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <Card className="p-8 lg:p-12 gradient-card shadow-card max-w-4xl mx-auto">
            <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-6">
              {t('about.comingSoon')}
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              {t('about.comingSoonDesc')}
            </p>
            <div className="flex justify-center items-center space-x-4">
              <div className="w-4 h-4 bg-primary rounded-full animate-bounce"></div>
              <div className="w-4 h-4 bg-secondary rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
              <div className="w-4 h-4 bg-accent rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};