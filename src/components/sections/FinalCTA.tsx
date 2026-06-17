"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ScaleLockup } from "@/components/logo/ScaleLockup";
import { SUB_SLOGAN } from "@/lib/site";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-background py-20 sm:py-32 md:py-44">
      <div className="absolute inset-0 bg-grid mask-radial-fade opacity-50" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-foreground/[0.07] blur-[130px]" />

      <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-balance text-3xl font-extrabold leading-[1.02] tracking-[-0.03em] text-foreground sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Ready to stop chasing
          <br className="hidden sm:block" /> and start attracting?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground"
        >
          Let&apos;s build the system that brings the right clients to you —
          predictably, consistently, on repeat.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex justify-center"
        >
          <Button asChild size="lg">
            <Link href="/contact">
              Book a Call
              <ArrowUpRight className="size-4" />
            </Link>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="mt-20 flex flex-col items-center gap-6"
        >
          <ScaleLockup className="text-foreground" />
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-muted">
            {SUB_SLOGAN}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
