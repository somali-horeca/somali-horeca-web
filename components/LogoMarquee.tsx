"use client";

import Image from "next/image";

// Auto-scrolling row of placeholder "logo" tiles — continuously drifts
// left like a screensaver (matching the reference site's Owl Carousel
// autoplay behavior), and pauses on hover/touch so a visitor can actually
// read a logo instead of chasing a moving target.
//
// PLACEHOLDERS: each tile shows a real (Lorem Picsum) photo, not an
// actual sponsor logo — swap the `seedPrefix` tiles for real logo image
// files once the client supplies them. The marquee/scroll behavior
// itself doesn't need to change, just the tile contents.

type LogoMarqueeProps = {
  count: number;
  tileBorder: string;
  seedPrefix: string;
  size: "lg" | "md";
  reverse?: boolean;
};

export default function LogoMarquee({
  count,
  tileBorder,
  seedPrefix,
  size,
  reverse = false,
}: LogoMarqueeProps) {
  const tileSize = size === "lg" ? "h-32 w-60" : "h-28 w-52";

  const tiles = Array.from({ length: count }).map((_, i) => (
    <div
      key={i}
      style={{ animationDelay: `${i * 0.08}s` }}
      className={`animate-logo-in relative flex shrink-0 items-center justify-center overflow-hidden rounded-md border-2 ${tileBorder} ${tileSize}`}
    >
      <Image
        src={`https://picsum.photos/seed/${seedPrefix}-${i + 1}/260/160`}
        alt=""
        fill
        className="object-cover"
        sizes="160px"
      />
    </div>
  ));

  // Static tiles for the mobile/tablet grid — same tile styling, no
  // scroll/marquee, so nothing overflows horizontally on small screens.
  const staticTiles = Array.from({ length: count }).map((_, i) => (
    <div
      key={i}
      className={`relative flex items-center justify-center overflow-hidden rounded-md border-2 ${tileBorder} h-24 w-full`}
    >
      <Image
        src={`https://picsum.photos/seed/${seedPrefix}-${i + 1}/260/160`}
        alt=""
        fill
        className="object-cover"
        sizes="200px"
      />
    </div>
  ));

  return (
    <>
      {/* Mobile/tablet: balanced static grid, no horizontal overflow */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:hidden">{staticTiles}</div>

      {/* Desktop: auto-scrolling marquee */}
      <div className="hidden lg:block">
        <div className="group overflow-hidden">
          <div
            className={`flex w-max gap-4 ${reverse ? "animate-marquee-reverse" : "animate-marquee"} group-hover:[animation-play-state:paused]`}
          >
            {tiles}
            {/* Duplicate set, so the loop is seamless with no visible jump/reset */}
            {tiles}
          </div>
        </div>
      </div>
    </>
  );
}
