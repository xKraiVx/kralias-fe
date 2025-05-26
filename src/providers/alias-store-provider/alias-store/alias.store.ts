import {
  createChosenCategoriesSlice,
  IChosenCategoriesSlice,
} from "@/providers/alias-store-provider/alias-store/slices/chosen-categories-slice/chosenCategoriesSlice";
import {
  createTeamsSlice,
  ITeamsSlice,
} from "@/providers/alias-store-provider/alias-store/slices/teams-slice/teamsSlice";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export type TAliasStore = IChosenCategoriesSlice & ITeamsSlice;

export const createAliasStore = () => {
  return create<TAliasStore>()(
    persist(
      (...a) => ({
        ...createChosenCategoriesSlice(...a),
        ...createTeamsSlice(...a),
      }),
      {
        name: "alias-store",
        partialize: (state) => ({
          chosenCategories: state.chosenCategories,
          teams: state.teams,
        }),
      }
    )
  );
};
