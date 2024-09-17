import Form from "@/components/forms/form";
import { getPlantProfileById } from "@/lib/data";
import { plantProfileFields } from "@/lib/constants";
import { updatePlantProfile } from "@/lib/actions";

const Page = async ({ params }: { params: { id: string } }) => {
  const plantProfile = await getPlantProfileById(params.id);
  if (!plantProfile) return <p>Plant Profile could not be found.</p>;
  return (
    <Form content={plantProfile} fields={plantProfileFields} formAction={updatePlantProfile} />
  );
};

export default Page;
