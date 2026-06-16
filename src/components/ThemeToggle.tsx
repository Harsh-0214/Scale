"use client";

import { Moon, Sun } from "lucide-react";

import { cn } from "@/lib/utils";
import { useTheme } from "@/components/ThemeProvider";

/**
 * Sun/moon switch that flips between light and dark themes.
 *
 * The icon shown is driven purely by the `.dark` class on <html> (via the
 * `dark:` variant), so the server and client markup always agree — no
 * hydration mismatch and no mount-gating needed.
 */
export function ThemeToggle({ className }: { className?: string }) {
  const { toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle light and dark mode"
      title="Toggle light and dark mode"
      className={cn(
        "inline-flex size-10 items-center justify-center rounded-full border border-foreground/15 bg-foreground/[0.03] text-foreground transition-colors hover:bg-foreground/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        className,
      )}
    >
      {/* Moon in light mode, Sun in dark mode — swapped via the dark: variant */}
      <Moon className="size-5 transition-transform duration-200 dark:hidden" />
      <Sun className="hidden size-5 transition-transform duration-200 dark:block" />
    </button>
  );
}
