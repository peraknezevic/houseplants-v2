import { Metadata } from "next";
import Card from "../components/Card";
import CardGrid from "../components/CardGrid";
import PageHead from "../components/PageHead";
import { plantProfilesData } from "../hooks/useData";

export const metadata: Metadata = {
  title: "Plant Profiles - Houseplants",
  description: "Care guides for your indoor plants",
};

const PlantProfilesPage = async () => {
  const data = await plantProfilesData();

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

export default PlantProfilesPage;
