import { client } from "./sanity";

async function test() {
  const data = await client.fetch(`*[_type == "post"]`);
  console.log(data);
}

test();
