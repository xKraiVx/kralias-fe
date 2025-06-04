"use client";

import FullPageLoader from "@/common/components/full-page-loader/FullPageLoader";
import Game from "@/features/game/Game";
import { useGetWords } from "@/requests/words/useGetWords";
import { JSX } from "react";

export default function Page(): JSX.Element {
  const { words } = useGetWords();

  if (!words) {
    return <FullPageLoader />;
  }

  return <Game words={words} />;
}
