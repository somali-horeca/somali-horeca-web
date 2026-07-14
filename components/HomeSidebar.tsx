import FeaturedMembersBanner from "./FeaturedMembersBanner";
import ExpoCountdown from "./ExpoCountdown";

export default function HomeSidebar() {
  return (
    <div className="flex flex-col divide-y divide-ink/10 border-l border-ink/10">
      <div className="p-4">
        <FeaturedMembersBanner compact />
      </div>

      <div className="bg-paper-dark p-4">
        <ExpoCountdown compact />
      </div>

      <div className="p-4">
        <div className="font-mono text-xs text-gold-dark">Newsletter</div>
        <form className="mt-2 flex gap-1.5">
          <input
            type="email"
            required
            placeholder="Email"
            className="min-w-0 flex-1 rounded-sm border border-ink/15 bg-paper px-2.5 py-2 text-xs"
          />
          <button
            type="submit"
            className="shrink-0 rounded-sm bg-gold px-3 py-2 text-xs font-semibold text-ink hover:opacity-90"
          >
            Join
          </button>
        </form>
      </div>
    </div>
  );
}
