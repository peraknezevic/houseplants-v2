import Form from "@/components/forms/form";
import { createPage } from "@/lib/actions";
import { pageFields } from "@/lib/constants";
const Page = () => {
  return <Form fields={pageFields} formAction={createPage} />;
};

export default Page;
