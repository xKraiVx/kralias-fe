import { Button, ButtonProps } from "@mui/material";
import { JSX } from "react";

export default function UiRoundButton({
  sx,
  ...restProps
}: Omit<ButtonProps, "variant" | "size">): JSX.Element {
  return (
    <Button
      {...restProps}
      variant="contained"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: 200,
        width: 200,
        fontSize: 24,
        borderRadius: "50%",
        cursor: "pointer",
        "&:hover": {
          svg: {
            transform: "scale(2)",
          },
        },
        ...sx,
      }}
    />
  );
}
