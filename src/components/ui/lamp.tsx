"use client";

import React, { type ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const LampContainer = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "relative flex flex-col items-center justify-center overflow-hidden w-full z-0 pt-16 pb-0 h-[420px] md:h-[480px] contain-section",
        className
      )}
    >
      <div className="relative flex w-full items-center justify-center isolate z-0 scale-y-110 scale-x-100">
        {/* Left cone */}
        <motion.div
          initial={{ opacity: 0.5, width: "12rem" }}
          whileInView={{ opacity: 1, width: "22rem" }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
            willChange: "opacity, width",
          }}
          className="absolute inset-auto right-1/2 h-44 overflow-visible w-[22rem] [--conic-position:from_70deg_at_center_top]"
        >
          <div className="absolute w-[100%] left-0 bg-base-dark h-32 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
          <div className="absolute w-32 h-[100%] left-0 bg-base-dark bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
        </motion.div>

        {/* Right cone */}
        <motion.div
          initial={{ opacity: 0.5, width: "12rem" }}
          whileInView={{ opacity: 1, width: "22rem" }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
            willChange: "opacity, width",
          }}
          className="absolute inset-auto left-1/2 h-44 w-[22rem] [--conic-position:from_290deg_at_center_top]"
        >
          <div className="absolute w-32 h-[100%] right-0 bg-base-dark bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
          <div className="absolute w-[100%] right-0 bg-base-dark h-32 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
        </motion.div>

        {/* Bottom blur */}
        <div className="absolute top-1/2 h-36 w-full translate-y-8 scale-x-150 bg-base-dark blur-2xl" />

        {/* Central glow dot */}
        <div className="absolute inset-auto z-50 h-28 w-[20rem] -translate-y-1/2 rounded-full bg-accent/30 opacity-40 blur-3xl" />

        {/* Secondary glow */}
        <motion.div
          initial={{ width: "6rem" }}
          whileInView={{ width: "12rem" }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          style={{ willChange: "width" }}
          className="absolute inset-auto z-30 h-28 w-48 -translate-y-[5rem] rounded-full bg-accent/20 blur-2xl"
        />

        {/* Horizontal line */}
        <motion.div
          initial={{ width: "12rem" }}
          whileInView={{ width: "22rem" }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          style={{ willChange: "width" }}
          className="absolute inset-auto z-50 h-0.5 w-[22rem] -translate-y-[5.5rem] bg-accent/40"
        />

        {/* Top cover */}
        <div className="absolute inset-auto z-40 h-36 w-full -translate-y-[10rem] bg-base-dark" />
      </div>

      {/* Content area */}
      <div className="relative z-50 flex -translate-y-20 flex-col items-center px-5">
        {children}
      </div>
    </div>
  );
}
