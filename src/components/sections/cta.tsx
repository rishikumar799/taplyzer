"use client";

import { Button } from '@/components/ui/button';
import { ArrowRight, Check } from 'lucide-react';
import Link from 'next/link';

export function CtaSection() {
  return (
    <section id="cta" className="relative overflow-hidden py-20 lg:py-32 bg-secondary/50">
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-tr from-primary to-blue-500 rounded-full blur-3xl opacity-20 animate-blob -z-10"
      ></div>
      <div
        aria-hidden="true"
        className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-96 h-96 bg-gradient-to-tr from-accent to-purple-500 rounded-full blur-3xl opacity-20 animate-blob animation-delay-3000 -z-10"
      ></div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-4xl font-bold tracking-tight sm:text-5xl text-foreground">
          Build Your Smart Card Today
        </h2>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground">
          Join 500+ Brands Growing with Taplyzer. Start networking smarter in
          minutes.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" asChild className="w-full sm:w-auto bg-primary text-primary-foreground shadow-lg hover:shadow-xl transition-shadow">
            <Link href="#">
              Get Started Now <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild className="w-full sm:w-auto bg-background">
            <Link href="#">Schedule Demo</Link>
          </Button>
        </div>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <Check className="w-4 h-4 text-green-500" />
            <span>14-day free trial</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Check className="w-4 h-4 text-green-500" />
            <span>No credit card required</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Check className="w-4 h-4 text-green-500" />
            <span>Cancel anytime</span>
          </div>
        </div>
      </div>
    </section>
  );
}
