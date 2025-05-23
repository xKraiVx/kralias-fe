import UiSectionContainer from "@/common/ui/ui-section-container/UiSectionContainer";
import UiSectionTitle from "@/common/ui/ui-section-title/UiSectionTitle";
import CategoryList from "@/features/categories/components/CategoryList";
import { ICategory } from "@/requests/categories/catetories.types";
import { JSX } from "react";

interface ICategoriesProps {
  categories: ICategory[];
}

export default function Categories({
  categories,
}: ICategoriesProps): JSX.Element {
  return (
    <UiSectionContainer>
      <UiSectionTitle>Choose categories</UiSectionTitle>
      <CategoryList categories={categories} />
    </UiSectionContainer>
  );
}
