import { StateCreator } from "zustand";

export interface ICoreSlice {
  _hasHydrated: boolean;
  setHasHydrated: (state: boolean) => void;
}

export const coreSlice: StateCreator<ICoreSlice, [], [], ICoreSlice> = (
  set
) => ({
  _hasHydrated: false,
  setHasHydrated: (state) => {
    set({
      _hasHydrated: state,
    });
  },
});
