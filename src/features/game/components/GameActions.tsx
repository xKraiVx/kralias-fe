import UiFixedActions from "@/common/ui/ui-fixed-actions/UiFixedActions";
import { Button } from "@mui/material";
import { JSX } from "react";

export default function GameActions(): JSX.Element {
  return (
    <UiFixedActions>
      <Button variant="contained" color="error">
        Skip
      </Button>
      <Button variant="contained">Done</Button>
    </UiFixedActions>
  );
}
