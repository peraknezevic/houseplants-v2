import prisma from "@/prisma/client"
import Image from "next/image"
import ReactMarkdown from "react-markdown"

interface Props {
  params: { slug: string }
}

const Genus = async ({ params }: Props) => {
  const genusPage = await prisma.genusPage.findUnique({
    where: { slug: params.slug },
  })
  const plants = await prisma.plant.findMany({
    where: { genusPageSlug: params.slug },
  })
  const species = plants.filter((plant) => plant.isSpecies)
  const cultivars = plants.filter((plant) => plant.isCultivar)
  const hybrids = plants.filter((plant) => plant.isHybrid)

  if (!genusPage) return <p>No genus page found</p>
  if (genusPage.published === "DRAFT")
    return <p>This genus page is not yet published</p>
  if (genusPage.published === "REVIEW")
    return <p>This genus page is being reviewed</p>

  return (
    <div className="prose lg:prose-xl">
      <h1 className="text-center">{genusPage.title}</h1>
      <div>
        <ReactMarkdown>{genusPage.intro}</ReactMarkdown>
      </div>

      <section>
        <h3>{genusPage.title} Species</h3>
        <ul>
          {species.map((plant) => (
            <li key={plant.slug}>
              <a href={`#${plant.botanicalName}`}>{plant.botanicalName}</a>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h3>{genusPage.title} Cultivars</h3>
        <ul>
          {cultivars.map((plant) => (
            <li key={plant.slug}>
              <a href={`#${plant.botanicalName}`}>{plant.botanicalName}</a>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h3>{genusPage.title} Hybrids</h3>
        <ul>
          {hybrids.map((plant) => (
            <li key={plant.slug}>
              <a href={`#${plant.botanicalName}`}>{plant.botanicalName}</a>
            </li>
          ))}
        </ul>
      </section>

      <div className=" mx-auto">
        {plants.map((plant) => (
          <section
            id={plant.botanicalName}
            key={plant.slug}
            className="bg-white px-5 py-1 my-5"
          >
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
            {plant.parents && (
              <p>
                <strong>Parents:</strong>{" "}
                {plant.parents.split(", ").map((p) => (
                  <a key={p} href={`#${p}`} className="mr-2">
                    {p}
                  </a>
                ))}
              </p>
            )}
            {plant.children && (
              <p>
                <strong>Children:</strong>{" "}
                {plant.children.split(", ").map((c) => (
                  <a key={c} href={`#${c}`} className="mr-2">
                    {c}
                  </a>
                ))}
              </p>
            )}
            {plant.hasImage && (
              <figure className="relative">
                <Image
                  src={`/images/genus/${genusPage.slug}/${plant.slug}.jpg`}
                  sizes="100vw"
                  width={1080}
                  height={1080}
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                  alt={plant.botanicalName}
                />
                <figcaption>
                  {plant.botanicalName}
                  <ReactMarkdown>{plant.imageCredits}</ReactMarkdown>
                </figcaption>
              </figure>
            )}
          </section>
        ))}
      </div>
      <section>
        <h3>Thanks</h3>
        <ReactMarkdown>{genusPage.thanks}</ReactMarkdown>
      </section>
      <section>
        <h3>Changelog</h3>
        <ReactMarkdown>{genusPage.changeLog}</ReactMarkdown>
      </section>
    </div>
  )
}

export default Genus
