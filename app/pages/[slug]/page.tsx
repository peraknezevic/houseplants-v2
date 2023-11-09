import PageHead from "@/app/components/PageHead";
import prisma from "@/prisma/client";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";

const Page = async ({ params }: { params: { slug: string } }) => {
  const page = await prisma.page.findUnique({
    where: { slug: params.slug },
  });
  if (!page) notFound();

  return (
    <article className="prose w-full p-10">
      <PageHead title={page.title} pageType="page" />
      <div>
        <ReactMarkdown>{page.content}</ReactMarkdown>
      </div>
    </article>
  );
};

export default Page;
