import { useRules } from "@/providers/alias-store-provider/alias-store/slices/rules-slice/hooks/useRules";
import { SxProps, Typography } from "@mui/material";
import { JSX, useEffect, useState } from "react";

interface IGameCountdownProps {
  sx?: SxProps;
}

export default function GameCountdown({
  sx,
}: IGameCountdownProps): JSX.Element {
  const { duration } = useRules();
  const [remainTime, setRemainTime] = useState(duration);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainTime((prev) => {
        if (prev <= 0) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Typography
      variant="h1"
      component="p"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        ...sx,
      }}
    >
      {remainTime}
    </Typography>
  );
}
