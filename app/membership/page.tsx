import Breadcrumbs from "@/components/Breadcrumbs";

const ADVANTAGES = [
  { name: "Visibility", desc: "Search ranking and directory placement improve as your Seller tier goes up." },
  { name: "Leads", desc: "RFQ access and buyer contact visibility scale with tier, from none at Basic to instant priority alerts at Pro." },
  { name: "Market Intelligence", desc: "Pricing and market insight reports, included at Pro Buyer tier." },
  { name: "Expo Access", desc: "Stand discounts, booking priority, and passes scale with Seller tier." },
  { name: "Network", desc: "Connections with verified buyers, sellers, and partners across the platform." },
];

const SELLER_TIERS = [
  {
    name: "Basic Seller",
    price: "$",
    features: [
      "Directory listing, 1 category",
      "Contact info shown",
      "Trade license upload optional",
      "Standard search ranking",
      "Not visible in RFQ feed",
    ],
  },
  {
    name: "Advanced Seller",
    price: "$$",
    features: [
      "Everything in Basic",
      "Verified badge (trade license required)",
      "Up to 3 categories",
      "Higher search ranking",
      "Appears in delayed/general RFQ feed",
      "Expo: stand discount + early booking window",
    ],
  },
  {
    name: "Pro Seller",
    price: "$$$",
    features: [
      "Everything in Advanced",
      "Featured homepage placement + New Launches access",
      "Unlimited categories",
      "Top search ranking",
      "Instant priority RFQ alerts",
      "Full analytics dashboard (views, clicks, inquiries, conversion)",
      "Expo: best stand location, signage, extra passes, speaking slot",
    ],
    highlight: true,
  },
];

const BUYER_TIERS = [
  {
    name: "Basic Buyer",
    price: "$",
    features: [
      "Limited searches per month",
      "Preview only (name & category)",
      "Phone OTP verified account",
    ],
  },
  {
    name: "Advanced Buyer",
    price: "$$",
    features: [
      "Everything in Basic",
      "Full contact details unlocked",
      "More searches per month",
      "Direct inquiry to any listing",
    ],
  },
  {
    name: "Pro Buyer",
    price: "$$$",
    features: [
      "Everything in Advanced",
      "Unlimited searches",
      "Priority RFQ posting",
      "Dedicated account support",
    ],
    highlight: true,
  },
];

