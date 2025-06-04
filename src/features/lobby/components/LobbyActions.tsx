import { JSX } from "react";

import { GAME_PATH } from "@/common/constants/paths.constant";
import UiFixedActions from "@/common/ui/ui-fixed-actions/UiFixedActions";
import { Button } from "@mui/material";
import Link from "next/link";

export default function LobbyActions(): JSX.Element {
  return (
    <UiFixedActions>
      <Button variant="contained" LinkComponent={Link} href={GAME_PATH}>
        Begin round
      </Button>
    </UiFixedActions>
  );
}
