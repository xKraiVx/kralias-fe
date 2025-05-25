"use client";

import { JSX } from "react";
import Bouncing from "@/common/components/animations/Bouncing";
import { useChosenCategories } from "@/providers/alias-store-provider/alias-store/slices/chosen-categories-slice/hooks/useChosenCategories";
import { useChosenCategoriesActions } from "@/providers/alias-store-provider/alias-store/slices/chosen-categories-slice/hooks/useChosenCategoriesActions";
import { ICategory } from "@/requests/categories/catetories.types";
import { Box } from "@mui/material";
import CategoriesCard from "@/features/categories/components/CategoriesCard";

interface ICategoryListProps {
  categories: ICategory[];
}

export default function CategoriesList({
  categories,
}: ICategoryListProps): JSX.Element {
  const chosenCategories = useChosenCategories();
  const { toggleCategory } = useChosenCategoriesActions();

  return (
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
      {categories.map((category, idx) => (
        <Bouncing key={category.id} delay={idx * 0.1}>
          <CategoriesCard
            isSelected={chosenCategories.includes(category.slug)}
            disabled={!category.hasWords}
            category={category}
            onClick={toggleCategory}
          />
        </Bouncing>
      ))}
    </Box>
  );
}
