import { Article } from "@prisma/client";

export type TSlug = {
  params: { slug: string };
};

export type TNode = { children: React.ReactNode };

export type TPostTypes =
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
