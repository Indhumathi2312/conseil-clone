import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import AppShowcaseSection from "@/components/sections/AppShowcaseSection";
import OverviewSection from "@/components/sections/OverviewSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import PlatformScaleSection from "@/components/sections/PlatformScaleSection";
import ProductivityDesignSection from "@/components/sections/ProductivityDesignSection";
import GlobalSolutionsSection from "@/components/sections/GlobalSolutionsSection";
import StartupShowcaseSection from "@/components/sections/StartupShowcaseSection";
import SmartToolsSection from "@/components/sections/SmartToolsSection";
import ReviewsSection from "@/components/sections/ReviewsSection";
import PricingSection from "@/components/sections/PricingSection";
import FaqSection from "@/components/sections/FaqSection";
import CtaSection from "@/components/sections/CtaSection";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-[#18181b]">
      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Section 0: Hero Section */}
        <HeroSection />

        {/* Section 0.5: Mobile App Showcase Carousel */}
        <AppShowcaseSection />

        {/* Section 1: Overview Section (Bento Grid) */}
        <OverviewSection />

        {/* Section 2: Features Section */}
        <FeaturesSection />

        {/* Section 3: Platform Scale Section */}
        <PlatformScaleSection />

        {/* Section 4: Productivity Design Section */}
        <ProductivityDesignSection />

        {/* Section 5: Global Solutions & Partner Logos */}
        <GlobalSolutionsSection />

        {/* Section 6: Startup Showcase Section (Maximize Your Startup Time) */}
        <StartupShowcaseSection />

        {/* Section 7: Smart Tools Features */}
        <SmartToolsSection />

        {/* Section 8: Reviews & Testimonials */}
        <ReviewsSection />

        {/* Section 9: Pricing Plans */}
        <PricingSection />

        {/* Section 10: Frequently Asked Questions */}
        <FaqSection />

        {/* Pre-Footer Call to Action */}
        <CtaSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
