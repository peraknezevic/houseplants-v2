import { plantProfileSchema } from "@/app/validationSchemas"
import prisma from "@/prisma/client"

export async function GET(request: Request) {
  const plants = await prisma.plantProfile.findMany()
  return Response.json(plants)
}

export async function POST(request: Request) {
  const body = await request.json()
  const validation = plantProfileSchema.safeParse(body)
  if (!validation.success)
    return Response.json(validation.error.errors, { status: 404 })
  const plantProfile = await prisma.plant.findUnique({
    where: {
      slug: body.slug,
    },
  })
  if (plantProfile)
    return Response.json({ error: "Plant already exists" }, { status: 400 })
  const newPlantProfile = await prisma.plantProfile.create({
    data: {
      slug: body.slug,
      title: body.title,
      botanicalName: body.botanicalName,

      synonyms: body.synonyms,
      namedBy: body.namedBy,
      inventor: body.inventor,
      patent: body.patent,
      tradeNames: body.tradeNames,
      commonNames: body.commonNames,
      family: body.family,
      subFamily: body.subFamily,
      genus: body.genus,
      nativeArea: body.nativeArea,

      care: body.care,
      light: body.light,
      watering: body.watering,
      soil: body.soil,
      soilPH: body.soilPH,
      humidity: body.humidity,
      feeding: body.feeding,
      minimalT: body.minimalT,
      optimalT: body.optimalT,
      speedOfGrowth: body.speedOfGrowth,
      matureSize: body.matureSize,
      repotting: body.repotting,
      flower: body.flower,
      propagation: body.propagation,
      toxicity: body.toxicity,
      pests: body.pests,
      diseases: body.diseases,
      imageCredits: body.imageCredits,
      notes: body.notes,

      published: body.published,
    },
  })
  return Response.json(newPlantProfile, { status: 201 })
}
