import {
  createChosenCategoriesSlice,
  IChosenCategoriesSlice,
} from "@/providers/alias-store-provider/alias-store/slices/chosen-categories-slice/chosenCategoriesSlice";
import {
  coreSlice,
  ICoreSlice,
} from "@/providers/alias-store-provider/alias-store/slices/core-slice/coreSlice";
import {
  createGameStatsSlice,
  IGameStatsSlice,
} from "@/providers/alias-store-provider/alias-store/slices/game-stats-slice/gameStatsSlice";
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

export type TAliasStore = IChosenCategoriesSlice &
  ITeamsSlice &
  IRulesSlice &
  IGameStatsSlice &
  ICoreSlice;

export const createAliasStore = () => {
  return create<TAliasStore>()(
    persist(
      (...a) => ({
        ...createChosenCategoriesSlice(...a),
        ...createTeamsSlice(...a),
        ...createRulesSlice(...a),
        ...createGameStatsSlice(...a),
        ...coreSlice(...a),
      }),
      {
        name: "alias-store",
        partialize: (state) => ({
          chosenCategories: state.chosenCategories,
          teams: state.teams,
          rules: state.rules,
          gameStats: state.gameStats,
          _hasHydrated: state._hasHydrated,
        }),
        onRehydrateStorage: (state) => {
          return () => state.setHasHydrated(true);
        },
      }
    )
  );
};
