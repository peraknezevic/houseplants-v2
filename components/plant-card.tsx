import Figure from "./ui/figure";
import H3 from "./ui/H3";
import Link from "next/link";
import NoImage from "./ui/no-image";
import P from "./ui/p";
import { Plant } from "@prisma/client";
import Section from "@/components/section";
import { removeChars } from "@/lib/utils";

const PlantCard = ({
  plant,
  genusSlug,
}: {
  plant: Plant;
  genusSlug: string;
}) => {
  return (
    <Section id={removeChars(plant.title)}>
      <Link href={"/plants/" + plant.slug}>
        <H3 title={plant.title} />
      </Link>
      {plant.synonyms && <P title="Synonyms" content={plant.synonyms} />}
      {plant.tradeNames && <P title="Trade Names" content={plant.tradeNames} />}
      {plant.commonNames && (
        <P title="Common Names" content={plant.commonNames} />
      )}
      {plant.namedBy && <P title="Named by" content={plant.namedBy} />}
      {plant.inventor && <P title="Inventor" content={plant.inventor} />}
      {plant.patent && <P title="Patent" content={plant.patent} />}
      {plant.nativeArea && <P title="Native Area" content={plant.nativeArea} />}
      {plant.note && <P title="Note" content={plant.note} />}

      {plant.parents && <P title="Plant parent(s)" list={plant.parents} />}
      {plant.children && (
        <P title="Cultivars and Hybrids" list={plant.children} />
      )}

      {plant.hasImage ? (
        <Figure
          imgUrl={`/images/genus/${genusSlug}/${plant.slug}.jpg`}
          alt={plant.title}
          caption={plant.title}
          credit={plant.imageCredits || "Photo by Houseplants.xyz"}
        />
      ) : (
        <NoImage title={plant.title} />
      )}
    </Section>
  );
};

export default PlantCard;
