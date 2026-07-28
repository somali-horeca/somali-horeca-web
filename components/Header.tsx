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
  { href: "/contact", label: "Contact" },
];

// PLACEHOLDER DATE TEXT — keep in sync with EXPO_DATE in lib/expo-countdown.ts
const EXPO_DATE_RANGE = "14–16 MAR 2027";

function HeaderCountdown() {
  const time = useCountdown();

  return (
    <div className="hidden items-center gap-1.5 sm:flex">
      {(["days", "hours", "minutes", "seconds"] as const).map((unit) => (
        <div
          key={unit}
          className="flex h-10 w-10 flex-col items-center justify-center rounded-sm bg-paper shadow-sm"
        >
          <span className="font-mono text-xs font-bold text-ink tabular-nums">
            {time ? (unit === "days" ? time.days : pad(time[unit])) : "--"}
          </span>
          <span className="text-[7px] uppercase tracking-wide text-ink/60">
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
    <header className="sticky top-0 z-50 border-b-2 border-gold bg-header">
      {/* Single-line bar: logo, dates, countdown, Register, menu — nav
          links live only in the slide-out panel below, at every screen
          size, matching the reference site's pattern rather than
          duplicating a separate desktop nav row here. */}
      <div className="mx-auto flex max-w-6xl items-center gap-3 overflow-hidden px-4 py-3 sm:px-6">
        <Link href="/" className="flex shrink-0 items-center gap-2.5" onClick={() => setOpen(false)}>
          <Image src="/logo.png" alt="Somali HORECA" width={50} height={58} priority />
          <div className="hidden font-serif text-xl font-bold leading-none text-paper sm:block">
            Somali HORECA
          </div>
        </Link>

        <div className="hidden shrink-0 whitespace-nowrap rounded-sm bg-ink px-4 py-1.5 leading-tight text-paper md:block">
          <div className="font-mono text-xs font-bold">{EXPO_DATE_RANGE}</div>
          <div className="text-[9px] text-paper/75">{EXPO_VENUE}</div>
        </div>

        <div className="flex-1" />

        <HeaderCountdown />

        <Link
          href="/expo"
          className="shrink-0 whitespace-nowrap rounded-sm bg-red px-4 py-2 text-sm font-semibold text-paper hover:opacity-90"
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

      {/* Slide-down panel — the ONLY place nav links live, at any screen size */}
      <div
        className={`overflow-hidden border-t border-paper/15 bg-ink transition-[max-height] duration-300 ease-in-out ${
          open ? "max-h-[28rem]" : "max-h-0 border-t-0"
        }`}
      >
        <nav className="mx-auto flex max-w-6xl flex-col divide-y divide-paper/10 px-6">
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
