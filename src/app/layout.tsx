import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

/**
 * Runs before first paint to set the theme class on <html>, so there is no
 * flash of the wrong theme. Honors a saved choice, then the OS preference,
 * defaulting to dark (the signature Scale look).
 */
const themeScript = `
(function () {
  try {
    var stored = localStorage.getItem("scale-theme");
    var theme = stored || (window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark");
    var root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    root.style.colorScheme = theme;
  } catch (e) {
    document.documentElement.classList.add("dark");
    document.documentElement.style.colorScheme = "dark";
  }
})();
`;

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
    <html
      lang="en"
      className={montserrat.variable}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-screen bg-background font-sans text-foreground antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
