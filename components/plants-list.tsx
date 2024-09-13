import { Plant } from "@prisma/client";
import Section from "@/components/section";
import { makeSlug } from "@/lib/utils";

interface PlantsListProps {
  plants: Plant[];
  genusTitle: string;
}

export default function PlantsList({ plants, genusTitle }: PlantsListProps) {
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
                <a href={"#" + makeSlug(plant.title)}>{plant.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </Section>
    </>
  );
}
