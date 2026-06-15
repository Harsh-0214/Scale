import { cn } from "@/lib/utils";
import { ScaleIcon } from "./ScaleIcon";

/**
 * Primary horizontal logo: arrow-A mark + "Scale" wordmark.
 * Inlined so it inherits `currentColor` and the Montserrat brand font.
 * Mirrors /public/scale-wordmark.svg.
 */
export function ScaleWordmark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 text-current",
        className,
      )}
      aria-label="Scale"
    >
      <ScaleIcon className="h-7 w-7" title="" />
      <span className="text-2xl font-extrabold tracking-[-0.04em] leading-none">
        Scale
      </span>
    </span>
  );
}
