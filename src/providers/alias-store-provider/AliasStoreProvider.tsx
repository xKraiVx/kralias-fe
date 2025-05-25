"use client";

import {
  createAliasStore,
  TAliasStore,
} from "@/providers/alias-store-provider/alias-store/alias.store";
import { createContext, useRef, useContext, PropsWithChildren } from "react";
import { useStore } from "zustand";

export type TAliasStoreReturn = ReturnType<typeof createAliasStore> | undefined;

export type TAliasApi = ReturnType<typeof createAliasStore> | undefined;

export const AliasStoreContext = createContext<TAliasApi>(undefined);

export const AliasStoreProvider = ({ children }: PropsWithChildren) => {
  const storeRef = useRef<TAliasStoreReturn | null>(null);

  if (storeRef.current === null) {
    storeRef.current = createAliasStore();
  }

  return (
    <AliasStoreContext.Provider value={storeRef.current}>
      {children}
    </AliasStoreContext.Provider>
  );
};

export const useAliasStore = <T,>(selector: (store: TAliasStore) => T): T => {
  const store = useContext(AliasStoreContext);

  if (!store) {
    throw new Error(`useCounterStore must be used within StoreProvider`);
  }

  return useStore(store, selector);
};
