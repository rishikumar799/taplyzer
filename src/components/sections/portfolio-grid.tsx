"use client";

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

const portfolioItems = [
    { id: 'portfolio-1', title: 'TechStart Custom Cards', category: 'Corporate', imageId: 'portfolio-1' },
    { id: 'portfolio-2', title: 'Prestige Realty Branding', category: 'Real Estate', imageId: 'portfolio-2' },
    { id: 'portfolio-3', title: 'Innovate Creatives', category: 'Creative', imageId: 'portfolio-3' },
    { id: 'portfolio-4', title: 'HealthWell NFC Pass', category: 'Healthcare', imageId: 'portfolio-4' },
    { id: 'portfolio-5', title: 'Momentum Corp.', category: 'Corporate', imageId: 'portfolio-5' },
    { id: 'portfolio-6', title: 'Urban Oasis Realty', category: 'Real Estate', imageId: 'portfolio-6' },
];

const filters = ['All', 'Corporate', 'Real Estate', 'Creative', 'Healthcare'];

export function PortfolioGridSection() {
    const [activeFilter, setActiveFilter] = useState('All');

    const filteredItems = activeFilter === 'All'
        ? portfolioItems
        : portfolioItems.filter(item => item.category === activeFilter);

    return (
        <section id="portfolio" className="py-20 lg:py-24">
            <div className="container mx-auto px-4">
                <div className="flex justify-center mb-12">
                    <div className="bg-muted p-1.5 rounded-lg flex gap-2">
                        {filters.map(filter => (
                            <Button
                                key={filter}
                                variant={activeFilter === filter ? 'default' : 'ghost'}
                                onClick={() => setActiveFilter(filter)}
                                className={cn(
                                    "rounded-md px-4 py-2 text-sm font-medium transition-colors",
                                    activeFilter === filter ? 'bg-primary text-primary-foreground shadow-sm' : 'text-muted-foreground hover:bg-background/50'
                                )}
                            >
                                {filter}
                            </Button>
                        ))}
                    </div>
                </div>

                <motion.div
                    layout
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {filteredItems.map(item => {
                        const image = PlaceHolderImages.find(p => p.id === item.imageId);
                        return (
                            <motion.div
                                key={item.id}
                                layout
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.4, ease: 'easeOut' }}
                            >
                                <Card className="overflow-hidden group bg-background border shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                                    {image && (
                                        <div className="aspect-video relative overflow-hidden">
                                            <Image
                                                src={image.imageUrl}
                                                alt={item.title}
                                                fill
                                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                                                data-ai-hint={image.imageHint}
                                            />
                                        </div>
                                    )}
                                    <div className="p-6">
                                        <p className="text-sm text-primary font-medium">{item.category}</p>
                                        <h3 className="text-lg font-semibold text-foreground mt-1">{item.title}</h3>
                                        <div className="mt-4 flex justify-end">
                                            <Button variant="link" className="text-primary p-0 h-auto">
                                                View Project <ArrowRight className="ml-2 h-4 w-4" />
                                            </Button>
                                        </div>
                                    </div>
                                </Card>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
