import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Cpu, BookOpen, MessageSquare, PlayCircle, ArrowRight, PenTool, Gamepad2 } from "lucide-react";

export const Features = () => {
  const features = [
    {
      icon: Cpu,
      title: "3D Sign Models",
      description: "Interactive 3D models that show precise hand movements and positioning for perfect sign language learning.",
      color: "text-primary"
    },
    {
      icon: MessageSquare,
      title: "Text-to-Sign AI",
      description: "Revolutionary AI that converts text into sign language animations, making communication seamless and instant.",
      color: "text-secondary"
    },
    {
      icon: BookOpen,
      title: "World Game Vocabulary",
      description: "Explore sign language from different countries and cultures through engaging gamified vocabulary challenges.",
      color: "text-primary"
    },
    {
      icon: PlayCircle,
      title: "Interactive Quizzes",
      description: "Multiple quiz formats including speed challenges, memory games, and practical signing assessments.",
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
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 gradient-hero rounded-lg flex items-center justify-center flex-shrink-0">
                  <PenTool className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-primary mb-3">Digital Whiteboard</h4>
                  <p className="text-muted-foreground">Practice sign language with our interactive whiteboard and get instant feedback on your hand movements.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 gradient-hero rounded-lg flex items-center justify-center flex-shrink-0">
                  <Gamepad2 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-secondary mb-3">Gamified Learning</h4>
                  <p className="text-muted-foreground">Level up your skills with achievement badges, leaderboards, and fun challenges.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 gradient-hero rounded-lg flex items-center justify-center flex-shrink-0">
                  <Cpu className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-primary mb-3">AI-Powered Recognition</h4>
                  <p className="text-muted-foreground">Advanced computer vision technology that understands and evaluates your signing accuracy.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 gradient-hero rounded-lg flex items-center justify-center flex-shrink-0">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-secondary mb-3">Comprehensive Curriculum</h4>
                  <p className="text-muted-foreground">From basic alphabet to complex conversations, learn at your own pace with structured lessons.</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};