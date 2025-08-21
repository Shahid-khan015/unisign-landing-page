import { Hero } from "@/components/Hero";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Users, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import { useLocalization } from "@/contexts/LocalizationContext";

const Index = () => {
  const { t } = useLocalization();

  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      
      {/* Quick Overview Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-background to-muted/20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-8">{t('landing.whyChoose')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <BookOpen className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">{t('landing.learnEffectively')}</h3>
              <p className="text-muted-foreground mb-4">{t('landing.learnDescription')}</p>
              <Link to="/features">
                <Button variant="outline" size="sm" className="group">
                  {t('landing.exploreFeatures')} <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </Card>
            
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <Users className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">{t('landing.builtForEveryone')}</h3>
              <p className="text-muted-foreground mb-4">{t('landing.builtDescription')}</p>
              <Link to="/about">
                <Button variant="outline" size="sm" className="group">
                  {t('landing.ourMission')} <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </Card>
            
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <Download className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">{t('landing.getStartedToday')}</h3>
              <p className="text-muted-foreground mb-4">{t('landing.getStartedDescription')}</p>
              <Link to="/qr-code">
                <Button variant="outline" size="sm" className="group">
                  {t('landing.downloadNow')} <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </Card>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
