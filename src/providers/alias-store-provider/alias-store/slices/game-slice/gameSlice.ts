import { ITeamResult } from "@/providers/alias-store-provider/alias-store/slices/teams-slice/teamsSlice";
import { StateCreator } from "zustand";

export interface ITurnStats {
  isPause: boolean;
  timeLeft: number;
  turnResults: ITeamResult[];
}

export interface IGame {
  round: number;
  currentTurn: number;
  currentTurnStats: ITurnStats;
  gameOver: boolean;
}

export interface IGameState {
  gameStats: IGame;
}

export interface IGameActions {
  startNewRound: VoidFunction;
  startNewTurn: VoidFunction;
  addWordToTurnResults: (word: string, isAnswered: boolean) => void;
}

export interface IGameSlice extends IGameState {
  gameActions: IGameActions;
}

const initState: IGameState = {
  gameStats: {
    round: 1,
    currentTurn: 1,
    currentTurnStats: {
      isPause: false,
      timeLeft: 0,
      turnResults: [],
    },
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
          currentTurnStats: {
            isPause: false,
            timeLeft: 0,
            turnResults: [],
          },
        },
      })),
    addWordToTurnResults: (word, isAnswered) =>
      set((state) => {
        const newResult: ITeamResult = {
          word,
          round: state.gameStats.round,
          isAnswered,
        };

        return {
          gameStats: {
            ...state.gameStats,
            currentTurnStats: {
              ...state.gameStats.currentTurnStats,
              turnResults: [
                ...state.gameStats.currentTurnStats.turnResults,
                newResult,
              ],
            },
          },
        };
      }),
  },
});
