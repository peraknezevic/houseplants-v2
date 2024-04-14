import CldImage from "@/components/cloudinary";
import Link from "next/link";
import { Plant } from "@prisma/client";
import ReactMarkdown from "react-markdown";
import Section from "@/components/section";

interface PlantCardProps {
  plant: Plant;
  genusSlug: string;
}

export default function PlantCard({ plant, genusSlug }: PlantCardProps) {
  const removeChars = (text: string) =>
    text
      .replaceAll("'", "")
      .replaceAll("‘", "")
      .replaceAll("’", "")
      .replaceAll('"', "")
      .replaceAll(" ", "")
      .toLowerCase();
  return (
    <Section id={removeChars(plant.title)} key={plant.slug}>
      <div>
        <h3>
          <Link href={"/plants/" + plant.slug}>{plant.title}</Link>
        </h3>
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
              <span key="child">
                {i > 0 && ", "}
                <a
                  key={parent}
                  href={"#" + removeChars(parent)}
                  className="mr-2"
                >
                  {parent.replaceAll('"', "")}
                </a>
              </span>
            ))}
          </p>
        )}
        {plant.children && (
          <p>
            <strong>Cultivars and Hybrids:</strong>{" "}
            {plant.children.split(", ").map((child, i) => (
              <span key={child}>
                {i > 0 && ", "}
                <a key={child} href={"#" + removeChars(child)} className="mr-2">
                  {child.replaceAll('"', "")}
                </a>
              </span>
            ))}
          </p>
        )}
      </div>
      {plant.hasImage ? (
        <figure>
          <CldImage
            src={`/images/genus/${genusSlug}/${plant.slug}.jpg`}
            width={800}
            height={1000}
            alt={plant.title}
          />
          <figcaption>
            {plant.title}
            <ReactMarkdown>{plant.imageCredits}</ReactMarkdown>
          </figcaption>
        </figure>
      ) : (
        <div className="text-sm">
          <p>
            We don&apos;t have an image for this plant yet. Would you like to
            share yours?
          </p>
          <p>
            Send it via e-mail at{" "}
            <a
              href={`mailto:houseplants.xyz@gmail.com?subject=${plant.title} photo`}
            >
              houseplants.xyz@gmail.com
            </a>{" "}
            or via instagram at @houseplants.xyz
          </p>
        </div>
      )}
    </Section>
  );
}
