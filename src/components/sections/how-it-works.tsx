
"use client";

import { Zap, Users, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    icon: <Zap className="h-8 w-8 text-primary" />,
    title: "Tap",
    description: "Tap your Taplyzer card on any phone. No app download needed.",
  },
  {
    num: "02",
    icon: <Users className="h-8 w-8 text-primary" />,
    title: "Connect",
    description: "Instantly share your digital profile, links & contacts.",
  },
  {
    num: "03",
    icon: <TrendingUp className="h-8 w-8 text-primary" />,
    title: "Grow",
    description: "Capture leads, get analytics, and close deals faster.",
  },
];

export function HowItWorksSection() {
  return (
    <section 
      id="how-it-works" 
      className="py-16 lg:py-24 relative overflow-hidden"
    >
        {/* Animated Bubbles */}
        <div aria-hidden="true" className="absolute inset-0 -z-10 hidden md:block">
            <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-tr from-primary/20 to-blue-500/20 rounded-full blur-3xl opacity-50 animate-blob"></div>
            <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-gradient-to-tr from-accent/20 to-purple-500/20 rounded-full blur-3xl opacity-50 animate-blob animation-delay-3000"></div>
            <div className="absolute top-1/2 right-1/2 w-48 h-48 bg-gradient-to-tr from-primary/10 to-transparent rounded-full blur-2xl opacity-30 animate-blob animation-delay-[1500ms]"></div>
        </div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
            How It Works
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Three simple steps to revolutionize your networking
          </p>
        </div>
        <div className="relative">
          {/* Dashed Connector Line */}
          <div className="absolute top-1/2 left-0 w-full h-px bg-transparent hidden md:block" aria-hidden="true">
             <div className="absolute top-0 left-0 w-full border-t-2 border-dashed border-border/70"></div>
          </div>
          
          <div className="relative grid md:grid-cols-3 gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2, ease: "easeOut" }}
                viewport={{ once: true }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
              >
                <Card className="bg-background/80 backdrop-blur-sm border shadow-lg h-full text-center hover:border-primary/50 hover:shadow-primary/10 transition-all duration-300">
                  <CardContent className="p-8 relative flex flex-col items-center">
                    <div className="mb-6">
                      <div className="bg-primary/10 rounded-lg p-5 flex items-center justify-center">
                        {step.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                    <div className="absolute top-4 right-4 text-5xl font-bold text-foreground/5 select-none -z-10">{step.num}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
