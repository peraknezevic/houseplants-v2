import { ArticleEssentials } from "./types";
import { addArticle } from "@/lib/actions";

export const handleAddArticle = async (articleData: ArticleEssentials) => {
  await addArticle(articleData);
};
