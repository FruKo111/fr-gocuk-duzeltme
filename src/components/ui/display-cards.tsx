"use client";

import { cn } from "@/lib/utils";
import { Sparkles, Flame, Zap } from "lucide-react";
import type { ReactNode } from "react";

/* ── Card data interface ── */
interface DisplayCardProps {
  className?: string;
  icon?: ReactNode;
  title?: string;
  description?: string;
  date?: string;
  iconClassName?: string;
  titleClassName?: string;
}

const defaultCards: DisplayCardProps[] = [
  {
    icon: <Sparkles className="size-4 text-accent" />,
    title: "Öne Çıkan",
    description: "Premium PPF Kaplama",
    date: "En çok tercih edilen",
    iconClassName: "text-accent",
    titleClassName: "text-accent",
  },
  {
    icon: <Flame className="size-4 text-accent" />,
    title: "Popüler",
    description: "Tam Renk Değişimi",
    date: "Yüzlerce renk seçeneği",
    iconClassName: "text-accent",
    titleClassName: "text-accent",
  },
  {
    icon: <Zap className="size-4 text-accent" />,
    title: "Premium",
    description: "Seramik Kaplama",
    date: "Maksimum parlaklık",
    iconClassName: "text-accent",
    titleClassName: "text-accent",
  },
];

/* ── Single card (shared by both layouts) ── */
function DisplayCard({
  className,
  icon = <Sparkles className="size-4 text-accent" />,
  title = "Öne Çıkan",
  description = "Detaylı bilgi yakında",
  date = "Bugün",
  iconClassName = "text-accent",
  titleClassName = "text-accent",
}: DisplayCardProps) {
  return (
    <div
      className={cn(
        "flex h-36 w-[22rem] select-none flex-col justify-between rounded-xl border-2 border-white/[0.06] bg-base-card/70 backdrop-blur-sm px-4 py-3 transition-all duration-700 hover:border-white/[0.14] hover:bg-base-card [&>*]:flex [&>*]:items-center [&>*]:gap-2",
        className
      )}
    >
      <div>
        <span className="relative inline-block rounded-full bg-accent/10 p-1.5">
          {icon}
        </span>
        <p className={cn("text-lg font-semibold tracking-wide", titleClassName)}>
          {title}
        </p>
      </div>
      <p className="whitespace-nowrap text-sm text-text-secondary">
        {description}
      </p>
      <p className="text-xs text-text-muted/60">{date}</p>
    </div>
  );
}

/* ── Props ── */
interface DisplayCardsProps {
  cards?: DisplayCardProps[];
}

/* ── Main component: mobile → horizontal scroll, desktop → skewed stack ── */
export default function DisplayCards({ cards }: DisplayCardsProps) {
  const displayCards = cards || defaultCards;

  const stackClassNames = [
    "[grid-area:stack] -skew-y-[8deg] hover:-translate-y-12 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-white/6 before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-base-deep/50 grayscale-[60%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0 after:absolute after:-right-1 after:top-[-5%] after:h-[110%] after:w-[20rem] after:bg-gradient-to-l after:from-base-dark after:to-transparent after:content-['']",
    "[grid-area:stack] -skew-y-[8deg] translate-x-16 translate-y-10 hover:-translate-y-1 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-white/6 before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-base-deep/50 grayscale-[60%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0 after:absolute after:-right-1 after:top-[-5%] after:h-[110%] after:w-[20rem] after:bg-gradient-to-l after:from-base-dark after:to-transparent after:content-['']",
    "[grid-area:stack] -skew-y-[8deg] translate-x-32 translate-y-20 hover:translate-y-10 after:absolute after:-right-1 after:top-[-5%] after:h-[110%] after:w-[20rem] after:bg-gradient-to-l after:from-base-dark after:to-transparent after:content-['']",
  ];

  return (
    <>
      {/* ── Mobile: horizontal scrollable row ── */}
      <div className="flex md:hidden w-full overflow-x-auto gap-4 pb-2 no-scrollbar snap-x snap-mandatory px-2">
        {displayCards.map((card, index) => (
          <div key={index} className="snap-center flex-shrink-0">
            <DisplayCard {...card} />
          </div>
        ))}
      </div>

      {/* ── Desktop: skewed overlapping stack ── */}
      <div className="hidden md:grid [grid-template-areas:'stack'] place-items-center opacity-100 animate-in fade-in-0 duration-700">
        {displayCards.map((cardProps, index) => (
          <DisplayCard
            key={index}
            {...cardProps}
            className={cn(
              "relative",
              stackClassNames[index] || ""
            )}
          />
        ))}
      </div>
    </>
  );
}
