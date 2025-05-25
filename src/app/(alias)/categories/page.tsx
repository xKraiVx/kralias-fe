import Categories from "@/features/categories/Categories";
import { getCategories } from "@/requests/categories/getCategories";
import { JSX } from "react";

export default async function Page(): Promise<JSX.Element> {
  const categories = await getCategories();

  return <Categories categories={categories} />;
}
