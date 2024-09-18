import Form from "@/components/forms/form";
import { generaFields } from "@/lib/constants";
import { getGenusById } from "@/lib/data";
import { updateGenera } from "@/lib/actions";

const Page = async ({ params }: { params: { id: string } }) => {
  const genus = await getGenusById(params.id);
  if (!genus) return <p>Genus could not be found.</p>;
  return (
    <Form content={genus} fields={generaFields} formAction={updateGenera} />
  );
};

export default Page;
