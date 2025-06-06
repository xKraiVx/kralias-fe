import { useAliasStore } from "@/providers/alias-store-provider/AliasStoreProvider";

export const useGetIsStorageLoading = (): boolean => {
  return useAliasStore((store) => store.isLoading);
};
