import Link from "next/link";
import Image from "next/image";
import HeroSlider from "@/components/HeroSlider";
import PlatformIntro from "@/components/PlatformIntro";
import FeaturedBusinesses from "@/components/FeaturedBusinesses";
import UpcomingExpoBanner from "@/components/UpcomingExpoBanner";
import SponsorsStrip from "@/components/SponsorsStrip";
import FinalCTA from "@/components/FinalCTA";
import { LAUNCHES } from "@/lib/launches-data";

const NEWS = [
  {
    title: "Somali HORECA Platform launches business directory beta",
    date: "July 2026",
    photo: "https://picsum.photos/seed/horeca-news-1/600/400",
  },
  {
    title: "Registration opens for the first Somali HORECA Expo",
    date: "July 2026",
    photo: "https://picsum.photos/seed/horeca-news-2/600/400",
  },
  {
    title: "Business Growth Network membership tiers announced",
    date: "July 2026",
    photo: "https://picsum.photos/seed/horeca-news-3/600/400",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero: full-width photo slider, no sidebar — matches the reference site's edge-to-edge banner */}
      <HeroSlider />

      {/* "Somali HORECA" platform explainer */}
      <PlatformIntro />

      {/* "Here's what's happening" */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="font-mono text-xs text-gold-dark">Here&apos;s what&apos;s happening</div>

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

          <div className="mt-8">
            <div className="flex items-baseline justify-between">
              <h3 className="text-sm font-semibold">Latest news</h3>
              <Link href="/resources" className="text-xs font-semibold text-gold-dark hover:opacity-80">
                View all →
              </Link>
            </div>
            <div className="mt-4 grid gap-5 md:grid-cols-3">
              {NEWS.map((n) => (
                <div
                  key={n.title}
                  className="overflow-hidden rounded-md bg-paper-dark transition hover:bg-gold/10"
                >
                  <div className="relative h-40 w-full">
                    <Image src={n.photo} alt="" fill className="object-cover" sizes="(min-width: 768px) 33vw, 100vw" />
                  </div>
                  <div className="p-4">
                    <div className="font-mono text-[11px] text-ink/50">{n.date}</div>
                    <h4 className="mt-1.5 text-base font-semibold leading-snug">{n.title}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sponsors strip */}
      <SponsorsStrip />

      {/* Final CTA */}
      <FinalCTA />
    </>
  );
}
