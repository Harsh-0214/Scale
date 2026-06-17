"use client";

import { motion } from "framer-motion";
import { Search, Map, Rocket, X } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { SectionHeading } from "@/components/SectionHeading";

const STEPS: { icon: LucideIcon; title: string; copy: string }[] = [
  {
    icon: Search,
    title: "Audit",
    copy: "We dig into your funnel, offer, and numbers to find exactly where leads leak and revenue stalls.",
  },
  {
    icon: Map,
    title: "Strategy",
    copy: "A clear, prioritised growth plan — the channels, offers, and systems that will move the needle fastest.",
  },
  {
    icon: Rocket,
    title: "Scale",
    copy: "We build and launch the machine: ads, funnels, content, and automation working as one.",
  },
  {
    icon: X,
    title: "Multiply",
    copy: "We double down on what works, compound the wins, and turn steady growth into exponential growth.",
  },
];

export function HowItWorks() {
  return (
    <section
      id="process"
      className="border-y border-foreground/10 bg-background py-16 sm:py-28 md:py-36"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="How it works"
          title="A clear path from chaos to compounding"
          description="No black boxes. A proven four-stage process that takes you from inconsistent to unstoppable."
        />

        <ol className="relative mt-12 grid grid-cols-1 gap-8 sm:mt-16 md:grid-cols-4 md:gap-6">
          {/* Connecting line across steps (desktop) */}
          <div
            className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-foreground/20 to-transparent md:block"
            aria-hidden
          />
          {STEPS.map((step, i) => (
            <motion.li
              key={step.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="relative flex flex-col items-start"
            >
              <div className="relative z-10 flex size-14 items-center justify-center rounded-full border border-foreground/15 bg-background text-foreground">
                <step.icon className="size-6" strokeWidth={1.5} />
                <span className="absolute -right-1 -top-1 flex size-6 items-center justify-center rounded-full bg-foreground text-xs font-bold text-background">
                  {i + 1}
                </span>
              </div>
              <h3 className="mt-6 text-xl font-bold tracking-tight text-foreground">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {step.copy}
              </p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
