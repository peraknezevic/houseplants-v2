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
      <ul>
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
