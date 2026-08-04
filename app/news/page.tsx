import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
import { NEWS_ITEMS } from "@/lib/news-data";

export default function NewsPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "News" }]} />

      <section className="px-6 py-16">
        <div className="mx-auto max-w-[1400px]">
          <div className="font-mono text-xs text-gold-dark">Somali HORECA</div>
          <h1 className="mt-2 font-serif text-3xl font-bold md:text-4xl">News</h1>
          <p className="mt-3 max-w-2xl text-base text-ink/70">
            Updates on the platform, the Expo, sponsors, and the wider Somali hospitality industry.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {NEWS_ITEMS.map((n) => (
              <div
                key={n.slug}
                className="overflow-hidden rounded-md bg-paper-dark transition hover:bg-gold/10"
              >
                <div className="relative h-44 w-full">
                  <Image
                    src={n.photo}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="(min-width: 768px) 33vw, 100vw"
                  />
                </div>
                <div className="p-5">
                  <div className="font-mono text-[11px] text-ink/50">{n.date}</div>
                  <h3 className="mt-1.5 text-lg font-semibold leading-snug">{n.title}</h3>
                  <p className="mt-2 text-sm text-ink/70">{n.excerpt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
