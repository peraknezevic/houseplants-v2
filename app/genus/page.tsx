import Card from "@/components/card";
import CardGrid from "@/components/cards-grid";
import { Metadata } from "next";
import PageHead from "@/components/page-head";
import { getPublishedGeneras } from "@/lib/data";

const GenerasPage = async () => {
  const data = await getPublishedGeneras();

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
