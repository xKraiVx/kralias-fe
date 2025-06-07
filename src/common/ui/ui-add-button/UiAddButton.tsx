import { JSX } from "react";

import { Add } from "@mui/icons-material";
import { Button, ButtonProps } from "@mui/material";

export default function UiAddButton({
  sx,
  ...props
}: ButtonProps): JSX.Element {
  return (
    <Button
      component="button"
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
      {...props}
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
