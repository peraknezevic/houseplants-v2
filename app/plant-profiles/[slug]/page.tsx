import React from "react";
import ReactMarkdown from "react-markdown";
import Image from "next/image";
import { plantProfileData } from "@/app/hooks/useData";
import Section from "@/app/components/Section";
import PageHead from "@/app/components/PageHead";

interface Props {
  params: { slug: string };
}

const PlantProfile = async ({ params }: Props) => {
  const pageType = "Plant Profile";
  const plantProfile = await plantProfileData(params.slug);

  if (!plantProfile)
    return <p>We don&pos;t have a profile page for this plant yet</p>;
  if (plantProfile.published === "DRAFT")
    return <p>This profile page is not yet published</p>;
  if (plantProfile.published === "REVIEW")
    return <p>This profile page is being reviewed</p>;

  return (
    <article>
      <PageHead title={plantProfile.title} pageType={pageType} />
      <Section>
        <div>
          <p>
            <strong>Botanical name: </strong>
            {plantProfile.botanicalName}
          </p>
          {plantProfile.synonyms && (
            <p>
              <strong>Synonyms: </strong>
              {plantProfile.synonyms}
            </p>
          )}
          {plantProfile.namedBy && (
            <p>
              <strong>Named by: </strong>
              {plantProfile.namedBy}
            </p>
          )}
          {plantProfile.family && (
            <p>
              <strong>Family: </strong>
              {plantProfile.family}
            </p>
          )}
          {plantProfile.subFamily && (
            <p>
              <strong>Subfamily: </strong>
              {plantProfile.subFamily}
            </p>
          )}
          <p>
            <strong>Genus: </strong>
            {plantProfile.genus}
          </p>
          {plantProfile.nativeArea && (
            <p>
              <strong>Native Area: </strong>
              {plantProfile.nativeArea}
            </p>
          )}
          {plantProfile.tradeNames && (
            <p>
              <strong>Trade names: </strong>
              {plantProfile.tradeNames}
            </p>
          )}
          {plantProfile.inventor && (
            <p>
              <strong>Cultivar Inventor: </strong>
              {plantProfile.inventor}
            </p>
          )}
          {plantProfile.patent && (
            <p>
              <strong>Patent: </strong>
              {plantProfile.patent}
            </p>
          )}
          {plantProfile.commonNames && (
            <p>
              <strong>Common Names: </strong>
              {plantProfile.commonNames}
            </p>
          )}
        </div>
        <figure>
          <Image
            src={`/images/plants/${plantProfile.slug}/${plantProfile.slug}-01.jpg`}
            width={800}
            height={1000}
            alt={plantProfile.title}
          />
          <figcaption>
            {plantProfile.botanicalName}
            <ReactMarkdown>{plantProfile.imageCredits}</ReactMarkdown>
          </figcaption>
        </figure>
      </Section>

      <Section>
        <div>
          <p>
            <strong>Care difficulty: </strong>
            {plantProfile.care === "EASY" && "Easy"}
            {plantProfile.care === "AVARAGE" && "Avarage"}
            {plantProfile.care === "DIFFICULT" && "Difficult"}
          </p>
          <p>
            <strong>Light preference: </strong>
            {plantProfile.light === "LOW_LIGHT" && "Low light"}
            {plantProfile.light === "PARTIAL_SHADE" && "Partial shade"}
            {plantProfile.light === "MEDIUM_LIGHT" && "Medium light"}
            {plantProfile.light === "BRIGHT_LIGHT" && "Bright light"}
            {plantProfile.light === "FULL_SUN" && "Full sun"}
          </p>
          <p>
            <strong>Minimal Temperature: </strong>
            {plantProfile.minimalT}&deg;C /{" "}
            {Math.round((plantProfile.minimalT * 9) / 5 + 32)}
            &deg;F
          </p>
          <p>
            <strong>Optimal Temperature: </strong>
            {plantProfile.optimalT}&deg;C /{" "}
            {Math.round((plantProfile.optimalT * 9) / 5 + 32)}
            &deg;F
          </p>
          <p>
            <strong>Humidity: </strong>
            {plantProfile.humidity === "LOW" && "Low"}
            {plantProfile.humidity === "MEDIUM" && "Medium"}
            {plantProfile.humidity === "HIGH" && "High"}
          </p>
          {plantProfile.watering && (
            <p>
              <strong>Watering: </strong>
              {plantProfile.watering}
            </p>
          )}
          {plantProfile.feeding && (
            <p>
              <strong>Feeding: </strong>
              {plantProfile.feeding}
            </p>
          )}
          {plantProfile.soil && (
            <p>
              <strong>Soil: </strong>
              {plantProfile.soil}
            </p>
          )}
          {plantProfile.soilPH && (
            <p>
              <strong>Soil PH: </strong>
              {plantProfile.soilPH}
            </p>
          )}
          {plantProfile.repotting && (
            <p>
              <strong>Repotting: </strong>
              {plantProfile.repotting}
            </p>
          )}
        </div>
        <figure>
          <Image
            src={`/images/plants/${plantProfile.slug}/${plantProfile.slug}-02.jpg`}
            width={800}
            height={1000}
            alt={plantProfile.title}
          />
          <figcaption>
            {plantProfile.botanicalName}
            <ReactMarkdown>{plantProfile.imageCredits}</ReactMarkdown>
          </figcaption>
        </figure>
      </Section>

      <Section>
        <div>
          <p>
            <strong>Speed of growth: </strong>
            {plantProfile.speedOfGrowth === "SLOW" && "Slow"}
            {plantProfile.speedOfGrowth === "MODERATE" && "Moderate"}
            {plantProfile.speedOfGrowth === "FAST" && "Fast"}
          </p>
          {plantProfile.matureSize && (
            <p>
              <strong>Mature size: </strong>
              {plantProfile.matureSize}
            </p>
          )}
          {plantProfile.flower && (
            <p>
              <strong>Flower: </strong>
              {plantProfile.flower}
            </p>
          )}
          {plantProfile.propagation && (
            <p>
              <strong>Propagation: </strong>
              {plantProfile.propagation}
            </p>
          )}
          {plantProfile.pests && (
            <p>
              <strong>Pests: </strong>
              {plantProfile.pests}
            </p>
          )}
          {plantProfile.diseases && (
            <p>
              <strong>Diseases: </strong>
              {plantProfile.diseases}
            </p>
          )}
          {plantProfile.toxicity && (
            <p>
              <strong>Toxicity: </strong>
              {plantProfile.toxicity === "NOT_TOXIC" && "Not Toxic"}
              {plantProfile.toxicity === "TOXIC" && "Toxic"}
              {plantProfile.toxicity === "NO_INFO" && "No Info"}
            </p>
          )}
        </div>
        <figure>
          <Image
            src={`/images/plants/${plantProfile.slug}/${plantProfile.slug}-03.jpg`}
            width={800}
            height={1000}
            alt={plantProfile.title}
          />
          <figcaption>
            {plantProfile.botanicalName}
            <ReactMarkdown>{plantProfile.imageCredits}</ReactMarkdown>
          </figcaption>
        </figure>
      </Section>

      {plantProfile.notes && (
        <Section id="notes">
          <div>
            <h3>Notes</h3>
            <ReactMarkdown>{plantProfile.notes}</ReactMarkdown>
          </div>
        </Section>
      )}
    </article>
  );
};

export default PlantProfile;
