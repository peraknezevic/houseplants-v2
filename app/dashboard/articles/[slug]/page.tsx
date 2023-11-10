import { articleData } from "@/app/hooks/useData";
import dynamic from "next/dynamic";
import { notFound } from "next/navigation";

interface Props {
  params: { slug: string };
}

const ArticleForm = dynamic(
  () => import("@/app/dashboard/articles/_components/ArticleForm"),
  {
    ssr: false,
  },
);

const EditArticle = async ({ params }: Props) => {
  const article = await articleData(params.slug);

  if (!article) notFound();

  return <ArticleForm article={article} />;
};

export default EditArticle;
