"use client";

import { overrideComponents } from "@/providers/project-theme-provider/override-components";
import { palette } from "@/providers/project-theme-provider/palette";
import { typography } from "@/providers/project-theme-provider/typography";
import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  typography,
  palette: {
    ...palette,
  },
  components: overrideComponents(palette),
});
