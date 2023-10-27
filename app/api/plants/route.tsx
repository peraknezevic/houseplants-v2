import { plantSchema } from "@/app/validationSchemas"
import prisma from "@/prisma/client"

export async function GET(request: Request) {
  const plants = await prisma.plant.findMany()
  return Response.json(plants)
}

export async function POST(request: Request) {
  const body = await request.json()
  const validation = plantSchema.safeParse(body)
  if (!validation.success)
    return Response.json(validation.error.errors, { status: 400 })
  const plant = await prisma.plant.findUnique({
    where: {
      slug: body.slug,
    },
  })
  if (plant)
    return Response.json(
      { error: "Plant profile already exists" },
      { status: 400 }
    )
  const newPlant = await prisma.plant.create({
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
  return Response.json(newPlant, { status: 201 })
}
