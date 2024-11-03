import Form from "@/components/form";
import { getPlantById } from "@/lib/data";
import { plantFields } from "@/lib/constants";
import { updatePlant } from "@/lib/actions";

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const plant = await getPlantById(id);
  console.log(plant);
  if (!plant) return <p>Plant could not be found.</p>;
  return <Form content={plant} fields={plantFields} formAction={updatePlant} />;
};

export default Page;
