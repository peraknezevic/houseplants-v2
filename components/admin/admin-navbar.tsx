import Link from "next/link";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { adminNavItems } from "@/lib/constants";

export const AdminNavbar = () => {
  return (
    <div className="flex h-full w-full justify-start bg-slate-100 dark:bg-zinc-800">
      <span className="mx-2 p-3 text-2xl font-bold">Admin</span>
      <nav>
        <ul className="flex justify-start gap-6 p-4 font-bold">
          {adminNavItems.map((item) => (
            <li key="item.id">
              <Link href={item.url}>{item.title}</Link>
            </li>
          ))}
          <li>
            <LogoutLink>Log out</LogoutLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};
