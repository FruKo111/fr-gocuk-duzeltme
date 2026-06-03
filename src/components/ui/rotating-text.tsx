"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface RotatingTextProps {
  words: string[];
  interval?: number;
  className?: string;
}

export function RotatingText({
  words,
  interval = 2000,
  className = "",
}: RotatingTextProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (words.length <= 1) return;

    const timeoutId = setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % words.length);
    }, interval);

    return () => clearTimeout(timeoutId);
  }, [activeIndex, interval, words.length]);

  return (
    <span className={`inline-flex overflow-hidden align-bottom ${className}`}>
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={activeIndex}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
          transition={{
            y: { type: "spring", stiffness: 90, damping: 20 },
            opacity: { duration: 0.2 },
          }}
          className="inline-block whitespace-nowrap"
          aria-live="polite"
        >
          {words[activeIndex]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
