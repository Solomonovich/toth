"use client";

import Image from "next/image";
import { HeartHandshake } from "lucide-react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/motion";

/**
 * Landing hero. Plays a calm, staggered entrance on load and applies a very
 * gentle parallax drift to the banner as the page scrolls.
 *
 * The entrance is handled by Framer Motion variants and respects reduced motion
 * globally via `<MotionConfig reducedMotion="user">`. For the parallax we gate
 * the transform's *output range* (not the rendered element) on reduced motion:
 * at scroll position 0 the offset is 0 either way, so server and client render
 * identically — no hydration mismatch — and reduced-motion users simply never
 * see the banner drift.
 */
export function Hero() {
  const reduceMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const bannerY = useTransform(scrollY, [0, 500], [0, reduceMotion ? 0 : -50]);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center py-20 overflow-hidden">
      <motion.div
        className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col items-center text-center"
        variants={staggerContainer}
        initial="hidden"
        animate="show"
      >
        <motion.div
          variants={staggerItem}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sapphire-500/10 border border-sapphire-500/20 text-sapphire-400 mb-8"
        >
          <HeartHandshake className="w-4 h-4" />
          <span className="text-sm font-medium">Welcome to TOTH</span>
        </motion.div>

        <motion.h1
          variants={staggerItem}
          className="text-5xl md:text-7xl font-bold tracking-tight mb-6 max-w-4xl"
        >
          Your Community for{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sapphire-400 to-gold-400">
            Connection &amp; Growth
          </span>
        </motion.h1>

        <motion.p
          variants={staggerItem}
          className="text-lg md:text-xl text-foreground/70 max-w-2xl mb-10 leading-relaxed"
        >
          Treasure of the Hills Senior Center is dedicated to enhancing the quality of life for
          seniors in Cedar Park through engaging activities, lifelong education, and meaningful
          social connection.
        </motion.p>

        <motion.div variants={staggerItem} className="flex flex-col sm:flex-row gap-4 mb-16">
          <a
            href="#membership"
            className="px-8 py-4 rounded-xl bg-sapphire-600 hover:bg-sapphire-500 text-white font-medium transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] flex items-center justify-center gap-2"
          >
            Become a Member
          </a>
          <a
            href="#activities"
            className="px-8 py-4 rounded-xl bg-card border border-border hover:bg-card/80 text-foreground font-medium transition-all flex items-center justify-center gap-2"
          >
            View Activities
          </a>
        </motion.div>

        {/* Hero Banner Visual */}
        <motion.div
          variants={staggerItem}
          style={{ y: bannerY }}
          className="w-full max-w-5xl rounded-2xl overflow-hidden border border-border/60 shadow-[0_0_50px_rgba(37,99,235,0.15)] relative group bg-card/40 backdrop-blur-md p-2"
        >
          <div className="rounded-xl overflow-hidden relative h-[200px] sm:h-[360px] bg-white">
            <Image
              src="/images/hero-banner.jpg"
              alt="Treasure of the Hills Senior Center Facility Banner"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 1024px"
              className="object-contain group-hover:scale-102 transition-transform duration-700 ease-out"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
