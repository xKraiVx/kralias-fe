import {
  CATEGORIES_PATH,
  LOBBY_PATH,
  RULES_PATH,
  TEAMS_PATH,
  TURN_RESULT_PATH,
} from "@/common/constants/paths.constant";
import { useGetAliasStepFinished } from "@/providers/alias-store-provider/alias-store/hooks/useGetAliasStepFinished";

export const useGetCurrentAliasStepPath = () => {
  const {
    isChosenCategoryStepFinished,
    isRulesStepFinished,
    isTeamsStepFinished,
    isTurnFinished,
  } = useGetAliasStepFinished();

  if (!isChosenCategoryStepFinished) {
    return CATEGORIES_PATH;
  }

  if (!isTeamsStepFinished) {
    return TEAMS_PATH;
  }

  if (!isRulesStepFinished) {
    return RULES_PATH;
  }

  if (isTurnFinished) {
    return TURN_RESULT_PATH;
  }

  return LOBBY_PATH;
};
