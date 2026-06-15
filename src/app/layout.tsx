import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://scale.agency"),
  title: {
    default: "Scale — We don't just grow businesses. We multiply them.",
    template: "%s · Scale",
  },
  description:
    "Scale builds predictable lead generation systems that bring small business owners consistent, high-quality clients. More leads. Better clients. Real revenue.",
  keywords: [
    "lead generation",
    "marketing agency",
    "paid ads",
    "SEO",
    "sales funnels",
    "small business growth",
  ],
  icons: {
    icon: "/icon.svg",
    shortcut: "/scale-icon.svg",
  },
  openGraph: {
    title: "Scale — We don't just grow businesses. We multiply them.",
    description:
      "Predictable lead generation systems that bring in consistent, high-quality clients. Built to Scale. Designed to Multiply.",
    type: "website",
    siteName: "Scale",
  },
  twitter: {
    card: "summary_large_image",
    title: "Scale — We multiply businesses.",
    description:
      "Predictable lead generation systems for small business owners ready to stop chasing and start attracting.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body className="min-h-screen bg-background font-sans text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
