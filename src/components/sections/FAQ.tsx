"use client";

import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQS = [
  {
    q: "How fast will I see results?",
    a: "Most clients see measurable movement in their pipeline within the first 90 days. Foundations like funnels and tracking go live in the first few weeks; compounding gains in lead quality and volume build from there.",
  },
  {
    q: "What kind of businesses do you work with?",
    a: "Service-based small businesses and operators who deliver great work but lack a predictable system for attracting clients — think clinics, trades, agencies, studios, fitness, and professional services.",
  },
  {
    q: "Do I need to already be running ads?",
    a: "No. Whether you're starting from zero or already spending and frustrated, we audit where you are and build the right system from there. Our Launch tier is designed specifically for getting the engine running cleanly.",
  },
  {
    q: "Are there long contracts?",
    a: "Every plan is month-to-month. We earn your business with results, not lock-in. Most partners stay because the numbers keep climbing — not because they have to.",
  },
  {
    q: "How are you different from other agencies?",
    a: "We optimise for revenue, not vanity metrics. You get a single partner for the whole growth stack — ads, SEO, funnels, branding, and automation working as one system, with brutally clear reporting on what it returns.",
  },
  {
    q: "What happens on the first call?",
    a: "We learn about your business, your goals, and your current bottlenecks, then tell you honestly whether and how we can help. No pressure, no pitch theatre — just a clear next step.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="bg-black py-28 sm:py-36">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Questions"
          title="The things owners ask us first"
        />

        <Reveal delay={0.1} className="mt-12">
          <Accordion type="single" collapsible className="w-full">
            {FAQS.map((faq, i) => (
              <AccordionItem key={faq.q} value={`item-${i}`}>
                <AccordionTrigger>{faq.q}</AccordionTrigger>
                <AccordionContent>{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
