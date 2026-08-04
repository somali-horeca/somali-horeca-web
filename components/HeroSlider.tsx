"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

// PLACEHOLDER PHOTOS: these come from Lorem Picsum (royalty-free, built on
// the Unsplash license) purely as realistic-looking stand-ins so the hero
// isn't flat color. They are NOT curated to depict Somali hospitality —
// swap each `photo` URL for your own real photography before launch.
//
// Each slide carries a bold caption overlay (like the reference site's
// "SHOWCASE YOUR SKILLS ON THE BIGGEST..." captions) — Register Now and
// the live countdown live in the Header now, so slides don't repeat a
// button, just a headline promoting that section of the platform.
const SLIDES = [
  {
    photo: "https://picsum.photos/seed/horeca-bright-1/1600/700",
    caption: "Meet buyers, suppliers and investors at Somalia's largest hospitality exhibition",
  },
  {
    photo: "https://picsum.photos/seed/horeca-bright-2/1600/700",
    caption: "Discover verified hospitality businesses across Somalia",
  },
  {
    photo: "https://picsum.photos/seed/horeca-bright-3/1600/700",
    caption: "Promote your business, products and services year-round",
  },
  {
    photo: "https://picsum.photos/seed/horeca-bright-4/1600/700",
    caption: "Showcase your brand to thousands of hospitality professionals",
  },
  {
    photo: "https://picsum.photos/seed/horeca-bright-5/1600/700",
    caption: "Discover the latest products from Somali HORECA members",
  },
];

export default function HeroSlider() {
  const [active, setActive] = useState(0);
  const [fadeKey, setFadeKey] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((prev) => (prev + 1) % SLIDES.length);
      setFadeKey((k) => k + 1);
    }, 6000);
    return () => clearInterval(id);
  }, [fadeKey]);

  function goTo(i: number) {
    setActive(i);
    setFadeKey((k) => k + 1);
  }

  function advance() {
    setActive((prev) => (prev + 1) % SLIDES.length);
    setFadeKey((k) => k + 1);
  }

  const slide = SLIDES[active];

  return (
    // h-[80vh] targets roughly 80% of the visible screen height — tall
    // enough to feel like a real banner, but not the full 100vh that was
    // too tall before. min-h keeps it usable on short/landscape phones;
    // max-h keeps it from getting absurd on huge monitors.
    // Tapping/clicking anywhere on the banner advances to the next slide,
    // same touch-friendly behavior as the reference site's carousel.
    <div
      onClick={advance}
      className="relative h-[80vh] min-h-[320px] max-h-[750px] w-full cursor-pointer overflow-hidden bg-ink"
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
              catching the new photo — makes the change feel more alive.
              opacity-0 is the resting state, guaranteeing it can never sit
              permanently opaque and hide the photo even if the keyframe
              animation fails to apply for any reason. */}
          <div className="animate-hero-flash pointer-events-none absolute inset-0 bg-paper opacity-0" />
        </div>

        <div className="absolute inset-x-0 bottom-8 animate-hero-caption px-5 sm:bottom-10 sm:px-9">
          <h2 className="max-w-2xl font-serif text-xl font-bold leading-tight text-paper drop-shadow-lg sm:text-2xl md:text-4xl">
            {slide.caption}
          </h2>
        </div>
      </div>

      <div className="absolute bottom-4 right-5 z-10 flex gap-1.5">
        {SLIDES.map((s, i) => (
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