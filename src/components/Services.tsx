"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Shield, Palette, Droplets, Sparkles, Sun, Check } from "lucide-react";
import { BackgroundPaths } from "@/components/ui/background-paths";
import { GlowingEffect } from "@/components/ui/grid-glow-effect";
import type { SiteData } from "@/types";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Shield,
  Palette,
  Droplets,
  Sparkles,
  Sun,
};

export default function Services({
  data,
}: {
  data: SiteData["services"];
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.12, delayChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.97 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  // Layout: PPF card spans 2 cols at top-left, then 3 across bottom
  return (
    <section id="hizmetler" className="bg-base-deep contain-section">
      <BackgroundPaths title="Hizmetlerimiz">
        <div ref={ref}>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6"
          >
            {data.map((service, index) => {
              const IconComponent = iconMap[service.icon] || Shield;

              return (
                <motion.div
                  key={service.id}
                  variants={cardVariants}
                  className={index === 0 ? "md:col-span-2" : ""}
                >
                  {/* Outer wrapper with glow */}
                  <div className="relative h-full rounded-[1.25rem] md:rounded-[1.5rem] border border-gold-400/[0.08] bg-black/40 backdrop-blur-sm shadow-lg">
                    <GlowingEffect
                      spread={40}
                      glow={true}
                      disabled={false}
                      proximity={80}
                      inactiveZone={0.01}
                      borderWidth={3}
                      variant="gold"
                      blur={1}
                      movementDuration={2}
                    />
                    {/* Inner card */}
                    <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-[1.1rem] md:rounded-[1.35rem] border border-gold-400/[0.06] bg-base-deep/90 backdrop-blur-sm p-5 sm:p-6 md:p-7 shadow-[0px_4px_24px_0px_rgba(212,175,55,0.04)]">
                      {/* Icon */}
                      <div className="w-fit rounded-xl border border-gold-400/10 bg-gradient-to-br from-gold-400/10 to-gold-500/5 p-3 shadow-sm mb-4">
                        <IconComponent className="w-5 h-5 text-gold-400" />
                      </div>

                      {/* Title & Description */}
                      <div className="space-y-3 flex-1">
                        <h3 className="text-base sm:text-lg md:text-xl font-bold tracking-wider uppercase text-text-primary">
                          {service.title}
                        </h3>
                        <p className="text-text-secondary/70 text-xs sm:text-sm leading-relaxed">
                          {service.description}
                        </p>
                      </div>

                      {/* Features list */}
                      <ul className="space-y-2 sm:space-y-2.5 mt-5 pt-4 border-t border-gold-400/[0.06]">
                        {service.features.map((feature, i) => (
                          <li
                            key={i}
                            className="flex items-center gap-2 sm:gap-2.5 text-xs sm:text-sm text-text-secondary/60"
                          >
                            <span className="w-4 h-4 rounded-full bg-gold-400/10 border border-gold-400/20 flex items-center justify-center flex-shrink-0">
                              <Check className="w-2.5 h-2.5 text-gold-400" />
                            </span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </BackgroundPaths>
    </section>
  );
}
