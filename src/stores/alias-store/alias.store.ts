import {
  createChosenCategoriesSlice,
  IChosenCategoriesSlice,
} from "@/stores/alias-store/slices/chosenCategoriesSlice";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface IAliasStoreArgs {
  setIsLoaded?: VoidFunction;
}

export type TAliasStore = IChosenCategoriesSlice;

export const createAliasStore = ({ setIsLoaded }: IAliasStoreArgs) => {
  return create<IChosenCategoriesSlice>()(
    persist((...a) => ({ ...createChosenCategoriesSlice(...a) }), {
      name: "alias-store",
      onRehydrateStorage: () => () => {
        setIsLoaded?.();
      },
    })
  );
};
