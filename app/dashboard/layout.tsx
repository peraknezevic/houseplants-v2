import DashboardNav from "@/components/dashboard-nav";
import { TNode } from "@/lib/types";

export default async function DashboardLayout({ children }: TNode) {
  return (
    <div className="bg-gray-50 dark:bg-zinc-900">
      <DashboardNav />
      <main className="w-full p-5">{children}</main>
    </div>
  );
}
