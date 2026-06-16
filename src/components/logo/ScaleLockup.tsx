import { cn } from "@/lib/utils";
import { ScaleIcon } from "./ScaleIcon";

/**
 * Full brand lockup: the "SCALE" wordmark over the two-line tagline,
 * matching the master logo artwork. Inherits `currentColor`, so it reads
 * correctly in both light and dark themes.
 */
export function ScaleLockup({ className }: { className?: string }) {
  return (
    <span
      className={cn("inline-flex flex-col items-center text-current", className)}
      aria-label="Scale — We don't just grow businesses. We multiply them."
    >
      <span className="inline-flex items-center text-4xl font-extrabold uppercase leading-none tracking-[-0.02em]">
        <span aria-hidden>SC</span>
        <ScaleIcon
          className="mx-[0.03em] h-[0.82em] w-[0.82em] translate-y-[0.02em]"
          title=""
        />
        <span aria-hidden>LE</span>
      </span>
      <span className="mt-3 text-center text-[0.6rem] font-bold uppercase leading-snug tracking-[0.22em] text-muted sm:text-xs">
        We don&apos;t just grow businesses.
        <br />
        We multiply them.
      </span>
    </span>
  );
}
