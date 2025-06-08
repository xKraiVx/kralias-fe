"use client";

import { LOBBY_PATH } from "@/common/constants/paths.constant";
import UiFixedActions from "@/common/ui/ui-fixed-actions/UiFixedActions";
import { useGetIsLastTurnOfRound } from "@/providers/alias-store-provider/alias-store/hooks/useGetIsLastTurnOfRound";
import { useGameStatsActions } from "@/providers/alias-store-provider/alias-store/slices/game-stats-slice/hooks/useGameStatsActions";
import { Button } from "@mui/material";
import Link from "next/link";
import { JSX } from "react";

export default function TurnResultActions(): JSX.Element {
  const { startNewTurn, startNewRound } = useGameStatsActions();

  const isLastTurnOfRound = useGetIsLastTurnOfRound();

  const handleClick = () => {
    if (isLastTurnOfRound) {
      startNewRound();
    } else {
      startNewTurn();
    }
  };

  return (
    <UiFixedActions>
      <Button
        variant="contained"
        LinkComponent={Link}
        href={LOBBY_PATH}
        onClick={handleClick}
      >
        Start Next Turn
      </Button>
    </UiFixedActions>
  );
}
