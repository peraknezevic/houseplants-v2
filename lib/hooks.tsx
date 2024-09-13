import { ArticleEssentials } from "./types";
import { addArticle } from "@/actions/actions";

export const handleAddArticle = async (articleData: ArticleEssentials) => {
  await addArticle(articleData);
};
