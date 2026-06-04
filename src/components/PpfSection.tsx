"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ShieldCheck, Sparkles, RefreshCw, Lock } from "lucide-react";
import Image from "next/image";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";

const benefits = [
  {
    icon: ShieldCheck,
    title: "Darbe ve Çizilmelere Karşı Korur",
    description:
      "Aracınızı boyatmak zorunda kalmadan yıllarca değerini koruyun. PPF filmler dış etkenlere karşı görünmez bir kalkan oluşturur.",
    number: "1",
  },
  {
    icon: Sparkles,
    title: "Her Zaman Parlak Görünür",
    description:
      "Kullandığımız PPF ürünleri aracınızın boyasına ekstra bir derinlik katar ve sürekli göz alıcı bir parlaklık sağlar.",
    number: "2",
  },
  {
    icon: RefreshCw,
    title: "Kendini Yeniler",
    description:
      "PPF filmler dışarıdan darbe alıp çizilseler bile poliüretan yapısı sayesinde zaman içinde kendini onarır.",
    number: "3",
  },
  {
    icon: Lock,
    title: "%100 Güvenlidir",
    description:
      "TPU Boya koruma filmleri aracınız boyasına zarar vermez, 10 yıla kadar güvenle kullanıp istediğiniz zaman sökebilirsiniz.",
    number: "4",
  },
];

export default function PpfSection() {
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
      id="ppf-kaplama"
      className="relative bg-base-dark contain-section overflow-hidden"
    >
      {/* Background gradient accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold-400/3 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gold-400/2 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto section-padding section-spacing relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section header */}
          <motion.div variants={itemVariants} className="text-center mb-16 md:mb-24">
            <span className="label-text text-gold-400/60 mb-3 sm:mb-4 block text-xs">
              Premium Koruma
            </span>
            <h2 className="heading-lg text-text-primary mb-4">
              PPF Kaplama Ne İşe Yarar?
            </h2>
            <p className="body-text max-w-2xl mx-auto text-sm sm:text-base">
              Aracınızı çizik ve darbelere karşı korumanın en iyi yolu. Premium boya
              koruma filmiyle aracınız ilk günkü değerini ve görünümünü korusun.
            </p>
          </motion.div>

          {/* Benefits Grid - 4 cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 mb-8 md:mb-12">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={benefit.number}
                  variants={itemVariants}
                  custom={index}
                  className="glass-card group p-5 sm:p-6 flex flex-col items-center text-center card-hover"
                >
                  <div className="w-8 h-8 rounded-full bg-gold-400/10 border border-gold-400/20 flex items-center justify-center mb-4">
                    <span className="text-gold-400 text-sm font-bold">{benefit.number}</span>
                  </div>
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gold-400/5 border border-gold-400/10 flex items-center justify-center mb-4 group-hover:bg-gold-400/10 transition-colors duration-500">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-gold-400" />
                  </div>
                  <h3 className="text-sm sm:text-base font-bold tracking-wider uppercase text-text-primary mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-text-secondary/70 text-xs sm:text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* ─── Container Scroll 3D Tablet ─── */}
          <ContainerScroll
            titleComponent={
              <>
                <span className="label-text text-gold-400/60 mb-3 sm:mb-4 block text-xs">
                  Profesyonel Uygulama
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-wider uppercase text-text-primary leading-tight">
                  PPF Kaplama
                  <br />
                  <span className="text-gold-400 mt-1 inline-block">
                    Nasıl Yapılır?
                  </span>
                </h2>
              </>
            }
          >
            <div className="flex flex-col lg:flex-row h-full gap-4 md:gap-6 p-3 sm:p-4 md:p-6">
              {/* Sol — Görsel */}
              <div className="lg:w-[45%] relative rounded-xl overflow-hidden flex-shrink-0 h-48 sm:h-64 lg:h-full">
                <Image
                  src="/images/gallery/autoprimeatasehirbaslik.png"
                  alt="PPF Kaplama Uygulaması - Autoprime Ataşehir"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-base-deep/40 via-transparent to-transparent" />

                {/* Irona badge on image */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center gap-2 px-3 py-2 rounded-xl bg-black/60 backdrop-blur-md border border-gold-400/20">
                  <ShieldCheck className="w-4 h-4 text-gold-400 flex-shrink-0" />
                  <div>
                    <span className="block text-xs font-bold text-gold-400 tracking-wider">
                      Irona Protection
                    </span>
                    <span className="text-[10px] text-text-secondary">
                      Türkiye Distribütörü
                    </span>
                  </div>
                </div>
              </div>

              {/* Sağ — Metin içeriği */}
              <div className="lg:w-[55%] flex flex-col justify-center space-y-4 sm:space-y-5 overflow-y-auto">
                <p className="text-text-secondary/90 text-xs sm:text-sm md:text-base leading-relaxed">
                  Piyasadaki en gelişmiş boya koruma filmlerini kullanıyoruz.
                  Neredeyse görünmez olan kaplama filmi; aracınızın boyasını göze
                  hoş gelmeyen sürtmelerden, çiziklerden ve demir tozlarından korur
                  ve yeniden satış değerini en üst düzeye çıkarır. Leke direnci ve
                  üstün optik netlik, özelliklerinden bazılarıdır. Araç Kaplama
                  uygulamalarında 10 yıla varan garantili hizmet vermekteyiz.
                </p>

                <p className="text-text-secondary/70 text-xs sm:text-sm leading-relaxed">
                  Auto Prime olarak yüksek kaliteyi garanti ediyoruz. Kullanılan
                  araç kaplama ürünlerimizde sararma olmaz, leke tutmaz ve kendini
                  temizleme özelliğine sahiptir. Mükemmel parlaklık etkisi,
                  çizilmezlik ve korozyon önleyici özelliği vardır.
                </p>

                {/* Kalite vurguları */}
                <div className="grid grid-cols-2 gap-2 sm:gap-3 pt-2">
                  {[
                    "10 Yıl Garanti",
                    "Sararma Yapmaz",
                    "Leke Tutmaz",
                    "Kendini Temizler",
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gold-400/5 border border-gold-400/10"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-gold-400 flex-shrink-0" />
                      <span className="text-xs sm:text-sm text-text-secondary font-medium">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ContainerScroll>
        </motion.div>
      </div>
    </section>
  );
}
