import { Typography, TypographyProps } from "@mui/material";
import { JSX } from "react";

export default function UiSectionTitle({
  children,
  sx,
  ...props
}: TypographyProps): JSX.Element {
  return (
    <Typography
      variant="h2"
      sx={{
        mb: 4,
        textAlign: "center",
        ...sx,
      }}
      {...props}
    >
      {children}
    </Typography>
  );
}
