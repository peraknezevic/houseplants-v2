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
    <header className="mt-4">
      <div className="my-8 text-center text-4xl font-extrabold uppercase md:my-12 md:text-6xl lg:my-16 lg:text-8xl">
        Houseplants
      </div>
      <nav>
        <ul className="m-4 flex justify-center gap-6 md:m-8 md:gap-8 md:text-2xl">
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
