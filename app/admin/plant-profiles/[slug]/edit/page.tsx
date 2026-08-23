import { getPlantProfileBySlug } from "@/lib/data";
import { notFound } from "next/navigation";
import PlantProfileForm from "@/components/admin/plant-profile-form";

const EditPlantProfilePage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const plantProfile = await getPlantProfileBySlug(slug);

  if (!plantProfile) notFound();

  return (
    <div>
      <h1 className="mb-6 text-2xl font-semibold">Edit plant profile</h1>
      <PlantProfileForm plantProfile={plantProfile} />
    </div>
  );
};

export default EditPlantProfilePage;
