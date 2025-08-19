import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { QrCode, Download, Smartphone, ArrowLeft, Share2, Copy, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const QRCode = () => {
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const handleCopyLink = async () => {
    try {
      const currentUrl = window.location.href;
      await navigator.clipboard.writeText(currentUrl);
      setCopied(true);
      toast({
        title: "Link copied!",
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
      title: "Download UniSign - Sign Language Learning App",
      text: "Learn sign language with UniSign - the revolutionary AI-powered app that makes sign language accessible to deaf and mute students.",
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
          <div className="text-center mb-16">
            <Link to="/" className="inline-flex items-center text-white/80 hover:text-white mb-8 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Download UniSign
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Scan the QR code below with your phone's camera to download UniSign directly to your device.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-16 items-start max-w-6xl mx-auto">
            {/* QR Code Section - Takes up 2 columns */}
            <div className="lg:col-span-2 flex justify-center">
              <Card className="p-12 gradient-card shadow-card text-center border-0 w-full max-w-2xl">
                <div className="bg-white rounded-2xl p-12 mb-8">
                  <QrCode className="w-64 h-64 mx-auto text-gray-800" />
                </div>
                <h2 className="text-4xl font-bold text-foreground mb-6">
                  Scan to Download
                </h2>
                <p className="text-muted-foreground mb-10 text-xl leading-relaxed">
                  Point your phone's camera at this QR code to download UniSign instantly.
                </p>
                <div className="flex gap-6 justify-center">
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="flex items-center px-8 py-3 text-lg"
                    onClick={handleShare}
                  >
                    <Share2 className="w-5 h-5 mr-2" />
                    Share
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="flex items-center px-8 py-3 text-lg"
                    onClick={handleCopyLink}
                  >
                    {copied ? (
                      <>
                        <Check className="w-5 h-5 mr-2" />
                        Copied!
                      </>
                    ) : (
                      <>
                        <Copy className="w-5 h-5 mr-2" />
                        Copy Link
                      </>
                    )}
                  </Button>
                </div>
              </Card>
            </div>

            {/* System Requirements & Features - Takes up 1 column */}
            <div className="lg:col-span-1 space-y-8">
              <Card className="p-8 gradient-card shadow-card border-0">
                <h3 className="text-2xl font-bold text-foreground mb-6">System Requirements</h3>
                <div className="space-y-5">
                  <div className="flex items-center text-muted-foreground text-lg">
                    <Smartphone className="w-6 h-6 mr-4 flex-shrink-0" />
                    <span>iOS 14.0+ or Android 8.0+</span>
                  </div>
                  <div className="flex items-center text-muted-foreground text-lg">
                    <Download className="w-6 h-6 mr-4 flex-shrink-0" />
                    <span>Internet connection required for AI features</span>
                  </div>
                  <div className="flex items-center text-muted-foreground text-lg">
                    <QrCode className="w-6 h-6 mr-4 flex-shrink-0" />
                    <span>Camera access for sign language recognition</span>
                  </div>
                </div>
              </Card>

              <Card className="p-8 gradient-card shadow-card border-0">
                <h3 className="text-2xl font-bold text-foreground mb-6">What's Included</h3>
                <div className="space-y-4">
                  <div className="flex items-start text-muted-foreground text-lg">
                    <span className="w-3 h-3 bg-primary rounded-full mr-4 mt-2 flex-shrink-0"></span>
                    <span>AI-powered learning with personalized curriculum</span>
                  </div>
                  <div className="flex items-start text-muted-foreground text-lg">
                    <span className="w-3 h-3 bg-primary rounded-full mr-4 mt-2 flex-shrink-0"></span>
                    <span>3D sign models and interactive demonstrations</span>
                  </div>
                  <div className="flex items-start text-muted-foreground text-lg">
                    <span className="w-3 h-3 bg-primary rounded-full mr-4 mt-2 flex-shrink-0"></span>
                    <span>Real-time sign language recognition</span>
                  </div>
                  <div className="flex items-start text-muted-foreground text-lg">
                    <span className="w-3 h-3 bg-primary rounded-full mr-4 mt-2 flex-shrink-0"></span>
                    <span>Interactive quizzes and progress tracking</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-20 text-center">
            <Card className="p-12 gradient-feature shadow-card border-0 max-w-5xl mx-auto">
              <h3 className="text-3xl font-bold text-foreground mb-6">
                Need Help?
              </h3>
              <p className="text-muted-foreground mb-8 max-w-3xl mx-auto text-lg leading-relaxed">
                If you're having trouble or have questions about UniSign, our support team is here to help. 
                You can also explore our features and learn more about our mission.
              </p>
              <div className="flex gap-6 justify-center flex-wrap">
                <Link to="/features">
                  <Button variant="outline" size="lg" className="px-8">
                    Explore Features
                  </Button>
                </Link>
                <Link to="/how-it-works">
                  <Button variant="outline" size="lg" className="px-8">
                    How It Works
                  </Button>
                </Link>
                <Link to="/about">
                  <Button variant="outline" size="lg" className="px-8">
                    About UniSign
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