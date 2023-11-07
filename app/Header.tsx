"use client";
import Link from "next/link";

const Header = () => {
  const mainNavItems = [
    { title: "Home", url: "/" },
    { title: "Genera", url: "/genus" },
    { title: "Plant Profiles", url: "/plant-profiles" },
    { title: "Articles", url: "/articles" },
  ];

  return (
    <header className="py-4">
      <h1 className="mx-5 my-16 text-center text-8xl font-extrabold uppercase">
        Houseplants
      </h1>
      <nav>
        <ul className="m-4 flex justify-center gap-8 px-4 text-2xl">
          {mainNavItems.map((item) => (
            <li key={item.title}>
              <Link href={item.url} className="underline-offset-8">
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
