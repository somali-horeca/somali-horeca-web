import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function About() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "About" }]} />

      <section className="px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <div className="mb-8 flex flex-col items-center text-center">
            <Image src="/logo.png" alt="Somali HORECA" width={72} height={86} />
          </div>

          <div className="mb-3 font-mono text-xs uppercase tracking-[0.16em] text-red">
            About
          </div>
          <h1 className="font-serif text-3xl font-bold md:text-4xl">Who We Are</h1>

          <p className="mt-8 text-lg text-ink/80">
            Somali HORECA is the digital gateway to Somalia&apos;s hospitality ecosystem. It
            connects businesses, facilitates trade, generates investment opportunities,
            promotes innovation, and delivers market intelligence, all through a single,
            integrated platform.
          </p>

          <h2 className="mt-12 font-serif text-2xl font-semibold">Our Vision</h2>
          <p className="mt-4 text-ink/75">
            To become the digital backbone of Somalia&apos;s hospitality economy: the trusted
            industry hub that brings together businesses, investors, financial institutions,
            development partners, and policymakers in one integrated ecosystem. Over time, Somali
            HORECA aims to be the primary gateway for business discovery, collaboration,
            investment, knowledge sharing, and innovation across the sector.
          </p>

          <h2 className="mt-10 font-serif text-2xl font-semibold">Our Mission</h2>
          <p className="mt-4 text-ink/75">Somali HORECA exists to:</p>
          <ul className="mt-3 list-inside list-disc space-y-2 text-ink/75">
            <li>Connect all stakeholders across Somalia&apos;s hospitality value chain</li>
            <li>Facilitate business-to-business trade and partnerships</li>
            <li>Promote investment and financing opportunities</li>
            <li>Deliver market intelligence and industry knowledge</li>
            <li>Support the sustainable growth of the sector through membership, the annual Expo, and shared industry resources</li>
          </ul>

          <h2 className="mt-10 font-serif text-2xl font-semibold">Why We Exist</h2>
          <p className="mt-4 text-ink/75">
            Somalia&apos;s hospitality sector, including hotels, restaurants, cafés, suppliers,
            and the many professional and financial services around them, has never had a
            single, trusted place to find each other, do business, and grow together. Somali
            HORECA was built to be exactly that: a neutral, year-round platform built for the
            whole industry, not just one part of it.
          </p>

          <div className="mt-10 rounded-md border-l-4 border-gold bg-paper-dark p-6">
            <h3 className="font-serif text-lg font-semibold">A Neutral Industry Platform</h3>
            <p className="mt-3 text-ink/75">
              Somali HORECA does not compete with the businesses listed on it. Our role is to
              connect, facilitate, and advocate for the industry, never to compete against the
              members who make it up. Every feature on this platform is built to help hospitality
              businesses find customers, suppliers, and partners, not to take business away from
              them.
            </p>
          </div>

          <h2 className="mt-12 font-serif text-2xl font-semibold">Governance &amp; Advisory Structure</h2>
          <p className="mt-4 text-ink/70">
            <em>To be added once confirmed: governance structure, advisory board members, and
            oversight details.</em>
          </p>

          <h2 className="mt-10 font-serif text-2xl font-semibold">Strategic Partners</h2>
          <p className="mt-4 text-ink/70">
            <em>To be added once confirmed: partner organizations, logos, and collaboration
            details.</em>
          </p>
        </div>
      </section>
    </>
  );
}
