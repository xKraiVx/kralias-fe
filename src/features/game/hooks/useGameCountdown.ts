import { useNavigationOrUnload } from "@/common/hooks/useNavigationOrUnload";
import { useGameStats } from "@/providers/alias-store-provider/alias-store/slices/game-stats-slice/hooks/useGameStats";
import { useGameStatsActions } from "@/providers/alias-store-provider/alias-store/slices/game-stats-slice/hooks/useGameStatsActions";
import { useRules } from "@/providers/alias-store-provider/alias-store/slices/rules-slice/hooks/useRules";
import { useEffect, useState } from "react";

export const useGameCountdown = (): number => {
  const { duration } = useRules();
  const { timeLeft } = useGameStats();
  const { setTimeLeft } = useGameStatsActions();

  const [remainTime, setRemainTime] = useState<number>(duration);

  useNavigationOrUnload(() => {
    setTimeLeft(duration - remainTime);
  });

  useEffect(() => {
    setRemainTime(duration - timeLeft);

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
  }, [duration, timeLeft]);

  return remainTime;
};
