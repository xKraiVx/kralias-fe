import { JSX } from "react";

import { CATEGORIES_PATH, TEAMS_PATH } from "@/common/constants/paths.constant";
import UiFixedActions from "@/common/ui/ui-fixed-actions/UiFixedActions";
import { Button } from "@mui/material";
import Link from "next/link";

export default function TeamsActions(): JSX.Element {
  return (
    <UiFixedActions>
      <Button variant="outlined" LinkComponent={Link} href={CATEGORIES_PATH}>
        Reselect categories
      </Button>
      <Button variant="contained" LinkComponent={Link} href={TEAMS_PATH}>
        Start game
      </Button>
    </UiFixedActions>
  );
}
