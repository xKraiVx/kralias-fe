import UiFixedActions from "@/common/ui/ui-fixed-actions/UiFixedActions";
import { useGameStatsActions } from "@/providers/alias-store-provider/alias-store/slices/game-stats-slice/hooks/useGameStatsActions";
import { Button } from "@mui/material";
import { JSX } from "react";

export default function GameActions(): JSX.Element {
  const { setTimeLeft } = useGameStatsActions();

  const handleDone = () => {
    setTimeLeft(0);
  };

  return (
    <UiFixedActions>
      <Button variant="contained" color="error">
        Skip
      </Button>
      <Button variant="contained" onClick={handleDone}>
        Done
      </Button>
    </UiFixedActions>
  );
}
