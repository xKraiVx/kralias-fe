"use client";

import Bouncing from "@/common/components/animations/Bouncing";
import LobbyTeam from "@/features/lobby/components/LobbyTeam";
import { useTeams } from "@/providers/alias-store-provider/alias-store/slices/teams-slice/hooks/useTeams";
import { Stack } from "@mui/material";
import { JSX } from "react";

export default function LobbyStats(): JSX.Element {
  const teams = useTeams();

  return (
    <Stack gap={2}>
      {teams.map((team) => (
        <Bouncing key={team.name}>
          <LobbyTeam team={team} />
        </Bouncing>
      ))}
    </Stack>
  );
}
