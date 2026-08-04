"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { EXPO_VENUE, pad, useCountdown } from "@/lib/expo-countdown";

const NAV_LINKS = [
  { href: "/about", label: "About" },
  { href: "/directory", label: "Directory" },
  { href: "/expo", label: "Expo" },
  { href: "/membership", label: "Membership" },
  { href: "/resources", label: "Resources" },
  { href: "/news", label: "News" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

// PLACEHOLDER DATE TEXT — keep in sync with EXPO_DATE in lib/expo-countdown.ts
const EXPO_DATE_RANGE = "14–16 MAR 2027";

function HeaderCountdown() {
  const time = useCountdown();

  return (
    <div className="flex items-center gap-1.5 sm:gap-2">
      {(["days", "hours", "minutes", "seconds"] as const).map((unit) => (
        <div
          key={unit}
          className="flex h-9 w-9 flex-col items-center justify-center rounded-sm border border-paper/60 bg-paper/20 shadow-sm sm:h-12 sm:w-12"
        >
          <span className="font-mono text-xs font-bold text-paper tabular-nums sm:text-base">
            {time ? (unit === "days" ? time.days : pad(time[unit])) : "--"}
          </span>
          <span className="text-[6px] uppercase tracking-wide text-paper/90 sm:text-[8px]">
            {unit === "days" ? "d" : unit === "hours" ? "h" : unit === "minutes" ? "m" : "s"}
          </span>
        </div>
      ))}
    </div>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);

  // Lock body scroll while the mobile panel is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b-2 border-gold bg-blue-dark">
      {/* Single-line bar: logo, dates, countdown, Register, menu — nav
          links live only in the slide-out panel below, at every screen
          size, matching the reference site's pattern rather than
          duplicating a separate desktop nav row here. */}
      <div className="mx-auto flex max-w-[1400px] flex-wrap items-center justify-between gap-x-5 gap-y-2 px-4 py-3 sm:px-6">
        <div className="flex shrink-0 items-center gap-3">
          <Link href="/" className="flex shrink-0 items-center gap-2.5" onClick={() => setOpen(false)}>
            <Image src="/logo.png" alt="Somali HORECA" width={50} height={58} priority className="h-[58px] w-[50px]" />
            <div className="hidden font-serif text-xl font-bold leading-none text-paper sm:block">
              Somali HORECA
            </div>
          </Link>

          <div className="shrink-0 whitespace-nowrap rounded-sm border border-paper/30 bg-blue-dark px-2.5 py-1.5 leading-tight text-paper sm:px-4 sm:py-2">
            <div className="font-mono text-[10px] font-bold text-paper sm:text-xs">{EXPO_DATE_RANGE}</div>
            <div className="text-[8px] text-paper/90 sm:text-[9px]">{EXPO_VENUE}</div>
          </div>
        </div>

        <div className="flex shrink-0 items-center gap-2">
          <HeaderCountdown />

          <Link
            href="/expo"
            className="shrink-0 whitespace-nowrap rounded-sm bg-red px-3 py-2 text-xs font-semibold text-paper hover:opacity-90 sm:px-4 sm:text-sm"
          >
            Register Now
          </Link>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 shrink-0 flex-col items-center justify-center gap-1.5 rounded-sm border border-paper/35"
          >
            <span
              className={`block h-[1.5px] w-4 bg-paper transition ${open ? "translate-y-[5.5px] rotate-45" : ""}`}
            />
            <span className={`block h-[1.5px] w-4 bg-paper transition ${open ? "opacity-0" : ""}`} />
            <span
              className={`block h-[1.5px] w-4 bg-paper transition ${open ? "-translate-y-[5.5px] -rotate-45" : ""}`}
            />
          </button>
        </div>
      </div>

      {/* Slide-down panel — the ONLY place nav links live, at any screen size */}
      <div
        className={`overflow-hidden border-t border-paper/15 bg-blue-dark transition-[max-height] duration-300 ease-in-out ${
          open ? "max-h-[28rem]" : "max-h-0 border-t-0"
        }`}
      >
        <nav className="flex flex-col divide-y divide-paper/10 px-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="py-3.5 text-sm font-medium text-paper/80 hover:text-paper"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/login"
            onClick={() => setOpen(false)}
            className="py-3.5 text-sm font-semibold text-gold"
          >
            Member Login →
          </Link>
        </nav>
      </div>
    </header>
  );
}
