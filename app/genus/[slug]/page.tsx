import PageHead from "@/app/components/PageHead";
import Section from "@/app/components/Section";
import { genusPageData, plantsData } from "@/app/hooks/useData";
import Image from "next/image";
import ReactMarkdown from "react-markdown";

interface Props {
  params: { slug: string };
}

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
          <ul className="list-disc columns-2 space-y-3 pl-5">
            {plants.map((plant) => (
              <li
                key={plant.slug}
                className={
                  (plant.isSpecies && "species") ||
                  (plant.isCultivar && "cultivar") ||
                  (plant.isHybrid && "hybrid") ||
                  ""
                }
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
                {plant.parents.split(", ").map((parent) => (
                  <a
                    key={parent}
                    href={"#" + removeChars(parent)}
                    className="mr-2"
                  >
                    {parent.replaceAll('"', "")}
                  </a>
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
          {plant.hasImage && (
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
        <div>
          <h3>Changelog</h3>
          <ReactMarkdown>{genusPage.changeLog}</ReactMarkdown>
        </div>
      </Section>
    </article>
  );
};

export default Genus;
