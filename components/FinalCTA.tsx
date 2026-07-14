import Link from "next/link";

export default function FinalCTA() {
  return (
    <section className="bg-paper-dark px-6 py-16">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-serif text-2xl font-semibold text-ink md:text-3xl">
          Ready to grow your hospitality business?
        </h2>
        <div className="mt-7 flex flex-wrap justify-center gap-2.5">
          <Link href="/directory" className="rounded-sm bg-red px-5 py-2.5 text-sm font-semibold text-paper hover:opacity-90">
            Join directory
          </Link>
          <Link href="/membership" className="rounded-sm bg-gold px-5 py-2.5 text-sm font-semibold text-ink hover:opacity-90">
            Become member
          </Link>
          <Link href="/expo" className="rounded-sm border border-ink/30 px-5 py-2.5 text-sm font-semibold text-ink hover:bg-ink/5">
            Register expo
          </Link>
        </div>
      </div>
    </section>
  );
}
