import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, CalendarCheck, MessageSquare, Zap } from "lucide-react";

import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { ContactForm } from "@/components/ContactForm";
import { ScaleIcon } from "@/components/logo/ScaleIcon";

export const metadata: Metadata = {
  title: "Book a Call",
  description:
    "Tell us about your business and book a call with Scale. We'll map out how to build a predictable lead generation system that multiplies your revenue.",
};

const PROMISES = [
  {
    icon: MessageSquare,
    title: "A real conversation",
    copy: "No pitch theatre. We learn your business and tell you honestly if and how we can help.",
  },
  {
    icon: Zap,
    title: "A clear next step",
    copy: "You'll leave the call knowing exactly what to do next — whether you work with us or not.",
  },
  {
    icon: CalendarCheck,
    title: "A reply within a day",
    copy: "We respond to every serious enquiry within one business day. No black holes.",
  },
];

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="relative overflow-hidden bg-background pb-24 pt-28 sm:pt-36">
        <div className="absolute inset-0 bg-grid mask-radial-fade opacity-40" />
        <div className="pointer-events-none absolute left-1/2 top-0 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-foreground/[0.06] blur-[120px]" />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-4" />
            Back to home
          </Link>

          <div className="mt-10 grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-20">
            <div>
              <ScaleIcon className="h-10 w-10 text-foreground" />
              <h1 className="mt-7 text-balance text-4xl font-extrabold leading-[1.03] tracking-[-0.03em] text-foreground sm:text-5xl">
                Let&apos;s build your growth machine.
              </h1>
              <p className="mt-5 max-w-md text-lg leading-relaxed text-muted-foreground">
                Ready to stop chasing and start attracting? Tell us where
                you&apos;re at and we&apos;ll show you the path to predictable,
                high-quality leads.
              </p>

              <ul className="mt-10 flex flex-col gap-6">
                {PROMISES.map((promise) => (
                  <li key={promise.title} className="flex items-start gap-4">
                    <div className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-foreground/10 bg-foreground/[0.03] text-foreground">
                      <promise.icon className="size-5" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h2 className="font-semibold text-foreground">
                        {promise.title}
                      </h2>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                        {promise.copy}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-foreground/10 bg-foreground/[0.015] p-6 sm:p-9">
              <ContactForm />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
