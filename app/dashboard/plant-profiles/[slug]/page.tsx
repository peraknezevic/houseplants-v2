import { plantProfileData } from "@/app/hooks/useData";
import dynamic from "next/dynamic";
import { notFound } from "next/navigation";

interface Props {
  params: { slug: string };
}

const PlantProfileForm = dynamic(
  () => import("@/app/dashboard/plant-profiles/_components/PlantProfileForm"),
  {
    ssr: false,
  },
);

const EditPlantProfile = async ({ params }: Props) => {
  const plantProfile = await plantProfileData(params.slug);

  if (!plantProfile) notFound();

  return <PlantProfileForm plant={plantProfile} />;
};

export default EditPlantProfile;
