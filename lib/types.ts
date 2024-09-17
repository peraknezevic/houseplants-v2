import { Article } from "@prisma/client";

export type PostTypes =
  | "article"
  | "plant"
  | "plantProfile"
  | "genusPage"
  | "page";

export type ArticleEssentials = Omit<
  Article,
  "createdAt" | "updatedAt" | "id" | "userId"
>;

export type Field = {
  element: string;
  type?: string;
  name: string;
  label: string;
  options?: string[];
  placeholder?: string;
};
