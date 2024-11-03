import Form from "@/components/form";
import { getPlantProfileById } from "@/lib/data";
import { plantProfileFields } from "@/lib/constants";
import { updatePlantProfile } from "@/lib/actions";

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const plantProfile = await getPlantProfileById(id);
  if (!plantProfile) return <p>Plant Profile could not be found.</p>;
  return (
    <Form
      content={plantProfile}
      fields={plantProfileFields}
      formAction={updatePlantProfile}
    />
  );
};

export default Page;
