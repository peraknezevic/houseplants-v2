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

export default PlantProfilesPage;
