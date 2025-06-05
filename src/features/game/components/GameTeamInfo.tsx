import { Skeleton, SxProps, Typography } from "@mui/material";
import { JSX } from "react";

export interface IGameTeamInfoProps {
  teamName?: string;
  sx?: SxProps;
}

export default function GameTeamInfo({
  teamName,
  sx,
}: IGameTeamInfoProps): JSX.Element | null {
  if (!teamName) {
    return <Skeleton variant="text" sx={sx} width={200} height={75} />;
  }

  return (
    <Typography variant="h2" component="h3" sx={sx} color="text.secondary">
      {teamName}
    </Typography>
  );
}
