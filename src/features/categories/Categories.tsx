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
    <Box
      sx={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 2 }}
    >
      {categories.map((category) => (
        <CategoryCard category={category} key={category.id} />
      ))}
    </Box>
  );
}
