import PageHead from "@/components/page-head";
import PlantCardSingle from "@/components/plant-card-single";
import { Slug } from "@/lib/types";
import { getPlantBySlug } from "@/lib/data";

const PlantProfile = async ({ params }: Slug) => {
  const plant = await getPlantBySlug(params.slug);

  if (!plant) return <p>We don&apos;t have a page for this plant yet</p>;

  return (
    <article>
      <PageHead title={plant.title} pageType="Plant" />
      <PlantCardSingle plant={plant} genusSlug={plant.genusPageSlug} />
    </article>
  );
};

export default PlantProfile;
