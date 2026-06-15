"use client";

import { motion } from "framer-motion";

import { AnimatedCounter } from "@/components/AnimatedCounter";
import { SectionHeading } from "@/components/SectionHeading";

const METRICS = [
  {
    counter: { value: 3, suffix: "×" },
    label: "Average client growth",
    sub: "Revenue multiplied within the first year of partnership.",
  },
  {
    counter: { value: 240, prefix: "+", suffix: "%" },
    label: "Qualified leads",
    sub: "Average lift in sales-ready leads across engagements.",
  },
  {
    counter: { value: 90, suffix: " days" },
    label: "To first results",
    sub: "Most clients see measurable pipeline movement in one quarter.",
  },
  {
    counter: { value: 12, prefix: "+", suffix: "M" },
    label: "Revenue influenced",
    sub: "Tracked pipeline generated for the businesses we partner with.",
  },
];

export function Results() {
  return (
    <section id="results" className="bg-black py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="The numbers"
          title={
            <>
              Growth you can measure.
              <br className="hidden sm:block" /> Multiplication you can feel.
            </>
          }
          description="We obsess over outcomes. Here's what partnering with Scale tends to look like."
        />

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {METRICS.map((metric, i) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.55, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-8"
            >
              <div className="text-5xl font-extrabold tracking-[-0.04em] text-white sm:text-6xl">
                <AnimatedCounter
                  value={metric.counter.value}
                  prefix={metric.counter.prefix}
                  suffix={metric.counter.suffix}
                />
              </div>
              <p className="mt-4 text-base font-semibold text-white">
                {metric.label}
              </p>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                {metric.sub}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
