import Markdown from "@/components/ui/markdown";
import PageHead from "@/components/page-head";
import { getPageBySlug } from "@/lib/data";
import { notFound } from "next/navigation";

const Page = async ({ params }: { params: { slug: string } }) => {
  const page = await getPageBySlug(params.slug);
  if (!page) notFound();

  return (
    <article className="prose w-full p-10">
      <PageHead title={page.title} pageType="page" />
      <Markdown content={page.content} />
    </article>
  );
};

export default Page;
