"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Play, X, Sparkles } from "lucide-react";
import { LampContainer } from "@/components/ui/lamp";
import DisplayCards from "@/components/ui/display-cards";
import type { SiteData } from "@/types";

export default function Gallery({
  data,
}: {
  data: SiteData["gallery"];
}) {
  const gridRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(gridRef, { once: true, margin: "-50px" });
  const [activeVideo, setActiveVideo] = useState<number | null>(null);

  return (
    <section id="galeri" className="bg-base-dark contain-section">
      {/* Lamp Header */}
      <LampContainer>
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="label-text text-accent/60 mb-4 sm:mb-6 block"
        >
          Çalışmalarımız
        </motion.span>
        <motion.h2
          initial={{ opacity: 0.5, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6, ease: "easeInOut" }}
          className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-super uppercase text-center"
          style={{ willChange: "transform, opacity" }}
        >
          <span className="block">Dönüşüm</span>
          <span className="block text-accent mt-1">Hikayeleri</span>
        </motion.h2>
      </LampContainer>

      {/* Display Cards + Video Grid */}
      <div className="max-w-[1440px] mx-auto section-padding -mt-40 md:-mt-48 pb-16 sm:pb-24 md:pb-36">
        {/* Display Cards Stack */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mb-6 md:mb-8 flex justify-center"
        >
          <DisplayCards />
        </motion.div>

        {/* Video Gallery Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6"
        >
          {data.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
                ease: [0.25, 0.1, 0.25, 1] as const,
              }}
              className="group relative aspect-[9/16] rounded-2xl overflow-hidden cursor-pointer border border-white/[0.04] bg-base-deep"
            >
              {/* Video */}
              <video
                src={item.videoUrl}
                preload="metadata"
                muted
                loop
                playsInline
                disableRemotePlayback
                className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-500"
                style={{ willChange: "transform" }}
                onMouseEnter={(e) => {
                  const v = e.currentTarget;
                  v.play().catch(() => {});
                }}
                onMouseLeave={(e) => {
                  const v = e.currentTarget;
                  v.pause();
                  v.currentTime = 0;
                }}
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-base-deep/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-400 pointer-events-none" />

              {/* Play button */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-accent/90 text-black flex items-center justify-center shadow-lg pointer-events-auto">
                  <Play className="w-4 h-4 sm:w-5 sm:h-5 ml-0.5" />
                </div>
              </div>

              {/* Info */}
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 opacity-0 group-hover:opacity-100 transition-all duration-400 translate-y-2 group-hover:translate-y-0 pointer-events-none">
                <span className="label-text text-accent mb-1 block text-[10px] sm:text-xs">
                  {item.category}
                </span>
                <h3 className="text-xs sm:text-sm font-semibold tracking-wider text-text-primary">
                  {item.title}
                </h3>
              </div>

              {/* Top label */}
              <div className="absolute top-2 sm:top-3 left-2 sm:left-3">
                <span className="flex items-center gap-1 sm:gap-1.5 text-[9px] sm:text-[10px] tracking-ultra uppercase bg-black/50 backdrop-blur-md px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full text-white/70">
                  <Sparkles className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-accent/60" />
                  Video
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Fullscreen Video Modal */}
      <AnimatePresence>
        {activeVideo !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-base-deep/98 backdrop-blur-2xl flex items-center justify-center p-4"
            onClick={() => {
              setActiveVideo(null);
            }}
          >
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute top-4 sm:top-6 right-4 sm:right-6 z-10 w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center rounded-full bg-white/[0.04] border border-white/[0.08] text-white/60 hover:text-white hover:border-white/20 transition-all"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            <motion.div
              key={activeVideo}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] as const }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-xl w-full flex flex-col items-center"
            >
              <div className="w-full max-w-[300px] sm:max-w-[380px] mx-auto rounded-2xl overflow-hidden border border-white/[0.06] bg-black">
                <video
                  src={data[activeVideo].videoUrl}
                  controls
                  autoPlay
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="mt-4 sm:mt-6 text-center">
                <span className="label-text text-accent/70 mb-1 block text-xs">
                  {data[activeVideo].category}
                </span>
                <h3 className="text-base sm:text-lg font-bold tracking-wider text-text-primary">
                  {data[activeVideo].title}
                </h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
