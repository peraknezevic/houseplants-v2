import CldImage from "@/app/components/Cloudinary";
import PageHead from "@/app/components/PageHead";
import ReactMarkdown from "react-markdown";
import Section from "@/app/components/Section";
import { TSlug } from "@/lib/types";
import { getArticleBySlug } from "@/lib/server-utils";
import { notFound } from "next/navigation";

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
