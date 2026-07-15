import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import { getCategory, getBusinessesInCategoryDB } from "@/lib/directory-data";

export const dynamic = "force-dynamic";

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category: categorySlug } = await params;
  const category = getCategory(categorySlug);
  if (!category) notFound();

  const businesses = await getBusinessesInCategoryDB(categorySlug);

  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Directory", href: "/directory" },
          { label: category.name },
        ]}
      />

      <section className="px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <div className="mb-3 font-mono text-xs uppercase tracking-[0.16em] text-red">
            {category.group}
          </div>
          <h1 className="font-serif text-3xl font-bold md:text-4xl">{category.name}</h1>
          <p className="mt-3 text-ink/70">{businesses.length} listed</p>

          {category.subCategories && (
            <div className="mt-5 rounded-md border border-ink/15 bg-paper-dark p-5">
              <div className="mb-2 font-mono text-xs uppercase tracking-wider text-blue-dark">
                Includes
              </div>
              <div className="flex flex-wrap gap-2">
                {category.subCategories.map((sub) => (
                  <span
                    key={sub}
                    className="rounded-full border border-ink/15 bg-paper px-3 py-1 text-xs text-ink/75"
                  >
                    {sub}
                  </span>
                ))}
              </div>
            </div>
          )}

          {businesses.length === 0 ? (
            <div className="mt-10 rounded-md border border-dashed border-ink/25 bg-paper-dark p-8 text-center text-ink/60">
              No businesses listed yet in this category.
            </div>
          ) : (
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {businesses.map((b) => (
                <Link
                  key={b.slug}
                  href={`/directory/${categorySlug}/${b.slug}`}
                  className="rounded-md border border-ink/15 bg-paper p-6 transition hover:-translate-y-0.5 hover:border-gold"
                >
                  <div className="mb-3 inline-block rounded-sm bg-gold px-2 py-1 font-mono text-[10px] font-bold uppercase text-ink">
                    {b.membershipTier}
                  </div>
                  <h3 className="font-semibold">{b.name}</h3>
                  <p className="mt-2 text-sm text-ink/70">{b.overview}</p>
                  <div className="mt-3 font-mono text-xs text-ink/50">📍 {b.location}</div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
