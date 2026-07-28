"use client";

import { useSyncExternalStore } from "react";

// PLACEHOLDER DATE — replace once the client confirms the real Expo date/venue.
// Shared by both the Header's compact countdown and the full ExpoCountdown
// component, so they never drift out of sync with each other.
export const EXPO_DATE = "2027-03-14T00:00:00Z";
export const EXPO_VENUE = "Mogadishu Convention Centre";

export type TimeLeft = { days: number; hours: number; minutes: number; seconds: number };

function timeLeft(): TimeLeft {
  const diff = Math.max(0, new Date(EXPO_DATE).getTime() - Date.now());
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

// Subscribes components to a ticking clock. This is the idiomatic way to
// sync React state with an external time source (see useSyncExternalStore
// docs) rather than calling setState from inside a useEffect body.
//
// IMPORTANT: getSnapshot must return the SAME object reference between
// renders unless the value actually changed, or React treats it as an
// infinite loop. So we cache one snapshot and only replace it once per
// tick, inside subscribe's interval, rather than computing a fresh object
// every time getSnapshot is called.
let cachedSnapshot: TimeLeft = timeLeft();

function subscribe(callback: () => void) {
  const id = setInterval(() => {
    cachedSnapshot = timeLeft();
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

export function useCountdown(): TimeLeft | null {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
