
"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, PlayCircle, Smartphone, Wifi } from "lucide-react";
import { motion } from "framer-motion";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Logo } from "../logo";
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";

export function HeroSection() {
  const heroImage = PlaceHolderImages.find((p) => p.id === "nfc-phone");

  return (
    <section
      id="home"
      className="relative w-full overflow-hidden bg-background pt-24 pb-20 lg:pt-32 lg:pb-28"
    >
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 -translate-x-1/3 w-[800px] h-[800px] bg-gradient-to-tr from-primary/10 to-blue-500/10 rounded-full blur-3xl opacity-30 animate-blob"
      ></div>
      <div
        aria-hidden="true"
        className="absolute bottom-0 right-0 translate-x-1/3 w-[800px] h-[800px] bg-gradient-to-tr from-accent/10 to-purple-500/10 rounded-full blur-3xl opacity-30 animate-blob animation-delay-3000"
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
              <div className="relative h-5 w-5">
                <Image
                    src="https://ik.imagekit.io/7z0x3rycfi/taplyzer/halflogo"
                    alt="Taplyzer Logo"
                    fill
                    className="dark:invert dark:brightness-0"
                />
              </div>
              NFC Tech for Modern Networking
            </div>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl leading-tight text-foreground">
              Turn TAP into{" "}
              <span className="text-primary whitespace-nowrap">
                Global Network
              </span>
            </h1>

            <p className="max-w-xl mx-auto lg:mx-0 text-lg text-muted-foreground leading-relaxed">
              Taplyzer provides everything you need to connect, manage, and
              grow your professional network.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Button
                size="lg"
                asChild
                className="bg-primary text-primary-foreground shadow-lg hover:bg-primary/90 transition-all duration-300"
              >
                <Link href="#">
                  Get Your Card
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="group bg-background/50 hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <Link href="#">
                  <PlayCircle className="mr-2 h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  Watch Demo
                </Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="flex justify-center lg:justify-start gap-12 pt-8">
              {[
                { value: "500+", label: "Active Brands" },
                { value: "50K+", label: "Connections Made" },
                { value: "98%", label: "Satisfaction Rate" },
              ].map((item) => (
                <motion.div
                  key={item.label}
                  whileHover={{ scale: 1.05 }}
                  className="text-center"
                >
                  <p className="text-4xl font-bold text-foreground">
                    {item.value}
                  </p>
                  <p className="text-sm text-muted-foreground">{item.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0, y: [0, -10, 0] }}
              transition={{
                x: { duration: 0.9, ease: "easeOut" },
                y: { repeat: Infinity, duration: 5, ease: "easeInOut" },
              }}
              className="relative h-[420px] lg:h-[520px] rounded-2xl overflow-hidden shadow-2xl group"
            >
              {heroImage && (
                <Image
                  src={heroImage.imageUrl}
                  alt={heroImage.description}
                  fill
                  className="object-cover scale-105 group-hover:scale-110 transition-transform duration-1000 ease-out"
                  priority
                />
              )}
            </motion.div>

            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                opacity: { delay: 0.4, duration: 0.8 },
              }}
              className="absolute -bottom-8 -left-12"
            >
              <motion.div
                animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 6,
                  ease: "easeInOut",
                  delay: 0.4,
                }}
                className="bg-background/80 backdrop-blur-lg p-4 rounded-2xl shadow-lg flex items-center gap-4 w-64 border"
              >
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-50 animate-light-sweep"></div>
                     <div className="relative h-7 w-7">
                        <Image
                            src="https://ik.imagekit.io/7z0x3rycfi/taplyzer/halflogo"
                            alt="Taplyzer Logo"
                            fill
                            className="dark:invert dark:brightness-0"
                        />
                    </div>
                </div>
                <div>
                  <p className="font-semibold text-sm text-foreground">
                    New Connection
                  </p>
                  <p className="text-xs text-muted-foreground">Alex Ray</p>
                </div>
                <div className="absolute -top-4 -right-4 w-14 h-14 bg-primary rounded-full shadow-lg border-4 border-background flex items-center justify-center overflow-hidden group">
                  <Avatar className="h-12 w-12">
                      <AvatarImage src="https://ik.imagekit.io/7z0x3rycfi/taplyzer/Businessman" data-ai-hint="businessman portrait"/>
                      <AvatarFallback>AR</AvatarFallback>
                  </Avatar>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
