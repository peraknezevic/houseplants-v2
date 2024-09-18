import Form from "@/components/forms/form";
import { createGenera } from "@/lib/actions";
import { generaFields } from "@/lib/constants";
const Page = () => {
  return <Form fields={generaFields} formAction={createGenera} />;
};

export default Page;
