import { useAliasStore } from "@/providers/alias-store-provider/AliasStoreProvider";

export const useChosenCategories = (): string[] => {
  return useAliasStore((store) => store.chosenCategories);
};

export const useIsChosenCategoryStepFinished = (): boolean => {
  return useChosenCategories().length > 0;
};
