"use client";

import { TArticleForm, articleFormSchema } from "@/lib/validations";
import { addArticle, editArticle } from "@/actions/actions";

import { Article } from "@prisma/client";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

type ArticleFormProps = {
  actionType: "add" | "edit";
  article: Article;
};
export default function ArticleForm({ actionType, article }: ArticleFormProps) {
  const {
    register,
    trigger,
    getValues,
    formState: { errors },
  } = useForm<TArticleForm>({
    resolver: zodResolver(articleFormSchema),
    defaultValues:
      actionType === "edit"
        ? {
            title: article.title,
            slug: article.slug,
            intro: article.intro,
            content: article.content,
            imageCredits: article.imageCredits,
            published: article.published,
            language: article.language,
          }
        : undefined,
  });

  return (
    <form
      action={async () => {
        const result = await trigger();

        if (!result) return;

        const articleData = getValues();

        if (actionType === "add") {
          await addArticle(articleData);
        } else if ((actionType = "edit")) {
          await editArticle(article.id, articleData);
        }
      }}
    >
      <Input id="title" />
    </form>
  );
}
