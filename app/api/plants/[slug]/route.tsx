import { plantSchema } from "@/app/validationSchemas"
import prisma from "@/prisma/client"

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const plant = await prisma.plant.findUnique({
    where: { slug: params.slug },
  })
  if (!plant)
    return Response.json(
      { error: "There's no profile page for that plant" },
      { status: 404 }
    )
  return Response.json(plant)
}

export async function PATCH(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const body = await request.json()

  const validation = plantSchema.safeParse(body)

  if (!validation.success)
    return Response.json(validation.error.errors, { status: 400 })

  const plant = await prisma.plant.findUnique({
    where: {
      slug: params.slug,
    },
  })

  if (!plant)
    return Response.json(
      { error: "This plant could not be found" },
      { status: 404 }
    )

  const updatedPlant = await prisma.plant.update({
    where: { slug: plant.slug },
    data: {
      slug: body.slug,
      botanicalName: body.botanicalName,
      hasProfile: body.hasProfile,
      isSpecies: body.isSpecies,
      isCultivar: body.isCultivar,
      isHybrid: body.isHybrid,
      children: body.children,
      parents: body.parents,
      genusPageSlug: body.genusPageSlug,
      synonyms: body.synonyms,
      tradeNames: body.tradeNames,
      commonNames: body.commonNames,
      namedBy: body.namedBy,
      inventor: body.inventor,
      patent: body.patent,
      nativeArea: body.nativeArea,
      imageCredits: body.imageCredits,
    },
  })

  return Response.json(updatedPlant)
}

export async function DELETE(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const plant = await prisma.plant.findUnique({
    where: {
      slug: params.slug,
    },
  })

  if (!plant)
    return Response.json(
      { error: "This plant could not be found." },
      { status: 404 }
    )

  await prisma.plant.delete({
    where: {
      slug: params.slug,
    },
  })

  return Response.json({})
}
