import { useChosenCategories } from "@/providers/alias-store-provider/alias-store/slices/chosen-categories-slice/hooks/useChosenCategories.hooks";
import { useRules } from "@/providers/alias-store-provider/alias-store/slices/rules-slice/hooks/useRules.hooks";
import { useTeams } from "@/providers/alias-store-provider/alias-store/slices/teams-slice/hooks/useTeams.hooks";
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
  const teams = useTeams();
  const categories = useChosenCategories();

  const teamsCount = teams.length;

  const query = useQuery({
    queryKey: ["words", wordsToWin, ...categories],
    queryFn: async () => {
      const res = await getWords({
        wordsCount: wordsToWin * teamsCount,
        categories,
      });

      return res;
    },
    enabled: false,
    refetchOnWindowFocus: false,
  });

  return { words: query.data, fetchWords: query.refetch, query };
};
