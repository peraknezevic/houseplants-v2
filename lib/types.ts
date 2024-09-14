import { Article } from "@prisma/client";

export type Slug = {
  params: { slug: string };
};

export type PostTypes =
  | "article"
  | "plant"
  | "plantProfile"
  | "genusPage"
  | "page";

export type AdminButtonProps = {
  category: string;
  slug: string;
};

export type ArticleEssentials = Omit<
  Article,
  "createdAt" | "updatedAt" | "id" | "userId"
>;
