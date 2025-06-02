import { fetcher } from "@/requests/fetcher";
import { IWordsResponse } from "@/requests/words/words.types";

interface IGetWordsArguments {
  wordsCount: number;
  categories: string[];
}

export const getWords = async ({
  wordsCount,
  categories,
}: IGetWordsArguments) => {
  const { data } = await fetcher<IWordsResponse>({
    endpoint: "/words/for-game",
    options: {
      method: "GET",
    },
    params: {
      categories,
      wordsCount: String(wordsCount),
    },
  });

  return data;
};
