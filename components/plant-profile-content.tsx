import Figure from "./ui/figure";
import Markdown from "./ui/markdown";
import P from "./ui/p";
import { PlantProfile } from "@prisma/client";
import Section from "@/components/section";
import { enumToString } from "@/lib/utils";

const PlantProfileContent = ({ plant }: { plant: PlantProfile }) => {
  return (
    <>
      <Section>
        <P title="Botanical name" content={plant.botanicalName} />
        {plant.synonyms && <P title="Synonyms" content={plant.synonyms} />}
        {plant.namedBy && <P title="Named by" content={plant.namedBy} />}
        {plant.family && <P title="Family" content={plant.family} />}
        {plant.subFamily && <P title="Subfamily" content={plant.subFamily} />}
        <P title="Genus" content={plant.genus} />
        {plant.nativeArea && (
          <P title="Native Area" content={plant.nativeArea} />
        )}
        {plant.tradeNames && (
          <P title="Trade Names" content={plant.tradeNames} />
        )}
        {plant.inventor && <P title="Inventor" content={plant.inventor} />}
        {plant.patent && <P title="Patent" content={plant.patent} />}
        {plant.commonNames && (
          <P title="Common Names" content={plant.commonNames} />
        )}
        <Figure
          imgUrl={`/images/plants/${plant.slug}/${plant.slug}-01.jpg`}
          alt={plant.title}
          caption={plant.botanicalName}
          credit={plant.imageCredits || "Photo by Houseplants.xyz"}
        />
      </Section>

      <Section>
        <P title="Care difficulty" content={enumToString(plant.care)} />
        <P title="Light preference" content={enumToString(plant.light)} />
        <P
          title="Minimal Temperature"
          content={`${plant.minimalT}\u00B0 C or ${Math.round((plant.minimalT * 9) / 5 + 32)}\u00B0 F`}
        />
        <P
          title="Optimal Temperature"
          content={`${plant.optimalT}\u00B0 C or ${Math.round((plant.optimalT * 9) / 5 + 32)}\u00B0 F`}
        />
        <P title="Humidity" content={enumToString(plant.humidity)} />
        <P title="Watering" content={plant.watering} />
        <P title="Feeding" content={plant.feeding} />
        <P title="Soil" content={plant.soil} />
        <P title="Soil PH" content={plant.soilPH} />
        <P title="Repotting" content={plant.repotting} />

        <Figure
          imgUrl={`/images/plants/${plant.slug}/${plant.slug}-02.jpg`}
          alt={plant.title}
          caption={plant.botanicalName}
          credit={plant.imageCredits || "Photo by Houseplants.xyz"}
        />
      </Section>

      <Section>
        <P
          title="Speed of growth"
          content={enumToString(plant.speedOfGrowth)}
        />
        <P title="Mature size" content={plant.matureSize} />
        <P title="Flower" content={plant.flower} />
        <P title="Propagation" content={plant.propagation} />
        <P title="Pests" content={plant.pests} />
        <P title="Diseases" content={plant.diseases} />
        <P title="Toxicity" content={enumToString(plant.toxicity)} />
        <Figure
          imgUrl={`/images/plants/${plant.slug}/${plant.slug}-03.jpg`}
          alt={plant.title}
          caption={plant.botanicalName}
          credit={plant.imageCredits || "Photo by Houseplants.xyz"}
        />
      </Section>

      {plant.notes && (
        <Section>
          <Markdown title="Notes" content={plant.notes} />
        </Section>
      )}
    </>
  );
};

export default PlantProfileContent;
