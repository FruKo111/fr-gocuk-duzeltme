"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Car, CloudLightning, Shield, Layers } from "lucide-react";
import { BackgroundPaths } from "@/components/ui/background-paths";
import type { SiteData } from "@/types";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Car,
  CloudLightning,
  Shield,
  Layers,
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
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const },
    },
  };

  return (
    <section id="hizmetler" className="bg-base-deep contain-section">
      <BackgroundPaths title="Hizmetlerimiz">
        <div ref={ref}>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6"
          >
            {data.map((service) => {
              const IconComponent = iconMap[service.icon] || Shield;

              return (
                <motion.div
                  key={service.id}
                  variants={cardVariants}
                  className="glass-card group p-4 sm:p-5 md:p-6 flex flex-col card-hover cursor-default"
                >
                  {/* Icon */}
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-accent/5 border border-accent/10 flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-accent/10 transition-colors duration-500">
                    <IconComponent className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-accent" />
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-sm sm:text-base md:text-lg font-bold tracking-wider uppercase text-text-primary mb-1 sm:mb-1.5">
                    {service.title}
                  </h3>
                  <p className="text-text-secondary/80 text-xs md:text-sm leading-relaxed mb-3 sm:mb-4">
                    {service.description}
                  </p>

                  {/* Features list */}
                  <ul className="space-y-1.5 sm:space-y-2 mt-auto">
                    {service.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-1.5 sm:gap-2 text-[11px] sm:text-xs text-text-secondary/70"
                      >
                        <span className="mt-1.5 w-1 h-1 rounded-full bg-accent/70 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </BackgroundPaths>
    </section>
  );
}
