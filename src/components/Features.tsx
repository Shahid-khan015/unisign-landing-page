import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Cpu, BookOpen, MessageSquare, PlayCircle, ArrowRight } from "lucide-react";

export const Features = () => {
  const features = [
    {
      icon: Cpu,
      title: "3D Sign Models",
      description: "Interactive 3D models that show precise hand movements and positioning for perfect sign language learning.",
      color: "text-primary"
    },
    {
      icon: BookOpen,
      title: "Interactive Quizzes",
      description: "Gamified learning experience with adaptive quizzes that adjust to your learning pace and progress.",
      color: "text-secondary"
    },
    {
      icon: MessageSquare,
      title: "Sign-to-Text AI",
      description: "Advanced AI technology that recognizes your signs and provides real-time feedback and corrections.",
      color: "text-primary"
    },
    {
      icon: PlayCircle,
      title: "Video Lessons",
      description: "Professional video lessons from certified sign language instructors with step-by-step guidance.",
      color: "text-secondary"
    }
  ];

  return (
    <section className="py-20 px-4 gradient-feature">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Powerful Features
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Experience the future of sign language learning with our innovative features designed 
            to make learning accessible, engaging, and effective for everyone.
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
                    <p className="text-muted-foreground mb-6 leading-relaxed">{feature.description}</p>
                    <Button variant="feature" className="group/btn">
                      Learn More
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <Card className="p-8 lg:p-12 gradient-card shadow-card max-w-4xl mx-auto">
            <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-6">
              Why Choose UniSign?
            </h3>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div>
                <h4 className="text-xl font-semibold text-primary mb-3">Personalized Learning</h4>
                <p className="text-muted-foreground">AI-powered personalization that adapts to your learning style and pace.</p>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-secondary mb-3">Expert Content</h4>
                <p className="text-muted-foreground">Created by certified sign language instructors and accessibility experts.</p>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-primary mb-3">Progress Tracking</h4>
                <p className="text-muted-foreground">Detailed analytics and progress reports to keep you motivated.</p>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-secondary mb-3">Community Support</h4>
                <p className="text-muted-foreground">Connect with other learners and native signers in our community.</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};