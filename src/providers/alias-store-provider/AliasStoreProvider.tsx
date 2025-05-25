// src/providers/counter-store-provider.tsx
"use client";

import {
  createChosenCategoriesStore,
  initChosenCategoriesStore,
  TChosenCategoriesStore,
} from "@/stores/chosenCategories.store";
import { type ReactNode, createContext, useRef, useContext } from "react";
import { useStore } from "zustand";

export type IChosenCategoriesApi = ReturnType<
  typeof createChosenCategoriesStore
>;

export const AliasStoreContext = createContext<
  IChosenCategoriesApi | undefined
>(undefined);

export interface StoreProviderProps {
  children: ReactNode;
}

export const AliasStoreProvider = ({ children }: StoreProviderProps) => {
  const storeRef = useRef<IChosenCategoriesApi | null>(null);
  if (storeRef.current === null) {
    storeRef.current = createChosenCategoriesStore(initChosenCategoriesStore());
  }

  return (
    <AliasStoreContext.Provider value={storeRef.current}>
      {children}
    </AliasStoreContext.Provider>
  );
};

export const useAliasStore = <T,>(
  selector: (store: TChosenCategoriesStore) => T
): T => {
  const aliasStoreContext = useContext(AliasStoreContext);

  if (!aliasStoreContext) {
    throw new Error(`useCounterStore must be used within StoreProvider`);
  }

  return useStore(aliasStoreContext, selector);
};
