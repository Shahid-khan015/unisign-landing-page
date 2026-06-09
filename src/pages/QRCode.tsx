import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Smartphone, ArrowLeft, Share2, Copy, Check, Users, ExternalLink, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useLocalization } from "@/contexts/LocalizationContext";
import unisignQr from "@/assets/unisign-qr.png";

const GOOGLE_GROUP_URL = "https://groups.google.com/g/unisign09/";
const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.unisign.app";

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
      
      <section className="py-16 sm:py-20 px-4 gradient-hero">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-12 sm:mb-16">
            <div className="flex justify-start mb-6 sm:mb-8">
              <Link to="/" className="inline-flex items-center text-white/80 hover:text-white transition-colors bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg hover:bg-white/20">
                <ArrowLeft className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                {t('qr.backHome')}
              </Link>
            </div>
            <div className="text-center">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6">
                {t('qr.title')}
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed px-4">
                {t('qr.subtitle')}
              </p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start max-w-6xl mx-auto">
            {/* QR Code Section - Main content */}
            <div className="flex-1 lg:flex-[2] flex justify-center w-full">
              <Card className="p-6 sm:p-8 lg:p-12 gradient-card shadow-card text-center border-0 w-full max-w-xl">
                <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-12 mb-4 sm:mb-6">
                  <img
                    src={unisignQr}
                    alt="Scan to download UniSign on Google Play"
                    className="w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 mx-auto"
                  />
                </div>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mb-3 sm:mb-4">
                  {t('qr.scanTitle')}
                </h2>
                <p className="text-sm sm:text-base lg:text-lg text-muted-foreground mb-6 sm:mb-8 leading-relaxed px-2">
                  {t('qr.scanDescription')}
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="flex items-center px-4 sm:px-6 py-2 text-sm sm:text-base w-full sm:w-auto"
                    onClick={handleShare}
                  >
                    <Share2 className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                    {t('qr.share')}
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="flex items-center px-4 sm:px-6 py-2 text-sm sm:text-base w-full sm:w-auto"
                    onClick={handleCopyLink}
                  >
                    {copied ? (
                      <>
                        <Check className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                        {t('qr.copied')}
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                        {t('qr.copyLink')}
                      </>
                    )}
                  </Button>
                </div>
              </Card>
            </div>

            {/* System Requirements & Features - Sidebar */}
            <div className="flex-1 space-y-4 sm:space-y-6 w-full">
              <Card className="p-4 sm:p-6 gradient-card shadow-card border-0">
                <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3 sm:mb-4">{t('qr.systemReq')}</h3>
                <div className="space-y-4">
                  <div className="flex items-center text-muted-foreground">
                    <Smartphone className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 flex-shrink-0" />
                    <span className="text-xs sm:text-sm">{t('qr.iosAndroid')}</span>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Download className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 flex-shrink-0" />
                    <span className="text-xs sm:text-sm">{t('qr.internetReq')}</span>
                  </div>
                </div>
              </Card>

              <Card className="p-4 sm:p-6 gradient-card shadow-card border-0">
                <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3 sm:mb-4">{t('qr.whatsIncluded')}</h3>
                <div className="space-y-3">
                  <div className="flex items-start text-muted-foreground">
                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full mr-2 sm:mr-3 mt-1.5 sm:mt-2 flex-shrink-0"></span>
                    <span className="text-xs sm:text-sm">{t('qr.aiLearning')}</span>
                  </div>
                  <div className="flex items-start text-muted-foreground">
                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full mr-2 sm:mr-3 mt-1.5 sm:mt-2 flex-shrink-0"></span>
                    <span className="text-xs sm:text-sm">{t('qr.signModels')}</span>
                  </div>
                  <div className="flex items-start text-muted-foreground">
                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full mr-2 sm:mr-3 mt-1.5 sm:mt-2 flex-shrink-0"></span>
                    <span className="text-xs sm:text-sm">{t('qr.digitalWhiteboard')}</span>
                  </div>
                  <div className="flex items-start text-muted-foreground">
                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full mr-2 sm:mr-3 mt-1.5 sm:mt-2 flex-shrink-0"></span>
                    <span className="text-xs sm:text-sm">{t('qr.vocabularyPractice')}</span>
                  </div>
                  <div className="flex items-start text-muted-foreground">
                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full mr-2 sm:mr-3 mt-1.5 sm:mt-2 flex-shrink-0"></span>
                    <span className="text-xs sm:text-sm">{t('qr.signToText')}</span>
                  </div>
                  <div className="flex items-start text-muted-foreground">
                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full mr-2 sm:mr-3 mt-1.5 sm:mt-2 flex-shrink-0"></span>
                    <span className="text-xs sm:text-sm">{t('qr.mathsLearning')}</span>
                  </div>
                  <div className="flex items-start text-muted-foreground">
                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full mr-2 sm:mr-3 mt-1.5 sm:mt-2 flex-shrink-0"></span>
                    <span className="text-xs sm:text-sm">{t('qr.realTimeRecognition')}</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Download Flow Steps */}
          <div className="mt-12 sm:mt-16">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4">
                How to Download UniSign
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-white/90 max-w-2xl mx-auto px-4">
                Follow these 2 simple steps to install the app on your Android device.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
              {/* Step 1 */}
              <Card className="p-6 sm:p-8 gradient-card shadow-card border-0 relative overflow-hidden">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full gradient-hero flex items-center justify-center text-white font-bold text-lg shadow-hero">
                    1
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full">
                    Step 1
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2">
                  Join the Google Group
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground mb-5">
                  Become a beta tester by joining our official testing group. This is required before installing the app.
                </p>
                <a href={GOOGLE_GROUP_URL} target="_blank" rel="noopener noreferrer" className="block">
                  <div className="flex items-center gap-3 p-3 sm:p-4 rounded-xl bg-primary/5 border border-primary/20 hover:bg-primary/10 transition-colors mb-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg gradient-hero flex items-center justify-center flex-shrink-0">
                      <Users className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div className="min-w-0 flex-1 text-left">
                      <div className="font-semibold text-primary text-sm sm:text-base">Google Group</div>
                      <div className="text-xs sm:text-sm text-muted-foreground truncate">
                        groups.google.com/g/unisign09/
                      </div>
                    </div>
                  </div>
                </a>
                <a href={GOOGLE_GROUP_URL} target="_blank" rel="noopener noreferrer">
                  <Button variant="hero" size="lg" className="w-full">
                    <Users className="mr-2" />
                    Join Google Group
                    <ExternalLink className="ml-2" />
                  </Button>
                </a>
                <div className="flex items-center gap-2 mt-4 text-xs sm:text-sm text-muted-foreground">
                  <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                  <span>Required before installing the app.</span>
                </div>
              </Card>

              {/* Step 2 */}
              <Card className="p-6 sm:p-8 gradient-card shadow-card border-0 relative overflow-hidden">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full gradient-hero flex items-center justify-center text-white font-bold text-lg shadow-hero">
                    2
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full">
                    Step 2
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2">
                  Open the Play Store Link
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground mb-5">
                  Install UniSign from the Google Play Store and start your sign language learning journey.
                </p>
                <div className="flex items-start gap-3 p-3 sm:p-4 rounded-xl bg-amber-50 border border-amber-200 mb-4">
                  <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-amber-900">
                    <span className="font-semibold text-red-600">Important:</span> Open Play Store using the same email address that joined the Google Group.
                  </p>
                </div>
                <a href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer" className="block">
                  <div className="flex items-center gap-3 p-3 sm:p-4 rounded-xl bg-primary/5 border border-primary/20 hover:bg-primary/10 transition-colors mb-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-white border flex items-center justify-center flex-shrink-0">
                      <ExternalLink className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                    </div>
                    <div className="min-w-0 flex-1 text-left">
                      <div className="font-semibold text-primary text-sm sm:text-base">Play Store</div>
                      <div className="text-xs sm:text-sm text-muted-foreground truncate">
                        play.google.com/store/apps/details?id=com.unisign.app
                      </div>
                    </div>
                  </div>
                </a>
                <a href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer">
                  <Button variant="hero" size="lg" className="w-full">
                    <Download className="mr-2" />
                    Install UniSign
                    <ExternalLink className="ml-2" />
                  </Button>
                </a>
              </Card>
            </div>
          </div>



          {/* Additional Info */}
          <div className="mt-12 sm:mt-16 text-center">
            <Card className="p-6 sm:p-8 lg:p-12 gradient-feature shadow-card border-0 max-w-4xl mx-auto">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mb-3 sm:mb-4">
                {t('qr.needHelp')}
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 max-w-2xl mx-auto leading-relaxed px-4">
                {t('qr.helpDescription')}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <Link to="/features">
                  <Button variant="outline" size="lg" className="px-4 sm:px-6 text-sm sm:text-base w-full sm:w-auto">
                    {t('qr.exploreFeatures')}
                  </Button>
                </Link>
                <Link to="/how-it-works">
                  <Button variant="outline" size="lg" className="px-4 sm:px-6 text-sm sm:text-base w-full sm:w-auto">
                    {t('qr.howItWorksBtn')}
                  </Button>
                </Link>
                <Link to="/about">
                  <Button variant="outline" size="lg" className="px-4 sm:px-6 text-sm sm:text-base w-full sm:w-auto">
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
