"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export type HeroSlideItem = {
  photo: string;
  caption: string;
  linkUrl?: string | null;
};

// FALLBACK SLIDES: shown only if no Hero Banner entries exist in Sanity yet
// (e.g. before any content has been published), so the homepage never
// breaks or shows a blank hero.
const FALLBACK_SLIDES: HeroSlideItem[] = [
  {
    photo: "https://picsum.photos/seed/horeca-bright-1/1600/700",
    caption: "Meet buyers, suppliers and investors at Somalia's largest hospitality exhibition",
  },
  {
    photo: "https://picsum.photos/seed/horeca-bright-2/1600/700",
    caption: "Discover verified hospitality businesses across Somalia",
  },
];

export default function HeroSlider({ slides }: { slides?: HeroSlideItem[] }) {
  const activeSlides = slides && slides.length > 0 ? slides : FALLBACK_SLIDES;

  const [active, setActive] = useState(0);
  const [fadeKey, setFadeKey] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((prev) => (prev + 1) % activeSlides.length);
      setFadeKey((k) => k + 1);
    }, 6000);
    return () => clearInterval(id);
  }, [fadeKey, activeSlides.length]);

  function goTo(i: number) {
    setActive(i);
    setFadeKey((k) => k + 1);
  }

  function advance() {
    setActive((prev) => (prev + 1) % activeSlides.length);
    setFadeKey((k) => k + 1);
  }

  const slide = activeSlides[active];

  return (
    // h-[80vh] targets roughly 80% of the visible screen height on
    // desktop — tall enough to feel like a real banner, but not the full
    // 100vh that was too tall before. min-h keeps it usable on short/
    // landscape phones; max-h keeps it from getting absurd on huge
    // monitors. Tapping/clicking anywhere on the banner advances to the
    // next slide.
    <div
      onClick={advance}
      className="relative h-[55vh] min-h-[280px] max-h-[750px] w-full cursor-pointer overflow-hidden bg-ink sm:h-[70vh] md:h-[80vh]"
    >
      <div key={fadeKey} className="absolute inset-0">
        <div className="absolute inset-0 animate-hero-fade">
          <Image
            src={slide.photo}
            alt=""
            fill
            priority={active === 0}
            className="object-cover brightness-110 contrast-[1.02]"
            sizes="100vw"
          />
          {/* Dark gradient scrim so the caption stays readable over any photo */}
          <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent" />
          {/* Brief brightness flash on each transition, like a light source
              catching the new photo — makes the change feel more alive. */}
          <div className="animate-hero-flash pointer-events-none absolute inset-0 bg-paper opacity-0" />
        </div>

        {slide.caption ? (
          <div className="absolute inset-x-0 bottom-8 animate-hero-caption px-5 sm:bottom-10 sm:px-9">
            <h2 className="max-w-2xl font-serif text-xl font-bold leading-tight text-paper drop-shadow-lg sm:text-2xl md:text-4xl">
              {slide.caption}
            </h2>
          </div>
        ) : null}
      </div>

      <div className="absolute bottom-4 right-5 z-10 flex gap-1.5">
        {activeSlides.map((s, i) => (
          <button
            key={s.photo}
            aria-label={`Show slide ${i + 1}`}
            onClick={(e) => {
              e.stopPropagation();
              goTo(i);
            }}
            className={`h-1.5 w-1.5 rounded-full transition ${i === active ? "bg-paper" : "bg-paper/35"}`}
          />
        ))}
      </div>
    </div>
  );
}
