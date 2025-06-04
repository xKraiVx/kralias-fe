"use client";

import UiSectionContainer from "@/common/ui/ui-section-container/UiSectionContainer";
import UiSectionTitle from "@/common/ui/ui-section-title/UiSectionTitle";
import { IWord } from "@/requests/words/words.types";
import { JSX } from "react";

interface IGameProps {
  words: IWord[];
}

export default function Game({ words }: IGameProps): JSX.Element {
  console.log(words);

  return (
    <UiSectionContainer>
      <UiSectionTitle>Round</UiSectionTitle>
    </UiSectionContainer>
  );
}
