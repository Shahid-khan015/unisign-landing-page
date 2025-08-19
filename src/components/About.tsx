import { Card } from "@/components/ui/card";
import { Heart, Users, Target, Award } from "lucide-react";

export const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Accessibility First",
      description: "We believe everyone deserves equal access to communication and learning opportunities."
    },
    {
      icon: Users,
      title: "Community Driven",
      description: "Built by and for the deaf and mute community with continuous feedback and improvement."
    },
    {
      icon: Target,
      title: "Goal Oriented",
      description: "Structured learning paths that help students achieve their sign language goals effectively."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Award-winning technology that sets new standards in accessibility education."
    }
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            About UniSign
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            UniSign is more than just an app - it's a movement towards breaking communication barriers. 
            Our mission is to empower deaf and mute students with cutting-edge technology that makes 
            sign language learning accessible, engaging, and effective.
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
              Coming Soon
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              UniSign is currently in development. We're working hard to bring you the most innovative 
              sign language learning experience. Download our website and stay tuned for the official launch!
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