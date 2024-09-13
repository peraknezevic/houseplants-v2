"server only";

import { articleFormSchema, idSchema } from "@/lib/validations";

import { ArticleEssentials } from "@/lib/types";
import { getArticleById } from "@/lib/server-utils";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import prisma from "@/prisma/client";
import { revalidatePath } from "next/cache";

export async function isAuthorized() {
  const { getPermission, isAuthenticated } = getKindeServerSession();

  const isLoggedIn = await isAuthenticated();
  const isAllowed = await getPermission("modify-content");

  return !isLoggedIn && !isAllowed?.isGranted ? true : false;
}

export async function addArticle(article: unknown) {
  // const isAllowed = await isAuthorized();

  // if (!isAllowed) return { message: "Not authorized" };

  // const validatedArticle = articleFormSchema.safeParse(article);

  // if (!validatedArticle.success) return { message: "Invalid article data" };

  // try {
  //   await prisma.article.create({
  //     data: { ...validatedArticle.data },
  //   });
  // } catch (error) {
  //   return {
  //     message: "Couldn't add an article",
  //   };
  // }

  // revalidatePath("/articles", "page");
  console.log(article);
}

export async function editArticle(articleId: unknown, newArticleData: unknown) {
  // const validatedArticleId = idSchema.safeParse(articleId);
  // const validatedArticle = articleFormSchema.safeParse(newArticleData);

  // const isAllowed = await isAuthorized();

  // if (!isAllowed) return { message: "Not authorized" };

  // if (!validatedArticleId.success || !validatedArticle.success) {
  //   return {
  //     message: "Invalid article data",
  //   };
  // }

  // const article = await getArticleById(validatedArticleId.data);

  // if (!article) {
  //   return {
  //     message: "Couldn't find article",
  //   };
  // }

  // try {
  //   await prisma.article.update({
  //     where: {
  //       id: validatedArticleId.data,
  //     },
  //     data: validatedArticle.data,
  //   });
  // } catch (error) {
  //   return {
  //     message: "Couldn't edit article",
  //   };
  // }

  // revalidatePath("/articles", "page");
  console.log(newArticleData);
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
  } catch (error) {
    return {
      message: "Couldn't delete article",
    };
  }

  revalidatePath("/articles", "page");
}
