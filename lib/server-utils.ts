import "server-only";

import { Article, GenusPage, Page, Plant, PlantProfile } from "@prisma/client";

import { cache } from "react";
import prisma from "@/prisma/client";

export const getArticles = cache(async () => {
  const data = await prisma.article.findMany();
  return data;
});

export const getArticleBySlug = cache(async (slug: Article["slug"]) => {
  const data = await prisma.article.findUnique({
    where: {
      slug,
    },
  });
  return data;
});

export const getGeneras = cache(async () => {
  const data = await prisma.genusPage.findMany({
    where: {
      published: "PUBLISHED",
    },
  });
  return data;
});

export const getGenusBySlug = cache(async (slug: GenusPage["slug"]) => {
  const data = await prisma.genusPage.findUnique({
    where: {
      slug,
    },
  });
  return data;
});

export const getPlantsByGenusSlug = cache(
  async (genusPageSlug: Plant["genusPageSlug"]) => {
    const data = await prisma.plant.findMany({
      where: {
        genusPageSlug,
      },
      orderBy: {
        genusPageSlug: "asc",
      },
    });
    return data;
  },
);

export const getPlantBySlug = cache(async (slug: Plant["slug"]) => {
  const data = await prisma.plant.findUnique({
    where: {
      slug,
    },
  });
  return data;
});

export const getPlantProfiles = cache(async () => {
  const data = await prisma.plantProfile.findMany({
    orderBy: {
      slug: "asc",
    },
  });
  return data;
});

export const getPlantProfileBySlug = cache(
  async (slug: PlantProfile["slug"]) => {
    const data = await prisma.plantProfile.findUnique({
      where: {
        slug,
      },
    });
    return data;
  },
);

export const getPageBySlug = cache(async (slug: Page["slug"]) => {
  const data = await prisma.page.findUnique({
    where: {
      slug: slug,
    },
  });
  return data;
});
