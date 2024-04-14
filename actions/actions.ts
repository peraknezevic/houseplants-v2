"server only";

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

export async function adminAccess() {
  const { getPermission, isAuthenticated } = getKindeServerSession();
  const isLoggedIn = await isAuthenticated();
  const isAllowed = await getPermission("modify-content");

  if (!isLoggedIn) redirect("/signin");
  if (!isAllowed?.isGranted) {
    return new Error("Not allowed");
  }

  return null;
}
