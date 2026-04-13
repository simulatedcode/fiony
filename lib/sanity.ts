import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "kmnww43j",
  dataset: "production",
  apiVersion: "2024-04-01",
  useCdn: false,
});
