"use client";

import { type ReactNode } from "react";
import { motion } from "framer-motion";

function FloatingPaths({ position }: { position: number }) {
  const paths = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 16 * position} -${189 + i * 18}C-${
      380 - i * 16 * position
    } -${189 + i * 18} -${312 - i * 16 * position} ${216 - i * 18} ${
      152 - i * 16 * position
    } ${343 - i * 18}C${616 - i * 16 * position} ${470 - i * 18} ${
      684 - i * 16 * position
    } ${875 - i * 18} ${684 - i * 16 * position} ${875 - i * 18}`,
    strokeOpacity: 0.06 + i * 0.015,
    width: 0.4 + i * 0.02,
  }));

  return (
    <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
      <svg
        className="w-full h-full text-accent/15"
        viewBox="0 0 696 316"
        fill="none"
      >
        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke="currentColor"
            strokeWidth={path.width}
            strokeOpacity={path.strokeOpacity}
            initial={{ pathLength: 0.4, opacity: 0.35 }}
            animate={{
              pathLength: [0.4, 1, 0.4],
              opacity: [0.2, 0.45, 0.2],
            }}
            transition={{
              duration: 25 + path.id * 1.5,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </svg>
    </div>
  );
}

interface BackgroundPathsProps {
  title: string;
  children?: ReactNode;
}

export function BackgroundPaths({ title, children }: BackgroundPathsProps) {
  const words = title.split(" ");

  return (
    <div className="relative w-full overflow-hidden">
      <div className="absolute inset-0">
        <FloatingPaths position={1} />
        <FloatingPaths position={-1} />
      </div>

      <div className="relative z-10">
        <div className="max-w-[1440px] mx-auto section-padding section-spacing">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="mb-16 md:mb-24 text-center"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-super uppercase leading-relaxed py-6 sm:py-8 overflow-visible">
              {words.map((word, wordIndex) => (
                <span key={wordIndex} className="inline-block mr-4 last:mr-0">
                  {word.split("").map((letter, letterIndex) => (
                    <motion.span
                      key={`${wordIndex}-${letterIndex}`}
                      variants={{
                        hidden: { y: 60, opacity: 0 },
                        visible: {
                          y: 0,
                          opacity: 1,
                          transition: {
                            delay: wordIndex * 0.12 + letterIndex * 0.035,
                            duration: 0.45,
                            ease: "easeOut",
                          },
                        },
                      }}
                      className="inline-block"
                    >
                      {letter}
                    </motion.span>
                  ))}
                </span>
              ))}
            </h2>
          </motion.div>

          {children}
        </div>
      </div>
    </div>
  );
}
