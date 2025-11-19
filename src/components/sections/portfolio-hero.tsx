
"use client";

import { motion } from "framer-motion";

export function PortfolioHeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-background pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="absolute top-0 left-0 w-full h-full bg-secondary/20 -z-10"></div>
        <div 
            aria-hidden="true" 
            className="absolute top-1/2 left-1/4 w-96 h-96 bg-gradient-to-tr from-primary to-blue-500 rounded-full blur-3xl opacity-20 animate-move-up-down"
            style={{ borderRadius: '35% 65% 60% 40% / 50% 70% 30% 50%' }}
        ></div>
        <div 
            aria-hidden="true" 
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-tr from-accent to-purple-500 rounded-full blur-3xl opacity-20 animate-move-down-up"
            style={{ borderRadius: '65% 35% 40% 60% / 70% 50% 50% 30%' }}
        ></div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-foreground">
            Our Portfolio
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg text-muted-foreground">
            Explore a curated collection of our smart card designs and successful client collaborations. See how Taplyzer brings brands to life.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
