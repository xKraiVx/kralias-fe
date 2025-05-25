"use client";

import {
  createAliasStore,
  initAliasStore,
  TAliasStore,
} from "@/stores/alias-store/alias.store";
import {
  createContext,
  useRef,
  useContext,
  PropsWithChildren,
  useState,
} from "react";
import { useStore } from "zustand";

export type TAliasStoreReturn = ReturnType<typeof createAliasStore> | undefined;

export type IAliasApi = {
  store: ReturnType<typeof createAliasStore> | undefined;
  isLoading: boolean;
};

export const AliasStoreContext = createContext<IAliasApi>({
  store: undefined,
  isLoading: true,
});

export const AliasStoreProvider = ({ children }: PropsWithChildren) => {
  const storeRef = useRef<TAliasStoreReturn | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  if (storeRef.current === null) {
    storeRef.current = createAliasStore({
      initState: initAliasStore(),
      setIsLoaded: () => setIsLoading(false),
    });
  }

  return (
    <AliasStoreContext.Provider value={{ store: storeRef.current, isLoading }}>
      {children}
    </AliasStoreContext.Provider>
  );
};

const useAliasStore = <T,>(
  selector: (store: TAliasStore) => T
): T & { isLoading: boolean } => {
  const { store, isLoading } = useContext(AliasStoreContext);

  if (!store) {
    throw new Error(`useCounterStore must be used within StoreProvider`);
  }

  return { ...useStore(store, selector), isLoading };
};

export const useAlias = (): TAliasStore => {
  const store = useAliasStore((store) => store);

  return store;
};
