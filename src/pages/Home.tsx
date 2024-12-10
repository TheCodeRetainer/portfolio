import { SiteHeader } from "../components/SiteHeader.tsx";
import { HeroSection } from "../components/HeroSection.tsx";
import { ServicesSection } from "../components/ServicesSection.tsx";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />
      <main>
        <HeroSection />
        <ServicesSection />
      </main>
    </div>
  );
}
