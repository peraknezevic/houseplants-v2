"use server";

import { Article, GenusPage, Page, Plant, PlantProfile } from "@prisma/client";

import prisma from "@/prisma/client";

// Articles

export const getArticles = async () => await prisma.article.findMany();

export const getPublishedArticles = async () =>
  await prisma.article.findMany({
    where: { published: "PUBLISHED", language: "ENGLISH" },
    select: { id: true, title: true, slug: true },
  });

export const getArticleBySlug = async (slug: Article["slug"]) =>
  await prisma.article.findUnique({ where: { slug } });

export const getArticleById = async (id: Article["id"]) =>
  await prisma.article.findUnique({ where: { id } });

// Genera

export const getGeneras = async () =>
  await prisma.genusPage.findMany({
    select: { id: true, title: true, slug: true },
  });

export const getPublishedGeneras = async () =>
  await prisma.genusPage.findMany({
    where: { published: "PUBLISHED" },
    select: { id: true, title: true, slug: true },
  });

export const getGenusBySlug = async (slug: GenusPage["slug"]) =>
  await prisma.genusPage.findUnique({ where: { slug } });

export const getPlantsByGenusSlug = async (
  genusPageSlug: Plant["genusPageSlug"],
) =>
  await prisma.plant.findMany({
    where: { genusPageSlug },
    orderBy: { genusPageSlug: "asc" },
  });

export const getPlants = async () =>
  await prisma.plant.findMany({
    select: { id: true, title: true, slug: true },
  });

export const getPlantBySlug = async (slug: Plant["slug"]) =>
  await prisma.plant.findUnique({ where: { slug } });

export const getPlantProfiles = async () =>
  await prisma.plantProfile.findMany({
    orderBy: { slug: "asc" },
    select: { id: true, title: true, slug: true },
  });

export const getPublishedPlantProfiles = async () =>
  await prisma.plantProfile.findMany({
    where: { published: "PUBLISHED" },
    orderBy: { slug: "asc" },
    select: { id: true, title: true, slug: true },
  });

export const getPlantProfileBySlug = async (slug: PlantProfile["slug"]) =>
  await prisma.plantProfile.findUnique({ where: { slug } });

export const getPages = async () => await prisma.page.findMany();

export const getPageBySlug = async (slug: Page["slug"]) =>
  await prisma.page.findUnique({ where: { slug: slug } });

// Homepage stuff

const getLatestPlantProfiles = async () =>
  await prisma.plantProfile.findMany({
    where: { published: "PUBLISHED" },
    orderBy: { createdAt: "desc" },
    select: { id: true, title: true, slug: true },
    take: 3,
  });

const getRecentlyUpdatedGeneras = async () =>
  await prisma.genusPage.findMany({
    where: { published: "PUBLISHED" },
    orderBy: { updatedAt: "desc" },
    select: { id: true, title: true, slug: true },
    take: 3,
  });

const getLatestArticles = async () =>
  prisma.article.findMany({
    where: { published: "PUBLISHED", language: "ENGLISH" },
    orderBy: { updatedAt: "desc" },
    select: { id: true, title: true, slug: true },
    take: 3,
  });

export const getHomePageData = async () =>
  await Promise.all([
    getLatestPlantProfiles(),
    getRecentlyUpdatedGeneras(),
    getLatestArticles(),
  ]);

// Genera pages

export const getGenusPageData = async (slug: GenusPage["slug"]) =>
  await Promise.all([getGenusBySlug(slug), getPlantsByGenusSlug(slug)]);
