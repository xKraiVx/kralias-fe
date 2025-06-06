"use client";

import Bouncing from "@/common/components/animations/Bouncing";
import UiAddButton from "@/common/ui/ui-add-button.tsx/UiAddButton";
import Team from "@/features/teams/components/Team";
import { getRandomName } from "@/features/teams/utils/getRandomName";
import { useTeams } from "@/providers/alias-store-provider/alias-store/slices/teams-slice/hooks/useTeams";
import { useTeamsActions } from "@/providers/alias-store-provider/alias-store/slices/teams-slice/hooks/useTeamsActions";
import { Stack } from "@mui/material";
import { JSX } from "react";

export default function TeamsList(): JSX.Element {
  const teams = useTeams();
  const { addTeam, updateTeam, removeTeam } = useTeamsActions();

  const handleAddTeam = () => {
    const teamName = getRandomName(teams.map((team) => team.name));

    addTeam(teamName, teams.length + 1);
  };

  const handleUpdateTeam = (teamName: string) => {
    const newTeamName = getRandomName(teams.map((team) => team.name));
    console.log({ addTeam });

    updateTeam(teamName, newTeamName);
  };

  const handleRemoveTeam = (teamName: string) => {
    removeTeam(teamName);
  };

  return (
    <Stack gap={2}>
      {teams.map((team) => (
        <Bouncing key={team.name}>
          <Team
            name={team.name}
            onUpdate={handleUpdateTeam}
            onRemove={handleRemoveTeam}
          />
        </Bouncing>
      ))}
      <UiAddButton
        sx={{
          width: "100%",
        }}
        onClick={handleAddTeam}
      />
    </Stack>
  );
}
