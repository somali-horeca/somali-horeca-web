import Breadcrumbs from "@/components/Breadcrumbs";
import PagePlaceholder from "@/components/PagePlaceholder";

export default function Expomanual() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Expo", href: "/expo" }, { label: "Manual" }]} />
      <PagePlaceholder
        eyebrow="The Expo"
        title="Manual"
        description="Part of the Expo section — content to be added once real event details are confirmed."
        todo={["Add real content for this page once event details are finalized"]}
      />
    </>
  );
}
