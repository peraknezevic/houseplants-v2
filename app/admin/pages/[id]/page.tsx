import Form from "@/components/form";
import { getPageById } from "@/lib/data";
import { pageFields } from "@/lib/constants";
import { updatePage } from "@/lib/actions";

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const page = await getPageById(id);
  if (!page) return <p>Page could not be found.</p>;
  return <Form content={page} fields={pageFields} formAction={updatePage} />;
};

export default Page;
