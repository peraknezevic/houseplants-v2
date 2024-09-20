import Form from "@/components/form";
import { createGenera } from "@/lib/actions";
import { generaFields } from "@/lib/constants";
const Page = () => {
  return <Form fields={generaFields} formAction={createGenera} />;
};

export default Page;
