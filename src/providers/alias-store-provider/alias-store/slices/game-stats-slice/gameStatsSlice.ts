import { IWord } from "@/requests/words/words.types";
import { StateCreator } from "zustand";

export interface IGameStats {
  round: number;
  currentTurn: number;
  currentTurnWords: IWord[] | null;
  isPaused: boolean;
  timeLeft: number | null;
  gameOver: boolean;
}

export interface IGameStatsState {
  gameStats: IGameStats;
}

export interface IGameStatsActions {
  startNewRound: VoidFunction;
  startNewTurn: VoidFunction;
  setCurrentTurnWords: (words: IWord[]) => void;
  setTimeLeft: (timeLeft: number | null) => void;
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
    timeLeft: null,
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
          ...state.gameStats,
          currentTurn: state.gameStats.currentTurn + 1,
        },
      })),
    setTimeLeft: (timeLeft: number | null) =>
      set((state) => ({
        gameStats: {
          ...state.gameStats,
          timeLeft,
        },
      })),
    setCurrentTurnWords: (words: IWord[]) =>
      set((state) => ({
        gameStats: {
          ...state.gameStats,
          currentTurnWords: words,
        },
      })),
  },
});
