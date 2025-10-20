import { HeroSection } from "@/components/HeroSection";
import { PopularCategories } from "@/components/PopularCategories";
import { HowItWorks } from "@/components/HowItWorks";
import { FeaturedServices } from "@/components/FeaturedServices";
import { RewardsSection } from "@/components/RewardsSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <HeroSection />
      <PopularCategories />
      <HowItWorks />
      <FeaturedServices />
      <RewardsSection />
      <Footer />
    </div>
  );
}
