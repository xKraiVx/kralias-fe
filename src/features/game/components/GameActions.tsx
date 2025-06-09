"use client";

import { TURN_RESULT_PATH } from "@/common/constants/paths.constant";
import UiFixedActions from "@/common/ui/ui-fixed-actions/UiFixedActions";
import { useAddWordToTeam } from "@/features/game/hooks/useAddWordToTeam";
import { useGetIsTurnFinished } from "@/providers/alias-store-provider/alias-store/hooks/useGetIsTurnFinished";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";
import { JSX } from "react";

export default function GameActions(): JSX.Element {
  const addWordToTeam = useAddWordToTeam();
  const isTurnFinished = useGetIsTurnFinished();
  const { push } = useRouter();

  const handleClick = (isAnswered: boolean) => {
    addWordToTeam(isAnswered);
    console.log({ isAnswered, isTurnFinished });

    if (isTurnFinished) {
      push(TURN_RESULT_PATH);
    }
  };

  return (
    <UiFixedActions>
      <Button
        variant="contained"
        color="error"
        onClick={() => handleClick(false)}
      >
        Skip
      </Button>
      <Button variant="contained" onClick={() => handleClick(true)}>
        Answered
      </Button>
    </UiFixedActions>
  );
}
