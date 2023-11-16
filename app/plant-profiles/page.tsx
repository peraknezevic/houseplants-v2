import { Metadata } from "next";
import Card from "../components/Card";
import CardGrid from "../components/CardGrid";
import CategoryHead from "../components/CategoryHead";
import { plantProfilesData } from "../hooks/useData";

const PlantProfilesPage = async () => {
  const data = await plantProfilesData();

  return (
    <>
      <CategoryHead title="Plant profiles" />
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

export default PlantProfilesPage;
