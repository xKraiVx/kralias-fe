import { IChosenCategoriesActions } from "@/providers/alias-store-provider/alias-store/slices/chosenCategoriesSlice";
import { useAliasStore } from "@/providers/alias-store-provider/AliasStoreProvider";

export const useChosenCategoriesActions = (): IChosenCategoriesActions => {
  return useAliasStore((store) => store.actions);
};
