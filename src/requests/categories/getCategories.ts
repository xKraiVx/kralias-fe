import { ICategoriesResponse } from "@/requests/categories/catetories.types";
import { fetcher } from "@/requests/fetcher";

export const getCategories = async () => {
  const { data } = await fetcher<ICategoriesResponse>({
    endpoint: "/categories/for-game",
    options: {
      method: "GET",
    },
  });
  return data;
};
