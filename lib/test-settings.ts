import { getSiteSettings } from "./sanity-queries";

async function test() {
  const settings = await getSiteSettings();
  console.log(settings);
}

test();
