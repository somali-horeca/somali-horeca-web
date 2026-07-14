import Breadcrumbs from "@/components/Breadcrumbs";

export default function SponsorApplication() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Expo", href: "/expo" },
          { label: "Sponsorship", href: "/expo/sponsorship" },
          { label: "Apply" },
        ]}
      />
      <section className="px-6 py-16">
        <div className="mx-auto max-w-2xl">
          <div className="mb-3 font-mono text-xs uppercase tracking-[0.16em] text-red">
            Sponsorship
          </div>
          <h1 className="font-serif text-3xl font-bold md:text-4xl">Sponsor Application</h1>
          <p className="mt-4 text-ink/70">
            An inquiry form for Phase 1 — a full contract (VAT numbers, bank transfer details,
            signatures) is a Phase 2+ step, handled manually once a sponsor is confirmed.
          </p>

          <form className="mt-8 grid gap-4 rounded-md border border-ink/15 bg-paper-dark p-6">
            <div>
              <label className="mb-1 block text-xs font-semibold uppercase tracking-wide text-ink/60">Company name</label>
              <input type="text" className="w-full rounded-sm border border-ink/15 bg-paper px-4 py-2.5 text-sm" />
            </div>
            <div>
              <label className="mb-1 block text-xs font-semibold uppercase tracking-wide text-ink/60">Contact person</label>
              <input type="text" className="w-full rounded-sm border border-ink/15 bg-paper px-4 py-2.5 text-sm" />
            </div>
            <div>
              <label className="mb-1 block text-xs font-semibold uppercase tracking-wide text-ink/60">Email &amp; phone</label>
              <input type="text" className="w-full rounded-sm border border-ink/15 bg-paper px-4 py-2.5 text-sm" />
            </div>
            <div>
              <label className="mb-1 block text-xs font-semibold uppercase tracking-wide text-ink/60">Sponsorship tier interested in</label>
              <select className="w-full rounded-sm border border-ink/15 bg-paper px-4 py-2.5 text-sm">
                <option>To be defined</option>
              </select>
            </div>
            <button type="submit" className="mt-2 rounded-sm bg-red px-5 py-2.5 text-sm font-semibold text-paper hover:opacity-90">
              Submit Application
            </button>
            <p className="text-xs text-ink/50">
              Demo form — not yet connected. Submissions will need a place to go (email, or a
              Supabase table for admin review).
            </p>
          </form>
        </div>
      </section>
    </>
  );
}
