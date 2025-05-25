import { createStore } from "zustand";

interface IChosenCategoriesState {
  chosenCategories: string[];
}

interface ICosenCategoriesActions {
  toggleCategory: (categorySlug: string) => void;
  resetCategories: () => void;
}

export type TChosenCategoriesStore = IChosenCategoriesState &
  ICosenCategoriesActions;

const defaultState: IChosenCategoriesState = {
  chosenCategories: [],
};

export const initChosenCategoriesStore = (): IChosenCategoriesState => {
  return defaultState;
};

export const createChosenCategoriesStore = (
  initState: IChosenCategoriesState = defaultState
) => {
  return createStore<TChosenCategoriesStore>((set) => ({
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
  }));
};
