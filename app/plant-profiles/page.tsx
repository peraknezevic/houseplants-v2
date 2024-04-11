import Card from "@/components/card";
import CardGrid from "@/components/cards-grid";
import { Metadata } from "next";
import PageHead from "@/components/page-head";
import { getPlantProfiles } from "@/lib/server-utils";
import { DAILY } from "@/lib/constants";

export const revalidate = DAILY;

export default async function PlantProfilesPage() {
  const data = await getPlantProfiles();

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
}

export const metadata: Metadata = {
  title: "Plant Profiles - Houseplants",
  description: "Care guides for your indoor plants",
};
