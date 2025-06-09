import { useGameStats } from "@/providers/alias-store-provider/alias-store/slices/game-stats-slice/hooks/useGameStats";

export const useGetIsTurnFinished = (): boolean => {
  const { timeRemain } = useGameStats();

  console.log({ timeRemain });

  return timeRemain === 0;
};
