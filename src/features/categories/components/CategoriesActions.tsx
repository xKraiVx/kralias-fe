import { JSX } from "react";

import { HOME_PATH, TEAMS_PATH } from "@/common/constants/paths.constant";
import UiFixedActions from "@/common/ui/ui-fixed-actions/UiFixedActions";
import { Button } from "@mui/material";
import Link from "next/link";

export default function CategoriesActions(): JSX.Element {
  return (
    <UiFixedActions>
      <Button variant="outlined" LinkComponent={Link} href={HOME_PATH}>
        Back
      </Button>
      <Button variant="contained" LinkComponent={Link} href={TEAMS_PATH}>
        Create party
      </Button>
    </UiFixedActions>
  );
}
