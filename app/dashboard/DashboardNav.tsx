"use client"
import { useSession } from "next-auth/react"
import Link from "next/link"

const DashboardNav = () => {
  const { status, data: session } = useSession()

  return (
    <div className="flex bg-slate-100 w-full h-full justify-start">
      <h1 className="text-2xl p-3 mx-2 font-bold">Dashboard</h1>
      <nav>
        <ul className="flex justify-start gap-6 p-4 underline font-medium">
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
  )
}

export default DashboardNav
