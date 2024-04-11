import Card from "@/components/card";
import CardGrid from "@/components/cards-grid";
import { DAILY } from "@/lib/constants";
import { Metadata } from "next";
import PageHead from "@/components/page-head";
import { getArticles } from "@/lib/server-utils";

export const revalidate = DAILY;

export default async function ArticlesPage() {
  const data = await getArticles();

  return (
    <div>
      <PageHead title="Articles" />
      <CardGrid>
        {data.map((item) => (
          <Card
            key={item.id}
            item={item}
            imgFolder="articles"
            pageFolder="articles"
          />
        ))}
      </CardGrid>
    </div>
  );
}

export const metadata: Metadata = {
  title: "Articles - Houseplants",
  description: "Articles about your indoor plants",
};
