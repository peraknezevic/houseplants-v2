import prisma from "@/prisma/client";
import { notFound } from "next/navigation";
import dynamic from "next/dynamic";
interface Props {
  params: { slug: string };
}

const GenusForm = dynamic(
  () => import("@/app/dashboard/genera/_components/GenusForm"),
  {
    ssr: false,
  },
);

const EditGenus = async ({ params }: Props) => {
  const genus = await prisma.genusPage.findUnique({
    where: { slug: params.slug },
  });
  if (!genus) notFound();

  return <GenusForm genus={genus} />;
};

export default EditGenus;
