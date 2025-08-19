import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Features } from "@/components/Features";
import { HowItWorks } from "@/components/HowItWorks";
import { Download } from "@/components/Download";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Features />
      <HowItWorks />
      <Download />
      <Footer />
    </div>
  );
};

export default Index;
