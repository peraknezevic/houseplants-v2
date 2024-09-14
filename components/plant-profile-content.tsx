import CldImage from "@/components/cloudinary";
import Figure from "./ui/figure";
import { PlantProfile } from "@prisma/client";
import PlantProfileNotes from "./plant-profile-notes";
import PlantProfileP from "./plant-profile-p";
import ReactMarkdown from "react-markdown";
import Section from "@/components/section";
import { enumToString } from "@/lib/utils";

const PlantProfileContent = ({ plant }: { plant: PlantProfile }) => {
  return (
    <>
      <Section>
        <PlantProfileP title="Botanical name" content={plant.botanicalName} />
        {plant.synonyms && (
          <PlantProfileP title="Synonyms" content={plant.synonyms} />
        )}
        {plant.namedBy && (
          <PlantProfileP title="Named by" content={plant.namedBy} />
        )}
        {plant.family && (
          <PlantProfileP title="Family" content={plant.family} />
        )}
        {plant.subFamily && (
          <PlantProfileP title="Subfamily" content={plant.subFamily} />
        )}
        <PlantProfileP title="Genus" content={plant.genus} />
        {plant.nativeArea && (
          <PlantProfileP title="Native Area" content={plant.nativeArea} />
        )}
        {plant.tradeNames && (
          <PlantProfileP title="Trade Names" content={plant.tradeNames} />
        )}
        {plant.inventor && (
          <PlantProfileP title="Inventor" content={plant.inventor} />
        )}
        {plant.patent && (
          <PlantProfileP title="Patent" content={plant.patent} />
        )}
        {plant.commonNames && (
          <PlantProfileP title="Common Names" content={plant.commonNames} />
        )}
        <Figure
          imgUrl={`/images/plants/${plant.slug}/${plant.slug}-01.jpg`}
          alt={plant.title}
          caption={plant.botanicalName}
          credit={plant.imageCredits || "Photo by Houseplants.xyz"}
        />
      </Section>

      <Section>
        <PlantProfileP
          title="Care difficulty"
          content={enumToString(plant.care)}
        />
        <PlantProfileP
          title="Light preference"
          content={enumToString(plant.light)}
        />
        <PlantProfileP
          title="Minimal Temperature"
          content={`${plant.minimalT}\u00B0 C or ${Math.round((plant.minimalT * 9) / 5 + 32)}\u00B0 F`}
        />
        <PlantProfileP
          title="Optimal Temperature"
          content={`${plant.optimalT}\u00B0 C or ${Math.round((plant.optimalT * 9) / 5 + 32)}\u00B0 F`}
        />
        <PlantProfileP
          title="Humidity"
          content={enumToString(plant.humidity)}
        />
        <PlantProfileP title="Watering" content={plant.watering} />
        <PlantProfileP title="Feeding" content={plant.feeding} />
        <PlantProfileP title="Soil" content={plant.soil} />
        <PlantProfileP title="Soil PH" content={plant.soilPH} />
        <PlantProfileP title="Repotting" content={plant.repotting} />

        <Figure
          imgUrl={`/images/plants/${plant.slug}/${plant.slug}-02.jpg`}
          alt={plant.title}
          caption={plant.botanicalName}
          credit={plant.imageCredits || "Photo by Houseplants.xyz"}
        />
      </Section>

      <Section>
        <PlantProfileP
          title="Speed of growth"
          content={enumToString(plant.speedOfGrowth)}
        />
        <PlantProfileP title="Mature size" content={plant.matureSize} />
        <PlantProfileP title="Flower" content={plant.flower} />
        <PlantProfileP title="Propagation" content={plant.propagation} />
        <PlantProfileP title="Pests" content={plant.pests} />
        <PlantProfileP title="Diseases" content={plant.diseases} />
        <PlantProfileP
          title="Toxicity"
          content={enumToString(plant.toxicity)}
        />
        <Figure
          imgUrl={`/images/plants/${plant.slug}/${plant.slug}-03.jpg`}
          alt={plant.title}
          caption={plant.botanicalName}
          credit={plant.imageCredits || "Photo by Houseplants.xyz"}
        />
      </Section>

      {plant.notes && (
        <Section>
          <PlantProfileNotes content={plant.notes} />
        </Section>
      )}
    </>
  );
};

export default PlantProfileContent;
