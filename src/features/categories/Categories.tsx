import { JSX } from "react";
import UiSectionContainer from "@/common/ui/ui-section-container/UiSectionContainer";
import UiSectionTitle from "@/common/ui/ui-section-title/UiSectionTitle";
import { ICategory } from "@/requests/categories/catetories.types";
import CategoriesActions from "@/features/categories/components/CategoriesActions";
import CategoriesList from "@/features/categories/components/CategoriesList";

interface ICategoriesProps {
  categories: ICategory[];
}

export default function Categories({
  categories,
}: ICategoriesProps): JSX.Element {
  return (
    <UiSectionContainer>
      <UiSectionTitle>Choose categories</UiSectionTitle>
      <CategoriesList categories={categories} />
      <CategoriesActions />
    </UiSectionContainer>
  );
}
