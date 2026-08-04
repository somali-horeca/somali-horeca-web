import Link from "next/link";
import RotatingLogoTile from "./RotatingLogoTile";

// PLACEHOLDER PHOTOS from Lorem Picsum — swap for real event/venue photos.
// The box itself stays fixed in place; only the photo inside crossfades,
// same pattern used for the sponsor logo tiles.
const ABOUT_PHOTOS = [
  "https://picsum.photos/seed/horeca-about/900/600",
  "https://picsum.photos/seed/horeca-about-2/900/600",
  "https://picsum.photos/seed/horeca-about-3/900/600",
];

export default function PlatformIntro() {
  return (
    <section className="bg-blue-dark px-4 py-12 text-paper sm:px-6">
      <div className="mx-auto grid max-w-[1400px] items-center gap-8 md:grid-cols-2">
        <div>
          <h2 className="font-serif text-3xl font-bold text-gold md:text-4xl">
            About Somali HORECA
          </h2>
          <p className="mt-2 max-w-xl text-lg font-medium text-paper/90">
            Somalia&apos;s first integrated hospitality platform
          </p>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-paper/75">
            Somali HORECA connects hotels, restaurants, suppliers, and investors through a
            searchable business directory, a growth network for promotion, and an annual
            exhibition where the industry meets face-to-face. Built for Somalia&apos;s hospitality
            economy, by people who know it.
          </p>
          <Link
            href="/about"
            className="mt-6 inline-block rounded-sm bg-red px-5 py-2.5 text-base font-semibold text-paper hover:opacity-90"
          >
            Read More
          </Link>
        </div>

        {/* Rotating slideshow — box stays fixed, photo inside crossfades */}
        <RotatingLogoTile
          images={ABOUT_PHOTOS}
          tileBorder="border-gold/25"
          size="h-56 w-full md:h-72"
          intervalMs={4000}
        />
      </div>
    </section>
  );
}
