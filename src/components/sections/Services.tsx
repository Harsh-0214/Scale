"use client";

import { motion } from "framer-motion";
import {
  Magnet,
  Megaphone,
  Search,
  Filter,
  Sparkles,
  Workflow,
  type LucideIcon,
} from "lucide-react";

import { SectionHeading } from "@/components/SectionHeading";

const SERVICES: { icon: LucideIcon; title: string; copy: string }[] = [
  {
    icon: Magnet,
    title: "Lead Generation Systems",
    copy: "The engine room. Predictable, repeatable pipelines that fill your calendar with qualified prospects every single week.",
  },
  {
    icon: Megaphone,
    title: "Paid Ads",
    copy: "Meta, Google, and YouTube campaigns engineered for ROAS — tested relentlessly and scaled only when the numbers earn it.",
  },
  {
    icon: Search,
    title: "SEO & Content",
    copy: "Rank for what your buyers actually search. Content that compounds into traffic and trust long after it's published.",
  },
  {
    icon: Filter,
    title: "Sales Funnels",
    copy: "Landing pages, offers, and follow-up sequences that turn cold clicks into booked calls and signed clients.",
  },
  {
    icon: Sparkles,
    title: "Branding",
    copy: "A sharp, premium identity that makes you the obvious choice — and lets you charge what you're worth.",
  },
  {
    icon: Workflow,
    title: "CRM / Automation",
    copy: "Every lead captured, nurtured, and routed automatically. No prospect slips through the cracks again.",
  },
];

export function Services() {
  return (
    <section id="services" className="bg-background py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="What we do"
          title="Everything you need to multiply"
          description="One partner for the whole growth stack — engineered to work together, not in silos."
        />

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.5,
                delay: (i % 3) * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group relative flex flex-col gap-4 rounded-2xl border border-foreground/10 bg-foreground/[0.02] p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-foreground/40 hover:bg-foreground/[0.04]"
            >
              <div className="flex size-12 items-center justify-center rounded-xl border border-foreground/10 bg-foreground/[0.03] text-foreground transition-colors group-hover:border-foreground/30">
                <service.icon className="size-6" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold tracking-tight text-foreground">
                {service.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {service.copy}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
