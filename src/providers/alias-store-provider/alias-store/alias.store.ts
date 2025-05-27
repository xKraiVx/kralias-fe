import {
  createChosenCategoriesSlice,
  IChosenCategoriesSlice,
} from "@/providers/alias-store-provider/alias-store/slices/chosen-categories-slice/chosenCategoriesSlice";
import {
  createRulesSlice,
  IRulesSlice,
} from "@/providers/alias-store-provider/alias-store/slices/rules-slice/rulesSlice";
import {
  createTeamsSlice,
  ITeamsSlice,
} from "@/providers/alias-store-provider/alias-store/slices/teams-slice/teamsSlice";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export type TAliasStore = IChosenCategoriesSlice & ITeamsSlice & IRulesSlice;

export const createAliasStore = () => {
  return create<TAliasStore>()(
    persist(
      (...a) => ({
        ...createChosenCategoriesSlice(...a),
        ...createTeamsSlice(...a),
        ...createRulesSlice(...a),
      }),
      {
        name: "alias-store",
        partialize: (state) => ({
          chosenCategories: state.chosenCategories,
          teams: state.teams,
          rules: state.rules,
        }),
      }
    )
  );
};
