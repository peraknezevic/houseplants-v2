import Card from "../components/Card";
import CardGrid from "../components/CardGrid";
import { Metadata } from "next";
import PageHead from "../components/PageHead";
import { getArticles } from "@/lib/server-utils";

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
