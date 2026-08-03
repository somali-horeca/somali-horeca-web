import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { BUSINESSES, CATEGORIES, CATEGORY_GROUPS } from "@/lib/directory-data";

export default function AllCategories() {
  const businesses = BUSINESSES;

  return (
    <>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Directory", href: "/directory" }, { label: "All Categories" }]} />

      <section className="px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <div className="mb-3 font-mono text-xs uppercase tracking-[0.16em] text-red">
            The Platform
          </div>
          <h1 className="font-serif text-3xl font-bold md:text-4xl">All Categories</h1>
          <p className="mt-4 max-w-2xl text-ink/70">
            The full directory, organized by sector.
          </p>

          {CATEGORY_GROUPS.map((group) => (
            <div key={group} className="mt-10">
              <h2 className="mb-4 font-serif text-xl font-semibold">{group}</h2>
              <div className="grid gap-4 md:grid-cols-4">
                {CATEGORIES.filter((c) => c.group === group).map((cat) => (
                  <Link
                    key={cat.slug}
                    href={`/directory/${cat.slug}`}
                    className="rounded-md bg-paper-dark p-5 transition hover:-translate-y-0.5 hover:bg-gold/10"
                  >
                    <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-red font-mono text-[10px] font-bold text-paper">
                      {cat.code}
                    </div>
                    <h3 className="font-semibold leading-snug">{cat.name}</h3>
                    <div className="mt-1 font-mono text-xs text-ink/50">
                      {businesses.filter((b) => b.categorySlug === cat.slug).length} listed
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
