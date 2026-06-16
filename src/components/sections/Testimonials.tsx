"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";

import { SectionHeading } from "@/components/SectionHeading";
import { cn } from "@/lib/utils";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  initials: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "We went from praying for referrals to a booked-out calendar in under three months. Scale didn't just run ads — they built us a machine.",
    name: "Marcus Bell",
    role: "Founder, Bell Roofing Co.",
    initials: "MB",
  },
  {
    quote:
      "The quality of leads is the difference. We're closing bigger contracts with clients who actually value what we do. Revenue is up 3× year over year.",
    name: "Priya Nair",
    role: "Owner, Lumen Dental Studio",
    initials: "PN",
  },
  {
    quote:
      "Finally a team that talks revenue, not impressions. Every dollar is accountable, and the reporting is brutally clear. Best decision we made this year.",
    name: "Devon Carter",
    role: "MD, Carter Fitness Group",
    initials: "DC",
  },
  {
    quote:
      "I used to chase every lead myself. Now the system does it for me and I close on autopilot. Scale gave me my evenings back and doubled the pipeline.",
    name: "Sofia Rossi",
    role: "Principal, Rossi Interiors",
    initials: "SR",
  },
];

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const paginate = useCallback((dir: number) => {
    setDirection(dir);
    setIndex((prev) => (prev + dir + TESTIMONIALS.length) % TESTIMONIALS.length);
  }, []);

  // Auto-advance, pausing on user interaction is implicit via key changes.
  useEffect(() => {
    const id = setInterval(() => paginate(1), 7000);
    return () => clearInterval(id);
  }, [paginate, index]);

  const active = TESTIMONIALS[index];

  return (
    <section className="border-y border-foreground/10 bg-background py-28 sm:py-36">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Proof"
          title="Operators who stopped chasing"
        />

        <div
          className="relative mt-14"
          role="group"
          aria-roledescription="carousel"
          aria-label="Client testimonials"
          onKeyDown={(e) => {
            if (e.key === "ArrowLeft") paginate(-1);
            if (e.key === "ArrowRight") paginate(1);
          }}
          tabIndex={0}
        >
          <Quote
            className="mx-auto mb-8 size-10 text-foreground/15"
            aria-hidden
          />

          <div className="relative min-h-[16rem] overflow-hidden sm:min-h-[13rem]">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.blockquote
                key={index}
                custom={direction}
                initial={{ opacity: 0, x: direction >= 0 ? 40 : -40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction >= 0 ? -40 : 40 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col items-center text-center"
                aria-live="polite"
              >
                <p className="text-balance text-2xl font-medium leading-snug tracking-tight text-foreground sm:text-3xl">
                  &ldquo;{active.quote}&rdquo;
                </p>
                <footer className="mt-8 flex items-center gap-4">
                  <span
                    className="flex size-12 items-center justify-center rounded-full border border-foreground/15 bg-foreground/[0.04] text-sm font-bold text-foreground"
                    aria-hidden
                  >
                    {active.initials}
                  </span>
                  <span className="text-left">
                    <span className="block font-semibold text-foreground">
                      {active.name}
                    </span>
                    <span className="block text-sm text-muted">
                      {active.role}
                    </span>
                  </span>
                </footer>
              </motion.blockquote>
            </AnimatePresence>
          </div>

          <div className="mt-10 flex items-center justify-center gap-6">
            <button
              type="button"
              onClick={() => paginate(-1)}
              className="inline-flex size-11 items-center justify-center rounded-full border border-foreground/15 text-foreground transition-colors hover:border-foreground/50 hover:bg-foreground/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              aria-label="Previous testimonial"
            >
              <ArrowLeft className="size-5" />
            </button>

            <div className="flex items-center gap-2.5" role="tablist">
              {TESTIMONIALS.map((t, i) => (
                <button
                  key={t.name}
                  type="button"
                  role="tab"
                  aria-selected={i === index}
                  aria-label={`Go to testimonial ${i + 1}`}
                  onClick={() => {
                    setDirection(i > index ? 1 : -1);
                    setIndex(i);
                  }}
                  className={cn(
                    "h-2 rounded-full transition-all duration-300",
                    i === index
                      ? "w-7 bg-foreground"
                      : "w-2 bg-foreground/25 hover:bg-foreground/50",
                  )}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={() => paginate(1)}
              className="inline-flex size-11 items-center justify-center rounded-full border border-foreground/15 text-foreground transition-colors hover:border-foreground/50 hover:bg-foreground/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              aria-label="Next testimonial"
            >
              <ArrowRight className="size-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
