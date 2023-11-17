import { Plant } from "@prisma/client";
import PlantCard from "./PlantCard";

interface Props {
  plants: Plant[];
  genusSlug: string;
  genusTitle: string;
}

const PlantCards = ({ plants, genusSlug, genusTitle }: Props) => {
  return (
    <>
      <h2>{genusTitle} Plants</h2>
      {plants.map((plant) => (
        <PlantCard plant={plant} genusSlug={genusSlug} key={plant.slug} />
      ))}
    </>
  );
};

export default PlantCards;
