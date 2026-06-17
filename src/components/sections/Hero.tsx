"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import { PILLARS } from "@/lib/site";

const ARROWS = [
  { left: "12%", size: 22, delay: "0s",   duration: "9s"  },
  { left: "27%", size: 14, delay: "2.5s", duration: "11s" },
  { left: "48%", size: 18, delay: "1.2s", duration: "10s" },
  { left: "68%", size: 12, delay: "3.4s", duration: "12s" },
  { left: "83%", size: 24, delay: "0.6s", duration: "9.5s"},
];

function DriftingArrows() {
  return (
    <div className="pointer-events-none absolute inset-0 hidden overflow-hidden sm:block">
      {ARROWS.map((a, i) => (
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
          className="absolute bottom-[-10%] text-foreground/[0.07]"
          style={{
            left: a.left,
            width: a.size,
            height: a.size,
            animation: `drift-up ${a.duration} ${a.delay} linear infinite`,
          }}
        >
          <path d="m5 12 7-7 7 7" />
          <path d="M12 19V5" />
        </svg>
      ))}
    </div>
  );
}

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden bg-background pt-16"
    >
      {/* Animated grid backdrop */}
      <div className="absolute inset-0 bg-grid mask-radial-fade opacity-70" />
      <DriftingArrows />
      {/* Subtle top glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[40rem] w-[40rem] -translate-x-1/2 -translate-y-1/3 rounded-full bg-foreground/[0.06] blur-[120px]" />

      <div className="relative mx-auto w-full max-w-5xl px-5 py-16 text-center sm:px-8 sm:py-24">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-7 inline-flex items-center gap-2 rounded-full border border-foreground/15 bg-foreground/[0.03] px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur"
        >
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-foreground/60 opacity-75" />
            <span className="relative inline-flex size-2 rounded-full bg-foreground" />
          </span>
          Predictable lead generation systems for serious operators
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-4xl text-balance text-4xl font-extrabold leading-[0.98] tracking-[-0.03em] text-foreground sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.25rem]"
        >
          We don&apos;t just grow businesses.{" "}
          <span className="relative inline-block">
            <span className="bg-gradient-to-b from-foreground to-foreground/55 bg-clip-text text-transparent">
              We multiply them.
            </span>
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:mt-7 sm:text-lg md:text-xl"
        >
          We build the systems that bring the right clients to your door —
          consistently. Stop chasing leads and start attracting them.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <Button asChild size="lg" className="w-full sm:w-auto">
            <Link href="/contact">Book a Call</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="w-full sm:w-auto"
          >
            <Link href="/#process">See How It Works</Link>
          </Button>
        </motion.div>

        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs font-semibold uppercase tracking-[0.18em] text-muted sm:mt-14 sm:gap-x-8 sm:gap-y-3 sm:text-sm"
        >
          {PILLARS.map((pillar, i) => (
            <li key={pillar} className="flex items-center gap-8">
              <span>{pillar}</span>
              {i < PILLARS.length - 1 && (
                <span className="text-foreground/25" aria-hidden>
                  ×
                </span>
              )}
            </li>
          ))}
        </motion.ul>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{
          opacity: { delay: 1, duration: 1 },
          y: { repeat: Infinity, duration: 2, ease: "easeInOut" },
        }}
        className="pointer-events-none absolute bottom-7 left-1/2 -translate-x-1/2 text-muted"
        aria-hidden
      >
        <ChevronDown className="size-6" />
      </motion.div>
    </section>
  );
}
