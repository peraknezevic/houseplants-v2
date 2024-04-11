import { articlesSchema } from "@/lib/validations";
import prisma from "@/prisma/client";

export async function GET(request: Request) {
  const article = await prisma.article.findMany();
  return Response.json(article);
}

export async function POST(request: Request) {
  const body = await request.json();
  const validation = articlesSchema.safeParse(body);

  if (!validation.success)
    return Response.json(validation.error.errors, { status: 400 });

  const findArticle = await prisma.article.findUnique({
    where: {
      slug: body.slug,
    },
  });

  if (findArticle)
    return Response.json({ error: "Article already exists" }, { status: 400 });

  const newArticle = await prisma.article.create({
    data: {
      title: body.title,
      slug: body.slug,
      intro: body.intro,
      content: body.content,
      imageCredits: body.imageCredits,
      published: body.published,
    },
  });
  return Response.json(newArticle, { status: 201 });
}
