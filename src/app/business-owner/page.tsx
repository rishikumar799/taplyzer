import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { ThemeSwitcher } from '@/components/theme-switcher';
import { CtaSection } from '@/components/sections/cta';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight, BarChart3, Users, Zap, ShieldCheck, Briefcase, Link as LinkIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const features = [
    {
        icon: <Users className="h-8 w-8 text-primary" />,
        title: 'Centralized Team Management',
        description: 'Control branding, profiles, and permissions for your entire organization from a single, intuitive dashboard. Onboard and offboard employees with ease.'
    },
    {
        icon: <BarChart3 className="h-8 w-8 text-primary" />,
        title: 'Actionable Team Analytics',
        description: 'Gain insights into your team\'s networking activity. Track performance, identify top networkers, and measure event ROI with powerful, aggregated data.'
    },
    {
        icon: <Briefcase className="h-8 w-8 text-primary" />,
        title: 'Consistent Brand Identity',
        description: 'Ensure every employee card perfectly reflects your brand. Lock logos, colors, and key messaging to maintain a professional and consistent image.'
    },
    {
        icon: <LinkIcon className="h-8 w-8 text-primary" />,
        title: 'Seamless CRM Integration',
        description: 'Automate your lead flow. Sync connections captured by your team directly into your company\'s CRM, saving time and eliminating manual data entry.'
    },
    {
        icon: <ShieldCheck className="h-8 w-8 text-primary" />,
        title: 'Enterprise-Grade Security',
        description: 'Protect your company\'s data and your employees\' privacy with robust security features, including SSO and secure data management protocols.'
    },
    {
        icon: <Zap className="h-8 w-8 text-primary" />,
        title: 'Bulk Card Ordering',
        description: 'Easily order and deploy NFC cards for your entire team or new hires. We handle the logistics so you can focus on your business.'
    }
];

export default function BusinessOwnerPage() {
    const heroImage = PlaceHolderImages.find(p => p.id === 'business-owner-hero');

    return (
        <div className="flex flex-col min-h-screen bg-background">
            <Header />
            <main className="flex-grow">
                {/* Hero Section */}
                <section className="relative bg-secondary/50 py-20 lg:py-32">
                    <div className="container mx-auto px-4">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div className="text-center lg:text-left">
                                <h1 className="text-4xl lg:text-5xl font-bold text-foreground">
                                    Empower Your Team, Amplify Your Brand
                                </h1>
                                <p className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0">
                                    Equip your entire organization with powerful networking tools. Taplyzer for Business helps you manage your brand, generate measurable ROI, and streamline connections at scale.
                                </p>
                                <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                    <Button size="lg" asChild>
                                        <Link href="/contact-us">Request a Demo</Link>
                                    </Button>
                                    <Button size="lg" variant="outline" asChild>
                                        <Link href="#pricing">View Team Pricing</Link>
                                    </Button>
                                </div>
                            </div>
                            {heroImage && (
                                <div className="relative h-80 lg:h-96 rounded-2xl overflow-hidden shadow-2xl">
                                    <Image
                                        src={heroImage.imageUrl}
                                        alt={heroImage.description}
                                        fill
                                        className="object-cover"
                                        data-ai-hint={heroImage.imageHint}
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section className="py-20 lg:py-24">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
                                A Unified Platform for Growth
                            </h2>
                            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                                Everything you need to manage your team's networking and drive business results.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {features.map((feature) => (
                                <div key={feature.title} className="bg-background border rounded-lg p-6 shadow-sm hover:shadow-lg transition-shadow">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="bg-primary/10 p-3 rounded-lg">
                                            {feature.icon}
                                        </div>
                                        <h3 className="text-lg font-semibold">{feature.title}</h3>
                                    </div>
                                    <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <CtaSection />
            </main>
            <Footer />
            <ThemeSwitcher />
        </div>
    );
}
