import Image from "next/image";
import RotatingLogoTile from "./RotatingLogoTile";
import { getSponsors, type Sponsor } from "@/lib/sanity-queries";
import { urlFor } from "@/lib/sanity";

// FALLBACK PLACEHOLDER TILES — shown only for a tier that has zero real
// sponsors in Sanity yet, so no tier ever looks empty/broken.
const platinumFallback = [
  { images: ["https://picsum.photos/seed/platinum-a1/400/220", "https://picsum.photos/seed/platinum-a2/400/220"] },
  { images: ["https://picsum.photos/seed/platinum-b1/400/220", "https://picsum.photos/seed/platinum-b2/400/220"] },
  { images: ["https://picsum.photos/seed/platinum-c1/400/220", "https://picsum.photos/seed/platinum-c2/400/220"] },
];
const goldFallback = [
  { images: ["https://picsum.photos/seed/gold-a1/400/220", "https://picsum.photos/seed/gold-a2/400/220", "https://picsum.photos/seed/gold-a3/400/220"] },
  { images: ["https://picsum.photos/seed/gold-b1/400/220", "https://picsum.photos/seed/gold-b2/400/220", "https://picsum.photos/seed/gold-b3/400/220"] },
  { images: ["https://picsum.photos/seed/gold-c1/400/220", "https://picsum.photos/seed/gold-c2/400/220", "https://picsum.photos/seed/gold-c3/400/220"] },
];
const silverFallback = [
  { images: ["https://picsum.photos/seed/silver-a1/400/220", "https://picsum.photos/seed/silver-a2/400/220"] },
  { images: ["https://picsum.photos/seed/silver-b1/400/220", "https://picsum.photos/seed/silver-b2/400/220"] },
  { images: ["https://picsum.photos/seed/silver-c1/400/220", "https://picsum.photos/seed/silver-c2/400/220"] },
];
const diamondFallback = [1, 2].map(
  (i) => `https://picsum.photos/seed/sponsor-diamond-${i}/400/220`
);

function DiamondTile({ src, name, delayMs }: { src: string; name: string; delayMs: number }) {
  return (
    <div
      style={{ animationDelay: `${delayMs}ms` }}
      className="animate-logo-in relative flex h-28 w-full items-center justify-center overflow-hidden rounded-md border-2 border-[#B9E4F5] shadow-[0_0_20px_rgba(185,228,245,0.15)] sm:h-36"
    >
      <Image src={src} alt={name} fill className="object-cover" sizes="(min-width: 640px) 280px, 45vw" />
      <svg className="absolute right-2 top-2 z-10 opacity-80" width="14" height="14" viewBox="0 0 24 24" fill="#B9E4F5">
        <path d="M12 0l2.2 8.8L23 11l-8.8 2.2L12 22l-2.2-8.8L1 11l8.8-2.2z" />
      </svg>
      <div className="animate-diamond-shimmer absolute inset-0 z-10 bg-gradient-to-r from-transparent via-[#B9E4F5]/25 to-transparent" />
    </div>
  );
}

function SponsorTile({ src, name, tileBorder }: { src: string; name: string; tileBorder: string }) {
  return (
    <div className={`relative h-28 w-full overflow-hidden rounded-md border-2 ${tileBorder} sm:h-32`}>
      <Image src={src} alt={name} fill className="object-cover" sizes="(min-width: 640px) 220px, 45vw" />
    </div>
  );
}

export default async function SponsorsStrip() {
  const sponsors = await getSponsors().catch(() => [] as Sponsor[]);

  const byTier = (tier: Sponsor["tier"]) => sponsors.filter((s) => s.tier === tier);
  const diamond = byTier("diamond");
  const platinum = byTier("platinum");
  const gold = byTier("gold");
  const silver = byTier("silver");

  return (
    <section className="border-y-2 border-gold bg-blue-dark px-6 py-14 text-paper">
      <div className="mx-auto max-w-[1400px]">
        <h2 className="text-center font-serif text-4xl font-bold text-paper">
          Sponsors
        </h2>

        <div className="mt-10 space-y-10">
          {/* Diamond: top tier — a shimmer sweep + sparkle mark it as special */}
          <div>
            <div className="mb-3 text-center text-lg font-bold uppercase tracking-wider text-paper">
              Diamond Sponsors
            </div>
            <div className="mx-auto grid max-w-3xl grid-cols-2 gap-5">
              {diamond.length > 0
                ? diamond.map((s, i) => (
                    <DiamondTile
                      key={s._id}
                      src={urlFor(s.logo).width(400).height(220).fit("crop").url()}
                      name={s.name}
                      delayMs={i * 150}
                    />
                  ))
                : diamondFallback.map((src, i) => (
                    <DiamondTile key={i} src={src} name="" delayMs={i * 150} />
                  ))}
            </div>
          </div>

          {/* Platinum, Gold, Silver: one fixed box per real sponsor */}
          <div>
            <div className="mb-3 text-center text-lg font-bold uppercase tracking-wider text-paper">
              Platinum Sponsors
            </div>
            <div className="mx-auto grid max-w-3xl grid-cols-2 gap-5 sm:grid-cols-3">
              {platinum.length > 0
                ? platinum.map((s) => (
                    <SponsorTile
                      key={s._id}
                      src={urlFor(s.logo).width(400).height(220).fit("crop").url()}
                      name={s.name}
                      tileBorder="border-[#E5E4E2]"
                    />
                  ))
                : platinumFallback.map((tile, i) => (
                    <RotatingLogoTile key={i} images={tile.images} tileBorder="border-[#E5E4E2]" startDelayMs={i * 700} />
                  ))}
            </div>
          </div>

          <div>
            <div className="mb-3 text-center text-lg font-bold uppercase tracking-wider text-paper">
              Gold Sponsors
            </div>
            <div className="mx-auto grid max-w-3xl grid-cols-2 gap-5 sm:grid-cols-3">
              {gold.length > 0
                ? gold.map((s) => (
                    <SponsorTile
                      key={s._id}
                      src={urlFor(s.logo).width(400).height(220).fit("crop").url()}
                      name={s.name}
                      tileBorder="border-gold"
                    />
                  ))
                : goldFallback.map((tile, i) => (
                    <RotatingLogoTile key={i} images={tile.images} tileBorder="border-gold" startDelayMs={i * 700} />
                  ))}
            </div>
          </div>

          <div>
            <div className="mb-3 text-center text-lg font-bold uppercase tracking-wider text-paper">
              Silver Sponsors
            </div>
            <div className="mx-auto grid max-w-3xl grid-cols-2 gap-5 sm:grid-cols-3">
              {silver.length > 0
                ? silver.map((s) => (
                    <SponsorTile
                      key={s._id}
                      src={urlFor(s.logo).width(400).height(220).fit("crop").url()}
                      name={s.name}
                      tileBorder="border-[#C0C0C0]"
                    />
                  ))
                : silverFallback.map((tile, i) => (
                    <RotatingLogoTile key={i} images={tile.images} tileBorder="border-[#C0C0C0]" startDelayMs={i * 700} />
                  ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
