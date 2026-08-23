"use server";

import {
  articleFormSchema,
  generaFormSchema,
  idSchema,
  pageFormSchema,
  plantFormSchema,
  plantProfileFormSchema,
} from "@/lib/validations";
import {
  getArticleById,
  getGenusPageById,
  getPageById,
  getPlantById,
  getPlantProfileById,
} from "@/lib/data";

import { Prisma } from "@prisma/client";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import prisma from "@/prisma/client";
import { revalidatePath } from "next/cache";

export async function isAuthorized() {
  const { getRoles, isAuthenticated } = getKindeServerSession();

  const isLoggedIn = await isAuthenticated();
  if (!isLoggedIn) return false;

  const roles = await getRoles();

  return !!roles?.some((role) => role.key === "admin");
}

function friendlyMutationError(error: unknown, fallback: string) {
  if (
    error instanceof Prisma.PrismaClientKnownRequestError &&
    error.code === "P2002"
  ) {
    const target = error.meta?.target;
    const fields = Array.isArray(target) ? target.join(", ") : "value";
    return `That ${fields} is already taken`;
  }

  return fallback;
}

// Articles

export async function addArticle(article: unknown) {
  const isAllowed = await isAuthorized();

  if (!isAllowed) return { message: "Not authorized" };

  const validatedArticle = articleFormSchema.safeParse(article);

  if (!validatedArticle.success) return { message: "Invalid article data" };

  try {
    await prisma.article.create({
      data: { ...validatedArticle.data },
    });
  } catch (error) {
    return {
      message: friendlyMutationError(error, "Couldn't add an article"),
    };
  }

  revalidatePath("/articles", "page");
  revalidatePath("/admin/articles", "page");

  return { success: true };
}

export async function editArticle(articleId: unknown, newArticleData: unknown) {
  const isAllowed = await isAuthorized();

  if (!isAllowed) return { message: "Not authorized" };

  const validatedArticleId = idSchema.safeParse(articleId);
  const validatedArticle = articleFormSchema.safeParse(newArticleData);

  if (!validatedArticleId.success || !validatedArticle.success) {
    return {
      message: "Invalid article data",
    };
  }

  const article = await getArticleById(validatedArticleId.data);

  if (!article) {
    return {
      message: "Couldn't find article",
    };
  }

  try {
    await prisma.article.update({
      where: {
        id: validatedArticleId.data,
      },
      data: validatedArticle.data,
    });
  } catch (error) {
    return {
      message: friendlyMutationError(error, "Couldn't edit article"),
    };
  }

  revalidatePath("/articles", "page");
  revalidatePath(`/articles/${article.slug}`, "page");
  if (validatedArticle.data.slug !== article.slug) {
    revalidatePath(`/articles/${validatedArticle.data.slug}`, "page");
  }
  revalidatePath("/admin/articles", "page");

  return { success: true };
}

export async function deleteArticle(articlesId: unknown) {
  const isAllowed = await isAuthorized();

  if (!isAllowed) return { message: "Not authorized" };

  const validatedArticleId = idSchema.safeParse(articlesId);

  if (!validatedArticleId.success) {
    return {
      message: "Invalid article data",
    };
  }

  const article = await getArticleById(validatedArticleId.data);

  if (!article) {
    return {
      message: "Couldn't find articles",
    };
  }

  try {
    await prisma.article.delete({
      where: {
        id: validatedArticleId.data,
      },
    });
  } catch {
    return {
      message: "Couldn't delete article",
    };
  }

  revalidatePath("/articles", "page");
  revalidatePath("/admin/articles", "page");

  return { success: true };
}

// Pages

export async function addPage(page: unknown) {
  const isAllowed = await isAuthorized();

  if (!isAllowed) return { message: "Not authorized" };

  const validatedPage = pageFormSchema.safeParse(page);

  if (!validatedPage.success) return { message: "Invalid page data" };

  try {
    await prisma.page.create({
      data: { ...validatedPage.data },
    });
  } catch (error) {
    return { message: friendlyMutationError(error, "Couldn't add page") };
  }

  revalidatePath("/pages", "page");
  revalidatePath("/admin/pages", "page");

  return { success: true };
}

