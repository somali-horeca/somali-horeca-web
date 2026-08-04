import Link from "next/link";

type Crumb = { label: string; href?: string };

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="border-b border-ink/10 bg-paper-dark px-6 py-3">
      <ol className="mx-auto flex max-w-[1400px] flex-wrap items-center gap-2 font-mono text-xs text-ink/60">
        {items.map((item, i) => (
          <li key={item.label} className="flex items-center gap-2">
            {i > 0 && <span className="text-ink/30">/</span>}
            {item.href ? (
              <Link href={item.href} className="hover:text-gold-dark">
                {item.label}
              </Link>
            ) : (
              <span className="text-ink/80">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
