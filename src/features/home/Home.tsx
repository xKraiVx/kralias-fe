import { JSX } from "react";

import HomeStartButton from "@/features/home/components/home-start-button/HomeStartButton";
import { Box } from "@mui/material";

export default function Home(): JSX.Element {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <HomeStartButton />
    </Box>
  );
}
