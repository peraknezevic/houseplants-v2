import prisma from "@/prisma/client"
import GenusForm from "../_components/GenusForm"
import { notFound } from "next/navigation"

interface Props {
  params: { slug: string }
}

const EditGenus = async ({ params }: Props) => {
  const genus = await prisma.genusPage.findUnique({
    where: { slug: params.slug },
  })
  if (!genus) notFound()

  return <GenusForm genus={genus} />
}

export default EditGenus
