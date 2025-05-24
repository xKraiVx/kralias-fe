export interface ICategory {
  id: string;
  name: string;
  slug: string;
  hasWords: boolean;
}

export interface ICategoriesResponse {
  data: ICategory[];
}
