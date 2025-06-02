import { ITeam } from "@/providers/alias-store-provider/alias-store/slices/teams-slice/teamsSlice";
import { Box, Typography } from "@mui/material";
import { JSX } from "react";

interface ILobbyTeamProps {
  team: ITeam;
}

export default function LobbyTeam({ team }: ILobbyTeamProps): JSX.Element {
  const { name } = team;

  console.log({ order: team.order });

  const isActive = team.order === 0;

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 2,
        pl: { md: 10, xs: 2 },
        border: "1px solid",
        borderColor: "primary.main",
        borderRadius: 2,
        backgroundColor: isActive ? "primary.light" : "transparent",
      }}
    >
      <Typography
        variant="h3"
        sx={{
          flex: 2,
          color: isActive ? "primary.contrastText" : "text.primary",
        }}
      >
        {name}
      </Typography>
      <Typography
        variant="h3"
        component="span"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: 100,
          flex: 1,
          color: isActive ? "primary.contrastText" : "text.primary",
        }}
      >
        0
      </Typography>
    </Box>
  );
}
