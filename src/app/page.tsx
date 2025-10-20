import { HeroSection } from "@/components/HeroSection";
import { PopularCategories } from "@/components/PopularCategories";
import { HowItWorks } from "@/components/HowItWorks";
import { FeaturedServices } from "@/components/FeaturedServices";
import { RewardsSection } from "@/components/RewardsSection";
import { Footer } from "@/components/Footer";
import { FixedPriceService } from "@/components/FixedPriceService";
import { GetWorkersGetGigs } from "@/components/GetWorkersGetGigs";
import { BlogSection } from "@/components/BlogSection";
import { FeaturedProviders } from "@/components/FeaturedProviders";

export default function Home() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <HeroSection />
      <PopularCategories />
      <HowItWorks />
      <FixedPriceService />
      <FeaturedServices />
      <FeaturedProviders />
      <GetWorkersGetGigs />
      <RewardsSection />
      <BlogSection />
      <Footer />
    </div>
  );
}
