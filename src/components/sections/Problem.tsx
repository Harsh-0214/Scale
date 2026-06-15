"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";

const PAINS = [
  "Some months the phone rings. Some months silence.",
  "Referrals dried up — and there's no system to replace them.",
  "You're paying for ads, but the leads don't convert.",
  "You're great at the work, not at chasing new business.",
];

export function Problem() {
  return (
    <section className="relative overflow-hidden bg-black py-28 sm:py-36">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        <div>
          <Reveal>
            <p className="label-eyebrow">The real problem</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 text-balance text-4xl font-extrabold leading-[1.05] tracking-[-0.03em] text-white sm:text-5xl">
              Struggling to get consistent leads?
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              You&apos;re not alone — and you don&apos;t have to figure it out
              yourself. At Scale, we build predictable lead generation systems
              that bring in the right clients, consistently. If you&apos;re ready
              to stop chasing and start attracting —{" "}
              <span className="font-semibold text-white">let&apos;s talk.</span>
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <Button asChild variant="outline" className="mt-9">
              <Link href="/contact">
                Let&apos;s talk
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </Reveal>
        </div>

        <ul className="flex flex-col justify-center gap-4">
          {PAINS.map((pain, i) => (
            <motion.li
              key={pain}
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-start gap-4 rounded-xl border border-white/10 bg-white/[0.02] p-5 text-base text-white/80"
            >
              <span
                className="mt-0.5 text-lg font-bold text-white/30"
                aria-hidden
              >
                ×
              </span>
              {pain}
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
