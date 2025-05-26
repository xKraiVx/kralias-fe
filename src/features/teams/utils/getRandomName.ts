import { TEAM_NAMES } from "@/features/teams/constants/teamNames";

export const getRandomName = (except: string[]): string => {
  const filteredNames = TEAM_NAMES.filter((name) => !except.includes(name));
  if (filteredNames.length === 0) {
    throw new Error("No available team names left");
  }
  const randomIndex = Math.floor(Math.random() * filteredNames.length);
  return filteredNames[randomIndex];
};
