import { Plant } from "@prisma/client";
import PlantCard from "./plant-card";

const PlantCardsContainer = ({
  plants,
  genusSlug,
}: {
  plants: Plant[];
  genusSlug: string;
}) => {
  return (
    <>
      {plants.map((plant) => (
        <PlantCard plant={plant} genusSlug={genusSlug} key={plant.slug} />
      ))}
    </>
  );
};

export default PlantCardsContainer;
