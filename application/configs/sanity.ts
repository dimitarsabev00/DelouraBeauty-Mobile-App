import { fetchQuery } from "@/utils/supports";
import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "zn562mjy",
  dataset: "production",
  apiVersion: "2023-07-04",
  useCdn: true,
});

export const fetchFeeds = async () => {
  let data = await client.fetch(fetchQuery).then((feeds) => {
    return feeds;
  });
  return data;
};
