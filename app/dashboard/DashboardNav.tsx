"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";

const DashboardNav = () => {
  const { status } = useSession();

  const navItems = [
    { id: 1, url: "/dashboard/plants", title: "Plants" },
    { id: 2, url: "/dashboard/plant-profiles", title: "Plant Profiles" },
    { id: 3, url: "/dashboard/genera", title: "Genera" },
    { id: 4, url: "/dashboard/articles", title: "Articles" },
    { id: 5, url: "/dashboard/pages", title: "Pages" },
  ];

  return (
    <div className="flex h-full w-full justify-start bg-slate-100 dark:bg-zinc-800">
      <span className="mx-2 p-3 text-2xl font-bold">Admin</span>
      <nav>
        <ul className="flex justify-start gap-6 p-4 font-bold">
          {navItems.map((item) => (
            <li key="item.id">
              <Link href={item.url}>{item.title}</Link>
            </li>
          ))}
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
