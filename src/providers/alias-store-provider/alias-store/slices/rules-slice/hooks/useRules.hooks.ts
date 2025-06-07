import { IRules } from "@/providers/alias-store-provider/alias-store/slices/rules-slice/rulesSlice";
import { useAliasStore } from "@/providers/alias-store-provider/AliasStoreProvider";

export const useRules = (): IRules => {
  return useAliasStore((store) => store.rules);
};

export const useIsRulesStepFinished = (): boolean => {
  return useRules().isFinished;
};
