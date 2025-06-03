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
  addTeamResult: (teamName: string, result: ITeamResult) => void;
  addTeam: (teamName: string, order: number) => void;
  removeTeam: (teamName: string) => void;
  updateTeam: (teamName: string, newTeamName: string) => void;
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

        console.log("Adding new team:", newTeam);

        return {
          teams: [...state.teams, newTeam],
        };
      }),
    removeTeam: (teamName) =>
      set((state) => {
        const isTeamExist = state.teams.some((team) => team.name === teamName);

        if (!isTeamExist) {
          throw new Error(`Team ${teamName} not found`);
        }
        const updatedTeams = state.teams.filter(
          (team) => team.name !== teamName
        );
        console.log("Removing team:", teamName);
        return {
          teams: updatedTeams,
        };
      }),

    updateTeam: (teamName, newTeamName) =>
      set((state) => {
        const isTeamExist = state.teams.some((team) => team.name === teamName);

        if (!isTeamExist) {
          throw new Error(`Team ${teamName} not found`);
        }

        const isNewTeamNameExist = state.teams.some(
          (team) => team.name === newTeamName
        );

        if (isNewTeamNameExist) {
          throw new Error(`Team ${newTeamName} already exists`);
        }

        const updatedTeams = state.teams.map((team) => {
          if (team.name !== teamName) return team;

          return {
            ...team,
            name: newTeamName,
          };
        });

        return {
          teams: updatedTeams,
        };
      }),
    addTeamResult: (teamName, result) =>
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
  },
});