function TierGrid({ tiers }: { tiers: typeof SELLER_TIERS }) {
  return (
    <div className="mt-6 grid gap-1 bg-ink/15 md:grid-cols-3" style={{ gap: "1px" }}>
      {tiers.map((t) => (
        <div key={t.name} className={`p-7 ${t.highlight ? "bg-ink text-paper" : "bg-paper"}`}>
          <div className={`font-mono text-xs uppercase tracking-wider ${t.highlight ? "text-gold" : "text-red"}`}>
            {t.name}
          </div>
          <div className="mt-2 font-serif text-xl font-bold">{t.price}</div>
          <ul className="mt-4 space-y-2">
            {t.features.map((f) => (
              <li key={f} className={`border-t pt-2 text-sm ${t.highlight ? "border-paper/20" : "border-ink/15"}`}>
                {f}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default function Membership() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Membership" }]} />

      <section className="px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <div className="mb-3 font-mono text-xs uppercase tracking-[0.16em] text-red">
            The Business Growth Network
          </div>
          <h1 className="font-serif text-3xl font-bold md:text-4xl">Membership &amp; Benefits</h1>
          <p className="mt-4 max-w-2xl text-ink/70">
            Five areas where membership grows your business. Exactly what you get in each
            depends on your tier and whether you&apos;re a Buyer or a Seller. See the full
            breakdown below.
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-5">
            {ADVANTAGES.map((a) => (
              <div key={a.name} className="rounded-md border border-ink/15 bg-paper-dark p-5">
                <h3 className="font-semibold text-sm">{a.name}</h3>
                <p className="mt-2 text-xs text-ink/65">{a.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 rounded-md border border-dashed border-ink/25 bg-paper-dark p-5 text-sm text-ink/70">
            <strong className="text-gold-dark">Per the client's Directory Membership &amp; Access Tiers spec:</strong>{" "}
            both Buyers and Sellers pay, all new accounts require phone OTP verification and admin
            approval before going live. Pricing shown below is relative ($ to $$$), with exact
            prices to be confirmed.
          </div>

          <h2 className="mt-14 font-serif text-2xl font-semibold">Seller Tiers</h2>
          <p className="mt-2 text-sm text-ink/60">
            For businesses listing themselves in the Directory. Tier determines search ranking,
            RFQ visibility, and Expo perks.
          </p>
          <TierGrid tiers={SELLER_TIERS} />

          <h2 className="mt-16 font-serif text-2xl font-semibold">Seller Membership → Expo Benefits</h2>
          <p className="mt-2 max-w-2xl text-sm text-ink/60">
            Your Directory tier automatically determines what you get at the annual Expo, so
            membership is a year-round relationship, not just a once-a-year booking decision.
            Buyers attend the Expo free regardless of Directory tier.
          </p>
          <div className="mt-6 overflow-x-auto rounded-md border border-ink/15">
            <table className="w-full min-w-[700px] border-collapse text-sm">
              <thead>
                <tr>
                  <th className="w-56 border-b border-ink/15 bg-paper-dark p-3 text-left font-semibold text-ink/70">
                    Expo Benefit
                  </th>
                  <th className="border-b border-ink/15 bg-paper-dark p-3 text-left font-semibold text-ink">Basic Seller</th>
                  <th className="border-b border-ink/15 bg-paper-dark p-3 text-left font-semibold text-ink">Advanced Seller</th>
                  <th className="border-b border-ink/15 bg-ink p-3 text-left font-semibold text-gold">Pro Seller</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Stand fee discount", "None (standard rate)", "10% discount", "20-25% discount"],
                  ["Early stand booking", "Standard window", "Opens 1 week early", "Opens 2-3 weeks early, first choice"],
                  ["Stand location priority", "Standard, first-come", "Priority zone", "Prime zone (entrance / high-traffic)"],
                  ["On-site signage", "None", "Exhibitor directory & program", "Banner placement, stage backdrop or entrance signage"],
                  ["Expo site/app advertising", "Standard listing", "Featured-exhibitor badge", "Homepage banner + pre-event push notification"],
                  ["Complimentary passes", "0-2 passes", "3-5 passes", "6-10 passes"],
                  ["Speaking / demo slot", "Not guaranteed", "Can apply, subject to availability", "Guaranteed demo or workshop slot"],
                  ["Post-event lead data", "Summary report only", "Full leads within category", "Full leads + booth traffic analytics"],
                ].map((row) => (
                  <tr key={row[0]} className="border-b border-ink/10">
                    <td className="p-3 font-semibold text-ink/80">{row[0]}</td>
                    <td className="p-3 text-ink/75">{row[1]}</td>
                    <td className="p-3 text-ink/75">{row[2]}</td>
                    <td className="bg-ink/90 p-3 text-paper/90">{row[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="mt-16 font-serif text-2xl font-semibold">Buyer Tiers</h2>
          <p className="mt-2 text-sm text-ink/60">
            For hotels, restaurants, and procurement teams looking to source suppliers. Tier
            determines how much of the Directory you can see and search.
          </p>
          <TierGrid tiers={BUYER_TIERS} />

          <div className="mt-14 rounded-md border border-ink/15 bg-paper-dark p-6">
            <h3 className="font-serif text-lg font-semibold">Not yet built (needs backend work)</h3>
            <ul className="mt-3 list-inside list-disc space-y-1.5 text-sm text-ink/70">
              <li>RFQ (Request for Quote) system — buyers post, sellers get notified by tier</li>
              <li>Phone OTP verification at signup</li>
              <li>Trade license upload &amp; admin verification</li>
              <li>Per-tier analytics dashboards</li>
              <li>Subscription billing (card, bank, and mobile money — EVC Plus, Zaad)</li>
              <li>Admin dashboard: approve/reject accounts, adjust tiers, reporting</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
