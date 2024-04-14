"server only";

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export async function isLoggedIn() {
  const { isAuthenticated } = await getKindeServerSession();
  return isAuthenticated;
}

export function deleteItem(cat: string, slug: string) {
  console.log(`Item ${slug} ${cat} deleted`);
}
