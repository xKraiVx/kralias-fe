import { useIsChosenCategoryStepFinished } from "@/providers/alias-store-provider/alias-store/slices/chosen-categories-slice/hooks/useChosenCategories.hooks";
import { useIsRulesStepFinished } from "@/providers/alias-store-provider/alias-store/slices/rules-slice/hooks/useRules.hooks";
import { useIsTeamsStepFinished } from "@/providers/alias-store-provider/alias-store/slices/teams-slice/hooks/useTeams.hooks";

interface IUseGetAliasStepFinishedResult {
  isTeamsStepFinished: boolean;
  isRulesStepFinished: boolean;
  isChosenCategoryStepFinished: boolean;
}

export const useGetAliasStepFinished = (): IUseGetAliasStepFinishedResult => {
  const isTeamsStepFinished = useIsTeamsStepFinished();
  const isRulesStepFinished = useIsRulesStepFinished();
  const isChosenCategoryStepFinished = useIsChosenCategoryStepFinished();

  return {
    isTeamsStepFinished,
    isRulesStepFinished,
    isChosenCategoryStepFinished,
  };
};
