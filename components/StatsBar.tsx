const STATS = [
  { number: "500+", label: "Businesses" },
  { number: "27", label: "Categories" },
  { number: "3", label: "Pillars" },
  { number: "2026", label: "Launch" },
];

export default function StatsBar() {
  return (
    <section>
      <div className="mx-auto grid max-w-5xl grid-cols-2 md:grid-cols-4">
        {STATS.map((s) => (
          <div
            key={s.label}
            className="px-4 py-6 text-center"
          >
            <div className="font-mono text-2xl font-semibold text-gold-dark">{s.number}</div>
            <div className="mt-1 text-xs text-ink/60">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
