import { JSX } from "react";

import { RULES_PATH, TEAMS_PATH } from "@/common/constants/paths.constant";
import UiFixedActions from "@/common/ui/ui-fixed-actions/UiFixedActions";
import { Button } from "@mui/material";
import Link from "next/link";

export default function RulesActions(): JSX.Element {
  return (
    <UiFixedActions>
      <Button variant="outlined" LinkComponent={Link} href={TEAMS_PATH}>
        Reselect teams
      </Button>
      <Button variant="contained" LinkComponent={Link} href={RULES_PATH}>
        Start game
      </Button>
    </UiFixedActions>
  );
}
