import DashboardNav from "./DashboardNav"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="bg-white">
      <DashboardNav />
      <main className="p-5 w-full">{children}</main>
    </div>
  )
}
