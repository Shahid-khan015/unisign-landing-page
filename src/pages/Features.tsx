import { Features as FeaturesSection } from "@/components/Features";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const Features = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-16">
        <FeaturesSection />
      </div>
      <Footer />
    </div>
  );
};

export default Features;