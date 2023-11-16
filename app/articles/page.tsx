import { Metadata } from "next";
import Card from "../components/Card";
import CardGrid from "../components/CardGrid";
import CategoryHead from "../components/CategoryHead";
import { articlesData } from "../hooks/useData";

const ArticlesPage = async () => {
  const data = await articlesData();

  return (
    <div>
      <CategoryHead title="Articles" />
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
};

export const metadata: Metadata = {
  title: "Articles - Houseplants",
  description: "Articles about your indoor plants",
};

export default ArticlesPage;
