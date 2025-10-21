import { AboutHero } from "@/components/about/AboutHero";
import { AboutStory } from "@/components/about/AboutStory";
import { AboutStats } from "@/components/about/AboutStats";
import { AboutTeam } from "@/components/about/AboutTeam";
import { AboutCTA } from "@/components/about/AboutCTA";
import { Footer } from "@/components/layout/Footer";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <AboutHero />
      <AboutStory />
      <AboutStats />
      <AboutTeam />
      <AboutCTA />
      <Footer />
    </div>
  );
}
