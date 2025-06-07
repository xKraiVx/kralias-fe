"use client";

import { JSX } from "react";

import UiSectionContainer from "@/common/ui/ui-section-container/UiSectionContainer";
import UiSectionTitle from "@/common/ui/ui-section-title/UiSectionTitle";
import GameActions from "@/features/game/components/GameActions";
import GameCountdown from "@/features/game/components/GameCountdown";
import GameTeamInfo from "@/features/game/components/GameTeamInfo";
import { useGameStats } from "@/providers/alias-store-provider/alias-store/slices/game-stats-slice/hooks/useGameStats";
import { useGetTeamByOrder } from "@/providers/alias-store-provider/alias-store/slices/teams-slice/hooks/useTeams.hooks";
import GameCurrentWord from "@/features/game/components/GameCurrentWord";
import { Stack } from "@mui/material";

export default function Game(): JSX.Element {
  const { round, currentTurn } = useGameStats();
  const currentTeam = useGetTeamByOrder(currentTurn);

  return (
    <UiSectionContainer>
      <UiSectionTitle>Round {round}</UiSectionTitle>
      <Stack
        sx={{
          alignItems: "center",
        }}
      >
        <GameTeamInfo
          teamName={currentTeam?.name}
          sx={{
            mb: 2,
          }}
        />
        <GameCountdown />
        <GameCurrentWord />
        <GameActions />
      </Stack>
    </UiSectionContainer>
  );
}
