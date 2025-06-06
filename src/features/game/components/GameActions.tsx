import UiFixedActions from "@/common/ui/ui-fixed-actions/UiFixedActions";
import { useAddWordToTeam } from "@/features/game/hooks/useAddWordToTeam";
import { Button } from "@mui/material";
import { JSX } from "react";

export default function GameActions(): JSX.Element {
  const addWordToTeam = useAddWordToTeam();

  const handleDone = () => {
    addWordToTeam(true);
  };

  const handleSkip = () => {
    addWordToTeam(false);
  };

  return (
    <UiFixedActions>
      <Button variant="contained" color="error" onClick={handleSkip}>
        Skip
      </Button>
      <Button variant="contained" onClick={handleDone}>
        Done
      </Button>
    </UiFixedActions>
  );
}
