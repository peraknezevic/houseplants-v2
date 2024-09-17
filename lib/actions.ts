"use server";

import { Article, Page, PlantProfile } from "@prisma/client";
import { articleFields, pageFields, plantProfileFields } from "./constants";
import { articleFormSchema, articleSchema, pageFormSchema, pageSchema, plantProfileFormSchema, plantProfileSchema } from "./validations";

import prisma from "@/prisma/client";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { z } from "zod";

// export async function isAuthorized() {
//   const { getPermission, isAuthenticated } = getKindeServerSession();

//   const isLoggedIn = await isAuthenticated();
//   const isAllowed = await getPermission("modify-content");

//   return !isLoggedIn && !isAllowed?.isGranted ? true : false;
// }

export const createPage = async (
  previousState: z.infer<typeof pageFormSchema>,
  formData: FormData,
) => {
  let success = false
  const slug = formData.get("slug") as Page["slug"]
  const data: {[key: string]: string;} = {}

  pageFields.forEach(field => data[field.name] = formData.get(field.name) as string )

  const validation = pageFormSchema.safeParse(data);

  if (!validation.success) return { errors: validation.error.issues }

  try {
    const exists = await prisma.page.findUnique({ where: { slug } })
    if (exists) throw new Error("Page with slug already exists")

    await prisma.page.create({
      data,
    });

    revalidatePath("/admin/pages");

    success = true
    
  } catch (error) {
    console.log(error)
  }
  if (success) redirect("/admin/pages")
};
export const updatePage = async (
  previousState: z.infer<typeof pageSchema>,
  formData: FormData,
) => {
  let success = false
  const id = formData.get("id") as Page["id"];
  const data: {[key: string]: string | number; } = {}

  pageFields.forEach(field => data[field.name] = formData.get(field.name) as string)

  const validation = pageFormSchema.safeParse(data);

  if (!validation.success) return { errors: validation.error.issues };

  try {
    await prisma.page.update({
      where: { id },
      data
    });

    revalidatePath("/admin/pages");
    success = true
  } catch (error) {
    console.log(error);
  }
  if (success) redirect("/admin/pages")
};

export const createArticle = async (
  previousState: z.infer<typeof articleFormSchema>,
  formData: FormData,
) => {
  let success = false
  const slug = formData.get("slug") as Article["slug"];

  const data: {[key: string]: string;} = {}

  articleFields.forEach(field => {
     data[field.name] = formData.get(field.name) as string 
  })

  const validation = articleFormSchema.safeParse(data);

  if (!validation.success) return { errors: validation.error.issues };

  try {
    const exists = await prisma.article.findUnique({
      where: {
        slug,
      },
    });
  
    if (exists) throw new Error("Article with this slug already exists");

    await prisma.article.create({
      data,
    });

    revalidatePath("/articles");
    revalidatePath("/admin/articles");

    success = true
  } catch (error) {
    console.log(error);
  }

  if (success) redirect("/admin/articles");
};

export const updateArticle = async (
  previousState: z.infer<typeof articleSchema>,
  formData: FormData,
) => {
  let success = false
  const id = formData.get("id") as Article["id"]
  const data: {[key: string]: string;} = {}

  articleFields.forEach(field => {
     data[field.name] = formData.get(field.name) as string 
  })

  const validation = articleFormSchema.safeParse(data)

  if (!validation.success) return { errors: validation.error.issues }

  try {
    await prisma.article.update({
      where: { id },
      data
    });
    revalidatePath("/admin/articles");
    revalidatePath("/articles");
    success = true 
  } catch (error) {
    console.log(error);
  }
  
  if (success) redirect("/admin/articles");

};

export const createPlantProfile = async (
  previousState: z.infer<typeof plantProfileSchema>,
  formData: FormData,
) => {
  let success = false
  const slug = formData.get("slug") as PlantProfile["slug"];
  const data: {[key: string]: string | number; } = {}

  plantProfileFields.forEach(field => {
    if (field.type === "number") { data[field.name] = Number(formData.get(field.name))}
    else { data[field.name] = formData.get(field.name) as string }
  })
  
  const validation = plantProfileFormSchema.safeParse(data);

  if (!validation.success) return { errors: validation.error.issues };

  try {
    const exists = await prisma.plantProfile.findUnique({
      where: {
        slug
      },
    });
  
    if (exists) throw new Error("Article with this slug already exists");

    await prisma.plantProfile.create({ data });

    revalidatePath("/");
    revalidatePath("/plant-profiles");
    revalidatePath("/admin/plant-profiles");
    success = true
  } catch (error) {
    console.log(error);
  } 

  if (success) redirect("/admin/plant-profiles");
};

export const updatePlantProfile = async (
  previousState: z.infer<typeof plantProfileSchema>,
  formData: FormData,
) => {
  let success = false
  const id = formData.get("id") as Article["id"];
  const data: {[key: string]: string | number; } = {}

  plantProfileFields.forEach(field => {
    if (field.type === "number") { data[field.name] = Number(formData.get(field.name))}
    else { data[field.name] = formData.get(field.name) as string }
  })

  const validation = plantProfileFormSchema.safeParse(data);

  if (!validation.success) return { errors: validation.error.issues };

  try {
    await prisma.plantProfile.update({
      where: { id },
      data
    });
    revalidatePath("/");
    revalidatePath("/plant-profiles");
    revalidatePath("/admin/plant-profiles");
    success = true 
  } catch (error) {
    console.log(error);
  }
  
  if (success) redirect("/admin/plant-profiles");
};

// function getKindeServerSession(): { getPermission: any; isAuthenticated: any } {
//   throw new Error("Function not implemented.");
// }
// export async function addArticle(article: unknown) {
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
// console.log(article);
// }

// export async function editArticle(articleId: unknown, newArticleData: unknown) {
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
// console.log(newArticleData);
// }

// export async function deleteArticle(articlesId: unknown) {
//   const isAllowed = await isAuthorized();

//   if (!isAllowed) return { message: "Not authorized" };

//   const validatedArticleId = idSchema.safeParse(articlesId);

//   if (!validatedArticleId.success) {
//     return {
//       message: "Invalid article data",
//     };
//   }

//   const article = await getArticleById(validatedArticleId.data);

//   if (!article) {
//     return {
//       message: "Couldn't find articles",
//     };
//   }

//   try {
//     await prisma.article.delete({
//       where: {
//         id: validatedArticleId.data,
//       },
//     });
//   } catch (error) {
//     return {
//       message: "Couldn't delete article",
//     };
//   }

//   revalidatePath("/articles", "page");
// }
// function getKindeServerSession(): { getPermission: any; isAuthenticated: any } {
//   throw new Error("Function not implemented.");
// }
