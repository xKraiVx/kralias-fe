import { IRulesActions } from "@/providers/alias-store-provider/alias-store/slices/rules-slice/rulesSlice";
import { useAliasStore } from "@/providers/alias-store-provider/AliasStoreProvider";

export const useRulesActions = (): IRulesActions => {
  return useAliasStore((store) => store.rulesActions);
};
