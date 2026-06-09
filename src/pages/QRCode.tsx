import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Download,
  Smartphone,
  ArrowLeft,
  Share2,
  Copy,
  Check,
  Users,
  ExternalLink,
  AlertTriangle,
  ChevronRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useLocalization } from "@/contexts/LocalizationContext";
import unisignQr from "@/assets/unisign-qr.png";

const GOOGLE_GROUP_URL = "https://groups.google.com/g/unisign09/";
const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.unisign.app";

const QRCode = () => {
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();
  const { t } = useLocalization();

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(PLAY_STORE_URL);
      setCopied(true);
      toast({
        title: t("qr.copied"),
        description: "Play Store link copied to your clipboard.",
      });
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast({
        title: "Failed to copy",
        description: "Please try copying the link manually.",
        variant: "destructive",
      });
    }
  };

  const handleShare = async () => {
    const shareData = {
      title: t("qr.title"),
      text: t("qr.subtitle"),
      url: window.location.href,
    };
    try {
      if (navigator.share) {
        await navigator.share(shareData);
        toast({
          title: "Shared successfully!",
          description: "Thank you for sharing UniSign.",
        });
      } else {
        await navigator.clipboard.writeText(shareData.url);
        toast({
          title: "Link copied!",
          description: "Share link copied to clipboard.",
        });
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

      {/* ── Hero ── */}
      <section className="gradient-hero pt-10 pb-12 sm:pt-14 sm:pb-16 px-4">
        <div className="container mx-auto max-w-4xl">

          {/* Back button — top left, consistent on all viewports */}
          <div className="mb-8">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors bg-white/10 hover:bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg text-sm"
            >
              <ArrowLeft className="w-4 h-4 flex-shrink-0" />
              {t("qr.backHome")}
            </Link>
          </div>

          {/* Title block */}
          <div className="text-center max-w-2xl mx-auto">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              {t("qr.title")}
            </h1>
            <p className="text-base sm:text-lg text-white/85 leading-relaxed">
              {t("qr.subtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* ── Download flow ── */}
      <section className="bg-background px-4 py-12 sm:py-16">
        <div className="container mx-auto max-w-4xl">

          {/* Section label */}
          <div className="text-center mb-8 sm:mb-10">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-2">
              Two steps to install
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
              Follow these in order
            </h2>
            <p className="text-muted-foreground mt-2 text-sm sm:text-base">
              You must join the Google Group before the Play Store will let you install the app.
            </p>
          </div>

          {/* Step cards — stacked, full-width, with connector arrow between them */}
          <div className="flex flex-col gap-4">

            {/* ── Step 1 ── */}
            <Card className="p-6 sm:p-8 gradient-card shadow-card border-0">
              <div className="flex flex-col sm:flex-row sm:items-center gap-6">

                {/* Step badge + icon */}
                <div className="flex items-center gap-4 flex-shrink-0">
                  <div className="w-12 h-12 rounded-full gradient-hero flex items-center justify-center text-white font-bold text-lg shadow-hero flex-shrink-0">
                    1
                  </div>
                  <div className="sm:hidden">
                    <span className="text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full">
                      Required first
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="hidden sm:flex items-center gap-3 mb-1">
                    <span className="text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full">
                      Required first
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-1">
                    Join the Google Group
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground mb-5">
                    Register as a beta tester by joining our official Google Group. The Play Store
                    will only show you the app once your Google account is on the list.
                  </p>
                  <a
                    href={GOOGLE_GROUP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <Button variant="hero" size="lg" className="w-full sm:w-auto">
                      <Users className="mr-2 w-4 h-4" />
                      Join Google Group
                      <ExternalLink className="ml-2 w-4 h-4" />
                    </Button>
                  </a>
                </div>

                {/* Confirmation note */}
                <div className="flex items-start sm:items-center gap-2 text-sm text-muted-foreground sm:flex-shrink-0 sm:max-w-[180px]">
                  <Check className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5 sm:mt-0" />
                  <span>Required before you can install the app</span>
                </div>
              </div>
            </Card>

            {/* Connector arrow */}
            <div className="flex justify-center">
              <ChevronRight className="rotate-90 w-6 h-6 text-primary/40" />
            </div>

            {/* ── Step 2 ── */}
            <Card className="p-6 sm:p-8 gradient-card shadow-card border-0">
              <div className="flex flex-col sm:flex-row sm:items-start gap-6">

                {/* Step badge */}
                <div className="flex items-center gap-4 flex-shrink-0">
                  <div className="w-12 h-12 rounded-full gradient-hero flex items-center justify-center text-white font-bold text-lg shadow-hero flex-shrink-0">
                    2
                  </div>
                  <div className="sm:hidden">
                    <span className="text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full">
                      After step 1
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="hidden sm:flex items-center gap-3 mb-1">
                    <span className="text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full">
                      After step 1
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-1">
                    Install from Play Store
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground mb-4">
                    Open the Play Store link using the same Google account you used to join the group.
                  </p>

                  {/* Warning inline with the action */}
                  <div className="flex items-start gap-3 p-3 sm:p-4 rounded-xl bg-amber-50 border border-amber-200 mb-5">
                    <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <p className="text-xs sm:text-sm text-amber-900">
                      <span className="font-semibold text-red-600">Important: </span>
                      Open Play Store with the same email address that joined the Google Group, or the
                      app will not appear.
                    </p>
                  </div>

                  <a
                    href={PLAY_STORE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <Button variant="hero" size="lg" className="w-full sm:w-auto">
                      <Download className="mr-2 w-4 h-4" />
                      Install UniSign
                      <ExternalLink className="ml-2 w-4 h-4" />
                    </Button>
                  </a>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* ── QR code + supplementary info ── */}
      <section className="gradient-hero px-4 py-12 sm:py-16">
        <div className="container mx-auto max-w-4xl">

          <div className="text-center mb-8 sm:mb-10">
            <p className="text-sm font-semibold uppercase tracking-wider text-white/60 mb-2">
              Prefer scanning?
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              {t("qr.scanTitle")}
            </h2>
            <p className="text-sm sm:text-base text-white/80 mt-2 max-w-lg mx-auto">
              {t("qr.scanDescription")}
            </p>
          </div>

          {/* QR + sidebar cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

            {/* QR code card */}
            <div className="lg:col-span-1 flex justify-center lg:justify-start">
              <Card className="p-6 gradient-card shadow-card border-0 w-full max-w-xs mx-auto">
                <div className="bg-white rounded-xl p-6 mb-4">
                  <img
                    src={unisignQr}
                    alt="Scan to open UniSign on Google Play"
                    className="w-full h-auto mx-auto"
                  />
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 text-xs"
                    onClick={handleShare}
                  >
                    <Share2 className="w-3 h-3 mr-1.5" />
                    {t("qr.share")}
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 text-xs"
                    onClick={handleCopyLink}
                  >
                    {copied ? (
                      <>
                        <Check className="w-3 h-3 mr-1.5" />
                        {t("qr.copied")}
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3 mr-1.5" />
                        {t("qr.copyLink")}
                      </>
                    )}
                  </Button>
                </div>
              </Card>
            </div>

            {/* System requirements + features — side by side on lg */}
            <div className="lg:col-span-2 flex flex-col sm:flex-row lg:flex-col gap-4">

              <Card className="p-5 gradient-card shadow-card border-0 flex-1">
                <h3 className="text-base font-bold text-foreground mb-3">
                  {t("qr.systemReq")}
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-muted-foreground text-sm">
                    <Smartphone className="w-4 h-4 flex-shrink-0" />
                    <span>{t("qr.iosAndroid")}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground text-sm">
                    <Download className="w-4 h-4 flex-shrink-0" />
                    <span>{t("qr.internetReq")}</span>
                  </div>
                </div>
              </Card>

              <Card className="p-5 gradient-card shadow-card border-0 flex-1">
                <h3 className="text-base font-bold text-foreground mb-3">
                  {t("qr.whatsIncluded")}
                </h3>
                <ul className="space-y-2">
                  {[
                    t("qr.aiLearning"),
                    t("qr.signModels"),
                    t("qr.digitalWhiteboard"),
                    t("qr.vocabularyPractice"),
                    t("qr.signToText"),
                    t("qr.mathsLearning"),
                    t("qr.realTimeRecognition"),
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-muted-foreground text-sm">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0 mt-1.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* ── Need help ── */}
      <section className="bg-background px-4 py-12 sm:py-16">
        <div className="container mx-auto max-w-4xl">
          <Card className="p-6 sm:p-8 lg:p-10 gradient-feature shadow-card border-0 text-center">
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3">
              {t("qr.needHelp")}
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground mb-6 max-w-xl mx-auto leading-relaxed">
              {t("qr.helpDescription")}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link to="/features">
                <Button variant="outline" size="lg" className="w-full sm:w-auto text-sm sm:text-base">
                  {t("qr.exploreFeatures")}
                </Button>
              </Link>
              <Link to="/how-it-works">
                <Button variant="outline" size="lg" className="w-full sm:w-auto text-sm sm:text-base">
                  {t("qr.howItWorksBtn")}
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="outline" size="lg" className="w-full sm:w-auto text-sm sm:text-base">
                  {t("qr.aboutBtn")}
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default QRCode;
