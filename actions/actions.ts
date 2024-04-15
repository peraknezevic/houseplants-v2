"server only";

import {
  TPageForm,
  articleSchema,
  generaSchema,
  pageSchema,
  plantProfileSchema,
  plantSchema,
} from "@/lib/validations";

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export async function isLoggedIn() {
  const { isAuthenticated } = await getKindeServerSession();
  return isAuthenticated;
}

export function deleteItem(cat: string, slug: string) {
  console.log(`Item ${slug} ${cat} deleted`);
}

export function getSchema(category: string) {
  switch (category) {
    case "articles": {
      return articleSchema;
    }
    case "plants": {
      return plantSchema;
    }
    case "genera": {
      return generaSchema;
    }
    case "plant-profiles": {
      return plantProfileSchema;
    }
    default: {
      return pageSchema;
    }
  }
}
