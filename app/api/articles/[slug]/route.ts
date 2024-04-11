import { articlesSchema } from "@/lib/validations";
import prisma from "@/prisma/client";

export async function GET(
  request: Request,
  { params }: { params: { slug: string } },
) {
  const article = await prisma.article.findUnique({
    where: { slug: params.slug },
  });
  if (!article)
    return Response.json(
      { error: "This article could not be found" },
      { status: 404 },
    );
  return Response.json(article);
}

export async function PATCH(
  request: Request,
  { params }: { params: { slug: string } },
) {
  const body = await request.json();

  const validation = articlesSchema.safeParse(body);

  if (!validation.success)
    return Response.json(validation.error.errors, { status: 400 });

  const article = await prisma.article.findUnique({
    where: {
      slug: params.slug,
    },
  });

  if (!article)
    return Response.json(
      { error: "This article could not be found." },
      { status: 400 },
    );

  const articleUpdate = await prisma.article.update({
    where: { slug: params.slug },
    data: {
      title: body.title,
      slug: body.slug,
      intro: body.intro,
      content: body.content,
      imageCredits: body.imageCredits,
      published: body.published,
    },
  });

  return Response.json(articleUpdate);
}

export async function DELETE(
  request: Request,
  { params }: { params: { slug: string } },
) {
  const article = await prisma.article.findUnique({
    where: {
      slug: params.slug,
    },
  });

  if (!article)
    return Response.json(
      { error: "This article could not be found." },
      { status: 404 },
    );

  await prisma.article.delete({
    where: {
      slug: params.slug,
    },
  });

  return Response.json({});
}
