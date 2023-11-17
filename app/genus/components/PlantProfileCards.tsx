import Section from "@/app/components/Section";
import { PlantProfile } from "@prisma/client";
import Image from "next/image";
import ReactMarkdown from "react-markdown";

interface Props {
  plant: PlantProfile;
}

const PlantProfileCards = ({ plant }: Props) => {
  return (
    <>
      <Section>
        <div>
          <p>
            <strong>Botanical name: </strong>
            {plant.botanicalName}
          </p>
          {plant.synonyms && (
            <p>
              <strong>Synonyms: </strong>
              {plant.synonyms}
            </p>
          )}
          {plant.namedBy && (
            <p>
              <strong>Named by: </strong>
              {plant.namedBy}
            </p>
          )}
          {plant.family && (
            <p>
              <strong>Family: </strong>
              {plant.family}
            </p>
          )}
          {plant.subFamily && (
            <p>
              <strong>Subfamily: </strong>
              {plant.subFamily}
            </p>
          )}
          <p>
            <strong>Genus: </strong>
            {plant.genus}
          </p>
          {plant.nativeArea && (
            <p>
              <strong>Native Area: </strong>
              {plant.nativeArea}
            </p>
          )}
          {plant.tradeNames && (
            <p>
              <strong>Trade names: </strong>
              {plant.tradeNames}
            </p>
          )}
          {plant.inventor && (
            <p>
              <strong>Cultivar Inventor: </strong>
              {plant.inventor}
            </p>
          )}
          {plant.patent && (
            <p>
              <strong>Patent: </strong>
              {plant.patent}
            </p>
          )}
          {plant.commonNames && (
            <p>
              <strong>Common Names: </strong>
              {plant.commonNames}
            </p>
          )}
        </div>
        <figure>
          <Image
            src={`/images/plants/${plant.slug}/${plant.slug}-01.jpg`}
            width={800}
            height={1000}
            alt={plant.title}
          />
          <figcaption>
            {plant.botanicalName}
            <ReactMarkdown>{plant.imageCredits}</ReactMarkdown>
          </figcaption>
        </figure>
      </Section>

      <Section>
        <div>
          <p>
            <strong>Care difficulty: </strong>
            {plant.care === "EASY" && "Easy"}
            {plant.care === "AVARAGE" && "Avarage"}
            {plant.care === "DIFFICULT" && "Difficult"}
          </p>
          <p>
            <strong>Light preference: </strong>
            {plant.light === "LOW_LIGHT" && "Low light"}
            {plant.light === "PARTIAL_SHADE" && "Partial shade"}
            {plant.light === "MEDIUM_LIGHT" && "Medium light"}
            {plant.light === "BRIGHT_LIGHT" && "Bright light"}
            {plant.light === "FULL_SUN" && "Full sun"}
          </p>
          <p>
            <strong>Minimal Temperature: </strong>
            {plant.minimalT}&deg;C / {Math.round((plant.minimalT * 9) / 5 + 32)}
            &deg;F
          </p>
          <p>
            <strong>Optimal Temperature: </strong>
            {plant.optimalT}&deg;C / {Math.round((plant.optimalT * 9) / 5 + 32)}
            &deg;F
          </p>
          <p>
            <strong>Humidity: </strong>
            {plant.humidity === "LOW" && "Low"}
            {plant.humidity === "MEDIUM" && "Medium"}
            {plant.humidity === "HIGH" && "High"}
          </p>
          {plant.watering && (
            <p>
              <strong>Watering: </strong>
              {plant.watering}
            </p>
          )}
          {plant.feeding && (
            <p>
              <strong>Feeding: </strong>
              {plant.feeding}
            </p>
          )}
          {plant.soil && (
            <p>
              <strong>Soil: </strong>
              {plant.soil}
            </p>
          )}
          {plant.soilPH && (
            <p>
              <strong>Soil PH: </strong>
              {plant.soilPH}
            </p>
          )}
          {plant.repotting && (
            <p>
              <strong>Repotting: </strong>
              {plant.repotting}
            </p>
          )}
        </div>
        <figure>
          <Image
            src={`/images/plants/${plant.slug}/${plant.slug}-02.jpg`}
            width={800}
            height={1000}
            alt={plant.title}
          />
          <figcaption>
            {plant.botanicalName}
            <ReactMarkdown>{plant.imageCredits}</ReactMarkdown>
          </figcaption>
        </figure>
      </Section>

      <Section>
        <div>
          <p>
            <strong>Speed of growth: </strong>
            {plant.speedOfGrowth === "SLOW" && "Slow"}
            {plant.speedOfGrowth === "MODERATE" && "Moderate"}
            {plant.speedOfGrowth === "FAST" && "Fast"}
          </p>
          {plant.matureSize && (
            <p>
              <strong>Mature size: </strong>
              {plant.matureSize}
            </p>
          )}
          {plant.flower && (
            <p>
              <strong>Flower: </strong>
              {plant.flower}
            </p>
          )}
          {plant.propagation && (
            <p>
              <strong>Propagation: </strong>
              {plant.propagation}
            </p>
          )}
          {plant.pests && (
            <p>
              <strong>Pests: </strong>
              {plant.pests}
            </p>
          )}
          {plant.diseases && (
            <p>
              <strong>Diseases: </strong>
              {plant.diseases}
            </p>
          )}
          {plant.toxicity && (
            <p>
              <strong>Toxicity: </strong>
              {plant.toxicity === "NOT_TOXIC" && "Not Toxic"}
              {plant.toxicity === "TOXIC" && "Toxic"}
              {plant.toxicity === "NO_INFO" && "No Info"}
            </p>
          )}
        </div>
        <figure>
          <Image
            src={`/images/plants/${plant.slug}/${plant.slug}-03.jpg`}
            width={800}
            height={1000}
            alt={plant.title}
          />
          <figcaption>
            {plant.botanicalName}
            <ReactMarkdown>{plant.imageCredits}</ReactMarkdown>
          </figcaption>
        </figure>
      </Section>

      {plant.notes && (
        <Section id="notes">
          <div>
            <h3>Notes</h3>
            <ReactMarkdown>{plant.notes}</ReactMarkdown>
          </div>
        </Section>
      )}
    </>
  );
};

export default PlantProfileCards;
