import H2 from "@/components/ui/H2";
import Markdown from "@/components/ui/markdown";
import PageHead from "@/components/page-head";
import PlantCard from "@/components/plant-card";
import PlantsList from "@/components/plants-list";
import Section from "@/components/section";
import { getCldOgImageUrl } from "next-cloudinary";
import { getGenusPageData } from "@/lib/data";

const Page = async ({ params }: { params: { slug: string } }) => {
  const [genusPage, plants] = await getGenusPageData(params.slug);

  if (!genusPage) return <p>No genus page found</p>;
  if (genusPage.published === "DRAFT")
    return <p>This genus page has not yet been published</p>;
  if (genusPage.published === "REVIEW")
    return <p>This genus page is being reviewed</p>;

  return (
    <article>
      <PageHead title={genusPage.title} pageType="Genus" />

      <Section>
        <Markdown content={genusPage.intro} />
      </Section>

      <H2 title={`${genusPage.title} Plants List`} />
      <PlantsList plants={plants} />

      <H2 title={`${genusPage.title} Plants`} />
      {plants.map((plant) => (
        <PlantCard plant={plant} genusSlug={params.slug} key={plant.slug} />
      ))}

      {genusPage.thanks && (
        <Section>
          <Markdown title="Thanks" content={genusPage.thanks} />
        </Section>
      )}

      <Section>
        <Markdown title="Changelog" content={genusPage.changeLog} />
      </Section>
    </article>
  );
};

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
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

export default Page;
