export type Launch = {
  businessName: string;
  categorySlug: string;
  businessSlug: string;
  title: string;
  description: string;
  date: string;
};

// Placeholder — replace once real members start submitting launches.
// This is a Membership benefit: only paying members can post here.
export const LAUNCHES: Launch[] = [
  {
    businessName: "Horn Trade Supply",
    categorySlug: "beverage-flavor-suppliers",
    businessSlug: "horn-trade-supply",
    title: "New: Oat Milk Powder now in stock",
    description: "Added to the beverage ingredients range in response to café demand.",
    date: "July 2026",
  },
];
