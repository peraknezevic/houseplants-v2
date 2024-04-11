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

export async function plantData(slug: string) {
  const data = await prisma.plant.findUnique({
    where: {
      slug: slug,
    },
  });
  return data;
}

export async function genusPagesData() {
  const data = await prisma.genusPage.findMany({
    where: {
      published: "PUBLISHED",
    },
  });
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
