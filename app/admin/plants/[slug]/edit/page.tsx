import { getGeneras, getPlantBySlug } from "@/lib/data";

import PlantForm from "@/components/admin/plant-form";
import { notFound } from "next/navigation";

const EditPlantPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const [plant, generas] = await Promise.all([
    getPlantBySlug(slug),
    getGeneras(),
  ]);

  if (!plant) notFound();

  return (
    <div>
      <h1 className="mb-6 text-2xl font-semibold">Edit plant</h1>
      <PlantForm plant={plant} generas={generas} />
    </div>
  );
};

export default EditPlantPage;
