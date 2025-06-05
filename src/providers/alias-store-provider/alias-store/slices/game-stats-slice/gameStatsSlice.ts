import { StateCreator } from "zustand";

export interface IGameStats {
  round: number;
  currentTurn: number;
  isPaused: boolean;
  timeLeft: number;
  gameOver: boolean;
}

export interface IGameStatsState {
  gameStats: IGameStats;
}

export interface IGameStatsActions {
  startNewRound: VoidFunction;
  startNewTurn: VoidFunction;
}

export interface IGameStatsSlice extends IGameStatsState {
  gameStatsActions: IGameStatsActions;
}

const initState: IGameStatsState = {
  gameStats: {
    round: 1,
    currentTurn: 1,
    isPaused: false,
    timeLeft: 0,
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
  },
});
