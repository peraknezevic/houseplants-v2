import { getGenusBySlug, getPlantsByGenusSlug } from "@/lib/data";

import { HOURLY } from "@/lib/constants";
import PageHead from "@/components/page-head";
import PlantCards from "@/components/plant-cards-container";
import PlantsList from "@/components/plants-list";
import ReactMarkdown from "react-markdown";
import Section from "@/components/section";
import { TSlug } from "@/lib/types";
import { getCldOgImageUrl } from "next-cloudinary";

export const revalidate = HOURLY;

export default async function GenusPage({ params }: TSlug) {
  const genusPage = await getGenusBySlug(params.slug);
  const plants = await getPlantsByGenusSlug(params.slug);

  if (!genusPage) return <p>No genus page found</p>;
  if (genusPage.published === "DRAFT")
    return <p>This genus page has not yet been published</p>;
  if (genusPage.published === "REVIEW")
    return <p>This genus page is being reviewed</p>;

  return (
    <article id="top">
      <PageHead title={genusPage.title} pageType="Genus" />

      <Section id="intro">
        <div>
          <ReactMarkdown>{genusPage.intro}</ReactMarkdown>
        </div>
      </Section>

      <PlantsList plants={plants} genusTitle={genusPage.title} />

      <PlantCards
        plants={plants}
        genusSlug={genusPage.slug}
        genusTitle={genusPage.title}
      />

      {genusPage.thanks && (
        <Section id="thanks">
          <div>
            <h3>Thanks</h3>
            <ReactMarkdown>{genusPage.thanks}</ReactMarkdown>
          </div>
        </Section>
      )}

      <Section id="changelog">
        <div className="list-disc">
          <h3>Changelog</h3>
          <ReactMarkdown>{genusPage.changeLog}</ReactMarkdown>
        </div>
      </Section>
    </article>
  );
}

export async function generateMetadata({ params }: TSlug) {
  const publicId = `images/genus/${params.slug}/genus-${params.slug}-og-en.jpg`;
  const url = "https://houseplants.xyz";
  const pageUrl = `${url}/genus/${params.slug}`;
  const pageTitle = params.slug[0].toUpperCase() + params.slug.slice(1);
  const title = `${pageTitle} species, cultivars and hybrids - genus ${pageTitle}`;
  const description = `List of all the ${pageTitle} plant varieties in cultivation`;
  const keywords = `${pageTitle}, ${pageTitle} varieties, ${pageTitle} species, ${pageTitle} cultivars, ${pageTitle} hybrids`;
  return {
    title: title,
    description: description,
    keywords: keywords,
    openGraph: {
      title: title,
      description: description,
      url: pageUrl,
      siteName: "Houseplants",
      images: [
        {
          // Prefer a different size? Be sure to update the width and height of the
          // metadata as well as the image configuration of getCldOgImageUrl
          width: 1200,
          height: 627,
          url: getCldOgImageUrl({
            src: publicId,
            effects: [{ colorize: "100,co_black" }],
            overlays: [
              {
                publicId,
                width: 2400,
                height: 1254,
                crop: "fill",
                effects: [
                  {
                    opacity: 30,
                  },
                ],
              },
              {
                width: 1400,
                crop: "fit",
                text: {
                  alignment: "center",
                  color: "white",
                  fontFamily: "Source Sans Pro",
                  fontSize: 160,
                  fontWeight: "bold",
                  text: pageTitle,
                },
                position: {
                  y: -100,
                },
              },
              {
                width: 1400,
                crop: "fit",
                text: {
                  alignment: "center",
                  color: "white",
                  fontFamily: "Source Sans Pro",
                  fontSize: 74,
                  text: description,
                },
                position: {
                  y: 100,
                },
              },
            ],
          }),
        },
      ],
      type: "article",
      authors: ["Pera Knezevic / Houseplants.xyz"],
      locale: "en_US",
    },
  };
}
