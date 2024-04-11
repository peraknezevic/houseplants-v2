import { Plant } from "@prisma/client";
import PlantCard from "./plant-card";

interface PlantCardsContainerProps {
  plants: Plant[];
  genusSlug: string;
  genusTitle: string;
}

export default function PlantCardsContainer({
  plants,
  genusSlug,
  genusTitle,
}: PlantCardsContainerProps) {
  return (
    <>
      <h2>{genusTitle} Plants</h2>
      {plants.map((plant) => (
        <PlantCard plant={plant} genusSlug={genusSlug} key={plant.slug} />
      ))}
    </>
  );
}
