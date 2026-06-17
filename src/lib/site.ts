/** Centralised copy + config so sections and footer stay in sync. */

export const NAV_LINKS = [
  { label: "Services", href: "/#services" },
  { label: "Process", href: "/#process" },
  { label: "Results", href: "/#results" },
  { label: "Packages", href: "/#packages" },
  { label: "FAQ", href: "/#faq" },
] as const;

export const CONTACT = {
  email: "scalxeleads@gmail.com",
  phone: "[Your Number]",
  website: "scalxeleads.ca",
} as const;

export const SOCIALS = [
  { label: "LinkedIn", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "X / Twitter", href: "#" },
  { label: "YouTube", href: "#" },
] as const;

export const TAGLINE = "We don't just grow businesses. We multiply them.";
export const SUB_SLOGAN = "Built to Scale. Designed to Multiply.";
export const PILLARS = ["More Leads", "Better Clients", "Real Revenue"] as const;
