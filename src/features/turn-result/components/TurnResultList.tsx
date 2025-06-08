"use client";

import TurnResultItem from "@/features/turn-result/components/TurnResultItem";
import { useGetTurnResults } from "@/providers/alias-store-provider/alias-store/hooks/useGetTurnResults";
import { useGameStats } from "@/providers/alias-store-provider/alias-store/slices/game-stats-slice/hooks/useGameStats";
import { useGetTeamByOrder } from "@/providers/alias-store-provider/alias-store/slices/teams-slice/hooks/useTeams.hooks";
import { Stack } from "@mui/material";
import { JSX } from "react";

export default function TurnResultList(): JSX.Element | null {
  const results = useGetTurnResults();
  const { currentTurn } = useGameStats();
  const currentTeam = useGetTeamByOrder(currentTurn);

  if (!results.length || !currentTeam) {
    return null;
  }

  return (
    <Stack
      sx={{
        maxHeight: {
          md: "calc(100vh - 495px)",
          sm: "calc(100vh - 400px)",
          xs: "calc(100vh - 300px)",
        },
        overflowY: "auto",
      }}
    >
      {results.map((result) => (
        <TurnResultItem
          key={result.word}
          result={result}
          teamName={currentTeam.name}
        />
      ))}
    </Stack>
  );
}
