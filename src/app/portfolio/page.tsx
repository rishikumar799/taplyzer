import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { ThemeSwitcher } from '@/components/theme-switcher';
import { PortfolioHeroSection } from '@/components/sections/portfolio-hero';
import { PortfolioGridSection } from '@/components/sections/portfolio-grid';
import { CtaSection } from '@/components/sections/cta';

export default function PortfolioPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <PortfolioHeroSection />
        <PortfolioGridSection />
        <CtaSection />
      </main>
      <Footer />
      <ThemeSwitcher />
    </div>
  );
}
