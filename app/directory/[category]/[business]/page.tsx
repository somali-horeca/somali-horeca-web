import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import { getCategory, getBusinessDB } from "@/lib/directory-data";

export const dynamic = "force-dynamic";

const TIER_STYLE: Record<string, string> = {
  Basic: "bg-paper-dark text-ink/70",
  Verified: "bg-blue text-paper",
  Featured: "bg-gold text-ink",
};

export default async function BusinessPage({
  params,
}: {
  params: Promise<{ category: string; business: string }>;
}) {
  const { category: categorySlug, business: businessSlug } = await params;
  const category = getCategory(categorySlug);
  const business = await getBusinessDB(categorySlug, businessSlug);
  if (!category || !business) notFound();

  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Directory", href: "/directory" },
          { label: category.name, href: `/directory/${categorySlug}` },
          { label: business.name },
        ]}
      />

      <section className="px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-gold font-serif text-xl font-bold text-gold-dark">
              {business.logoInitials}
            </div>
            <div>
              <span className={`inline-block rounded-sm px-2 py-1 font-mono text-[10px] font-bold uppercase ${TIER_STYLE[business.membershipTier]}`}>
                {business.membershipTier} Member
              </span>
            </div>
          </div>

          <div className="mt-5 font-mono text-xs uppercase tracking-[0.16em] text-red">
            {category.name}
          </div>
          <h1 className="font-serif text-3xl font-bold md:text-4xl">{business.name}</h1>
          <p className="mt-2 font-mono text-sm text-ink/50">Location: {business.location}</p>

          <p className="mt-6 text-lg text-ink/75">{business.overview}</p>

          <div className="mt-8 grid grid-cols-3 gap-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex h-24 items-center justify-center rounded-md bg-gradient-to-br from-blue to-ink font-mono text-xs text-paper/50">
                Image {i}
              </div>
            ))}
          </div>

          <div className="mt-10">
            <h2 className="font-serif text-xl font-semibold">Products and Services</h2>
            <ul className="mt-3 flex flex-wrap gap-2">
              {business.productsAndServices.map((p) => (
                <li key={p} className="rounded-full border border-ink/15 bg-paper-dark px-3 py-1 text-sm text-ink/75">
                  {p}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-10 grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="font-serif text-xl font-semibold">Contact</h2>
              <ul className="mt-3 space-y-2 text-sm text-ink/75">
                <li>Phone: {business.contact.phone}</li>
                <li>Email: {business.contact.email}</li>
                {business.website && (
                  <li>
                    <a href={business.website} className="text-gold-dark hover:underline">
                      {business.website}
                    </a>
                  </li>
                )}
                {business.social && business.social.map((s) => (
                  <li key={s.platform}>
                    <a href={s.url} className="text-gold-dark hover:underline">
                      {s.platform}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-serif text-xl font-semibold">Brochure</h2>
              {business.brochureUrl ? (
                <a href={business.brochureUrl} className="mt-3 inline-block rounded-sm bg-ink px-5 py-2.5 text-sm font-semibold text-paper hover:opacity-90">
                  Download PDF
                </a>
              ) : (
                <p className="mt-3 text-sm text-ink/50">No brochure uploaded yet.</p>
              )}
            </div>
          </div>

          <div className="mt-10 rounded-md border border-ink/15 bg-paper-dark p-6">
            <h2 className="font-serif text-xl font-semibold">Send an inquiry</h2>
            <form className="mt-4 grid gap-3">
              <input type="text" placeholder="Your name" className="rounded-sm border border-ink/15 bg-paper px-4 py-2.5 text-sm" />
              <input type="text" placeholder="Your business" className="rounded-sm border border-ink/15 bg-paper px-4 py-2.5 text-sm" />
              <textarea placeholder="What are you looking for?" className="min-h-24 rounded-sm border border-ink/15 bg-paper px-4 py-2.5 text-sm" />
              <button type="submit" className="rounded-sm bg-gold px-5 py-2.5 text-sm font-semibold text-ink hover:opacity-90">
                Send Inquiry
              </button>
              <p className="text-xs text-ink/50">
                Demo form, not yet connected. Will route to the business contact or a platform inbox once wired up.
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
