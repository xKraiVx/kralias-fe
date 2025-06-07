import { ITeam } from "@/providers/alias-store-provider/alias-store/slices/teams-slice/teamsSlice";
import { useAliasStore } from "@/providers/alias-store-provider/AliasStoreProvider";

export const useTeams = (): ITeam[] => {
  return useAliasStore((store) => store.teams);
};

export const useGetTeamByOrder = (order: number): ITeam | undefined => {
  return useTeams().find((team) => team.order === order);
};

export const useIsTeamsStepFinished = (): boolean => {
  return useTeams().length >= 2;
};
