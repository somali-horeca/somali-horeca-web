"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

// PLACEHOLDER DATE — replace once the client confirms the real Expo date/venue.
const EXPO_DATE = "2027-03-14T00:00:00Z";
const VENUE = "Mogadishu Convention Centre";

function daysLeft() {
  const diff = Math.max(0, new Date(EXPO_DATE).getTime() - Date.now());
  return Math.floor(diff / 86400000);
}

export default function ExpoCountdown({ compact = false }: { compact?: boolean }) {
  const [days, setDays] = useState<number | null>(null);

  useEffect(() => {
    setDays(daysLeft());
    const id = setInterval(() => setDays(daysLeft()), 60000);
    return () => clearInterval(id);
  }, []);

  if (compact) {
    return (
      <div>
        <div className="font-mono text-xs text-blue-dark">Expo Countdown</div>
        <div className="mt-1.5 flex items-baseline gap-1.5">
          <span className="font-serif text-2xl font-semibold text-ink">
            {days !== null ? days : "--"}
          </span>
          <span className="text-xs text-ink/60">days left</span>
        </div>
        <div className="mt-1 text-[11px] text-ink/50">{VENUE}</div>
        <Link href="/expo" className="mt-1.5 inline-block text-xs font-semibold text-red hover:opacity-80">
          Register now →
        </Link>
      </div>
    );
  }

  return (
    <div className="border-t border-ink/10 pt-4">
      <div className="font-mono text-xs uppercase tracking-wider text-blue-dark">
        Expo Countdown
      </div>
      <div className="mt-2 flex items-baseline gap-2">
        <span className="font-serif text-4xl font-bold text-ink">
          {days !== null ? days : "--"}
        </span>
        <span className="text-sm text-ink/60">days to go</span>
      </div>
      <div className="mt-1 text-xs text-ink/50">{VENUE} · date TBD, placeholder</div>
      <Link
        href="/expo"
        className="mt-3 inline-block text-sm font-semibold text-red hover:opacity-80"
      >
        Register now →
      </Link>
    </div>
  );
}
