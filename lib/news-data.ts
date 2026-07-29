export type NewsItem = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  photo: string;
};

// PLACEHOLDER CONTENT — swap titles/excerpts/photos for real posts once
// available (or once wired up to Sanity CMS as a real content source).
export const NEWS_ITEMS: NewsItem[] = [
  {
    slug: "business-directory-beta-launch",
    title: "Somali HORECA Platform launches business directory beta",
    excerpt:
      "The first version of the searchable business directory is now live, connecting hotels, restaurants, and suppliers across Somalia.",
    date: "July 2026",
    photo: "https://picsum.photos/seed/horeca-news-1/700/460",
  },
  {
    slug: "expo-registration-opens",
    title: "Registration opens for the first Somali HORECA Expo",
    excerpt:
      "Somalia's premier hospitality exhibition opens registration for exhibitors, sponsors, and visitors ahead of the 2027 event.",
    date: "July 2026",
    photo: "https://picsum.photos/seed/horeca-news-2/700/460",
  },
  {
    slug: "membership-tiers-announced",
    title: "Business Growth Network membership tiers announced",
    excerpt:
      "Somali HORECA introduces tiered membership plans, giving businesses new ways to promote products and connect with buyers.",
    date: "July 2026",
    photo: "https://picsum.photos/seed/horeca-news-3/700/460",
  },
  {
    slug: "diamond-sponsors-welcome",
    title: "Somali HORECA welcomes first Diamond sponsors",
    excerpt:
      "Two leading regional brands sign on as the platform's inaugural Diamond-tier sponsors ahead of the Expo launch.",
    date: "July 2026",
    photo: "https://picsum.photos/seed/horeca-news-4/700/460",
  },
  {
    slug: "directory-categories-expand",
    title: "New directory categories now live",
    excerpt:
      "Suppliers across hospitality furniture, cleaning services, and food distribution can now list their businesses on the platform.",
    date: "July 2026",
    photo: "https://picsum.photos/seed/horeca-news-5/700/460",
  },
  {
    slug: "mogadishu-venue-confirmed",
    title: "Mogadishu Convention Centre confirmed as Expo venue",
    excerpt:
      "The 2027 Somali HORECA Expo will take place at the Mogadishu Convention Centre, marking the industry's largest gathering yet.",
    date: "June 2026",
    photo: "https://picsum.photos/seed/horeca-news-6/700/460",
  },
];
