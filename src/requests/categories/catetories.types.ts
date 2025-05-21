export interface ICategory {
  id: string;
  documentId: string;
  name: string;
  slug: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
}

export interface ICategoriesResponse {
  data: ICategory[];
}
