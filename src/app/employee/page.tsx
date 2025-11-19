import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { ThemeSwitcher } from '@/components/theme-switcher';
import { CtaSection } from '@/components/sections/cta';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Share2, Zap, Smartphone, Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const features = [
    {
        icon: <Zap className="h-8 w-8 text-primary" />,
        title: 'Instant Sharing',
        description: 'Share your contact details, social media, and more with a single tap. No more fumbling for paper cards.'
    },
    {
        icon: <Star className="h-8 w-8 text-primary" />,
        title: 'Make a Lasting Impression',
        description: 'Stand out from the crowd with a modern, tech-savvy networking tool that showcases your personal brand.'
    },
    {
        icon: <Smartphone className="h-8 w-8 text-primary" />,
        title: 'Always Up-to-Date',
        description: 'Changed your number or job title? Update your digital profile in seconds, ensuring your contacts always have your latest info.'
    },
    {
        icon: <Share2 className="h-8 w-8 text-primary" />,
        title: 'Connect with Anyone',
        description: 'The other person doesn\'t need an app or a Taplyzer card to receive your information. It works with any modern smartphone.'
    }
];

export default function EmployeePage() {
    const heroImage = PlaceHolderImages.find(p => p.id === 'employee-hero');

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
                                    The Smartest Way to Network
                                </h1>
                                <p className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0">
                                    Your company has empowered you with the future of business cards. Make every introduction count with your new Taplyzer smart card.
                                </p>
                                <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                    <Button size="lg" asChild>
                                        <Link href="#">Activate Your Card</Link>
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
                                Your New Networking Superpower
                            </h2>
                            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                                Networking has never been this simple or effective.
                            </p>
                        </div>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            {features.map((feature) => (
                                <div key={feature.title} className="text-center bg-background p-6 rounded-lg border shadow-sm">
                                    <div className="inline-block bg-primary/10 p-4 rounded-full mb-4">
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
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
