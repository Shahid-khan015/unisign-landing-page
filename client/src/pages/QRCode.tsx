import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { QrCode, Download, Smartphone, ArrowLeft, Share2, Copy, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useLocalization } from "@/contexts/LocalizationContext";

const QRCode = () => {
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();
  const { t } = useLocalization();

  const handleCopyLink = async () => {
    try {
      const currentUrl = window.location.href;
      await navigator.clipboard.writeText(currentUrl);
      setCopied(true);
      toast({
        title: t('qr.copied'),
        description: "QR code link has been copied to your clipboard.",
      });
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast({
        title: "Failed to copy",
        description: "Please try copying the link manually.",
        variant: "destructive",
      });
    }
  };

  const handleShare = async () => {
    const shareData = {
      title: t('qr.title'),
      text: t('qr.subtitle'),
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
        toast({
          title: "Shared successfully!",
          description: "Thank you for sharing UniSign with others.",
        });
      } else {
        // Fallback for browsers that don't support native sharing
        await navigator.clipboard.writeText(shareData.url);
        toast({
          title: "Link copied!",
          description: "Share link has been copied to your clipboard.",
        });
      }
    } catch (err) {
      if (err instanceof Error && err.name !== 'AbortError') {
        toast({
          title: "Share failed",
          description: "Please try sharing manually.",
          variant: "destructive",
        });
      }
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="py-20 px-4 gradient-hero">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-16">
            <div className="flex justify-start mb-8">
              <Link to="/" className="inline-flex items-center text-white/80 hover:text-white transition-colors bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg hover:bg-white/20">
                <ArrowLeft className="w-4 h-4 mr-2" />
                {t('qr.backHome')}
              </Link>
            </div>
            <div className="text-center">
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-6">
                {t('qr.title')}
              </h1>
              <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                {t('qr.subtitle')}
              </p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 items-start max-w-6xl mx-auto">
            {/* QR Code Section - Main content */}
            <div className="flex-1 lg:flex-[2] flex justify-center">
              <Card className="p-6 sm:p-8 lg:p-12 gradient-card shadow-card text-center border-0 w-full max-w-xl">
                <div className="bg-white rounded-2xl p-6 sm:p-8 lg:p-12 mb-6">
                  <QrCode className="w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 mx-auto text-gray-800" />
                </div>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mb-4">
                  {t('qr.scanTitle')}
                </h2>
                <p className="text-sm sm:text-base lg:text-lg text-muted-foreground mb-8 leading-relaxed">
                  {t('qr.scanDescription')}
                </p>
                <div className="flex gap-4 justify-center flex-wrap">
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="flex items-center px-6 py-2"
                    onClick={handleShare}
                  >
                    <Share2 className="w-4 h-4 mr-2" />
                    {t('qr.share')}
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="flex items-center px-6 py-2"
                    onClick={handleCopyLink}
                  >
                    {copied ? (
                      <>
                        <Check className="w-4 h-4 mr-2" />
                        {t('qr.copied')}
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4 mr-2" />
                        {t('qr.copyLink')}
                      </>
                    )}
                  </Button>
                </div>
              </Card>
            </div>

            {/* System Requirements & Features - Sidebar */}
            <div className="flex-1 space-y-6">
              <Card className="p-6 gradient-card shadow-card border-0">
                <h3 className="text-xl font-bold text-foreground mb-4">{t('qr.systemReq')}</h3>
                <div className="space-y-4">
                  <div className="flex items-center text-muted-foreground">
                    <Smartphone className="w-5 h-5 mr-3 flex-shrink-0" />
                    <span className="text-sm">{t('qr.iosAndroid')}</span>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Download className="w-5 h-5 mr-3 flex-shrink-0" />
                    <span className="text-sm">{t('qr.internetReq')}</span>
                  </div>
                </div>
              </Card>

              <Card className="p-6 gradient-card shadow-card border-0">
                <h3 className="text-xl font-bold text-foreground mb-4">{t('qr.whatsIncluded')}</h3>
                <div className="space-y-3">
                  <div className="flex items-start text-muted-foreground">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span className="text-sm">{t('qr.aiLearning')}</span>
                  </div>
                  <div className="flex items-start text-muted-foreground">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span className="text-sm">{t('qr.signModels')}</span>
                  </div>
                  <div className="flex items-start text-muted-foreground">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span className="text-sm">{t('qr.digitalWhiteboard')}</span>
                  </div>
                  <div className="flex items-start text-muted-foreground">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span className="text-sm">{t('qr.vocabularyPractice')}</span>
                  </div>
                  <div className="flex items-start text-muted-foreground">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span className="text-sm">{t('qr.signToText')}</span>
                  </div>
                  <div className="flex items-start text-muted-foreground">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span className="text-sm">{t('qr.mathsLearning')}</span>
                  </div>
                  <div className="flex items-start text-muted-foreground">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span className="text-sm">{t('qr.realTimeRecognition')}</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-16 text-center">
            <Card className="p-8 lg:p-12 gradient-feature shadow-card border-0 max-w-4xl mx-auto">
              <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                {t('qr.needHelp')}
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto leading-relaxed">
                {t('qr.helpDescription')}
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <Link to="/features">
                  <Button variant="outline" size="lg" className="px-6">
                    {t('qr.exploreFeatures')}
                  </Button>
                </Link>
                <Link to="/how-it-works">
                  <Button variant="outline" size="lg" className="px-6">
                    {t('qr.howItWorksBtn')}
                  </Button>
                </Link>
                <Link to="/about">
                  <Button variant="outline" size="lg" className="px-6">
                    {t('qr.aboutBtn')}
                  </Button>
                </Link>
              </div>
            </Card>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default QRCode; 