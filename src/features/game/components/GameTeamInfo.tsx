import { SxProps, Typography } from "@mui/material";
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
    return null;
  }

  return (
    <Typography
      variant="h2"
      component="h3"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        ...sx,
      }}
      color="text.secondary"
    >
      {teamName}
    </Typography>
  );
}
