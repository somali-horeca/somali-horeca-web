import Link from "next/link";
import HeroSlider from "@/components/HeroSlider";
import HomeSidebar from "@/components/HomeSidebar";
import NewsTicker from "@/components/NewsTicker";
import PlatformIntro from "@/components/PlatformIntro";
import PillarTiles from "@/components/PillarTiles";
import StatsBar from "@/components/StatsBar";
import FeaturedBusinesses from "@/components/FeaturedBusinesses";
import UpcomingExpoBanner from "@/components/UpcomingExpoBanner";
import SponsorsStrip from "@/components/SponsorsStrip";
import FinalCTA from "@/components/FinalCTA";
import { LAUNCHES } from "@/lib/launches-data";

const NEWS = [
  { title: "Somali HORECA Platform launches business directory beta", date: "July 2026" },
  { title: "Registration opens for the first Somali HORECA Expo", date: "July 2026" },
  { title: "Business Growth Network membership tiers announced", date: "July 2026" },
];

export default function Home() {
  return (
    <>
      {/* Hero: solid-color slider (left) + sidebar (right) — full width, no outer box */}
      <div className="mx-auto grid max-w-6xl md:grid-cols-[2.4fr_1fr]">
        <HeroSlider />
        <HomeSidebar />
      </div>

      {/* News ticker */}
      <div className="mx-auto max-w-6xl">
        <NewsTicker />
      </div>

      {/* "Somali HORECA" platform explainer */}
      <PlatformIntro />

      {/* "One Platform. Three Ways to Grow." */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="font-mono text-xs text-blue-dark">One Platform. Three Ways to Grow.</div>
          <h2 className="mt-2 font-serif text-xl font-semibold">Here&apos;s how we help you</h2>
          <div className="mt-5">
            <PillarTiles />
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <StatsBar />

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
            <div className="mt-4 grid gap-3 md:grid-cols-3">
              {NEWS.map((n) => (
                <div key={n.title} className="rounded-md p-4">
                  <div className="mb-2 h-20 rounded bg-blue-tint" />
                  <div className="font-mono text-[11px] text-ink/50">{n.date}</div>
                  <h4 className="mt-1 text-sm font-semibold">{n.title}</h4>
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
