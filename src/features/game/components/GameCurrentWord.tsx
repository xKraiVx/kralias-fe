import { useGetCurrentWord } from "@/features/game/hooks/useGetCurrentWord";
import { Skeleton, Typography } from "@mui/material";
import { JSX } from "react";

export default function GameCurrentWord(): JSX.Element {
  const currentWord = useGetCurrentWord();

  if (!currentWord) {
    return <Skeleton variant="text" width={200} height={115} />;
  }

  return (
    <Typography variant="h1" component="p">
      {currentWord.name}
    </Typography>
  );
}
