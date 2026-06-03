"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Camera, Sparkles } from "lucide-react";
import { RotatingText } from "@/components/ui/rotating-text";
import type { SiteData } from "@/types";

export default function Hero({ data, whatsapp }: { data: SiteData["hero"]; whatsapp: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75;
      videoRef.current.play().catch(() => {});
    }
  }, []);

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      "Merhaba, aracımın hasarlı bölgesinin fotoğrafını gönderiyorum. Fiyat teklifi alabilir miyim?"
    );
    window.open(`https://wa.me/${whatsapp}?text=${message}`, "_blank");
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const },
    },
  };

  return (
    <section
      id="hero"
      className="relative h-screen w-full overflow-hidden flex items-center justify-center"
    >
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          preload="metadata"
          autoPlay
          muted
          loop
          playsInline
          disableRemotePlayback
          className="w-full h-full object-cover"
          style={{ willChange: "transform" }}
        >
          <source src={data.videoUrl} type="video/mp4" />
        </video>
        <div className="absolute inset-0 gradient-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center w-full max-w-5xl mx-auto px-4 sm:px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center gap-3 sm:gap-5"
        >
          {/* Subtitle badge */}
          <motion.div variants={itemVariants}>
            <span className="label-text inline-flex items-center gap-2 px-4 sm:px-5 py-1.5 sm:py-2 border border-white/[0.08] rounded-full bg-white/[0.02] backdrop-blur-md text-[10px] sm:text-xs">
              <Sparkles className="w-3 h-3 text-accent" />
              OLEX FILMS Resmî Bayii
            </span>
          </motion.div>

          {/* Main title */}
          <motion.h1 variants={itemVariants} className="heading-xl">
            <span className="block text-text-primary">{data.title}</span>
            <span className="block text-accent mt-1">{data.titleHighlight}</span>
          </motion.h1>

          {/* Rotating text */}
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center flex-wrap gap-x-1.5 sm:gap-x-2 text-base sm:text-xl md:text-2xl lg:text-3xl font-light tracking-wide text-text-primary/90 px-2"
          >
            <span>Boyasız göçük düzeltmede</span>
            <span className="text-accent font-semibold">
              <RotatingText words={data.rotatingWords} interval={2200} />
            </span>
            <span>çözüm</span>
          </motion.div>

          {/* Subtitle description */}
          <motion.p
            variants={itemVariants}
            className="body-text max-w-sm sm:max-w-xl text-center text-xs sm:text-sm"
          >
            {data.subtitle}
          </motion.p>

          {/* CTA Button */}
          <motion.div variants={itemVariants} className="mt-1 sm:mt-3">
            <button
              onClick={handleWhatsApp}
              className="group relative inline-flex items-center gap-3 sm:gap-4 bg-accent text-black font-bold text-sm sm:text-lg px-6 sm:px-10 py-4 sm:py-5 rounded-2xl tracking-wider uppercase overflow-hidden transition-all duration-300 hover:accent-glow hover:scale-[1.02] active:scale-[0.98] gpu-layer"
            >
              <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 rounded-2xl" />
              <Camera className="w-5 h-5 sm:w-6 sm:h-6 relative z-10" />
              <span className="relative z-10 flex flex-col items-start leading-tight">
                <span>{data.cta.text}</span>
                <span className="text-[10px] sm:text-xs font-normal opacity-70 tracking-normal normal-case">
                  {data.cta.subtext}
                </span>
              </span>
            </button>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            variants={itemVariants}
            className="mt-6 sm:mt-10 flex flex-col items-center gap-2"
          >
            <span className="label-text opacity-40 text-[10px] sm:text-xs">Aşağı Kaydır</span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-px h-6 sm:h-8 bg-gradient-to-b from-transparent via-white/30 to-transparent"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom fade to bg */}
      <div className="absolute bottom-0 left-0 right-0 h-24 sm:h-32 bg-gradient-to-t from-base-deep to-transparent z-10" />
    </section>
  );
}
