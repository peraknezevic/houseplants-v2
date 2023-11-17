import PageHead from "@/app/components/PageHead";
import Section from "@/app/components/Section";
import { genusPageData, plantsData } from "@/app/hooks/useData";
import ReactMarkdown from "react-markdown";
import { Plant } from "@prisma/client";
import PlantsList from "../components/PlantsList";
import PlantCards from "../components/PlantCards";
interface Props {
  params: { slug: string };
}

export async function generateMetadata({ params }: Props) {
  const url = "https://houseplants.xyz";
  const pageUrl = `${url}/genus/{params,slug}`;
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
          url: `${url}/images/genus/${params.slug}/genus-${params.slug}-og-en.jpg`,
          width: 1200,
          height: 630,
        },
        {
          url: `${url}/images/genus/${params.slug}/genus-${params.slug}-1600x900.jpg`,
          width: 1600,
          height: 900,
        },
        {
          url: `${url}/images/genus/${params.slug}/genus-${params.slug}-pinterest-en.jpg`,
          width: 1000,
          height: 1500,
        },
      ],
      type: "article",
      authors: ["Pera Knezevic / Houseplants.xyz"],
      locale: "en_US",
    },
  };
}

export const revalidate = 3600;

const Genus = async ({ params }: Props) => {
  const genusPage = await genusPageData(params.slug);
  const plants: Plant[] = await plantsData(params.slug);

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
};
export default Genus;
