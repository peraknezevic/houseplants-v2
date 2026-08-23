import GenusForm from "@/components/admin/genus-form";
import { getGenusBySlug } from "@/lib/data";
import { notFound } from "next/navigation";

const EditGenusPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const genusPage = await getGenusBySlug(slug);

  if (!genusPage) notFound();

  return (
    <div>
      <h1 className="mb-6 text-2xl font-semibold">Edit genus page</h1>
      <GenusForm genusPage={genusPage} />
    </div>
  );
};

export default EditGenusPage;
