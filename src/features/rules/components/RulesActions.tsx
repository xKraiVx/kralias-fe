"use client";

import { JSX } from "react";

import { LOBBY_PATH, TEAMS_PATH } from "@/common/constants/paths.constant";
import UiFixedActions from "@/common/ui/ui-fixed-actions/UiFixedActions";
import { Button } from "@mui/material";
import Link from "next/link";
import { useRulesActions } from "@/providers/alias-store-provider/alias-store/slices/rules-slice/hooks/useRulesActions";

export default function RulesActions(): JSX.Element {
  const { setIsFinished } = useRulesActions();

  return (
    <UiFixedActions>
      <Button variant="outlined" LinkComponent={Link} href={TEAMS_PATH}>
        Reselect teams
      </Button>
      <Button
        variant="contained"
        LinkComponent={Link}
        href={LOBBY_PATH}
        onClick={() => setIsFinished(true)}
      >
        Start game
      </Button>
    </UiFixedActions>
  );
}
