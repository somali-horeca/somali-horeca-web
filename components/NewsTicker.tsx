const TICKER_ITEMS = [
  "Registration opens for the first Somali HORECA Expo",
  "Business Growth Network membership tiers announced",
  "New directory categories now live",
];

export default function NewsTicker() {
  return (
    <div className="flex items-center overflow-hidden rounded-md border border-ink/15">
      <div className="shrink-0 bg-red px-4 py-2.5 font-mono text-xs font-bold uppercase tracking-wide text-paper">
        Latest news
      </div>
      <div className="flex-1 overflow-hidden bg-gold/20 px-4 py-2.5">
        <div className="whitespace-nowrap text-sm text-ink">
          {TICKER_ITEMS.join("   •   ")}
        </div>
      </div>
    </div>
  );
}
