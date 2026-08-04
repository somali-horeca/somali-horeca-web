import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";

// PLACEHOLDER PHOTOS from Lorem Picsum — swap for real event/venue photos
// once available.
const GALLERY_PHOTOS = Array.from({ length: 12 }).map(
  (_, i) => `https://picsum.photos/seed/horeca-gallery-${i + 1}/600/600`
);

export default function GalleryPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Gallery" }]} />

      <section className="px-6 py-16">
        <div className="mx-auto max-w-[1400px]">
          <div className="font-mono text-xs text-gold-dark">Somali HORECA</div>
          <h1 className="mt-2 font-serif text-3xl font-bold md:text-4xl">Gallery</h1>
          <p className="mt-3 max-w-2xl text-base text-ink/70">
            Photos from the platform, member businesses, and the Somali HORECA Expo.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
            {GALLERY_PHOTOS.map((photo, i) => (
              <div key={photo} className="relative aspect-square overflow-hidden rounded-md">
                <Image
                  src={photo}
                  alt=""
                  fill
                  className="object-cover transition hover:scale-105"
                  sizes="(min-width: 768px) 25vw, 50vw"
                  priority={i < 4}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
