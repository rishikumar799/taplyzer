import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { ThemeSwitcher } from '@/components/theme-switcher';
import { AboutHeroSection } from '@/components/sections/about-hero';
import { AboutSection } from '@/components/sections/about';
import { OurLegacySection } from '@/components/sections/our-legacy';
import { WhySpecialSection } from '@/components/sections/why-special';
import { CoreValuesSection } from '@/components/sections/core-values';

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <AboutHeroSection />
        <AboutSection />
        <OurLegacySection />
        <WhySpecialSection />
        <CoreValuesSection />
      </main>
      <Footer />
      <ThemeSwitcher />
    </div>
  );
}
