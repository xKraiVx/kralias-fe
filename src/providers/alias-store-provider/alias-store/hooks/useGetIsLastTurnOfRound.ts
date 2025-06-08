import { useGameStats } from "@/providers/alias-store-provider/alias-store/slices/game-stats-slice/hooks/useGameStats";
import { useTeams } from "@/providers/alias-store-provider/alias-store/slices/teams-slice/hooks/useTeams.hooks";

export const useGetIsLastTurnOfRound = (): boolean => {
  const { currentTurn } = useGameStats();
  const teams = useTeams();

  return currentTurn === teams.length;
};
