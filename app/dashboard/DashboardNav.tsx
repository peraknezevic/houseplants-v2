"use client"
import { useSession } from "next-auth/react"
import Link from "next/link"

const DashboardNav = () => {
  const { status, data: session } = useSession()

  return (
    <nav>
      {status === "loading" && <div>Loading...</div>}
      {status === "authenticated" && (
        <div>
          {session.user!.name}
          <Link href="/api/auth/signout">Sign out</Link>
        </div>
      )}
      {status === "unauthenticated" && (
        <Link href="/api/auth/signin">Sign in</Link>
      )}
    </nav>
  )
}

export default DashboardNav
