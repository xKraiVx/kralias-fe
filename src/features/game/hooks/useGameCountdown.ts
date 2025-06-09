"use ";

import { useNavigationOrUnload } from "@/common/hooks/useNavigationOrUnload";
import { useGetIsStorageHydrated } from "@/providers/alias-store-provider/alias-store/hooks/useGetIsStorageHydrated";
import { useGameStats } from "@/providers/alias-store-provider/alias-store/slices/game-stats-slice/hooks/useGameStats";
import { useGameStatsActions } from "@/providers/alias-store-provider/alias-store/slices/game-stats-slice/hooks/useGameStatsActions";
import { useRules } from "@/providers/alias-store-provider/alias-store/slices/rules-slice/hooks/useRules.hooks";
import { useEffect } from "react";

export const useGameCountdown = (): number | null => {
  const { duration } = useRules();
  const { timeRemain } = useGameStats();
  const { setTimeRemain } = useGameStatsActions();
  const isHydrated = useGetIsStorageHydrated();

  useNavigationOrUnload(() => {
    setTimeRemain(timeRemain !== null ? timeRemain : duration);
  });

  useEffect(() => {
    if (!isHydrated) {
      return;
    }

    const initialTimeLeft = timeRemain === null ? duration : timeRemain;

    setTimeRemain(initialTimeLeft);

    if (timeRemain === null) {
      return;
    }

    const interval = setInterval(() => {
      setTimeRemain(timeRemain - 1);
    }, 1000);

    if (timeRemain <= 0) {
      clearInterval(interval);
      return;
    }

    return () => clearInterval(interval);
  }, [duration, isHydrated, setTimeRemain, timeRemain]);

  return timeRemain;
};
