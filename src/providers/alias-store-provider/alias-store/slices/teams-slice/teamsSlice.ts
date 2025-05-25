import { StateCreator } from "zustand";

export interface ITeamResult {
  word: string;
  round: number;
  isAnswered: boolean;
}

export interface ITeam {
  name: string;
  order: number;
  results: ITeamResult[];
}

export interface ITeamsState {
  teams: ITeam[];
}

export interface ITeamsActions {
  addResult: (teamName: string, result: ITeamResult) => void;
  updateResult: (teamName: string, result: ITeamResult) => void;
  addTeam?: (teamName: string, order: number) => void;
}

export interface ITeamsSlice extends ITeamsState {
  teamActions: ITeamsActions;
}

const initState: ITeamsState = {
  teams: [],
};

export const createTeamsSlice: StateCreator<
  ITeamsSlice,
  [],
  [],
  ITeamsSlice
> = (set) => ({
  ...initState,
  teamActions: {
    addTeam: (teamName, order) =>
      set((state) => {
        const isTeamExist = state.teams.some((t) => t.name === teamName);

        if (isTeamExist) {
          throw new Error(`Team ${teamName} already exists`);
        }

        const newTeam: ITeam = {
          name: teamName,
          order,
          results: [],
        };

        return {
          teams: [...state.teams, newTeam],
        };
      }),
    addResult: (teamName, result) =>
      set((state) => {
        const isTeamExist = state.teams.some((team) => team.name === teamName);

        if (!isTeamExist) {
          throw new Error(`Team ${teamName} not found`);
        }

        const updateTeams = state.teams.map((team) => {
          if (team.name !== teamName) return team;

          return {
            ...team,
            results: [...team.results, result],
          };
        });

        return {
          teams: updateTeams,
        };
      }),
    updateResult: (teamName, result) =>
      set((state) => {
        const isTeamExist = state.teams.some((team) => team.name === teamName);

        if (!isTeamExist) {
          throw new Error(`Team ${teamName} not found`);
        }

        const updateTeams = state.teams.map((team) => {
          if (team.name !== teamName) return team;

          const updatedResults = team.results.map((res) =>
            res.round === result.round ? result : res
          );

          return {
            ...team,
            results: updatedResults,
          };
        });

        return {
          teams: updateTeams,
        };
      }),
  },
});
