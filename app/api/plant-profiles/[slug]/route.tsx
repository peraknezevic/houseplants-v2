import { plantProfileSchema } from "@/app/validationSchemas";
import prisma from "@/prisma/client";

export async function GET(
  request: Request,
  { params }: { params: { slug: string } },
) {
  const plant = await prisma.plantProfile.findUnique({
    where: { slug: params.slug },
  });
  if (!plant)
    return Response.json(
      { error: "There's no profile page for that plant yet" },
      { status: 404 },
    );
  return Response.json(plant);
}

export async function PATCH(
  request: Request,
  { params }: { params: { slug: string } },
) {
  const body = await request.json();

  const validation = plantProfileSchema.safeParse(body);

  if (!validation.success)
    return Response.json(validation.error.errors, { status: 400 });

  const plantProfile = await prisma.plantProfile.findUnique({
    where: {
      slug: params.slug,
    },
  });

  if (!plantProfile)
    return Response.json(
      { error: "There's no profile page for that plant yet" },
      { status: 400 },
    );

  const updatedPlantProfile = await prisma.plantProfile.update({
    where: { slug: params.slug },
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
  });

  return Response.json(updatedPlantProfile);
}

export async function DELETE(
  request: Request,
  { params }: { params: { slug: string } },
) {
  const plantProfile = await prisma.plantProfile.findUnique({
    where: {
      slug: params.slug,
    },
  });

  if (!plantProfile)
    return Response.json(
      { error: "This plant profile could not be found." },
      { status: 404 },
    );

  await prisma.plantProfile.delete({
    where: {
      slug: params.slug,
    },
  });

  return Response.json({});
}
