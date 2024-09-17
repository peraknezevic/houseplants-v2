import Form from "@/components/forms/form";
import { articleFields } from "@/lib/constants";
import { getArticleById } from "@/lib/data";
import { updateArticle } from "@/lib/actions";

const Page = async ({ params }: { params: { id: string } }) => {
  const article = await getArticleById(params.id);
  if (!article) return <p>Article could not be found.</p>;
  return (
    <Form content={article} fields={articleFields} formAction={updateArticle} />
  );
};

export default Page;
