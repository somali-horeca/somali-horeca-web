import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import PagePlaceholder from "@/components/PagePlaceholder";

const SUBPAGES = [
  { href: "/expo/exhibitors", label: "Exhibitors" },
  { href: "/expo/exhibitor-registration", label: "Exhibitor Registration" },
  { href: "/expo/manual", label: "Exhibition Manual" },
  { href: "/expo/floor-plan", label: "Floor Plan" },
  { href: "/expo/post-show-report", label: "Post-Show Report" },
  { href: "/expo/media", label: "Media Centre" },
  { href: "/expo/sponsorship", label: "Sponsorship" },
];

export default function Expo() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Expo" }]} />
      <PagePlaceholder
        eyebrow="The Expo"
        title="Somali HORECA Expo"
        description="Somalia's premier hospitality exhibition and conference."
        todo={[
          "Event overview — dates, venue",
          "Conference agenda + speaker profiles",
          "Product launches, networking events, media centre",
          "Post-event highlights, photos, videos (stays live year-round)",
        ]}
      />
      <div className="mx-auto -mt-6 max-w-4xl px-6 pb-20">
        <div className="mb-3 font-mono text-xs uppercase tracking-wider text-red">
          Expo sections
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {SUBPAGES.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="rounded-md border border-ink/15 bg-paper-dark px-5 py-3 text-sm font-semibold hover:border-gold"
            >
              {s.label} →
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
