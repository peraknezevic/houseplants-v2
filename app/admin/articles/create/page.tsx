import Form from "@/components/forms/form";
import { articleFields } from "@/lib/constants";
import { createArticle } from "@/lib/actions";
const Page = () => {
  return <Form fields={articleFields} formAction={createArticle} />;
};

export default Page;
