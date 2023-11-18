import DashboardNav from "./DashboardNav";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-gray-50 dark:bg-zinc-900">
      <DashboardNav />
      <main className="w-full p-5">{children}</main>
    </div>
  );
}
