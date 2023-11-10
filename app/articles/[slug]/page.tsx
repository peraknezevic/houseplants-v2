import PageHead from "@/app/components/PageHead";
import prisma from "@/prisma/client";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import Image from "next/image";

const Article = async ({ params }: { params: { slug: string } }) => {
  const article = await prisma.article.findUnique({
    where: { slug: params.slug },
  });
  if (!article) notFound();

  return (
    <article>
      <PageHead title={article.title} pageType="article" />

      <figure>
        <Image
          src={`/images/articles/${article.slug}/${article.slug}-1600x900.jpg`}
          width={800}
          height={1000}
          alt={article.title}
        />
        <figcaption>
          {/* <ReactMarkdown>{plant.imageCredits}</ReactMarkdown> */}
        </figcaption>
      </figure>

      {article.intro && (
        <section>
          <div>
            <ReactMarkdown>{article.intro}</ReactMarkdown>
          </div>
        </section>
      )}
      <div>
        <ReactMarkdown>{article.content}</ReactMarkdown>
      </div>
    </article>
  );
};

export default Article;
