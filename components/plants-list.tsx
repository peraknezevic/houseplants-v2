import { Plant } from "@prisma/client";
import Section from "@/components/section";

interface PlantsListProps {
  plants: Plant[];
  genusTitle: string;
}

export default function PlantsList({ plants, genusTitle }: PlantsListProps) {
  const removeChars = (text: string) =>
    text
      .replaceAll("'", "")
      .replaceAll("‘", "")
      .replaceAll("’", "")
      .replaceAll('"', "")
      .replaceAll(" ", "")
      .toLowerCase();
  return (
    <>
      <h2>{genusTitle} Plants List</h2>
      <Section id="plant-list">
        <div>
          <ul className="space-y-2 text-base font-medium sm:columns-2">
            {plants.map((plant) => (
              <li
                key={plant.slug}
                className="flex before:mr-2 before:content-['▸']"
              >
                <a href={"#" + removeChars(plant.title)}>{plant.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </Section>
    </>
  );
}
