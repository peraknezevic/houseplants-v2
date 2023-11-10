import PageHead from "@/app/components/PageHead";
import prisma from "@/prisma/client";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import Image from "next/image";
import Section from "@/app/components/Section";

const Article = async ({ params }: { params: { slug: string } }) => {
  const article = await prisma.article.findUnique({
    where: { slug: params.slug },
  });
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
          <Image
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
};

export default Article;
