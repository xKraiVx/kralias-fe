import { ICategory } from "@/requests/categories/catetories.types";
import { Card, Typography } from "@mui/material";
import { JSX } from "react";

interface ICategoryCardProps {
  category: ICategory;
}

export default function CategoryCard({
  category,
}: ICategoryCardProps): JSX.Element {
  console.log({ category });

  return (
    <Card
      component="button"
      sx={{
        padding: 2,
        cursor: "pointer",
        "&:hover, &:focus": { opacity: 0.5 },
        transition: "opacity 0.3s",
        border: "none",
      }}
    >
      <Typography variant="h5" component="h2">
        {category.name}
      </Typography>
    </Card>
  );
}
