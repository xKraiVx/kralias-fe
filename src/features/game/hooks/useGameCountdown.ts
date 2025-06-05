import { useRules } from "@/providers/alias-store-provider/alias-store/slices/rules-slice/hooks/useRules";
import { useEffect, useState } from "react";

export const useGameCountdown = (): number => {
  const { duration } = useRules();

  const [remainTime, setRemainTime] = useState(duration);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainTime((prev) => {
        if (prev <= 0) {
          clearInterval(interval);
          return 0;
        }

        const newTimeLeft = prev - 1;

        return newTimeLeft;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return remainTime;
};
