import UiSectionContainer from "@/common/ui/ui-section-container/UiSectionContainer";
import UiSectionTitle from "@/common/ui/ui-section-title/UiSectionTitle";
import CategoryCard from "@/features/categories/components/CategoryCard";
import { ICategory } from "@/requests/categories/catetories.types";
import { Box } from "@mui/material";
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
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "repeat(1, 1fr)",
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
          },
          gap: 2,
        }}
      >
        {categories.map((category) => (
          <CategoryCard category={category} key={category.id} />
        ))}
      </Box>
    </UiSectionContainer>
  );
}
