import PageHead from "@/components/page-head";
import ReactMarkdown from "react-markdown";
import { Slug } from "@/lib/types";
import { getPageBySlug } from "@/lib/data";
import { notFound } from "next/navigation";

const Page = async ({ params }: Slug) => {
  const page = await getPageBySlug(params.slug);
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
