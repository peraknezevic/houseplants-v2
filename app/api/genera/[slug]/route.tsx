import { generaSchema } from "@/app/validationSchemas";
import prisma from "@/prisma/client";

export async function GET(
  request: Request,
  { params }: { params: { slug: string } },
) {
  const page = await prisma.genusPage.findUnique({
    where: { slug: params.slug },
  });
  if (!page)
    return Response.json(
      { error: "This genera could not be found" },
      { status: 404 },
    );
  return Response.json(page);
}

export async function PATCH(
  request: Request,
  { params }: { params: { slug: string } },
) {
  const body = await request.json();

  const validation = generaSchema.safeParse(body);

  if (!validation.success)
    return Response.json(validation.error.errors, { status: 400 });

  const genus = await prisma.genusPage.findUnique({
    where: {
      slug: params.slug,
    },
  });

  if (!genus)
    return Response.json(
      { error: "This genus could not be found." },
      { status: 404 },
    );

  const genusUpdate = await prisma.genusPage.update({
    where: { slug: params.slug },
    data: {
      title: body.title,
      slug: body.slug,
      intro: body.intro,
      thanks: body.thanks,
      changeLog: body.changeLog,
      published: body.published,
    },
  });

  return Response.json(genusUpdate);
}

export async function DELETE(
  request: Request,
  { params }: { params: { slug: string } },
) {
  const genus = await prisma.genusPage.findUnique({
    where: {
      slug: params.slug,
    },
  });

  if (!genus)
    return Response.json(
      { error: "This plant could not be found." },
      { status: 404 },
    );

  await prisma.genusPage.delete({
    where: {
      slug: params.slug,
    },
  });

  return Response.json({});
}
