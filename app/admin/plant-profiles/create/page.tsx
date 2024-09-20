import Form from "@/components/form";
import { createPlantProfile } from "@/lib/actions";
import { plantProfileFields } from "@/lib/constants";
const Page = () => {
  return <Form fields={plantProfileFields} formAction={createPlantProfile} />;
};

export default Page;
