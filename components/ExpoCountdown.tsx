"use client";

import Link from "next/link";
import { EXPO_VENUE, pad, useCountdown } from "@/lib/expo-countdown";

export default function ExpoCountdown({ compact = false }: { compact?: boolean }) {
  const time = useCountdown();

  if (compact) {
    return (
      <div>
        <div className="font-mono text-xs text-blue-dark">Expo Countdown</div>
        <div className="mt-1.5 grid grid-cols-4 gap-1">
          {(["days", "hours", "minutes", "seconds"] as const).map((unit) => (
            <div key={unit} className="text-center">
              <div className="font-serif text-lg font-semibold text-ink tabular-nums">
                {time ? (unit === "days" ? time.days : pad(time[unit])) : "--"}
              </div>
              <div className="text-[9px] uppercase tracking-wide text-ink/50">
                {unit === "days" ? "d" : unit === "hours" ? "h" : unit === "minutes" ? "m" : "s"}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-1.5 text-[11px] text-ink/50">{EXPO_VENUE}</div>
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
      <div className="mt-3 flex gap-4">
        {(["days", "hours", "minutes", "seconds"] as const).map((unit) => (
          <div key={unit} className="text-center">
            <div className="font-serif text-3xl font-bold text-ink tabular-nums">
              {time ? (unit === "days" ? time.days : pad(time[unit])) : "--"}
            </div>
            <div className="mt-0.5 text-[10px] uppercase tracking-wide text-ink/50">
              {unit}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-2 text-xs text-ink/50">{EXPO_VENUE} · date TBD, placeholder</div>
      <Link
        href="/expo"
        className="mt-3 inline-block text-sm font-semibold text-red hover:opacity-80"
      >
        Register now →
      </Link>
    </div>
  );
}
