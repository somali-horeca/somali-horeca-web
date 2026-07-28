import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";

const SUBPAGES = [
  { href: "/expo/exhibitors", label: "Exhibitors", tone: "bg-red" },
  { href: "/expo/exhibitor-registration", label: "Exhibitor Registration", tone: "bg-gold-dark" },
  { href: "/expo/manual", label: "Exhibition Manual", tone: "bg-ink" },
  { href: "/expo/floor-plan", label: "Floor Plan", tone: "bg-blue-dark" },
  { href: "/expo/post-show-report", label: "Post-Show Report", tone: "bg-red-dark" },
  { href: "/expo/media", label: "Media Centre", tone: "bg-gold-dark" },
  { href: "/expo/sponsorship", label: "Sponsorship", tone: "bg-ink" },
];

const TODO = [
  "Event overview — dates, venue",
  "Conference agenda + speaker profiles",
  "Product launches, networking events, media centre",
  "Post-event highlights, photos, videos (stays live year-round)",
];

export default function Expo() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Expo" }]} />

      {/* Expo gets its own blue band, since blue is the Expo pillar's brand color
          on the homepage — distinct from the black About section and the
          plain-paper pages elsewhere on the site. */}
      <section className="bg-blue px-6 py-16 text-paper">
        <div className="mx-auto max-w-4xl">
          <div className="font-mono text-xs uppercase tracking-[0.16em] text-blue-tint">
            The Expo
          </div>
          <h1 className="mt-3 font-serif text-3xl font-bold md:text-4xl">
            Somali HORECA Expo
          </h1>
          <p className="mt-4 max-w-2xl text-paper/85">
            Somalia&apos;s premier hospitality exhibition and conference.
          </p>

          <div className="mt-10 rounded-md border border-paper/25 bg-ink/20 p-6">
            <div className="mb-3 font-mono text-xs uppercase tracking-wider text-gold">
              To build on this page
            </div>
            <ul className="list-inside list-disc space-y-2 text-sm text-paper/85">
              {TODO.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Badge grid sits on a soft blue-tinted band, tying back to the Expo
          section above without repeating the same solid blue. */}
      <section className="bg-blue-tint/25 px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <div className="mb-6 text-center font-mono text-xs uppercase tracking-wider text-red">
            Expo sections
          </div>
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
            {SUBPAGES.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="group flex w-24 flex-col items-center gap-2.5 text-center sm:w-28"
              >
                <span
                  className={`flex h-24 w-24 items-center justify-center rounded-full text-paper shadow-sm transition group-hover:scale-105 sm:h-28 sm:w-28 ${s.tone}`}
                >
                  <span className="px-2 text-xs font-semibold leading-tight sm:text-sm">
                    {s.label}
                  </span>
                </span>
                <span className="text-xs font-medium text-ink/70 group-hover:text-ink">
                  {s.label} →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
