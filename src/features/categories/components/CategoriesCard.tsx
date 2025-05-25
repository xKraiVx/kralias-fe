import { ICategory } from "@/requests/categories/catetories.types";
import { CheckCircle } from "@mui/icons-material";
import { Card, Typography } from "@mui/material";
import { JSX } from "react";

interface ICategoryCardProps {
  category: ICategory;
  isSelected?: boolean;
  disabled?: boolean;
  onClick?: (categoryId: string) => void;
}

export default function CategoriesCard({
  category,
  isSelected = false,
  disabled = false,
  onClick,
}: ICategoryCardProps): JSX.Element {
  const handleClick = (): void => {
    onClick?.(category.slug);
  };

  return (
    <Card
      component="button"
      onClick={handleClick}
      tabIndex={disabled ? -1 : 0}
      sx={{
        position: "relative",
        padding: 2,
        cursor: "pointer",
        "&:hover, &:focus": { opacity: 0.5 },
        transition: "opacity 0.3s",
        border: "none",
        pointerEvents: disabled ? "none" : "auto",
        opacity: disabled ? 0.5 : 1,
        width: "100%",
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
      <Typography
        variant="h5"
        component="h2"
        sx={{
          color: disabled ? "text.disabled" : "text.primary",
        }}
      >
        {category.name}
      </Typography>
    </Card>
  );
}
