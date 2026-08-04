import Image from "next/image";
import RotatingLogoTile from "./RotatingLogoTile";

// Each tier box now stays completely still — only the logo image inside
// rotates every few seconds (2-3 placeholder logos per box). Swap the
// seed numbers below for real sponsor logo files once available.
const platinumTiles = [
  { images: ["https://picsum.photos/seed/platinum-a1/400/220", "https://picsum.photos/seed/platinum-a2/400/220"] },
  { images: ["https://picsum.photos/seed/platinum-b1/400/220", "https://picsum.photos/seed/platinum-b2/400/220"] },
  { images: ["https://picsum.photos/seed/platinum-c1/400/220", "https://picsum.photos/seed/platinum-c2/400/220"] },
];

const goldTiles = [
  { images: ["https://picsum.photos/seed/gold-a1/400/220", "https://picsum.photos/seed/gold-a2/400/220", "https://picsum.photos/seed/gold-a3/400/220"] },
  { images: ["https://picsum.photos/seed/gold-b1/400/220", "https://picsum.photos/seed/gold-b2/400/220", "https://picsum.photos/seed/gold-b3/400/220"] },
  { images: ["https://picsum.photos/seed/gold-c1/400/220", "https://picsum.photos/seed/gold-c2/400/220", "https://picsum.photos/seed/gold-c3/400/220"] },
];

const silverTiles = [
  { images: ["https://picsum.photos/seed/silver-a1/400/220", "https://picsum.photos/seed/silver-a2/400/220"] },
  { images: ["https://picsum.photos/seed/silver-b1/400/220", "https://picsum.photos/seed/silver-b2/400/220"] },
  { images: ["https://picsum.photos/seed/silver-c1/400/220", "https://picsum.photos/seed/silver-c2/400/220"] },
];

export default function SponsorsStrip() {
  return (
    <section className="border-y-2 border-gold bg-blue-dark px-6 py-14 text-paper">
      <div className="mx-auto max-w-[1400px]">
        <h2 className="text-center font-serif text-4xl font-bold text-paper">
          Sponsors
        </h2>

        <div className="mt-10 space-y-10">
          {/* Diamond: top tier — a shimmer sweep + sparkle mark it as
              special. PLACEHOLDER PHOTOS — swap for real sponsor logos. */}
          <div>
            <div className="mb-3 text-center text-lg font-bold uppercase tracking-wider text-paper">
              Diamond Sponsors
            </div>
            <div className="mx-auto grid max-w-3xl grid-cols-2 gap-5">
              {[1, 2].map((i) => (
                <div
                  key={i}
                  style={{ animationDelay: `${i * 0.15}s` }}
                  className="animate-logo-in relative flex h-28 w-full items-center justify-center overflow-hidden rounded-md border-2 border-[#B9E4F5] shadow-[0_0_20px_rgba(185,228,245,0.15)] sm:h-36"
                >
                  <Image
                    src={`https://picsum.photos/seed/sponsor-diamond-${i}/400/220`}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="(min-width: 640px) 280px, 45vw"
                  />
                  <svg className="absolute right-2 top-2 z-10 opacity-80" width="14" height="14" viewBox="0 0 24 24" fill="#B9E4F5">
                    <path d="M12 0l2.2 8.8L23 11l-8.8 2.2L12 22l-2.2-8.8L1 11l8.8-2.2z" />
                  </svg>
                  <div className="animate-diamond-shimmer absolute inset-0 z-10 bg-gradient-to-r from-transparent via-[#B9E4F5]/25 to-transparent" />
                </div>
              ))}
            </div>
          </div>

          {/* Platinum, Gold, Silver: fixed boxes (2-3 each) that stay in
              place — only the logo inside each box rotates, matching the
              reference site's actual behavior instead of a scrolling row. */}
          <div>
            <div className="mb-3 text-center text-lg font-bold uppercase tracking-wider text-paper">
              Platinum Sponsors
            </div>
            <div className="mx-auto grid max-w-3xl grid-cols-2 gap-5 sm:grid-cols-3">
              {platinumTiles.map((tile, i) => (
                <RotatingLogoTile
                  key={i}
                  images={tile.images}
                  tileBorder="border-[#E5E4E2]"
                  startDelayMs={i * 700}
                />
              ))}
            </div>
          </div>

          <div>
            <div className="mb-3 text-center text-lg font-bold uppercase tracking-wider text-paper">
              Gold Sponsors
            </div>
            <div className="mx-auto grid max-w-3xl grid-cols-2 gap-5 sm:grid-cols-3">
              {goldTiles.map((tile, i) => (
                <RotatingLogoTile
                  key={i}
                  images={tile.images}
                  tileBorder="border-gold"
                  startDelayMs={i * 700}
                />
              ))}
            </div>
          </div>

          <div>
            <div className="mb-3 text-center text-lg font-bold uppercase tracking-wider text-paper">
              Silver Sponsors
            </div>
            <div className="mx-auto grid max-w-3xl grid-cols-2 gap-5 sm:grid-cols-3">
              {silverTiles.map((tile, i) => (
                <RotatingLogoTile
                  key={i}
                  images={tile.images}
                  tileBorder="border-[#C0C0C0]"
                  startDelayMs={i * 700}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
