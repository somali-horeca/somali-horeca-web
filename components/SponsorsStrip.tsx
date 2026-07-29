import Image from "next/image";
import LogoMarquee from "./LogoMarquee";

export default function SponsorsStrip() {
  return (
    <section className="border-y-2 border-gold bg-sponsor-bg px-6 py-14 text-paper">
      <div className="mx-auto max-w-6xl">
        <div className="text-glow text-center font-mono text-lg font-bold uppercase tracking-wider text-paper">
          Sponsors
        </div>
        <h2 className="text-glow mt-2 text-center font-serif text-4xl font-bold text-paper">
          Backed by the industry
        </h2>

        <div className="mt-10 space-y-10">
          {/* Diamond: kept as a still showcase (not scrolling) since it's
              the top tier — a shimmer sweep + sparkle mark it as special
              rather than blending into a moving row like the others.
              PLACEHOLDER PHOTOS — swap for real sponsor logo files. */}
          <div>
            <div className="text-glow mb-3 text-center text-lg font-bold uppercase tracking-wider text-paper">
              Diamond Sponsors
            </div>
            <div className="mx-auto flex max-w-3xl flex-wrap justify-center gap-5">
              {[1, 2].map((i) => (
                <div
                  key={i}
                  style={{ animationDelay: `${i * 0.15}s` }}
                  className="animate-logo-in relative flex h-24 w-48 items-center justify-center overflow-hidden rounded-md border-2 border-[#B9E4F5] shadow-[0_0_20px_rgba(185,228,245,0.15)]"
                >
                  <Image
                    src={`https://picsum.photos/seed/sponsor-diamond-${i}/400/220`}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="192px"
                  />
                  <svg className="absolute right-2 top-2 z-10 opacity-80" width="14" height="14" viewBox="0 0 24 24" fill="#B9E4F5">
                    <path d="M12 0l2.2 8.8L23 11l-8.8 2.2L12 22l-2.2-8.8L1 11l8.8-2.2z" />
                  </svg>
                  <div className="animate-diamond-shimmer absolute inset-0 z-10 bg-gradient-to-r from-transparent via-[#B9E4F5]/25 to-transparent" />
                </div>
              ))}
            </div>
          </div>

          {/* Platinum, Gold, Silver: auto-scrolling logo marquees with real
              placeholder photos, like the reference site's rotating
              sponsor carousels. */}
          <div>
            <div className="text-glow mb-3 text-center text-lg font-bold uppercase tracking-wider text-paper">
              Platinum Sponsors
            </div>
            <LogoMarquee count={6} tileBorder="border-[#E5E4E2]" seedPrefix="sponsor-platinum" size="md" />
          </div>

          <div>
            <div className="text-glow mb-3 text-center text-lg font-bold uppercase tracking-wider text-paper">
              Gold Sponsors
            </div>
            <LogoMarquee count={8} tileBorder="border-gold" seedPrefix="sponsor-gold" size="md" reverse />
          </div>

          <div>
            <div className="text-glow mb-3 text-center text-lg font-bold uppercase tracking-wider text-paper">
              Silver Sponsors
            </div>
            <LogoMarquee count={8} tileBorder="border-[#C0C0C0]" seedPrefix="sponsor-silver" size="md" />
          </div>
        </div>
      </div>
    </section>
  );
}
