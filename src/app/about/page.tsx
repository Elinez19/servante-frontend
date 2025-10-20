import { AboutHero } from "@/components/AboutHero";
import { AboutStory } from "@/components/AboutStory";
import { AboutStats } from "@/components/AboutStats";
import { AboutTeam } from "@/components/AboutTeam";
import { AboutCTA } from "@/components/AboutCTA";
import { Footer } from "@/components/Footer";

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
