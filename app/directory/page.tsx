import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { BUSINESSES, CATEGORIES, FEATURED_CATEGORY_SLUGS } from "@/lib/directory-data";

// TEMPORARY: using local demo data (BUSINESSES from lib/directory-data.ts)
// instead of the live Supabase-backed data, since real business signups
// haven't been collected yet. Once real listings exist, swap this back to
// getAllApprovedBusinessesDB() from lib/directory-data.ts.

export default function Directory() {
  const businesses = BUSINESSES;
  const featuredCategories = FEATURED_CATEGORY_SLUGS.map((slug) =>
    CATEGORIES.find((c) => c.slug === slug)
  ).filter((c): c is NonNullable<typeof c> => Boolean(c));

  return (
    <>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Directory" }]} />

      <section className="px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <div className="mb-3 font-mono text-xs uppercase tracking-[0.16em] text-red">
            The Platform
          </div>
          <h1 className="font-serif text-3xl font-bold md:text-4xl">Business Directory</h1>
          <p className="mt-4 max-w-2xl text-ink/70">
            Somalia&apos;s verified hospitality directory, connecting hotels, restaurants,
            suppliers, professional services, and investment partners in one place. Tap a
            category below to see the businesses listed there.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-5">
            {featuredCategories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/directory/${cat.slug}`}
                className="rounded-md bg-paper-dark p-5 transition hover:-translate-y-0.5 hover:bg-gold/10"
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-red font-mono text-[11px] font-bold text-paper">
                  {cat.code}
                </div>
                <h3 className="font-semibold leading-snug">{cat.name}</h3>
                <div className="mt-1.5 font-mono text-xs text-ink/50">
                  {businesses.filter((b) => b.categorySlug === cat.slug).length} listed
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-6 text-sm text-ink/60">
            Looking for something else? Browse{" "}
            <Link href="/directory/all-categories" className="font-semibold text-gold-dark hover:opacity-80">
              all 27 categories →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
