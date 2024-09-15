import Card from "@/components/card";
import CardGrid from "@/components/cards-grid";
import { Metadata } from "next";
import PageHead from "@/components/page-head";
import { getPublishedPlantProfiles } from "@/lib/data";

const Page = async () => {
  const data = await getPublishedPlantProfiles();

  return (
    <>
      <PageHead title="Plant Profiles" />
      <CardGrid>
        {data.map((item) => (
          <Card
            key={item.id}
            item={item}
            imgFolder="plants"
            pageFolder="plant-profiles"
          />
        ))}
      </CardGrid>
    </>
  );
};

export const metadata: Metadata = {
  title: "Plant Profiles - Houseplants",
  description: "Care guides for your indoor plants",
};

export default Page;
