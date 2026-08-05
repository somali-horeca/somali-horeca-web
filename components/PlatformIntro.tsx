import Link from "next/link";
import RotatingLogoTile from "./RotatingLogoTile";
import { getAboutUs } from "@/lib/sanity-queries";
import { urlFor } from "@/lib/sanity";

// FALLBACK PHOTOS — shown only if no Sanity About Us images exist yet.
const FALLBACK_ABOUT_PHOTOS = [
  "https://picsum.photos/seed/horeca-about/900/600",
  "https://picsum.photos/seed/horeca-about-2/900/600",
  "https://picsum.photos/seed/horeca-about-3/900/600",
];

const FALLBACK_TITLE = "About Somali HORECA";
const FALLBACK_TAGLINE = "Somalia's first integrated hospitality platform";
const FALLBACK_DESCRIPTION =
  "Somali HORECA connects hotels, restaurants, suppliers, and investors through a searchable business directory, a growth network for promotion, and an annual exhibition where the industry meets face-to-face. Built for Somalia's hospitality economy, by people who know it.";

export default async function PlatformIntro() {
  const aboutUs = await getAboutUs().catch(() => null);

  const title = aboutUs?.title || FALLBACK_TITLE;
  const tagline = aboutUs?.tagline || FALLBACK_TAGLINE;
  const description = aboutUs?.description || FALLBACK_DESCRIPTION;
  const photos =
    aboutUs?.bannerImages && aboutUs.bannerImages.length > 0
      ? aboutUs.bannerImages.map((img) => urlFor(img).width(900).height(600).fit("crop").url())
      : FALLBACK_ABOUT_PHOTOS;

  return (
    <section className="bg-blue-dark px-4 py-12 text-paper sm:px-6">
      <div className="mx-auto grid max-w-[1400px] items-center gap-8 md:grid-cols-2">
        <div>
          <h2 className="font-serif text-3xl font-bold text-gold md:text-4xl">{title}</h2>
          <p className="mt-2 max-w-xl text-lg font-medium text-paper/90">{tagline}</p>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-paper/75">{description}</p>
          <Link
            href="/about"
            className="mt-6 inline-block rounded-sm bg-red px-5 py-2.5 text-base font-semibold text-paper hover:opacity-90"
          >
            Read More
          </Link>
        </div>

        {/* Rotating slideshow — box stays fixed, photo inside crossfades */}
        <RotatingLogoTile
          images={photos}
          tileBorder="border-gold/25"
          size="h-56 w-full md:h-72"
          intervalMs={4000}
        />
      </div>
    </section>
  );
}
