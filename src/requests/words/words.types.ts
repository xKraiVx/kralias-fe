export interface IWord {
  id: number;
  name: string;
  categories: string[];
}

export interface IWordsResponse {
  data: IWord[];
}
