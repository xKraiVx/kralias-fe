import { useNavigationOrUnload } from "@/common/hooks/useNavigationOrUnload";
import { useGameStats } from "@/providers/alias-store-provider/alias-store/slices/game-stats-slice/hooks/useGameStats";
import { useGameStatsActions } from "@/providers/alias-store-provider/alias-store/slices/game-stats-slice/hooks/useGameStatsActions";
import { useRules } from "@/providers/alias-store-provider/alias-store/slices/rules-slice/hooks/useRules.hooks";
import { useEffect, useState } from "react";

export const useGameCountdown = (): number | null => {
  const { duration } = useRules();
  const { timeRemain } = useGameStats();
  const { setTimeRemain } = useGameStatsActions();

  const [remainTime, setRemainTime] = useState<number | null>(null);

  useNavigationOrUnload(() => {
    setTimeRemain(remainTime || duration);
  });

  useEffect(() => {
    const initialTimeLeft = timeRemain === null ? timeRemain : duration;

    setRemainTime(initialTimeLeft);

    if (!initialTimeLeft) {
      return;
    }

    const interval = setInterval(() => {
      setRemainTime((prev) => {
        if (prev && prev <= 0) {
          clearInterval(interval);
          return 0;
        }

        const newTimeLeft = prev ? prev - 1 : 0;

        return newTimeLeft;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [duration, timeRemain]);

  return remainTime;
};
