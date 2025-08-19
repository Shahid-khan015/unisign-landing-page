import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download, QrCode } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

export const Hero = () => {
  return (
    <section className="min-h-screen gradient-hero flex items-center justify-center px-4 py-20">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left animate-slide-up">
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Breaking Barriers with 
              <span className="block text-secondary-glow">Sign Language</span>
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed">
              Empower deaf and mute students with UniSign - the revolutionary app that makes sign language accessible through AI-powered learning, 3D models, and interactive experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="lg" className="text-lg px-8 py-4">
                <Download className="mr-2" />
                Download UniSign
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 bg-white/10 border-white/30 text-white hover:bg-white/20">
                Learn More
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
            
            {/* QR Code Card */}
            <Card className="absolute -bottom-6 -right-6 lg:-right-12 p-6 gradient-card shadow-card">
              <div className="text-center">
                <QrCode className="w-16 h-16 mx-auto mb-3 text-primary" />
                <p className="text-sm font-medium text-foreground">Scan to Download</p>
                <p className="text-xs text-muted-foreground">Available on all platforms</p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};