"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Award, Users, Star, Building } from "lucide-react";

const stats = [
  {
    icon: Building,
    value: "10+",
    label: "Şube",
  },
  {
    icon: Users,
    value: "15+",
    label: "Profesyonel Ekip",
  },
  {
    icon: Star,
    value: "10",
    label: "Yıl Garanti",
  },
  {
    icon: Award,
    value: "10+",
    label: "Yıl Tecrübe",
  },
];

export default function AboutSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.12, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const },
    },
  };

  return (
    <section
      ref={ref}
      id="hakkimizda"
      className="relative bg-base-deep contain-section overflow-hidden"
    >
      {/* Background accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/[0.02] rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto section-padding section-spacing relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16 md:mb-24">
            <span className="label-text text-accent/60 mb-3 sm:mb-4 block text-xs">
              Hakkımızda
            </span>
            <h2 className="heading-lg text-text-primary mb-4">
              Autoprime Ataşehir
            </h2>
            <p className="body-text max-w-3xl mx-auto text-sm sm:text-base">
              10 yılı aşkın tecrübemizle İstanbul Ataşehir'de premium araç
              koruma hizmetleri sunuyoruz. Irona Protection'ın Türkiye
              distribütörü olarak, en kaliteli PPF, seramik kaplama ve renk
              değişimi ürünlerini profesyonel ekibimizle uyguluyoruz.
            </p>
          </motion.div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="glass-card group p-6 sm:p-8 flex flex-col items-center text-center card-hover"
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-accent/5 border border-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/10 transition-colors duration-500">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
                  </div>
                  <span className="text-3xl sm:text-4xl font-bold text-accent tracking-wider mb-2">
                    {stat.value}
                  </span>
                  <span className="label-text text-text-secondary text-[11px] sm:text-xs">
                    {stat.label}
                  </span>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <motion.div
            variants={itemVariants}
            className="mt-16 md:mt-20 text-center"
          >
            <p className="body-text max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
              Ataşehir şubemiz markamızın genel merkezidir. Yaklaşık 15 kişilik
              uzman ekibimizle aracınıza showroom parlaklığı kazandırıyor, PPF
              kaplamadan seramik kaplamaya, renk değişiminden detaylı temizliğe
              kadar tüm ihtiyaçlarınızda yanınızdayız. Kalite, güven ve müşteri
              memnuniyeti odaklı hizmet anlayışımızla 10. yılımızda da aynı
              tutkuyla çalışmaya devam ediyoruz.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
