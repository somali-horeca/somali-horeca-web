import Image from "next/image";

// PLACEHOLDER LOGOS from Lorem Picsum — swap for real strategic partner
// logos once confirmed. Kept as a simple static row (not animated), since
// strategic partners are typically shown as a stable, credibility-signaling
// strip rather than a rotating showcase.
const PARTNERS = [1, 2, 3, 4].map((i) => `https://picsum.photos/seed/strategic-partner-${i}/400/220`);

export default function StrategicPartners() {
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
          {PARTNERS.map((src) => (
            <div key={src} className="relative h-20 w-40 overflow-hidden rounded-md border border-ink/10 bg-paper-dark">
              <Image src={src} alt="" fill className="object-cover" sizes="160px" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
