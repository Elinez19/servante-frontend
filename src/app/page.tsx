import { HeroSection } from "@/components/home/HeroSection";
import { PopularCategories } from "@/components/home/PopularCategories";
import { HowItWorks } from "@/components/home/HowItWorks";
import { FeaturedServices } from "@/components/services/FeaturedServices";
import { RewardsSection } from "@/components/home/RewardsSection";
import { Footer } from "@/components/layout/Footer";
import { FixedPriceService } from "@/components/home/FixedPriceService";
import { GetWorkersGetGigs } from "@/components/home/GetWorkersGetGigs";
import { BlogSection } from "@/components/home/BlogSection";
import { FeaturedProviders } from "@/components/providers/FeaturedProviders";

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
