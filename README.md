# Scale — Marketing Agency Website

> We don't just grow businesses. We multiply them.

A premium, single-page marketing site (plus a `/contact` route) for **Scale**, an
agency that builds predictable lead generation systems for small business owners.
Strict monochrome aesthetic — pure black, white, and gray — with cinematic scroll
animations and a recurring multiply / upward-arrow motif.

## Tech stack

- **Next.js 16** (App Router) + **TypeScript** — scaffolded with the latest
  `create-next-app` (the brief asked for Next 15 App Router; the current CLI
  ships 16, which is App-Router compatible).
- **Tailwind CSS v4** (CSS-first config in `src/app/globals.css`)
- **shadcn/ui**-style primitives (Button, Card, Accordion, Select, Input,
  Textarea, Label) built on **Radix UI** + **class-variance-authority**
- **Framer Motion** — scroll reveals, counters, carousel, mobile menu
- **lucide-react** — icons
- **next/font** — Montserrat (geometric grotesk to match the wordmark)

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

Other scripts: `npm run build`, `npm run start`, `npm run lint`.

## Project structure

```
src/
  app/
    layout.tsx          # Montserrat font + metadata (favicon = scale-icon)
    page.tsx            # single-page landing (assembles all sections)
    icon.svg            # favicon (App Router file convention)
    globals.css         # design tokens, theme, keyframes, utilities
    contact/page.tsx    # /contact route
  components/
    logo/               # ScaleIcon / ScaleWordmark / ScaleLockup (inline SVG)
    ui/                 # shadcn-style primitives
    sections/           # Navbar, Hero, Pillars, Problem, Services,
                        # HowItWorks, Results, Testimonials, Packages,
                        # FAQ, FinalCTA, Footer
    AnimatedCounter.tsx # scroll-triggered number counters
    Reveal.tsx          # reusable scroll-in animation wrapper
    SectionHeading.tsx  # shared eyebrow + heading
    ContactForm.tsx     # validated form, console.log + success state
  lib/
    site.ts             # nav links, contact placeholders, shared copy
    utils.ts            # cn() helper
public/
  scale-icon.svg        # arrow-A mark (square)
  scale-wordmark.svg    # horizontal logo
  scale-lockup.svg      # wordmark + tagline
```

## Logo assets — placeholders

The three brand SVGs in `public/` (and the inline versions in
`src/components/logo/`) are **placeholder renditions** of the arrow-A mark so the
site renders out of the box. All use `fill="currentColor"`, so their colour is
driven by CSS (`text-white`, etc.).

When the final artwork is ready, replace:

- `public/scale-icon.svg`, `public/scale-wordmark.svg`, `public/scale-lockup.svg`
- `src/app/icon.svg` (favicon)
- the inline paths in `src/components/logo/*.tsx` (kept inline so the marks
  inherit `currentColor` and the Montserrat font crisply) — or swap those
  components to render `<img src="/scale-*.svg" />`.

## Notes

- Contact form has **no backend** — it validates client-side, `console.log`s the
  payload, and shows an animated success state.
- Footer contact details are intentional placeholders: `[Your Email]`,
  `[Your Number]`, `[Your Website]` — edit in `src/lib/site.ts`.
- Respects `prefers-reduced-motion`.
