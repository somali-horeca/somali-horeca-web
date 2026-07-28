import Link from "next/link";
import Image from "next/image";

const SOCIAL_LINKS = [
  {
    label: "Facebook",
    href: "https://facebook.com",
    path: "M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12z",
  },
  {
    label: "Instagram",
    href: "https://instagram.com",
    path: "M12 2c2.72 0 3.06.01 4.12.06 1.06.05 1.79.22 2.42.46.66.26 1.22.6 1.77 1.15.55.55.89 1.11 1.15 1.77.24.63.41 1.36.46 2.42C21.99 8.94 22 9.28 22 12s-.01 3.06-.06 4.12c-.05 1.06-.22 1.79-.46 2.42a4.9 4.9 0 0 1-1.15 1.77 4.9 4.9 0 0 1-1.77 1.15c-.63.24-1.36.41-2.42.46C15.06 21.99 14.72 22 12 22s-3.06-.01-4.12-.06c-1.06-.05-1.79-.22-2.42-.46a4.9 4.9 0 0 1-1.77-1.15 4.9 4.9 0 0 1-1.15-1.77c-.24-.63-.41-1.36-.46-2.42C2.01 15.06 2 14.72 2 12s.01-3.06.06-4.12c.05-1.06.22-1.79.46-2.42.26-.66.6-1.22 1.15-1.77A4.9 4.9 0 0 1 5.44 2.5c.63-.24 1.36-.41 2.42-.46C8.94 2.01 9.28 2 12 2zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 8.25A3.25 3.25 0 1 1 12 8.75a3.25 3.25 0 0 1 0 6.5zm5.4-8.85a1.17 1.17 0 1 1 0-2.34 1.17 1.17 0 0 1 0 2.34z",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    path: "M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.15 1.45-2.15 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z",
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/252600000000",
    path: "M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.64.08-.3-.15-1.26-.46-2.39-1.48-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51-.17-.01-.37-.01-.57-.01-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.06 2.88 1.21 3.07.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.62.71.23 1.36.19 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35z",
  },
];

export default function Footer() {
  return (
    <footer className="border-t-2 border-gold bg-ink text-paper">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          <div>
            <Image src="/logo.png" alt="Somali HORECA" width={32} height={38} />
            <div className="mt-3 font-serif text-lg font-bold text-paper">Somali HORECA</div>
            <p className="mt-2 text-base text-paper/70">
              The digital infrastructure of Somalia&apos;s hospitality economy.
            </p>

            <div className="mt-5 flex gap-2.5">
              {SOCIAL_LINKS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-sm border border-paper/25 text-paper/80 transition hover:border-gold hover:text-gold"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-3 font-mono text-sm uppercase tracking-wider text-gold">
              Quick Links
            </div>
            <ul className="space-y-2.5 text-base">
              <li><Link href="/about" className="text-paper/75 hover:text-paper">About</Link></li>
              <li><Link href="/directory" className="text-paper/75 hover:text-paper">Directory</Link></li>
              <li><Link href="/expo" className="text-paper/75 hover:text-paper">Expo</Link></li>
              <li><Link href="/membership" className="text-paper/75 hover:text-paper">Membership</Link></li>
            </ul>
          </div>

          <div>
            <div className="mb-3 font-mono text-sm uppercase tracking-wider text-gold">Legal</div>
            <ul className="space-y-2.5 text-base">
              <li><Link href="/legal/privacy" className="text-paper/75 hover:text-paper">Privacy Policy</Link></li>
              <li><Link href="/legal/terms" className="text-paper/75 hover:text-paper">Terms of Service</Link></li>
              <li><Link href="/legal/cookies" className="text-paper/75 hover:text-paper">Cookie Policy</Link></li>
              <li><Link href="/faq" className="text-paper/75 hover:text-paper">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <div className="mb-3 font-mono text-sm uppercase tracking-wider text-gold">Contact</div>
            <ul className="space-y-2.5 text-base">
              <li className="text-paper/75">info@somalihoreca.com</li>
              <li className="text-paper/75">Mogadishu, Somalia</li>
              <li><Link href="/contact" className="text-paper/75 hover:text-paper">Contact Form →</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-paper/15 pt-6 text-center text-sm text-paper/50">
          © {new Date().getFullYear()} Somali HORECA. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
