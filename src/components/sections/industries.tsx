
"use client";

import React from 'react';
import { Briefcase, GraduationCap, Lightbulb, Stethoscope, Home, Building, Music, Utensils, ShoppingBag, Palette } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { cn } from '@/lib/utils';

const industries = [
  { icon: <Briefcase size={28} />, title: 'Corporate', color: 'bg-blue-100 dark:bg-blue-900/30 text-blue-500' },
  { icon: <Home size={28} />, title: 'Real Estate', color: 'bg-green-100 dark:bg-green-900/30 text-green-500' },
  { icon: <Stethoscope size={28} />, title: 'Healthcare', color: 'bg-red-100 dark:bg-red-900/30 text-red-500' },
  { icon: <GraduationCap size={28} />, title: 'Education', color: 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-500' },
  { icon: <Building size={28} />, title: 'Event Planners', color: 'bg-purple-100 dark:bg-purple-900/30 text-purple-500' },
  { icon: <Lightbulb size={28} />, title: 'Agencies', color: 'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-500' },
  { icon: <Music size={28} />, title: 'Artists & DJs', color: 'bg-pink-100 dark:bg-pink-900/30 text-pink-500' },
  { icon: <Utensils size={28} />, title: 'Restaurants', color: 'bg-orange-100 dark:bg-orange-900/30 text-orange-500' },
  { icon: <ShoppingBag size={28} />, title: 'Retail', color: 'bg-teal-100 dark:bg-teal-900/30 text-teal-500' },
  { icon: <Palette size={28} />, title: 'Creatives', color: 'bg-cyan-100 dark:bg-cyan-900/30 text-cyan-500' },
];

export function IndustriesSection() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true, stopOnMouseEnter: true })
  );

  return (
    <section id="industries" className="py-16 lg:py-24 bg-secondary/50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
            Built For Every Industry
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            From corporate professionals to creative agencies, Taplyzer adapts to your unique needs.
          </p>
        </div>
        
        <Carousel
          plugins={[plugin.current]}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent className="-ml-4">
            {industries.map((industry, index) => (
              <CarouselItem key={index} className="pl-4 basis-1/2 md:basis-1/3 lg:basis-1/5">
                <div className="p-1 h-full">
                  <div className={cn(
                      "bg-background p-4 rounded-lg shadow-sm flex flex-col sm:flex-row items-center gap-4 h-full transition-all duration-300 border text-center sm:text-left",
                      "hover:shadow-md hover:-translate-y-1 hover:border-primary/50"
                    )}>
                    <div className={cn("p-3 rounded-lg flex-shrink-0", industry.color)}>
                      {industry.icon}
                    </div>
                    <h3 className="text-base font-semibold text-foreground leading-snug">
                      {industry.title}
                    </h3>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="bg-background/80 backdrop-blur-sm border hover:bg-card" />
          <CarouselNext className="bg-background/80 backdrop-blur-sm border hover:bg-card" />
        </Carousel>
      </div>
    </section>
  );
}
