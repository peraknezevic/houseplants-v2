import PageHead from "@/app/components/PageHead";
import Section from "@/app/components/Section";
import { genusPageData, plantsData } from "@/app/hooks/useData";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import type { Metadata } from "next";
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
  const pageType = "Genus";
  const genusPage = await genusPageData(params.slug);
  const plants = await plantsData(params.slug);
  const removeChars = (text: string) =>
    text
      .replaceAll("'", "")
      .replaceAll("‘", "")
      .replaceAll("’", "")
      .replaceAll('"', "")
      .replaceAll(" ", "")
      .toLowerCase();

  if (!genusPage) return <p>No genus page found</p>;
  if (genusPage.published === "DRAFT")
    return <p>This genus page is not yet published</p>;
  if (genusPage.published === "REVIEW")
    return <p>This genus page is being reviewed</p>;

  return (
    <article>
      <PageHead title={genusPage.title} pageType={pageType} />

      <Section id="intro">
        <div>
          <ReactMarkdown>{genusPage.intro}</ReactMarkdown>
        </div>
      </Section>

      <h2>{genusPage.title} Plants List</h2>
      <Section id="plant-list">
        <div>
          <ul className="space-y-2 text-base font-medium sm:columns-2">
            {plants.map((plant) => (
              <li
                key={plant.slug}
                className="before:mb before:mr-2 before:inline-block before:content-['▸']"
              >
                <a href={"#" + removeChars(plant.botanicalName)}>
                  {plant.botanicalName}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <h2>{genusPage.title} Plants</h2>
      {plants.map((plant) => (
        <Section id={removeChars(plant.botanicalName)} key={plant.slug}>
          <div>
            <h3>{plant.botanicalName}</h3>
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
                <strong>Plant parent(s):</strong>{" "}
                {plant.parents.split(", ").map((parent, i) => (
                  <>
                    {i > 0 && ", "}
                    <a
                      key={parent}
                      href={"#" + removeChars(parent)}
                      className="mr-2"
                    >
                      {parent.replaceAll('"', "")}
                    </a>
                  </>
                ))}
              </p>
            )}
            {plant.children && (
              <p>
                <strong>Cultivars and Hybrids:</strong>{" "}
                {plant.children.split(", ").map((child, i) => (
                  <>
                    {i > 0 && ", "}
                    <a
                      key={child}
                      href={"#" + removeChars(child)}
                      className="mr-2"
                    >
                      {child.replaceAll('"', "")}
                    </a>
                  </>
                ))}
              </p>
            )}
          </div>
          {plant.hasImage ? (
            <figure>
              <Image
                src={`/images/genus/${genusPage.slug}/${plant.slug}.jpg`}
                width={800}
                height={1000}
                alt={plant.botanicalName}
              />
              <figcaption>
                {plant.botanicalName}
                <ReactMarkdown>{plant.imageCredits}</ReactMarkdown>
              </figcaption>
            </figure>
          ) : (
            <div className="text-sm">
              <p>
                We don&apos;t have an image for this plant yet. Would you like
                to share yours?
              </p>
              <p>
                Send it via e-mail at{" "}
                <a
                  href={`mailto:houseplants.xyz@gmail.com?subject=${plant.botanicalName} photo`}
                >
                  houseplants.xyz@gmail.com
                </a>{" "}
                or via instagram at @houseplants.xyz
              </p>
            </div>
          )}
        </Section>
      ))}
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
