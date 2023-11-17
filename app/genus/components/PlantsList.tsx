import Section from "@/app/components/Section";
import { Plant } from "@prisma/client";
import { removeChars } from "../[slug]/page";

interface Props {
  plants: Plant[];
  genusTitle: string;
}

const PlantsList = ({ plants, genusTitle }: Props) => {
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
                <a href={"#" + removeChars(plant.botanicalName)}>
                  {plant.botanicalName}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Section>
    </>
  );
};

export default PlantsList;
