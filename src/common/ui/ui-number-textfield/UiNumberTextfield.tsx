import { Stack, TextField, TextFieldProps, Typography } from "@mui/material";
import { JSX } from "react";

export default function UiNumberTextfield({
  sx,
  label,
  ...props
}: TextFieldProps): JSX.Element {
  return (
    <Stack sx={{ ...sx, gap: 2 }}>
      {label && <Typography>{label}</Typography>}
      <TextField {...props} type="number" />
    </Stack>
  );
}
