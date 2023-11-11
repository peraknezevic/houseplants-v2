"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";

const DashboardNav = () => {
  const { status, data: session } = useSession();

  return (
    <div className="flex h-full w-full justify-start bg-slate-100">
      <span className="mx-2 p-3 text-2xl font-bold">Admin</span>
      <nav>
        <ul className="flex justify-start gap-6 p-4 font-bold">
          <li>
            <Link href="/dashboard/plants">Plants</Link>
          </li>
          <li>
            <Link href="/dashboard/plant-profiles">Plant Profiles</Link>
          </li>
          <li>
            <Link href="/dashboard/genera">Genera</Link>
          </li>
          <li>
            <Link href="/dashboard/articles">Articles</Link>
          </li>
          <li>
            <Link href="/dashboard/pages">Pages</Link>
          </li>
          {status === "authenticated" && (
            <li>
              <Link href="/api/auth/signout">Logout</Link>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default DashboardNav;
