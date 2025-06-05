"use client";

import UiSectionContainer from "@/common/ui/ui-section-container/UiSectionContainer";
import UiSectionTitle from "@/common/ui/ui-section-title/UiSectionTitle";
import GameCountdown from "@/features/game/components/GameCountdown";
import GameTeamInfo from "@/features/game/components/GameTeamInfo";
import { useGameStats } from "@/providers/alias-store-provider/alias-store/slices/game-stats-slice/hooks/useGameStats";
import { useGetTeamByOrder } from "@/providers/alias-store-provider/alias-store/slices/teams-slice/hooks/useTeams";
import { IWord } from "@/requests/words/words.types";
import { JSX } from "react";

interface IGameProps {
  words: IWord[];
}

export default function Game({ words }: IGameProps): JSX.Element {
  const { round, currentTurn } = useGameStats();
  const currentTeam = useGetTeamByOrder(currentTurn);
  console.log(words);

  return (
    <UiSectionContainer>
      <UiSectionTitle>Round {round}</UiSectionTitle>
      <GameTeamInfo
        teamName={currentTeam?.name}
        sx={{
          mb: 2,
        }}
      />
      <GameCountdown />
    </UiSectionContainer>
  );
}
