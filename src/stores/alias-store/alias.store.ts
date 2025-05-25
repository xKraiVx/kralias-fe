import { create } from "zustand";
import { persist } from "zustand/middleware";

interface IAliasState {
  chosenCategories: string[];
}

interface ICosenCategoriesActions {
  toggleCategory: (categorySlug: string) => void;
  resetCategories: () => void;
}

export type TAliasStore = IAliasState & ICosenCategoriesActions;

interface IAliasStoreArgs {
  initState?: IAliasState;
  setIsLoaded?: VoidFunction;
}

const defaultState: IAliasState = {
  chosenCategories: [],
};

export const initAliasStore = (): IAliasState => {
  return defaultState;
};

export const createAliasStore = ({
  initState = defaultState,
  setIsLoaded,
}: IAliasStoreArgs) => {
  return create<TAliasStore>()(
    persist(
      (set) => ({
        ...initState,
        toggleCategory: (categorySlug) =>
          set((state) => {
            const isSelected = state.chosenCategories.includes(categorySlug);
            return {
              chosenCategories: isSelected
                ? state.chosenCategories.filter((slug) => slug !== categorySlug)
                : [...state.chosenCategories, categorySlug],
            };
          }),
        resetCategories: () => set({ chosenCategories: [] }),
      }),
      {
        name: "alias-store",
        onRehydrateStorage: () => () => {
          setIsLoaded?.();
        },
      }
    )
  );
};
