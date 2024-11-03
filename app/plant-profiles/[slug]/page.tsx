import PageHead from "@/components/page-head";
import PlantProfileContent from "@/components/plant-profile-content";
import { getPlantProfileBySlug } from "@/lib/data";

const Page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const plantProfile = await getPlantProfileBySlug(slug);

  if (!plantProfile)
    return <p>We don&pos;t have a profile page for this plant yet</p>;
  if (plantProfile.published === "DRAFT")
    return <p>This profile page is not yet published</p>;
  if (plantProfile.published === "REVIEW")
    return <p>This profile page is being reviewed</p>;

  return (
    <article>
      <PageHead title={plantProfile.title} pageType="Plant Profile" />
      <PlantProfileContent plant={plantProfile} />
    </article>
  );
};

export default Page;
