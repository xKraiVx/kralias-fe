"use client";

import Bouncing from "@/common/animations/Bouncing";
import CategoryCard from "@/features/categories/components/CategoryCard";
import { useAlias } from "@/providers/alias-store-provider/AliasStoreProvider";
import { ICategory } from "@/requests/categories/catetories.types";
import { Box } from "@mui/material";
import { JSX } from "react";

interface ICategoryListProps {
  categories: ICategory[];
}

export default function CategoryList({
  categories,
}: ICategoryListProps): JSX.Element {
  const { chosenCategories, actions } = useAlias();

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
          <CategoryCard
            isSelected={chosenCategories.includes(category.slug)}
            disabled={!category.hasWords}
            category={category}
            onClick={actions.toggleCategory}
          />
        </Bouncing>
      ))}
    </Box>
  );
}
