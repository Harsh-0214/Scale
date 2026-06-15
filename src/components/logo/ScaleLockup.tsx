import { cn } from "@/lib/utils";
import { ScaleIcon } from "./ScaleIcon";

/**
 * Wordmark + tagline lockup for hero / closing usage.
 * Mirrors /public/scale-lockup.svg.
 */
export function ScaleLockup({ className }: { className?: string }) {
  return (
    <span
      className={cn("inline-flex flex-col items-center text-current", className)}
      aria-label="Scale — We don't just grow. We multiply."
    >
      <span className="inline-flex items-center gap-2.5">
        <ScaleIcon className="h-8 w-8" title="" />
        <span className="text-3xl font-extrabold tracking-[-0.04em] leading-none">
          Scale
        </span>
      </span>
      <span className="mt-2 text-[0.6rem] font-semibold uppercase tracking-[0.32em] text-muted">
        We don&apos;t just grow. We multiply.
      </span>
    </span>
  );
}
