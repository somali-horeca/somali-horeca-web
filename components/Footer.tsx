import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-ink/15 bg-paper-dark">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          <div>
            <Image src="/logo.png" alt="Somali HORECA" width={32} height={38} />
            <div className="mt-3 font-serif text-lg font-bold text-ink">Somali HORECA</div>
            <p className="mt-2 text-sm text-ink/70">
              The digital infrastructure of Somalia&apos;s hospitality economy.
            </p>
          </div>

          <div>
            <div className="mb-3 font-mono text-xs uppercase tracking-wider text-red">
              Quick Links
            </div>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="opacity-75 hover:opacity-100">About</Link></li>
              <li><Link href="/directory" className="opacity-75 hover:opacity-100">Directory</Link></li>
              <li><Link href="/expo" className="opacity-75 hover:opacity-100">Expo</Link></li>
              <li><Link href="/membership" className="opacity-75 hover:opacity-100">Membership</Link></li>
            </ul>
          </div>

          <div>
            <div className="mb-3 font-mono text-xs uppercase tracking-wider text-red">Legal</div>
            <ul className="space-y-2 text-sm">
              <li><Link href="/legal/privacy" className="opacity-75 hover:opacity-100">Privacy Policy</Link></li>
              <li><Link href="/legal/terms" className="opacity-75 hover:opacity-100">Terms of Service</Link></li>
              <li><Link href="/legal/cookies" className="opacity-75 hover:opacity-100">Cookie Policy</Link></li>
              <li><Link href="/faq" className="opacity-75 hover:opacity-100">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <div className="mb-3 font-mono text-xs uppercase tracking-wider text-red">Contact</div>
            <ul className="space-y-2 text-sm">
              <li className="opacity-75">info@somalihoreca.com</li>
              <li className="opacity-75">Mogadishu, Somalia</li>
              <li><Link href="/contact" className="opacity-75 hover:opacity-100">Contact Form →</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-ink/15 pt-6 text-center text-xs text-ink/50">
          © {new Date().getFullYear()} Somali HORECA. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
