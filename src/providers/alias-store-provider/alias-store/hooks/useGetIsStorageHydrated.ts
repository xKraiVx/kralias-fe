import { useAliasStore } from "@/providers/alias-store-provider/AliasStoreProvider";

export const useGetIsStorageHydrated = (): boolean => {
  return useAliasStore((store) => store._hasHydrated);
};
