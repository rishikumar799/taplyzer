"use client"

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Palette, Users, BarChart3, Link, Headset, Gem } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    icon: <Palette className="h-8 w-8 text-primary" />,
    title: 'Custom Card Design',
    description: 'Create a lasting first impression with a smart card designed to match your brand. From logos to custom finishes, we make your card truly yours.',
  },
  {
    icon: <Gem className="h-8 w-8 text-primary" />,
    title: 'Digital Profile Platform',
    description: 'Your digital hub for everything you are. Control your contact info, social links, portfolios, and more from an easy-to-use dashboard.',
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: 'Team & Enterprise Solutions',
    description: 'Equip your entire organization with smart cards. Manage branding, profiles, and permissions from a centralized dashboard.',
  },
  {
    icon: <BarChart3 className="h-8 w-8 text-primary" />,
    title: 'Advanced Analytics & ROI',
    description: 'Track every tap, view, and connection. Gain actionable insights into your networking efforts and measure your ROI.',
  },
  {
    icon: <Link className="h-8 w-8 text-primary" />,
    title: 'CRM & Workflow Integrations',
    description: 'Seamlessly connect Taplyzer to your existing CRM and marketing tools to automate lead capture and follow-ups.',
  },
  {
    icon: <Headset className="h-8 w-8 text-primary" />,
    title: 'Dedicated & Premium Support',
    description: 'Our team is your team. Get dedicated support for onboarding, event setup, and custom integration requirements.',
  },
];

export function ServicesSection() {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="services" className="py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full bg-background border shadow-lg hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-2 group">
                  <CardHeader className="flex-row items-start gap-4 space-y-0">
                    <div className="bg-primary/10 rounded-lg p-4 flex items-center justify-center transition-colors duration-300 group-hover:bg-primary/20">
                      {service.icon}
                    </div>
                    <div className="space-y-1">
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="leading-relaxed">{service.description}</CardDescription>
                  </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
