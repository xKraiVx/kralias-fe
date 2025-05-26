import { ITeam } from "@/providers/alias-store-provider/alias-store/slices/teams-slice/teamsSlice";
import { useAliasStore } from "@/providers/alias-store-provider/AliasStoreProvider";

export const useTeams = (): ITeam[] => {
  return useAliasStore((store) => store.teams);
};
