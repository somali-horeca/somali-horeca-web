"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { BUSINESSES, getCategory } from "@/lib/directory-data";

// Only Featured-tier members appear here — this is the paid visibility benefit.
// Rotation is sequential (round-robin) so exposure is shared fairly.
const FEATURED = BUSINESSES.filter((b) => b.membershipTier === "Featured");

export default function FeaturedMembersBanner({ compact = false }: { compact?: boolean }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (FEATURED.length <= 1) return;
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % FEATURED.length);
    }, 6000);
    return () => clearInterval(id);
  }, []);

  if (FEATURED.length === 0) {
    return (
      <div className="text-xs text-ink/50">
        Featured member space — appears once a business upgrades to Featured membership.
      </div>
    );
  }

  const business = FEATURED[index];
  const category = getCategory(business.categorySlug);

  if (compact) {
    return (
      <Link href={`/directory/${business.categorySlug}/${business.slug}`} className="block">
        <div className="font-mono text-xs text-red">Featured Member</div>
        <div className="mt-1.5 text-sm font-semibold text-ink">{business.name}</div>
        <div className="text-xs text-ink/50">{category?.name}</div>
      </Link>
    );
  }

  return (
    <Link
      href={`/directory/${business.categorySlug}/${business.slug}`}
      className="flex-1 rounded-md border border-red bg-red/5 p-4 transition hover:border-gold"
    >
      <div className="flex items-center justify-between">
        <div className="font-mono text-[10px] uppercase tracking-wider text-red-dark">
          Featured member
        </div>
        {FEATURED.length > 1 && (
          <div className="flex gap-1">
            {FEATURED.map((_, i) => (
              <span
                key={i}
                className={`h-1 w-1 rounded-full ${i === index ? "bg-gold" : "bg-ink/20"}`}
              />
            ))}
          </div>
        )}
      </div>
      <div className="mt-2.5 flex items-center gap-2.5">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 border-gold bg-paper font-serif text-xs font-bold text-red">
          {business.logoInitials}
        </div>
        <div>
          <div className="text-sm font-semibold text-ink">{business.name}</div>
          <div className="text-xs text-ink/60">{category?.name}</div>
        </div>
      </div>
      <p className="mt-2.5 text-xs leading-relaxed text-ink">{business.overview}</p>
    </Link>
  );
}
