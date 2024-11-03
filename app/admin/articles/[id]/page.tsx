import Form from "@/components/form";
import { articleFields } from "@/lib/constants";
import { getArticleById } from "@/lib/data";
import { updateArticle } from "@/lib/actions";

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const article = await getArticleById(id);
  if (!article) return <p>Article could not be found.</p>;
  return (
    <Form content={article} fields={articleFields} formAction={updateArticle} />
  );
};

export default Page;