export async function editPage(pageId: unknown, newPageData: unknown) {
  const isAllowed = await isAuthorized();

  if (!isAllowed) return { message: "Not authorized" };

  const validatedPageId = idSchema.safeParse(pageId);
  const validatedPage = pageFormSchema.safeParse(newPageData);

  if (!validatedPageId.success || !validatedPage.success) {
    return { message: "Invalid page data" };
  }

  const page = await getPageById(validatedPageId.data);

  if (!page) return { message: "Couldn't find page" };

  try {
    await prisma.page.update({
      where: { id: validatedPageId.data },
      data: validatedPage.data,
    });
  } catch (error) {
    return { message: friendlyMutationError(error, "Couldn't edit page") };
  }

  revalidatePath(`/pages/${page.slug}`, "page");
  if (validatedPage.data.slug !== page.slug) {
    revalidatePath(`/pages/${validatedPage.data.slug}`, "page");
  }
  revalidatePath("/admin/pages", "page");

  return { success: true };
}

export async function deletePage(pageId: unknown) {
  const isAllowed = await isAuthorized();

  if (!isAllowed) return { message: "Not authorized" };

  const validatedPageId = idSchema.safeParse(pageId);

  if (!validatedPageId.success) return { message: "Invalid page data" };

  const page = await getPageById(validatedPageId.data);

  if (!page) return { message: "Couldn't find page" };

  try {
    await prisma.page.delete({ where: { id: validatedPageId.data } });
  } catch {
    return { message: "Couldn't delete page" };
  }

  revalidatePath("/admin/pages", "page");

  return { success: true };
}

// Genus pages

export async function addGenusPage(genusPage: unknown) {
  const isAllowed = await isAuthorized();

  if (!isAllowed) return { message: "Not authorized" };

  const validatedGenusPage = generaFormSchema.safeParse(genusPage);

  if (!validatedGenusPage.success) return { message: "Invalid genus page data" };

  try {
    await prisma.genusPage.create({
      data: { ...validatedGenusPage.data },
    });
  } catch (error) {
    return {
      message: friendlyMutationError(error, "Couldn't add genus page"),
    };
  }

  revalidatePath("/genus", "page");
  revalidatePath("/admin/genus", "page");

  return { success: true };
}

export async function editGenusPage(
  genusPageId: unknown,
  newGenusPageData: unknown,
) {
  const isAllowed = await isAuthorized();

  if (!isAllowed) return { message: "Not authorized" };

  const validatedGenusPageId = idSchema.safeParse(genusPageId);
  const validatedGenusPage = generaFormSchema.safeParse(newGenusPageData);

  if (!validatedGenusPageId.success || !validatedGenusPage.success) {
    return { message: "Invalid genus page data" };
  }

  const genusPage = await getGenusPageById(validatedGenusPageId.data);

  if (!genusPage) return { message: "Couldn't find genus page" };

  try {
    await prisma.genusPage.update({
      where: { id: validatedGenusPageId.data },
      data: validatedGenusPage.data,
    });
  } catch (error) {
    return {
      message: friendlyMutationError(error, "Couldn't edit genus page"),
    };
  }

  revalidatePath("/genus", "page");
  revalidatePath(`/genus/${genusPage.slug}`, "page");
  if (validatedGenusPage.data.slug !== genusPage.slug) {
    revalidatePath(`/genus/${validatedGenusPage.data.slug}`, "page");
  }
  revalidatePath("/admin/genus", "page");

  return { success: true };
}

export async function deleteGenusPage(genusPageId: unknown) {
  const isAllowed = await isAuthorized();

  if (!isAllowed) return { message: "Not authorized" };

  const validatedGenusPageId = idSchema.safeParse(genusPageId);

  if (!validatedGenusPageId.success) return { message: "Invalid genus page data" };

  const genusPage = await getGenusPageById(validatedGenusPageId.data);

  if (!genusPage) return { message: "Couldn't find genus page" };

  const relatedPlantsCount = await prisma.plant.count({
    where: { genusPageSlug: genusPage.slug },
  });

  if (relatedPlantsCount > 0) {
    return {
      message: `Can't delete: ${relatedPlantsCount} plant(s) still belong to this genus`,
    };
  }

  try {
    await prisma.genusPage.delete({ where: { id: validatedGenusPageId.data } });
  } catch {
    return { message: "Couldn't delete genus page" };
  }

  revalidatePath("/genus", "page");
  revalidatePath("/admin/genus", "page");

  return { success: true };
}

// Plants

export async function addPlant(plant: unknown) {
  const isAllowed = await isAuthorized();

  if (!isAllowed) return { message: "Not authorized" };

  const validatedPlant = plantFormSchema.safeParse(plant);

  if (!validatedPlant.success) return { message: "Invalid plant data" };

  try {
    await prisma.plant.create({
      data: { ...validatedPlant.data },
    });
  } catch (error) {
    return { message: friendlyMutationError(error, "Couldn't add plant") };
  }

  revalidatePath(`/genus/${validatedPlant.data.genusPageSlug}`, "page");
  revalidatePath("/admin/plants", "page");

  return { success: true };
}

