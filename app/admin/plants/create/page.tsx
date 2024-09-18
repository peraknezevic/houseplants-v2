import Form from "@/components/forms/form";
import { createPlant } from "@/lib/actions";
import { plantFields } from "@/lib/constants";
const Page = () => {
  return <Form fields={plantFields} formAction={createPlant} />;
};

export default Page;
