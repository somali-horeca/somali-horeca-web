import Breadcrumbs from "@/components/Breadcrumbs";

const PLACEHOLDER_PHOTOS = [
  "Opening Ceremony",
  "Exhibitor Booths",
  "Culinary Demonstrations",
  "Award Ceremony",
  "Networking Reception",
  "Conference Sessions",
];

export default function ExpoMedia() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Expo", href: "/expo" },
          { label: "Media Centre" },
        ]}
      />
      <section className="px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <div className="mb-3 font-mono text-xs uppercase tracking-[0.16em] text-red">
            The Expo
          </div>
          <h1 className="font-serif text-3xl font-bold md:text-4xl">Media Centre</h1>
          <p className="mt-4 max-w-2xl text-ink/70">
            Photos, videos, and press coverage from past events — posted here after each Expo
            and kept live year-round, matching Section 5 of the vision document.
          </p>

          <div className="mt-6 rounded-md border border-dashed border-ink/25 bg-paper-dark p-5 text-sm text-ink/70">
            <strong className="text-gold-dark">No event has happened yet.</strong> This page
            will fill in with real captioned photos, videos, and press coverage after the first
            Expo — the same content that also feeds the homepage&apos;s rotating banner.
          </div>

          <h2 className="mt-12 font-serif text-xl font-semibold">Photo Gallery</h2>
          <div className="mt-4 grid grid-cols-2 gap-x-3 gap-y-5 sm:grid-cols-3">
            {PLACEHOLDER_PHOTOS.map((caption) => (
              <div key={caption}>
                <div className="flex h-32 items-center justify-center rounded-md bg-gradient-to-br from-blue to-ink font-mono text-xs text-paper/50">
                  Photo
                </div>
                <div className="mt-2 text-center text-sm text-ink/70">{caption}</div>
              </div>
            ))}
          </div>

          <h2 className="mt-12 font-serif text-xl font-semibold">Video Gallery</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {["Event Highlights Reel", "Opening Ceremony"].map((caption) => (
              <div key={caption}>
                <div className="flex h-40 items-center justify-center rounded-md bg-gradient-to-br from-gold-dark to-ink font-mono text-xs text-paper/50">
                  Video
                </div>
                <div className="mt-2 text-center text-sm text-ink/70">{caption}</div>
              </div>
            ))}
          </div>

          <h2 className="mt-12 font-serif text-xl font-semibold">Press &amp; News</h2>
          <div className="mt-4 rounded-md border border-ink/15 bg-paper-dark p-6 text-sm text-ink/60">
            Press releases and news mentions will be listed here once available.
          </div>
        </div>
      </section>
    </>
  );
}
