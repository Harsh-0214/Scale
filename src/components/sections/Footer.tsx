import Link from "next/link";
import { Mail, Phone, Globe } from "lucide-react";

import { ScaleWordmark } from "@/components/logo/ScaleWordmark";
import { NAV_LINKS, SOCIALS, CONTACT, SUB_SLOGAN } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-foreground/10 bg-background">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Link
              href="/"
              className="inline-block text-foreground"
              aria-label="Scale — home"
            >
              <ScaleWordmark />
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
              We build predictable lead generation systems that bring small
              business owners consistent, high-quality clients.
            </p>
            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.28em] text-muted">
              {SUB_SLOGAN}
            </p>
          </div>

          <nav
            aria-label="Footer"
            className="md:col-span-3 md:col-start-7"
          >
            <h2 className="label-eyebrow">Explore</h2>
            <ul className="mt-5 flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Book a Call
                </Link>
              </li>
            </ul>
          </nav>

          <div className="md:col-span-3">
            <h2 className="label-eyebrow">Get in touch</h2>
            <ul className="mt-5 flex flex-col gap-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2.5">
                <Mail className="size-4 shrink-0 text-muted" />
                <span>{CONTACT.email}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="size-4 shrink-0 text-muted" />
                <span>{CONTACT.phone}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Globe className="size-4 shrink-0 text-muted" />
                <span>{CONTACT.website}</span>
              </li>
            </ul>

            <ul className="mt-6 flex flex-wrap gap-x-4 gap-y-2">
              {SOCIALS.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    className="text-xs font-semibold uppercase tracking-[0.12em] text-muted transition-colors hover:text-foreground"
                  >
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-foreground/10 pt-8 text-xs text-muted sm:flex-row">
          <p>© {new Date().getFullYear()} Scale. All rights reserved.</p>
          <p>We don&apos;t just grow businesses. We multiply them.</p>
        </div>
      </div>
    </footer>
  );
}
