import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download as DownloadIcon, Smartphone, QrCode, Apple, PlayIcon } from "lucide-react";
import { Link } from "react-router-dom";

export const Download = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 gradient-hero">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-10 sm:mb-12 lg:mb-16 animate-slide-up">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
            Download UniSign Today
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed px-4">
            Start your sign language learning journey now. Available on all platforms 
            with seamless synchronization across devices.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center">
          <Card className="p-6 sm:p-8 lg:p-12 gradient-card shadow-card border-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              <div className="text-center">
                <div className="w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 bg-black rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <Apple className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-foreground mb-3 sm:mb-4">iOS App Store</h3>
                <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6">
                  Download for iPhone and iPad with optimized touch gestures and accessibility features.
                </p>
                <Link to="/qr-code">
                  <Button variant="default" size="lg" className="w-full text-sm sm:text-base">
                    <Apple className="mr-2" />
                    Download for iOS
                  </Button>
                </Link>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 bg-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <PlayIcon className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 text-white fill-white" />
                </div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-foreground mb-3 sm:mb-4">Google Play</h3>
                <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6">
                  Get it on Android devices with advanced AI features and camera integration.
                </p>
                <Link to="/qr-code">
                  <Button variant="default" size="lg" className="w-full text-sm sm:text-base">
                    <PlayIcon className="mr-2" />
                    Download for Android
                  </Button>
                </Link>
              </div>
            </div>

            <div className="mt-8 sm:mt-12 text-center">
              <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="flex items-center text-muted-foreground text-sm">
                  <Smartphone className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" />
                  <span className="text-xs sm:text-sm">Mobile Optimized</span>
                </div>
                <div className="flex items-center text-muted-foreground text-sm">
                  <DownloadIcon className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" />
                  <span className="text-xs sm:text-sm">Free Download</span>
                </div>
                <div className="flex items-center text-muted-foreground text-sm">
                  <QrCode className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" />
                  <span className="text-xs sm:text-sm">Easy Setup</span>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground px-4">
                System Requirements: iOS 14.0+ or Android 8.0+. Internet connection required for AI features.
              </p>
            </div>
          </Card>

          {/* QR Code Preview Card */}
          <div className="flex justify-center">
            <Card className="p-6 sm:p-8 gradient-card shadow-card text-center border-0 w-full max-w-sm">
              <QrCode className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 mx-auto mb-4 sm:mb-6 text-primary" />
              <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2 sm:mb-3">
                Quick Download
              </h3>
              <p className="text-muted-foreground text-xs sm:text-sm mb-4 sm:mb-6">
                Click any download button to get your QR code and download the app instantly.
              </p>
              <Link to="/qr-code">
                <Button variant="outline" size="lg" className="w-full text-sm sm:text-base">
                  Get QR Code
                </Button>
              </Link>
            </Card>
          </div>
        </div>

        <div className="mt-12 sm:mt-16">
          <Card className="p-6 sm:p-8 lg:p-12 gradient-feature shadow-card max-w-4xl mx-auto border-0">
            <div className="text-center">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mb-4 sm:mb-6">
                What's Included
              </h3>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl mb-2 sm:mb-3">🎯</div>
                  <h4 className="text-sm sm:text-base font-semibold text-foreground mb-1 sm:mb-2">Personalized Learning</h4>
                  <p className="text-xs sm:text-sm text-muted-foreground">AI-powered curriculum that adapts to your pace</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl mb-2 sm:mb-3">🎮</div>
                  <h4 className="text-sm sm:text-base font-semibold text-foreground mb-1 sm:mb-2">Interactive Games</h4>
                  <p className="text-xs sm:text-sm text-muted-foreground">Fun quizzes and challenges to keep you engaged</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl mb-2 sm:mb-3">📊</div>
                  <h4 className="text-sm sm:text-base font-semibold text-foreground mb-1 sm:mb-2">Progress Tracking</h4>
                  <p className="text-xs sm:text-sm text-muted-foreground">Detailed analytics and achievement badges</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl mb-2 sm:mb-3">👥</div>
                  <h4 className="text-sm sm:text-base font-semibold text-foreground mb-1 sm:mb-2">Community Access</h4>
                  <p className="text-xs sm:text-sm text-muted-foreground">Connect with learners and native signers</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};