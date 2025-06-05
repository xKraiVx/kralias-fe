import { useGameCountdown } from "@/features/game/hooks/useGameCountdown";
import { SxProps, Typography } from "@mui/material";
import { JSX } from "react";

interface IGameCountdownProps {
  sx?: SxProps;
}

export default function GameCountdown({
  sx,
}: IGameCountdownProps): JSX.Element {
  const remainTime = useGameCountdown();

  return (
    <Typography variant="h1" component="p" sx={sx}>
      {remainTime}
    </Typography>
  );
}
