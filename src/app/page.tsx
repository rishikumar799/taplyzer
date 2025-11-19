import { Header } from '@/components/header';
import { HeroSection } from '@/components/sections/hero';
import { HowItWorksSection } from '@/components/sections/how-it-works';
import { FeaturesSection } from '@/components/sections/features';
import { PricingSection } from '@/components/sections/pricing';
import { IndustriesSection } from '@/components/sections/industries';
import { TestimonialsSection } from '@/components/sections/testimonials';
import { CtaSection } from '@/components/sections/cta';
import { Footer } from '@/components/footer';
import { ThemeSwitcher } from '@/components/theme-switcher';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <HowItWorksSection />
        <FeaturesSection />
        <PricingSection />
        <IndustriesSection />
        <TestimonialsSection />
        <CtaSection />
      </main>
      <Footer />
      <ThemeSwitcher />
    </div>
  );
}
