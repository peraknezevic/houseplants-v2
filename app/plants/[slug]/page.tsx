import PageHead from "@/components/page-head";
import PlantCardSingle from "@/components/plant-card-single";
import ScrollTopFix from "@/components/scroll-fix";
import { getPlantBySlug } from "@/lib/data";

const Pages = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const plant = await getPlantBySlug(slug);

  if (!plant) return <p>We don&apos;t have a page for this plant yet</p>;

  return (
    <article>
      <ScrollTopFix />
      <PageHead title={plant.title} pageType="Plant" />
      <PlantCardSingle plant={plant} genusSlug={plant.genusPageSlug} />
    </article>
  );
};

export default Pages;
