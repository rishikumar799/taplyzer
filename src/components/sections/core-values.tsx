
import { Lightbulb, Handshake, ShieldCheck, Rocket } from "lucide-react";
import { cn } from "@/lib/utils";

const values = [
    {
        icon: <Lightbulb className="h-8 w-8" />,
        title: 'Innovation',
        description: 'We constantly push the boundaries of technology to create smarter networking solutions.',
        color: 'text-blue-500 bg-blue-100/80 dark:bg-blue-900/30'
    },
    {
        icon: <Handshake className="h-8 w-8" />,
        title: 'Customer-Centricity',
        description: 'Our clients are our partners. We succeed when they succeed, and their feedback drives our evolution.',
        color: 'text-green-500 bg-green-100/80 dark:bg-green-900/30'
    },
    {
        icon: <ShieldCheck className="h-8 w-8" />,
        title: 'Integrity',
        description: 'We believe in transparent pricing, honest communication, and protecting our users\' data unconditionally.',
        color: 'text-purple-500 bg-purple-100/80 dark:bg-purple-900/30'
    },
    {
        icon: <Rocket className="h-8 w-8" />,
        title: 'Growth Mindset',
        description: 'We are lifelong learners, always adapting, improving, and striving for excellence in everything we do.',
        color: 'text-orange-500 bg-orange-100/80 dark:bg-orange-900/30'
    }
]

export function CoreValuesSection() {
    return (
        <section id="core-values" className="py-20 lg:py-24">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
                        Our Core Values
                    </h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                        The principles that guide our work and our culture.
                    </p>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {values.map((value) => (
                        <div
                            key={value.title}
                            className="relative rounded-lg p-px overflow-hidden group"
                        >
                            <div className="absolute inset-[-100%] w-[400%] h-[400%] bg-gradient-to-r from-transparent via-primary/30 to-transparent group-hover:animate-border-spin" />
                            <div className="relative bg-background/80 backdrop-blur-sm p-6 rounded-md text-center flex flex-col items-center h-full">
                                <div className={cn("rounded-full p-5 flex items-center justify-center mb-6 w-20 h-20", value.color)}>
                                    {value.icon}
                                </div>
                                <h3 className="text-xl font-semibold text-foreground mb-3">{value.title}</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed flex-grow">{value.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
