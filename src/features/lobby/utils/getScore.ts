import { ITeamResult } from "@/providers/alias-store-provider/alias-store/slices/teams-slice/teamsSlice";

export const getScore = (results: ITeamResult[]): number =>
  results.reduce((acc, result) => {
    if (result.isAnswered) {
      return acc + 1;
    } else {
      return acc - 2;
    }
  }, 0);
