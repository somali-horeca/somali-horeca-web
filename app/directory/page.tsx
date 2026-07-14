import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import DirectorySearch from "@/components/DirectorySearch";
import { CATEGORIES, CATEGORY_GROUPS } from "@/lib/directory-data";

export default function Directory() {
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
            Somalia&apos;s verified hospitality directory — hotels, restaurants, suppliers,
            professional services, and investment partners in one place.
          </p>

          <div className="mt-6 rounded-md border border-dashed border-ink/25 bg-paper-dark p-5 text-sm text-ink/70">
            <strong className="text-gold-dark">Not yet connected to a real database.</strong>{" "}
            Categories and listings below are placeholder data from{" "}
            <code className="font-mono text-xs">lib/directory-data.ts</code> — replace with
            Supabase once that&apos;s set up.
          </div>

          <div className="mt-10">
            <DirectorySearch />
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
                    <div className="mt-1 font-mono text-xs text-ink/50">{cat.count} listed</div>
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
