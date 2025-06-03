import { StateCreator } from "zustand";

export interface IGame {
  round: number;
  currentTurn: number;
  isPaused: boolean;
  timeLeft: number;
  gameOver: boolean;
}

export interface IGameState {
  gameStats: IGame;
}

export interface IGameActions {
  startNewRound: VoidFunction;
  startNewTurn: VoidFunction;
}

export interface IGameSlice extends IGameState {
  gameActions: IGameActions;
}

const initState: IGameState = {
  gameStats: {
    round: 1,
    currentTurn: 1,
    isPaused: false,
    timeLeft: 0,
    gameOver: false,
  },
};

export const createGameSlice: StateCreator<IGameSlice, [], [], IGameSlice> = (
  set
) => ({
  ...initState,
  gameActions: {
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
