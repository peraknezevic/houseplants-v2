"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const navItems = [
  { title: "Dashboard", href: "/admin" },
  { title: "Articles", href: "/admin/articles" },
  { title: "Pages", href: "/admin/pages" },
  { title: "Genus pages", href: "/admin/genus" },
  { title: "Plants", href: "/admin/plants" },
  { title: "Plant profiles", href: "/admin/plant-profiles" },
];

const AdminNav = () => {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Admin"
      className="mb-8 flex flex-wrap gap-x-6 gap-y-2 border-b border-emerald-950/10 pb-4 dark:border-zinc-300/10"
    >
      {navItems.map((item) => {
        const isActive =
          item.href === "/admin"
            ? pathname === "/admin"
            : pathname.startsWith(item.href);

        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={isActive ? "page" : undefined}
            className={cn(
              "text-sm underline-offset-4 hover:underline",
              isActive ? "font-medium underline" : "opacity-70",
            )}
          >
            {item.title}
          </Link>
        );
      })}
    </nav>
  );
};

export default AdminNav;
