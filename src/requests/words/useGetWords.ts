import { useChosenCategories } from "@/providers/alias-store-provider/alias-store/slices/chosen-categories-slice/hooks/useChosenCategories.hooks";
import { useRules } from "@/providers/alias-store-provider/alias-store/slices/rules-slice/hooks/useRules.hooks";
import { getWords } from "@/requests/words/getWords";
import { IWord } from "@/requests/words/words.types";
import { useQuery, UseQueryResult } from "@tanstack/react-query";

interface IUseGetWords {
  words: IWord[] | undefined;
  fetchWords: VoidFunction;
  query: UseQueryResult<IWord[], Error>;
}

export const useGetWords = (): IUseGetWords => {
  const { wordsToWin } = useRules();
  const categories = useChosenCategories();

  const query = useQuery({
    queryKey: ["words", wordsToWin, ...categories],
    queryFn: async () => {
      const res = await getWords({
        wordsCount: wordsToWin,
        categories,
      });

      return res;
    },
    enabled: false,
    refetchOnWindowFocus: false,
  });

  return { words: query.data, fetchWords: query.refetch, query };
};
