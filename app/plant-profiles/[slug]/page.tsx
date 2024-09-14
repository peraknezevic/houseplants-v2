import PageHead from "@/components/page-head";
import PlantProfileContent from "@/components/plant-profile-content";
import React from "react";
import { getPlantProfileBySlug } from "@/lib/data";
import { Slug } from "@/lib/types";

const PlantProfilePage = async ({ params }: Slug) => {
  const plantProfile = await getPlantProfileBySlug(params.slug);

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

export default PlantProfilePage;
