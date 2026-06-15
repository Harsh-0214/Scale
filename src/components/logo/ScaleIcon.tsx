import { cn } from "@/lib/utils";

/**
 * The arrow-A mark on its own (square). Color is driven by `currentColor`,
 * so set it via the `text-*` class on a parent or directly here.
 *
 * Placeholder rendition of the brand mark — drop in the final
 * `scale-icon.svg` artwork by replacing the paths below (or swap this
 * component for an <img src="/scale-icon.svg" />) when the assets land.
 */
export function ScaleIcon({
  className,
  title = "Scale",
}: {
  className?: string;
  title?: string;
}) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      role="img"
      aria-label={title}
      className={cn("h-6 w-6", className)}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path fill="currentColor" d="M32 5 60 59 47 59 32 27 17 59 4 59Z" />
      <path fill="currentColor" d="M25 43 39 43 42.5 51 21.5 51Z" />
    </svg>
  );
}
