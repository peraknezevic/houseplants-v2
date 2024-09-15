import Card from "@/components/card";
import CardGrid from "@/components/cards-grid";
import { Metadata } from "next";
import PageHead from "@/components/page-head";
import { getPublishedArticles } from "@/lib/data";

const Page = async () => {
  const data = await getPublishedArticles();

  return (
    <>
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
    </>
  );
};

export const metadata: Metadata = {
  title: "Articles - Houseplants",
  description: "Articles about your indoor plants",
};

export default Page;
