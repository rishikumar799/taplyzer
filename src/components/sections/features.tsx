"use client";
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '../ui/button';
import Link from 'next/link';
import { ArrowRight, Palette, Share2, BarChart3, UserPlus, Users, Link2 } from 'lucide-react';

const features = [
  {
    icon: Palette,
    title: 'Custom Card Designer',
    description: 'Design a beautiful, branded smart card that reflects your unique identity and style.',
  },
  {
    icon: Share2,
    title: 'Instant NFC Sharing',
    description: 'Share your digital profile, contact info, and links with a single tap. No app needed.',
  },
  {
    icon: BarChart3,
    title: 'Real-Time Analytics',
    description: 'Track every interaction with detailed analytics. Know who tapped, when, and where.',
  },
  {
    icon: UserPlus,
    title: 'Lead Capture Forms',
    description: 'Collect contact information directly from your digital profile to grow your network.',
  },
  {
    icon: Users,
    title: 'Team Management',
    description: 'Manage digital business cards for your entire team from a centralized dashboard.',
  },
  {
    icon: Link2,
    title: 'CRM Integration',
    description: 'Automatically sync new connections and leads with your existing CRM software.',
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-16 lg:py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
            Powerful Features
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Everything you need to network smarter and grow faster
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <Card key={feature.title} className="bg-background border shadow-lg h-full text-left hover:border-primary/50 hover:shadow-primary/10 transition-all duration-300 group hover:-translate-y-2">
              <CardContent className="p-8 flex flex-col items-start">
                <div className="bg-primary/10 rounded-lg p-4 flex items-center justify-center mb-6 transition-colors duration-300 group-hover:bg-primary/20">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-16">
          <Button variant="link" asChild className="text-primary hover:text-primary/80">
            <Link href="#">
              See All Features <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
