import { Download as DownloadSection } from "@/components/Download";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const Download = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-16">
        <DownloadSection />
      </div>
      <Footer />
    </div>
  );
};

export default Download;