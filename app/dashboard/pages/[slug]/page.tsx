import { pageData } from "@/app/hooks/useData";
import dynamic from "next/dynamic";
import { notFound } from "next/navigation";

interface Props {
  params: { slug: string };
}

const PageForm = dynamic(
  () => import("@/app/dashboard/pages/_components/PageForm"),
  {
    ssr: false,
  },
);

const EditPage = async ({ params }: Props) => {
  const page = await pageData(params.slug);

  if (!page) notFound();

  return <PageForm page={page} />;
};

export default EditPage;
