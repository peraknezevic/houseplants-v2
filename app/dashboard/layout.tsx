import DashboardNav from "./DashboardNav"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex">
      <DashboardNav />
      <main className="p-5">{children}</main>
    </div>
  )
}
