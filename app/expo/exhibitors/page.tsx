import Breadcrumbs from "@/components/Breadcrumbs";
import PagePlaceholder from "@/components/PagePlaceholder";

export default function Expoexhibitors() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Expo", href: "/expo" }, { label: "Exhibitors" }]} />
      <PagePlaceholder
        eyebrow="The Expo"
        title="Exhibitors"
        description="Part of the Expo section — content to be added once real event details are confirmed."
        todo={["Add real content for this page once event details are finalized"]}
      />
    </>
  );
}
