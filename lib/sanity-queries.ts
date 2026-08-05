import { client } from "./sanity";

// ── Site Settings ────────────────────────────────────────────────────────
// Single document — powers the Header's countdown, date badge, and venue.
export type SiteSettings = {
  expoStartDate: string | null;
  expoDateRangeText: string | null;
  expoVenue: string | null;
};

const SITE_SETTINGS_QUERY = `*[_type == "siteSettings"][0]{
  expoStartDate,
  expoDateRangeText,
  expoVenue
}`;

export async function getSiteSettings(): Promise<SiteSettings | null> {
  return client.fetch(SITE_SETTINGS_QUERY, {}, { next: { revalidate: 60 } });
}

// ── Hero Slides ──────────────────────────────────────────────────────────
export type HeroSlide = {
  _id: string;
  image: { asset: { _ref: string; _type: string } };
  description: string | null;
  linkUrl: string | null;
  order: number;
};

const HERO_SLIDES_QUERY = `*[_type == "heroSlide" && active == true] | order(order asc){
  _id,
  image,
  description,
  linkUrl,
  order
}`;

export async function getHeroSlides(): Promise<HeroSlide[]> {
  return client.fetch(HERO_SLIDES_QUERY, {}, { next: { revalidate: 60 } });
}
