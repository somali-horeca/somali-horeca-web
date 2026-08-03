import Link from "next/link";

export default function UpcomingExpoBanner() {
  return (
    <div className="rounded-md bg-blue p-5 text-paper">
      <h3 className="text-sm font-semibold">Somali HORECA Expo 2026</h3>
      <p className="mt-1 text-xs text-blue-tint">
        14–16 March 2027 · Mogadishu Convention Centre
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        <Link href="/expo" className="rounded-sm bg-red px-4 py-2 text-xs font-semibold text-paper hover:opacity-90">
          Register
        </Link>
        <Link href="/expo/exhibitor-registration" className="rounded-sm bg-red px-4 py-2 text-xs font-semibold text-paper hover:opacity-90">
          Become exhibitor
        </Link>
        <Link href="/expo/sponsorship" className="rounded-sm bg-red px-4 py-2 text-xs font-semibold text-paper hover:opacity-90">
          Sponsor expo
        </Link>
      </div>
    </div>
  );
}
