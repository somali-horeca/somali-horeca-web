import Breadcrumbs from "@/components/Breadcrumbs";
import PagePlaceholder from "@/components/PagePlaceholder";

export default function Resources() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources" }]} />
      <PagePlaceholder
        eyebrow="Resource Centre"
        title="Industry Intelligence & Resources"
        description="A comprehensive library positioning Somali HORECA as the industry's thought leader."
        todo={[
          "Industry reports",
          "Business guides",
          "Investment publications",
          "Training materials",
          "Regulatory updates",
          "Best practice articles",
          "Success stories",
          "News and press releases",
        ]}
      />
    </>
  );
}
