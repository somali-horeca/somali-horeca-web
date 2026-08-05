import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import type { Image } from "sanity";

export const client = createClient({
  projectId: "9qoys5re",
  dataset: "production",
  apiVersion: "2026-08-04",
  useCdn: true,
});

const builder = imageUrlBuilder(client);

// Converts a Sanity image reference (what a document's image field actually
// stores) into a real, usable URL for next/image's src.
export function urlFor(source: Image) {
  return builder.image(source);
}
