import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download as DownloadIcon, Smartphone, QrCode, Apple, PlayIcon } from "lucide-react";

export const Download = () => {
  return (
    <section className="py-20 px-4 gradient-hero">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Download UniSign Today
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Start your sign language learning journey now. Available on all platforms 
            with seamless synchronization across devices.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-center">
          <div className="lg:col-span-2">
            <Card className="p-8 lg:p-12 gradient-card shadow-card border-0">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="w-20 h-20 bg-black rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Apple className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">iOS App Store</h3>
                  <p className="text-muted-foreground mb-6">
                    Download for iPhone and iPad with optimized touch gestures and accessibility features.
                  </p>
                  <Button variant="default" size="lg" className="w-full">
                    <Apple className="mr-2" />
                    Download for iOS
                  </Button>
                </div>

                <div className="text-center">
                  <div className="w-20 h-20 bg-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <PlayIcon className="w-10 h-10 text-white fill-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">Google Play</h3>
                  <p className="text-muted-foreground mb-6">
                    Get it on Android devices with advanced AI features and camera integration.
                  </p>
                  <Button variant="default" size="lg" className="w-full">
                    <PlayIcon className="mr-2" />
                    Download for Android
                  </Button>
                </div>
              </div>

              <div className="mt-12 text-center">
                <div className="flex flex-wrap justify-center gap-4 mb-6">
                  <div className="flex items-center text-muted-foreground">
                    <Smartphone className="w-5 h-5 mr-2" />
                    <span>Mobile Optimized</span>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <DownloadIcon className="w-5 h-5 mr-2" />
                    <span>Free Download</span>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <QrCode className="w-5 h-5 mr-2" />
                    <span>Easy Setup</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  System Requirements: iOS 14.0+ or Android 8.0+. Internet connection required for AI features.
                </p>
              </div>
            </Card>
          </div>

          <div className="flex justify-center">
            <Card className="p-8 gradient-card shadow-card text-center border-0">
              <QrCode className="w-32 h-32 mx-auto mb-6 text-primary" />
              <h3 className="text-xl font-bold text-foreground mb-3">
                Scan to Download
              </h3>
              <p className="text-muted-foreground text-sm mb-6">
                Use your phone's camera to scan this QR code and get directed to the app store.
              </p>
              <div className="text-xs text-muted-foreground">
                <p>Works with both</p>
                <p>iOS and Android devices</p>
              </div>
            </Card>
          </div>
        </div>

        <div className="mt-16">
          <Card className="p-8 lg:p-12 gradient-feature shadow-card max-w-4xl mx-auto border-0">
            <div className="text-center">
              <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-6">
                What's Included
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl mb-3">🎯</div>
                  <h4 className="font-semibold text-foreground mb-2">Personalized Learning</h4>
                  <p className="text-sm text-muted-foreground">AI-powered curriculum that adapts to your pace</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-3">🎮</div>
                  <h4 className="font-semibold text-foreground mb-2">Interactive Games</h4>
                  <p className="text-sm text-muted-foreground">Fun quizzes and challenges to keep you engaged</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-3">📊</div>
                  <h4 className="font-semibold text-foreground mb-2">Progress Tracking</h4>
                  <p className="text-sm text-muted-foreground">Detailed analytics and achievement badges</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-3">👥</div>
                  <h4 className="font-semibold text-foreground mb-2">Community Access</h4>
                  <p className="text-sm text-muted-foreground">Connect with learners and native signers</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};