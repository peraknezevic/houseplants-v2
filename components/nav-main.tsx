"use client";

import Link from "next/link";
import { mainNavItems } from "@/lib/constants";
import { usePathname } from "next/navigation";

const NavMain = () => {
  const pathname = usePathname();

  return (
    <nav aria-label="Main">
      <ul className="m-4 flex justify-center gap-6 font-sans font-light md:m-8 md:gap-8 md:text-2xl">
        {mainNavItems.map((item) => {
          const isCurrent =
            item.url === "/"
              ? pathname === "/"
              : pathname === item.url || pathname.startsWith(`${item.url}/`);

          return (
            <li key={item.id}>
              <Link
                href={item.url}
                aria-current={isCurrent ? "page" : undefined}
                className={`tracking-wide decoration-2 underline-offset-8 transition-all hover:underline ${
                  isCurrent ? "font-normal underline" : ""
                }`}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavMain;
