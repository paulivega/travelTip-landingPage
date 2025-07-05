import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import HowItWorksSection from "@/components/how-it-works-section";
import FeaturesSection from "@/components/features-section";
import DestinationsGallery from "@/components/destinations-gallery";
import TestimonialsSection from "@/components/testimonials-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <HowItWorksSection />
      <FeaturesSection />
      <DestinationsGallery />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
