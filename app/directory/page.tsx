import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import DirectorySearch from "@/components/DirectorySearch";
import { CATEGORIES, CATEGORY_GROUPS, getAllApprovedBusinessesDB } from "@/lib/directory-data";

export const dynamic = "force-dynamic";

export default async function Directory() {
  const businesses = await getAllApprovedBusinessesDB();

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
            suppliers, professional services, and investment partners in one place.
          </p>

          <div className="mt-10">
            <DirectorySearch businesses={businesses} />
          </div>

          {CATEGORY_GROUPS.map((group) => (
            <div key={group} className="mt-12">
              <h2 className="mb-4 font-serif text-xl font-semibold">{group}</h2>
              <div className="grid gap-4 md:grid-cols-4">
                {CATEGORIES.filter((c) => c.group === group).map((cat) => (
                  <Link
                    key={cat.slug}
                    href={`/directory/${cat.slug}`}
                    className="rounded-md border border-ink/15 bg-paper-dark p-6 transition hover:-translate-y-0.5 hover:border-gold"
                  >
                    <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-full border-2 border-gold font-mono text-[10px] font-bold text-gold">
                      {cat.code}
                    </div>
                    <h3 className="font-semibold">{cat.name}</h3>
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
