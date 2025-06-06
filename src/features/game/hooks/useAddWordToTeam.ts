import { useGetCurrentWord } from "@/features/game/hooks/useGetCurrentWord";
import { useGameStats } from "@/providers/alias-store-provider/alias-store/slices/game-stats-slice/hooks/useGameStats";
import { useGameStatsActions } from "@/providers/alias-store-provider/alias-store/slices/game-stats-slice/hooks/useGameStatsActions";
import { useGetTeamByOrder } from "@/providers/alias-store-provider/alias-store/slices/teams-slice/hooks/useTeams";
import { useTeamsActions } from "@/providers/alias-store-provider/alias-store/slices/teams-slice/hooks/useTeamsActions";

type TUseAddWordToTeamResult = (isAnswered: boolean) => void;

export const useAddWordToTeam = (): TUseAddWordToTeamResult => {
  const currentWord = useGetCurrentWord();
  const { nextWord } = useGameStatsActions();
  const { addTeamResult } = useTeamsActions();
  const { round, currentTurn } = useGameStats();
  const currentTeam = useGetTeamByOrder(currentTurn);

  const addWordToTeam = (isAnswered: boolean) => {
    if (!currentWord) {
      console.warn("No current word to add to team.");
      return;
    }

    if (!currentTeam) {
      console.warn("No current team to add the word to.");
      return;
    }

    addTeamResult(currentTeam.name, {
      word: currentWord.name,
      isAnswered,
      round,
    });
    nextWord();
  };

  return addWordToTeam;
};
