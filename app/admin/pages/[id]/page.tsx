import Form from "@/components/forms/form";
import { getPageById } from "@/lib/data";
import { pageFields } from "@/lib/constants";
import { updatePage } from "@/lib/actions";

const Page = async ({ params }: { params: { id: string } }) => {
  const page = await getPageById(params.id);
  if (!page) return <p>Page could not be found.</p>;
  return (
    <Form content={page} fields={pageFields} formAction={updatePage} />
  );
};

export default Page;
