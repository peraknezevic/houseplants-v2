"use client"
import { useSession } from "next-auth/react"
import Link from "next/link"

const DashboardNav = () => {
  const { status, data: session } = useSession()

  return (
    <nav className="menu bg-slate-100 w-64">
      <ul>
        {status === "authenticated" && (
          <li>
            <Link href="/api/auth/signout">Logout</Link>
          </li>
        )}

        <li className="menu-title uppercase">Plants</li>
        <li>
          <Link href="/dashboard/plants/new">New Plant</Link>
        </li>
        <li>
          <Link href="/dashboard/plants">All Plants</Link>
        </li>
        <li className="menu-title uppercase">Plant Profiles</li>
        <li>
          <Link href="/dashboard/plant-profiles/new">New Plant Profile</Link>
        </li>
        <li>
          <Link href="/dashboard/plant-profiles">All Plant Profiles</Link>
        </li>
        <li className="menu-title uppercase">Genera</li>
        <li>
          <Link href="/dashboard/genera/new">New Genus</Link>
        </li>
        <li>
          <Link href="/dashboard/genera">All Genera</Link>
        </li>
        <li className="menu-title uppercase">Articles</li>
        <li>
          <Link href="/dashboard/articles/new">New Article</Link>
        </li>
        <li>
          <Link href="/dashboard/articles">All Articles</Link>
        </li>
        <li className="menu-title uppercase">Pages</li>
        <li>
          <Link href="/dashboard/pages/new">New Page</Link>
        </li>
        <li>
          <Link href="/dashboard/pages">All Pages</Link>
        </li>
      </ul>
    </nav>
  )
}

export default DashboardNav
