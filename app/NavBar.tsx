"use client"
import Link from "next/link"

const NavBar = () => {
  const mainNavItems = [
    { title: "Home", url: "/" },
    { title: "Genera", url: "/genus" },
    { title: "Plant Profiles", url: "/plant-profiles" },
    { title: "Articles", url: "/articles" },
  ]

  return (
    <header className="py-4">
      <h1 className="text-8xl font-bold mx-5 my-8 text-center uppercase">
        Houseplants
      </h1>
      <nav>
        <ul className="text-2xl flex gap-8 px-4 m-4 justify-center underline underline-offset-8">
          {mainNavItems.map((item) => (
            <li key={item.title}>
              <Link href={item.url}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default NavBar
