import PagePlaceholder from "@/components/PagePlaceholder";

export default function Contact() {
  return (
    <PagePlaceholder
      eyebrow="Contact & Community"
      title="Get in Touch"
      description="Contact information, inquiry form, and newsletter subscription."
      todo={[
        "Inquiry form (decide: email, WhatsApp, or database-backed)",
        "Office location + map",
        "Newsletter signup (needs email service, e.g. Mailchimp/Resend)",
        "Social media links",
      ]}
    />
  );
}
