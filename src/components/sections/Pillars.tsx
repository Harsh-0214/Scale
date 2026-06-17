"use client";

import { motion } from "framer-motion";
import { TrendingUp, Users, DollarSign, type LucideIcon } from "lucide-react";

const PILLARS: { icon: LucideIcon; title: string; copy: string }[] = [
  {
    icon: TrendingUp,
    title: "More Leads",
    copy: "A steady, predictable flow of qualified prospects — not feast-or-famine guesswork.",
  },
  {
    icon: Users,
    title: "Better Clients",
    copy: "Attract the buyers who value your work, close faster, and stick around longer.",
  },
  {
    icon: DollarSign,
    title: "Real Revenue",
    copy: "Pipeline that turns into profit. We optimise for revenue, not vanity metrics.",
  },
];

export function Pillars() {
  return (
    <section className="border-y border-foreground/10 bg-background">
      <div className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-foreground/10 md:grid-cols-3 md:divide-x md:divide-y-0">
        {PILLARS.map((pillar, i) => (
          <motion.div
            key={pillar.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="group flex flex-col gap-4 px-5 py-8 transition-colors hover:bg-foreground/[0.02] sm:px-8 sm:py-12"
          >
            <pillar.icon
              className="size-8 text-foreground transition-transform duration-300 group-hover:-translate-y-1"
              strokeWidth={1.5}
            />
            <h3 className="text-2xl font-bold tracking-tight text-foreground">
              {pillar.title}
            </h3>
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              {pillar.copy}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
