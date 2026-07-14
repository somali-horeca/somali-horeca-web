export type Category = {
  slug: string;
  name: string;
  code: string;
  count: number;
  group: string;
  subCategories?: string[];
};

export const CATEGORY_GROUPS = [
  "Core Hospitality Operations",
  "Supply Chain and Ingredients",
  "Equipment, Utilities and Infrastructure",
  "Infrastructure, Design and Media",
  "Technology & Financial Infrastructure",
  "Support Services and Logistics",
  "Strategy, Training & Sector Development",
] as const;

// Full 27-category, 7-group structure, matching the client's real directory list exactly.
// Counts are placeholder — replace once connected to Supabase.
export const CATEGORIES: Category[] = [
  // 1. Core Hospitality Operations
  { slug: "hotels-guest-houses", name: "Hotels and Guest Houses", code: "HTL", count: 0, group: "Core Hospitality Operations" },
  { slug: "restaurants-local-eateries", name: "Restaurants and Local Eateries", code: "RST", count: 0, group: "Core Hospitality Operations" },
  { slug: "cafes-tea-lounges", name: "Cafés and Tea Lounges", code: "CAF", count: 0, group: "Core Hospitality Operations" },
  { slug: "recreation-amusement-parks", name: "Recreation and Amusement Parks", code: "REC", count: 0, group: "Core Hospitality Operations" },
  { slug: "caterers-event-food", name: "Caterers and Event Food Services", code: "CAT", count: 0, group: "Core Hospitality Operations" },
  { slug: "bakeries-confectioneries", name: "Bakeries and Confectioneries", code: "BAK", count: 0, group: "Core Hospitality Operations" },

  // 2. Supply Chain and Ingredients
  {
    slug: "food-fresh-produce-suppliers", name: "Food and Fresh Produce Suppliers", code: "FOD", count: 0,
    group: "Supply Chain and Ingredients",
    subCategories: ["Meat, Poultry and Seafood Distributors", "Fresh Fruit and Vegetable Wholesalers", "Dry Goods and Staples", "Premium Bakery Specialities and Compound Chocolates", "Dairy Products Suppliers"],
  },
  {
    slug: "beverage-flavor-suppliers", name: "Beverage and Flavor Suppliers", code: "BEV", count: 1,
    group: "Supply Chain and Ingredients",
    subCategories: ["Green and Roasted Coffee Bean Wholesalers", "Premium Syrups, Sauces and Concentrates", "Bubble Tea Ingredients and Popping Boba", "Bottled Beverages and Juices"],
  },
  { slug: "uniform-apparel-suppliers", name: "Uniform & Apparel Suppliers", code: "UNI", count: 0, group: "Supply Chain and Ingredients" },

  // 3. Equipment, Utilities and Infrastructure
  {
    slug: "commercial-kitchen-equipment", name: "Commercial Kitchen and Hospitality Equipment", code: "KIT", count: 0,
    group: "Equipment, Utilities and Infrastructure",
    subCategories: ["Heavy Cooking Ranges and Ovens", "Professional Espresso Machines and Grinders", "Commercial Refrigeration and Cold Rooms", "Ice Machines and Bar Equipment"],
  },
  {
    slug: "hvac-electrical-contractors", name: "HVAC, Electrical & Engineering Contractors", code: "HVA", count: 0,
    group: "Equipment, Utilities and Infrastructure",
    subCategories: ["Commercial Air Conditioning (AC) Sales and Installation", "Solar Energy System Installers"],
  },
  {
    slug: "utilities-industrial-supplies", name: "Utilities and Critical Industrial Supplies", code: "UTL", count: 0,
    group: "Equipment, Utilities and Infrastructure",
    subCategories: ["Commercial Ice Plants and Cube Suppliers", "Bulk Water Filtration and Delivery Services", "Electric Power Companies and Energy Providers", "Internet Service Providers (ISPs) and Dedicated Fiber Contractors"],
  },
  {
    slug: "hospitality-furniture-fitout", name: "Hospitality Furniture & Fit-Out Suppliers", code: "FUR", count: 1,
    group: "Equipment, Utilities and Infrastructure",
    subCategories: ["Hotel Bedding & Mattresses", "Restaurant Tables & Seating"],
  },

  // 4. Infrastructure, Design and Media
  {
    slug: "interior-designers-stagers", name: "Interior Designers & Stagers", code: "INT", count: 0,
    group: "Infrastructure, Design and Media",
    subCategories: ["Restaurant & Café Ambiance Concept Creators", "Decorative Acoustic Wall Panels & Art Sourcing"],
  },
  {
    slug: "printing-packaging-branding", name: "Printing, Packaging and 3D Branding", code: "PRT", count: 0,
    group: "Infrastructure, Design and Media",
    subCategories: ["Custom Food and Coffee Packaging Manufacturers", "Branded Paper Cups and Takeaway Boxes", "Large-Format Outdoor Banners, 3D Illuminated and Channel Letter Signs", "Menu Design and High-Quality Printing"],
  },
  {
    slug: "social-media-marketing", name: "Social Media, Content & Marketing Agencies", code: "MKT", count: 0,
    group: "Infrastructure, Design and Media",
    subCategories: ["Food and Beverage Photography/Videography", "TikTok & Instagram Reel Content Creators", "Influencer Campaign Managers"],
  },

  // 5. Technology & Financial Infrastructure
  {
    slug: "hospitality-technology", name: "Hospitality Technology Providers", code: "TEC", count: 0,
    group: "Technology & Financial Infrastructure",
    subCategories: ["Point-of-Sale (POS) Hardware and Software"],
  },
  {
    slug: "financial-institutions", name: "Financial Institutions & Merchant Services", code: "FIN", count: 0,
    group: "Technology & Financial Infrastructure",
    subCategories: ["Commercial Banking", "Mobile Wallet and Digital Payment Integrations (e.g., WAAFI)", "Micro-Financing for Hospitality SMEs"],
  },

  // 6. Support Services and Logistics
  { slug: "logistics-freight-coldchain", name: "Logistics, Freight and Cold-Chain Companies", code: "LOG", count: 0, group: "Support Services and Logistics" },
  { slug: "commercial-cleaning", name: "Commercial Cleaning Specialists", code: "CLN", count: 0, group: "Support Services and Logistics" },
  { slug: "pest-control-hygiene", name: "Pest Control and Hygiene Professionals", code: "PST", count: 0, group: "Support Services and Logistics" },
  {
    slug: "security-services", name: "Security Services Providers", code: "SEC", count: 0,
    group: "Support Services and Logistics",
    subCategories: ["Physical Security Guarding and Patrols", "Event & VIP Security Coordination", "Access Control Systems & CCTV Installation"],
  },
  {
    slug: "waste-management", name: "Waste Management Services", code: "WST", count: 0,
    group: "Support Services and Logistics",
    subCategories: ["Commercial Food Waste Disposal"],
  },

  // 7. Strategy, Training & Sector Development
  { slug: "training-institutes-academies", name: "Training Institutes and Hospitality Academies", code: "TRN", count: 0, group: "Strategy, Training & Sector Development" },
  { slug: "staffing-recruitment", name: "Staffing and Recruitment Agencies", code: "STF", count: 0, group: "Strategy, Training & Sector Development" },
  { slug: "event-management-av", name: "Event Management and Audio Visual Production Companies", code: "EVT", count: 0, group: "Strategy, Training & Sector Development" },
  { slug: "development-partners", name: "Development Partners and Multilateral Agencies", code: "DEV", count: 0, group: "Strategy, Training & Sector Development" },
];

