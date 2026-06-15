"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Tier = {
  name: string;
  tagline: string;
  price: string;
  cadence: string;
  features: string[];
  cta: string;
  featured?: boolean;
};

const TIERS: Tier[] = [
  {
    name: "Launch",
    tagline: "Get the engine running.",
    price: "$2.5k",
    cadence: "/ month",
    features: [
      "1 paid channel, fully managed",
      "Lead-gen landing page + funnel",
      "CRM setup & lead routing",
      "Bi-weekly reporting",
      "Email & chat support",
    ],
    cta: "Start with Launch",
  },
  {
    name: "Scale",
    tagline: "Build the growth machine.",
    price: "$5k",
    cadence: "/ month",
    features: [
      "Up to 3 paid channels",
      "Full funnel + automation build",
      "SEO & content engine",
      "Conversion-rate optimisation",
      "Weekly strategy calls",
      "Priority support",
    ],
    cta: "Choose Scale",
    featured: true,
  },
  {
    name: "Multiply",
    tagline: "Compound everything.",
    price: "Custom",
    cadence: "tailored",
    features: [
      "Omnichannel growth program",
      "Dedicated growth team",
      "Brand & creative studio",
      "Advanced attribution & RevOps",
      "Quarterly growth roadmap",
      "Direct line to your strategist",
    ],
    cta: "Talk to us",
  },
];

export function Packages() {
  return (
    <section id="packages" className="bg-black py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Packages"
          title="Pick the pace of your growth"
          description="Transparent tiers built around where you are now — and where you're going. Every plan is month-to-month."
        />

        <div className="mt-16 grid grid-cols-1 items-stretch gap-6 lg:grid-cols-3">
          {TIERS.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.55, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={cn(
                "relative flex flex-col rounded-3xl border p-8",
                tier.featured
                  ? "border-white bg-white text-black shadow-[0_0_60px_rgba(255,255,255,0.12)] lg:-my-4 lg:py-12"
                  : "border-white/12 bg-white/[0.02] text-white",
              )}
            >
              {tier.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-black px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white ring-1 ring-white/20">
                  Recommended
                </span>
              )}

              <h3 className="text-2xl font-extrabold tracking-tight">
                {tier.name}
              </h3>
              <p
                className={cn(
                  "mt-1 text-sm",
                  tier.featured ? "text-black/60" : "text-muted-foreground",
                )}
              >
                {tier.tagline}
              </p>

              <div className="mt-6 flex items-baseline gap-1.5">
                <span className="text-4xl font-extrabold tracking-tight">
                  {tier.price}
                </span>
                <span
                  className={cn(
                    "text-sm",
                    tier.featured ? "text-black/50" : "text-muted",
                  )}
                >
                  {tier.cadence}
                </span>
              </div>

              <ul className="mt-8 flex flex-1 flex-col gap-3.5">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm">
                    <Check
                      className={cn(
                        "mt-0.5 size-4 shrink-0",
                        tier.featured ? "text-black" : "text-white",
                      )}
                    />
                    <span
                      className={
                        tier.featured ? "text-black/80" : "text-white/80"
                      }
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                asChild
                variant={tier.featured ? "inverted" : "outline"}
                size="lg"
                className="mt-10 w-full"
              >
                <Link href="/contact">{tier.cta}</Link>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
