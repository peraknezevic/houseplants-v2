import React from "react";
import { plantProfileData } from "@/app/hooks/useData";
import PageHead from "@/app/components/PageHead";
import PlantProfileCards from "@/app/genus/components/PlantProfileCards";

interface Props {
  params: { slug: string };
}

const PlantProfile = async ({ params }: Props) => {
  const plantProfile = await plantProfileData(params.slug);

  if (!plantProfile)
    return <p>We don&pos;t have a profile page for this plant yet</p>;
  if (plantProfile.published === "DRAFT")
    return <p>This profile page is not yet published</p>;
  if (plantProfile.published === "REVIEW")
    return <p>This profile page is being reviewed</p>;

  return (
    <article>
      <PageHead title={plantProfile.title} pageType="Plant Profile" />
      <PlantProfileCards plant={plantProfile} />
    </article>
  );
};

export default PlantProfile;
