import { ICategory } from "@/requests/categories/catetories.types";
import { CheckCircle } from "@mui/icons-material";
import { Card, Typography } from "@mui/material";
import { JSX } from "react";

interface ICategoryCardProps {
  isSelected?: boolean;
  category: ICategory;
  onClick?: (categoryId: string) => void;
}

export default function CategoryCard({
  category,
  onClick,
  isSelected = false,
}: ICategoryCardProps): JSX.Element {
  const handleClick = (): void => {
    onClick?.(category.slug);
  };

  return (
    <Card
      component="button"
      onClick={handleClick}
      sx={{
        position: "relative",
        padding: 2,
        cursor: "pointer",
        "&:hover, &:focus": { opacity: 0.5 },
        transition: "opacity 0.3s",
        border: "none",
      }}
    >
      {isSelected && (
        <CheckCircle
          sx={{
            position: "absolute",
            top: 16,
            right: 16,
            color: "primary.main",
            transition: "opacity 0.3s",
          }}
        />
      )}
      <Typography variant="h5" component="h2">
        {category.name}
      </Typography>
    </Card>
  );
}
