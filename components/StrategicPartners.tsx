import Image from "next/image";
import { getStrategicPartners } from "@/lib/sanity-queries";
import { urlFor } from "@/lib/sanity";

// FALLBACK LOGOS — shown only if no Strategic Partner entries exist in
// Sanity yet, so this section never looks empty/broken.
const FALLBACK_PARTNERS = [1, 2, 3, 4].map((i) => ({
  key: `fallback-${i}`,
  src: `https://picsum.photos/seed/strategic-partner-${i}/400/220`,
  name: "",
}));

export default async function StrategicPartners() {
  const partners = await getStrategicPartners().catch(() => []);

  const items =
    partners.length > 0
      ? partners.map((p) => ({
          key: p._id,
          src: urlFor(p.logo).width(400).height(220).fit("crop").url(),
          name: p.name,
        }))
      : FALLBACK_PARTNERS;

  return (
    <section className="bg-paper px-6 py-14">
      <div className="mx-auto max-w-[1400px] text-center">
        <div className="font-mono text-xs uppercase tracking-wider text-gold-dark">
          Strategic Partners
        </div>
        <h2 className="mt-2 font-serif text-2xl font-bold text-ink">
          Working alongside Somalia&apos;s hospitality sector
        </h2>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-6">
          {items.map((item) => (
            <div key={item.key} className="relative h-20 w-40 overflow-hidden rounded-md border border-ink/10 bg-paper-dark">
              <Image src={item.src} alt={item.name} fill className="object-cover" sizes="160px" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
