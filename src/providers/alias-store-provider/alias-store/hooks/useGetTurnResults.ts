import { useGameStats } from "@/providers/alias-store-provider/alias-store/slices/game-stats-slice/hooks/useGameStats";
import { useGetTeamByOrder } from "@/providers/alias-store-provider/alias-store/slices/teams-slice/hooks/useTeams.hooks";
import { ITeamResult } from "@/providers/alias-store-provider/alias-store/slices/teams-slice/teamsSlice";
import { useMemo } from "react";

export const useGetTurnResults = (): ITeamResult[] => {
  const { currentTurn, round } = useGameStats();
  const currentTeam = useGetTeamByOrder(currentTurn);

  const results = useMemo(
    () => currentTeam?.results.filter((word) => word.round === round) || [],
    [currentTeam?.results, round]
  );
  return results;
};
