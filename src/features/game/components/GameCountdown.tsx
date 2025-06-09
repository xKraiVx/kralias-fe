import { useGameCountdown } from "@/features/game/hooks/useGameCountdown";
import { Skeleton, SxProps, Typography } from "@mui/material";
import { JSX } from "react";

interface IGameCountdownProps {
  sx?: SxProps;
}

export default function GameCountdown({
  sx,
}: IGameCountdownProps): JSX.Element {
  const remainTime = useGameCountdown();

  if (remainTime === null) {
    return <Skeleton variant="text" width={100} height={115} sx={sx} />;
  }

  return (
    <Typography variant="h1" component="p" sx={sx}>
      {remainTime}
    </Typography>
  );
}
