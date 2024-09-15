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
