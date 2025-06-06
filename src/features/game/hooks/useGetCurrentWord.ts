import { useGameStats } from "@/providers/alias-store-provider/alias-store/slices/game-stats-slice/hooks/useGameStats";
import { useGameStatsActions } from "@/providers/alias-store-provider/alias-store/slices/game-stats-slice/hooks/useGameStatsActions";
import { useGetWords } from "@/requests/words/useGetWords";
import { IWord } from "@/requests/words/words.types";
import { useEffect } from "react";

export const useGetCurrentWord = (): IWord | undefined => {
  const { currentTurnWords } = useGameStats();
  const { setCurrentTurnWords } = useGameStatsActions();
  const { fetchWords, words } = useGetWords();

  useEffect(() => {
    if (!!currentTurnWords && currentTurnWords.length) {
      return;
    }

    fetchWords();
  }, [currentTurnWords, fetchWords]);

  useEffect(() => {
    if (words) {
      setCurrentTurnWords(words);
    }
  }, [setCurrentTurnWords, words]);

  return currentTurnWords?.[0];
};
