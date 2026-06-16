import { cn } from "@/lib/utils";

/**
 * The "A" mark from the SCALE logo: a bold triangular A whose counter is
 * carved into an upward arrow — "we multiply" growth in a single glyph.
 *
 * Color is driven by `currentColor`, so it inherits the surrounding text
 * color and adapts automatically to light / dark themes. Set it via a
 * `text-*` class on a parent (or directly here).
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
      {/* A shell: outer triangle with a hollow triangular counter */}
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M32 5 60 59H47L32 27 17 59H4L32 5ZM32 30 44 53H20L32 30Z"
      />
      {/* Upward arrow nested inside the counter */}
      <path
        fill="currentColor"
        d="M32 29 41.5 41H35.5V53H28.5V41H22.5L32 29Z"
      />
    </svg>
  );
}
