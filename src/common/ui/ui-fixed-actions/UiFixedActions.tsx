import { JSX, PropsWithChildren } from "react";
import { Box } from "@mui/material";

export default function UiFixedActions({
  children,
}: PropsWithChildren): JSX.Element {
  return (
    <Box
      sx={{
        display: "flex",
        position: "fixed",
        p: 2,
        bottom: 0,
        left: 0,
        width: "100%",
        backgroundColor: "background.default",

        gap: 2,
        "*": {
          flex: 1,
        },
      }}
    >
      {children}
    </Box>
  );
}
