import { fetcher } from "@/requests/fetcher";

export const getCategories = async () => {
  const { data } = await fetcher("/categories", {
    method: "GET",
  });
  console.log({ data });
  return data;
};
