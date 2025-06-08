import { IWord } from "@/requests/words/words.types";
import { StateCreator } from "zustand";

export interface IGameStats {
  round: number;
  currentTurn: number;
  currentTurnWords: IWord[] | null;
  isPaused: boolean;
  timeRemain: number | null;
  gameOver: boolean;
}

export interface IGameStatsState {
  gameStats: IGameStats;
}

export interface IGameStatsActions {
  startNewRound: VoidFunction;
  startNewTurn: VoidFunction;
  setCurrentTurnWords: (words: IWord[]) => void;
  setTimeRemain: (timeRemain: number) => void;
  nextWord: VoidFunction;
}

export interface IGameStatsSlice extends IGameStatsState {
  gameStatsActions: IGameStatsActions;
}

const initState: IGameStatsState = {
  gameStats: {
    round: 1,
    currentTurn: 1,
    currentTurnWords: null,
    isPaused: false,
    timeRemain: 0,
    gameOver: false,
  },
};

export const createGameStatsSlice: StateCreator<
  IGameStatsSlice,
  [],
  [],
  IGameStatsSlice
> = (set) => ({
  ...initState,
  gameStatsActions: {
    startNewRound: () =>
      set((state) => ({
        gameStats: {
          ...initState.gameStats,
          round: state.gameStats.round + 1,
        },
      })),
    startNewTurn: () =>
      set((state) => ({
        gameStats: {
          ...initState.gameStats,
          currentTurn: state.gameStats.currentTurn + 1,
          round: state.gameStats.round,
        },
      })),
    setTimeRemain: (timeRemain: number) =>
      set((state) => ({
        gameStats: {
          ...state.gameStats,
          timeRemain,
        },
      })),
    setCurrentTurnWords: (words: IWord[]) =>
      set((state) => ({
        gameStats: {
          ...state.gameStats,
          currentTurnWords: words,
        },
      })),
    nextWord: () =>
      set((state) => {
        const currentWords = state.gameStats.currentTurnWords;
        if (!currentWords || currentWords.length === 0) {
          return state;
        }

        const [...restWords] = currentWords.slice(1);

        return {
          gameStats: {
            ...state.gameStats,
            currentTurnWords: restWords,
          },
        };
      }),
  },
});
