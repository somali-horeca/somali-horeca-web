"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

// A logo tile that stays completely still in place — only the image
// *inside* it changes, crossfading to the next one every few seconds, like
// a tiny slideshow. This replaces the old horizontally-scrolling marquee,
// matching the reference site's actual behavior more closely (fixed boxes,
// rotating content, not a moving row).
export default function RotatingLogoTile({
  images,
  tileBorder,
  size = "h-28 w-full sm:h-32",
  intervalMs = 3500,
  startDelayMs = 0,
}: {
  images: string[];
  tileBorder: string;
  size?: string;
  intervalMs?: number;
  startDelayMs?: number;
}) {
  const [active, setActive] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (images.length <= 1) return;

    const startTimeout = setTimeout(() => {
      intervalRef.current = setInterval(() => {
        setActive((prev) => (prev + 1) % images.length);
      }, intervalMs);
    }, startDelayMs);

    return () => {
      clearTimeout(startTimeout);
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [images.length, intervalMs, startDelayMs]);

  return (
    <div className={`relative shrink-0 overflow-hidden rounded-md border-2 ${tileBorder} ${size}`}>
      {images.map((src, i) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            i === active ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image src={src} alt="" fill className="object-cover" sizes="256px" />
        </div>
      ))}
    </div>
  );
}
