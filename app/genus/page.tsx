import { Metadata } from "next";
import Card from "../components/Card";
import CardGrid from "../components/CardGrid";
import { genusPagesData } from "../hooks/useData";
import PageHead from "../components/PageHead";

const GenerasPage = async () => {
  const data = await genusPagesData();
  return (
    <div>
      <PageHead title="Genera Pages" />
      <CardGrid>
        {data.map((item) => (
          <Card
            key={item.id}
            item={item}
            imgFolder="genus"
            pageFolder="genus"
          />
        ))}
      </CardGrid>
    </div>
  );
};

export const metadata: Metadata = {
  title: "Genera Pages - Houseplants",
  description:
    "Pages dedicated to various Plant genera, listing all the species, cultivars and hybrids",
};

export default GenerasPage;
