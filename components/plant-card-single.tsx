import Figure from "./ui/figure";
import NoImage from "./ui/no-image";
import P from "./ui/p";
import { Plant } from "@prisma/client";
import Section from "@/components/section";

const PlantCardSingle = ({
  plant,
  genusSlug,
}: {
  plant: Plant;
  genusSlug: string;
}) => {
  return (
    <Section>
      {plant.synonyms && <P title="Synonyms" content={plant.synonyms} />}
      {plant.tradeNames && <P title="Trade Names" content={plant.tradeNames} />}
      {plant.commonNames && (
        <P title="Common Names" content={plant.commonNames} />
      )}
      {plant.namedBy && <P title="Named by" content={plant.namedBy} />}
      {plant.inventor && <P title="Inventor" content={plant.inventor} />}
      {plant.patent && <P title="Patent" content={plant.patent} />}
      {plant.nativeArea && <P title="Native Area" content={plant.nativeArea} />}
      {plant.note && <P title="*" content={plant.note} />}

      {plant.parents && (
        <P title="Plant parent(s)" list={plant.parents} external />
      )}
      {plant.children && (
        <P title="Cultivars and Hybrids" list={plant.children} external />
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

export default PlantCardSingle;
