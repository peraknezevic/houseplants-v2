"use client";

import Link from "next/link";
import { useSession } from "next-auth/react";

export default function DashboardNavLogOut() {
  const { status } = useSession();
  return (
    <>
      {status === "authenticated" && (
        <li>
          <Link href="/api/auth/signout">Logout</Link>
        </li>
      )}
    </>
  );
}
