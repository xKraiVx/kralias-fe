import { Add } from "@mui/icons-material";
import { Button, SxProps } from "@mui/material";
import { JSX } from "react";

interface IUiAddButtonProps {
  onClick?: () => void;
  sx?: SxProps;
}

export default function UiAddButton({
  onClick,
  sx,
}: IUiAddButtonProps): JSX.Element {
  return (
    <Button
      component="button"
      onClick={onClick}
      variant="outlined"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        p: 10,
        borderRadius: 1,
        cursor: "pointer",
        border: "1px dashed",
        "&:hover": {
          svg: {
            transform: "scale(2)",
          },
        },
        ...sx,
      }}
    >
      <Add
        sx={{
          width: 40,
          height: 40,
          transition: "transform 0.2s ease-in-out",
        }}
      />
    </Button>
  );
}
