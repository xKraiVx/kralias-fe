import { ITeamsActions } from "@/providers/alias-store-provider/alias-store/slices/teams-slice/teamsSlice";
import { useAliasStore } from "@/providers/alias-store-provider/AliasStoreProvider";

export const useTeamsActions = (): ITeamsActions => {
  return useAliasStore((store) => store.teamActions);
};
