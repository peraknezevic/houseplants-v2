import prisma from "@/prisma/client";
import ArticleForm from "../_components/ArticleForm";
import { notFound } from "next/navigation";

interface Props {
  params: { slug: string };
}

const EditPage = async ({ params }: Props) => {
  const article = await prisma.article.findUnique({
    where: { slug: params.slug },
  });
  if (!article) notFound();

  return <ArticleForm article={article} />;
};

export default EditPage;
