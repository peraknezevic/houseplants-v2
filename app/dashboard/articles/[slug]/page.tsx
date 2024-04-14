import { TSlug } from "@/lib/types";
import { getArticleBySlug } from "@/lib/server-utils";
import { notFound } from "next/navigation";

const ArticleForm = dynamic(
  () => import("@/app/dashboard/articles/_components/ArticleForm"),
  {
    ssr: false,
  },
);

const EditArticle = async ({ params }: TSlug) => {
  const article = await getArticleBySlug(params.slug);

  if (!article) notFound();

  return <ArticleForm article={article} />;
};

export default EditArticle;
