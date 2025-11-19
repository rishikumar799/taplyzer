import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { ThemeSwitcher } from '@/components/theme-switcher';
import { ServicesSection } from '@/components/sections/services';
import { CtaSection } from '@/components/sections/cta';
import { ServiceHeroSection } from '@/components/sections/service-hero';
import { WhySpecialSection } from '@/components/sections/why-special';
import { TestimonialsSection } from '@/components/sections/testimonials';

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <ServiceHeroSection />
        <ServicesSection />
        <WhySpecialSection />
        <TestimonialsSection />
        <CtaSection />
      </main>
      <Footer />
      <ThemeSwitcher />
    </div>
  );
}
