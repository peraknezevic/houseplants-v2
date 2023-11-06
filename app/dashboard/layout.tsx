import DashboardNav from "./DashboardNav"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <DashboardNav />
      <main className="p-5 w-full">{children}</main>
    </div>
  )
}
