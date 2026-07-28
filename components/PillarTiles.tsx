import Link from "next/link";

const PILLARS = [
  {
    name: "Business directory",
    href: "/directory",
    desc: "Find verified suppliers and hospitality businesses.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 100 100">
        <path d="M10 55 L10 90 L45 90 L45 40 L27.5 15 Z" fill="#DF1D25" />
        <rect x="20" y="60" width="14" height="26" rx="3" fill="#fff" />
        <circle cx="27" cy="66" r="3" fill="#DF1D25" />
      </svg>
    ),
  },
  {
    name: "Somali HORECA Expo",
    href: "/expo",
    desc: "Meet leading buyers, exhibitors and partners.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 100 100">
        <path d="M35 55 L35 90 L65 90 L65 40 L50 15 Z" fill="#4387CE" />
        <rect x="47" y="55" width="6" height="20" fill="#fff" />
        <path d="M43 15 L43 40 M50 15 L50 35 M57 15 L57 40" stroke="#fff" strokeWidth="4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "Growth network",
    href: "/membership",
    desc: "Promote your business and build partnerships.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 100 100">
        <path d="M55 55 L55 90 L90 90 L90 40 L72.5 15 Z" fill="#FAA70D" />
        <path d="M65 65 h16 v10 a8 8 0 0 1 -16 0 Z" fill="#fff" />
        <path d="M81 68 q6 0 6 6 t-6 6" stroke="#fff" strokeWidth="3" fill="none" />
      </svg>
    ),
  },
];

export default function PillarTiles() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {PILLARS.map((p) => (
        <Link
          key={p.name}
          href={p.href}
          className="rounded-md border border-ink/15 p-6 transition hover:border-gold"
        >
          {p.icon}
          <h3 className="mt-3 text-lg font-semibold text-ink">{p.name}</h3>
          <p className="mt-1 text-base text-ink/60">{p.desc}</p>
        </Link>
      ))}
    </div>
  );
}
