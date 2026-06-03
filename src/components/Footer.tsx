"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Phone,
  MapPin,
  Clock,
  Instagram,
  MessageCircle,
  ArrowUpRight,
} from "lucide-react";
import type { SiteData } from "@/types";

export default function Footer({
  data,
}: {
  data: { business: SiteData["business"]; contact: SiteData["contact"] };
}) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const { business, contact } = data;

  const handleWhatsApp = () => {
    window.open(contact.cta.href, "_blank");
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.1 },
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
    <footer
      ref={ref}
      id="iletisim"
      className="relative bg-base-deep border-t border-white/[0.03] contain-section"
    >
      <div className="max-w-[1440px] mx-auto">
        {/* Upper section */}
        <div className="section-padding section-spacing !pb-12 sm:!pb-16">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-24"
          >
            {/* Left — Contact info */}
            <div className="space-y-8 sm:space-y-10">
              <motion.div variants={itemVariants}>
                <span className="label-text text-accent/70 mb-3 sm:mb-4 block text-xs">
                  İletişim
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-widest uppercase text-text-primary max-w-md">
                  {contact.heading}
                </h2>
                <p className="body-text mt-4 sm:mt-6 max-w-md leading-relaxed text-sm sm:text-base">
                  {contact.subheading}
                </p>
              </motion.div>

              {/* Contact details */}
              <motion.div variants={itemVariants} className="space-y-5 sm:space-y-6">
                {/* Phone */}
                <a
                  href={`tel:${business.phone}`}
                  className="flex items-center gap-3 sm:gap-4 group"
                >
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-accent/5 border border-accent/10 flex items-center justify-center group-hover:bg-accent/10 transition-colors duration-300 flex-shrink-0">
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
                  </div>
                  <div>
                    <span className="label-text text-text-muted block text-[10px] sm:text-xs">
                      Telefon
                    </span>
                    <span className="text-text-primary font-semibold tracking-wide group-hover:text-accent transition-colors text-sm sm:text-base">
                      {business.phone}
                    </span>
                  </div>
                </a>

                {/* Address */}
                <a
                  href={business.address.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 sm:gap-4 group"
                >
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-accent/5 border border-accent/10 flex items-center justify-center group-hover:bg-accent/10 transition-colors duration-300 flex-shrink-0">
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
                  </div>
                  <div>
                    <span className="label-text text-text-muted block text-[10px] sm:text-xs">
                      Adres
                    </span>
                    <span className="text-text-primary font-semibold tracking-wide group-hover:text-accent transition-colors text-sm sm:text-base">
                      {business.address.line1}
                      <br />
                      <span className="text-text-secondary text-xs sm:text-sm font-normal">
                        {business.address.zip} {business.address.city}, {business.address.state}
                      </span>
                    </span>
                  </div>
                </a>

                {/* Work hours */}
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-accent/5 border border-accent/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
                  </div>
                  <div>
                    <span className="label-text text-text-muted block mb-1.5 sm:mb-2 text-[10px] sm:text-xs">
                      Çalışma Saatleri
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      {contact.workHours.map((wh, i) => (
                        <div
                          key={i}
                          className="flex items-center text-xs sm:text-sm text-text-secondary"
                        >
                          <span className="font-medium whitespace-nowrap">
                            {wh.days}
                          </span>
                          <span className="mx-1.5 sm:mx-2 text-text-muted/30">•</span>
                          <span className="whitespace-nowrap">{wh.hours}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Instagram */}
                {business.social.instagram && (
                  <a
                    href={business.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 sm:gap-4 group"
                  >
                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-accent/5 border border-accent/10 flex items-center justify-center group-hover:bg-accent/10 transition-colors duration-300 flex-shrink-0">
                      <Instagram className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
                    </div>
                    <div>
                      <span className="label-text text-text-muted block text-[10px] sm:text-xs">
                        Instagram
                      </span>
                      <span className="text-text-primary font-semibold tracking-wide group-hover:text-accent transition-colors text-sm sm:text-base">
                        @fr.gocukduzeltme
                      </span>
                    </div>
                  </a>
                )}
              </motion.div>

              {/* WhatsApp CTA */}
              <motion.div variants={itemVariants}>
                <button
                  onClick={handleWhatsApp}
                  className="group inline-flex items-center gap-3 bg-accent text-black font-bold px-6 sm:px-8 py-3.5 sm:py-4 rounded-2xl tracking-wider uppercase text-sm transition-all duration-500 hover:accent-glow hover:scale-[1.02] active:scale-[0.98]"
                >
                  <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>{contact.cta.text}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:rotate-45 transition-transform duration-300" />
                </button>
              </motion.div>
            </div>

            {/* Right — Map */}
            <motion.div
              variants={itemVariants}
              className="rounded-2xl overflow-hidden border border-white/[0.05] bg-base-card h-[350px] sm:h-[400px] lg:h-auto"
            >
              <iframe
                src={business.address.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, filter: "grayscale(1) invert(0.95)" }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Konum"
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div className="section-padding py-4 sm:py-6 border-t border-white/[0.03] flex flex-col md:flex-row items-center justify-between gap-2 sm:gap-4">
          <p className="label-text text-text-muted/50 text-[10px] sm:text-xs text-center md:text-left">
            &copy; {new Date().getFullYear()} {business.name}. Tüm hakları
            saklıdır.
          </p>
          <p className="label-text text-text-muted/30 text-[10px] sm:text-xs text-center md:text-left">
            Engineered by DuraBilişim &bull; {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}
