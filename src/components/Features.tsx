import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Cpu, BookOpen, MessageSquare, PlayCircle, ArrowRight, PenTool, Gamepad2 } from "lucide-react";
import { useLocalization } from "@/contexts/LocalizationContext";

export const Features = () => {
  const { t } = useLocalization();

  const features = [
    {
      icon: Cpu,
      title: t('features.3dModels'),
      description: t('features.3dDesc'),
      color: "text-primary"
    },
    {
      icon: MessageSquare,
      title: t('features.textToSign'),
      description: t('features.textToSignDesc'),
      color: "text-secondary"
    },
    {
      icon: BookOpen,
      title: t('features.worldGame'),
      description: t('features.worldGameDesc'),
      color: "text-primary"
    },
    {
      icon: PlayCircle,
      title: t('features.quizzes'),
      description: t('features.quizzesDesc'),
      color: "text-secondary"
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 gradient-feature">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-10 sm:mb-12 lg:mb-16 animate-slide-up">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6">
            {t('features.title')}
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
            {t('features.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="p-6 sm:p-8 lg:p-10 gradient-card shadow-card hover:shadow-feature transition-all duration-300 animate-fade-in border-0 group">
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 text-center sm:text-left">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 gradient-hero rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-foreground mb-2 sm:mb-3 lg:mb-4">{feature.title}</h3>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="mt-12 sm:mt-16 text-center">
          <Card className="p-6 sm:p-8 lg:p-12 gradient-card shadow-card max-w-4xl mx-auto">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mb-4 sm:mb-6">
              {t('features.whyChoose')}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 text-center md:text-left">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 gradient-hero rounded-lg flex items-center justify-center flex-shrink-0">
                  <PenTool className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl font-semibold text-primary mb-2 sm:mb-3">{t('features.digitalWhiteboard')}</h4>
                  <p className="text-sm sm:text-base text-muted-foreground">{t('features.digitalWhiteboardDesc')}</p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row items-center md:items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 gradient-hero rounded-lg flex items-center justify-center flex-shrink-0">
                  <Gamepad2 className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl font-semibold text-secondary mb-2 sm:mb-3">{t('features.gamifiedLearning')}</h4>
                  <p className="text-sm sm:text-base text-muted-foreground">{t('features.gamifiedDesc')}</p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row items-center md:items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 gradient-hero rounded-lg flex items-center justify-center flex-shrink-0">
                  <Cpu className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl font-semibold text-primary mb-2 sm:mb-3">{t('features.aiRecognition')}</h4>
                  <p className="text-sm sm:text-base text-muted-foreground">{t('features.aiRecognitionDesc')}</p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row items-center md:items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 gradient-hero rounded-lg flex items-center justify-center flex-shrink-0">
                  <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl font-semibold text-secondary mb-2 sm:mb-3">{t('features.curriculum')}</h4>
                  <p className="text-sm sm:text-base text-muted-foreground">{t('features.curriculumDesc')}</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};