
"use client";

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Star, Quote } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

const testimonials = [
  {
    quote: "Taplyzer transformed how we network at conferences. We've captured 3x more leads since switching to smart cards.",
    name: 'Sarah Chen',
    title: 'Founder, TechStart Inc',
    avatarId: 'testimonial-avatar-1',
  },
  {
    quote: "My clients love the instant property links. The analytics help me follow up at the perfect time. Game changer!",
    name: 'Michael Rodriguez',
    title: 'Real Estate Agent',
    avatarId: 'testimonial-avatar-2',
  },
  {
    quote: "The custom branding and WhatsApp integration make us look incredibly professional. Worth every penny.",
    name: 'Emily Johnson',
    title: 'Marketing Director',
    avatarId: 'testimonial-avatar-3',
  },
  {
    quote: "Finally ditched paper cards! Taplyzer makes me look tech-savvy and the analytics are incredible.",
    name: 'David Park',
    title: 'Business Consultant',
    avatarId: 'testimonial-avatar-4',
  },
  {
    quote: "Managing team cards for events has never been easier. The dashboard gives us real insights.",
    name: 'Lisa Anderson',
    title: 'Event Manager',
    avatarId: 'testimonial-avatar-5',
  },
  {
    quote: "Closed 40% more deals with better follow-ups. Taplyzer is essential for modern sales.",
    name: 'James Wilson',
    title: 'Sales Executive',
    avatarId: 'testimonial-avatar-6',
  },
];

export function TestimonialsSection() {
    const testimonialImages = testimonials.map(t => PlaceHolderImages.find(p => p.id === t.avatarId));
    const plugin = React.useRef(
      Autoplay({ delay: 3000, stopOnInteraction: true })
    );

  return (
    <section id="testimonials" className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
            Loved By Professionals
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Join thousands of professionals who trust Taplyzer
          </p>
        </div>
        <Carousel
          plugins={[plugin.current]}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-6xl mx-auto"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent className="-ml-4">
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="p-1 h-full">
                  <Card className="bg-background shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out hover:-translate-y-2 border h-full relative overflow-hidden">
                      <CardContent className="p-8 flex flex-col gap-6 h-full">
                          <Quote className="absolute top-6 right-6 w-16 h-16 text-primary/5 -rotate-12" />
                          <div className="flex gap-1">
                              {[...Array(5)].map((_, i) => (
                                  <Star key={i} className="w-5 h-5 text-primary fill-primary" />
                              ))}
                          </div>
                          <blockquote className="text-muted-foreground flex-grow z-10">
                          "{testimonial.quote}"
                          </blockquote>
                          <div className="flex items-center gap-4 pt-6 border-t mt-auto z-10">
                              {testimonialImages[index] && (
                                  <Avatar className="h-12 w-12 border-2 border-primary/20">
                                      <AvatarImage src={testimonialImages[index]?.imageUrl} alt={testimonial.name} data-ai-hint={testimonialImages[index]?.imageHint} />
                                      <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                                  </Avatar>
                              )}
                              <div>
                                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                                  <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                              </div>
                          </div>
                      </CardContent>
                  </Card>
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
