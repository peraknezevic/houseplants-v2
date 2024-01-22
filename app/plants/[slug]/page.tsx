import React from "react";
import ReactMarkdown from "react-markdown";
import CldImage from "@/app/components/Cloudinary";
import { plantData } from "@/app/hooks/useData";
import Section from "@/app/components/Section";
import PageHead from "@/app/components/PageHead";

interface Props {
  params: { slug: string };
}

const PlantProfile = async ({ params }: Props) => {
  const pageType = "Plant";
  const plant = await plantData(params.slug);

  if (!plant) return <p>We don&pos;t have a page for this plant yet</p>;

  return (
    <article>
      <PageHead title={plant.botanicalName} pageType={pageType} />
      <Section>
        <div>
          {plant.synonyms && (
            <p>
              <strong>Synonyms:</strong> {plant.synonyms}
            </p>
          )}
          {plant.tradeNames && (
            <p>
              <strong>Trade Names:</strong> {plant.tradeNames}
            </p>
          )}
          {plant.commonNames && (
            <p>
              <strong>Common Names:</strong> {plant.commonNames}
            </p>
          )}
          {plant.namedBy && (
            <p>
              <strong>Described by:</strong> {plant.namedBy}
            </p>
          )}
          {plant.inventor && (
            <p>
              <strong>Inventor:</strong> {plant.inventor}
            </p>
          )}
          {plant.patent && (
            <p>
              <strong>Patent:</strong> {plant.patent}
            </p>
          )}
          {plant.nativeArea && (
            <p>
              <strong>Native to:</strong> {plant.nativeArea}
            </p>
          )}
          {plant.note && (
            <p>
              <strong>*</strong> {plant.note}
            </p>
          )}
          {plant.parents && (
            <p>
              <strong>Plant parent(s):</strong> {plant.parents}
            </p>
          )}
          {plant.children && (
            <p>
              <strong>Cultivars and Hybrids:</strong> {plant.children}
            </p>
          )}
        </div>
        {plant.hasImage && (
          <figure>
            <CldImage
              src={`/images/genus/${plant.genusPageSlug}/${plant.slug}.jpg`}
              width={800}
              height={1000}
              alt={plant.botanicalName}
            />
            <figcaption>
              {plant.botanicalName}
              <ReactMarkdown>{plant.imageCredits}</ReactMarkdown>
            </figcaption>
          </figure>
        )}
      </Section>
    </article>
  );
};

export default PlantProfile;
