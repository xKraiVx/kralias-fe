"use client";

import CategoryCard from "@/features/categories/components/CategoryCard";
import { ICategory } from "@/requests/categories/catetories.types";
import { Box } from "@mui/material";
import { JSX, useState } from "react";

interface ICategoryListProps {
  categories: ICategory[];
}

export default function CategoryList({
  categories,
}: ICategoryListProps): JSX.Element {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const handleCategoryClick = (categoryId: string) => {
    setSelectedCategories((prev) =>
      prev.includes(categoryId)
        ? prev.filter((id) => id !== categoryId)
        : [...prev, categoryId]
    );
  };

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
      {categories.map((category) => (
        <CategoryCard
          isSelected={selectedCategories.includes(category.slug)}
          category={category}
          key={category.id}
          onClick={handleCategoryClick}
        />
      ))}
    </Box>
  );
}
