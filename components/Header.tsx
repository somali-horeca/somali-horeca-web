import Link from "next/link";
import Image from "next/image";

const NAV_LINKS = [
  { href: "/about", label: "About" },
  { href: "/directory", label: "Directory" },
  { href: "/expo", label: "Expo" },
  { href: "/membership", label: "Membership" },
  { href: "/resources", label: "Resources" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-ink/15 bg-paper">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.png" alt="Somali HORECA" width={38} height={45} priority />
          <div>
            <div className="font-serif text-lg font-bold leading-none text-ink">
              Somali HORECA
            </div>
            <div className="mt-1 font-mono text-[9px] tracking-[0.14em] text-red">
              PLATFORM · EXPO · BUSINESS GROWTH NETWORK
            </div>
          </div>
        </Link>

        <nav className="hidden gap-7 text-sm font-medium md:flex">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="opacity-75 hover:opacity-100">
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/login"
          className="rounded-sm bg-ink px-5 py-2.5 text-sm font-semibold text-paper hover:opacity-90"
        >
          Member Login
        </Link>
      </div>
    </header>
  );
}
