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

// ── About Us ─────────────────────────────────────────────────────────────
// Single document.
export type AboutUsContent = {
  title: string | null;
  tagline: string | null;
  description: string | null;
  bannerImages: { asset: { _ref: string; _type: string } }[];
};

const ABOUT_US_QUERY = `*[_type == "aboutUs"][0]{
  title,
  tagline,
  description,
  bannerImages
}`;

export async function getAboutUs(): Promise<AboutUsContent | null> {
  return client.fetch(ABOUT_US_QUERY, {}, { next: { revalidate: 60 } });
}

// ── Sponsors ─────────────────────────────────────────────────────────────
export type Sponsor = {
  _id: string;
  name: string;
  logo: { asset: { _ref: string; _type: string } };
  tier: "diamond" | "platinum" | "gold" | "silver";
  order: number;
};

const SPONSORS_QUERY = `*[_type == "sponsor"] | order(order asc){
  _id,
  name,
  logo,
  tier,
  order
}`;

export async function getSponsors(): Promise<Sponsor[]> {
  return client.fetch(SPONSORS_QUERY, {}, { next: { revalidate: 60 } });
}

// ── News Posts ───────────────────────────────────────────────────────────
export type NewsPost = {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt: string | null;
  mainImage: { asset: { _ref: string; _type: string } };
  publishDate: string;
};

const LATEST_NEWS_QUERY = `*[_type == "newsPost"] | order(publishDate desc)[0...3]{
  _id,
  title,
  slug,
  excerpt,
  mainImage,
  publishDate
}`;

export async function getLatestNewsPosts(): Promise<NewsPost[]> {
  return client.fetch(LATEST_NEWS_QUERY, {}, { next: { revalidate: 60 } });
}

// ── Gallery Photos ───────────────────────────────────────────────────────
export type GalleryPhoto = {
  _id: string;
  image: { asset: { _ref: string; _type: string } };
  caption: string | null;
};

const GALLERY_PHOTOS_QUERY = `*[_type == "galleryPhoto"] | order(_createdAt desc)[0...4]{
  _id,
  image,
  caption
}`;

export async function getGalleryPhotos(): Promise<GalleryPhoto[]> {
  return client.fetch(GALLERY_PHOTOS_QUERY, {}, { next: { revalidate: 60 } });
}

// ── Strategic Partners ───────────────────────────────────────────────────
export type StrategicPartner = {
  _id: string;
  name: string;
  logo: { asset: { _ref: string; _type: string } };
  order: number;
};

const STRATEGIC_PARTNERS_QUERY = `*[_type == "strategicPartner"] | order(order asc){
  _id,
  name,
  logo,
  order
}`;

export async function getStrategicPartners(): Promise<StrategicPartner[]> {
  return client.fetch(STRATEGIC_PARTNERS_QUERY, {}, { next: { revalidate: 60 } });
}
