const TIERS = ["Diamond", "Platinum", "Gold", "Silver", "Bronze"];

export default function SponsorsStrip() {
  return (
    <section className="border-y border-ink/10 px-6 py-8 text-center">
      <div className="font-mono text-[11px] uppercase tracking-wider text-ink/40">Sponsors</div>
      <div className="mt-3 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
        {TIERS.map((t) => (
          <span
            key={t}
            className={t === "Diamond" ? "text-sm font-semibold text-gold-dark" : "text-xs text-ink/60"}
          >
            {t}
          </span>
        ))}
      </div>
    </section>
  );
}
