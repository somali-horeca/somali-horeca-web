import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "9qoys5re",
  dataset: "production",
  apiVersion: "2026-08-04",
  useCdn: true,
});
