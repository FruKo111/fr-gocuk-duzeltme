"use client";

import Marquee from "react-fast-marquee";
import { Sparkles } from "lucide-react";
import type { SiteData } from "@/types";

export default function InfiniteMarquee({
  data,
}: {
  data: SiteData["marquee"];
}) {
  return (
    <section className="relative py-6 sm:py-8 md:py-10 bg-base-dark border-y border-white/[0.03] overflow-hidden">
      <Marquee
        speed={data.speed}
        gradient={false}
        pauseOnHover={false}
        className="overflow-hidden"
      >
        {Array.from({ length: 3 }).flatMap((_, round) =>
          data.items.map((item, i) => (
            <div
              key={`${round}-${i}`}
              className="flex items-center gap-4 sm:gap-6 px-4 sm:px-6 select-none"
            >
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-accent/40 flex-shrink-0" />
              <span className="text-text-primary/80 text-xs sm:text-sm md:text-base font-semibold tracking-ultra uppercase whitespace-nowrap">
                {item}
              </span>
              <span className="w-0.5 h-2.5 sm:h-3 bg-accent/20 rounded-full flex-shrink-0" />
            </div>
          ))
        )}
      </Marquee>
    </section>
  );
}
