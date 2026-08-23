import { getPageBySlug } from "@/lib/data";
import { notFound } from "next/navigation";
import PageForm from "@/components/admin/page-form";

const EditPagePage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const page = await getPageBySlug(slug);

  if (!page) notFound();

  return (
    <div>
      <h1 className="mb-6 text-2xl font-semibold">Edit page</h1>
      <PageForm page={page} />
    </div>
  );
};

export default EditPagePage;
