import { CATEGORIES_PATH } from "@/common/constants/paths.constant";
import { Box, Button } from "@mui/material";
import Link from "next/link";
import { JSX } from "react";

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
      <Button
        LinkComponent={Link}
        href={CATEGORIES_PATH}
        variant="contained"
        color="primary"
        size="large"
      >
        Start
      </Button>
    </Box>
  );
}
