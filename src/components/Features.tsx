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
    <section className="py-20 px-4 gradient-feature">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            {t('features.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t('features.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="p-8 lg:p-10 gradient-card shadow-card hover:shadow-feature transition-all duration-300 animate-fade-in border-0 group">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 gradient-hero rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground mb-4">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <Card className="p-8 lg:p-12 gradient-card shadow-card max-w-4xl mx-auto">
            <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-6">
              {t('features.whyChoose')}
            </h3>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 gradient-hero rounded-lg flex items-center justify-center flex-shrink-0">
                  <PenTool className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-primary mb-3">{t('features.digitalWhiteboard')}</h4>
                  <p className="text-muted-foreground">{t('features.digitalWhiteboardDesc')}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 gradient-hero rounded-lg flex items-center justify-center flex-shrink-0">
                  <Gamepad2 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-secondary mb-3">{t('features.gamifiedLearning')}</h4>
                  <p className="text-muted-foreground">{t('features.gamifiedDesc')}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 gradient-hero rounded-lg flex items-center justify-center flex-shrink-0">
                  <Cpu className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-primary mb-3">{t('features.aiRecognition')}</h4>
                  <p className="text-muted-foreground">{t('features.aiRecognitionDesc')}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 gradient-hero rounded-lg flex items-center justify-center flex-shrink-0">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-secondary mb-3">{t('features.curriculum')}</h4>
                  <p className="text-muted-foreground">{t('features.curriculumDesc')}</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};