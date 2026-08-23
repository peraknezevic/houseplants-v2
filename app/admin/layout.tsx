import { LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";

import AdminNav from "@/components/admin/admin-nav";
import Link from "next/link";
import type { Metadata } from "next";
import { Toaster } from "@/components/ui/sonner";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { isAuthorized } from "@/lib/actions";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

const AdminLayout = async ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated, getUser } = getKindeServerSession();

  const isLoggedIn = await isAuthenticated();

  if (!isLoggedIn) {
    return (
      <div className="flex flex-col items-center justify-center gap-4 py-24 text-center font-sans">
        <p className="text-lg">Sign in to access the admin area.</p>
        <LoginLink
          postLoginRedirectURL="/admin"
          className="underline underline-offset-4 hover:no-underline"
        >
          Sign in
        </LoginLink>
      </div>
    );
  }

  const isAdmin = await isAuthorized();

  if (!isAdmin) {
    return (
      <div className="flex flex-col items-center justify-center gap-4 py-24 text-center font-sans">
        <p className="text-lg">
          Your account doesn&apos;t have permission to access the admin area.
        </p>
        <LogoutLink className="underline underline-offset-4 hover:no-underline">
          Sign out
        </LogoutLink>
      </div>
    );
  }

  const user = await getUser();

  return (
    <div className="font-sans">
      <div className="mb-8 flex items-center justify-between border-b border-emerald-950/10 pb-4 dark:border-zinc-300/10">
        <div>
          <p className="text-sm opacity-70">Signed in as</p>
          <p className="font-medium">{user?.email}</p>
        </div>
        <div className="flex gap-4">
          <Link
            href="/"
            className="underline underline-offset-4 hover:no-underline"
          >
            Back to site
          </Link>
          <LogoutLink className="underline underline-offset-4 hover:no-underline">
            Sign out
          </LogoutLink>
        </div>
      </div>
      <AdminNav />
      {children}
      <Toaster />
    </div>
  );
};

export default AdminLayout;
