import Figure from "@/components/ui/figure";
import Markdown from "@/components/ui/markdown";
import PageHead from "@/components/page-head";
import Section from "@/components/section";
import { getArticleBySlug } from "@/lib/data";
import { notFound } from "next/navigation";

const Page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

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

export default Page;