export async function editPlant(plantId: unknown, newPlantData: unknown) {
  const isAllowed = await isAuthorized();

  if (!isAllowed) return { message: "Not authorized" };

  const validatedPlantId = idSchema.safeParse(plantId);
  const validatedPlant = plantFormSchema.safeParse(newPlantData);

  if (!validatedPlantId.success || !validatedPlant.success) {
    return { message: "Invalid plant data" };
  }

  const plant = await getPlantById(validatedPlantId.data);

  if (!plant) return { message: "Couldn't find plant" };

  try {
    await prisma.plant.update({
      where: { id: validatedPlantId.data },
      data: validatedPlant.data,
    });
  } catch (error) {
    return { message: friendlyMutationError(error, "Couldn't edit plant") };
  }

  revalidatePath(`/genus/${plant.genusPageSlug}`, "page");
  if (validatedPlant.data.genusPageSlug !== plant.genusPageSlug) {
    revalidatePath(`/genus/${validatedPlant.data.genusPageSlug}`, "page");
  }
  revalidatePath("/admin/plants", "page");

  return { success: true };
}

export async function deletePlant(plantId: unknown) {
  const isAllowed = await isAuthorized();

  if (!isAllowed) return { message: "Not authorized" };

  const validatedPlantId = idSchema.safeParse(plantId);

  if (!validatedPlantId.success) return { message: "Invalid plant data" };

  const plant = await getPlantById(validatedPlantId.data);

  if (!plant) return { message: "Couldn't find plant" };

  try {
    await prisma.plant.delete({ where: { id: validatedPlantId.data } });
  } catch {
    return { message: "Couldn't delete plant" };
  }

  revalidatePath(`/genus/${plant.genusPageSlug}`, "page");
  revalidatePath("/admin/plants", "page");

  return { success: true };
}

// Plant profiles

export async function addPlantProfile(plantProfile: unknown) {
  const isAllowed = await isAuthorized();

  if (!isAllowed) return { message: "Not authorized" };

  const validatedPlantProfile = plantProfileFormSchema.safeParse(plantProfile);

  if (!validatedPlantProfile.success) {
    return { message: "Invalid plant profile data" };
  }

  try {
    await prisma.plantProfile.create({
      data: { ...validatedPlantProfile.data },
    });
  } catch (error) {
    return {
      message: friendlyMutationError(error, "Couldn't add plant profile"),
    };
  }

  revalidatePath("/plant-profiles", "page");
  revalidatePath("/admin/plant-profiles", "page");

  return { success: true };
}

export async function editPlantProfile(
  plantProfileId: unknown,
  newPlantProfileData: unknown,
) {
  const isAllowed = await isAuthorized();

  if (!isAllowed) return { message: "Not authorized" };

  const validatedPlantProfileId = idSchema.safeParse(plantProfileId);
  const validatedPlantProfile =
    plantProfileFormSchema.safeParse(newPlantProfileData);

  if (!validatedPlantProfileId.success || !validatedPlantProfile.success) {
    return { message: "Invalid plant profile data" };
  }

  const plantProfile = await getPlantProfileById(validatedPlantProfileId.data);

  if (!plantProfile) return { message: "Couldn't find plant profile" };

  try {
    await prisma.plantProfile.update({
      where: { id: validatedPlantProfileId.data },
      data: validatedPlantProfile.data,
    });
  } catch (error) {
    return {
      message: friendlyMutationError(error, "Couldn't edit plant profile"),
    };
  }

  revalidatePath("/plant-profiles", "page");
  revalidatePath(`/plant-profiles/${plantProfile.slug}`, "page");
  if (validatedPlantProfile.data.slug !== plantProfile.slug) {
    revalidatePath(`/plant-profiles/${validatedPlantProfile.data.slug}`, "page");
  }
  revalidatePath("/admin/plant-profiles", "page");

  return { success: true };
}

export async function deletePlantProfile(plantProfileId: unknown) {
  const isAllowed = await isAuthorized();

  if (!isAllowed) return { message: "Not authorized" };

  const validatedPlantProfileId = idSchema.safeParse(plantProfileId);

  if (!validatedPlantProfileId.success) {
    return { message: "Invalid plant profile data" };
  }

  const plantProfile = await getPlantProfileById(validatedPlantProfileId.data);

  if (!plantProfile) return { message: "Couldn't find plant profile" };

  try {
    await prisma.plantProfile.delete({
      where: { id: validatedPlantProfileId.data },
    });
  } catch {
    return { message: "Couldn't delete plant profile" };
  }

  revalidatePath("/plant-profiles", "page");
  revalidatePath("/admin/plant-profiles", "page");

  return { success: true };
}
