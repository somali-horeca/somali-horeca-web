"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

// Flat, solid brand-color backgrounds (no gradients/photos), matching the
// approved mockup. Each slide promotes ONE action.
const SLIDES = [
  {
    eyebrow: "Somali HORECA Expo 2026",
    headline: "Meet buyers, suppliers and investors at Somalia's largest hospitality exhibition",
    button: "Register for expo",
    href: "/expo",
    bg: "bg-red",
  },
  {
    eyebrow: "Business Directory",
    headline: "Discover verified hospitality businesses across Somalia",
    button: "Explore directory",
    href: "/directory",
    bg: "bg-blue",
  },
  {
    eyebrow: "Business Growth Network",
    headline: "Promote your business, products and services year-round",
    button: "Become a member",
    href: "/membership",
    bg: "bg-gold-dark",
  },
  {
    eyebrow: "Sponsor the industry",
    headline: "Showcase your brand to thousands of hospitality professionals",
    button: "Become a sponsor",
    href: "/expo/sponsorship",
    bg: "bg-ink",
  },
  {
    eyebrow: "Product launches",
    headline: "Discover the latest products from Somali HORECA members",
    button: "View products",
    href: "/#new-launches",
    bg: "bg-red",
  },
];

export default function HeroSlider() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((prev) => (prev + 1) % SLIDES.length);
    }, 6000);
    return () => clearInterval(id);
  }, []);

  const slide = SLIDES[active];

  return (
    <div className={`relative flex min-h-[240px] flex-col justify-center p-6 md:min-h-[280px] md:p-9 ${slide.bg}`}>
      <div className="font-mono text-xs text-paper/70">{slide.eyebrow}</div>
      <h2 className="mt-2 max-w-md font-serif text-xl font-semibold leading-snug text-paper md:text-2xl">
        {slide.headline}
      </h2>
      <Link
        href={slide.href}
        className="mt-5 inline-block w-fit rounded-sm bg-paper px-5 py-2.5 text-sm font-semibold text-ink hover:opacity-90"
      >
        {slide.button}
      </Link>

      <div className="absolute bottom-4 right-5 flex gap-1.5">
        {SLIDES.map((s, i) => (
          <button
            key={s.headline}
            aria-label={`Show slide ${i + 1}`}
            onClick={() => setActive(i)}
            className={`h-1.5 w-1.5 rounded-full transition ${i === active ? "bg-paper" : "bg-paper/35"}`}
          />
        ))}
      </div>
    </div>
  );
}
