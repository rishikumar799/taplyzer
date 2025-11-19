import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { ThemeSwitcher } from '@/components/theme-switcher';
import { CtaSection } from '@/components/sections/cta';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight, Handshake, TrendingUp, MonitorPlay, Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const benefits = [
    {
        icon: <TrendingUp className="h-8 w-8 text-primary" />,
        title: 'Recurring Revenue Stream',
        description: 'Build a sustainable business with our competitive recurring commission structure on software subscriptions.'
    },
    {
        icon: <Handshake className="h-8 w-8 text-primary" />,
        title: 'Dedicated Partner Support',
        description: 'Gain access to our dedicated partner support team, training materials, and co-marketing opportunities.'
    },
    {
        icon: <MonitorPlay className="h-8 w-8 text-primary" />,
        title: 'Powerful Distributor Platform',
        description: 'Manage your clients, orders, and payouts through a centralized dashboard designed for distributors.'
    },
    {
        icon: <Star className="h-8 w-8 text-primary" />,
        title: 'High-Demand Product',
        description: 'Offer a cutting-edge, in-demand solution that businesses of all sizes are actively seeking to modernize their networking.'
    }
];

export default function DistributorPage() {
    const heroImage = PlaceHolderImages.find(p => p.id === 'distributor-hero');

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
                                    Partner with Taplyzer and Grow With Us
                                </h1>
                                <p className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0">
                                    Join our network of authorized distributors and bring the future of networking to your clients. Benefit from a high-demand product, recurring revenue, and dedicated support.
                                </p>
                                <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                    <Button size="lg" asChild>
                                        <Link href="/contact-us">Become a Partner</Link>
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

                {/* Benefits Section */}
                <section className="py-20 lg:py-24">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
                                Why Partner with Taplyzer?
                            </h2>
                            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                                We're committed to our partners' success.
                            </p>
                        </div>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            {benefits.map((benefit) => (
                                <div key={benefit.title} className="text-center bg-background p-6 rounded-lg border shadow-sm">
                                    <div className="inline-block bg-primary/10 p-4 rounded-full mb-4">
                                        {benefit.icon}
                                    </div>
                                    <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
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
