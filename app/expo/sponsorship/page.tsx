import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";

const ROWS = [
  {
    label: "Exhibition presence",
    values: ["Dedicated pavilion / 24+ sqm exclusive stand", "18 sqm premium stand", "12 sqm premium-location stand", "6 sqm standard stand", "Logo placement only, no stand"],
  },
  {
    label: "Exclusivity",
    values: ["One per edition (category-exclusive)", "Not exclusive", "Not exclusive", "Not exclusive", "Not exclusive"],
  },
  {
    label: "Naming rights",
    values: ["Title sponsor \u2014 \u201cExpo presented by [Brand]\u201d", "One zone/activity naming right", "Not included", "Not included", "Not included"],
  },
  {
    label: "Stage presence",
    values: ["Opening keynote", "Keynote or major panel", "Panel session", "Not included", "Not included"],
  },
  {
    label: "Branding placement",
    values: ["Top billing: entrance arch, main stage, all print/digital", "Prominent: banners, stage backdrop, badges", "Prominent placement", "Standard listing", "Website + program listing"],
  },
  {
    label: "VIP passes",
    values: ["15+", "10", "6", "3", "1"],
  },
  {
    label: "Gala / networking dinner",
    values: ["Table of 15+, host recognition", "Table of 10, host recognition", "Table of 6", "2 seats", "Not included"],
  },
  {
    label: "Media & PR",
    values: ["Dedicated press feature & interview", "Included in press release", "Mentioned in press release", "Not included", "Not included"],
  },
  {
    label: "Post-event data",
    values: ["Full attendee lead list + analytics", "Full attendee lead list", "Full attendee lead list", "Summary report", "Summary report"],
  },
];

const TIERS = ["Diamond", "Platinum", "Gold", "Silver", "Bronze"];

export default function Sponsorship() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Expo", href: "/expo" },
          { label: "Sponsorship" },
        ]}
      />

      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-3 font-mono text-xs uppercase tracking-[0.16em] text-red">
            The Expo
          </div>
          <h1 className="font-serif text-3xl font-bold md:text-4xl">Sponsorship Opportunities</h1>
          <p className="mt-4 max-w-2xl text-ink/70">
            Five sponsorship tiers for the Somali HORECA Expo. Diamond is a single,
            category-exclusive title sponsorship. Platinum through Bronze are not exclusive and
            can be sold to multiple sponsors.
          </p>

          <div className="mt-6 overflow-x-auto rounded-md border border-ink/15">
            <table className="w-full min-w-[900px] border-collapse text-sm">
              <thead>
                <tr>
                  <th className="w-48 border-b border-ink/15 bg-paper-dark p-3 text-left font-semibold text-ink/70">
                    Benefit
                  </th>
                  {TIERS.map((t, i) => (
                    <th
                      key={t}
                      className={`border-b border-ink/15 p-3 text-left font-serif text-base font-bold ${
                        i === 0 ? "bg-ink text-gold" : "bg-paper-dark text-ink"
                      }`}
                    >
                      {t}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {ROWS.map((row) => (
                  <tr key={row.label} className="border-b border-ink/10">
                    <td className="p-3 font-semibold text-ink/80">{row.label}</td>
                    {row.values.map((v, i) => (
                      <td key={i} className={`p-3 text-ink/75 ${i === 0 ? "bg-red/5" : ""}`}>
                        {v}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-ink/50">
            Exact pricing and inventory (e.g. number of Platinum/Gold slots available) will be
            finalized once venue capacity is confirmed. Custom or hybrid packages can also be
            built for sponsors with specific goals.
          </p>

          <div className="mt-12 rounded-md border border-ink/15 bg-paper-dark p-6">
            <h2 className="font-serif text-xl font-semibold">
              Membership and Sponsorship are separate
            </h2>
            <p className="mt-3 text-sm text-ink/75">
              Directory Membership is an ongoing, year-round relationship: search visibility,
              buyer contact access, and RFQ routing, billed annually. Sponsorship is a
              separate, one-time investment tied to a single Expo edition: branding, stage
              presence, and prestige. A business can hold either one, both, or neither.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-ink/75">
              <li>
                <strong className="text-ink">Member only</strong> — Directory presence and
                membership-tier discounts on Expo stand booking, but no full sponsorship package
                (no stage slot, no naming rights, no top-tier branding).
              </li>
              <li>
                <strong className="text-ink">Sponsor only</strong> — the full sponsorship
                package at the Expo, but no ongoing Directory listing or search visibility
                between events.
              </li>
              <li>
                <strong className="text-ink">Both</strong> — Directory visibility year-round
                plus the sponsorship package at the Expo. Existing Members get a 5-10% loyalty
                discount on Sponsorship. Benefits don&apos;t double up: if a Sponsorship
                package already includes a free stand, the Membership stand discount doesn&apos;t
                apply on top of it.
              </li>
            </ul>
          </div>

          <div className="mt-10">
            <Link
              href="/expo/sponsorship/application"
              className="inline-block rounded-sm bg-gold px-6 py-3 font-semibold text-ink hover:opacity-90"
            >
              Apply to Sponsor →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
