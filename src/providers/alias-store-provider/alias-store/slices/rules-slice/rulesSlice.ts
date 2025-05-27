import {
  DEFAULT_DURATION,
  DEFAULT_WORDS_TO_WIN,
} from "@/features/rules/constants/rules.constants";
import { StateCreator } from "zustand";

export interface IRules {
  duration: number;
  wordsToWin: number;
}

export interface IRulesState {
  rules: IRules;
}

export interface IRulesActions {
  updateDuration: (duration: number) => void;
  updateWordsToWin: (wordsToWin: number) => void;
}

export interface IRulesSlice extends IRulesState {
  rulesActions: IRulesActions;
}

const initState: IRulesState = {
  rules: {
    duration: DEFAULT_DURATION,
    wordsToWin: DEFAULT_WORDS_TO_WIN,
  },
};

export const createRulesSlice: StateCreator<
  IRulesSlice,
  [],
  [],
  IRulesSlice
> = (set) => ({
  ...initState,
  rulesActions: {
    updateDuration: (duration) =>
      set((state) => ({
        rules: {
          ...state.rules,
          duration,
        },
      })),
    updateWordsToWin: (wordsToWin) =>
      set((state) => ({
        rules: {
          ...state.rules,
          wordsToWin,
        },
      })),
  },
});
