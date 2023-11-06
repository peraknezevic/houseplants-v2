"use client"
import Link from "next/link"

const NavBar = () => {
  const mainNavItems = [
    { title: "Home", url: "/" },
    { title: "Plants", url: "/plants" },
    { title: "Articles", url: "/articles" },
  ]

  return (
    <nav>
      <ul className="navbar gap-4 bg-slate-200 px-4 m-0">
        <h1 className="text-xl">Houseplants</h1>
        {mainNavItems.map((item) => (
          <li key={item.title}>
            <Link href={item.url}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default NavBar
