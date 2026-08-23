import ArticleForm from "@/components/admin/article-form";
import { getArticleBySlug } from "@/lib/data";
import { notFound } from "next/navigation";

const EditArticlePage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  if (!article) notFound();

  return (
    <div>
      <h1 className="mb-6 text-2xl font-semibold">Edit article</h1>
      <ArticleForm article={article} />
    </div>
  );
};

export default EditArticlePage;
