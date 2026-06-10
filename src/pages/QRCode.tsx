import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Download,
  Smartphone,
  ArrowLeft,
  Share2,
  Check,
  Users,
  AlertTriangle,
  QrCode as QrCodeIcon,
} from "lucide-react";

import { Link } from "@tanstack/react-router";
import { useToast } from "@/hooks/use-toast";
import { useLocalization } from "@/contexts/LocalizationContext";
import unisignQr from "@/assets/unisign-qr.png";

const GOOGLE_GROUP_URL = "https://groups.google.com/g/unisign09/";
const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.unisign.app";

const QRCode = () => {
  const { toast } = useToast();
  const { t } = useLocalization();


  const handleShare = async () => {
    const shareData = {
      title: t("qr.title"),
      text: "Download UniSign — AI-powered sign language learning",
      url: window.location.href,
    };
    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(shareData.url);
        toast({ title: "Link copied!", description: "Share link copied." });
      }
    } catch (err) {
      if (err instanceof Error && err.name !== "AbortError") {
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

      {/* Hero */}
      <section className="pt-16 sm:pt-20 pb-10 sm:pb-14 px-4 gradient-hero">
        <div className="container mx-auto max-w-6xl">
          <div className="flex justify-start mb-6 sm:mb-8">
            <Link
              to="/"
              className="inline-flex items-center text-white/80 hover:text-white transition-colors bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg hover:bg-white/20 text-sm"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              {t("qr.backHome")}
            </Link>
          </div>
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 backdrop-blur-sm text-white/90 text-xs sm:text-sm font-medium mb-4">
              <Smartphone className="w-3.5 h-3.5" />
              Android • Beta access
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-5 leading-tight">
              Download UniSign in 2 steps
            </h1>
            <p className="text-base sm:text-lg text-white/85 leading-relaxed">
              Join our beta tester group, then install from the Play Store using
              the same Google account.
            </p>
          </div>
        </div>
      </section>

      {/* Primary download flow */}
      <section className="py-12 sm:py-16 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8 items-stretch">
            {/* Steps — 3/5 */}
            <div className="lg:col-span-3 space-y-5 sm:space-y-6">
              {/* Step 1 */}
              <Card className="p-6 sm:p-8 border border-border/50 shadow-card hover:shadow-lg transition-shadow duration-300 relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-primary to-primary/60" />
                <div className="flex items-start gap-5 sm:gap-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-white font-bold text-xl shadow-lg flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                    1
                  </div>
                  <div className="flex-1 min-w-0">
                    <h2 className="text-lg sm:text-xl font-bold text-foreground mb-2">
                      Join our Google Group
                    </h2>
                    <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
                      Beta access is granted through our official tester group.
                      This must be done first before you can see the app on Play Store.
                    </p>
                    <a
                      href={GOOGLE_GROUP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block"
                    >
                      <Button variant="hero" size="lg" className="shadow-lg hover:shadow-xl transition-shadow">
                        <Users className="w-4 h-4 mr-2" />
                        Join Google Group
                      </Button>
                    </a>
                  </div>
                </div>
              </Card>

              {/* Step 2 */}
              <Card className="p-6 sm:p-8 border border-border/50 shadow-card hover:shadow-lg transition-shadow duration-300 relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-emerald-500 to-emerald-400" />
                <div className="flex items-start gap-5 sm:gap-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-400 flex items-center justify-center text-white font-bold text-xl shadow-lg flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                    2
                  </div>
                  <div className="flex-1 min-w-0">
                    <h2 className="text-lg sm:text-xl font-bold text-foreground mb-2">
                      Install from the Play Store
                    </h2>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                      Open the Play Store link on your Android device and tap Install.
                    </p>

                    <div className="flex items-start gap-3 p-4 rounded-xl bg-amber-50/80 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/50 mb-5">
                      <AlertTriangle className="w-5 h-5 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-amber-900 dark:text-amber-200 leading-relaxed">
                        Use the <span className="font-semibold">same Google
                        account</span> that joined the group in Step 1, or the
                        Play Store listing will not appear.
                      </p>
                    </div>

                    <a
                      href={PLAY_STORE_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block"
                    >
                      <Button variant="hero" size="lg" className="shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700">
                        <Download className="w-4 h-4 mr-2" />
                        Install UniSign
                      </Button>
                    </a>
                  </div>
                </div>
              </Card>
            </div>

            {/* QR Card — 2/5, sticky on desktop */}
            <aside className="lg:col-span-2">
              <div className="lg:sticky lg:top-24">
                <Card className="p-6 sm:p-8 border border-border/50 shadow-card hover:shadow-xl transition-all duration-300 text-center relative overflow-hidden">
                  {/* Decorative gradient blob */}
                  <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-primary/10 to-primary/5 rounded-full blur-2xl" />
                  <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-gradient-to-br from-emerald-500/10 to-emerald-500/5 rounded-full blur-2xl" />

                  <div className="relative">
                    <div className="flex items-center justify-center gap-2 mb-4 text-muted-foreground">
                      <QrCodeIcon className="w-5 h-5 text-primary" />
                      <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider">
                        Scan to Download
                      </span>
                    </div>

                    {/* QR Code Card within Card */}
                    <div className="bg-white rounded-2xl p-5 sm:p-6 mb-5 shadow-inner border border-border/30 mx-auto inline-block">
                      <img
                        src={unisignQr}
                        alt="Scan to open UniSign on Google Play"
                        className="w-52 h-52 sm:w-60 sm:h-60 mx-auto"
                      />
                    </div>

                    <p className="text-sm text-muted-foreground mb-5 leading-relaxed max-w-xs mx-auto">
                      Point your phone camera at the QR code to quickly open the Play Store listing on your device.
                    </p>

                    <Button
                      variant="outline"
                      size="lg"
                      onClick={handleShare}
                      className="w-full border-border/50 hover:bg-muted/50 transition-colors"
                    >
                      <Share2 className="w-4 h-4 mr-2" />
                      Share this page
                    </Button>
                  </div>
                </Card>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Details: requirements + included */}
      <section className="py-12 sm:py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            <Card className="p-6 sm:p-8 border border-border/50 shadow-card hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                  <Smartphone className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-foreground">
                  {t("qr.systemReq")}
                </h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 p-3 rounded-lg bg-muted/40">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Smartphone className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-sm font-medium">{t("qr.iosAndroid")}</span>
                </li>
                <li className="flex items-center gap-3 p-3 rounded-lg bg-muted/40">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Download className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-sm font-medium">{t("qr.internetReq")}</span>
                </li>
                <li className="flex items-center gap-3 p-3 rounded-lg bg-muted/40">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Users className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-sm font-medium">
                    Google account (member of beta group)
                  </span>
                </li>
              </ul>
            </Card>

            <Card className="p-6 sm:p-8 border border-border/50 shadow-card hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500/20 to-emerald-500/10 flex items-center justify-center">
                  <Check className="w-5 h-5 text-emerald-500" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-foreground">
                  {t("qr.whatsIncluded")}
                </h3>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  t("qr.aiLearning"),
                  t("qr.signModels"),
                  t("qr.digitalWhiteboard"),
                  t("qr.vocabularyPractice"),
                  t("qr.signToText"),
                  t("qr.mathsLearning"),
                  t("qr.realTimeRecognition"),
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2.5 p-2.5 rounded-lg bg-muted/40 hover:bg-muted/60 transition-colors"
                  >
                    <div className="w-6 h-6 rounded-md bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3.5 h-3.5 text-emerald-500" />
                    </div>
                    <span className="text-sm font-medium leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>

          {/* Help */}
          <Card className="mt-8 sm:mt-10 p-6 sm:p-8 border border-border/50 shadow-card hover:shadow-lg transition-shadow duration-300 text-center relative overflow-hidden">
            <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-64 h-64 bg-gradient-to-b from-primary/5 to-transparent rounded-full blur-3xl" />
            <div className="relative">
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2">
                {t("qr.needHelp")}
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground mb-6 max-w-2xl mx-auto leading-relaxed">
                {t("qr.helpDescription")}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link to="/features">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto border-border/50 hover:bg-muted/50">
                    {t("qr.exploreFeatures")}
                  </Button>
                </Link>
                <Link to="/how-it-works">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto border-border/50 hover:bg-muted/50">
                    {t("qr.howItWorksBtn")}
                  </Button>
                </Link>
                <Link to="/about">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto border-border/50 hover:bg-muted/50">
                    {t("qr.aboutBtn")}
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default QRCode;
