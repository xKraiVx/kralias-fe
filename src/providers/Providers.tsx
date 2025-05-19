import ProjectThemeProvider from "@/providers/project-theme-provider/ProjectThemeProvider";
import { ReactQueryProvider } from "@/providers/react-query-provider/ReactQueryProvider";

import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { JSX, PropsWithChildren } from "react";

interface IProvidersProps extends PropsWithChildren {
  token?: string;
}

function Providers({ children }: IProvidersProps): JSX.Element {
  return (
    <ReactQueryProvider>
      <AppRouterCacheProvider options={{ key: "css" }}>
        <ProjectThemeProvider options={{ key: "mui", prepend: true }}>
          {children}
        </ProjectThemeProvider>
      </AppRouterCacheProvider>
    </ReactQueryProvider>
  );
}

export default Providers;
