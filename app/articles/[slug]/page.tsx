import CldImage from "@/components/cloudinary";
import { DAILY } from "@/lib/constants";
import PageHead from "@/components/page-head";
import ReactMarkdown from "react-markdown";
import Section from "@/components/section";
import { TSlug } from "@/lib/types";
import { getArticleBySlug } from "@/lib/server-utils";
import { notFound } from "next/navigation";

export const revalidate = DAILY;

export default async function Article({ params }: TSlug) {
  const article = await getArticleBySlug(params.slug);

  if (!article) notFound();

  return (
    <article>
      <PageHead title={article.title} pageType="article" />

      {article.intro && (
        <Section>
          <div>
            <ReactMarkdown>{article.intro}</ReactMarkdown>
          </div>
        </Section>
      )}
      <Section>
        <div>
          <ReactMarkdown>{article.content}</ReactMarkdown>
        </div>
        <figure>
          <CldImage
            src={`/images/articles/${article.slug}/${article.slug}-1600x900.jpg`}
            width={800}
            height={1000}
            alt={article.title}
          />
          <figcaption>
            <ReactMarkdown>{article.imageCredits}</ReactMarkdown>
          </figcaption>
        </figure>
      </Section>
    </article>
  );
}
