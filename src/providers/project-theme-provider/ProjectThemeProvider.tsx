import { SECONDARY } from "@/providers/project-theme-provider/constants/palette";
import { theme } from "@/providers/project-theme-provider/useDefaultTheme";
import { getGlobalStyles } from "@/providers/project-theme-provider/utils/getGlobalStyles";
import { CssBaseline, GlobalStyles } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { PropsWithChildren } from "react";
interface Props extends PropsWithChildren {
  options: {
    key: string;
    prepend: boolean;
  };
}

export default function ProjectThemeProvider({ children }: Props) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles styles={getGlobalStyles(SECONDARY.main)} />
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
