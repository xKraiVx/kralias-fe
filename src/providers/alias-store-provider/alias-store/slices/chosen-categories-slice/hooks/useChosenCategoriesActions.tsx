import { IChosenCategoriesActions } from "@/providers/alias-store-provider/alias-store/slices/chosen-categories-slice/chosenCategoriesSlice";
import { useAliasStore } from "@/providers/alias-store-provider/AliasStoreProvider";

export const useChosenCategoriesActions = (): IChosenCategoriesActions => {
  return useAliasStore((store) => store.chosenCategoriesActions);
};
