const STATS = [
  {
    number: "500+",
    label: "Businesses",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
        <path d="M3 21V8l9-5 9 5v13" strokeLinejoin="round" />
        <path d="M9 21v-6h6v6" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    number: "27",
    label: "Categories",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
      </svg>
    ),
  },
  {
    number: "3",
    label: "Pillars",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
        <path d="M4 21V9l4-4 4 4v12M12 21V9l4-4 4 4v12" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    number: "2026",
    label: "Launch",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
        <path d="M5 3v4M15 3v4M4 8h16M5 5h14a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function StatsBar() {
  return (
    <section className="bg-blue text-paper">
      <div className="mx-auto grid max-w-5xl grid-cols-2 md:grid-cols-4">
        {STATS.map((s) => (
          <div key={s.label} className="flex flex-col items-center gap-2 px-4 py-10 text-center">
            <span className="text-gold">{s.icon}</span>
            <div className="font-mono text-4xl font-bold text-gold">{s.number}</div>
            <div className="text-sm text-paper/75">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
