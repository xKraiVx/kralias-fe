import { useTeamsActions } from "@/providers/alias-store-provider/alias-store/slices/teams-slice/hooks/useTeamsActions";
import { ITeamResult } from "@/providers/alias-store-provider/alias-store/slices/teams-slice/teamsSlice";
import { FormControlLabel, Switch } from "@mui/material";
import { JSX } from "react";

interface ITurnResultItemProps {
  result: ITeamResult;
  teamName: string;
}

export default function TurnResultItem({
  result,
  teamName,
}: ITurnResultItemProps): JSX.Element {
  const { toggleTeamResult } = useTeamsActions();

  const handleChange = () => {
    toggleTeamResult(teamName, result.word);
  };

  return (
    <FormControlLabel
      key={result.word}
      value={result.word}
      checked={result.isAnswered}
      onChange={handleChange}
      control={<Switch />}
      label={result.word}
      sx={{
        p: {
          md: 2,
          xs: 1,
        },
      }}
      slotProps={{
        typography: {
          sx: {
            color: result.isAnswered ? "text.primary" : "text.secondary",
          },
          variant: "subtitle1",
        },
      }}
    />
  );
}
