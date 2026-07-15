"use client";

import { useState } from "react";
import Link from "next/link";
import { CATEGORIES, getCategory, type Business } from "@/lib/directory-data";

function searchWithin(businesses: Business[], query: string, categorySlug: string): Business[] | null {
  const q = query.toLowerCase().trim();
  if (!q && !categorySlug) return null;

  return businesses.filter((b) => {
    const matchesQuery =
      !q ||
      b.name.toLowerCase().includes(q) ||
      b.overview.toLowerCase().includes(q) ||
      b.productsAndServices.some((p) => p.toLowerCase().includes(q));
    const matchesCategory = !categorySlug || b.categorySlug === categorySlug;
    return matchesQuery && matchesCategory;
  });
}

export default function DirectorySearch({ businesses }: { businesses: Business[] }) {
  const [query, setQuery] = useState("");
  const [categorySlug, setCategorySlug] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const results = submitted ? searchWithin(businesses, query, categorySlug) : null;
  const hasSearched = results !== null;

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setSubmitted(true);
        }}
        className="grid gap-3 rounded-md border border-ink/15 bg-paper-dark p-5 md:grid-cols-[2fr_1.4fr_auto]"
      >
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="What are you looking for? (optional)"
          className="rounded-sm border border-ink/15 bg-paper px-4 py-3 text-sm text-ink"
        />
        <select
          value={categorySlug}
          onChange={(e) => setCategorySlug(e.target.value)}
          className="rounded-sm border border-ink/15 bg-paper px-4 py-3 text-sm text-ink"
        >
          <option value="">Any category</option>
          {CATEGORIES.map((c) => (
            <option key={c.slug} value={c.slug}>
              {c.name}
            </option>
          ))}
        </select>
        <button
          type="submit"
          className="rounded-sm bg-gold px-6 py-3 font-semibold text-ink hover:opacity-90"
        >
          Search
        </button>
      </form>
      <p className="mt-2 text-xs text-ink/50">
        Type a keyword, pick a category, or both, either works on its own.
      </p>

      {hasSearched && (
        <div className="mt-6">
          <div className="mb-3 font-mono text-xs uppercase tracking-wider text-ink/50">
            {results!.length} result{results!.length === 1 ? "" : "s"}
            {query && ` for "${query}"`}
            {categorySlug && ` in ${getCategory(categorySlug)?.name}`}
          </div>
          {results!.length === 0 ? (
            <div className="rounded-md border border-dashed border-ink/25 bg-paper-dark p-6 text-sm text-ink/60">
              No businesses match yet.
            </div>
          ) : (
            <div className="grid gap-4 md:grid-cols-2">
              {results!.map((b) => {
                const cat = getCategory(b.categorySlug);
                return (
                  <Link
                    key={b.slug}
                    href={`/directory/${b.categorySlug}/${b.slug}`}
                    className="rounded-md border border-ink/15 bg-paper p-5 hover:border-gold"
                  >
                    <div className="font-mono text-xs text-red">{cat?.name}</div>
                    <h3 className="mt-1 font-semibold">{b.name}</h3>
                    <p className="mt-2 text-sm text-ink/70">{b.overview}</p>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
