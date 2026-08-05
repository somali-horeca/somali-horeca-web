"use client";

import { useMemo, useSyncExternalStore } from "react";

// FALLBACK values — only used if Site Settings in Sanity hasn't been filled
// in yet, so the site never breaks or shows blank while content is pending.
export const FALLBACK_EXPO_DATE = "2027-03-14T00:00:00Z";
export const FALLBACK_EXPO_VENUE = "Mogadishu Convention Centre";
export const FALLBACK_EXPO_DATE_RANGE_TEXT = "14–16 MAR 2027";

export type TimeLeft = { days: number; hours: number; minutes: number; seconds: number };

function timeLeft(targetDateIso: string): TimeLeft {
  const diff = Math.max(0, new Date(targetDateIso).getTime() - Date.now());
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff % 86400000) / 3600000),
    minutes: Math.floor((diff % 3600000) / 60000),
    seconds: Math.floor((diff % 60000) / 1000),
  };
}

export function pad(n: number) {
  return n.toString().padStart(2, "0");
}

// Builds a ticking-clock store for one specific target date. See
// useSyncExternalStore docs — getSnapshot must return the SAME object
// reference between renders unless the value actually changed, so we cache
// one snapshot and only replace it once per tick.
function createCountdownStore(targetDateIso: string) {
  let cachedSnapshot: TimeLeft = timeLeft(targetDateIso);

  function subscribe(callback: () => void) {
    const id = setInterval(() => {
      cachedSnapshot = timeLeft(targetDateIso);
      callback();
    }, 1000);
    return () => clearInterval(id);
  }

  function getSnapshot(): TimeLeft {
    return cachedSnapshot;
  }

  function getServerSnapshot(): TimeLeft | null {
    return null;
  }

  return { subscribe, getSnapshot, getServerSnapshot };
}

// Pass the ISO date string from Sanity Site Settings (falls back to the
// placeholder date above if not set yet).
export function useCountdown(targetDateIso: string = FALLBACK_EXPO_DATE): TimeLeft | null {
  const store = useMemo(() => createCountdownStore(targetDateIso), [targetDateIso]);
  return useSyncExternalStore(store.subscribe, store.getSnapshot, store.getServerSnapshot);
}
