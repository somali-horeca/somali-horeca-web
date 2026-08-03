import Link from "next/link";
import Image from "next/image";
import HeroSlider from "@/components/HeroSlider";
import PlatformIntro from "@/components/PlatformIntro";
import StrategicPartners from "@/components/StrategicPartners";
import FeaturedBusinesses from "@/components/FeaturedBusinesses";
import UpcomingExpoBanner from "@/components/UpcomingExpoBanner";
import SponsorsStrip from "@/components/SponsorsStrip";
import FinalCTA from "@/components/FinalCTA";
import { LAUNCHES } from "@/lib/launches-data";
import { NEWS_ITEMS } from "@/lib/news-data";

// PLACEHOLDER PHOTOS for the homepage Gallery preview — swap for real photos
const GALLERY_PREVIEW = Array.from({ length: 4 }).map(
  (_, i) => `https://picsum.photos/seed/horeca-gallery-${i + 1}/600/600`
);

export default function Home() {
  return (
    <>
      {/* Hero: full-width photo slider, no sidebar — matches the reference site's edge-to-edge banner */}
      <HeroSlider />

      {/* "Somali HORECA" platform explainer */}
      <PlatformIntro />

      <StrategicPartners />

      <section className="bg-blue-tint px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mt-6">
            <FeaturedBusinesses />
          </div>

          <div className="mt-8">
            <UpcomingExpoBanner />
          </div>

          <div className="mt-8">
            <div className="flex items-baseline justify-between">
              <h3 className="text-sm font-semibold">New launches</h3>
              <Link href="/membership" className="text-xs font-semibold text-gold-dark hover:opacity-80">
                Become a member →
              </Link>
            </div>
            {LAUNCHES.length === 0 ? (
              <div className="mt-4 rounded-md border border-dashed border-ink/20 p-6 text-center text-xs text-ink/50">
                No launches posted yet.
              </div>
            ) : (
              <div className="mt-4 grid gap-3 md:grid-cols-3">
                {LAUNCHES.map((l) => (
                  <Link
                    key={l.title}
                    href={`/directory/${l.categorySlug}/${l.businessSlug}`}
                    className="rounded-md bg-paper-dark p-4 transition hover:bg-gold/10"
                  >
                    <div className="font-mono text-[11px] text-blue-dark">{l.businessName}</div>
                    <h4 className="mt-1.5 text-sm font-semibold">{l.title}</h4>
                    <p className="mt-1 text-xs text-ink/70">{l.description}</p>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Sponsors strip */}
      <SponsorsStrip />

      {/* Latest News — sits after Sponsors, matching the reference site's
          homepage flow (their News section comes after the sponsor tiers). */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-baseline justify-between">
            <h3 className="font-serif text-2xl font-semibold">Latest news</h3>
            <Link href="/news" className="text-sm font-semibold text-gold-dark hover:opacity-80">
              View all →
            </Link>
          </div>
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {NEWS_ITEMS.slice(0, 3).map((n) => (
              <Link
                key={n.slug}
                href="/news"
                className="overflow-hidden rounded-md bg-paper-dark transition hover:bg-gold/10"
              >
                <div className="relative h-40 w-full">
                  <Image src={n.photo} alt="" fill className="object-cover" sizes="(min-width: 768px) 33vw, 100vw" />
                </div>
                <div className="p-4">
                  <div className="font-mono text-[11px] text-ink/50">{n.date}</div>
                  <h4 className="mt-1.5 text-base font-semibold leading-snug">{n.title}</h4>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery preview — sits near the bottom before the final CTA,
          matching the reference site's homepage flow. */}
      <section className="bg-paper-dark px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-baseline justify-between">
            <h3 className="font-serif text-2xl font-semibold">Gallery</h3>
            <Link href="/gallery" className="text-sm font-semibold text-gold-dark hover:opacity-80">
              View all →
            </Link>
          </div>
          <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
            {GALLERY_PREVIEW.map((photo) => (
              <Link key={photo} href="/gallery" className="relative aspect-square overflow-hidden rounded-md">
                <Image
                  src={photo}
                  alt=""
                  fill
                  className="object-cover transition hover:scale-105"
                  sizes="(min-width: 768px) 25vw, 50vw"
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <FinalCTA />
    </>
  );
}
