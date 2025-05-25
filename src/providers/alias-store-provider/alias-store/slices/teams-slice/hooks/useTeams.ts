import { useAliasStore } from "@/providers/alias-store-provider/AliasStoreProvider";

export const useTeams = (): string[] => {
  return useAliasStore((store) => store.chosenCategories);
};
