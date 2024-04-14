import { DashboardNavItems } from "@/lib/constants";
import DashboardNavLogOut from "./dashboard-nav-logout";
import Link from "next/link";

const DashboardNav = () => {
  return (
    <div className="flex h-full w-full justify-start bg-slate-100 dark:bg-zinc-800">
      <span className="mx-2 p-3 text-2xl font-bold">Admin</span>
      <nav>
        <ul className="flex justify-start gap-6 p-4 font-bold">
          {DashboardNavItems.map((item) => (
            <li key="item.id">
              <Link href={item.url}>{item.title}</Link>
            </li>
          ))}
          <DashboardNavLogOut />
        </ul>
      </nav>
    </div>
  );
};

export default DashboardNav;
