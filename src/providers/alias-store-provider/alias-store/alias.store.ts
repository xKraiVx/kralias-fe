import {
  createChosenCategoriesSlice,
  IChosenCategoriesSlice,
} from "@/providers/alias-store-provider/alias-store/slices/chosenCategoriesSlice";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export type TAliasStore = IChosenCategoriesSlice;

export const createAliasStore = () => {
  return create<IChosenCategoriesSlice>()(
    persist((...a) => ({ ...createChosenCategoriesSlice(...a) }), {
      name: "alias-store",
    })
  );
};
