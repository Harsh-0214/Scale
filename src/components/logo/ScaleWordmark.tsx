import { cn } from "@/lib/utils";
import { ScaleIcon } from "./ScaleIcon";

/**
 * Primary horizontal logo: the "SCALE" wordmark with the arrow-A mark
 * standing in for the letter "A" — mirroring the brand artwork.
 * Inlined so it inherits `currentColor` and the Montserrat brand font,
 * which lets it adapt to light / dark themes for free.
 */
export function ScaleWordmark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex select-none items-center text-2xl font-extrabold uppercase leading-none tracking-[-0.02em] text-current",
        className,
      )}
      aria-label="Scale"
    >
      <span aria-hidden>SC</span>
      <ScaleIcon
        className="mx-[0.03em] h-[0.82em] w-[0.82em] translate-y-[0.02em]"
        title=""
      />
      <span aria-hidden>LE</span>
    </span>
  );
}