// Full business profile fields, matching the vision doc's requirements exactly.
export type MembershipTier = "Basic" | "Verified" | "Featured";

export type Business = {
  slug: string;
  categorySlug: string;
  name: string;
  overview: string;
  logoInitials: string;
  productsAndServices: string[];
  contact: { phone: string; email: string };
  location: string;
  website?: string;
  social?: { platform: string; url: string }[];
  membershipTier: MembershipTier;
  brochureUrl?: string;
};

// Placeholder listings, remapped to the new real category slugs — replace once connected to Supabase
export const BUSINESSES: Business[] = [
  {
    slug: "horn-trade-supply",
    categorySlug: "beverage-flavor-suppliers",
    name: "Horn Trade Supply",
    overview: "Wholesale coffee, syrups, milk powders, and cups for hotels, restaurants, and cafés across Somalia.",
    logoInitials: "HT",
    productsAndServices: ["Coffee beans & roasts", "Syrups & flavorings", "Milk & creamer powders", "Cups & disposables"],
    contact: { phone: "+252 XX XXX XXXX", email: "orders@example.com" },
    location: "Mogadishu",
    website: "https://example.com",
    social: [{ platform: "Instagram", url: "https://instagram.com/example" }],
    membershipTier: "Featured",
  },
  {
    slug: "berbera-furnishings-co",
    categorySlug: "hospitality-furniture-fitout",
    name: "Berbera Furnishings Co.",
    overview: "Custom hotel and restaurant furniture and fit-outs, from lobby seating to outdoor dining sets.",
    logoInitials: "BF",
    productsAndServices: ["Custom furniture", "Hotel bedding & mattresses", "Restaurant tables & seating"],
    contact: { phone: "+252 XX XXX XXXX", email: "info@example.com" },
    location: "Berbera",
    membershipTier: "Verified",
  },
  {
    slug: "hargeisa-grand-hotel",
    categorySlug: "hotels-guest-houses",
    name: "Hargeisa Grand Hotel",
    overview: "A 60-room business hotel with conference facilities, serving corporate and leisure travelers.",
    logoInitials: "HG",
    productsAndServices: ["Rooms & suites", "Conference facilities", "Restaurant & catering"],
    contact: { phone: "+252 XX XXX XXXX", email: "reservations@example.com" },
    location: "Hargeisa",
    membershipTier: "Basic",
  },
];

export function getCategory(slug: string): Category | undefined {
  return CATEGORIES.find((c) => c.slug === slug);
}

export function getBusiness(categorySlug: string, businessSlug: string): Business | undefined {
  return BUSINESSES.find((b) => b.categorySlug === categorySlug && b.slug === businessSlug);
}

export function getBusinessesInCategory(categorySlug: string): Business[] {
  return BUSINESSES.filter((b) => b.categorySlug === categorySlug);
}

export function searchBusinesses(query: string, categorySlug: string): Business[] | null {
  const q = query.toLowerCase().trim();
  if (!q && !categorySlug) return null;

  return BUSINESSES.filter((b) => {
    const matchesQuery =
      !q ||
      b.name.toLowerCase().includes(q) ||
      b.overview.toLowerCase().includes(q) ||
      b.productsAndServices.some((p) => p.toLowerCase().includes(q));
    const matchesCategory = !categorySlug || b.categorySlug === categorySlug;
    return matchesQuery && matchesCategory;
  });
}
