import prisma from "@/prisma/client"

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const plant = await prisma.plant.findMany({
    where: { genusPageSlug: params.slug },
  })
  if (!plant)
    return Response.json(
      { error: "There's no profile page for that plant" },
      { status: 404 }
    )
  return Response.json(plant)
}
