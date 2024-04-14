import {
  LogoutLink,
  getKindeServerSession,
} from "@kinde-oss/kinde-auth-nextjs/server";

import { AdminNavbar } from "@/components/admin/admin-navbar";
import { TNode } from "@/lib/types";
import { redirect } from "next/navigation";

export default async function DashboardLayout({ children }: TNode) {
  const { getPermission, isAuthenticated } = getKindeServerSession();

  const isLoggedIn = await isAuthenticated();
  const isAllowed = await getPermission("modify-content");

  if (!isLoggedIn) redirect("/signin");
  if (!isAllowed?.isGranted)
    return (
      <div className="flex h-full w-full flex-col items-center justify-center gap-y-4">
        <p className="text-center font-medium">No permission to edit content</p>
        <LogoutLink>Log out</LogoutLink>
      </div>
    );
  return (
    <div className="bg-gray-50 dark:bg-zinc-900">
      <AdminNavbar />
      <main className="w-full p-5">{children}</main>
    </div>
  );
}
