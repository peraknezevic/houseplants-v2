import { getGeneras } from "@/lib/data";
import PlantForm from "@/components/admin/plant-form";

const NewPlantPage = async () => {
  const generas = await getGeneras();

  return (
    <div>
      <h1 className="mb-6 text-2xl font-semibold">New plant</h1>
      <PlantForm generas={generas} />
    </div>
  );
};

export default NewPlantPage;
