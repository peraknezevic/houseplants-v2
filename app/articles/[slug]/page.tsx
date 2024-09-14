import Figure from "@/components/ui/figure";
import Markdown from "@/components/ui/markdown";
import PageHead from "@/components/page-head";
import Section from "@/components/section";
import { Slug } from "@/lib/types";
import { getArticleBySlug } from "@/lib/data";
import { notFound } from "next/navigation";

const Article = async ({ params }: Slug) => {
  const article = await getArticleBySlug(params.slug);

  if (!article) notFound();

  return (
    <article>
      <PageHead title={article.title} pageType="article" />

      {article.intro && (
        <Section>
          <Markdown content={article.intro} />
        </Section>
      )}
      <Section>
        <Markdown content={article.content} />
        <Figure
          imgUrl={`/images/articles/${article.slug}/${article.slug}-1600x900.jpg`}
          alt={article.title}
          caption={article.title}
          credit={article.imageCredits || "Photo by Houseplants/xyz"}
        />
      </Section>
    </article>
  );
};

export default Article;
