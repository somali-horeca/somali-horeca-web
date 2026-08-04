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

// TEMPORARY DEMO DATA — client confirmed the real exhibitor/participant and
// speaker/host list isn't finalized yet. Swap these arrays for the real
// roster once the client provides it.
const PARTICIPANTS = [
  { name: "Barwaaqo Hotel Group", type: "Hotel Chain" },
  { name: "Hargeisa Fresh Suppliers", type: "Food Supplier" },
  { name: "Banadir Catering Co.", type: "Catering" },
  { name: "Golis Coffee Roasters", type: "Beverage Supplier" },
  { name: "Juba Restaurant Collective", type: "Restaurant Group" },
  { name: "Horn Hospitality Equipment", type: "Equipment Supplier" },
];

const HOSTS = [
  { name: "Amina Yusuf", role: "Founder, Barwaaqo Hotel Group" },
  { name: "Abdirahman Hassan", role: "Somalia Ministry of Tourism" },
  { name: "Faadumo Cali", role: "Hospitality Investment Advisor" },
  { name: "Mohamed Warsame", role: "Somali HORECA Platform Lead" },
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

          <div className="mt-8 flex flex-wrap gap-6 rounded-md border border-paper/25 bg-ink/20 p-6 text-sm">
            <div>
              <div className="font-mono text-xs uppercase tracking-wider text-gold">Location</div>
              <div className="mt-1 font-semibold">Mogadishu Convention Centre</div>
            </div>
            <div>
              <div className="font-mono text-xs uppercase tracking-wider text-gold">Date</div>
              <div className="mt-1 font-semibold">14–16 March 2027</div>
            </div>
          </div>

          {/* DEMO DATA — see PARTICIPANTS above; swap for the real exhibitor
              roster once the client provides it. */}
          <div className="mt-12">
            <h2 className="font-serif text-xl font-bold text-gold">Yaa kasoo qaybgalaayo</h2>
            <p className="mt-1 text-sm text-paper/70">Participating businesses (demo data)</p>
            <div className="mt-5 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
              {PARTICIPANTS.map((p) => (
                <div key={p.name} className="rounded-md border border-paper/20 bg-paper/10 p-4">
                  <div className="font-semibold">{p.name}</div>
                  <div className="mt-1 font-mono text-xs uppercase tracking-wider text-blue-tint">
                    {p.type}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* DEMO DATA — see HOSTS above; swap for the real speaker/host
              lineup once the client provides it. */}
          <div className="mt-12">
            <h2 className="font-serif text-xl font-bold text-gold">Yaa jeedinaayo</h2>
            <p className="mt-1 text-sm text-paper/70">Speakers &amp; hosts (demo data)</p>
            <div className="mt-5 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
              {HOSTS.map((h) => (
                <div key={h.name} className="rounded-md border border-paper/20 bg-paper/10 p-4">
                  <div className="font-semibold">{h.name}</div>
                  <div className="mt-1 text-xs text-paper/70">{h.role}</div>
                </div>
              ))}
            </div>
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
