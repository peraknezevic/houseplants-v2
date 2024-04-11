import { plantProfileSchema } from "@/lib/validations";
import prisma from "@/prisma/client";

export async function GET(request: Request) {
  const plants = await prisma.plantProfile.findMany();
  return Response.json(plants);
}

export async function POST(request: Request) {
  const body = await request.json();
  const validation = plantProfileSchema.safeParse(body);
  if (!validation.success)
    return Response.json(validation.error.errors, { status: 404 });
  const plantProfile = await prisma.plant.findUnique({
    where: {
      slug: body.slug,
    },
  });
  if (plantProfile)
    return Response.json({ error: "Plant already exists" }, { status: 400 });
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
      narodniNaziv: body.narodniNaziv,
      family: body.family,
      subFamily: body.subFamily,
      genus: body.genus,
      nativeArea: body.nativeArea,
      podrucjePorekla: body.podrucjePorekla,
      care: body.care,
      light: body.light,
      watering: body.watering,
      zalivanje: body.zalivanje,
      soil: body.soil,
      supstrat: body.supstrat,
      soilPH: body.soilPH,
      humidity: body.humidity,
      feeding: body.feeding,
      prihrana: body.prihrana,
      minimalT: body.minimalT,
      optimalT: body.optimalT,
      speedOfGrowth: body.speedOfGrowth,
      matureSize: body.matureSize,
      velicina: body.velicina,
      repotting: body.repotting,
      presadjivanje: body.presadjivanje,
      flower: body.flower,
      cvet: body.cvet,
      propagation: body.propagation,
      razmnozavanje: body.propagation,
      toxicity: body.toxicity,
      pests: body.pests,
      stetocine: body.stetocine,
      diseases: body.diseases,
      bolesti: body.bolesti,
      imageCredits: body.imageCredits,
      notes: body.notes,
      beleske: body.beleske,

      published: body.published,
    },
  });
  return Response.json(newPlantProfile, { status: 201 });
}
