import "server-only";

import { Article } from "@prisma/client";
import prisma from "@/prisma/client";

export async function getArticles() {
  const data = await prisma.article.findMany();
  return data;
}

export async function getArticleBySlug(slug: Article["slug"]) {
  const data = await prisma.article.findUnique({
    where: {
      slug: slug,
    },
  });
  return data;
}
