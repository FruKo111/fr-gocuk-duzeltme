"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { MessageCircle, ShieldCheck, MapPin } from "lucide-react";
import { RotatingText } from "@/components/ui/rotating-text";
import type { SiteData } from "@/types";

export default function Hero({ data, whatsapp }: { data: SiteData["hero"]; whatsapp: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoReady, setVideoReady] = useState(false);

  const handleWhatsApp = useCallback(() => {
    const message = encodeURIComponent(
      "Merhaba, aracım için PPF kaplama / seramik kaplama hakkında fiyat teklifi alabilir miyim?"
    );
    window.open(`https://wa.me/${whatsapp}?text=${message}`, "_blank");
  }, [whatsapp]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Smooth playback rate
    video.playbackRate = 0.8;

    const handleCanPlay = () => {
      setVideoReady(true);
      video.play().catch(() => {
        // Safari / mobile may block autoplay, retry on first user interaction
        const playOnInteraction = () => {
          video.play().catch(() => {});
          document.removeEventListener("click", playOnInteraction);
          document.removeEventListener("touchstart", playOnInteraction);
        };
        document.addEventListener("click", playOnInteraction, { once: true });
        document.addEventListener("touchstart", playOnInteraction, { once: true });
      });
    };

    // If video is already buffered enough
    if (video.readyState >= 3) {
      handleCanPlay();
    } else {
      video.addEventListener("canplay", handleCanPlay, { once: true });
    }

    // Preload the video aggressively in the background
    video.load();

    return () => {
      video.removeEventListener("canplay", handleCanPlay);
    };
  }, []);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.12, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] as const },
    },
  };

  return (
    <section
      id="hero"
      className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-black"
    >
      {/* Poster / placeholder — shown until video is ready */}
      <div
        className={`absolute inset-0 z-0 bg-black transition-opacity duration-700 ${
          videoReady ? "opacity-0" : "opacity-100"
        }`}
      >
        <img
          src="/images/gallery/autoprimeatasehirbaslik.png"
          alt=""
          className="w-full h-full object-cover opacity-30"
          loading="eager"
          fetchPriority="high"
        />
      </div>

      {/* Video Background */}
      <div
        className={`absolute inset-0 z-0 transition-opacity duration-1000 ${
          videoReady ? "opacity-100" : "opacity-0"
        }`}
      >
        <video
          ref={videoRef}
          preload="auto"
          autoPlay
          muted
          loop
          playsInline
          disableRemotePlayback
          disablePictureInPicture
          className="w-full h-full object-cover"
        >
          <source src={data.videoUrl} type="video/mp4" />
        </video>
        {/* Dark overlay for luxury feel */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center w-full max-w-4xl mx-auto px-4 sm:px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center gap-4 sm:gap-6"
        >
          {/* Logo */}
          <motion.div variants={itemVariants} className="mb-2">
            <img
              src="/images/gallery/autoprimeatasehirlogo.png"
              alt="Autoprime Ataşehir"
              className="h-16 sm:h-20 md:h-24 w-auto object-contain drop-shadow-[0_0_40px_rgba(212,175,55,0.3)]"
              loading="eager"
              fetchPriority="high"
            />
          </motion.div>

          {/* Irona Protection badge */}
          <motion.div variants={itemVariants}>
            <span className="inline-flex items-center gap-2 px-4 sm:px-5 py-1.5 sm:py-2 border border-gold-400/20 rounded-full bg-gold-400/5 backdrop-blur-md text-[10px] sm:text-xs text-gold-300 tracking-wider">
              <ShieldCheck className="w-3 h-3 text-gold-400" />
              Irona Protection Türkiye Distribütörü
            </span>
          </motion.div>

          {/* Location */}
          <motion.div variants={itemVariants}>
            <p className="text-text-primary/80 text-sm sm:text-base md:text-lg font-light tracking-wide flex items-center justify-center gap-2">
              <MapPin className="w-4 h-4 text-gold-400" />
              İstanbul Ataşehir'de yeni lokasyonumuzda hizmetinizdeyiz.
            </p>
            <p className="text-text-secondary text-xs sm:text-sm mt-1 tracking-wide">
              Kayışdağı, Narçiçeği Sok. No:20, 34755 Ataşehir / İstanbul
            </p>
          </motion.div>

          {/* Rotating text */}
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center flex-wrap gap-x-1.5 sm:gap-x-2 text-lg sm:text-xl md:text-2xl lg:text-3xl font-light tracking-wide text-text-primary/90 px-2"
          >
            <span>Aracınızı darbe ve çizilmelere karşı</span>
            <span className="text-gold-400 font-semibold">
              <RotatingText words={data.rotatingWords} interval={2200} />
            </span>
          </motion.div>

          {/* Subtitle description */}
          <motion.p
            variants={itemVariants}
            className="text-text-secondary/80 max-w-md sm:max-w-xl text-center text-xs sm:text-sm tracking-wide"
          >
            {data.subtitle}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="mt-2 sm:mt-4 flex flex-col sm:flex-row items-center gap-3">
            <button
              onClick={handleWhatsApp}
              className="group relative inline-flex items-center gap-3 sm:gap-4 bg-gold-400 text-black font-bold text-sm sm:text-base px-7 sm:px-10 py-4 sm:py-5 rounded-2xl tracking-wider uppercase overflow-hidden transition-all duration-500 hover:shadow-[0_0_40px_rgba(212,175,55,0.3)] hover:scale-[1.02] active:scale-[0.98] gpu-layer"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-gold-300/0 via-gold-200/30 to-gold-300/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 rounded-2xl" />
              <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 relative z-10" />
              <span className="relative z-10 flex flex-col items-start leading-tight">
                <span>{data.cta.text}</span>
                <span className="text-[10px] sm:text-xs font-normal opacity-60 tracking-normal normal-case">
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
            <span className="label-text opacity-30 text-[10px] sm:text-xs">Aşağı Kaydır</span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-px h-6 sm:h-8 bg-gradient-to-b from-transparent via-gold-400/30 to-transparent"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom fade to bg */}
      <div className="absolute bottom-0 left-0 right-0 h-24 sm:h-32 bg-gradient-to-t from-base-deep to-transparent z-10" />
    </section>
  );
}
