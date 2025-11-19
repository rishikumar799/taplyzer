
"use client";

import { Building, Rocket, Sparkles, Star } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const timelineEvents = [
    {
        year: '2020',
        title: 'The Spark of an Idea',
        description: 'Taplyzer was born from the simple idea that business cards could be smarter, more efficient, and environmentally friendly.',
        icon: <Sparkles className="h-6 w-6 text-primary" />
    },
    {
        year: '2021',
        title: 'Launch & First 100 Clients',
        description: 'After months of development, we launched our first smart card and quickly onboarded our first 100 visionary clients.',
        icon: <Rocket className="h-6 w-6 text-primary" />
    },
    {
        year: '2023',
        title: 'Expanding Our Horizons',
        description: 'We introduced team management features and CRM integrations, evolving into a comprehensive networking platform for businesses.',
        icon: <Building className="h-6 w-6 text-primary" />
    },
    {
        year: 'Today',
        title: 'Leading the Change',
        description: 'With over 500 brands and 50,000+ connections made, we continue to innovate and lead the digital networking revolution.',
        icon: <Star className="h-6 w-6 text-primary" />
    }
];

export function OurLegacySection() {
    return (
        <section id="legacy" className="py-20 lg:py-24">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
                        Our Legacy
                    </h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                        The journey of revolutionizing professional connections, one tap at a time.
                    </p>
                </div>
                <div className="relative max-w-4xl mx-auto">
                    <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-border" aria-hidden="true"></div>
                    <div className="relative space-y-12">
                        {timelineEvents.map((event, index) => {
                            const isOdd = index % 2 !== 0;
                            const cardVariants = {
                                hidden: { opacity: 0, x: isOdd ? 50 : -50 },
                                visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
                            };
                            return (
                                <div key={event.year} className="relative flex justify-between items-center w-full">
                                    <div className={cn("w-[calc(50%-2.5rem)]", isOdd ? 'order-3' : 'order-1')}>
                                        <motion.div
                                            initial="hidden"
                                            whileInView="visible"
                                            viewport={{ once: true, amount: 0.3 }}
                                            variants={cardVariants}
                                            className="bg-background p-6 rounded-lg shadow-lg border hover:shadow-xl transition-shadow"
                                        >
                                            <p className="text-primary font-semibold mb-1">{event.year}</p>
                                            <h3 className="text-xl font-bold text-foreground mb-2">{event.title}</h3>
                                            <p className="text-muted-foreground">{event.description}</p>
                                        </motion.div>
                                    </div>

                                    <div className="order-2 w-10 h-10 bg-background border-2 border-primary rounded-full flex items-center justify-center z-10">
                                        {event.icon}
                                    </div>
                                    
                                    <div className={cn("w-[calc(50%-2.5rem)]", isOdd ? 'order-1' : 'order-3')}></div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
