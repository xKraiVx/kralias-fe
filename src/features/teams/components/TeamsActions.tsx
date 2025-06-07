"use client";

import { JSX } from "react";

import { CATEGORIES_PATH, RULES_PATH } from "@/common/constants/paths.constant";
import UiFixedActions from "@/common/ui/ui-fixed-actions/UiFixedActions";
import { Button } from "@mui/material";
import Link from "next/link";
import { useGetAliasStepFinished } from "@/providers/alias-store-provider/alias-store/hooks/useGetAliasStepFinished";

export default function TeamsActions(): JSX.Element {
  const { isTeamsStepFinished } = useGetAliasStepFinished();

  return (
    <UiFixedActions>
      <Button variant="outlined" LinkComponent={Link} href={CATEGORIES_PATH}>
        Reselect categories
      </Button>
      <Button
        variant="contained"
        disabled={!isTeamsStepFinished}
        LinkComponent={Link}
        href={RULES_PATH}
      >
        Define rules
      </Button>
    </UiFixedActions>
  );
}
