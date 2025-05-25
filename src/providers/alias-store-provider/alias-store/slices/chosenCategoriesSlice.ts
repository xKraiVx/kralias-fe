import { StateCreator } from "zustand";

export interface IChosenCategoriesState {
  chosenCategories: string[];
}

export interface IChosenCategoriesActions {
  toggleCategory: (categorySlug: string) => void;
  resetCategories: () => void;
}

export interface IChosenCategoriesSlice extends IChosenCategoriesState {
  actions: IChosenCategoriesActions;
}

const initState: IChosenCategoriesState = {
  chosenCategories: [],
};

export const createChosenCategoriesSlice: StateCreator<
  IChosenCategoriesSlice,
  [],
  [],
  IChosenCategoriesSlice
> = (set) => ({
  ...initState,
  actions: {
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
  },
});
