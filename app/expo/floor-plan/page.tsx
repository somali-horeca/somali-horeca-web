import Breadcrumbs from "@/components/Breadcrumbs";
import PagePlaceholder from "@/components/PagePlaceholder";

export default function Expofloorplan() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Expo", href: "/expo" }, { label: "Floor Plan" }]} />
      <PagePlaceholder
        eyebrow="The Expo"
        title="Floor Plan"
        description="Part of the Expo section — content to be added once real event details are confirmed."
        todo={["Add real content for this page once event details are finalized"]}
      />
    </>
  );
}
