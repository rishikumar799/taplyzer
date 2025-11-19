import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const plans = [
  {
    name: 'Standard',
    tagline: 'Tap. Share. Connect.',
    price: 29,
    description: 'Perfect for individuals and freelancers',
    features: [
      'Smart NFC Card',
      'Digital Profile',
      'QR Code Sharing',
      'Basic Analytics',
      'Email Support',
    ],
    isPopular: false,
  },
  {
    name: 'Custom',
    tagline: 'Your Brand. Your Flow.',
    price: 79,
    description: 'For businesses that want to stand out',
    features: [
      'Everything in Standard',
      'Custom Branded Card',
      'Advanced Analytics',
      'WhatsApp Integration',
      'Lead Capture Forms',
      'Priority Support',
    ],
    isPopular: true,
  },
  {
    name: 'Elite',
    tagline: 'Data That Drives Growth.',
    price: 149,
    description: 'Enterprise solution with full control',
    features: [
      'Everything in Custom',
      'CRM Integration',
      'Team Management',
      'White-Label Domain',
      'API Access',
      'Dedicated Manager',
      'Custom Development',
    ],
    isPopular: false,
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
            Choose Your Plan
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            From individuals to enterprises, we have a plan that fits your
            needs
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto items-start">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={cn(
                'flex flex-col h-full bg-background border shadow-lg transition-all duration-300',
                plan.isPopular
                  ? 'border-primary shadow-primary/20 scale-105'
                  : 'hover:shadow-xl hover:-translate-y-2'
              )}
            >
              {plan.isPopular && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2">
                  <div className="bg-primary text-primary-foreground text-sm font-semibold px-4 py-1.5 rounded-full shadow-md">
                    Most Popular
                  </div>
                </div>
              )}
              <CardHeader className="pt-12">
                <CardTitle className="text-2xl font-bold text-foreground">
                  {plan.name}
                </CardTitle>
                <CardDescription>{plan.tagline}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow space-y-6">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-foreground">
                    ${plan.price}
                  </span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <p className="text-sm text-muted-foreground">{plan.description}</p>
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <div className="bg-primary/10 rounded-full p-0.5">
                        <Check className="h-4 w-4 text-primary" />
                      </div>
                      <span className="text-sm text-foreground/80">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="pt-6">
                <Button
                  asChild
                  size="lg"
                  className={cn(
                    'w-full',
                    !plan.isPopular && 'bg-primary/10 text-primary hover:bg-primary/20',
                    plan.isPopular && 'bg-primary text-primary-foreground hover:bg-primary/90'
                  )}
                >
                  <Link href="#">
                    {plan.name === 'Elite' ? 'Contact Sales' : 'Get Started'}
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
