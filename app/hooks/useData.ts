import prisma from "@/prisma/client";

export async function plantProfilesData() {
  const data = await prisma.plantProfile.findMany({
    orderBy: {
      slug: "asc",
    },
  });
  return data;
}

export async function plantProfileData(slug: string) {
  const data = await prisma.plantProfile.findUnique({
    where: {
      slug: slug,
    },
  });
  return data;
}

export async function articlesData() {
  const data = await prisma.article.findMany();
  return data;
}

export async function articleData(slug: string) {
  const data = await prisma.article.findUnique({
    where: {
      slug: slug,
    },
  });
  return data;
}

export async function pagesData() {
  const data = await prisma.page.findMany();
  return data;
}

export async function pageData(slug: string) {
  const data = await prisma.page.findUnique({
    where: {
      slug: slug,
    },
  });
  return data;
}

export async function plantsData(slug: string) {
  const data = await prisma.plant.findMany({
    where: {
      genusPageSlug: slug,
    },
    orderBy: {
      slug: "asc",
    },
  });
  return data;
}

export async function genusPagesData() {
  const data = await prisma.genusPage.findMany();
  return data;
}

export async function genusPageData(slug: string) {
  const data = await prisma.genusPage.findUnique({
    where: {
      slug: slug,
    },
  });
  return data;
}
