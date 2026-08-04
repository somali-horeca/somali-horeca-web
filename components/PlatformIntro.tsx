import Link from "next/link";
import Image from "next/image";

export default function PlatformIntro() {
  return (
    <section className="bg-blue-dark px-6 py-16 text-paper">
      <div className="mx-auto grid max-w-[1400px] items-center gap-10 px-2 md:grid-cols-2">
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

        {/* PLACEHOLDER PHOTO from Lorem Picsum — swap for a real event/venue photo */}
        <div className="relative h-56 w-full overflow-hidden rounded-md border border-gold/25 md:h-72">
          <Image
            src="https://picsum.photos/seed/horeca-about/900/600"
            alt=""
            fill
            className="object-cover"
            sizes="(min-width: 768px) 50vw, 100vw"
          />
        </div>
      </div>
    </section>
  );
}
