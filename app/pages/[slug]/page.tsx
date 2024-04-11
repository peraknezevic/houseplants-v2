import PageHead from "@/components/page-head";
import ReactMarkdown from "react-markdown";
import { TSlug } from "@/lib/types";
import { getPageBySlug } from "@/lib/server-utils";
import { notFound } from "next/navigation";
import { DAILY } from "@/lib/constants";

export const revalidate = DAILY;

export default async function Page({ params }: TSlug) {
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
}
