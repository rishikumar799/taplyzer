
import { Card, CardContent } from "@/components/ui/card";
import { Lock, Zap, BarChart, Users, Palette } from "lucide-react";

const differentiators = [
    {
        icon: <Zap className="h-8 w-8 text-primary" />,
        title: 'Seamless Technology',
        description: 'Our NFC and QR code solutions work instantly with any modern smartphone, no app required. It’s frictionless for both you and your new connection.',
    },
    {
        icon: <BarChart className="h-8 w-8 text-primary" />,
        title: 'Actionable Analytics',
        description: 'We go beyond simple tap counts. Our dashboard provides rich, actionable insights to help you understand your networking ROI and close more deals.',
    },
    {
        icon: <Users className="h-8 w-8 text-primary" />,
        title: 'Built for Teams',
        description: 'Effortlessly manage branding, profiles, and permissions for your entire organization from one centralized, easy-to-use dashboard.',
    },
    {
        icon: <Palette className="h-8 w-8 text-primary" />,
        title: 'Unmatched Customization',
        description: 'From fully custom card designs to white-labeled digital profiles, your brand is always front and center, never ours.',
    },
    {
        icon: <Lock className="h-8 w-8 text-primary" />,
        title: 'Enterprise-Grade Security',
        description: 'We prioritize your data with robust security measures, ensuring that your connections and information are always protected.',
    }
];

export function WhySpecialSection() {
    return (
        <section id="why-special" className="py-20 lg:py-24 bg-secondary/50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
                        How We're Different
                    </h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                        Taplyzer is more than just a digital business card—it's a complete networking platform.
                    </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {differentiators.map((item, index) => (
                        <Card key={item.title} className={`bg-background border shadow-lg h-full text-left hover:border-primary/50 hover:shadow-primary/10 transition-all duration-300 group hover:-translate-y-2 ${index > 2 ? 'lg:col-span-1 lg:col-start-' + (index) : '' }`}>
                            <CardContent className="p-8 flex flex-col items-start">
                                <div className="bg-primary/10 rounded-lg p-4 flex items-center justify-center mb-6">
                                    {item.icon}
                                </div>
                                <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
