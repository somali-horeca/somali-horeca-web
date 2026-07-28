import Link from "next/link";
import Image from "next/image";

export default function PlatformIntro() {
  return (
    <section className="bg-ink px-6 py-16 text-paper">
      <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2">
        <div>
          <div className="font-mono text-xs uppercase tracking-wider text-gold">
            About Somali HORECA
          </div>
          <h2 className="mt-2 font-serif text-3xl font-semibold md:text-4xl">
            Somalia&apos;s first integrated hospitality platform
          </h2>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-paper/75">
            Somali HORECA connects hotels, restaurants, suppliers, and investors through a
            searchable business directory, a growth network for promotion, and an annual
            exhibition where the industry meets face-to-face. Built for Somalia&apos;s hospitality
            economy, by people who know it.
          </p>
          <Link
            href="/about"
            className="mt-6 inline-block rounded-sm border border-paper/40 px-5 py-2.5 text-base font-semibold text-paper hover:bg-paper/10"
          >
            Read More
          </Link>
        </div>

        {/* PLACEHOLDER PHOTO from Lorem Picsum — swap for a real event/venue photo */}
        <div className="relative h-56 w-full overflow-hidden rounded-md md:h-72">
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
