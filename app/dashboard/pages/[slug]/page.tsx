import prisma from "@/prisma/client"
import { notFound } from "next/navigation"

interface Props {
  params: {
    slug: string
  }
}

const PageDetails = async ({ params }: Props) => {
  const page = await prisma.page.findUnique({
    where: { slug: params.slug },
  })
  if (!page) notFound()

  return (
    <div>
      <h1 className="text-2xl font-bold leading-5 mb-2">{page.title}</h1>
      <p className="leading-6">{page.content}</p>
    </div>
  )
}

export default PageDetails
