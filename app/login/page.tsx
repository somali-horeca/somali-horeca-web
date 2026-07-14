import PagePlaceholder from "@/components/PagePlaceholder";

export default function Login() {
  return (
    <PagePlaceholder
      eyebrow="Member Portal"
      title="Secure Member Login"
      description="Authenticated dashboard for registered members — company profile, leads, event registration."
      todo={[
        "Authentication system needed (e.g. Supabase Auth, Clerk, or NextAuth)",
        "Company dashboard (profile management)",
        "Lead tracking view",
        "Event registration status",
        "Membership renewal / billing",
        "Messages & notifications",
        "This is a real software feature — not a simple page, plan separately",
      ]}
    />
  );
}
