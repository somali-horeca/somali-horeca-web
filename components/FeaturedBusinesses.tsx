import Link from "next/link";
import { BUSINESSES, getCategory } from "@/lib/directory-data";

export default function FeaturedBusinesses() {
  const businesses = BUSINESSES.slice(0, 3);

  return (
    <div>
      <div className="flex items-baseline justify-between">
        <h3 className="font-serif text-2xl font-semibold">Featured businesses</h3>
        <Link href="/directory" className="text-sm font-semibold text-gold-dark hover:opacity-80">
          View directory →
        </Link>
      </div>

      <div className="mt-6 grid gap-5 md:grid-cols-3">
        {businesses.map((b) => {
          const category = getCategory(b.categorySlug);
          return (
            <Link
              key={b.slug}
              href={`/directory/${b.categorySlug}/${b.slug}`}
              className="rounded-md bg-paper-dark p-5 transition hover:bg-gold/10"
            >
              <div className="h-28 rounded bg-gradient-to-br from-blue to-ink" />
              <h4 className="mt-3 font-semibold">{b.name}</h4>
              <div className="mt-1 text-xs text-ink/50">{category?.name}</div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
