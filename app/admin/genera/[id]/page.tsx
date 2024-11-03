import Form from "@/components/form";
import { generaFields } from "@/lib/constants";
import { getGenusById } from "@/lib/data";
import { updateGenera } from "@/lib/actions";

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const genus = await getGenusById(id);
  if (!genus) return <p>Genus could not be found.</p>;
  return (
    <Form content={genus} fields={generaFields} formAction={updateGenera} />
  );
};

export default Page;
