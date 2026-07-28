import Link from "next/link";
import Image from "next/image";
import { BUSINESSES, getCategory } from "@/lib/directory-data";

// PLACEHOLDER PHOTOS from Lorem Picsum — swap for each business's real
// storefront/product photography once available.
const PLACEHOLDER_PHOTOS = [
  "https://picsum.photos/seed/horeca-biz-1/600/400",
  "https://picsum.photos/seed/horeca-biz-2/600/400",
  "https://picsum.photos/seed/horeca-biz-3/600/400",
];

export default function FeaturedBusinesses() {
  const businesses = BUSINESSES.slice(0, 3);

  return (
    <div>
      <div className="flex items-baseline justify-between">
        <h3 className="font-serif text-2xl font-semibold">Featured businesses</h3>
        <Link href="/directory" className="text-sm font-semibold text-gold-dark hover:opacity-80">
          View directory →
        </Link>
      </div>

      <div className="mt-6 grid gap-6 md:grid-cols-3">
        {businesses.map((b, i) => {
          const category = getCategory(b.categorySlug);
          return (
            <Link
              key={b.slug}
              href={`/directory/${b.categorySlug}/${b.slug}`}
              className="group overflow-hidden rounded-md bg-paper-dark transition hover:bg-gold/10"
            >
              <div className="relative h-44 w-full">
                <Image
                  src={PLACEHOLDER_PHOTOS[i % PLACEHOLDER_PHOTOS.length]}
                  alt=""
                  fill
                  className="object-cover transition group-hover:scale-105"
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
              </div>
              <div className="p-5">
                <h4 className="text-xl font-semibold">{b.name}</h4>
                <div className="mt-1 text-base text-ink/50">{category?.name}</div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
